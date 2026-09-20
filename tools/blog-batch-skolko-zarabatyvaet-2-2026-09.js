// Серия «Сколько зарабатывает…», часть 2: ПВЗ, бар, кальянная, продуктовый, маникюр,
// стоматология, косметология, эпиляция, ветклиника, груминг, автопрокат, грузоперевозки,
// ремонт техники, техосмотр, коворкинг, баня, хостел, батутный центр, школа танцев, клининг.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-20';
const S = 'https://chimitdorzhi.tech';
const P = (slug, label) => ({ url: `${S}/predlozheniya/${slug}/`, label });

const SVC = { title: 'Чем я помогу на старте', services: [
  { icon: 'ph-fill ph-calculator', label: 'Бесплатно разберу идею и цифры' },
  { icon: 'ph-fill ph-robot', label: 'Запись, бронь или заявки через бота за неделю' },
  { icon: 'ph-fill ph-storefront', label: 'Сайт, оплата, касса и CRM под ключ' },
  { icon: 'ph-fill ph-hand-heart', label: 'Лояльность и возврат клиентов' },
]};

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));
const TG = (what) => ({
  title: 'Посчитали и хотите начать?',
  text: 'Пришлите идею и цифры из калькулятора — бесплатно скажу, с чего начать и что можно не делать. Сообщение уже подготовлено.',
  message: 'Здравствуйте! Думаю открыть ' + what + '. Хочу обсудить старт. Город и идея: ',
  before: 'kak-vyglyadit',
});
const tags = (x) => ['сколько зарабатывает', x, 'открыть бизнес', 'калькулятор'];

const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 6, category: 'sales',
      servicesOffer: SVC, toc: tocFrom(html) },
    o, { contentHtml: html });
};

module.exports = [

  E({ slug: 'skolko-zarabatyvaet-pvz-2026', heroIcon: 'ph-fill ph-package',
    ctaInternal: { url: `${S}/services/logistics-automation/`, label: 'Обсудить автоматизацию пункта выдачи' }, inlineTg: TG('пункт выдачи заказов'),
    title: 'Сколько зарабатывает пункт выдачи заказов: комиссия, поток и окупаемость',
    metaTitle: 'Сколько зарабатывает пункт выдачи заказов: калькулятор',
    metaDescription: 'Комиссия с заказа, поток, аренда и зарплаты. Сколько приносит пункт выдачи и за сколько окупается открытие — посчитайте на своих цифрах.',
    excerpt: 'ПВЗ кажется простым бизнесом: комиссия с каждого заказа. Разбираю, из чего складывается доход, от чего он зависит и где владелец теряет деньги.',
    tags: tags('пункт выдачи'),
    relatedSlugs: ['cifrovizaciya-kurerskih-sluzhb-pvz-2026', 's-chego-nachat-biznes-esli-deneg-malo-2026', 'skolko-zarabatyvaet-produktovyy-magazin-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-bar-2026', heroIcon: 'ph-fill ph-shopping-cart',
    ctaInternal: P('bar-pab-pivnaya', 'Обсудить запуск бара'), inlineTg: TG('бар или магазин разливного'),
    title: 'Сколько зарабатывает бар или магазин разливного пива: наценка, списания и вечерний поток',
    metaTitle: 'Сколько зарабатывает бар или разливное: калькулятор',
    metaDescription: 'Наценка, списания, аренда и зарплаты. Сколько остаётся владельцу бара или магазина разливного пива и за сколько окупается запуск — в калькуляторе.',
    excerpt: 'В баре прибыль решают наценка и списания, а не проходимость улицы. Разбираю экономику и даю калькулятор для своей точки.',
    tags: tags('бар'),
    relatedSlugs: ['it-dlya-kofeyni-obshchepita-2026', 'kontrol-srokov-godnosti-tovarov-2026', 'skolko-zarabatyvaet-kalyannaya-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-kalyannaya-2026', heroIcon: 'ph-fill ph-armchair',
    ctaInternal: P('kalyannaya-launzh', 'Обсудить запуск кальянной'), inlineTg: TG('кальянную'),
    title: 'Сколько зарабатывает кальянная и лаунж: столы, оборот и персонал',
    metaTitle: 'Сколько зарабатывает кальянная: калькулятор прибыли',
    metaDescription: 'Столы, оборот стола за вечер, средний чек компании, аренда и персонал. Сколько приносит кальянная и за сколько окупается — посчитайте в калькуляторе.',
    excerpt: 'Кальянная зарабатывает на обороте столов в вечерние часы. Разбираю экономику, частые ошибки и даю калькулятор для своего заведения.',
    tags: tags('кальянная'),
    relatedSlugs: ['avtomatizaciya-kalyannoy-2026', 'programma-loyalnosti-kafe-salon-2026', 'skolko-zarabatyvaet-bar-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-produktovyy-magazin-2026', heroIcon: 'ph-fill ph-storefront',
    ctaInternal: P('programma-loyalnosti', 'Обсудить учёт и лояльность'), inlineTg: TG('продуктовый магазин'),
    title: 'Сколько зарабатывает продуктовый магазин у дома: оборот, списания и наценка',
    metaTitle: 'Сколько зарабатывает продуктовый магазин: калькулятор',
    metaDescription: 'Наценка, списания, оборачиваемость и аренда. Сколько приносит продуктовый магазин у дома и за сколько окупается первая закупка — в калькуляторе.',
    excerpt: 'Магазин у дома живёт на потоке и обороте товара, а теряет на списаниях и замороженных деньгах. Разбираю экономику и даю калькулятор.',
    tags: tags('продуктовый магазин'),
    relatedSlugs: ['reviziya-v-magazine-bez-zakrytiya-2026', 'kontrol-srokov-godnosti-tovarov-2026', 'skolko-zarabatyvaet-pvz-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-manikyurnaya-studiya-2026', heroIcon: 'ph-fill ph-hand-heart',
    ctaInternal: P('manikyurnaya-studiya', 'Обсудить запуск студии'), inlineTg: TG('маникюрную студию'),
    title: 'Сколько зарабатывает маникюрная студия: мастера, загрузка и материалы',
    metaTitle: 'Сколько зарабатывает маникюрная студия: калькулятор',
    metaDescription: 'Места, загрузка, доля мастера, материалы и аренда. Сколько остаётся владельцу маникюрной студии и за сколько окупается запуск — в калькуляторе.',
    excerpt: 'Студия маникюра зарабатывает на загрузке мест и повторных визитах. Разбираю экономику и даю калькулятор для своей студии.',
    tags: tags('маникюрная студия'),
    relatedSlugs: ['it-dlya-salona-krasoty-2026', 'neyavki-na-zapis-predoplata-napominaniya-2026', 'skolko-zarabatyvaet-salon-krasoty-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-stomatologiya-2026', heroIcon: 'ph-fill ph-first-aid-kit',
    ctaInternal: P('it-stomatologiya', 'Обсудить запуск клиники'), inlineTg: TG('стоматологию'),
    title: 'Сколько зарабатывает стоматология: кресла, загрузка и доля врача',
    metaTitle: 'Сколько зарабатывает стоматология: калькулятор прибыли',
    metaDescription: 'Кресла, приёмы, доля врача, материалы и лаборатория. Сколько приносит стоматология и за сколько окупается оборудование — посчитайте в калькуляторе.',
    excerpt: 'Стоматология требует дорогого оборудования и хороших врачей. Разбираю экономику кресла и даю калькулятор для своей клиники.',
    tags: tags('стоматология'),
    relatedSlugs: ['it-dlya-stomatologiy-medcentrov-2026', 'napominaniya-o-srokah-dokumentov-i-oborudovaniya-2026', 'skolko-zarabatyvaet-kosmetologiya-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-kosmetologiya-2026', heroIcon: 'ph-fill ph-sparkle',
    ctaInternal: P('kosmetologiya-klinika', 'Обсудить запуск кабинета'), inlineTg: TG('кабинет косметологии'),
    title: 'Сколько зарабатывает косметология: аппараты, повторные визиты и окупаемость оборудования',
    metaTitle: 'Сколько зарабатывает косметология: калькулятор',
    metaDescription: 'Процедуры, доля специалиста, расходники и дорогой аппарат. Сколько приносит косметология и когда окупается оборудование — посчитайте в калькуляторе.',
    excerpt: 'В косметологии всё решают загрузка аппарата и повторные визиты. Разбираю экономику и даю калькулятор с окупаемостью оборудования.',
    tags: tags('косметология'),
    relatedSlugs: ['it-dlya-kosmetologii-2026', 'neyavki-na-zapis-predoplata-napominaniya-2026', 'skolko-zarabatyvaet-lazernaya-epilyaciya-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-lazernaya-epilyaciya-2026', heroIcon: 'ph-fill ph-sparkle',
    ctaInternal: P('lazernaya-epilyaciya', 'Обсудить запуск студии'), inlineTg: TG('студию лазерной эпиляции'),
    title: 'Сколько зарабатывает студия лазерной эпиляции: курс процедур и загрузка аппарата',
    metaTitle: 'Сколько зарабатывает лазерная эпиляция: калькулятор',
    metaDescription: 'Загрузка аппарата, чек процедуры и доход с клиента за курс. Сколько приносит студия лазерной эпиляции и когда окупается аппарат — в калькуляторе.',
    excerpt: 'Клиент приходит не на одну процедуру, а на курс — в этом вся экономика. Разбираю её и даю калькулятор с окупаемостью аппарата.',
    tags: tags('лазерная эпиляция'),
    relatedSlugs: ['it-dlya-kosmetologii-2026', 'programma-loyalnosti-kafe-salon-2026', 'skolko-zarabatyvaet-kosmetologiya-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-vetklinika-2026', heroIcon: 'ph-fill ph-heartbeat',
    ctaInternal: P('it-vetklinika', 'Обсудить запуск клиники'), inlineTg: TG('ветклинику'),
    title: 'Сколько зарабатывает ветклиника: приёмы, аптека и дежурства',
    metaTitle: 'Сколько зарабатывает ветклиника: калькулятор прибыли',
    metaDescription: 'Приёмы, доля врача, продажи аптеки и кормов, аренда. Сколько приносит ветеринарная клиника и за сколько окупается — посчитайте в калькуляторе.',
    excerpt: 'Ветклиника зарабатывает на приёмах и аптеке, а держится на доверии владельцев животных. Разбираю экономику и даю калькулятор.',
    tags: tags('ветклиника'),
    relatedSlugs: ['cifrovizaciya-vetklinik-2026', 'napominaniya-o-srokah-dokumentov-i-oborudovaniya-2026', 'skolko-zarabatyvaet-gruming-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-gruming-2026', heroIcon: 'ph-fill ph-dog',
    ctaInternal: P('zoomagazin-gruming', 'Обсудить запуск салона'), inlineTg: TG('груминг-салон'),
    title: 'Сколько зарабатывает груминг-салон и зоомагазин: столы, время стрижки и корма',
    metaTitle: 'Сколько зарабатывает груминг-салон: калькулятор',
    metaDescription: 'Столы, время на стрижку, доля грумера и продажи кормов. Сколько приносит груминг-салон с зоомагазином и за сколько окупается — в калькуляторе.',
    excerpt: 'Груминг ограничен временем на одну стрижку, а зоотовары дают второй поток выручки. Разбираю экономику и даю калькулятор.',
    tags: tags('груминг'),
    relatedSlugs: ['it-dlya-zoomagazina-gruminga-2027', 'neyavki-na-zapis-predoplata-napominaniya-2026', 'skolko-zarabatyvaet-vetklinika-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-avtoprokat-2026', heroIcon: 'ph-fill ph-car-profile',
    ctaInternal: P('bronirovanie-arendy', 'Обсудить прямые брони'), inlineTg: TG('автопрокат'),
    title: 'Сколько зарабатывает автопрокат: загрузка машин, простои и ущерб',
    metaTitle: 'Сколько зарабатывает автопрокат: калькулятор прибыли',
    metaDescription: 'Загрузка машин, страховка и ТО, резерв на ущерб и комиссии площадок. Сколько приносит автопрокат и за сколько окупается машина — в калькуляторе.',
    excerpt: 'Прокат зарабатывает на загрузке и теряет на простоях и ущербе. Разбираю экономику парка и даю калькулятор на свои машины.',
    tags: tags('автопрокат'),
    relatedSlugs: ['arenda-avto-vykup-bot-keys-2026', 'parsing-obyavleniy-nedvizhimosti-i-avto-2026', 'skolko-zarabatyvaet-gruzoperevozki-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-gruzoperevozki-2026', heroIcon: 'ph-fill ph-truck',
    ctaInternal: P('gruzoperevozki-pereezdy', 'Обсудить заявки и маршруты'), inlineTg: TG('грузоперевозки'),
    title: 'Сколько зарабатывает грузоперевозки на своей машине: рейсы, топливо и простои',
    metaTitle: 'Сколько зарабатывает грузоперевозки: калькулятор',
    metaDescription: 'Рейсы, топливо, ремонт, лизинг и простои. Сколько остаётся владельцу машины и за сколько окупается техника — посчитайте на своих цифрах.',
    excerpt: 'Выручка за рейс и прибыль с него — очень разные цифры. Разбираю экономику перевозок и даю калькулятор с топливом, ремонтом и простоями.',
    tags: tags('грузоперевозки'),
    relatedSlugs: ['uchet-topliva-i-gsm-po-mashinam-2026', 'putevye-listy-elektronno-2026', 'skolko-zarabatyvaet-avtoprokat-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-remont-telefonov-2026', heroIcon: 'ph-fill ph-device-mobile',
    ctaInternal: P('servis-centr-remont', 'Обсудить запуск мастерской'), inlineTg: TG('мастерскую по ремонту техники'),
    title: 'Сколько зарабатывает мастерская по ремонту телефонов и техники: запчасти, поток и гарантия',
    metaTitle: 'Сколько зарабатывает ремонт телефонов: калькулятор',
    metaDescription: 'Поток ремонтов, доля запчастей в чеке, работа мастера и аренда. Сколько приносит мастерская и за сколько окупается открытие — в калькуляторе.',
    excerpt: 'В ремонте техники деньги в работе мастера, а не в запчастях. Разбираю экономику, гарантийные переделки и даю калькулятор.',
    tags: tags('ремонт телефонов'),
    relatedSlugs: ['it-dlya-servisnogo-centra-2026', 'uchet-seriynyh-nomerov-i-garantii-2026', 'skolko-zarabatyvaet-avtoservis-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-punkt-tehosmotra-2026', heroIcon: 'ph-fill ph-wrench',
    ctaInternal: P('punkt-tehosmotra', 'Обсудить запись и учёт'), inlineTg: TG('пункт техосмотра'),
    title: 'Сколько зарабатывает пункт техосмотра: поток, оборудование и сезонность',
    metaTitle: 'Сколько зарабатывает пункт техосмотра: калькулятор',
    metaDescription: 'Поток машин, цена диагностической карты, зарплаты и обслуживание линии. Сколько приносит пункт техосмотра и когда окупается линия — в калькуляторе.',
    excerpt: 'Техосмотр — это поток и оборудование, которое стоит денег каждый месяц. Разбираю экономику и даю калькулятор с окупаемостью линии.',
    tags: tags('пункт техосмотра'),
    relatedSlugs: ['napominaniya-osago-tehosmotr-to-2026', 'neyavki-na-zapis-predoplata-napominaniya-2026', 'skolko-zarabatyvaet-avtoservis-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-kovorking-2026', heroIcon: 'ph-fill ph-buildings',
    ctaInternal: P('bronirovanie-kovorking', 'Обсудить бронирование мест'), inlineTg: TG('коворкинг'),
    title: 'Сколько зарабатывает коворкинг: места, абонементы и переговорки',
    metaTitle: 'Сколько зарабатывает коворкинг: калькулятор прибыли',
    metaDescription: 'Занятость мест, абонементы, разовые визиты и переговорки. Сколько приносит коворкинг и за сколько окупается ремонт и мебель — в калькуляторе.',
    excerpt: 'Коворкинг живёт на абонементах, а переговорки добавляют выручку сверху. Разбираю экономику и даю калькулятор для своего пространства.',
    tags: tags('коворкинг'),
    relatedSlugs: ['it-dlya-kovorkinga-2026', 'napominaniya-klientam-ob-oplate-2026', 'skolko-zarabatyvaet-fotostudiya-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-banya-sauna-2026', heroIcon: 'ph-fill ph-bed',
    ctaInternal: P('banya-sauna-kompleks', 'Обсудить бронирование и предоплату'), inlineTg: TG('баню или сауну'),
    title: 'Сколько зарабатывает баня или сауна: часы, парные и выходные',
    metaTitle: 'Сколько зарабатывает баня или сауна: калькулятор',
    metaDescription: 'Загрузка в будни и выходные, цена часа, коммунальные и зарплаты. Сколько приносит баня или сауна и за сколько окупается — посчитайте в калькуляторе.',
    excerpt: 'Баня зарабатывает в выходные, а платит за отопление всю неделю. Разбираю экономику и даю калькулятор с раздельной загрузкой.',
    tags: tags('баня'),
    relatedSlugs: ['neyavki-na-zapis-predoplata-napominaniya-2026', 'programma-loyalnosti-kafe-salon-2026', 'skolko-zarabatyvaet-hostel-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-hostel-2026', heroIcon: 'ph-fill ph-bed',
    ctaInternal: P('hostel-kapsulnyy-otel', 'Обсудить прямые брони'), inlineTg: TG('хостел'),
    title: 'Сколько зарабатывает хостел или капсульный отель: койко-места, загрузка и уборка',
    metaTitle: 'Сколько зарабатывает хостел: калькулятор прибыли',
    metaDescription: 'Койко-места, загрузка, комиссии площадок, уборка и бельё. Сколько приносит хостел или капсульный отель и за сколько окупается — в калькуляторе.',
    excerpt: 'В хостеле каждый процент загрузки и каждая комиссия площадки решают многое. Разбираю экономику и даю калькулятор на свои места.',
    tags: tags('хостел'),
    relatedSlugs: ['it-dlya-mini-gostinicy-hostela-2026', 'skolko-zarabatyvaet-posutochnaya-kvartira-2026', 'skolko-zarabatyvaet-banya-sauna-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-batutnyy-centr-2026', heroIcon: 'ph-fill ph-trophy',
    ctaInternal: P('batutnyy-centr-igrovaya', 'Обсудить запись и праздники'), inlineTg: TG('батутный центр'),
    title: 'Сколько зарабатывает батутный центр или детская игровая: часы, будни и праздники',
    metaTitle: 'Сколько зарабатывает батутный центр: калькулятор',
    metaDescription: 'Загрузка в будни и выходные, цена билета и дни рождения как отдельная выручка. Сколько приносит батутный центр и за сколько окупается — в калькуляторе.',
    excerpt: 'Батутный центр зарабатывает в выходные и на днях рождения. Разбираю экономику и даю калькулятор с праздниками отдельной строкой.',
    tags: tags('батутный центр'),
    relatedSlugs: ['it-dlya-detskogo-centra-2026', 'skolko-zarabatyvaet-detskiy-centr-2026', 'skolko-zarabatyvaet-kvest-komnata-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-shkola-tancev-2026', heroIcon: 'ph-fill ph-users',
    ctaInternal: P('shkola-tancev-vokala', 'Обсудить запуск школы'), inlineTg: TG('школу танцев или вокала'),
    title: 'Сколько зарабатывает школа танцев или вокала: группы, залы и абонементы',
    metaTitle: 'Сколько зарабатывает школа танцев: калькулятор',
    metaDescription: 'Группы, заполняемость, абонементы, оплата педагогов и аренда зала. Сколько приносит школа танцев или вокала и сколько учеников нужно набирать.',
    excerpt: 'Школа танцев живёт заполненностью групп и продлением абонементов. Разбираю экономику и даю калькулятор с оттоком учеников.',
    tags: tags('школа танцев'),
    relatedSlugs: ['it-dlya-shkoly-tancev-vokala-2026', 'napominaniya-klientam-ob-oplate-2026', 'skolko-zarabatyvaet-detskiy-centr-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-klining-2026', heroIcon: 'ph-fill ph-broom',
    ctaInternal: P('zayavki-klining-uslugi', 'Обсудить заявки и маршруты'), inlineTg: TG('клининговую компанию'),
    title: 'Сколько зарабатывает клининговая компания: бригады, выезды и повторные клиенты',
    metaTitle: 'Сколько зарабатывает клининг: калькулятор прибыли',
    metaDescription: 'Бригады, выезды в день, доля исполнителей, расходники и реклама. Сколько приносит клининговая компания и почему важны постоянные клиенты.',
    excerpt: 'Клининг зарабатывает на количестве выездов и постоянных договорах, а теряет на рекламе и разовых заказах. Разбираю экономику и даю калькулятор.',
    tags: tags('клининг'),
    relatedSlugs: ['it-dlya-kliningovoy-kompanii-2026', 'prilozhenie-dlya-zamershchika-i-vyezdnogo-mastera-2026', 'skolko-zarabatyvaet-gruzoperevozki-2026'] }),

];
