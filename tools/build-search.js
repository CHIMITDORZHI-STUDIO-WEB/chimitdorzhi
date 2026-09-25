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

// Страница цен: каждая позиция ведёт прямо в свою строку /ceny/#p-<id>.
try {
  const prices = require('./prices-data.js');
  index.push({ t: 'Цены на разработку и внедрение ИИ', d: 'Сколько стоят сайты, боты, 1С, ИИ-агенты и автоматизация: цены от, сроки и расходы после запуска.', u: '/ceny/', k: 'Цены', c: 'Цены', g: 'цена стоимость сколько стоит прайс смета' });
  for (const r of prices) {
    if (r.price.kind === 'included' || r.price.kind === 'text') continue;
    const p = r.price.kind === 'project' ? 'по проекту' : 'от ' + r.price.value.toLocaleString('ru-RU') + ' ₽' + (r.price.unit === 'month' ? '/мес' : r.price.unit === 'hour' ? '/час' : '');
    index.push({ t: `${r.name}: ${p}`, d: r.what, u: `/ceny/#p-${r.id}`, k: 'Цена', c: r.section, g: 'цена стоимость сколько стоит' });
  }
} catch (e) {
  console.log(`  ⚠ Цены не попали в поиск: ${e.message}`);
}

// Энциклопедия открытых ИИ-моделей: карточки моделей и страницы-подборки.
// Данные и подписи те же, что у build-models.js.
try {
  const models = require('./models-data.js');
  const { MOD, INDUSTRY, COM } = require('./models-i18n.js');
  for (const m of models) {
    if (!m || !m.id || !m.name) continue;
    index.push({
      t: m.name,
      d: (m.summary || '').slice(0, 180),
      u: `/ii-modeli/${m.id}/`,
      k: 'ИИ-модель',
      c: (MOD[m.modality[0]] || {}).ru || '',
      g: [m.developer, m.country, ...(m.tasks || []), ...(m.modality || []).map((x) => (MOD[x] || {}).ru || ''),
        ...(m.industries || []).map((x) => (INDUSTRY[x] || {}).ru || ''),
        (COM[m.commercial] || {}).ru || '', m.ru === 'yes' ? 'русский язык' : ''].join(' '),
    });
  }
  const coll = require('./models/_collections.js');
  const groups = [['modality', 'napravlenie'], ['industry', 'sfera'], ['special', 'podborki']];
  for (const [key, dir] of groups) {
    for (const c of Object.values(coll[key] || {})) {
      if (!c || !c.slug) continue;
      index.push({ t: c.h1, d: (c.description || c.intro || '').slice(0, 180), u: `/ii-modeli/${dir}/${c.slug}/`, k: 'Подборка моделей', c: 'ИИ-модели', g: '' });
    }
  }
  const guides = require('./models/_guides.js');
  for (const g of Object.values(guides)) {
    if (!g || !g.slug) continue;
    index.push({ t: g.h1, d: (g.description || '').slice(0, 180), u: `/ii-modeli/${g.slug}/`, k: 'Справка', c: 'ИИ-модели', g: (g.sections || []).map((s) => s.h2).join(' ') });
  }
  const stacks = require('./models/_stacks.js');
  for (const s of stacks) {
    if (!s || !s.slug) continue;
    index.push({ t: s.h1, d: (s.description || '').slice(0, 180), u: `/ii-modeli/stek/${s.slug}/`, k: 'Стек под задачу', c: 'ИИ-модели', g: (s.steps || []).flatMap((x) => x.picks || []).join(' ') });
  }
  const hw = require('./models/_hardware.js');
  for (const h of hw) {
    if (!h || !h.slug) continue;
    index.push({ t: h.h1, d: (h.description || '').slice(0, 180), u: `/ii-modeli/zhelezo/${h.slug}/`, k: 'Подборка по железу', c: 'ИИ-модели', g: '' });
  }
  const gloss = require('./models/_glossary.js');
  for (const g of gloss) {
    if (!g || !g.term) continue;
    index.push({ t: g.term, d: (g.def || '').slice(0, 180), u: `/ii-modeli/slovar/#${g.slug}`, k: 'Термин', c: 'ИИ-модели', g: '' });
  }
  index.push({ t: 'Калькулятор окупаемости: облачный ИИ или свой сервер', d: 'Посчитайте, за сколько месяцев свой сервер с открытой моделью окупится против оплаты облачного API.', u: '/ii-modeli/kalkulyator-okupaemosti/', k: 'Калькулятор', c: 'ИИ-модели', g: 'облако API окупаемость стоимость сервер' });
  const alts = require('./models/_alternatives.js');
  for (const a of alts) {
    if (!a || !a.slug) continue;
    index.push({ t: a.h1, d: (a.description || a.intro || '').slice(0, 180), u: `/ii-modeli/alternativa/${a.slug}/`, k: 'Альтернатива сервису', c: 'ИИ-модели', g: (a.picks || []).join(' ') });
  }
  const cmp = require('./models/_compare.js');
  for (const p of cmp) {
    if (!p || !p.slug) continue;
    index.push({ t: p.h1, d: p.description || '', u: `/ii-modeli/sravnenie/${p.slug}/`, k: 'Сравнение моделей', c: 'ИИ-модели', g: `${p.a} ${p.b}` });
  }
} catch (e) {
  console.log(`  ⚠ Модели не попали в поиск: ${e.message}`);
}

const out = path.join(ROOT, 'search-index.json');
fs.writeFileSync(out, JSON.stringify(index), 'utf8');
console.log(`Поисковый индекс: ${index.length} записей → ${out}`);
