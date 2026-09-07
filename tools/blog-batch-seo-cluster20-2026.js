// SEO-кластер 20: длинные автономные задачи ИИ-агента (класс задач, а не конкретная модель).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-07';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const AI_AGENTS = { url: `${S}/services/ai-agents/`, label: 'Обсудить внедрение агента' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'agent-dlya-dlinnyh-zadach-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-clock-countdown', ctaInternal: AI_AGENTS,
    title: 'Когда ИИ-агенту нужно работать сутками: длинные задачи без присмотра',
    metaTitle: 'ИИ-агент для длинных задач: работа без присмотра',
    metaDescription: 'Когда ИИ-агенту нужна длинная автономная работа: какие задачи требуют часов и суток, почему это риск и что настроить до запуска. Методика с практики.',
    excerpt: 'Есть задачи, которые нельзя закрыть одним запросом: разбор массива документов, мониторинг суток напролёт, поэтапная миграция. Разбираю, когда агенту нужна длинная автономная работа, чем она опасна и что я настраиваю, прежде чем отпускать агента надолго.',
    tags: ['ИИ-агенты', 'автономность', 'автоматизация', 'внедрение ИИ'],
    toc: [{ id: 'kakie-zadachi', text: 'Какие задачи вообще требуют долгой работы' }, { id: 'risk', text: 'Почему длинная автономность — это риск, а не фича' }, { id: 'rezhimy', text: 'Три режима работы агента' }, { id: 'metodika', text: 'Что я настраиваю, прежде чем отпускать агента надолго' }, ...FAQ_VYV],
    relatedSlugs: ['granica-avtonomnosti-ii-agenta-2026', 'bezopasnyy-dostup-ii-agenta-k-baze-2026', 'kak-udeshevit-ii-agenta-marshrutizaciya-modeley-2026', 'vnedrenie-ai-dorozhnaya-karta-90-dney-2026'] }),
];
