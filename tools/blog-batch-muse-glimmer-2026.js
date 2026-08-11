// Батч: Muse Glimmer — открытая агентная модель Meta, работающая локально. Короткая 4-5 мин.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-08-10';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

module.exports = [
  Object.assign({
    slug: 'muse-glimmer-agentnaya-model-lokalno-2026',
    category: 'ai-dev',
    published: true, datePublished: D, dateModified: D,
    readingMinutes: 5, shortForm: true,
    heroIcon: 'ph-fill ph-brain',
    title: 'Muse Glimmer: агентная ИИ-модель, которая влезает на обычный ПК',
    metaTitle: 'Muse Glimmer: агентная модель на своём ПК',
    metaDescription: 'Открытая модель Meta на 30 млрд параметров работает с инструментами и кодом, а в 4-битном виде влезает в 24–32 ГБ памяти. Что это даёт бизнесу.',
    metaKeywords: 'muse glimmer, агентная модель, открытые веса, локальная llm, ии агент на своём пк, meta muse, 30b модель, ии без облака',
    excerpt: 'Meta выложила Muse Glimmer — открытую модель на 30 млрд параметров, заточенную под ИИ-агентов: работа с инструментами, код, изображения, длинные цепочки задач. В 4-битном виде она занимает меньше 20 ГБ и запускается на машине с 24–32 ГБ памяти. Разбираю, что это меняет для бизнеса.',
    tags: ['ИИ', 'открытые модели', 'агенты', 'локальный LLM', '2026'],
    toc: toc(
      ['chto-eto', 'Что за модель'],
      ['pochemu-vazhno', 'Почему «влезает на ПК» — это важно'],
      ['agentnaya', 'Что значит «агентная»'],
      ['primenenie', 'Где применить в бизнесе'],
      ['ogranicheniya', 'Трезвый взгляд: ограничения'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['lokalnyy-llm-na-noutbuke-2026', 'ii-agent-na-svoem-pk-2026', 'ollama-svoy-chatgpt-na-servere-2026', 'malenkie-domennye-modeli-slm-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/ai-vnedrenie-90-dney/', label: 'Внедрить локальный ИИ' },
    servicesOffer: {
      title: 'Что я делаю с локальным ИИ',
      services: [
        { icon: 'ph-fill ph-brain', label: 'Открытые модели на вашем сервере или ПК' },
        { icon: 'ph-fill ph-robot', label: 'Агенты с доступом к вашим данным' },
        { icon: 'ph-fill ph-hard-drives', label: 'Всё локально, без отправки в облако' },
        { icon: 'ph-fill ph-shield-check', label: 'Соответствие 152-ФЗ' },
      ],
      ctaLabel: 'Обсудить внедрение', ctaUrl: 'https://t.me/chimitdorzhi',
    },
    contentHtml: C('muse-glimmer-agentnaya-model-lokalno-2026'),
  }, {}),
];
