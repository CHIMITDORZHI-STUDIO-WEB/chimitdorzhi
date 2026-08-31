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

const PER_RUN  = Number(process.env.VC_PER_RUN  || 1000); // макс статей за один прогон
const DELAY_MS = Number(process.env.VC_DELAY_MS || 1500); // пауза между постами

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
  return { status: res.status, jwt, newRefresh, body: txt };
}

// Ответ VC на неудачное обновление токена ничего не говорит сам по себе:
// и протухшая кука, и смена API, и блокировка по IP возвращают «нет jwt».
// Поэтому разбираем причину явно — иначе прогон падает молча и каждый день
// присылает одинаковое письмо, по которому нельзя понять, что чинить.
function explainAuthFailure(rf) {
  const snippet = String(rf.body || '').replace(/\s+/g, ' ').slice(0, 200);
  if (rf.status === 401 || rf.status === 403) {
    return `VC ответил ${rf.status}: refresh-кука протухла или отозвана. `
      + 'Обнови секреты VC_AUTH_REFRESH и VC_OSNOVA_REMEMBER — их надо заново взять '
      + 'из куков залогиненного vc.ru (DevTools → Application → Cookies): '
      + 'auth-refresh-remember и osnova-remember.';
  }
  if (rf.status === 429) {
    return 'VC ответил 429: слишком часто. Это временно, следующий прогон по расписанию должен пройти.';
  }
  if (rf.status === 404 || rf.status === 400) {
    return `VC ответил ${rf.status} на /v3.4/auth/refresh: похоже, у площадки изменился эндпоинт авторизации. `
      + `Секреты тут ни при чём, нужен разбор. Ответ: ${snippet}`;
  }
  if (rf.status >= 500) {
    return `VC ответил ${rf.status} — авария на их стороне, секреты трогать не надо.`;
  }
  if (!rf.status) {
    return 'До VC не удалось достучаться (сеть или блокировка раннера). Секреты трогать не надо.';
  }
  return `VC ответил ${rf.status}, но токена в ответе нет. Тело: ${snippet}`;
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

let lastAuthFailure = '';

async function ensureAuth() {
  if (!REFRESH) return !!JWT;
  const rf = await refreshAuth();
  if (rf.jwt) JWT = rf.jwt;
  if (rf.newRefresh) REFRESH = rf.newRefresh;
  if (!rf.jwt) lastAuthFailure = explainAuthFailure(rf);
  return !!rf.jwt;
}

(async () => {
  if (typeof fetch !== 'function') { log('Нужен Node 18+.'); process.exit(1); }

  const state = loadState();
  const posted = new Set(state.posted || []);

  const published = ALL.filter(a => a && a.published === true && a.slug)
    .sort((x, y) => String(y.datePublished).localeCompare(String(x.datePublished)));
  const queue = published.filter(a => !posted.has(a.slug)).slice(0, PER_RUN);
  if (!queue.length) { log('Новых статей нет — все уже в черновиках VC.'); return; }
  log(`В очереди: ${queue.length}. Заливаю черновиками (пауза ${DELAY_MS}мс)...`);

  if (!(await ensureAuth())) { log('Не удалось авторизоваться.', lastAuthFailure); process.exit(1); }
  const me = await fetch(`${API}/v2.1/subsite/me`, { headers: authHeaders() });
  if (me.status !== 200) { log('Авторизация не прошла:', (await me.text()).slice(0, 150)); process.exit(1); }

  let done = 0, fails = 0;
  for (let i = 0; i < queue.length; i++) {
    if (i > 0 && i % 8 === 0) await ensureAuth(); // JWT живёт 5 мин
    const a = queue[i];
    let r;
    try { r = await createDraft(a); } catch (e) { r = { status: 0, body: e.message, withCover: false }; }
    if (r.status >= 200 && r.status < 300) {
      posted.add(a.slug); done++;
      if (done % 20 === 0 || i === queue.length - 1) log(`...${i + 1}/${queue.length} готово (создано ${done})`);
    } else {
      fails++;
      log(`[${i + 1}/${queue.length}] ${a.slug} → ${r.status}: ${String(r.body).slice(0, 150)}`);
      if (r.status === 429 || r.status === 403) { log('Лимит/блок VC — стоп, прогресс сохранён, продолжим следующим прогоном.'); break; }
    }
    saveState({ posted: [...posted], lastRun: new Date().toISOString() });
    await sleep(DELAY_MS);
  }
  log(`Готово за прогон: создано ${done}, ошибок ${fails}. Всего в черновиках: ${posted.size} из ${published.length}.`);
})();
