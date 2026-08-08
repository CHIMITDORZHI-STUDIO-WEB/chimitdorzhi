// Батч: память ИИ-агентов (memora) + автоматическое обезличивание лиц на фото.
// Обе короткие (4-5 мин), усиливают кластеры AI и 152-ФЗ.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-08-07';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_AI = {
  title: 'Что я делаю с ИИ-агентами',
  services: [
    { icon: 'ph-fill ph-brain', label: 'Агенты с памятью о клиенте и истории' },
    { icon: 'ph-fill ph-database', label: 'База знаний и поиск по смыслу' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция с CRM и вашими данными' },
    { icon: 'ph-fill ph-hard-drives', label: 'Развёртывание на вашем сервере' },
  ],
  ctaLabel: 'Обсудить внедрение', ctaUrl: 'https://t.me/chimitdorzhi',
};

const SVC_PD = {
  title: 'Что я делаю по 152-ФЗ',
  services: [
    { icon: 'ph-fill ph-eye-slash', label: 'Обезличивание фото и документов' },
    { icon: 'ph-fill ph-shield-check', label: 'Аудит сайта на соответствие закону' },
    { icon: 'ph-fill ph-file-text', label: 'Политики, согласия, уведомление в РКН' },
    { icon: 'ph-fill ph-hard-drives', label: 'Обработка на вашем сервере, без облака' },
  ],
  ctaLabel: 'Обсудить аудит', ctaUrl: 'https://t.me/chimitdorzhi',
};

const mk = (o, svc) => Object.assign({
  published: true, datePublished: D, dateModified: D,
  readingMinutes: 5, shortForm: true, servicesOffer: svc,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  mk({
    slug: 'pamyat-ii-agentov-mezhdu-sessiyami-2026',
    category: 'ai-dev',
    heroIcon: 'ph-fill ph-brain',
    title: 'Память ИИ-агента: чтобы бот не забывал клиента после каждого разговора',
    metaTitle: 'Память ИИ-агента: бот помнит клиента между сессиями',
    metaDescription: 'Обычный чат-бот забывает всё, как только диалог закончился, и клиент заново объясняет свою задачу.',
    metaKeywords: 'память ии агента, долговременная память llm, бот помнит клиента, контекст между сессиями, memora, векторная база памяти, персонализация чат-бота',
    excerpt: 'Клиент третий раз объясняет боту одно и то же, потому что тот забывает всё после каждого диалога. Разбираю, как работает долговременная память ИИ-агента, чем она отличается от базы знаний и что нужно, чтобы бот узнавал человека и помнил историю.',
    tags: ['ИИ', 'агенты', 'память', 'персонализация', '2026'],
    toc: toc(
      ['problema', 'Почему бот забывает клиента'],
      ['chto-eto', 'Что такое долговременная память агента'],
      ['otlichie', 'Чем это отличается от базы знаний'],
      ['kak-vnedrit', 'Как внедрить у себя'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['rag-sistemy-dlya-biznesa-2026', 'kak-sozdat-ai-agenta-2026', 'ai-agenty-v-biznese-2026', 'lokalnyy-llm-na-noutbuke-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/ai-vnedrenie-90-dney/', label: 'Внедрить ИИ-агента' },
  }, SVC_AI),
  mk({
    slug: 'razmytie-lic-na-foto-152-fz-2026',
    category: 'legal',
    heroIcon: 'ph-fill ph-eye-slash',
    title: 'Как автоматически замазывать лица на фото: обезличивание по 152-ФЗ',
    metaTitle: 'Замазать лица на фото автоматически: 152-ФЗ',
    metaDescription: 'Лицо человека на фото — персональные данные, публиковать их без согласия нельзя.',
    metaKeywords: 'замазать лица на фото, размытие лиц автоматически, обезличивание фотографий, 152-фз фото людей, анонимизация изображений, согласие на фото, блюр лиц',
    excerpt: 'Кафе выкладывает фото зала, клиника — снимок с приёма, застройщик — съёмку объекта. На всех кадрах люди, а их лица по закону — персональные данные. Разбираю, как автоматически размывать лица на потоке фото и не собирать при этом биометрию.',
    tags: ['152-ФЗ', 'персональные данные', 'фото', 'обезличивание', '2026'],
    toc: toc(
      ['problema', 'Почему лица на фото — это персональные данные'],
      ['kak-rabotaet', 'Как работает автоматическое размытие'],
      ['granica', 'Важная граница: обезличивание против распознавания'],
      ['kak-vnedrit', 'Как внедрить у себя'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['presidio-obezlichivanie-personalnyh-dannyh-2026', 'audit-152-fz-2026', 'vidy-biometrii-2026', 'utechki-pd-24-chasa-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/152-fz-pod-klyuch/', label: 'Заказать аудит 152-ФЗ' },
  }, SVC_PD),
];
