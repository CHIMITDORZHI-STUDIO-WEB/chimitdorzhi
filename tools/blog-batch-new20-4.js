// Одиночная статья: отзывы клиентов на своём сайте и закон (реклама, согласие, модерация, медуслуги, разметка).
// Правовая база проверена по первоисточникам и документам ФАС 12.10.2026, спорные места отданы юристу.
// Ведёт на аудит сайта по 152-ФЗ и разработку сайта.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-12';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_OTZYVY = {
  title: 'Отзывы на сайте без рисков',
  services: [
    { icon: 'ph-fill ph-star', label: 'Блок отзывов с премодерацией' },
    { icon: 'ph-fill ph-scales', label: 'Согласие автора и политика модерации' },
    { icon: 'ph-fill ph-shield-check', label: 'Аудит сайта по 152-ФЗ' },
    { icon: 'ph-fill ph-camera', label: 'Архив доказательств по отзывам' },
  ],
  ctaLabel: 'Проверить мои отзывы', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'otzyvy-klientov-na-sayte-kak-publikovat-po-zakonu-2026',
    category: 'legal',
    published: true,
    title: 'Отзывы на сайте по закону: как публиковать и не нарушить его',
    metaTitle: 'Отзывы на сайте по закону: что можно и нельзя публиковать',
    metaDescription: 'Отзывы на сайте по закону: реклама или нет, согласие на имя и фото, можно ли удалять негатив, отзывы пациентов и разметка. Чек-лист и политика модерации.',
    metaKeywords: 'отзывы на сайте закон, можно ли удалять негативные отзывы с сайта, фиктивные отзывы штраф, согласие на публикацию отзыва, отзывы пациентов на сайте клиники, политика модерации отзывов, разметка отзывов Review AggregateRating',
    excerpt: 'Отзывы настоящих клиентов на сайте публиковать можно, но выдуманные тексты, вычищенный негатив, чужие фото и благодарности пациентов в рекламе клиники ведут к штрафам. Разбираю статью 5 закона о рекламе, КоАП, 152-ФЗ, разметку Review и даю чек-лист с шаблоном политики модерации.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 9,
    heroIcon: 'ph-fill ph-scales',
    tags: ['отзывы', 'право', 'сайт', 'реклама', 'модерация'],
    toc: toc(
      ['otzyvy-na-sayte-zakon', 'Отзывы на сайте по закону: что разрешено'],
      ['reklama-ili-net', 'Отзыв на сайте продавца: реклама или нет'],
      ['fiktivnye', 'Выдуманные и заказные отзывы'],
      ['udalenie-negativa', 'Можно ли удалять негативные отзывы'],
      ['moderaciya', 'Что можно скрывать, а что нет'],
      ['meduslugi', 'Отзывы пациентов в клиниках'],
      ['soglasie-avtora', 'Имя, фото, видео: согласие автора'],
      ['bonus-za-otzyv', 'Скидка за отзыв и отзывы сотрудников'],
      ['razmetka', 'Разметка Review и AggregateRating'],
      ['kak-ya-eto-delayu', 'Как я это делаю'],
      ['politika-moderacii', 'Шаблон политики модерации'],
      ['chek-list', 'Чек-лист перед публикацией'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['sayt-medicinskoy-kliniki-trebovaniya-zakona-2026', 'sbor-otzyvov-na-sayt-2026', 'sbor-otzyvov-cherez-qr-2026', 'udalit-otzyv-s-yandex-kart-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/rkn-audit/', label: 'Проверить блок отзывов на сайте' },
    servicesOffer: SVC_OTZYVY,
    contentHtml: C('otzyvy-klientov-na-sayte-kak-publikovat-po-zakonu-2026'),
  },
];
