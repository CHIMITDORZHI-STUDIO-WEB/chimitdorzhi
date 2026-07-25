// Батч: ЭДО-логистика + ЖКХ + медицина + транспорт (8 статей ~4 мин, shortForm). Голубой океан B2B.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-22';
const SVC = 'https://chimitdorzhi.tech/services';

const SVC_EDO = {
  title: 'ЭДО и учёт под ключ',
  services: [
    { icon: 'ph-fill ph-file-text', label: 'Электронные накладные (УПД, ЭТрН)' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция ЭДО с 1С и учётом' },
    { icon: 'ph-fill ph-barcode', label: 'Маркировка и Честный знак' },
    { icon: 'ph-fill ph-robot', label: 'Автоматизация документооборота' },
  ],
  ctaLabel: 'Настроить обмен', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_JKH = {
  title: 'Цифровизация ЖКХ и УК',
  services: [
    { icon: 'ph-fill ph-headset', label: 'Диспетчерская и приём заявок 24/7' },
    { icon: 'ph-fill ph-gauge', label: 'Онлайн-показания счётчиков' },
    { icon: 'ph-fill ph-device-mobile', label: 'Приложение для жильцов' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция с биллингом и ГИС ЖКХ' },
  ],
  ctaLabel: 'Обсудить проект ЖКХ', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_MED = {
  title: 'IT для клиник под ключ',
  services: [
    { icon: 'ph-fill ph-first-aid-kit', label: 'Медкарта и МИС' },
    { icon: 'ph-fill ph-calendar-check', label: 'Онлайн-запись и напоминания' },
    { icon: 'ph-fill ph-shield-check', label: '152-ФЗ и защита медданных' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграции с лабораторией и кассой' },
  ],
  ctaLabel: 'Обсудить проект клиники', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_AUTO = {
  title: 'IT для автопарка и транспорта',
  services: [
    { icon: 'ph-fill ph-gauge', label: 'Тахографы и контроль режима' },
    { icon: 'ph-fill ph-map-pin-line', label: 'GPS-мониторинг и маршруты' },
    { icon: 'ph-fill ph-file-text', label: 'Электронные путевые листы и ЭТрН' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция с 1С и учётом' },
  ],
  ctaLabel: 'Обсудить автопарк', ctaUrl: 'https://t.me/chimitdorzhi',
};

const CTA_EDO = { url: `${SVC}/business-automation/`, label: 'Настроить ЭДО' };
const CTA_JKH = { url: `${SVC}/business-automation/`, label: 'Цифровизация ЖКХ' };
const CTA_MED = { url: `${SVC}/clinics-digitalization/`, label: 'IT для клиники' };
const CTA_AUTO = { url: `${SVC}/business-automation/`, label: 'Автоматизация автопарка' };

const T = (items) => items.concat([{ id: 'faq', text: 'FAQ' }, { id: 'vyvody', text: 'Коротко о главном' }]);

const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D,
  readingMinutes: 4, shortForm: true, servicesOffer: SVC_EDO, ctaInternal: CTA_EDO,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  // === ЭДО логистика ===
  E({ slug: 'elektronnye-nakladnye-upd-edo-2026', category: 'industries', heroIcon: 'ph-fill ph-file-text',
    servicesOffer: SVC_EDO, ctaInternal: CTA_EDO,
    title: 'Электронные накладные (УПД): переход на ЭДО в торговле',
    metaTitle: 'Электронные накладные УПД: переход на ЭДО',
    metaDescription: 'Электронные накладные и УПД: что такое ЭДО в торговле, кому пора переходить, что нужно (ЭЦП, оператор ЭДО), как связать с 1С и автоматизировать обмен документами с контрагентами.',
    metaKeywords: 'электронные накладные, упд электронный, эдо в торговле, переход на эдо, электронный документооборот с контрагентами',
    excerpt: 'Что такое ЭДО и электронный УПД, кому пора переходить, что нужно для старта и как связать электронные накладные с 1С без ручного ввода.',
    tags: ['ЭДО', 'УПД', 'торговля', 'документооборот'],
    toc: T([{ id: 'chto-eto', text: 'Что такое ЭДО и УПД' }, { id: 'komu', text: 'Кому пора переходить' }, { id: 'chto-nuzhno', text: 'Что нужно для перехода' }, { id: 'integraciya', text: 'Связка с 1С' }]),
    relatedSlugs: ['elektronnaya-transportnaya-nakladnaya-etrn-2026', 'markirovka-ostatkov-na-sklade-2026', 'integraciya-api-na-zakaz-2026'] }),

  E({ slug: 'elektronnaya-transportnaya-nakladnaya-etrn-2026', category: 'industries', heroIcon: 'ph-fill ph-truck',
    servicesOffer: SVC_EDO, ctaInternal: CTA_EDO,
    title: 'Электронная транспортная накладная (ЭТрН): как перейти',
    metaTitle: 'Электронная транспортная накладная (ЭТрН) 2026',
    metaDescription: 'Электронная транспортная накладная (ЭТрН): кому обязательна, как перейти, что нужно (ЭЦП, оператор ЭДО, ГИС ЭПД), как это работает для грузоотправителя, перевозчика и получателя.',
    metaKeywords: 'электронная транспортная накладная, этрн, эпд, гис эпд, переход на электронные транспортные накладные',
    excerpt: 'Кому обязательна ЭТрН, что нужно для перехода, как работает электронная транспортная накладная для грузоотправителя, перевозчика и получателя.',
    tags: ['ЭТрН', 'ЭДО', 'перевозки', 'логистика'],
    toc: T([{ id: 'chto-eto', text: 'Что такое ЭТрН' }, { id: 'komu', text: 'Кому обязательна' }, { id: 'kak-rabotaet', text: 'Как это работает' }, { id: 'chto-nuzhno', text: 'Что нужно для перехода' }]),
    relatedSlugs: ['elektronnye-nakladnye-upd-edo-2026', 'putevye-listy-elektronno-2026', 'tahograf-komu-obyazatelen-2026'] }),

  E({ slug: 'markirovka-ostatkov-na-sklade-2026', category: 'industries', heroIcon: 'ph-fill ph-barcode',
    servicesOffer: SVC_EDO, ctaInternal: CTA_EDO,
    title: 'Маркировка остатков на складе: как промаркировать товар',
    metaTitle: 'Маркировка остатков на складе: как сделать',
    metaDescription: 'Маркировка остатков товара на складе в Честном знаке: когда нужна, как промаркировать уже лежащий товар пошагово, что нужно (УКЭП, ЭДО, принтер) и как автоматизировать процесс.',
    metaKeywords: 'маркировка остатков, промаркировать остатки, маркировка товара на складе, честный знак остатки, ввод в оборот остатков',
    excerpt: 'Когда нужна маркировка остатков, как промаркировать уже лежащий на складе товар пошагово, что для этого нужно и как автоматизировать процесс.',
    tags: ['маркировка', 'Честный знак', 'склад', 'остатки'],
    toc: T([{ id: 'kogda', text: 'Когда нужна маркировка остатков' }, { id: 'kak', text: 'Как промаркировать пошагово' }, { id: 'chto-nuzhno', text: 'Что нужно' }, { id: 'avtomatizaciya', text: 'Как автоматизировать' }]),
    relatedSlugs: ['chestnyy-znak-podklyuchenie-poshagovo-2026', 'elektronnye-nakladnye-upd-edo-2026', 'integraciya-wildberries-1c-2026'] }),

  // === ЖКХ ===
  E({ slug: 'dispetcherskaya-zhkh-24-7-2026', category: 'industries', heroIcon: 'ph-fill ph-headset',
    servicesOffer: SVC_JKH, ctaInternal: CTA_JKH,
    title: 'Диспетчерская ЖКХ 24/7: приём заявок и приложение для жильцов',
    metaTitle: 'Диспетчерская ЖКХ 24/7: приём заявок жильцов',
    metaDescription: 'Аварийно-диспетчерская служба ЖКХ 24/7: как организовать приём заявок жильцов (телефон, чат, приложение), контроль сроков по нормативам, приложение для жильцов и связку с УК.',
    metaKeywords: 'диспетчерская жкх, аварийно-диспетчерская служба, прием заявок жкх, приложение для жильцов, диспетчеризация ук',
    excerpt: 'Как организовать диспетчерскую ЖКХ 24/7: приём заявок жильцов по всем каналам, контроль сроков по нормативам и приложение для жителей.',
    tags: ['ЖКХ', 'диспетчерская', 'УК', 'заявки'],
    toc: T([{ id: 'zachem', text: 'Зачем нужна диспетчерская' }, { id: 'kak-ustroeno', text: 'Как устроен приём заявок' }, { id: 'prilozhenie', text: 'Приложение для жильцов' }, { id: 'vnedrenie', text: 'Как внедрить' }]),
    relatedSlugs: ['pokazaniya-schetchikov-onlayn-2026', 'cifrovizaciya-snt-tszh-2026', 'integraciya-api-na-zakaz-2026'] }),

  E({ slug: 'pokazaniya-schetchikov-onlayn-2026', category: 'industries', heroIcon: 'ph-fill ph-gauge',
    servicesOffer: SVC_JKH, ctaInternal: CTA_JKH,
    title: 'Показания счётчиков онлайн: сервис для УК и ТСЖ',
    metaTitle: 'Показания счётчиков онлайн: сервис для УК',
    metaDescription: 'Онлайн-передача показаний счётчиков: как сделать удобный приём показаний для жильцов (сайт, бот, приложение), проверку и выгрузку в биллинг, интеграцию с 1С и ГИС ЖКХ.',
    metaKeywords: 'показания счетчиков онлайн, передать показания счетчиков, прием показаний ук, онлайн передача показаний, сервис показаний счетчиков',
    excerpt: 'Как сделать удобную онлайн-передачу показаний счётчиков для жильцов и автоматическую выгрузку в биллинг УК или ТСЖ.',
    tags: ['ЖКХ', 'счётчики', 'УК', 'биллинг'],
    toc: T([{ id: 'zachem', text: 'Зачем это УК и жильцам' }, { id: 'kanaly', text: 'Каналы приёма показаний' }, { id: 'billing', text: 'Выгрузка в биллинг' }, { id: 'vnedrenie', text: 'Как внедрить' }]),
    relatedSlugs: ['dispetcherskaya-zhkh-24-7-2026', 'cifrovizaciya-snt-tszh-2026', 'integraciya-api-na-zakaz-2026'] }),

  // === Медицина ===
  E({ slug: 'elektronnaya-medkarta-mis-2026', category: 'industries', heroIcon: 'ph-fill ph-first-aid-kit',
    servicesOffer: SVC_MED, ctaInternal: CTA_MED,
    title: 'Электронная медкарта и МИС: что может клиника в 2026',
    metaTitle: 'Электронная медкарта и МИС: что может клиника',
    metaDescription: 'Электронная медкарта и медицинская информационная система (МИС): что это даёт клинике, что должно быть внутри, как выбрать МИС, учесть 152-ФЗ для медданных и когда нужна доработка.',
    metaKeywords: 'электронная медкарта, мис медицинская система, как выбрать мис, эмк для клиники, автоматизация клиники',
    excerpt: 'Что даёт клинике электронная медкарта и МИС, что должно быть внутри, как выбрать систему, учесть 152-ФЗ и когда нужна доработка под свою клинику.',
    tags: ['медкарта', 'МИС', 'клиника', '152-ФЗ'],
    toc: T([{ id: 'chto-eto', text: 'Что такое ЭМК и МИС' }, { id: 'chto-daet', text: 'Что даёт клинике' }, { id: 'kak-vybrat', text: 'Как выбрать МИС' }, { id: 'zakon', text: '152-ФЗ и медданные' }]),
    relatedSlugs: ['it-dlya-stomatologiy-medcentrov-2026', 'sayt-dlya-vracha-2026', 'polzovatelskoe-soglashenie-obrazec-2026'] }),

  // === Транспорт ===
  E({ slug: 'tahograf-komu-obyazatelen-2026', category: 'industries', heroIcon: 'ph-fill ph-gauge',
    servicesOffer: SVC_AUTO, ctaInternal: CTA_AUTO,
    title: 'Тахограф: кому обязателен, сроки и штрафы в 2026',
    metaTitle: 'Тахограф: кому обязателен, штрафы 2026',
    metaDescription: 'Тахограф: на какие машины обязателен, зачем нужен (режим труда и отдыха водителя), какие штрафы за отсутствие и неисправность и как контролировать данные тахографов по автопарку.',
    metaKeywords: 'тахограф, тахограф кому обязателен, штраф за тахограф, тахограф на грузовой, режим труда и отдыха водителя',
    excerpt: 'На какие машины обязателен тахограф, зачем он нужен, какие штрафы за отсутствие и неисправность и как контролировать данные по всему автопарку.',
    tags: ['тахограф', 'транспорт', 'автопарк', 'штрафы'],
    toc: T([{ id: 'chto-eto', text: 'Что такое тахограф' }, { id: 'komu', text: 'Кому обязателен' }, { id: 'shtrafy', text: 'Штрафы' }, { id: 'kontrol', text: 'Контроль по автопарку' }]),
    relatedSlugs: ['putevye-listy-elektronno-2026', 'elektronnaya-transportnaya-nakladnaya-etrn-2026', 'traccar-gps-monitoring-transporta-2026'] }),

  E({ slug: 'elektronnyy-pts-kak-proverit-2026', category: 'industries', heroIcon: 'ph-fill ph-identification-card',
    servicesOffer: SVC_AUTO, ctaInternal: CTA_AUTO,
    title: 'Электронный ПТС: что это и как проверить в 2026',
    metaTitle: 'Электронный ПТС: что это и как проверить',
    metaDescription: 'Электронный ПТС (ЭПТС): что это, чем отличается от бумажного, как проверить статус и историю по номеру, как посмотреть данные и что делать при покупке авто, в том числе из-за рубежа.',
    metaKeywords: 'электронный птс, эптс, как проверить электронный птс, проверить птс по номеру, статус эптс',
    excerpt: 'Что такое электронный ПТС, чем отличается от бумажного, как проверить его статус и историю по номеру и на что смотреть при покупке авто.',
    tags: ['ЭПТС', 'авто', 'проверка', 'документы'],
    toc: T([{ id: 'chto-eto', text: 'Что такое электронный ПТС' }, { id: 'otlichie', text: 'Чем отличается от бумажного' }, { id: 'kak-proverit', text: 'Как проверить' }, { id: 'pokupka', text: 'На что смотреть при покупке' }]),
    relatedSlugs: ['tahograf-komu-obyazatelen-2026', 'zakaz-s-1688-napryamuyu-2026', 'putevye-listy-elektronno-2026'] }),
];
