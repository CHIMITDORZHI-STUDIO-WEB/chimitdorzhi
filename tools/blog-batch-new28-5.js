// Одиночная статья серии new28 (коммерческий интент), 16.10.2026:
// сервис персональных разборов для астролога, нумеролога, Human Design.
// Опора на кейс personalnye-razbory-po-date-rozhdeniya-keys-2026, цены из prices-data.js.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-16';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_RAZBORY = {
  title: 'Сервис разборов для эксперта',
  services: [
    { icon: 'ph-fill ph-calculator', label: 'Расчёт по вашей методике' },
    { icon: 'ph-fill ph-file-pdf', label: 'Шаблон PDF A4 и слайды' },
    { icon: 'ph-fill ph-robot', label: 'Бот с оплатой и выдачей файла' },
    { icon: 'ph-fill ph-shield-check', label: 'Согласия и данные по 152-ФЗ' },
  ],
  ctaLabel: 'Обсудить сервис разборов', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'servis-personalnyh-razborov-dlya-astrologa-2026',
    category: 'industries',
    published: true,
    title: 'Программа для астролога под ключ: сервис разборов с PDF и слайдами',
    metaTitle: 'Программа для астролога: расчёт карты, PDF и слайды',
    metaDescription: 'Программа для астролога под ключ: автоматический расчёт натальной карты, PDF A4 и слайды по вашему шаблону, продажа через бота. Цены от 60 000 ₽.',
    metaKeywords: 'программа для астролога, автоматический расчёт натальной карты, сервис персональных разборов, программа для нумеролога, расчёт human design, заказать программу для астролога',
    excerpt: 'Сервис персональных разборов для астролога, нумеролога и специалиста по Human Design: расчёт по дате, времени и месту рождения с проверкой на эталонных картах, PDF A4 и слайды по вашему шаблону, совместимость пар, продажа через бота. Что входит, сколько стоит и что нужно от вас.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-moon-stars',
    tags: ['астрология', 'продукт эксперта', 'PDF', 'автоматизация вёрстки', 'боты'],
    toc: toc(
      ['programma-dlya-astrologa', 'Программа для астролога: кому подходит и что вы получите'],
      ['chto-vhodit', 'Что входит в сервис разборов'],
      ['raschet', 'Автоматический расчёт натальной карты: как я проверяю точность'],
      ['kak-ya-delayu', 'Как я это делаю: этапы работы'],
      ['cena', 'Из чего складывается цена'],
      ['ot-vas', 'Что нужно от вас'],
      ['pravo', 'Данные клиентов, оферта и чеки'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['personalnye-razbory-po-date-rozhdeniya-keys-2026', 'chat-bot-dlya-ezoterika-2026', 'personalnye-razbory-eksperta-kak-avtomatizirovat-raschet-i-slaydy-2026', 'priem-oplaty-dlya-praktika-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/ai-bot-raskladov-ezoterika/', label: 'Обсудить продукт для эксперта' },
    servicesOffer: SVC_RAZBORY,
    contentHtml: C('servis-personalnyh-razborov-dlya-astrologa-2026'),
  },
];
