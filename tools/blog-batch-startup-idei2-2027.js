// Батч 2 «зарубежный стартап, которого нет в России/Забайкалье».
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-02';

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
  E({ slug: 'hranenie-veshchey-u-sosedey-2027', heroIcon: 'ph-fill ph-warehouse',
    title: 'Neighbor.com по-русски: маркетплейс хранения вещей у соседей',
    metaTitle: 'Маркетплейс хранения вещей (аналог Neighbor.com)',
    metaDescription: 'Разбираю модель зарубежного сервиса Neighbor.com: маркетплейс, где люди сдают свободный гараж, подвал или кладовку под хранение вещей соседям вместо аренды дорогого склада. Почему такого сервиса нет в России и как выглядела бы такая платформа.',
    excerpt: 'За рубежом можно сдать пустой гараж под хранение чужих вещей и получать доход, а не арендовать склад втридорога. У нас такой платформы нет. Разбираю модель Neighbor.com и что нужно для запуска.',
    tags: ['стартап-идея', 'маркетплейс', 'шеринг пространства', 'бизнес-модель'],
    relatedSlugs: ['besplatnyy-obmen-veshchami-rayon-2027', 'pochasovaya-arenda-ploshchadok-meropriyatiy-2027', 'darkstory-momentalnaya-dostavka-2027'] }),

  E({ slug: 'perevozka-detey-proverennymi-voditelyami-2027', heroIcon: 'ph-fill ph-car-simple',
    title: 'HopSkipDrive по-русски: перевозка детей проверенными водителями',
    metaTitle: 'Сервис перевозки детей (аналог HopSkipDrive)',
    metaDescription: 'Разбираю модель зарубежного сервиса HopSkipDrive: такси для детей с водителями, прошедшими углублённую проверку, и уведомлениями родителям в реальном времени. Почему в России этого сервиса нет и как он мог бы работать с учётом требований безопасности.',
    excerpt: 'Отвезти ребёнка на кружок, когда родители на работе, — за рубежом для этого есть отдельный сервис с проверенными водителями. У нас родители справляются сами. Разбираю модель HopSkipDrive и её ограничения.',
    tags: ['стартап-идея', 'маркетплейс услуг', 'семья', 'бизнес-модель'],
    relatedSlugs: ['nyani-sidelki-marketplace-2027', 'semeynoe-prilozhenie-geolokacii-2027', 'arenda-avto-mezhdu-chastnymi-vladeltsami-2027'] }),

  E({ slug: 'marketplace-vremennogo-personala-2027', heroIcon: 'ph-fill ph-users-four',
    title: 'Wonolo и Instawork по-русски: маркетплейс временного персонала на смену',
    metaTitle: 'Маркетплейс временного персонала (аналог Wonolo/Instawork)',
    metaDescription: 'Разбираю модель зарубежных сервисов Wonolo и Instawork: платформа, где бизнес закрывает смену на склад, кухню или мероприятие проверенным временным сотрудником за считанные часы. Почему в России этот рынок держится на объявлениях и как выглядела бы такая платформа.',
    excerpt: 'Нужен человек на смену завтра утром — за рубежом это закрывается за пару часов через приложение. У нас это звонки знакомым и объявления. Разбираю модель Wonolo/Instawork для бизнеса.',
    tags: ['стартап-идея', 'маркетплейс', 'подработка', 'бизнес-модель'],
    relatedSlugs: ['marketplace-melkih-poruchenij-2027', 'zayavka-neskolko-predlozheniy-masterov-2027', 'pos-sistema-dlya-restorana-pod-klyuch-2027'] }),

  E({ slug: 'telemedicina-dlya-zhivotnyh-2027', heroIcon: 'ph-fill ph-first-aid-kit',
    title: 'Vetster по-русски: телемедицина для животных',
    metaTitle: 'Телемедицина для животных (аналог Vetster)',
    metaDescription: 'Разбираю модель зарубежного сервиса Vetster: онлайн-консультации ветеринара по видеосвязи для быстрых вопросов о здоровье питомца без визита в клинику. Как такая платформа могла бы работать в России и почему это не заменяет очный приём. Образовательный разбор, не ветеринарная консультация.',
    excerpt: 'Питомец странно себя ведёт ночью, а клиника закрыта — за рубежом можно созвониться с ветеринаром онлайн за пару минут. У нас такой площадки нет. Разбираю модель Vetster и её реальные границы.',
    tags: ['стартап-идея', 'телемедицина', 'зоо-бизнес', 'бизнес-модель'],
    relatedSlugs: ['vygul-sobak-marketplace-2027', 'nyani-sidelki-marketplace-2027', 'marketplace-onlayn-psihologov-2027'] }),

  E({ slug: 'marketplace-onlayn-psihologov-2027', heroIcon: 'ph-fill ph-chat-circle-dots',
    title: 'BetterHelp и Talkspace по-русски: маркетплейс онлайн-психологов по подписке',
    metaTitle: 'Маркетплейс онлайн-психологов (аналог BetterHelp/Talkspace)',
    metaDescription: 'Разбираю модель зарубежных сервисов BetterHelp и Talkspace: платформа, которая подбирает психолога под запрос клиента и даёт доступ к переписке и созвонам по подписке. Как такая модель могла бы работать в России и какие вопросы к ней стоит задавать при выборе. Образовательный разбор, не медицинская консультация.',
    excerpt: 'Найти психолога под свой запрос и формат за рубежом можно через одну платформу с подбором и подпиской. У нас поиск идёт вручную по разрозненным профилям. Разбираю модель BetterHelp/Talkspace и её нюансы.',
    tags: ['стартап-идея', 'маркетплейс', 'ментальное здоровье', 'бизнес-модель'],
    relatedSlugs: ['telemedicina-dlya-zhivotnyh-2027', 'nyani-sidelki-marketplace-2027', 'marketplace-detskih-onlayn-zanyatiy-2027'] }),

  E({ slug: 'stilist-po-podpiske-korobka-odezhdy-2027', heroIcon: 'ph-fill ph-t-shirt',
    title: 'StitchFix по-русски: персональный стилист присылает коробку одежды по подписке',
    metaTitle: 'Стилист по подписке (аналог StitchFix)',
    metaDescription: 'Разбираю модель зарубежного сервиса StitchFix: подписчик заполняет анкету о стиле и размере, стилист подбирает и присылает коробку вещей, клиент оставляет то, что понравилось, и возвращает остальное. Почему такой модели почти нет в России и что нужно для запуска.',
    excerpt: 'Заполнил анкету о стиле — раз в месяц получаешь коробку подобранной одежды, оставляешь что понравилось. За рубежом это целая индустрия подписок. У нас почти нет. Разбираю модель StitchFix.',
    tags: ['стартап-идея', 'подписка', 'мода', 'бизнес-модель'],
    relatedSlugs: ['marketplace-pereprodazhi-odezhdy-2027', 'nabory-dlya-gotovki-s-receptom-2027', 'marketplace-dizaynerskoy-mebeli-2027'] }),

  E({ slug: 'nabory-dlya-gotovki-s-receptom-2027', heroIcon: 'ph-fill ph-cooking-pot',
    title: 'Blue Apron и HelloFresh по-русски: наборы продуктов с рецептом для готовки дома',
    metaTitle: 'Наборы для готовки по рецепту (аналог Blue Apron/HelloFresh)',
    metaDescription: 'Разбираю модель зарубежных сервисов Blue Apron и HelloFresh: подписка на еженедельную доставку набора продуктов точно по граммовке под конкретный рецепт, чтобы готовить дома без похода в магазин. Почему такой формат подписки почти не встречается в России и что нужно для запуска.',
    excerpt: 'Каждую неделю на дом привозят продукты точно под рецепт ужина — готовь и не думай о покупках. За рубежом это целая индустрия подписок. У нас формат почти не прижился. Разбираю модель Blue Apron/HelloFresh.',
    tags: ['стартап-идея', 'подписка', 'доставка еды', 'бизнес-модель'],
    relatedSlugs: ['domashnie-uzhiny-ot-lokalnyh-povarov-2027', 'darkstory-momentalnaya-dostavka-2027', 'stilist-po-podpiske-korobka-odezhdy-2027'] }),

  E({ slug: 'marketplace-dizaynerskoy-mebeli-2027', heroIcon: 'ph-fill ph-armchair',
    title: 'Chairish и 1stDibs по-русски: маркетплейс дизайнерской и винтажной мебели',
    metaTitle: 'Маркетплейс дизайнерской мебели (аналог Chairish/1stDibs)',
    metaDescription: 'Разбираю модель зарубежных сервисов Chairish и 1stDibs: маркетплейс, где продают и покупают дизайнерскую, винтажную и антикварную мебель между частными людьми и дилерами с экспертной оценкой подлинности. Почему в России эта ниша размыта между общими барахолками.',
    excerpt: 'Продать или найти действительно ценный предмет мебели за рубежом можно на специализированном маркетплейсе с оценкой подлинности. У нас это тонет среди общих объявлений. Разбираю модель Chairish/1stDibs.',
    tags: ['стартап-идея', 'маркетплейс', 'дизайн интерьера', 'бизнес-модель'],
    relatedSlugs: ['marketplace-pereprodazhi-s-proverkoy-podlinnosti-2027', 'stilist-po-podpiske-korobka-odezhdy-2027', 'optovyy-marketplace-lokalnyh-brendov-2027'] }),

  E({ slug: 'domashnie-uzhiny-ot-lokalnyh-povarov-2027', heroIcon: 'ph-fill ph-bowl-food',
    title: 'Feastly и EatWith по-русски: домашние ужины от локальных поваров',
    metaTitle: 'Платформа домашних ужинов (аналог Feastly/EatWith)',
    metaDescription: 'Разбираю модель зарубежных сервисов Feastly и EatWith: платформа, где домашние повара и энтузиасты кулинарии продают места за своим столом незнакомым гостям, объединяя ужин и знакомство. Как такая модель могла бы работать в России с учётом требований к безопасности питания.',
    excerpt: 'Прийти на ужин, который готовит незнакомый человек у себя дома, и познакомиться с другими гостями — за рубежом это отдельный жанр платформ. У нас формата почти нет. Разбираю модель Feastly/EatWith.',
    tags: ['стартап-идея', 'маркетплейс', 'гастрономия', 'бизнес-модель'],
    relatedSlugs: ['nabory-dlya-gotovki-s-receptom-2027', 'marketplace-vpechatleniy-i-ekskursiy-2027', 'pos-sistema-dlya-restorana-pod-klyuch-2027'] }),

  E({ slug: 'marketplace-vpechatleniy-i-ekskursiy-2027', heroIcon: 'ph-fill ph-map-trifold',
    title: 'Airbnb Experiences по-русски: маркетплейс впечатлений от местных жителей',
    metaTitle: 'Маркетплейс впечатлений и экскурсий (аналог Airbnb Experiences)',
    metaDescription: 'Разбираю модель зарубежного сервиса Airbnb Experiences: маркетплейс, где местные жители сами проводят авторские экскурсии, мастер-классы и активности для гостей города — не турагентство, а прямая связь с локальным экспертом. Как это выглядело бы для российских туристических городов.',
    excerpt: 'В любом городе за рубежом можно заказать необычную экскурсию напрямую у местного жителя через одну платформу. У нас это либо крупные турагентства, либо случайные знакомства. Разбираю модель Airbnb Experiences.',
    tags: ['стартап-идея', 'маркетплейс', 'туризм', 'бизнес-модель'],
    relatedSlugs: ['domashnie-uzhiny-ot-lokalnyh-povarov-2027', 'pochasovaya-arenda-ploshchadok-meropriyatiy-2027', 'personalnye-videoobrashcheniya-ot-blogerov-2027'] }),

  E({ slug: 'marketplace-detskih-onlayn-zanyatiy-2027', heroIcon: 'ph-fill ph-chalkboard-teacher',
    title: 'Outschool по-русски: маркетплейс детских онлайн-занятий от частных педагогов',
    metaTitle: 'Маркетплейс детских онлайн-занятий (аналог Outschool)',
    metaDescription: 'Разбираю модель зарубежного сервиса Outschool: маркетплейс живых онлайн-занятий для детей на любую тему — от математики до аниме-рисования — которые ведут частные преподаватели небольшими группами. Почему в России этот формат раздроблен и как выглядела бы единая платформа.',
    excerpt: 'За рубежом ребёнок может записаться на живое онлайн-занятие почти по любой теме у частного преподавателя через один маркетплейс. У нас поиск такого занятия — квест по разным сайтам. Разбираю модель Outschool.',
    tags: ['стартап-идея', 'маркетплейс', 'образование', 'бизнес-модель'],
    relatedSlugs: ['marketplace-onlayn-psihologov-2027', 'perevozka-detey-proverennymi-voditelyami-2027', 'platforma-prodazhi-cifrovyh-produktov-2027'] }),

  E({ slug: 'semeynoe-prilozhenie-geolokacii-2027', heroIcon: 'ph-fill ph-map-pin',
    title: 'Life360 по-русски: семейное приложение геолокации и безопасности',
    metaTitle: 'Семейное приложение геолокации (аналог Life360)',
    metaDescription: 'Разбираю модель зарубежного приложения Life360: семейная геолокация с уведомлениями о прибытии домой, зонами безопасности и экстренными сигналами — не слежка, а инструмент спокойствия для родителей и пожилых родственников. Как такое приложение могло бы работать в России.',
    excerpt: 'Родители хотят знать, что ребёнок доехал до школы, а взрослые дети — что пожилой родитель дома. За рубежом для этого есть удобное семейное приложение. У нас решают кто во что горазд. Разбираю модель Life360.',
    tags: ['стартап-идея', 'приложение', 'семья', 'бизнес-модель'],
    relatedSlugs: ['perevozka-detey-proverennymi-voditelyami-2027', 'nyani-sidelki-marketplace-2027', 'socset-dlya-sosedey-rayona-2027'] }),

  E({ slug: 'darkstory-momentalnaya-dostavka-2027', heroIcon: 'ph-fill ph-lightning',
    title: 'Getir и Gorillas по-русски: мини-дарксторы мгновенной доставки в жилых районах',
    metaTitle: 'Мини-дарксторы мгновенной доставки (аналог Getir/Gorillas)',
    metaDescription: 'Разбираю модель зарубежных сервисов Getir и Gorillas: сеть небольших складов-дарксторов в жилых районах, откуда курьер довозит заказ за 10-15 минут — быстрее, чем обычная доставка из супермаркета. Как эта модель могла бы работать в российских городах и посёлках.',
    excerpt: 'Заказ из мини-склада в своём же квартале привозят за 10-15 минут — за рубежом это целая сеть дарксторов. У нас такая скорость пока редкость за пределами крупных городов. Разбираю модель Getir/Gorillas.',
    tags: ['стартап-идея', 'даркстор', 'доставка', 'бизнес-модель'],
    relatedSlugs: ['hranenie-veshchey-u-sosedey-2027', 'nabory-dlya-gotovki-s-receptom-2027', 'pos-sistema-dlya-restorana-pod-klyuch-2027'] }),

  E({ slug: 'pos-sistema-dlya-restorana-pod-klyuch-2027', heroIcon: 'ph-fill ph-cash-register',
    title: 'Toast по-русски: POS-система и управление рестораном под ключ',
    metaTitle: 'POS-система для ресторана под ключ (аналог Toast)',
    metaDescription: 'Разбираю модель зарубежного сервиса Toast: единая POS-платформа для ресторанов, которая объединяет кассу, кухонные экраны, учёт склада, зарплаты персонала и онлайн-заказы в одном инструменте вместо разрозненных программ. Как такая система могла бы работать для российских заведений.',
    excerpt: 'Касса, кухня, склад и зарплаты персонала ресторана — за рубежом это одна система. У нас чаще набор несвязанных программ и таблиц. Разбираю модель Toast и что нужно для похожей платформы у нас.',
    tags: ['стартап-идея', 'SaaS', 'ресторанный бизнес', 'бизнес-модель'],
    relatedSlugs: ['saas-dlya-studiy-zapis-oplata-crm-2027', 'agregator-bronirovaniya-restoranov-2027', 'marketplace-vremennogo-personala-2027'] }),
];
