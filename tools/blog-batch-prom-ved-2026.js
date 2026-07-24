// Батч: производство + экспорт/платежи (ВЭД) + B2B/маркетплейс/HoReCa (8 статей ~4 мин, shortForm).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-22';
const SVC = 'https://chimitdorzhi.tech/services';

const SVC_PROM = {
  title: 'Автоматизация производства под ключ',
  services: [
    { icon: 'ph-fill ph-factory', label: 'MES и учёт производства' },
    { icon: 'ph-fill ph-squares-four', label: 'Заказы, план, склад, ОТК' },
    { icon: 'ph-fill ph-file-cad', label: 'Работа с чертежами и спецификациями' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция с 1С и оборудованием' },
  ],
  ctaLabel: 'Обсудить проект', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_VED = {
  title: 'ВЭД, платежи и экспорт под ключ',
  services: [
    { icon: 'ph-fill ph-globe-hemisphere-east', label: 'Работа с Китаем и зарубежьем' },
    { icon: 'ph-fill ph-currency-circle-dollar', label: 'Трансграничные платежи' },
    { icon: 'ph-fill ph-package', label: 'Экспорт и логистика' },
    { icon: 'ph-fill ph-file-text', label: 'Документы и сопровождение сделок' },
  ],
  ctaLabel: 'Обсудить ВЭД', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_B2B = {
  title: 'B2B и продажи под ключ',
  services: [
    { icon: 'ph-fill ph-buildings', label: 'B2B-портал и кабинет дилера' },
    { icon: 'ph-fill ph-address-book', label: 'CRM для оптовых продаж' },
    { icon: 'ph-fill ph-list-numbers', label: 'Прайсы и каталоги для дилеров' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграции с 1С и маркетплейсами' },
  ],
  ctaLabel: 'Обсудить B2B-проект', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_PAY = {
  title: 'Приём оплаты и платежи под ключ',
  services: [
    { icon: 'ph-fill ph-credit-card', label: 'Приём оплаты на сайте и в боте' },
    { icon: 'ph-fill ph-qr-code', label: 'Оплата и чаевые по QR' },
    { icon: 'ph-fill ph-receipt', label: 'Чеки по 54-ФЗ и самозанятым' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция с CRM и учётом' },
  ],
  ctaLabel: 'Настроить оплату', ctaUrl: 'https://t.me/chimitdorzhi',
};

const CTA_PROM = { url: `${SVC}/business-automation/`, label: 'Автоматизация производства' };
const CTA_VED = { url: `${SVC}/china-it/`, label: 'ВЭД под ключ' };
const CTA_B2B = { url: `${SVC}/business-automation/`, label: 'B2B под ключ' };
const CTA_DEV = { url: `${SVC}/web-development/`, label: 'Разработка под ключ' };
const CTA_PAY = { url: `${SVC}/web-development/`, label: 'Настроить приём оплаты' };

const T = (items) => items.concat([{ id: 'faq', text: 'FAQ' }, { id: 'vyvody', text: 'Коротко о главном' }]);

const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D,
  readingMinutes: 4, shortForm: true, servicesOffer: SVC_PROM, ctaInternal: CTA_PROM,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  // === Производство ===
  E({ slug: 'chertezhi-onlayn-dwg-pdf-2026', category: 'industries', heroIcon: 'ph-fill ph-ruler',
    servicesOffer: SVC_PROM, ctaInternal: CTA_PROM,
    title: 'Чертежи онлайн: как открыть и работать с DWG и PDF',
    metaTitle: 'Чертежи онлайн: открыть DWG и PDF без AutoCAD',
    metaDescription: 'Чертежи онлайн: как открыть и посмотреть DWG, DXF и PDF без AutoCAD, чем измерять и конвертировать, как согласовывать правки и автоматизировать работу конструкторского отдела.',
    metaKeywords: 'чертежи онлайн, открыть dwg онлайн, посмотреть чертеж dwg, dwg в pdf, работа с чертежами',
    excerpt: 'Как открыть и посмотреть DWG, DXF и PDF-чертежи без дорогого AutoCAD, чем измерять и конвертировать и как автоматизировать работу с чертежами в компании.',
    tags: ['чертежи', 'DWG', 'CAD', 'производство'],
    toc: T([{ id: 'chem-otkryt', text: 'Чем открыть DWG и PDF' }, { id: 'chto-mozhno', text: 'Что можно делать онлайн' }, { id: 'soglasovanie', text: 'Согласование правок' }, { id: 'avtomatizaciya', text: 'Автоматизация работы КБ' }]),
    relatedSlugs: ['mes-sistema-dlya-proizvodstva-2026', 'it-dlya-stroitelnyh-kompaniy-2026', 'integraciya-api-na-zakaz-2026'] }),

  E({ slug: 'mes-sistema-dlya-proizvodstva-2026', category: 'industries', heroIcon: 'ph-fill ph-factory',
    servicesOffer: SVC_PROM, ctaInternal: CTA_PROM,
    title: 'MES-система для производства: что это и когда нужна',
    metaTitle: 'MES-система для производства: что это и цена',
    metaDescription: 'MES-система и программа учёта производства: что это простыми словами, чем отличается от ERP и 1С, что автоматизирует (план, наряды, склад, ОТК) и когда нужна своя разработка.',
    metaKeywords: 'mes система, mes для производства, программа учета производства, автоматизация производства, производственный учет',
    excerpt: 'Что такое MES простыми словами, чем отличается от ERP и 1С, что автоматизирует на производстве (план, наряды, склад, ОТК) и когда нужна своя система.',
    tags: ['MES', 'производство', 'учёт', 'автоматизация'],
    toc: T([{ id: 'chto-eto', text: 'Что такое MES' }, { id: 'otlichie', text: 'Чем отличается от ERP и 1С' }, { id: 'chto-avtomatiziruet', text: 'Что автоматизирует' }, { id: 'svoya', text: 'Когда нужна своя' }]),
    relatedSlugs: ['chertezhi-onlayn-dwg-pdf-2026', 'razrabotka-erp-dlya-msb-2026', 'integraciya-api-na-zakaz-2026'] }),

  // === Экспорт / платежи (ВЭД) ===
  E({ slug: 'platezhi-iz-za-rubezha-2026', category: 'industries', heroIcon: 'ph-fill ph-currency-circle-dollar',
    servicesOffer: SVC_VED, ctaInternal: CTA_VED,
    title: 'Платежи из-за рубежа в 2026: как получать оплату',
    metaTitle: 'Платежи из-за рубежа 2026: как получать оплату',
    metaDescription: 'Как получать платежи из-за рубежа в 2026: какие способы работают (платёжные агенты, валютный счёт, крипта у некоторых), комиссии и сроки, валютный контроль и как обезопасить сделку.',
    metaKeywords: 'платежи из-за рубежа, получить оплату из-за границы, валютный платеж 2026, оплата от иностранного клиента, трансграничные платежи',
    excerpt: 'Какие способы получить оплату из-за рубежа работают в 2026, что с комиссиями, сроками и валютным контролем и как не потерять деньги на сделке.',
    tags: ['платежи', 'ВЭД', 'экспорт', 'валюта'],
    toc: T([{ id: 'sposoby', text: 'Какие способы работают' }, { id: 'agenty', text: 'Платёжные агенты' }, { id: 'kontrol', text: 'Валютный контроль' }, { id: 'riski', text: 'Риски и комиссии' }]),
    relatedSlugs: ['eksport-tovarov-iz-rossii-msb-2026', 'kak-platit-postavshchiku-v-kitay-2026', 'samozanyatyy-priem-oplaty-legalno-2026'] }),

  E({ slug: 'eksport-tovarov-iz-rossii-msb-2026', category: 'industries', heroIcon: 'ph-fill ph-package',
    servicesOffer: SVC_VED, ctaInternal: CTA_VED,
    title: 'Экспорт товаров из России для малого бизнеса: с чего начать',
    metaTitle: 'Экспорт из России для МСБ: с чего начать',
    metaDescription: 'Экспорт товаров из России для малого бизнеса: с чего начать, как найти покупателя за рубежом, оформить документы и получить оплату, какие есть меры поддержки экспортёров.',
    metaKeywords: 'экспорт товаров из россии, как начать экспорт, продавать за рубеж, экспорт для малого бизнеса, поддержка экспортеров',
    excerpt: 'С чего начать экспорт из России малому бизнесу: как найти покупателя за рубежом, оформить документы, получить оплату и какие есть меры поддержки.',
    tags: ['экспорт', 'ВЭД', 'малый бизнес', 'зарубеж'],
    toc: T([{ id: 's-chego-nachat', text: 'С чего начать' }, { id: 'pokupatel', text: 'Как найти покупателя' }, { id: 'dokumenty', text: 'Документы и оплата' }, { id: 'podderzhka', text: 'Меры поддержки' }]),
    relatedSlugs: ['platezhi-iz-za-rubezha-2026', 'tamozhennoe-oformlenie-importa-2026', 'kak-platit-postavshchiku-v-kitay-2026'] }),

  E({ slug: 'samozanyatyy-priem-oplaty-legalno-2026', category: 'finance', heroIcon: 'ph-fill ph-receipt',
    servicesOffer: SVC_PAY, ctaInternal: CTA_PAY,
    title: 'Самозанятый: как принимать оплату легально в 2026',
    metaTitle: 'Самозанятый: как принимать оплату легально',
    metaDescription: 'Как самозанятому принимать оплату легально в 2026: какие способы можно (карта, СБП, ссылка на оплату), как формировать чеки в «Мой налог», нужна ли касса и как принимать оплату на сайте.',
    metaKeywords: 'самозанятый прием оплаты, как самозанятому принимать оплату, чек самозанятого, оплата на карту самозанятый, самозанятый касса',
    excerpt: 'Какие способы приёма оплаты доступны самозанятому, как формировать чеки, нужна ли касса и как принимать оплату на сайте, не нарушая закон.',
    tags: ['самозанятый', 'оплата', 'чеки', 'финансы'],
    toc: T([{ id: 'sposoby', text: 'Какие способы можно' }, { id: 'cheki', text: 'Как формировать чеки' }, { id: 'kassa', text: 'Нужна ли касса' }, { id: 'na-sayte', text: 'Приём оплаты на сайте' }]),
    relatedSlugs: ['priem-oplaty-na-sayt-yukassa-2026', 'chaevye-po-qr-kodu-2026', 'onlayn-buhgalteriya-sravnenie-2026'] }),

  // === B2B / маркетплейс / HoReCa ===
  E({ slug: 'crm-dlya-optovyh-prodazh-2026', category: 'development', heroIcon: 'ph-fill ph-address-book',
    servicesOffer: SVC_B2B, ctaInternal: CTA_B2B,
    title: 'CRM для оптовых продаж: дилеры, прайсы и повторные заказы',
    metaTitle: 'CRM для оптовых продаж: дилеры и прайсы',
    metaDescription: 'CRM для оптовых продаж: чем опт отличается от розницы, что должна уметь система (дилеры, персональные прайсы, повторные заказы, дебиторка), связка с 1С и когда нужна своя.',
    metaKeywords: 'crm для оптовых продаж, crm для опта, crm для дилеров, оптовые продажи автоматизация, прайс для дилеров',
    excerpt: 'Чем оптовые продажи отличаются от розницы, что должна уметь CRM для опта (дилеры, персональные прайсы, повторные заказы, дебиторка) и когда нужна своя.',
    tags: ['CRM', 'опт', 'дилеры', 'B2B'],
    toc: T([{ id: 'chem-otlichaetsya', text: 'Чем опт отличается от розницы' }, { id: 'chto-dolzhna', text: 'Что должна уметь CRM' }, { id: 'praysy', text: 'Персональные прайсы для дилеров' }, { id: 'svoya', text: 'Готовая или своя' }]),
    relatedSlugs: ['b2b-portal-optoviki', 'integraciya-api-na-zakaz-2026', 'svoya-crm-na-servere-vs-oblachnaya-2026'] }),

  E({ slug: 'fulfilment-dlya-marketpleysov-2026', category: 'industries', heroIcon: 'ph-fill ph-package',
    servicesOffer: SVC_B2B, ctaInternal: CTA_B2B,
    title: 'Фулфилмент для маркетплейсов: что это и как выбрать',
    metaTitle: 'Фулфилмент для маркетплейсов: что это, выбор',
    metaDescription: 'Фулфилмент для маркетплейсов: что это простыми словами, чем отличается FBO и FBS, что делает фулфилмент-оператор, из чего складывается цена и как автоматизировать учёт поставок.',
    metaKeywords: 'фулфилмент для маркетплейсов, фулфилмент wildberries ozon, fbo fbs отличия, фулфилмент оператор, услуги фулфилмента',
    excerpt: 'Что такое фулфилмент простыми словами, чем отличается FBO и FBS, что делает оператор, из чего цена и как автоматизировать учёт поставок.',
    tags: ['фулфилмент', 'маркетплейсы', 'логистика', 'селлерам'],
    toc: T([{ id: 'chto-eto', text: 'Что такое фулфилмент' }, { id: 'fbo-fbs', text: 'FBO и FBS: разница' }, { id: 'cena', text: 'Из чего цена' }, { id: 'avtomatizaciya', text: 'Автоматизация учёта' }]),
    relatedSlugs: ['analitika-wildberries-servisy-2026', 'integraciya-wildberries-1c-2026', 'biznes-na-marketpleysah-2027'] }),

  E({ slug: 'chaevye-po-qr-kodu-2026', category: 'industries', heroIcon: 'ph-fill ph-qr-code',
    servicesOffer: SVC_PAY, ctaInternal: CTA_PAY,
    title: 'Чаевые по QR-коду: как подключить в кафе и салоне',
    metaTitle: 'Чаевые по QR-коду: как подключить в заведении',
    metaDescription: 'Чаевые по QR-коду: как это работает, какие сервисы есть, сколько берут комиссии, как распределять чаевые между сотрудниками и как сделать свой сервис безналичных чаевых.',
    metaKeywords: 'чаевые по qr, безналичные чаевые, qr код для чаевых, сервис чаевых, чаевые в кафе qr',
    excerpt: 'Как работают безналичные чаевые по QR, какие сервисы есть и сколько берут, как распределять их между сотрудниками и когда выгодно сделать свой сервис.',
    tags: ['чаевые', 'QR', 'HoReCa', 'платежи'],
    toc: T([{ id: 'kak-rabotaet', text: 'Как это работает' }, { id: 'servisy', text: 'Сервисы и комиссии' }, { id: 'raspredelenie', text: 'Распределение между сотрудниками' }, { id: 'svoy', text: 'Когда нужен свой сервис' }]),
    relatedSlugs: ['samozanyatyy-priem-oplaty-legalno-2026', 'elektronnoe-qr-menyu-dlya-kafe-2026', 'programma-loyalnosti-kafe-salon-2026'] }),
];
