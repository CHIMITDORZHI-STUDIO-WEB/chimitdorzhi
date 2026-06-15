// Кластер «Open-source и свой сервер», часть 14: рост в соцсетях (5 обзоров).
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
  E({ slug: 'mixpost-smm-tsentr-2026', heroIcon: 'ph-fill ph-megaphone',
    title: 'Mixpost: командный SMM-центр и автопостинг во все соцсети на своём сервере',
    metaTitle: 'Mixpost: SMM-центр и автопостинг на сервере',
    metaDescription: 'Mixpost — open-source платформа планирования и автопостинга во все соцсети (аналог Buffer/Hootsuite): единый календарь, очередь, командная работа, мультиаккаунты, аналитика. Без абонентки, данные у себя — разверну под ключ.',
    excerpt: 'Mixpost — это свой SMM-центр: планирование и автопостинг во все соцсети из одного окна, командная работа и аналитика, на вашем сервере и без подписок за каждого специалиста. Разбираю, кому подходит и что нужно.',
    tags: ['Mixpost', 'SMM', 'автопостинг', 'open-source'],
    relatedSlugs: ['postiz-avtoposting-socseti-2026', 'remotion-video-iz-shablonov-2026', 'matomo-veb-analitika-2026'] }),
  E({ slug: 'discourse-soobschestvo-forum-2026', heroIcon: 'ph-fill ph-users-three',
    title: 'Discourse: своё сообщество и форум на своём сервере',
    metaTitle: 'Discourse: своё сообщество и форум на сервере',
    metaDescription: 'Discourse — ведущая open-source платформа онлайн-сообществ и форумов: темы, обсуждения, репутация, модерация, уведомления, единый вход. Превратите подписчиков соцсетей в свою аудиторию, данные у себя — разверну под ключ.',
    excerpt: 'Discourse превращает подписчиков соцсетей в собственное сообщество, которым владеете вы, а не алгоритмы: обсуждения, репутация, база знаний и UGC на вашем сервере. Разбираю возможности и запуск.',
    tags: ['Discourse', 'сообщество', 'форум', 'open-source'],
    relatedSlugs: ['mixpost-smm-tsentr-2026', 'peertube-svoya-videoplatforma-2026', 'ghost-blog-s-podpiskoy-2026'] }),
  E({ slug: 'peertube-svoya-videoplatforma-2026', heroIcon: 'ph-fill ph-video',
    title: 'PeerTube: своя видеоплатформа (аналог YouTube) на своём сервере',
    metaTitle: 'PeerTube: своя видеоплатформа на сервере',
    metaDescription: 'PeerTube — open-source видеоплатформа (аналог YouTube): загрузка и хостинг видео, каналы, подписки, плейлисты, встраивание плеера, трансляции. Канал не заблокируют и не урежут алгоритмом, контент у вас — разверну под ключ.',
    excerpt: 'PeerTube — это свой видеохостинг на своём домене: каналы, подписки, встраивание плеера в сайт. Видео и аудитория остаются у вас, без риска блокировки и алгоритмов чужой платформы. Разбираю запуск.',
    tags: ['PeerTube', 'видео', 'видеохостинг', 'open-source'],
    relatedSlugs: ['owncast-svoya-strim-platforma-2026', 'remotion-video-iz-shablonov-2026', 'discourse-soobschestvo-forum-2026'] }),
  E({ slug: 'remotion-video-iz-shablonov-2026', heroIcon: 'ph-fill ph-film-strip',
    title: 'Remotion: массовое производство коротких видео из шаблонов',
    metaTitle: 'Remotion: короткие видео из шаблонов на потоке',
    metaDescription: 'Remotion — open-source фреймворк для создания видео кодом: один шаблон плюс данные из таблицы дают десятки роликов автоматически. Конвейер коротких видео (Reels/Shorts) для охватов, рендер на сервере — соберу под ключ.',
    excerpt: 'Remotion генерирует короткие видео из шаблонов и данных на потоке: десятки Reels и Shorts без ручного монтажа. Это инструмент разработчика — нужен сервер и настройка пайплайна. Разбираю честно.',
    tags: ['Remotion', 'видео', 'Reels', 'open-source'],
    relatedSlugs: ['mixpost-smm-tsentr-2026', 'peertube-svoya-videoplatforma-2026', 'excalidraw-infografika-karuseli-2026'] }),
  E({ slug: 'excalidraw-infografika-karuseli-2026', heroIcon: 'ph-fill ph-pen-nib',
    title: 'Excalidraw: свой редактор инфографики и каруселей для соцсетей',
    metaTitle: 'Excalidraw: свой редактор инфографики на сервере',
    metaDescription: 'Excalidraw — open-source редактор схем, инфографики и каруселей: командная работа в реальном времени, фирменные шаблоны, экспорт в PNG/SVG. Визуальный контент без водяных знаков и лимитов Canva, файлы у себя — разверну под ключ.',
    excerpt: 'Excalidraw — это свой редактор каруселей, схем и инфографики на сервере: без водяных знаков и абонентки Canva, с фирменными шаблонами и данными у себя. Визуал, который собирает сохранения и репосты. Разбираю запуск.',
    tags: ['Excalidraw', 'инфографика', 'карусели', 'open-source'],
    relatedSlugs: ['remotion-video-iz-shablonov-2026', 'mixpost-smm-tsentr-2026', 'cryptpad-privatnyy-ofis-2026'] }),
];
