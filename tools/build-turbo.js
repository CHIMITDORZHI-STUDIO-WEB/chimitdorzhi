#!/usr/bin/env node
/*
 * build-turbo.js — генерирует turbo.xml: RSS-фид в формате Яндекс.Турбо.
 *
 * Турбо-страницы — быстрые страницы Яндекса прямо в выдаче. Строятся из
 * специального RSS с <turbo:content> (ограниченный набор HTML-тегов).
 * Фид кладётся в корень сайта, ссылка добавляется в Яндекс.Вебмастер →
 * Турбо-страницы → Источники.
 *
 * Запуск:  node tools/build-turbo.js
 * Выход:   turbo.xml в корне репозитория.
 */

const fs = require('fs');
const path = require('path');
const { parseHtml } = require('./crosspost.js');

const SITE = 'https://chimitdorzhi.tech';
const OUT = path.join(__dirname, '..', 'turbo.xml');
const AUTHOR = 'Чимитдоржи Дарижапов';

const CATEGORY_LABELS = {
  legal: 'Право и 152-ФЗ', 'ai-dev': 'AI и разработка', 'ai-life': 'AI в жизни',
  development: 'Разработка', marketing: 'Маркетинг', finance: 'Финансы',
  industries: 'Отрасли', sales: 'Продажи', media: 'Медиа', security: 'Безопасность',
  esports: 'Киберспорт', mlm: 'Сетевой бизнес', mwrlife: 'MWR Life',
};

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ---------- хелперы рендера (как в crosspost) ----------
function hasClass(n, sub) { const c = n.attrs && n.attrs.class; return c && c.indexOf(sub) !== -1; }
function isDropped(n) {
  if (n.tag === 'i' && (hasClass(n, 'ph-') || hasClass(n, 'ph ') || (n.attrs && n.attrs.class === 'ph'))) return true;
  if (hasClass(n, 'blog-cta-card')) return true;
  if (hasClass(n, 'consent')) return true;
  return false;
}
function absHref(href) {
  if (!href) return null;
  if (href.startsWith('/')) return SITE + href;
  if (href.startsWith('#')) return null;
  if (href.startsWith('http')) return href;
  return null;
}
function escHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// разрешённые Турбо-теги, которые мы используем как есть
const TURBO_BLOCK = new Set(['p', 'ul', 'ol', 'li', 'blockquote', 'table', 'thead', 'tbody', 'tr', 'td', 'th', 'h2', 'h3', 'h4', 'h5', 'h6', 'pre', 'figure', 'figcaption']);
const TURBO_INLINE = new Set(['strong', 'b', 'em', 'i', 'code', 's', 'u', 'br']);

function renderTurbo(node) {
  let out = '';
  for (const child of node.children || []) {
    if (child.tag === '#text') { out += escHtml(child.text); continue; }
    if (isDropped(child)) continue;
    const tag = child.tag;

    if (tag === 'div') {
      if (hasClass(child, 'blog-callout') || hasClass(child, 'blog-quote')) {
        out += `<blockquote>${renderTurbo(child)}</blockquote>`;
      } else {
        out += renderTurbo(child); // tldr и прочие — разворачиваем содержимое
      }
      continue;
    }
    if (tag === 'h1') { out += `<h2>${renderTurbo(child)}</h2>`; continue; }
    if (tag === 'a') {
      const href = absHref(child.attrs.href);
      if (!href) { out += renderTurbo(child); continue; }
      out += `<a href="${escHtml(href)}">${renderTurbo(child)}</a>`;
      continue;
    }
    if (tag === 'img') {
      const src = absHref(child.attrs.src);
      if (src) out += `<figure><img src="${escHtml(src)}"/></figure>`;
      continue;
    }
    if (tag === 'br' || tag === 'hr') { out += '<br/>'; continue; }
    if (TURBO_BLOCK.has(tag) || TURBO_INLINE.has(tag)) {
      out += `<${tag}>${renderTurbo(child)}</${tag}>`;
      continue;
    }
    if (tag === 'span' || tag === 'thead' || tag === 'tbody') { out += renderTurbo(child); continue; }
    // прочее — разворачиваем
    out += renderTurbo(child);
  }
  return out;
}

function turboContent(a) {
  const url = `${SITE}/blog/${a.slug}/`;
  const cover = `${SITE}/blog/${a.slug}/cover.png`;
  const header =
    `<header>` +
    `<h1>${escHtml(a.title)}</h1>` +
    `<figure><img src="${escHtml(cover)}"/></figure>` +
    `</header>`;
  let body = renderTurbo(parseHtml(a.contentHtml || ''));
  // подчищаем пустые параграфы и схлопываем пробелы между блоками
  body = body.replace(/<p>\s*<\/p>/g, '').replace(/\n{2,}/g, '\n');
  const footer =
    `<p><strong>${escHtml(AUTHOR)}</strong> — IT- и AI-эксперт, специалист по 152-ФЗ. ` +
    `<a href="https://t.me/chimitdorzhi">Telegram</a>, ` +
    `<a href="https://vk.com/chimitdorzhi">ВКонтакте</a>, ` +
    `<a href="${url}">полная версия статьи</a>.</p>`;
  const html = header + body + footer;
  return html.replace(/]]>/g, ']]&gt;');
}

function rssDate(iso) {
  const d = new Date((iso || '2026-01-01') + 'T09:00:00+03:00');
  return d.toUTCString();
}

function build() {
  delete require.cache[require.resolve('./blog-data.js')];
  const data = require('./blog-data.js');
  const arr = Array.isArray(data) ? data : Object.values(data).find(Array.isArray);
  const pub = arr.filter((p) => p && p.published !== false && p.contentHtml && p.slug);
  pub.sort((a, b) => String(b.datePublished || '').localeCompare(String(a.datePublished || '')));

  const items = pub.map((a) => {
    const url = `${SITE}/blog/${a.slug}/`;
    const cat = CATEGORY_LABELS[a.category] || a.category || '';
    return `    <item turbo="true">
      <link>${url}</link>
      <turbo:source>${url}</turbo:source>
      <turbo:topic>${esc(a.title)}</turbo:topic>
      <pubDate>${rssDate(a.datePublished)}</pubDate>
      <author>${esc(AUTHOR)}</author>
      <category>${esc(cat)}</category>
      <turbo:content>
<![CDATA[${turboContent(a)}]]>
      </turbo:content>
    </item>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:yandex="http://news.yandex.ru" xmlns:media="http://search.yahoo.com/mrss/" xmlns:turbo="http://turbo.yandex.ru" version="2.0">
  <channel>
    <title>Блог Чимитдоржи Дарижапова</title>
    <link>${SITE}/blog/</link>
    <description>Экспертные статьи о 152-ФЗ, разработке, AI и предпринимательстве в России.</description>
    <language>ru</language>
${items}
  </channel>
</rss>`;

  fs.writeFileSync(OUT, xml, 'utf8');
  console.log(`turbo.xml: ${pub.length} статей, ${(xml.length / 1024).toFixed(0)} КБ → ${OUT}`);
}

build();
