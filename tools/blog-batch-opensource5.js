// Кластер «Open-source и свой сервер», часть 5: ещё 5 обзоров.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-06-15';
const TOC = [
  { id: 'chto-eto', text: 'Что это и что заменяет' },
  { id: 'vozmozhnosti', text: 'Что умеет' },
  { id: 'komu-podhodit', text: 'Кому подходит' },
  { id: 'chto-nuzhno', text: 'Что нужно для запуска' },
  { id: 'kak-vnedrit', text: 'Как внедрить под ключ' },
  { id: 'faq', text: 'FAQ' },
  { id: 'vyvody', text: 'Коротко о главном' },
];
const SVC = {
  title: 'Что я делаю с open-source',
  services: [
    { icon: 'ph-fill ph-hard-drives', label: 'Развёртывание на вашем сервере' },
    { icon: 'ph-fill ph-arrows-left-right', label: 'Перенос данных из старого сервиса' },
    { icon: 'ph-fill ph-shield-check', label: 'Безопасность и 152-ФЗ' },
    { icon: 'ph-fill ph-wrench', label: 'Настройка под ваши процессы' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Поддержка и обновления' },
  ],
};
const CTA = { url: 'https://chimitdorzhi.tech/predlozheniya/open-source-pod-klyuch/', label: 'Развернуть open-source под ключ' };
const E = (o) => Object.assign({
  category: 'opensource', published: true, datePublished: D, dateModified: D, readingMinutes: 9,
  servicesOffer: SVC, toc: TOC, ctaInternal: CTA,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'baserow-baza-dannyh-bez-koda-2026', heroIcon: 'ph-fill ph-table',
    title: 'Baserow: база данных без кода на своём сервере',
    metaTitle: 'Baserow: база данных без кода на сервере',
    metaDescription: 'Baserow — open-source база данных без кода (аналог Airtable): таблицы, связи, формы, без платы за пользователя. Стройте CRM, трекеры и базы клиентов на своём сервере. Данные у себя — разверну под ключ.',
    excerpt: 'Baserow — это гибкие умные таблицы и базы без кода на вашем сервере: CRM, трекеры задач, базы клиентов без платы за каждого пользователя. Разбираю, что умеет и что нужно для запуска.',
    tags: ['Baserow', 'база данных', 'Airtable', 'open-source'],
    relatedSlugs: ['nocodb-airtable-svoy-server-2026', 'metabase-dashbordy-bi-2026', 'supabase-backend-dlya-prilozheniy-2026'] }),
  E({ slug: 'coolify-svoya-platforma-deploya-2026', heroIcon: 'ph-fill ph-cloud-arrow-up',
    title: 'Coolify: своя платформа деплоя приложений на сервере',
    metaTitle: 'Coolify: своя платформа деплоя на сервере',
    metaDescription: 'Coolify — open-source платформа деплоя приложений и сервисов (аналог Vercel/Heroku/Netlify): развёртывание сайтов, приложений и self-hosted-сервисов в пару кликов. Без растущих счетов облака — разверну под ключ.',
    excerpt: 'Coolify превращает ваш сервер в платформу деплоя как Vercel/Heroku: запускаете сайты, приложения и сервисы в пару кликов, без растущих облачных счетов. Разбираю, кому подходит и что нужно.',
    tags: ['Coolify', 'деплой', 'PaaS', 'open-source'],
    relatedSlugs: ['supabase-backend-dlya-prilozheniy-2026', 'n8n-avtomatizaciya-bez-zapier-2026', 'medusa-headless-magazin-2026'] }),
  E({ slug: 'posthog-produktovaya-analitika-2026', heroIcon: 'ph-fill ph-chart-donut',
    title: 'PostHog: продуктовая аналитика на своём сервере',
    metaTitle: 'PostHog: продуктовая аналитика на сервере',
    metaDescription: 'PostHog — open-source платформа продуктовой аналитики (аналог Mixpanel/Amplitude): события, воронки, запись сессий, A/B-тесты, фиче-флаги. Данные у себя по 152-ФЗ, без дорогих подписок — разверну под ключ.',
    excerpt: 'PostHog показывает, что пользователи реально делают в вашем продукте: события, воронки, записи сессий, A/B-тесты — на своём сервере и с данными у себя. Разбираю возможности и запуск.',
    tags: ['PostHog', 'продуктовая аналитика', 'Mixpanel', 'open-source'],
    relatedSlugs: ['umami-analitika-bez-google-2026', 'metabase-dashbordy-bi-2026', 'supabase-backend-dlya-prilozheniy-2026'] }),
  E({ slug: 'medusa-headless-magazin-2026', heroIcon: 'ph-fill ph-storefront',
    title: 'Medusa: headless интернет-магазин без комиссий на своём сервере',
    metaTitle: 'Medusa: headless интернет-магазин без комиссий',
    metaDescription: 'Medusa — open-source headless-платформа для интернет-магазина (аналог Shopify, гибче и без комиссий): API-first, кастомная витрина, заказы, платежи. Каждая продажа ваша, данные у себя — разверну под ключ.',
    excerpt: 'Medusa — это магазин без комиссий с продаж и полной кастомизацией: headless-движок под нестандартные витрины и интеграции. Разбираю, кому подходит и что нужно для запуска.',
    tags: ['Medusa', 'интернет-магазин', 'headless', 'open-source'],
    relatedSlugs: ['bagisto-internet-magazin-2026', 'zarabotok-na-internet-magazine-2026', 'coolify-svoya-platforma-deploya-2026'] }),
  E({ slug: 'supabase-backend-dlya-prilozheniy-2026', heroIcon: 'ph-fill ph-database',
    title: 'Supabase: backend для приложений на своём сервере',
    metaTitle: 'Supabase: backend для приложений на сервере',
    metaDescription: 'Supabase — open-source backend-платформа (аналог Firebase): база PostgreSQL, авторизация, API, файловое хранилище, реалтайм. Готовая техбаза для приложения с данными у себя по 152-ФЗ — разверну под ключ.',
    excerpt: 'Supabase даёт готовую техническую базу для приложения — БД, авторизацию, API и хранилище — на своём сервере, как Firebase, но с данными у себя. Разбираю возможности и запуск.',
    tags: ['Supabase', 'backend', 'Firebase', 'open-source'],
    relatedSlugs: ['coolify-svoya-platforma-deploya-2026', 'baserow-baza-dannyh-bez-koda-2026', 'zarabotok-na-mikro-saas-2026'] }),
];
