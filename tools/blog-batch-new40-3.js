// Одиночная статья (new40-3): как подключиться к старой программе без API, пять способов и чего не делать.
// Опора: кейсы ii-buhgalter-1s-stend-foruma-keys-2026, palletnyy-uchet-tsd-1c-keys-2026, zadachi-sotrudnikam-iz-1s-android-predlozhenie-keys-2026.
// Источники: kb.1ci.com (стандартный REST/OData 1С), postgresql.org pg_dump, sqlite.org backup и uri.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-31';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC = {
  title: 'Подключение старой программы к сайту, боту и отчётам',
  services: [
    { icon: 'ph-fill ph-magnifying-glass', label: 'Разбор системы: какие способы подключения доступны' },
    { icon: 'ph-fill ph-database', label: 'Чтение копии базы по расписанию без риска для учёта' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Обмен через стандартный интерфейс или свой сервис' },
    { icon: 'ph-fill ph-shield-check', label: 'Проверка на копии, узкие права, журнал и откат' },
  ],
  ctaLabel: 'Обсудить подключение программы', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'podklyuchit-staruyu-programmu-bez-api-pyat-sposobov-2026',
    category: 'expert',
    published: true,
    title: 'Как подключиться к старой программе без API: пять способов',
    metaTitle: 'Подключить старую программу без API: 5 способов 2026',
    metaDescription: 'Как подключиться к своей программе без описания интерфейса: выгрузки, копия базы, OData, свой сервис и робот-оператор. Чего не делать и как проверять на копии.',
    metaKeywords: 'подключиться к программе без api, старая программа нет api, интеграция с 1С без api, чтение копии базы данных, odata 1с, файловый обмен, имитация действий оператора, интеграция с самописной программой',
    excerpt: 'Пять способов подключиться к своей старой программе, у которой нет описания интерфейса: файловый обмен, чтение копии базы, стандартный интерфейс (для 1С OData), свой сервис и имитация действий оператора. Что я не делаю, как проверяю на копии и о чём спросить про права и лицензии.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-plugs-connected',
    tags: ['интеграция', 'старая программа', 'OData', '1С', 'копия базы', 'автоматизация'],
    toc: toc(
      ['chto-mozhno', 'Что можно: пять способов по порядку'],
      ['fayly', 'Способ 1: файлы и выгрузки'],
      ['kopiya-bazy', 'Способ 2: чтение копии базы'],
      ['interfeys', 'Способ 3: стандартный интерфейс'],
      ['svoy-servis', 'Способ 4: свой сервис внутри программы'],
      ['operator', 'Способ 5: имитация действий оператора'],
      ['ne-delayu', 'Чего я не делаю'],
      ['kopiya', 'Проверка на копии'],
      ['prava', 'Права и лицензии'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько это стоит'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['ii-buhgalter-1s-stend-foruma-keys-2026', 'palletnyy-uchet-tsd-1c-keys-2026', 'zadachi-sotrudnikam-iz-1s-android-predlozhenie-keys-2026', 'odata-1s-podklyuchit-prilozhenie-bez-rasshireniya-2026', 'http-servis-1c-dlya-prilozheniya-2026', 'crossmacro-zapis-i-povtor-deystviy-mishi-i-klaviatury-2026', 'zabrat-dannye-iz-zakrytoy-sistemy-bez-eksporta-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/business-automation/', label: 'Автоматизация процессов' },
    servicesOffer: SVC,
    contentHtml: C('podklyuchit-staruyu-programmu-bez-api-pyat-sposobov-2026'),
  },
];
