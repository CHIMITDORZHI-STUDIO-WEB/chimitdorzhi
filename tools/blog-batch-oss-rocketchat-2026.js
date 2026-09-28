// Тематические статьи 27.09.2026, Rocket.Chat: корпоративный мессенджер на своём сервере.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-27';
const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });
module.exports = [
  E({ slug: "rocketchat-korporativnyy-messendzher-2026", category: "opensource", heroIcon: "ph-fill ph-rocket-launch", ctaInternal: { url: "https://chimitdorzhi.tech/services/it-infrastructure/", label: "Развернуть Rocket.Chat на своём сервере" },
    title: "Rocket.Chat: корпоративный мессенджер на своём сервере под ключ",
    metaTitle: "Rocket.Chat: мессенджер на своём сервере под ключ",
    metaDescription: "Rocket.Chat это открытый корпоративный мессенджер на своём сервере или в закрытой сети без интернета. Переписка компании остаётся у вас. Разворачиваем под ключ.",
    excerpt: "Rocket.Chat переносит рабочую переписку из личных вотсапов и телеграмов сотрудников на сервер компании. Открытый код под лицензией MIT, установка на своё железо, работа даже в закрытом контуре без интернета. Честно разбираем лимиты бесплатной версии и что вынесено в платные модули.",
    tags: ["Rocket.Chat","мессенджер","open-source","закрытый контур"],
    toc: [
      { id: "perepiska-uhodit", text: "Переписка компании живёт в чужих телефонах" },
      { id: "chto-eto", text: "Что такое Rocket.Chat" },
      { id: "chto-umeet", text: "Что он умеет" },
      { id: "zakrytyy-kontur", text: "Работа без интернета, в закрытой сети" },
      { id: "chto-uchest", text: "Что важно учесть честно" },
      { id: "chto-sdelat", text: "Что можно сделать уже сейчас" },
      { id: "faq", text: "Частые вопросы" },
      { id: "vyvody", text: "Коротко о главном" },
    ],
    relatedSlugs: ["mattermost-korporativnyy-messenger-2026","matrix-element-korporativnyy-messenger-2026","keycloak-edinyy-vhod-sso-2026","white-label-korporativnyy-messendzher-2026"] }),
];
