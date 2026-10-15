// Одиночная статья (серия new28, коммерческий интент): приложение для клуба
// по подписке, из чего состоит и сколько стоит. Опора на кейс демо клуба целей,
// цены только из prices-data.js. Ведёт на предложение «клуб по подписке».
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-16';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_KLUB = {
  title: 'Разработка клуба по подписке',
  services: [
    { icon: 'ph-fill ph-robot', label: 'Бот с оплатой и доступом в чат' },
    { icon: 'ph-fill ph-app-window', label: 'Мини-приложение с целями и отметками' },
    { icon: 'ph-fill ph-arrows-clockwise', label: 'Автосписание и закрытие доступа' },
    { icon: 'ph-fill ph-chart-line-up', label: 'Админка и аналитика удержания' },
  ],
  ctaLabel: 'Обсудить клуб', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'prilozhenie-dlya-kluba-po-podpiske-cena-2026',
    category: 'development',
    published: true,
    title: 'Приложение для клуба по подписке: сколько стоит бот и мини-приложение',
    metaTitle: 'Приложение для клуба по подписке: цена разработки 2026',
    metaDescription: 'Сколько стоит приложение для клуба по подписке: бот от 30 000 ₽, мини-приложение от 150 000 ₽, своя платформа от 400 000 ₽. Что внутри и сроки.',
    metaKeywords: 'приложение для клуба по подписке, разработка клуба по подписке цена, бот для клуба по подписке, мини-приложение для клуба, автосписание подписки, админка клуба',
    excerpt: 'Разбираю, из чего состоит приложение для клуба по подписке: автосписание, вход через мессенджер, цели и отметки, кураторы, рассылки, админка и аналитика удержания. Три варианта по бюджету, сравнение с готовыми сервисами и пример рабочего демо за четыре дня.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-crown',
    tags: ['клуб по подписке', 'Telegram Mini App', 'бот', 'автосписание', 'цена разработки'],
    toc: toc(
      ['prilozhenie-dlya-kluba', 'Приложение для клуба по подписке: кому оно нужно'],
      ['chto-vnutri', 'Что внутри'],
      ['varianty', 'Три варианта по бюджету'],
      ['gotovye-servisy', 'Готовые сервисы подписок или своя разработка'],
      ['cena', 'Из чего складывается цена'],
      ['keys', 'Пример: демо клуба целей за четыре дня'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ot-vas', 'Что нужно от вас'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['klub-lichnyh-celey-po-podpiske-demo-keys-2026', 'zakrytyy-klub-po-podpiske-2026', 'avtospisanie-abonementov-podpiska-2026', 'telegram-mini-app-chto-eto-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/klub-po-podpiske-ekspert/', label: 'Обсудить клуб по подписке' },
    servicesOffer: SVC_KLUB,
    contentHtml: C('prilozhenie-dlya-kluba-po-podpiske-cena-2026'),
  },
];
