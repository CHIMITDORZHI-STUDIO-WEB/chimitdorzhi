// Серия «Сколько зарабатывает…»: для тех, кто только думает открыть бизнес.
// По образцу статьи про интернет-магазин: калькулятор прибыли с переходом в Telegram,
// «как выглядит, когда запущено», лестница из трёх ступеней, кнопка на предложение ниши.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-19';
const S = 'https://chimitdorzhi.tech';
const P = (slug, label) => ({ url: `${S}/predlozheniya/${slug}/`, label });

const SVC = { title: 'Чем я помогу на старте', services: [
  { icon: 'ph-fill ph-calculator', label: 'Бесплатно разберу идею и цифры' },
  { icon: 'ph-fill ph-robot', label: 'Запись или заказы через бота за неделю' },
  { icon: 'ph-fill ph-storefront', label: 'Сайт, запись, касса и CRM под ключ' },
  { icon: 'ph-fill ph-hand-heart', label: 'Лояльность и возврат клиентов' },
]};

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));
const TG = (what) => ({
  title: 'Посчитали и хотите начать?',
  text: 'Пришлите идею и цифры из калькулятора — бесплатно скажу, с чего начать и что можно не делать. Сообщение уже подготовлено.',
  message: 'Здравствуйте! Думаю открыть ' + what + '. Хочу обсудить старт. Город и идея: ',
  before: 'kak-vyglyadit',
});

const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 6, category: 'sales',
      servicesOffer: SVC, toc: tocFrom(html) },
    o, { contentHtml: html });
};

const tags = (x) => ['сколько зарабатывает', x, 'открыть бизнес', 'калькулятор'];

module.exports = [

  E({ slug: 'skolko-zarabatyvaet-kofeynya-2026', heroIcon: 'ph-fill ph-coffee',
    ctaInternal: P('kofeynya', 'Обсудить запуск кофейни'), inlineTg: TG('кофейню'),
    title: 'Сколько зарабатывает кофейня: доход, расходы и окупаемость с калькулятором',
    metaTitle: 'Сколько зарабатывает кофейня: калькулятор прибыли',
    metaDescription: 'Из чего складывается доход кофейни, куда уходят деньги и за сколько окупается запуск. Калькулятор прибыли на ваших цифрах и план старта.',
    excerpt: 'Прибыль кофейни решают чек, поток и аренда, а не рецепт латте. Разбираю экономику по полочкам и даю калькулятор, чтобы посчитать свою точку.',
    tags: tags('кофейня'),
    relatedSlugs: ['it-dlya-kofeyni-obshchepita-2026', 'programma-loyalnosti-kafe-salon-2026', 's-chego-nachat-biznes-esli-deneg-malo-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-salon-krasoty-2026', heroIcon: 'ph-fill ph-scissors',
    ctaInternal: P('zapis-salon-krasoty', 'Обсудить запуск салона'), inlineTg: TG('салон красоты'),
    title: 'Сколько зарабатывает салон красоты: доход с кресла, мастера и окупаемость',
    metaTitle: 'Сколько зарабатывает салон красоты: калькулятор',
    metaDescription: 'Доход с одного места, доля мастеров, аренда и материалы. Сколько реально остаётся владельцу салона красоты — посчитайте в калькуляторе на своих цифрах.',
    excerpt: 'Салон зарабатывает на загрузке кресел, а теряет на пустых окнах и уходе мастеров. Разбираю экономику и даю калькулятор для своей точки.',
    tags: tags('салон красоты'),
    relatedSlugs: ['it-dlya-salona-krasoty-2026', 'neyavki-na-zapis-predoplata-napominaniya-2026', 'skolko-zarabatyvaet-barbershop-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-barbershop-2026', heroIcon: 'ph-fill ph-scissors',
    ctaInternal: P('zapis-salon-krasoty', 'Обсудить запуск барбершопа'), inlineTg: TG('барбершоп'),
    title: 'Сколько зарабатывает барбершоп: кресла, барберы и окупаемость',
    metaTitle: 'Сколько зарабатывает барбершоп: калькулятор прибыли',
    metaDescription: 'Загрузка кресел, доля барберов, продажи косметики и аренда. Сколько остаётся владельцу барбершопа и за сколько окупается запуск — в калькуляторе.',
    excerpt: 'Барбершоп живёт повторными визитами. Показываю, из чего складывается прибыль, где её теряют и как посчитать свою точку в калькуляторе.',
    tags: tags('барбершоп'),
    relatedSlugs: ['it-dlya-barbershopa-2026', 'chat-bot-zapisi-v-barbershop-2026', 'skolko-zarabatyvaet-salon-krasoty-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-avtomoyka-2026', heroIcon: 'ph-fill ph-sparkle',
    ctaInternal: P('avtomoyka-deteyling', 'Обсудить запуск автомойки'), inlineTg: TG('автомойку'),
    title: 'Сколько зарабатывает автомойка и детейлинг: посты, загрузка и окупаемость',
    metaTitle: 'Сколько зарабатывает автомойка: калькулятор прибыли',
    metaDescription: 'Посты, машин в день, средний чек, зарплаты и химия. Сколько приносит автомойка или детейлинг и за сколько окупается — посчитайте на своих цифрах.',
    excerpt: 'Автомойка зарабатывает на загрузке постов в будни, а не только в выходные. Разбираю экономику и даю калькулятор для своей мойки.',
    tags: tags('автомойка'),
    relatedSlugs: ['cifrovizaciya-avtomoyki-detailing-2026', 'neyavki-na-zapis-predoplata-napominaniya-2026', 'skolko-zarabatyvaet-shinomontazh-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-pekarnya-2026', heroIcon: 'ph-fill ph-cooking-pot',
    ctaInternal: P('pekarnya-konditerskaya', 'Обсудить запуск пекарни'), inlineTg: TG('пекарню'),
    title: 'Сколько зарабатывает пекарня и кондитерская: себестоимость, списания и окупаемость',
    metaTitle: 'Сколько зарабатывает пекарня: калькулятор прибыли',
    metaDescription: 'Себестоимость, списания, аренда и зарплаты. Сколько реально зарабатывает пекарня или кондитерская и за сколько окупается — в калькуляторе.',
    excerpt: 'Прибыль пекарни съедают списания и непросчитанная себестоимость. Разбираю экономику и даю калькулятор для своей точки.',
    tags: tags('пекарня'),
    relatedSlugs: ['it-dlya-pekarni-konditerskoy-2026', 'kontrol-srokov-godnosti-tovarov-2026', 'skolko-zarabatyvaet-kofeynya-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-cvetochnyy-magazin-2026', heroIcon: 'ph-fill ph-hand-heart',
    ctaInternal: P('cvetochnyy-magazin', 'Обсудить запуск цветочного'), inlineTg: TG('цветочный магазин'),
    title: 'Сколько зарабатывает цветочный магазин: сезонность, списания и доставка',
    metaTitle: 'Сколько зарабатывает цветочный магазин: калькулятор',
    metaDescription: 'Закупка, списания цветов, доставка и праздничные пики. Сколько приносит цветочный магазин и где он теряет деньги — посчитайте в калькуляторе.',
    excerpt: 'Цветочный бизнес живёт от праздника до праздника и теряет на списаниях. Разбираю экономику и даю калькулятор для своего магазина.',
    tags: tags('цветочный магазин'),
    relatedSlugs: ['cifrovizaciya-cvetochnogo-magazina-2026', 'magazin-v-telegram-ili-max-bez-sayta-2026', 'skolko-zarabatyvaet-pekarnya-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-shinomontazh-2026', heroIcon: 'ph-fill ph-wrench',
    ctaInternal: P('shinomontazh-hranenie', 'Обсудить запуск шиномонтажа'), inlineTg: TG('шиномонтаж'),
    title: 'Сколько зарабатывает шиномонтаж и хранение шин: сезон, межсезонье и окупаемость',
    metaTitle: 'Сколько зарабатывает шиномонтаж: калькулятор прибыли',
    metaDescription: 'Сезонный поток, хранение шин как доход между сезонами, аренда и зарплаты. Сколько приносит шиномонтаж за год — посчитайте в калькуляторе.',
    excerpt: 'Шиномонтаж зарабатывает в два коротких сезона, а платит аренду круглый год. Разбираю экономику и даю калькулятор на год.',
    tags: tags('шиномонтаж'),
    relatedSlugs: ['it-dlya-shinomontazha-hraneniya-shin-2026', 'skolko-zarabatyvaet-avtoservis-2026', 'skolko-zarabatyvaet-avtomoyka-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-kvest-komnata-2026', heroIcon: 'ph-fill ph-puzzle-piece',
    ctaInternal: P('kvest-komnaty', 'Обсудить запуск квеста'), inlineTg: TG('квест-комнату'),
    title: 'Сколько зарабатывает квест-комната: загрузка слотов, чек и окупаемость сценария',
    metaTitle: 'Сколько зарабатывает квест-комната: калькулятор',
    metaDescription: 'Слоты, загрузка, средний чек за игру, аренда и реклама. Сколько приносит квест-комната и за сколько окупается сценарий — в калькуляторе.',
    excerpt: 'Квест продаёт время: пустой слот не вернуть. Разбираю, из чего складывается доход и как посчитать окупаемость своей комнаты.',
    tags: tags('квест-комната'),
    relatedSlugs: ['it-dlya-kvest-antikafe-2026', 'programma-loyalnosti-kafe-salon-2026', 'skolko-zarabatyvaet-fotostudiya-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-posutochnaya-kvartira-2026', heroIcon: 'ph-fill ph-bed',
    ctaInternal: P('apart-otel-posutochnaya', 'Обсудить прямые бронирования'), inlineTg: TG('посуточную аренду'),
    title: 'Сколько зарабатывает посуточная квартира или апарт-отель: загрузка, комиссии и уборка',
    metaTitle: 'Сколько приносит посуточная аренда: калькулятор',
    metaDescription: 'Цена ночи, загрузка, комиссии площадок, уборка и коммунальные. Сколько реально приносит посуточная квартира или апарт-отель — посчитайте в калькуляторе.',
    excerpt: 'Посуточная аренда кажется простой, пока не посчитаешь комиссии, уборку и простои. Разбираю экономику и даю калькулятор на свои объекты.',
    tags: tags('посуточная аренда'),
    relatedSlugs: ['neyavki-na-zapis-predoplata-napominaniya-2026', 'otzyvy-s-kart-na-sayt-2026', 's-chego-nachat-biznes-esli-deneg-malo-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-fotostudiya-2026', heroIcon: 'ph-fill ph-camera',
    ctaInternal: P('fotostudiya-arenda', 'Обсудить запуск фотостудии'), inlineTg: TG('фотостудию'),
    title: 'Сколько зарабатывает фотостудия в аренду: залы, часы загрузки и окупаемость',
    metaTitle: 'Сколько зарабатывает фотостудия: калькулятор прибыли',
    metaDescription: 'Залы, часы загрузки, цена часа и аренда помещения. Сколько приносит фотостудия в аренду и за сколько окупаются свет и фоны — в калькуляторе.',
    excerpt: 'Фотостудия продаёт часы, и каждый пустой час — потеря. Разбираю экономику и даю калькулятор, чтобы посчитать свою студию.',
    tags: tags('фотостудия'),
    relatedSlugs: ['it-dlya-fotostudii-2026', 'neyavki-na-zapis-predoplata-napominaniya-2026', 'skolko-zarabatyvaet-kvest-komnata-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-massazhnyy-salon-2026', heroIcon: 'ph-fill ph-hand-heart',
    ctaInternal: P('massazh-spa-salon', 'Обсудить запуск салона'), inlineTg: TG('массажный салон'),
    title: 'Сколько зарабатывает массажный или СПА-салон: кабинеты, мастера и абонементы',
    metaTitle: 'Сколько зарабатывает массажный салон: калькулятор',
    metaDescription: 'Кабинеты, сеансы в день, доля мастеров, аренда и абонементы. Сколько приносит массажный или СПА-салон — посчитайте в калькуляторе.',
    excerpt: 'Массажный салон держится на постоянных клиентах и абонементах. Разбираю экономику и даю калькулятор для своего салона.',
    tags: tags('массажный салон'),
    relatedSlugs: ['it-dlya-massazhnogo-salona-2026', 'programma-loyalnosti-kafe-salon-2026', 'skolko-zarabatyvaet-salon-krasoty-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-fitnes-studiya-2026', heroIcon: 'ph-fill ph-barbell',
    ctaInternal: P('avtomatizaciya-fitnesa', 'Обсудить запуск студии'), inlineTg: TG('фитнес-студию'),
    title: 'Сколько зарабатывает фитнес-студия: абонементы, отток и групповые занятия',
    metaTitle: 'Сколько зарабатывает фитнес-студия: калькулятор',
    metaDescription: 'Абонементы, отток клиентов, новые продажи и зарплаты тренеров. Сколько приносит фитнес-студия и сколько клиентов нужно удерживать — в калькуляторе.',
    excerpt: 'Фитнес-студия зарабатывает не на продаже абонемента, а на его продлении. Разбираю экономику и даю калькулятор с учётом оттока.',
    tags: tags('фитнес-студия'),
    relatedSlugs: ['it-dlya-fitnes-kluba-2026', 'cifrovizaciya-fitnes-kluba-2026', 'skolko-zarabatyvaet-massazhnyy-salon-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-detskiy-centr-2026', heroIcon: 'ph-fill ph-baby',
    ctaInternal: P('it-detskiy-centr', 'Обсудить запуск центра'), inlineTg: TG('детский центр'),
    title: 'Сколько зарабатывает детский центр: кружки, абонементы и заполняемость групп',
    metaTitle: 'Сколько зарабатывает детский центр: калькулятор',
    metaDescription: 'Группы, заполняемость, абонементы, оплата педагогов и аренда. Сколько приносит детский центр и за сколько окупается — посчитайте в калькуляторе.',
    excerpt: 'Детский центр зарабатывает на заполненных группах и регулярной оплате. Разбираю экономику и даю калькулятор для своего центра.',
    tags: tags('детский центр'),
    relatedSlugs: ['it-dlya-detskogo-centra-2026', 'napominaniya-klientam-ob-oplate-2026', 'skolko-zarabatyvaet-fitnes-studiya-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-dostavka-edy-2026', heroIcon: 'ph-fill ph-truck',
    ctaInternal: P('dostavka-bot-povtornye-zakazy', 'Обсудить свою доставку'), inlineTg: TG('доставку еды'),
    title: 'Сколько зарабатывает доставка еды: своя доставка или агрегаторы',
    metaTitle: 'Сколько зарабатывает доставка еды: калькулятор',
    metaDescription: 'Себестоимость, комиссия агрегаторов, стоимость доставки заказа. Сколько приносит доставка еды и сколько вы отдаёте площадкам — в калькуляторе.',
    excerpt: 'Агрегаторы дают заказы, но забирают заметную часть чека. Разбираю экономику доставки и даю калькулятор: свои заказы против агрегаторов.',
    tags: tags('доставка еды'),
    relatedSlugs: ['svoya-kurerskaya-sluzhba-restorana-2027', 'bot-dlya-dostavki-edy-2026', 'skolko-zarabatyvaet-kofeynya-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-avtoservis-2026', heroIcon: 'ph-fill ph-car',
    ctaInternal: P('avtoservis', 'Обсудить запуск автосервиса'), inlineTg: TG('автосервис'),
    title: 'Сколько зарабатывает автосервис: нормочас, посты и запчасти',
    metaTitle: 'Сколько зарабатывает автосервис: калькулятор прибыли',
    metaDescription: 'Посты, загрузка, нормочас, доля мастеров и наценка на запчасти. Сколько приносит автосервис и за сколько окупается — посчитайте в калькуляторе.',
    excerpt: 'Автосервис зарабатывает на загрузке постов и запчастях. Разбираю экономику и даю калькулятор для своего сервиса.',
    tags: tags('автосервис'),
    relatedSlugs: ['it-dlya-avtoservisa-2026', 'programma-dlya-avtoservisa-2026', 'skolko-zarabatyvaet-shinomontazh-2026'] }),

  // ---------- Хаб и общие ----------
  E({ slug: 's-chego-nachat-biznes-esli-deneg-malo-2026', heroIcon: 'ph-fill ph-signpost', dateModified: '2026-09-21',
    ctaInternal: P('zapusk-onlayn-biznesa-pod-klyuch', 'Обсудить старт своего дела'),
    inlineTg: { title: 'Выбираете, с чего начать?', text: 'Пришлите идею и бюджет — бесплатно скажу, что посчитать и с чего начать. Сообщение уже подготовлено.', message: 'Здравствуйте! Хочу открыть своё дело, денег немного. Идея и бюджет: ' },
    title: 'С чего начать свой бизнес, если денег мало: 10 вариантов с минимальным стартом',
    metaTitle: 'С чего начать бизнес, если денег мало: 10 вариантов',
    metaDescription: 'Десять вариантов малого бизнеса с небольшим стартом: главный расход, риск и калькулятор прибыли для каждого. Что нельзя сокращать даже при маленьком бюджете.',
    excerpt: 'Мало денег — не значит без денег. Разбираю десять вариантов малого бизнеса, их главные расходы и риски, и даю калькулятор для каждого.',
    tags: ['открыть бизнес', 'малый бизнес', 'с чего начать', 'идеи бизнеса'],
    relatedSlugs: ['biznes-plan-za-vecher-kalkulyator-2026', 'zarabotok-na-internet-magazine-2026', 'pochemu-novyy-biznes-zakryvaetsya-2026'] }),

  E({ slug: 'biznes-plan-za-vecher-kalkulyator-2026', heroIcon: 'ph-fill ph-calculator',
    ctaInternal: P('upravlencheskiy-uchet', 'Настроить учёт с первого дня'),
    inlineTg: { title: 'Посчитали и хотите проверить?', text: 'Пришлите цифры из калькулятора — бесплатно посмотрю, что упущено. Сообщение уже подготовлено.', message: 'Здравствуйте! Посчитал бизнес-план в калькуляторе. Хочу, чтобы вы посмотрели цифры. Идея: ' },
    title: 'Бизнес-план за вечер: какие цифры посчитать до вложений (с калькулятором)',
    metaTitle: 'Бизнес-план за вечер: 7 цифр и калькулятор',
    metaDescription: 'Стартовые вложения, чек, продажи, расходы, точка безубыточности и запас денег на разгон. Какие цифры посчитать до вложений — калькулятор на ваших данных.',
    excerpt: 'Большой бизнес-план для банка не нужен, а семь цифр — обязательно. Показываю, что посчитать до вложений, и даю калькулятор с точкой безубыточности и запасом на разгон.',
    tags: ['бизнес-план', 'калькулятор', 'открыть бизнес', 'финансы'],
    relatedSlugs: ['biznes-plan-2026-shablon', 'yunit-ekonomika-prostymi-slovami-2026', 's-chego-nachat-biznes-esli-deneg-malo-2026'] }),

  E({ slug: 'pochemu-novyy-biznes-zakryvaetsya-2026', heroIcon: 'ph-fill ph-warning-circle',
    ctaInternal: P('upravlencheskiy-uchet', 'Настроить учёт и контроль денег'),
    inlineTg: { title: 'Хотите проверить свой бизнес?', text: 'Опишите, что сейчас происходит с деньгами и клиентами — бесплатно подскажу, где слабое место. Сообщение уже подготовлено.', message: 'Здравствуйте! Прочитал про причины закрытия бизнеса. Хочу проверить свой. Что происходит: ' },
    title: 'Почему новый бизнес закрывается в первый год: 7 причин на примерах расчётов',
    metaTitle: 'Почему бизнес закрывается в первый год: 7 причин',
    metaDescription: 'Кончились деньги на разгон, реклама дороже клиента, нет учёта, клиенты не возвращаются. Семь причин закрытия на примерах расчётов и что помогает заранее.',
    excerpt: 'Бизнес редко закрывается внезапно — признаки видны заранее. Разбираю семь причин на примерах расчётов и что делать, пока ещё есть время.',
    tags: ['малый бизнес', 'ошибки', 'финансы', 'открыть бизнес'],
    relatedSlugs: ['biznes-plan-za-vecher-kalkulyator-2026', 'upravlencheskiy-uchet-malyy-biznes-2026', 's-chego-nachat-biznes-esli-deneg-malo-2026'] }),

];
