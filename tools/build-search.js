// Генератор поискового индекса: /search-index.json (статьи + предложения).
// Клиентский поиск на хабах блога и предложений (сайт статичный).
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const articles = require('./blog-data.js');
const offers = require('./offers-data.js');
const servicesRaw = require('./services-data.js');
const servicesArr = Array.isArray(servicesRaw) ? servicesRaw : (servicesRaw.services || Object.values(servicesRaw).find(Array.isArray) || []);
const SVC_CAT = {
  development: 'Разработка', ai: 'AI и автоматизация', security: 'Безопасность',
  infrastructure: 'Инфраструктура', industry: 'Отрасли', education: 'Образование',
  media: 'Медиа', innovation: 'Инновации', business: 'Бизнес',
};

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

for (const s of servicesArr) {
  if (!s || !s.s) continue;
  index.push({
    t: s.n,
    d: s.d || s.md || '',
    u: `/services/${s.s}/`,
    k: 'Услуга',
    c: SVC_CAT[s.c] || s.c || '',
    g: (s.tg || []).join(' ') + ' ' + (s.mk || ''),
  });
}

const out = path.join(ROOT, 'search-index.json');
fs.writeFileSync(out, JSON.stringify(index), 'utf8');
console.log(`Поисковый индекс: ${index.length} записей → ${out}`);
