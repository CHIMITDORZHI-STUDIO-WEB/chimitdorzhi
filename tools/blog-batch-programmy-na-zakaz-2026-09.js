// Программы на заказ: боли малого и среднего бизнеса, которые закрывает своя
// программа учёта или доработка 1С. Делается удалённо и передаётся заказчику.
// Статьи 1С ведут на «Связку систем», остальные — на «Программу учёта под ваш процесс».
// Поле group раскладывает статьи по разделам каталога на странице предложения.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-19';
const S = 'https://chimitdorzhi.tech';

const SVC = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-database', label: 'Программы учёта под ваш процесс' },
  { icon: 'ph-fill ph-plugs-connected', label: 'Интеграции и доработки 1С' },
  { icon: 'ph-fill ph-device-mobile', label: 'Работа с телефона: цех, склад, выезд' },
  { icon: 'ph-fill ph-robot', label: 'Боты для заявок и согласований' },
]};
const CTA_1C = { url: `${S}/predlozheniya/integraciya-sistem/`, label: 'Обсудить задачу по 1С' };
const CTA_PR = { url: `${S}/predlozheniya/programma-ucheta-na-zakaz/`, label: 'Обсудить программу под ваш процесс' };

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));

const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 5, category: 'development',
      servicesOffer: SVC, ctaInternal: CTA_PR, toc: tocFrom(html) },
    o, { contentHtml: html });
};

module.exports = [

  // ---------- 1С ----------
  E({ slug: 'obmen-ut-i-buhgalterii-slomalsya-2026', heroIcon: 'ph-fill ph-arrows-clockwise', ctaInternal: CTA_1C,
    title: 'Обмен между УТ и Бухгалтерией сломался: дубли, расхождения и документы, которые не доходят',
    metaTitle: 'Обмен УТ и Бухгалтерии 1С сломался: дубли и расхождения',
    metaDescription: 'После обновления обмен между УТ и Бухгалтерией даёт дубли, а документы не доходят. Частые причины, диагностика по шагам и как не допустить повторения.',
    excerpt: 'Сломанный обмен между базами 1С тихо портит учёт месяцами. Разбираю, почему он ломается, как искать причину и что поменять, чтобы не чинить его каждый квартал.',
    tags: ['1С', 'обмен', 'УТ', 'бухгалтерия'],
    relatedSlugs: ['dorabotka-integraciya-1c-2026', 'dorabotki-1c-cherez-rasshireniya-2026', 'obmen-1c-s-saytom-perestal-rabotat-2026'] }),

  E({ slug: 'svyazat-1c-i-bitrix24-2026', heroIcon: 'ph-fill ph-plugs-connected', ctaInternal: CTA_1C,
    title: 'Связать 1С и Битрикс24: сделки, счета, остатки и оплаты в обе стороны',
    metaTitle: 'Интеграция 1С и Битрикс24: сделки, счета, остатки, оплаты',
    metaDescription: 'Менеджер работает в Битрикс24, учёт в 1С, и данные не сходятся. Что передавать и в какую сторону, готовый коннектор или своя интеграция и частые ошибки.',
    excerpt: 'Две системы без связи — это двойной ввод и дубли контрагентов. Показываю, как связать 1С и Битрикс24 и где держать главную версию каждого справочника.',
    tags: ['1С', 'Битрикс24', 'интеграция', 'CRM'],
    relatedSlugs: ['1c-ili-bitrix24-2026', 'amocrm-i-1c-integraciya-2026', 'obmen-ut-i-buhgalterii-slomalsya-2026'] }),

  E({ slug: 'otchet-iz-1c-na-pochtu-i-v-messendzher-2026', heroIcon: 'ph-fill ph-envelope-simple', ctaInternal: CTA_1C,
    title: 'Отчёт из 1С каждое утро на почту или в мессенджер: без ручного формирования',
    metaTitle: 'Отчёт из 1С автоматически на почту и в мессенджер',
    metaDescription: 'Продажи за вчера, долги, остатки ниже минимума и неотгруженные заказы приходят сами каждое утро. Какие отчёты нужны, как настроить и кому что отправлять.',
    excerpt: 'Руководитель просит отчёт, бухгалтер формирует его руками. Разбираю, как 1С сама присылает нужные цифры по расписанию и как не разослать лишнего.',
    tags: ['1С', 'отчёты', 'автоматизация', 'руководителю'],
    relatedSlugs: ['dashbord-rukovoditelyu-v-telegram-max-2026', 'http-servis-1c-dlya-prilozheniya-2026', 'ii-assistent-po-dannym-1c-2026'] }),

  E({ slug: 'obmen-1c-s-saytom-perestal-rabotat-2026', heroIcon: 'ph-fill ph-warning', ctaInternal: CTA_1C,
    title: 'Обмен 1С с сайтом перестал работать: дубли товаров, пропавшие остатки и заказы, которые не доходят',
    metaTitle: 'Обмен 1С с сайтом не работает: дубли, остатки, заказы',
    metaDescription: 'После обновления сайта или 1С пошли дубли товаров, пропали остатки, заказы не загружаются. Типовые поломки обмена, порядок диагностики и защита от повторения.',
    excerpt: 'Обмен с сайтом ломается чаще всего после обновлений. Показываю, где искать причину, как чинить и как узнавать о поломке раньше покупателей.',
    tags: ['1С', 'сайт', 'обмен', 'интеграция'],
    relatedSlugs: ['integraciya-sayta-s-1c-2026', 'sayt-upal-monitoring-sayta-i-domena-2026', 'obmen-ut-i-buhgalterii-slomalsya-2026'] }),

  // ---------- Своя программа: учёт и производство ----------
  E({ slug: 'programma-ucheta-na-zakaz-2026', group: 'uchet', heroIcon: 'ph-fill ph-database',
    title: 'Программа учёта на заказ: когда Excel уже мало, а 1С слишком тяжело',
    metaTitle: 'Программа учёта на заказ: когда Excel мало, а 1С тяжело',
    metaDescription: 'Несколько человек правят одну таблицу, данные теряются, процесс нестандартный. Когда нужна своя программа учёта, из чего она состоит и как не переплатить.',
    excerpt: 'Между Excel и большой 1С есть третий путь — программа под ваш процесс. Разбираю, когда она оправдана, когда хватит готовой и с чего начинать, чтобы не переплатить.',
    tags: ['программа учёта', 'разработка', 'Excel', 'программа на заказ'],
    relatedSlugs: ['excel-spasenie-i-tupik-2026', 'moysklad-vmesto-1c-integraciya-2026', 'sklad-bez-1c-uchet-na-telefone-2026'] }),

  E({ slug: 'sklad-bez-1c-uchet-na-telefone-2026', group: 'uchet', heroIcon: 'ph-fill ph-barcode',
    title: 'Склад без 1С: учёт на телефоне со сканером для маленького склада, магазина или мастерской',
    metaTitle: 'Учёт склада на телефоне без 1С: программа со сканером',
    metaDescription: 'Приход, расход, перемещение и инвентаризация с телефона: камера как сканер, этикетки, остатки в реальном времени и уведомление о минимальном остатке.',
    excerpt: 'Маленькому складу не нужна большая система, но нужен порядок. Показываю, как вести учёт с телефона и когда пора переходить на ТСД и 1С.',
    tags: ['склад', 'учёт', 'телефон', 'программа на заказ'],
    relatedSlugs: ['reviziya-v-magazine-bez-zakrytiya-2026', 'pechat-etiketok-iz-1c-i-s-tsd-2026', 'programma-ucheta-na-zakaz-2026'] }),

  E({ slug: 'programma-dlya-ceha-naryady-sdelnaya-2026', group: 'uchet', category: 'industries', heroIcon: 'ph-fill ph-factory',
    title: 'Программа для цеха: заказы, наряды, этапы производства и сдельная зарплата',
    metaTitle: 'Программа для цеха: наряды, этапы и сдельная зарплата',
    metaDescription: 'Где сейчас заказ, кто какой этап сделал и сколько начислить по сдельной. Наряды на рабочих, отметки с телефона, сроки и узкие места цеха в одной программе.',
    excerpt: 'Статус заказа в цеху узнают звонком, а сдельную считают по тетрадке. Разбираю, как программа ведёт заказ по этапам и собирает данные для зарплаты.',
    tags: ['производство', 'цех', 'сдельная зарплата', 'программа на заказ'],
    relatedSlugs: ['proizvodstvo-na-malom-predpriyatii-v-1c-2026', 'mes-sistema-dlya-proizvodstva-2026', 'uchet-braka-i-reklamaciy-na-proizvodstve-2026'] }),

  E({ slug: 'programma-rascheta-zakaza-i-kp-2026', group: 'uchet', heroIcon: 'ph-fill ph-calculator',
    title: 'Программа расчёта заказа и КП для менеджера: размеры на входе, цена и КП на выходе',
    metaTitle: 'Программа расчёта заказа и КП для менеджера',
    metaDescription: 'Окна, мебель, металлоконструкции, печать: менеджер вводит параметры, программа считает цену по единым правилам и готовит КП в PDF. Цены правит руководитель.',
    excerpt: 'Менеджеры считают заказы в таблицах, каждый по-своему и с ошибками. Показываю, как программа расчёта держит правила цены в одном месте и готовит КП за минуту.',
    tags: ['расчёт заказа', 'КП', 'продажи', 'программа на заказ'],
    relatedSlugs: ['kalkulyator-stoimosti-na-sayt-2026', 'generaciya-dogovorov-i-schetov-iz-shablona-2026', 'prilozhenie-dlya-zamershchika-i-vyezdnogo-mastera-2026'] }),

  E({ slug: 'uchet-braka-i-reklamaciy-na-proizvodstve-2026', group: 'uchet', category: 'industries', heroIcon: 'ph-fill ph-seal-check',
    title: 'Учёт брака и рекламаций на производстве: кто, что, почему и что сделали',
    metaTitle: 'Учёт брака и рекламаций на производстве: программа',
    metaDescription: 'Брак и претензии клиентов с фото, причиной, участком и решением. Срок ответа клиенту и отчёт по причинам, чтобы видеть, что повторяется.',
    excerpt: 'Брак обсуждают и забывают, а он повторяется. Разбираю, как фиксировать брак и рекламации так, чтобы через месяц было видно причины, а не только потери.',
    tags: ['брак', 'рекламации', 'производство', 'программа на заказ'],
    relatedSlugs: ['berezhlivoe-proizvodstvo-lean-kaizen-2026', 'vozvraty-ot-klientov-v-1c-2026', 'programma-dlya-ceha-naryady-sdelnaya-2026'] }),

  E({ slug: 'grafik-to-i-remontov-oborudovaniya-2026', group: 'uchet', category: 'industries', heroIcon: 'ph-fill ph-wrench',
    title: 'График ТО и ремонтов оборудования: плановые работы, простои и запчасти',
    metaTitle: 'График ТО и ремонтов оборудования: программа учёта',
    metaDescription: 'Реестр оборудования, плановое ТО по времени или наработке, заявки на ремонт с телефона, учёт простоев, история по станку и запчасти с минимальным остатком.',
    excerpt: 'Оборудование ломается в самый неудобный момент, если ТО ведут по памяти. Показываю, как программа планирует обслуживание и считает простои.',
    tags: ['оборудование', 'ТО', 'ремонт', 'программа на заказ'],
    relatedSlugs: ['napominaniya-o-srokah-dokumentov-i-oborudovaniya-2026', 'cifrovizaciya-mebelnogo-proizvodstva-2026', 'uchet-braka-i-reklamaciy-na-proizvodstve-2026'] }),

  // ---------- Что выдаётся и должно вернуться ----------
  E({ slug: 'uchet-vydachi-instrumenta-sotrudnikam-2026', group: 'vydacha', heroIcon: 'ph-fill ph-key',
    title: 'Учёт выдачи инструмента и оборудования сотрудникам: кто взял, когда вернёт, что потеряно',
    metaTitle: 'Учёт выдачи инструмента сотрудникам: программа с QR',
    metaDescription: 'Карточка инструмента с QR-наклейкой, выдача и возврат сканом телефона, на ком что числится, просроченные возвраты, ремонт и инвентаризация по QR.',
    excerpt: 'Инструмент расходится по объектам и не возвращается. Разбираю, как QR-наклейка и телефон показывают, у кого что на руках, без журнала и ругани.',
    tags: ['инструмент', 'учёт', 'QR-коды', 'программа на заказ'],
    relatedSlugs: ['uchet-imushchestva-i-garantiy-homebox-2026', 'sklad-bez-1c-uchet-na-telefone-2026', 'uchet-specodezhdy-i-siz-2026'] }),

  E({ slug: 'uchet-specodezhdy-i-siz-2026', group: 'vydacha', heroIcon: 'ph-fill ph-t-shirt',
    title: 'Учёт спецодежды и СИЗ по сотрудникам: выдача, сроки носки и замена',
    metaTitle: 'Учёт спецодежды и СИЗ: выдача, сроки носки, замена',
    metaDescription: 'Нормы выдачи по должностям, электронная карточка сотрудника, отметка о выдаче, сроки носки с напоминанием о замене и закупка по размерам.',
    excerpt: 'Карточки учёта СИЗ на бумаге ведут кое-как, а сроки замены пропускают. Показываю, как вести выдачу спецодежды в программе и не забывать про замену.',
    tags: ['СИЗ', 'спецодежда', 'охрана труда', 'программа на заказ'],
    relatedSlugs: ['ohrana-truda-dokumenty-2026', 'uchet-vydachi-instrumenta-sotrudnikam-2026', 'napominaniya-o-srokah-dokumentov-i-oborudovaniya-2026'] }),

  E({ slug: 'uchet-vozvratnoy-tary-kegi-ballony-2026', group: 'vydacha', heroIcon: 'ph-fill ph-package',
    title: 'Учёт возвратной тары: кеги, баллоны, паллеты и ящики у клиентов',
    metaTitle: 'Учёт возвратной тары: кеги, баллоны, паллеты у клиентов',
    metaDescription: 'Тара уходит с товаром и не возвращается. Баланс тары по каждому клиенту, отметка при отгрузке и возврате, залог, акт сверки и напоминания.',
    excerpt: 'Кеги и баллоны — это деньги, которые лежат у клиентов. Разбираю, как вести баланс тары по клиентам и находить потерянное по истории отгрузок.',
    tags: ['тара', 'опт', 'учёт', 'программа на заказ'],
    relatedSlugs: ['sborka-zakazov-s-tsd-bez-peresorta-2026', 'uchet-vydachi-instrumenta-sotrudnikam-2026', 'bot-dlya-optovyh-zakazov-iz-1c-2026'] }),

  E({ slug: 'uchet-seriynyh-nomerov-i-garantii-2026', group: 'vydacha', heroIcon: 'ph-fill ph-identification-card',
    title: 'Учёт серийных номеров и гарантии: кому продали, когда кончается гарантия, что уже ремонтировали',
    metaTitle: 'Учёт серийных номеров и гарантии: программа',
    metaDescription: 'Серийник при приёмке и продаже, поиск по серийному номеру, гарантийный срок, история обращений и ремонтов и защита от подмены.',
    excerpt: 'Клиент приносит технику по гарантии, а найти продажу нельзя. Показываю, как учёт серийных номеров отвечает на вопрос за секунды и защищает от подмены.',
    tags: ['серийные номера', 'гарантия', 'сервис', 'программа на заказ'],
    relatedSlugs: ['it-dlya-servisnogo-centra-2026', 'vozvraty-ot-klientov-v-1c-2026', 'uchet-vozvratnoy-tary-kegi-ballony-2026'] }),

  E({ slug: 'uchet-topliva-i-gsm-po-mashinam-2026', group: 'vydacha', heroIcon: 'ph-fill ph-truck',
    title: 'Учёт топлива и ГСМ по машинам: заправки, пробег, нормы и отклонения',
    metaTitle: 'Учёт топлива и ГСМ по машинам: программа',
    metaDescription: 'Заправки по картам или фото чека в бот, пробег или моточасы, норма расхода и сигналы об отклонениях. Связь с путевыми листами.',
    excerpt: 'Расход топлива растёт, а понять, где именно, нельзя. Разбираю, как собрать заправки и пробег в одну программу и видеть отклонения по каждой машине.',
    tags: ['ГСМ', 'автопарк', 'топливо', 'программа на заказ'],
    relatedSlugs: ['putevye-listy-elektronno-2026', 'podotchet-i-cheki-sotrudnikov-2026', 'uchet-vydachi-instrumenta-sotrudnikam-2026'] }),

  // ---------- Согласования и заявки ----------
  E({ slug: 'soglasovanie-schetov-na-oplatu-2026', group: 'zayavki', category: 'finance', heroIcon: 'ph-fill ph-seal-check',
    title: 'Согласование счетов на оплату у руководителя: загрузили, согласовали в телефоне, оплатили',
    metaTitle: 'Согласование счетов на оплату: программа и бот',
    metaDescription: 'Реестр счетов, маршрут согласования по сумме и статье, кнопки «согласовать» и «отклонить» в телефоне, очередь на оплату и статус из банка.',
    excerpt: 'Счета согласуют голосом, а бухгалтер не знает, что платить. Показываю, как устроить согласование счетов с кнопками и историей.',
    tags: ['согласование', 'счета', 'финансы', 'программа на заказ'],
    relatedSlugs: ['platezhnyy-kalendar-malyy-biznes-2026', 'bankovskaya-vypiska-v-tablicu-po-statyam-2026', 'zayavki-na-zakupku-s-soglasovaniem-2026'] }),

  E({ slug: 'zayavki-na-zakupku-s-soglasovaniem-2026', group: 'zayavki', heroIcon: 'ph-fill ph-shopping-cart',
    title: 'Заявки на закупку с согласованием: от сотрудника до оплаты поставщику',
    metaTitle: 'Заявки на закупку с согласованием: программа',
    metaDescription: 'Заявка с позициями и обоснованием, согласование по сумме, предложения поставщиков, счёт, приёмка и закрытие. Плюс отчёт по закупкам по отделам.',
    excerpt: 'Просьбы «надо купить» теряются в чатах, а бюджет на закупки никто не видит. Разбираю, как вести закупки от заявки до приёмки в одной программе.',
    tags: ['закупки', 'согласование', 'заявки', 'программа на заказ'],
    relatedSlugs: ['soglasovanie-schetov-na-oplatu-2026', 'vnutrennie-zayavki-v-ofise-cherez-bota-2026', 'priemka-tovara-ot-postavshchika-v-magazine-2026'] }),

  E({ slug: 'zayavki-zhiltsov-dlya-upravlyayushchey-kompanii-2026', group: 'zayavki', category: 'industries', heroIcon: 'ph-fill ph-buildings',
    ctaInternal: { url: `${S}/predlozheniya/zhkh-uk/`, label: 'Обсудить систему заявок для УК' },
    title: 'Заявки жильцов для управляющей компании: приём, мастер, статус жильцу и отчёт',
    metaTitle: 'Заявки жильцов для управляющей компании: бот и система',
    metaDescription: 'Заявки по телефону и в чатах дома теряются. Бот для жильцов, диспетчер назначает мастера, фото выполнения, статус жильцу и отчёт по домам и срокам.',
    excerpt: 'Жильцы злятся не на поломку, а на то, что не знают, что с их заявкой. Показываю, как устроить приём заявок со статусами и отчётом по срокам.',
    tags: ['ЖКХ', 'управляющая компания', 'заявки', 'программа на заказ'],
    relatedSlugs: ['cifrovizaciya-snt-tszh-2026', 'vnutrennie-zayavki-v-ofise-cherez-bota-2026', 'zayavki-na-zakupku-s-soglasovaniem-2026'] }),

  E({ slug: 'propuska-i-gosti-v-ofise-2026', group: 'zayavki', heroIcon: 'ph-fill ph-identification-card',
    title: 'Пропуска и гости в офисе или бизнес-центре: заявка, список на охрану и журнал',
    metaTitle: 'Пропуска и гости в офисе и бизнес-центре: программа',
    metaDescription: 'Заявка на гостя или въезд через форму или бот, список охране на планшете, отметка прихода и ухода, постоянные и разовые пропуска и журнал.',
    excerpt: 'Охрана пишет гостей в тетрадь, арендаторы звонят на пост. Разбираю, как заменить это заявками и списком на планшете охраны.',
    tags: ['пропуска', 'бизнес-центр', 'офис', 'программа на заказ'],
    relatedSlugs: ['uchet-prihoda-i-uhoda-cherez-bota-2026', 'vnutrennie-zayavki-v-ofise-cherez-bota-2026', 'zayavki-zhiltsov-dlya-upravlyayushchey-kompanii-2026'] }),

  E({ slug: 'prilozhenie-dlya-zamershchika-i-vyezdnogo-mastera-2026', group: 'zayavki', heroIcon: 'ph-fill ph-clipboard-text',
    title: 'Приложение для замерщика и выездного мастера: акт, фото и подпись клиента на телефоне',
    metaTitle: 'Приложение для замерщика и выездного мастера',
    metaDescription: 'Список выездов на день, форма замера с фото, расчёт на месте, акт и подпись клиента на экране, работа без интернета и данные сразу в офисе.',
    excerpt: 'Замеры в блокноте переписывают в офисе с ошибками. Показываю, как приложение для выездных сотрудников сразу отдаёт данные в расчёт заказа.',
    tags: ['замерщик', 'выездной мастер', 'приложение', 'программа на заказ'],
    relatedSlugs: ['programma-rascheta-zakaza-i-kp-2026', 'uchet-prihoda-i-uhoda-cherez-bota-2026', 'programma-ucheta-na-zakaz-2026'] }),

];
