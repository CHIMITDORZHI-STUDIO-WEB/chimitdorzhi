// Сборка раздела /ii-modeli/ (и английской копии /en/ii-modeli/) — энциклопедия открытых ИИ-моделей.
// Данные: tools/models-data.js (+ tools/models/*.js). Подписи: tools/models-i18n.js.
// Тексты подборок: tools/models/_collections.js, сравнения: tools/models/_compare.js (оба необязательны).
// Шапка, навигация и подвал берутся из predlozheniya/index.html, чтобы раздел жил в оболочке сайта.
// Порядок сборки сайта: build-services → build-offers → … → build-models → build-blog (блог последним).
const fs = require('fs');
const path = require('path');
const { MOD, GROUPS, HW, COM, INDUSTRY, RU_LANG, COUNTRY, OTHER_COUNTRY, MONTHS, MONTHS_FULL, T } = require('./models-i18n.js');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://chimitdorzhi.tech';
const UPDATED = { ru: '22.09.2026', en: '22 Sep 2026' };
const LASTMOD = '2026-09-22';
const CSS_V = 16;
const LANGS = ['ru', 'en'];
const BASE = { ru: '/ii-modeli/', en: '/en/ii-modeli/' };
const OUT = { ru: path.join(ROOT, 'ii-modeli'), en: path.join(ROOT, 'en', 'ii-modeli') };
const MOD_KEYS = Object.keys(MOD);
const FIRST = 60; // сколько карточек в разметке каталога; остальные страница строит из JSON
// Семейство, у которого последний открытый выпуск раньше этой даты, считаем замершим.
const STALE_FROM = '2024-09';
const isStale = (m) => m.latest < STALE_FROM;
const quantOf = (m) => (Array.isArray(m.quant) ? m.quant : []);
const hasGguf = (m) => quantOf(m).includes('gguf');

// --- Данные и проверка записей ---
const ALL = require('./models-data.js').filter((m) => {
  const bad = [];
  for (const k of ['id', 'name', 'developer', 'country', 'first', 'latest', 'sizes', 'license', 'summary']) if (!m[k]) bad.push(k);
  if (!/^[a-z0-9-]+$/.test(m.id || '')) bad.push('id-format');
  if (!/^\d{4}-\d{2}$/.test(m.first || '') || !/^\d{4}-\d{2}$/.test(m.latest || '')) bad.push('dates');
  if (!Array.isArray(m.modality) || !m.modality.length || m.modality.some((x) => !MOD_KEYS.includes(x))) bad.push('modality');
  if (!Array.isArray(m.hardware) || !m.hardware.length || m.hardware.some((x) => !HW[x])) bad.push('hardware');
  if (!COM[m.commercial]) bad.push('commercial');
  if (!Array.isArray(m.tasks) || m.tasks.length < 2 || !Array.isArray(m.where) || !m.where.length) bad.push('tasks/where');
  if (!Array.isArray(m.versions) || !m.versions.length || m.versions.some((v) => !/^\d{4}-\d{2}$/.test(v[1]))) bad.push('versions');
  if (bad.length) console.log(`  ⚠ ${m.id || m.name}: пропущено (${bad.join(', ')})`);
  return !bad.length;
});
// Английская страница строится только для записей с готовым переводом.
const hasEn = (m) => m.en && m.en.summary && Array.isArray(m.en.tasks) && m.en.tasks.length && Array.isArray(m.en.where);
const MODELS = { ru: ALL, en: ALL.filter(hasEn) };
const EN_IDS = new Set(MODELS.en.map((m) => m.id));
// Поля записи на нужном языке.
function loc(m, lang) {
  if (lang === 'ru') return m;
  const e = m.en || {};
  return { ...m, summary: e.summary, tasks: e.tasks, where: e.where, license: e.license || m.license,
    developer: e.developer || m.developer, country: e.country || m.country, sizes: e.sizes || m.sizes };
}

const readOpt = (f) => { try { return require(f); } catch (e) { return null; } };
const COLL = readOpt('./models/_collections.js');
const ALTS = (readOpt('./models/_alternatives.js') || []).filter((a) => a && a.slug && Array.isArray(a.picks));
const GUIDES = readOpt('./models/_guides.js') || {};
const STACKS = (readOpt('./models/_stacks.js') || []).filter((x) => x && x.slug && Array.isArray(x.steps));
const GLOSS = (readOpt('./models/_glossary.js') || []).filter((x) => x && x.term && x.def);
const HWPAGES = (readOpt('./models/_hardware.js') || []).filter((x) => x && x.slug && x.key);
const CMP = (readOpt('./models/_compare.js') || []).filter((c) => ALL.some((m) => m.id === c.a) && ALL.some((m) => m.id === c.b));

// --- Утилиты ---
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const tg = (text) => 'https://t.me/chimitdorzhi?text=' + encodeURIComponent(text);
const fmtMonth = (ym, lang) => { const [y, m] = ym.split('-'); return MONTHS[lang][+m - 1] + ' ' + y; };
const years = (m) => { const a = m.first.slice(0, 4), b = m.latest.slice(0, 4); return a === b ? a : `${a}–${b}`; };
const modLabel = (k, lang) => MOD[k][lang];
const modChip = (k, lang) => `<span class="md-mod"><i class="ph ph-${MOD[k].icon}" aria-hidden="true"></i>${modLabel(k, lang)}</span>`;
const lic = (c, lang) => `<span class="md-lic md-lic-${COM[c].cls}">${COM[c][lang]}</span>`;
const countryKeys = (m) => { const k = COUNTRY.filter(([, , re]) => re.test(m.country)).map(([key]) => key); return k.length ? k : ['other']; };
const BRANDS = [
  ['sber', 'Сбер', 'Sber', /Сбер|ai-forever|SberDevices|ai-sage|Salute/i], ['yandex', 'Яндекс', 'Yandex', /Яндекс|Yandex/i], ['tbank', 'Т-Банк', 'T-Bank', /Т-Банк|T-Bank|T-Tech|Тинькофф/i],
  ['alibaba', 'Alibaba', 'Alibaba', /Alibaba|Qwen|Tongyi|Alibaba Cloud|DAMO/i], ['google', 'Google', 'Google', /Google|DeepMind/i], ['meta', 'Meta', 'Meta', /(^|[^A-Za-z])Meta([^A-Za-z]|$)|FAIR/],
  ['nvidia', 'NVIDIA', 'NVIDIA', /NVIDIA/i], ['microsoft', 'Microsoft', 'Microsoft', /Microsoft/i], ['deepseek', 'DeepSeek', 'DeepSeek', /DeepSeek/i], ['tencent', 'Tencent', 'Tencent', /Tencent|Hunyuan/i],
  ['bytedance', 'ByteDance', 'ByteDance', /ByteDance/i], ['mistral', 'Mistral AI', 'Mistral AI', /Mistral/i], ['openai', 'OpenAI', 'OpenAI', /OpenAI/i], ['ibm', 'IBM', 'IBM', /IBM/i],
  ['ai2', 'Ai2 (Allen AI)', 'Ai2 (Allen AI)', /Ai2|Allen/i], ['hf', 'Hugging Face', 'Hugging Face', /Hugging ?Face/i], ['stability', 'Stability AI', 'Stability AI', /Stability/i], ['zhipu', 'Zhipu / Z.ai', 'Zhipu / Z.ai', /Zhipu|Z\.ai|THUDM|zai-org/i],
  ['moonshot', 'Moonshot AI', 'Moonshot AI', /Moonshot/i], ['baidu', 'Baidu', 'Baidu', /Baidu/i], ['xiaomi', 'Xiaomi', 'Xiaomi', /Xiaomi/i], ['meituan', 'Meituan', 'Meituan', /Meituan/i],
  ['ant', 'Ant Group', 'Ant Group', /Ant Group|inclusionAI|Ant /i], ['minimax', 'MiniMax', 'MiniMax', /MiniMax/i], ['nous', 'Nous Research', 'Nous Research', /Nous/i], ['cohere', 'Cohere', 'Cohere', /Cohere/i],
];
const brandKeys = (m) => BRANDS.filter((b) => b[3].test(m.developer)).map((b) => b[0]);
const hasField = (list, k) => list.filter((m) => m[k] !== undefined).length >= list.length * 0.5;
const plural = (n, one, few, many) => (n % 10 === 1 && n % 100 !== 11 ? one : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? few : many));

// --- Оболочка сайта ---
const shellSrc = fs.readFileSync(path.join(ROOT, 'predlozheniya', 'index.html'), 'utf8');
const headTpl = shellSrc.slice(0, shellSrc.indexOf('<script type="application/ld+json">'));
const bodyStart = shellSrc.slice(shellSrc.indexOf('</head>'), shellSrc.indexOf('<main id="main">'));
const footer = shellSrc.slice(shellSrc.indexOf('<footer'), shellSrc.indexOf('</footer>') + 9);
const scripts = (shellSrc.match(/<script src="\/i18n\.js[^"]*" defer><\/script>\s*<script src="\/script\.js[^"]*" defer><\/script>/) || [''])[0];

function head({ lang, title, description, url, ld, image, alt }) {
  const img = image || `${SITE}${BASE[lang]}cover.png`;
  let h = headTpl
    .replace(/<html lang="ru"([^>]*)data-lang="ru"/, lang === 'en' ? '<html lang="en"$1data-lang="en"' : '<html lang="ru"$1data-lang="ru"')
    .replace(/(<meta property="og:locale" content=")[^"]*/, `$1${lang === 'en' ? 'en_US' : 'ru_RU'}`)
    .replace(/(<meta property="og:image" content=")[^"]*/, `$1${img}`)
    .replace(/(<meta property="og:image" content="[^"]*">)/, `$1\n    <meta property="og:image:width" content="1200">\n    <meta property="og:image:height" content="630">\n    <meta name="twitter:image" content="${img}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(description)}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(title)}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(description)}`);
  if (alt) h += `<link rel="alternate" hreflang="ru" href="${alt.ru}">\n<link rel="alternate" hreflang="en" href="${alt.en}">\n<link rel="alternate" hreflang="x-default" href="${alt.ru}">\n`;
  h += `<link rel="stylesheet" href="/assets/models.css?v=${CSS_V}">\n`;
  for (const obj of ld || []) h += `<script type="application/ld+json">${JSON.stringify(obj)}</script>\n`;
  return h;
}
// Пометка про Meta, как в блоге: упоминание без неё грозит штрафом по ст. 13.15 КоАП.
function metaNote(html, lang) {
  const text = html.replace(/href="[^"]*"/g, '').replace(/<script[\s\S]*?<\/script>/g, '');
  const meta = /(^|[^0-9A-Za-zА-Яа-я])Meta([^0-9A-Za-zА-Яа-я]|$)/.test(text);
  const net = /instagram|инстаграм|facebook|фейсбук/i.test(text);
  if (!meta && !net) return '';
  const t = T[lang];
  return `<aside class="blog-legal-note md-legal" role="note"><p><strong>${t.important}</strong> ${net ? t.metaNoteNet : t.metaNoteMeta} ${t.metaNoteTail}</p></aside>`;
}
const PAGES = []; // для sitemap
function writePage(lang, rel, { title, description, ld, main, extraJs = '', image, altRel }) {
  const url = `${SITE}${BASE[lang]}${rel}`;
  const alt = altRel !== undefined ? { ru: `${SITE}${BASE.ru}${altRel}`, en: `${SITE}${BASE.en}${altRel}` } : null;
  const note = metaNote(main, lang);
  if (note) main = main.replace(/<\/div><\/section>\s*$/, note + '</div></section>');
  const html = head({ lang, title, description, url, ld, image, alt }) + bodyStart + `<main id="main">\n${main}\n</main>\n` + footer + '\n' + scripts + extraJs + '\n</body>\n</html>\n';
  const dir = path.join(OUT[lang], rel);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  PAGES.push(url);
}
const crumbs = (lang, items) => `<nav class="breadcrumbs" aria-label="${lang === 'ru' ? 'Хлебные крошки' : 'Breadcrumbs'}"><a href="${lang === 'ru' ? '/' : '/en/'}">${T[lang].home}</a>${items.map(([href, label]) => `<span class="breadcrumbs-sep">›</span>${href ? `<a href="${href}">${esc(label)}</a>` : `<span aria-current="page">${esc(label)}</span>`}`).join('')}</nav>`;
const ldCrumbs = (lang, items) => ({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [[`${SITE}${lang === 'ru' ? '/' : '/en/'}`, T[lang].home], ...items].map(([item, name], i) => ({ '@type': 'ListItem', position: i + 1, name, item })) });
function offer(lang) {
  const t = T[lang];
  return `<section class="md-offer" aria-labelledby="mdOfferT">
    <div class="md-offer-text"><h2 id="mdOfferT">${t.offerH}</h2><p>${t.offerP}</p></div>
    <ol class="md-steps">${t.steps.map(([b, s]) => `<li><b>${b}</b><span>${s}</span></li>`).join('')}</ol>
    <a class="btn btn-accent md-offer-btn" href="${tg(t.tgDeploy)}" target="_blank" rel="noopener"><i class="ph ph-telegram-logo" aria-hidden="true"></i>${t.offerBtn}</a>
  </section>`;
}

// --- Статьи блога, которые ссылаются на карточку модели (только для русской версии) ---
const ARTICLES = {};
(() => {
  const dir = path.join(ROOT, 'blog');
  if (!fs.existsSync(dir)) return;
  for (const slug of fs.readdirSync(dir)) {
    const f = path.join(dir, slug, 'index.html');
    if (!fs.existsSync(f)) continue;
    const html = fs.readFileSync(f, 'utf8');
    if (html.indexOf('/ii-modeli/') < 0) continue;
    const title = ((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || '').replace(/<[^>]+>/g, '').trim();
    if (!title) continue;
    const ids = new Set([...html.matchAll(/href="\/ii-modeli\/([a-z0-9-]+)\/"/g)].map((x) => x[1]));
    for (const id of ids) (ARTICLES[id] = ARTICLES[id] || []).push({ slug, title });
  }
})();

// --- Карточка модели в сетке ---
function card(m0, lang, { compare = true } = {}) {
  const t = T[lang], m = loc(m0, lang);
  const q = [m.name, m.developer, m.country, ...m.modality.map((x) => modLabel(x, lang)), ...m.tasks, ...m.where, ...(m.industries || []).map((k) => (INDUSTRY[k] || {})[lang] || '')].join(' ').toLowerCase().replace(/ё/g, 'е');
  const badges = (m.ru === 'yes' ? `<span class="md-badge md-badge-ru" title="${t.ruBadge}">RU</span>` : '')
    + (m.ollama ? `<span class="md-badge" title="${t.ollamaBadge}">Ollama</span>` : '')
    + (!m.ollama && hasGguf(m) ? `<span class="md-badge" title="${t.ggufBadge}">GGUF</span>` : '')
    + (isStale(m) ? `<span class="md-badge md-badge-old" title="${esc(t.staleTitle(fmtMonth(m.latest, lang)))}">${t.staleBadge}</span>` : '');
  return `<article class="md-card" data-id="${m.id}" data-mod="${m.modality.join(' ')}" data-hw="${m.hardware.join(' ')}" data-com="${m.commercial}" data-latest="${m.latest}" data-first="${m.first}" data-name="${esc(m.name.toLowerCase())}" data-country="${countryKeys(m0).join(' ')}" data-dev="${brandKeys(m0).join(' ')}" data-ru="${m.ru || ''}" data-ind="${(m.industries || []).join(' ')}" data-ollama="${m.ollama ? 1 : 0}" data-cpu="${m.cpu ? 1 : 0}" data-stale="${isStale(m) ? 1 : 0}" data-gguf="${hasGguf(m) ? 1 : 0}" data-q="${esc(q)}">
  <div class="md-card-top">${modChip(m.modality[0], lang)}<span class="md-card-meta">${badges}<span class="md-year">${years(m)}</span></span></div>
  <h2 class="md-name"><a href="${BASE[lang]}${m.id}/">${esc(m.name)}</a></h2>
  <div class="md-dev">${esc(m.developer)} · ${esc(m.country)}</div>
  <p class="md-sum">${esc(m.summary)}</p>
  <ul class="md-tasks">${m.tasks.slice(0, 3).map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
  <dl class="md-specs">
    <div><dt>${t.sizes}</dt><dd>${esc(m.sizes)}</dd></div>
    <div><dt>${t.fHw}</dt><dd>${t.hwFrom}: ${HW[m.hardware[0]][lang][0]}</dd></div>
  </dl>
  <div class="md-card-foot">${lic(m.commercial, lang)}<span class="md-more">${t.more}<i class="ph ph-arrow-right" aria-hidden="true"></i></span></div>
  ${compare ? `<label class="md-cmp"><input type="checkbox" class="md-cmp-box" value="${m.id}"><span>${t.compare}</span></label>` : ''}
</article>`;
}
// Карточки кликабельны целиком (без фильтров — для подборок).
const cardClickJs = `<script>(function(){[].forEach.call(document.querySelectorAll('.md-card'),function(c){c.addEventListener('click',function(e){if(e.target.closest('a,label,input'))return;location.href=c.querySelector('.md-name a').getAttribute('href');});});})();</script>`;

// --- Подборки: адреса и отбор моделей ---
function collectionList(lang) {
  if (!COLL) return [];
  const list = [];
  const models = MODELS[lang];
  for (const [k, c] of Object.entries(COLL.modality || {})) {
    if (!MOD[k] || !c.slug) continue;
    const items = models.filter((m) => m.modality.includes(k));
    if (items.length) list.push({ kind: 'modality', key: k, rel: `napravlenie/${c.slug}/`, c, items });
  }
  for (const [k, c] of Object.entries(COLL.industry || {})) {
    if (!INDUSTRY[k] || !c.slug) continue;
    const items = models.filter((m) => (m.industries || []).includes(k));
    if (items.length) list.push({ kind: 'industry', key: k, rel: `sfera/${c.slug}/`, c, items });
  }
  const SPECIAL = { russian: (m) => m.ru === 'yes', commercial: (m) => m.commercial === 'yes', laptop: (m) => m.hardware.includes('min'), ollama: (m) => m.ollama === true, cpu: (m) => m.cpu === true };
  for (const [k, c] of Object.entries(COLL.special || {})) {
    if (!SPECIAL[k] || !c.slug) continue;
    const items = models.filter(SPECIAL[k]);
    if (items.length) list.push({ kind: 'special', key: k, rel: `podborki/${c.slug}/`, c, items });
  }
  return list;
}
const ctext = (c, field, lang) => (lang === 'en' ? c[field + '_en'] : c[field]) || c[field];
function collectionLinks(lang, colls, currentRel) {
  const t = T[lang];
  const block = (label, kind) => {
    const items = colls.filter((x) => x.kind === kind);
    if (!items.length) return '';
    return `<div class="md-links-group"><h3>${label}</h3><ul class="md-links">${items.map((x) => `<li>${x.rel === currentRel ? `<span aria-current="page">${esc(ctext(x.c, 'h1', lang))}</span>` : `<a href="${BASE[lang]}${x.rel}">${esc(ctext(x.c, 'h1', lang))}</a>`} <small>${x.items.length}</small></li>`).join('')}</ul></div>`;
  };
  const links = (h3, items) => (items.length ? `<div class="md-links-group"><h3>${h3}</h3><ul class="md-links">${items.map(([href, label]) => `<li><a href="${BASE[lang]}${href}">${esc(label)}</a></li>`).join('')}</ul></div>` : '');
  const gtext = (g, k) => (lang === 'en' ? (g._en || {})[k] : g[k]) || g[k];
  const guideLinks = links(t.guidesGroupH, [
    ...Object.values(GUIDES).map((g) => [`${g.slug}/`, gtext(g, 'h1')]),
    ...(GLOSS.length ? [['slovar/', t.glossH1]] : []),
    ['kalkulyator-okupaemosti/', t.payH1],
  ]);
  const stackLinks = links(t.stacksGroupH, STACKS.map((x) => [`stek/${x.slug}/`, lang === 'en' ? (x._en || {}).h1 || x.h1 : x.h1]));
  const hwLinks = links(t.hwGroupH, HWPAGES.map((x) => [`zhelezo/${x.slug}/`, lang === 'en' ? (x.h1_en || x.h1) : x.h1]));
  const alt = ALTS.length ? `<div class="md-links-group"><h3>${t.altGroupH}</h3><ul class="md-links">${ALTS.map((x) => `<li><a href="${BASE[lang]}alternativa/${x.slug}/">${esc(lang === 'en' ? (x.h1_en || x.h1) : x.h1)}</a></li>`).join('')}</ul></div>` : '';
  const cmp = CMP.filter((p) => lang === 'ru' || (EN_IDS.has(p.a) && EN_IDS.has(p.b)));
  const cmpBlock = cmp.length ? `<div class="md-links-group"><h3>${t.comparisons}</h3><ul class="md-links">${cmp.map((p) => `<li><a href="${BASE[lang]}sravnenie/${p.slug}/">${esc(lang === 'en' ? (p.h1_en || p.h1) : p.h1)}</a></li>`).join('')}</ul></div>` : '';
  return `<section class="md-colls" aria-labelledby="mdCollsT"><h2 id="mdCollsT">${t.collectionsH}</h2><div class="md-colls-grid">${block(t.special, 'special')}${stackLinks}${alt}${hwLinks}${guideLinks}${block(t.byDirection, 'modality')}${block(t.byIndustry, 'industry')}${cmpBlock}</div></section>`;
}

// --- Каталог ---
function catalog(lang, colls) {
  const t = T[lang], models = MODELS[lang];
  const counts = {};
  for (const m of models) for (const x of m.modality) counts[x] = (counts[x] || 0) + 1;
  const grouped = new Set(GROUPS.flatMap((g) => g.keys));
  const groups = [...GROUPS];
  const rest = MOD_KEYS.filter((k) => !grouped.has(k));
  if (rest.length) groups.push({ ru: 'Прочее', en: 'Other', keys: rest });
  const chip = (k) => `<button type="button" class="md-chip" data-mod="${k}" aria-pressed="false"><i class="ph ph-${MOD[k].icon}" aria-hidden="true"></i>${modLabel(k, lang)}<span>${counts[k]}</span></button>`;
  const chips = groups.map((g) => {
    const inner = g.keys.filter((k) => counts[k]).map(chip).join('');
    return inner ? `<div class="md-chip-group"><span class="md-chip-label">${g[lang]}</span><div class="md-chip-row">${inner}</div></div>` : '';
  }).join('');
  const sorted = [...models].sort((a, b) => b.latest.localeCompare(a.latest));
  const fresh = sorted.slice(0, 5);
  const sel = (id, label, anyLabel, opts) => `<label class="md-select"><span>${label}</span><select id="md-${id}" data-f="${id}">${anyLabel !== null ? `<option value="">${anyLabel}</option>` : ''}${opts.map(([v, x]) => `<option value="${v}">${esc(x)}</option>`).join('')}</select></label>`;
  const countryOpts = [...COUNTRY.map(([k, l]) => [k, l[lang]]), ['other', OTHER_COUNTRY[lang]]].filter(([k]) => models.some((m) => countryKeys(m).includes(k))).map(([k, l]) => [k, `${l} (${models.filter((m) => countryKeys(m).includes(k)).length})`]);
  const devOpts = BRANDS.map((b) => [b[0], lang === 'ru' ? b[1] : b[2], models.filter((m) => brandKeys(m).includes(b[0])).length]).filter((x) => x[2] >= 2).sort((a, b) => b[2] - a[2]).map(([k, l, n]) => [k, `${l} (${n})`]);
  const toolLinks = t.tools.map(([rel, icon, label]) => `<a class="md-toolbtn" href="${BASE[lang]}${rel}/"><i class="ph ph-${icon}" aria-hidden="true"></i>${label}</a>`).join('');
  const main = `<section class="section md-page"><div class="container">
  ${crumbs(lang, [[null, t.section]])}
  <header class="md-hero">
    <span class="section-label">${t.label}</span>
    <h1 class="section-heading">${t.h1a} <span class="text-gradient">${t.h1b}</span></h1>
    <p class="section-sub">${t.sub}</p>
    <div class="md-stats"><span><b>${models.length}</b> ${t.families}</span><span><b>${Object.keys(counts).length}</b> ${t.directions}</span><span>${t.updated} ${UPDATED[lang]}</span><a class="md-guide" href="/blog/otkrytye-ii-modeli-2022-2026-putevoditel/"><i class="ph ph-book-open" aria-hidden="true"></i>${t.guide}</a></div>
    <div class="md-toolbar">${toolLinks}</div>
  </header>
  <div class="md-fresh" aria-label="${t.fresh}">
    <div class="md-fresh-title"><i class="ph ph-sparkle" aria-hidden="true"></i>${t.fresh}</div>
    <ol class="md-fresh-list">${fresh.map((m) => `<li><a href="${BASE[lang]}${m.id}/"><span class="md-fresh-date">${fmtMonth(m.latest, lang)}</span><span class="md-fresh-name" title="${esc(m.versions[m.versions.length - 1][0])}">${esc(m.versions[m.versions.length - 1][0])}</span><span class="md-fresh-dev" title="${esc(loc(m, lang).developer)}">${esc(loc(m, lang).developer)}</span></a></li>`).join('')}</ol>
  </div>
  <div class="md-tools">
    <label class="md-search"><i class="ph ph-magnifying-glass" aria-hidden="true"></i><input id="mdQ" type="search" placeholder="${esc(t.searchPh)}" autocomplete="off" aria-label="${t.searchLabel}"></label>
    <div class="md-selects">
      ${sel('hw', t.fHw, t.fAny, [['min', t.hwOpts[0]], ['gpu', t.hwOpts[1]], ['multi', t.hwOpts[2]]])}
      ${sel('com', t.fCom, t.fAnyF, [['yes', t.comOpts[0]], ['conditional', t.comOpts[1]], ['no', t.comOpts[2]]])}
      ${hasField(models, 'ru') ? sel('ru', t.fRu, t.fRuAny, [['yes', t.fRuYes]]) : ''}
      ${hasField(models, 'industries') ? sel('ind', t.fInd, t.fAnyF, Object.entries(INDUSTRY).filter(([k]) => models.some((m) => (m.industries || []).includes(k))).map(([k, v]) => [k, v[lang]])) : ''}
      ${sel('country', t.fCountry, t.fAnyF, countryOpts)}
      ${sel('dev', t.fDev, t.fAnyM, devOpts)}
      ${sel('fresh', t.fFresh, t.fAnyF, [['2026', t.freshOpts[0]], ['2025', t.freshOpts[1]], ['old', t.freshOpts[2]]])}
      ${sel('sort', t.fSort, null, [['new', t.sortOpts[0]], ['old', t.sortOpts[1]], ['az', t.sortOpts[2]]])}
    </div>
    <div class="md-toggles">
      ${hasField(models, 'ollama') ? `<label class="md-toggle"><input type="checkbox" id="mdOllama"><span>${t.tOllama}</span></label>` : ''}
      ${hasField(models, 'cpu') ? `<label class="md-toggle"><input type="checkbox" id="mdCpu"><span>${t.tCpu}</span></label>` : ''}
      <label class="md-toggle"><input type="checkbox" id="mdGguf"><span>${t.tGguf}</span></label>
      <label class="md-toggle"><input type="checkbox" id="mdLive"><span>${t.tLive}</span></label>
      <button type="button" class="md-reset" id="mdReset" hidden><i class="ph ph-x" aria-hidden="true"></i>${t.reset}</button>
    </div>
  </div>
  <div class="md-chips" role="group" aria-label="${t.dirLabel}"><div class="md-chip-all"><button type="button" class="md-chip is-on" data-mod="" aria-pressed="true"><i class="ph ph-squares-four" aria-hidden="true"></i>${t.allDirs}<span>${models.length}</span></button></div>${chips}</div>
  <p class="md-count" id="mdCount" aria-live="polite">${t.shown} ${models.length} ${t.of} ${models.length}</p>
  <div class="md-grid" id="mdGrid">${sorted.slice(0, FIRST).map((m) => card(m, lang)).join('\n')}</div>
  <p class="md-empty" id="mdEmpty" hidden>${t.empty} <a href="${tg(t.tgFind)}" target="_blank" rel="noopener">${t.emptyLink}</a> ${t.emptyTail}</p>
  <div class="md-tray" id="mdTray" hidden role="region" aria-label="${t.compareTitle}">
    <div class="md-tray-list" id="mdTrayList"></div>
    <div class="md-tray-actions">
      <button type="button" class="btn btn-accent" id="mdCmpOpen"><i class="ph ph-scales" aria-hidden="true"></i>${t.compare}</button>
      <button type="button" class="md-tray-clear" id="mdCmpClear"><i class="ph ph-trash" aria-hidden="true"></i>${t.compareClear}</button>
    </div>
  </div>
  <dialog class="md-dialog" id="mdDialog" aria-labelledby="mdDialogT">
    <div class="md-dialog-head"><h2 id="mdDialogT">${t.compareTitle}</h2><button type="button" class="md-dialog-x" id="mdDialogX" aria-label="${t.close}"><i class="ph ph-x" aria-hidden="true"></i></button></div>
    <div class="md-dialog-body" id="mdDialogBody"></div>
    <div class="md-dialog-foot"><a class="btn btn-accent" id="mdDialogTg" href="#" target="_blank" rel="noopener"><i class="ph ph-telegram-logo" aria-hidden="true"></i>${t.discuss}</a></div>
  </dialog>
  <script type="application/json" id="mdAll">${JSON.stringify(sorted.map((m0) => { const m = loc(m0, lang); return {
    i: m.id, n: m.name, de: `${m.developer} · ${m.country}`, su: m.summary, ta: m.tasks.slice(0, 3), si: m.sizes,
    mk: m.modality[0], hk: m.hardware[0], co: m.commercial, yr: years(m),
    dm: m.modality.join(' '), dh: m.hardware.join(' '), dl: m.latest, df: m.first, dn: m.name.toLowerCase(),
    dc: countryKeys(m0).join(' '), dd: brandKeys(m0).join(' '), dr: m.ru || '', di: (m.industries || []).join(' '),
    do: m.ollama ? 1 : 0, dp: m.cpu ? 1 : 0, ds: isStale(m) ? 1 : 0, dg: hasGguf(m) ? 1 : 0,
    st: isStale(m) ? t.staleTitle(fmtMonth(m.latest, lang)) : '',
    qt: quantOf(m).map((k) => t.quantLbl[k] || k).join(', '),
    // поля только для таблицы сравнения
    mo: m.modality.map((x) => modLabel(x, lang)).join(', '), h: m.hardware.map((x) => HW[x][lang][0]).join(', '), lt: m.license,
    rl: m.ru ? RU_LANG[lang][m.ru] : '', ol: m.ollama === undefined ? '' : (m.ollama ? t.has : t.no), cl: m.cpu === undefined ? '' : (m.cpu ? t.yes : t.no),
    yl: `${fmtMonth(m.first, lang)} – ${fmtMonth(m.latest, lang)}`,
    dq: [m.name, m.developer, m.country, ...m.modality.map((x) => modLabel(x, lang)), ...m.tasks, ...(m.industries || []).map((k) => (INDUSTRY[k] || {})[lang] || '')].join(' ').toLowerCase().replace(/ё/g, 'е').slice(0, 320),
  }; })).replace(/</g, '\\u003c')}</script>
  <script type="application/json" id="mdLabels">${JSON.stringify({
    mod: Object.fromEntries(MOD_KEYS.map((k) => [k, { l: modLabel(k, lang), i: MOD[k].icon }])),
    hw: Object.fromEntries(Object.keys(HW).map((k) => [k, HW[k][lang][0]])),
    com: Object.fromEntries(Object.keys(COM).map((k) => [k, { l: COM[k][lang], c: COM[k].cls }])),
    sizes: t.sizes, hwLabel: t.fHw, from: t.hwFrom, more: t.more, compare: t.compare, ruBadge: t.ruBadge, ollamaBadge: t.ollamaBadge, ggufBadge: t.ggufBadge, staleBadge: t.staleBadge, base: BASE[lang],
  }).replace(/</g, '\\u003c')}</script>

  <script type="application/json" id="mdUi">${JSON.stringify({ shown: t.shown, of: t.of, compareOf: t.compareOf, removeX: t.removeX, pickTwo: t.pickTwo, param: t.param, rows: t.rows, tgCompare: t.tgCompare, tgTask: t.tgTask, base: BASE[lang], locale: lang }).replace(/</g, '\\u003c')}</script>
  ${collectionLinks(lang, colls, null)}
  ${offer(lang)}
</div></section>`;
  const js = `<script>
(function(){
  var grid=document.getElementById('mdGrid'); if(!grid) return;
  var $=function(id){return document.getElementById(id);};
  var FIRST_RENDERED=grid.querySelectorAll('.md-card').length;
  // В разметке только первые карточки — остальные собираем из JSON, чтобы страница была лёгкой.
  var LB=JSON.parse($('mdLabels').textContent), ALL=JSON.parse($('mdAll').textContent), REST=ALL.slice(FIRST_RENDERED);
  function e_(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function cardHtml(m){
    var mo=LB.mod[m.mk], co=LB.com[m.co];
    return '<article class="md-card" data-id="'+m.i+'" data-mod="'+m.dm+'" data-hw="'+m.dh+'" data-com="'+m.co+'" data-latest="'+m.dl+'" data-first="'+m.df+'" data-name="'+e_(m.dn)+'" data-country="'+m.dc+'" data-dev="'+m.dd+'" data-ru="'+m.dr+'" data-ind="'+m.di+'" data-ollama="'+m.do+'" data-cpu="'+m.dp+'" data-stale="'+m.ds+'" data-gguf="'+m.dg+'" data-q="'+e_(m.dq)+'">'
      +'<div class="md-card-top"><span class="md-mod"><i class="ph ph-'+mo.i+'" aria-hidden="true"></i>'+mo.l+'</span><span class="md-card-meta">'
      +(m.dr==='yes'?'<span class="md-badge md-badge-ru" title="'+LB.ruBadge+'">RU</span>':'')+(m.do?'<span class="md-badge" title="'+LB.ollamaBadge+'">Ollama</span>':'')
      +(!m.do&&m.dg?'<span class="md-badge" title="'+LB.ggufBadge+'">GGUF</span>':'')+(m.ds?'<span class="md-badge md-badge-old" title="'+e_(m.st)+'">'+LB.staleBadge+'</span>':'')
      +'<span class="md-year">'+m.yr+'</span></span></div>'
      +'<h2 class="md-name"><a href="'+LB.base+m.i+'/">'+e_(m.n)+'</a></h2>'
      +'<div class="md-dev">'+e_(m.de)+'</div><p class="md-sum">'+e_(m.su)+'</p>'
      +'<ul class="md-tasks">'+m.ta.map(function(x){return '<li>'+e_(x)+'</li>';}).join('')+'</ul>'
      +'<dl class="md-specs"><div><dt>'+LB.sizes+'</dt><dd>'+e_(m.si)+'</dd></div><div><dt>'+LB.hwLabel+'</dt><dd>'+LB.from+': '+LB.hw[m.hk]+'</dd></div></dl>'
      +'<div class="md-card-foot"><span class="md-lic md-lic-'+co.c+'">'+co.l+'</span><span class="md-more">'+LB.more+'<i class="ph ph-arrow-right" aria-hidden="true"></i></span></div>'
      +'<label class="md-cmp"><input type="checkbox" class="md-cmp-box" value="'+m.i+'"><span>'+LB.compare+'</span></label></article>';
  }
  if(REST.length) grid.insertAdjacentHTML('beforeend', REST.map(cardHtml).join(''));
  var cards=[].slice.call(grid.querySelectorAll('.md-card'));
  var UI=JSON.parse($('mdUi').textContent);
  var q=$('mdQ'), sort=$('md-sort'), ollama=$('mdOllama'), cpu=$('mdCpu'), gguf=$('mdGguf'), live=$('mdLive'), reset=$('mdReset');
  var sels=[].slice.call(document.querySelectorAll('.md-selects select[data-f]')).filter(function(s){return s.dataset.f!=='sort';});
  var chips=[].slice.call(document.querySelectorAll('.md-chip')), mod='';
  var count=$('mdCount'), empty=$('mdEmpty');
  var FIELD={hw:['hw',1],com:['com',0],ru:['ru',0],ind:['ind',1],country:['country',1],dev:['dev',1]};
  function has(list,v){return (' '+list+' ').indexOf(' '+v+' ')>-1;}
  cards.forEach(function(c){ c.addEventListener('click',function(e){ if(e.target.closest('a,label,input')) return; location.href=c.querySelector('.md-name a').getAttribute('href'); }); });
  function apply(){
    // Грубый стемминг: «карточки» и «карточек» совпадают по основе «карточ».
    var t=q.value.trim().toLowerCase().replace(/ё/g,'е').split(/\\s+/).filter(Boolean)
      .map(function(w){ return w.length>5 ? w.slice(0,w.length-2) : w; }), n=0, active=!!(mod||t.length||(ollama&&ollama.checked)||(cpu&&cpu.checked)||(gguf&&gguf.checked)||(live&&live.checked));
    sels.forEach(function(s){ if(s.value) active=true; });
    cards.forEach(function(c){
      var ok=(!mod||has(c.dataset.mod,mod))&&t.every(function(w){return c.dataset.q.indexOf(w)>-1;})
        &&(!ollama||!ollama.checked||c.dataset.ollama==='1')&&(!cpu||!cpu.checked||c.dataset.cpu==='1')
        &&(!gguf||!gguf.checked||c.dataset.gguf==='1')&&(!live||!live.checked||c.dataset.stale==='0');
      for(var i=0;ok&&i<sels.length;i++){
        var s=sels[i], v=s.value; if(!v) continue;
        if(s.dataset.f==='fresh'){ var y=c.dataset.latest.slice(0,4); ok=v==='old'?y<'2025':y===v; continue; }
        var f=FIELD[s.dataset.f]; ok=f[1]?has(c.dataset[f[0]],v):c.dataset[f[0]]===v;
      }
      c.hidden=!ok; if(ok) n++;
    });
    count.textContent=UI.shown+' '+n+' '+UI.of+' '+cards.length; empty.hidden=n>0; reset.hidden=!active;
  }
  function order(){
    var s=sort.value;
    cards.sort(function(a,b){ return s==='az' ? a.dataset.name.localeCompare(b.dataset.name,UI.locale) : s==='old' ? a.dataset.first.localeCompare(b.dataset.first) : b.dataset.latest.localeCompare(a.dataset.latest); })
      .forEach(function(c){ grid.appendChild(c); });
  }
  function setChip(ch){
    chips.forEach(function(x){ x.classList.remove('is-on'); x.setAttribute('aria-pressed','false'); });
    ch.classList.add('is-on'); ch.setAttribute('aria-pressed','true'); mod=ch.dataset.mod;
  }
  chips.forEach(function(ch){ ch.addEventListener('click',function(){ setChip(ch); apply(); }); });
  q.addEventListener('input',apply); sels.forEach(function(s){ s.addEventListener('change',apply); });
  if(ollama) ollama.addEventListener('change',apply); if(cpu) cpu.addEventListener('change',apply);
  if(gguf) gguf.addEventListener('change',apply); if(live) live.addEventListener('change',apply);
  sort.addEventListener('change',order);
  reset.addEventListener('click',function(){
    q.value=''; sels.forEach(function(s){ s.value=''; }); if(ollama) ollama.checked=false; if(cpu) cpu.checked=false;
    if(gguf) gguf.checked=false; if(live) live.checked=false;
    setChip(chips[0]); apply(); q.focus();
  });

  // --- Сравнение: до трёх моделей ---
  var DATA={}; ALL.forEach(function(m){ DATA[m.i]={n:m.n,d:m.de.replace(' · ',', '),mo:m.mo,s:m.si,l:LB.com[m.co].l,lc:LB.com[m.co].c,lt:m.lt,h:m.h,r:m.rl,o:m.ol,c:m.cl,q:m.qt,y:m.yl,t:m.ta}; });
  var picked=[], MAX=3;
  var tray=$('mdTray'), list=$('mdTrayList'), dlg=$('mdDialog');
  var boxes=[].slice.call(grid.querySelectorAll('.md-cmp-box'));
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function syncCmp(){
    boxes.forEach(function(b){ b.checked=picked.indexOf(b.value)>-1; b.disabled=!b.checked&&picked.length>=MAX; b.closest('.md-card').classList.toggle('is-picked',b.checked); });
    tray.hidden=!picked.length;
    list.innerHTML='<span class="md-tray-label">'+UI.compareOf+' '+picked.length+' / '+MAX+':</span>'+picked.map(function(id){
      return '<span class="md-tray-item">'+esc(DATA[id].n)+'<button type="button" data-rm="'+id+'" aria-label="'+UI.removeX+' '+esc(DATA[id].n)+'"><i class="ph ph-x" aria-hidden="true"></i></button></span>';
    }).join('');
    $('mdCmpOpen').disabled=picked.length<2;
    $('mdCmpOpen').title=picked.length<2?UI.pickTwo:'';
  }
  boxes.forEach(function(b){ b.addEventListener('change',function(){
    var i=picked.indexOf(b.value); if(b.checked&&i<0&&picked.length<MAX) picked.push(b.value); if(!b.checked&&i>-1) picked.splice(i,1); syncCmp();
  }); });
  list.addEventListener('click',function(e){ var r=e.target.closest('[data-rm]'); if(!r) return; picked.splice(picked.indexOf(r.dataset.rm),1); syncCmp(); });
  $('mdCmpClear').addEventListener('click',function(){ picked=[]; syncCmp(); });
  var ROWS=['mo','d','y','s','h','l','lt','r','o','c','q','t'];
  $('mdCmpOpen').addEventListener('click',function(){
    var m=picked.map(function(id){return DATA[id];});
    var h='<div class="md-cmp-scroll"><table class="md-cmp-table"><thead><tr><th scope="col"><span class="md-sr">'+UI.param+'</span></th>'+picked.map(function(id){return '<th scope="col"><a href="'+UI.base+id+'/">'+esc(DATA[id].n)+'</a></th>';}).join('')+'</tr></thead><tbody>';
    ROWS.forEach(function(k){
      if(m.every(function(x){return !x[k]||(Array.isArray(x[k])&&!x[k].length);})) return;
      h+='<tr><th scope="row">'+UI.rows[k]+'</th>'+m.map(function(x){
        var v=x[k]; if(k==='l') return '<td><span class="md-lic md-lic-'+x.lc+'">'+esc(v)+'</span></td>';
        if(Array.isArray(v)) return '<td><ul>'+v.map(function(z){return '<li>'+esc(z)+'</li>';}).join('')+'</ul></td>';
        return '<td>'+(v?esc(v):'—')+'</td>';
      }).join('')+'</tr>';
    });
    $('mdDialogBody').innerHTML=h+'</tbody></table></div>';
    $('mdDialogTg').href='https://t.me/chimitdorzhi?text='+encodeURIComponent(UI.tgCompare+m.map(function(x){return x.n;}).join(', ')+UI.tgTask);
    if(dlg.showModal) dlg.showModal(); else dlg.setAttribute('open','');
  });
  $('mdDialogX').addEventListener('click',function(){ dlg.close(); });
  dlg.addEventListener('click',function(e){ if(e.target===dlg) dlg.close(); });
  syncCmp();
})();
</script>`;
  const ld = [
    { '@context': 'https://schema.org', '@type': 'CollectionPage', name: t.catLd, url: `${SITE}${BASE[lang]}`, inLanguage: lang, dateModified: LASTMOD,
      mainEntity: { '@type': 'ItemList', itemListElement: sorted.map((m, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}${BASE[lang]}${m.id}/`, name: m.name })) } },
    ldCrumbs(lang, [[`${SITE}${BASE[lang]}`, t.section]]),
  ];
  writePage(lang, '', { title: t.catTitle, description: t.catDesc, ld, main, extraJs: js, altRel: '' });
}

// --- Страница модели ---
function detail(m0, lang) {
  const t = T[lang], m = loc(m0, lang);
  const byId = Object.fromEntries(MODELS[lang].map((x) => [x.id, x]));
  const alts = (m.alternatives || []).map((id) => byId[id]).filter(Boolean);
  const cta = tg(t.tgModel(m.name));
  const cmps = CMP.filter((p) => (p.a === m.id || p.b === m.id) && (lang === 'ru' || (EN_IDS.has(p.a) && EN_IDS.has(p.b))));
  const arts = lang === 'ru' ? (ARTICLES[m.id] || []).slice(0, 6) : [];
  const src = m.source || m.hf || m.github;
  const both = EN_IDS.has(m.id);
  // Частые вопросы собираются из данных карточки — и отдаются поисковикам разметкой FAQPage.
  const faq = [
    [t.faqQ1(m.name), t.faqA[m.commercial](m.name, m.license)],
    [t.faqQ2(m.name), t.faqA2(HW[m.hardware[0]][lang][1], m.cpu)],
    [t.faqQ3(m.name), t.faqA3[m.ru || 'unknown']],
    [t.faqQ4(m.name), t.faqA4(m.name)],
  ];
  const main = `<section class="section md-page md-detail"><div class="container">
  ${crumbs(lang, [[BASE[lang], t.section], [null, m.name]])}
  <header class="md-d-hero">
    <div class="md-d-mods">${m.modality.map((k) => modChip(k, lang)).join('')}</div>
    <h1 class="md-d-title">${esc(m.name)}</h1>
    <p class="md-d-lead">${esc(m.summary)}</p>
    ${isStale(m) ? `<p class="md-stale"><i class="ph ph-clock-counter-clockwise" aria-hidden="true"></i>${esc(t.staleNote(fmtMonth(m.latest, lang)))}</p>` : ''}
    <dl class="md-d-facts">
      <div><dt>${t.dev}</dt><dd>${esc(m.developer)}, ${esc(m.country)}</dd></div>
      <div><dt>${t.first}</dt><dd>${fmtMonth(m.first, lang)}</dd></div>
      <div><dt>${t.latest}</dt><dd>${fmtMonth(m.latest, lang)}</dd></div>
      <div><dt>${t.sizes}</dt><dd>${esc(m.sizes)}</dd></div>
      <div><dt>${t.license}</dt><dd>${lic(m.commercial, lang)}<small>${esc(m.license)}</small></dd></div>
      ${m.ru && m.ru !== 'na' ? `<div><dt>${t.ruLang}</dt><dd>${RU_LANG[lang][m.ru]}</dd></div>` : ''}
      ${quantOf(m).length ? `<div><dt>${t.quantH}</dt><dd><small>${quantOf(m).map((k) => t.quantLbl[k] || k).join(', ')}</small></dd></div>` : ''}
      ${m.ollama !== undefined || m.cpu !== undefined ? `<div><dt>${t.run}</dt><dd>${m.ollama ? t.runOllama : t.runServer}<small>${m.cpu ? t.runCpu : t.runGpu}</small></dd></div>` : ''}
      ${(m.industries || []).length ? `<div><dt>${t.spheres}</dt><dd><small>${m.industries.map((k) => (INDUSTRY[k] || {})[lang]).filter(Boolean).join(', ')}</small></dd></div>` : ''}
    </dl>
    <div class="md-d-actions">
      <a class="btn btn-accent" href="${cta}" target="_blank" rel="noopener"><i class="ph ph-telegram-logo" aria-hidden="true"></i>${t.deployBtn}</a>
      ${m.hf ? `<a class="btn btn-ghost" href="${m.hf}" target="_blank" rel="noopener nofollow">Hugging Face<i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>` : ''}
      ${m.github ? `<a class="btn btn-ghost" href="${m.github}" target="_blank" rel="noopener nofollow"><i class="ph ph-git-branch" aria-hidden="true"></i>GitHub</a>` : ''}
    </div>
  </header>
  <div class="md-d-body">
    <div class="md-d-main">
      <section><h2>${t.tasksH}</h2><ul class="md-check">${m.tasks.map((x) => `<li><i class="ph ph-check-circle" aria-hidden="true"></i>${esc(x)}</li>`).join('')}</ul></section>
      <section><h2>${t.whereH}</h2><div class="md-where">${m.where.map((w) => `<span>${esc(w)}</span>`).join('')}</div></section>
      <section><h2>${t.hwH}</h2><div class="md-hw">${Object.keys(HW).map((k) => `<div class="md-hw-row${m.hardware.includes(k) ? ' is-on' : ''}"><i class="ph ph-${HW[k].icon}" aria-hidden="true"></i><div><b>${HW[k][lang][0]}</b><span>${HW[k][lang][1]}</span></div><em>${m.hardware.includes(k) ? t.fits : t.noVer}</em></div>`).join('')}</div></section>
      <section><h2>${t.versionsH}</h2><ol class="md-timeline">${[...m.versions].reverse().map(([n, d]) => `<li><time>${fmtMonth(d, lang)}</time><span>${esc(n)}</span></li>`).join('')}</ol></section>
      <section><h2>${t.runH}</h2><div class="md-run">
        ${m.ollama ? `<div class="md-run-row"><i class="ph ph-lightning" aria-hidden="true"></i><div><b>${t.runOllamaT}</b><span>${t.runOllamaD}</span><a class="md-more" href="https://ollama.com/search?q=${encodeURIComponent(m.name)}" target="_blank" rel="noopener nofollow">${t.runOllamaBtn}<i class="ph ph-arrow-up-right" aria-hidden="true"></i></a></div></div>` : ''}
        <div class="md-run-row"><i class="ph ph-hard-drives" aria-hidden="true"></i><div><b>${t.runServerT}</b><span>${t.runServerD}</span>${m.hf ? `<a class="md-more" href="${m.hf}" target="_blank" rel="noopener nofollow">Hugging Face<i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>` : ''}</div></div>
        <div class="md-run-row"><i class="ph ph-cpu" aria-hidden="true"></i><div><b>${t.runHwT}</b><span>${t.runHwD}</span><a class="md-more" href="${BASE[lang]}kalkulyator-zheleza/">${t.runHwBtn}<i class="ph ph-arrow-right" aria-hidden="true"></i></a></div></div>
      </div><p class="md-run-note">${t.runNote}${quantOf(m).length ? ' ' + t.quantNote : ''}</p></section>
      <section><h2>${t.faqH}</h2><div class="md-faq">${faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div></section>
      <section><h2>${t.howH}</h2><ol class="md-steps md-steps-v">${t.how.map(([b, s]) => `<li><b>${b}</b><span>${s}</span></li>`).join('')}</ol></section>
      ${cmps.length ? `<section><h2>${t.comparesH}</h2><ul class="md-links">${cmps.map((p) => `<li><a href="${BASE[lang]}sravnenie/${p.slug}/">${esc(lang === 'en' ? (p.h1_en || p.h1) : p.h1)}</a></li>`).join('')}</ul></section>` : ''}
      ${arts.length ? `<section><h2>${t.articlesH}</h2><ul class="md-links md-articles">${arts.map((a) => `<li><a href="/blog/${a.slug}/">${esc(a.title)}</a></li>`).join('')}</ul></section>` : ''}
      ${alts.length ? `<section><h2>${t.altsH}</h2><div class="md-alts">${alts.map((a0) => { const a = loc(a0, lang); return `<a href="${BASE[lang]}${a.id}/">${modChip(a.modality[0], lang)}<b>${esc(a.name)}</b><span class="md-alt-dev">${esc(a.developer)} · ${esc(a.country)}</span>${lic(a.commercial, lang)}<p>${esc(a.summary)}</p><span class="md-alt-foot"><span class="md-more">${t.more}<i class="ph ph-arrow-right" aria-hidden="true"></i></span></span></a>`; }).join('')}</div></section>` : ''}
      <p class="md-source">${src ? `${t.source}: <a href="${esc(src)}" target="_blank" rel="noopener nofollow">${esc(src.replace(/^https?:\/\//, '').slice(0, 70))}</a>. ` : ''}${t.checked(UPDATED[lang])}</p>
    </div>
    <aside class="md-d-side">
      <div class="md-side-card">
        <div class="md-side-title">${esc(t.sideTitle(m.name))}</div>
        <ul>${t.sideList.map((x) => `<li>${x}</li>`).join('')}</ul>
        <a class="btn btn-accent" href="${cta}" target="_blank" rel="noopener"><i class="ph ph-telegram-logo" aria-hidden="true"></i>${t.sideBtn}</a>
        <a class="md-side-back" href="${BASE[lang]}"><i class="ph ph-arrow-left" aria-hidden="true"></i>${t.allModels}</a>
      </div>
    </aside>
  </div>
</div></section>`;
  const url = `${SITE}${BASE[lang]}${m.id}/`;
  const ld = [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: m.name, applicationCategory: 'AI model', description: m.summary, url, inLanguage: lang,
      author: { '@type': 'Organization', name: m.developer }, license: m.license, datePublished: m.first, dateModified: m.latest, offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD' } },
    ldCrumbs(lang, [[`${SITE}${BASE[lang]}`, t.section], [url, m.name]]),
    { '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: lang, mainEntity: faq.map(([q, x]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: x } })) },
  ];
  writePage(lang, `${m.id}/`, { title: t.detailTitle(m.name), description: t.detailDesc(m.name, m.developer, m.summary).slice(0, 158), ld, main, extraJs: '', image: `${url}cover.png`, altRel: both ? `${m.id}/` : undefined });
}

// --- Страница подборки ---
function collectionPage(x, lang, colls) {
  const t = T[lang];
  const h1 = ctext(x.c, 'h1', lang), intro = ctext(x.c, 'intro', lang);
  const sorted = [...x.items].sort((a, b) => b.latest.localeCompare(a.latest));
  const altExists = colls.alt && colls.alt.has(x.rel);
  const main = `<section class="section md-page"><div class="container">
  ${crumbs(lang, [[BASE[lang], t.section], [null, h1]])}
  <header class="md-hero">
    <span class="section-label">${lang === 'ru' ? 'ПОДБОРКА' : 'COLLECTION'}</span>
    <h1 class="section-heading">${esc(h1)}</h1>
    ${intro ? `<p class="section-sub">${esc(intro)}</p>` : ''}
    <div class="md-stats"><span>${t.inCollection(sorted.length)}</span><span>${t.updated} ${UPDATED[lang]}</span><a class="md-guide" href="${BASE[lang]}"><i class="ph ph-funnel" aria-hidden="true"></i>${t.openCatalog}</a></div>
  </header>
  <div class="md-grid">${sorted.map((m) => card(m, lang, { compare: false })).join('\n')}</div>
  ${collectionLinks(lang, colls, x.rel)}
  ${offer(lang)}
</div></section>`;
  const url = `${SITE}${BASE[lang]}${x.rel}`;
  const ld = [
    { '@context': 'https://schema.org', '@type': 'CollectionPage', name: h1, url, inLanguage: lang, dateModified: LASTMOD,
      mainEntity: { '@type': 'ItemList', itemListElement: sorted.map((m, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}${BASE[lang]}${m.id}/`, name: m.name })) } },
    ldCrumbs(lang, [[`${SITE}${BASE[lang]}`, t.section], [url, h1]]),
  ];
  writePage(lang, x.rel, { title: ctext(x.c, 'title', lang) || h1, description: ctext(x.c, 'description', lang) || intro || h1, ld, main, extraJs: cardClickJs, altRel: altExists ? x.rel : undefined });
}

// --- Страница «открытая альтернатива X» ---
function altPage(a, lang) {
  const t = T[lang];
  const byId = Object.fromEntries(MODELS[lang].map((x) => [x.id, x]));
  const picks = (a.picks || []).map((id) => byId[id]).filter(Boolean);
  if (picks.length < 2) return false;
  const f = (k) => (lang === 'en' ? a[k + '_en'] : a[k]) || a[k];
  const others = ALTS.filter((x) => x.slug !== a.slug);
  const main = `<section class="section md-page"><div class="container">
  ${crumbs(lang, [[BASE[lang], t.section], [null, f('h1')]])}
  <header class="md-hero">
    <span class="section-label">${t.altLabel}</span>
    <h1 class="section-heading">${esc(f('h1'))}</h1>
    <p class="section-sub">${esc(f('intro'))}</p>
    <div class="md-stats"><span>${t.updated} ${UPDATED[lang]}</span><a class="md-guide" href="${BASE[lang]}podbor/"><i class="ph ph-sparkle" aria-hidden="true"></i>${t.tools[0][2]}</a></div>
  </header>
  <h2 class="md-colls-h2">${t.altPicksH}</h2>
  <div class="md-grid">${picks.map((m) => card(m, lang, { compare: false })).join('\n')}</div>
  <p class="md-source">${esc(f('note'))}</p>
  ${others.length ? `<section class="md-colls"><h2>${t.otherAlt}</h2><ul class="md-links md-links-cols">${others.map((x) => `<li><a href="${BASE[lang]}alternativa/${x.slug}/">${esc(lang === 'en' ? (x.h1_en || x.h1) : x.h1)}</a></li>`).join('')}</ul></section>` : ''}
  ${offer(lang)}
</div></section>`;
  const url = `${SITE}${BASE[lang]}alternativa/${a.slug}/`;
  const ld = [
    { '@context': 'https://schema.org', '@type': 'CollectionPage', name: f('h1'), url, inLanguage: lang, dateModified: LASTMOD,
      mainEntity: { '@type': 'ItemList', itemListElement: picks.map((m, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}${BASE[lang]}${m.id}/`, name: m.name })) } },
    ldCrumbs(lang, [[`${SITE}${BASE[lang]}`, t.section], [url, f('h1')]]),
  ];
  writePage(lang, `alternativa/${a.slug}/`, { title: f('title'), description: f('description'), ld, main, extraJs: cardClickJs, altRel: `alternativa/${a.slug}/` });
  return true;
}

// --- Страница сравнения «A или B» ---
function comparePage(p, lang) {
  const t = T[lang];
  const byId = Object.fromEntries(MODELS[lang].map((x) => [x.id, x]));
  const A = byId[p.a], B = byId[p.b];
  if (!A || !B) return false;
  const a = loc(A, lang), b = loc(B, lang);
  const f = (k) => (lang === 'en' ? p[k + '_en'] : p[k]) || p[k];
  const rows = [
    [t.rows.mo, (m) => m.modality.map((k) => modLabel(k, lang)).join(', ')],
    [t.rows.d, (m) => `${m.developer}, ${m.country}`],
    [t.rows.y, (m) => `${fmtMonth(m.first, lang)} – ${fmtMonth(m.latest, lang)}`],
    [t.rows.s, (m) => m.sizes],
    [t.rows.h, (m) => m.hardware.map((x) => HW[x][lang][0]).join(', ')],
    [t.rows.l, (m) => COM[m.commercial][lang]],
    [t.rows.lt, (m) => m.license],
    [t.rows.r, (m) => (m.ru ? RU_LANG[lang][m.ru] : '—')],
    [t.rows.o, (m) => (m.ollama ? t.has : t.no)],
    [t.rows.c, (m) => (m.cpu ? t.yes : t.no)],
  ];
  // Сначала пары с теми же моделями, потом по тому же направлению, всего не больше 12 ссылок.
  const pool = CMP.filter((x) => x.slug !== p.slug && (lang === 'ru' || (EN_IDS.has(x.a) && EN_IDS.has(x.b))));
  const mods = new Set([...(A.modality || []), ...(B.modality || [])]);
  const rank = (x) => {
    if (x.a === p.a || x.b === p.a || x.a === p.b || x.b === p.b) return 0;
    const xa = byId[x.a]; const xb = byId[x.b];
    const xm = [...((xa && xa.modality) || []), ...((xb && xb.modality) || [])];
    return xm.some((k) => mods.has(k)) ? 1 : 2;
  };
  const others = pool.map((x) => [rank(x), x]).sort((u, v) => u[0] - v[0]).slice(0, 12).map((u) => u[1]);
  const chooseList = (m, items) => (items && items.length ? `<div class="md-choose"><h3>${t.chooseIf(m.name)}</h3><ul class="md-check">${items.map((x) => `<li><i class="ph ph-check-circle" aria-hidden="true"></i>${esc(x)}</li>`).join('')}</ul><a class="md-more" href="${BASE[lang]}${m.id}/">${m.name}<i class="ph ph-arrow-right" aria-hidden="true"></i></a></div>` : '');
  const main = `<section class="section md-page"><div class="container">
  ${crumbs(lang, [[BASE[lang], t.section], [null, f('h1')]])}
  <header class="md-hero">
    <span class="section-label">${lang === 'ru' ? 'СРАВНЕНИЕ' : 'COMPARISON'}</span>
    <h1 class="section-heading">${esc(f('h1'))}</h1>
    <p class="section-sub">${esc(f('verdict'))}</p>
  </header>
  <section class="md-cmp-page"><h2>${t.cmpTableH}</h2>
    <div class="md-cmp-scroll"><table class="md-cmp-table"><thead><tr><th scope="col"><span class="md-sr">${t.param}</span></th><th scope="col"><a href="${BASE[lang]}${a.id}/">${esc(a.name)}</a></th><th scope="col"><a href="${BASE[lang]}${b.id}/">${esc(b.name)}</a></th></tr></thead>
    <tbody>${rows.map(([label, fn]) => `<tr><th scope="row">${label}</th><td>${esc(fn(a))}</td><td>${esc(fn(b))}</td></tr>`).join('')}
    <tr><th scope="row">${t.rows.t}</th><td><ul>${a.tasks.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></td><td><ul>${b.tasks.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></td></tr></tbody></table></div>
  </section>
  <div class="md-choose-grid">${chooseList(a, f('choose_a'))}${chooseList(b, f('choose_b'))}</div>
  <div class="md-d-actions md-cmp-cta"><a class="btn btn-accent" href="${tg(t.tgCompare + a.name + ', ' + b.name + t.tgTask)}" target="_blank" rel="noopener"><i class="ph ph-telegram-logo" aria-hidden="true"></i>${t.discuss}</a></div>
  ${others.length ? `<section class="md-colls"><h2>${t.otherCmp}</h2><ul class="md-links md-links-cols">${others.map((x) => `<li><a href="${BASE[lang]}sravnenie/${x.slug}/">${esc(lang === 'en' ? (x.h1_en || x.h1) : x.h1)}</a></li>`).join('')}</ul></section>` : ''}
  ${offer(lang)}
</div></section>`;
  const url = `${SITE}${BASE[lang]}sravnenie/${p.slug}/`;
  writePage(lang, `sravnenie/${p.slug}/`, { title: f('title') || f('h1'), description: f('description') || f('verdict'), ld: [ldCrumbs(lang, [[`${SITE}${BASE[lang]}`, t.section], [url, f('h1')]])], main, altRel: EN_IDS.has(p.a) && EN_IDS.has(p.b) ? `sravnenie/${p.slug}/` : undefined });
  return true;
}

// --- «Новое»: выпуски последних 6 месяцев по полю versions ---
function newPage(lang) {
  const t = T[lang];
  const rel = [];
  for (const m of MODELS[lang]) for (const [name, d] of m.versions) rel.push({ m, name, d });
  const maxD = rel.reduce((x, r) => (r.d > x ? r.d : x), '0000-00');
  const [my, mm] = maxD.split('-').map(Number);
  const cut = new Date(Date.UTC(my, mm - 6, 1)).toISOString().slice(0, 7);
  const recent = rel.filter((r) => r.d >= cut).sort((x, y) => y.d.localeCompare(x.d) || x.m.name.localeCompare(y.m.name));
  const months = [...new Set(recent.map((r) => r.d))];
  const main = `<section class="section md-page"><div class="container">
  ${crumbs(lang, [[BASE[lang], t.section], [null, t.newH]])}
  <header class="md-hero"><span class="section-label">${lang === 'ru' ? 'ХРОНИКА' : 'CHANGELOG'}</span><h1 class="section-heading">${t.newH}</h1><p class="section-sub">${t.newSub}</p>
    <div class="md-stats"><span>${t.updated} ${UPDATED[lang]}</span><a class="md-guide" href="${BASE[lang]}"><i class="ph ph-funnel" aria-hidden="true"></i>${t.openCatalog}</a></div></header>
  ${months.map((d) => { const [y, mo] = d.split('-'); return `<section class="md-new-month"><h2>${MONTHS_FULL[lang][+mo - 1]} ${y}</h2><ul class="md-new-list">${recent.filter((r) => r.d === d).map((r) => { const m = loc(r.m, lang); return `<li><div class="md-new-main"><b>${esc(r.name)}</b><span>${t.family}: <a href="${BASE[lang]}${m.id}/">${esc(m.name)}</a> · ${esc(m.developer)}</span></div><div class="md-new-meta">${modChip(m.modality[0], lang)}${lic(m.commercial, lang)}</div></li>`; }).join('')}</ul></section>`; }).join('')}
  ${offer(lang)}
</div></section>`;
  writePage(lang, 'novoe/', { title: t.newTitle, description: t.newDesc, ld: [ldCrumbs(lang, [[`${SITE}${BASE[lang]}`, t.section], [`${SITE}${BASE[lang]}novoe/`, t.newH]])], main, altRel: 'novoe/' });
}

// --- Калькулятор железа ---
function calcPage(lang) {
  const t = T[lang], ru = lang === 'ru';
  const L = ru ? {
    params: 'Размер модели, млрд параметров', paramsHint: 'Для MoE-моделей берите полный размер (например, 30B-A3B → 30): в память грузятся все эксперты.',
    quant: 'Точность весов', qOpts: [['2', 'FP16 / BF16 — без сжатия'], ['1', '8 бит (Q8)'], ['0.56', '4 бита (Q4) — самый частый вариант']],
    ctx: 'Длина контекста', ctxOpts: [['4', '4 тыс. токенов — короткий чат'], ['32', '32 тыс. — документы средней длины'], ['128', '128 тыс. — длинные договоры, книги']],
    users: 'Одновременных запросов', result: 'Нужно видеопамяти', weights: 'веса', kv: 'контекст (KV-кэш)', overhead: 'служебное',
    fits: 'Подойдёт', cpu: 'На процессоре: нужно столько же оперативной памяти, но ответы будут в разы медленнее.',
    note: 'Это ориентировочная оценка (±30%): точные цифры зависят от архитектуры модели, движка (llama.cpp, vLLM, Ollama) и настроек. Перед покупкой железа проверю модель на ваших задачах.',
    presets: 'Быстрый выбор', cta: 'Подобрать железо под мою задачу', tgCalc: 'Здравствуйте! Посчитал в калькуляторе: модель ~{p}B, {q}, контекст {c} тыс., нужно ~{g} ГБ видеопамяти. Помогите подобрать железо. Задача: ',
    gpus: [[8, 'Ноутбук или видеокарта на 8 ГБ'], [12, 'Видеокарта на 12 ГБ'], [16, 'Видеокарта на 16 ГБ'], [24, 'Видеокарта на 24 ГБ (уровень RTX 4090)'], [32, 'Видеокарта на 32 ГБ (уровень RTX 5090)'], [48, 'Профессиональная карта на 48 ГБ'], [80, 'Серверная карта на 80 ГБ (уровень A100 / H100)'], [160, 'Две серверные карты по 80 ГБ'], [320, 'Четыре серверные карты по 80 ГБ'], [640, 'Восемь серверных карт по 80 ГБ'], [1128, 'Восемь карт по 141 ГБ (уровень H200)']],
    tooBig: 'Больше одного сервера: нужен кластер из нескольких узлов.', gb: 'ГБ', qNames: { '2': 'FP16', '1': '8 бит', '0.56': '4 бита' },
    h2How: 'Как считаем', how: ['Веса: число параметров × байт на параметр (2 для FP16, 1 для 8 бит, около 0,56 для 4 бит).', 'Контекст: память под KV-кэш растёт с длиной контекста и числом одновременных запросов.', 'Плюс около 10% и 1 ГБ на служебные нужды движка.'],
  } : {
    params: 'Model size, billion parameters', paramsHint: 'For MoE models use the total size (e.g. 30B-A3B → 30): all experts are loaded into memory.',
    quant: 'Weight precision', qOpts: [['2', 'FP16 / BF16 — uncompressed'], ['1', '8-bit (Q8)'], ['0.56', '4-bit (Q4) — the most common choice']],
    ctx: 'Context length', ctxOpts: [['4', '4K tokens — short chat'], ['32', '32K — medium documents'], ['128', '128K — long contracts, books']],
    users: 'Concurrent requests', result: 'VRAM needed', weights: 'weights', kv: 'context (KV cache)', overhead: 'overhead',
    fits: 'Fits', cpu: 'On a CPU: you need the same amount of RAM, but responses will be several times slower.',
    note: 'This is a rough estimate (±30%): exact numbers depend on the model architecture, the engine (llama.cpp, vLLM, Ollama) and settings. Before buying hardware I will test the model on your tasks.',
    presets: 'Quick pick', cta: 'Pick hardware for my task', tgCalc: 'Hello! Calculator result: model ~{p}B, {q}, context {c}K, needs ~{g} GB of VRAM. Please help me choose hardware. Task: ',
    gpus: [[8, 'Laptop or 8 GB GPU'], [12, '12 GB GPU'], [16, '16 GB GPU'], [24, '24 GB GPU (RTX 4090 class)'], [32, '32 GB GPU (RTX 5090 class)'], [48, '48 GB workstation GPU'], [80, '80 GB server GPU (A100 / H100 class)'], [160, 'Two 80 GB server GPUs'], [320, 'Four 80 GB server GPUs'], [640, 'Eight 80 GB server GPUs'], [1128, 'Eight 141 GB GPUs (H200 class)']],
    tooBig: 'More than one server: you need a multi-node cluster.', gb: 'GB', qNames: { '2': 'FP16', '1': '8-bit', '0.56': '4-bit' },
    h2How: 'How it is calculated', how: ['Weights: parameters × bytes per parameter (2 for FP16, 1 for 8-bit, about 0.56 for 4-bit).', 'Context: KV cache memory grows with context length and the number of concurrent requests.', 'Plus about 10% and 1 GB of engine overhead.'],
  };
  const presets = [1, 3, 8, 14, 32, 70, 120, 235, 671];
  const main = `<section class="section md-page"><div class="container">
  ${crumbs(lang, [[BASE[lang], t.section], [null, t.calcH]])}
  <header class="md-hero"><span class="section-label">${ru ? 'ИНСТРУМЕНТ' : 'TOOL'}</span><h1 class="section-heading">${t.calcH}</h1><p class="section-sub">${esc(t.calcDesc)}</p></header>
  <div class="md-calc">
    <form class="md-calc-form" id="calcForm" onsubmit="return false">
      <label class="md-field"><span>${L.params}</span><input type="number" id="cP" min="0.1" max="3000" step="0.1" value="8" inputmode="decimal"><small>${L.paramsHint}</small></label>
      <div class="md-presets" role="group" aria-label="${L.presets}">${presets.map((p) => `<button type="button" class="md-chip" data-p="${p}">${p}B</button>`).join('')}</div>
      <label class="md-field"><span>${L.quant}</span><select id="cQ">${L.qOpts.map(([v, x], i) => `<option value="${v}"${i === 2 ? ' selected' : ''}>${x}</option>`).join('')}</select></label>
      <label class="md-field"><span>${L.ctx}</span><select id="cC">${L.ctxOpts.map(([v, x], i) => `<option value="${v}"${i === 1 ? ' selected' : ''}>${x}</option>`).join('')}</select></label>
      <label class="md-field"><span>${L.users}</span><input type="number" id="cU" min="1" max="256" step="1" value="1" inputmode="numeric"></label>
    </form>
    <div class="md-calc-out" aria-live="polite">
      <div class="md-calc-total"><span>${L.result}</span><b id="cTotal">—</b></div>
      <div class="md-calc-bars" id="cBars"></div>
      <div class="md-calc-fit"><span>${L.fits}</span><b id="cFit">—</b></div>
      <p class="md-calc-cpu">${L.cpu}</p>
      <a class="btn btn-accent" id="cTg" href="#" target="_blank" rel="noopener"><i class="ph ph-telegram-logo" aria-hidden="true"></i>${L.cta}</a>
    </div>
  </div>
  <section class="md-calc-how"><h2>${L.h2How}</h2><ul class="md-check">${L.how.map((x) => `<li><i class="ph ph-check-circle" aria-hidden="true"></i>${x}</li>`).join('')}</ul><p class="md-source">${L.note}</p></section>
  ${offer(lang)}
</div></section>`;
  const js = `<script type="application/json" id="calcL">${JSON.stringify(L).replace(/</g, '\\u003c')}</script>
<script>
(function(){
  var L=JSON.parse(document.getElementById('calcL').textContent), $=function(id){return document.getElementById(id);};
  function fmt(x){return (x<10?x.toFixed(1):Math.round(x)).toString().replace('.',${ru ? "','" : "'.'"});}
  function calc(){
    var P=Math.max(0.1,parseFloat($('cP').value)||0), q=parseFloat($('cQ').value), c=parseFloat($('cC').value), u=Math.max(1,parseInt($('cU').value,10)||1);
    // Веса: параметры × байт на параметр. KV-кэш — грубая оценка для GQA-моделей: растёт как √P, линейно с контекстом и числом запросов.
    var w=P*q, kv=0.0475*Math.sqrt(P)*c*u, ov=w*0.1+1, total=w+kv+ov;
    $('cTotal').textContent='≈ '+fmt(total)+' '+L.gb;
    var bars=[[L.weights,w],[L.kv,kv],[L.overhead,ov]];
    $('cBars').innerHTML=bars.map(function(b){return '<div class="md-calc-bar"><span>'+b[0]+'</span><i style="width:'+Math.max(2,Math.round(b[1]/total*100))+'%"></i><b>'+fmt(b[1])+' '+L.gb+'</b></div>';}).join('');
    var fit=null; for(var i=0;i<L.gpus.length;i++){ if(total<=L.gpus[i][0]){ fit=L.gpus[i][1]; break; } }
    $('cFit').textContent=fit||L.tooBig;
    $('cTg').href='https://t.me/chimitdorzhi?text='+encodeURIComponent(L.tgCalc.replace('{p}',fmt(P)).replace('{q}',L.qNames[$('cQ').value]).replace('{c}',c).replace('{g}',fmt(total)));
  }
  ['cP','cQ','cC','cU'].forEach(function(id){ $(id).addEventListener('input',calc); $(id).addEventListener('change',calc); });
  [].forEach.call(document.querySelectorAll('.md-presets [data-p]'),function(b){ b.addEventListener('click',function(){ $('cP').value=b.dataset.p; calc(); }); });
  calc();
})();
</script>`;
  writePage(lang, 'kalkulyator-zheleza/', { title: t.calcTitle, description: t.calcDesc, ld: [ldCrumbs(lang, [[`${SITE}${BASE[lang]}`, t.section], [`${SITE}${BASE[lang]}kalkulyator-zheleza/`, t.calcH]])], main, extraJs: js, altRel: 'kalkulyator-zheleza/' });
}

// --- Подбор модели за 4 вопроса ---
function quizPage(lang) {
  const t = T[lang], ru = lang === 'ru';
  const TASKS = ru ? [
    ['chat', 'Чат-бот и ответы клиентам', ['text']], ['rag', 'Поиск по базе документов (RAG)', ['embed', 'rerank', 'docsearch']],
    ['ocr', 'Распознавание документов и сканов', ['ocr', 'docsearch']], ['asr', 'Расшифровка звонков и совещаний', ['asr']],
    ['tts', 'Озвучка и синтез речи', ['tts']], ['img', 'Картинки для маркетинга и карточек товаров', ['image', 'photo', 'tryon']],
    ['video', 'Видео и аватары', ['video', 'avatar']], ['code', 'Код, разработка, SQL', ['code', 'sql']],
    ['tr', 'Перевод текстов', ['translate']], ['cv', 'Анализ фото и видео с камер', ['vision', 'vlm']],
    ['fc', 'Прогнозы и таблицы', ['timeseries', 'tabular']], ['safe', 'Модерация, безопасность, проверка ответов', ['safety', 'cyber', 'judge']],
  ] : [
    ['chat', 'Chatbot and customer answers', ['text']], ['rag', 'Search over company documents (RAG)', ['embed', 'rerank', 'docsearch']],
    ['ocr', 'Document and scan recognition', ['ocr', 'docsearch']], ['asr', 'Call and meeting transcription', ['asr']],
    ['tts', 'Voice-over and speech synthesis', ['tts']], ['img', 'Marketing and product images', ['image', 'photo', 'tryon']],
    ['video', 'Video and avatars', ['video', 'avatar']], ['code', 'Code, development, SQL', ['code', 'sql']],
    ['tr', 'Text translation', ['translate']], ['cv', 'Camera photo and video analysis', ['vision', 'vlm']],
    ['fc', 'Forecasts and tables', ['timeseries', 'tabular']], ['safe', 'Moderation, security, answer checking', ['safety', 'cyber', 'judge']],
  ];
  const Q = ru ? {
    q1: 'Какая задача?', q2: 'Нужен русский язык?', q2o: [['yes', 'Да, обязательно'], ['any', 'Не важно']],
    q3: 'Какое железо есть или планируется?', q3o: [['min', 'Ноутбук или сервер без мощной видеокарты'], ['gpu', 'Одна видеокарта'], ['multi', 'Сервер с несколькими видеокартами']],
    q4: 'Для чего модель?', q4o: [['yes', 'Коммерческий продукт или работа с клиентами'], ['any', 'Внутренние задачи или эксперименты']],
    next: 'Дальше', back: 'Назад', show: 'Показать модели', again: 'Пройти заново', step: 'Вопрос', of: 'из',
    resH: 'Подходящие модели', resNone: 'По этим условиям точного совпадения нет — показываю ближайшие варианты.', noRu: 'Моделей с заявленным русским под эти условия нет — показываю лучшие без него.',
    tg: 'Здравствуйте! Прошёл подбор модели: задача — {t}; русский — {r}; железо — {h}; использование — {c}. Предложено: {m}. Хочу обсудить внедрение.', tgBtn: 'Обсудить внедрение', open: 'Открыть карточку',
    ruW: { yes: 'нужен', any: 'не важен' },
  } : {
    q1: 'What is the task?', q2: 'Do you need Russian?', q2o: [['yes', 'Yes, required'], ['any', 'Does not matter']],
    q3: 'What hardware do you have or plan?', q3o: [['min', 'A laptop or server without a powerful GPU'], ['gpu', 'One GPU'], ['multi', 'A server with several GPUs']],
    q4: 'What will the model be used for?', q4o: [['yes', 'A commercial product or client-facing work'], ['any', 'Internal tasks or experiments']],
    next: 'Next', back: 'Back', show: 'Show models', again: 'Start over', step: 'Question', of: 'of',
    resH: 'Matching models', resNone: 'No exact match for these conditions — showing the closest options.', noRu: 'No models with stated Russian support match — showing the best ones without it.',
    tg: 'Hello! I used the model finder: task — {t}; Russian — {r}; hardware — {h}; use — {c}. Suggested: {m}. I would like to discuss deployment.', tgBtn: 'Discuss deployment', open: 'Open card',
    ruW: { yes: 'required', any: 'not required' },
  };
  const data = MODELS[lang].map((m0) => { const m = loc(m0, lang); return { i: m.id, n: m.name, s: m.summary, mo: m.modality, r: m.ru || '', h: m.hardware, c: m.commercial, o: m.ollama ? 1 : 0, y: m.latest, cl: COM[m.commercial][lang], cc: COM[m.commercial].cls, d: m.developer }; });
  const radio = (name, opts) => opts.map(([v, x], i) => `<label class="md-opt"><input type="radio" name="${name}" value="${v}"${i === 0 ? ' checked' : ''}><span>${esc(x)}</span></label>`).join('');
  const main = `<section class="section md-page"><div class="container">
  ${crumbs(lang, [[BASE[lang], t.section], [null, t.quizH]])}
  <header class="md-hero"><span class="section-label">${ru ? 'ПОДБОР' : 'FINDER'}</span><h1 class="section-heading">${t.quizH}</h1><p class="section-sub">${esc(t.quizDesc)}</p></header>
  <form class="md-quiz" id="quiz" onsubmit="return false">
    <fieldset class="md-q" data-step="1"><legend><small>${Q.step} 1 ${Q.of} 4</small>${Q.q1}</legend><div class="md-opts md-opts-grid">${radio('task', TASKS.map(([k, x]) => [k, x]))}</div></fieldset>
    <fieldset class="md-q" data-step="2" hidden><legend><small>${Q.step} 2 ${Q.of} 4</small>${Q.q2}</legend><div class="md-opts">${radio('ru', Q.q2o)}</div></fieldset>
    <fieldset class="md-q" data-step="3" hidden><legend><small>${Q.step} 3 ${Q.of} 4</small>${Q.q3}</legend><div class="md-opts">${radio('hw', Q.q3o)}</div></fieldset>
    <fieldset class="md-q" data-step="4" hidden><legend><small>${Q.step} 4 ${Q.of} 4</small>${Q.q4}</legend><div class="md-opts">${radio('com', Q.q4o)}</div></fieldset>
    <div class="md-quiz-nav"><button type="button" class="btn btn-ghost" id="qBack" hidden>${Q.back}</button><button type="button" class="btn btn-accent" id="qNext">${Q.next}</button></div>
  </form>
  <section class="md-quiz-res" id="qRes" hidden aria-live="polite"><h2>${Q.resH}</h2><p class="md-source" id="qNote" hidden></p><div class="md-grid" id="qGrid"></div>
    <div class="md-d-actions"><a class="btn btn-accent" id="qTg" href="#" target="_blank" rel="noopener"><i class="ph ph-telegram-logo" aria-hidden="true"></i>${Q.tgBtn}</a><button type="button" class="btn btn-ghost" id="qAgain">${Q.again}</button></div></section>
  ${offer(lang)}
</div></section>`;
  const js = `<script type="application/json" id="qData">${JSON.stringify({ Q, TASKS, data, base: BASE[lang], more: t.more }).replace(/</g, '\\u003c')}</script>
<script>
(function(){
  var D=JSON.parse(document.getElementById('qData').textContent), Q=D.Q, $=function(id){return document.getElementById(id);};
  var steps=[].slice.call(document.querySelectorAll('.md-q')), cur=0;
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function val(n){var x=document.querySelector('input[name="'+n+'"]:checked');return x?x.value:'';}
  function show(i){ steps.forEach(function(s,j){ s.hidden=j!==i; }); cur=i; $('qBack').hidden=i===0; $('qNext').textContent=i===steps.length-1?Q.show:Q.next; var f=steps[i].querySelector('input:checked')||steps[i].querySelector('input'); if(f) f.focus(); }
  function run(){
    var task=D.TASKS.filter(function(x){return x[0]===val('task');})[0], ru=val('ru'), hw=val('hw'), com=val('com');
    var allowHw={min:['min'],gpu:['min','gpu'],multi:['min','gpu','multi']}[hw];
    var pool=D.data.filter(function(m){ return m.mo.some(function(k){return task[2].indexOf(k)>-1;}); });
    var strict=pool.filter(function(m){ return m.h.some(function(h){return allowHw.indexOf(h)>-1;}) && (com!=='yes'||m.c!=='no'); });
    var note='';
    var list=strict.length?strict:pool; if(!strict.length) note=Q.resNone;
    if(ru==='yes'){ var withRu=list.filter(function(m){return m.r==='yes';}); if(withRu.length) list=withRu; else note=Q.noRu; }
    function score(m){ var s=0; if(ru==='yes'&&m.r==='yes') s+=3; s+= m.c==='yes'?2:(m.c==='conditional'?1:0); s+=m.o?1:0; s+= m.y>='2026'?2:(m.y>='2025'?1:0); if(task[2].indexOf(m.mo[0])>-1) s+=1; return s; }
    list=list.slice().sort(function(a,b){ return score(b)-score(a) || b.y.localeCompare(a.y); }).slice(0,3);
    $('qGrid').innerHTML=list.map(function(m){ return '<article class="md-card"><div class="md-card-top"><span class="md-card-meta">'+(m.r==='yes'?'<span class="md-badge md-badge-ru">RU</span>':'')+(m.o?'<span class="md-badge">Ollama</span>':'')+'</span></div><h3 class="md-name"><a href="'+D.base+m.i+'/">'+esc(m.n)+'</a></h3><div class="md-dev">'+esc(m.d)+'</div><p class="md-sum">'+esc(m.s)+'</p><div class="md-card-foot"><span class="md-lic md-lic-'+m.cc+'">'+esc(m.cl)+'</span><a class="md-more" href="'+D.base+m.i+'/">'+Q.open+'</a></div></article>'; }).join('');
    $('qNote').hidden=!note; $('qNote').textContent=note;
    var hwLabel=Q.q3o.filter(function(x){return x[0]===hw;})[0][1], comLabel=Q.q4o.filter(function(x){return x[0]===com;})[0][1];
    $('qTg').href='https://t.me/chimitdorzhi?text='+encodeURIComponent(Q.tg.replace('{t}',task[1]).replace('{r}',Q.ruW[ru]).replace('{h}',hwLabel).replace('{c}',comLabel).replace('{m}',list.map(function(m){return m.n;}).join(', ')));
    $('quiz').hidden=true; $('qRes').hidden=false; $('qRes').scrollIntoView({block:'start'});
  }
  $('qNext').addEventListener('click',function(){ if(cur<steps.length-1) show(cur+1); else run(); });
  $('qBack').addEventListener('click',function(){ if(cur>0) show(cur-1); });
  $('qAgain').addEventListener('click',function(){ $('qRes').hidden=true; $('quiz').hidden=false; show(0); });
  show(0);
})();
</script>`;
  writePage(lang, 'podbor/', { title: t.quizTitle, description: t.quizDesc, ld: [ldCrumbs(lang, [[`${SITE}${BASE[lang]}`, t.section], [`${SITE}${BASE[lang]}podbor/`, t.quizH]])], main, extraJs: js, altRel: 'podbor/' });
}

// --- Справочные страницы: лицензии, дообучение ---
function guidePage(g, lang) {
  const t = T[lang];
  const src = lang === 'en' ? (g._en || g) : g;
  const sections = src.sections || [];
  const faq = src.faq || [];
  const main = `<section class="section md-page md-guide-page"><div class="container">
  ${crumbs(lang, [[BASE[lang], t.section], [null, src.h1]])}
  <header class="md-hero">
    <span class="section-label">${t.guideLabel}</span>
    <h1 class="section-heading">${esc(src.h1)}</h1>
    <p class="section-sub">${esc(src.intro)}</p>
    <div class="md-stats"><span>${t.updated} ${UPDATED[lang]}</span><a class="md-guide" href="${BASE[lang]}"><i class="ph ph-funnel" aria-hidden="true"></i>${t.openCatalog}</a></div>
  </header>
  <nav class="md-toc" aria-label="${esc(src.h1)}"><ol>${sections.map((x, i) => `<li><a href="#g${i + 1}">${esc(x.h2)}</a></li>`).join('')}</ol></nav>
  <div class="md-prose">${sections.map((x, i) => `<h2 id="g${i + 1}">${esc(x.h2)}</h2>${x.html}`).join('')}</div>
  ${faq.length ? `<section class="md-guide-faq"><h2>${t.faqH}</h2><div class="md-faq">${faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div></section>` : ''}
  ${offer(lang)}
</div></section>`;
  const url = `${SITE}${BASE[lang]}${g.slug}/`;
  const ld = [
    { '@context': 'https://schema.org', '@type': 'Article', headline: src.h1, description: src.description, url, inLanguage: lang, dateModified: LASTMOD,
      author: { '@type': 'Person', name: lang === 'en' ? 'Chimitdorzhi Darizhapov' : 'Чимитдоржи Дарижапов' } },
    ldCrumbs(lang, [[`${SITE}${BASE[lang]}`, t.section], [url, src.h1]]),
    ...(faq.length ? [{ '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: lang, mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }] : []),
  ];
  writePage(lang, `${g.slug}/`, { title: src.title, description: src.description, ld, main, extraJs: '', altRel: `${g.slug}/` });
}

// --- Стек под задачу: связка из нескольких моделей ---
function stackPage(x, lang) {
  const t = T[lang];
  const src = lang === 'en' ? (x._en || x) : x;
  const byId = Object.fromEntries(MODELS[lang].map((m) => [m.id, m]));
  const steps = (src.steps || []).map((st, i) => ({ ...st, picks: ((x.steps[i] || {}).picks || []).map((id) => byId[id]).filter(Boolean) }));
  if (!steps.length || steps.some((st) => !st.picks.length)) return false;
  const others = STACKS.filter((o) => o.slug !== x.slug);
  const main = `<section class="section md-page"><div class="container">
  ${crumbs(lang, [[BASE[lang], t.section], [null, src.h1]])}
  <header class="md-hero">
    <span class="section-label">${t.stackLabel}</span>
    <h1 class="section-heading">${esc(src.h1)}</h1>
    <p class="section-sub">${esc(src.intro)}</p>
    <div class="md-stats"><span>${t.updated} ${UPDATED[lang]}</span><a class="md-guide" href="${BASE[lang]}podbor/"><i class="ph ph-sparkle" aria-hidden="true"></i>${t.tools[0][2]}</a></div>
  </header>
  ${steps.map((st) => `<section class="md-stack-step">
    <h2>${esc(st.h3)}</h2>
    <p class="md-stack-text">${esc(st.text)}</p>
    <h3 class="md-stack-h3">${t.stackModelsH}</h3>
    <div class="md-grid">${st.picks.map((m) => card(m, lang, { compare: false })).join('')}</div>
  </section>`).join('')}
  ${src.note ? `<section class="md-colls"><h2>${t.stackNoteH}</h2><p class="md-stack-note">${esc(src.note)}</p></section>` : ''}
  ${others.length ? `<section class="md-colls"><h2>${t.otherStacks}</h2><ul class="md-links md-links-cols">${others.map((o) => `<li><a href="${BASE[lang]}stek/${o.slug}/">${esc(lang === 'en' ? (o._en || {}).h1 || o.h1 : o.h1)}</a></li>`).join('')}</ul></section>` : ''}
  ${offer(lang)}
</div></section>`;
  const url = `${SITE}${BASE[lang]}stek/${x.slug}/`;
  const ld = [
    { '@context': 'https://schema.org', '@type': 'HowTo', name: src.h1, description: src.description, url, inLanguage: lang,
      step: steps.map((st, i) => ({ '@type': 'HowToStep', position: i + 1, name: st.h3, text: st.text })) },
    ldCrumbs(lang, [[`${SITE}${BASE[lang]}`, t.section], [url, src.h1]]),
  ];
  writePage(lang, `stek/${x.slug}/`, { title: src.title, description: src.description, ld, main, extraJs: cardClickJs, altRel: `stek/${x.slug}/` });
  return true;
}

// --- Словарь терминов ---
function glossaryPage(lang) {
  const t = T[lang];
  const items = GLOSS.map((g) => ({ slug: g.slug, term: lang === 'en' ? (g._en || {}).term || g.term : g.term, def: lang === 'en' ? (g._en || {}).def || g.def : g.def }))
    .sort((a, b) => a.term.localeCompare(b.term, lang));
  const main = `<section class="section md-page"><div class="container">
  ${crumbs(lang, [[BASE[lang], t.section], [null, t.glossH1]])}
  <header class="md-hero">
    <span class="section-label">${t.glossLabel}</span>
    <h1 class="section-heading">${t.glossH1}</h1>
    <p class="section-sub">${t.glossIntro}</p>
    <div class="md-stats"><span><b>${items.length}</b> ${lang === 'en' ? 'terms' : 'терминов'}</span><span>${t.updated} ${UPDATED[lang]}</span><a class="md-guide" href="${BASE[lang]}"><i class="ph ph-funnel" aria-hidden="true"></i>${t.openCatalog}</a></div>
  </header>
  <div class="md-tools"><label class="md-search"><i class="ph ph-magnifying-glass" aria-hidden="true"></i><input id="glQ" type="search" placeholder="${esc(t.glossSearch)}" autocomplete="off" aria-label="${esc(t.glossSearch)}"></label></div>
  <dl class="md-gloss" id="glList">${items.map((g) => `<div class="md-gloss-item" id="${esc(g.slug)}" data-q="${esc((g.term + ' ' + g.def).toLowerCase())}"><dt>${esc(g.term)}</dt><dd>${esc(g.def)}</dd></div>`).join('')}</dl>
  <p class="md-empty" id="glEmpty" hidden>${t.empty} <a href="${tg(t.tgFind)}" target="_blank" rel="noopener">${t.emptyLink}</a> ${t.emptyTail}</p>
  ${offer(lang)}
</div></section>`;
  const js = `<script>
(function(){
  var q=document.getElementById('glQ'); if(!q) return;
  var items=[].slice.call(document.querySelectorAll('.md-gloss-item')), empty=document.getElementById('glEmpty');
  q.addEventListener('input',function(){
    var v=q.value.trim().toLowerCase(), n=0;
    items.forEach(function(it){ var ok=!v||it.dataset.q.indexOf(v)>-1; it.hidden=!ok; if(ok) n++; });
    empty.hidden=n>0;
  });
})();
</script>`;
  const url = `${SITE}${BASE[lang]}slovar/`;
  const ld = [
    { '@context': 'https://schema.org', '@type': 'DefinedTermSet', name: t.glossH1, url, inLanguage: lang,
      hasDefinedTerm: items.map((g) => ({ '@type': 'DefinedTerm', name: g.term, description: g.def })) },
    ldCrumbs(lang, [[`${SITE}${BASE[lang]}`, t.section], [url, t.glossH1]]),
  ];
  writePage(lang, 'slovar/', { title: t.glossTitle, description: t.glossDesc, ld, main, extraJs: js, altRel: 'slovar/' });
}

// --- Страницы по классу железа ---
function hardwarePage(x, lang) {
  const t = T[lang];
  const f2 = (k) => (lang === 'en' ? x[k + '_en'] : x[k]) || x[k];
  const items = MODELS[lang].filter((m) => m.hardware[0] === x.key);
  if (!items.length) return false;
  // Группируем по направлению: так видно, что именно на этом железе делается.
  const byMod = {};
  for (const m of items) (byMod[m.modality[0]] = byMod[m.modality[0]] || []).push(m);
  const order = Object.keys(byMod).sort((a, b) => byMod[b].length - byMod[a].length);
  const main = `<section class="section md-page"><div class="container">
  ${crumbs(lang, [[BASE[lang], t.section], [null, f2('h1')]])}
  <header class="md-hero">
    <span class="section-label">${t.hwLabelPage}</span>
    <h1 class="section-heading">${esc(f2('h1'))}</h1>
    <p class="section-sub">${esc(f2('intro'))}</p>
    <div class="md-stats"><span><b>${items.length}</b> ${t.families}</span><span>${t.updated} ${UPDATED[lang]}</span><a class="md-guide" href="${BASE[lang]}kalkulyator-zheleza/"><i class="ph ph-cpu" aria-hidden="true"></i>${t.hwCalcLink}</a></div>
  </header>
  <section class="md-colls"><h2>${t.hwExamplesH}</h2><div class="md-hw">${f2('examples').map(([h, d]) => `<div class="md-hw-row is-on"><i class="ph ph-${HW[x.key].icon}" aria-hidden="true"></i><div><b>${esc(h)}</b><span>${esc(d)}</span></div></div>`).join('')}</div></section>
  <h2 class="md-colls-h2">${t.hwWhatFits}</h2>
  ${order.map((k) => `<section class="md-hw-mod"><h3>${modLabel(k, lang)} <small>${byMod[k].length}</small></h3><div class="md-grid">${byMod[k].sort((a, b) => b.latest.localeCompare(a.latest)).slice(0, 12).map((m) => card(m, lang, { compare: false })).join('')}</div></section>`).join('')}
  <section class="md-colls"><h2>${t.hwNoteH}</h2><p class="md-stack-note">${esc(f2('note'))}</p></section>
  ${HWPAGES.filter((o) => o.slug !== x.slug).length ? `<section class="md-colls"><h2>${t.hwGroupH}</h2><ul class="md-links md-links-cols">${HWPAGES.filter((o) => o.slug !== x.slug).map((o) => `<li><a href="${BASE[lang]}zhelezo/${o.slug}/">${esc(lang === 'en' ? (o.h1_en || o.h1) : o.h1)}</a></li>`).join('')}</ul></section>` : ''}
  ${offer(lang)}
</div></section>`;
  const url = `${SITE}${BASE[lang]}zhelezo/${x.slug}/`;
  const ld = [
    { '@context': 'https://schema.org', '@type': 'CollectionPage', name: f2('h1'), url, inLanguage: lang, dateModified: LASTMOD,
      mainEntity: { '@type': 'ItemList', itemListElement: items.slice(0, 50).map((m, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}${BASE[lang]}${m.id}/`, name: m.name })) } },
    ldCrumbs(lang, [[`${SITE}${BASE[lang]}`, t.section], [url, f2('h1')]]),
  ];
  writePage(lang, `zhelezo/${x.slug}/`, { title: f2('title'), description: f2('description'), ld, main, extraJs: cardClickJs, altRel: `zhelezo/${x.slug}/` });
  return true;
}

// --- Калькулятор окупаемости: облако против своего сервера ---
function paybackPage(lang) {
  const t = T[lang], p = t.payFields;
  const num = (id, label, hint, val) => `<label class="md-calc-row"><span>${label}</span><input type="number" id="${id}" value="${val}" min="0" step="any" inputmode="decimal"><small>${hint}</small></label>`;
  const main = `<section class="section md-page"><div class="container">
  ${crumbs(lang, [[BASE[lang], t.section], [null, t.payH1]])}
  <header class="md-hero">
    <span class="section-label">${t.payLabel}</span>
    <h1 class="section-heading">${t.payH1}</h1>
    <p class="section-sub">${t.payIntro}</p>
    <div class="md-stats"><span>${t.updated} ${UPDATED[lang]}</span><a class="md-guide" href="${BASE[lang]}kalkulyator-zheleza/"><i class="ph ph-cpu" aria-hidden="true"></i>${t.hwCalcLink}</a></div>
  </header>
  <div class="md-calc">
    <div class="md-calc-form">
      ${num('pReq', p.req, p.reqH, 100000)}
      ${num('pTok', p.tok, p.tokH, 2000)}
      ${num('pPrice', p.price, p.priceH, 500)}
      ${num('pServer', p.server, p.serverH, 45000)}
      ${num('pSetup', p.setup, p.setupH, 200000)}
      ${num('pKeep', p.keep, p.keepH, 25000)}
    </div>
    <div class="md-calc-out" id="pOut" aria-live="polite"></div>
  </div>
  <p class="md-run-note">${t.payNote}</p>
  ${offer(lang)}
</div></section>`;
  const js = `<script>
(function(){
  var L=${JSON.stringify({ result: t.payResult, cloud: t.payCloud, own: t.payOwn, save: t.paySave, months: t.payMonths, never: t.payNever, tokens: t.payTokens, btn: t.payBtn, locale: lang })};
  var ids=['pReq','pTok','pPrice','pServer','pSetup','pKeep'], out=document.getElementById('pOut');
  if(!out) return;
  function v(id){ var x=parseFloat(document.getElementById(id).value); return isFinite(x)&&x>0?x:0; }
  function fmt(x){ return Math.round(x).toLocaleString(L.locale==='ru'?'ru-RU':'en-US'); }
  function monthsWord(m){ ${lang === 'ru'
    ? "var a=m%10,b=m%100; return m+' '+(a===1&&b!==11?'месяц':(a>=2&&a<=4&&(b<10||b>=20)?'месяца':'месяцев'));"
    : "return m+(m===1?' month':' months');"} }
  function calc(){
    var tokens=v('pReq')*v('pTok');
    var cloud=tokens/1000000*v('pPrice');
    var own=v('pServer')+v('pKeep');
    var diff=cloud-own;
    var rows=''
      +'<div class="md-calc-line"><span>'+L.tokens+'</span><b>'+fmt(tokens)+'</b></div>'
      +'<div class="md-calc-line"><span>'+L.cloud+'</span><b>'+fmt(cloud)+'</b></div>'
      +'<div class="md-calc-line"><span>'+L.own+'</span><b>'+fmt(own)+'</b></div>'
      +'<div class="md-calc-line md-calc-accent"><span>'+L.save+'</span><b>'+(diff>0?'+':'')+fmt(diff)+'</b></div>';
    if(diff>0&&v('pSetup')>0) rows+='<div class="md-calc-line md-calc-big"><span>'+L.months+'</span><b>'+monthsWord(Math.ceil(v('pSetup')/diff))+'</b></div>';
    else if(diff>0) rows+='<div class="md-calc-line md-calc-big"><span>'+L.months+'</span><b>'+monthsWord(0)+'</b></div>';
    else rows+='<div class="md-calc-note">'+L.never+'</div>';
    out.innerHTML=rows+'<a class="btn btn-accent md-calc-btn" href="https://t.me/chimitdorzhi" target="_blank" rel="noopener"><i class="ph ph-telegram-logo" aria-hidden="true"></i>'+L.btn+'</a>';
  }
  ids.forEach(function(id){ document.getElementById(id).addEventListener('input',calc); });
  calc();
})();
</script>`;
  const url = `${SITE}${BASE[lang]}kalkulyator-okupaemosti/`;
  writePage(lang, 'kalkulyator-okupaemosti/', { title: t.payTitle, description: t.payDesc, ld: [ldCrumbs(lang, [[`${SITE}${BASE[lang]}`, t.section], [url, t.payH1]])], main, extraJs: js, altRel: 'kalkulyator-okupaemosti/' });
}

// --- Сборка всех страниц ---
const COLLS = { ru: collectionList('ru'), en: collectionList('en') };
COLLS.ru.alt = new Set(COLLS.en.map((x) => x.rel));
COLLS.en.alt = new Set(COLLS.ru.map((x) => x.rel));
for (const lang of LANGS) {
  if (!MODELS[lang].length) { console.log(`  ⚠ ${lang}: нет моделей с переводом — версия не собрана`); continue; }
  fs.mkdirSync(OUT[lang], { recursive: true });
  catalog(lang, COLLS[lang]);
  for (const m of MODELS[lang]) detail(m, lang);
  for (const x of COLLS[lang]) collectionPage(x, lang, COLLS[lang]);
  for (const a of ALTS) altPage(a, lang);
  for (const p of CMP) comparePage(p, lang);
  for (const g of Object.values(GUIDES)) guidePage(g, lang);
  for (const x of STACKS) stackPage(x, lang);
  for (const x of HWPAGES) hardwarePage(x, lang);
  if (GLOSS.length) glossaryPage(lang);
  paybackPage(lang);
  newPage(lang);
  calcPage(lang);
  quizPage(lang);
}

// sitemap.xml: убираем прежние /ii-modeli/ и /en/ii-modeli/ и дописываем актуальные.
// build-services перезаписывает sitemap целиком, поэтому этот скрипт идёт после него.
const SM = path.join(ROOT, 'sitemap.xml');
if (fs.existsSync(SM)) {
  let sm = fs.readFileSync(SM, 'utf8').replace(/\s*<url>\s*<loc>https:\/\/chimitdorzhi\.tech\/(en\/)?ii-modeli\/[^<]*<\/loc>[\s\S]*?<\/url>/g, '');
  const block = PAGES.map((u) => `  <url>\n    <loc>${u}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n  </url>`).join('\n');
  sm = sm.replace('</urlset>', block + '\n</urlset>');
  fs.writeFileSync(SM, sm);
}
console.log(`  /ii-modeli/: ${MODELS.ru.length} моделей RU, ${MODELS.en.length} EN; подборок ${COLLS.ru.length}/${COLLS.en.length}; альтернатив ${ALTS.length}; сравнений ${CMP.length}; стеков ${STACKS.length}; терминов ${GLOSS.length}; всего страниц ${PAGES.length}`);

// --- Обложки 1200×630 для превью в мессенджерах и соцсетях ---
// Стиль как у обложек блога (tools/og-generator.js): тёмная основа, жёлтая плашка, диагональ справа.
const INK_DEEP = '#070a14';
const AMBER = '#f5b642';
const BLUE = '#2f5fe0';
const FONT = "'Manrope', 'Inter', 'DejaVu Sans', 'Liberation Sans', Arial, sans-serif";
const LIC_DOT = { yes: '#34d399', conditional: '#fbbf24', no: '#f87171' };
const xml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[c]));
// Перенос по словам; слишком длинное обрезаем многоточием, чтобы не вылезать за край.
function wrap(text, maxChars, maxLines) {
  const words = String(text).split(/\s+/); const lines = []; let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length <= maxChars) cur = (cur + ' ' + w).trim();
    else { if (cur) lines.push(cur); cur = w; }
  }
  if (cur) lines.push(cur);
  if (lines.length > maxLines) { const cut = lines.slice(0, maxLines); cut[maxLines - 1] = cut[maxLines - 1].replace(/.{0,2}$/, '') + '…'; return cut; }
  return lines.map((l) => (l.length > maxChars + 4 ? l.slice(0, maxChars + 2) + '…' : l));
}
function frame(inner, lang) {
  const t = T[lang];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${INK_DEEP}"/>
  <path d="M860 0 L1200 0 L1200 630 L660 630 Z" fill="${BLUE}" fill-opacity="0.92"/>
  <path d="M1010 0 L1200 0 L1200 630 L820 630 Z" fill="${AMBER}" fill-opacity="0.2"/>
  <circle cx="1090" cy="470" r="86" fill="none" stroke="#ffffff" stroke-opacity="0.28" stroke-width="3"/>
  <rect x="72" y="66" width="190" height="40" rx="20" fill="${AMBER}"/>
  <text x="167" y="93" text-anchor="middle" font-family="${FONT}" font-weight="800" font-size="18" letter-spacing="2" fill="${INK_DEEP}">${t.coverTag}</text>
  ${inner}
  <line x1="72" y1="528" x2="700" y2="528" stroke="#ffffff" stroke-opacity="0.2" stroke-width="2"/>
  <text x="72" y="570" font-family="${FONT}" font-weight="800" font-size="24" fill="#ffffff">${t.coverAuthor}</text>
  <text x="72" y="600" font-family="${FONT}" font-weight="500" font-size="19" fill="#ffffff" fill-opacity="0.6">${t.coverSite}</text>
</svg>`;
}
function modelCoverSvg(m0, lang) {
  const m = loc(m0, lang), t = T[lang];
  // На обложке без пояснений в скобках: «Sentence Transformers (SBERT)» → «Sentence Transformers».
  const clean = m.name.replace(/\s*\([^)]*\)/g, '').trim();
  let name = wrap(clean, 16, 2), fs1 = name.length > 1 ? 60 : (clean.length > 12 ? 66 : 80);
  if (name.some((l) => l.endsWith('…'))) { name = wrap(clean, 22, 3); fs1 = 46; }
  const nameY = name.length > 2 ? 176 : name.length > 1 ? 196 : 222;
  const titles = name.map((l, i) => `<text x="72" y="${nameY + i * (fs1 * 1.12)}" font-family="${FONT}" font-weight="800" font-size="${fs1}" fill="#ffffff">${xml(l)}</text>`).join('');
  const devY = nameY + (name.length - 1) * fs1 * 1.12 + 52;
  const dev = wrap(`${m.developer} · ${m.country}`, 44, 1)[0];
  const facts = [[null, modLabel(m.modality[0], lang)], [LIC_DOT[m.commercial], COM[m.commercial][lang]], [null, `${t.coverHw} ${HW[m.hardware[0]][lang][2]}`]];
  const factRows = facts.map(([dot, x], i) => {
    const y = devY + 58 + i * 40;
    return (dot ? `<circle cx="80" cy="${y - 7}" r="7" fill="${dot}"/>` : `<rect x="74" y="${y - 13}" width="12" height="12" rx="3" fill="${AMBER}"/>`)
      + `<text x="100" y="${y}" font-family="${FONT}" font-weight="600" font-size="24" fill="#ffffff" fill-opacity="0.9">${xml(x)}</text>`;
  }).join('');
  return frame(`${titles}
  <text x="72" y="${devY}" font-family="${FONT}" font-weight="500" font-size="26" fill="#ffffff" fill-opacity="0.65">${xml(dev)}</text>
  ${factRows}`, lang);
}
function catalogCoverSvg(lang, n, dirs) {
  const t = T[lang];
  return frame(`<text x="72" y="210" font-family="${FONT}" font-weight="800" font-size="70" fill="#ffffff">${t.coverCatA}</text>
  <text x="72" y="292" font-family="${FONT}" font-weight="800" font-size="70" fill="${AMBER}">2022–2026</text>
  <text x="72" y="372" font-family="${FONT}" font-weight="600" font-size="28" fill="#ffffff" fill-opacity="0.9">${n} ${t.families} · ${dirs} ${t.directions}</text>
  <text x="72" y="418" font-family="${FONT}" font-weight="500" font-size="24" fill="#ffffff" fill-opacity="0.65">${t.coverCatB}</text>`, lang);
}
(async () => {
  let sharp;
  try { sharp = require('sharp'); } catch (e) { console.log('  ⚠ sharp недоступен — обложки /ii-modeli/ не пересобраны'); return; }
  const crypto = require('crypto');
  // Перерисовываем только изменившиеся обложки: хеш SVG хранится рядом в cover.svg.hash (не публикуется — .gitignore не нужен, файл мелкий).
  const render = async (svg, file) => {
    const h = crypto.createHash('md5').update(svg).digest('hex'), hf = file + '.hash';
    if (fs.existsSync(file) && fs.existsSync(hf) && fs.readFileSync(hf, 'utf8') === h) return 0;
    await sharp(Buffer.from(svg)).png({ compressionLevel: 9, palette: true }).toFile(file);
    fs.writeFileSync(hf, h);
    return 1;
  };
  let n = 0;
  for (const lang of LANGS) {
    if (!MODELS[lang].length) continue;
    const dirs = new Set(MODELS[lang].flatMap((m) => m.modality)).size;
    n += await render(catalogCoverSvg(lang, MODELS[lang].length, dirs), path.join(OUT[lang], 'cover.png'));
    for (const m of MODELS[lang]) n += await render(modelCoverSvg(m, lang), path.join(OUT[lang], m.id, 'cover.png'));
  }
  console.log(`  /ii-modeli/: обложки перерисованы — ${n}`);
})();
