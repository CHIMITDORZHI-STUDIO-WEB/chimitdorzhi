// SEO-кластер 11: класс reasoning-моделей (повод — выход Qwythos-9B 03.09.2026).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-03';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const AI_AGENTS = { url: `${S}/services/ai-agents/`, label: 'Подобрать модель под задачу' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 5, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'reasoning-modeli-dlya-biznesa-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-brain', ctaInternal: AI_AGENTS,
    title: 'Reasoning-модели: когда бизнесу нужна нейросеть, которая рассуждает',
    metaTitle: 'Reasoning-модели: когда бизнесу нужны рассуждения',
    metaDescription: 'Reasoning-модель сначала рассуждает, потом отвечает. Разбираю, чем она отличается от обычной, где окупается, где это переплата и как я выбираю под задачу.',
    excerpt: 'Reasoning-модель перед ответом строит цепочку рассуждений: меньше ошибок в многошаговых задачах, но дороже и медленнее. Разбираю, где такой класс моделей окупается, где это лишняя трата и как я выбираю модель под конкретную задачу бизнеса.',
    tags: ['reasoning', 'локальные модели', 'ИИ для бизнеса', 'выбор модели', 'токены'],
    toc: [{ id: 'chto-eto', text: 'Что такое reasoning-модель простыми словами' }, { id: 'otkuda-berutsya', text: 'Откуда берутся такие модели и свежий пример' }, { id: 'gde-okupaetsya', text: 'Где рассуждение окупается, а где это лишняя трата' }, { id: 'tablica', text: 'Обычная модель против reasoning: сравнение' }, { id: 'metodika', text: 'Методика: как я выбираю модель под задачу' }, ...FAQ_VYV],
    relatedSlugs: ['spark-x25-4b-agentnaya-model-lokalno-2026', 'skolko-stoyat-tokeny-ii-agenta-2026', 'kakoy-lokalnyy-llm-vybrat-2026', 'malenkie-domennye-modeli-slm-2026'] }),
];
