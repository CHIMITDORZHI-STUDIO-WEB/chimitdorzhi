// Кластер «Open-source и свой сервер», часть 23: игровые технологии для бизнеса (4 статьи).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-06-16';
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
  title: 'Что я делаю с игровыми технологиями',
  services: [
    { icon: 'ph-fill ph-game-controller', label: 'Промо-игры и интерактивы' },
    { icon: 'ph-fill ph-graduation-cap', label: 'Тренажёры и обучение' },
    { icon: 'ph-fill ph-plugs', label: 'Интеграция с сайтом, ботом, CRM' },
    { icon: 'ph-fill ph-shield-check', label: 'Сбор лидов и 152-ФЗ' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Поддержка и доработки' },
  ],
};
const CTA = { url: 'https://chimitdorzhi.tech/predlozheniya/open-source-pod-klyuch/', label: 'Заказать разработку под ключ' };
const E = (o) => Object.assign({
  category: 'opensource', published: true, datePublished: D, dateModified: D, readingMinutes: 10,
  servicesOffer: SVC, toc: TOC, ctaInternal: CTA,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'phaser-promo-igry-dlya-biznesa-2026', heroIcon: 'ph-fill ph-game-controller',
    title: 'Phaser: браузерные промо-игры для бизнеса (вовлечение, акции, лиды)',
    metaTitle: 'Phaser: промо-игры для бизнеса',
    metaDescription: 'Phaser — open-source движок HTML5-игр для бизнеса: колесо фортуны, аркада за приз, мини-квиз в сайт, лендинг и бот. Вовлечение в акциях и сбор лидов, данные у себя. Разработаю промо-игру под ключ.',
    excerpt: 'Phaser — это браузерные промо-игры для акций: колесо фортуны, аркада за скидку, квиз в сайт или бот, со сбором контактов. Вовлекает аудиторию в кампании. Разбираю, кому подходит и как заказать разработку под ключ.',
    tags: ['Phaser', 'промо-игры', 'геймификация', 'open-source'],
    relatedSlugs: ['gdevelop-promo-igry-bez-koda-2026', 'pixijs-interaktiv-dlya-lendingov-2026', 'classquiz-kviz-igry-2026'] }),
  E({ slug: 'gdevelop-promo-igry-bez-koda-2026', heroIcon: 'ph-fill ph-cursor-click',
    title: 'GDevelop: промо-игры для бизнеса без кода — быстро и недорого',
    metaTitle: 'GDevelop: промо-игры без кода для бизнеса',
    metaDescription: 'GDevelop — open-source конструктор игр без кода: быстрые промо-игры под маркетинговые акции (колесо фортуны, аркады, квизы) с экспортом в web и мобайл. Дешевле полной разработки, правки под кампанию. Сделаю под ключ.',
    excerpt: 'GDevelop собирает промо-игры без кода — быстрее и дешевле под короткие акции, с лёгкими правками под кампанию. Для маркетологов и малого бизнеса. Разбираю, когда брать GDevelop, а когда Phaser, и как заказать.',
    tags: ['GDevelop', 'промо-игры', 'no-code', 'open-source'],
    relatedSlugs: ['phaser-promo-igry-dlya-biznesa-2026', 'pixijs-interaktiv-dlya-lendingov-2026', 'classquiz-kviz-igry-2026'] }),
  E({ slug: 'pixijs-interaktiv-dlya-lendingov-2026', heroIcon: 'ph-fill ph-sparkle',
    title: 'PixiJS: лёгкие интерактивы и мини-игры для лендингов и рассылок',
    metaTitle: 'PixiJS: интерактивы для лендингов и рассылок',
    metaDescription: 'PixiJS — open-source 2D-движок рендеринга на WebGL: скретч-карты «сотри и выиграй», интерактивные баннеры, анимации и мини-игры для лендингов и рассылок. Удерживает внимание и собирает контакты. Разработаю под ключ.',
    excerpt: 'PixiJS — это лёгкие интерактивы для лендингов и рассылок: скретч-карты, анимированные промо-блоки, мини-игры, геймифицированные опросы. Задерживают внимание и собирают контакты. Разбираю применение и как заказать.',
    tags: ['PixiJS', 'интерактив', 'лендинг', 'open-source'],
    relatedSlugs: ['phaser-promo-igry-dlya-biznesa-2026', 'gdevelop-promo-igry-bez-koda-2026', 'remotion-video-iz-shablonov-2026'] }),
  E({ slug: 'godot-trenazhery-obucheniya-2026', heroIcon: 'ph-fill ph-student',
    title: 'Godot: серьёзные игры и тренажёры для обучения персонала',
    metaTitle: 'Godot: тренажёры и serious games для обучения',
    metaDescription: 'Godot — свободный игровой движок для serious games и тренажёров: онбординг, охрана труда, отработка процедур и продаж в игровой форме, с экспортом в web. Вовлечение и запоминание выше, чем у видео и PDF. Разработаю тренажёр под ключ.',
    excerpt: 'Godot позволяет сделать обучающий тренажёр или симулятор для персонала — онбординг, охрана труда, отработка процедур в игровой форме, что вовлекает сильнее видео и PDF. Для HR и производства. Разбираю и как заказать.',
    tags: ['Godot', 'serious games', 'обучение', 'open-source'],
    relatedSlugs: ['moodle-onlayn-obuchenie-2026', 'h5p-interaktivnye-uroki-2026', 'classquiz-kviz-igry-2026'] }),
];
