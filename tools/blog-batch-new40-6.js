// Одиночная статья (new40-6): перевод legacy-системы на low-code, конвертер, линтер, эталон, эталонные сценарии.
// Опора: кейс konverter-legacy-low-code-keys-2026 (blog-batch-keysy-sen2026-d.js), соседи noukod-vs-kod, budibase, appsmith.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-31';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC = {
  title: 'Что я делаю под ключ',
  services: [
    { icon: 'ph-fill ph-magnifying-glass', label: 'Аудит старой системы и разбор выборки экранов' },
    { icon: 'ph-fill ph-arrows-left-right', label: 'Перенос модулей на новую платформу' },
    { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и документов' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Поддержка после запуска' },
  ],
  ctaLabel: 'Обсудить перенос', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'perevod-legacy-sistemy-na-low-code-konverter-etalon-2026',
    category: 'expert',
    published: true,
    title: 'Перевод legacy-системы на low-code: конвертер, линтер, эталон',
    metaTitle: 'Перевод legacy на low-code: конвертер, линтер, эталон',
    metaDescription: 'Как перевести старую корпоративную систему на low-code: когда переписывать, а когда обновлять, как работают конвертер, линтер, эталон и как проверить поведение.',
    metaKeywords: 'перевод legacy системы на low-code, миграция legacy, конвертер кода, линтер, эталонные сценарии, перенос корпоративной системы',
    excerpt: 'Когда переписывать старую систему, а когда обновлять, как устроены конвертер, линтер и эталон, как эталонными сценариями проверить, что поведение не изменилось, и где автоматический перенос должен остановиться.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-arrows-left-right',
    tags: ['legacy', 'low-code', 'миграция', 'эталонные сценарии', 'автоматизация'],
    toc: toc(
      ['pereshit-ili-obnovit', 'Переписывать или обновлять'],
      ['kak-ustroen', 'Как устроен конвертер'],
      ['linter', 'Линтер и что он проверяет'],
      ['etalon', 'Эталон: образец и приёмка'],
      ['povedenie', 'Как проверить, что поведение не изменилось'],
      ['riski', 'Риски и пределы автоматического переноса'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько это стоит'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['konverter-legacy-low-code-keys-2026', 'noukod-vs-kod-2026', 'budibase-vnutrennie-prilozheniya-2026', 'appsmith-admin-paneli-2026', 'kogda-reverse-inzhiniring-zakonen-st-1280-gk-rf-2026', 'audit-chuzhogo-koda-zakladki-telemetriya-klyuchi-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/business-automation/', label: 'Автоматизация бизнеса' },
    servicesOffer: SVC,
    contentHtml: C('perevod-legacy-sistemy-na-low-code-konverter-etalon-2026'),
  },
];
