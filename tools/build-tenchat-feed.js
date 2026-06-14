#!/usr/bin/env node
/*
 * build-tenchat-feed.js — отдельный RSS-фид специально под ТенЧат-репостер SMMplanner.
 *
 * Отличие от blog/feed.xml: в <description> лежит готовый НАТИВНЫЙ пост (заход +
 * польза + CTA «напишите мне», БЕЗ ссылок), в <title> — заголовок (≤80 симв),
 * картинка-обложка идёт в <enclosure>/<media:content>. Репостер настраивается так:
 * «Заголовок»+«Описание»+«Изображение» ВКЛ, «Ссылка» ВЫКЛ.
 *
 * Запуск: node tools/build-tenchat-feed.js   → пишет /tenchat-feed.xml в корень.
 */

const fs = require('fs');
const path = require('path');
const { postParts, loadArticles, loadOffers } = require('./tenchat-posts.js');

const SITE = 'https://chimitdorzhi.tech';
const OUT = path.join(__dirname, '..', 'tenchat-feed.xml');
const MAX_ITEMS = 30; // сколько последних материалов держать в фиде

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function rssDate(iso) {
  // iso = YYYY-MM-DD → RFC-822; без даты берём фиксированную полночь
  const d = /^\d{4}-\d{2}-\d{2}$/.test(String(iso || '')) ? new Date(iso + 'T06:00:00Z') : new Date('2026-06-14T06:00:00Z');
  return d.toUTCString();
}

function build() {
  // свежие первыми: статьи добавляются в конец blog-data → разворот; офферы уже свежими сверху
  const articles = loadArticles().slice().reverse().map((a) => ({ kind: 'article', item: a }));
  const offers = loadOffers().map((o) => ({ kind: 'offer', item: o }));
  // 20 свежих статей + 10 свежих офферов = до 30 записей (и польза, и предложения)
  const all = articles.slice(0, 20).concat(offers.slice(0, 10));

  const items = all.map(({ kind, item }) => {
    const parts = postParts(kind, item);
    const pageUrl = kind === 'offer' ? `${SITE}/predlozheniya/${item.slug}/` : `${SITE}/blog/${item.slug}/`;
    const pub = rssDate(item.datePublished);
    return `    <item>
      <title>${esc(parts.title)}</title>
      <link>${pageUrl}</link>
      <guid isPermaLink="true">${pageUrl}</guid>
      <description><![CDATA[${parts.body}]]></description>
      <pubDate>${pub}</pubDate>
      <enclosure url="${parts.image}" type="image/png" length="0"/>
      <media:content url="${parts.image}" medium="image"/>
    </item>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>CHIMITDORZHI STUDIO — посты для ТенЧата</title>
    <link>${SITE}/</link>
    <atom:link href="${SITE}/tenchat-feed.xml" rel="self" type="application/rss+xml" />
    <description>Готовые посты для ТенЧата: польза в самом посте, без внешних ссылок, CTA «напишите мне».</description>
    <language>ru</language>
    <lastBuildDate>${rssDate('2026-06-14')}</lastBuildDate>
${items.join('\n')}
  </channel>
</rss>`;

  fs.writeFileSync(OUT, xml, 'utf8');
  console.log(`OK: tenchat-feed.xml → ${all.length} записей (${articles.length > MAX_ITEMS ? MAX_ITEMS : articles.length} статей + офферы), путь: ${OUT}`);
}

module.exports = build;

if (require.main === module) build();
