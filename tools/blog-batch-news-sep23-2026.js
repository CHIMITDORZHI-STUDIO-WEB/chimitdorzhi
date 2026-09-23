// Новости сентября 2026, разобранные в формате «новость → экспертный взгляд».
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-23';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const AI_AGENTS = { url: `${S}/services/ai-agents/`, label: 'Обсудить внедрение агента' };

const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 6, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'ii-agent-upravlyaet-smartfonom-2026', category: 'expert', heroIcon: 'ph-fill ph-device-mobile', ctaInternal: AI_AGENTS,
    title: 'ИИ-агент, который сам управляет смартфоном: что это меняет для бизнеса',
    metaTitle: 'ИИ-агент управляет смартфоном: что это меняет',
    metaDescription: 'Qwen Intelligence: три агента на смартфоне. Что заявлено, почему весов пока нет ни у одного, какие задачи это закрывает и где границы доступов.',
    excerpt: 'Qwen показала набор агентов, которые работают прямо на смартфоне: один разбирает задачу на шаги, второй выполняет её в приложениях, третий делает картинки. Разбираю, что именно заявлено, почему приоритет API над кликами важнее процентов в таблице и какие доступы надо резать до запуска.',
    tags: ['ИИ-агенты', 'мобильные устройства', 'открытые модели', 'автоматизация'],
    toc: [
      { id: 'chto-obyavleno', text: 'Что объявили' },
      { id: 'chto-v-pervoistochnikah', text: 'Что я нашёл в первоисточниках' },
      { id: 'pochemu-eto-drugoe', text: 'Чем это отличается от агента в браузере' },
      { id: 'api-ili-ekran', text: 'Почему важно, что сначала API, а не экран' },
      { id: 'chto-eto-daet-biznesu', text: 'Какие задачи это реально закрывает' },
      { id: 'gde-grabli', text: 'Где грабли' },
      { id: 'kak-proveryayu', text: 'Как я проверяю такие анонсы' },
      { id: 'faq', text: 'Частые вопросы' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    relatedSlugs: [
      'granica-avtonomnosti-ii-agenta-2026',
      'llm-9b-na-telefone-2026',
      'ai-agenty-v-biznese-2026',
      'zhurnal-raboty-ii-agenta-2026',
    ] }),
];
