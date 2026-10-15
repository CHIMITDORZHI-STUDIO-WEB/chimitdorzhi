// Одиночная статья: ретаргетинг и пиксели на сайте, что можно собирать (legal).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-14';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_PIXEL = {
  title: 'Пиксели, счётчики и 152-ФЗ',
  services: [
    { icon: 'ph-fill ph-shield-check', label: 'Аудит сайта по 152-ФЗ: что и куда уходит' },
    { icon: 'ph-fill ph-target', label: 'Настройка событий и целей без персональных данных' },
    { icon: 'ph-fill ph-megaphone', label: 'Контекстная реклама и ретаргетинг в Директе' },
    { icon: 'ph-fill ph-scales', label: 'Маркировка рекламы и документы для юриста' },
  ],
  ctaLabel: 'Обсудить аудит пикселей', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'retargeting-i-pikseli-na-sayte-chto-mozhno-sobirat-2026',
    category: 'legal',
    published: true,
    title: 'Ретаргетинг и пиксели на сайте: что можно собирать по закону',
    metaTitle: 'Ретаргетинг персональные данные: пиксель на сайте и закон',
    metaDescription: 'Ретаргетинг и персональные данные: что собирают пиксель VK и Метрика, как загрузить список клиентов, нужно ли согласие и что спорно в 152-ФЗ.',
    metaKeywords: 'ретаргетинг персональные данные, пиксель на сайте закон, пиксель VK Рекламы, Яндекс Аудитории, загрузка базы клиентов в рекламный кабинет, cookie 152-ФЗ, ретаргетинг 152-ФЗ',
    excerpt: 'Реклама, которая догоняет посетителя, держится на cookie и списках клиентов. Разбираю по справкам VK Рекламы и Яндекса и условиям площадок, что собирают пиксели, что уходит в кабинет, где закон спорный и как настроить ретаргетинг без лишнего риска.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 9,
    heroIcon: 'ph-fill ph-target',
    tags: ['ретаргетинг', 'пиксель', 'персональные данные', '152-ФЗ', 'реклама', 'cookie'],
    toc: toc(
      ['chto-sobiraet', 'Что собирает пиксель'],
      ['shema', 'Какие данные уходят куда'],
      ['spiski', 'Списки клиентов: email и телефоны'],
      ['zakon', 'Пиксель на сайте и закон'],
      ['reklama', 'Маркировка, Meta и зарубежные пиксели'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['chek-list', 'Чек-лист'],
      ['yurist', 'Что вынести на юриста'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['cookie-banner-zakon', 'soglasie-na-obrabotku-pd-2026', 'markirovka-reklamy-ord-2026', 'okupaemost-reklamy-metrika-celi-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/rkn-audit/', label: 'Проверить пиксели и счётчики на сайте' },
    servicesOffer: SVC_PIXEL,
    contentHtml: C('retargeting-i-pikseli-na-sayte-chto-mozhno-sobirat-2026'),
  },
];
