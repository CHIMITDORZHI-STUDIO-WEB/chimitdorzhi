// Статьи 22.10.2026: Claude Duet, Yahont CE.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-22';
const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });
module.exports = [
  E({ slug: "claude-duet-lichnyy-agent-kotoryy-pishet-pervym-chto-eto-dlya-biznesa-2026", category: "security", heroIcon: "ph-fill ph-bell-ringing", ctaInternal: { url: "https://chimitdorzhi.tech/services/ai-agents/", label: "ИИ-агенты под ключ: расписание, подтверждения, журнал" },
    title: "Claude Duet: агент, который пишет первым, и что взять бизнесу",
    metaTitle: "Claude Duet (Клод Дуэт): агент, который пишет первым",
    metaDescription: "Anthropic выпустила Claude Duet в preview для США. Чем агент с инициативой отличается от чат-бота, какие риски и чек-лист из 7 границ для своего агента.",
    excerpt: "21 октября 2026 года Anthropic представила Claude Duet: агента, который присылает утреннюю сводку и пишет сам, когда нужно решение. Разобрал, что подтверждено по первоисточнику (preview, лист ожидания, США, Pro и Max, подтверждения перед отправкой и платежами), чего на странице нет, и как построить свой аналог с границами: расписание, разрешённые действия, журнал и рубильник.",
    tags: ["Claude Duet","ИИ-агенты","безопасность агентов","Anthropic"],
    toc: [
      { id: "chto-obyavili", text: "Что объявила Anthropic и что я проверил" },
      { id: "podtverzhdeno", text: "Что подтверждено про разрешения и данные, а чего нет" },
      { id: "otlichie", text: "Чем агент, который пишет первым, отличается от чат-бота" },
      { id: "riski", text: "Какие риски появляются вместе с инициативой" },
      { id: "chek-list", text: "Свой агент с границами: чек-лист из семи пунктов" },
      { id: "chto-sdelat", text: "Что можно сделать уже сейчас: пилот на одной задаче" },
      { id: "faq", text: "Частые вопросы" },
      { id: "vyvody", text: "Коротко о главном" },
    ],
    relatedSlugs: ["granica-avtonomnosti-ii-agenta-2026","hy-memory-2-0-dolgaya-pamyat-ii-agentov-chto-nelzya-zapominat-2026","ii-agent-zadachi-po-raspisaniyu-2026","chatgpt-personalnye-agenty-dots-malyy-biznes-2026"] }),
  E({ slug: "yahont-ce-otkrytaya-platforma-ii-pomoshchnika-po-dokumentam-pochte-i-servisam-2026", category: "opensource", heroIcon: "ph-fill ph-file-magnifying-glass", ctaInternal: { url: "https://chimitdorzhi.tech/services/ai-agents/", label: "ИИ-агенты: пилот поиска по документам с проверкой прав доступа" },
    title: "Yahont CE: ИИ по документам и почте на своём сервере",
    metaTitle: "Yahont CE (Яхонт): ИИ по документам и почте на своём сервере",
    metaDescription: "Yahont CE ищет по документам и почте со ссылками на источники. Разбор: лицензия MIT и Enterprise, права доступа, коннекторы, установка и пилот.",
    excerpt: "Yahont CE это русскоязычная сборка открытой платформы Onyx: вопросы обычным языком по документам, почте и вики, ответы со ссылками на источники, установка на свой сервер. Разбираю лицензию (MIT и папки под Onyx Enterprise), что вырезано в Community Edition, почему права доступа главный риск и как проверить платформу пилотом на 50 документах и 20 вопросах.",
    tags: ["Yahont","ИИ по документам","RAG","open source"],
    toc: [
      { id: "vopros-pro-dogovor", text: "Вопрос про договор, на который отвечает ИИ" },
      { id: "ce-i-litsenziya", text: "Что значит CE и что под какой лицензией" },
      { id: "prava-dostupa", text: "Права доступа: бухгалтер и документы директора" },
      { id: "kuda-uhodyat-dannye", text: "Где лежат данные и куда они уходят" },
      { id: "konnektory-i-ustanovka", text: "Коннекторы и установка" },
      { id: "chek-list", text: "Что важно учесть: чек-лист из семи пунктов" },
      { id: "chto-sdelat", text: "Что можно сделать уже сейчас: пилот на 50 документах" },
      { id: "faq", text: "Частые вопросы" },
      { id: "vyvody", text: "Коротко о главном" },
    ],
    relatedSlugs: ["khoj-ii-assistent-baza-znaniy-2026","obshchiy-ii-assistent-na-otdel-roli-pamyat-prava-2026","rag-na-svoih-dokumentah-lokalno-2026","mcp-toolbox-ii-agent-zadaet-voprosy-baze-dannyh-kompanii-2026"] }),
];
