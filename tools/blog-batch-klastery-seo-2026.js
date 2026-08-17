// Достройка 4 кластеров под реальный поисковый спрос (опорные уже есть):
// стоимость ИИ, импортозамещение ПО, местные гранты, чаевые. Короткие 4-5 мин.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-08-11';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_AI = {
  title: 'Что я делаю с ИИ',
  services: [
    { icon: 'ph-fill ph-robot', label: 'ИИ-агенты под ваши задачи и данные' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция с CRM, сайтом, мессенджерами' },
    { icon: 'ph-fill ph-hard-drives', label: 'Локально или на вашем сервере' },
    { icon: 'ph-fill ph-calculator', label: 'Честная смета и расчёт окупаемости' },
  ],
  ctaLabel: 'Обсудить внедрение', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_IMPORT = {
  title: 'Что я делаю по импортозамещению',
  services: [
    { icon: 'ph-fill ph-swap', label: 'Замена зарубежного софта на российский и open-source' },
    { icon: 'ph-fill ph-hard-drives', label: 'Развёртывание на вашем сервере' },
    { icon: 'ph-fill ph-database', label: 'Перенос данных без потерь' },
    { icon: 'ph-fill ph-shield-check', label: 'Локализация данных по 152-ФЗ' },
  ],
  ctaLabel: 'Обсудить переход', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_LOCAL = {
  title: 'Чем помогу под грант',
  services: [
    { icon: 'ph-fill ph-browser', label: 'Сайт, бот, автоматизация под задачи проекта' },
    { icon: 'ph-fill ph-file-text', label: 'Техчасть и смета для заявки' },
    { icon: 'ph-fill ph-map-pin', label: 'Работаю с Читой, Улан-Удэ, регионом' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Поддержка после запуска' },
  ],
  ctaLabel: 'Обсудить проект', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_TIPS = {
  title: 'Что я делаю по чаевым',
  services: [
    { icon: 'ph-fill ph-qr-code', label: 'Подключение и настройка QR-чаевых' },
    { icon: 'ph-fill ph-users-three', label: 'Схемы распределения между сменой' },
    { icon: 'ph-fill ph-note', label: 'Таблички и носители под ваш бренд' },
    { icon: 'ph-fill ph-gear', label: 'Свой сервис чаевых при необходимости' },
  ],
  ctaLabel: 'Обсудить внедрение', ctaUrl: 'https://t.me/chimitdorzhi',
};

const mk = (o, svc, cta) => Object.assign({
  published: true, datePublished: D, dateModified: D,
  readingMinutes: 5, shortForm: true, servicesOffer: svc, ctaInternal: cta,
}, o, { contentHtml: C(o.slug) });

const CTA_AI = { url: 'https://chimitdorzhi.tech/predlozheniya/ai-vnedrenie-90-dney/', label: 'Рассчитать внедрение' };
const CTA_MARKET = { url: 'https://chimitdorzhi.tech/market/#checklist', label: 'Обсудить проект' };
const CTA_TG = { url: 'https://t.me/chimitdorzhi', label: 'Написать в Telegram' };

module.exports = [
  // === Кластер 1: стоимость ИИ ===
  mk({
    slug: 'skolko-stoit-ai-agent-dlya-prodazh-2026',
    category: 'ai-dev', heroIcon: 'ph-fill ph-currency-rub',
    title: 'Сколько стоит ИИ-агент для продаж: из чего складывается цена',
    metaTitle: 'Сколько стоит ИИ-агент для продаж в 2026',
    metaDescription: 'Из чего складывается цена ИИ-агента для продаж: разовая разработка, интеграции, модель и поддержка. Разбираю по частям и как считать окупаемость.',
    metaKeywords: 'сколько стоит ии агент, цена ии агента для продаж, стоимость ии бота, внедрение ии стоимость, ии для продаж цена, окупаемость ии агента',
    excerpt: 'ИИ-агент для продаж стоит по-разному: от простого квалификатора заявок до полноценного менеджера с интеграциями. Разбираю, из чего складывается цена, что влияет на бюджет и как прикинуть окупаемость до старта.',
    tags: ['ИИ', 'продажи', 'стоимость', 'агенты', '2026'],
    toc: toc(['iz-chego','Из чего складывается цена'],['ot-chego','От чего зависит бюджет'],['okupaemost','Как прикинуть окупаемость'],['kak-sekonomit','Как не переплатить'],['faq','Частые вопросы'],['vyvody','Коротко о главном']),
    relatedSlugs: ['skolko-stoit-vnedrit-ii-2026', 'ai-agenty-v-biznese-2026', 'okupaemost-ii-agentov-biznes-keys-2026', 'ii-agent-zayavki-s-sayta-crm-2027'],
  }, SVC_AI, CTA_AI),
  mk({
    slug: 'skolko-stoit-razrabotka-po-na-zakaz-2026',
    category: 'development', heroIcon: 'ph-fill ph-code',
    title: 'Сколько стоит разработка ПО на заказ и от чего зависит цена',
    metaTitle: 'Сколько стоит разработка ПО на заказ в 2026',
    metaDescription: 'Почему одну программу оценивают в разы дороже другой: разбираю, из чего складывается стоимость разработки ПО на заказ и как читать смету подрядчика.',
    metaKeywords: 'сколько стоит разработка по, стоимость разработки программного обеспечения, написать программу на заказ цена, разработка софта стоимость, смета на разработку',
    excerpt: 'Цена разработки ПО на заказ прыгает в разы, и заказчику непонятно, за что он платит. Разбираю, из чего реально складывается стоимость, почему оценки так различаются и как читать смету, чтобы не переплатить и не получить полуфабрикат.',
    tags: ['разработка', 'стоимость', 'ПО', 'заказ', '2026'],
    toc: toc(['iz-chego','Из чего складывается цена'],['pochemu-raznica','Почему оценки различаются в разы'],['kak-chitat-smetu','Как читать смету'],['kak-sekonomit','Как не переплатить'],['faq','Частые вопросы'],['vyvody','Коротко о главном']),
    relatedSlugs: ['skolko-stoit-vnedrit-ii-2026', 'vnedrenie-ii-stoimost-2027', 'kak-schitat-okupaemost-avtomatizacii-2026', 'ai-agenty-v-biznese-2026'],
  }, SVC_AI, CTA_MARKET),
  mk({
    slug: 'ii-pod-klyuch-ili-abonement-2026',
    category: 'ai-dev', heroIcon: 'ph-fill ph-scales',
    title: 'ИИ под ключ или по абонементу: какая модель оплаты выгоднее',
    metaTitle: 'ИИ под ключ или абонемент: что выгоднее',
    metaDescription: 'Заплатить за ИИ-проект разом «под ключ» или взять по абонементу с поддержкой? Разбираю плюсы, минусы и когда какая модель оплаты выгоднее бизнесу.',
    metaKeywords: 'ии под ключ, абонемент на ии, модель оплаты разработки, поддержка ии, что значит под ключ, разовая оплата или подписка',
    excerpt: 'Одни хотят заплатить за ИИ-проект разом и забыть, другим удобнее абонемент с поддержкой и доработками. Разбираю, что значит «под ключ», чем отличается абонемент и когда какая модель оплаты реально выгоднее.',
    tags: ['ИИ', 'оплата', 'под ключ', 'абонемент', '2026'],
    toc: toc(['pod-klyuch','Что значит под ключ'],['abonement','Что такое абонемент'],['sravnenie','Когда что выгоднее'],['kak-vybrat','Как выбрать под себя'],['faq','Частые вопросы'],['vyvody','Коротко о главном']),
    relatedSlugs: ['skolko-stoit-vnedrit-ii-2026', 'vnedrenie-ii-stoimost-2027', 'okupaemost-ii-agentov-biznes-keys-2026', 'ai-agenty-v-biznese-2026'],
  }, SVC_AI, CTA_AI),

  // === Кластер 2: импортозамещение ===
  mk({
    slug: 'importozameshchenie-ofisnogo-paketa-2026',
    category: 'development', heroIcon: 'ph-fill ph-files',
    title: 'Чем заменить Microsoft Office: российские и open-source офисы',
    metaTitle: 'Чем заменить MS Office: импортозамещение офиса',
    metaDescription: 'Импортозамещение офисного пакета: чем заменить Microsoft Office — Р7-Офис, МойОфис, LibreOffice. Сравниваю по совместимости, цене и переходу.',
    metaKeywords: 'импортозамещение офиса, чем заменить microsoft office, р7-офис, мойофис, libreoffice, российский офисный пакет, замена ms office',
    excerpt: 'Microsoft Office официально ушёл, а работать в документах надо. Разбираю, чем его заменить: Р7-Офис, МойОфис, LibreOffice — по совместимости с привычными форматами, цене и тому, насколько болезненным будет переход.',
    tags: ['импортозамещение', 'офис', 'ПО', '2026'],
    toc: toc(['problema','Почему пора менять'],['varianty','Чем заменить: варианты'],['sravnenie','Сравнение по задачам'],['perehod','Как перейти без боли'],['faq','Частые вопросы'],['vyvody','Коротко о главном']),
    relatedSlugs: ['importozameshchenie-po-2026', 'migraciya-na-astra-linux-2026', 'cifrovaya-nezavisimost-biznesa-2026', 'lokalizaciya-pd-2026'],
  }, SVC_IMPORT, CTA_TG),
  mk({
    slug: 'importozameshchenie-crm-2026',
    category: 'development', heroIcon: 'ph-fill ph-address-book',
    title: 'Импортозамещение CRM: чем заменить зарубежную систему',
    metaTitle: 'Импортозамещение CRM: чем заменить зарубежную',
    metaDescription: 'Зарубежная CRM ушла или рискует уйти. Разбираю, чем заменить: российские и open-source CRM на своём сервере, перенос данных и на что смотреть при выборе.',
    metaKeywords: 'импортозамещение crm, замена зарубежной crm, российская crm, open-source crm, crm на своём сервере, перенос данных crm, twenty espocrm',
    excerpt: 'Зарубежная CRM либо ушла, либо в любой момент может отключить российских клиентов, а в ней вся база. Разбираю, чем её заменить: российские и open-source системы на своём сервере, как перенести данные и на что смотреть при выборе.',
    tags: ['импортозамещение', 'CRM', 'ПО', '2026'],
    toc: toc(['problema','Чем рискует бизнес'],['varianty','Чем заменить'],['svoy-server','Почему на своём сервере'],['perehod','Как перенести данные'],['faq','Частые вопросы'],['vyvody','Коротко о главном']),
    relatedSlugs: ['importozameshchenie-po-2026', 'twenty-crm-otkrytyy-kod-2026', 'espocrm-besplatnaya-crm-2026', 'cifrovaya-nezavisimost-biznesa-2026'],
  }, SVC_IMPORT, CTA_TG),
  mk({
    slug: 'open-source-dlya-importozameshcheniya-2026',
    category: 'opensource', heroIcon: 'ph-fill ph-git-branch',
    title: 'Open-source для импортозамещения: чем заменить платный софт',
    metaTitle: 'Open-source для импортозамещения: подборка',
    metaDescription: 'Подборка open-source решений для импортозамещения по задачам: офис, CRM, почта, диски, таблицы. Бесплатно, на своём сервере, без риска отключения.',
    metaKeywords: 'open source импортозамещение, свободное по для бизнеса, замена платного софта, open source на своём сервере, self-hosted для бизнеса, бесплатный софт замена',
    excerpt: 'Импортозамещение — это не только «купить российский аналог». Часть задач закрывает зрелый open-source: бесплатно, на своём сервере, без риска, что вендор отключит. Разбираю по задачам, где это работает, а где лучше готовое решение.',
    tags: ['импортозамещение', 'open-source', 'ПО', '2026'],
    toc: toc(['pochemu','Почему open-source подходит'],['po-zadacham','Подборка по задачам'],['granica','Где open-source не лучший выбор'],['vnedrenie','Как внедрить у себя'],['faq','Частые вопросы'],['vyvody','Коротко о главном']),
    relatedSlugs: ['importozameshchenie-po-2026', 'nocodb-airtable-svoy-server-2026', 'twenty-crm-otkrytyy-kod-2026', 'cifrovaya-nezavisimost-biznesa-2026'],
  }, SVC_IMPORT, CTA_TG),

  // === Кластер 3: местные гранты ===
  mk({
    slug: 'socialnyy-kontrakt-svoe-delo-2026',
    category: 'marketing', heroIcon: 'ph-fill ph-handshake',
    title: 'Социальный контракт на своё дело: как получить и на что потратить',
    metaTitle: 'Социальный контракт на своё дело 2026',
    metaDescription: 'Социальный контракт даёт деньги на открытие своего дела. Разбираю, кто может получить, какие суммы, что можно купить и как повысить шанс одобрения.',
    metaKeywords: 'социальный контракт, соцконтракт на своё дело, соцконтракт самозанятому, как получить социальный контракт, деньги на бизнес от государства, соцконтракт 2026',
    excerpt: 'Социальный контракт — это государственные деньги на открытие своего дела, которые не нужно возвращать при выполнении условий. Разбираю, кто может претендовать, какие суммы, на что можно потратить и как повысить шанс одобрения заявки.',
    tags: ['гранты', 'социальный контракт', 'бизнес', 'поддержка', '2026'],
    toc: toc(['chto-eto','Что такое соцконтракт'],['komu','Кто может получить'],['na-chto','На что можно потратить'],['kak-oformit','Как оформить и повысить шанс'],['faq','Частые вопросы'],['vyvody','Коротко о главном']),
    relatedSlugs: ['granty-podderzhka-biznesa-zabaykalye-2026', 'granty-podderzhka-biznesa-buryatiya-2026', 'it-dlya-fermerov-zabaykalya-buryatii-2026', 'grant-na-ii-proekt-razvitie-ii-2026'],
  }, SVC_LOCAL, CTA_TG),
  mk({
    slug: 'grant-nachinayushchemu-predprinimatelyu-2026',
    category: 'marketing', heroIcon: 'ph-fill ph-rocket',
    title: 'Грант начинающему предпринимателю 2026: кому дают и как оформить',
    metaTitle: 'Грант начинающему предпринимателю 2026',
    metaDescription: 'Гранты для начинающих предпринимателей: кто может претендовать, какие суммы и требования, как подготовить заявку и не получить отказ по формальности.',
    metaKeywords: 'грант начинающему предпринимателю, грант на открытие бизнеса, грант молодому предпринимателю 2026, как получить грант на бизнес, заявка на грант, бизнес грант',
    excerpt: 'Государство даёт гранты начинающим предпринимателям, но большинство заявок отклоняют по формальностям. Разбираю, кто может претендовать, какие требования, что должно быть в заявке и как не получить отказ на ровном месте.',
    tags: ['гранты', 'предпринимательство', 'поддержка', '2026'],
    toc: toc(['komu','Кому дают гранты'],['trebovaniya','Требования и суммы'],['zayavka','Что должно быть в заявке'],['oshibki','Частые причины отказа'],['faq','Частые вопросы'],['vyvody','Коротко о главном']),
    relatedSlugs: ['granty-podderzhka-biznesa-buryatiya-2026', 'granty-podderzhka-biznesa-zabaykalye-2026', 'grant-na-ii-proekt-razvitie-ii-2026', 'it-dlya-fermerov-zabaykalya-buryatii-2026'],
  }, SVC_LOCAL, CTA_TG),
  mk({
    slug: 'subsidii-fermeram-agrostartap-2026',
    category: 'marketing', heroIcon: 'ph-fill ph-plant',
    title: 'Субсидии фермерам 2026: агростартап и семейная ферма',
    metaTitle: 'Субсидии фермерам 2026: агростартап',
    metaDescription: 'Субсидии и гранты фермерам: агростартап, семейная ферма, поддержка начинающих. Разбираю, кто может получить, на что дают и что нужно для заявки.',
    metaKeywords: 'субсидии фермерам, грант агростартап, семейная ферма грант, поддержка фермеров 2026, грант начинающему фермеру, деньги на ферму от государства',
    excerpt: 'Фермерам доступны отдельные меры поддержки: агростартап, гранты семейной ферме, помощь начинающим. Разбираю, кто может претендовать, на что дают деньги и что подготовить для заявки, чтобы не потерять её на формальностях.',
    tags: ['субсидии', 'фермеры', 'агростартап', 'поддержка', '2026'],
    toc: toc(['mery','Какие меры есть'],['komu','Кто может получить'],['na-chto','На что дают'],['zayavka','Как подготовить заявку'],['faq','Частые вопросы'],['vyvody','Коротко о главном']),
    relatedSlugs: ['it-dlya-fermerov-zabaykalya-buryatii-2026', 'granty-podderzhka-biznesa-zabaykalye-2026', 'granty-podderzhka-biznesa-buryatiya-2026', 'grant-nachinayushchemu-predprinimatelyu-2026'],
  }, SVC_LOCAL, CTA_TG),
  mk({
    slug: 'cifrovizaciya-pod-grant-zayavka-2026',
    category: 'marketing', heroIcon: 'ph-fill ph-file-plus',
    title: 'Как включить сайт и автоматизацию в заявку на грант',
    metaTitle: 'Цифровизация под грант: техчасть заявки',
    metaDescription: 'Многие гранты можно потратить на сайт, бот и автоматизацию. Разбираю, как грамотно включить IT в заявку, оформить смету и обосновать пользу проекта.',
    metaKeywords: 'цифровизация под грант, ит в заявке на грант, сайт за счёт гранта, автоматизация под грант, смета на разработку для гранта, грант на цифровизацию',
    excerpt: 'Часть грантов можно направить на сайт, бота или автоматизацию — но заявку легко завалить размытой формулировкой. Разбираю, как грамотно включить IT в проект, оформить смету и обосновать, что цифровизация даст результат.',
    tags: ['гранты', 'цифровизация', 'заявка', 'IT', '2026'],
    toc: toc(['chto-mozhno','Что можно оплатить грантом'],['kak-vklyuchit','Как включить IT в заявку'],['smeta','Смета и обоснование'],['kak-pomogu','Чем помогу'],['faq','Частые вопросы'],['vyvody','Коротко о главном']),
    relatedSlugs: ['granty-podderzhka-biznesa-zabaykalye-2026', 'granty-podderzhka-biznesa-buryatiya-2026', 'grant-na-ii-proekt-razvitie-ii-2026', 'grant-nachinayushchemu-predprinimatelyu-2026'],
  }, SVC_LOCAL, CTA_MARKET),

  // === Кластер 4: чаевые ===
  mk({
    slug: 'chaevye-po-qr-v-otele-gornichnym-2026',
    category: 'industries', heroIcon: 'ph-fill ph-bed',
    title: 'Чаевые по QR в отеле: горничным и персоналу без наличных',
    metaTitle: 'Чаевые по QR в отеле: горничным и персоналу',
    metaDescription: 'Гости всё реже носят наличные, и горничные остаются без чаевых. Разбираю, как подключить чаевые по QR в отеле: кому, где разместить код и как делить.',
    metaKeywords: 'чаевые по qr в отеле, чаевые горничным, qr код для чаевых горничных, чаевые персоналу отеля, безналичные чаевые гостиница, чаевые в гостинице',
    excerpt: 'Гости всё реже носят наличные, и горничные с персоналом отеля теряют чаевые просто потому, что оставить их нечем. Разбираю, как подключить чаевые по QR в гостинице: кому, где разместить код в номере и на стойке и как честно распределять.',
    tags: ['чаевые', 'отель', 'QR', 'горничные', '2026'],
    toc: toc(['problema','Почему персонал теряет чаевые'],['kak-rabotaet','Как это работает в отеле'],['gde-razmestit','Где разместить код'],['raspredelenie','Кому и как распределять'],['faq','Частые вопросы'],['vyvody','Коротко о главном']),
    relatedSlugs: ['chaevye-po-qr-kodu-2026', 'qr-tablichka-dlya-chaevyh-2026', 'nalogi-s-chaevyh-samozanyatost-2026', 'chaevye-po-qr-v-salone-i-barbershope-2026'],
  }, SVC_TIPS, CTA_TG),
  mk({
    slug: 'raspredelenie-chaevyh-mezhdu-sotrudnikami-2026',
    category: 'industries', heroIcon: 'ph-fill ph-users-three',
    title: 'Как справедливо распределять чаевые между сотрудниками',
    metaTitle: 'Как распределять чаевые между сотрудниками',
    metaDescription: 'Общий котёл или каждому свой QR? Разбираю схемы распределения чаевых между сменой и кухней, их плюсы и минусы и как не поссорить команду.',
    metaKeywords: 'распределение чаевых, как делить чаевые между сотрудниками, чаевые на кухню, общий котёл чаевые, справедливое распределение чаевых, чаевые в смене',
    excerpt: 'Чаевые по QR приходят конкретному человеку, а работает вся смена — включая кухню, которую гость не видит. Разбираю схемы распределения: личный код, общий котёл, смешанная модель — их плюсы, минусы и как не рассорить команду.',
    tags: ['чаевые', 'команда', 'распределение', '2026'],
    toc: toc(['problema','Почему это спорный вопрос'],['shemy','Три схемы распределения'],['sravnenie','Плюсы и минусы'],['kak-vybrat','Как выбрать под заведение'],['faq','Частые вопросы'],['vyvody','Коротко о главном']),
    relatedSlugs: ['chaevye-po-qr-kodu-2026', 'chaevye-po-qr-v-kafe-i-restorane-2026', 'nalogi-s-chaevyh-samozanyatost-2026', 'qr-tablichka-dlya-chaevyh-2026'],
  }, SVC_TIPS, CTA_TG),
];
