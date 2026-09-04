// SEO-кластер 14: безопасный доступ ИИ-агента к базе данных (режим только для чтения, права СУБД, инъекции через данные).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-04';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const AI_AGENTS = { url: `${S}/services/ai-agents/`, label: 'Подключить агента безопасно' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 5, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'bezopasnyy-dostup-ii-agenta-k-baze-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-database', ctaInternal: AI_AGENTS,
    title: 'Безопасный доступ ИИ-агента к базе данных: почему только чтение и как это настроить',
    metaTitle: 'Доступ ИИ-агента к базе данных: только чтение',
    metaDescription: 'Как безопасно дать ИИ-агенту доступ к базе данных: почему только чтение, отдельный пользователь СУБД, реплика, маскирование полей и защита от инъекций.',
    excerpt: 'ИИ-агент полезен только тогда, когда отвечает по вашим данным. Разбираю, почему ему нельзя давать те же права, что человеку, и как настроить доступ так, чтобы агент искал, но ничего не сломал и не показал лишнего.',
    tags: ['ИИ-агенты', 'базы данных', 'безопасность', 'права доступа', '152-ФЗ'],
    toc: [{ id: 'zachem-i-risk', text: 'Зачем агенту база и в чём риск' }, { id: 'inekcii', text: 'Инъекции через данные' }, { id: 'tolko-chtenie', text: 'Режим только для чтения и уровни защиты' }, { id: 'sposoby', text: 'Три способа подключить агента к данным' }, { id: 'metodika', text: 'Как я подключаю агента: методика' }, ...FAQ_VYV],
    relatedSlugs: ['torgovye-ii-agenty-dlya-magazina-2026', 'mcp-model-context-protocol-2026', 'ii-agent-zayavki-s-sayta-crm-2027', 'rag-sistemy-dlya-biznesa-2026'] }),
];
