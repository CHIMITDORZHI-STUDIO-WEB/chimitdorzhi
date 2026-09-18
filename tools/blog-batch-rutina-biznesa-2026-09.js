// Рутина предпринимателя: кассы, магазин, деньги, договоры и сеть точек.
// Каждая статья ведёт на конкретное предложение, а не на общую страницу услуг,
// и содержит раздел «Как это выглядит, когда настроено».
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-18';
const S = 'https://chimitdorzhi.tech';
const P = (slug, label) => ({ url: `${S}/predlozheniya/${slug}/`, label });

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-cash-register', label: 'Приём оплаты, онлайн-касса и чеки' },
  { icon: 'ph-fill ph-chart-line-up', label: 'Управленческий учёт и отчёты владельцу' },
  { icon: 'ph-fill ph-barcode', label: 'Магазин и склад: приёмка, ревизия, ТСД' },
  { icon: 'ph-fill ph-robot', label: 'Боты и ИИ-помощники для рутины' },
]};

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));

const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 5,
      servicesOffer: SVC_BIZ, toc: tocFrom(html) },
    o, { contentHtml: html });
};

module.exports = [

  E({ slug: 'oblachnaya-kassa-2026', category: 'finance', heroIcon: 'ph-fill ph-cloud',
    ctaInternal: P('priem-platezhey-sbp', 'Подключить оплату и облачную кассу'),
    title: 'Облачная касса: что это и кому она выгоднее своей',
    metaTitle: 'Облачная касса: что это и кому подходит вместо своей',
    metaDescription: 'Интернет-магазин, доставка, бот с оплатой — чек нужен, а касса на столе нет. Как работает облачная касса, кому она подходит и где чаще всего ошибаются.',
    excerpt: 'Везде, где платят онлайн, нужен чек, но ставить кассу на стол бессмысленно. Разбираю, как устроена облачная касса и почему главное в ней — связка с сайтом или ботом.',
    tags: ['онлайн-касса', 'чеки', 'оплата онлайн', 'интернет-магазин'],
    relatedSlugs: ['oplaty-sami-raznosyatsya-v-1c-2026', 'ekvayring-ili-sbp-2026', 'onlayn-kassa-54-fz-2026'] }),

  E({ slug: 'krazhi-i-nedostachi-na-kasse-2026', category: 'industries', heroIcon: 'ph-fill ph-warning-diamond',
    ctaInternal: P('videoanalitika-riteyl', 'Обсудить контроль кассы'),
    title: 'Кражи и недостачи на кассе: как контролировать кассиров без слежки',
    metaTitle: 'Недостачи на кассе: как контролировать кассиров',
    metaDescription: 'Отмены после ухода покупателя, возвраты без покупателя, скидки «своим». Какой след оставляет каждая схема и как утренний отчёт ловит её без пересмотра видео.',
    excerpt: 'Деньги в кассе не сходятся, а причину не найти. Показываю, какие следы оставляют потери в кассовых данных и как контролировать процесс, не устраивая охоту на людей.',
    tags: ['касса', 'недостачи', 'ритейл', 'контроль'],
    relatedSlugs: ['reviziya-v-magazine-bez-zakrytiya-2026', 'vyruchka-kazhdoy-tochki-kontrol-seti-2026', 'podschet-posetiteley-magazina-2026'] }),

  E({ slug: 'reviziya-v-magazine-bez-zakrytiya-2026', category: 'industries', heroIcon: 'ph-fill ph-clipboard-text',
    ctaInternal: { url: `${S}/services/logistics-automation/`, label: 'Обсудить учёт в магазине' },
    title: 'Ревизия в магазине: как пересчитать товар, не закрывая точку',
    metaTitle: 'Ревизия в магазине без закрытия: пересчёт по зонам',
    metaDescription: 'Ночь пересчёта и расхождения, которые никто не может объяснить. Как делать частичную ревизию по зонам со сканером и где обычно прячутся расхождения.',
    excerpt: 'Классическая ревизия — закрытая дверь и потерянная выручка. Разбираю, как пересчитывать магазин по частям в тихие часы и сразу видеть расхождения.',
    tags: ['ревизия', 'инвентаризация', 'магазин', 'учёт'],
    relatedSlugs: ['priemka-tovara-ot-postavshchika-v-magazine-2026', 'krazhi-i-nedostachi-na-kasse-2026', 'inventarizaciya-po-palletam-s-tsd-2026'] }),

  E({ slug: 'priemka-tovara-ot-postavshchika-v-magazine-2026', category: 'industries', heroIcon: 'ph-fill ph-package',
    ctaInternal: { url: `${S}/services/logistics-automation/`, label: 'Обсудить учёт в магазине' },
    title: 'Приёмка товара от поставщика в магазине: как не платить за то, чего не привезли',
    metaTitle: 'Приёмка товара в магазине: недовложения и пересорт',
    metaDescription: 'Продавец расписался не глядя, а через месяц недостача. Что проверять при приёмке, как сканер сверяет поставку с накладной и когда оформлять акт расхождений.',
    excerpt: 'Недостача часто рождается в момент приёмки. Показываю, что проверять, как сканер сверяет поставку с документом и почему акт расхождений оформляют при водителе.',
    tags: ['приёмка товара', 'магазин', 'поставщики', 'учёт'],
    relatedSlugs: ['reviziya-v-magazine-bez-zakrytiya-2026', 'elektronnye-nakladnye-upd-edo-2026', 'sborka-zakazov-s-tsd-bez-peresorta-2026'] }),

  E({ slug: 'platezhnyy-kalendar-malyy-biznes-2026', category: 'finance', heroIcon: 'ph-fill ph-calendar-check',
    ctaInternal: P('upravlencheskiy-uchet', 'Настроить учёт денег'),
    title: 'Платёжный календарь: как не остаться без денег на зарплату и налоги',
    metaTitle: 'Платёжный календарь для малого бизнеса: без кассовых разрывов',
    metaDescription: 'Бизнес прибыльный, а в день зарплаты на счёте пусто. Что вносить в платёжный календарь, как увидеть кассовый разрыв заранее и что делать, пока ещё есть время.',
    excerpt: 'Деньги приходят не тогда, когда нужно платить. Разбираю, как платёжный календарь заранее показывает кассовый разрыв и откуда брать данные, чтобы не вбивать их руками.',
    tags: ['финансы', 'платёжный календарь', 'кассовый разрыв', 'малый бизнес'],
    relatedSlugs: ['upravlencheskiy-uchet-malyy-biznes-2026', 'debitorka-iz-1c-napominaniya-dolzhnikam-2026', 'denezhnyy-potok-cash-flow-2026'] }),

  E({ slug: 'upravlencheskiy-uchet-malyy-biznes-2026', category: 'finance', heroIcon: 'ph-fill ph-chart-line-up',
    ctaInternal: P('upravlencheskiy-uchet', 'Настроить управленческий учёт'),
    title: 'Управленческий учёт для малого бизнеса: прибыль, а не остаток на счёте',
    metaTitle: 'Управленческий учёт для малого бизнеса простыми словами',
    metaDescription: 'Остаток на счёте — это не прибыль, а деньги поставщиков и налоги. Три отчёта для владельца, нужные разрезы и как начать учёт без большой системы.',
    excerpt: 'Владелец видит деньги на счёте и думает, что это прибыль. Разбираю три отчёта, которые показывают реальную картину, и как запустить учёт за месяц без громоздкой системы.',
    tags: ['управленческий учёт', 'финансы', 'прибыль', 'малый бизнес'],
    relatedSlugs: ['platezhnyy-kalendar-malyy-biznes-2026', 'finansovyy-razbor-kompanii-po-otchetnosti-keys-2026', 'ii-assistent-po-dannym-1c-2026'] }),

  E({ slug: 'podotchet-i-cheki-sotrudnikov-2026', category: 'finance', heroIcon: 'ph-fill ph-receipt',
    ctaInternal: P('ai-pomoshchnik-yurist-buhgalter', 'Обсудить бота для расходов'),
    title: 'Подотчётные деньги и чеки сотрудников: без бумажной волокиты',
    metaTitle: 'Подотчётные деньги и чеки сотрудников: учёт через бота',
    metaDescription: 'Чеки теряются, отчёты сдают через месяц. Как сотрудник фотографирует чек в боте, расход сразу попадает в учёт черновиком, а бухгалтер только подтверждает.',
    excerpt: 'Топливо, расходники, командировки — чеки теряются, а бухгалтер собирает их по кабинетам. Показываю, как бот принимает фото чека и превращает его в расход.',
    tags: ['подотчёт', 'расходы', 'боты', 'бухгалтерия'],
    relatedSlugs: ['nakladnye-postavshchikov-v-1c-raspoznavanie-2026', 'ai-buhgalter-avtomatizaciya-rutiny-2026', 'upravlencheskiy-uchet-malyy-biznes-2026'] }),

  E({ slug: 'chto-grozit-kompanii-za-utechku-bazy-2026', category: 'legal', heroIcon: 'ph-fill ph-scales',
    ctaInternal: P('152-fz-pod-klyuch', 'Проверить защиту данных'),
    title: 'Что грозит компании, если утекла база клиентов',
    metaTitle: 'Что грозит компании за утечку базы клиентов в 2026',
    metaDescription: 'Сутки на уведомление Роскомнадзора, штрафы за первую и оборотные за повторную утечку, претензии клиентов. Что делать сразу и что снижает последствия.',
    excerpt: 'База клиентов оказалась в сети — что теперь будет? Разбираю последствия для компании, порядок действий в первые сутки и что заранее снижает штраф.',
    tags: ['152-ФЗ', 'утечки данных', 'штрафы', 'ответственность'],
    relatedSlugs: ['oborotnye-shtrafy-utechki-pd-2026', 'utechki-pd-24-chasa-2026', 'prava-dostupa-v-1c-utechka-bazy-2026'] }),

  E({ slug: 'uchet-dogovorov-sroki-prodleniya-2026', category: 'legal', heroIcon: 'ph-fill ph-file-text',
    ctaInternal: P('upravlenie-dogovorami-clm', 'Настроить учёт договоров'),
    title: 'Учёт договоров: как не пропустить продление, оплату и штраф',
    metaTitle: 'Учёт договоров: сроки продления, оплаты и напоминания',
    metaDescription: 'Про автопролонгацию аренды и срок претензии вспоминают, когда уже поздно. Реестр договоров, ключевые даты и напоминания ответственному заранее.',
    excerpt: 'Договоры лежат в папках и почте, а сроки всплывают слишком поздно. Показываю, как устроить реестр с напоминаниями и где ИИ помогает вытащить даты из скана.',
    tags: ['договоры', 'сроки', 'юристу', 'автоматизация'],
    relatedSlugs: ['dogovor-oferty-2026', 'ai-dlya-yurista-dokumenty-2026', 'podotchet-i-cheki-sotrudnikov-2026'] }),

  E({ slug: 'vyruchka-kazhdoy-tochki-kontrol-seti-2026', category: 'industries', heroIcon: 'ph-fill ph-storefront',
    ctaInternal: P('kontrol-franshizy-horeca', 'Обсудить сводку по точкам'),
    title: 'Выручка каждой точки каждое утро: как контролировать сеть кафе или франшизу',
    metaTitle: 'Контроль сети кафе и франшизы: выручка точек каждое утро',
    metaDescription: 'Данные по точкам в разных программах, сравнить можно только в конце месяца. Какие показатели смотреть каждое утро и как сигналы приходят раньше отчёта.',
    excerpt: 'Владелец сети узнаёт о проседании точки через месяц. Разбираю, какую сводку стоит получать каждое утро и как не утонуть в цифрах, которые никто не читает.',
    tags: ['сеть точек', 'франшиза', 'общепит', 'отчёты'],
    relatedSlugs: ['krazhi-i-nedostachi-na-kasse-2026', 'odna-igra-na-set-tochek-i-franshizu-2026', 'goryachiy-moment-sayt-kofeen-keys-2026'] }),

];
