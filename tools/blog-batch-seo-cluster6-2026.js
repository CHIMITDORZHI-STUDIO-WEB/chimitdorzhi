// SEO-кластер 6: экспертные разборы новостей 02.09.2026 — Spark-X2.5-4B (агентная модель локально), TimesFM 3 (прогноз временных рядов).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-02';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const PRIVATE_AI = { url: `${S}/predlozheniya/privatnoe-ai-oblako/`, label: 'Развернуть локального ИИ-агента' };
const AI_PROGNOZ = { url: `${S}/predlozheniya/ai-prognoz-zakupok-horeca/`, label: 'Заказать ИИ-прогноз закупок' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 5, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'spark-x25-4b-agentnaya-model-lokalno-2026', category: 'expert', heroIcon: 'ph-fill ph-brain', ctaInternal: PRIVATE_AI,
    title: 'Spark-X2.5-4B: агентная модель на 4B с контекстом 1 млн токенов — что это меняет для бизнеса',
    metaTitle: 'Spark-X2.5-4B: агентная модель локально, контекст 1 млн',
    metaDescription: 'Spark-X2.5-4B: агентная модель на 4B с контекстом 1 млн токенов и Apache 2.0. Что заявлено, как я проверяю такие модели и какие задачи отдать локальному агенту.',
    excerpt: 'Вышла Spark-X2.5-4B — агентная модель на 4 млрд параметров с нативным контекстом в миллион токенов и лицензией Apache 2.0. Разбираю, что именно заявлено, почему это важно малому бизнесу и как я проверяю такие модели перед тем, как ставить клиенту.',
    tags: ['Spark-X2.5', 'локальный ИИ', 'ИИ-агенты', 'открытые модели', 'Apache 2.0'],
    toc: [{ id: 'chto-zayavleno', text: 'Что заявлено о Spark-X2.5-4B' }, { id: 'pochemu-perelom', text: 'Почему 4B-агент с миллионным контекстом — перелом' }, { id: 'benchmarki-prostymi-slovami', text: 'Бенчмарки простыми словами' }, { id: 'kak-proveryayu', text: 'Как я проверяю такие модели' }, { id: 'kakie-zadachi', text: 'Какие задачи отдать первыми и где осторожно' }, ...FAQ_VYV],
    relatedSlugs: ['muse-glimmer-agentnaya-model-lokalno-2026', 'lokalnyy-ii-ne-paranoyya-a-raschet-2026', 'kakoy-lokalnyy-llm-vybrat-2026', 'skolko-zheleza-nuzhno-lokalnomu-ii-2026'] }),

  E({ slug: 'timesfm-3-prognoz-prodazh-i-sprosa-2026', category: 'expert', heroIcon: 'ph-fill ph-chart-line-up', ctaInternal: AI_PROGNOZ,
    title: 'TimesFM 3 от Google: прогноз продаж и спроса без своей модели — как применить в бизнесе',
    metaTitle: 'TimesFM 3: прогноз продаж и спроса без своей модели',
    metaDescription: 'TimesFM 3 от Google: прогноз продаж и спроса без обучения своей модели. Где работает в бизнесе, какие данные нужны и как я проверяю качество прогноза.',
    excerpt: 'Google открыла TimesFM 3 — базовую модель для прогнозирования временных рядов, которую не нужно обучать под каждый датасет. Разбираю, где она реально помогает малому и среднему бизнесу, какие данные нужны, как проверять качество прогноза и сколько стоит пилот.',
    tags: ['TimesFM', 'прогноз спроса', 'прогноз продаж', 'временные ряды', 'ИИ-аналитика'],
    toc: [{ id: 'chto-takoe', text: 'Что такое foundation-модель для временных рядов' }, { id: 'gde-rabotaet', text: 'Где работает в бизнесе, а где нет' }, { id: 'kakie-dannye', text: 'Какие данные нужны и как подготовить' }, { id: 'vnedrenie-po-shagam', text: 'Внедрение по шагам и оценка качества' }, { id: 'sroki-ekonomika', text: 'Сроки и экономика пилота' }, ...FAQ_VYV],
    relatedSlugs: ['ii-prognoz-sprosa-prodazh-2026', 'uchet-sebestoimosti-blyud-i-zakupok-2027', 'inventree-skladskoy-uchet-2026', 'bi-dashbordy-metabase-2026'] }),
];
