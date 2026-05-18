// Generates yandex-business.yml from services-data.js + audit catalog.
// Run: node tools/build-yml.js
// Upload result to Yandex.Business → «Загрузить XLS/YML».

const fs = require('fs');
const path = require('path');

const SITE = 'https://chimitdorzhi.tech';
const AUDIT = 'https://audit.chimitdorzhi.tech';
const OUT = path.resolve(__dirname, '..', 'yandex-business.yml');

const data = require('./services-data.js');
const services = data.services || data;
const categoriesMap = data.categories || {};

// YML category IDs (parent IT-услуги = 1, dynamically assign children)
const categoryIds = {};
let nextId = 2;
const ymlCategories = [{ id: 1, name: 'IT-услуги' }];
for (const key of Object.keys(categoriesMap)) {
  const id = nextId++;
  categoryIds[key] = id;
  ymlCategories.push({ id, name: categoriesMap[key].label, parentId: 1 });
}
// Add a fallback category for audit pages
const auditCatId = nextId++;
categoryIds._audit = auditCatId;
ymlCategories.push({ id: auditCatId, name: 'Аудит и консалтинг', parentId: 1 });

// XML escape
const esc = (s) => String(s || '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&apos;');

function offer(o) {
  return `      <offer id="${esc(o.id)}" available="true">
        <name>${esc(o.name)}</name>
        <price>${o.price}</price>
        <currencyId>RUR</currencyId>
        <categoryId>${o.categoryId}</categoryId>
        <url>${esc(o.url)}</url>
        <description>${esc(o.description)}</description>
        <vendor>Chimitdorzhi Studio</vendor>
      </offer>`;
}

// Build offers from /services/ catalog
const offers = services.map(s => ({
  id: s.s,
  name: s.n,
  price: s.p || 0,
  categoryId: categoryIds[s.c] || 1,
  url: `${SITE}/services/${s.s}/`,
  description: s.d
}));

// Add 3 audit-subdomain offers
offers.push({
  id: 'audit-152-fz',
  name: 'Аудит сайта по 152-ФЗ',
  price: 5000,
  categoryId: categoryIds._audit,
  url: `${AUDIT}/`,
  description: 'Проверка сайта на соответствие закону о персональных данных. 30+ пунктов: политика, согласия, cookie, уведомление в РКН, локализация. Отчёт за 1-3 дня. Защита от штрафов до 500 млн рублей.'
});
offers.push({
  id: 'audit-security',
  name: 'Аудит безопасности сайта',
  price: 15000,
  categoryId: categoryIds._audit,
  url: `${AUDIT}/security/`,
  description: 'Проверка на уязвимости: SQL-инъекции, XSS, CSRF, утечки, слабые пароли, открытые порты, устаревшие зависимости. Отчёт с приоритетами и планом устранения.'
});
offers.push({
  id: 'audit-legal',
  name: 'Юридический аудит сайта',
  price: 10000,
  categoryId: categoryIds._audit,
  url: `${AUDIT}/legal/`,
  description: 'Проверка договора оферты, политики конфиденциальности, пользовательского соглашения. Соответствие 152-ФЗ, ГК РФ, ЗоЗПП и требованиям РКН.'
});

const date = new Date().toISOString().slice(0, 16).replace('T', ' ');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<yml_catalog date="${date}">
  <shop>
    <name>Chimitdorzhi Studio</name>
    <company>Chimitdorzhi Studio</company>
    <url>${SITE}</url>
    <currencies>
      <currency id="RUR" rate="1"/>
    </currencies>
    <categories>
${ymlCategories.map(c =>
  `      <category id="${c.id}"${c.parentId ? ` parentId="${c.parentId}"` : ''}>${esc(c.name)}</category>`
).join('\n')}
    </categories>
    <offers>

${offers.map(offer).join('\n\n')}

    </offers>
  </shop>
</yml_catalog>
`;

fs.writeFileSync(OUT, xml, 'utf8');
console.log(`OK: ${offers.length} services + ${ymlCategories.length} categories`);
console.log(`  ${OUT}`);
