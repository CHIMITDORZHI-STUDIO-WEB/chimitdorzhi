// Батч: 2 короткие статьи по open-source AI-инструментам.
// Presidio (обезличивание ПД, 152-ФЗ) + Moondream (локальная vision-модель).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-08-03';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_PD = {
  title: 'Что я делаю с персональными данными',
  services: [
    { icon: 'ph-fill ph-shield-check', label: 'Аудит сайта и данных на 152-ФЗ' },
    { icon: 'ph-fill ph-eye-slash', label: 'Обезличивание и маскирование ПД' },
    { icon: 'ph-fill ph-hard-drives', label: 'Внедрение на своём сервере под ключ' },
    { icon: 'ph-fill ph-file-text', label: 'Политики, согласия, уведомление в РКН' },
  ],
  ctaLabel: 'Обсудить проект', ctaUrl: 'https://t.me/chimitdorzhi',
};

const SVC_AI = {
  title: 'Что я делаю с локальным ИИ',
  services: [
    { icon: 'ph-fill ph-cpu', label: 'ИИ на вашем сервере без облака' },
    { icon: 'ph-fill ph-image', label: 'Распознавание и анализ изображений' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция модели в ваши процессы' },
    { icon: 'ph-fill ph-lock', label: 'Данные не покидают ваш контур' },
  ],
  ctaLabel: 'Обсудить внедрение', ctaUrl: 'https://t.me/chimitdorzhi',
};

const mk = (o, svc) => Object.assign({
  published: true, datePublished: D, dateModified: D,
  readingMinutes: 5, shortForm: true, servicesOffer: svc,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  mk({
    slug: 'presidio-obezlichivanie-personalnyh-dannyh-2026',
    category: 'legal',
    heroIcon: 'ph-fill ph-eye-slash',
    title: 'Presidio: как автоматически найти и обезличить персональные данные',
    metaTitle: 'Presidio: обезличивание персональных данных',
    metaDescription: 'Открытый инструмент Microsoft Presidio находит в текстах и базах имена, телефоны, паспорта, карты и заменяет их — обезличивает данные. Зачем это по 152-ФЗ, где применяют и как внедрить на своём сервере.',
    metaKeywords: 'presidio, обезличивание персональных данных, анонимизация данных, маскирование пд, 152-фз обезличивание, поиск пд в базе, защита персональных данных, деперсонализация',
    excerpt: 'Персональные данные всплывают там, где их не ждёшь: в логах, выгрузках, тестовых базах. Открытый инструмент Presidio сам находит имена, телефоны и паспорта в тексте и обезличивает их. Разбираю, зачем это по 152-ФЗ и как внедрить у себя.',
    tags: ['152-ФЗ', 'персональные данные', 'обезличивание', 'open-source', '2026'],
    toc: toc(
      ['problema', 'Где персональные данные всплывают незаметно'],
      ['chto-eto', 'Что такое Presidio и что он умеет'],
      ['zachem', 'Зачем это по 152-ФЗ'],
      ['kak-vnedrit', 'Как внедрить на своём сервере'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['audit-152-fz-2026', 'utechki-pd-24-chasa-2026', 'lokalizaciya-pd-2026', 'chandra-ai-ocr-dokumenty-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/152-fz-pod-klyuch/', label: 'Заказать аудит на 152-ФЗ' },
  }, SVC_PD),
  mk({
    slug: 'moondream-vision-model-na-noutbuke-2026',
    category: 'opensource',
    heroIcon: 'ph-fill ph-eye',
    title: 'Moondream: ИИ, который видит картинки, на ноутбуке без интернета',
    metaTitle: 'Moondream: ИИ-зрение на ноутбуке без облака',
    metaDescription: 'Moondream — крошечная открытая vision-модель: описывает фото, находит объекты, читает документы и отвечает на вопросы о картинке. Работает офлайн на ноутбуке и даже Raspberry Pi без GPU. Где применить и как внедрить.',
    metaKeywords: 'moondream, vision language model, ии зрение, распознавание изображений локально, ии без gpu, локальная модель зрения, анализ фото ии, ии на своём сервере',
    excerpt: 'Обычно ИИ, который понимает картинки, живёт в облаке и требует мощную видеокарту. Moondream — крошечная открытая модель: описывает фото, находит объекты и читает документы прямо на ноутбуке, офлайн, без GPU. Разбираю, где это применить и как внедрить.',
    tags: ['ИИ', 'компьютерное зрение', 'локальные модели', 'open-source', '2026'],
    toc: toc(
      ['problema', 'Почему обычно ИИ-зрение живёт в облаке'],
      ['chto-eto', 'Что такое Moondream и что он умеет'],
      ['gde-primenit', 'Где это применить в бизнесе'],
      ['pochemu-lokalno', 'Чем хорош локальный ИИ'],
      ['kak-vnedrit', 'Как внедрить у себя'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['lokalnyy-llm-na-noutbuke-2026', 'rossiyskiy-ai-stack-2026', 'ocr-raspoznat-tekst-s-foto-2026', 'frigate-umnoe-videonablyudenie-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/open-source-pod-klyuch/', label: 'Внедрить локальный ИИ' },
  }, SVC_AI),
];
