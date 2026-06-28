// Автопостинг анонсов статей в VC.ru (Osnova) — имитация живого человека.
// 1 пост за раз, следующий — через случайные 1–30 минут, только в дневные часы,
// без повторов (состояние в tools/vc-posted.json). Постит ЧЕРНОВИКАМИ.
//
// Action запускается каждые 5 минут (минимум GitHub), а скрипт сам решает по
// таймеру nextAt: «пора» или «рано». Из-за гранулярности крона фактический
// минимальный интервал ~5 мин, но разброс случайный и выглядит органично.
//
// Авторизация: JWT (5 мин) добывается через POST /v3.4/auth/refresh по
// auth-refresh-remember; держит сессию стабильный osnova-remember (~60 дней).
//
// env: VC_AUTH_REFRESH, VC_OSNOVA_REMEMBER, VC_SUBSITE_ID (+ опц. VC_MIN_MIN,
//      VC_MAX_MIN, VC_HOUR_FROM, VC_HOUR_TO — час по МСК)

const fs = require('fs');
const path = require('path');
const ALL = require('./blog-data.js');

const SITE = 'https://chimitdorzhi.tech';
const API = 'https://api.vc.ru';
const STATE_FILE = path.join(__dirname, 'vc-posted.json');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36';

const REMEMBER = process.env.VC_OSNOVA_REMEMBER || '';
let   REFRESH  = process.env.VC_AUTH_REFRESH || '';
const SUBSITE  = process.env.VC_SUBSITE_ID || '';
let   JWT      = (process.env.VC_JWT || '').replace(/^Bearer\s+/i, '').trim();

const MIN_GAP  = Number(process.env.VC_MIN_MIN  || 1);   // минимум минут между постами
const MAX_GAP  = Number(process.env.VC_MAX_MIN  || 30);  // максимум минут
const HOUR_FROM = Number(process.env.VC_HOUR_FROM || 8);  // активные часы по МСК
const HOUR_TO   = Number(process.env.VC_HOUR_TO   || 23);

function log(...a) { console.log('[vc-poster]', ...a); }
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

if (!SUBSITE || (!REFRESH && !JWT)) { log('Нет секретов — пропускаю.'); process.exit(0); }

function loadState() { try { return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8')); } catch { return { posted: [] }; } }
function saveState(s) { fs.writeFileSync(STATE_FILE, JSON.stringify(s, null, 2) + '\n', 'utf8'); }

function cookieHeader() {
  const p = [];
  if (REMEMBER) p.push(`osnova-remember=${REMEMBER}`);
  if (REFRESH)  p.push(`auth-refresh-remember=${REFRESH}`);
  return p.join('; ');
}
function authHeaders() {
  const h = { 'Origin': 'https://vc.ru', 'Referer': 'https://vc.ru/', 'User-Agent': UA, 'Accept': '*/*' };
  const ck = cookieHeader(); if (ck) h['Cookie'] = ck;
  if (JWT) h['Jwtauthorization'] = `Bearer ${JWT}`;
  return h;
}

async function refreshAuth() {
  const fd = new FormData();
  if (REFRESH) fd.set('token', REFRESH);
  const res = await fetch(`${API}/v3.4/auth/refresh`, {
    method: 'POST',
    headers: { 'Origin': 'https://vc.ru', 'Referer': 'https://vc.ru/', 'User-Agent': UA, 'Accept': '*/*', 'Cookie': cookieHeader() },
    body: fd,
  });
  const txt = await res.text().catch(() => '');
  let jwt = '', newRefresh = null;
  try {
    const j = JSON.parse(txt);
    jwt = (j && j.data && (j.data.accessToken || j.data.access_token) || '').replace(/^Bearer\s+/i, '').trim();
    newRefresh = (j && j.data && (j.data.refreshToken || j.data.refresh_token)) || null;
  } catch { /* not json */ }
  return { status: res.status, jwt, newRefresh };
}

function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

async function uploadCover(coverUrl) {
  try {
    const fd = new FormData();
    fd.set('url', coverUrl);
    const res = await fetch(`${API}/v2.8/uploader/extract`, { method: 'POST', headers: authHeaders(), body: fd });
    if (res.status < 200 || res.status >= 300) return null;
    const j = JSON.parse(await res.text());
    return (j.result && (Array.isArray(j.result) ? j.result[0] : j.result)) || null;
  } catch { return null; }
}

function entryPayload(a, image) {
  const desc = (a.excerpt || a.metaDescription || '').trim();
  const url = `${SITE}/blog/${a.slug}/`;
  const html = `<p>${esc(desc)}</p><p>Читать статью полностью: <a href="${url}">${url}</a></p>`;
  const blocks = [];
  if (image) blocks.push({ type: 'media', cover: false, hidden: false, anchor: '', data: { items: [{ title: '', image }] } });
  blocks.push({ type: 'text', cover: false, hidden: false, anchor: '', data: { text: html } });
  return {
    id: 0, user_id: Number(SUBSITE), type: 1, subsite_id: Number(SUBSITE), title: a.title,
    entry: { blocks }, external_access_link: '', path: '',
    is_editorial: false, is_advertisement: false, is_enabled_comments: true, is_enabled_likes: true,
    withheld: false, is_enabled_ad: true, is_holdonflash: false, forced_to_mainpage: 0,
    is_holdonmain: false, is_published: false, is_adult: false, repostId: null, repostData: null,
  };
}

async function createDraft(a) {
  const image = await uploadCover(`${SITE}/blog/${a.slug}/cover.png`);
  const fd = new FormData();
  fd.set('entry', JSON.stringify(entryPayload(a, image)));
  const res = await fetch(`${API}/v2.1/editor`, { method: 'POST', headers: authHeaders(), body: fd });
  return { status: res.status, body: await res.text(), withCover: !!image };
}

function nextGapMin() { return Math.round((MIN_GAP + Math.random() * (MAX_GAP - MIN_GAP)) * 100) / 100; }

(async () => {
  if (typeof fetch !== 'function') { log('Нужен Node 18+.'); process.exit(1); }

  const state = loadState();
  const posted = new Set(state.posted || []);
  const now = Date.now();

  // 1) Таймер: рано?
  if (state.nextAt && now < new Date(state.nextAt).getTime()) {
    const left = Math.round((new Date(state.nextAt).getTime() - now) / 60000);
    log(`Ещё рано: следующий пост через ~${left} мин (${state.nextAt}). Пропускаю.`);
    return;
  }

  // 2) Дневные часы (МСК)? Ночью молчим, как человек.
  const mskHour = (new Date(now).getUTCHours() + 3) % 24;
  if (mskHour < HOUR_FROM || mskHour >= HOUR_TO) {
    log(`Сейчас ~${mskHour}:00 МСК — вне активных часов (${HOUR_FROM}–${HOUR_TO}). Не постим.`);
    return;
  }

  // 3) Берём 1 новую статью (новые сначала)
  const published = ALL.filter(a => a && a.published === true && a.slug)
    .sort((x, y) => String(y.datePublished).localeCompare(String(x.datePublished)));
  const article = published.find(a => !posted.has(a.slug));
  if (!article) { log('Новых статей для постинга нет — всё уже в VC.'); return; }

  // 4) Авторизация
  if (REFRESH) {
    const rf = await refreshAuth();
    if (rf.jwt) JWT = rf.jwt;
    if (rf.newRefresh) REFRESH = rf.newRefresh;
    log(`refresh → ${rf.status} | JWT: ${rf.jwt ? 'ok' : 'НЕТ'}`);
    if (!rf.jwt) { log('Не удалось получить JWT — секреты протухли, обнови osnova-remember/auth-refresh.'); process.exit(1); }
  }
  const me = await fetch(`${API}/v2.1/subsite/me`, { headers: authHeaders() });
  if (me.status !== 200) { log('Авторизация не прошла:', (await me.text()).slice(0, 150)); process.exit(1); }

  // 5) Постим 1 черновик
  const r = await createDraft(article);
  log(`Пост: ${article.slug} → ${r.status} (обложка: ${r.withCover ? 'да' : 'нет'})`);

  if (r.status >= 200 && r.status < 300) {
    posted.add(article.slug);
    const gap = nextGapMin();
    state.posted = [...posted];
    state.nextAt = new Date(now + gap * 60000).toISOString();
    state.lastPostedAt = new Date(now).toISOString();
    saveState(state);
    log(`OK. Опубликовано всего: ${state.posted.length}. Следующий — через ~${gap} мин (${state.nextAt}).`);
  } else {
    // ошибка — отложим на 30–60 мин, чтобы не долбить
    const back = 30 + Math.floor(Math.random() * 30);
    state.nextAt = new Date(now + back * 60000).toISOString();
    saveState(state);
    log(`Ошибка постинга: ${r.body.slice(0, 200)}. Повтор через ~${back} мин.`);
  }
})();
