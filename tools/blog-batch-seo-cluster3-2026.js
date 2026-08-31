// SEO-кластер 3: под реальные запросы из GSC/Яндекса (ниши, запись, оплата, кейсы).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-01';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const BOTS = { url: `${S}/services/telegram-bots/`, label: 'Заказать бота под ключ' };
const AUTO = { url: `${S}/services/business-automation/`, label: 'Автоматизировать процесс под ключ' };
const WEB = { url: `${S}/services/web-development/`, label: 'Заказать сайт под ключ' };
const VOICE = { url: `${S}/services/voice-ai/`, label: 'Заказать голосового робота' };
const CHINA = { url: `${S}/services/china-it/`, label: 'Помощь с ВЭД и Китаем' };
const ANALYTICS = { url: `${S}/services/ai-analytics/`, label: 'Настроить учёт и аналитику' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'avtomatizaciya-kalyannoy-2026', category: 'industries', heroIcon: 'ph-fill ph-wind', ctaInternal: BOTS,
    title: 'Автоматизация кальянной: запись, кальянная карта, учёт табака',
    metaTitle: 'Автоматизация кальянной: запись и учёт',
    metaDescription: 'Как автоматизировать кальянную: онлайн-запись столов, электронная кальянная карта, учёт табака и склада, программа лояльности. Разбираю на практике.',
    excerpt: 'Кальянная теряет столы из-за путаницы с бронью и «слепого» склада табака. Разбираю, что автоматизировать: запись, электронную кальянную карту, учёт табака и лояльность.',
    tags: ['кальянная', 'автоматизация', 'запись', 'учёт'],
    toc: [{ id: 'problema', text: 'Где кальянная теряет деньги' }, { id: 'zapis', text: 'Онлайн-запись столов' }, { id: 'karta-sklad', text: 'Кальянная карта и склад табака' }, { id: 'loyalnost', text: 'Лояльность и возврат' }, ...FAQ_VYV],
    relatedSlugs: ['onlayn-zapis-bez-sayta-v-messendzhere-2026', 'it-dlya-kofeyni-obshchepita-2026', 'max-bot-restoran-kafe-2026', 'chat-bot-faq-podderzhka-telegram-max-2026'] }),

  E({ slug: 'crm-tablica-klientov-iz-excel-2026', category: 'biznes-krugozor', heroIcon: 'ph-fill ph-table', ctaInternal: AUTO,
    title: 'CRM-таблица клиентов: как перейти от Excel к своей CRM',
    metaTitle: 'Таблица клиентов: от Excel к своей CRM',
    metaDescription: 'Таблица клиентов в Excel перестала тянуть: как перейти на CRM — воронка, напоминания, история, без потери данных и без дорогих подписок. Разбираю на практике.',
    excerpt: 'Клиенты в Excel — пока их сотня. Дальше теряются сделки, дубли, забытые звонки. Разбираю, как перейти от таблицы к нормальной CRM: воронка, напоминания, история — без боли.',
    tags: ['CRM', 'таблица клиентов', 'Excel', 'воронка'],
    toc: [{ id: 'kogda-excel-ne-tyanet', text: 'Когда Excel перестаёт тянуть' }, { id: 'chto-daet-crm', text: 'Что даёт CRM' }, { id: 'perehod', text: 'Как перейти без потерь' }, { id: 'gotovaya-ili-svoya', text: 'Готовая CRM или своя' }, ...FAQ_VYV],
    relatedSlugs: ['espocrm-besplatnaya-crm-2026', 'bi-dashbordy-metabase-2026', 'skvoznaya-analitika-malyy-biznes-2026', 'crm-bot-dlya-avtoservisa-2026'] }),

  E({ slug: 'oplata-postavshchiku-v-kitay-ved-2026', category: 'biznes-krugozor', heroIcon: 'ph-fill ph-package', ctaInternal: CHINA,
    title: 'Оплата поставщику в Китай: как проводят ВЭД-платежи в 2026',
    metaTitle: 'Оплата поставщику в Китай: ВЭД-платежи 2026',
    metaDescription: 'Как оплатить поставщику в Китай в 2026: способы проводить платежи, агенты, риски и что автоматизировать в учёте ВЭД. Разбираю на практике, без схем.',
    excerpt: 'Прямой платёж в Китай стал квестом: банки, агенты, комиссии, риски. Разбираю, какими путями бизнес проводит ВЭД-платежи и что можно автоматизировать в учёте — без серых схем.',
    tags: ['ВЭД', 'Китай', 'платежи', 'импорт'],
    toc: [{ id: 'problema', text: 'Почему стало сложно' }, { id: 'sposoby', text: 'Как проводят платежи' }, { id: 'riski', text: 'Риски и на что смотреть' }, { id: 'avtomatizaciya', text: 'Что автоматизировать в учёте' }, ...FAQ_VYV],
    relatedSlugs: ['ved-checker-proverka-tnved-keys-2026', 'wetocar-katalog-avto-kitay-keys-2026', 'ii-analiz-dogovorov-schetov-2026', 'crm-tablica-klientov-iz-excel-2026'] }),

  E({ slug: 'keysy-cifrovizacii-kofeen-2026', category: 'cases', heroIcon: 'ph-fill ph-coffee', ctaInternal: WEB,
    title: 'Кейсы цифровизации кофеен: что реально дало результат',
    metaTitle: 'Кейсы цифровизации кофеен: что сработало',
    metaDescription: 'Реальные кейсы цифровизации кофеен: PWA-лояльность вместо бумажных штампов, бот заказа, QR-меню и аналитика точек — что дало результат. Разбираю на практике.',
    excerpt: 'Собрал реальные кейсы, как кофейни уходят от бумажных штампов и блокнотов: PWA-лояльность, бот заказа, QR-меню, аналитика по точкам — и что из этого реально сработало.',
    tags: ['кофейни', 'кейсы', 'цифровизация', 'лояльность'],
    toc: [{ id: 'zachem', text: 'Зачем кофейне цифра' }, { id: 'loyalnost', text: 'Лояльность вместо штампов' }, { id: 'zakaz-menyu', text: 'Заказ и QR-меню' }, { id: 'analitika', text: 'Аналитика по точкам' }, ...FAQ_VYV],
    relatedSlugs: ['tsifrovaya-karta-loyalnosti-pwa-2026', 'it-dlya-kofeyni-obshchepita-2026', 'goryachiy-moment-sayt-kofeen-keys-2026', 'bot-dlya-dostavki-edy-2026'] }),

  E({ slug: 'avtomatizaciya-kliniki-medcentra-2026', category: 'industries', heroIcon: 'ph-fill ph-first-aid-kit', ctaInternal: AUTO,
    title: 'Автоматизация клиники и медцентра: запись, напоминания, карты пациентов',
    metaTitle: 'Автоматизация клиники и медцентра',
    metaDescription: 'Как автоматизировать клинику или медцентр: онлайн-запись, напоминания о приёме, электронные карты пациентов и защита данных по 152-ФЗ. Разбираю на практике.',
    excerpt: 'Пропущенные приёмы, потерянные карты, запись только по телефону — клиника теряет деньги и лояльность. Разбираю, что автоматизировать и как это сделать по 152-ФЗ.',
    tags: ['клиника', 'медцентр', 'автоматизация', 'запись'],
    toc: [{ id: 'problema', text: 'Где клиника теряет' }, { id: 'zapis-napominaniya', text: 'Запись и напоминания' }, { id: 'karty', text: 'Электронные карты пациентов' }, { id: 'zakon', text: 'Данные пациентов и 152-ФЗ' }, ...FAQ_VYV],
    relatedSlugs: ['onlayn-zapis-bez-sayta-v-messendzhere-2026', 'it-dlya-stomatologiy-medcentrov-2026', 'bot-napominalka-osago-to-2026', 'chat-bot-faq-podderzhka-telegram-max-2026'] }),

  E({ slug: 'onlayn-zapis-bez-sayta-v-messendzhere-2026', category: 'industries', heroIcon: 'ph-fill ph-calendar-check', ctaInternal: BOTS,
    title: 'Онлайн-запись без сайта: приём клиентов прямо в мессенджере',
    metaTitle: 'Онлайн-запись без сайта — в мессенджере',
    metaDescription: 'Как принимать онлайн-запись без сайта — прямо в Telegram или MAX: бот показывает свободные слоты, записывает и напоминает. Быстрый старт. Разбираю на практике.',
    excerpt: 'Сайта нет, а запись нужна вчера. Разбираю, как принимать онлайн-запись прямо в мессенджере: бот показывает окошки, записывает и напоминает — без разработки полноценного сайта.',
    tags: ['онлайн-запись', 'бот', 'мессенджер', 'услуги'],
    toc: [{ id: 'zachem', text: 'Кому подходит запись без сайта' }, { id: 'kak-rabotaet', text: 'Как это работает' }, { id: 'chto-umeet', text: 'Что умеет бот записи' }, { id: 'start', text: 'Как быстро запустить' }, ...FAQ_VYV],
    relatedSlugs: ['onlayn-zapis-salon-krasoty-keys-2026', 'chat-bot-zapisi-v-barbershop-2026', 'avtootvetchik-na-propushchennye-zvonki-2026', 'avtomatizaciya-kliniki-medcentra-2026'] }),

  E({ slug: 'avtootvetchik-na-propushchennye-zvonki-2026', category: 'industries', heroIcon: 'ph-fill ph-phone-call', ctaInternal: VOICE,
    title: 'Автоответчик на пропущенные звонки: как не терять клиентов',
    metaTitle: 'Автоответчик на пропущенные звонки',
    metaDescription: 'Пропущенный звонок = потерянный клиент. Как бот сам перезванивает или пишет в мессенджер по пропущенным и доводит до записи. Разбираю на практике.',
    excerpt: 'Каждый пропущенный звонок — ушедший к конкуренту клиент. Разбираю, как настроить, чтобы бот сам писал или перезванивал по пропущенным и доводил человека до записи.',
    tags: ['пропущенные звонки', 'бот', 'удержание', 'автоответчик'],
    toc: [{ id: 'problema', text: 'Сколько стоит пропущенный звонок' }, { id: 'kak-rabotaet', text: 'Как работает автоответчик-бот' }, { id: 'scenarii', text: 'Сценарии дожима' }, { id: 'vnedrenie', text: 'Как внедрить' }, ...FAQ_VYV],
    relatedSlugs: ['golosovoy-ii-assistent-rossiyskiy-stek-2026', 'onlayn-zapis-bez-sayta-v-messendzhere-2026', 'chat-bot-faq-podderzhka-telegram-max-2026', 'crm-tablica-klientov-iz-excel-2026'] }),

  E({ slug: 'chat-bot-zapisi-v-barbershop-2026', category: 'industries', heroIcon: 'ph-fill ph-scissors', ctaInternal: BOTS,
    title: 'Чат-бот записи в барбершоп: слоты мастеров, напоминания, возврат',
    metaTitle: 'Чат-бот записи в барбершоп',
    metaDescription: 'Чат-бот записи в барбершоп: выбор мастера и времени, напоминания, чтобы не было пустых кресел и неявок, автовозврат клиента на стрижку. Разбираю на практике.',
    excerpt: 'Пустые кресла и неявки бьют по выручке барбершопа. Разбираю, как чат-бот берёт запись на конкретного мастера, напоминает клиенту и сам возвращает его на следующую стрижку.',
    tags: ['барбершоп', 'чат-бот', 'запись', 'напоминания'],
    toc: [{ id: 'problema', text: 'Неявки и пустые кресла' }, { id: 'kak-rabotaet', text: 'Как бот ведёт запись' }, { id: 'vozvrat', text: 'Возврат на следующую стрижку' }, { id: 'vnedrenie', text: 'Как внедрить' }, ...FAQ_VYV],
    relatedSlugs: ['it-dlya-barbershopa-2026', 'onlayn-zapis-bez-sayta-v-messendzhere-2026', 'avtomatizaciya-salonov-krasoty-yclients', 'avtootvetchik-na-propushchennye-zvonki-2026'] }),

  E({ slug: 'kak-prinimat-oplatu-na-sayte-ekvayring-2026', category: 'development', heroIcon: 'ph-fill ph-credit-card', ctaInternal: WEB,
    title: 'Как принимать оплату на сайте: эквайринг простыми словами',
    metaTitle: 'Как принимать оплату на сайте: эквайринг',
    metaDescription: 'Как принимать оплату на сайте простыми словами: эквайринг, СБП и платёжные ссылки, что подключить малому бизнесу и как это встроить. Разбираю на практике.',
    excerpt: 'Хочешь принимать оплату на сайте, а термины пугают: эквайринг, СБП, ссылки. Разбираю простыми словами, что выбрать малому бизнесу и как встроить оплату без боли.',
    tags: ['эквайринг', 'оплата на сайте', 'СБП', 'платежи'],
    toc: [{ id: 'varianty', text: 'Способы принимать оплату' }, { id: 'ekvayring-sbp', text: 'Эквайринг vs СБП' }, { id: 'chto-vybrat', text: 'Что выбрать малому бизнесу' }, { id: 'kak-vstroit', text: 'Как встроить в сайт' }, ...FAQ_VYV],
    relatedSlugs: ['ekvayring-ili-sbp-2026', 'priem-platezhey-sbp-sayt', 'skolko-stoit-sayt-bot-pod-klyuch-2026', 'skvoznaya-analitika-malyy-biznes-2026'] }),
];
