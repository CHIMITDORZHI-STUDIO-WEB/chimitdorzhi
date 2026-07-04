// Батч lead-gen 2: 20 конверсионных статей под заявки — ИИ-агенты, автоматизация функций, миграции, buyer-education, гео.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-04';

const SVC = {
  title: 'Что я делаю под ключ',
  services: [
    { icon: 'ph-fill ph-robot', label: 'ИИ-агенты и боты в Telegram/MAX' },
    { icon: 'ph-fill ph-code', label: 'Сайты и веб-приложения' },
    { icon: 'ph-fill ph-flow-arrow', label: 'Автоматизация и интеграции с CRM' },
    { icon: 'ph-fill ph-chart-line-up', label: 'Аналитика и дашборды' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Внедрение и поддержка' },
  ],
  ctaLabel: 'Обсудить задачу',
  ctaUrl: 'https://t.me/chimitdorzhi',
};

const CTA_BOT = { url: 'https://chimitdorzhi.tech/predlozheniya/bot-dlya-biznesa/', label: 'Внедрить ИИ-агента' };
const CTA_GEN = { url: 'https://chimitdorzhi.tech/predlozheniya/', label: 'Обсудить задачу' };
const CTA_WEB = { url: 'https://chimitdorzhi.tech/services/web-development/', label: 'Обсудить проект' };

// Универсальный TOC для статей «решение под функцию»
const T_SOLUTION = (a, b) => ([
  { id: 'chto-eto', text: 'Что это и какую задачу решает' },
  { id: 'kak-rabotaet', text: 'Как это работает' },
  { id: 'chto-daet', text: a || 'Что это даёт бизнесу' },
  { id: 'skolko-stoit', text: b || 'Сколько стоит и сроки' },
  { id: 'faq', text: 'FAQ' },
  { id: 'vyvody', text: 'Коротко о главном' },
]);
const toc = (pairs) => pairs.map(([id, text]) => ({ id, text }));

const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D, readingMinutes: 6,
  servicesOffer: SVC,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  // ── ИИ-агенты под функцию ──────────────────────────────────────────
  E({ slug: 'ii-agent-zayavki-s-sayta-crm-2027', heroIcon: 'ph-fill ph-robot', category: 'ai-dev', ctaInternal: CTA_BOT,
    toc: T_SOLUTION('Что это даёт бизнесу', 'Сколько стоит и сроки'),
    title: 'ИИ-агент для заявок с сайта: отвечает 24/7 и заносит лида в CRM',
    metaTitle: 'ИИ-агент для заявок с сайта 24/7 с занесением в CRM',
    metaDescription: 'Как ИИ-агент обрабатывает заявки с сайта круглосуточно: отвечает на вопросы клиента, квалифицирует лида и сразу заносит его в CRM. Разбираю, как это работает, что даёт бизнесу, сколько стоит и в какие сроки внедряется.',
    excerpt: 'Заявка приходит ночью — и остывает до утра, пока менеджер спит. ИИ-агент отвечает клиенту сразу, уточняет детали и заносит контакт в CRM без участия человека. Разбираю, как это устроено и сколько стоит.',
    tags: ['ИИ-агент', 'автоматизация', 'CRM', 'лидогенерация'],
    relatedSlugs: ['ii-otvety-na-otzyvy-wb-ozon-2027', 'bot-avtootvetchik-nerabochee-vremya-2027', 'ai-chatbot-prodazhi-2027'] }),

  E({ slug: 'ii-otvety-na-otzyvy-wb-ozon-2027', heroIcon: 'ph-fill ph-chat-circle-dots', category: 'ai-dev', ctaInternal: CTA_BOT,
    toc: T_SOLUTION('Что это даёт селлеру', 'Сколько стоит и сроки'),
    title: 'ИИ отвечает на отзывы и вопросы на Wildberries и Ozon за селлера',
    metaTitle: 'ИИ-ответы на отзывы и вопросы на WB и Ozon за селлера',
    metaDescription: 'Как ИИ-агент отвечает на отзывы и вопросы покупателей на Wildberries и Ozon вместо селлера: держит тон бренда, отрабатывает негатив и экономит часы в день. Разбираю принцип работы, выгоду, стоимость и сроки внедрения.',
    excerpt: 'Сотни отзывов и вопросов на WB и Ozon съедают часы, а без ответов падает рейтинг карточки. ИИ-агент отвечает за вас в тоне бренда и отрабатывает негатив. Разбираю, как это устроено.',
    tags: ['ИИ-агент', 'маркетплейсы', 'Wildberries', 'Ozon'],
    relatedSlugs: ['ii-agent-zayavki-s-sayta-crm-2027', 'ai-dlya-sellerov-wb-ozon-2026', 'ii-dlya-internet-magazina-kartochki-tovarov-2026'] }),

  E({ slug: 'ii-razbor-vhodyashchey-pochty-dokumentov-2027', heroIcon: 'ph-fill ph-envelope-open', category: 'ai-dev', ctaInternal: CTA_BOT,
    toc: T_SOLUTION('Что это даёт бизнесу', 'Сколько стоит и сроки'),
    title: 'ИИ разбирает входящую почту и документы: сортирует и извлекает данные',
    metaTitle: 'ИИ разбирает входящую почту и документы за сотрудника',
    metaDescription: 'Как ИИ-агент разбирает входящую почту и документы: сортирует письма по темам, извлекает данные из счетов и заявок и передаёт их в нужную систему. Разбираю, как это работает, что экономит и сколько стоит внедрение.',
    excerpt: 'Сотрудник вручную разбирает входящие письма, вытаскивает из счетов реквизиты и раскладывает по папкам. ИИ-агент делает это за секунды. Разбираю, как автоматизировать разбор почты и документов.',
    tags: ['ИИ-агент', 'автоматизация', 'документооборот'],
    relatedSlugs: ['ii-agent-zayavki-s-sayta-crm-2027', 'avtomatizaciya-schetov-aktov-2027', 'avtootchety-rukovoditelyu-telegram-2027'] }),

  E({ slug: 'bot-zapis-v-2-klika-2027', heroIcon: 'ph-fill ph-calendar-check', category: 'ai-dev', ctaInternal: CTA_BOT,
    toc: T_SOLUTION('Что это даёт бизнесу', 'Сколько стоит и сроки'),
    title: 'Бот записи в 2 клика вместо звонка администратору',
    metaTitle: 'Бот записи клиентов в 2 клика вместо звонка админу',
    metaDescription: 'Как бот записи в мессенджере заменяет звонок администратору: клиент выбирает услугу, мастера и время в пару касаний, а запись сразу падает в расписание. Разбираю, как это работает, что даёт бизнесу, стоимость и сроки.',
    excerpt: 'Половина клиентов не любит звонить, чтобы записаться, — и уходит к тем, у кого проще. Бот даёт запись в два касания в удобное время суток. Разбираю, как это устроено и кому подходит.',
    tags: ['бот', 'онлайн-запись', 'автоматизация', 'услуги'],
    relatedSlugs: ['svoya-onlayn-zapis-zamena-calendly-2027', 'bot-zapis-klientov-ulan-ude-2027', 'cal-com-onlayn-zapis-2026'] }),

  // ── Точечные боли → готовый заказ ─────────────────────────────────
  E({ slug: 'avtootchety-rukovoditelyu-telegram-2027', heroIcon: 'ph-fill ph-chart-bar', category: 'development', ctaInternal: CTA_GEN,
    toc: T_SOLUTION('Что это даёт руководителю', 'Сколько стоит и сроки'),
    title: 'Автоотчёты руководителю в Telegram: выручка, заявки и задачи каждое утро',
    metaTitle: 'Автоотчёты руководителю в Telegram: выручка и заявки',
    metaDescription: 'Как настроить автоотчёты руководителю в Telegram: каждое утро бот присылает выручку, число заявок, конверсию и статус задач без ручного сбора данных. Разбираю, как это работает, что даёт и сколько стоит внедрение.',
    excerpt: 'Чтобы понять, как идут дела, руководитель дёргает менеджеров и сводит цифры вручную. Бот присылает готовый отчёт каждое утро сам. Разбираю, как автоматизировать управленческую отчётность.',
    tags: ['автоматизация', 'аналитика', 'Telegram', 'дашборд'],
    relatedSlugs: ['ii-razbor-vhodyashchey-pochty-dokumentov-2027', 'edinoe-okno-zayavok-omnikanalnost-2027', 'crm-bitrix24-irkutsk-2026'] }),

  E({ slug: 'priem-zayavok-s-avito-v-crm-2027', heroIcon: 'ph-fill ph-arrows-merge', category: 'development', ctaInternal: CTA_GEN,
    toc: T_SOLUTION('Что это даёт бизнесу', 'Сколько стоит и сроки'),
    title: 'Приём заявок с Авито прямо в CRM без ручного копирования',
    metaTitle: 'Приём заявок с Авито в CRM без ручного копирования',
    metaDescription: 'Как автоматически передавать заявки и сообщения с Авито в CRM: каждый новый лид сразу попадает в воронку с источником и контактом, без копирования вручную. Разбираю принцип работы, выгоду, стоимость и сроки.',
    excerpt: 'Заявки с Авито теряются в переписке, а менеджер вручную переносит контакты в таблицу. Интеграция сразу заносит каждый лид в CRM с источником. Разбираю, как это настроить.',
    tags: ['интеграция', 'Авито', 'CRM', 'автоматизация'],
    relatedSlugs: ['edinoe-okno-zayavok-omnikanalnost-2027', 'ii-agent-zayavki-s-sayta-crm-2027', 'crm-bitrix24-irkutsk-2026'] }),

  E({ slug: 'svoy-vidzhet-onlayn-chata-2027', heroIcon: 'ph-fill ph-chat-teardrop-text', category: 'development', ctaInternal: CTA_WEB,
    toc: T_SOLUTION('Что это даёт бизнесу', 'Сколько стоит и сроки'),
    title: 'Свой виджет онлайн-чата на сайт вместо ушедших зарубежных сервисов',
    metaTitle: 'Свой виджет онлайн-чата на сайт вместо зарубежных',
    metaDescription: 'Как поставить свой виджет онлайн-чата на сайт вместо ушедших зарубежных сервисов: переписка в Telegram менеджера, история диалогов и никакой абонентки в валюте. Разбираю, как это работает, что даёт и сколько стоит.',
    excerpt: 'Зарубежные чат-виджеты ушли или берут оплату в валюте, а клиенту негде быстро задать вопрос на сайте. Свой виджет решает это и уводит переписку в удобный мессенджер. Разбираю, как это устроено.',
    tags: ['разработка', 'онлайн-чат', 'сайт', 'импортозамещение'],
    relatedSlugs: ['uyti-s-tildy-wix-na-svoy-sayt-2027', 'ii-agent-zayavki-s-sayta-crm-2027', 'medlennyy-sayt-ubivaet-prodazhi-2026'] }),

  E({ slug: 'bot-kviz-raschet-smety-2027', heroIcon: 'ph-fill ph-calculator', category: 'development', ctaInternal: CTA_BOT,
    toc: T_SOLUTION('Что это даёт бизнесу', 'Сколько стоит и сроки'),
    title: 'Бот-квиз для расчёта сметы прямо в переписке',
    metaTitle: 'Бот-квиз для расчёта сметы и стоимости в переписке',
    metaDescription: 'Как бот-квиз считает смету прямо в переписке: клиент отвечает на несколько вопросов и получает вилку цены, а вы — тёплый лид с параметрами заказа. Разбираю, как это работает, что даёт бизнесу и сколько стоит.',
    excerpt: 'Клиент спрашивает «сколько стоит?», а точная цена зависит от десятка деталей — и диалог вязнет. Бот-квиз собирает параметры и выдаёт вилку сметы сам. Разбираю, как это устроено.',
    tags: ['бот', 'квиз', 'лидогенерация', 'автоматизация'],
    relatedSlugs: ['skolko-stoit-avtomatizaciya-okupaemost-2027', 'ii-agent-zayavki-s-sayta-crm-2027', 'avtovoronki-v-messendzherah-2027'] }),

  E({ slug: 'avtomatizaciya-schetov-aktov-2027', heroIcon: 'ph-fill ph-receipt', category: 'development', ctaInternal: CTA_GEN,
    toc: T_SOLUTION('Что это даёт бизнесу', 'Сколько стоит и сроки'),
    title: 'Автоматизация счетов и актов: от заявки до закрывающих документов',
    metaTitle: 'Автоматизация счетов и актов: от заявки до документов',
    metaDescription: 'Как автоматизировать выставление счетов и актов: система сама формирует документы из заявки, подставляет реквизиты и отправляет клиенту без ручного заполнения. Разбираю, как это работает, что экономит и сколько стоит.',
    excerpt: 'Бухгалтер или менеджер вручную набивает счета и акты, ошибается в реквизитах и теряет время. Система формирует документы из заявки сама. Разбираю, как автоматизировать документооборот.',
    tags: ['автоматизация', 'документооборот', 'счета', 'бизнес-процессы'],
    relatedSlugs: ['ii-razbor-vhodyashchey-pochty-dokumentov-2027', 'skolko-stoit-avtomatizaciya-okupaemost-2027', 'kak-schitat-okupaemost-avtomatizacii-2026'] }),

  E({ slug: 'bot-avtootvetchik-nerabochee-vremya-2027', heroIcon: 'ph-fill ph-moon', category: 'development', ctaInternal: CTA_BOT,
    toc: T_SOLUTION('Что это даёт бизнесу', 'Сколько стоит и сроки'),
    title: 'Бот-автоответчик на нерабочее время, который дожимает лида до утра',
    metaTitle: 'Бот-автоответчик на нерабочее время: не теряйте лиды',
    metaDescription: 'Как бот-автоответчик держит лида в нерабочее время: отвечает мгновенно, собирает контакт и запрос, а утром менеджер видит тёплую заявку. Разбираю, как это работает, сколько заявок спасает и сколько стоит.',
    excerpt: 'Клиент пишет вечером или в выходной, не получает ответа за минуту — и уходит к конкуренту. Бот отвечает сразу и удерживает лида до утра. Разбираю, как это устроено.',
    tags: ['бот', 'лидогенерация', 'автоматизация', 'продажи'],
    relatedSlugs: ['ii-agent-zayavki-s-sayta-crm-2027', 'edinoe-okno-zayavok-omnikanalnost-2027', 'golosovoy-ii-robot-obzvon-zayavki-2026'] }),

  E({ slug: 'lichnyy-kabinet-klienta-okupaemost-2027', heroIcon: 'ph-fill ph-user-circle-gear', category: 'development', ctaInternal: CTA_WEB,
    toc: toc([['chto-eto', 'Что такое личный кабинет клиента'], ['komu-nuzhen', 'Кому он действительно нужен'], ['kogda-okupaetsya', 'Когда он окупается'], ['kogda-ne-nuzhen', 'Когда это выброшенные деньги'], ['skolko-stoit', 'Сколько стоит и сроки'], ['faq', 'FAQ'], ['vyvody', 'Коротко о главном']]),
    title: 'Личный кабинет клиента: когда окупается, а когда выброшенные деньги',
    metaTitle: 'Личный кабинет клиента: когда окупается, а когда нет',
    metaDescription: 'Разбираю, когда личный кабинет клиента реально окупается, а когда это выброшенные деньги: какому бизнесу он нужен, какие задачи решает, сколько стоит разработка и как понять, что он вам не нужен. Честный разбор без навязывания.',
    excerpt: 'Личный кабинет клиента звучит солидно, но часто это дорогая игрушка, которой никто не пользуется. Разбираю честно: кому он приносит деньги, а кому — только счёт за разработку.',
    tags: ['разработка', 'веб-приложение', 'личный кабинет', 'окупаемость'],
    relatedSlugs: ['skolko-stoit-avtomatizaciya-okupaemost-2027', 'kak-sostavit-tz-na-sayt-bot-2027', 'kak-schitat-okupaemost-avtomatizacii-2026'] }),

  // ── Миграция / замена ─────────────────────────────────────────────
  E({ slug: 'uyti-s-tildy-wix-na-svoy-sayt-2027', heroIcon: 'ph-fill ph-arrow-square-out', category: 'development', ctaInternal: CTA_WEB,
    toc: toc([['chto-eto', 'О чём речь'], ['ogranicheniya', 'Ограничения конструкторов'], ['kogda-pora', 'Когда пора уходить'], ['kak-migrirovat', 'Как пройти миграцию без потерь'], ['skolko-stoit', 'Сколько стоит и сроки'], ['faq', 'FAQ'], ['vyvody', 'Коротко о главном']]),
    title: 'Уйти с Тильды и Wix на свой сайт: когда пора и что это даёт',
    metaTitle: 'Уйти с Тильды и Wix на свой сайт: когда пора и зачем',
    metaDescription: 'Когда пора уходить с Тильды и Wix на свой сайт: где конструкторы упираются в потолок, чем грозит зависимость от платформы и как пройти миграцию без потери позиций и трафика. Разбираю сроки и стоимость переезда.',
    excerpt: 'Тильда и Wix отлично стартуют, но в какой-то момент абонентка растёт, а нужных функций нет. Разбираю, когда пора переезжать на свой сайт и как сделать это без потери трафика.',
    tags: ['разработка', 'миграция', 'сайт', 'Тильда'],
    relatedSlugs: ['svoy-vidzhet-onlayn-chata-2027', 'pochemu-sayt-ne-prinosit-zayavok-audit-2027', 'medlennyy-sayt-ubivaet-prodazhi-2026'] }),

  E({ slug: 'edinoe-okno-zayavok-omnikanalnost-2027', heroIcon: 'ph-fill ph-squares-four', category: 'development', ctaInternal: CTA_GEN,
    toc: T_SOLUTION('Что это даёт бизнесу', 'Сколько стоит и сроки'),
    title: 'Единое окно заявок: сайт, телефон, Директ и мессенджеры в одном месте',
    metaTitle: 'Единое окно заявок: сайт, телефон и мессенджеры',
    metaDescription: 'Как собрать заявки с сайта, телефона, Яндекс.Директа и мессенджеров в единое окно: менеджер отвечает из одного интерфейса, ни один лид не теряется, видно источник каждого. Разбираю, как это работает и сколько стоит.',
    excerpt: 'Заявки летят из сайта, телефонии, Директа и трёх мессенджеров — и часть теряется между вкладками. Единое окно сводит их в один экран. Разбираю, как это устроено.',
    tags: ['автоматизация', 'омниканальность', 'CRM', 'продажи'],
    relatedSlugs: ['priem-zayavok-s-avito-v-crm-2027', 'bot-avtootvetchik-nerabochee-vremya-2027', 'avtootchety-rukovoditelyu-telegram-2027'] }),

  E({ slug: 'svoya-onlayn-zapis-zamena-calendly-2027', heroIcon: 'ph-fill ph-calendar-plus', category: 'development', ctaInternal: CTA_WEB,
    toc: T_SOLUTION('Что это даёт бизнесу', 'Сколько стоит и сроки'),
    title: 'Своя онлайн-запись вместо ушедшего Calendly под ваш процесс',
    metaTitle: 'Своя онлайн-запись вместо Calendly под ваш процесс',
    metaDescription: 'Как сделать свою онлайн-запись вместо ушедшего Calendly: запись под ваши услуги и мастеров, напоминания клиенту, синхронизация с календарём и никакой оплаты в валюте. Разбираю, как это работает и сколько стоит.',
    excerpt: 'Calendly и аналоги ушли или берут в валюте, а клиенту нужно записываться самому. Своя онлайн-запись работает под ваш процесс и без абонентки в долларах. Разбираю, как это устроено.',
    tags: ['разработка', 'онлайн-запись', 'импортозамещение', 'услуги'],
    relatedSlugs: ['bot-zapis-v-2-klika-2027', 'cal-com-onlayn-zapis-2026', 'bot-zapis-klientov-ulan-ude-2027'] }),

  // ── Buyer-education ───────────────────────────────────────────────
  E({ slug: 'pochemu-sayt-ne-prinosit-zayavok-audit-2027', heroIcon: 'ph-fill ph-magnifying-glass', category: 'development', ctaInternal: CTA_WEB,
    toc: toc([['pochemu-tak', 'Почему сайт молчит'], ['tochki-audita', '12 точек, которые убивают заявки'], ['kak-proverit', 'Как проверить сайт самостоятельно'], ['chto-ispravit', 'Что исправить в первую очередь'], ['faq', 'FAQ'], ['vyvody', 'Коротко о главном']]),
    title: 'Почему ваш сайт не приносит заявок: аудит из 12 точек',
    metaTitle: 'Почему сайт не приносит заявок: аудит из 12 точек',
    metaDescription: 'Почему сайт есть, а заявок нет: разбираю 12 частых причин — от медленной загрузки и неочевидной формы до отсутствия оффера и мобильной вёрстки. Чек-лист, как проверить сайт самому и что исправить в первую очередь.',
    excerpt: 'Сайт есть, реклама идёт, а заявок нет — деньги на трафик уходят впустую. Разбираю 12 точек, которые чаще всего убивают конверсию, и как проверить их самому.',
    tags: ['сайт', 'конверсия', 'аудит', 'заявки'],
    relatedSlugs: ['medlennyy-sayt-ubivaet-prodazhi-2026', 'uyti-s-tildy-wix-na-svoy-sayt-2027', 'kak-sostavit-tz-na-sayt-bot-2027'] }),

  E({ slug: 'kak-sostavit-tz-na-sayt-bot-2027', heroIcon: 'ph-fill ph-clipboard-text', category: 'development', ctaInternal: CTA_GEN,
    toc: toc([['zachem-tz', 'Зачем нужно ТЗ'], ['chto-vklyuchit', 'Что включить в ТЗ'], ['chastye-oshibki', 'Частые ошибки в ТЗ'], ['shablon', 'Рабочая структура ТЗ'], ['faq', 'FAQ'], ['vyvody', 'Коротко о главном']]),
    title: 'Как составить техзадание на сайт или бот, чтобы не переплатить',
    metaTitle: 'Как составить ТЗ на сайт или бот и не переплатить',
    metaDescription: 'Как составить техзадание на сайт или бот, чтобы не переплатить и получить нужный результат: что обязательно включить, какие ошибки в ТЗ приводят к переделкам и дорогим правкам, рабочая структура и чек-лист.',
    excerpt: 'Без внятного ТЗ подрядчик закладывает риски в цену, а вы получаете не то, что хотели. Разбираю, как составить техзадание на сайт или бот, чтобы не переплатить и не переделывать.',
    tags: ['разработка', 'техзадание', 'заказ сайта', 'buyer-education'],
    relatedSlugs: ['pochemu-sayt-ne-prinosit-zayavok-audit-2027', 'skolko-stoit-avtomatizaciya-okupaemost-2027', '10-oshibok-pri-zakaze-sayta-bota-2026'] }),

  E({ slug: 'skolko-stoit-avtomatizaciya-okupaemost-2027', heroIcon: 'ph-fill ph-coins', category: 'development', ctaInternal: CTA_GEN,
    toc: toc([['ot-chego-zavisit', 'От чего зависит цена'], ['primer-rascheta', 'Пример расчёта окупаемости'], ['tipy-i-vilki', 'Типы задач и вилки цен'], ['kak-ne-pereplatit', 'Как не переплатить'], ['faq', 'FAQ'], ['vyvody', 'Коротко о главном']]),
    title: 'Сколько стоит автоматизация бизнеса и когда она окупается',
    metaTitle: 'Сколько стоит автоматизация и когда она окупается',
    metaDescription: 'Сколько стоит автоматизация бизнеса и когда она окупается: от чего зависит цена, пример расчёта окупаемости на сэкономленных часах, вилки цен по типам задач и как не переплатить за ненужное. Разбор без ценников в рублях.',
    excerpt: 'Автоматизация может окупиться за месяц, а может стать дорогой игрушкой. Разбираю, от чего зависит цена, как посчитать окупаемость на сэкономленных часах и как не переплатить.',
    tags: ['автоматизация', 'окупаемость', 'ROI', 'buyer-education'],
    relatedSlugs: ['kak-schitat-okupaemost-avtomatizacii-2026', 'avtomatizaciya-schetov-aktov-2027', 'kak-sostavit-tz-na-sayt-bot-2027'] }),

  // ── Гео-коммерция ─────────────────────────────────────────────────
  E({ slug: 'zakazat-ii-agenta-chita-ulan-ude-2027', heroIcon: 'ph-fill ph-map-pin', category: 'development', ctaInternal: CTA_BOT,
    toc: toc([['situaciya', 'Что автоматизируют в регионе'], ['primery-zadach', 'Примеры задач для ИИ-агента'], ['skolko-stoit', 'Сколько стоит и сроки'], ['kak-nachat', 'Как начать'], ['faq', 'FAQ'], ['vyvody', 'Коротко о главном']]),
    title: 'Заказать ИИ-агента в Чите и Улан-Удэ: что автоматизируют местные бизнесы',
    metaTitle: 'Заказать ИИ-агента в Чите и Улан-Удэ: задачи и цены',
    metaDescription: 'Где заказать ИИ-агента в Чите и Улан-Удэ и что автоматизируют местные бизнесы: ответы на заявки, запись клиентов, обработка отзывов и рутины. Разбираю типовые задачи, стоимость и как начать внедрение в регионе.',
    excerpt: 'ИИ-агенты — это не только для Москвы: салоны, магазины и сервисы в Чите и Улан-Удэ уже автоматизируют заявки и запись. Разбираю, какие задачи решают местные бизнесы и как начать.',
    tags: ['ИИ-агент', 'Чита', 'Улан-Удэ', 'Забайкалье'],
    relatedSlugs: ['ii-agent-zayavki-s-sayta-crm-2027', 'vnedrenie-crm-zabaykalye-2027', 'kak-vybrat-it-podryadchika-chita-2026'] }),

  E({ slug: 'vnedrenie-crm-zabaykalye-2027', heroIcon: 'ph-fill ph-kanban', category: 'development', ctaInternal: CTA_GEN,
    toc: toc([['zachem-crm', 'Зачем малому бизнесу CRM'], ['s-chego-nachat', 'С чего начать'], ['kakuyu-vybrat', 'Какую CRM выбрать'], ['etapy', 'Этапы внедрения'], ['skolko-stoit', 'Сколько стоит и сроки'], ['faq', 'FAQ'], ['vyvody', 'Коротко о главном']]),
    title: 'Внедрение CRM в Забайкалье: с чего начать малому бизнесу',
    metaTitle: 'Внедрение CRM в Забайкалье: с чего начать бизнесу',
    metaDescription: 'Внедрение CRM в Забайкалье для малого бизнеса: зачем она нужна, с чего начать, какую систему выбрать под задачи и бюджет и какие этапы проходит внедрение. Разбор без навязывания дорогих решений, со сроками и стоимостью.',
    excerpt: 'CRM часто внедряют дорого и мимо задач, а потом ей никто не пользуется. Разбираю, с чего начать малому бизнесу в Забайкалье, какую систему выбрать и как пройти внедрение без лишних трат.',
    tags: ['CRM', 'Забайкалье', 'внедрение', 'малый бизнес'],
    relatedSlugs: ['zakazat-ii-agenta-chita-ulan-ude-2027', 'crm-bitrix24-irkutsk-2026', 'edinoe-okno-zayavok-omnikanalnost-2027'] }),

  E({ slug: 'bot-zapis-klientov-ulan-ude-2027', heroIcon: 'ph-fill ph-storefront', category: 'development', ctaInternal: CTA_BOT,
    toc: toc([['chto-eto', 'Что это и кому подходит'], ['dlya-kakih-biznesov', 'Для каких бизнесов'], ['kak-rabotaet', 'Как это работает'], ['skolko-stoit', 'Сколько стоит и сроки'], ['kak-nachat', 'Как начать'], ['faq', 'FAQ'], ['vyvody', 'Коротко о главном']]),
    title: 'Бот для записи клиентов в Улан-Удэ: салоны, клиники, автосервисы',
    metaTitle: 'Бот для записи клиентов в Улан-Удэ: салоны и клиники',
    metaDescription: 'Бот для записи клиентов в Улан-Удэ для салонов, клиник и автосервисов: клиент записывается в мессенджере в пару касаний, бот шлёт напоминания и снижает неявки. Разбираю, как это работает, кому подходит и сколько стоит.',
    excerpt: 'Администратор не всегда успевает ответить на звонок, и клиент уходит. Бот записи в Улан-Удэ принимает запись в мессенджере круглосуточно и напоминает о визите. Разбираю, кому это подходит.',
    tags: ['бот', 'онлайн-запись', 'Улан-Удэ', 'услуги'],
    relatedSlugs: ['bot-zapis-v-2-klika-2027', 'svoya-onlayn-zapis-zamena-calendly-2027', 'zakazat-ii-agenta-chita-ulan-ude-2027'] }),
];
