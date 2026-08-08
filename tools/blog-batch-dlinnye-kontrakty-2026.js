// Батч: длинные контракты — форматы/роли/входные точки/доверие (8 статей ~4 мин, shortForm).
// Спрос ~0, задача — создание спроса + доверие, конверсия тёплого читателя в длинный контракт.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-22';
const SVC = 'https://chimitdorzhi.tech/services';

const SVC_PARTNER = {
  title: 'Форматы работы под ключ',
  services: [
    { icon: 'ph-fill ph-briefcase', label: 'Проект под ключ' },
    { icon: 'ph-fill ph-clock', label: 'Почасовая работа (T&M)' },
    { icon: 'ph-fill ph-repeat', label: 'Абонентка и поддержка' },
    { icon: 'ph-fill ph-users-three', label: 'Внешний IT-отдел / IT-директор' },
  ],
  ctaLabel: 'Обсудить сотрудничество', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_CTO = {
  title: 'Внешний IT-директор и стратегия',
  services: [
    { icon: 'ph-fill ph-strategy', label: 'IT-стратегия и план на год' },
    { icon: 'ph-fill ph-users-three', label: 'Внешний IT-отдел' },
    { icon: 'ph-fill ph-shield-check', label: 'Выбор решений и подрядчиков' },
    { icon: 'ph-fill ph-chart-line-up', label: 'Развитие и контроль' },
  ],
  ctaLabel: 'Обсудить IT-директора', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_START = {
  title: 'С чего начать сотрудничество',
  services: [
    { icon: 'ph-fill ph-flask', label: 'Пилотный проект за 2 недели' },
    { icon: 'ph-fill ph-magnifying-glass', label: 'Техаудит перед стартом' },
    { icon: 'ph-fill ph-key', label: 'Все доступы остаются у вас' },
    { icon: 'ph-fill ph-repeat', label: 'Переход на сопровождение' },
  ],
  ctaLabel: 'Начать с пилота', ctaUrl: 'https://t.me/chimitdorzhi',
};

const CTA_PARTNER = { url: `${SVC}/it-infrastructure/`, label: 'Форматы сотрудничества' };
const CTA_CTO = { url: `${SVC}/it-infrastructure/`, label: 'Внешний IT-директор' };
const CTA_START = { url: `${SVC}/web-development/`, label: 'Начать с пилота' };

const T = (items) => items.concat([{ id: 'faq', text: 'FAQ' }, { id: 'vyvody', text: 'Коротко о главном' }]);

const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D,
  readingMinutes: 4, shortForm: true, servicesOffer: SVC_PARTNER, ctaInternal: CTA_PARTNER,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'formaty-sotrudnichestva-2026', category: 'development', heroIcon: 'ph-fill ph-handshake',
    servicesOffer: SVC_PARTNER, ctaInternal: CTA_PARTNER,
    title: 'Форматы сотрудничества: проект, часы, подписка или внешний IT-отдел',
    metaTitle: 'Форматы сотрудничества: проект, часы, подписка',
    metaDescription: 'Форматы работы с разработчиком: проект под ключ, почасовая (T&M), абонентка-подписка или внешний IT-отдел.',
    metaKeywords: 'форматы сотрудничества, проект или почасовая, абонентское обслуживание it, внешний it-отдел, как работать с разработчиком',
    excerpt: 'Проект под ключ, почасовая, абонентка или внешний IT-отдел: чем отличаются форматы работы с разработчиком, кому что подходит и как выбрать под свою задачу.',
    tags: ['форматы', 'сотрудничество', 'абонентка', 'цены'],
    toc: T([{ id: 'proekt', text: 'Проект под ключ' }, { id: 'chasy', text: 'Почасовая (T&M)' }, { id: 'podpiska', text: 'Абонентка и внешний IT-отдел' }, { id: 'kak-vybrat', text: 'Как выбрать формат' }]),
    relatedSlugs: ['vneshniy-it-direktor-cto-2026', 'pilotnyy-proekt-2-nedeli-2026', 'tehpodderzhka-sayta-skolko-stoit-2026'] }),

  E({ slug: 'vneshniy-it-direktor-cto-2026', category: 'development', heroIcon: 'ph-fill ph-user-focus',
    servicesOffer: SVC_CTO, ctaInternal: CTA_CTO,
    title: 'Внешний IT-директор (CTO as a Service): кому нужен и сколько стоит',
    metaTitle: 'Внешний IT-директор (CTO as a Service): кому нужен',
    metaDescription: 'Внешний IT-директор (CTO as a Service): что это, кому нужен без штатного технического директора, чем занимается.',
    metaKeywords: 'внешний it-директор, cto as a service, технический директор на аутсорсе, ит-директор для малого бизнеса, cto на аутсорсе',
    excerpt: 'Что такое внешний IT-директор (CTO as a Service), кому он нужен без штатного техдиректора, чем занимается и во сколько обходится по сравнению со штатным.',
    tags: ['IT-директор', 'CTO', 'стратегия', 'аутсорс'],
    toc: T([{ id: 'chto-eto', text: 'Что такое внешний IT-директор' }, { id: 'komu', text: 'Кому нужен' }, { id: 'chem-zanimaetsya', text: 'Чем занимается' }, { id: 'cena', text: 'Сколько стоит' }]),
    relatedSlugs: ['vneshniy-it-otdel-2026', 'it-strategiya-malyy-biznes-2026', 'formaty-sotrudnichestva-2026'] }),

  E({ slug: 'vneshniy-it-otdel-2026', category: 'development', heroIcon: 'ph-fill ph-users-three',
    servicesOffer: SVC_CTO, ctaInternal: CTA_CTO,
    title: 'Внешний IT-отдел для компании без своих айтишников',
    metaTitle: 'Внешний IT-отдел для компании без айтишников',
    metaDescription: 'Внешний IT-отдел: как компании без своих айтишников получить полноценную IT-функцию на аутсорсе — поддержка, разработка, инфраструктура, безопасность.',
    metaKeywords: 'внешний it-отдел, it-отдел на аутсорсе, ит-отдел для малого бизнеса, аутсорс it-отдела, ит без штата',
    excerpt: 'Как компании без своих айтишников получить полноценный IT-отдел на аутсорсе — поддержка, разработка, инфраструктура, безопасность — за фиксированную абонентку.',
    tags: ['IT-отдел', 'аутсорс', 'абонентка', 'малый бизнес'],
    toc: T([{ id: 'chto-eto', text: 'Что такое внешний IT-отдел' }, { id: 'chto-vhodit', text: 'Что входит' }, { id: 'vygoda', text: 'Дешевле ли штата' }, { id: 'komu', text: 'Кому подходит' }]),
    relatedSlugs: ['vneshniy-it-direktor-cto-2026', 'prihodyashchiy-sisadmin-vs-shtatnyy-2026', 'formaty-sotrudnichestva-2026'] }),

  E({ slug: 'pilotnyy-proekt-2-nedeli-2026', category: 'development', heroIcon: 'ph-fill ph-flask',
    servicesOffer: SVC_START, ctaInternal: CTA_START,
    title: 'Пилотный проект за 2 недели: проверить подрядчика малой кровью',
    metaTitle: 'Пилотный проект за 2 недели: проверить подрядчика',
    metaDescription: 'Пилотный проект за 2 недели: как проверить IT-подрядчика на маленькой задаче до большого контракта — что взять в пилот.',
    metaKeywords: 'пилотный проект, проверить подрядчика, пилот за 2 недели, тестовое сотрудничество, как выбрать it-подрядчика',
    excerpt: 'Как проверить IT-подрядчика на маленькой задаче за 2 недели до большого контракта: что взять в пилот, как оценить результат и снять страх «а вдруг кинет».',
    tags: ['пилот', 'подрядчик', 'проверка', 'старт'],
    toc: T([{ id: 'zachem', text: 'Зачем нужен пилот' }, { id: 'chto-vzyat', text: 'Что взять в пилот' }, { id: 'kak-ocenit', text: 'Как оценить результат' }, { id: 'dalshe', text: 'Что дальше' }]),
    relatedSlugs: ['kak-vybrat-podryadchika-razrabotka-2026', 'kak-ya-rabotayu-process-2026', 'formaty-sotrudnichestva-2026'] }),

  E({ slug: 'keys-6-mesyacev-cifry-2026', category: 'cases', heroIcon: 'ph-fill ph-chart-line-up',
    servicesOffer: SVC_PARTNER, ctaInternal: CTA_PARTNER,
    title: 'Кейс: что изменилось у клиента за 6 месяцев сопровождения',
    metaTitle: 'Кейс за 6 месяцев: цифры до и после',
    metaDescription: 'Обезличенный кейс сопровождения на примере типового бизнеса: что изменилось за 6 месяцев — заявки, скорость обработки, ошибки, время сотрудников.',
    metaKeywords: 'кейс автоматизации, результат до и после, сопровождение бизнеса кейс, что даёт автоматизация цифры, кейс it-подрядчика',
    excerpt: 'Обезличенный типовой кейс: что реально меняется за полгода сопровождения — заявки, скорость, ошибки, время сотрудников. Цифры до/после и как это устроено.',
    tags: ['кейс', 'результаты', 'сопровождение', 'до/после'],
    toc: T([{ id: 'ishodno', text: 'Что было в начале' }, { id: 'chto-sdelali', text: 'Что делали по месяцам' }, { id: 'cifry', text: 'Цифры до и после' }, { id: 'vyvod-keysa', text: 'Что это дало бизнесу' }]),
    relatedSlugs: ['formaty-sotrudnichestva-2026', 'kak-ya-rabotayu-process-2026', 'pochemu-beru-ne-vse-proekty-2026'] }),

  E({ slug: 'kak-ya-rabotayu-process-2026', category: 'development', heroIcon: 'ph-fill ph-steps',
    servicesOffer: SVC_PARTNER, ctaInternal: CTA_PARTNER,
    title: 'Как я работаю: процесс от задачи до релиза и поддержки',
    metaTitle: 'Как я работаю: процесс от задачи до релиза',
    metaDescription: 'Как я работаю над проектом: прозрачный процесс от первой задачи до релиза и поддержки — бриф, оценка, этапы с демо, приёмка, передача доступов.',
    metaKeywords: 'как я работаю, процесс разработки, этапы работы над проектом, прозрачная разработка, работа с подрядчиком',
    excerpt: 'Прозрачный процесс работы от первой задачи до релиза и поддержки: бриф, оценка, этапы с демо, приёмка, передача доступов. Что видит и контролирует заказчик.',
    tags: ['процесс', 'работа', 'прозрачность', 'доверие'],
    toc: T([{ id: 'princip', text: 'Главный принцип' }, { id: 'etapy', text: 'Этапы работы' }, { id: 'kontrol', text: 'Что контролирует заказчик' }, { id: 'posle', text: 'После релиза' }]),
    relatedSlugs: ['pilotnyy-proekt-2-nedeli-2026', 'kak-zakazat-razrabotku-ne-poteryat-dengi-2026', 'formaty-sotrudnichestva-2026'] }),

  E({ slug: 'it-strategiya-malyy-biznes-2026', category: 'development', heroIcon: 'ph-fill ph-strategy',
    servicesOffer: SVC_CTO, ctaInternal: CTA_CTO,
    title: 'IT-стратегия для малого бизнеса: план на год без лишних трат',
    metaTitle: 'IT-стратегия для малого бизнеса: план на год',
    metaDescription: 'IT-стратегия для малого бизнеса: как составить простой план цифровизации на год — что автоматизировать в первую очередь.',
    metaKeywords: 'it-стратегия для малого бизнеса, план цифровизации, с чего начать автоматизацию, ит-стратегия, цифровая стратегия компании',
    excerpt: 'Как составить простой IT-план на год для малого бизнеса: что автоматизировать первым, чего не покупать раньше времени и как не потратить бюджет впустую.',
    tags: ['IT-стратегия', 'план', 'малый бизнес', 'цифровизация'],
    toc: T([{ id: 'zachem', text: 'Зачем нужен план' }, { id: 's-chego', text: 'С чего начать' }, { id: 'prioritety', text: 'Как расставить приоритеты' }, { id: 'oshibki', text: 'Частые ошибки' }]),
    relatedSlugs: ['vneshniy-it-direktor-cto-2026', 'avtomatizaciya-7-rutin-2026', 'formaty-sotrudnichestva-2026'] }),

  E({ slug: 'pochemu-beru-ne-vse-proekty-2026', category: 'development', heroIcon: 'ph-fill ph-funnel',
    servicesOffer: SVC_PARTNER, ctaInternal: CTA_PARTNER,
    title: 'Почему я беру не все проекты — и почему это в ваших интересах',
    metaTitle: 'Почему я беру не все проекты',
    metaDescription: 'Почему я берусь не за каждый проект: какие задачи беру, а какие честно отклоняю и почему это защищает и заказчика, и качество.',
    metaKeywords: 'почему беру не все проекты, как выбираю проекты, с кем работаю, отбор клиентов, качество разработки',
    excerpt: 'Почему я берусь не за каждый проект, какие задачи отклоняю и почему это защищает и заказчика, и качество. Как понять, подходим ли мы друг другу.',
    tags: ['принципы', 'отбор', 'качество', 'доверие'],
    toc: T([{ id: 'paradoks', text: 'Парадокс отказа' }, { id: 'chto-beru', text: 'Какие проекты беру' }, { id: 'chto-net', text: 'Что честно отклоняю' }, { id: 'podhodim', text: 'Подходим ли мы друг другу' }]),
    relatedSlugs: ['kak-ya-rabotayu-process-2026', 'formaty-sotrudnichestva-2026', 'keys-6-mesyacev-cifry-2026'] }),
];
