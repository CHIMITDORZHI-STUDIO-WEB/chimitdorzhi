// Одиночная статья (new37-9): игра на настоящей карте города или района.
// Запросы: «игра на карте города», «игра на реальной карте района», «браузерная игра openstreetmap».
// Опора: кейс nyutag-simulyator-zhizni-sela-keys-2026; openstreetmap.org/copyright (ODbL), политика тайлов OSMF,
// Copernicus DEM GLO-30, Sentinel-2 (sentiwiki, условия CDSE), условия Open-Meteo, core.telegram.org/bots/webapps, dev.max.ru.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-29';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_MAP_GAME = {
  title: 'Игра на настоящей карте вашего места',
  services: [
    { icon: 'ph-fill ph-map-trifold', label: '3D-карта города, района или села из OpenStreetMap, рельефа и снимков' },
    { icon: 'ph-fill ph-game-controller', label: 'Механики: дом, маршрут, смены, голосования, сезонные события' },
    { icon: 'ph-fill ph-chat-circle-dots', label: 'Вход через MAX и Telegram без установки' },
    { icon: 'ph-fill ph-shield-check', label: 'Лицензии и атрибуция данных, нагрузочный тест перед запуском' },
  ],
  ctaLabel: 'Обсудить игру на карте', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'igra-na-realnoy-karte-goroda-ili-rayona-2026',
    category: 'igry-dlya-biznesa',
    published: true,
    title: 'Игра на настоящей карте города или района: как сделать в 2026 году',
    metaTitle: 'Игра на реальной карте города или района: данные и вход',
    metaDescription: 'Игра на карте вашего города или села: данные OpenStreetMap и лицензия ODbL, рельеф и снимки, погода, вход через MAX и Telegram, нагрузка, сроки и цены.',
    metaKeywords: 'игра на карте города, игра на реальной карте, игра на карте района, браузерная игра openstreetmap, игра для администрации района, игра для туризма, мини-приложение игра max telegram, odbl атрибуция',
    excerpt: 'Как собрать браузерную игру на карте настоящего города, района или села: OpenStreetMap и обязательная атрибуция по ODbL, рельеф Copernicus и снимки Sentinel-2, погода из открытого API и его ограничения для коммерции, вход через MAX и Telegram, нагрузка на сервер, сроки и честные ограничения. На примере моей игры НЮТАГ.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-map-trifold',
    tags: ['игры для бизнеса', 'OpenStreetMap', 'браузерная игра', 'MAX', 'Telegram', '2026'],
    toc: toc(
      ['komu-nuzhna', 'Кому нужна игра на карте настоящего места'],
      ['dannye', 'Откуда берутся данные для карты'],
      ['licenzii', 'Лицензии и атрибуция: что обязательно'],
      ['vhod', 'Вход через MAX или Telegram'],
      ['chto-delaet-igrok', 'Что игрок делает на карте'],
      ['nagruzka', 'Как не уронить сервер'],
      ['sroki', 'Сроки и честные ограничения'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит игра на карте города'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['nyutag-simulyator-zhizni-sela-keys-2026', 'phaser-promo-igry-dlya-biznesa-2026', 'kak-igry-stali-napravleniem-keys-2026', 'multipleer-v-brauzere-dlya-biznesa-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/development/games/', label: 'Разработка игр' },
    servicesOffer: SVC_MAP_GAME,
    contentHtml: C('igra-na-realnoy-karte-goroda-ili-rayona-2026'),
  },
];
