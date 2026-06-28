// Автопостинг анонсов статей в VC.ru (Osnova) — ТИЗЕР + ссылка на оригинал.
// Безопасность: токены берутся ТОЛЬКО из переменных окружения (GitHub Secrets),
// в коде/репозитории их нет. Постит ЧЕРНОВИКАМИ (is_draft), 1 статью за запуск.
//
// Нужные секреты (env):
//   VC_OSNOVA_REMEMBER  — значение cookie osnova-remember
//   VC_AUTH_REFRESH     — значение cookie auth-refresh-remember
//   VC_SUBSITE_ID       — id твоего блога в VC (число)
//
// Состояние (какие статьи уже отправлены) — в tools/vc-posted.json.

const fs = require('fs');
const path = require('path');
const ALL = require('./blog-data.js');

const SITE = 'https://chimitdorzhi.tech';
const API = 'https://api.vc.ru';
const STATE_FILE = path.join(__dirname, 'vc-posted.json');
const PER_RUN = 1; // сколько статей за один запуск (анти-спам)

const REMEMBER = process.env.VC_OSNOVA_REMEMBER;
const REFRESH = process.env.VC_AUTH_REFRESH;
const SUBSITE = process.env.VC_SUBSITE_ID;

function log(...a) { console.log('[vc-poster]', ...a); }

if (!REMEMBER || !SUBSITE) {
  log('Нет VC_OSNOVA_REMEMBER / VC_SUBSITE_ID в env — пропускаю (секреты не заданы).');
  process.exit(0);
}

function loadState() {
  try { return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8')); }
  catch { return { posted: [] }; }
}
function saveState(s) { fs.writeFileSync(STATE_FILE, JSON.stringify(s, null, 2) + '\n', 'utf8'); }

function cookieHeader() {
  const parts = [`osnova-remember=${REMEMBER}`];
  if (REFRESH) parts.push(`auth-refresh-remember=${REFRESH}`);
  return parts.join('; ');
}
const baseHeaders = () => ({
  'Cookie': cookieHeader(),
  'Origin': 'https://vc.ru',
  'Referer': 'https://vc.ru/',
  'User-Agent': 'Mozilla/5.0 (autopost; chimitdorzhi.tech)',
  'Accept': '*/*',
});

// Текст тизера: анонс + ссылка на полную статью (бэклинк, без дубля)
function teaser(a) {
  const desc = (a.excerpt || a.metaDescription || '').trim();
  return `${desc}\n\nЧитать статью полностью: ${SITE}/blog/${a.slug}/`;
}

async function createDraft(article) {
  const url = `${API}/v1.9/entry/create`;
  const form = new URLSearchParams();
  form.set('title', article.title);
  form.set('text', teaser(article));
  form.set('subsite_id', String(SUBSITE));
  form.set('is_draft', '1');
  const res = await fetch(url, { method: 'POST', headers: { ...baseHeaders(), 'Content-Type': 'application/x-www-form-urlencoded' }, body: form.toString() });
  const txt = await res.text();
  return { status: res.status, body: txt };
}

(async () => {
  if (typeof fetch !== 'function') { log('Нужен Node 18+ (нет fetch).'); process.exit(1); }

  // Проверка авторизации
  try {
    const me = await fetch(`${API}/v2.1/subsite/me`, { headers: baseHeaders() });
    log('Проверка авторизации /subsite/me →', me.status);
    if (me.status !== 200) {
      log('Авторизация не прошла. Токены протухли — обнови osnova-remember в секретах.');
      process.exit(1);
    }
  } catch (e) { log('Ошибка сети при проверке авторизации:', e.message); process.exit(1); }

  const state = loadState();
  const posted = new Set(state.posted || []);
  const published = ALL.filter(a => a && a.published === true && a.slug);
  // новые сначала
  published.sort((x, y) => String(y.datePublished).localeCompare(String(x.datePublished)));
  const queue = published.filter(a => !posted.has(a.slug)).slice(0, PER_RUN);

  if (!queue.length) { log('Новых статей для постинга нет.'); return; }

  for (const a of queue) {
    log('Постю черновик:', a.slug);
    const r = await createDraft(a);
    log('  ответ:', r.status, r.body.slice(0, 300));
    if (r.status >= 200 && r.status < 300) {
      posted.add(a.slug);
      log('  OK — добавил в state.');
    } else {
      log('  НЕ опубликовано. Останавливаюсь (разберём формат запроса по этому ответу).');
      break;
    }
  }
  state.posted = [...posted];
  saveState(state);
  log('Готово. Всего отмечено опубликованными:', state.posted.length);
})();
