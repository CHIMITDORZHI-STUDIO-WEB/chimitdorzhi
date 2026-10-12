// Одиночная статья: обязательные страницы на сайте компании (чек-лист для ИП и ООО).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-12';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_STRANICY = {
  title: 'Проверка обязательных страниц сайта',
  services: [
    { icon: 'ph-fill ph-list-checks', label: 'Проход по таблице обязательных страниц' },
    { icon: 'ph-fill ph-shield-check', label: 'Аудит сайта по 152-ФЗ' },
    { icon: 'ph-fill ph-file-text', label: 'Политика, согласия и cookie на сайте' },
    { icon: 'ph-fill ph-scales', label: 'Оферта, доставка, оплата и возврат' },
  ],
  ctaLabel: 'Проверить мой сайт', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'obyazatelnye-stranicy-na-sayte-kompanii-chek-list-2026',
    category: 'legal',
    published: true,
    title: 'Обязательные страницы на сайте компании: чек-лист для ИП и ООО',
    metaTitle: 'Обязательные страницы на сайте компании: чек-лист',
    metaDescription: 'Какие документы и страницы обязательны на сайте ИП и ООО: реквизиты, политика ПД, оферта, доставка и возврат. Таблица с нормами и что писать.',
    metaKeywords: 'обязательные страницы на сайте компании, какие документы должны быть на сайте, что должно быть на сайте ИП, обязательные страницы интернет-магазина, реквизиты на сайте, политика обработки персональных данных, оферта на сайте, чек-лист сайта',
    excerpt: 'Закон не называет «обязательных страниц», он требует сведения и документы. Разбираю по нормам, что нужно на сайте ИП, ООО и интернет-магазина, и даю таблицу: страница, основание, кому нужна, что написать.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 9,
    heroIcon: 'ph-fill ph-list-checks',
    tags: ['сайт', 'законодательство', 'реквизиты', 'оферта', '152-ФЗ'],
    toc: toc(
      ['obyazatelnye-stranicy', 'Обязательные страницы на сайте компании: что требует закон'],
      ['tablica', 'Таблица: какая страница, на чём основана, кому нужна'],
      ['ip-ooo', 'ИП, ООО и самозанятый: что меняется в реквизитах'],
      ['ne-stranica', 'Что проверяют, хотя это не отдельная страница'],
      ['kak-ya-eto-delayu', 'Как я проверяю сайт при аудите'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['novye-pravila-prodazhi-tovarov-2026-internet-magazin', 'dogovor-oferty-2026', 'politika-obrabotki-pd-obrazec-2026', '152-fz-internet-magazin-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/rkn-audit/', label: 'Заказать аудит сайта по 152-ФЗ' },
    servicesOffer: SVC_STRANICY,
    contentHtml: C('obyazatelnye-stranicy-na-sayte-kompanii-chek-list-2026'),
  },
];
