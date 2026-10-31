// Одиночная статья (new40-4): как забрать свои данные из закрытой системы без кнопки экспорта.
// Опора: кейсы servis-desk-1c-telegram-max-keys-2026, api-dannyh-avto-iz-kitaya-platforma-keys-2026, vitrina-avto-iz-pereslannyh-postov-keys-2026.
// Источники: ст. 14 и ст. 20 152-ФЗ (consultant.ru).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-31';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC = {
  title: 'Выгрузка данных из закрытой системы и перенос с проверкой',
  services: [
    { icon: 'ph-fill ph-envelope-simple', label: 'Запрос выгрузки поставщику с точным списком и сроком' },
    { icon: 'ph-fill ph-list-checks', label: 'Проверка полноты, дат, вложений и дублей' },
    { icon: 'ph-fill ph-database', label: 'Загрузка в новую систему сначала на тестовой копии' },
    { icon: 'ph-fill ph-shield-check', label: 'Только законные способы, без обхода чужих ограничений' },
  ],
  ctaLabel: 'Обсудить выгрузку данных', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'zabrat-dannye-iz-zakrytoy-sistemy-bez-eksporta-2026',
    category: 'expert',
    published: true,
    title: 'Как забрать свои данные из закрытой системы без экспорта',
    metaTitle: 'Забрать данные из закрытой системы без экспорта: 2026',
    metaDescription: 'Нет кнопки экспорта: как законно забрать свои данные. Запрос поставщику, API, отчёты, договор и 152-ФЗ, постраничная выгрузка и проверка результата.',
    metaKeywords: 'как выгрузить данные без экспорта, забрать данные из системы, нет кнопки экспорт, выгрузка данных у поставщика, право на доступ к персональным данным, 152-ФЗ статья 14, перенос данных из закрытой системы',
    excerpt: 'Законные способы вернуть свои данные, когда в системе нет экспорта: запрос поставщику, официальный API, отчёты, договор и закон о персональных данных, постраничная выгрузка, поддержка. Что проверить после выгрузки: полноту, даты, вложения и дубли. И что я не делаю.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-database',
    tags: ['выгрузка данных', 'экспорт', 'перенос данных', '152-ФЗ', 'миграция', 'поставщик'],
    toc: toc(
      ['chto-mozhno', 'Что можно: законные способы по порядку'],
      ['postavshchik', 'Шаг 1: запросить выгрузку у поставщика'],
      ['api', 'Шаг 2: официальный API и отчёты'],
      ['zakon', 'Шаг 3: договор и закон о персональных данных'],
      ['interfeys', 'Шаг 4: постраничная выгрузка через интерфейс'],
      ['podderzhka', 'Шаг 5: обращение в поддержку'],
      ['proverka', 'Что проверить после выгрузки'],
      ['primery', 'Как это выглядело в моих проектах'],
      ['ne-delayu', 'Чего я не делаю'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько это стоит'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['servis-desk-1c-telegram-max-keys-2026', 'api-dannyh-avto-iz-kitaya-platforma-keys-2026', 'vitrina-avto-iz-pereslannyh-postov-keys-2026', 'perenos-zayavok-iz-staroy-sistemy-v-novuyu-2026', 'eksport-sayta-s-konstruktora-rezervnaya-kopiya-2026', 'perenos-klientskoy-bazy-iz-excel-v-crm-bez-dublirovaniya-2026', 'podklyuchit-staruyu-programmu-bez-api-pyat-sposobov-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/business-automation/', label: 'Автоматизация процессов' },
    servicesOffer: SVC,
    contentHtml: C('zabrat-dannye-iz-zakrytoy-sistemy-bez-eksporta-2026'),
  },
];
