// Одиночная статья (new40-1): система без документации, как разобраться, если разработчик ушёл.
// Серия «Разбор чужой системы». Запросы: «система без документации что делать», «разработчик ушёл как разобраться в системе», «паспорт системы владельцу бизнеса».
// Опора: кейсы bot-i-rassylki-hudozhnicy-perenos-predlozhenie-keys-2026, self-storage-bronirovanie-boksov-keys-2026, vozvrat-domena-u-byvshego-razrabotchika-keys-2026; php.net/eol, Telegram Bot API getWebhookInfo, man crontab(5).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-31';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC = {
  title: 'Разбор системы без документации: паспорт, карта и план действий',
  services: [
    { icon: 'ph-fill ph-key', label: 'Паспорт доступов и владельцев: домен, хостинг, репозиторий, ключи' },
    { icon: 'ph-fill ph-map-trifold', label: 'Карта системы на одной странице с отметкой «проверено руками»' },
    { icon: 'ph-fill ph-database', label: 'Свежая копия базы и файлов, проверка, что копию можно развернуть' },
    { icon: 'ph-fill ph-list-checks', label: 'Список рисков и решение по каждому узлу: оставить, поправить, заменить' },
  ],
  ctaLabel: 'Заказать разбор системы', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'razobrat-sistemu-bez-dokumentacii-esli-razrabotchik-ushyol-2026',
    category: 'expert',
    published: true,
    title: 'Система без документации: что делать, если разработчик ушёл',
    metaTitle: 'Система без документации: разбор после ухода разработчика',
    metaDescription: 'Разработчик ушёл, документации нет: что собрать за первую неделю, как нарисовать карту системы, что не трогать до разбора и когда звать специалиста.',
    metaKeywords: 'система без документации, разработчик ушёл что делать, как разобраться в чужой системе, паспорт системы, карта системы, доступы после ухода разработчика, технический аудит',
    excerpt: 'Что собрать за первую неделю, если разработчик ушёл и документации нет: доступы, хостинг, запущенное, расписания, ключи и интеграции, данные и копии. Как составить карту системы, что не трогать до разбора и когда звать специалиста.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-map-trifold',
    tags: ['система без документации', 'разработчик ушёл', 'технический аудит', 'доступы', 'резервные копии', 'передача проекта'],
    toc: toc(
      ['pervaya-nedelya', 'Что собрать за первую неделю'],
      ['dostupy', 'Доступы: что должно оказаться у вас'],
      ['chto-zapusheno', 'Что запущено и что запускается само'],
      ['klyuchi', 'Ключи, интеграции и платные подписки'],
      ['dannye-i-kopii', 'Где лежат данные и копии'],
      ['karta', 'Карта системы на одной странице'],
      ['ne-trogat', 'Что трогать нельзя до разбора'],
      ['mozhno', 'Что можно делать с чужой системой'],
      ['chego-ne-delayu', 'Чего я не делаю'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['specialist', 'Когда звать специалиста'],
      ['ceny', 'Сколько это стоит'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['bot-i-rassylki-hudozhnicy-perenos-predlozhenie-keys-2026', 'self-storage-bronirovanie-boksov-keys-2026', 'vozvrat-domena-u-byvshego-razrabotchika-keys-2026', 'razrabotchik-propal-zabrat-sayt-2026', 'chuzhoy-bot-ili-sayt-ne-rabotaet-audit-za-dva-chasa-2026', 'razvedka-chuzhoy-sistemy-pered-proektom-2026', 'audit-chuzhogo-koda-zakladki-telemetriya-klyuchi-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/it-audit/', label: 'Технический аудит' },
    servicesOffer: SVC,
    contentHtml: C('razobrat-sistemu-bez-dokumentacii-esli-razrabotchik-ushyol-2026'),
  },
];
