// Одиночная статья (new40-5): когда реверс-инжиниринг законен, ст. 1280 ГК РФ, отличие от обхода защиты (ст. 1299 ГК, ст. 272, 273 УК).
// Опора: тексты ст. 1280, 1299 ГК РФ, ст. 272, 273 УК РФ (consultant.ru, zakonrf.info, garant.ru). Не юридическая консультация.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-31';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC = {
  title: 'Что я делаю под ключ',
  services: [
    { icon: 'ph-fill ph-magnifying-glass', label: 'Технический аудит системы без документации' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Подключение к сайту, боту и учёту через штатные интерфейсы' },
    { icon: 'ph-fill ph-file-text', label: 'Паспорт системы и передача знаний заказчику' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Поддержка после запуска' },
  ],
  ctaLabel: 'Обсудить задачу', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'kogda-reverse-inzhiniring-zakonen-st-1280-gk-rf-2026',
    category: 'expert',
    published: true,
    title: 'Когда реверс-инжиниринг законен: ст. 1280 ГК РФ для бизнеса',
    metaTitle: 'Реверс-инжиниринг по закону: ст. 1280 ГК РФ, разбор',
    metaDescription: 'Когда декомпилирование программы законно по ст. 1280 ГК РФ, чем оно отличается от обхода защиты (ст. 1299 ГК, 272, 273 УК) и как оформить поручение исполнителю.',
    metaKeywords: 'реверс-инжиниринг законно, декомпилирование программы закон, статья 1280 ГК РФ, совместимость программ, обход технических средств защиты, лицензионное соглашение',
    excerpt: 'Разъяснение для владельца бизнеса: что разрешает ст. 1280 ГК РФ владельцу программы, где проходит граница с обходом защиты по ст. 1299 ГК и ст. 272, 273 УК, что делать со своим ПО и данными и как письменно поручить разбор исполнителю. Не юридическая консультация.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-scales',
    tags: ['реверс-инжиниринг', 'ст. 1280 ГК РФ', 'лицензия на ПО', 'совместимость', 'передача проекта'],
    toc: toc(
      ['situaciya', 'Когда вообще встаёт этот вопрос'],
      ['st-1280', 'Что разрешает статья 1280 ГК РФ'],
      ['otlichie', 'Чем это отличается от обхода защиты'],
      ['chto-mozhno', 'Что можно'],
      ['chego-ne-delayu', 'Чего я не делаю'],
      ['licenziya', 'Лицензионное соглашение и договор: что смотреть до начала'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['poruchenie', 'Как оформить поручение исполнителю письменно'],
      ['ceny', 'Сколько это стоит'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['ii-buhgalter-1s-stend-foruma-keys-2026', 'konverter-legacy-low-code-keys-2026', 'priemka-raboty-podryadchika-2026', 'kak-ne-stat-zalozhnikom-podryadchika-dostupy-repozitoriy-dokumentaciya-2026', 'podklyuchit-staruyu-programmu-bez-api-pyat-sposobov-2026', 'razobrat-sistemu-bez-dokumentacii-esli-razrabotchik-ushyol-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/it-audit/', label: 'Технический аудит' },
    servicesOffer: SVC,
    contentHtml: C('kogda-reverse-inzhiniring-zakonen-st-1280-gk-rf-2026'),
  },
];
