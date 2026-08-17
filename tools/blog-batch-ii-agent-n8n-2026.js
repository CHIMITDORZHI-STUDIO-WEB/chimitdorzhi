// ИИ-агент на n8n: связать нейросеть с мессенджерами и CRM без кода.
// Достраивает существующую опору n8n-avtomatizaciya-bez-zapier-2026 (не дубль).
const C = (s) => require('./blog-content-' + s + '.js');

module.exports = [
  {
    slug: 'ai-agent-na-n8n-messendzhery-crm-2026',
    category: 'ai-dev',
    published: true,
    datePublished: '2026-08-11', dateModified: '2026-08-11',
    readingMinutes: 5, shortForm: true,
    heroIcon: 'ph-fill ph-flow-arrow',
    title: 'ИИ-агент на n8n: связать нейросеть с мессенджерами и CRM без кода',
    metaTitle: 'ИИ-агент на n8n: нейросеть, мессенджеры, CRM',
    metaDescription: 'Как на n8n собрать ИИ-агента, который принимает сообщения, думает нейросетью и пишет в CRM — визуально, без программиста и на своём сервере.',
    metaKeywords: 'ии агент на n8n, n8n нейросеть, автоматизация с ии без кода, n8n whatsapp бот, n8n gigachat, связать нейросеть с crm, ии агент без программиста',
    excerpt: 'n8n умеет не только гонять данные между сервисами, но и подключать нейросеть в середину процесса. Разбираю, как собрать на n8n ИИ-агента, который принимает сообщения из мессенджера, обрабатывает их нейросетью и пишет результат в CRM — визуально и без программиста.',
    tags: ['ИИ', 'n8n', 'автоматизация', 'без кода', '2026'],
    toc: [
      { id: 'chto-eto', text: 'n8n плюс нейросеть: что это даёт' },
      { id: 'kak-rabotaet', text: 'Как устроен ИИ-агент на n8n' },
      { id: 'scenarii', text: 'Готовые сценарии для бизнеса' },
      { id: 'granica', text: 'Где n8n хватает, а где нет' },
      { id: 'faq', text: 'Частые вопросы' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    relatedSlugs: ['n8n-avtomatizaciya-bez-zapier-2026', 'ai-agenty-v-biznese-2026', 'kak-sozdat-ai-agenta-2026', 'ai-chatbot-na-sayt-bez-programmirovaniya-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/ai-vnedrenie-90-dney/', label: 'Собрать ИИ-агента' },
    servicesOffer: {
      title: 'Что я делаю на n8n и ИИ',
      services: [
        { icon: 'ph-fill ph-flow-arrow', label: 'ИИ-агенты и автоматизации на n8n' },
        { icon: 'ph-fill ph-plugs-connected', label: 'Связка с мессенджерами, сайтом и CRM' },
        { icon: 'ph-fill ph-hard-drives', label: 'На вашем сервере, без облака' },
        { icon: 'ph-fill ph-shield-check', label: 'Данные в вашем периметре, 152-ФЗ' },
      ],
      ctaLabel: 'Обсудить автоматизацию', ctaUrl: 'https://t.me/chimitdorzhi',
    },
    contentHtml: C('ai-agent-na-n8n-messendzhery-crm-2026'),
  },
];
