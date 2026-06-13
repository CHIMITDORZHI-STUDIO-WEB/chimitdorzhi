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

const srcOf = (it) => (it.kind === 'article' ? BLOG_BY[it.slug] : OFFER_BY[it.slug]) || {};
const titleOf = (it) => srcOf(it).title || it.hero;

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
].concat(
  require('./infografika-extra-a.js'),
  require('./infografika-extra-b.js'),
  require('./infografika-extra-c.js'),
  require('./infografika-extra-d.js'),
  require('./infografika-extra-e.js'),
  require('./infografika-extra-f.js'),
  require('./infografika-extra-g.js'),
  require('./infografika-extra-h.js'),
  require('./infografika-extra-i.js'),
  require('./infografika-extra-j.js'),
  require('./infografika-extra-k.js'),
  require('./infografika-extra-l.js'),
  require('./infografika-extra-m.js'),
  require('./infografika-extra-n.js'),
  require('./infografika-extra-o.js'),
  require('./infografika-extra-p.js'),
  require('./infografika-extra-q.js'),
);

// ---------- SVG обложки (светлый «отчётный» стиль, 6 макетов) ----------
const CREAM = '#f4f1ea', INK = '#16130f', GRAY = '#6b655c', CARDB = '#eceadf', WHITE = '#ffffff', RULE = '#dcd6c8';
const DOTS = ['#1e4fd6', '#f59e0b', '#16a34a', '#7c3aed'];
// фирменный цвет акцента по рубрике (пилл + последнее слово заголовка + плашка F)
const RUBRIC_ACCENT = {
  grow: '#1e4fd6', msg: '#0d9488', ai: '#4f46e5', sec: '#d85a30', law: '#0f766e',
  geo: '#7c3aed', startup: '#b45309', mkt: '#1e4fd6', media: '#be185d', dev: '#4338ca',
  ind: '#15803d', fin: '#0891b2', mlm: '#6d28d9', travel: '#0e7490', esport: '#9333ea',
};
// основной макет рубрики (узнаваемый почерк)
const RUBRIC_LAYOUT = {
  grow: 'F', msg: 'B', ai: 'C', sec: 'D', law: 'E', geo: 'A', startup: 'B', mkt: 'F',
  media: 'C', dev: 'E', ind: 'A', fin: 'D', mlm: 'B', travel: 'C', esport: 'F',
};
const LAYOUT_ORDER = ['A', 'B', 'C', 'D', 'E', 'F'];
function hashStr(s) { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h * 33) ^ s.charCodeAt(i)) >>> 0; return h; }
function layoutFor(it) {
  const base = LAYOUT_ORDER.indexOf(RUBRIC_LAYOUT[igCatOf(it).k] || 'A');
  // у рубрики два почерка (base и base+3) — сдвиг по хешу слага разводит соседей
  return LAYOUT_ORDER[(base + (hashStr(it.slug || it.hero) % 2) * 3) % 6];
}
const T = (x, y, s, w, fill, extra = '') => `<text x="${x}" y="${y}" font-family="${FONT}" font-weight="${w}" font-size="${s}" fill="${fill}"${extra}>`;

// блок пунктов для макетов A–E (общая шапка сверху)
function pointsBlock(layout, points, top, bottom, accent) {
  const W = 1000, M = 80, n = points.length;
  if (layout === 'B') { // нумерованный список
    const rowH = (bottom - top) / n;
    return points.map((p, i) => {
      const ry = top + i * rowH, num = String(i + 1).padStart(2, '0');
      const pl = wrapTitle(p, 24);
      const ty0 = ry + rowH / 2 - (pl.length - 1) * 22 + 14;
      const txt = pl.map((l, j) => `${T(M + 116, ty0 + j * 44, 40, 600, INK)}${escXml(l)}</text>`).join('\n  ');
      const div = i < n - 1 ? `<line x1="${M}" y1="${ry + rowH}" x2="${W - M}" y2="${ry + rowH}" stroke="${RULE}" stroke-width="1.5"/>` : '';
      return `${T(M, ry + rowH / 2 + 24, 70, 800, DOTS[i % 4], ' letter-spacing="-2"')}${num}</text>\n  ${txt}\n  ${div}`;
    }).join('\n  ');
  }
  if (layout === 'C') { // таймлайн
    const pad = 30, step = (bottom - top - 2 * pad) / Math.max(1, n - 1), x = M + 14;
    const first = top + pad, lastY = top + pad + (n - 1) * step;
    const line = `<line x1="${x}" y1="${first}" x2="${x}" y2="${lastY}" stroke="${RULE}" stroke-width="3"/>`;
    const nodes = points.map((p, i) => {
      const cy = first + i * step, pl = wrapTitle(p, 26);
      const ty0 = cy - (pl.length - 1) * 20 + 13;
      const txt = pl.map((l, j) => `${T(M + 64, ty0 + j * 42, 38, 600, INK)}${escXml(l)}</text>`).join('\n  ');
      return `<circle cx="${x}" cy="${cy}" r="17" fill="${CREAM}" stroke="${DOTS[i % 4]}" stroke-width="6"/>\n  ${txt}`;
    }).join('\n  ');
    return line + '\n  ' + nodes;
  }
  if (layout === 'D') { // чек-лист
    const step = (bottom - top) / n;
    return points.map((p, i) => {
      const cy = top + step * (i + 0.5), cx = M + 26, R = 22, c = DOTS[i % 4];
      const chk = `<path d="M${cx - 9} ${cy} l6 7 l13 -15" fill="none" stroke="${WHITE}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
      const pl = wrapTitle(p, 28);
      const ty0 = cy - (pl.length - 1) * 20 + 13;
      const txt = pl.map((l, j) => `${T(M + 74, ty0 + j * 42, 38, 600, INK)}${escXml(l)}</text>`).join('\n  ');
      return `<circle cx="${cx}" cy="${cy}" r="${R}" fill="${c}"/>\n  ${chk}\n  ${txt}`;
    }).join('\n  ');
  }
  if (layout === 'E') { // цветные полосы
    const gap = 22, barH = Math.min(150, (bottom - top - (n - 1) * gap) / n);
    const totalH = n * barH + (n - 1) * gap, y0 = top + ((bottom - top) - totalH) / 2;
    return points.map((p, i) => {
      const y = y0 + i * (barH + gap), pl = wrapTitle(p, 30);
      const ty0 = y + barH / 2 - (pl.length - 1) * 21 + 13;
      const txt = pl.map((l, j) => `${T(M + 50, ty0 + j * 42, 38, 600, INK)}${escXml(l)}</text>`).join('\n  ');
      return `<rect x="${M}" y="${y}" width="${W - 2 * M}" height="${barH}" rx="18" fill="${WHITE}" stroke="${CARDB}" stroke-width="1.5"/>\n  <rect x="${M}" y="${y}" width="11" height="${barH}" rx="5.5" fill="${DOTS[i % 4]}"/>\n  ${txt}`;
    }).join('\n  ');
  }
  // 'A' — карточки 2×2 (по умолчанию)
  const cols = 2, rows = Math.ceil(n / cols), gx = 28, gy = 26, cw = (W - 2 * M - gx) / 2;
  const ch = Math.min(248, (bottom - top - (rows - 1) * gy) / rows);
  const gy0 = top + ((bottom - top) - (rows * ch + (rows - 1) * gy)) / 2;
  return points.map((p, i) => {
    const col = i % cols, row = Math.floor(i / cols);
    const cx = M + col * (cw + gx), cy = gy0 + row * (ch + gy), pl = wrapTitle(p, 16);
    const tStart = cy + ch / 2 - (pl.length - 1) * 23 + 24;
    const txt = pl.map((l, j) => `${T(cx + 34, tStart + j * 46, 36, 600, INK)}${escXml(l)}</text>`).join('\n  ');
    return `<rect x="${cx}" y="${cy}" width="${cw}" height="${ch}" rx="20" fill="${WHITE}" stroke="${CARDB}" stroke-width="1.5"/>\n  <circle cx="${cx + 44}" cy="${cy + 50}" r="12" fill="${DOTS[i % 4]}"/>\n  ${txt}`;
  }).join('\n  ');
}

function chrome(inner) {
  const W = 1000, H = 1500, M = 80;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs><pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="${INK}" stroke-opacity="0.04" stroke-width="1"/></pattern></defs>
  <rect width="${W}" height="${H}" fill="${CREAM}"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  ${inner}
  <line x1="${M}" y1="1380" x2="${W - M}" y2="1380" stroke="${RULE}" stroke-width="2"/>
  ${T(M, 1434, 34, 800, INK, ' letter-spacing="0.5"')}CHIMITDORZHI.</text>
  ${T(M, 1474, 26, 600, '#1e4fd6')}@chimitdorzhi</text>
  ${T(W - M, 1432, 24, 600, GRAY, ' text-anchor="end"')}IT, AI и автоматизация</text>
  ${T(W - M, 1468, 24, 500, GRAY, ' text-anchor="end"')}под ключ · chimitdorzhi.tech</text>
</svg>`;
}

function infoSvg(it) {
  const W = 1000, M = 80;
  const accent = RUBRIC_ACCENT[igCatOf(it).k] || '#1e4fd6';
  const layout = layoutFor(it);

  if (layout === 'F') { // акцентный блок: заголовок на цветной плашке
    const tl = wrapTitle(it.hero, 16), titleFs = 76, tLineH = 90;
    const subL = wrapTitle(it.tagline || '', 40);
    const padT = 184, blockTop = 96;
    const blockH = padT + (tl.length - 1) * tLineH + (subL.length ? 40 + subL.length * 42 : 0) + 56;
    const tTop = blockTop + padT - 18;
    const titleSvg = tl.map((l, i) => `${T(M + 36, tTop + i * tLineH, titleFs, 800, WHITE, ' letter-spacing="-2"')}${escXml(l)}</text>`).join('\n  ');
    const subTop = tTop + (tl.length - 1) * tLineH + 56;
    const subSvg = subL.map((l, i) => `${T(M + 36, subTop + i * 42, 31, 500, '#ffffff', ' fill-opacity="0.82"')}${escXml(l)}</text>`).join('\n  ');
    const pillW = it.pill.length * 17.5 + 104;
    const head = `<rect x="${M}" y="${blockTop}" width="${W - 2 * M}" height="${blockH}" rx="28" fill="${accent}"/>
  <rect x="${M + 36}" y="${blockTop + 40}" width="${pillW}" height="52" rx="26" fill="${WHITE}" fill-opacity="0.2"/>
  <circle cx="${M + 64}" cy="${blockTop + 66}" r="6" fill="${WHITE}"/>
  ${T(M + 86, blockTop + 75, 25, 700, WHITE, ' letter-spacing="1.5"')}${escXml(it.pill)}</text>
  ${titleSvg}
  ${subSvg}`;
    // пункты — один столбец с цветными точками
    const top = blockTop + blockH + 60, bottom = 1330, n = it.points.length, step = (bottom - top) / n;
    const pts = it.points.map((p, i) => {
      const cy = top + step * (i + 0.5), pl = wrapTitle(p, 28);
      const ty0 = cy - (pl.length - 1) * 20 + 13;
      const txt = pl.map((l, j) => `${T(M + 52, ty0 + j * 42, 38, 600, INK)}${escXml(l)}</text>`).join('\n  ');
      return `<circle cx="${M + 16}" cy="${cy}" r="12" fill="${DOTS[i % 4]}"/>\n  ${txt}`;
    }).join('\n  ');
    return chrome(head + '\n  ' + pts);
  }

  // макеты A–E: общая светлая шапка (пилл + заголовок + подзаголовок)
  const lines = wrapTitle(it.hero, 14), lineH = 100, titleFs = 86, ty = 300;
  const titleSvg = lines.map((l, i) => {
    const last = i === lines.length - 1, y = ty + i * lineH;
    if (!last) return `${T(M, y, titleFs, 800, INK, ' letter-spacing="-2"')}${escXml(l)}</text>`;
    const words = l.split(' ');
    if (words.length === 1) return `${T(M, y, titleFs, 800, accent, ' letter-spacing="-2"')}${escXml(l)}</text>`;
    const head = words.slice(0, -1).join(' ') + ' ', tail = words[words.length - 1];
    return `${T(M, y, titleFs, 800, INK, ' letter-spacing="-2" xml:space=&quot;preserve&quot;'.replace(/&quot;/g,String.fromCharCode(34)))}<tspan fill="${INK}">${escXml(head)}</tspan><tspan fill="${accent}">${escXml(tail)}</tspan></text>`;
  }).join('\n  ');
  const titleBottom = ty + (lines.length - 1) * lineH;
  const subLines = wrapTitle(it.tagline || '', 42), subY = titleBottom + 64;
  const subSvg = subLines.map((l, i) => `${T(M, subY + i * 46, 33, 500, GRAY)}${escXml(l)}</text>`).join('\n  ');
  const subBottom = subY + (subLines.length - 1) * 46;
  const pillW = it.pill.length * 17.5 + 104;
  const top = subBottom + 56, bottom = 1330;
  const block = pointsBlock(layout, it.points, top, bottom, accent);
  const head = `<rect x="${M}" y="96" width="${pillW}" height="56" rx="28" fill="${accent}"/>
  <circle cx="${M + 30}" cy="124" r="6" fill="${WHITE}"/>
  ${T(M + 52, 133, 25, 700, WHITE, ' letter-spacing="1.5"')}${escXml(it.pill)}</text>
  ${titleSvg}
  ${subSvg}`;
  return chrome(head + '\n  ' + block);
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
const IG_CATS = {
  'AI И ТЕХНОЛОГИИ': { k: 'ai', l: 'AI и технологии', ic: 'ph-cpu' },
  'БЕЗОПАСНОСТЬ': { k: 'sec', l: 'Безопасность', ic: 'ph-shield-check' },
  'ПРАВО · 152-ФЗ': { k: 'law', l: 'Право и документы', ic: 'ph-scales' },
  'ПРАВО И ДОКУМЕНТЫ': { k: 'law', l: 'Право и документы', ic: 'ph-scales' },
  'GEO И AI-ПОИСК': { k: 'geo', l: 'GEO и AI-поиск', ic: 'ph-robot' },
  'СТАРТАП И ПРОДУКТ': { k: 'startup', l: 'Стартап и продукт', ic: 'ph-rocket-launch' },
  'МАРКЕТИНГ И РОСТ': { k: 'mkt', l: 'Маркетинг', ic: 'ph-megaphone' },
  'МЕССЕНДЖЕРЫ И БОТЫ': { k: 'msg', l: 'Мессенджеры и боты', ic: 'ph-chat-circle-dots' },
  'МЕДИА И КОНТЕНТ': { k: 'media', l: 'Медиа и контент', ic: 'ph-microphone' },
  'СЕТЕВОЙ БИЗНЕС': { k: 'mlm', l: 'Сетевой бизнес', ic: 'ph-share-network' },
  'ПУТЕШЕСТВИЯ': { k: 'travel', l: 'Путешествия', ic: 'ph-airplane-tilt' },
  'КИБЕРСПОРТ': { k: 'esport', l: 'Киберспорт', ic: 'ph-game-controller' },
  'РАЗРАБОТКА': { k: 'dev', l: 'Разработка', ic: 'ph-code' },
  'ОТРАСЛИ': { k: 'ind', l: 'Отрасли', ic: 'ph-buildings' },
  'ФИНТЕХ И ПЛАТЕЖИ': { k: 'fin', l: 'Финтех и платежи', ic: 'ph-credit-card' },
};
const IG_GROW = { k: 'grow', l: 'Вовлечение и рост', ic: 'ph-trend-up' };
const igCatOf = (it) => (it.label && IG_CATS[it.label]) ? IG_CATS[it.label] : IG_GROW;
const IG_ORDER = ['grow', 'msg', 'ai', 'sec', 'law', 'geo', 'mkt', 'startup', 'media', 'dev', 'ind', 'fin', 'mlm', 'travel', 'esport'];

function hubPage() {
  const tiles = ITEMS.map((it) => {
    const c = igCatOf(it);
    return `<a class="ig-tile" data-cat="${c.k}" href="/infografika/${it.slug}/">
      <img src="/infografika/${it.slug}.png" width="1000" height="1500" loading="lazy" alt="Инфографика: ${esc(titleOf(it))}">
      <span class="ig-tile-cap">${esc(it.hero)}</span>
    </a>`;
  }).join('\n');
  const counts = {};
  for (const it of ITEMS) { const k = igCatOf(it).k; counts[k] = (counts[k] || 0) + 1; }
  const labelByKey = {}, iconByKey = {};
  for (const v of Object.values(IG_CATS)) { labelByKey[v.k] = v.l; iconByKey[v.k] = v.ic; }
  labelByKey[IG_GROW.k] = IG_GROW.l; iconByKey[IG_GROW.k] = IG_GROW.ic;
  const chips = [`<button class="ig-chip on" data-f="all" type="button"><i class="ph ph-squares-four" aria-hidden="true"></i> Все <span>${ITEMS.length}</span></button>`]
    .concat(Object.keys(counts).sort((a, b) => counts[b] - counts[a]).map((k) =>
      `<button class="ig-chip" data-f="${k}" type="button"><i class="ph ${iconByKey[k] || 'ph-tag'}" aria-hidden="true"></i> ${esc(labelByKey[k] || k)} <span>${counts[k]}</span></button>`)).join('\n');
  return head({
    title: 'Инфографика — IT, AI и бизнес наглядно',
    description: 'Инфографика по IT, AI и бизнесу: безопасность и 152-ФЗ, российский AI-стек, маркетинг и вирусный рост, отрасли, финтех и платежи. Наглядные карточки со ссылками на статьи и предложения. Сохраняйте и делитесь.',
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
      <h1>IT, AI и бизнес — наглядно</h1>
      <p class="ig-sub">Карточки-инфографики по темам: вовлечение, AI, безопасность, маркетинг, отрасли и финтех. Выберите рубрику, откройте карточку — внутри описание и связанные статьи и предложения. Сохраняйте и делитесь.</p>
    </header>
    <style>
      .ig-chips{display:flex;flex-wrap:wrap;gap:10px;margin:0 0 28px}
      .ig-chip{display:inline-flex;align-items:center;gap:7px;font-size:14px;padding:8px 16px;border-radius:999px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-secondary);cursor:pointer;transition:all .15s;font-family:inherit}
      .ig-chip span{opacity:.6;font-size:12px;margin-left:2px}
      .ig-chip:hover{border-color:var(--border-hover);color:var(--text)}
      .ig-chip.on{background:var(--accent);border-color:var(--accent);color:#fff}
      .ig-chip.on span{opacity:.8}
      .ig-tile.is-hidden{display:none}
      @media (max-width: 560px){
        .ig-chips{flex-wrap:nowrap;overflow-x:auto;gap:8px;margin:0 0 22px;padding-bottom:8px;-webkit-overflow-scrolling:touch;scrollbar-width:none}
        .ig-chips::-webkit-scrollbar{display:none}
        .ig-chip{flex:0 0 auto;font-size:13px;padding:7px 13px}
        .ig-grid{grid-template-columns:repeat(2,1fr);gap:10px}
        .ig-tile-cap{font-size:13px;padding:10px}
      }
    </style>
    <div class="ig-chips" id="igChips">
${chips}
    </div>
    <div class="ig-grid" id="igGrid">
${tiles}
    </div>
  </div>
</main>
<script>
(function(){
  var chips=document.getElementById('igChips'),grid=document.getElementById('igGrid');
  if(!chips||!grid)return;
  chips.addEventListener('click',function(e){
    var b=e.target.closest('.ig-chip');if(!b)return;
    [].forEach.call(chips.children,function(c){c.classList.remove('on')});
    b.classList.add('on');
    var f=b.getAttribute('data-f');
    [].forEach.call(grid.children,function(t){
      t.classList.toggle('is-hidden', f!=='all' && t.getAttribute('data-cat')!==f);
    });
  });
})();
</script>
${footer()}
</body>
</html>`;
}

// ---------- страница инфографики ----------
function detailPage(it) {
  const isArt = it.kind === 'article';
  const titleText = titleOf(it);
  const ctaUrl = isArt ? `/blog/${it.slug}/` : `/predlozheniya/${it.slug}/`;
  const ctaLabel = isArt ? 'Читать статью' : 'Подробнее о предложении';
  const label = it.label || 'ВОВЛЕЧЕНИЕ И ВИРУСНЫЙ РОСТ';
  const relOffers = (it.relatedOffers || []).map((s) => {
    const ro = OFFER_BY[s]; if (!ro) return '';
    return `<a class="ig-link-card" href="/predlozheniya/${s}/"><i class="ph ph-arrow-right" aria-hidden="true"></i><span>${esc(ro.title)}</span></a>`;
  }).filter(Boolean).join('\n');
  const relArticles = (it.relatedArticles || []).map((s) => {
    const a = BLOG_BY[s]; if (!a) return '';
    return `<a class="ig-link-card" href="/blog/${s}/"><i class="ph ph-article" aria-hidden="true"></i><span>${esc(a.title)}</span></a>`;
  }).filter(Boolean).join('\n');
  const offersBlock = relOffers ? `<h2 class="ig-h2">Связанные предложения</h2>\n        <div class="ig-links">\n${relOffers}\n        </div>\n` : '';
  const articlesBlock = relArticles ? `<h2 class="ig-h2">Статьи по теме</h2>\n        <div class="ig-links">\n${relArticles}\n        </div>\n` : '';
  return head({
    title: `${titleText} — инфографика`,
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
        <img src="/infografika/${it.slug}.png" width="1000" height="1500" alt="Инфографика: ${esc(titleText)}">
      </div>
      <div class="ig-body">
        <span class="section-label">${esc(label)}</span>
        <h1>${esc(titleText)}</h1>
        <p class="ig-desc">${esc(it.description)}</p>
        <a class="btn btn-accent" href="${ctaUrl}">${ctaLabel} <i class="ph ph-arrow-right" aria-hidden="true"></i></a>

        ${offersBlock}
        ${articlesBlock}

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
