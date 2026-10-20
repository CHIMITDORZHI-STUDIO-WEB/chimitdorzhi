// Одиночная статья (new32-3): онлайн-оплата на сайте компании в ОАЭ, платёжные шлюзы.
// Запросы: «payment gateway UAE», «приём оплаты на сайте в Дубае», «эквайринг в ОАЭ для сайта».
// Опора: CBUAE Retail Payment Services and Card Schemes Regulation (C 15/2021), условия Telr, документация N-Genius и Stripe,
// PCI SSC FAQ 1292, EMVCo 3-D Secure. Категория development: статья про техническое подключение шлюза к сайту и боту,
// как и соседние статьи о приёме оплаты (kak-prinimat-oplatu-na-sayte-ekvayring-2026, sayt-dlya-biznesa-v-oae-...).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-19';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_UAE_PAY = {
  title: 'Приём оплаты на сайте и в боте для компании в ОАЭ',
  services: [
    { icon: 'ph-fill ph-credit-card', label: 'Подключение платёжного шлюза: платёжная страница, AED, Apple Pay и Google Pay, если их даёт шлюз' },
    { icon: 'ph-fill ph-file-text', label: 'Подготовка сайта к проверке шлюза: политики возврата, доставки, конфиденциальности, контакты' },
    { icon: 'ph-fill ph-chat-circle-dots', label: 'Вебхуки, страница результата и уведомление о каждой оплате в Telegram' },
    { icon: 'ph-fill ph-robot', label: 'Оплата в боте: заказ, ссылка на оплату, подтверждение и возврат' },
  ],
  ctaLabel: 'Обсудить подключение оплаты', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'onlayn-oplata-na-sayte-v-oae-platezhnye-shlyuzy-2026',
    category: 'development',
    published: true,
    title: 'Онлайн-оплата на сайте в ОАЭ: платёжные шлюзы и подключение',
    metaTitle: 'Приём оплаты на сайте в ОАЭ: платёжные шлюзы и документы',
    metaDescription: 'Payment gateway в ОАЭ для сайта и бота: лицензия ЦБ ОАЭ, какие шлюзы работают, документы и требования к сайту, PCI DSS, 3-D Secure, вебхуки и цены.',
    metaKeywords: 'payment gateway UAE, приём оплаты на сайте в Дубае, эквайринг в ОАЭ для сайта, платёжный шлюз ОАЭ, оплата в дирхамах на сайте, N-Genius, Telr, Checkout.com, Stripe ОАЭ',
    excerpt: 'Как компании в ОАЭ принимать оплату картой в дирхамах на сайте или в боте: регулирование ЦБ ОАЭ, шлюзы с подтверждённой работой в стране, документы для заявки, обязательные страницы сайта, платёжная страница против своей формы, 3-D Secure, вебхуки, возвраты и порядок подключения.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-credit-card',
    tags: ['ОАЭ', 'платёжный шлюз', 'приём оплаты', 'эквайринг', '2026'],
    toc: toc(
      ['regulirovanie', 'Кто регулирует приём платежей в ОАЭ'],
      ['shlyuzy', 'Какие платёжные шлюзы работают с компаниями в ОАЭ'],
      ['dokumenty', 'Что нужно для подключения: документы и счёт'],
      ['trebovaniya-k-saytu', 'Требования к сайту: что проверит шлюз'],
      ['tekhnika', 'Платёжная страница шлюза или своя форма'],
      ['3ds-vebhuki', '3-D Secure, вебхуки, возвраты и Apple Pay'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит подключение онлайн-оплаты'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['sayt-dlya-biznesa-v-oae-yazyki-oplata-domen-zakon-2026', 'nds-i-elektronnye-scheta-v-oae-e-invoicing-2026', 'kak-prinimat-oplatu-na-sayte-ekvayring-2026', 'telegram-bot-priema-zayavok-i-oplat-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/development/sites/', label: 'Разработка сайтов' },
    servicesOffer: SVC_UAE_PAY,
    contentHtml: C('onlayn-oplata-na-sayte-v-oae-platezhnye-shlyuzy-2026'),
  },
];
