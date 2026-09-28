// Тематические статьи 27.09.2026, OpenHD: HD-видео с дрона для агро и инспекции.
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
  E({ slug: "openhd-dron-hd-video-dlya-biznesa-2026", category: "opensource", heroIcon: "ph-fill ph-drone", ctaInternal: { url: "https://chimitdorzhi.tech/services/ai-analytics/", label: "Собрать аэромониторинг под задачу" },
    title: "OpenHD: HD-видео с дрона на 50 км без 4G и вендоров",
    metaTitle: "OpenHD: HD-видео с дрона по Wi-Fi для бизнеса",
    metaDescription: "OpenHD передаёт HD-видео и телеметрию с дрона по Wi-Fi без 4G: задержка около 100 мс, дальность за 50 км. Где это работает в агро и инспекции.",
    excerpt: "OpenHD это открытая система передачи HD-видео и телеметрии с дрона по обычным Wi-Fi адаптерам, без сотовой сети. Задержка около 100 мс, дальность за 50 км, лицензия GPL v3. Разбираю, где это даёт результат в агромониторинге и инспекции объектов и почему это компонент для инженера, а не коробка.",
    tags: ["дроны","OpenHD","видеоаналитика","агромониторинг"],
    toc: [
      { id: "bol", text: "Дрон улетел за поле, а картинка пропала" },
      { id: "chto-umeet", text: "Что OpenHD умеет на самом деле" },
      { id: "zhelezo", text: "На каком железе это собирается" },
      { id: "gde-biznes", text: "Где это приносит деньги" },
      { id: "ogranicheniya", text: "Что важно учесть, прежде чем радоваться" },
      { id: "chto-sdelat", text: "Что можно сделать уже сейчас" },
      { id: "faq", text: "Частые вопросы" },
      { id: "vyvody", text: "Коротко о главном" },
    ],
    relatedSlugs: ["opendronemap-obrabotka-dron-semki-2026","kompyuternoe-zrenie-kak-mashiny-vidyat-2027","sputnikovyy-monitoring-selskogo-hozyaystva-2027","viseron-ai-videonablyudenie-2026"] }),
];
