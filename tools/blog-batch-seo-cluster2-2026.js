// SEO-кластер 2: bottom-funnel (ТЗ, выбор стека), прикладной ИИ, безопасность, ниши-боты, аналитика.
// Углы заострены, чтобы не каннибализировать близкие существующие статьи (кросс-линки на них).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-01';
const S = 'https://chimitdorzhi.tech';

const SVC_AI = { title: 'Что я делаю с ИИ под ключ', services: [
  { icon: 'ph-fill ph-robot', label: 'ИИ-агенты и чат-боты' },
  { icon: 'ph-fill ph-brain', label: 'База знаний с ИИ-поиском (RAG)' },
  { icon: 'ph-fill ph-hard-drives', label: 'Локальные модели на своём сервере' },
  { icon: 'ph-fill ph-shield-check', label: 'Приватность и 152-ФЗ' },
]};
const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};
const SVC_SEC = { title: 'Что я делаю по безопасности', services: [
  { icon: 'ph-fill ph-shield-check', label: 'Аудит безопасности сайта и бота' },
  { icon: 'ph-fill ph-lock-key', label: 'Защита от атак и утечек' },
  { icon: 'ph-fill ph-scales', label: 'Соответствие 152-ФЗ' },
  { icon: 'ph-fill ph-hard-drives', label: 'Харденинг сервера' },
]};

const RAG = { url: `${S}/services/rag-systems/`, label: 'Внедрить базу знаний с ИИ (RAG)' };
const AGENTS = { url: `${S}/services/ai-agents/`, label: 'Внедрить ИИ-агента под ключ' };
const VOICE = { url: `${S}/services/voice-ai/`, label: 'Заказать голосового ИИ-ассистента' };
const AUTO = { url: `${S}/services/business-automation/`, label: 'Автоматизировать процесс под ключ' };
const SEC = { url: `${S}/services/cybersecurity/`, label: 'Заказать проверку безопасности' };
const AUDIT = { url: `${S}/services/it-audit/`, label: 'Заказать аудит сайта' };
const BOTS = { url: `${S}/services/telegram-bots/`, label: 'Заказать бота под ключ' };
const WEB = { url: `${S}/services/web-development/`, label: 'Обсудить проект по вашему ТЗ' };
const ANALYTICS = { url: `${S}/services/ai-analytics/`, label: 'Настроить сквозную аналитику' };
const MIGRATE = { url: `${S}/services/russian-stack-migration/`, label: 'Перейти на российский ИИ-стек' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4 }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'kak-sostavit-tz-na-sayt-bot-2026', category: 'expert', heroIcon: 'ph-fill ph-clipboard-text', ctaInternal: WEB, servicesOffer: SVC_BIZ,
    title: 'Как составить ТЗ на сайт или бота: чтобы получить то, что нужно',
    metaTitle: 'Как составить ТЗ на сайт или бота в 2026',
    metaDescription: 'Как составить понятное ТЗ на сайт или бота: что обязательно указать, частые ошибки и шаблон, чтобы подрядчик сделал то, что нужно, без переделок.',
    excerpt: 'Плохое ТЗ = переделки, срыв сроков и «мы вас не так поняли». Разбираю, что обязательно указать в техзадании на сайт или бота, каких ошибок избегать и как договориться на берегу.',
    tags: ['ТЗ', 'техзадание', 'заказ сайта', 'заказ бота'],
    toc: [{ id: 'zachem', text: 'Зачем вообще ТЗ' }, { id: 'chto-vklyuchit', text: 'Что обязательно включить' }, { id: 'oshibki', text: 'Частые ошибки в ТЗ' }, { id: 'shablon', text: 'Простой шаблон' }, ...FAQ_VYV],
    relatedSlugs: ['chto-znachit-pod-klyuch-2026', 'skolko-stoit-sayt-bot-pod-klyuch-2026', '10-oshibok-pri-zakaze-sayta-bota-2026', 'skolko-stoit-vnedrit-ii-2026'] }),

  E({ slug: 'yandexgpt-vs-gigachat-dlya-biznesa-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-scales', ctaInternal: MIGRATE, servicesOffer: SVC_AI,
    title: 'YandexGPT vs GigaChat (ГигаЧат от Сбера): что выбрать бизнесу в 2026',
    metaTitle: 'ГигаЧат или YandexGPT: что выбрать бизнесу в 2026',
    metaDescription: 'ГигаЧат (GigaChat от Сбера) или YandexGPT: сравнение двух российских ИИ для бизнеса по возможностям, цене API, приватности и 152-ФЗ — как выбрать под задачу.',
    excerpt: 'Два главных российских ИИ — YandexGPT и GigaChat. Сравниваю их для бизнес-задач: что лучше в текстах, в вызове функций, по цене и приватности, и как выбрать под конкретную задачу.',
    tags: ['YandexGPT', 'GigaChat', 'российский ИИ', 'сравнение'],
    toc: [{ id: 'zachem-rossiyskiy', text: 'Почему российский стек' }, { id: 'sravnenie', text: 'Сравнение по задачам' }, { id: 'cena-privatnost', text: 'Цена и приватность' }, { id: 'chto-vybrat', text: 'Что выбрать под задачу' }, ...FAQ_VYV],
    relatedSlugs: ['gigachat-vs-yandexgpt-vs-chatgpt-2026', 'rossiyskiy-ai-stack-2026', 'ai-bot-v-max-gigachat-yandexgpt-2026', 'ai-agent-vyzov-instrumentov-gigachat-2026'] }),

  E({ slug: 'rag-ili-doobuchenie-modeli-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-git-branch', ctaInternal: RAG, servicesOffer: SVC_AI,
    title: 'RAG или дообучение модели: что выбрать под задачу',
    metaTitle: 'RAG или дообучение модели: что выбрать',
    metaDescription: 'RAG или fine-tuning: чем отличаются два способа научить ИИ вашим данным, что дешевле и точнее и как выбрать под свою задачу. Разбираю на практике.',
    excerpt: 'Чтобы ИИ знал ваши данные, есть два пути: RAG (поиск по документам) и дообучение модели. Разбираю, чем они отличаются, что дешевле и точнее, и когда какой выбрать.',
    tags: ['RAG', 'дообучение', 'fine-tuning', 'ИИ'],
    toc: [{ id: 'dve-dorogi', text: 'Две дороги: RAG и дообучение' }, { id: 'rag', text: 'Когда RAG' }, { id: 'doobuchenie', text: 'Когда дообучение' }, { id: 'chto-vybrat', text: 'Как выбрать' }, ...FAQ_VYV],
    relatedSlugs: ['rag-na-svoih-dokumentah-lokalno-2026', 'kak-sozdat-ai-agenta-2026', 'kakoy-lokalnyy-llm-vybrat-2026', 'rossiyskiy-ai-stack-2026'] }),

  E({ slug: 'ii-analiz-dogovorov-schetov-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-file-magnifying-glass', ctaInternal: AUTO, servicesOffer: SVC_AI,
    title: 'ИИ для документооборота: извлечение данных из счетов, актов и договоров',
    metaTitle: 'ИИ для счетов, актов и договоров: извлечение данных',
    metaDescription: 'Как ИИ вытаскивает данные из счетов, актов и договоров, сверяет реквизиты и находит риски — экономит часы ручной работы. Разбираю на практике.',
    excerpt: 'Ручная разноска счетов и сверка договоров съедает часы. Разбираю, как ИИ извлекает данные из документов, сверяет реквизиты и подсвечивает риски — и где проходит граница доверия.',
    tags: ['ИИ', 'документооборот', 'счета', 'договоры'],
    toc: [{ id: 'problema', text: 'Ручная работа с документами' }, { id: 'chto-umeet', text: 'Что умеет ИИ' }, { id: 'kak-vnedrit', text: 'Как внедрить' }, { id: 'privatnost', text: 'Приватность и проверка' }, ...FAQ_VYV],
    relatedSlugs: ['rag-na-svoih-dokumentah-lokalno-2026', 'ai-dlya-yurista-dokumenty-2026', 'ved-checker-proverka-tnved-keys-2026', 'ii-transkribaciya-sozvonov-lokalno-2026'] }),

  E({ slug: 'ii-transkribaciya-sozvonov-lokalno-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-microphone', ctaInternal: RAG, servicesOffer: SVC_AI,
    title: 'ИИ-протокол созвонов: расшифровка встреч, задачи и решения — локально',
    metaTitle: 'ИИ-протокол созвонов: расшифровка встреч локально',
    metaDescription: 'Как ИИ сам расшифровывает созвоны и собирает протокол встречи — тезисы, решения, задачи — локально, без утечки записей в чужое облако. Разбираю на практике.',
    excerpt: 'Созвон закончился — и половина договорённостей забыта. Разбираю, как ИИ сам расшифровывает встречу и собирает протокол (тезисы, решения, задачи) локально, без облака.',
    tags: ['транскрибация', 'протокол встречи', 'ИИ', 'приватность'],
    toc: [{ id: 'problema', text: 'Договорённости теряются' }, { id: 'chto-umeet', text: 'Что даёт ИИ-протокол' }, { id: 'lokalno', text: 'Почему локально' }, { id: 'kak-vnedrit', text: 'Как внедрить' }, ...FAQ_VYV],
    relatedSlugs: ['whisperx-transkribaciya-rechi-2026', 'ocr-transkribaciya-servis-keys-2026', 'golosovoy-ii-assistent-rossiyskiy-stek-2026', 'lokalnyy-llm-na-noutbuke-2026'] }),

  E({ slug: 'golosovoy-ii-assistent-rossiyskiy-stek-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-microphone-stage', ctaInternal: VOICE, servicesOffer: SVC_AI,
    title: 'Голосовой ИИ-ассистент на российском стеке: как это работает',
    metaTitle: 'Голосовой ИИ-ассистент на российском стеке',
    metaDescription: 'Голосовой ИИ-ассистент для бизнеса на российском стеке: принимает звонки, отвечает голосом, ведёт запись — как устроен и что учесть по 152-ФЗ.',
    excerpt: 'Голосовой ассистент, который принимает звонки, отвечает голосом и записывает клиентов, — уже не фантастика. Разбираю, как собрать его на российском стеке и что учесть.',
    tags: ['голосовой ассистент', 'ИИ', 'российский стек', 'звонки'],
    toc: [{ id: 'zachem', text: 'Зачем бизнесу голосовой ИИ' }, { id: 'kak-rabotaet', text: 'Как это работает' }, { id: 'scenarii', text: 'Сценарии применения' }, { id: 'stek', text: 'Российский стек и 152-ФЗ' }, ...FAQ_VYV],
    relatedSlugs: ['ai-agent-vyzov-instrumentov-gigachat-2026', 'ii-transkribaciya-sozvonov-lokalno-2026', 'rossiyskiy-ai-stack-2026', 'chat-bot-faq-podderzhka-telegram-max-2026'] }),

  E({ slug: 'ii-moderaciya-kontenta-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-shield-check', ctaInternal: AGENTS, servicesOffer: SVC_AI,
    title: 'ИИ-модерация контента: как фильтровать заявки, комментарии и отзывы',
    metaTitle: 'ИИ-модерация контента: заявки, комментарии, отзывы',
    metaDescription: 'Как ИИ модерирует комментарии, заявки и UGC: ловит спам, мат и токсичность, сортирует обращения 24/7 без штата модераторов. Разбираю на практике.',
    excerpt: 'Спам, мат и токсичные комментарии убивают площадку, а держать модератора 24/7 дорого. Разбираю, как ИИ фильтрует контент и заявки автоматически — и где нужен человек.',
    tags: ['модерация', 'ИИ', 'UGC', 'спам'],
    toc: [{ id: 'problema', text: 'Ручная модерация не тянет' }, { id: 'chto-umeet', text: 'Что умеет ИИ-модерация' }, { id: 'gde-chelovek', text: 'Где всё же нужен человек' }, { id: 'kak-vnedrit', text: 'Как внедрить' }, ...FAQ_VYV],
    relatedSlugs: ['ii-bot-otzyvy-reputaciya-2026', 'chat-bot-faq-podderzhka-telegram-max-2026', 'zaschita-bota-ot-spama-atak-2026', 'rag-na-svoih-dokumentah-lokalno-2026'] }),

  E({ slug: 'ii-bot-otzyvy-reputaciya-2026', category: 'marketing', heroIcon: 'ph-fill ph-star', ctaInternal: AGENTS, servicesOffer: SVC_BIZ,
    title: 'ИИ-бот для отзывов и репутации: собирает, отвечает, предупреждает',
    metaTitle: 'ИИ-бот для отзывов и репутации бизнеса',
    metaDescription: 'Как ИИ-бот собирает отзывы, отвечает на них и ловит негатив раньше, чем он попадёт на карты и площадки. Управление репутацией на автомате. Разбираю на практике.',
    excerpt: 'Один негативный отзыв на картах бьёт по выручке. Разбираю, как ИИ-бот сам собирает отзывы у довольных клиентов, отвечает на них и перехватывает негатив до публикации.',
    tags: ['отзывы', 'репутация', 'ИИ-бот', 'SERM'],
    toc: [{ id: 'pochemu-vazhno', text: 'Почему отзывы решают' }, { id: 'chto-umeet', text: 'Что умеет ИИ-бот' }, { id: 'perehvat-negativa', text: 'Перехват негатива' }, { id: 'kak-vnedrit', text: 'Как внедрить' }, ...FAQ_VYV],
    relatedSlugs: ['cifrovoy-sled-reputaciya-2026', 'ii-moderaciya-kontenta-2026', 'chat-bot-faq-podderzhka-telegram-max-2026', 'skvoznaya-analitika-malyy-biznes-2026'] }),

  E({ slug: 'zaschita-bota-ot-spama-atak-2026', category: 'security', heroIcon: 'ph-fill ph-shield-warning', ctaInternal: SEC, servicesOffer: SVC_SEC,
    title: 'Защита бота от спама и атак: флуд, боты-накрутчики, брутфорс',
    metaTitle: 'Защита бота от спама и атак',
    metaDescription: 'Как защитить Telegram/MAX-бота от спама, флуда, накрутки и брутфорса: рейт-лимиты, капча, антифрод и мониторинг. Разбираю на практике.',
    excerpt: 'Бот без защиты — мишень: флуд, накрутка, спам-регистрации, брутфорс. Разбираю, как защитить бота — рейт-лимиты, капча, антифрод — чтобы он не лёг и не слил бюджет.',
    tags: ['безопасность', 'бот', 'спам', 'антифрод'],
    toc: [{ id: 'ugrozy', text: 'Чем атакуют ботов' }, { id: 'zaschita', text: 'Слои защиты' }, { id: 'antifrod', text: 'Антифрод и накрутка' }, { id: 'monitoring', text: 'Мониторинг и реакция' }, ...FAQ_VYV],
    relatedSlugs: ['ii-moderaciya-kontenta-2026', 'kak-obnaruzhit-fishing-2026', 'otkazoustoychivost-monitoring-bekapy-2026', 'pentest-sayta-prostymi-slovami-2026'] }),

  E({ slug: 'pentest-sayta-prostymi-slovami-2026', category: 'security', heroIcon: 'ph-fill ph-bug', ctaInternal: AUDIT, servicesOffer: SVC_SEC,
    title: 'Пентест сайта простыми словами: что это и когда он нужен',
    metaTitle: 'Пентест сайта простыми словами',
    metaDescription: 'Пентест сайта простыми словами: что проверяют, чем отличается от аудита, сколько стоит и когда бизнесу это реально нужно. Разбираю на практике.',
    excerpt: 'Пентест звучит дорого и страшно, а на деле это проверка «а можно ли вас взломать». Разбираю простыми словами, что проверяют, чем это отличается от аудита и когда нужно.',
    tags: ['пентест', 'безопасность', 'аудит', 'взлом'],
    toc: [{ id: 'chto-eto', text: 'Что такое пентест' }, { id: 'chto-proveryayut', text: 'Что проверяют' }, { id: 'vs-audit', text: 'Пентест или аудит' }, { id: 'komu-nuzhno', text: 'Кому и когда нужно' }, ...FAQ_VYV],
    relatedSlugs: ['zaschita-sayta-ot-parsinga', 'kak-obnaruzhit-fishing-2026', 'zaschita-bota-ot-spama-atak-2026', 'cookie-banner-zakon'] }),

  E({ slug: 'crm-bot-dlya-avtoservisa-2026', category: 'industries', heroIcon: 'ph-fill ph-wrench', ctaInternal: BOTS, servicesOffer: SVC_BIZ,
    title: 'Бот и CRM для автосервиса: напоминания о ТО и ОСАГО, история по VIN',
    metaTitle: 'Бот и CRM для автосервиса: ТО, ОСАГО, история',
    metaDescription: 'Как бот и CRM возвращают клиентов автосервиса: напоминания о ТО, ОСАГО и замене масла, история ремонтов по VIN, запись без звонков. Разбираю на практике.',
    excerpt: 'Клиент уехал после ремонта — и забыл про вас до следующей поломки. Разбираю, как бот и CRM сами напоминают про ТО и ОСАГО, хранят историю по VIN и возвращают клиента.',
    tags: ['автосервис', 'бот', 'CRM', 'напоминания'],
    toc: [{ id: 'problema', text: 'Клиенты уходят и не возвращаются' }, { id: 'napominaniya', text: 'Напоминания, которые возвращают' }, { id: 'istoriya-vin', text: 'История по VIN и запись' }, { id: 'effekt', text: 'Что это даёт' }, ...FAQ_VYV],
    relatedSlugs: ['it-dlya-avtoservisa-2026', 'bot-napominalka-osago-to-2026', 'napominaniya-osago-tehosmotr-to-2026', 'skvoznaya-analitika-malyy-biznes-2026'] }),

  E({ slug: 'bot-dlya-dostavki-edy-2026', category: 'industries', heroIcon: 'ph-fill ph-moped', ctaInternal: BOTS, servicesOffer: SVC_BIZ,
    title: 'Бот для доставки еды: меню, заказ и оплата прямо в мессенджере',
    metaTitle: 'Бот для доставки еды: меню, заказ, оплата',
    metaDescription: 'Свой бот доставки еды в Telegram/MAX вместо агрегатора: меню, корзина, оплата и статус заказа — без комиссии площадок. Разбираю на практике.',
    excerpt: 'Агрегаторы забирают до трети чека и не отдают клиента. Разбираю, как сделать свой бот доставки в мессенджере: меню, корзина, оплата, статус — и оставить маржу себе.',
    tags: ['доставка еды', 'бот', 'общепит', 'мессенджер'],
    toc: [{ id: 'problema', text: 'Агрегаторы съедают маржу' }, { id: 'chto-umeet', text: 'Что умеет бот доставки' }, { id: 'oplata', text: 'Оплата и статус заказа' }, { id: 'komu', text: 'Кому это выгодно' }, ...FAQ_VYV],
    relatedSlugs: ['max-bot-restoran-kafe-2026', 'it-dlya-kofeyni-obshchepita-2026', 'chat-bot-faq-podderzhka-telegram-max-2026', 'skvoznaya-analitika-malyy-biznes-2026'] }),

  E({ slug: 'skvoznaya-analitika-malyy-biznes-2026', category: 'marketing', heroIcon: 'ph-fill ph-chart-line-up', ctaInternal: ANALYTICS, servicesOffer: SVC_BIZ,
    title: 'Сквозная аналитика для малого бизнеса: откуда клиент и что окупается',
    metaTitle: 'Сквозная аналитика для малого бизнеса',
    metaDescription: 'Сквозная аналитика для малого бизнеса простыми словами: как понять, какая реклама приносит клиентов и деньги, а какая сливает бюджет. Разбираю на практике.',
    excerpt: 'Реклама идёт, заявки есть, а какая именно приносит деньги — непонятно. Разбираю, что такое сквозная аналитика, как связать рекламу с выручкой и с чего начать без больших вложений.',
    tags: ['сквозная аналитика', 'маркетинг', 'ROI', 'малый бизнес'],
    toc: [{ id: 'problema', text: 'Деньги в рекламу — вслепую' }, { id: 'chto-eto', text: 'Что такое сквозная аналитика' }, { id: 'kak-rabotaet', text: 'Как это работает' }, { id: 's-chego-nachat', text: 'С чего начать' }, ...FAQ_VYV],
    relatedSlugs: ['bi-dashbordy-metabase-2026', 'metabase-dashbordy-bi-2026', 'ii-bot-otzyvy-reputaciya-2026', 'crm-bot-dlya-avtoservisa-2026'] }),
];
