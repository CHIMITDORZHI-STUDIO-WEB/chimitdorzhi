// Генератор раздела «Инфографика» (пилот, 5 MAX-предложений).
// Стиль обложек — «Колор-блок» (насыщенный фон + яркий акцент), 1000x1500 PNG.
// На выходе: /infografika/<slug>.png, /infografika/index.html (хаб),
// /infografika/<slug>/index.html (картинка + описание + перелинковка), патч sitemap.
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { clampTitle, clampDesc } = require('./meta-clamp.js');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://chimitdorzhi.tech';
const TG = 'https://t.me/chimitdorzhi';
const OUT = path.join(ROOT, 'infografika');
const FONT = "'Manrope', 'Inter', 'DejaVu Sans', 'Liberation Sans', Arial, sans-serif";

const OFFERS = require('./offers-data.js');
const OFFER_BY = {}; for (const o of OFFERS) OFFER_BY[o.slug] = o;
const BLOG = require('./blog-data.js');
const BLOG_BY = {}; for (const a of BLOG) BLOG_BY[a.slug] = a;

const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const escXml = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

function wrapTitle(title, maxChars) {
  const words = String(title || '').split(/\s+/); const lines = []; let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > maxChars && cur) { lines.push(cur.trim()); cur = w; }
    else cur = (cur + ' ' + w).trim();
  }
  if (cur) lines.push(cur.trim());
  return lines;
}

// ---------- данные пилота ----------
const ITEMS = [
  {
    slug: 'geymifikaciya-kanala-max', bg: '#4f46e5', accent: '#d6fb5a',
    pill: 'MAX · TELEGRAM · VK', hero: 'Конкурс приглашений', tagline: 'Платите за реальных людей, а не за показы',
    points: ['Персональные реф-ссылки', 'Живой рейтинг в реальном времени', 'Защита от накруток', 'Призы и рост аудитории'],
    description: 'Рост подписчиков и клиентов силами самой аудитории. У каждого участника своя реферальная ссылка, бот считает реальные приглашения, ведёт живой рейтинг и раздаёт призы топу. Вы платите за реальных людей, а не за рекламные показы. MAX-first, та же механика работает в Telegram и VK. Данные участников — на российском стеке, по 152-ФЗ.',
    relatedArticles: ['konkurs-priglasheniy-max-virusnyy-rost-2027', 'geymifikaciya-saas-2026', 'telegram-chat-vk-soobshchestvo-2026'],
    relatedOffers: ['referalnaya-programma', 'konstruktor-konkursov', 'chestnye-rozygryshi'],
  },
  {
    slug: 'referalnaya-programma', bg: '#0d9488', accent: '#fde047',
    pill: 'MAX · TELEGRAM · VK', hero: 'Приведи друга', tagline: 'Сарафан, который работает на автомате',
    points: ['Бонус за каждого приведённого', 'Двусторонняя награда', 'Учёт и защита от фрода', 'Прозрачная статистика'],
    description: 'Постоянный сарафан вместо разовой акции. За каждого приведённого клиента человек получает бонус, а двусторонняя награда (бонус и тому, кто пригласил, и новичку) поднимает конверсию. Встроенная защита от накруток и прозрачная статистика показывают реальную отдачу. Работает в MAX, Telegram и VK, интегрируется с сайтом и CRM.',
    relatedArticles: ['partnerskiy-marketing-affiliate-2026', 'konkurs-priglasheniy-max-virusnyy-rost-2027', 'sistemy-loyalnosti-2027'],
    relatedOffers: ['geymifikaciya-kanala-max', 'dvustoronniy-bonus-drug', 'referalnye-urovni-statusy'],
  },
  {
    slug: 'chestnye-rozygryshi', bg: '#db2777', accent: '#fef08a',
    pill: 'MAX · TELEGRAM · VK', hero: 'Честный розыгрыш', tagline: 'Честный розыгрыш повышает доверие к бренду',
    points: ['Прозрачный выбор победителя', 'Проверка условий подписки', 'Защита от мультиаккаунтов', 'Публичный протокол'],
    description: 'Розыгрыши, которым доверяют. Бот проверяет условия (подписка, репост, отметка друга), честно выбирает победителя с фиксацией результата и публичным протоколом, отсекает мультиаккаунты и накрутки. Прозрачность здесь — часть маркетинга: честный розыгрыш сам по себе повышает доверие к бренду. MAX, Telegram и VK, российский стек, 152-ФЗ.',
    relatedArticles: ['konkurs-priglasheniy-max-virusnyy-rost-2027', 'geymifikaciya-saas-2026', 'marketing-i-trafik-2027'],
    relatedOffers: ['koleso-fortuny-promo', 'sovmestnyy-rozygrysh-brendov', 'konstruktor-konkursov'],
  },
  {
    slug: 'programma-loyalnosti', bg: '#7c3aed', accent: '#5eead4',
    pill: 'MAX · TELEGRAM · VK', hero: 'Баллы и кэшбэк', tagline: 'Вернуть клиента дешевле, чем привлечь нового',
    points: ['Баллы за покупки', 'Кэшбэк прямо в боте', 'Уровни и статусы', 'Возврат за повторными покупками'],
    description: 'Удержание клиентов и регулярные повторные продажи. Баллы за покупки и кэшбэк начисляются прямо в боте, уровни и статусы мотивируют возвращаться, а сегменты помогают делать персональные предложения. Привлечь нового клиента дороже, чем вернуть существующего — программа лояльности работает на эту экономику. MAX, Telegram и VK, данные по 152-ФЗ.',
    relatedArticles: ['sistemy-loyalnosti-2027', 'konkurs-priglasheniy-max-virusnyy-rost-2027', 'crm-dlya-malogo-biznesa-2026'],
    relatedOffers: ['klub-po-podpiske', 'reaktivaciya-spyashchih', 'promokody-kupony-treking'],
  },
  {
    slug: 'max-mini-app-magazin', bg: '#1e4fd6', accent: '#d6fb5a',
    pill: 'MAX · TELEGRAM · VK', hero: 'Магазин в MAX', tagline: 'Магазин там, где уже ваша аудитория',
    points: ['Каталог и корзина', 'Оплата по СБП', 'Без установки приложения', 'Витрина рядом с аудиторией'],
    description: 'Витрина магазина прямо внутри мессенджера: каталог, корзина и оформление заказа без перехода на сторонний сайт и без установки приложения. Приём оплаты по СБП, витрина живёт там, где уже находится ваша аудитория. Также Telegram Mini App и VK Mini App. Российский стек, данные и оплата — по 152-ФЗ и 54-ФЗ.',
    relatedArticles: ['max-mini-apps-2026', 'magazin-bot-max-2026', 'vk-mini-app-dlya-biznesa-2026'],
    relatedOffers: ['promokody-kupony-treking', 'analitika-soobshchestva', 'geymifikaciya-kanala-max'],
  },
  {
    slug: 'konstruktor-konkursov',
    pill: 'MAX · TELEGRAM · VK', hero: 'Конструктор конкурсов', tagline: 'Своя платформа вместо разовых ботов',
    points: ['Запуск из админки', 'Условия и призы', 'Проверка участников', 'Честный выбор победителей'],
    description: 'Своя платформа для конкурсов и розыгрышей: запускайте акции из админки без программиста — задавайте условия, призы и проверку участников, честно выбирайте победителей. Вместо заказа разового бота каждый раз вы получаете инструмент, который работает постоянно. MAX, Telegram и VK, российский стек, 152-ФЗ.',
    relatedArticles: ['konkurs-priglasheniy-max-virusnyy-rost-2027', 'geymifikaciya-saas-2026', 'marketing-i-trafik-2027'],
    relatedOffers: ['geymifikaciya-kanala-max', 'chestnye-rozygryshi', 'sovmestnyy-rozygrysh-brendov'],
  },
  {
    slug: 'koleso-fortuny-promo',
    pill: 'MAX · TELEGRAM · VK', hero: 'Колесо фортуны', tagline: 'Простая механика, которая всегда вовлекает',
    points: ['Мгновенный приз за действие', 'Гибкие шансы', 'Защита от злоупотреблений', 'Аналитика участий'],
    description: 'Колесо фортуны и промо-механики: мгновенный приз за целевое действие, гибкая настройка шансов и защита от злоупотреблений. Простой и азартный способ вовлечь аудиторию и собрать контакты. MAX, Telegram и VK, данные по 152-ФЗ.',
    relatedArticles: ['geymifikaciya-saas-2026', 'sistemy-loyalnosti-2027', 'marketing-i-trafik-2027'],
    relatedOffers: ['chestnye-rozygryshi', 'programma-loyalnosti', 'konstruktor-konkursov'],
  },
  {
    slug: 'advent-kalendar-nagrady',
    pill: 'MAX · TELEGRAM · VK', hero: 'Адвент-календарь', tagline: 'Аудитория возвращается каждый день',
    points: ['Награда каждый день', 'Прогрев к распродаже', 'Финальный розыгрыш', 'Аналитика вовлечения'],
    description: 'Бот-адвент-календарь: аудитория заходит каждый день за наградой, акция прогревает к распродаже или празднику и завершается розыгрышем. Простой способ удержать внимание на период кампании. MAX, Telegram и VK, российский стек.',
    relatedArticles: ['sistemy-loyalnosti-2027', 'konkurs-priglasheniy-max-virusnyy-rost-2027', 'marketing-i-trafik-2027'],
    relatedOffers: ['daily-checkin-striki', 'programma-loyalnosti', 'bot-chellendzh-marafon'],
  },
  {
    slug: 'bot-chellendzh-marafon',
    pill: 'MAX · TELEGRAM · VK', hero: 'Челлендж-марафон', tagline: 'Держит аудиторию неделями',
    points: ['Серия заданий', 'Баллы и прогресс', 'Рейтинг участников', 'Финальный приз'],
    description: 'Челлендж-марафон в боте: серия заданий с баллами, прогрессом и рейтингом, в финале — приз. Вовлекает аудиторию на недели и хорошо прогревает к запуску продукта. MAX, Telegram и VK, 152-ФЗ.',
    relatedArticles: ['geymifikaciya-saas-2026', 'konkurs-priglasheniy-max-virusnyy-rost-2027', 'marketing-i-trafik-2027'],
    relatedOffers: ['daily-checkin-striki', 'beydzhi-dostizheniya', 'advent-kalendar-nagrady'],
  },
  {
    slug: 'daily-checkin-striki',
    pill: 'MAX · TELEGRAM · VK', hero: 'Чек-ин и стрики', tagline: 'Привычка возвращаться без рекламы',
    points: ['Отметка каждый день', 'Бонус за серию', 'Напоминания', 'Магазин наград'],
    description: 'Ежедневные чек-ины и стрики: участники отмечаются каждый день и копят серию, бонус за стрик возвращает их снова. Простая механика удержания без рекламных затрат. MAX, Telegram и VK, российский стек.',
    relatedArticles: ['sistemy-loyalnosti-2027', 'geymifikaciya-saas-2026', 'telegram-chat-vk-soobshchestvo-2026'],
    relatedOffers: ['programma-loyalnosti', 'advent-kalendar-nagrady', 'beydzhi-dostizheniya'],
  },
  {
    slug: 'dvustoronniy-bonus-drug',
    pill: 'MAX · TELEGRAM · VK', hero: 'Двусторонний бонус', tagline: 'Приглашать выгодно обоим',
    points: ['Награда обоим', 'Выше конверсия', 'Персональные ссылки', 'Защита от накруток'],
    description: 'Двусторонняя реферальная механика: награду получают и тот, кто пригласил, и новичок — приглашать становится выгодно обоим, и конверсия выше обычной рефералки. Персональные ссылки и защита от накруток включены. MAX, Telegram и VK, 152-ФЗ.',
    relatedArticles: ['partnerskiy-marketing-affiliate-2026', 'konkurs-priglasheniy-max-virusnyy-rost-2027', 'sistemy-loyalnosti-2027'],
    relatedOffers: ['referalnaya-programma', 'referalnye-urovni-statusy', 'geymifikaciya-kanala-max'],
  },
  {
    slug: 'referalnye-urovni-statusy',
    pill: 'MAX · TELEGRAM · VK', hero: 'Реферальные уровни', tagline: 'Людям хочется расти и приводить больше',
    points: ['Бронза, серебро, золото', 'Растущие привилегии', 'Прогресс и рейтинг', 'Защита от фрода'],
    description: 'Многоуровневая реферальная программа: статусы бронза, серебро и золото с растущими привилегиями за приглашения. Прогресс и рейтинг мотивируют приводить больше. MAX, Telegram и VK, защита от фрода, 152-ФЗ.',
    relatedArticles: ['partnerskiy-marketing-affiliate-2026', 'sistemy-loyalnosti-2027', 'konkurs-priglasheniy-max-virusnyy-rost-2027'],
    relatedOffers: ['referalnaya-programma', 'dvustoronniy-bonus-drug', 'geymifikaciya-kanala-max'],
  },
  {
    slug: 'komandnyy-konkurs-priglasheniy',
    pill: 'MAX · TELEGRAM · VK', hero: 'Командный конкурс', tagline: 'Азарт и взаимная мотивация',
    points: ['Команды и филиалы', 'Командный зачёт', 'Рейтинг в реальном времени', 'Антинакрутка'],
    description: 'Командный конкурс приглашений: соревнуются команды, отделы или филиалы, а не отдельные люди — это включает азарт и взаимную мотивацию. Командный рейтинг в реальном времени и антинакрутка. MAX, Telegram и VK, российский стек.',
    relatedArticles: ['konkurs-priglasheniy-max-virusnyy-rost-2027', 'geymifikaciya-saas-2026', 'telegram-chat-vk-soobshchestvo-2026'],
    relatedOffers: ['geymifikaciya-kanala-max', 'referalnaya-programma', 'liderbordy-aktivnosti'],
  },
  {
    slug: 'ugc-konkurs-otzyvov',
    pill: 'MAX · TELEGRAM · VK', hero: 'UGC-конкурс', tagline: 'Контент о бренде руками клиентов',
    points: ['Отзывы и фото за приз', 'Модерация', 'Галерея соцдоказательства', 'Права на контент'],
    description: 'UGC-конкурс: клиенты присылают отзывы и фото с товаром за приз, бот собирает и модерирует контент и формирует галерею социального доказательства. Живой контент о бренде руками аудитории. MAX, Telegram и VK, согласия и 152-ФЗ.',
    relatedArticles: ['reputaciya-otzyvy-yandex-2gis-2026', 'marketing-i-trafik-2027', 'geymifikaciya-saas-2026'],
    relatedOffers: ['fotomarafon-chellendzh', 'istorii-klientov-vitrina', 'chestnye-rozygryshi'],
  },
  {
    slug: 'lotereya-po-chekam',
    pill: 'MAX · TELEGRAM · VK', hero: 'Лотерея по чекам', tagline: 'Розыгрыш, привязанный к покупкам',
    points: ['Скан чека или QR', 'Проверка покупки', 'Честный выбор победителя', 'Аналитика'],
    description: 'Розыгрыш по чекам: покупатель сканирует чек или QR-код и участвует, бот проверяет покупку и честно выбирает победителя. Механика привязана к реальным покупкам и стимулирует средний чек. 54-ФЗ и 152-ФЗ, MAX, Telegram и VK.',
    relatedArticles: ['sistemy-loyalnosti-2027', 'konkurs-priglasheniy-max-virusnyy-rost-2027', 'crm-dlya-malogo-biznesa-2026'],
    relatedOffers: ['programma-loyalnosti', 'chestnye-rozygryshi', 'promokody-kupony-treking'],
  },
];

// ---------- SVG обложки (Колор-блок) ----------
function infoSvg(it) {
  const W = 1000, H = 1500, M = 80, white = '#ffffff';
  const ACCENT = '#34d3ee';
  const DARK = '#06363f';
  const GRAD = '<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1e4fd6"/><stop offset="1" stop-color="#6d28d9"/></linearGradient>';
  const lines = wrapTitle(it.hero, 15);
  const lineH = 104, titleFs = 92, ty = 320;
  const titleSvg = lines.map((l, i) =>
    `<text x="${M}" y="${ty + i * lineH}" font-family="${FONT}" font-weight="800" font-size="${titleFs}" letter-spacing="-2" fill="${white}">${escXml(l)}</text>`
  ).join('\n  ');
  const titleBottom = ty + (lines.length - 1) * lineH;
  const barY = titleBottom + 46;
  const pillW = it.pill.length * 17 + 56;

  // нижняя плашка-итог
  const bandH = 112, bandY = 1224, bandPad = 36;
  const tagLines = wrapTitle(it.tagline || '', 40);
  const tagFs = tagLines.length > 1 ? 32 : 34;
  const tagStartY = bandY + (bandH - (tagLines.length - 1) * 44) / 2 + 12;
  const bandSvg = it.tagline ? `<rect x="${M}" y="${bandY}" width="${W - 2 * M}" height="${bandH}" rx="22" fill="${ACCENT}"/>\n  ` +
    tagLines.map((l, i) => `<text x="${M + bandPad}" y="${tagStartY + i * 44}" font-family="${FONT}" font-weight="800" font-size="${tagFs}" fill="${DARK}">${escXml(l)}</text>`).join('\n  ') : '';

  // карточки пунктов (2 колонки)
  const cols = 2, n = it.points.length, rows = Math.ceil(n / cols);
  const gx = 30, gy = 28, cw = (W - 2 * M - gx) / 2;
  const areaTop = barY + 40, areaBottom = bandY - 44;
  const ch = Math.min(252, (areaBottom - areaTop - (rows - 1) * gy) / rows);
  const gy0 = areaTop + ((areaBottom - areaTop) - (rows * ch + (rows - 1) * gy)) / 2;
  const cardsSvg = it.points.map((p, i) => {
    const col = i % cols, row = Math.floor(i / cols);
    const cx = M + col * (cw + gx), cy = gy0 + row * (ch + gy);
    const pl = wrapTitle(p, 16);
    const tStart = cy + ch / 2 - (pl.length - 1) * 23 + 22;
    const txt = pl.map((l, j) => `<text x="${cx + 34}" y="${tStart + j * 46}" font-family="${FONT}" font-weight="600" font-size="37" fill="${white}">${escXml(l)}</text>`).join('\n  ');
    return `<rect x="${cx}" y="${cy}" width="${cw}" height="${ch}" rx="22" fill="${white}" fill-opacity="0.12"/>\n  <circle cx="${cx + 44}" cy="${cy + 52}" r="13" fill="${ACCENT}"/>\n  ${txt}`;
  }).join('\n  ');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>${GRAD}</defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <circle cx="900" cy="150" r="320" fill="${white}" fill-opacity="0.05"/>
  <circle cx="120" cy="1380" r="240" fill="${white}" fill-opacity="0.04"/>
  <rect x="${M}" y="100" width="${pillW}" height="58" rx="29" fill="${ACCENT}"/>
  <text x="${M + 28}" y="138" font-family="${FONT}" font-weight="800" font-size="26" letter-spacing="2" fill="${DARK}">${escXml(it.pill)}</text>
  ${titleSvg}
  <rect x="${M}" y="${barY}" width="130" height="11" rx="5" fill="${ACCENT}"/>
  ${cardsSvg}
  ${bandSvg}
  <line x1="${M}" y1="1378" x2="${W - M}" y2="1378" stroke="${white}" stroke-width="2" stroke-opacity="0.22"/>
  <text x="${M}" y="1440" font-family="${FONT}" font-weight="800" font-size="40" fill="${white}">Чимитдоржи Дарижапов</text>
  <text x="${M}" y="1486" font-family="${FONT}" font-weight="500" font-size="30" fill="${white}" opacity="0.7">chimitdorzhi.tech</text>
</svg>`;
}

// ---------- чром страниц (как в build-offers) ----------
function head({ title, description, canonical, ogImage }) {
  title = clampTitle(title); description = clampDesc(description);
  return `<!DOCTYPE html>
<html lang="ru" data-theme="dark" data-lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="theme-color" content="#f4f1ea">
    <link rel="canonical" href="${canonical}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${canonical}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    <meta property="og:image" content="${ogImage}">
    <meta property="og:locale" content="ru_RU">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
    <link rel="preload" href="/assets/fonts/InterVariable.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/assets/phosphor/Phosphor.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="/assets/phosphor/regular.css" media="print" onload="this.media='all'">
    <link rel="stylesheet" href="/assets/phosphor/fill.css" media="print" onload="this.media='all'">
    <noscript><link rel="stylesheet" href="/assets/phosphor/regular.css"><link rel="stylesheet" href="/assets/phosphor/fill.css"></noscript>
    <link rel="stylesheet" href="/style.css?v=41">
`;
}
function navbar() {
  return `<nav class="navbar" id="navbar">
    <div class="container nav-inner">
        <a href="/" class="logo">CHIMITDORZHI<span class="logo-dot">.</span></a>
        <ul class="nav-links" id="navLinks">
            <li><a href="/#about">Обо мне</a></li>
            <li><a href="/#services">Услуги</a></li>
            <li><a href="/predlozheniya/" class="nav-link-highlight">Предложения</a></li>
            <li><a href="/blog/">Блог</a></li>
            <li><a href="/infografika/">Инфографика</a></li>
            <li><a href="/#contact">Контакт</a></li>
        </ul>
        <div class="nav-controls">
            <button class="nav-search-btn js-search-open" type="button" aria-label="Поиск по сайту"><i class="ph ph-magnifying-glass" aria-hidden="true"></i></button>
            <a href="https://t.me/chimitdorzhi" target="_blank" rel="noopener" class="btn btn-accent nav-cta">Связаться</a>
        </div>
        <button class="burger" id="burger" aria-label="Меню" aria-expanded="false" aria-controls="mobileMenu"><span></span><span></span><span></span></button>
    </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
    <ul>
        <li><a href="/#about">Обо мне</a></li>
        <li><a href="/#services">Услуги</a></li>
        <li><a href="/predlozheniya/">Предложения</a></li>
        <li><a href="/blog/">Блог</a></li>
        <li><a href="/infografika/">Инфографика</a></li>
        <li><a href="/#contact">Контакт</a></li>
    </ul>
</div>
${require('./search-modal.js')}`;
}
function footer() {
  return `<footer id="contact" class="footer">
    <div class="container footer-inner">
        <div class="footer-cta">
            <span class="section-label">КОНТАКТ</span>
            <h2>ЕСТЬ ЗАДАЧА?</h2>
            <h2 class="text-gradient">ДАВАЙТЕ РЕШИМ.</h2>
            <div class="footer-actions">
                <a href="https://t.me/chimitdorzhi" target="_blank" rel="noopener" class="btn btn-accent"><i class="ph ph-telegram-logo" aria-hidden="true"></i> Telegram</a>
                <a href="https://vk.com/chimitdorzhi" target="_blank" rel="noopener" class="btn btn-ghost"><i class="ph ph-chat-circle-dots" aria-hidden="true"></i> ВКонтакте</a>
                <a href="tel:+79316053007" class="btn btn-ghost"><i class="ph ph-phone" aria-hidden="true"></i> +7 (931) 605-30-07</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p class="footer-copy">&copy; 2026 Дарижапов Чимитдоржи. Все права защищены.</p>
            <div class="footer-links">
                <a href="/about/" class="footer-policy-link">Об авторе</a>
                <span class="footer-legal-sep"> · </span>
                <a href="/predlozheniya/" class="footer-policy-link">Предложения</a>
                <span class="footer-legal-sep"> · </span>
                <a href="/blog/" class="footer-policy-link">Блог</a>
                <span class="footer-legal-sep"> · </span>
                <a href="/infografika/" class="footer-policy-link">Инфографика</a>
            </div>
        </div>
    </div>
</footer>
<script src="/i18n.js?v=28" defer></script>
<script src="/script.js?v=27" defer></script>`;
}

// ---------- хаб ----------
function hubPage() {
  const tiles = ITEMS.map((it) => {
    const o = OFFER_BY[it.slug] || {};
    return `<a class="ig-tile" href="/infografika/${it.slug}/">
      <img src="/infografika/${it.slug}.png" width="1000" height="1500" loading="lazy" alt="Инфографика: ${esc(o.title || it.hero)}">
      <span class="ig-tile-cap">${esc(it.hero)}</span>
    </a>`;
  }).join('\n');
  return head({
    title: 'Инфографика — вовлечение и вирусный рост в MAX',
    description: 'Инфографика по решениям для вовлечения и вирусного роста в MAX, Telegram и VK: конкурс приглашений, реферальная программа, розыгрыши, лояльность, Mini App. Наглядно и со ссылками на статьи и предложения.',
    canonical: `${SITE}/infografika/`,
    ogImage: `${SITE}/infografika/${ITEMS[0].slug}.png`,
  }) + `</head>
<body>
${navbar()}
<main class="ig-main">
  <div class="container">
    <nav class="breadcrumbs" aria-label="Хлебные крошки"><a href="/">Главная</a> · <span>Инфографика</span></nav>
    <header class="ig-head">
      <span class="section-label">ИНФОГРАФИКА</span>
      <h1>Вовлечение и вирусный рост — наглядно</h1>
      <p class="ig-sub">Карточки-инфографики по решениям для MAX, Telegram и VK. Кликните, чтобы открыть описание и связанные статьи и предложения. Сохраняйте и делитесь в соцсетях.</p>
    </header>
    <div class="ig-grid">
${tiles}
    </div>
  </div>
</main>
${footer()}
</body>
</html>`;
}

// ---------- страница инфографики ----------
function detailPage(it) {
  const o = OFFER_BY[it.slug] || {};
  const relOffers = it.relatedOffers.map((s) => {
    const ro = OFFER_BY[s]; if (!ro) return '';
    return `<a class="ig-link-card" href="/predlozheniya/${s}/"><i class="ph ph-arrow-right" aria-hidden="true"></i><span>${esc(ro.title)}</span></a>`;
  }).filter(Boolean).join('\n');
  const relArticles = it.relatedArticles.map((s) => {
    const a = BLOG_BY[s]; if (!a) return '';
    return `<a class="ig-link-card" href="/blog/${s}/"><i class="ph ph-article" aria-hidden="true"></i><span>${esc(a.title)}</span></a>`;
  }).filter(Boolean).join('\n');
  return head({
    title: `${o.title || it.hero} — инфографика`,
    description: it.description,
    canonical: `${SITE}/infografika/${it.slug}/`,
    ogImage: `${SITE}/infografika/${it.slug}.png`,
  }) + `</head>
<body>
${navbar()}
<main class="ig-main">
  <div class="container ig-detail">
    <nav class="breadcrumbs" aria-label="Хлебные крошки"><a href="/">Главная</a> · <a href="/infografika/">Инфографика</a> · <span>${esc(it.hero)}</span></nav>
    <article class="ig-article">
      <div class="ig-figure">
        <img src="/infografika/${it.slug}.png" width="1000" height="1500" alt="Инфографика: ${esc(o.title || it.hero)} — для MAX, Telegram и VK">
      </div>
      <div class="ig-body">
        <span class="section-label">ВОВЛЕЧЕНИЕ И ВИРУСНЫЙ РОСТ</span>
        <h1>${esc(o.title || it.hero)}</h1>
        <p class="ig-desc">${esc(it.description)}</p>
        <a class="btn btn-accent" href="/predlozheniya/${it.slug}/">Подробнее о предложении <i class="ph ph-arrow-right" aria-hidden="true"></i></a>

        <h2 class="ig-h2">Связанные предложения</h2>
        <div class="ig-links">
${relOffers}
        </div>

        <h2 class="ig-h2">Статьи по теме</h2>
        <div class="ig-links">
${relArticles}
        </div>

        <div class="ig-share">
          <span>Поделиться:</span>
          <a href="https://t.me/share/url?url=${encodeURIComponent(`${SITE}/infografika/${it.slug}/`)}" target="_blank" rel="noopener"><i class="ph ph-telegram-logo" aria-hidden="true"></i> Telegram</a>
          <a href="https://vk.com/share.php?url=${encodeURIComponent(`${SITE}/infografika/${it.slug}/`)}" target="_blank" rel="noopener"><i class="ph ph-chat-circle-dots" aria-hidden="true"></i> ВКонтакте</a>
        </div>
      </div>
    </article>
  </div>
</main>
${footer()}
</body>
</html>`;
}

// ---------- sitemap ----------
function updateSitemap() {
  const SITEMAP = path.join(ROOT, 'sitemap.xml');
  if (!fs.existsSync(SITEMAP)) return;
  const today = new Date().toISOString().slice(0, 10);
  let xml = fs.readFileSync(SITEMAP, 'utf8');
  xml = xml.replace(/\s*<url>\s*<loc>https:\/\/chimitdorzhi\.tech\/infografika[^<]*<\/loc>[\s\S]*?<\/url>/g, '');
  const entries = [
    { loc: `${SITE}/infografika/`, freq: 'weekly', priority: '0.7' },
    ...ITEMS.map((it) => ({ loc: `${SITE}/infografika/${it.slug}/`, freq: 'monthly', priority: '0.6' })),
  ];
  const block = entries.map((e) =>
    `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${e.freq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
  ).join('\n');
  xml = xml.replace(/\n?<\/urlset>\s*$/, '\n' + block + '\n</urlset>\n');
  fs.writeFileSync(SITEMAP, xml, 'utf8');
}

// ---------- запуск ----------
async function run() {
  fs.mkdirSync(OUT, { recursive: true });
  for (const it of ITEMS) {
    await sharp(Buffer.from(infoSvg(it))).png({ quality: 92, compressionLevel: 9 }).toFile(path.join(OUT, `${it.slug}.png`));
    const dir = path.join(OUT, it.slug); fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), detailPage(it), 'utf8');
  }
  fs.writeFileSync(path.join(OUT, 'index.html'), hubPage(), 'utf8');
  updateSitemap();
  console.log(`OK: инфографик ${ITEMS.length} + хаб → /infografika; sitemap обновлён`);
}
run();
