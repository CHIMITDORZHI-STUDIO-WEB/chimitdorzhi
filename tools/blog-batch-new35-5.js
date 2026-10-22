// Одиночная статья (new35-5): сайт салона красоты или спа в Дубае, онлайн-запись с выбором мастера, депозит, цены с VAT, лицензия, блогеры.
// Запросы: «сайт салона красоты в Дубае», «онлайн-запись салон Дубай», «beauty salon website Dubai».
// Опора: VAT Decree-Law No. 8 of 2017 (ст. 38, 76) и памятка FTA «Get to know your Tax Obligations» (tax.gov.ae),
// Dubai Municipality DM-HSD-GU77-SBBCG2 V4 от 09.01.2025 (разд. 7, 7-1, 8-3), u.ae (PDPL, eCommerce, проверка лицензий DET),
// NMA: FAQ (декрет-закон № 11 от 2025) и страница услуги разрешения рекламодателя, Google Maps User Contributed Content Policy.
// category 'industries': нишевая статья, как соседняя sayt-kliniki-v-dubae-dha-medicinskaya-reklama-2026.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-23';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_SALON_UAE = {
  title: 'Сайт салона красоты в Дубае',
  services: [
    { icon: 'ph-fill ph-calendar-check', label: 'Онлайн-запись с выбором мастера, анкетой и депозитом' },
    { icon: 'ph-fill ph-translate', label: 'Английская, арабская и русская версии сайта' },
    { icon: 'ph-fill ph-credit-card', label: 'Оплата картой и Apple Pay, цены с НДС 5%' },
    { icon: 'ph-fill ph-bell', label: 'Напоминания в мессенджере и сбор отзывов в Google Maps' },
  ],
  ctaLabel: 'Обсудить сайт салона', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'sayt-salona-krasoty-v-dubae-zapis-2026',
    category: 'industries',
    published: true,
    title: 'Сайт салона красоты в Дубае: онлайн-запись, депозит, VAT и реклама',
    metaTitle: 'Сайт салона красоты в Дубае: запись, депозит и VAT',
    metaDescription: 'Сайт салона красоты в Дубае: онлайн-запись к мастеру, депозит, цены с VAT 5%, три языка, лицензия и граница с DHA, блогеры с разрешением NMA, отзывы.',
    metaKeywords: 'сайт салона красоты в Дубае, онлайн-запись салон Дубай, beauty salon website Dubai, сайт спа Дубай, депозит за запись салон, цены с VAT ОАЭ, разрешение рекламодателя NMA',
    excerpt: 'Что нужно сайту салона красоты или спа в Дубае: онлайн-запись с выбором мастера и анкетой по гайду Dubai Municipality, депозит и правила отмены, английский, арабский и русский, цены с НДС 5%, лицензия и граница с процедурами DHA, блогеры с разрешением рекламодателя, отзывы в Google Maps, PDPL и напоминания.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-scissors',
    tags: ['ОАЭ', 'Дубай', 'салон красоты', 'онлайн-запись', 'сайт', '2026'],
    toc: toc(
      ['zapis', 'Онлайн-запись с выбором мастера'],
      ['depozit', 'Депозит и предоплата против неявок'],
      ['yazyki', 'Английский, арабский и русский'],
      ['ceny-s-nds', 'Цены с НДС 5% на сайте'],
      ['licenziya', 'Лицензия салона и граница с клиникой'],
      ['reklama', 'Реклама у блогеров: разрешение рекламодателя'],
      ['otzyvy', 'Отзывы и карточка в Google Maps'],
      ['dannye', 'Данные клиентов и анкета перед процедурой'],
      ['napominaniya', 'Напоминания в мессенджерах'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит сайт салона в Дубае'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['it-dlya-salona-krasoty-2026', 'sayt-dlya-biznesa-v-oae-yazyki-oplata-domen-zakon-2026', 'onlayn-oplata-na-sayte-v-oae-platezhnye-shlyuzy-2026', 'sayt-kliniki-v-dubae-dha-medicinskaya-reklama-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/development/sites/', label: 'Разработка сайта' },
    servicesOffer: SVC_SALON_UAE,
    contentHtml: C('sayt-salona-krasoty-v-dubae-zapis-2026'),
  },
];
