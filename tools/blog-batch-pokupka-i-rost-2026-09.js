// Темы перед покупкой и для действующих точек: взлом мессенджера, доступы у бывших
// сотрудников, найм через бота, сравнения сервисов записи, систем общепита и касс,
// сертификаты, карта лояльности, абонементы, ИП без сотрудников, частные мастера.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-21';
const S = 'https://chimitdorzhi.tech';
const P = (slug, label) => ({ url: `${S}/predlozheniya/${slug}/`, label });
const SV = (slug, label) => ({ url: `${S}/services/${slug}/`, label });

const SVC = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-calendar-check', label: 'Запись, напоминания и предоплата' },
  { icon: 'ph-fill ph-credit-card', label: 'Оплата, касса, сертификаты и лояльность' },
  { icon: 'ph-fill ph-robot', label: 'Боты для найма, заявок и клиентов' },
  { icon: 'ph-fill ph-shield-check', label: 'Доступы, защита аккаунтов и аудит' },
]};

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));
const TG = (title, msg) => ({
  title,
  text: 'Опишите ситуацию в двух словах — отвечу, что подойдёт и с чего начать. Сообщение уже подготовлено.',
  message: msg,
  before: 'kak-vyglyadit',
});

const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 5, category: 'development',
      servicesOffer: SVC, toc: tocFrom(html) },
    o, { contentHtml: html });
};

module.exports = [

  E({ slug: 'vzlomali-telegram-ili-max-kompanii-2026', category: 'security', heroIcon: 'ph-fill ph-lock-key',
    ctaInternal: SV('cybersecurity', 'Защитить аккаунты компании'),
    inlineTg: TG('Нужна помощь прямо сейчас?', 'Здравствуйте! Похоже, взломали аккаунт компании в мессенджере. Что происходит: '),
    title: 'Взломали Telegram или MAX компании: что делать в первый час',
    metaTitle: 'Взломали Telegram или MAX компании: что делать',
    metaDescription: 'Сообщения от вашего имени, чужие сеансы, клиенты спрашивают про странные просьбы. Что сделать в первый час, как предупредить клиентов и не допустить повторения.',
    excerpt: 'Взлом рабочего мессенджера бьёт по клиентам и репутации. Разбираю, что сделать в первый час и какие настройки закрывают эту дыру заранее.',
    tags: ['безопасность', 'Telegram', 'MAX', 'взлом'],
    relatedSlugs: ['vzlomali-gosuslugi-chto-delat-2026', 'dipfeyki-moshennichestvo-zashchita-2026', 'korporativnaya-pochta-i-obshchiy-disk-2026'] }),

  E({ slug: 'dostupy-zapisany-na-byvshego-sotrudnika-2026', category: 'security', heroIcon: 'ph-fill ph-key',
    ctaInternal: SV('it-audit', 'Проверить, на кого записаны доступы'),
    inlineTg: TG('Доступы не у вас?', 'Здравствуйте! Сайт, домен или бот записаны не на нас. Что именно: '),
    title: 'Сайт, домен или бот записаны на бывшего сотрудника или подрядчика: как вернуть и не допустить',
    metaTitle: 'Домен, сайт или бот на бывшем сотруднике: как вернуть',
    metaDescription: 'Кто на самом деле владеет доменом, хостингом, ботом и рекламными кабинетами. Что проверить сейчас, как вернуть по-хорошему и завести реестр доступов.',
    excerpt: 'Самое ценное в бизнесе часто записано не на бизнес. Разбираю, как это проверить, вернуть и сделать так, чтобы не повторилось.',
    tags: ['доступы', 'домен', 'безопасность', 'подрядчик'],
    relatedSlugs: ['razrabotchik-propal-zabrat-sayt-2026', 'hosting-domen-prostymi-slovami-2026', 'priemka-raboty-podryadchika-2026'] }),

  E({ slug: 'nayom-cherez-bota-prodavcy-oficianty-kurery-2026', category: 'industries', heroIcon: 'ph-fill ph-users-three',
    ctaInternal: P('hr-bot-podbor', 'Обсудить бота для найма'),
    inlineTg: TG('Постоянно ищете людей?', 'Здравствуйте! Хочу нанимать через бота. Кого ищем и сколько в месяц: '),
    title: 'Как нанимать продавцов, официантов и курьеров через бота',
    metaTitle: 'Найм продавцов, официантов и курьеров через бота',
    metaDescription: 'Отклик в мессенджере, короткая анкета, отсев, запись на собеседование и напоминания. Как бот разгружает массовый найм и что остаётся человеку.',
    excerpt: 'Массовый найм — это десятки одинаковых разговоров. Показываю, как бот берёт их на себя и приводит на собеседование подходящих людей.',
    tags: ['найм', 'HR', 'боты', 'персонал'],
    relatedSlugs: ['kandidaty-ne-prihodyat-na-sobesedovanie-2026', 'pochemu-uhodyat-sotrudniki-v-uslugah-2026', 'sbor-vakansiy-i-rezyume-po-filtram-2026'] }),

  E({ slug: 'kandidaty-ne-prihodyat-na-sobesedovanie-2026', category: 'industries', heroIcon: 'ph-fill ph-calendar-check',
    ctaInternal: P('hr-bot-podbor', 'Настроить запись и напоминания кандидатам'),
    inlineTg: TG('Кандидаты пропадают?', 'Здравствуйте! Кандидаты записываются и не приходят. Кого ищем: '),
    title: 'Почему кандидаты не приходят на собеседование и что с этим делать',
    metaTitle: 'Почему кандидаты не приходят на собеседование',
    metaDescription: 'Долго отвечали, неудобно записаться, забыл адрес, непонятные условия. Что помогает довести кандидата до собеседования и как считать воронку найма.',
    excerpt: 'Кандидат пропадает между откликом и собеседованием. Разбираю причины и что настроить, чтобы люди доходили до встречи.',
    tags: ['найм', 'HR', 'собеседование', 'напоминания'],
    relatedSlugs: ['nayom-cherez-bota-prodavcy-oficianty-kurery-2026', 'neyavki-na-zapis-predoplata-napominaniya-2026', 'pochemu-uhodyat-sotrudniki-v-uslugah-2026'] }),

  E({ slug: 'yclients-dikidi-ili-svoy-bot-2026', category: 'industries', heroIcon: 'ph-fill ph-calendar-check',
    ctaInternal: P('max-bot-zapis-uslugi', 'Обсудить запись в мессенджере'),
    inlineTg: TG('Выбираете систему записи?', 'Здравствуйте! Выбираю, как вести запись. Что у нас: '),
    title: 'YCLIENTS, Dikidi или свой бот для записи: что выбрать салону',
    metaTitle: 'YCLIENTS, Dikidi или свой бот: что выбрать салону',
    metaDescription: 'Мастера, филиалы, предоплата, мессенджеры и что будет с базой клиентов. Когда брать готовый сервис записи, когда добавить к нему бота, а когда делать своё.',
    excerpt: 'Выбор системы записи — это выбор на годы. Разбираю критерии и честно говорю, когда готовый сервис лучше своего бота.',
    tags: ['онлайн-запись', 'YCLIENTS', 'салоны', 'выбор'],
    relatedSlugs: ['yclients-bot-max-napominaniya-2026', 'neyavki-na-zapis-predoplata-napominaniya-2026', 'skolko-zarabatyvaet-salon-krasoty-2026'] }),

  E({ slug: 'iiko-ili-r-keeper-chto-vybrat-2026', category: 'industries', heroIcon: 'ph-fill ph-storefront',
    ctaInternal: P('obshchepit', 'Обсудить автоматизацию заведения'),
    inlineTg: TG('Выбираете систему для заведения?', 'Здравствуйте! Выбираю систему для кафе или ресторана. Формат и число точек: '),
    title: 'iiko или r_keeper: что выбрать кафе и ресторану',
    metaTitle: 'iiko или r_keeper: что выбрать кафе и ресторану',
    metaDescription: 'Формат заведения, нужные модули, доставка и лояльность, поддержка в вашем городе и стоимость владения. Как выбрать систему и что спросить до покупки.',
    excerpt: 'Спор «iiko или r_keeper» часто важнее решить через интегратора и настройки, чем через бренд. Разбираю, как выбирать и что проверить до покупки.',
    tags: ['общепит', 'iiko', 'r_keeper', 'выбор'],
    relatedSlugs: ['iiko-r-keeper-otchety-vladelcu-2026', 'pos-sistema-dlya-restorana-pod-klyuch-2027', 'skolko-zarabatyvaet-kofeynya-2026'] }),

  E({ slug: 'evotor-atol-ili-oblachnaya-kassa-2026', category: 'finance', heroIcon: 'ph-fill ph-cash-register',
    ctaInternal: P('priem-platezhey-sbp', 'Подобрать кассу и оплату'),
    inlineTg: TG('Выбираете кассу?', 'Здравствуйте! Выбираю кассу. Где продаём и сколько точек: '),
    title: 'Эвотор, АТОЛ или облачная касса: какую кассу брать малому бизнесу',
    metaTitle: 'Эвотор, АТОЛ или облачная касса: что выбрать',
    metaDescription: 'Смарт-терминал, классическая касса или облачная для онлайн-оплат. Что решает выбор: где продаёте, учёт, маркировка, связь с сайтом и скрытые расходы.',
    excerpt: 'Кассу выбирают по тому, где и как вы продаёте, а не по бренду. Разбираю три подхода и расходы, о которых говорят не сразу.',
    tags: ['онлайн-касса', 'Эвотор', 'АТОЛ', 'выбор'],
    relatedSlugs: ['oblachnaya-kassa-2026', 'smart-terminal-evotor-chto-umeet-2026', 'chek-korrekcii-kogda-i-kak-2026'] }),

  E({ slug: 'podarochnye-sertifikaty-onlayn-2026', category: 'marketing', heroIcon: 'ph-fill ph-gift',
    ctaInternal: P('programma-loyalnosti', 'Настроить продажу сертификатов'),
    inlineTg: TG('Хотите продавать сертификаты онлайн?', 'Здравствуйте! Хочу продавать подарочные сертификаты онлайн. Сфера: '),
    title: 'Подарочные сертификаты: как продавать онлайн и не запутаться в погашениях',
    metaTitle: 'Подарочные сертификаты онлайн: продажа и учёт',
    metaDescription: 'Номинал или услуга, оплата, электронный сертификат с кодом, частичное погашение, сроки и защита от подделки. Как продавать сертификаты без тетради.',
    excerpt: 'Сертификаты — деньги вперёд и новые клиенты. Разбираю, как продавать их онлайн и вести учёт погашений без путаницы.',
    tags: ['подарочные сертификаты', 'продажи', 'лояльность', 'малый бизнес'],
    relatedSlugs: ['massovaya-generaciya-sertifikatov-i-beydzhey-2026', 'kak-podnyat-sredniy-chek-2026', 'karta-loyalnosti-v-telefone-bez-prilozheniya-2026'] }),

  E({ slug: 'karta-loyalnosti-v-telefone-bez-prilozheniya-2026', category: 'marketing', heroIcon: 'ph-fill ph-wallet',
    ctaInternal: P('programma-loyalnosti', 'Запустить карту лояльности'),
    inlineTg: TG('Хотите карту без пластика?', 'Здравствуйте! Хочу карту лояльности в телефоне. Сфера и число точек: '),
    title: 'Карта лояльности в телефоне без приложения: бот, кошелёк телефона и QR',
    metaTitle: 'Карта лояльности в телефоне без приложения',
    metaDescription: 'Пластик теряют, приложения не скачивают. Карта в боте, в кошельке телефона или по номеру, баллы и статусы, связь с кассой и что видит владелец.',
    excerpt: 'Клиент не будет ставить ещё одно приложение ради скидки. Показываю, как сделать карту лояльности в телефоне без отдельного приложения.',
    tags: ['лояльность', 'карта клиента', 'боты', 'малый бизнес'],
    relatedSlugs: ['programma-loyalnosti-kafe-salon-2026', 'pochemu-klienty-ne-vozvrashchayutsya-2026', 'podarochnye-sertifikaty-onlayn-2026'] }),

  E({ slug: 'abonementy-i-pakety-uslug-2026', category: 'sales', heroIcon: 'ph-fill ph-ticket',
    ctaInternal: P('podpisochnyy-billing', 'Настроить абонементы'),
    inlineTg: TG('Продаёте абонементы?', 'Здравствуйте! Хочу навести порядок с абонементами. Сфера и как ведём сейчас: '),
    title: 'Абонементы и пакеты услуг: как продавать и не запутаться в остатках визитов',
    metaTitle: 'Абонементы и пакеты услуг: продажа и учёт визитов',
    metaDescription: 'Число визитов, срок, заморозка и перенос. Как учитывать остаток, напоминать о продлении и не спорить с клиентами о том, сколько занятий осталось.',
    excerpt: 'Абонемент даёт деньги вперёд, но легко превращается в споры об остатке. Разбираю, как его упаковать и вести учёт без тетради.',
    tags: ['абонементы', 'продажи', 'учёт', 'малый бизнес'],
    relatedSlugs: ['skolko-zarabatyvaet-fitnes-studiya-2026', 'zapolnit-pustye-chasy-2026', 'napominaniya-klientam-ob-oplate-2026'] }),

  E({ slug: 'avtomatizaciya-dlya-ip-bez-sotrudnikov-2026', category: 'sales', heroIcon: 'ph-fill ph-identification-card',
    ctaInternal: P('bot-dlya-biznesa', 'Обсудить бота для ИП'),
    inlineTg: TG('Всё делаете сами?', 'Здравствуйте! Я работаю один и хочу снять с себя рутину. Чем занимаюсь: '),
    title: 'Автоматизация для ИП без сотрудников: что имеет смысл, а что нет',
    metaTitle: 'Автоматизация для ИП без сотрудников: что имеет смысл',
    metaDescription: 'Заявки через бота, ответы на частые вопросы, оплата и чеки, напоминания клиентам. Что окупается сразу, что рано и в каком порядке внедрять.',
    excerpt: 'Когда всё делает один человек, лишние сервисы только мешают. Разбираю, что действительно разгрузит ИП, а что пока рано.',
    tags: ['ИП', 'самозанятые', 'автоматизация', 'боты'],
    relatedSlugs: ['komu-ne-nuzhna-avtomatizaciya-2026', 'cena-ruchnoy-raboty-kalkulyator-2026', 'samozanyatomu-priem-oplaty-cheki-2026'] }),

  E({ slug: 'master-na-domu-zapis-bez-administratora-2026', category: 'industries', heroIcon: 'ph-fill ph-calendar-check',
    ctaInternal: P('zapis-chastnaya-praktika', 'Настроить запись для частной практики'),
    inlineTg: TG('Работаете сами на себя?', 'Здравствуйте! Я частный мастер, хочу запись и напоминания без администратора. Чем занимаюсь: '),
    title: 'Мастер на дому или частный специалист: запись, оплата и напоминания без администратора',
    metaTitle: 'Запись для мастера на дому и частного специалиста',
    metaDescription: 'Телефон звонит во время работы, клиенты пишут в пять мест, неявки. Одна ссылка на запись, предоплата, напоминания и база клиентов без администратора.',
    excerpt: 'Частному мастеру не нужен администратор — нужна ссылка на запись. Показываю, как собрать запись, оплату и напоминания в одном месте.',
    tags: ['онлайн-запись', 'частная практика', 'самозанятые', 'напоминания'],
    relatedSlugs: ['vyezdnoy-byuti-master-na-dom-2027', 'onlayn-zapis-psiholog-kouch-2026', 'neyavki-na-zapis-predoplata-napominaniya-2026'] }),

];
