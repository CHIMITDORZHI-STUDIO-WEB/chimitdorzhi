// Новости сентября 2026 (25.09), формат «новость → экспертный взгляд».
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-25';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const AI_AGENTS = { url: `${S}/services/ai-agents/`, label: 'Обсудить симуляцию под задачу' };

const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 5, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'agora-2-model-mira-diablo-2026', category: 'expert', heroIcon: 'ph-fill ph-robot', ctaInternal: AI_AGENTS,
    title: 'Diablo II без Diablo II: модель мира Agora-2 для бизнеса и киберспорта',
    metaTitle: 'Agora-2 (Агора-2): модель мира на Diablo II и где её применить',
    metaDescription: 'Odyssey Agora-2 рисует Diablo II без движка для 20 людей и ИИ-агентов. Разбираю, как это устроено и где многоагентные симуляции работают уже сейчас.',
    excerpt: 'Odyssey показала Agora-2: игру по мотивам Diablo II, где каждый кадр рисует нейросеть, а в одном мире действуют до 20 людей и ИИ-агентов. Разбираю, как это устроено, чего пока нельзя и где та же идея уже даёт результат: киберспорт, тренажёры продаж, проверка цен и регламентов.',
    tags: ['ИИ-агенты', 'модели мира', 'киберспорт', 'симуляции'],
    toc: [
      { id: 'chto-pokazali', text: 'Что показала Odyssey' },
      { id: 'kak-ustroeno', text: 'Как это устроено' },
      { id: 'zachem-eto-odyssey', text: 'Зачем Odyssey это делает' },
      { id: 'chto-nelzya', text: 'Чего пока нельзя' },
      { id: 'gde-primenit', text: 'Где эта идея работает уже сейчас' },
      { id: 'kak-sobiraem', text: 'Как мы собираем такую симуляцию' },
      { id: 'faq', text: 'Частые вопросы' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    relatedSlugs: [
      'ai-agenty-v-biznese-2026',
      'igrovoy-trenazher-standartov-servisa-2026',
      'godot-trenazhery-obucheniya-2026',
      'ii-agent-upravlyaet-smartfonom-2026',
    ] }),
];
