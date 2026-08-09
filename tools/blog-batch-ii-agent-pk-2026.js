// Батч: ИИ-агент на своём ПК (по мотивам Skales) — 2 короткие статьи 4-5 мин.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-08-10';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_AGENT = {
  title: 'Что я делаю с ИИ-агентами',
  services: [
    { icon: 'ph-fill ph-robot', label: 'Агенты под ваши задачи и данные' },
    { icon: 'ph-fill ph-clock-countdown', label: 'Задачи по расписанию и в фоне' },
    { icon: 'ph-fill ph-hard-drives', label: 'Локально или на вашем сервере, без облака' },
    { icon: 'ph-fill ph-shield-check', label: 'Права доступа и безопасность по 152-ФЗ' },
  ],
  ctaLabel: 'Обсудить внедрение', ctaUrl: 'https://t.me/chimitdorzhi',
};

const mk = (o) => Object.assign({
  category: 'ai-dev', published: true, datePublished: D, dateModified: D,
  readingMinutes: 5, shortForm: true, servicesOffer: SVC_AGENT,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  mk({
    slug: 'ii-agent-na-svoem-pk-2026',
    heroIcon: 'ph-fill ph-desktop',
    title: 'ИИ-агент на вашем компьютере: автоматизация рутины без облака',
    metaTitle: 'ИИ-агент на своём ПК: автоматизация без облака',
    metaDescription: 'Чем ИИ-агент на вашем компьютере отличается от чат-бота, какие задачи бизнеса он берёт на себя и почему работа без облака — это плюс к 152-ФЗ.',
    metaKeywords: 'ии агент на пк, локальный ии агент, автоматизация без облака, ии агент для бизнеса, агент с доступом к файлам, десктопный ии агент, skales',
    excerpt: 'Появились ИИ-агенты, которые ставятся как обычная программа на ваш компьютер, получают доступ к файлам, почте и браузеру и работают в фоне. Разбираю, чем это отличается от чат-бота, что реально можно поручить и почему для малого бизнеса важно, что данные не уходят в облако.',
    tags: ['ИИ', 'агенты', 'автоматизация', '152-ФЗ', '2026'],
    toc: toc(
      ['chto-eto', 'Что такое агент на своём ПК'],
      ['otlichie', 'Чем отличается от чат-бота'],
      ['scenarii', 'Что можно поручить'],
      ['bez-oblaka', 'Почему без облака — это важно'],
      ['riski', 'Права доступа и риски'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['ai-agenty-v-biznese-2026', 'lokalnyy-llm-na-noutbuke-2026', 'agentic-inbox-ai-pochta-2026', 'pamyat-ii-agentov-mezhdu-sessiyami-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/ai-vnedrenie-90-dney/', label: 'Внедрить ИИ-агента' },
  }),
  mk({
    slug: 'ii-agent-zadachi-po-raspisaniyu-2026',
    heroIcon: 'ph-fill ph-clock-countdown',
    title: 'Задачи по расписанию для бизнеса: что можно поручить ИИ-агенту',
    metaTitle: 'ИИ-агент по расписанию: задачи для бизнеса',
    metaDescription: 'Мониторинг цен, авто-отчёты, сбор данных и напоминания — какие рутинные задачи бизнес может поручить ИИ-агенту, работающему по расписанию.',
    metaKeywords: 'ии агент по расписанию, автоматизация задач бизнес, мониторинг цен конкурентов, авто отчёты, ии без программиста, фоновые задачи ии, планировщик ии',
    excerpt: 'ИИ-агент умеет не только отвечать на вопросы, но и выполнять задачи сам — по расписанию и в фоне. Разбираю конкретные сценарии для малого бизнеса: следить за ценами поставщиков, собирать отчёты, мониторить конкурентов и напоминать о важном — без участия человека.',
    tags: ['ИИ', 'агенты', 'автоматизация', 'бизнес', '2026'],
    toc: toc(
      ['ideya', 'Агент, который работает сам'],
      ['ceny', 'Мониторинг цен и конкурентов'],
      ['otchety', 'Авто-отчёты и сбор данных'],
      ['napominaniya', 'Напоминания и контроль сроков'],
      ['kak-nachat', 'Как это внедрить'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['ii-agent-na-svoem-pk-2026', 'ai-agenty-avtonomnye-sotrudniki-2026', 'kak-sozdat-ai-agenta-2026', 'besplatnye-ai-agenty-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/ai-vnedrenie-90-dney/', label: 'Автоматизировать рутину' },
  }),
];
