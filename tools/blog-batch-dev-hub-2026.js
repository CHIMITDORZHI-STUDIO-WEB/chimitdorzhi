// Батч: dev-хаб «заказать разработку ПО/SaaS» (9 коротких статей ~4 мин, shortForm).
// По типу продукта (маркетплейс/ERP/ЛК/SaaS/бот/miniapp) + блок доверия (договор/этапы/цена).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-22';
const SVC = 'https://chimitdorzhi.tech/services';

const SVC_DEV = {
  title: 'Разработка под ключ',
  services: [
    { icon: 'ph-fill ph-globe', label: 'Сайты, порталы и веб-сервисы' },
    { icon: 'ph-fill ph-storefront', label: 'Маркетплейсы и каталоги' },
    { icon: 'ph-fill ph-squares-four', label: 'CRM, ERP, личные кабинеты' },
    { icon: 'ph-fill ph-rocket-launch', label: 'SaaS и MVP' },
    { icon: 'ph-fill ph-robot', label: 'Боты и мини-приложения' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Поддержка после запуска' },
  ],
  ctaLabel: 'Заказать разработку', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_TRUST = {
  title: 'Как я работаю над проектом',
  services: [
    { icon: 'ph-fill ph-file-text', label: 'ТЗ и прозрачная смета' },
    { icon: 'ph-fill ph-steps', label: 'Работа этапами с демо' },
    { icon: 'ph-fill ph-handshake', label: 'Договор и фиксация объёма' },
    { icon: 'ph-fill ph-key', label: 'Передача исходников и доступов' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Поддержка после запуска' },
  ],
  ctaLabel: 'Обсудить проект', ctaUrl: 'https://t.me/chimitdorzhi',
};
const CTA_DEV = { url: `${SVC}/web-development/`, label: 'Разработка под ключ' };
const CTA_BOT = { url: `${SVC}/telegram-bots/`, label: 'Бот под ключ' };

const T = (items) => items.concat([{ id: 'faq', text: 'FAQ' }, { id: 'vyvody', text: 'Коротко о главном' }]);

const E = (o) => Object.assign({
  category: 'development', published: true, datePublished: D, dateModified: D,
  readingMinutes: 4, shortForm: true, servicesOffer: SVC_DEV, ctaInternal: CTA_DEV,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'razrabotka-marketpleysa-pod-klyuch-2026', heroIcon: 'ph-fill ph-storefront',
    title: 'Разработка маркетплейса под ключ: смета и подводные камни',
    metaTitle: 'Разработка маркетплейса под ключ: смета и риски',
    metaDescription: 'Разработка маркетплейса под ключ: из чего складывается смета, какие модули нужны (каталог, продавцы, оплата, споры), подводные камни и сколько времени и денег закладывать.',
    metaKeywords: 'разработка маркетплейса, создать маркетплейс, маркетплейс под ключ, сколько стоит маркетплейс, разработка платформы объявлений',
    excerpt: 'Из чего складывается смета маркетплейса, какие модули обязательны, где обычно недооценивают бюджет и как не наступить на типичные грабли.',
    tags: ['маркетплейс', 'разработка', 'смета', 'платформа'],
    toc: T([{ id: 'chto-eto', text: 'Что входит в маркетплейс' }, { id: 'moduli', text: 'Обязательные модули' }, { id: 'podvodnye', text: 'Подводные камни' }, { id: 'cena', text: 'Смета и сроки' }]),
    relatedSlugs: ['skolko-stoit-internet-magazin-2026', 'sozdat-svoy-veb-servis-saas-2026', 'kak-zakazat-razrabotku-ne-poteryat-dengi-2026'] }),

  E({ slug: 'razrabotka-erp-dlya-msb-2026', heroIcon: 'ph-fill ph-squares-four',
    title: 'Разработка ERP для малого и среднего бизнеса: нужна ли она вам',
    metaTitle: 'Разработка ERP для МСБ: нужна ли и сколько стоит',
    metaDescription: 'Разработка ERP для малого и среднего бизнеса: что это простыми словами, когда коробочная 1С уже не тянет, что входит в свою систему учёта и сколько это стоит.',
    metaKeywords: 'разработка erp, erp для малого бизнеса, своя система учета, erp под ключ, автоматизация учета msb',
    excerpt: 'Что такое ERP простыми словами, когда коробочные решения перестают тянуть и когда бизнесу выгоднее своя система учёта. Честно про сроки и цену.',
    tags: ['ERP', 'учёт', 'автоматизация', 'разработка'],
    toc: T([{ id: 'chto-eto', text: 'Что такое ERP простыми словами' }, { id: 'kogda', text: 'Когда коробка не тянет' }, { id: 'chto-vhodit', text: 'Что входит в свою систему' }, { id: 'cena', text: 'Сроки и цена' }]),
    relatedSlugs: ['svoya-crm-na-servere-vs-oblachnaya-2026', 'avtomatizaciya-excel-na-zakaz-2026', 'sozdat-svoy-veb-servis-saas-2026'] }),

  E({ slug: 'lichnyy-kabinet-dlya-klientov-2026', heroIcon: 'ph-fill ph-user-circle',
    title: 'Личный кабинет для клиентов: зачем он нужен и что внутри',
    metaTitle: 'Личный кабинет для клиентов: зачем и что внутри',
    metaDescription: 'Личный кабинет для клиентов на сайте: зачем он бизнесу, что обычно внутри (заказы, статусы, документы, оплата, поддержка), как это связать с CRM и сколько стоит разработка.',
    metaKeywords: 'личный кабинет для клиентов, разработка личного кабинета, кабинет клиента на сайте, клиентский портал, лк под ключ',
    excerpt: 'Зачем бизнесу личный кабинет клиента, что в нём обычно есть, как связать с CRM и оплатой и во сколько обходится разработка.',
    tags: ['личный кабинет', 'веб-разработка', 'CRM', 'клиенты'],
    toc: T([{ id: 'zachem', text: 'Зачем нужен личный кабинет' }, { id: 'chto-vnutri', text: 'Что обычно внутри' }, { id: 'integracii', text: 'Связка с CRM и оплатой' }, { id: 'cena', text: 'Сроки и цена' }]),
    relatedSlugs: ['razrabotka-erp-dlya-msb-2026', 'integraciya-api-na-zakaz-2026', 'sozdat-svoy-veb-servis-saas-2026'] }),

  E({ slug: 'saas-ili-korobka-chto-vybrat-2026', heroIcon: 'ph-fill ph-scales',
    title: 'SaaS или коробка: что выбрать для бизнеса',
    metaTitle: 'SaaS или коробочное решение: что выбрать',
    metaDescription: 'SaaS или коробочное решение: чем отличаются облачная подписка и своя установка, где данные и контроль, что дешевле в старте и в долгую и что выбрать под ваш бизнес.',
    metaKeywords: 'saas или коробка, saas или коробочное решение, облако или своя установка, что выбрать saas, коробочное по или облако',
    excerpt: 'Облачная подписка (SaaS) или коробка на своём сервере: где данные, что дешевле в старте и в долгую и что выбрать под конкретную задачу.',
    tags: ['SaaS', 'выбор', 'облако', 'софт'],
    toc: T([{ id: 'raznica', text: 'В чём разница' }, { id: 'sravnenie', text: 'Сравнение по 5 критериям' }, { id: 'komu-chto', text: 'Кому что подходит' }, { id: 'kak-reshit', text: 'Как решить' }]),
    relatedSlugs: ['sozdat-svoy-veb-servis-saas-2026', 'saas-pricing-2026', 'svoya-crm-na-servere-vs-oblachnaya-2026'] }),

  E({ slug: 'bot-vmesto-mobilnogo-prilozheniya-2026', heroIcon: 'ph-fill ph-robot',
    servicesOffer: SVC_DEV, ctaInternal: CTA_BOT,
    title: 'Бот вместо мобильного приложения: когда хватит бота',
    metaTitle: 'Бот вместо мобильного приложения: когда хватит',
    metaDescription: 'Бот вместо мобильного приложения: когда чат-бот или мини-приложение в мессенджере решает задачу дешевле и быстрее, чем нативное приложение, а когда без приложения не обойтись.',
    metaKeywords: 'бот вместо приложения, чат-бот или приложение, мини-приложение вместо мобильного, нужно ли мобильное приложение, бот или мобильное приложение',
    excerpt: 'Когда чат-бот или мини-приложение решает задачу дешевле и быстрее нативного приложения, а когда мобильное приложение всё же нужно.',
    tags: ['боты', 'мобильные приложения', 'выбор', 'экономия'],
    toc: T([{ id: 'v-chem-vopros', text: 'В чём выбор' }, { id: 'kogda-bota', text: 'Когда хватит бота' }, { id: 'kogda-prilozhenie', text: 'Когда нужно приложение' }, { id: 'cena', text: 'Разница в цене' }]),
    relatedSlugs: ['chat-bot-v-max-zakazat-2026', 'skolko-stoit-mobilnoe-prilozhenie-2026', 'pwa-iz-sayta-za-vyhodnye-2026'] }),

  E({ slug: 'telegram-mini-app-chto-eto-2026', heroIcon: 'ph-fill ph-app-window',
    servicesOffer: SVC_DEV, ctaInternal: CTA_BOT,
    title: 'Telegram Mini App: что это и когда заказывать',
    metaTitle: 'Telegram Mini App: что это и когда нужен',
    metaDescription: 'Telegram Mini App простыми словами: что это, чем отличается от обычного бота и от сайта, что можно сделать (магазин, запись, оплата, кабинет) и сколько стоит разработка.',
    metaKeywords: 'telegram mini app, мини-приложение telegram, tma разработка, mini app в телеграм, заказать telegram mini app',
    excerpt: 'Что такое Telegram Mini App, чем отличается от бота и сайта, что в нём делают (магазин, запись, оплата, кабинет) и во сколько обходится разработка.',
    tags: ['Telegram', 'Mini App', 'разработка', 'мессенджеры'],
    toc: T([{ id: 'chto-eto', text: 'Что такое Mini App' }, { id: 'otlichie', text: 'Чем отличается от бота и сайта' }, { id: 'primery', text: 'Что можно сделать' }, { id: 'cena', text: 'Сроки и цена' }]),
    relatedSlugs: ['max-mini-apps-2026', 'chat-bot-v-max-zakazat-2026', 'bot-vmesto-mobilnogo-prilozheniya-2026'] }),

  E({ slug: 'kak-zakazat-razrabotku-ne-poteryat-dengi-2026', heroIcon: 'ph-fill ph-shield-check',
    servicesOffer: SVC_TRUST, ctaInternal: CTA_DEV,
    title: 'Как заказать разработку и не потерять деньги: чек-лист договора',
    metaTitle: 'Как заказать разработку и не потерять деньги',
    metaDescription: 'Как заказать разработку и не потерять деньги: на что смотреть в договоре, как фиксировать объём и сроки, кому принадлежат исходники и как разбить оплату на этапы. Чек-лист заказчика.',
    metaKeywords: 'как заказать разработку, чек-лист договора на разработку, договор на разработку по, как не потерять деньги на разработке, оплата по этапам разработка',
    excerpt: 'На что смотреть в договоре на разработку, как фиксировать объём и сроки, чьи исходники и как разбить оплату по этапам, чтобы не потерять деньги.',
    tags: ['разработка', 'договор', 'заказчику', 'риски'],
    toc: T([{ id: 'strahi', text: 'Чего боятся заказчики' }, { id: 'cheklist', text: 'Чек-лист договора' }, { id: 'oplata', text: 'Оплата по этапам' }, { id: 'flagi', text: 'Красные флаги подрядчика' }]),
    relatedSlugs: ['etapy-razrabotki-posle-predoplaty-2026', 'nanyat-programmista-ili-pod-klyuch-2026', 'kak-vybrat-it-podryadchika-2027'] }),

  E({ slug: 'etapy-razrabotki-posle-predoplaty-2026', heroIcon: 'ph-fill ph-steps',
    servicesOffer: SVC_TRUST, ctaInternal: CTA_DEV,
    title: 'Этапы разработки: что происходит после предоплаты',
    metaTitle: 'Этапы разработки: что происходит после оплаты',
    metaDescription: 'Этапы разработки по шагам: что происходит после предоплаты — от ТЗ и прототипа до демо, тестирования, запуска и поддержки. Что заказчик видит и контролирует на каждом этапе.',
    metaKeywords: 'этапы разработки, этапы разработки сайта, что после предоплаты, процесс разработки по шагам, стадии разработки проекта',
    excerpt: 'Пошагово, что происходит после предоплаты: ТЗ, прототип, разработка, демо, тесты, запуск, поддержка — и что заказчик контролирует на каждом шаге.',
    tags: ['разработка', 'этапы', 'процесс', 'заказчику'],
    toc: T([{ id: 'zachem', text: 'Зачем знать этапы' }, { id: 'shagi', text: 'Этапы по шагам' }, { id: 'kontrol', text: 'Что контролирует заказчик' }, { id: 'sroki', text: 'Сколько занимает' }]),
    relatedSlugs: ['kak-zakazat-razrabotku-ne-poteryat-dengi-2026', 'kak-sostavit-tz-2026', 'skolko-stoit-chas-razrabotki-2026'] }),

  E({ slug: 'skolko-stoit-chas-razrabotki-2026', heroIcon: 'ph-fill ph-clock',
    servicesOffer: SVC_TRUST, ctaInternal: CTA_DEV,
    title: 'Сколько стоит час разработки и почему дёшево = дорого',
    metaTitle: 'Сколько стоит час разработки и почему дёшево дорого',
    metaDescription: 'Сколько стоит час работы программиста и из чего складывается цена разработки. Почему предложения «сайт за 3 дня и 10 тысяч» заканчиваются переделками и как оценить адекватную цену.',
    metaKeywords: 'сколько стоит час программиста, цена разработки, почему разработка дорогая, дешевая разработка сайта, ставка разработчика',
    excerpt: 'Из чего складывается час работы разработчика, почему «за 3 дня и 10к» оборачивается переделками и как отличить адекватную цену от опасно низкой.',
    tags: ['разработка', 'цена', 'заказчику', 'экономика'],
    toc: T([{ id: 'iz-chego', text: 'Из чего складывается час' }, { id: 'deshevo', text: 'Почему дёшево = дорого' }, { id: 'kak-ocenit', text: 'Как оценить адекватную цену' }, { id: 'ekonomiya', text: 'Где реально сэкономить' }]),
    relatedSlugs: ['skolko-stoit-razrabotka-po-2027', 'kak-zakazat-razrabotku-ne-poteryat-dengi-2026', 'nanyat-programmista-ili-pod-klyuch-2026'] }),
];
