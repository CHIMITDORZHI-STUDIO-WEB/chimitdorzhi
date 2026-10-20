// Одиночная статья (new33-4): волонтёры для мероприятия или НКО, набор, смены, учёт часов и Добро.рф.
// Запросы: «учёт волонтёров», «набор волонтёров на мероприятие», «добро.рф для организаторов».
// Опора: 135-ФЗ (ст. 5, 17.1, 17.5), ПП № 1067 (п. 3, 4(1), 7), ПП № 1425 (п. 8), 152-ФЗ (ч. 1 ст. 9), база знаний dobro.ru (статьи 11, 26, 111).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-21';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_VOL = {
  title: 'Бот для набора и смен волонтёров',
  services: [
    { icon: 'ph-fill ph-users-three', label: 'Анкета, согласие и отбор волонтёров в Telegram или MAX' },
    { icon: 'ph-fill ph-calendar-check', label: 'Смены и зоны с лимитами, резерв и напоминания' },
    { icon: 'ph-fill ph-qr-code', label: 'Отметка прихода и ухода по QR и подсчёт часов' },
    { icon: 'ph-fill ph-certificate', label: 'Выгрузка для Добро.рф и благодарственные письма пачкой' },
  ],
  ctaLabel: 'Обсудить бота для волонтёров', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'volontery-nabor-smeny-uchet-chasov-dobro-rf-2026',
    category: 'industries',
    published: true,
    title: 'Волонтёры для мероприятия и НКО: набор, смены, часы и Добро.рф',
    metaTitle: 'Учёт волонтёров: набор, смены, часы и Добро.рф',
    metaDescription: 'Набор волонтёров на мероприятие: анкета, смены, QR и учёт часов в боте, перенос часов на Добро.рф за 60 дней, договор по 135-ФЗ и согласия по 152-ФЗ.',
    metaKeywords: 'учёт волонтёров, набор волонтёров на мероприятие, добро.рф для организаторов, смены волонтёров, учёт волонтёрских часов, бот для волонтёров, договор с волонтёром 135-фз, личная книжка волонтёра',
    excerpt: 'Как молодёжному центру, НКО или организатору фестиваля набрать волонтёров, раздать смены и зоны, отметить присутствие по QR и посчитать часы, а потом перенести их на Добро.рф. Что говорят 135-ФЗ, постановления № 1067 и № 1425 и 152-ФЗ.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-hand-heart',
    tags: ['волонтёры', 'Добро.рф', 'мероприятия', 'НКО', 'боты', '2026'],
    toc: toc(
      ['zakon', 'Волонтёр и организатор по 135-ФЗ'],
      ['dogovor', 'Договор с волонтёром и обязанности организатора'],
      ['dobro-rf', 'Добро.рф для организаторов: что даёт платформа'],
      ['deti-i-dannye', 'Несовершеннолетние волонтёры и персональные данные'],
      ['nabor', 'Набор волонтёров на мероприятие: анкета и отбор'],
      ['smeny', 'Смены, зоны и инструктаж'],
      ['den-sobytiya', 'Чат смены, напоминания и отметка по QR'],
      ['uchet-chasov', 'Учёт часов и благодарственные письма'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит бот для волонтёров'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['bot-registracii-na-meropriyatie-2026', 'massovaya-generaciya-sertifikatov-i-beydzhey-2026', 'programma-dlya-nko-2026', '152-fz-dlya-organizatora-meropriyatiy-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/bot-registracii-biletov/', label: 'Бот регистрации и check-in' },
    servicesOffer: SVC_VOL,
    contentHtml: C('volontery-nabor-smeny-uchet-chasov-dobro-rf-2026'),
  },
];
