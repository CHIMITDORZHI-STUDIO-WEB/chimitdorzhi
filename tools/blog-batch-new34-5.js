// Одиночная статья (new34-5): сайт ресторана в Дубае, меню на арабском и английском, доставка, требования муниципалитета.
// Запросы: «сайт ресторана в Дубае», «меню ресторана на арабском», «онлайн-заказ ресторан Dubai».
// Опора: Dubai Municipality Food Code (Version 1) п. 3.4.3 и 8.3; DM Calorie Declaration and Healthy Claims v30 от 22.11.2020;
// DM-FSD-GU63 Requirements for Food Transportation and Delivery Vehicles (31.08.2023); Federal Decree-Law No. 8 of 2017 on VAT, ст. 38;
// FTA «Get to know your Tax Obligations»; u.ae Consumer Protection; Google Maps contribution policy (отзывы).
// category 'industries': отраслевой материал для общепита, как sayt-kliniki-v-dubae-dha-medicinskaya-reklama-2026 для клиник.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-22';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_RESTAURANT_UAE = {
  title: 'Сайт ресторана в Дубае',
  services: [
    { icon: 'ph-fill ph-fork-knife', label: 'Меню из одной таблицы для сайта, QR и агрегаторов' },
    { icon: 'ph-fill ph-translate', label: 'Английская, арабская и русская версии, аллергены и цены с VAT' },
    { icon: 'ph-fill ph-chat-circle-dots', label: 'Заказы с сайта в бот и уведомления на кухню' },
    { icon: 'ph-fill ph-calendar-check', label: 'Бронь столов и онлайн-оплата через местный шлюз' },
  ],
  ctaLabel: 'Обсудить сайт ресторана', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'sayt-restorana-v-dubae-menyu-dostavka-2026',
    category: 'industries',
    published: true,
    title: 'Сайт ресторана в Дубае: меню на арабском, доставка и муниципалитет',
    metaTitle: 'Сайт ресторана в Дубае: меню на арабском и доставка',
    metaDescription: 'Сайт ресторана или кафе в Дубае: меню на английском и арабском, аллергены по Food Code, цены с VAT, онлайн-заказ и доставка против агрегаторов, цены.',
    metaKeywords: 'сайт ресторана в Дубае, меню ресторана на арабском, онлайн-заказ ресторан Dubai, сайт кафе в Дубае, QR-меню Дубай, доставка еды Дубай сайт, dark kitchen Дубай, Dubai Municipality меню',
    excerpt: 'Что нужно сайту ресторана, кафе, кондитерской или dark kitchen в Дубае: меню на английском и арабском, отметки аллергенов и нехаляльных блюд по Food Code Dubai Municipality, калории, цены с VAT, онлайн-заказ навынос и своя доставка рядом с агрегаторами, бронь столов, отзывы и цены на разработку.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-fork-knife',
    tags: ['ОАЭ', 'Дубай', 'рестораны', 'меню', 'доставка', '2026'],
    toc: toc(
      ['trebovaniya', 'Что Dubai Municipality требует от меню'],
      ['vat-i-yazyk', 'Цены с VAT и арабский для покупателя'],
      ['menyu', 'Меню на сайте и QR-меню: языки, фото, аллергены'],
      ['dostavka', 'Онлайн-заказ: свои курьеры или агрегаторы'],
      ['bron-otzyvy', 'Бронь столов и отзывы на Google Maps'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит сайт ресторана'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['sayt-na-arabskom-i-angliyskom-rtl-oae-2026', 'onlayn-oplata-na-sayte-v-oae-platezhnye-shlyuzy-2026', 'elektronnoe-qr-menyu-dlya-kafe-2026', 'nds-i-elektronnye-scheta-v-oae-e-invoicing-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/development/sites/', label: 'Разработка сайтов' },
    servicesOffer: SVC_RESTAURANT_UAE,
    contentHtml: C('sayt-restorana-v-dubae-menyu-dostavka-2026'),
  },
];
