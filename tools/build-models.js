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
  if (!Array.isArray(m.modality) || !m.modality.length || m.modality.some((x) => !['text','code','vlm','ocr','image','video','avatar','asr','tts','omni','audio','3d','vision','embed','timeseries','robotics'].includes(x))) bad.push('modality');
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
  h += '<link rel="stylesheet" href="/assets/models.css?v=4">\n';
  for (const obj of ld) h += `<script type="application/ld+json">${JSON.stringify(obj)}</script>\n`;
  return h;
}
function page({ title, description, url, ld, main, extraJs = '' }) {
  return head({ title, description, url, ld }) + bodyStart + `<main id="main">\n${main}\n</main>\n` + footer + '\n' + scripts + extraJs + '\n</body>\n</html>\n';
}

const modChip = (m) => `<span class="md-mod"><i class="ph ph-${MOD[m].icon}" aria-hidden="true"></i>${MOD[m].label}</span>`;
const lic = (c) => `<span class="md-lic md-lic-${COM[c].cls}">${COM[c].label}</span>`;
const hwMin = (arr) => HW[arr[0]].short;
const years = (m) => { const a = m.first.slice(0, 4), b = m.latest.slice(0, 4); return a === b ? a : `${a}–${b}`; };

// --- Карточка в каталоге ---
function card(m) {
  const q = [m.name, m.developer, m.country, ...m.modality.map((x) => MOD[x].label), ...m.tasks, ...m.where].join(' ').toLowerCase().replace(/ё/g, 'е');
  return `<article class="md-card" data-mod="${m.modality.join(' ')}" data-hw="${m.hardware.join(' ')}" data-com="${m.commercial}" data-latest="${m.latest}" data-name="${esc(m.name.toLowerCase())}" data-q="${esc(q)}">
  <div class="md-card-top">${modChip(m.modality[0])}<span class="md-year">${years(m)}</span></div>
  <h2 class="md-name"><a href="/ii-modeli/${m.id}/">${esc(m.name)}</a></h2>
  <div class="md-dev">${esc(m.developer)} · ${esc(m.country)}</div>
  <p class="md-sum">${esc(m.summary)}</p>
  <ul class="md-tasks">${m.tasks.slice(0, 3).map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
  <dl class="md-specs">
    <div><dt>Размеры</dt><dd>${esc(m.sizes)}</dd></div>
    <div><dt>Железо</dt><dd>от: ${hwMin(m.hardware)}</dd></div>
  </dl>
  <div class="md-card-foot">${lic(m.commercial)}<span class="md-more">Подробнее<i class="ph ph-arrow-right" aria-hidden="true"></i></span></div>
</article>`;
}

// --- Каталог ---
function catalog() {
  const counts = {};
  for (const m of MODELS) for (const x of m.modality) counts[x] = (counts[x] || 0) + 1;
  const chips = Object.keys(MOD).filter((k) => counts[k]).map((k) =>
    `<button type="button" class="md-chip" data-mod="${k}" aria-pressed="false"><i class="ph ph-${MOD[k].icon}" aria-hidden="true"></i>${MOD[k].label}<span>${counts[k]}</span></button>`).join('');
  const sorted = [...MODELS].sort((a, b) => b.latest.localeCompare(a.latest));
  const fresh = sorted.slice(0, 5);
  const main = `<section class="section md-page"><div class="container">
  <nav class="breadcrumbs" aria-label="Хлебные крошки"><a href="/">Главная</a><span class="breadcrumbs-sep">›</span><span aria-current="page">ИИ-модели</span></nav>
  <header class="md-hero">
    <span class="section-label">ЭНЦИКЛОПЕДИЯ</span>
    <h1 class="section-heading">Открытые <span class="text-gradient">ИИ-модели</span></h1>
    <p class="section-sub">Модели с открытыми весами с 2022 года: текст, код, картинки, видео, речь, 3D. По каждой коротко: какие задачи решает, где применяется, какое нужно железо и можно ли в коммерцию. Любую из них поставлю на ваш сервер и дообучу под вашу задачу.</p>
    <div class="md-stats"><span><b>${MODELS.length}</b> семейств</span><span><b>${Object.keys(counts).length}</b> направлений</span><span>Обновлено ${UPDATED}</span></div>
  </header>
  <div class="md-fresh" aria-label="Последние релизы">
    <div class="md-fresh-title"><i class="ph ph-sparkle" aria-hidden="true"></i>Свежие релизы</div>
    <ol class="md-fresh-list">${fresh.map((m) => `<li><a href="/ii-modeli/${m.id}/"><span class="md-fresh-date">${fmtMonth(m.latest)}</span><span class="md-fresh-name">${esc(m.versions[m.versions.length - 1][0])}</span><span class="md-fresh-dev">${esc(m.developer)}</span></a></li>`).join('')}</ol>
  </div>
  <div class="md-tools">
    <label class="md-search"><i class="ph ph-magnifying-glass" aria-hidden="true"></i><input id="mdQ" type="search" placeholder="Модель, разработчик или задача: «расшифровка звонков»" autocomplete="off" aria-label="Поиск по моделям"></label>
    <label class="md-select"><span>Железо</span><select id="mdHw"><option value="">Любое</option><option value="min">Хватит ноутбука</option><option value="gpu">Одна видеокарта</option><option value="multi">Кластер</option></select></label>
    <label class="md-select"><span>Лицензия</span><select id="mdCom"><option value="">Любая</option><option value="yes">Можно в коммерцию</option></select></label>
    <label class="md-select"><span>Порядок</span><select id="mdSort"><option value="new">Сначала новые</option><option value="az">По алфавиту</option></select></label>
  </div>
  <div class="md-chips" role="group" aria-label="Направление"><button type="button" class="md-chip is-on" data-mod="" aria-pressed="true"><i class="ph ph-squares-four" aria-hidden="true"></i>Все<span>${MODELS.length}</span></button>${chips}</div>
  <p class="md-count" id="mdCount" aria-live="polite">Показано ${MODELS.length} из ${MODELS.length}</p>
  <div class="md-grid" id="mdGrid">${sorted.map(card).join('\n')}</div>
  <p class="md-empty" id="mdEmpty" hidden>Под эти условия моделей нет. Сбросьте фильтр или <a href="${tg('Здравствуйте! Ищу открытую модель под задачу: ')}" target="_blank" rel="noopener">опишите задачу</a> — подберу сам.</p>
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
  var q=document.getElementById('mdQ'), hw=document.getElementById('mdHw'), com=document.getElementById('mdCom'), sort=document.getElementById('mdSort');
  var chips=[].slice.call(document.querySelectorAll('.md-chip')), mod='';
  var count=document.getElementById('mdCount'), empty=document.getElementById('mdEmpty');
  cards.forEach(function(c){ c.addEventListener('click',function(e){ if(e.target.closest('a')) return; location.href=c.querySelector('.md-name a').getAttribute('href'); }); });
  function apply(){
    // Грубый стемминг: «карточки» и «карточек» совпадают по основе «карточ».
    var t=q.value.trim().toLowerCase().replace(/ё/g,'е').split(/\\s+/).filter(Boolean)
      .map(function(w){ return w.length>5 ? w.slice(0,w.length-2) : w; }), n=0;
    cards.forEach(function(c){
      var ok=(!mod||(' '+c.dataset.mod+' ').indexOf(' '+mod+' ')>-1)
        &&(!hw.value||(' '+c.dataset.hw+' ').indexOf(' '+hw.value+' ')>-1)
        &&(!com.value||c.dataset.com===com.value)
        &&t.every(function(w){return c.dataset.q.indexOf(w)>-1;});
      c.hidden=!ok; if(ok) n++;
    });
    count.textContent='Показано '+n+' из '+cards.length; empty.hidden=n>0;
  }
  function order(){
    var s=sort.value;
    cards.sort(function(a,b){ return s==='az' ? a.dataset.name.localeCompare(b.dataset.name,'ru') : b.dataset.latest.localeCompare(a.dataset.latest); })
      .forEach(function(c){ grid.appendChild(c); });
  }
  chips.forEach(function(ch){ ch.addEventListener('click',function(){
    chips.forEach(function(x){ x.classList.remove('is-on'); x.setAttribute('aria-pressed','false'); });
    ch.classList.add('is-on'); ch.setAttribute('aria-pressed','true'); mod=ch.dataset.mod; apply();
  }); });
  q.addEventListener('input',apply); hw.addEventListener('change',apply); com.addEventListener('change',apply);
  sort.addEventListener('change',order);
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
