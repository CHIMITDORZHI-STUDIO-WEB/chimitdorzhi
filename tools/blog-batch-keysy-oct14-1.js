// Кейсы 14.10.2026: Сервис Деск на 1С для партнёра 1С, концепт визового бота с CRM,
// тестовый прогон проверки истории авто из Китая по VIN для маркетплейса.
// Без имён клиентов, брендов, доменов и сумм; статус честный (в работе / концепт / тестовый прогон).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-14';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));
const E = (m) => {
  const html = C(m.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 6, category: 'cases',
      servicesOffer: SVC_BIZ },
    m, { contentHtml: html, toc: tocFrom(html) });
};

module.exports = [
  {
    slug: 'servis-desk-1c-telegram-max-keys-2026',
    heroIcon: 'ph-fill ph-headset',
    title: 'Сервис Деск на 1С: задачи, учёт времени и боты в Telegram и MAX',
    metaTitle: 'Кейс: Сервис Деск на 1С с ботами в Telegram и MAX',
    metaDescription: 'Кейс: Сервис Деск на 1С для команды партнёра 1С. Задачи с таймером, боты в Telegram и MAX, голос и ИИ, загрузка задач из прежней системы заявок.',
    excerpt: 'Партнёр 1С заказал систему для своей команды: ТЗ на 37 разделов. Я пишу чистую конфигурацию 1С с ядром задач, коммерческим временем, календарём, ботами Telegram и MAX, голосом и ИИ на сервере заказчика. Версия 0.4.1 от 27 октября загружает задачи и работы из прежней системы заявок и проверяет текст кнопкой. В работе, идёт приёмка.',
    tags: ['кейс', '1С', 'сервис-деск', 'учёт времени', 'боты Telegram и MAX'],
    dateModified: '2026-10-28',
    relatedSlugs: ['palletnyy-uchet-tsd-1c-keys-2026', 'kontrol-materialov-1c-rasshirenie-keys-2026', 'sluzhba-podderzhki-v-messendzherah-sla-2026', 'uchet-vremeni-po-proektam-studiya-2026'],
    ctaInternal: { url: `${S}/services/accounting-automation/`, label: 'Обсудить систему в 1С' },
  },
  {
    slug: 'vizovyy-bot-telegram-crm-keys-2026',
    heroIcon: 'ph-fill ph-airplane-tilt',
    title: 'Визовый бот: от рилса до CRM, концепт для визового консультанта',
    metaTitle: 'Кейс: концепт визового бота в Telegram с CRM для сотрудника',
    metaDescription: 'Кейс: концепт визового бота. Рилс, бот в Telegram, документы по чек-листу, предоплата, статусы и CRM. Плюс план своего мониторинга слотов по этапам.',
    excerpt: 'Визовый консультант набирает клиентов из рилсов. Я собрал концепт: бот в Telegram с четырьмя вопросами, документы по чек-листу, предоплата, статусы клиенту и CRM с нормативами по этапам. Когда заказчица захотела свой мониторинг слотов, предложил идти по этапам и прямо назвал риск блокировок. Решение за ней.',
    tags: ['кейс', 'чат-бот', 'визы', 'CRM', 'воронка из рилсов', 'мониторинг слотов'],
    dateModified: '2026-10-15',
    relatedSlugs: ['kvalifikaciya-lidov-botom-2026', 'telegram-bot-priema-zayavok-i-oplat-2026', 'bot-peredaet-dialog-cheloveku-operator-istoriya-2026', '152-fz-dlya-chat-botov-i-messendzherov-2026'],
    ctaInternal: { url: `${S}/development/telegram-bots/`, label: 'Обсудить бота' },
  },
  {
    slug: 'proverka-istorii-avto-iz-kitaya-po-vin-keys-2026',
    heroIcon: 'ph-fill ph-file-magnifying-glass',
    title: 'История авто из Китая по VIN для маркетплейса: тестовый прогон',
    metaTitle: 'Кейс: проверка истории авто из Китая по VIN, тест источников',
    metaDescription: 'Кейс: история авто из Китая по VIN для маркетплейса. Что достаётся: ДТП, ТО, пробег. Сравнение провайдеров, асинхронные отчёты, тест на трёх VIN.',
    excerpt: 'Автомаркетплейс в Центральной Азии хочет проверку истории машин из Китая по VIN. Я составил карту данных, сравнил провайдеров и прогнал тест: базовый и полный отчёт, PDF на двух языках. ДТП пришли, ТО и пробега нет. Провайдер рекомендован, цена интеграции не названа.',
    tags: ['кейс', 'авто из Китая', 'VIN', 'API', 'маркетплейс'],
    relatedSlugs: ['proverka-avto-iz-kitaya-po-vin-istoriya-probeg-2026', 'api-dannyh-avto-iz-kitaya-platforma-keys-2026', 'razvedka-dannyh-avtoploshchadok-keys-2026', 'chto-takoe-api-prostymi-slovami-2026'],
    ctaInternal: { url: `${S}/services/china-it/`, label: 'Обсудить данные из Китая' },
  },
].map(E);
