// SEO-кластер 30: лицензии открытых моделей по слоям.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-10';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const OSS = { url: `${S}/predlozheniya/open-source-pod-klyuch/`, label: 'Развернуть open-source под ключ' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ, ctaInternal: OSS }, o, { contentHtml: C(o.slug) });

module.exports = [

  E({ slug: 'licenzii-otkrytyh-modeley-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-certificate',
    title: 'Открытая модель под MIT — а использовать нельзя: как читать лицензии по слоям',
    metaTitle: 'Лицензии открытых моделей: можно ли использовать в бизнесе',
    metaDescription: 'У рабочей ИИ-системы лицензия не одна: код, веса, вспомогательные модели, данные. Право использовать определяет самый строгий слой, а не заголовок новости.',
    excerpt: 'Заголовок «модель под MIT» описывает один слой из четырёх. Разбираю на свежих примерах, где прячется несвободный компонент, почему им чаще всего оказывается вспомогательная модель и какие четыре вопроса закрывают большую часть рисков.',
    tags: ['лицензии', 'открытые модели', 'внедрение ИИ', 'риски'],
    toc: [
      { id: 'sloi', text: 'Из чего состоит лицензия рабочей системы' },
      { id: 'primer', text: 'Свежий пример: MIT, который не про всю систему' },
      { id: 'drugie', text: 'Это не единичный случай' },
      { id: 'proverka', text: 'Четыре вопроса перед внедрением' },
      { id: 'chto-delat', text: 'Что делать, если слой оказался несвободным' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['raspoznavanie-lic-otkrytyy-sdk-2026', 'klonirovanie-golosa-na-svoem-servere-2026', 'otkrytaya-model-cena-rassuzhdeniy-2026', 'kakoy-lokalnyy-llm-vybrat-2026'] }),

];
