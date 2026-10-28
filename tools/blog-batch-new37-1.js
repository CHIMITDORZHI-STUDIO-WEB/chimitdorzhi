// Одиночная статья (new37-1): стандартный OData в 1С для приложения, бота или ИИ без расширения конфигурации.
// Запросы: «odata 1с», «стандартный интерфейс odata 1с», «подключить приложение к 1с без доработки», «rest api 1с».
// Опора: кейсы ii-buhgalter-1s-stend-foruma-keys-2026 и zadachi-sotrudnikam-iz-1s-android-predlozhenie-keys-2026; kb.1ci.com (публикация стандартного REST API), ИТС intgr83.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-29';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_ODATA = {
  title: 'Подключение приложения, бота или ИИ к 1С',
  services: [
    { icon: 'ph-fill ph-plugs-connected', label: 'Публикация стандартного OData и состав объектов скриптом' },
    { icon: 'ph-fill ph-device-mobile', label: 'Приложение сотрудника или бот поверх типовой 1С' },
    { icon: 'ph-fill ph-robot', label: 'ИИ-помощник над данными 1С с обезличиванием' },
    { icon: 'ph-fill ph-puzzle-piece', label: 'HTTP-сервис в расширении, когда OData мало' },
  ],
  ctaLabel: 'Обсудить интеграцию с 1С', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'odata-1s-podklyuchit-prilozhenie-bez-rasshireniya-2026',
    category: 'development',
    published: true,
    title: 'OData в 1С: как подключить приложение, бота или ИИ без расширения',
    metaTitle: 'OData в 1С: приложение, бот или ИИ без доработки базы',
    metaDescription: 'Стандартный интерфейс OData в 1С: как опубликовать, какие объекты видны, ограничения PATCH и PUT, фильтров, прав и лицензий, когда нужен HTTP-сервис.',
    metaKeywords: 'odata 1с, стандартный интерфейс odata, rest api 1с, подключить приложение к 1с, бот для 1с, ии и 1с, интеграция 1с без расширения, http-сервис 1с',
    excerpt: 'Стандартный интерфейс OData включается при публикации базы 1С и даёт внешнему приложению, боту или нейросети чтение и запись без расширения конфигурации. Как его опубликовать, какие объекты видны, где ломаются PATCH и PUT, фильтры, права и лицензии, и когда всё же нужен HTTP-сервис. На примере двух моих проектов.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-plugs-connected',
    tags: ['1С', 'OData', 'интеграция', 'мобильное приложение', 'ИИ'],
    toc: toc(
      ['chto-takoe-odata', 'Что такое стандартный интерфейс OData в 1С'],
      ['kak-opublikovat', 'Как опубликовать OData и включить нужные объекты'],
      ['chto-vidno', 'Какие объекты видны и что с ними можно делать'],
      ['ogranicheniya', 'Ограничения: PATCH и PUT, фильтры, права, лицензии'],
      ['kogda-http-servis', 'Когда нужен HTTP-сервис или расширение'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит подключить приложение или бота к 1С'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['ii-buhgalter-1s-stend-foruma-keys-2026', 'zadachi-sotrudnikam-iz-1s-android-predlozhenie-keys-2026', 'http-servis-1c-dlya-prilozheniya-2026', 'vygruzka-iz-1s-v-sql-i-bi-konsolidaciya-neskolkih-baz-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/business-automation/', label: 'Автоматизация бизнеса' },
    servicesOffer: SVC_ODATA,
    contentHtml: C('odata-1s-podklyuchit-prilozhenie-bez-rasshireniya-2026'),
  },
];
