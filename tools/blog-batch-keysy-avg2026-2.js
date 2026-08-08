// Батч кейсов (август 2026, часть 2): АвтоМост, One Click Guía, Audit landing.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-08-04';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const CTA = { url: 'https://chimitdorzhi.tech/market/#checklist', label: 'Собрать похожий проект' };

const SVC_WEB = {
  title: 'Что я делаю под ключ',
  services: [
    { icon: 'ph-fill ph-browser', label: 'Сайты, витрины, каталоги под ваш рынок' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция с внешними API и данными' },
    { icon: 'ph-fill ph-gear', label: 'Админка и CMS для правок без программиста' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Хостинг, домен, поддержка' },
  ],
  ctaLabel: 'Обсудить проект', ctaUrl: 'https://t.me/chimitdorzhi',
};

const mk = (o) => Object.assign({
  category: 'cases', published: true, datePublished: D, dateModified: D,
  readingMinutes: 5, shortForm: true, servicesOffer: SVC_WEB, ctaInternal: CTA,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  mk({
    slug: 'avtomost-vitrina-avto-kitay-keys-2026',
    heroIcon: 'ph-fill ph-car-profile',
    title: 'АвтоМост: витрина авто из Китая с подгрузкой каталога через API',
    metaTitle: 'Кейс: витрина авто из Китая АвтоМост',
    metaDescription: 'Кейс АвтоМост — витрина автомобилей с китайских площадок: каталог подгружается через API, фильтры по марке и цене.',
    metaKeywords: 'витрина авто из китая, каталог автомобилей кейс, авто из китая под ключ, парсинг авто china, сайт для импортёра авто, расчёт таможни авто, che168 витрина',
    excerpt: 'Импортёр авто из Китая вручную лазит по площадкам, переводит характеристики и считает таможню для каждого клиента. Я собрал АвтоМост — витрину, где клиент сам фильтрует авто, видит фото и цену с таможней, а импортёр получает готовую заявку.',
    tags: ['кейс', 'витрина', 'авто из Китая', 'API', '2026'],
    toc: toc(
      ['problema', 'С чем пришёл клиент'],
      ['reshenie', 'Что я сделал'],
      ['tech', 'Данные, фото и расчёт таможни'],
      ['rezultat', 'Что получил клиент'],
      ['dlya-kogo', 'Кому подойдёт такое же'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['wetocar-katalog-avto-kitay-keys-2026', 'goryachiy-moment-sayt-kofeen-keys-2026', 'deltour-sayt-turfirmy-keys-2026'],
  }),
  mk({
    slug: 'oneclick-guide-spravka-cms-keys-2026',
    heroIcon: 'ph-fill ph-book-open-text',
    title: 'One Click: справочный портал ES/EN с редактором для заказчика',
    metaTitle: 'Кейс: справочный портал One Click с CMS',
    metaDescription: 'Кейс One Click — двуязычная справка (испанский/английский) для платформы QR/NFC-страниц с собственной CMS: заказчик сам редактирует инструкцию блоками.',
    metaKeywords: 'справочный портал кейс, двуязычный сайт, cms для инструкции, база знаний под ключ, ии перевод сайта, документация продукта, редактор контента для заказчика',
    excerpt: 'Испаноязычной платформе QR/NFC-страниц нужна была справка, которую сотрудники могли бы править сами, без программиста. Я собрал двуязычный портал ES/EN с блочным редактором и ИИ-переводом, встроенный в их сайт под one-click.app/help.',
    tags: ['кейс', 'справочный портал', 'CMS', 'мультиязычность', '2026'],
    toc: toc(
      ['problema', 'С чем пришёл клиент'],
      ['reshenie', 'Что я сделал'],
      ['cms', 'Редактор и ИИ-перевод для заказчика'],
      ['rezultat', 'Что получил клиент'],
      ['dlya-kogo', 'Кому подойдёт такое же'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['peru-loyalty-keys-2026', 'goryachiy-moment-sayt-kofeen-keys-2026', 'baza-znaniy-spravochnyy-portal-keys-2026'],
  }),
  mk({
    slug: 'audit-landing-152fz-direkt-keys-2026',
    heroIcon: 'ph-fill ph-shield-check',
    title: 'Лендинг для Яндекс.Директа: заявки на аудит 152-ФЗ с аналитикой',
    metaTitle: 'Кейс: лендинг под Яндекс.Директ с целями Метрики',
    metaDescription: 'Кейс: посадочная под рекламу в Яндекс.Директе для услуги аудита 152-ФЗ. Моно-фокус на одном действии, калькулятор риска штрафа.',
    metaKeywords: 'лендинг под директ кейс, посадочная для рекламы, цели яндекс метрики, форма заявки в telegram, калькулятор на лендинге, конверсионный лендинг, лендинг 152-фз',
    excerpt: 'Чтобы реклама в Яндекс.Директе окупалась, нужна посадочная, заточенная под одно действие и с честной аналитикой. Я собрал лендинг для услуги аудита 152-ФЗ: калькулятор риска штрафа, форма заявки прямо в Telegram и цели Метрики под каждое обращение.',
    tags: ['кейс', 'лендинг', 'Яндекс.Директ', '152-ФЗ', 'аналитика'],
    toc: toc(
      ['problema', 'С чем пришёл клиент'],
      ['reshenie', 'Что я сделал'],
      ['analitika', 'Форма в Telegram и цели Метрики'],
      ['rezultat', 'Что получилось'],
      ['dlya-kogo', 'Кому подойдёт такое же'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['teplovik-gossayt-keys-2026', 'presidio-obezlichivanie-personalnyh-dannyh-2026', 'sayt-eksperta-nedvizhimosti-lending-keys-2026'],
  }),
];
