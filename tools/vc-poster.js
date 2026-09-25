// Автопостинг анонсов статей в VC.ru (Osnova). Постит ЧЕРНОВИКАМИ.
// Action запускается раз в сутки и берёт не больше VC_PER_RUN самых свежих
// статей, которых ещё нет на VC. Между постами случайная пауза, чтобы не
// упереться в антиспам площадки. Состояние в tools/vc-posted.json:
// posted — уже залиты, skipped — сознательно пропущены (хвост, накопившийся,
// пока автопостинг стоял), их скрипт тоже не трогает.
//
// Авторизация: JWT (5 мин) добывается через POST /v3.4/auth/refresh по
// refresh-токену. На vc.ru он лежит в localStorage под ключом
// auth-refresh-token (поле token). Токен одноразовый: каждый refresh выдаёт
// новый, а старый умирает. Поэтому новый токен пишется в файл VC_REFRESH_OUT,
// и следующий шаг workflow кладёт его обратно в секрет VC_AUTH_REFRESH.
// Без этого секрет протухает после первого же прогона.
//
// На сервере токен живёт в файле VC_REFRESH_FILE: скрипт читает его оттуда
// и туда же записывает новый. Состояние — в VC_STATE_FILE.
//
// env: VC_REFRESH_FILE или VC_AUTH_REFRESH, опц. VC_SUBSITE_ID (иначе берётся
//      из профиля), VC_STATE_FILE, VC_REFRESH_OUT, VC_PER_RUN,
//      VC_DELAY_MIN_S, VC_DELAY_MAX_S

const fs = require('fs');
const path = require('path');
const ALL = require('./blog-data.js');

const SITE = 'https://chimitdorzhi.tech';
const API = 'https://api.vc.ru';
const STATE_FILE = process.env.VC_STATE_FILE || path.join(__dirname, 'vc-posted.json');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36';

const REMEMBER = process.env.VC_OSNOVA_REMEMBER || ''; // устарело, VC больше не ставит эту куку
const REFRESH_FILE = process.env.VC_REFRESH_FILE || '';
const REFRESH_OUT = process.env.VC_REFRESH_OUT || REFRESH_FILE;
let   REFRESH  = process.env.VC_AUTH_REFRESH
  || (REFRESH_FILE && fs.existsSync(REFRESH_FILE) ? fs.readFileSync(REFRESH_FILE, 'utf8').trim() : '');
let   SUBSITE  = process.env.VC_SUBSITE_ID || '';
let   JWT      = (process.env.VC_JWT || '').replace(/^Bearer\s+/i, '').trim();

const PER_RUN     = Number(process.env.VC_PER_RUN     || 5);   // макс статей за прогон (прогон раз в сутки)
const DELAY_MIN_S = Number(process.env.VC_DELAY_MIN_S || 60);  // пауза между постами, от
const DELAY_MAX_S = Number(process.env.VC_DELAY_MAX_S || 180); // и до
const pause = () => (DELAY_MIN_S + Math.random() * (DELAY_MAX_S - DELAY_MIN_S)) * 1000;

function log(...a) { console.log('[vc-poster]', ...a); }
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

if (!REFRESH && !JWT) { log('Нет токена — пропускаю.'); process.exit(0); }

function loadState() { try { return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8')); } catch { return { posted: [], skipped: [] }; } }
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
      + 'Обнови секрет VC_AUTH_REFRESH: залогинься на vc.ru в отдельном профиле браузера, '
      + 'DevTools → Application → Local storage → https://vc.ru → ключ auth-refresh-token, '
      + 'поле token. Окно потом просто закрой, не выходя из аккаунта.';
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
  if (rf.newRefresh && rf.newRefresh !== REFRESH) {
    REFRESH = rf.newRefresh;
    console.log(`::add-mask::${REFRESH}`);
    if (REFRESH_OUT) fs.writeFileSync(REFRESH_OUT, REFRESH, { encoding: 'utf8', mode: 0o600 });
  }
  if (!rf.jwt) lastAuthFailure = explainAuthFailure(rf);
  return !!rf.jwt;
}

(async () => {
  if (typeof fetch !== 'function') { log('Нужен Node 18+.'); process.exit(1); }

  const state = loadState();
  const posted = new Set(state.posted || []);
  const skipped = state.skipped || [];
  const handled = new Set([...posted, ...skipped]);

  const published = ALL.filter(a => a && a.published === true && a.slug)
    .sort((x, y) => String(y.datePublished).localeCompare(String(x.datePublished)));
  const queue = published.filter(a => !handled.has(a.slug)).slice(0, PER_RUN);
  // Обновляем сессию каждый прогон, даже когда постить нечего: так токен
  // не протухает в тихие дни.
  if (!(await ensureAuth())) { log('Не удалось авторизоваться.', lastAuthFailure); process.exit(1); }
  if (!queue.length) { log('Новых статей нет — все уже в черновиках VC.'); return; }
  log(`В очереди: ${queue.length}. Заливаю черновиками (пауза ${DELAY_MIN_S}–${DELAY_MAX_S} с)...`);

  const me = await fetch(`${API}/v2.1/subsite/me`, { headers: authHeaders() });
  if (me.status !== 200) { log('Авторизация не прошла:', (await me.text()).slice(0, 150)); process.exit(1); }
  if (!SUBSITE) {
    const mj = JSON.parse(await me.text());
    SUBSITE = String((mj.result || mj.data || {}).id || '');
    if (!SUBSITE) { log('Не нашёл id профиля в /subsite/me.'); process.exit(1); }
  }

  let done = 0, fails = 0;
  for (let i = 0; i < queue.length; i++) {
    if (i > 0) await ensureAuth(); // JWT живёт 5 мин, а паузы между постами до 3 мин
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
    saveState({ posted: [...posted], skipped, lastRun: new Date().toISOString() });
    if (i < queue.length - 1) await sleep(pause());
  }
  log(`Готово за прогон: создано ${done}, ошибок ${fails}. Всего в черновиках: ${posted.size}, пропущено: ${skipped.length}, из ${published.length}.`);
})();
