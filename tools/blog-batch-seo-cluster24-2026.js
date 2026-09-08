// SEO-кластер 24: медицинская языковая модель без открытых весов — что это значит клинике.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-08';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const OSS = { url: `${S}/predlozheniya/open-source-pod-klyuch/`, label: 'Развернуть локальный ИИ' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'medicinskaya-ii-model-bez-vesov-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-stethoscope', ctaInternal: OSS,
    title: 'Медицинская ИИ-модель вышла, а поставить её у себя нельзя',
    metaTitle: 'Медицинская ИИ-модель без открытых весов: что это значит',
    metaDescription: 'Вышла языковая модель под медицину с сильными результатами на тестах. Но весов у неё нет, а финансовую версию открыли. Разбор, что это значит клинике.',
    excerpt: 'Команда inclusionAI выпустила модель, дообученную под медицину. Общая база и финансовая версия открыты под MIT, а медицинская доступна только через чужой бесплатный API. Разбираю, почему для клиники это меняет всё и что ей реально доступно сегодня.',
    tags: ['медицина', 'локальный ИИ', '152-ФЗ', 'выбор модели'],
    toc: [{ id: 'chto-vyshlo', text: 'Что вышло на самом деле' }, { id: 'vesov-net', text: 'Открыли финансы, но не медицину' }, { id: 'pochemu-vazhno', text: 'Почему для клиники это решает всё' }, { id: 'benchmarki', text: 'Что говорят тесты и чего они не говорят' }, { id: 'chto-delat', text: 'Что клинике реально доступно сегодня' }, ...FAQ_VYV],
    relatedSlugs: ['razrabotka-dlya-meditsiny-2026', 'malenkie-domennye-modeli-slm-2026', 'lokalnyy-llm-vs-oblako-biznes-2027', 'elektronnaya-medkarta-mis-2026'] }),
];
