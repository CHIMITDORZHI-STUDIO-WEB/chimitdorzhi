// Снятие кластера MWR Life (16.11.2026). Компания с 01.09.2025 в списке Банка России
// с признаками финансовой пирамиды (cbr.ru warning-list id=11201); публичное продвижение
// участия подпадает под ч. 2 ст. 14.62 КоАП, а правила компании требуют письменного
// согласования материалов партнёров. Поэтому:
//  - UNPUBLISH: статьи про заработок, набор партнёров и обзоры бренда сняты; со старых адресов
//    стоят переадресации (blog/<slug>/index.html), см. tools/mwr-redirects.js;
//  - KEEP: шесть статей без бренда, перенесены из рубрики mwrlife в mlm и biznes-krugozor.
const C = (s) => require('./blog-content-' + s + '.js');

const UNPUBLISH = [
  'udalennyy-dohod-na-puteshestviyah-2026', 'travel-klub-po-podpiske-komu-vygodno-2026',
  'mwr-life-chestnyy-obzor-2026', 'partnerka-travel-kluba-dohod-2026', 'setevoy-biznes-v-turizme-2026',
  'komu-podhodit-partnerka-travel-kluba-2026', 'kak-stat-ambassadorom-mwr-life-2026',
  'eto-piramida-vozrazheniya-travel-klub-2026', 'travel-klub-dlya-semyi-2026', 'travel-advantage-otzyvy-2026',
  'travel-advantage-platforma-2026', 'life-experience-gruppovye-tury-2026', 'tematicheskie-tury-mwr-2026',
  'marketing-plan-mwr-binar-klassika-2026', '9-vidov-voznagrazhdeniy-mwr-2026',
  'podpiska-mwr-vozvrat-ballami-2026', 'kak-poehat-besplatno-mwr-2026', 'travel-advantage-vs-turagentstvo-2026',
  'travel-advantage-vs-inteletravel-incruises-2026', 'travel-klub-vs-goryashchie-tury-2026',
  'mwr-life-otzyvy-2026', 'kak-zarabatyvat-na-puteshestviyah-2026', 'mwr-vs-worldventures-dreamtrips-2026',
  'skolko-stoit-mwr-life-matematika-2026', 'mwr-life-v-rossii-legalno-nalogi-2026',
  'vozrazheniya-net-vremeni-deneg-svyazey-travel-klub-2026', 'travel-klub-dlya-mam-v-dekrete-2026',
  'puteshestviya-i-dohod-dlya-frilanserov-2026', 'travel-klub-ili-kopit-samomu-2026',
  'puteshestviya-po-podpiske-trend-2026', 'kak-priglashat-v-travel-klub-bez-spama-2026',
];

const S = 'https://chimitdorzhi.tech';
const D = '2026-11-16';
const IT_OFFER = {
  title: 'Инструменты для партнёров сетевых компаний',
  services: [
    { icon: 'ph-fill ph-browser', label: 'Личный сайт партнёра' },
    { icon: 'ph-fill ph-robot', label: 'Бот-воронка в Telegram и MAX' },
    { icon: 'ph-fill ph-address-book', label: 'CRM для гостей и команды' },
    { icon: 'ph-fill ph-sparkle', label: 'Контент с ИИ' },
  ],
};

const TRAVEL_OFFER = {
  title: 'IT для турагентств и гостиниц',
  services: [
    { icon: 'ph-fill ph-globe', label: 'Сайт с онлайн-бронированием' },
    { icon: 'ph-fill ph-robot', label: 'Бот для заявок и подбора туров' },
    { icon: 'ph-fill ph-address-book', label: 'CRM для туристов' },
    { icon: 'ph-fill ph-credit-card', label: 'Онлайн-оплата и предоплата' },
  ],
};

const KEEP = {
  'sayt-partnera-mwr-life-2026': {
    category: 'mlm', dateModified: D, servicesOffer: IT_OFFER,
    title: 'Личный сайт партнёра travel-клуба или сетевой компании без спама',
    metaTitle: 'Личный сайт партнёра сетевой компании без спама',
    metaDescription: 'Какой нужен личный сайт партнёру travel-клуба или сетевой компании: что показать, что нельзя обещать, как собирать заявки без спама и рассылок.',
    excerpt: 'Личный сайт партнёра travel-клуба или сетевой компании: что на нём показывать, чего нельзя обещать публично и как собирать заявки без спама.',
    ctaInternal: { url: `${S}/predlozheniya/sayt-distributora/`, label: 'Обсудить сайт партнёра' },
    relatedSlugs: ['mlm-svoy-sayt-distributora-2026', 'avtovoronka-bot-travel-klub-2026', 'crm-partnera-travel-kluba-2026'],
    tags: ['сайт партнёра', 'сетевой бизнес', 'лендинг', 'заявки'],
  },
  'avtovoronka-bot-travel-klub-2026': {
    category: 'mlm', dateModified: D, servicesOffer: IT_OFFER,
    ctaInternal: { url: `${S}/predlozheniya/avtovoronka-rekrutinga/`, label: 'Обсудить бота-воронку' },
    tags: ['чат-бот', 'автоворонка', 'сетевой бизнес', 'инструменты партнёра'],
    relatedSlugs: ['sayt-partnera-mwr-life-2026', 'crm-partnera-travel-kluba-2026', 'ii-kontent-travel-setevik-2026'],
  },
  'ii-kontent-travel-setevik-2026': {
    category: 'mlm', dateModified: D, servicesOffer: IT_OFFER,
    ctaInternal: { url: `${S}/predlozheniya/ai-kontent-setevik/`, label: 'Обсудить контент с ИИ' },
    relatedSlugs: ['avtovoronka-bot-travel-klub-2026', 'sayt-partnera-mwr-life-2026', 'crm-partnera-travel-kluba-2026'],
  },
  'crm-partnera-travel-kluba-2026': {
    category: 'mlm', dateModified: D, servicesOffer: IT_OFFER,
    ctaInternal: { url: `${S}/predlozheniya/crm-setevika/`, label: 'Обсудить CRM' },
    tags: ['CRM', 'сетевой бизнес', 'команда', 'инструменты партнёра'],
    relatedSlugs: ['crm-dlya-setevika-iz-excel-2026', 'sayt-partnera-mwr-life-2026', 'avtovoronka-bot-travel-klub-2026'],
  },
  'kak-puteshestvovat-deshevle-2026': {
    category: 'biznes-krugozor', dateModified: D, servicesOffer: TRAVEL_OFFER,
    title: 'Как путешествовать дешевле в 2026: кэшбэк, баллы лояльности, бронирование',
    metaTitle: 'Как путешествовать дешевле в 2026: кэшбэк и баллы',
    metaDescription: 'Как путешествовать дешевле в 2026: агрегаторы, сроки бронирования, кэшбэк, баллы лояльности, групповые туры и проверка travel-клубов перед оплатой.',
    excerpt: 'Разбираю способы экономить на поездках: агрегаторы, когда бронировать, кэшбэк-карты, баллы лояльности, групповые туры и внутренний туризм. Отдельно: как проверить travel-клуб по подписке до оплаты.',
    metaKeywords: 'как путешествовать дешевле, кэшбэк путешествия, баллы лояльности, когда бронировать отель, travel-клуб проверка',
    tags: ['путешествия', 'экономия', 'кэшбэк', 'баллы лояльности'],
    ctaInternal: { url: 'https://t.me/chimitdorzhi', label: 'Спросить автора в Telegram' },
    relatedSlugs: ['travel-haking-15-sposobov-2026', 'glamping-bazy-otdyha-2026'],
  },
  'travel-haking-15-sposobov-2026': {
    category: 'biznes-krugozor', dateModified: D, servicesOffer: TRAVEL_OFFER,
    excerpt: '15 способов сэкономить на отелях и перелётах: гибкие даты, окна цен, мили и кэшбэк-карты, лоукостеры, программы лояльности, прямое бронирование. Сводная таблица и чек-лист.',
    metaKeywords: 'travel-хакинг, как сэкономить на путешествиях, дешёвые авиабилеты, дешёвые отели, мили кэшбэк',
    ctaInternal: { url: 'https://t.me/chimitdorzhi', label: 'Спросить автора в Telegram' },
    relatedSlugs: ['kak-puteshestvovat-deshevle-2026', 'glamping-bazy-otdyha-2026'],
  },
};

// Новые тексты двух статей о путешествиях лежат в отдельных файлах (раньше были в blog-data.js).
const CONTENT_FILES = ['sayt-partnera-mwr-life-2026', 'avtovoronka-bot-travel-klub-2026', 'ii-kontent-travel-setevik-2026',
  'crm-partnera-travel-kluba-2026', 'kak-puteshestvovat-deshevle-2026', 'travel-haking-15-sposobov-2026'];

function apply(all) {
  const off = new Set(UNPUBLISH);
  const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));
  for (const a of all) {
    if (!a) continue;
    if (off.has(a.slug)) { a.published = false; continue; }
    const k = KEEP[a.slug];
    if (k) {
      Object.assign(a, k);
      if (CONTENT_FILES.includes(a.slug)) {
        try { a.contentHtml = C(a.slug); const t = tocFrom(a.contentHtml); if (t.length) a.toc = t; } catch (e) { /* файла ещё нет */ }
      }
    }
    // кнопки на снятый лендинг /mwrlife/ ведём на инструменты для сетевиков
    if (a.ctaInternal && (a.ctaInternal.url || '').includes('/mwrlife/')) a.ctaInternal = { url: S + '/predlozheniya/crm-setevika/', label: 'Инструменты для сетевиков' };
    // ссылки «читайте также» на снятые статьи убираем у всех
    if (Array.isArray(a.relatedSlugs)) a.relatedSlugs = a.relatedSlugs.filter(s => !off.has(s));
  }
}

module.exports = { UNPUBLISH, KEEP, apply };
