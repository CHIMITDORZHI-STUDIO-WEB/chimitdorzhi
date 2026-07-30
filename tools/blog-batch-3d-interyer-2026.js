// Одиночная статья: ИИ-планировщик интерьера как инструмент продаж для
// мебельного салона и дизайнера. Отличается от 3D-конфигуратора товара
// (крутить готовую модель) и виртуальных туров (осмотр реального объекта):
// здесь ИИ проектирует комнату с нуля по описанию/фото.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-30';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_3D = {
  title: '3D-визуализация в воронку продаж',
  services: [
    { icon: 'ph-fill ph-cube', label: 'Планировщик комнаты на вашем сайте' },
    { icon: 'ph-fill ph-armchair', label: 'Расстановка вашей мебели в 3D' },
    { icon: 'ph-fill ph-camera', label: 'Реалистичные кадры для клиента' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Связка с каталогом и заявкой' },
  ],
  ctaLabel: 'Обсудить 3D-визуализацию', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'ii-planirovshchik-interyera-prodazhi-2026',
    category: 'ai-life',
    published: true,
    title: 'ИИ-планировщик интерьера: показать клиенту комнату до заказа',
    metaTitle: 'ИИ-планировщик интерьера как инструмент продаж',
    metaDescription: 'Как ИИ-редактор строит 3D-комнату по описанию или фото и помогает мебельному салону и дизайнеру продавать: клиент видит свой интерьер до покупки. Кому это окупается.',
    metaKeywords: 'ии планировщик интерьера, 3d планировщик комнаты, дизайн интерьера нейросеть, визуализация для мебельного салона, показать мебель в 3d, продажа мебели визуализация',
    excerpt: 'Клиент не может представить, как диван встанет в его гостиной, — и уходит думать. А если показать ему комнату в 3D прямо на встрече? Разбираю, как ИИ-планировщики интерьера превращаются в инструмент продаж для мебели и ремонта.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-cube',
    tags: ['3D', 'интерьер', 'ИИ', 'мебель', 'продажи', '2026'],
    toc: toc(
      ['problema', 'Почему клиент уходит «подумать»'],
      ['chto-eto', 'Что такое ИИ-планировщик интерьера'],
      ['otlichie', 'Чем отличается от конфигуратора и тура'],
      ['kak-prodaet', 'Как это помогает продавать'],
      ['komu-podhodit', 'Кому это окупается'],
      ['kak-vnedrit', 'Как встроить в продажи'],
      ['ogranicheniya', 'Ограничения и трезвый взгляд'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['three-js-3d-konfigurator-tovara-2026', 'neyroset-dlya-kartinok-2026', 'babylonjs-3d-vizualizaciya-2026', 'marketplace-dizaynerskoy-mebeli-2027'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/web-development/', label: 'Встроить 3D в продажи' },
    servicesOffer: SVC_3D,
    contentHtml: C('ii-planirovshchik-interyera-prodazhi-2026'),
  },
];
