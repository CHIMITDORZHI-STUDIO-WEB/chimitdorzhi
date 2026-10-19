// Одиночная статья (new32-2): сайт на арабском и английском для компании в ОАЭ.
// Запросы: «сайт на арабском языке», «RTL вёрстка сайта», «сайт для компании в Дубае на арабском».
// Опора: u.ae (Consumer protection, Federal Law No. 15 of 2020), W3C qa-html-dir, inline-bidi-markup, alreq;
// MDN dir, CSS logical properties, Intl.NumberFormat; Google Search Central (localized versions, multi-regional sites).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-19';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_RTL = {
  title: 'Сайт на арабском и английском для компании в ОАЭ',
  services: [
    { icon: 'ph-fill ph-translate', label: 'Арабская версия: RTL-вёрстка на одном шаблоне с английской' },
    { icon: 'ph-fill ph-globe', label: 'Адреса /ar/ и /en/, hreflang, x-default и карта сайта' },
    { icon: 'ph-fill ph-chat-circle-dots', label: 'Перевод с глоссарием и вычиткой носителем языка' },
    { icon: 'ph-fill ph-phone', label: 'Формы с проверкой номеров +971 и подписями на двух языках' },
  ],
  ctaLabel: 'Обсудить арабскую версию сайта', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'sayt-na-arabskom-i-angliyskom-rtl-oae-2026',
    category: 'development',
    published: true,
    title: 'Сайт на арабском и английском для компании в ОАЭ: RTL и поиск',
    metaTitle: 'Сайт на арабском языке: RTL-вёрстка и SEO для ОАЭ',
    metaDescription: 'Сайт на арабском и английском для компании в Дубае: когда арабский нужен по закону, RTL-вёрстка, шрифты и цифры, перевод, hreflang, формы с +971.',
    metaKeywords: 'сайт на арабском языке, rtl вёрстка сайта, сайт для компании в дубае на арабском, арабская версия сайта, hreflang арабский, сайт оаэ два языка, dir rtl',
    excerpt: 'Как сделать арабскую версию сайта компании в ОАЭ: когда арабский требуется по закону о защите прав потребителей, атрибуты lang и dir, что зеркалить и что нет, логические свойства CSS, арабские шрифты и цифры, перевод с вычиткой носителем, отдельные адреса, hreflang и x-default, телефоны +971.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-translate',
    tags: ['ОАЭ', 'арабский язык', 'RTL', 'мультиязычный сайт', 'hreflang', '2026'],
    toc: toc(
      ['zachem', 'Зачем компании в ОАЭ сайт на арабском'],
      ['lang-dir', 'Атрибуты lang и dir: с чего начинается RTL-вёрстка'],
      ['zerkalo', 'Зеркалирование интерфейса: что переворачивать'],
      ['logicheskie', 'Логические свойства CSS вместо left и right'],
      ['shrifty-cifry', 'Шрифты, цифры и даты на арабском'],
      ['perevod', 'Перевод: переводчик, машина и проверка носителем'],
      ['seo', 'SEO для двух языков: адреса, hreflang и x-default'],
      ['formy', 'Формы и телефоны +971'],
      ['testirovanie', 'Как проверить арабскую версию перед запуском'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит сайт на арабском и английском'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['sayt-dlya-biznesa-v-oae-yazyki-oplata-domen-zakon-2026', 'sayt-i-prilozhenie-na-neskolkih-yazykah-chto-perevodit-seo-2026', 'nds-i-elektronnye-scheta-v-oae-e-invoicing-2026', 'chetyre-demo-sayta-agentstva-nedvizhimosti-dubay-keys-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/development/sites/', label: 'Разработка сайтов' },
    servicesOffer: SVC_RTL,
    contentHtml: C('sayt-na-arabskom-i-angliyskom-rtl-oae-2026'),
  },
];
