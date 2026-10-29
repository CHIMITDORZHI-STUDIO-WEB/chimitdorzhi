// Одиночная статья (new38-5): сайт компании по аренде авто в Дубае.
// Запросы: «сайт аренды авто в Дубае», «rent a car Dubai сайт разработка», «какие права нужны для аренды авто в Дубае туристу», «депозит аренда авто Дубай».
// Опора: справочник RTA «Driving Safely in Dubai» (права туриста и резидента), карточка RTA на электронную аренду (постановление Исполсовета № 47/2017, разрешение 1 000 AED),
// ст. 3 и ст. 38 декрет-закона ОАЭ № 8 от 2017 (НДС 5%, цены с налогом), PDPL № 45 от 2021 (u.ae), разрешение рекламодателя NMA.
// category 'industries'.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-30';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_RENT_UAE = {
  title: 'Сайт проката авто в Дубае с бронированием и депозитом',
  services: [
    { icon: 'ph-fill ph-car-profile', label: 'Каталог машин и цены с НДС 5% по ст. 38' },
    { icon: 'ph-fill ph-calendar-check', label: 'Онлайн-бронирование с датами, доставкой и депозитом' },
    { icon: 'ph-fill ph-shield-check', label: 'Хранение копий паспорта и прав по PDPL' },
    { icon: 'ph-fill ph-translate', label: 'Английский, арабский с RTL и русский' },
  ],
  ctaLabel: 'Обсудить сайт проката', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'sayt-arendy-avto-v-dubae-rta-depozit-2026',
    category: 'industries',
    published: true,
    title: 'Сайт аренды авто в Дубае: лицензия RTA, депозит, Salik и цены',
    metaTitle: 'Сайт аренды авто в Дубае: RTA, права, депозит и НДС',
    metaDescription: 'Что показать на сайте проката авто в Дубае: разрешение RTA, права туриста и резидента, депозит, Salik и штрафы, цены с НДС 5%, бронирование и PDPL.',
    metaKeywords: 'сайт аренды авто в Дубае, сайт проката автомобилей ОАЭ, права для аренды авто в Дубае туристу, депозит аренда авто Дубай, Salik аренда, лицензия RTA прокат, НДС 5% цены, PDPL копии паспорта',
    excerpt: 'Как устроить сайт компании по аренде авто в Дубае: какие данные о разрешении RTA вынести на сайт, какие права нужны туристу и резиденту по RTA, как показать депозит, Salik, штрафы и страховку, почему цены пишутся с НДС 5%, как хранить копии паспортов по PDPL и проверять блогеров по разрешению NMA.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 9,
    heroIcon: 'ph-fill ph-car-profile',
    tags: ['аренда авто', 'Дубай', 'ОАЭ', 'бронирование', 'PDPL', '2026'],
    toc: toc(
      ['litsenziya-rta', 'Лицензия RTA на прокат: что показать на сайте'],
      ['prava', 'Какие права нужны туристу и резиденту'],
      ['depozit', 'Депозит и его возврат'],
      ['salik-shtrafy', 'Salik и штрафы: как показать клиенту'],
      ['strahovka', 'Страховка: что писать на сайте'],
      ['ceny-nds', 'Цены с НДС 5%: статья 38'],
      ['bronirovanie', 'Онлайн-бронирование: машина, даты, документы'],
      ['yazyki', 'Английский, арабский, русский'],
      ['dannye-pdpl', 'Копии паспорта и прав: PDPL'],
      ['reklama-nma', 'Реклама у блогеров: NMA'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит сайт аренды авто'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['skolko-zarabatyvaet-avtoprokat-2026', 'sayt-dlya-biznesa-v-oae-yazyki-oplata-domen-zakon-2026', 'onlayn-oplata-na-sayte-v-oae-platezhnye-shlyuzy-2026', 'sayt-na-arabskom-i-angliyskom-rtl-oae-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/development/sites/', label: 'Разработка сайта' },
    servicesOffer: SVC_RENT_UAE,
    contentHtml: C('sayt-arendy-avto-v-dubae-rta-depozit-2026'),
  },
];
