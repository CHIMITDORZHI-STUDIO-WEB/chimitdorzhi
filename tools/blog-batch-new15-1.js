// Одиночная статья: robots.txt для ИИ-краулеров и как править его в Тильде.
// Факты по первоисточникам (OpenAI, Anthropic, Google, Perplexity, Яндекс, справка Тильды, RFC 9309), сверено 2026-10-10.
// Ведёт на GEO-продвижение и технический аудит. Кодовое слово: РОБОТС.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-10';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_ROBOTS = {
  title: 'Чем помогу с доступом для ИИ-ботов',
  services: [
    { icon: 'ph-fill ph-robot', label: 'Аудит robots.txt и доступа ИИ-краулеров' },
    { icon: 'ph-fill ph-file-text', label: 'llms.txt и разметка под ответы нейросетей' },
    { icon: 'ph-fill ph-magnifying-glass', label: 'Проверка индексации в Яндекс Вебмастере' },
    { icon: 'ph-fill ph-chart-line-up', label: 'GEO: упоминания в ответах Алисы и ChatGPT' },
  ],
  ctaLabel: 'Проверить мой robots.txt', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'robots-txt-dlya-ii-kraulerov-tilda-2026',
    category: 'development',
    published: true,
    title: 'robots.txt для ИИ-краулеров в Тильде: как открыть сайт нейросетям',
    metaTitle: 'robots.txt в Тильде под ИИ-краулеров: ChatGPT и Алиса',
    metaDescription: 'Как разрешить ИИ-ботам индексировать сайт: имена GPTBot, ClaudeBot, PerplexityBot и YandexAdditional, обучение против ответов и правка robots.txt в Тильде.',
    metaKeywords: 'robots txt в tilda под ai-краулеров, robots.txt для нейросетей, как разрешить ии-ботам индексировать сайт, robots.txt тильда, GPTBot, OAI-SearchBot, ClaudeBot, YandexAdditional, GigaChat краулер, GEO',
    excerpt: 'Каких ИИ-ботов пускать в robots.txt, как попасть в ответы ChatGPT и Алисы и не отдать тексты на обучение, и где в Тильде включается ручное редактирование файла. Всё по документации самих компаний.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-robot',
    tags: ['robots.txt', 'GEO', 'Tilda', 'ИИ-поиск', 'SEO'],
    toc: toc(
      ['chto-eto', 'robots.txt под ИИ-краулеров: что это и при чём тут Тильда'],
      ['kakie-boty', 'Какие ИИ-боты ходят на сайт и зачем'],
      ['obuchenie-i-poisk', 'Обучение модели и ответ в поиске'],
      ['gigachat', 'GigaChat: что известно официально'],
      ['primer', 'Пример robots.txt для ИИ-ботов'],
      ['tilda', 'Как отредактировать robots.txt в Тильде'],
      ['oshibki', 'Ошибки в чужих и своих файлах'],
      ['kak-ya-delayu', 'Как я это делаю для клиентов'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['geo-chek-list-30-punktov-2026', 'geo-optimizaciya-chto-eto-2026', 'tehnicheskiy-audit-sayta-404-2026', 'ii-agenty-i-krauleri-peregruzhayut-sayty-wikimedia-kak-zashchitit-svoy-sayt-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/digital-marketing/', label: 'Продвижение в ИИ-поиске' },
    servicesOffer: SVC_ROBOTS,
    contentHtml: C('robots-txt-dlya-ii-kraulerov-tilda-2026'),
  },
];
