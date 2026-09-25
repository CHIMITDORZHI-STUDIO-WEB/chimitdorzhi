// Генератор страницы /ceny/ — «Что я делаю и сколько это стоит».
// Данные: tools/prices-data.js. Стили: assets/models.css (фильтры, чипы) + assets/prices.css.
// build-services перезаписывает sitemap целиком, поэтому этот скрипт идёт после него.
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://chimitdorzhi.tech';
const REL = '/ceny/';
const URL_ = SITE + REL;
const UPDATED = '25.09.2026';
const LASTMOD = '2026-09-25';
const MODELS_CSS_V = (fs.readFileSync(path.join(__dirname, 'build-models.js'), 'utf8').match(/const CSS_V = (\d+);/) || [])[1] || '1';
const CSS_V = 1;

const ROWS = require('./prices-data.js');

// Группы навигации: порядок = порядок на странице.
const GROUPS = [
  { key: 'ai', label: 'Искусственный интеллект', short: 'ИИ', icon: 'brain' },
  { key: 'employee', label: 'Цифровой сотрудник', short: 'Цифровой сотрудник', icon: 'user-focus' },
  { key: 'c1', label: '1С и учёт', short: '1С и учёт', icon: 'receipt' },
  { key: 'web', label: 'Сайты и приложения', short: 'Сайты и приложения', icon: 'browser' },
  { key: 'bots', label: 'Боты и мессенджеры', short: 'Боты', icon: 'chat-circle-dots' },
  { key: 'ind', label: 'Решения для отраслей', short: 'Отрасли', icon: 'storefront' },
  { key: 'mkt', label: 'Маркетинг и продвижение', short: 'Маркетинг', icon: 'megaphone' },
  { key: 'sec', label: 'Безопасность и поддержка', short: 'Безопасность', icon: 'shield-check' },
];

// Типовые ситуации: готовый набор позиций, который одной кнопкой попадает в смету.
const SCENARIOS = [
  { title: 'Продаю на маркетплейсах', note: 'Связать 1С с площадками, маркировка, карточки и ведение кабинетов',
    ids: ['1s-i-marketpleysy', 'markirovka-chestnyy-znak', 'kontent-dlya-marketpleysov-i-reklamy', 'menedzher-marketpleysov'] },
  { title: 'Работаю по записи', note: 'Салон, клиника, гостиница: запись с предоплатой, бот, отзывы на картах',
    ids: ['onlayn-zapis-i-bronirovanie', 'bot-v-messendzhere', 'otzyvy-i-kartochki-na-kartah', 'audit-sayta-po-152-fz'] },
  { title: 'Оптовая торговля с 1С', note: 'Кабинет оптовика, заказы из мессенджера, ЭДО и отчёты владельцу',
    ids: ['b2b-kabinet-s-1s', 'bot-zakazov-s-1s', 'edo-i-elektronnaya-podpis', 'otchety-dlya-sobstvennika'] },
  { title: 'Производство и склад', note: 'Описать процессы, CRM под них, учёт въезда и видеоаналитика',
    ids: ['opisanie-processov-i-reglamenty', 'crm-pod-process', 'vezd-po-nomeram', 'videoanalitika-na-gotovyh-modelyah'] },
  { title: 'Хочу ИИ, не знаю, с чего начать', note: 'Аудит, пилот ассистента за три дня и консультант по базе знаний',
    ids: ['audit-i-plan-vnedreniya-ii', 'pilot-za-3-dnya', 'ii-konsultant', 'rabota-assistenta'] },
];

// --- Проверка данных ---
const byId = Object.fromEntries(ROWS.map((r) => [r.id, r]));
for (const s of SCENARIOS) for (const id of s.ids) if (!byId[id]) throw new Error(`Сценарий «${s.title}»: нет позиции ${id}`);
for (const r of ROWS) if (!GROUPS.some((g) => g.key === r.group)) throw new Error(`Позиция ${r.id}: неизвестная группа ${r.group}`);

// --- Утилиты ---
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const rub = (n) => n.toLocaleString('ru-RU').replace(/\u202f|\u00a0/g, '\u00a0') + '\u00a0₽';
const tg = (text) => 'https://t.me/chimitdorzhi?text=' + encodeURIComponent(text);
const priced = (r) => r.price.kind === 'price';

function priceHtml(r) {
  const p = r.price;
  if (p.kind === 'project') return { main: 'По проекту', sub: 'после вводных' };
  if (p.kind !== 'price') return { main: '', sub: '' };
  const tail = p.unit === 'month' ? '/мес' : p.unit === 'hour' ? '/час' : '';
  const sub = p.prefix ? p.prefix : p.unit === 'month' ? 'ежемесячно' : p.unit === 'hour' ? 'почасово' : 'разово';
  return { main: 'от\u00a0' + rub(p.value) + tail, sub };
}
// «Ежемесячно клиенту» из прайса: то, что клиент платит после запуска не нам.
function monthlyHtml(r) {
  const m = (r.monthly || '').trim();
  if (!m || /это и есть/.test(m)) return '';
  if (/^нет$/i.test(m)) return 'После запуска платить не нужно';
  return 'После запуска: ' + m;
}
function budgetKey(r) {
  const p = r.price;
  if (p.kind === 'project') return 'project';
  if (p.kind !== 'price') return '';
  return p.value < 50000 ? 'b1' : p.value < 150000 ? 'b2' : 'b3';
}
function termKey(r) {
  const d = r.term.days;
  if (d === -1) return 'ongoing';
  if (d === null || d === undefined) return '';
  return d <= 7 ? 't1' : d <= 31 ? 't2' : 't3';
}
// Индекс поиска: только буквы и цифры через пробел, чтобы искать по началу слова
// («бот» не должен находить «работу» и «обработку»).
const stemQ = (r) => ' ' + [r.name, r.what, r.section, r.monthly].join(' ').toLowerCase().replace(/ё/g, 'е').replace(/[^a-zа-я0-9]+/g, ' ').trim();

// --- Строка прайса ---
function row(r) {
  const pr = priceHtml(r);
  const mo = monthlyHtml(r);
  const canAdd = priced(r) || r.price.kind === 'project';
  return `<li class="pr-row" id="p-${r.id}" data-id="${r.id}" data-group="${r.group}" data-budget="${budgetKey(r)}" data-term="${termKey(r)}" data-unit="${r.price.unit || r.price.kind}" data-q="${esc(stemQ(r))}">
  <div class="pr-main">
    <h3 class="pr-name">${esc(r.name)}</h3>
    <p class="pr-what">${esc(r.what)}</p>
    ${mo ? `<p class="pr-monthly"><i class="ph ph-arrows-clockwise" aria-hidden="true"></i>${esc(mo)}</p>` : ''}
  </div>
  <div class="pr-price${r.price.kind === 'project' ? ' is-project' : ''}"><b>${pr.main}</b><span>${esc(pr.sub)}</span></div>
  <div class="pr-term">${r.term.label ? `<i class="ph ph-clock" aria-hidden="true"></i>${esc(r.term.label)}` : ''}</div>
  <div class="pr-act">${canAdd ? `<button type="button" class="pr-add" data-add="${r.id}" aria-pressed="false" aria-label="Добавить в смету: ${esc(r.name)}"><i class="ph ph-calculator" aria-hidden="true"></i><span>В смету</span></button>` : ''}</div>
</li>`;
}

// --- Пакет «Цифровой сотрудник»: роли без цен идут списком внутри карточки ---
function employeeCard(rows) {
  const priceRows = rows.filter(priced);
  const how = rows.find((r) => r.id === 'kak-rabotaet');
  const roles = rows.filter((r) => r.price.kind === 'included' && r.id !== 'kak-rabotaet');
  return `<div class="pr-package">
  <div class="pr-package-head">
    <p class="pr-package-lead">Один ассистент, который берёт на себя рутину нескольких сотрудников. Роли подключаются по мере роста, цена работы при этом не растёт.</p>
    ${how ? `<p class="pr-package-how">${esc(how.what)}</p>` : ''}
    <a class="pr-more" href="/services/cifrovoy-sotrudnik/">Подробнее о цифровом сотруднике<i class="ph ph-arrow-right" aria-hidden="true"></i></a>
  </div>
  <ul class="pr-rows pr-rows-inset">${priceRows.map(row).join('\n')}</ul>
  <h3 class="pr-roles-h">Что входит в работу ассистента</h3>
  <ul class="pr-roles">${roles.map((r) => `<li><b>${esc(r.name)}</b><span>${esc(r.what)}</span></li>`).join('')}</ul>
</div>`;
}

// --- Сценарии «Мне нужно…» ---
function scenarioCard(s, i) {
  const items = s.ids.map((id) => byId[id]);
  const once = items.filter((r) => priced(r) && r.price.unit === 'once').reduce((a, r) => a + r.price.value, 0);
  const month = items.filter((r) => priced(r) && r.price.unit === 'month').reduce((a, r) => a + r.price.value, 0);
  return `<article class="pr-scen-card">
  <h3>${esc(s.title)}</h3>
  <p>${esc(s.note)}</p>
  <ul>${items.map((r) => `<li>${esc(r.name)}</li>`).join('')}</ul>
  <div class="pr-scen-sum"><b>от\u00a0${rub(once)}</b>${month ? `<span>+ от\u00a0${rub(month)} в месяц</span>` : '<span>разово</span>'}</div>
  <button type="button" class="btn btn-ghost pr-scen-btn" data-scen="${i}"><i class="ph ph-calculator" aria-hidden="true"></i>Собрать смету</button>
</article>`;
}

// --- Страница ---
const count = (fn) => ROWS.filter(fn).length;
const chip = (key, label, icon, n, on) => `<button type="button" class="md-chip${on ? ' is-on' : ''}" data-group="${key}" aria-pressed="${on}"><i class="ph ph-${icon}" aria-hidden="true"></i>${esc(label)}<span>${n}</span></button>`;
const sel = (id, label, opts) => `<label class="md-select"><span>${label}</span><select id="${id}"><option value="">Любой</option>${opts.map(([v, t]) => `<option value="${v}">${esc(t)}</option>`).join('')}</select></label>`;

const directions = ROWS.filter((r) => r.price.kind !== 'included').length;
const main = `<section class="section md-page pr-page"><div class="container">
  <nav class="breadcrumbs" aria-label="Хлебные крошки"><a href="/">Главная</a><span class="breadcrumbs-sep">›</span><span aria-current="page">Цены</span></nav>
  <header class="md-hero pr-hero">
    <span class="section-label">ЦЕНЫ</span>
    <h1 class="section-heading">Что я делаю и <span class="text-gradient">сколько это стоит</span></h1>
    <p class="section-sub">Цены указаны от нижней границы: точная сумма после разговора о задаче и объёме. Под каждой позицией отдельно написано, что вы будете платить после запуска не мне, а за сервер, подписки и сервисы.</p>
    <div class="md-stats"><span><b>${directions}</b> направлений</span><span><b>${GROUPS.length}</b> групп</span><span>Обновлено ${UPDATED}</span></div>
  </header>

  <section class="pr-scen" aria-labelledby="prScenH">
    <h2 id="prScenH" class="pr-h2">Мне нужно…</h2>
    <div class="pr-scen-grid">${SCENARIOS.map(scenarioCard).join('\n')}</div>
  </section>

  <div class="md-tools pr-tools">
    <label class="md-search"><i class="ph ph-magnifying-glass" aria-hidden="true"></i><input id="prQ" type="search" placeholder="Бот, интеграция с 1С, распознавание документов…" autocomplete="off" aria-label="Поиск по ценам"></label>
    <div class="md-selects">
      ${sel('prBudget', 'Бюджет', [['b1', 'до 50 000 ₽'], ['b2', '50–150 тыс. ₽'], ['b3', '150–500 тыс. ₽'], ['project', 'по проекту']])}
      ${sel('prTerm', 'Срок', [['t1', 'до недели'], ['t2', 'до месяца'], ['t3', 'дольше месяца'], ['ongoing', 'постоянная работа']])}
      ${sel('prUnit', 'Оплата', [['once', 'разово'], ['month', 'ежемесячно'], ['hour', 'почасово']])}
    </div>
    <div class="md-toggles">
      <label class="md-toggle"><input type="checkbox" id="prMonthly" checked><span>Показывать, что платите после запуска</span></label>
      <button type="button" class="md-reset" id="prReset" hidden><i class="ph ph-x" aria-hidden="true"></i>Сбросить фильтры</button>
    </div>
  </div>
  <div class="md-chips" role="group" aria-label="Группы услуг">
    <div class="md-chip-all">${chip('', 'Все', 'stack', ROWS.length, true)}</div>
    ${GROUPS.map((g) => chip(g.key, g.short, g.icon, count((r) => r.group === g.key), false)).join('')}
  </div>
  <p class="md-count" id="prCount" aria-live="polite"></p>

  <div class="pr-list pr-show-monthly" id="prList">
    ${GROUPS.map((g) => {
      const rows = ROWS.filter((r) => r.group === g.key);
      return `<section class="pr-group" data-group="${g.key}" id="gr-${g.key}">
      <h2 class="pr-h2 pr-group-h"><i class="ph ph-${g.icon}" aria-hidden="true"></i>${esc(g.label)}</h2>
      ${g.key === 'employee' ? employeeCard(rows) : `<ul class="pr-rows">${rows.map(row).join('\n')}</ul>`}
    </section>`;
    }).join('\n')}
  </div>
  <p class="md-empty" id="prEmpty" hidden>Под такие условия ничего не нашлось. <a href="${tg('Здравствуйте! Ищу решение под задачу: ')}" target="_blank" rel="noopener">Напишите задачу</a>, подберу.</p>

  <section class="md-offer pr-cta">
    <div><h2>Не нашли свою задачу?</h2><p>Здесь самые частые. Если вашей нет, опишите её в Telegram: скажу, как решить, сколько займёт и во что обойдётся после запуска.</p></div>
    <a class="btn btn-accent md-offer-btn" href="${tg('Здравствуйте! Хочу обсудить задачу: ')}" target="_blank" rel="noopener"><i class="ph ph-telegram-logo" aria-hidden="true"></i>Описать задачу</a>
  </section>

  <div class="pr-tray" id="prTray" hidden role="region" aria-label="Смета">
    <div class="pr-tray-info" aria-live="polite">
      <b id="prTrayCount"></b>
      <span id="prTrayOnce"></span>
      <span id="prTrayMonth"></span>
      <span id="prTrayExtra"></span>
    </div>
    <div class="pr-tray-actions">
      <a class="btn btn-accent" id="prTraySend" href="#" target="_blank" rel="noopener"><i class="ph ph-telegram-logo" aria-hidden="true"></i>Отправить смету</a>
      <button type="button" class="pr-tray-clear" id="prTrayClear"><i class="ph ph-trash" aria-hidden="true"></i>Очистить</button>
    </div>
  </div>
</div></section>`;

// Данные для сметы на клиенте: только то, что нужно для подсчёта.
const calcData = Object.fromEntries(ROWS.filter((r) => priced(r) || r.price.kind === 'project').map((r) => [r.id, {
  n: r.name, k: r.price.kind, u: r.price.unit || '', v: r.price.value || 0, d: r.term.days, t: r.term.label,
}]));

const js = `<script type="application/json" id="prData">${JSON.stringify({ rows: calcData, scen: SCENARIOS.map((s) => s.ids) }).replace(/</g, '\\u003c')}</script>
<script>
(function(){
  var $=function(id){return document.getElementById(id);};
  var list=$('prList'); if(!list) return;
  var D=JSON.parse($('prData').textContent), rows=[].slice.call(list.querySelectorAll('.pr-row'));
  var groups=[].slice.call(list.querySelectorAll('.pr-group'));
  var chips=[].slice.call(document.querySelectorAll('.md-chips .md-chip')), group='';
  var q=$('prQ'), budget=$('prBudget'), term=$('prTerm'), unit=$('prUnit'), monthly=$('prMonthly'), reset=$('prReset');
  var fmt=function(n){return n.toLocaleString('ru-RU')+'\\u00a0\\u20bd';};
  function stems(v){return v.toLowerCase().replace(/ё/g,'е').replace(/[^a-zа-я0-9]+/g,' ').trim().split(/\\s+/).filter(Boolean).map(function(w){return w.length>5?w.slice(0,w.length-2):w;});}
  function apply(){
    var t=stems(q.value), n=0, active=!!(group||t.length||budget.value||term.value||unit.value);
    rows.forEach(function(r){
      var ok=(!group||r.dataset.group===group)&&(!budget.value||r.dataset.budget===budget.value)
        &&(!term.value||r.dataset.term===term.value)&&(!unit.value||r.dataset.unit===unit.value)
        &&t.every(function(w){return r.dataset.q.indexOf(' '+w)>-1;});
      r.hidden=!ok; if(ok) n++;
    });
    groups.forEach(function(g){
      var any=[].some.call(g.querySelectorAll('.pr-row'),function(r){return !r.hidden;});
      var inGroup=!group||g.dataset.group===group;
      // Роли цифрового сотрудника без цен: показываем карточку целиком, если группа выбрана или фильтров нет.
      var pkg=g.dataset.group==='employee'&&inGroup&&!(t.length||budget.value||term.value||unit.value);
      g.hidden=!(any||pkg);
    });
    $('prCount').textContent='Показано '+n+' из '+rows.length;
    $('prEmpty').hidden=n>0; reset.hidden=!active;
  }
  chips.forEach(function(c){ c.addEventListener('click',function(){
    chips.forEach(function(x){x.classList.remove('is-on');x.setAttribute('aria-pressed','false');});
    c.classList.add('is-on'); c.setAttribute('aria-pressed','true'); group=c.dataset.group||''; apply();
  }); });
  [q].forEach(function(e){e.addEventListener('input',apply);});
  [budget,term,unit].forEach(function(e){e.addEventListener('change',apply);});
  monthly.addEventListener('change',function(){ list.classList.toggle('pr-show-monthly',monthly.checked); });
  reset.addEventListener('click',function(){ q.value=''; budget.value=''; term.value=''; unit.value=''; chips[0].click(); q.focus(); });

  // --- Смета ---
  var picked=[];
  function sync(){
    [].forEach.call(document.querySelectorAll('.pr-add'),function(b){
      var on=picked.indexOf(b.dataset.add)>-1;
      b.setAttribute('aria-pressed',on?'true':'false'); b.classList.toggle('is-on',on);
      b.querySelector('span').textContent=on?'В смете':'В смету';
      b.querySelector('i').className='ph '+(on?'ph-check':'ph-calculator');
      var row=b.closest('.pr-row'); if(row) row.classList.toggle('is-picked',on);
    });
    var once=0, month=0, proj=0, hour=0, maxD=0, maxT='';
    picked.forEach(function(id){ var r=D.rows[id]; if(!r) return;
      if(r.k==='project') proj++; else if(r.u==='once') once+=r.v; else if(r.u==='month') month+=r.v; else if(r.u==='hour') hour++;
      if(r.d>maxD){ maxD=r.d; maxT=r.t; }
    });
    $('prTray').hidden=!picked.length;
    // Плавающая кнопка Telegram сайта перекрывает смету на телефоне, а в смете уже есть своя.
    document.body.classList.toggle('pr-tray-open',picked.length>0);
    var n=picked.length, w=(n%10===1&&n%100!==11)?'позиция':((n%10>=2&&n%10<=4&&(n%100<10||n%100>=20))?'позиции':'позиций');
    $('prTrayCount').textContent='В смете '+n+' '+w;
    $('prTrayOnce').textContent=once?'разово от '+fmt(once):'';
    $('prTrayMonth').textContent=month?'ежемесячно от '+fmt(month):'';
    var extra=[]; if(proj) extra.push('+ '+proj+' по проекту'); if(hour) extra.push('+ '+hour+' почасово'); if(maxT) extra.push('срок '+maxT);
    $('prTrayExtra').textContent=extra.join(' · ');
    var msg='Здравствуйте! Хочу обсудить смету:\\n'+picked.map(function(id){var r=D.rows[id];return '- '+r.n;}).join('\\n')
      +(once?'\\nРазово от '+fmt(once):'')+(month?'\\nЕжемесячно от '+fmt(month):'')+(proj?'\\nПо проекту: '+proj:'');
    $('prTraySend').href='https://t.me/chimitdorzhi?text='+encodeURIComponent(msg);
  }
  document.addEventListener('click',function(e){
    var b=e.target.closest('.pr-add'); if(!b) return;
    var id=b.dataset.add, i=picked.indexOf(id); if(i>-1) picked.splice(i,1); else picked.push(id); sync();
  });
  [].forEach.call(document.querySelectorAll('.pr-scen-btn'),function(b){ b.addEventListener('click',function(){
    D.scen[+b.dataset.scen].forEach(function(id){ if(picked.indexOf(id)<0) picked.push(id); }); sync();
    $('prTray').classList.add('is-flash'); setTimeout(function(){$('prTray').classList.remove('is-flash');},700);
  }); });
  $('prTrayClear').addEventListener('click',function(){ picked=[]; sync(); });
  apply(); sync();
})();
</script>`;

// --- Оболочка сайта (как у каталога моделей) ---
const shellSrc = fs.readFileSync(path.join(ROOT, 'predlozheniya', 'index.html'), 'utf8');
const headTpl = shellSrc.slice(0, shellSrc.indexOf('<script type="application/ld+json">'));
const bodyStart = shellSrc.slice(shellSrc.indexOf('</head>'), shellSrc.indexOf('<main id="main">'));
const footer = shellSrc.slice(shellSrc.indexOf('<footer'), shellSrc.indexOf('</footer>') + 9);
const scripts = (shellSrc.match(/<script src="\/i18n\.js[^"]*" defer><\/script>\s*<script src="\/script\.js[^"]*" defer><\/script>/) || [''])[0];

const TITLE = 'Цены на разработку и внедрение ИИ: сайты, боты, 1С, автоматизация';
const DESC = `${directions} направлений с ценами от: ИИ, 1С, сайты, боты, маркетинг. Сроки, расходы после запуска и смета в Telegram.`;

let head = headTpl
  .replace(/<title>[^<]*<\/title>/, `<title>${esc(TITLE)}</title>`)
  .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(DESC)}`)
  .replace(/(<link rel="canonical" href=")[^"]*/, `$1${URL_}`)
  .replace(/(<meta property="og:url" content=")[^"]*/, `$1${URL_}`)
  .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(TITLE)}`)
  .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(DESC)}`);
head += `<link rel="stylesheet" href="/assets/models.css?v=${MODELS_CSS_V}">\n<link rel="stylesheet" href="/assets/prices.css?v=${CSS_V}">\n`;

const ld = [
  { '@context': 'https://schema.org', '@type': 'OfferCatalog', name: 'Цены на разработку и внедрение ИИ', url: URL_,
    itemListElement: ROWS.filter(priced).map((r) => ({
      '@type': 'Offer', name: r.name, description: r.what,
      priceSpecification: { '@type': 'UnitPriceSpecification', minPrice: r.price.value, priceCurrency: 'RUB',
        ...(r.price.unit === 'month' ? { unitText: 'месяц' } : r.price.unit === 'hour' ? { unitText: 'час' } : {}) },
      seller: { '@type': 'Person', name: 'Чимитдоржи Дарижапов', url: SITE },
    })) },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: SITE + '/' },
    { '@type': 'ListItem', position: 2, name: 'Цены', item: URL_ } ] },
];
for (const obj of ld) head += `<script type="application/ld+json">${JSON.stringify(obj)}</script>\n`;

const html = head + bodyStart + `<main id="main">\n${main}\n</main>\n` + footer + '\n' + scripts + '\n' + js + '\n</body>\n</html>\n';
fs.mkdirSync(path.join(ROOT, 'ceny'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'ceny', 'index.html'), html);

// sitemap: убираем прежнюю запись /ceny/ и дописываем актуальную.
const SM = path.join(ROOT, 'sitemap.xml');
if (fs.existsSync(SM)) {
  let sm = fs.readFileSync(SM, 'utf8').replace(/\s*<url>\s*<loc>https:\/\/chimitdorzhi\.tech\/ceny\/<\/loc>[\s\S]*?<\/url>/g, '');
  sm = sm.replace('</urlset>', `  <url>\n    <loc>${URL_}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n  </url>\n</urlset>`);
  fs.writeFileSync(SM, sm);
}
console.log(`  /ceny/: ${ROWS.length} позиций, ${directions} направлений, ${SCENARIOS.length} сценариев, ${Math.round(html.length / 1024)} КБ`);
