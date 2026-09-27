// PDF-прайс в фирменных цветах: обложка + разделы с ценами.
// Запуск: node tools/build-prices-pdf.js [папка-вывода]
// Печатает через Chromium из движка ux-ui-agent-skills (там стоит Playwright).
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.resolve(process.argv[2] || path.join(ROOT, 'ceny'));
const PW = 'C:/Users/Chimitdorzhi/projects/ux-ui-agent-skills/node_modules/playwright';

const ROWS = require('./prices-data.js');
const { GROUPS, SCENARIOS } = require('./prices-meta.js');

const MONTH = 'сентябрь 2026';
const CONTACTS = [
  ['telegram-logo', 'Telegram', 't.me/chimitdorzhi'],
  ['globe', 'Сайт', 'chimitdorzhi.tech/ceny'],
  ['envelope-simple', 'Почта', 'chimitdorzhi26@gmail.com'],
  ['phone', 'Телефон', '+971 56 336 9591'],
];

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const rub = (n) => n.toLocaleString('ru-RU').replace(/\u202f|\u00a0/g, '\u00a0') + '\u00a0₽';
const file = (rel) => pathToFileURL(path.join(ROOT, rel)).href;
const priced = (r) => r.price.kind === 'price';
// Типографика: не рвать «15 000», «от 5» и не оставлять короткие слова в конце строки.
const nb = (s) => String(s).replace(/(\d)\s(?=\d{3}(?!\d))/g, '$1\u00a0').replace(/(^|\s)(от|до|по|на|с|в|и|к|у|о|а|за|из|не)\s/gi, '$1$2\u00a0');

function price(r) {
  const p = r.price;
  if (p.kind === 'project') return ['По проекту', 'от 500 тыс. ₽'];
  if (!priced(r)) return ['', ''];
  const tail = p.unit === 'month' ? '/мес' : p.unit === 'hour' ? '/час' : '';
  const sub = p.prefix || (p.unit === 'month' ? 'ежемесячно' : p.unit === 'hour' ? 'почасово' : 'разово');
  return ['от\u00a0' + rub(p.value) + tail, sub];
}
function after(r) {
  const m = (r.monthly || '').trim();
  if (!m || /это и есть/.test(m)) return '<span class="muted">входит в оплату</span>';
  if (/^нет$/i.test(m)) return '<span class="muted">не нужно</span>';
  return esc(nb(m));
}

// --- Строки раздела: подзаголовки по исходным разделам прайса ---
function groupRows(rows) {
  let html = '', cur = '';
  for (const r of rows) {
    const sub = r.section.replace(/^ИИ:\s*/, '');
    if (r.section !== cur && rows.some((x) => x.section !== rows[0].section)) {
      cur = r.section;
      html += `<div class="sub">${esc(sub)}</div>`;
    }
    const [p, ps] = price(r);
    html += `<div class="row">
      <div class="c-main"><div class="name">${esc(r.name)}</div><div class="what">${esc(nb(r.what))}</div></div>
      <div class="c-price${r.price.kind === 'project' ? ' is-proj' : ''}"><b>${p}</b><span>${esc(ps)}</span></div>
      <div class="c-term">${esc(nb(r.term.label))}</div>
      <div class="c-after">${after(r)}</div>
    </div>`;
  }
  return html;
}

function employee(rows) {
  const priceRows = rows.filter(priced);
  const how = rows.find((r) => r.id === 'kak-rabotaet');
  const roles = rows.filter((r) => r.price.kind === 'included' && r.id !== 'kak-rabotaet');
  return `<div class="card">${groupRows(priceRows)}</div>
    ${how ? `<p class="how">${esc(how.what)}</p>` : ''}
    <div class="roles">${roles.map((r) => `<div class="role"><b>${esc(r.name)}</b><span>${esc(r.what)}</span></div>`).join('')}</div>`;
}

const directions = ROWS.filter((r) => r.price.kind !== 'included').length;
const head = `<div class="thead"><span>Направление</span><span>Цена</span><span>Срок</span><span>После запуска, в месяц</span></div>`;

const sections = GROUPS.map((g) => {
  const rows = ROWS.filter((r) => r.group === g.key);
  return `<section class="group">
    <header class="g-head">
      <div class="g-icon"><i class="ph ph-${g.icon}"></i></div>
      <div><h2>${esc(g.label)}</h2><p>${esc(g.lead)}</p></div>
    </header>
    ${g.key === 'employee' ? employee(rows) : `<div class="card">${head}${groupRows(rows)}</div>`}
  </section>`;
}).join('\n');

const byId = Object.fromEntries(ROWS.map((r) => [r.id, r]));
const scenarios = SCENARIOS.map((s) => {
  const items = s.ids.map((id) => byId[id]);
  const once = items.filter((r) => priced(r) && r.price.unit === 'once').reduce((a, r) => a + r.price.value, 0);
  const month = items.filter((r) => priced(r) && r.price.unit === 'month').reduce((a, r) => a + r.price.value, 0);
  return `<div class="scen"><h3>${esc(s.title)}</h3><p>${esc(s.note)}</p>
    <ul>${items.map((r) => `<li>${esc(r.name)}</li>`).join('')}</ul>
    <div class="scen-sum"><b>от\u00a0${rub(once)}</b>${month ? `<span>+ от\u00a0${rub(month)} в месяц</span>` : '<span>разово</span>'}</div></div>`;
}).join('');

const html = `<!doctype html>
<html lang="ru"><head><meta charset="utf-8">
<title>Цены 2026 — Chimitdorzhi Studio</title>
<link rel="stylesheet" href="${file('assets/phosphor/regular.css')}">
<style>
@font-face { font-family: Manrope; src: url('${file('assets/fonts/manrope-cyrillic.woff2')}') format('woff2'); font-weight: 200 800; unicode-range: U+0400-04FF, U+0500-052F; }
@font-face { font-family: Manrope; src: url('${file('assets/fonts/manrope-latin.woff2')}') format('woff2'); font-weight: 200 800; }

/* Фирменные цвета WELLEX с сайта */
:root {
  --blue: #1e4fd6; --blue-2: #4f8cff; --blue-3: #7aa8ff;
  --navy: #12224e; --navy-2: #1b2f73; --ink: #12224e; --ink-2: #4a5670; --ink-3: #6b7590;
  --lav: #ECEFFA; --line: rgba(18, 34, 78, .10); --card: rgba(255, 255, 255, .86);
}
@page { size: A4; margin: 15mm 14mm 16mm;
  @bottom-left { content: "Chimitdorzhi Studio · Цены, ${MONTH}"; font: 500 7.5pt Manrope, sans-serif; color: #6b7590; }
  @bottom-right { content: counter(page); font: 700 8pt Manrope, sans-serif; color: #1e4fd6; } }
@page :first { margin: 0; @bottom-left { content: none; } @bottom-right { content: none; } }
* { box-sizing: border-box; }
html { background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { margin: 0; font-family: Manrope, 'Segoe UI', Arial, sans-serif; color: var(--ink); font-size: 9pt; line-height: 1.4; }

/* ---------- Обложка ---------- */
.cover { width: 210mm; height: 297mm; position: relative; overflow: hidden; color: #fff; break-after: page;
  background:
    radial-gradient(70% 45% at 100% 0%, rgba(79, 140, 255, .55), transparent 62%),
    radial-gradient(55% 40% at 0% 100%, rgba(90, 79, 224, .35), transparent 60%),
    linear-gradient(160deg, #12224e 0%, #1b2f73 58%, #1e3a8f 100%);
  padding: 18mm 18mm 16mm; display: flex; flex-direction: column; }
.logo { width: 62mm; height: 13.6mm; overflow: hidden; }
.logo img { width: 62mm; height: 62mm; margin-top: -24.2mm; display: block; }
.eyebrow { margin-top: 30mm; font-size: 8.5pt; font-weight: 800; letter-spacing: .18em; text-transform: uppercase; color: var(--blue-3); }
.cover h1 { margin: 6mm 0 0; font-size: 36pt; line-height: 1.04; font-weight: 800; letter-spacing: -.02em; max-width: 160mm; }
.cover h1 span { color: var(--blue-3); }
.lead { margin: 8mm 0 0; font-size: 11.5pt; line-height: 1.5; color: rgba(255, 255, 255, .86); max-width: 150mm; }
.stats { display: flex; gap: 12mm; margin-top: 10mm; }
.stat b { display: block; font-size: 24pt; font-weight: 800; line-height: 1; }
.stat span { display: block; margin-top: 2mm; font-size: 8.5pt; color: rgba(255, 255, 255, .72); }
.toc { margin-top: 12mm; }
.toc-h { font-size: 7.5pt; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; color: rgba(255, 255, 255, .6); }
.toc-list { margin-top: 3mm; display: grid; grid-template-columns: 1fr 1fr; gap: 0 10mm; }
.toc-i { display: flex; align-items: center; gap: 3mm; padding: 2.4mm 0; border-bottom: 1px solid rgba(255, 255, 255, .12); font-size: 9.5pt; font-weight: 700; }
.toc-i i { color: var(--blue-3); font-size: 11pt; }
.toc-i span { flex: 1; }
.toc-i em { font-style: normal; font-size: 8pt; font-weight: 600; color: rgba(255, 255, 255, .6); }
.legend { margin-top: auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 4mm; }
.leg { padding: 5mm; border-radius: 4mm; background: rgba(255, 255, 255, .08); border: 1px solid rgba(255, 255, 255, .16); }
.leg b { display: block; font-size: 11pt; font-weight: 800; color: #fff; }
.leg span { display: block; margin-top: 2mm; font-size: 8pt; line-height: 1.45; color: rgba(255, 255, 255, .78); }
.contacts { margin-top: 8mm; padding-top: 6mm; border-top: 1px solid rgba(255, 255, 255, .18); display: grid; grid-template-columns: repeat(4, auto); justify-content: space-between; gap: 4mm; }
.ct { display: flex; align-items: center; gap: 2.5mm; }
.ct i { font-size: 13pt; color: var(--blue-3); }
.ct small { display: block; font-size: 6.5pt; letter-spacing: .1em; text-transform: uppercase; color: rgba(255, 255, 255, .6); }
.ct span { display: block; font-size: 8.5pt; font-weight: 700; }
.fine { margin-top: 5mm; font-size: 7pt; color: rgba(255, 255, 255, .55); }

/* ---------- Разделы ---------- */
.group { break-before: page; }
.group:first-of-type { break-before: auto; }
.g-head { display: flex; gap: 4mm; align-items: flex-start; margin-bottom: 5mm; }
.g-icon { flex: none; width: 11mm; height: 11mm; border-radius: 3mm; display: grid; place-items: center;
  background: linear-gradient(150deg, var(--blue), var(--blue-2)); color: #fff; font-size: 15pt; }
.g-head h2 { margin: 0; font-size: 19pt; line-height: 1.1; font-weight: 800; letter-spacing: -.01em; }
.g-head p { margin: 1.5mm 0 0; font-size: 9pt; color: var(--ink-2); max-width: 150mm; }
.card { padding: 0; }
.thead, .row { display: grid; grid-template-columns: minmax(0, 1fr) 33mm 22mm 36mm; gap: 4mm; }
.thead { padding: 2.5mm 0 2mm; border-bottom: 1.5px solid var(--navy); font-size: 6.8pt; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: var(--ink-3); }
.sub { margin: 3.5mm 0 0; padding: 1mm 0; font-size: 7.2pt; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; color: var(--blue); break-after: avoid; }
.row { padding: 2.4mm 0; border-bottom: 1px solid var(--line); break-inside: avoid; align-items: start; }
.row:last-child { border-bottom: 0; }
.name { font-size: 9.6pt; font-weight: 800; line-height: 1.25; }
.what { margin-top: .8mm; font-size: 8pt; line-height: 1.4; color: var(--ink-2); }
.c-price b { display: block; font-size: 9.8pt; font-weight: 800; color: var(--navy); white-space: nowrap; font-variant-numeric: tabular-nums; }
.c-price span { display: block; font-size: 7pt; color: var(--ink-3); margin-top: .3mm; }
.c-price.is-proj b { color: var(--blue); }
.c-term { font-size: 8pt; color: var(--ink-2); }
.c-after { font-size: 7.8pt; line-height: 1.35; color: var(--ink-2); }
.muted { color: var(--ink-3); }

.how { margin: 4mm 0 0; font-size: 8.5pt; line-height: 1.5; color: var(--ink-2); }
.roles { margin-top: 4mm; display: grid; grid-template-columns: 1fr 1fr; gap: 3mm 6mm; }
.role { padding-top: 2mm; border-top: 1px solid var(--line); break-inside: avoid; }
.role b { display: block; font-size: 9pt; }
.role span { display: block; margin-top: .6mm; font-size: 8pt; line-height: 1.4; color: var(--ink-2); }

/* ---------- Сценарии и финал ---------- */
.final { break-before: page; }
.final h2 { margin: 0; font-size: 19pt; font-weight: 800; }
.final > p { margin: 1.5mm 0 5mm; font-size: 9pt; color: var(--ink-2); }
.scens { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; }
.scen { background: var(--lav); border-radius: 4mm; padding: 4.5mm; break-inside: avoid; }
.scen h3 { margin: 0; font-size: 11pt; font-weight: 800; }
.scen p { margin: 1.2mm 0 0; font-size: 8pt; color: var(--ink-2); }
.scen ul { margin: 2.5mm 0 0; padding-left: 4mm; font-size: 8pt; }
.scen-sum { margin-top: 3mm; padding-top: 2.5mm; border-top: 1px solid var(--line); display: flex; gap: 3mm; align-items: baseline; }
.scen-sum b { font-size: 12pt; color: var(--navy); }
.scen-sum span { font-size: 7.5pt; color: var(--ink-3); }
.cta { margin-top: 6mm; padding: 6mm; border-radius: 4mm; color: #fff; background: linear-gradient(150deg, var(--navy), var(--blue)); display: flex; justify-content: space-between; align-items: center; gap: 6mm; break-inside: avoid; }
.cta b { font-size: 13pt; }
.cta p { margin: 1.5mm 0 0; font-size: 8.5pt; color: rgba(255, 255, 255, .82); max-width: 110mm; }
.cta a { color: #fff; font-weight: 800; font-size: 10pt; text-decoration: none; white-space: nowrap; border: 1px solid rgba(255, 255, 255, .5); border-radius: 3mm; padding: 3mm 5mm; }
</style></head>
<body>
<section class="cover">
  <div class="logo"><img src="${file('logo-wordmark.png')}" alt="Chimitdorzhi Studio"></div>
  <div class="eyebrow">Прайс-лист · ${MONTH}</div>
  <h1>Разработка и внедрение <span>ИИ для бизнеса</span></h1>
  <p class="lead">${esc(nb('Искусственный интеллект, 1С, сайты, боты, маркетинг и безопасность. У каждой позиции цена от нижней границы, срок и то, что вы платите после запуска.'))}</p>
  <div class="stats">
    <div class="stat"><b>${directions}</b><span>направлений</span></div>
    <div class="stat"><b>${GROUPS.length}</b><span>групп услуг</span></div>
    <div class="stat"><b>${SCENARIOS.length}</b><span>готовых наборов</span></div>
  </div>
  <div class="toc"><div class="toc-h">Что внутри</div><div class="toc-list">${GROUPS.map((g) => `<div class="toc-i"><i class="ph ph-${g.icon}"></i><span>${esc(g.label)}</span><em>${ROWS.filter((r) => r.group === g.key && r.price.kind !== 'included').length || 'пакет'}</em></div>`).join('')}</div></div>
  <div class="legend">
    <div class="leg"><b>от 40 000 ₽</b><span>Нижняя граница. Точная сумма после разговора о задаче и объёме.</span></div>
    <div class="leg"><b>По проекту</b><span>Крупные задачи от 500 000 ₽ считаются отдельно под ваши вводные.</span></div>
    <div class="leg"><b>После запуска</b><span>Что вы платите не мне: сервер, модули, подписки. Указано у каждой позиции.</span></div>
  </div>
  <div class="contacts">${CONTACTS.map(([ic, l, v]) => `<div class="ct"><i class="ph ph-${ic}"></i><div><small>${l}</small><span>${esc(v)}</span></div></div>`).join('')}</div>
  <div class="fine">Цены действительны на ${MONTH} и не являются публичной офертой. Чимитдоржи Дарижапов · Chimitdorzhi Studio</div>
</section>
${sections}
<section class="final">
  <h2>С чего обычно начинают</h2>
  <p>Готовые наборы под частые ситуации. Суммы сложены из позиций этого прайса.</p>
  <div class="scens">${scenarios}</div>
  <div class="cta"><div><b>Не нашли свою задачу?</b><p>Опишите её в Telegram: скажу, как решить, сколько займёт и во что обойдётся после запуска.</p></div><a href="https://t.me/chimitdorzhi">t.me/chimitdorzhi</a></div>
</section>
</body></html>`;

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const htmlPath = path.join(OUT_DIR, 'ceny-2026.html');
  fs.writeFileSync(htmlPath, html);
  const { chromium } = require(PW);
  // Встроенная оболочка Playwright на этой машине падает на ICU, берём установленный Chrome, как гейты движка.
  const browser = await chromium.launch({ channel: 'chrome' }).catch(() => chromium.launch());
  const page = await browser.newPage();
  await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const pdfPath = path.join(OUT_DIR, 'chimitdorzhi-ceny-2026.pdf');
  await page.pdf({ path: pdfPath, format: 'A4', printBackground: true, preferCSSPageSize: true });
  const fonts = await page.evaluate(() => [...document.fonts].filter((f) => f.status === 'loaded').map((f) => f.family + ' ' + f.weight));
  await browser.close();
  console.log('PDF:', pdfPath, Math.round(fs.statSync(pdfPath).size / 1024) + ' КБ');
  console.log('шрифты загружены:', [...new Set(fonts)].join(', ') || 'НЕТ');
})();
