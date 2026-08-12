// Батч: маршрутизация задач между моделями (NeMo Switchyard + Nemotron Lightning)
// как способ удешевить ИИ-агента. Короткая 4-5 мин.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-08-10';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

module.exports = [
  {
    slug: 'kak-udeshevit-ii-agenta-marshrutizaciya-modeley-2026',
    category: 'ai-dev',
    published: true, datePublished: D, dateModified: D,
    readingMinutes: 5, shortForm: true,
    heroIcon: 'ph-fill ph-git-fork',
    title: 'Как удешевить ИИ-агента: маршрутизация задач между моделями',
    metaTitle: 'Как удешевить ИИ-агента: маршрутизация моделей',
    metaDescription: 'Дорогая модель думает и планирует, быстрая и дешёвая выполняет массовые задачи. Разбираю подход на примере NVIDIA Nemotron Lightning и NeMo Switchyard.',
    metaKeywords: 'удешевить ии агента, стоимость ии, маршрутизация моделей, nemotron lightning, nemo switchyard, быстрая llm, экономия на ии, роутер моделей',
    excerpt: 'Держать всё на одной топовой модели дорого: она думает над каждой мелочью по цене сложного рассуждения. NVIDIA показала другой подход — распределять этапы работы агента между моделями. Разбираю на примере Nemotron 3.5 Lightning и библиотеки NeMo Switchyard, как это режет счёт за ИИ в разы.',
    tags: ['ИИ', 'агенты', 'оптимизация', 'стоимость', '2026'],
    toc: toc(
      ['problema', 'Почему ИИ-агент дорого обходится'],
      ['ideya', 'Идея: разные задачи — разным моделям'],
      ['nemotron', 'Nemotron Lightning: быстрая рабочая лошадка'],
      ['switchyard', 'NeMo Switchyard: кто раздаёт задачи'],
      ['biznes', 'Что это даёт бизнесу'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['muse-glimmer-agentnaya-model-lokalno-2026', 'malenkie-domennye-modeli-slm-2026', 'ai-agenty-v-biznese-2026', 'lokalnyy-llm-vs-oblako-biznes-2027'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/ai-vnedrenie-90-dney/', label: 'Оптимизировать ИИ-стек' },
    servicesOffer: {
      title: 'Что я делаю с ИИ-стеком',
      services: [
        { icon: 'ph-fill ph-git-fork', label: 'Маршрутизация: дорогое думает, дешёвое исполняет' },
        { icon: 'ph-fill ph-gauge', label: 'Снижение стоимости токенов и задержек' },
        { icon: 'ph-fill ph-hard-drives', label: 'Локальные модели на вашем сервере' },
        { icon: 'ph-fill ph-robot', label: 'Агенты под ваши процессы и данные' },
      ],
      ctaLabel: 'Обсудить внедрение', ctaUrl: 'https://t.me/chimitdorzhi',
    },
    contentHtml: C('kak-udeshevit-ii-agenta-marshrutizaciya-modeley-2026'),
  },
];
