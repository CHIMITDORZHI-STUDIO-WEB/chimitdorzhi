// Автопостинг анонсов статей в VC.ru (Osnova) — ТИЗЕР + ссылка на оригинал.
// Безопасность: токены ТОЛЬКО из env (GitHub Secrets), в коде их нет.
// Постит ЧЕРНОВИКАМИ, 1 статью за запуск.
//
// Авторизация VC: JWT живёт 5 минут, добывается через POST /v3.4/auth/refresh
// по refresh-токену (auth-refresh-remember). VC РОТИРУЕТ refresh при каждом
// обновлении (старый умирает) — новый возвращается в Set-Cookie. Скрипт
// выводит новый refresh, чтобы Action обновил секрет VC_AUTH_REFRESH.
//
// env: VC_AUTH_REFRESH (обязателен), VC_OSNOVA_REMEMBER, VC_SUBSITE_ID, [VC_JWT]

const fs = require('fs');
const path = require('path');
const ALL = require('./blog-data.js');

const SITE = 'https://chimitdorzhi.tech';
const API = 'https://api.vc.ru';
const STATE_FILE = path.join(__dirname, 'vc-posted.json');
const PER_RUN = 1;
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36';

const REMEMBER = process.env.VC_OSNOVA_REMEMBER || '';
let   REFRESH  = process.env.VC_AUTH_REFRESH || '';
const SUBSITE  = process.env.VC_SUBSITE_ID || '';
let   JWT      = (process.env.VC_JWT || '').replace(/^Bearer\s+/i, '').trim();

function log(...a) { console.log('[vc-poster]', ...a); }

if (!SUBSITE || (!REFRESH && !JWT)) {
  log('Нет VC_SUBSITE_ID и (VC_AUTH_REFRESH или VC_JWT) — пропускаю (секреты не заданы).');
  process.exit(0);
}

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
  const ck = cookieHeader();
  if (ck) h['Cookie'] = ck;
  if (JWT) h['Jwtauthorization'] = `Bearer ${JWT}`;
  return h;
}

// Обновить JWT по refresh-токену. Возвращает {jwt, newRefresh}.
async function refreshAuth() {
  const fd = new FormData();
  if (REFRESH) fd.set('token', REFRESH);
  const res = await fetch(`${API}/v3.4/auth/refresh`, {
    method: 'POST',
    headers: { 'Origin': 'https://vc.ru', 'Referer': 'https://vc.ru/', 'User-Agent': UA, 'Accept': '*/*', 'Cookie': cookieHeader() },
    body: fd,
  });
  const bodyTxt = await res.text().catch(() => '');
  let jwt = '', newRefresh = null;
  try {
    const j = JSON.parse(bodyTxt);
    jwt = (j && j.data && (j.data.accessToken || j.data.access_token) || '').replace(/^Bearer\s+/i, '').trim();
    newRefresh = (j && j.data && (j.data.refreshToken || j.data.refresh_token)) || null;
  } catch { /* not json */ }
  if (!jwt) jwt = (res.headers.get('jwtauthorization') || res.headers.get('authorization') || '').replace(/^Bearer\s+/i, '').trim();
  if (!newRefresh) {
    const sc = typeof res.headers.getSetCookie === 'function' ? res.headers.getSetCookie().join('; ') : (res.headers.get('set-cookie') || '');
    const m = /auth-refresh-remember=([^;]+)/.exec(sc);
    if (m) newRefresh = m[1];
  }
  return { status: res.status, jwt, newRefresh, body: bodyTxt };
}

function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

// Тело поста: анонс + ссылка на оригинал (блоки Osnova)
function entryPayload(a) {
  const desc = (a.excerpt || a.metaDescription || '').trim();
  const url = `${SITE}/blog/${a.slug}/`;
  const html = `<p>${esc(desc)}</p><p>Читать статью полностью: <a href="${url}">${url}</a></p>`;
  return {
    id: 0,
    user_id: Number(SUBSITE),
    type: 1,
    subsite_id: Number(SUBSITE),
    title: a.title,
    entry: { blocks: [{ type: 'text', cover: false, hidden: false, anchor: '', data: { text: html } }] },
    external_access_link: '', path: '',
    is_editorial: false, is_advertisement: false, is_enabled_comments: true, is_enabled_likes: true,
    withheld: false, is_enabled_ad: true, is_holdonflash: false, forced_to_mainpage: 0,
    is_holdonmain: false, is_published: false, is_adult: false, repostId: null, repostData: null,
  };
}

async function createDraft(article) {
  const fd = new FormData();
  fd.set('entry', JSON.stringify(entryPayload(article)));
  const res = await fetch(`${API}/v2.1/editor`, { method: 'POST', headers: authHeaders(), body: fd });
  const txt = await res.text();
  return { status: res.status, body: txt };
}

(async () => {
  if (typeof fetch !== 'function') { log('Нужен Node 18+ (нет fetch).'); process.exit(1); }

  // 1) Всегда добываем свежий JWT через refresh (VC_JWT живёт 5 мин — на него не полагаемся)
  if (REFRESH) {
    log('Обновляю JWT через /v3.4/auth/refresh ...');
    const r = await refreshAuth();
    log('  refresh →', r.status, '| JWT получен:', r.jwt ? 'да' : 'НЕТ', '| новый refresh:', r.newRefresh ? 'да' : 'нет');
    if (r.jwt) JWT = r.jwt;
    if (r.newRefresh) {
      REFRESH = r.newRefresh;
      // Отдаём новый refresh в Action (для обновления секрета VC_AUTH_REFRESH)
      if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `new_refresh=${r.newRefresh}\n`);
      log('  >>> НОВЫЙ refresh-токен получен (Action обновит секрет).');
    }
    if (!r.jwt) { log('  Не удалось получить JWT. Ответ:', r.body.slice(0, 300)); process.exit(1); }
  }

  // 2) Проверка авторизации
  const me = await fetch(`${API}/v2.1/subsite/me`, { headers: authHeaders() });
  log('Проверка /subsite/me →', me.status);
  if (me.status !== 200) {
    const t = await me.text().catch(() => '');
    log('Авторизация не прошла:', t.slice(0, 200));
    process.exit(1);
  }

  // 3) Постим черновик
  const state = loadState();
  const posted = new Set(state.posted || []);
  const published = ALL.filter(a => a && a.published === true && a.slug)
    .sort((x, y) => String(y.datePublished).localeCompare(String(x.datePublished)));
  const queue = published.filter(a => !posted.has(a.slug)).slice(0, PER_RUN);
  if (!queue.length) { log('Новых статей для постинга нет.'); return; }

  for (const a of queue) {
    log('Постю черновик:', a.slug);
    const r = await createDraft(a);
    log('  ответ:', r.status, r.body.slice(0, 400));
    if (r.status >= 200 && r.status < 300) { posted.add(a.slug); log('  OK.'); }
    else { log('  НЕ опубликовано — разберём формат по ответу выше.'); break; }
  }
  state.posted = [...posted];
  saveState(state);
  log('Готово. Опубликовано всего:', state.posted.length);
})();
