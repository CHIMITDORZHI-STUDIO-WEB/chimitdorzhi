// Генератор поискового индекса: /search-index.json (статьи + предложения).
// Клиентский поиск на хабах блога и предложений (сайт статичный).
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const articles = require('./blog-data.js');
const offers = require('./offers-data.js');

const CAT = {
  legal: 'Право', 'ai-dev': 'AI/разработка', 'ai-life': 'AI/жизнь', marketing: 'Маркетинг',
  geo: 'GEO', sales: 'Продажи', media: 'Медиа', industries: 'Отрасли', esports: 'Киберспорт',
  development: 'Разработка', security: 'Безопасность', finance: 'Финансы', mlm: 'Сетевой бизнес', mwrlife: 'MWR Life',
};

const index = [];

for (const a of articles) {
  if (!a || a.published === false || !a.contentHtml) continue;
  index.push({
    t: a.title,
    d: a.excerpt || '',
    u: `/blog/${a.slug}/`,
    k: 'Статья',
    c: CAT[a.category] || a.category || '',
    g: (a.tags || []).join(' '),
  });
}

for (const o of offers) {
  if (!o || o.published === false) continue;
  index.push({
    t: o.title,
    d: o.tagline || '',
    u: `/predlozheniya/${o.slug}/`,
    k: 'Предложение',
    c: o.segment || '',
    g: o.niche || '',
  });
}

const out = path.join(ROOT, 'search-index.json');
fs.writeFileSync(out, JSON.stringify(index), 'utf8');
console.log(`Поисковый индекс: ${index.length} записей → ${out}`);
