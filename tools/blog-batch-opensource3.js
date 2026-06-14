// Кластер «Open-source и свой сервер», часть 3: ещё 5 обзоров.
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
  E({ slug: 'bookstack-baza-znaniy-2026', heroIcon: 'ph-fill ph-books',
    title: 'BookStack: база знаний и документация компании на своём сервере',
    metaTitle: 'BookStack: база знаний компании на сервере',
    metaDescription: 'BookStack — open-source база знаний и документация (аналог Confluence/Notion): книги, главы, страницы, поиск, права доступа. Бесплатно, данные у себя, но нужны сервер и настройка — разверну под ключ.',
    excerpt: 'BookStack складывает регламенты, инструкции и знания компании в понятную структуру «книги-главы-страницы» на вашем сервере. Разбираю, что умеет, кому подходит и что нужно для запуска.',
    tags: ['BookStack', 'база знаний', 'документация', 'open-source'],
    relatedSlugs: ['wiki-js-korporativnaya-wiki-2026', 'outline-baza-znaniy-2026', 'cryptpad-privatnyy-ofis-2026'] }),
  E({ slug: 'jellyfin-svoya-mediateka-2026', heroIcon: 'ph-fill ph-television',
    title: 'Jellyfin: своя медиатека и ТВ для заведения на своём сервере',
    metaTitle: 'Jellyfin: своя медиатека для заведения',
    metaDescription: 'Jellyfin — open-source медиасервер (аналог Plex): своя медиатека видео и музыки, стриминг на ТВ и устройства. Для HoReCa, фитнеса, отелей: свой контент без подписок и рекламы. Разверну на вашем сервере под ключ.',
    excerpt: 'Jellyfin превращает ваш сервер в медиатеку для заведения: видео, музыка и фото на экранах кафе, фитнеса или отеля — свой контент без подписок и рекламы стримингов. Разбираю, что нужно для запуска.',
    tags: ['Jellyfin', 'медиатека', 'HoReCa', 'open-source'],
    relatedSlugs: ['nextcloud-svoy-oblachnyy-disk-2026', 'immich-fotoarhiv-2026', 'jitsi-videokonferencii-bez-zoom-2026'] }),
  E({ slug: 'dify-ai-prilozheniya-2026', heroIcon: 'ph-fill ph-circuitry',
    title: 'Dify: платформа для AI-приложений и ассистентов на своём сервере',
    metaTitle: 'Dify: платформа AI-приложений на сервере',
    metaDescription: 'Dify — open-source платформа для создания AI-приложений и ассистентов (LLMOps): конструктор, чат-боты с базой знаний (RAG), агенты, разные модели. Данные у себя, без привязки к облаку — разверну под ключ.',
    excerpt: 'Dify — это конструктор AI-приложений и ассистентов с базой знаний (RAG) на вашем сервере и ваших моделях. Разбираю, что умеет, кому подходит и что нужно для запуска.',
    tags: ['Dify', 'AI-приложения', 'RAG', 'open-source'],
    relatedSlugs: ['flowise-konstruktor-ai-botov-2026', 'ollama-svoy-chatgpt-na-servere-2026', 'botpress-ai-chat-boty-2026'] }),
  E({ slug: 'activepieces-prostaya-avtomatizaciya-2026', heroIcon: 'ph-fill ph-plugs-connected',
    title: 'Activepieces: простая автоматизация процессов на своём сервере',
    metaTitle: 'Activepieces: простая автоматизация на сервере',
    metaDescription: 'Activepieces — open-source платформа автоматизации (аналог Zapier/Make, проще n8n): соединяет сервисы, сценарии, no-code, AI-шаги. Без платы за задачи, данные у себя — разверну на вашем сервере под ключ.',
    excerpt: 'Activepieces связывает ваши сервисы в автоматические сценарии без кода — как Zapier, только на своём сервере и без платы за объём. Разбираю, что умеет и что нужно для запуска.',
    tags: ['Activepieces', 'автоматизация', 'Zapier', 'open-source'],
    relatedSlugs: ['n8n-avtomatizaciya-bez-zapier-2026', 'botpress-ai-chat-boty-2026', 'dify-ai-prilozheniya-2026'] }),
  E({ slug: 'taiga-agile-doski-2026', heroIcon: 'ph-fill ph-kanban',
    title: 'Taiga: agile и scrum-доски для команд на своём сервере',
    metaTitle: 'Taiga: agile-доски для команд на сервере',
    metaDescription: 'Taiga — open-source система управления проектами по agile/scrum (аналог Jira): kanban и scrum-доски, бэклог, спринты, задачи. Без дорогих лицензий, данные у себя — разверну на вашем сервере под ключ.',
    excerpt: 'Taiga ведёт проекты по agile и scrum — доски, бэклог, спринты — на вашем сервере, как Jira, но без лицензий. Разбираю возможности, кому подходит и что нужно для запуска.',
    tags: ['Taiga', 'agile', 'управление проектами', 'open-source'],
    relatedSlugs: ['openproject-upravlenie-proektami-2026', 'wiki-js-korporativnaya-wiki-2026', 'mattermost-korporativnyy-messenger-2026'] }),
];
