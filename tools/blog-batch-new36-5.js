// Одиночная статья (new36-5): сайт учебного или детского центра в Дубае, KHDA, реклама, запись на пробное, VAT, данные детей.
// Запросы: «сайт учебного центра в Дубае», «KHDA лицензия учебный центр», «языковая школа в Дубае сайт».
// Опора: KHDA Administrative Resolution No. 2 of 2018 (ст. 4 п. 7, ст. 6, 10, 11, 12, 15, 17), руководство KHDA по рекламе и маркетингу,
// страница услуги KHDA по одобрению рекламы (120 AED, 3 раб. дня), справочник KHDA Find Training Institutes,
// VAT Decree-Law No. 8 of 2017 (ст. 3, 38, 45 п. 13), Cabinet Decision No. 52 of 2017 ст. 40 (ред. 18.09.2025), u.ae (PDPL, Child Digital Safety,
// eCommerce), Federal Law No. 3 of 2016 (ст. 5, 42), NMA: Media Content Standards и разрешение рекламодателя.
// category 'industries': нишевая статья, как sayt-salona-krasoty-v-dubae-zapis-2026.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-24';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_EDU_UAE = {
  title: 'Сайт учебного центра в Дубае',
  services: [
    { icon: 'ph-fill ph-calendar-check', label: 'Расписание групп и запись на пробное занятие' },
    { icon: 'ph-fill ph-translate', label: 'Английская, арабская и русская версии сайта' },
    { icon: 'ph-fill ph-credit-card', label: 'Оплата месяца и пакетов, цены с НДС 5%' },
    { icon: 'ph-fill ph-shield-check', label: 'Анкета родителя и раздельные согласия по PDPL' },
  ],
  ctaLabel: 'Обсудить сайт центра', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'sayt-uchebnogo-centra-v-dubae-khda-2026',
    category: 'industries',
    published: true,
    title: 'Сайт учебного центра в Дубае: KHDA, запись на пробное, VAT и дети',
    metaTitle: 'Сайт учебного центра в Дубае: KHDA, запись и VAT',
    metaDescription: 'Сайт учебного центра в Дубае: что требует KHDA, согласование рекламы, запись на пробное и расписание, цены с НДС 5%, данные детей и согласие родителя.',
    metaKeywords: 'сайт учебного центра в Дубае, KHDA лицензия учебный центр, языковая школа в Дубае сайт, training institute KHDA, реклама учебного центра KHDA, НДС на образование ОАЭ, запись на пробное занятие',
    excerpt: 'Что нужно сайту языковой школы, центра подготовки к экзаменам или детских кружков в Дубае: обязательный сайт по решению KHDA № 2 от 2018 года, согласование рекламы и что нельзя обещать, расписание групп и запись на пробное, английский, арабский и русский, цены с НДС 5% и когда возможна нулевая ставка, оплата и депозиты, данные детей и согласие родителя.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-graduation-cap',
    tags: ['ОАЭ', 'Дубай', 'учебный центр', 'KHDA', 'онлайн-запись', '2026'],
    toc: toc(
      ['khda', 'Разрешение KHDA для учебного центра'],
      ['chto-na-sayte', 'Что должно быть на сайте по правилам KHDA'],
      ['reklama', 'Что нельзя обещать в рекламе'],
      ['zapis', 'Онлайн-запись на пробное занятие и расписание групп'],
      ['yazyki', 'Английский, арабский и русский'],
      ['nds', 'Цены с НДС: 5% или 0%'],
      ['oplata', 'Оплата, депозиты и пакеты занятий'],
      ['dannye-detey', 'Данные детей и согласие родителя'],
      ['bezopasnost', 'Безопасность детей: что подтверждено'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит сайт учебного центра в Дубае'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['it-dlya-yazykovoy-shkoly-repetitorov-2026', 'sayt-dlya-biznesa-v-oae-yazyki-oplata-domen-zakon-2026', 'onlayn-oplata-na-sayte-v-oae-platezhnye-shlyuzy-2026', 'sayt-salona-krasoty-v-dubae-zapis-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/development/sites/', label: 'Разработка сайта' },
    servicesOffer: SVC_EDU_UAE,
    contentHtml: C('sayt-uchebnogo-centra-v-dubae-khda-2026'),
  },
];
