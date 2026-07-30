// Батч: безопасный ИИ в компании, прогноз спроса, RPA, гостевой Wi-Fi, ИИ-фото меню (5 статей ~4 мин).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-22';
const SVC = 'https://chimitdorzhi.tech/services';

const SVC_AI_SEC = {
  title: 'Безопасный ИИ в компании под ключ',
  services: [
    { icon: 'ph-fill ph-shield-check', label: 'ИИ-контур без утечки данных клиентов' },
    { icon: 'ph-fill ph-brain', label: 'Своя модель на своём сервере' },
    { icon: 'ph-fill ph-file-text', label: 'Регламент и обучение сотрудников' },
    { icon: 'ph-fill ph-scales', label: 'Соответствие 152-ФЗ' },
  ],
  ctaLabel: 'Обсудить безопасный ИИ', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_FORECAST = {
  title: 'Аналитика и прогнозы под ключ',
  services: [
    { icon: 'ph-fill ph-chart-line-up', label: 'Прогноз спроса и продаж' },
    { icon: 'ph-fill ph-package', label: 'Планирование закупок и остатков' },
    { icon: 'ph-fill ph-warning-circle', label: 'Поиск аномалий в данных' },
    { icon: 'ph-fill ph-chart-bar', label: 'Дашборды для руководителя' },
  ],
  ctaLabel: 'Обсудить прогнозы', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_RPA = {
  title: 'Роботизация рутины под ключ',
  services: [
    { icon: 'ph-fill ph-robot', label: 'Робот для работы в личных кабинетах' },
    { icon: 'ph-fill ph-download-simple', label: 'Автовыгрузки и сверки' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграции там, где нет API' },
    { icon: 'ph-fill ph-clock', label: 'Работа по расписанию' },
  ],
  ctaLabel: 'Обсудить автоматизацию', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_WIFI = {
  title: 'Wi-Fi и сеть для заведения',
  services: [
    { icon: 'ph-fill ph-wifi-high', label: 'Гостевой Wi-Fi с авторизацией' },
    { icon: 'ph-fill ph-shield-check', label: 'Изоляция гостей от кассы и сети' },
    { icon: 'ph-fill ph-scales', label: 'Выполнение требований закона' },
    { icon: 'ph-fill ph-megaphone', label: 'Сбор контактов и реклама на портале' },
  ],
  ctaLabel: 'Настроить Wi-Fi', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_HORECA = {
  title: 'Digital для кафе и ресторанов',
  services: [
    { icon: 'ph-fill ph-image', label: 'Фото блюд и визуал меню' },
    { icon: 'ph-fill ph-qr-code', label: 'QR-меню и онлайн-заказ' },
    { icon: 'ph-fill ph-percent', label: 'Программа лояльности' },
    { icon: 'ph-fill ph-robot', label: 'Бот приёма заказов' },
  ],
  ctaLabel: 'Обсудить проект', ctaUrl: 'https://t.me/chimitdorzhi',
};

const CTA_AI = { url: `${SVC}/ai-agents/`, label: 'ИИ под ключ' };
const CTA_ANALYTICS = { url: `${SVC}/ai-analytics/`, label: 'Аналитика под ключ' };
const CTA_AUTO = { url: `${SVC}/business-automation/`, label: 'Автоматизация под ключ' };
const CTA_IT = { url: `${SVC}/it-infrastructure/`, label: 'Сеть и Wi-Fi под ключ' };
const CTA_WEB = { url: `${SVC}/web-development/`, label: 'Digital для заведения' };

const T = (items) => items.concat([{ id: 'faq', text: 'FAQ' }, { id: 'vyvody', text: 'Коротко о главном' }]);

const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D,
  readingMinutes: 4, shortForm: true, servicesOffer: SVC_AI_SEC, ctaInternal: CTA_AI,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  // Обновлено 30.07.2026: добавлен кейс с индексацией публичных диалогов Claude
  // поисковиками — наглядная иллюстрация того, что «поделиться ссылкой» != приватно.
  E({ slug: 'bezopasnyy-ii-v-kompanii-2026', category: 'security', heroIcon: 'ph-fill ph-shield-check',
    servicesOffer: SVC_AI_SEC, ctaInternal: CTA_AI, readingMinutes: 5, dateModified: '2026-07-30',
    title: 'Сотрудники и ChatGPT: как дать ИИ и не слить данные клиентов',
    metaTitle: 'Сотрудники и ChatGPT: как не слить данные клиентов',
    metaDescription: 'Сотрудники загружают договоры и базы клиентов в нейросети — и данные уходят на чужие серверы. Чем это грозит по 152-ФЗ, как выстроить безопасный ИИ-контур в компании и что записать в регламент.',
    metaKeywords: 'данные в chatgpt, утечка данных через нейросеть, безопасное использование ии в компании, ии и 152-фз, корпоративный ии политика',
    excerpt: 'Что происходит, когда сотрудник вставляет договор в нейросеть, чем это грозит по 152-ФЗ и как дать команде ИИ без утечки данных клиентов.',
    tags: ['ИИ', 'безопасность', '152-ФЗ', 'данные'],
    toc: T([{ id: 'problema', text: 'Что уходит вместе с промптом' }, { id: 'riski', text: 'Риски и 152-ФЗ' }, { id: 'reshenie', text: 'Безопасный ИИ-контур' }, { id: 'reglament', text: 'Регламент для сотрудников' }]),
    relatedSlugs: ['bot-s-bazoy-znaniy-rag-2026', 'audit-152-fz-2026', 'kibergigiena-sotrudnikov-2026'] }),

  E({ slug: 'ii-prognoz-sprosa-prodazh-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-chart-line-up',
    servicesOffer: SVC_FORECAST, ctaInternal: CTA_ANALYTICS,
    title: 'ИИ-прогноз спроса и продаж: не морозить деньги в товаре',
    metaTitle: 'ИИ-прогноз спроса и продаж для бизнеса',
    metaDescription: 'Прогноз спроса и продаж с помощью ИИ: как модели предсказывают, сколько товара понадобится, как это снижает неликвид и упущенные продажи, какие данные нужны и с чего начать внедрение.',
    metaKeywords: 'прогноз спроса, прогнозирование продаж, ии прогноз спроса, планирование закупок, прогноз остатков товара',
    excerpt: 'Как ИИ предсказывает спрос по вашей истории продаж, почему это снижает неликвид и упущенные продажи, какие данные нужны и с чего начать.',
    tags: ['прогноз', 'ИИ', 'закупки', 'аналитика'],
    toc: T([{ id: 'problema', text: 'Цена ошибки в закупках' }, { id: 'kak-rabotaet', text: 'Как ИИ прогнозирует спрос' }, { id: 'dannye', text: 'Какие данные нужны' }, { id: 'vnedrenie', text: 'С чего начать' }]),
    relatedSlugs: ['analitika-wildberries-servisy-2026', 'ai-dlya-logistiki-2026', 'skladskoy-uchet-wms-tsd'] }),

  E({ slug: 'rpa-robot-v-brauzere-2026', category: 'development', heroIcon: 'ph-fill ph-robot',
    servicesOffer: SVC_RPA, ctaInternal: CTA_AUTO,
    title: 'RPA: робот делает рутину в браузере вместо сотрудника',
    metaTitle: 'RPA: робот делает рутину в браузере',
    metaDescription: 'RPA простыми словами: программный робот сам заходит в личные кабинеты, выгружает отчёты, заполняет формы и сверяет данные — там, где нет API. Что можно роботизировать, сколько это стоит и где пределы.',
    metaKeywords: 'rpa, роботизация процессов, робот вместо сотрудника, автоматизация личного кабинета, автоматизация рутины браузер',
    excerpt: 'Как программный робот сам работает в личных кабинетах: выгружает отчёты, заполняет формы, сверяет данные — там, где нет API. Что роботизировать и сколько стоит.',
    tags: ['RPA', 'автоматизация', 'робот', 'рутина'],
    toc: T([{ id: 'chto-eto', text: 'Что такое RPA' }, { id: 'primery', text: 'Что можно роботизировать' }, { id: 'predely', text: 'Где пределы и риски' }, { id: 'cena', text: 'Сроки и цена' }]),
    relatedSlugs: ['napisat-skript-na-zakaz-2026', 'integraciya-api-na-zakaz-2026', 'parser-dannyh-na-zakaz-2026'] }),

  E({ slug: 'gostevoy-wifi-po-zakonu-2026', category: 'legal', heroIcon: 'ph-fill ph-wifi-high',
    servicesOffer: SVC_WIFI, ctaInternal: CTA_IT,
    title: 'Гостевой Wi-Fi в кафе и отеле: закон, авторизация и изоляция',
    metaTitle: 'Гостевой Wi-Fi по закону: авторизация и изоляция',
    metaDescription: 'Гостевой Wi-Fi в кафе, отеле, салоне: почему нельзя просто раздать пароль, что требует закон об идентификации пользователей публичных сетей, как настроить авторизацию и изолировать гостей от кассы.',
    metaKeywords: 'гостевой wi-fi в кафе, идентификация пользователей wi-fi, публичный wi-fi закон, авторизация в гостевой сети, wi-fi для отеля',
    excerpt: 'Почему в кафе и отеле нельзя просто раздать пароль от Wi-Fi, что требует закон об идентификации, как настроить авторизацию и отделить гостей от кассы.',
    tags: ['Wi-Fi', 'закон', 'HoReCa', 'сеть'],
    toc: T([{ id: 'problema', text: 'Чем опасен открытый Wi-Fi' }, { id: 'zakon', text: 'Что требует закон' }, { id: 'avtorizaciya', text: 'Как настроить авторизацию' }, { id: 'izolyaciya', text: 'Изоляция гостей от кассы' }]),
    relatedSlugs: ['it-dlya-kofeyni-obshchepita-2026', 'kibergigiena-sotrudnikov-2026', 'audit-152-fz-2026'] }),

  E({ slug: 'ii-foto-blyud-dlya-menyu-2026', category: 'industries', heroIcon: 'ph-fill ph-image',
    servicesOffer: SVC_HORECA, ctaInternal: CTA_WEB,
    title: 'ИИ-фото блюд для меню: когда это работает, а когда вредит',
    metaTitle: 'ИИ-фото блюд для меню: работает или вредит',
    metaDescription: 'Фото блюд для меню и доставки с помощью нейросетей: как быстро получить визуал без фотосессии, где это уместно, а где обманывает гостя и бьёт по репутации, и как совместить ИИ с реальной съёмкой.',
    metaKeywords: 'фото блюд для меню, нейросеть фото еды, генерация фото блюд, визуал для доставки еды, меню без фотосессии',
    excerpt: 'Как получить визуал блюд без фотосессии с помощью нейросетей, где это уместно, а где обманывает гостя, и как совместить ИИ с реальной съёмкой.',
    tags: ['HoReCa', 'ИИ', 'фото', 'меню'],
    toc: T([{ id: 'zachem', text: 'Зачем меню фото' }, { id: 'kak', text: 'Как это делают нейросети' }, { id: 'gde-vredit', text: 'Где ИИ-фото вредит' }, { id: 'kak-pravilno', text: 'Как совместить с реальной съёмкой' }]),
    relatedSlugs: ['elektronnoe-qr-menyu-dlya-kafe-2026', 'neyroset-dlya-kartinok-2026', 'it-dlya-kofeyni-obshchepita-2026'] }),
];
