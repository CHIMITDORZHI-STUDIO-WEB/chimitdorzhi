// Сборка раздела /ii-modeli/ — энциклопедия открытых ИИ-моделей.
// Данные: tools/models-data.js. Шапка, навигация и подвал берутся из
// predlozheniya/index.html, чтобы раздел жил в той же оболочке сайта.
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'ii-modeli');
const SITE = 'https://chimitdorzhi.tech';
const UPDATED = '22.09.2026';
const MODELS = require('./models-data.js').filter((m) => {
  const bad = [];
  for (const k of ['id', 'name', 'developer', 'country', 'first', 'latest', 'sizes', 'license', 'summary']) if (!m[k]) bad.push(k);
  if (!/^[a-z0-9-]+$/.test(m.id || '')) bad.push('id-format');
  if (!/^\d{4}-\d{2}$/.test(m.first || '') || !/^\d{4}-\d{2}$/.test(m.latest || '')) bad.push('dates');
  if (!Array.isArray(m.modality) || !m.modality.length || m.modality.some((x) => !['text','code','vlm','ocr','image','video','avatar','asr','tts','omni','audio','3d','vision','embed','timeseries','robotics','tryon','photo','translate','safety','voice','agent','tabular','nlp','medical','reasoning','rerank','docsearch','sql','judge','face','finance','cyber','weather','geo','bio','driving'].includes(x))) bad.push('modality');
  if (!Array.isArray(m.hardware) || !m.hardware.length || m.hardware.some((x) => !['min', 'gpu', 'multi'].includes(x))) bad.push('hardware');
  if (!['yes', 'conditional', 'no'].includes(m.commercial)) bad.push('commercial');
  if (!Array.isArray(m.tasks) || m.tasks.length < 2 || !Array.isArray(m.where) || !m.where.length) bad.push('tasks/where');
  if (!Array.isArray(m.versions) || !m.versions.length || m.versions.some((v) => !/^\d{4}-\d{2}$/.test(v[1]))) bad.push('versions');
  if (bad.length) console.log(`  ⚠ ${m.id || m.name}: пропущено (${bad.join(', ')})`);
  return !bad.length;
});

const MOD = {
  text:       { label: 'Текст',            icon: 'chat-text' },
  code:       { label: 'Код',              icon: 'code' },
  vlm:        { label: 'Картинка + текст', icon: 'eye' },
  ocr:        { label: 'Документы и OCR',  icon: 'scan' },
  image:      { label: 'Картинки',         icon: 'image' },
  video:      { label: 'Видео',            icon: 'film-strip' },
  avatar:     { label: 'Аватары',          icon: 'user-focus' },
  asr:        { label: 'Речь в текст',     icon: 'microphone' },
  tts:        { label: 'Синтез речи',      icon: 'megaphone' },
  omni:       { label: 'Голосовые ассистенты', icon: 'headset' },
  audio:      { label: 'Музыка и звук',    icon: 'music-notes' },
  '3d':       { label: '3D',               icon: 'cube' },
  vision:     { label: 'Компьютерное зрение', icon: 'crosshair' },
  embed:      { label: 'Поиск и RAG',      icon: 'magnifying-glass' },
  timeseries: { label: 'Прогнозы',         icon: 'chart-line-up' },
  robotics:   { label: 'Роботы',           icon: 'robot' },
  tryon:      { label: 'Примерка одежды',  icon: 't-shirt' },
  photo:      { label: 'Обработка фото',   icon: 'magic-wand' },
  translate:  { label: 'Перевод',          icon: 'translate' },
  safety:     { label: 'Модерация и безопасность', icon: 'shield-check' },
  voice:      { label: 'Голос: спикеры и звук', icon: 'waveform' },
  agent:      { label: 'Агенты для компьютера', icon: 'cursor-click' },
  tabular:    { label: 'Табличные данные', icon: 'table' },
  nlp:        { label: 'Разбор текста',    icon: 'text-aa' },
  medical:    { label: 'Медицина',         icon: 'first-aid' },
  reasoning:  { label: 'Математика и рассуждения', icon: 'brain' },
  rerank:     { label: 'Реранкеры', icon: 'funnel' },
  docsearch:  { label: 'Поиск по сканам документов', icon: 'files' },
  sql:        { label: 'Текст в SQL', icon: 'database' },
  judge:      { label: 'Проверка фактов и оценка ответов', icon: 'gavel' },
  face:       { label: 'Лица', icon: 'scan-smiley' },
  finance:    { label: 'Финансы', icon: 'currency-circle-dollar' },
  cyber:      { label: 'Кибербезопасность', icon: 'bug' },
  weather:    { label: 'Погода и климат', icon: 'cloud-sun' },
  geo:        { label: 'Спутниковые снимки и гео', icon: 'globe-hemisphere-east' },
  bio:        { label: 'Биология и химия', icon: 'flask' },
  driving:    { label: 'Автономное вождение', icon: 'car' },
};
const HW = {
  min:   { short: 'Ноутбук',        long: 'Ноутбук или обычный ПК, до 8 ГБ видеопамяти — младшие версии', icon: 'laptop' },
  gpu:   { short: '1 видеокарта',   long: 'Одна видеокарта на 16–80 ГБ — средние версии', icon: 'cpu' },
  multi: { short: 'Кластер',        long: 'Сервер с несколькими видеокартами — флагманские версии', icon: 'hard-drives' },
};
const COM = {
  yes:         { label: 'Можно в коммерцию', cls: 'ok' },
  conditional: { label: 'Коммерция с условиями', cls: 'warn' },
  no:          { label: 'Только некоммерческое', cls: 'no' },
};
const MONTHS = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
const fmtMonth = (ym) => { const [y, m] = ym.split('-'); return MONTHS[+m - 1] + ' ' + y; };
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const tg = (text) => 'https://t.me/chimitdorzhi?text=' + encodeURIComponent(text);

// --- Оболочка сайта из готовой страницы ---
const shellSrc = fs.readFileSync(path.join(ROOT, 'predlozheniya', 'index.html'), 'utf8');
const headTpl = shellSrc.slice(0, shellSrc.indexOf('<script type="application/ld+json">'));
const bodyStart = shellSrc.slice(shellSrc.indexOf('</head>'), shellSrc.indexOf('<main id="main">'));
const footer = shellSrc.slice(shellSrc.indexOf('<footer'), shellSrc.indexOf('</footer>') + 9);
const scripts = (shellSrc.match(/<script src="\/i18n\.js[^"]*" defer><\/script>\s*<script src="\/script\.js[^"]*" defer><\/script>/) || [''])[0];

function head({ title, description, url, ld }) {
  let h = headTpl
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(description)}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(title)}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(description)}`);
  h += '<link rel="stylesheet" href="/assets/models.css?v=11">\n';
  for (const obj of ld) h += `<script type="application/ld+json">${JSON.stringify(obj)}</script>\n`;
  return h;
}
// Пометка про Meta, как в блоге: Llama, SAM, DINO и др. — модели Meta, а упоминание без
// пометки грозит штрафом по ст. 13.15 КоАП. Ищем только в тексте, не в адресах ссылок.
function metaNote(html) {
  const text = html.replace(/href="[^"]*"/g, '');
  const meta = /(^|[^0-9A-Za-zА-Яа-я])Meta([^0-9A-Za-zА-Яа-я]|$)/.test(text);
  const net = /instagram|инстаграм|facebook|фейсбук/i.test(text);
  if (!meta && !net) return '';
  const what = net ? 'Instagram и Facebook принадлежат компании Meta, которая' : 'Meta —';
  return '<aside class="blog-legal-note md-legal" role="note"><p><strong>Важно.</strong> ' + what + ' признана в России экстремистской организацией, её деятельность на территории Российской Федерации запрещена.</p></aside>';
}
function page({ title, description, url, ld, main, extraJs = '' }) {
  const note = metaNote(main);
  if (note) main = main.replace(/<\/div><\/section>\s*$/, note + '</div></section>');
  return head({ title, description, url, ld }) + bodyStart + `<main id="main">\n${main}\n</main>\n` + footer + '\n' + scripts + extraJs + '\n</body>\n</html>\n';
}

const modChip = (m) => `<span class="md-mod"><i class="ph ph-${MOD[m].icon}" aria-hidden="true"></i>${MOD[m].label}</span>`;
const lic = (c) => `<span class="md-lic md-lic-${COM[c].cls}">${COM[c].label}</span>`;
const hwMin = (arr) => HW[arr[0]].short;
// Выпадающий фильтр каталога: id select = md-<id>, значение пустое = «любое».
const sel = (id, label, anyLabel, opts) => `<label class="md-select"><span>${label}</span><select id="md-${id}" data-f="${id}">${anyLabel !== null ? `<option value="">${anyLabel}</option>` : ''}${opts.map(([v, t]) => `<option value="${v}">${esc(t)}</option>`).join('')}</select></label>`;
const years = (m) => { const a = m.first.slice(0, 4), b = m.latest.slice(0, 4); return a === b ? a : `${a}–${b}`; };

// --- Группы для фильтров ---
// Страна: одна модель может относиться к нескольким группам («США / Китай»).
const COUNTRY = [
  ['ru', 'Россия', /Росси/],
  ['cn', 'Китай', /Китай|Гонконг|Тайвань/],
  ['us', 'США', /США/],
  ['eu', 'Европа', /Франц|Герман|Швейц|Великобрит|Австри|Нидерланд|Испан|Итал|Швец|Финлянд|Норвег|Дани|Польш|Португал|Бельги|Ирланд|Чехи|Люксембург|Европ|ЕС/],
];
const countryKeys = (m) => { const k = COUNTRY.filter(([, , re]) => re.test(m.country)).map(([key]) => key); return k.length ? k : ['other']; };
// Разработчик: приводим разные написания к бренду. В список фильтра попадают бренды с 2+ семействами.
const BRANDS = [
  ['sber', 'Сбер', /Сбер|ai-forever|SberDevices|ai-sage|Salute/i], ['yandex', 'Яндекс', /Яндекс|Yandex/i], ['tbank', 'Т-Банк', /Т-Банк|T-Bank|T-Tech|Тинькофф/i],
  ['alibaba', 'Alibaba', /Alibaba|Qwen|Tongyi|Alibaba Cloud|DAMO/i], ['google', 'Google', /Google|DeepMind/i], ['meta', 'Meta', /(^|[^A-Za-z])Meta([^A-Za-z]|$)|FAIR/],
  ['nvidia', 'NVIDIA', /NVIDIA/i], ['microsoft', 'Microsoft', /Microsoft/i], ['deepseek', 'DeepSeek', /DeepSeek/i], ['tencent', 'Tencent', /Tencent|Hunyuan/i],
  ['bytedance', 'ByteDance', /ByteDance/i], ['mistral', 'Mistral AI', /Mistral/i], ['openai', 'OpenAI', /OpenAI/i], ['ibm', 'IBM', /IBM/i],
  ['ai2', 'Ai2 (Allen AI)', /Ai2|Allen/i], ['hf', 'Hugging Face', /Hugging ?Face/i], ['stability', 'Stability AI', /Stability/i], ['zhipu', 'Zhipu / Z.ai', /Zhipu|Z\.ai|THUDM|zai-org/i],
  ['moonshot', 'Moonshot AI', /Moonshot/i], ['baidu', 'Baidu', /Baidu/i], ['xiaomi', 'Xiaomi', /Xiaomi/i], ['meituan', 'Meituan', /Meituan/i],
  ['ant', 'Ant Group', /Ant Group|inclusionAI|Ant /i], ['minimax', 'MiniMax', /MiniMax/i], ['nous', 'Nous Research', /Nous/i], ['cohere', 'Cohere', /Cohere/i],
];
const brandKeys = (m) => BRANDS.filter(([, , re]) => re.test(m.developer)).map(([k]) => k);
const INDUSTRY = {
  retail: 'Торговля и маркетплейсы', support: 'Поддержка клиентов', docs: 'Документы и бухгалтерия', legal: 'Юристы',
  medical: 'Медицина', education: 'Образование', marketing: 'Маркетинг и контент', media: 'Медиа и продакшн', hr: 'HR',
  manufacturing: 'Производство и склад', finance: 'Финансы', dev: 'Разработка ПО', security: 'Безопасность', science: 'Наука', gov: 'Госсектор',
};
const RU = { yes: 'Есть', no: 'Нет', na: 'Не требуется', unknown: 'Не заявлен' };
// Эти поля собираются отдельно; фильтр показываем, только когда данные есть у заметной части каталога.
const hasField = (k) => MODELS.filter((m) => m[k] !== undefined).length >= MODELS.length * 0.5;

// --- Карточка в каталоге ---
function card(m) {
  const q = [m.name, m.developer, m.country, ...m.modality.map((x) => MOD[x].label), ...m.tasks, ...m.where, ...(m.industries || []).map((k) => INDUSTRY[k] || '')].join(' ').toLowerCase().replace(/ё/g, 'е');
  const badges = (m.ru === 'yes' ? '<span class="md-badge md-badge-ru" title="Русский язык заявлен">RU</span>' : '') + (m.ollama ? '<span class="md-badge" title="Есть в библиотеке Ollama">Ollama</span>' : '');
  return `<article class="md-card" data-id="${m.id}" data-mod="${m.modality.join(' ')}" data-hw="${m.hardware.join(' ')}" data-com="${m.commercial}" data-latest="${m.latest}" data-first="${m.first}" data-name="${esc(m.name.toLowerCase())}" data-country="${countryKeys(m).join(' ')}" data-dev="${brandKeys(m).join(' ')}" data-ru="${m.ru || ''}" data-ind="${(m.industries || []).join(' ')}" data-ollama="${m.ollama ? 1 : 0}" data-cpu="${m.cpu ? 1 : 0}" data-q="${esc(q)}">
  <div class="md-card-top">${modChip(m.modality[0])}<span class="md-card-meta">${badges}<span class="md-year">${years(m)}</span></span></div>
  <h2 class="md-name"><a href="/ii-modeli/${m.id}/">${esc(m.name)}</a></h2>
  <div class="md-dev">${esc(m.developer)} · ${esc(m.country)}</div>
  <p class="md-sum">${esc(m.summary)}</p>
  <ul class="md-tasks">${m.tasks.slice(0, 3).map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
  <dl class="md-specs">
    <div><dt>Размеры</dt><dd>${esc(m.sizes)}</dd></div>
    <div><dt>Железо</dt><dd>от: ${hwMin(m.hardware)}</dd></div>
  </dl>
  <div class="md-card-foot">${lic(m.commercial)}<span class="md-more">Подробнее<i class="ph ph-arrow-right" aria-hidden="true"></i></span></div>
  <label class="md-cmp"><input type="checkbox" class="md-cmp-box" value="${m.id}"><span>Сравнить</span></label>
</article>`;
}

// --- Каталог ---
function catalog() {
  const counts = {};
  for (const m of MODELS) for (const x of m.modality) counts[x] = (counts[x] || 0) + 1;
  // Направлений много, поэтому кнопки разложены по группам. Ключ без группы попадает в «Прочее».
  const GROUPS = [
    ['Текст и код', ['text', 'code', 'reasoning', 'nlp', 'translate', 'sql', 'agent', 'judge', 'safety']],
    ['Документы и поиск', ['ocr', 'docsearch', 'embed', 'rerank', 'tabular']],
    ['Картинки и видео', ['image', 'video', 'vlm', 'photo', 'tryon', 'avatar', 'face', '3d', 'vision']],
    ['Речь и звук', ['asr', 'tts', 'voice', 'omni', 'audio']],
    ['Отрасли и наука', ['medical', 'finance', 'cyber', 'timeseries', 'weather', 'geo', 'bio', 'driving', 'robotics']],
  ];
  const grouped = new Set(GROUPS.flatMap(([, ks]) => ks));
  const rest = Object.keys(MOD).filter((k) => !grouped.has(k));
  if (rest.length) GROUPS.push(['Прочее', rest]);
  const chip = (k) => `<button type="button" class="md-chip" data-mod="${k}" aria-pressed="false"><i class="ph ph-${MOD[k].icon}" aria-hidden="true"></i>${MOD[k].label}<span>${counts[k]}</span></button>`;
  const chips = GROUPS.map(([label, ks]) => {
    const inner = ks.filter((k) => counts[k]).map(chip).join('');
    return inner ? `<div class="md-chip-group"><span class="md-chip-label">${label}</span><div class="md-chip-row">${inner}</div></div>` : '';
  }).join('');
  const sorted = [...MODELS].sort((a, b) => b.latest.localeCompare(a.latest));
  const fresh = sorted.slice(0, 5);
  const main = `<section class="section md-page"><div class="container">
  <nav class="breadcrumbs" aria-label="Хлебные крошки"><a href="/">Главная</a><span class="breadcrumbs-sep">›</span><span aria-current="page">ИИ-модели</span></nav>
  <header class="md-hero">
    <span class="section-label">ЭНЦИКЛОПЕДИЯ</span>
    <h1 class="section-heading">Открытые <span class="text-gradient">ИИ-модели</span></h1>
    <p class="section-sub">Модели с открытыми весами с 2022 года: текст, код, картинки, видео, речь, 3D. По каждой коротко: какие задачи решает, где применяется, какое нужно железо и можно ли в коммерцию. Любую из них поставлю на ваш сервер и дообучу под вашу задачу.</p>
    <div class="md-stats"><span><b>${MODELS.length}</b> семейств</span><span><b>${Object.keys(counts).length}</b> направлений</span><span>Обновлено ${UPDATED}</span><a class="md-guide" href="/blog/otkrytye-ii-modeli-2022-2026-putevoditel/"><i class="ph ph-book-open" aria-hidden="true"></i>Путеводитель: как выбрать модель</a></div>
  </header>
  <div class="md-fresh" aria-label="Последние релизы">
    <div class="md-fresh-title"><i class="ph ph-sparkle" aria-hidden="true"></i>Свежие релизы</div>
    <ol class="md-fresh-list">${fresh.map((m) => `<li><a href="/ii-modeli/${m.id}/"><span class="md-fresh-date">${fmtMonth(m.latest)}</span><span class="md-fresh-name" title="${esc(m.versions[m.versions.length - 1][0])}">${esc(m.versions[m.versions.length - 1][0])}</span><span class="md-fresh-dev" title="${esc(m.developer)}">${esc(m.developer)}</span></a></li>`).join('')}</ol>
  </div>
  <div class="md-tools">
    <label class="md-search"><i class="ph ph-magnifying-glass" aria-hidden="true"></i><input id="mdQ" type="search" placeholder="Модель, разработчик или задача: «расшифровка звонков»" autocomplete="off" aria-label="Поиск по моделям"></label>
    <div class="md-selects">
      ${sel('hw', 'Железо', 'Любое', [['min', 'Хватит ноутбука'], ['gpu', 'Одна видеокарта'], ['multi', 'Кластер']])}
      ${sel('com', 'Лицензия', 'Любая', [['yes', 'Можно в коммерцию'], ['conditional', 'С условиями'], ['no', 'Только некоммерческое']])}
      ${hasField('ru') ? sel('ru', 'Русский язык', 'Не важно', [['yes', 'Русский заявлен']]) : ''}
      ${hasField('industries') ? sel('ind', 'Сфера', 'Любая', Object.entries(INDUSTRY).filter(([k]) => MODELS.some((m) => (m.industries || []).includes(k)))) : ''}
      ${sel('country', 'Страна', 'Любая', [...COUNTRY.map(([k, l]) => [k, l]), ['other', 'Другие']].filter(([k]) => MODELS.some((m) => countryKeys(m).includes(k))).map(([k, l]) => [k, `${l} (${MODELS.filter((m) => countryKeys(m).includes(k)).length})`]))}
      ${sel('dev', 'Разработчик', 'Любой', BRANDS.map(([k, l]) => [k, l, MODELS.filter((m) => brandKeys(m).includes(k)).length]).filter((x) => x[2] >= 2).sort((a, b) => b[2] - a[2]).map(([k, l, n]) => [k, `${l} (${n})`]))}
      ${sel('fresh', 'Свежесть', 'Любая', [['2026', 'Обновлялась в 2026'], ['2025', 'Последняя версия — 2025'], ['old', 'Раньше 2025']])}
      ${sel('sort', 'Порядок', null, [['new', 'Сначала новые'], ['old', 'Сначала старые'], ['az', 'По алфавиту']])}
    </div>
    <div class="md-toggles">
      ${hasField('ollama') ? '<label class="md-toggle"><input type="checkbox" id="mdOllama"><span>Есть в Ollama — запуск в один клик</span></label>' : ''}
      ${hasField('cpu') ? '<label class="md-toggle"><input type="checkbox" id="mdCpu"><span>Работает без видеокарты</span></label>' : ''}
      <button type="button" class="md-reset" id="mdReset" hidden><i class="ph ph-x" aria-hidden="true"></i>Сбросить фильтры</button>
    </div>
  </div>
  <div class="md-chips" role="group" aria-label="Направление"><div class="md-chip-all"><button type="button" class="md-chip is-on" data-mod="" aria-pressed="true"><i class="ph ph-squares-four" aria-hidden="true"></i>Все направления<span>${MODELS.length}</span></button></div>${chips}</div>
  <p class="md-count" id="mdCount" aria-live="polite">Показано ${MODELS.length} из ${MODELS.length}</p>
  <div class="md-grid" id="mdGrid">${sorted.map(card).join('\n')}</div>
  <p class="md-empty" id="mdEmpty" hidden>Под эти условия моделей нет. Сбросьте фильтр или <a href="${tg('Здравствуйте! Ищу открытую модель под задачу: ')}" target="_blank" rel="noopener">опишите задачу</a> — подберу сам.</p>
  <div class="md-tray" id="mdTray" hidden role="region" aria-label="Сравнение моделей">
    <div class="md-tray-list" id="mdTrayList"></div>
    <div class="md-tray-actions">
      <button type="button" class="btn btn-accent" id="mdCmpOpen"><i class="ph ph-scales" aria-hidden="true"></i>Сравнить</button>
      <button type="button" class="md-tray-clear" id="mdCmpClear"><i class="ph ph-trash" aria-hidden="true"></i>Очистить</button>
    </div>
  </div>
  <dialog class="md-dialog" id="mdDialog" aria-labelledby="mdDialogT">
    <div class="md-dialog-head"><h2 id="mdDialogT">Сравнение моделей</h2><button type="button" class="md-dialog-x" id="mdDialogX" aria-label="Закрыть"><i class="ph ph-x" aria-hidden="true"></i></button></div>
    <div class="md-dialog-body" id="mdDialogBody"></div>
    <div class="md-dialog-foot"><a class="btn btn-accent" id="mdDialogTg" href="#" target="_blank" rel="noopener"><i class="ph ph-telegram-logo" aria-hidden="true"></i>Обсудить выбор</a></div>
  </dialog>
  <script type="application/json" id="mdData">${JSON.stringify(Object.fromEntries(MODELS.map((m) => [m.id, {
    n: m.name, d: m.developer + ', ' + m.country, mo: m.modality.map((x) => MOD[x].label).join(', '), s: m.sizes,
    l: COM[m.commercial].label, lc: COM[m.commercial].cls, lt: m.license, h: m.hardware.map((x) => HW[x].short).join(', '),
    r: m.ru ? RU[m.ru] : '', o: m.ollama === undefined ? '' : (m.ollama ? 'Есть' : 'Нет'), c: m.cpu === undefined ? '' : (m.cpu ? 'Да' : 'Нет'),
    y: fmtMonth(m.first) + ' – ' + fmtMonth(m.latest), t: m.tasks.slice(0, 3),
  }]))).replace(/</g, '\\u003c')}</script>
  <section class="md-offer" aria-labelledby="mdOfferT">
    <div class="md-offer-text">
      <h2 id="mdOfferT">Нужна модель под вашу задачу?</h2>
      <p>Открытую модель можно поставить на свой сервер: данные не уходят в чужое облако, нет оплаты за каждый запрос, модель можно дообучить на ваших документах.</p>
    </div>
    <ol class="md-steps">
      <li><b>Подберу</b><span>Модель и размер под задачу и бюджет на железо</span></li>
      <li><b>Поставлю</b><span>На ваш сервер или в закрытый контур, с API</span></li>
      <li><b>Дообучу</b><span>На ваших данных или подключу базу знаний</span></li>
      <li><b>Встрою</b><span>В CRM, 1С, бота, сайт или рабочий чат</span></li>
    </ol>
    <a class="btn btn-accent md-offer-btn" href="${tg('Здравствуйте! Хочу поставить открытую ИИ-модель на свой сервер. Задача: ')}" target="_blank" rel="noopener"><i class="ph ph-telegram-logo" aria-hidden="true"></i>Обсудить внедрение</a>
  </section>
</div></section>`;
  const js = `<script>
(function(){
  var grid=document.getElementById('mdGrid'); if(!grid) return;
  var cards=[].slice.call(grid.querySelectorAll('.md-card'));
  var $=function(id){return document.getElementById(id);};
  var q=$('mdQ'), sort=$('md-sort'), ollama=$('mdOllama'), cpu=$('mdCpu'), reset=$('mdReset');
  var sels=[].slice.call(document.querySelectorAll('.md-selects select[data-f]')).filter(function(s){return s.dataset.f!=='sort';});
  var chips=[].slice.call(document.querySelectorAll('.md-chip')), mod='';
  var count=$('mdCount'), empty=$('mdEmpty');
  // Значение select → какое поле карточки проверять и как (список через пробел или точное совпадение).
  var FIELD={hw:['hw',1],com:['com',0],ru:['ru',0],ind:['ind',1],country:['country',1],dev:['dev',1]};
  function has(list,v){return (' '+list+' ').indexOf(' '+v+' ')>-1;}
  cards.forEach(function(c){ c.addEventListener('click',function(e){ if(e.target.closest('a,label,input')) return; location.href=c.querySelector('.md-name a').getAttribute('href'); }); });
  function apply(){
    // Грубый стемминг: «карточки» и «карточек» совпадают по основе «карточ».
    var t=q.value.trim().toLowerCase().replace(/ё/g,'е').split(/\\s+/).filter(Boolean)
      .map(function(w){ return w.length>5 ? w.slice(0,w.length-2) : w; }), n=0, active=!!(mod||t.length||(ollama&&ollama.checked)||(cpu&&cpu.checked));
    sels.forEach(function(s){ if(s.value) active=true; });
    cards.forEach(function(c){
      var ok=(!mod||has(c.dataset.mod,mod))&&t.every(function(w){return c.dataset.q.indexOf(w)>-1;})
        &&(!ollama||!ollama.checked||c.dataset.ollama==='1')&&(!cpu||!cpu.checked||c.dataset.cpu==='1');
      for(var i=0;ok&&i<sels.length;i++){
        var s=sels[i], v=s.value; if(!v) continue;
        if(s.dataset.f==='fresh'){ var y=c.dataset.latest.slice(0,4); ok=v==='old'?y<'2025':y===v; continue; }
        var f=FIELD[s.dataset.f]; ok=f[1]?has(c.dataset[f[0]],v):c.dataset[f[0]]===v;
      }
      c.hidden=!ok; if(ok) n++;
    });
    count.textContent='Показано '+n+' из '+cards.length; empty.hidden=n>0; reset.hidden=!active;
  }
  function order(){
    var s=sort.value;
    cards.sort(function(a,b){ return s==='az' ? a.dataset.name.localeCompare(b.dataset.name,'ru') : s==='old' ? a.dataset.first.localeCompare(b.dataset.first) : b.dataset.latest.localeCompare(a.dataset.latest); })
      .forEach(function(c){ grid.appendChild(c); });
  }
  function setChip(ch){
    chips.forEach(function(x){ x.classList.remove('is-on'); x.setAttribute('aria-pressed','false'); });
    ch.classList.add('is-on'); ch.setAttribute('aria-pressed','true'); mod=ch.dataset.mod;
  }
  chips.forEach(function(ch){ ch.addEventListener('click',function(){ setChip(ch); apply(); }); });
  q.addEventListener('input',apply); sels.forEach(function(s){ s.addEventListener('change',apply); });
  if(ollama) ollama.addEventListener('change',apply); if(cpu) cpu.addEventListener('change',apply);
  sort.addEventListener('change',order);
  reset.addEventListener('click',function(){
    q.value=''; sels.forEach(function(s){ s.value=''; }); if(ollama) ollama.checked=false; if(cpu) cpu.checked=false;
    setChip(chips[0]); apply(); q.focus();
  });

  // --- Сравнение: до трёх моделей ---
  var DATA=JSON.parse($('mdData').textContent), picked=[], MAX=3;
  var tray=$('mdTray'), list=$('mdTrayList'), dlg=$('mdDialog');
  var boxes=[].slice.call(grid.querySelectorAll('.md-cmp-box'));
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function syncCmp(){
    boxes.forEach(function(b){ b.checked=picked.indexOf(b.value)>-1; b.disabled=!b.checked&&picked.length>=MAX; b.closest('.md-card').classList.toggle('is-picked',b.checked); });
    tray.hidden=!picked.length;
    list.innerHTML='<span class="md-tray-label">Сравнение '+picked.length+' из '+MAX+':</span>'+picked.map(function(id){
      return '<span class="md-tray-item">'+esc(DATA[id].n)+'<button type="button" data-rm="'+id+'" aria-label="Убрать '+esc(DATA[id].n)+'"><i class="ph ph-x" aria-hidden="true"></i></button></span>';
    }).join('');
    $('mdCmpOpen').disabled=picked.length<2;
    $('mdCmpOpen').title=picked.length<2?'Выберите хотя бы две модели':'';
  }
  boxes.forEach(function(b){ b.addEventListener('change',function(){
    var i=picked.indexOf(b.value); if(b.checked&&i<0&&picked.length<MAX) picked.push(b.value); if(!b.checked&&i>-1) picked.splice(i,1); syncCmp();
  }); });
  list.addEventListener('click',function(e){ var r=e.target.closest('[data-rm]'); if(!r) return; picked.splice(picked.indexOf(r.dataset.rm),1); syncCmp(); });
  $('mdCmpClear').addEventListener('click',function(){ picked=[]; syncCmp(); });
  var ROWS=[['mo','Направление'],['d','Разработчик'],['y','Выпуски'],['s','Размеры'],['h','Железо'],['l','Коммерция'],['lt','Лицензия'],['r','Русский язык'],['o','Ollama'],['c','Без видеокарты'],['t','Задачи']];
  $('mdCmpOpen').addEventListener('click',function(){
    var m=picked.map(function(id){return DATA[id];});
    var h='<div class="md-cmp-scroll"><table class="md-cmp-table"><thead><tr><th scope="col"><span class="md-sr">Параметр</span></th>'+picked.map(function(id){return '<th scope="col"><a href="/ii-modeli/'+id+'/">'+esc(DATA[id].n)+'</a></th>';}).join('')+'</tr></thead><tbody>';
    ROWS.forEach(function(r){
      if(m.every(function(x){return !x[r[0]]||(Array.isArray(x[r[0]])&&!x[r[0]].length);})) return;
      h+='<tr><th scope="row">'+r[1]+'</th>'+m.map(function(x){
        var v=x[r[0]]; if(r[0]==='l') return '<td><span class="md-lic md-lic-'+x.lc+'">'+esc(v)+'</span></td>';
        if(Array.isArray(v)) return '<td><ul>'+v.map(function(t){return '<li>'+esc(t)+'</li>';}).join('')+'</ul></td>';
        return '<td>'+(v?esc(v):'—')+'</td>';
      }).join('')+'</tr>';
    });
    $('mdDialogBody').innerHTML=h+'</tbody></table></div>';
    $('mdDialogTg').href='https://t.me/chimitdorzhi?text='+encodeURIComponent('Здравствуйте! Выбираю между моделями: '+m.map(function(x){return x.n;}).join(', ')+'. Задача: ');
    if(dlg.showModal) dlg.showModal(); else dlg.setAttribute('open','');
  });
  $('mdDialogX').addEventListener('click',function(){ dlg.close(); });
  dlg.addEventListener('click',function(e){ if(e.target===dlg) dlg.close(); });
  syncCmp();
})();
</script>`;
  const ld = [
    { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Энциклопедия открытых ИИ-моделей', url: `${SITE}/ii-modeli/`, inLanguage: 'ru', dateModified: '2026-09-22',
      mainEntity: { '@type': 'ItemList', itemListElement: sorted.map((m, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/ii-modeli/${m.id}/`, name: m.name })) } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'ИИ-модели', item: `${SITE}/ii-modeli/` }] },
  ];
  return page({
    title: 'Открытые ИИ-модели 2022–2026: энциклопедия — задачи, железо, лицензии',
    description: 'Каталог открытых ИИ-моделей: текст, код, картинки, видео, речь, 3D. По каждой — задачи, где применяется, требования к железу и лицензия. Установка на ваш сервер.',
    url: `${SITE}/ii-modeli/`, ld, main, extraJs: js,
  });
}

// --- Страница модели ---
function detail(m) {
  const byId = Object.fromEntries(MODELS.map((x) => [x.id, x]));
  const alts = (m.alternatives || []).map((id) => byId[id]).filter(Boolean);
  const cta = tg(`Здравствуйте! Хочу поставить ${m.name} на свой сервер. Задача: `);
  const main = `<section class="section md-page md-detail"><div class="container">
  <nav class="breadcrumbs" aria-label="Хлебные крошки"><a href="/">Главная</a><span class="breadcrumbs-sep">›</span><a href="/ii-modeli/">ИИ-модели</a><span class="breadcrumbs-sep">›</span><span aria-current="page">${esc(m.name)}</span></nav>
  <header class="md-d-hero">
    <div class="md-d-mods">${m.modality.map(modChip).join('')}</div>
    <h1 class="md-d-title">${esc(m.name)}</h1>
    <p class="md-d-lead">${esc(m.summary)}</p>
    <dl class="md-d-facts">
      <div><dt>Разработчик</dt><dd>${esc(m.developer)}, ${esc(m.country)}</dd></div>
      <div><dt>Первый выпуск</dt><dd>${fmtMonth(m.first)}</dd></div>
      <div><dt>Последний выпуск</dt><dd>${fmtMonth(m.latest)}</dd></div>
      <div><dt>Размеры</dt><dd>${esc(m.sizes)}</dd></div>
      <div><dt>Лицензия</dt><dd>${lic(m.commercial)}<small>${esc(m.license)}</small></dd></div>
      ${m.ru && m.ru !== 'na' ? `<div><dt>Русский язык</dt><dd>${RU[m.ru]}</dd></div>` : ''}
      ${m.ollama !== undefined || m.cpu !== undefined ? `<div><dt>Запуск</dt><dd>${m.ollama ? 'Есть в Ollama' : 'Через свой сервер'}<small>${m.cpu ? 'Работает и без видеокарты' : 'Нужна видеокарта'}</small></dd></div>` : ''}
      ${(m.industries || []).length ? `<div><dt>Сферы</dt><dd><small>${m.industries.map((k) => INDUSTRY[k]).filter(Boolean).join(', ')}</small></dd></div>` : ''}
    </dl>
    <div class="md-d-actions">
      <a class="btn btn-accent" href="${cta}" target="_blank" rel="noopener"><i class="ph ph-telegram-logo" aria-hidden="true"></i>Поставить на свой сервер</a>
      ${m.hf ? `<a class="btn btn-ghost" href="${m.hf}" target="_blank" rel="noopener nofollow">Hugging Face<i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>` : ''}
      ${m.github ? `<a class="btn btn-ghost" href="${m.github}" target="_blank" rel="noopener nofollow"><i class="ph ph-git-branch" aria-hidden="true"></i>GitHub</a>` : ''}
    </div>
  </header>
  <div class="md-d-body">
    <div class="md-d-main">
      <section><h2>Какие задачи решает</h2><ul class="md-check">${m.tasks.map((t) => `<li><i class="ph ph-check-circle" aria-hidden="true"></i>${esc(t)}</li>`).join('')}</ul></section>
      <section><h2>Где применяется</h2><div class="md-where">${m.where.map((w) => `<span>${esc(w)}</span>`).join('')}</div></section>
      <section><h2>Требования к железу</h2><div class="md-hw">${Object.keys(HW).map((k) => `<div class="md-hw-row${m.hardware.includes(k) ? ' is-on' : ''}"><i class="ph ph-${HW[k].icon}" aria-hidden="true"></i><div><b>${HW[k].short}</b><span>${HW[k].long}</span></div><em>${m.hardware.includes(k) ? 'подходит' : 'нет версий'}</em></div>`).join('')}</div></section>
      <section><h2>Версии</h2><ol class="md-timeline">${[...m.versions].reverse().map(([n, d]) => `<li><time>${fmtMonth(d)}</time><span>${esc(n)}</span></li>`).join('')}</ol></section>
      <section><h2>Как внедряю у заказчика</h2><ol class="md-steps md-steps-v">
        <li><b>Подбор</b><span>Выбираю размер модели под задачу и ваше железо, проверяю на ваших примерах.</span></li>
        <li><b>Установка</b><span>Разворачиваю на вашем сервере или в закрытом контуре, отдаю API.</span></li>
        <li><b>Дообучение</b><span>Дообучаю на ваших данных (LoRA) или подключаю базу знаний — что дешевле для задачи.</span></li>
        <li><b>Встраивание</b><span>Подключаю к CRM, 1С, боту, сайту или рабочему чату, настраиваю мониторинг.</span></li>
      </ol></section>
      ${alts.length ? `<section><h2>Похожие модели</h2><div class="md-alts">${alts.map((a) => `<a href="/ii-modeli/${a.id}/">${modChip(a.modality[0])}<b>${esc(a.name)}</b><span class="md-alt-dev">${esc(a.developer)} · ${esc(a.country)}</span>${lic(a.commercial)}<p>${esc(a.summary)}</p><span class="md-alt-foot"><span class="md-more">Подробнее<i class="ph ph-arrow-right" aria-hidden="true"></i></span></span></a>`).join('')}</div></section>` : ''}
    </div>
    <aside class="md-d-side">
      <div class="md-side-card">
        <div class="md-side-title">Внедрение ${esc(m.name)} под ключ</div>
        <ul><li>Данные остаются у вас</li><li>Без оплаты за каждый запрос</li><li>Дообучение на ваших документах</li><li>Интеграция с вашими системами</li></ul>
        <a class="btn btn-accent" href="${cta}" target="_blank" rel="noopener"><i class="ph ph-telegram-logo" aria-hidden="true"></i>Обсудить задачу</a>
        <a class="md-side-back" href="/ii-modeli/"><i class="ph ph-arrow-left" aria-hidden="true"></i>Все модели</a>
      </div>
    </aside>
  </div>
</div></section>`;
  const url = `${SITE}/ii-modeli/${m.id}/`;
  const ld = [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: m.name, applicationCategory: 'AI model', description: m.summary, url,
      author: { '@type': 'Organization', name: m.developer }, license: m.license, datePublished: m.first, dateModified: m.latest, offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD' } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'ИИ-модели', item: `${SITE}/ii-modeli/` },
      { '@type': 'ListItem', position: 3, name: m.name, item: url }] },
  ];
  return page({
    title: `${m.name}: задачи, требования к железу и лицензия — открытая ИИ-модель`,
    description: `${m.name} от ${m.developer}: ${m.summary}`.slice(0, 158),
    url, ld, main,
  });
}

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'index.html'), catalog());
for (const m of MODELS) {
  fs.mkdirSync(path.join(OUT, m.id), { recursive: true });
  fs.writeFileSync(path.join(OUT, m.id, 'index.html'), detail(m));
}
// sitemap.xml: убираем прежние /ii-modeli/ и дописываем актуальные.
// build-services перезаписывает sitemap целиком, поэтому этот скрипт идёт после него.
const SM = path.join(ROOT, 'sitemap.xml');
if (fs.existsSync(SM)) {
  let sm = fs.readFileSync(SM, 'utf8').replace(/\s*<url>\s*<loc>https:\/\/chimitdorzhi\.tech\/ii-modeli\/[^<]*<\/loc>[\s\S]*?<\/url>/g, '');
  const urls = [`${SITE}/ii-modeli/`, ...MODELS.map((m) => `${SITE}/ii-modeli/${m.id}/`)];
  const block = urls.map((u) => `  <url>\n    <loc>${u}</loc>\n    <lastmod>2026-09-22</lastmod>\n  </url>`).join('\n');
  sm = sm.replace('</urlset>', block + '\n</urlset>');
  fs.writeFileSync(SM, sm);
}
console.log(`  /ii-modeli/: каталог + ${MODELS.length} страниц моделей`);
