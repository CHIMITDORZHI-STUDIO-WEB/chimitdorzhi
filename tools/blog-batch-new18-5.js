// Одиночная статья: кредитный калькулятор и рассрочка на сайте под требования
// ст. 28 закона «О рекламе», 353-ФЗ, 283-ФЗ (сервис рассрочки) и 152-ФЗ.
// Ведёт на предложение «Рассрочка и BNPL», кодовое слово «КРЕДИТ».
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-11';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_KREDIT = {
  title: 'Кредитный калькулятор и рассрочка на сайте',
  services: [
    { icon: 'ph-fill ph-calculator', label: 'Калькулятор платежа с заявкой' },
    { icon: 'ph-fill ph-bank', label: 'Заявка в банк-партнёр и сервисы рассрочки' },
    { icon: 'ph-fill ph-scales', label: 'Тексты рядом с платежом по закону о рекламе' },
    { icon: 'ph-fill ph-identification-card', label: 'Согласие и форма заявки по 152-ФЗ' },
  ],
  ctaLabel: 'Обсудить калькулятор', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'kreditnyy-kalkulyator-na-sayte-rassrochka-reklama-2026',
    category: 'development',
    published: true,
    title: 'Кредитный калькулятор на сайт: рассрочка и закон о рекламе',
    metaTitle: 'Кредитный калькулятор на сайт: рассрочка и закон о рекламе',
    metaDescription: 'Кредитный калькулятор на сайт и рассрочка на сайте магазина: что писать рядом с платежом по ст. 28 закона о рекламе, Долями и Сплит, заявка в банк.',
    metaKeywords: 'кредитный калькулятор на сайт, рассрочка на сайте магазина, калькулятор рассрочки для сайта, реклама кредита ст. 28, ПСК в рекламе, Долями и Сплит на сайте, рассрочка 0% через банк',
    excerpt: 'Покупатель дорогого товара думает платежами в месяц. Разбираю, как сделать кредитный калькулятор на сайт: чем кредит банка отличается от своей рассрочки и сервисов вроде «Долями», что писать рядом с цифрой «от 4 990 ₽/мес» по закону о рекламе и как принимать заявку в банк по 152-ФЗ.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 9,
    heroIcon: 'ph-fill ph-calculator',
    tags: ['кредитный калькулятор', 'рассрочка', 'закон о рекламе', 'калькулятор', 'веб-разработка'],
    toc: toc(
      ['kalkulyator-na-sayt', 'Кредитный калькулятор на сайт: кому и зачем'],
      ['tri-mekhaniki', 'Кредит, рассрочка и оплата частями'],
      ['zakon-o-reklame', 'Что требует закон о рекламе'],
      ['ryadom-s-cifroy', 'Что писать рядом с «от 4 990 ₽/мес»'],
      ['kak-schitaet', 'Как калькулятор считает платёж'],
      ['zayavka', 'Заявка в банк и 152-ФЗ'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['kalkulyator-stoimosti-na-sayt-2026', 'priem-platezhey-sbp-sayt', 'it-dlya-avtosalona-2026', 'sayt-logistiki-kalkulyator-rastamozhki-keys-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/rassrochka-bnpl/', label: 'Подключить рассрочку на сайте' },
    servicesOffer: SVC_KREDIT,
    contentHtml: C('kreditnyy-kalkulyator-na-sayte-rassrochka-reklama-2026'),
  },
];
