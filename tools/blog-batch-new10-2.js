// Одиночная статья: как принять оплату от туристов из Китая в 2026 (Alipay, WeChat Pay, UnionPay).
// Статус приёма проверен по первоисточникам на 10.10.2026, ведёт на IT для работы с Китаем.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-10';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_CNPAY = {
  title: 'Оплата и сервис для гостей из Китая',
  services: [
    { icon: 'ph-fill ph-credit-card', label: 'Приём платежей: СБП, касса, ссылки' },
    { icon: 'ph-fill ph-translate', label: 'Перевод сайта, меню и табличек' },
    { icon: 'ph-fill ph-robot', label: 'Бот на китайском для брони' },
    { icon: 'ph-fill ph-qr-code', label: 'QR-меню и страница оплаты' },
  ],
  ctaLabel: 'Обсудить приём оплаты', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'kak-prinimat-alipay-i-wechat-pay-v-rossii-2026',
    category: 'industries',
    published: true,
    title: 'Как принимать Alipay в России в 2026: оплата от туристов из Китая',
    metaTitle: 'Как принимать Alipay в России: WeChat Pay и UnionPay 2026',
    metaDescription: 'Как принимать Alipay и WeChat Pay в России в 2026 году: статус на октябрь, UnionPay и санкции, как платит китайский турист и что сделать продавцу.',
    metaKeywords: 'как принимать alipay в россии, оплата wechat pay в россии для бизнеса, оплата от китайских туристов, unionpay в россии, приём платежей от туристов из китая, китайские туристы оплата',
    excerpt: 'Alipay и WeChat Pay в России на октябрь 2026 года на паузе у партнёра, UnionPay проходит через раз. Разбираю по первоисточникам, чем на самом деле платит турист из Китая и что сделать гостинице, кафе, магазину и турфирме, чтобы он смог заплатить.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 7,
    heroIcon: 'ph-fill ph-qr-code',
    tags: ['Китай', 'въездной туризм', 'приём платежей', 'Alipay', 'UnionPay'],
    toc: toc(
      ['kak-prinimat-alipay', 'Как принимать Alipay в России: что есть на октябрь 2026'],
      ['wechat-pay-unionpay', 'WeChat Pay и UnionPay: где работает, где нет'],
      ['kak-platit-turist', 'Как китайский турист платит в России на практике'],
      ['chto-sdelat-prodavcu', 'Что сделать продавцу: вывеска, ценник, сайт, бронь'],
      ['kak-ya-delayu', 'Как я подключаю приём оплаты от туристов из Китая'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['sayt-oteley-na-kitayskom-2026', 'gostinica-kp-dvuyazychnoe-predlozhenie-keys-2026', 'ekvayring-vs-sbp-platezhnye-ssylki-2026', 'it-dlya-mini-gostinicy-hostela-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/china-it/', label: 'IT для работы с Китаем' },
    servicesOffer: SVC_CNPAY,
    contentHtml: C('kak-prinimat-alipay-i-wechat-pay-v-rossii-2026'),
  },
];
