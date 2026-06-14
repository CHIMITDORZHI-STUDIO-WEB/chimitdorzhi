#!/usr/bin/env node
/*
 * tenchat-posts.js — генератор нативных постов для ТенЧата из статей и офферов.
 *
 * У ТенЧата нет открытого API на постинг, поэтому инструмент НЕ публикует, а
 * готовит посты под копипаст (или последующий автопостинг по RSS через планировщик).
 * Каждый запуск берёт следующую порцию ещё не сгенерированных материалов,
 * превращает в нативный ТенЧат-пост (заход + польза + ссылка + хэштеги) и пишет
 * их в tenchat-queue.md. Учёт ведётся в tenchat-state.json (чтобы не повторяться).
 *
 * Использование:
 *   node tools/tenchat-posts.js                       # 10 материалов, свежие первыми
 *   node tools/tenchat-posts.js --type articles --batch 5
 *   node tools/tenchat-posts.js --type offers --batch 5
 *   node tools/tenchat-posts.js --order old           # из архива
 *   node tools/tenchat-posts.js --dry                 # показать, ничего не сохранять
 *   node tools/tenchat-posts.js --reset               # сбросить учёт (начать заново)
 *
 * Параметры:
 *   --type articles|offers|all   что генерить (по умолчанию all)
 *   --batch N                    сколько за прогон (по умолчанию 10)
 *   --order new|old              порядок (по умолчанию new — свежие первыми)
 */

const fs = require('fs');
const path = require('path');

const SITE = 'https://chimitdorzhi.tech';
const STATE_PATH = path.join(__dirname, 'tenchat-state.json');
const QUEUE_PATH = path.join(__dirname, 'tenchat-queue.md');
const BRAND_TAGS = ['бизнес', 'автоматизация', 'нейросети'];

function parseArgs() {
  const a = process.argv.slice(2);
  const get = (k, d) => {
    const i = a.indexOf('--' + k);
    return i >= 0 && a[i + 1] && !a[i + 1].startsWith('--') ? a[i + 1] : d;
  };
  return {
    type: (get('type', 'all') || 'all').toLowerCase(),
    batch: parseInt(get('batch', '10'), 10) || 10,
    order: (get('order', 'new') || 'new').toLowerCase(),
    dry: a.includes('--dry'),
    reset: a.includes('--reset'),
  };
}

function loadState() {
  try { return JSON.parse(fs.readFileSync(STATE_PATH, 'utf8')); }
  catch (e) { return { generated: {} }; }
}
function saveState(s) { fs.writeFileSync(STATE_PATH, JSON.stringify(s, null, 2) + '\n', 'utf8'); }

// ---------- источники ----------
function loadArticles() {
  const data = require(path.join(__dirname, 'blog-data.js'));
  const arr = Array.isArray(data) ? data : Object.values(data).find(Array.isArray) || [];
  return arr.filter((a) => a && a.published !== false && a.contentHtml && a.slug);
}
function loadOffers() {
  const data = require(path.join(__dirname, 'offers-data.js'));
  let arr = Array.isArray(data) ? data : (data.offers || data.all || Object.values(data).find(Array.isArray) || []);
  return arr.filter((o) => o && o.published !== false && o.slug && o.title);
}

// ---------- хэштеги ----------
function hashify(tag) {
  const clean = String(tag).replace(/[^0-9A-Za-zА-Яа-яЁё]+/g, '');
  return clean ? '#' + clean : '';
}
function buildTags(rawTags) {
  const tags = (rawTags || []).map(hashify).filter(Boolean);
  for (const b of BRAND_TAGS) {
    if (tags.length >= 5) break;
    const h = hashify(b);
    if (!tags.includes(h)) tags.push(h);
  }
  return tags.slice(0, 5).join(' ');
}

// ---------- шаблоны постов ----------
// ТенЧат: без внешних ссылок (они некликабельны и режут охват), польза в самом
// посте, CTA — «напишите мне в личку». Первая строка блока = заголовок поста.
function stripTags(s) {
  return String(s).replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim();
}
function tldrItems(html) {
  const m = String(html).match(/<div class="blog-tldr">([\s\S]*?)<\/div>/i);
  if (!m) return [];
  const items = [];
  const re = /<(?:li|p)>([\s\S]*?)<\/(?:li|p)>/gi;
  let x;
  while ((x = re.exec(m[1])) !== null) { const t = stripTags(x[1]); if (t) items.push(t); }
  return items;
}
// Тело поста БЕЗ заголовка (заголовок отдаётся отдельным полем — и в .md, и в RSS).
function articleBody(a) {
  const lead = (a.excerpt || a.metaDescription || '').trim();
  let points = tldrItems(a.contentHtml || '');
  if (!points.length) {
    points = (a.toc || []).filter((t) => t.id !== 'faq' && t.id !== 'vyvody').map((t) => t.text);
  }
  points = points.slice(0, 6);
  const lines = [];
  if (lead) { lines.push(lead); lines.push(''); }
  if (points.length) {
    lines.push('Разберу по пунктам:');
    points.forEach((p) => lines.push('— ' + p));
    lines.push('');
  }
  lines.push('Если откликается и хотите так же у себя — напишите мне в личку. Разберём вашу задачу и подскажу, с чего начать.');
  lines.push('');
  lines.push(buildTags(a.tags));
  return lines.join('\n').trim();
}

function offerBody(o) {
  const lines = [];
  if (o.tagline) { lines.push(o.tagline.trim()); lines.push(''); }
  const del = (o.deliverables || []).slice(0, 5);
  if (del.length) {
    lines.push('Что делаю:');
    del.forEach((d) => lines.push('— ' + String(d).trim()));
    lines.push('');
  }
  const res = (o.result || [])[0];
  if (res) { lines.push(String(res).trim()); lines.push(''); }
  lines.push('Напишите мне в личку — обсудим вашу задачу, сроки и смету. Веду проект лично, на российском стеке, с соблюдением 152-ФЗ.');
  lines.push('');
  const nicheWord = o.niche ? o.niche.split(/[\s,/]+/)[0] : '';
  lines.push(buildTags([nicheWord, 'готовоерешение', 'бизнес']));
  return lines.join('\n').trim();
}

// Заголовок ТенЧата — максимум 80 символов.
function trimTitle(t) {
  t = String(t).trim();
  if (t.length <= 80) return t;
  const cut = t.slice(0, 79);
  const sp = cut.lastIndexOf(' ');
  return (sp > 40 ? cut.slice(0, sp) : cut).trim() + '…';
}

// Единая точка сборки поста: {title, body, image}. Используется и CLI, и RSS-фидом.
function postParts(kind, item) {
  if (kind === 'offer') {
    return { kind, title: trimTitle(item.title), body: offerBody(item), image: `${SITE}/predlozheniya/${item.slug}/cover.png`, slug: item.slug };
  }
  return { kind, title: trimTitle(item.title), body: articleBody(item), image: `${SITE}/blog/${item.slug}/cover.png`, slug: item.slug };
}

// ---------- основной прогон ----------
function main() {
  const args = parseArgs();
  const state = args.reset ? { generated: {} } : loadState();
  state.generated = state.generated || {};

  // нормализуем источники к «свежие первыми»:
  // статьи добавляются в конец blog-data → разворачиваем; офферы лежат свежими сверху.
  let articles = loadArticles().slice().reverse();
  let offers = loadOffers();
  if (args.order === 'old') { articles = articles.reverse(); offers = offers.slice().reverse(); }

  let pool = [];
  if (args.type === 'articles' || args.type === 'all') {
    articles.forEach((a) => pool.push({ kind: 'article', key: 'article:' + a.slug, item: a }));
  }
  if (args.type === 'offers' || args.type === 'all') {
    offers.forEach((o) => pool.push({ kind: 'offer', key: 'offer:' + o.slug, item: o }));
  }

  const fresh = pool.filter((p) => !state.generated[p.key]).slice(0, args.batch);

  if (!fresh.length) {
    console.log('Новых материалов для ТенЧата нет. Всего в учёте: ' + Object.keys(state.generated).length);
    console.log('Чтобы сгенерировать заново — запустите с --reset.');
    return;
  }

  const blocks = fresh.map((p, i) => {
    const parts = postParts(p.kind, p.item);
    const tag = p.kind === 'article' ? 'СТАТЬЯ' : 'ОФФЕР';
    const post = `${parts.title}\n\n${parts.body}`;
    return `### ${i + 1}. [${tag}] ${p.item.title}\n\n\`\`\`\n${post}\n\`\`\``;
  });

  const stamp = (process.env.TENCHAT_DATE || '').trim() || 'очередной прогон';
  const header = [
    '# Очередь постов для ТенЧата',
    '',
    `Сгенерировано: ${stamp}. Постов в этой порции: ${fresh.length}.`,
    'Публикуйте 1–2 в день. В каждом блоке: ПЕРВАЯ строка = «Заголовок» поста (поле в ТенЧате), всё остальное = «Текст поста».',
    'В ТенЧате обязательно выберите 1–3 тематики и прикрепите картинку (cover.png рядом со статьёй/оффером). Ссылок в постах нет намеренно — CTA «напишите мне».',
    '',
    '---',
    '',
  ].join('\n');

  const out = header + blocks.join('\n\n---\n\n') + '\n';

  if (args.dry) {
    console.log(out);
    console.log(`\n[dry] Сгенерировал бы ${fresh.length} постов, учёт не тронут.`);
    return;
  }

  fs.writeFileSync(QUEUE_PATH, out, 'utf8');
  fresh.forEach((p) => { state.generated[p.key] = true; });
  saveState(state);
  console.log(`Готово: ${fresh.length} постов → ${path.relative(process.cwd(), QUEUE_PATH)}`);
  console.log(`Всего в учёте: ${Object.keys(state.generated).length}. Остаток в пуле: ${pool.length - Object.keys(state.generated).length}.`);
}

module.exports = { postParts, loadArticles, loadOffers, articleBody, offerBody, trimTitle };

if (require.main === module) main();
