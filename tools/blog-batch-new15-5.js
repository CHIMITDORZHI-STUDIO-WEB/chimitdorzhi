// Одиночная статья: 3D-тур (панорамный тур 360°) для гостиницы, базы отдыха и салона.
// Зачем нужен, как снимают, где размещать (сайт, Яндекс Панорамы), свой хостинг на Pannellum,
// кнопка брони из тура. Цены из prices-data. Ведёт на предложение 3D/VR-туров.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-10';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_3D_TUR = {
  title: '3D-туры для гостиниц, баз отдыха и салонов',
  services: [
    { icon: 'ph-fill ph-camera', label: 'Съёмка панорам 360° на объекте' },
    { icon: 'ph-fill ph-panorama', label: 'Сборка тура на сайте без подписки' },
    { icon: 'ph-fill ph-map-pin', label: 'Подготовка панорам для Яндекс Карт' },
    { icon: 'ph-fill ph-calendar-check', label: 'Кнопка брони номера прямо из тура' },
  ],
  ctaLabel: 'Посчитать 3D-тур', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: '3d-tur-dlya-gostinicy-bazy-otdyha-salona-2026',
    category: 'industries',
    published: true,
    title: '3D-тур для гостиницы, базы отдыха и салона: зачем и сколько стоит',
    metaTitle: '3D-тур для гостиницы и базы отдыха: зачем нужен и цена',
    metaDescription: '3D-тур для гостиницы, базы отдыха или салона: что это, как снимают, как разместить на сайте и Яндекс Картах. Заказать от 40 000 ₽, срок от 3 дней.',
    metaKeywords: '3d тур для гостиницы, виртуальный тур для базы отдыха, 3д тур заказать цена, панорамный тур 360, виртуальный тур для отеля, 3d тур для салона, интерьерные панорамы яндекс карты',
    excerpt: 'Что такое 3D-тур и чем он отличается от фотогалереи, где он реально помогает гостинице, базе отдыха, глэмпингу и салону, как снимают панорамы 360°, как попасть на Яндекс Карты, зачем свой хостинг на Pannellum и как поставить кнопку брони прямо в номере. Цены от 40 000 ₽.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-panorama',
    tags: ['3D-тур', 'виртуальный тур', 'гостиницы', 'база отдыха', 'бронирование'],
    toc: toc(
      ['chto-takoe', '3D-тур для гостиницы: чем он отличается от фотогалереи'],
      ['gde-pomogaet', 'Где тур помогает и где он лишний'],
      ['kak-snimayut', 'Как снимают тур: камера, точки, свет'],
      ['gde-razmeshchat', 'Где разместить тур: сайт, Яндекс Карты и 2ГИС'],
      ['hosting', 'Свой хостинг или сервис по подписке'],
      ['bronirovanie', 'Кнопка «Забронировать этот номер» прямо из тура'],
      ['kak-delayu', 'Как я делаю 3D-тур: методика'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['pannellum-virtualnye-tury-2026', 'glamping-bazy-otdyha-2026', 'posutochnaya-arenda-bez-komissii-2026', 'bronirovanie-turov-ekskursiy-baykal-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/vr-tury-nedvizhimost/', label: '3D/VR-туры и виртуальные показы' },
    servicesOffer: SVC_3D_TUR,
    contentHtml: C('3d-tur-dlya-gostinicy-bazy-otdyha-salona-2026'),
  },
];
