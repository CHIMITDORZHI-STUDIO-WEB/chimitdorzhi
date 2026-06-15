// Кластер «Open-source и свой сервер», часть 11: для сетевика и новичка (6 обзоров).
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
  E({ slug: 'linkstack-multissylka-2026', heroIcon: 'ph-fill ph-link',
    title: 'LinkStack: мультиссылка на своём домене вместо Taplink',
    metaTitle: 'LinkStack: мультиссылка на своём домене',
    metaDescription: 'LinkStack — open-source мультиссылка (link-in-bio, аналог Taplink/Linktree): все контакты, соцсети, каталог и запись на одной странице на своём домене. Без подписки и чужого бренда, статистика, данные у себя — соберу под ключ.',
    excerpt: 'LinkStack собирает все ваши контакты, соцсети и каталог в одну страницу на своём домене — как Taplink, но без подписки и чужого бренда в адресе. Идеально для сетевика и эксперта. Разбираю запуск.',
    tags: ['LinkStack', 'мультиссылка', 'link-in-bio', 'open-source'],
    relatedSlugs: ['shlink-korotkie-ssylki-analitika-2026', 'matomo-veb-analitika-2026', 'formbricks-formy-oprosy-2026'] }),
  E({ slug: 'shlink-korotkie-ssylki-analitika-2026', heroIcon: 'ph-fill ph-link-simple-horizontal',
    title: 'Shlink: короткие ссылки с аналитикой на своём домене',
    metaTitle: 'Shlink: короткие ссылки с аналитикой',
    metaDescription: 'Shlink — open-source сокращатель ссылок с аналитикой (аналог Bitly): короткие ссылки на своём домене, статистика переходов, QR-коды, метки. Видно, что реально приводит людей, данные у себя — разверну под ключ.',
    excerpt: 'Shlink делает короткие ссылки на вашем домене и показывает, кто и откуда по ним переходит — как Bitly, но на своём сервере. Помогает понять, что работает в продвижении. Разбираю запуск.',
    tags: ['Shlink', 'короткие ссылки', 'аналитика', 'open-source'],
    relatedSlugs: ['linkstack-multissylka-2026', 'matomo-veb-analitika-2026', 'umami-analitika-bez-google-2026'] }),
  E({ slug: 'bigbluebutton-vebinary-2026', heroIcon: 'ph-fill ph-chalkboard-teacher',
    title: 'BigBlueButton: вебинары и онлайн-обучение на своём сервере',
    metaTitle: 'BigBlueButton: вебинары на своём сервере',
    metaDescription: 'BigBlueButton — open-source платформа вебинаров и онлайн-обучения: видео, доска, опросы, комнаты, запись. Заточена под обучение. Свои вебинары без подписок и лимитов, данные у себя — разверну под ключ.',
    excerpt: 'BigBlueButton — это платформа для вебинаров и обучения с доской, опросами и записью, заточенная под учёбу (в отличие от Zoom). Свои эфиры без лимитов, на своём сервере. Разбираю запуск.',
    tags: ['BigBlueButton', 'вебинары', 'обучение', 'open-source'],
    relatedSlugs: ['jitsi-videokonferencii-bez-zoom-2026', 'owncast-svoya-strim-platforma-2026', 'outline-baza-znaniy-2026'] }),
  E({ slug: 'akaunting-uchet-scheta-2026', heroIcon: 'ph-fill ph-calculator',
    title: 'Akaunting: учёт финансов и счета для малого бизнеса на своём сервере',
    metaTitle: 'Akaunting: учёт финансов и счета для бизнеса',
    metaDescription: 'Akaunting — open-source система учёта финансов и счетов для малого бизнеса (аналог QuickBooks): доходы, расходы, счета, клиенты, отчёты. Простой учёт денег на своём сервере, данные у себя — разверну под ключ.',
    excerpt: 'Akaunting помогает новичку и малому бизнесу держать финансы под контролем: доходы, расходы, счета, отчёты — на своём сервере и без подписки. Разбираю, кому подходит и что нужно для запуска.',
    tags: ['Akaunting', 'учёт финансов', 'счета', 'open-source'],
    relatedSlugs: ['invoice-ninja-scheta-2026', 'nocodb-airtable-svoy-server-2026', 'metabase-dashbordy-bi-2026'] }),
  E({ slug: 'opensign-elektronnaya-podpis-2026', heroIcon: 'ph-fill ph-signature',
    title: 'OpenSign: электронная подпись документов на своём сервере',
    metaTitle: 'OpenSign: электронная подпись документов',
    metaDescription: 'OpenSign — open-source сервис электронной подписи документов (аналог DocuSign): отправка на подпись, поля, шаблоны, статус, аудит. Подписывайте договоры онлайн, документы и данные у себя (152-ФЗ) — разверну под ключ.',
    excerpt: 'OpenSign позволяет отправлять документы на подпись онлайн — договоры с клиентами и партнёрами без распечаток, как DocuSign, но на своём сервере. Разбираю возможности, юридический нюанс и запуск.',
    tags: ['OpenSign', 'электронная подпись', 'DocuSign', 'open-source'],
    relatedSlugs: ['stirling-pdf-instrumenty-2026', 'paperless-ngx-arhiv-dokumentov-2026', 'cryptpad-privatnyy-ofis-2026'] }),
  E({ slug: 'matomo-veb-analitika-2026', heroIcon: 'ph-fill ph-chart-pie-slice',
    title: 'Matomo: веб-аналитика, полный аналог Google Analytics на своём сервере',
    metaTitle: 'Matomo: веб-аналитика вместо Google Analytics',
    metaDescription: 'Matomo — open-source веб-аналитика, полный аналог Google Analytics: посещаемость, источники, цели, карты кликов, без передачи данных Google. Данные у себя по 152-ФЗ, контроль — разверну на вашем сервере под ключ.',
    excerpt: 'Matomo — это полноценная аналитика сайта на своём сервере: источники, цели, карты кликов — как Google Analytics, но с данными у себя и без слежки Google. Разбираю возможности и запуск.',
    tags: ['Matomo', 'веб-аналитика', 'Google Analytics', 'open-source'],
    relatedSlugs: ['umami-analitika-bez-google-2026', 'shlink-korotkie-ssylki-analitika-2026', 'apache-superset-bi-dashbordy-2026'] }),
];
