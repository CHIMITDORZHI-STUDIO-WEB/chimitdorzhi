// Одиночная статья (new33-5): сайт клиники в Дубае, лицензия DHA, правила медицинской рекламы, медданные.
// Запросы: «сайт для клиники в Дубае», «медицинская реклама ОАЭ разрешение», «DHA advertising permit».
// Опора: DHA Standards for Medical Advertisement Content on Social Media v1.1 (п. 5.2, 5.3, 6.1, 6.2, 6.6, 6.10, 6.11, 7.1.7, 7.2, 8.1.3, 9.6, 9.7, прил. 1 и 2),
// DHA Manual for Licensing Health Facility v1.1 (п. 6.7.9, 10.7, 19.1.7), UAE Media Council Advertiser Guide и FAQ,
// u.ae (PDPL, закон № 2 от 2019), DHA Policy for Health Information Sharing 2024 (п. 4.20.1), DHA Sheryan проверка лицензии.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-21';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_CLINIC_UAE = {
  title: 'Сайт для клиники в Дубае',
  services: [
    { icon: 'ph-fill ph-stethoscope', label: 'Врачи и услуги по лицензии DHA, тексты без запрещённых обещаний' },
    { icon: 'ph-fill ph-calendar-check', label: 'Онлайн-запись из расписания, напоминания и предоплата' },
    { icon: 'ph-fill ph-translate', label: 'Английская, арабская и русская версии сайта' },
    { icon: 'ph-fill ph-shield-check', label: 'Хранение данных пациентов в ОАЭ и политика конфиденциальности' },
  ],
  ctaLabel: 'Обсудить сайт клиники', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'sayt-kliniki-v-dubae-dha-medicinskaya-reklama-2026',
    category: 'industries',
    published: true,
    title: 'Сайт клиники в Дубае: лицензия DHA и правила медицинской рекламы',
    metaTitle: 'Сайт клиники в Дубае: DHA, медреклама и данные пациентов',
    metaDescription: 'Сайт клиники в Дубае: врачи по лицензии DHA, тексты без гарантий, фото до/после, разрешение на медицинскую рекламу, хранение медданных в ОАЭ и цены.',
    metaKeywords: 'сайт для клиники в Дубае, медицинская реклама ОАЭ разрешение, DHA advertising permit, сайт стоматологии Дубай, сайт косметологии Дубай, реклама клиники DHA, MOHAP лицензия на рекламу, медицинские данные ОАЭ',
    excerpt: 'Что разместить на сайте клиники, стоматологии или косметологии в Дубае: данные врачей точно по лицензии DHA, тексты без абсолютных обещаний, правила для фото до/после и отзывов, разрешения DHA, MOHAP и UAE Media Council на рекламу, хранение медданных в ОАЭ, онлайн-запись и оплата.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 9,
    heroIcon: 'ph-fill ph-stethoscope',
    tags: ['ОАЭ', 'Дубай', 'клиника', 'медицинская реклама', 'DHA', '2026'],
    toc: toc(
      ['kto-reguliruet', 'Кто регулирует сайт и рекламу клиники в Дубае'],
      ['pravila-dha', 'Правила DHA о медицинской рекламе: что нельзя писать'],
      ['razreshenie', 'Разрешение на медицинскую рекламу: DHA, MOHAP и Media Council'],
      ['chto-na-sayte', 'Что должно быть на сайте клиники в Дубае'],
      ['dannye', 'Медицинские данные пациентов: PDPL и закон № 2 от 2019 года'],
      ['zapis-oplata', 'Онлайн-запись, напоминания и оплата'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит сайт клиники в Дубае'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['sayt-na-arabskom-i-angliyskom-rtl-oae-2026', 'onlayn-oplata-na-sayte-v-oae-platezhnye-shlyuzy-2026', 'sayt-dlya-biznesa-v-oae-yazyki-oplata-domen-zakon-2026', 'sayt-medicinskoy-kliniki-trebovaniya-zakona-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/clinics-digitalization/', label: 'Цифровизация клиник' },
    servicesOffer: SVC_CLINIC_UAE,
    contentHtml: C('sayt-kliniki-v-dubae-dha-medicinskaya-reklama-2026'),
  },
];
