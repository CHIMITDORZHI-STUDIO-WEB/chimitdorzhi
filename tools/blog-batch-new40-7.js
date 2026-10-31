// Одиночная статья (new40-7): аудит чужого кода перед покупкой или приёмкой. Серия «Разбор чужой системы».
// Опора: CWE-912 и CWE-798 (cwe.mitre.org), документация npm (scripts, audit), OSV-Scanner, README TruffleHog.
// Кейсы: audit-sayta-po-152-fz-dokazatelstva-keys-2026, self-storage-bronirovanie-boksov-keys-2026.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-31';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC = {
  title: 'Технический аудит чужого проекта до покупки или приёмки',
  services: [
    { icon: 'ph-fill ph-magnifying-glass', label: 'Поиск скрытых доступов и отправки данных наружу' },
    { icon: 'ph-fill ph-lock-key', label: 'Проверка ключей, паролей и прав в коде и на сервере' },
    { icon: 'ph-fill ph-shield-check', label: 'Отчёт с находками по важности и доказательствами' },
    { icon: 'ph-fill ph-bug', label: 'Проверка на копии, без запуска боевой базы' },
  ],
  ctaLabel: 'Заказать технический аудит', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'audit-chuzhogo-koda-zakladki-telemetriya-klyuchi-2026',
    category: 'expert',
    published: true,
    title: 'Аудит чужого кода перед покупкой: закладки, телеметрия, ключи',
    metaTitle: 'Аудит чужого кода: закладки, телеметрия и ключи 2026',
    metaDescription: 'Как проверить чужой код перед покупкой или приёмкой: скрытые доступы, отправка данных наружу, забытые ключи, зависимости, права. Безопасно, на копии, с отчётом.',
    metaKeywords: 'аудит чужого кода, проверка кода перед покупкой, закладки в коде, скрытая телеметрия, забытые ключи в коде, приёмка проекта от подрядчика, технический аудит сайта, TruffleHog',
    excerpt: 'Что искать в чужом проекте до покупки или подписания акта: скрытые доступы, отправку данных наружу, забытые ключи, подозрительные зависимости, лишние права и задачи по расписанию. Как проверять безопасно на копии, чем, как оформить отчёт по важности и когда сразу отказываться.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-magnifying-glass',
    tags: ['аудит кода', 'приёмка проекта', 'безопасность', 'ключи в коде', 'технический аудит', '2026'],
    toc: toc(
      ['zachem', 'Зачем проверять код, который уже работает'],
      ['chto-iskat', 'Что я ищу: шесть групп находок'],
      ['bezopasno', 'Как проверять безопасно'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['otchet', 'Как оформить отчёт: находки по важности'],
      ['otkaz', 'Когда сразу отказываться'],
      ['ceny', 'Сколько это стоит'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['audit-sayta-po-152-fz-dokazatelstva-keys-2026', 'self-storage-bronirovanie-boksov-keys-2026', 'priemka-raboty-podryadchika-2026', 'trufflehog-poisk-zabytyh-klyuchey-v-kode-2026', 'kak-ne-stat-zalozhnikom-podryadchika-dostupy-repozitoriy-dokumentaciya-2026', 'razobrat-sistemu-bez-dokumentacii-esli-razrabotchik-ushyol-2026', 'kogda-reverse-inzhiniring-zakonen-st-1280-gk-rf-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/it-audit/', label: 'ИТ-аудит' },
    servicesOffer: SVC,
    contentHtml: C('audit-chuzhogo-koda-zakladki-telemetriya-klyuchi-2026'),
  },
];
