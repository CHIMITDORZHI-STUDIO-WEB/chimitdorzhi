// Кластер «Open-source и свой сервер», часть 13: геймификация (5 обзоров).
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
  E({ slug: 'open-loyalty-programma-loyalnosti-2026', heroIcon: 'ph-fill ph-medal',
    title: 'Open Loyalty: программа лояльности с геймификацией на своём сервере',
    metaTitle: 'Open Loyalty: программа лояльности с геймификацией',
    metaDescription: 'Open Loyalty — open-source платформа программы лояльности с геймификацией: баллы, уровни, награды, кэшбэк, челленджи, рефералы. Своя лояльность без дорогих SaaS, данные клиентов у себя (152-ФЗ) — разверну под ключ.',
    excerpt: 'Open Loyalty — это своя программа лояльности с геймификацией: баллы, уровни, награды и челленджи для клиентов, на вашем сервере и без дорогих подписок. Разбираю, кому подходит и что нужно для запуска.',
    tags: ['Open Loyalty', 'лояльность', 'геймификация', 'open-source'],
    relatedSlugs: ['badgr-cifrovye-beydzhi-2026', 'gamification-engine-dvizhok-2026', 'bagisto-internet-magazin-2026'] }),
  E({ slug: 'habitica-geymifikaciya-zadach-2026', heroIcon: 'ph-fill ph-sword',
    title: 'Habitica: геймификация задач и мотивации команды на своём сервере',
    metaTitle: 'Habitica: геймификация задач и мотивации команды',
    metaDescription: 'Habitica — open-source геймифицированный трекер задач и привычек (в стиле RPG): опыт, уровни, награды, гильдии, командные квесты. Геймификация продуктивности и мотивация команды на своём сервере — разверну под ключ.',
    excerpt: 'Habitica превращает задачи и привычки в игру: опыт, уровни, награды и командные квесты — для мотивации команды или личной продуктивности, на вашем сервере. Разбираю возможности и запуск.',
    tags: ['Habitica', 'геймификация', 'мотивация', 'open-source'],
    relatedSlugs: ['gamification-engine-dvizhok-2026', 'open-loyalty-programma-loyalnosti-2026', 'classquiz-kviz-igry-2026'] }),
  E({ slug: 'classquiz-kviz-igry-2026', heroIcon: 'ph-fill ph-game-controller',
    title: 'ClassQuiz: квизы-игры в реальном времени на своём сервере (аналог Kahoot)',
    metaTitle: 'ClassQuiz: квизы-игры в реальном времени (Kahoot)',
    metaDescription: 'ClassQuiz — open-source платформа квизов-игр в реальном времени (аналог Kahoot): участники отвечают с телефонов, рейтинг на экране. Вовлечение на ивентах, в обучении и в команде, данные у себя — разверну под ключ.',
    excerpt: 'ClassQuiz — это интерактивные квизы-игры как Kahoot: зал отвечает с телефонов, на экране — рейтинг и азарт. Для мероприятий, обучения и вовлечения команды, на вашем сервере. Разбираю запуск.',
    tags: ['ClassQuiz', 'квизы', 'Kahoot', 'геймификация'],
    relatedSlugs: ['bigbluebutton-vebinary-2026', 'moodle-onlayn-obuchenie-2026', 'gamification-engine-dvizhok-2026'] }),
  E({ slug: 'gamification-engine-dvizhok-2026', heroIcon: 'ph-fill ph-trophy',
    title: 'Gamification Engine: движок игровых механик для продукта',
    metaTitle: 'Gamification Engine: движок игровых механик',
    metaDescription: 'Gamification Engine — open-source движок геймификации: баллы, бейджи, рейтинги, достижения, уровни, правила начисления — через API встраивается в приложение, сайт или бота. Игровые механики без разработки с нуля — встрою под ключ.',
    excerpt: 'Gamification Engine добавляет в ваш продукт баллы, бейджи, рейтинги и достижения через API — игровые механики без разработки с нуля. Разбираю, кому подходит и что нужно для встройки.',
    tags: ['Gamification Engine', 'геймификация', 'API', 'open-source'],
    relatedSlugs: ['open-loyalty-programma-loyalnosti-2026', 'badgr-cifrovye-beydzhi-2026', 'habitica-geymifikaciya-zadach-2026'] }),
  E({ slug: 'badgr-cifrovye-beydzhi-2026', heroIcon: 'ph-fill ph-seal-check',
    title: 'Badgr и Open Badges: цифровые бейджи и сертификаты на своём сервере',
    metaTitle: 'Badgr и Open Badges: цифровые бейджи и сертификаты',
    metaDescription: 'Badgr Server (Open Badges) — open-source платформа выдачи цифровых бейджей и сертификатов за достижения: создание, выдача, проверка, коллекции. Для обучения, HR и лояльности, данные у себя (152-ФЗ) — разверну под ключ.',
    excerpt: 'Badgr выдаёт подтверждённые цифровые бейджи и сертификаты за достижения по стандарту Open Badges — для онлайн-школ, HR и программ лояльности, на вашем сервере. Разбираю, кому нужно и что требуется.',
    tags: ['Badgr', 'Open Badges', 'сертификаты', 'геймификация'],
    relatedSlugs: ['moodle-onlayn-obuchenie-2026', 'open-loyalty-programma-loyalnosti-2026', 'gamification-engine-dvizhok-2026'] }),
];
