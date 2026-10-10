// Одиночная статья: доступ к API ChatGPT и Claude через посредников,
// риски для бизнеса (152-ФЗ, закрывающие документы, подмена модели) и альтернативы.
// Без названий конкретных посредников. Ведёт на ИИ-агентов и свой ИИ на сервере.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-10';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_POSREDNIK = {
  title: 'ИИ без лишней третьей стороны',
  services: [
    { icon: 'ph-fill ph-detective', label: 'Аудит: какие данные уходят в нейросеть' },
    { icon: 'ph-fill ph-eye-slash', label: 'Обезличивание данных до отправки в модель' },
    { icon: 'ph-fill ph-swap', label: 'Переход на GigaChat, YandexGPT или свою модель' },
    { icon: 'ph-fill ph-lock-key', label: 'Свой ИИ на сервере компании' },
  ],
  ctaLabel: 'Разобрать мою схему', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'api-chatgpt-v-rossii-dlya-biznesa-riski-posrednikov-2026',
    category: 'security',
    published: true,
    title: 'API ChatGPT в России для бизнеса: риски посредников и альтернативы',
    metaTitle: 'API ChatGPT в России для бизнеса: риски посредников',
    metaDescription: 'API ChatGPT и Claude через посредника: чем рискует бизнес по 152-ФЗ, без закрывающих документов, при подмене модели. Что проверить и чем заменить.',
    metaKeywords: 'api chatgpt в россии для бизнеса, оплатить openai api из россии, агрегатор нейросетей для бизнеса риски, api claude в россии, посредник openai api, chatgpt и 152-фз, gigachat api для бизнеса',
    excerpt: 'России нет в списках стран OpenAI и Anthropic, поэтому API ChatGPT и Claude бизнес покупает у посредников. Разбираю, чем это грозит по 152-ФЗ и в учёте, как проверить модель на подмену и какие есть альтернативы: российские модели и своя модель на сервере.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-shield-warning',
    tags: ['ИИ', 'безопасность', '152-ФЗ', 'API', 'нейросети'],
    toc: toc(
      ['api-chatgpt-v-rossii', 'API ChatGPT в России для бизнеса: как это устроено'],
      ['pravila-postavshchikov', 'Что пишут OpenAI и Anthropic о России'],
      ['riski', 'Чем рискует бизнес'],
      ['deshevo', 'Почему подозрительно низкая цена это сигнал'],
      ['chto-proverit', 'Что проверить у посредника до оплаты'],
      ['kak-snizit-risk', 'Как снизить риск, если без посредника пока никак'],
      ['alternativy', 'Альтернативы: российские модели и своя модель'],
      ['kak-ya-delayu', 'Как я это делаю у себя и у клиентов'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['bezopasnyy-ii-v-kompanii-2026', 'rossiyskiy-ai-stack-2026', 'svoy-ai-server-dlya-biznesa-2027', 'gigachat-vs-yandexgpt-vs-chatgpt-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/ai-agents/', label: 'ИИ-агенты под ключ' },
    servicesOffer: SVC_POSREDNIK,
    contentHtml: C('api-chatgpt-v-rossii-dlya-biznesa-riski-posrednikov-2026'),
  },
];
