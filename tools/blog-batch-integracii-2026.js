// Батч «интеграции и автоматизация под заказ» (4 статьи).
// Две полные (1С, голосовой робот — дорогие услуги, нужен объём и доверие)
// и две короткие ~4 мин (госзакупки, API маркетплейсов).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-30';

const SVC_1C = {
  title: 'Интеграция 1С и сайта под ключ',
  services: [
    { icon: 'ph-fill ph-plugs-connected', label: 'Обмен товарами, остатками и ценами' },
    { icon: 'ph-fill ph-shopping-cart', label: 'Заказы с сайта прямо в 1С' },
    { icon: 'ph-fill ph-arrows-clockwise', label: 'Синхронизация статусов и оплат' },
    { icon: 'ph-fill ph-wrench', label: 'Поддержка и доработка обмена' },
  ],
  ctaLabel: 'Обсудить интеграцию', ctaUrl: 'https://t.me/chimitdorzhi',
};

const SVC_VOICE = {
  title: 'Голосовой робот под ключ',
  services: [
    { icon: 'ph-fill ph-phone-call', label: 'Обзвон базы: напоминания и опросы' },
    { icon: 'ph-fill ph-headset', label: 'Приём входящих без оператора' },
    { icon: 'ph-fill ph-brain', label: 'Распознавание речи и сценарии' },
    { icon: 'ph-fill ph-chart-line-up', label: 'Отчёты по звонкам и конверсии' },
  ],
  ctaLabel: 'Обсудить голосового робота', ctaUrl: 'https://t.me/chimitdorzhi',
};

const SVC_TENDER = {
  title: 'Мониторинг закупок под ключ',
  services: [
    { icon: 'ph-fill ph-magnifying-glass', label: 'Парсер площадок под ваши ОКПД' },
    { icon: 'ph-fill ph-bell-ringing', label: 'Уведомления в Telegram и MAX' },
    { icon: 'ph-fill ph-funnel', label: 'Фильтры по цене, региону, заказчику' },
    { icon: 'ph-fill ph-table', label: 'Выгрузка и история закупок' },
  ],
  ctaLabel: 'Обсудить мониторинг', ctaUrl: 'https://t.me/chimitdorzhi',
};

const SVC_MP = {
  title: 'Интеграция с маркетплейсами',
  services: [
    { icon: 'ph-fill ph-package', label: 'Остатки и цены из вашей системы в WB/Ozon' },
    { icon: 'ph-fill ph-chat-centered-text', label: 'Сбор отзывов и вопросов в одно окно' },
    { icon: 'ph-fill ph-receipt', label: 'Контроль штрафов и удержаний' },
    { icon: 'ph-fill ph-chart-bar', label: 'Свод по прибыли по каждому SKU' },
  ],
  ctaLabel: 'Обсудить интеграцию', ctaUrl: 'https://t.me/chimitdorzhi',
};

const toc = (...p) => p.map(([id, text]) => ({ id, text }));

module.exports = [
  // ВНИМАНИЕ: статья integraciya-sayta-s-1c-2026 живёт в blog-batch-sos-abonentka-2026.js
  // (там же обновлены toc и readingMinutes под расширенный контент) — здесь её быть не должно,
  // иначе получится дубль slug.
  {
    slug: 'golosovoy-robot-obzvon-2026',
    category: 'development',
    published: true,
    title: 'Голосовой робот: обзвон и приём звонков без колл-центра',
    metaTitle: 'Голосовой робот: обзвон и приём звонков',
    metaDescription: 'Голосовой робот обзванивает базу и принимает входящие вместо оператора: напоминания, подтверждение заказов, опросы.',
    metaKeywords: 'голосовой робот, автообзвон, робот обзвона, голосовой бот, приём звонков без оператора, синтез речи, распознавание речи, телефония для бизнеса',
    excerpt: 'Робот звонит клиентам с напоминанием о записи, подтверждает заказы и принимает входящие голосом. Разбираю, когда это дешевле живого колл-центра, что нужно для запуска и где робот бесит клиентов.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 9,
    heroIcon: 'ph-fill ph-phone-call',
    tags: ['голосовой робот', 'автообзвон', 'телефония', 'автоматизация', '2026'],
    toc: toc(
      ['chto-eto', 'Что умеет голосовой робот'],
      ['scenarii', 'Рабочие сценарии'],
      ['kak-rabotaet', 'Как это работает внутри'],
      ['kogda-okupaetsya', 'Когда окупается против оператора'],
      ['gde-besit', 'Где робот раздражает клиентов'],
      ['zakon', 'Что требует закон'],
      ['zapusk', 'Что нужно для запуска'],
      ['faq', 'FAQ'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['chatbot-telegram-max-vk-2026', 'voronka-prodazh-b2b-2026', 'crm-dlya-malogo-biznesa-2026', 'ai-agenty-vs-chatboty-2027'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/golosovoy-ai-bot/', label: 'Запустить голосового робота' },
    servicesOffer: SVC_VOICE,
    contentHtml: C('golosovoy-robot-obzvon-2026'),
  },
  {
    slug: 'monitoring-goszakupok-44fz-2026',
    category: 'development',
    published: true,
    shortForm: true,
    title: 'Мониторинг госзакупок 44-ФЗ: как не упустить тендер',
    metaTitle: 'Мониторинг госзакупок 44-ФЗ: не упустить тендер',
    metaDescription: 'Как настроить автоматический мониторинг закупок по 44-ФЗ: фильтры по ОКПД и региону, уведомления в мессенджер за минуты.',
    metaKeywords: 'мониторинг госзакупок, 44-фз, поиск тендеров, парсер закупок, уведомления о тендерах, ОКПД2, ЕИС закупки, бот для тендеров',
    excerpt: 'Подходящая закупка вышла в пятницу вечером, а вы увидели её в среду — когда подавать поздно. Разбираю, как настроить мониторинг под свои ОКПД и получать уведомления за минуты.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 4,
    heroIcon: 'ph-fill ph-gavel',
    tags: ['госзакупки', '44-ФЗ', 'тендеры', 'парсер', '2026'],
    toc: toc(
      ['problema', 'Почему тендеры уходят мимо'],
      ['kak-rabotaet', 'Как работает мониторинг'],
      ['servisy-ili-svoy', 'Готовый сервис или свой парсер'],
      ['chto-nastroit', 'Что настроить, чтобы не тонуть в шуме'],
      ['faq', 'FAQ'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['reestr-rossiyskogo-po-2026', 'elektronnaya-podpis-biznes-2026', 'importozameshchenie-po-2026', 'voronka-prodazh-b2b-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/ai-dlya-tenderov/', label: 'Настроить мониторинг закупок' },
    servicesOffer: SVC_TENDER,
    contentHtml: C('monitoring-goszakupok-44fz-2026'),
  },
  {
    slug: 'integraciya-s-api-wb-ozon-2026',
    category: 'development',
    published: true,
    shortForm: true,
    title: 'Интеграция с API Wildberries и Ozon: остатки, цены, отзывы',
    metaTitle: 'Интеграция с API Wildberries и Ozon: остатки и цены',
    metaDescription: 'Остатки и цены на WB и Ozon вручную? Как связать учётную систему с кабинетами через API: автообновление, сбор отзывов, контроль штрафов.',
    metaKeywords: 'api wildberries, api ozon, интеграция с маркетплейсом, синхронизация остатков wb, автообновление цен ozon, парсер отзывов маркетплейс',
    excerpt: 'Остатки ведутся в Excel, цены меняются руками в двух кабинетах, отзывы читаются по вечерам. Разбираю, что умеет API маркетплейсов и как связать его со своей учётной системой.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 4,
    heroIcon: 'ph-fill ph-plugs',
    tags: ['Wildberries', 'Ozon', 'API', 'интеграция', '2026'],
    toc: toc(
      ['problema', 'Чем плох ручной режим'],
      ['chto-umeet-api', 'Что умеет API маркетплейсов'],
      ['kak-svyazat', 'Как связать со своей системой'],
      ['predely', 'Пределы и подводные камни'],
      ['faq', 'FAQ'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['biznes-na-marketpleysah-2027', 'analitika-wildberries-servisy-2026', 'svoy-magazin-vs-wildberries-ozon-2026', 'avtomatizaciya-riteyla-seti-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/avtomatizaciya-sellera-wb-ozon/', label: 'Автоматизировать работу селлера' },
    servicesOffer: SVC_MP,
    contentHtml: C('integraciya-s-api-wb-ozon-2026'),
  },
];
