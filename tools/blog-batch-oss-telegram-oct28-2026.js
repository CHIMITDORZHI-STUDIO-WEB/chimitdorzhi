// Карта разборов open source по задачам бизнеса
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-28';
const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });
module.exports = [
  E({ slug: "open-source-dlya-biznesa-karta-razborov-po-zadacham-oktyabr-2026", category: "opensource", heroIcon: "ph-fill ph-compass", ctaInternal: { url: "https://chimitdorzhi.tech/services/devops/", label: "Подобрать и развернуть open source под вашу задачу" },
    title: "Open source для бизнеса: карта разборов по задачам",
    metaTitle: "Open source для бизнеса: карта разборов 2026 по задачам",
    metaDescription: "Карта разборов open source за октябрь 2026: 67 проектов по задачам бизнеса, главное ограничение каждого и таблица лицензий, которые меняют выбор.",
    excerpt: "Карта из девяти групп: ИИ-агенты, документы, знания, продажи, сайт, сеть, мониторинг, медиа и модели. Для каждого проекта одна строка и ссылка на разбор, плюс таблица лицензий.",
    tags: ["open source","карта разборов","self-hosted","выбор решения"],
    toc: [
      { id: "kak-chitat", text: "Как пользоваться картой" },
      { id: "ii-agenty", text: "ИИ-агенты: что им разрешать" },
      { id: "dokumenty", text: "Документы, сканы и файлы" },
      { id: "znaniya", text: "Знания, офис и таблицы" },
      { id: "klienty", text: "Клиенты, продажи и магазин" },
      { id: "sayt", text: "Сайт и бэкенд" },
      { id: "seti", text: "Сеть, доступы и защита" },
      { id: "monitoring", text: "Мониторинг и сервер" },
      { id: "media", text: "Звук, видео и изображения" },
      { id: "modeli", text: "Модели, железо и проверка проектов" },
      { id: "licenzii", text: "Где лицензия меняет решение" },
      { id: "faq", text: "Частые вопросы" },
      { id: "vyvody", text: "Коротко о главном" },
    ],
    relatedSlugs: ["starsift-kak-proverit-chto-u-open-source-proekta-nastoyaschie-zvezdy-pered-vnedreniem-2026","kak-proverit-populyarnost-open-source-pered-vnedreniem-nakrutka-zvezd-github-i-starsift-2026","passbolt-obshchie-paroli-komandy-na-svoem-servere-dostupy-podryadchikam-2026","shellfirm-zashchita-ot-opasnyh-komand-ii-agenta-v-terminale-2026","self-hosting-guide-spravochnik-po-perehodu-na-svoi-servisy-chto-pereezzhat-biznesu-2026"] }),
];
