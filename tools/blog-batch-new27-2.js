// Одиночная статья серии new27 (коммерческий интент): CRM для строительной компании,
// что внутри и сколько стоит. Опора на кейс crm-stroitelnoy-kompanii-almaznaya-rezka-keys-2026.
// Цены только из tools/prices-data.js. Ведёт на /predlozheniya/crm-stroitelnaya-kompaniya/.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-15';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_CRM_STROIKA = {
  title: 'CRM для строительной компании под ключ',
  services: [
    { icon: 'ph-fill ph-hard-hat', label: 'Карточка объекта, роли и задачи цепочкой' },
    { icon: 'ph-fill ph-camera', label: 'Отчёты с фото и геометкой с объекта' },
    { icon: 'ph-fill ph-qr-code', label: 'Учёт инструмента и оснастки по QR' },
    { icon: 'ph-fill ph-funnel', label: 'Заявки с сайта и квизов сразу в CRM' },
  ],
  ctaLabel: 'Обсудить CRM для стройки', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'crm-dlya-stroitelnoy-kompanii-chto-vnutri-i-cena-2026',
    category: 'industries',
    published: true,
    title: 'CRM для строительной компании: что внутри и сколько стоит',
    metaTitle: 'CRM для строительной компании: что внутри и цена',
    metaDescription: 'CRM для строительной компании вокруг объекта: роли, задачи, отчёты с фото и геометкой, инструмент по QR, заявки с сайта. Цена от 300 000 ₽, срок от месяца.',
    metaKeywords: 'crm для строительной компании, crm для стройки цена, crm для строительства, программа для учёта объектов, crm для подрядчика, crm для бригад, учёт инструмента на стройке',
    excerpt: 'Что входит в CRM для строительной компании и сколько она стоит: объект в центре, роли владельца, прораба, рабочего и менеджера, отчёты с фото и геометкой, инструмент по QR, заявки с сайта. Чем отличается от amoCRM и Битрикс24 и когда хватит готовой системы. С опорой на мой кейс.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-hard-hat',
    tags: ['CRM для стройки', 'строительная компания', 'учёт объектов', 'цена CRM', 'бригады'],
    toc: toc(
      ['crm-dlya-stroitelnoy-kompanii', 'CRM для строительной компании: кому и за сколько'],
      ['obekt-v-centre', 'Почему в центре объект'],
      ['chto-vnutri', 'Что внутри: роли, задачи, отчёты, инструмент'],
      ['zayavki-i-baza', 'Заявки с сайта, квизы и старая база'],
      ['otlichie-ot-amocrm', 'Чем отличается от amoCRM и Битрикс24'],
      ['cena', 'Из чего складывается цена'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['chto-nuzhno', 'Что нужно от вас'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['crm-stroitelnoy-kompanii-almaznaya-rezka-keys-2026', 'uchet-instrumenta-po-qr-brigady-2026', 'svoya-crm-na-servere-vs-oblachnaya-2026', 'it-dlya-stroitelnyh-kompaniy-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/crm-stroitelnaya-kompaniya/', label: 'Обсудить CRM для стройки' },
    servicesOffer: SVC_CRM_STROIKA,
    contentHtml: C('crm-dlya-stroitelnoy-kompanii-chto-vnutri-i-cena-2026'),
  },
];
