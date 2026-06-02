#!/usr/bin/env node
/*
 * crosspost.js — автоматический кросспостинг статей блога на Telegraph и VC.ru.
 *
 * Берёт опубликованные статьи из blog-data.js, конвертирует HTML в формат
 * площадки, публикует через API и ведёт учёт в crosspost-state.json
 * (как zen-drip — чтобы не постить одно и то же дважды).
 *
 * Использование:
 *   node tools/crosspost.js --platform telegraph --batch 5
 *   node tools/crosspost.js --platform vc --batch 5
 *   node tools/crosspost.js --platform all --batch 5
 *   node tools/crosspost.js --platform telegraph --batch 1 --dry   # ничего не постит, показывает план
 *
 * Опции:
 *   --platform telegraph|vc|all   куда постить (по умолчанию telegraph)
 *   --batch N                     сколько статей за прогон (по умолчанию 5)
 *   --order old|new               старые сначала (дренаж архива) или свежие (по умолчанию old)
 *   --dry                         сухой прогон: ничего не отправляет
 *
 * Переменные окружения:
 *   VC_TOKEN        — X-Device-Token из аккаунта VC.ru (обязателен для vc)
 *   VC_SUBSITE_ID   — id вашего блога на VC (необязательно, иначе берётся из /subsite/me)
 *   TELEGRAPH_AUTHOR_URL — ссылка автора в Telegraph (по умолчанию сайт)
 */

const fs = require('fs');
const path = require('path');

const SITE = 'https://chimitdorzhi.tech';
const STATE_PATH = path.join(__dirname, 'crosspost-state.json');
const BLOG_DATA_PATH = path.join(__dirname, 'blog-data.js');

const AUTHOR_NAME = 'Чимитдоржи Дарижапов';
const TELEGRAPH_SHORT_NAME = 'chimitdorzhi';
const TELEGRAPH_AUTHOR_URL = process.env.TELEGRAPH_AUTHOR_URL || `${SITE}/about/`;

// ---------- аргументы ----------
function parseArgs() {
  const a = process.argv.slice(2);
  const get = (name, def) => {
    const i = a.indexOf(`--${name}`);
    return i >= 0 && a[i + 1] && !a[i + 1].startsWith('--') ? a[i + 1] : def;
  };
  return {
    platform: (get('platform', 'telegraph') || 'telegraph').toLowerCase(),
    batch: parseInt(get('batch', '5'), 10) || 5,
    order: (get('order', 'old') || 'old').toLowerCase(),
    dry: a.includes('--dry'),
  };
}

// ---------- state ----------
function loadState() {
  try {
    return JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
  } catch {
    return { telegraphToken: null, posted: {} };
  }
}
function saveState(state) {
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2) + '\n', 'utf8');
}

// ---------- статьи ----------
function loadArticles(order) {
  delete require.cache[require.resolve(BLOG_DATA_PATH)];
  const data = require(BLOG_DATA_PATH);
  const arr = Array.isArray(data) ? data : Object.values(data).find(Array.isArray);
  const pub = arr.filter((p) => p && p.published !== false && p.contentHtml && p.slug);
  pub.sort((x, y) => {
    const dx = String(x.datePublished || '');
    const dy = String(y.datePublished || '');
    return order === 'new' ? dy.localeCompare(dx) : dx.localeCompare(dy);
  });
  return pub;
}

// =====================================================================
//  МИНИ-ПАРСЕР HTML -> AST
// =====================================================================
const VOID = new Set(['br', 'hr', 'img', 'meta', 'link', 'input']);

function tokenize(html) {
  const tokens = [];
  const re = /<!--[\s\S]*?-->|<\/([a-zA-Z0-9]+)\s*>|<([a-zA-Z0-9]+)((?:[^>"']|"[^"]*"|'[^']*')*)\/?>|([^<]+)/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    if (m[0].startsWith('<!--')) continue;
    if (m[1]) tokens.push({ type: 'close', tag: m[1].toLowerCase() });
    else if (m[2]) {
      const tag = m[2].toLowerCase();
      const attrs = parseAttrs(m[3] || '');
      const selfClose = m[0].endsWith('/>') || VOID.has(tag);
      tokens.push({ type: 'open', tag, attrs, selfClose });
    } else if (m[4]) {
      tokens.push({ type: 'text', text: decodeEntities(m[4]) });
    }
  }
  return tokens;
}

function parseAttrs(s) {
  const attrs = {};
  const re = /([a-zA-Z0-9_-]+)\s*=\s*"([^"]*)"|([a-zA-Z0-9_-]+)\s*=\s*'([^']*)'/g;
  let m;
  while ((m = re.exec(s)) !== null) {
    if (m[1]) attrs[m[1].toLowerCase()] = m[2];
    else if (m[3]) attrs[m[3].toLowerCase()] = m[4];
  }
  return attrs;
}

function decodeEntities(s) {
  return s
    .replace(/&nbsp;/g, ' ')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&laquo;/g, '«')
    .replace(/&raquo;/g, '»')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, '’')
    .replace(/&hellip;/g, '…')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function buildTree(tokens) {
  const root = { tag: 'root', attrs: {}, children: [] };
  const stack = [root];
  for (const t of tokens) {
    const top = stack[stack.length - 1];
    if (t.type === 'text') {
      if (t.text) top.children.push({ tag: '#text', text: t.text });
    } else if (t.type === 'open') {
      const node = { tag: t.tag, attrs: t.attrs, children: [] };
      top.children.push(node);
      if (!t.selfClose) stack.push(node);
    } else if (t.type === 'close') {
      // закрываем до совпадающего тега (терпимо к незакрытым)
      for (let i = stack.length - 1; i > 0; i--) {
        if (stack[i].tag === t.tag) {
          stack.length = i;
          break;
        }
      }
    }
  }
  return root;
}

function hasClass(node, sub) {
  const c = node.attrs && node.attrs.class;
  return c && c.indexOf(sub) !== -1;
}

// нужно ли выбросить узел целиком (site-specific блоки / иконки)
function isDropped(node) {
  if (node.tag === 'i' && (hasClass(node, 'ph-') || hasClass(node, 'ph ') || node.attrs.class === 'ph')) return true;
  if (hasClass(node, 'blog-cta-card')) return true;
  if (hasClass(node, 'consent')) return true;
  return false;
}

function parseHtml(html) {
  return buildTree(tokenize(html));
}

// =====================================================================
//  РЕНДЕР -> Telegraph nodes
//  Разрешённые теги: a aside b blockquote br code em figcaption figure
//  h3 h4 hr i img li ol p pre s strong u ul
// =====================================================================
function absHref(href) {
  if (!href) return href;
  if (href.startsWith('/')) return SITE + href;
  if (href.startsWith('#')) return null;
  return href;
}

function inlineText(node) {
  // плоский текст узла (для таблиц)
  if (node.tag === '#text') return node.text;
  return (node.children || []).map(inlineText).join('');
}

function toTelegraph(node) {
  // возвращает массив Telegraph-нод
  const out = [];
  for (const child of node.children || []) {
    if (child.tag === '#text') {
      const t = child.text.replace(/\s+/g, ' ');
      if (t.trim()) out.push(t);
      else if (t === ' ') out.push(' ');
      continue;
    }
    if (isDropped(child)) continue;
    const tag = child.tag;

    if (tag === 'div') {
      if (hasClass(child, 'blog-tldr')) {
        out.push(...toTelegraph(child));
      } else if (hasClass(child, 'blog-callout') || hasClass(child, 'blog-quote')) {
        out.push({ tag: 'blockquote', children: toTelegraph(child) });
      } else {
        out.push(...toTelegraph(child));
      }
      continue;
    }
    if (tag === 'table') {
      out.push(...tableToTelegraph(child));
      continue;
    }
    if (tag === 'h1' || tag === 'h2') {
      out.push({ tag: 'h3', children: toTelegraph(child) });
      continue;
    }
    if (tag === 'h3' || tag === 'h4' || tag === 'h5' || tag === 'h6') {
      out.push({ tag: 'h4', children: toTelegraph(child) });
      continue;
    }
    if (tag === 'b') { out.push({ tag: 'strong', children: toTelegraph(child) }); continue; }
    if (tag === 'em') { out.push({ tag: 'i', children: toTelegraph(child) }); continue; }
    if (tag === 'a') {
      const href = absHref(child.attrs.href);
      if (!href) { out.push(...toTelegraph(child)); continue; }
      out.push({ tag: 'a', attrs: { href }, children: toTelegraph(child) });
      continue;
    }
    if (tag === 'pre') { out.push({ tag: 'pre', children: toTelegraph(child) }); continue; }
    if (['p', 'ul', 'ol', 'li', 'blockquote', 'strong', 'i', 'code', 's', 'u', 'br', 'hr', 'figure', 'figcaption', 'aside'].includes(tag)) {
      if (tag === 'br' || tag === 'hr') { out.push({ tag, children: [] }); continue; }
      out.push({ tag, children: toTelegraph(child) });
      continue;
    }
    if (tag === 'img') {
      const src = absHref(child.attrs.src);
      if (src) out.push({ tag: 'img', attrs: { src } });
      continue;
    }
    if (tag === 'thead' || tag === 'tbody' || tag === 'tr' || tag === 'span') {
      out.push(...toTelegraph(child));
      continue;
    }
    // прочее — раскрываем содержимое
    out.push(...toTelegraph(child));
  }
  return out;
}

function tableToTelegraph(table) {
  const rows = [];
  (function walk(n) {
    if (n.tag === 'tr') {
      const cells = (n.children || []).filter((c) => c.tag === 'th' || c.tag === 'td');
      rows.push({
        header: cells.some((c) => c.tag === 'th'),
        cells: cells.map((c) => inlineText(c).replace(/\s+/g, ' ').trim()),
      });
      return;
    }
    (n.children || []).forEach(walk);
  })(table);
  // рендерим как список: заголовок жирным, строки "a — b — c"
  const out = [];
  const items = rows.map((r) => {
    if (r.header) return { tag: 'li', children: [{ tag: 'strong', children: [r.cells.join(' · ')] }] };
    return { tag: 'li', children: [r.cells.join(' — ')] };
  });
  out.push({ tag: 'ul', children: items });
  return out;
}

const TELEGRAPH_LIMIT = 25000; // реальный лимит content Telegraph ~26КБ JSON (не 64КБ из доки)

function buildTelegraphContent(article) {
  const url = `${SITE}/blog/${article.slug}/`;
  const lead = {
    tag: 'p',
    children: [
      { tag: 'em', children: ['Оригинал статьи с оглавлением, таблицами и обновлениями: '] },
      { tag: 'a', attrs: { href: url }, children: [url] },
    ],
  };
  const footer = {
    tag: 'p',
    children: [
      { tag: 'strong', children: [`${AUTHOR_NAME}`] },
      ' — IT- и AI-эксперт, специалист по 152-ФЗ. ',
      { tag: 'a', attrs: { href: 'https://t.me/chimitdorzhi' }, children: ['Telegram'] },
      ' · ',
      { tag: 'a', attrs: { href: 'https://vk.com/chimitdorzhi' }, children: ['ВКонтакте'] },
      ' · ',
      { tag: 'a', attrs: { href: `${SITE}/blog/` }, children: ['Блог (120+ статей)'] },
    ],
  };
  const more = {
    tag: 'p',
    children: [
      { tag: 'strong', children: ['→ Продолжение и полная версия с таблицами — на сайте: '] },
      { tag: 'a', attrs: { href: url }, children: [url] },
    ],
  };

  let body = toTelegraph(parseHtml(article.contentHtml)).filter((n) => !(typeof n === 'string' && !n.trim()));
  const assemble = (b, truncated) => [lead, ...b, ...(truncated ? [more] : []), { tag: 'hr', children: [] }, footer];
  const size = (c) => Buffer.byteLength(JSON.stringify(c), 'utf8');

  if (size(assemble(body, false)) <= TELEGRAPH_LIMIT) return assemble(body, false);
  // обрезаем хвост верхнеуровневых блоков, пока не влезет
  let truncated = false;
  while (body.length > 1 && size(assemble(body, true)) > TELEGRAPH_LIMIT) {
    body.pop();
    truncated = true;
  }
  return assemble(body, true);
}

// =====================================================================
//  РЕНДЕР -> VC plain text
// =====================================================================
function toVcText(node, ctx) {
  let s = '';
  for (const child of node.children || []) {
    if (child.tag === '#text') { s += child.text.replace(/\s+/g, ' '); continue; }
    if (isDropped(child)) continue;
    const tag = child.tag;
    if (tag === 'div') {
      if (hasClass(child, 'blog-cta-card')) continue;
      s += toVcText(child, ctx);
      continue;
    }
    if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)) {
      s += '\n\n' + toVcText(child, ctx).trim().toUpperCase() + '\n\n';
      continue;
    }
    if (tag === 'p') { s += '\n\n' + toVcText(child, ctx).trim() + '\n'; continue; }
    if (tag === 'br') { s += '\n'; continue; }
    if (tag === 'hr') { s += '\n———\n'; continue; }
    if (tag === 'ul' || tag === 'ol') { s += '\n' + toVcText(child, ctx); continue; }
    if (tag === 'li') { s += '— ' + toVcText(child, ctx).trim() + '\n'; continue; }
    if (tag === 'blockquote') { s += '\n«' + toVcText(child, ctx).trim() + '»\n'; continue; }
    if (tag === 'a') {
      const txt = toVcText(child, ctx).trim();
      const href = absHref(child.attrs.href);
      if (href && href !== txt && !txt.includes('http')) s += `${txt} (${href})`;
      else s += txt || href || '';
      continue;
    }
    if (tag === 'table') { s += '\n' + tableToText(child) + '\n'; continue; }
    s += toVcText(child, ctx);
  }
  return s;
}

function tableToText(table) {
  const lines = [];
  (function walk(n) {
    if (n.tag === 'tr') {
      const cells = (n.children || []).filter((c) => c.tag === 'th' || c.tag === 'td');
      lines.push(cells.map((c) => inlineText(c).replace(/\s+/g, ' ').trim()).join(' — '));
      return;
    }
    (n.children || []).forEach(walk);
  })(table);
  return lines.join('\n');
}

function buildVcText(article) {
  const url = `${SITE}/blog/${article.slug}/`;
  let body = `Оригинал статьи с оглавлением и таблицами: ${url}\n`;
  body += toVcText(parseHtml(article.contentHtml), {});
  body += `\n\n———\n${AUTHOR_NAME} — IT- и AI-эксперт, специалист по 152-ФЗ.\n`;
  body += `Telegram: https://t.me/chimitdorzhi\nВКонтакте: https://vk.com/chimitdorzhi\nБлог: ${SITE}/blog/`;
  // схлопываем лишние пустые строки
  return body.replace(/\n{3,}/g, '\n\n').trim();
}

// =====================================================================
//  API: Telegraph
// =====================================================================
async function telegraphCall(method, params) {
  const res = await fetch(`https://api.telegra.ph/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });
  const json = await res.json();
  if (!json.ok) throw new Error(`Telegraph ${method}: ${json.error}`);
  return json.result;
}

async function ensureTelegraphToken(state, dry) {
  // приоритет: переменная окружения (секрет) → state → создать новый
  if (process.env.TELEGRAPH_TOKEN) return process.env.TELEGRAPH_TOKEN;
  if (state.telegraphToken) return state.telegraphToken;
  if (dry) return '(dry-no-token)';
  const acc = await telegraphCall('createAccount', {
    short_name: TELEGRAPH_SHORT_NAME,
    author_name: AUTHOR_NAME,
    author_url: TELEGRAPH_AUTHOR_URL,
  });
  console.log('  ✓ создан Telegraph-аккаунт. Сохраните токен в секрет TELEGRAPH_TOKEN:');
  console.log('    ' + acc.access_token);
  return acc.access_token;
}

async function postTelegraph(article, state, dry) {
  const content = buildTelegraphContent(article);
  if (dry) {
    console.log(`  [dry] Telegraph: «${article.title}» (нод: ${content.length})`);
    return { url: '(dry)', path: '(dry)' };
  }
  const token = await ensureTelegraphToken(state, dry);
  const page = await telegraphCall('createPage', {
    access_token: token,
    title: article.title.slice(0, 256),
    author_name: AUTHOR_NAME,
    author_url: TELEGRAPH_AUTHOR_URL,
    content,
    return_content: false,
  });
  return { url: page.url, path: page.path };
}

// =====================================================================
//  API: VC.ru (Osnova v1.9)
// =====================================================================
const VC_BASE = 'https://api.vc.ru/v1.9';

async function vcMe(token) {
  const res = await fetch(`${VC_BASE}/subsite/me`, { headers: { 'X-Device-Token': token } });
  const json = await res.json();
  if (json.error) throw new Error(`VC /subsite/me: ${JSON.stringify(json.error)}`);
  return json.result;
}

async function postVc(article, token, subsiteId, dry) {
  const text = buildVcText(article);
  if (dry) {
    console.log(`  [dry] VC: «${article.title}» (символов: ${text.length}, subsite ${subsiteId})`);
    return { id: '(dry)', url: '(dry)' };
  }
  const form = new FormData();
  form.append('title', article.title.slice(0, 250));
  form.append('text', text);
  form.append('subsite_id', String(subsiteId));
  const res = await fetch(`${VC_BASE}/entry/create`, {
    method: 'POST',
    headers: { 'X-Device-Token': token },
    body: form,
  });
  const json = await res.json();
  if (json.error || !json.result) throw new Error(`VC /entry/create: ${JSON.stringify(json.error || json)}`);
  const r = json.result;
  return { id: r.id, url: r.url || `https://vc.ru/${r.id}` };
}

// =====================================================================
//  MAIN
// =====================================================================
async function run() {
  const opts = parseArgs();
  const state = loadState();
  if (!state.posted) state.posted = {};
  const articles = loadArticles(opts.order);

  const platforms = opts.platform === 'all' ? ['telegraph', 'vc'] : [opts.platform];
  console.log(`Кросспостинг → ${platforms.join(', ')} | батч ${opts.batch} | порядок ${opts.order}${opts.dry ? ' | DRY' : ''}`);

  // подготовка VC
  let vcToken = null, vcSubsite = null;
  if (platforms.includes('vc')) {
    vcToken = process.env.VC_TOKEN;
    if (!vcToken && !opts.dry) {
      console.error('  ⚠ VC_TOKEN не задан — пропускаю VC. Установите переменную окружения VC_TOKEN.');
      platforms.splice(platforms.indexOf('vc'), 1);
    } else if (vcToken) {
      vcSubsite = process.env.VC_SUBSITE_ID;
      if (!vcSubsite && !opts.dry) {
        try { vcSubsite = (await vcMe(vcToken)).id; console.log(`  ✓ VC subsite_id = ${vcSubsite}`); }
        catch (e) { console.error('  ⚠ не удалось получить subsite_id:', e.message); }
      }
      vcSubsite = vcSubsite || 0;
    }
  }

  for (const platform of platforms) {
    const todo = articles.filter((a) => !(state.posted[a.slug] && state.posted[a.slug][platform])).slice(0, opts.batch);
    if (!todo.length) { console.log(`\n[${platform}] всё опубликовано, новых нет.`); continue; }
    console.log(`\n[${platform}] к публикации: ${todo.length}`);
    for (const a of todo) {
      try {
        let info;
        if (platform === 'telegraph') info = await postTelegraph(a, state, opts.dry);
        else info = await postVc(a, vcToken, vcSubsite, opts.dry);
        if (!opts.dry) {
          state.posted[a.slug] = state.posted[a.slug] || {};
          state.posted[a.slug][platform] = { ...info, date: new Date().toISOString().slice(0, 10) };
          saveState(state);
        }
        console.log(`  ✓ ${a.slug} → ${info.url}`);
      } catch (e) {
        console.error(`  ✗ ${a.slug}: ${e.message}`);
      }
    }
  }

  // сводка
  const total = articles.length;
  const tg = articles.filter((a) => state.posted[a.slug] && state.posted[a.slug].telegraph).length;
  const vc = articles.filter((a) => state.posted[a.slug] && state.posted[a.slug].vc).length;
  console.log(`\nИтого: Telegraph ${tg}/${total} · VC ${vc}/${total}`);
}

if (require.main === module) {
  run().catch((e) => { console.error(e); process.exit(1); });
}

module.exports = { buildTelegraphContent, buildVcText, parseHtml, toTelegraph };
