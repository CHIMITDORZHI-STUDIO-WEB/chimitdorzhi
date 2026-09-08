// SEO-кластер 22: базы знаний, скомпилированные ИИ-агентами (класс инструментов, не рецензия).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-08';
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
  E({ slug: 'agenty-kompiliruyut-bazu-znaniy-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-tree-structure', ctaInternal: AI_AGENTS,
    title: 'База знаний, которую собрали агенты: что это и когда ей можно верить',
    metaTitle: 'База знаний, собранная ИИ-агентами: когда ей верить',
    metaDescription: 'Агенты исследуют тему и компилируют вики в markdown. Чем это отличается от RAG, где сильная сторона, где ловушка с происхождением и как применять без вреда.',
    excerpt: 'Появился класс инструментов, который не ищет ответ в ваших документах, а собирает базу знаний с нуля силами нескольких агентов. Разбираю, чем это отличается от RAG и корпоративной вики, зачем нужен режим проверки тезиса и почему такому своду нельзя доверять как документу.',
    tags: ['ИИ-агенты', 'базы знаний', 'open source', 'внедрение ИИ'],
    toc: [{ id: 'ne-rag', text: 'Почему это не RAG и не корпоративная вики' }, { id: 'kak-ustroeno', text: 'Как устроена сборка' }, { id: 'tezis', text: 'Самое полезное: проверка тезиса' }, { id: 'gde-lovushka', text: 'Где ловушка' }, { id: 'kak-primenyat', text: 'Как это применять без вреда' }, ...FAQ_VYV],
    relatedSlugs: ['rag-prostymi-slovami-2027', 'pamyat-ii-agentov-mezhdu-sessiyami-2026', 'konkurentnaya-razvedka-legalno-2026', 'ai-agenty-avtonomnye-sotrudniki-2026'] }),
];
