// Одиночная статья: онлайн-запись на сайте, виджет YCLIENTS или своя форма.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-14';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_ZAPIS = {
  title: 'Онлайн-запись на сайте под ваши правила',
  services: [
    { icon: 'ph-fill ph-calendar-check', label: 'Виджет записи в дизайне вашего сайта' },
    { icon: 'ph-fill ph-code', label: 'Своя форма записи с календарём и предоплатой' },
    { icon: 'ph-fill ph-robot', label: 'Бот записи в Telegram и MAX' },
    { icon: 'ph-fill ph-shield-check', label: 'Проверка согласий и хранения данных по 152-ФЗ' },
  ],
  ctaLabel: 'Подобрать онлайн-запись', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'onlayn-zapis-na-sayte-vidzhet-yclients-ili-svoya-forma-2026',
    category: 'development',
    published: true,
    title: 'Онлайн запись на сайт: виджет YCLIENTS или своя форма записи',
    metaTitle: 'Онлайн запись на сайт, виджет: YCLIENTS или своя форма',
    metaDescription: 'Онлайн запись на сайт: виджет YCLIENTS или своя форма. Как встраивается, что с 152-ФЗ и скоростью, когда нужна своя запись и что даёт гибрид.',
    metaKeywords: 'онлайн запись на сайт виджет, yclients или своя запись, виджет yclients на сайт, своя форма онлайн записи, онлайн запись 152-фз, онлайн запись для салона, виджет записи скорость сайта',
    excerpt: 'Виджет YCLIENTS запускается за вечер, своя форма подчиняется вашим правилам. Разбираю по справке и политике сервиса, как встраивается виджет, что с 152-ФЗ и скоростью сайта, когда нужна своя запись и почему гибрид чаще выигрывает.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-calendar-check',
    tags: ['онлайн-запись', 'YCLIENTS', 'виджет', '152-ФЗ', 'сайт'],
    toc: toc(
      ['vidzhet', 'Онлайн запись на сайт: что даёт виджет YCLIENTS'],
      ['minusy', 'Минусы виджета: дизайн, скорость, данные, цена'],
      ['152-fz', '152-ФЗ: кто оператор, согласие и где лежат данные'],
      ['svoya-forma', 'Когда нужна своя форма записи'],
      ['skorost', 'Скорость и SEO: iframe, Core Web Vitals, ленивая загрузка'],
      ['gibrid', 'Гибрид: виджет, бот и выгрузка'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['yclients-dikidi-ili-svoy-bot-2026', 'yclients-bot-max-napominaniya-2026', 'lending-massazhista-zapis-predoplata-keys-2026', 'neyavki-na-zapis-predoplata-napominaniya-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/zapis-salon-krasoty/', label: 'Онлайн-запись для салона' },
    servicesOffer: SVC_ZAPIS,
    contentHtml: C('onlayn-zapis-na-sayte-vidzhet-yclients-ili-svoya-forma-2026'),
  },
];
