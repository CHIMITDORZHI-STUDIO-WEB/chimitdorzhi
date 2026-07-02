// Батч 6 «зарубежный стартап, которого нет в России/Забайкалье» — бьюти/бытовые услуги.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-03';

const SVC = {
  title: 'Что я делаю под ключ',
  services: [
    { icon: 'ph-fill ph-code', label: 'Сайты и веб-приложения' },
    { icon: 'ph-fill ph-robot', label: 'Боты в Telegram и MAX, ИИ-агенты' },
    { icon: 'ph-fill ph-flow-arrow', label: 'Автоматизация и интеграции' },
    { icon: 'ph-fill ph-storefront', label: 'Маркетплейсы и платформы' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Внедрение и поддержка' },
  ],
  ctaLabel: 'Обсудить ваш проект',
  ctaUrl: 'https://t.me/chimitdorzhi',
};
const PRED = { url: 'https://chimitdorzhi.tech/predlozheniya/', label: 'Обсудить ваш проект' };
const TOC = [
  { id: 'chto-eto', text: 'Что это за модель за рубежом' },
  { id: 'pochemu-net-v-rf', text: 'Почему такого нет у нас' },
  { id: 'kak-mogla-by-vyglyadet', text: 'Как это могло бы выглядеть здесь' },
  { id: 'chto-nuzhno-dlya-zapuska', text: 'Что нужно для запуска' },
  { id: 'riski-i-slozhnosti', text: 'Риски и сложности' },
  { id: 'faq', text: 'FAQ' },
  { id: 'vyvody', text: 'Коротко о главном' },
];

const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D, readingMinutes: 5,
  servicesOffer: SVC, ctaInternal: PRED, category: 'industries', toc: TOC,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'marketplace-nezavisimyh-masterov-krasoty-2027', heroIcon: 'ph-fill ph-scissors',
    title: 'StyleSeat по-русски: маркетплейс независимых мастеров красоты с бронированием',
    metaTitle: 'StyleSeat по-русски: маркетплейс независимых мастеров',
    metaDescription: 'Разбираю модель зарубежного сервиса StyleSeat: платформа, где независимые мастера красоты (парикмахеры, мастера маникюра, визажисты) заводят профиль с портфолио, а клиенты находят их и бронируют время онлайн. Как такая платформа могла бы работать для мастеров без своего салона в России.',
    excerpt: 'Мастер без своего салона за рубежом заводит профиль на платформе — портфолио, отзывы, онлайн-запись — и получает клиентов напрямую. У нас такой мастер продвигается только через личные страницы в соцсетях. Разбираю модель StyleSeat.',
    tags: ['стартап-идея', 'маркетплейс', 'бьюти', 'бизнес-модель'],
    relatedSlugs: ['besplatnoe-bronirovanie-dlya-salona-2027', 'vsyo-v-odnom-dlya-mastera-odinochki-2027', 'vyezdnoy-byuti-master-na-dom-2027'] }),

  E({ slug: 'besplatnoe-bronirovanie-dlya-salona-2027', heroIcon: 'ph-fill ph-calendar-heart',
    title: 'Fresha по-русски: бесплатное бронирование для салона, доход с платежей',
    metaTitle: 'Бесплатное бронирование для салонов (аналог Fresha)',
    metaDescription: 'Разбираю модель зарубежного сервиса Fresha: система онлайн-записи для салонов красоты и спа предоставляется бесплатно, а сервис зарабатывает на обработке платежей и дополнительных платных функциях. Как такая модель монетизации могла бы работать для салонов в России.',
    excerpt: 'Система записи для салона бесплатна — сервис зарабатывает не на подписке, а на обработке платежей клиентов. За рубежом это распространённая модель, у нас салоны обычно платят за CRM отдельно. Разбираю модель Fresha.',
    tags: ['стартап-идея', 'SaaS', 'бьюти', 'бизнес-модель'],
    relatedSlugs: ['marketplace-nezavisimyh-masterov-krasoty-2027', 'vsyo-v-odnom-dlya-mastera-odinochki-2027', 'zakazat-chat-bota-zapis-cena-2027'] }),

  E({ slug: 'vsyo-v-odnom-dlya-mastera-odinochki-2027', heroIcon: 'ph-fill ph-sparkle',
    title: 'GlossGenius по-русски: запись, оплата и маркетинг для мастера-одиночки в одном приложении',
    metaTitle: 'Всё-в-одном для мастера-одиночки (аналог GlossGenius)',
    metaDescription: 'Разбираю модель зарубежного сервиса GlossGenius: приложение для мастера, работающего в одиночку (парикмахер, косметолог, бровист), которое объединяет онлайн-запись, приём оплаты, рассылки клиентам и простую аналитику в одном месте. Как такой инструмент мог бы работать для частных мастеров в России.',
    excerpt: 'Мастер, который работает один, обычно ведёт запись в блокноте или мессенджере и теряет клиентов. За рубежом есть простое приложение, которое закрывает запись, оплату и рассылки сразу. Разбираю модель GlossGenius.',
    tags: ['стартап-идея', 'SaaS', 'бьюти', 'бизнес-модель'],
    relatedSlugs: ['besplatnoe-bronirovanie-dlya-salona-2027', 'marketplace-nezavisimyh-masterov-krasoty-2027', 'iz-excel-v-crm-za-mesyac-2027'] }),

  E({ slug: 'vyezdnoy-byuti-master-na-dom-2027', heroIcon: 'ph-fill ph-lipstick',
    title: 'Glamsquad по-русски: выездной бьюти-мастер на дом по заказу',
    metaTitle: 'Выездной бьюти-мастер на дом (аналог Glamsquad)',
    metaDescription: 'Разбираю модель зарубежного сервиса Glamsquad: заказ визажиста или парикмахера на дом или в офис к определённому времени — перед мероприятием, свадьбой, фотосессией — через приложение с бронированием и оплатой. Как такая платформа могла бы работать в России.',
    excerpt: 'Нужен визажист перед мероприятием — за рубежом его заказывают на дом через приложение, как такси. У нас это решается через личные контакты и переписки. Разбираю модель Glamsquad и что нужно для запуска.',
    tags: ['стартап-идея', 'маркетплейс', 'бьюти', 'бизнес-модель'],
    relatedSlugs: ['marketplace-nezavisimyh-masterov-krasoty-2027', 'marketplace-bytovyh-uslug-na-dom-2027', 'zayavka-neskolko-predlozheniy-masterov-2027'] }),

  E({ slug: 'marketplace-bytovyh-uslug-na-dom-2027', heroIcon: 'ph-fill ph-wrench',
    title: 'Urban Company по-русски: маркетплейс бытовых услуг на дом в одном приложении',
    metaTitle: 'Маркетплейс бытовых услуг на дом (аналог Urban Company)',
    metaDescription: 'Разбираю модель зарубежного сервиса Urban Company: единое приложение, где можно заказать уборку, ремонт бытовой техники, услуги мастера на дому или салонные процедуры на дом с проверенными исполнителями и фиксированным качеством сервиса. Как такая платформа могла бы работать для города или региона в России.',
    excerpt: 'Уборка, ремонт техники, мастер на дом, бьюти-услуги — за рубежом всё это заказывают в одном приложении с проверенными исполнителями. У нас каждая услуга ищется отдельно и по-разному. Разбираю модель Urban Company.',
    tags: ['стартап-идея', 'маркетплейс', 'бытовые услуги', 'бизнес-модель'],
    relatedSlugs: ['vyezdnoy-byuti-master-na-dom-2027', 'uhod-za-gazonom-marketplace-2027', 'remont-podryadchiki-marketplace-2027'] }),

  E({ slug: 'uhod-za-gazonom-marketplace-2027', heroIcon: 'ph-fill ph-plant',
    title: 'LawnStarter по-русски: маркетплейс ухода за газоном и ландшафтом',
    metaTitle: 'Маркетплейс ухода за газоном (аналог LawnStarter)',
    metaDescription: 'Разбираю модель зарубежных сервисов TaskEasy и LawnStarter: платформа, где владелец дома или участка заказывает регулярный уход за газоном и ландшафтом у проверенных исполнителей с автоматическим повторным заказом по расписанию. Как такая модель могла бы работать для частных домов и дач в России.',
    excerpt: 'Регулярная стрижка газона по подписке с проверенным исполнителем — за рубежом это отдельный маркетплейс с автоматическим повтором заказа. У нас владельцы участков ищут садовника вручную каждый раз заново. Разбираю модель LawnStarter.',
    tags: ['стартап-идея', 'маркетплейс', 'бытовые услуги', 'бизнес-модель'],
    relatedSlugs: ['marketplace-bytovyh-uslug-na-dom-2027', 'remont-podryadchiki-marketplace-2027', 'sputnikovyy-monitoring-selskogo-hozyaystva-2027'] }),

  E({ slug: 'personalizirovannyy-shampun-pod-zakazchika-2027', heroIcon: 'ph-fill ph-drop',
    title: 'Function of Beauty по-русски: персонализированный шампунь, смешанный под вас',
    metaTitle: 'Function of Beauty по-русски: персонализированный шампунь',
    metaDescription: 'Разбираю модель зарубежного сервиса Function of Beauty: покупатель отвечает на вопросы о типе волос и целях ухода, формула шампуня и кондиционера смешивается индивидуально под него и присылается по подписке. Как такая производственная модель могла бы работать для российского рынка косметики.',
    excerpt: 'Ответил на вопросы о типе волос — получил шампунь, смешанный именно под тебя, а не «для всех типов волос» с полки. За рубежом это отдельная производственная модель. У нас такого почти нет. Разбираю Function of Beauty.',
    tags: ['стартап-идея', 'DTC', 'косметика', 'бизнес-модель'],
    relatedSlugs: ['marketplace-nezavisimyh-masterov-krasoty-2027', 'stilist-po-podpiske-korobka-odezhdy-2027', 'platforma-prodazhi-cifrovyh-produktov-2027'] }),

  E({ slug: 'koordinaciya-klinerov-mezhdu-zaezdami-2027', heroIcon: 'ph-fill ph-broom',
    title: 'Turno по-русски: SaaS-координация клинеров между заездами гостей посуточной аренды',
    metaTitle: 'Координация клинеров для посуточной аренды (аналог Turno)',
    metaDescription: 'Разбираю модель зарубежного сервиса Turno: SaaS для владельцев и управляющих компаний посуточной аренды, который автоматически ставит задачу клинеру сразу после выезда гостя и до заезда следующего, синхронизируясь с календарём бронирований. Как такая система могла бы работать для рынка посуточной аренды в России.',
    excerpt: 'У владельца посуточной квартиры между выездом одного гостя и заездом следующего — узкое окно на уборку. За рубежом это автоматизирует отдельный SaaS, синхронизированный с календарём броней. У нас это делается вручную. Разбираю модель Turno.',
    tags: ['стартап-идея', 'SaaS', 'недвижимость', 'бизнес-модель'],
    relatedSlugs: ['verifikaciya-gostey-kratkosrochnoy-arendy-2027', 'iot-platforma-dlya-arendodateley-2027', 'marketplace-bytovyh-uslug-na-dom-2027'] }),

  E({ slug: 'avtomatizaciya-pereezda-smena-adresa-2027', heroIcon: 'ph-fill ph-truck',
    title: 'Updater по-русски: автоматизация переезда — смена адреса и перенос коммунальных услуг',
    metaTitle: 'Updater по-русски: автоматизация переезда — смена адреса и',
    metaDescription: 'Разбираю модель зарубежного сервиса Updater: приложение, которое при переезде помогает автоматически оповестить нужные организации о смене адреса и перенести коммунальные и другие регулярные услуги на новый адрес, вместо ручного обзвона каждой службы. Как такой сервис мог бы работать в России.',
    excerpt: 'При переезде нужно оповестить с десяток организаций и перенести коммунальные услуги — за рубежом это делает одно приложение вместо ручного обзвона. У нас переезд остаётся квестом по звонкам. Разбираю модель Updater.',
    tags: ['стартап-идея', 'приложение', 'переезд', 'бизнес-модель'],
    relatedSlugs: ['marketplace-bytovyh-uslug-na-dom-2027', 'koordinaciya-klinerov-mezhdu-zaezdami-2027', 'iot-platforma-dlya-arendodateley-2027'] }),
];
