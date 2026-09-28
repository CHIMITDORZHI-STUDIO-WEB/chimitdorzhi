// Тематические статьи 27.09.2026, GitHub-тренд 28.09.2026: magpie и GoLive (для тех, кто строит на ИИ).
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
  E({ slug: "magpie-shlyuz-k-ii-modelyam-2026", category: "ai-dev", heroIcon: "ph-fill ph-plugs-connected", ctaInternal: { url: "https://chimitdorzhi.tech/services/ai-agents/", label: "Собрать шлюз к моделям под ваш стек" },
    title: "magpie: один локальный шлюз к моделям для всех ИИ-агентов",
    metaTitle: "magpie: шлюз к ИИ-моделям для Codex, Claude Code, OpenCode",
    metaDescription: "magpie держит один локальный endpoint (OpenAI и Anthropic API) для всех ИИ-агентов и сводит провайдеров и модели в общий каталог. Как это устроено и что учесть.",
    excerpt: "magpie это открытый инструмент из меню-бара: один локальный endpoint на трёх API-стандартах, куда смотрят Codex, Claude Code и OpenCode, и общий каталог моделей любого провайдера. Разбираю, как он переиспользует уже залогиненные подписки без переноса ключей и где у него границы.",
    tags: ["ИИ-агенты","локальные модели","opensource","провайдеры LLM"],
    toc: [
      { id: "zoopark-agentov", text: "Зоопарк агентов и ключей" },
      { id: "chto-takoe-magpie", text: "Что делает magpie" },
      { id: "podpiski-kak-provaydery", text: "Подписки как провайдеры" },
      { id: "presety-katalog", text: "Пресеты и локальные модели в одном списке" },
      { id: "chto-uchest", text: "Что важно учесть" },
      { id: "chto-sdelat", text: "Что можно сделать уже сейчас" },
      { id: "faq", text: "Частые вопросы" },
      { id: "vyvody", text: "Коротко о главном" },
    ],
    relatedSlugs: ["kak-udeshevit-ii-agenta-marshrutizaciya-modeley-2026","ollama-vs-lm-studio-2026","mcp-model-context-protocol-2026","ai-agenty-v-biznese-2026"] }),
  E({ slug: "golive-skill-zapusk-ii-prilozheniya-v-prod-2026", category: "development", heroIcon: "ph-fill ph-rocket-launch", ctaInternal: { url: "https://chimitdorzhi.tech/services/devops/", label: "Обсудить вывод в прод" },
    title: "GoLive: агент написал код, а вывести в прод помогает скилл",
    metaTitle: "GoLive: вывод ИИ-приложения в прод на своих аккаунтах",
    metaDescription: "GoLive, открытый Agent Skill и Node-CLI, выводит ИИ-приложение в прод на ваших аккаунтах: хостинг, домен, почта, оплата. Разбираю, что работает и где нет.",
    excerpt: "На GitHub выложили GoLive: открытый Agent Skill и Node-CLI, который помогает вывести в прод приложение, собранное ИИ-агентом. Он определяет, что нужно приложению, планирует, спрашивает подтверждение, применяет на ваших аккаунтах и проверяет. Разбираю цикл, набор провайдеров, честные ограничения альфы и что делать с этим на российском стеке.",
    tags: ["ИИ-агенты","деплой","MVP","open source"],
    toc: [
      { id: "kod-gotov", text: "Код готов, а выложить некому" },
      { id: "chto-takoe-golive", text: "Что это за инструмент" },
      { id: "kak-rabotaet", text: "Как он выводит приложение в прод" },
      { id: "kakie-servisy", text: "Какие сервисы он подключает" },
      { id: "gde-ne-srabotaet", text: "Где это не сработает и что учесть в России" },
      { id: "chto-sdelat-seychas", text: "Что можно сделать уже сейчас" },
      { id: "faq", text: "Частые вопросы" },
      { id: "vyvody", text: "Коротко о главном" },
    ],
    relatedSlugs: ["svoy-vps-s-nulya-docker-nginx-https-2026","coolify-svoya-platforma-deploya-2026","mvp-to-production-3-mesyatsa-2026","pochemu-rossiyskiy-stek-i-self-hosted-2026"] }),
];
