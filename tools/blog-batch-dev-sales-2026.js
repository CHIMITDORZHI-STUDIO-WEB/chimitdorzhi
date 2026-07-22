// Батч: коммерческие «заказать разработку» (9 коротких статей ~4 мин, shortForm).
// Ведут на услуги (боты MAX / автоматизация / разработка) + Telegram/MAX.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-22';
const SVC = 'https://chimitdorzhi.tech/services';

const SVC_BOT = {
  title: 'Боты и мини-приложения под ключ',
  services: [
    { icon: 'ph-fill ph-chat-circle-dots', label: 'Чат-бот в MAX и Telegram' },
    { icon: 'ph-fill ph-sparkle', label: 'AI-бот на GigaChat / YandexGPT' },
    { icon: 'ph-fill ph-app-window', label: 'Мини-приложение внутри мессенджера' },
    { icon: 'ph-fill ph-funnel', label: 'Автоворонка и рассылки' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция с CRM, 1С, оплатой' },
  ],
  ctaLabel: 'Заказать бота', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_AUTO = {
  title: 'Автоматизация и интеграции',
  services: [
    { icon: 'ph-fill ph-code', label: 'Скрипты для рутинных задач' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция API и сервисов' },
    { icon: 'ph-fill ph-download-simple', label: 'Парсинг и сбор данных' },
    { icon: 'ph-fill ph-table', label: 'Связка Excel, 1С, CRM, маркетплейсов' },
    { icon: 'ph-fill ph-chart-line', label: 'Отчёты и автоматические выгрузки' },
  ],
  ctaLabel: 'Обсудить задачу', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_DEV = {
  title: 'Разработка под ключ',
  services: [
    { icon: 'ph-fill ph-globe', label: 'Сайты и веб-сервисы' },
    { icon: 'ph-fill ph-wrench', label: 'Доработка чужого кода' },
    { icon: 'ph-fill ph-rocket-launch', label: 'MVP и SaaS-сервисы' },
    { icon: 'ph-fill ph-device-mobile', label: 'Мобильные приложения' },
    { icon: 'ph-fill ph-robot', label: 'Боты и автоматизация' },
  ],
  ctaLabel: 'Заказать разработку', ctaUrl: 'https://t.me/chimitdorzhi',
};

const CTA_BOT = { url: `${SVC}/telegram-bots/`, label: 'Бот под ключ' };
const CTA_AUTO = { url: `${SVC}/business-automation/`, label: 'Автоматизация под ключ' };
const CTA_DEV = { url: `${SVC}/web-development/`, label: 'Разработка под ключ' };

const T = (items) => items.concat([{ id: 'faq', text: 'FAQ' }, { id: 'vyvody', text: 'Коротко о главном' }]);

const E = (o) => Object.assign({
  category: 'development', published: true, datePublished: D, dateModified: D,
  readingMinutes: 4, shortForm: true, servicesOffer: SVC_DEV, ctaInternal: CTA_DEV,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'kak-sozdat-bota-v-max-poshagovo-2026', heroIcon: 'ph-fill ph-robot',
    servicesOffer: SVC_BOT, ctaInternal: CTA_BOT,
    title: 'Как создать бота в MAX: пошаговая инструкция 2026',
    metaTitle: 'Как создать бота в MAX: пошагово 2026',
    metaDescription: 'Как создать бота в мессенджере MAX пошагово: где взять токен, как настроить сценарий, подключить оплату и CRM. Что можно сделать самому, а что заказать под ключ.',
    metaKeywords: 'как создать бота в max, бот для max, создать бота max, бот в max пошагово, разработка бота max',
    excerpt: 'Пошагово: как создать бота в MAX — токен, сценарий, кнопки, оплата, CRM. Что реально сделать самому, а где выгоднее заказать под ключ.',
    tags: ['MAX', 'боты', 'разработка', 'мессенджеры'],
    toc: T([{ id: 'chto-nuzhno', text: 'Что нужно для старта' }, { id: 'shagi', text: 'Создание по шагам' }, { id: 'vozmozhnosti', text: 'Что умеет бот в MAX' }, { id: 'sam-ili-zakazat', text: 'Самому или заказать' }]),
    relatedSlugs: ['ai-bot-v-max-gigachat-yandexgpt-2026', 'max-mini-apps-2026', 'max-ili-telegram-dlya-biznesa-2027'] }),

  E({ slug: 'chat-bot-v-max-zakazat-2026', heroIcon: 'ph-fill ph-chat-circle-dots',
    servicesOffer: SVC_BOT, ctaInternal: CTA_BOT,
    title: 'Чат-бот в MAX: что умеет и сколько стоит заказать',
    metaTitle: 'Чат-бот в MAX: что умеет и цена заказа',
    metaDescription: 'Чат-бот в MAX для бизнеса: что умеет (заявки, запись, оплата, поддержка, рассылки), из чего складывается цена и сколько стоит заказать бота в MAX под ключ.',
    metaKeywords: 'чат-бот в max, бот для бизнеса в max, заказать бота max, чат бот max цена, бот max под ключ',
    excerpt: 'Что умеет чат-бот в MAX (заявки, запись, оплата, поддержка), из чего складывается цена и сколько стоит заказать бота под ключ.',
    tags: ['MAX', 'чат-бот', 'бизнес', 'заказать'],
    toc: T([{ id: 'chto-eto', text: 'Зачем бизнесу бот в MAX' }, { id: 'chto-umeet', text: 'Что умеет' }, { id: 'cena', text: 'Из чего складывается цена' }, { id: 'kak-zakazat', text: 'Как заказать' }]),
    relatedSlugs: ['kak-sozdat-bota-v-max-poshagovo-2026', 'ai-bot-v-max-gigachat-yandexgpt-2026', 'mini-app-v-max-dlya-biznesa-2026'] }),

  E({ slug: 'napisat-skript-na-zakaz-2026', heroIcon: 'ph-fill ph-code',
    servicesOffer: SVC_AUTO, ctaInternal: CTA_AUTO,
    title: 'Написать скрипт на заказ: автоматизация рутины за вечер',
    metaTitle: 'Написать скрипт на заказ: автоматизация рутины',
    metaDescription: 'Написать скрипт на заказ: автоматизация рутинных задач (обработка файлов, выгрузки, рассылки, переименование, сбор данных). Что можно автоматизировать, сроки и цена.',
    metaKeywords: 'написать скрипт на заказ, скрипт автоматизации, заказать python скрипт, автоматизация рутины, скрипт под задачу',
    excerpt: 'Какие рутинные задачи закрывает скрипт (файлы, выгрузки, рассылки, сбор данных), сколько это стоит и как быстро окупается.',
    tags: ['автоматизация', 'скрипты', 'Python', 'заказать'],
    toc: T([{ id: 'chto-eto', text: 'Что такое скрипт-автоматизация' }, { id: 'primery', text: 'Что можно автоматизировать' }, { id: 'cena-sroki', text: 'Сроки и цена' }, { id: 'kak-zakazat', text: 'Как заказать' }]),
    relatedSlugs: ['integraciya-api-na-zakaz-2026', 'avtomatizaciya-excel-na-zakaz-2026', 'parser-dannyh-na-zakaz-2026'] }),

  E({ slug: 'integraciya-api-na-zakaz-2026', heroIcon: 'ph-fill ph-plugs-connected',
    servicesOffer: SVC_AUTO, ctaInternal: CTA_AUTO,
    title: 'Интеграция API на заказ: связать сервисы, CRM и 1С',
    metaTitle: 'Интеграция API на заказ: связать сервисы',
    metaDescription: 'Интеграция API на заказ: связываем сайт, CRM, 1С, кассу, маркетплейсы и мессенджеры, чтобы данные ходили сами. Как это работает, сроки и стоимость.',
    metaKeywords: 'интеграция api на заказ, заказать интеграцию api, интеграция crm и 1с, связать сервисы api, разработка интеграции',
    excerpt: 'Как интеграция API связывает сайт, CRM, 1С, кассу и маркетплейсы, чтобы данные ходили без ручного переноса. Сроки и стоимость.',
    tags: ['интеграция', 'API', 'автоматизация', 'CRM'],
    toc: T([{ id: 'chto-eto', text: 'Что такое интеграция API' }, { id: 'primery', text: 'Что с чем связывают' }, { id: 'kak-delaem', text: 'Как мы это делаем' }, { id: 'cena', text: 'Сроки и цена' }]),
    relatedSlugs: ['napisat-skript-na-zakaz-2026', 'chto-takoe-api-prostymi-slovami-2026', 'parser-dannyh-na-zakaz-2026'] }),

  E({ slug: 'parser-dannyh-na-zakaz-2026', heroIcon: 'ph-fill ph-download-simple',
    servicesOffer: SVC_AUTO, ctaInternal: CTA_AUTO,
    title: 'Парсер данных на заказ: сбор информации легально',
    metaTitle: 'Парсер на заказ: сбор данных легально',
    metaDescription: 'Парсер данных на заказ: сбор цен, товаров, контактов и объявлений с сайтов в таблицу или базу. Что можно парсить легально, как это работает, сроки и цена.',
    metaKeywords: 'парсер на заказ, заказать парсер, парсинг сайтов на заказ, сбор данных с сайтов, парсер цен конкурентов',
    excerpt: 'Как парсер собирает цены, товары и контакты в таблицу или базу, что можно парсить легально и сколько стоит разработка под задачу.',
    tags: ['парсинг', 'данные', 'автоматизация', 'заказать'],
    toc: T([{ id: 'chto-eto', text: 'Что такое парсер' }, { id: 'primery', text: 'Что обычно парсят' }, { id: 'legalno', text: 'Что законно, а что нет' }, { id: 'cena', text: 'Сроки и цена' }]),
    relatedSlugs: ['napisat-skript-na-zakaz-2026', 'integraciya-api-na-zakaz-2026', 'zaschita-sayta-ot-parsinga'] }),

  E({ slug: 'dorabotka-sayta-2026', heroIcon: 'ph-fill ph-wrench',
    servicesOffer: SVC_DEV, ctaInternal: CTA_DEV,
    title: 'Доработка сайта: доделать за прошлым исполнителем',
    metaTitle: 'Доработка сайта: доделать за исполнителем',
    metaDescription: 'Доработка сайта: доделать проект за фрилансером, который пропал, починить баги, добавить функции, ускорить и подключить к нему бота или CRM. Как передать проект без потерь.',
    metaKeywords: 'доработка сайта, доделать сайт за фрилансером, доработка чужого сайта, починить сайт, поддержка сайта на заказ',
    excerpt: 'Что делать, если исполнитель пропал или сайт «полусделан»: как принять проект, починить, доработать функции и не переплатить за переделку.',
    tags: ['веб-разработка', 'доработка', 'поддержка', 'заказать'],
    toc: T([{ id: 'kogda', text: 'Когда нужна доработка' }, { id: 'kak-prinimaem', text: 'Как принимаем чужой проект' }, { id: 'chto-delaem', text: 'Что чиним и добавляем' }, { id: 'cena', text: 'Сроки и цена' }]),
    relatedSlugs: ['kak-vybrat-it-podryadchika-2027', 'napisat-skript-na-zakaz-2026', 'integraciya-api-na-zakaz-2026'] }),

  E({ slug: 'sozdat-svoy-veb-servis-saas-2026', heroIcon: 'ph-fill ph-rocket-launch',
    servicesOffer: SVC_DEV, ctaInternal: CTA_DEV,
    title: 'Создать свой веб-сервис или SaaS под ваш процесс',
    metaTitle: 'Создать свой веб-сервис / SaaS под процесс',
    metaDescription: 'Как создать свой веб-сервис или SaaS под конкретный бизнес-процесс: с чего начать, что входит в MVP, сколько времени и денег нужно и как заказать разработку под ключ.',
    metaKeywords: 'создать свой веб-сервис, разработка saas, создать saas на заказ, веб-сервис под процесс, заказать разработку сервиса',
    excerpt: 'С чего начать свой веб-сервис или SaaS под ваш процесс, что входит в MVP, сколько это времени и денег и как заказать под ключ.',
    tags: ['SaaS', 'веб-сервис', 'MVP', 'разработка'],
    toc: T([{ id: 'kogda-nuzhen', text: 'Когда нужен свой сервис' }, { id: 'mvp', text: 'С чего начать: MVP' }, { id: 'skolko', text: 'Сроки и бюджет' }, { id: 'kak-zakazat', text: 'Как заказать' }]),
    relatedSlugs: ['mvp-to-production-3-mesyatsa-2026', 'kak-prevratit-ideyu-v-produkt-2027', 'integraciya-api-na-zakaz-2026'] }),

  E({ slug: 'avtomatizaciya-excel-na-zakaz-2026', heroIcon: 'ph-fill ph-table',
    servicesOffer: SVC_AUTO, ctaInternal: CTA_AUTO,
    title: 'Автоматизация Excel на заказ: от макросов до веб-таблиц',
    metaTitle: 'Автоматизация Excel на заказ: макросы и не только',
    metaDescription: 'Автоматизация Excel на заказ: макросы, автоматические отчёты, связка с 1С и CRM, перенос перегруженных таблиц в базу или веб-сервис. Что можно автоматизировать и цена.',
    metaKeywords: 'автоматизация excel на заказ, макросы excel на заказ, автоматизировать таблицы, excel в базу данных, отчеты excel автоматизация',
    excerpt: 'Где Excel перестаёт справляться, что можно автоматизировать (макросы, отчёты, связка с 1С/CRM) и когда пора переносить таблицы в базу или веб-сервис.',
    tags: ['Excel', 'автоматизация', 'таблицы', 'заказать'],
    toc: T([{ id: 'kogda', text: 'Когда Excel не справляется' }, { id: 'chto-mozhno', text: 'Что можно автоматизировать' }, { id: 'v-bazu', text: 'Когда переносить в базу' }, { id: 'cena', text: 'Сроки и цена' }]),
    relatedSlugs: ['napisat-skript-na-zakaz-2026', 'integraciya-api-na-zakaz-2026', 'iz-excel-v-crm-za-mesyac-2027'] }),

  E({ slug: 'nanyat-programmista-ili-pod-klyuch-2026', heroIcon: 'ph-fill ph-user-focus',
    servicesOffer: SVC_DEV, ctaInternal: CTA_DEV,
    title: 'Нанять программиста или заказать под ключ: что выгоднее',
    metaTitle: 'Нанять программиста или заказать под ключ',
    metaDescription: 'Нанять программиста в штат, взять фрилансера или заказать под ключ у студии: чем отличается, где риски и что выгоднее для разовой задачи и для долгого проекта.',
    metaKeywords: 'нанять программиста, заказать разработку под ключ, программист на заказ, фрилансер или студия, найти разработчика',
    excerpt: 'Штатный программист, фрилансер или студия под ключ — чем отличаются по рискам, срокам и деньгам, и что выбрать под вашу задачу.',
    tags: ['разработка', 'подрядчик', 'под ключ', 'заказать'],
    toc: T([{ id: 'varianty', text: 'Три варианта' }, { id: 'sravnenie', text: 'Сравнение по рискам и цене' }, { id: 'kogda-chto', text: 'Что выбрать под задачу' }, { id: 'kak-nachat', text: 'Как начать со мной' }]),
    relatedSlugs: ['kak-vybrat-it-podryadchika-2027', 'kak-sostavit-tz-2026', 'dorabotka-sayta-2026'] }),
];
