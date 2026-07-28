// Батч: сравнения «X vs Y» (6 статей ~4 мин, shortForm).
// В каждой: таблица TCO за 3 года + блок «когда ни то ни другое не подходит» → третий путь и мы.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-22';
const SVC = 'https://chimitdorzhi.tech/services';

const SVC_BIZ = {
  title: 'Помогу выбрать и внедрить',
  services: [
    { icon: 'ph-fill ph-scales', label: 'Подбор решения под ваш процесс' },
    { icon: 'ph-fill ph-calculator', label: 'Расчёт стоимости владения (TCO)' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Внедрение и интеграции' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Поддержка после запуска' },
  ],
  ctaLabel: 'Обсудить выбор', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_CRM = {
  title: 'CRM и учёт под ключ',
  services: [
    { icon: 'ph-fill ph-address-book', label: 'Внедрение CRM под ваш процесс' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция с 1С, сайтом, кассой' },
    { icon: 'ph-fill ph-arrows-left-right', label: 'Перенос данных без потерь' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Обучение и поддержка' },
  ],
  ctaLabel: 'Обсудить внедрение', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_WEB = {
  title: 'Сайт под ключ',
  services: [
    { icon: 'ph-fill ph-globe', label: 'Сайт на конструкторе или на коде' },
    { icon: 'ph-fill ph-arrows-clockwise', label: 'Перенос с конструктора' },
    { icon: 'ph-fill ph-magnifying-glass', label: 'SEO и скорость' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Поддержка и доработки' },
  ],
  ctaLabel: 'Обсудить сайт', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_PAY = {
  title: 'Приём платежей под ключ',
  services: [
    { icon: 'ph-fill ph-credit-card', label: 'Эквайринг и СБП на сайте' },
    { icon: 'ph-fill ph-receipt', label: 'Чеки по 54-ФЗ' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Связка с CRM и учётом' },
    { icon: 'ph-fill ph-chart-line', label: 'Аналитика платежей' },
  ],
  ctaLabel: 'Настроить оплату', ctaUrl: 'https://t.me/chimitdorzhi',
};

const CTA_BIZ = { url: `${SVC}/business-automation/`, label: 'Помогу выбрать и внедрить' };
const CTA_CRM = { url: `${SVC}/business-automation/`, label: 'Внедрение CRM' };
const CTA_WEB = { url: `${SVC}/web-development/`, label: 'Заказать сайт' };
const CTA_PAY = { url: `${SVC}/web-development/`, label: 'Настроить приём оплаты' };
const CTA_DEV = { url: `${SVC}/web-development/`, label: 'Обсудить разработку' };

const T = (items) => items.concat([{ id: 'faq', text: 'FAQ' }, { id: 'vyvody', text: 'Коротко о главном' }]);

const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D,
  readingMinutes: 4, shortForm: true, servicesOffer: SVC_BIZ, ctaInternal: CTA_BIZ,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'samozanyatyy-ili-ip-2026', category: 'finance', heroIcon: 'ph-fill ph-scales',
    servicesOffer: SVC_BIZ, ctaInternal: CTA_BIZ,
    title: 'Самозанятый или ИП в 2026: что выбрать и когда нужно ООО',
    metaTitle: 'Самозанятый или ИП: что выбрать в 2026',
    metaDescription: 'Самозанятый или ИП в 2026: чем отличаются по налогам, лимитам и работе с клиентами, что выбрать под свою ситуацию, когда пора переходить на ИП и в каких случаях нужно ООО.',
    metaKeywords: 'самозанятый или ип, что выбрать самозанятость или ип, отличия самозанятого от ип, ип или ооо, переход с самозанятого на ип',
    excerpt: 'Чем самозанятость отличается от ИП по налогам, лимитам и работе с клиентами, что выбрать под свою ситуацию и когда пора переходить на ИП или ООО.',
    tags: ['самозанятый', 'ИП', 'налоги', 'выбор'],
    toc: T([{ id: 'raznica', text: 'В чём разница' }, { id: 'sravnenie', text: 'Сравнение по критериям' }, { id: 'komu-chto', text: 'Кому что подходит' }, { id: 'ooo', text: 'Когда нужно ООО' }]),
    relatedSlugs: ['patent-ili-usn-dlya-ip-2026', 'samozanyatyy-priem-oplaty-legalno-2026', 'onlayn-buhgalteriya-sravnenie-2026'] }),

  E({ slug: 'tilda-ili-wordpress-2026', category: 'development', heroIcon: 'ph-fill ph-browsers',
    servicesOffer: SVC_WEB, ctaInternal: CTA_WEB,
    title: 'Тильда или WordPress: что выбрать для сайта бизнеса',
    metaTitle: 'Тильда или WordPress: что выбрать для сайта',
    metaDescription: 'Тильда или WordPress: чем отличаются по стоимости владения, скорости запуска, SEO и свободе доработок, кому что подходит и во что обойдётся каждый вариант за три года.',
    metaKeywords: 'тильда или wordpress, что лучше тильда или вордпресс, сайт на тильде или wordpress, конструктор или cms, выбор платформы для сайта',
    excerpt: 'Чем Тильда отличается от WordPress по стоимости владения, скорости запуска, SEO и свободе доработок — и что выбрать под свою задачу.',
    tags: ['Тильда', 'WordPress', 'сайт', 'сравнение'],
    toc: T([{ id: 'raznica', text: 'В чём принципиальная разница' }, { id: 'sravnenie', text: 'Сравнение по критериям' }, { id: 'tco', text: 'Стоимость владения за 3 года' }, { id: 'tretiy-put', text: 'Когда не подходит ни то, ни другое' }]),
    relatedSlugs: ['tilda-vs-kastomnaya-razrabotka-2026', 'uyti-s-tildy-wix-na-svoy-sayt-2027', 'skolko-stoit-sayt-2026'] }),

  E({ slug: 'amocrm-ili-bitrix24-2026', category: 'development', heroIcon: 'ph-fill ph-address-book',
    servicesOffer: SVC_CRM, ctaInternal: CTA_CRM,
    title: 'amoCRM или Битрикс24: что выбрать под отдел продаж',
    metaTitle: 'amoCRM или Битрикс24: что выбрать бизнесу',
    metaDescription: 'amoCRM или Битрикс24: чем отличаются по логике работы, сложности внедрения, интеграциям и стоимости владения, кому какая система подходит и когда нужна своя CRM.',
    metaKeywords: 'amocrm или битрикс24, что лучше amocrm или bitrix24, выбор crm системы, сравнение crm, внедрение crm',
    excerpt: 'Чем amoCRM отличается от Битрикс24 по логике работы, сложности внедрения и стоимости владения, кому что подходит и когда нужна своя система.',
    tags: ['CRM', 'amoCRM', 'Битрикс24', 'сравнение'],
    toc: T([{ id: 'raznica', text: 'Разная философия систем' }, { id: 'sravnenie', text: 'Сравнение по критериям' }, { id: 'tco', text: 'Стоимость владения за 3 года' }, { id: 'tretiy-put', text: 'Когда не подходит ни то, ни другое' }]),
    relatedSlugs: ['1c-ili-bitrix24-2026', 'crm-dlya-optovyh-prodazh-2026', 'svoya-crm-na-servere-vs-oblachnaya-2026'] }),

  E({ slug: '1c-ili-bitrix24-2026', category: 'development', heroIcon: 'ph-fill ph-squares-four',
    servicesOffer: SVC_CRM, ctaInternal: CTA_CRM,
    title: '1С или Битрикс24: где вести учёт, а где продажи',
    metaTitle: '1С или Битрикс24: что выбрать бизнесу',
    metaDescription: '1С или Битрикс24: чем отличаются задачи систем (учёт и деньги против продаж и коммуникаций), нужно ли выбирать вообще, как их связать между собой и во сколько обойдётся владение.',
    metaKeywords: '1с или битрикс24, что выбрать 1с или bitrix24, связка 1с и битрикс24, учет или crm, интеграция 1с и crm',
    excerpt: 'Чем 1С отличается от Битрикс24 по задачам, нужно ли выбирать между ними вообще, как их связать и во сколько обойдётся владение обеими системами.',
    tags: ['1С', 'Битрикс24', 'учёт', 'CRM'],
    toc: T([{ id: 'raznica', text: 'Это системы про разное' }, { id: 'sravnenie', text: 'Сравнение по задачам' }, { id: 'tco', text: 'Стоимость владения за 3 года' }, { id: 'tretiy-put', text: 'Связка вместо выбора' }]),
    relatedSlugs: ['amocrm-ili-bitrix24-2026', 'integraciya-sayta-s-1c-2026', 'rezervnoe-kopirovanie-1c-2026'] }),

  E({ slug: 'ekvayring-ili-sbp-2026', category: 'finance', heroIcon: 'ph-fill ph-credit-card',
    servicesOffer: SVC_PAY, ctaInternal: CTA_PAY,
    title: 'Эквайринг или СБП: что дешевле для приёма оплаты',
    metaTitle: 'Эквайринг или СБП: что дешевле бизнесу',
    metaDescription: 'Эквайринг или СБП: чем отличаются по комиссии, скорости зачисления, возвратам и удобству для клиента, что дешевле бизнесу и почему выгоднее подключить оба способа сразу.',
    metaKeywords: 'эквайринг или сбп, что дешевле сбп или эквайринг, комиссия сбп, прием оплаты бизнес, оплата по qr коду',
    excerpt: 'Чем эквайринг отличается от СБП по комиссии, скорости зачисления и возвратам, что дешевле бизнесу и почему обычно подключают оба способа.',
    tags: ['эквайринг', 'СБП', 'платежи', 'сравнение'],
    toc: T([{ id: 'raznica', text: 'В чём разница' }, { id: 'sravnenie', text: 'Сравнение по критериям' }, { id: 'raschet', text: 'Расчёт экономии на обороте' }, { id: 'tretiy-put', text: 'Почему обычно нужны оба' }]),
    relatedSlugs: ['priem-oplaty-na-sayt-yukassa-2026', 'samozanyatyy-priem-oplaty-legalno-2026', 'chaevye-po-qr-kodu-2026'] }),

  E({ slug: 'svoya-razrabotka-ili-gotovoe-tco-2026', category: 'development', heroIcon: 'ph-fill ph-calculator',
    servicesOffer: SVC_BIZ, ctaInternal: CTA_DEV,
    title: 'Своя разработка или готовое решение: считаем TCO за 3 года',
    metaTitle: 'Своя разработка или готовое: TCO за 3 года',
    metaDescription: 'Своя разработка или готовое решение: как считать полную стоимость владения за три года (лицензии, доработки, поддержка, миграция), а не цену покупки, и когда своё дешевле готового.',
    metaKeywords: 'своя разработка или готовое решение, tco стоимость владения, купить или разработать, коробка или своя система, стоимость владения по',
    excerpt: 'Как считать полную стоимость владения за три года вместо цены покупки: лицензии, доработки, поддержка, миграция — и когда своя разработка выходит дешевле.',
    tags: ['TCO', 'разработка', 'выбор', 'экономика'],
    toc: T([{ id: 'oshibka', text: 'Главная ошибка при выборе' }, { id: 'iz-chego', text: 'Из чего складывается TCO' }, { id: 'tco', text: 'Расчёт за 3 года' }, { id: 'kogda-svoe', text: 'Когда своё дешевле' }]),
    relatedSlugs: ['saas-ili-korobka-chto-vybrat-2026', 'sozdat-svoy-veb-servis-saas-2026', 'skolko-stoit-chas-razrabotki-2026'] }),
];
