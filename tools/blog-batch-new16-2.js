// Одиночная статья: подписка на кофе и абонемент на напитки для кофейни.
// Модели, расчёт по худшему случаю, правила, QR-учёт, чеки 54-ФЗ, автосписание.
// Ведёт на digital-платформу для кофейни.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-10';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_KOFE_PODPISKA = {
  title: 'Подписка на кофе под ключ',
  services: [
    { icon: 'ph-fill ph-calculator', label: 'Расчёт тарифов по худшему случаю' },
    { icon: 'ph-fill ph-qr-code', label: 'Подписка в боте или PWA с QR-кодом' },
    { icon: 'ph-fill ph-receipt', label: 'Связка с кассой: чеки предоплаты и зачёта' },
    { icon: 'ph-fill ph-arrows-clockwise', label: 'Автосписание через ваш эквайринг' },
  ],
  ctaLabel: 'Обсудить подписку для кофейни', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'podpiska-na-kofe-abonement-kofeyni-2026',
    category: 'industries',
    published: true,
    title: 'Подписка на кофе: как кофейне продавать абонемент на напитки',
    metaTitle: 'Подписка на кофе: абонемент на напитки для кофейни',
    metaDescription: 'Подписка на кофе для кофейни: модели абонемента, расчёт цены по себестоимости, QR-учёт у стойки, чеки по 54-ФЗ и автосписание через эквайринг.',
    metaKeywords: 'подписка на кофе, абонемент на кофе в кофейне, кофейная подписка, абонемент на напитки, подписка кофейня QR, чек предоплата 54-ФЗ, рекуррентные платежи',
    excerpt: 'Подписка на кофе даёт кофейне деньги вперёд и постоянного гостя. Разбираю три модели абонемента, расчёт цены по худшему случаю, правила против перерасхода, учёт по QR у стойки, чеки по 54-ФЗ и автосписание.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-coffee',
    tags: ['кофейня', 'подписка', 'абонементы', 'общепит', 'лояльность'],
    toc: toc(
      ['komu-podhodit', 'Подписка на кофе: кому она подходит'],
      ['modeli', 'Три модели абонемента на кофе'],
      ['ekonomika', 'Как посчитать цену и не уйти в минус'],
      ['pravila', 'Правила, которые защищают от перерасхода'],
      ['primery', 'Как это устроено у Panera и Pret'],
      ['prodazha', 'Как продавать: QR на кассе, бот или PWA'],
      ['uchet', 'Учёт у стойки: QR, скан, остаток'],
      ['cheki-54-fz', 'Чеки по 54-ФЗ при продаже подписки'],
      ['avtospisanie', 'Автосписание: что нужно от эквайринга'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['abonementy-i-pakety-uslug-2026', 'avtospisanie-abonementov-podpiska-2026', 'it-dlya-kofeyni-obshchepita-2026', 'pwa-kofeyni-geymifikaciya-keys-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/kofeynya/', label: 'Digital-платформа для кофейни' },
    servicesOffer: SVC_KOFE_PODPISKA,
    contentHtml: C('podpiska-na-kofe-abonement-kofeyni-2026'),
  },
];
