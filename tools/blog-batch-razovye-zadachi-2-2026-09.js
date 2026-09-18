// Разовые задачи и абонентка, часть 2: сверки, выписки, чистка базы, перенос
// из старых программ, фиды, отчёты маркетплейсов, отчёты со смены и мониторинги.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-19';
const S = 'https://chimitdorzhi.tech';

const SVC = { title: 'Небольшие задачи без большого проекта', services: [
  { icon: 'ph-fill ph-download-simple', label: 'Парсеры, сверки и выгрузки в таблицы' },
  { icon: 'ph-fill ph-code', label: 'Скрипты, генераторы документов, обработка файлов' },
  { icon: 'ph-fill ph-robot', label: 'Простые боты и напоминания в мессенджер' },
  { icon: 'ph-fill ph-lifebuoy', label: 'Абонентка: мониторинг, поддержка, отчёты' },
]};
const CTA1 = { url: `${S}/predlozheniya/razovye-zadachi-skripty-parsery/`, label: 'Описать задачу и получить оценку' };
const CTA2 = { url: `${S}/predlozheniya/razovye-zadachi-skripty-parsery/`, label: 'Обсудить абонентку' };

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));

const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 5, category: 'development',
      servicesOffer: SVC, ctaInternal: CTA1, toc: tocFrom(html) },
    o, { contentHtml: html });
};

module.exports = [

  // ---------- Разовые ----------
  E({ slug: 'sverka-dvuh-tablic-skriptom-2026', category: 'finance', heroIcon: 'ph-fill ph-arrows-left-right',
    title: 'Сверка двух таблиц или выписки с учётом: скрипт находит расхождения за минуты',
    metaTitle: 'Сверка двух таблиц скриптом: оплаты, остатки, прайсы',
    metaDescription: 'Оплаты банка и счета, отгрузки и оплаты, остатки двух систем. Скрипт сопоставляет записи по ключу и выдаёт три списка: совпало, только тут, только там.',
    excerpt: 'Ручная сверка двух таблиц — часы работы и пропущенные ошибки. Разбираю, как скрипт сопоставляет записи, по какому ключу и что обычно находится при первой сверке.',
    tags: ['сверка', 'таблицы', 'финансы', 'разовые задачи'],
    relatedSlugs: ['oplaty-sami-raznosyatsya-v-1c-2026', 'skript-dlya-google-tablic-2026', 'bankovskaya-vypiska-v-tablicu-po-statyam-2026'] }),

  E({ slug: 'bankovskaya-vypiska-v-tablicu-po-statyam-2026', category: 'finance', heroIcon: 'ph-fill ph-bank',
    title: 'Банковская выписка в таблицу по статьям расходов: без ручной разметки',
    metaTitle: 'Банковская выписка в таблицу по статьям расходов',
    metaDescription: 'Выписка раскладывается по статьям сама: правила по контрагенту и назначению платежа, неразнесённое — на проверку, итоги по месяцам для управленческого учёта.',
    excerpt: 'Разметка выписки по статьям вручную отнимает вечер каждый месяц. Показываю, как правила разносят платежи сами и что остаётся проверить человеку.',
    tags: ['выписка', 'управленческий учёт', 'финансы', 'разовые задачи'],
    relatedSlugs: ['upravlencheskiy-uchet-malyy-biznes-2026', 'platezhnyy-kalendar-malyy-biznes-2026', 'sverka-dvuh-tablic-skriptom-2026'] }),

  E({ slug: 'chistka-bazy-klientov-dubli-telefony-2026', category: 'sales', heroIcon: 'ph-fill ph-broom',
    title: 'Чистка базы клиентов: дубли, телефоны в разном формате и мёртвые контакты',
    metaTitle: 'Чистка базы клиентов: дубли, телефоны, мёртвые контакты',
    metaDescription: 'Один клиент в трёх карточках, телефоны в пяти форматах, контакты не отвечают. Как найти дубли, объединить карточки без потери истории и навести порядок.',
    excerpt: 'Грязная база мешает продажам и рассылкам. Разбираю, как находить дубли даже при разном написании, приводить телефоны к одному виду и не потерять историю клиента.',
    tags: ['база клиентов', 'CRM', 'дубли', 'разовые задачи'],
    relatedSlugs: ['perehod-s-crm-na-crm-perenos-dannyh-2026', 'crm-dlya-malogo-biznesa-2026', 'sbor-bazy-kompaniy-iz-otkrytyh-istochnikov-2026'] }),

  E({ slug: 'perenos-dannyh-iz-staroy-programmy-2026', heroIcon: 'ph-fill ph-database',
    title: 'Перенос данных из старой программы: самописный софт, Access, DBF и старые базы',
    metaTitle: 'Перенос данных из старой программы, Access и DBF',
    metaDescription: 'Бизнес годами жил в старой программе, разработчика нет, а данные нужны в новой системе. Как достать данные, починить кодировки и связи и проверить перенос.',
    excerpt: 'Старая программа работает, пока не сломается, а разработчика уже не найти. Показываю, как достать из неё данные и перенести их без потерь.',
    tags: ['перенос данных', 'миграция', 'старые базы', 'разовые задачи'],
    relatedSlugs: ['migraciya-dannyh-slozhnee-chem-kazhetsya-2026', 'perehod-s-ut-10-3-na-ut-11-2026', 'perehod-s-crm-na-crm-perenos-dannyh-2026'] }),

  E({ slug: 'massovaya-generaciya-sertifikatov-i-beydzhey-2026', heroIcon: 'ph-fill ph-certificate',
    title: 'Сертификаты, бейджи, грамоты и QR-коды пачкой: из списка в таблице за минуты',
    metaTitle: 'Массовая генерация сертификатов, бейджей и QR-кодов',
    metaDescription: 'Мероприятия, курсы, акции и подарочные сертификаты: шаблон, данные из таблицы, уникальный номер или QR на каждый и готовые PDF для печати или рассылки.',
    excerpt: 'Сто сертификатов вручную — день работы дизайнера. Разбираю, как генерировать их пачкой из таблицы и как проверять подлинность по QR-коду.',
    tags: ['сертификаты', 'QR-коды', 'мероприятия', 'разовые задачи'],
    relatedSlugs: ['generaciya-dogovorov-i-schetov-iz-shablona-2026', 'massovaya-obrabotka-foto-tovarov-2026', 'prostoy-bot-na-odnu-zadachu-2026'] }),

  E({ slug: 'tovarnyy-fid-dlya-reklamy-i-ploshchadok-2026', category: 'marketing', heroIcon: 'ph-fill ph-list-checks',
    title: 'Товарный фид для рекламы и площадок: каталог в нужном формате, который обновляется сам',
    metaTitle: 'Товарный фид для рекламы и площадок: настройка на заказ',
    metaDescription: 'Фид нужен для товарной рекламы, досок объявлений и агрегаторов. Откуда брать данные, обязательные поля, обновление цен и наличия и частые ошибки фидов.',
    excerpt: 'Реклама показывает товар, которого нет в наличии, потому что фид не обновился. Разбираю, как собрать фид из сайта или учёта и держать его актуальным.',
    tags: ['фид', 'реклама', 'каталог', 'разовые задачи'],
    relatedSlugs: ['import-kataloga-iz-prajsa-postavshchika-2026', 'yandex-direkt-s-nulya-2026', 'avtovygruzka-obyavleniy-na-avito-iz-kataloga-2026'] }),

  E({ slug: 'razbor-finansovogo-otcheta-marketpleysa-2026', category: 'finance', heroIcon: 'ph-fill ph-receipt',
    title: 'Разбор финансового отчёта маркетплейса: сколько реально заработано на каждом товаре',
    metaTitle: 'Разбор финансового отчёта маркетплейса по товарам',
    metaDescription: 'Продажи есть, а денег нет. Скрипт раскладывает отчёт маркетплейса по артикулам: комиссии, логистика, возвраты, хранение, реклама и прибыль по каждому товару.',
    excerpt: 'Финансовый отчёт маркетплейса огромен и непонятен. Показываю, как разложить его по товарам и увидеть, какие позиции на самом деле убыточны.',
    tags: ['маркетплейсы', 'юнит-экономика', 'отчёты', 'разовые задачи'],
    relatedSlugs: ['yunit-ekonomika-prostymi-slovami-2026', 'parser-cen-wb-ozon-v-tablicu-2026', 'sverka-dvuh-tablic-skriptom-2026'] }),

  E({ slug: 'paketnaya-proverka-kontragentov-po-inn-2026', category: 'legal', heroIcon: 'ph-fill ph-magnifying-glass',
    title: 'Пакетная проверка контрагентов по ИНН: список из таблицы за один раз',
    metaTitle: 'Пакетная проверка контрагентов по ИНН из таблицы',
    metaDescription: 'Десятки и сотни ИНН: статус, дата регистрации, признаки риска из открытых источников и отметки прямо в таблице. Плюс регулярная перепроверка ключевых партнёров.',
    excerpt: 'Проверять контрагентов по одному долго, а не проверять — рискованно. Разбираю, как проверить целый список по ИНН за раз и что делать с результатом.',
    tags: ['контрагенты', 'ИНН', 'проверка', 'разовые задачи'],
    relatedSlugs: ['besplatnye-servisy-proverki-kontragenta-2026', 'proverka-kontragentov-due-diligence-2026', 'chistka-bazy-klientov-dubli-telefony-2026'] }),

  E({ slug: 'karta-klientov-i-tochek-iz-tablicy-2026', category: 'sales', heroIcon: 'ph-fill ph-map-trifold',
    title: 'Карта клиентов и точек из таблицы: адреса на карте для логистики и продаж',
    metaTitle: 'Карта клиентов из таблицы: адреса на карте для продаж',
    metaDescription: 'Адреса из таблицы или CRM — точками на карте с цветом по статусу или менеджеру. Районы с плотностью клиентов и маршруты для представителей.',
    excerpt: 'Список адресов в таблице ничего не говорит, а на карте всё видно сразу. Показываю, как превратить таблицу клиентов в карту и где это полезно.',
    tags: ['карта', 'продажи', 'логистика', 'разовые задачи'],
    relatedSlugs: ['torgovyy-predstavitel-zakazy-v-1c-s-telefona-2026', 'vygruzka-iz-crm-v-tablicu-2026', 'chistka-bazy-klientov-dubli-telefony-2026'] }),

  E({ slug: 'rasshifrovka-zvonkov-i-soveshchaniy-pachkoy-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-microphone',
    title: 'Расшифровка звонков и совещаний пачкой: аудио в текст и краткое резюме в таблицу',
    metaTitle: 'Расшифровка звонков и совещаний пачкой с резюме',
    metaDescription: 'Архив записей звонков, совещаний и интервью: расшифровка, разделение по говорящим, резюме, договорённости и задачи в таблицу, поиск по всему архиву.',
    excerpt: 'Записи совещаний копятся, но их никто не переслушивает. Разбираю, как превратить архив аудио в текст с резюме и почему лучше обрабатывать его на своём сервере.',
    tags: ['расшифровка', 'ИИ', 'звонки', 'разовые задачи'],
    relatedSlugs: ['ii-transkribaciya-sozvonov-lokalno-2026', 'whisperx-transkribaciya-rechi-2026', 'subtitry-i-narezka-video-dlya-socsetey-2026'] }),

  E({ slug: 'subtitry-i-narezka-video-dlya-socsetey-2026', category: 'media', heroIcon: 'ph-fill ph-film-strip',
    title: 'Субтитры и нарезка видео для соцсетей: разовая обработка архива роликов',
    metaTitle: 'Субтитры и нарезка видео для соцсетей из архива',
    metaDescription: 'Записи эфиров, вебинаров и интервью превращаются в короткие вертикальные ролики: субтитры, нарезка по смыслу, обложки и единое оформление.',
    excerpt: 'Часы записанных эфиров лежат без дела. Показываю, как разово превратить архив в серию коротких роликов с субтитрами и что в этом делает человек.',
    tags: ['видео', 'субтитры', 'соцсети', 'разовые задачи'],
    relatedSlugs: ['avtoposting-v-telegram-max-vk-2026', 'rasshifrovka-zvonkov-i-soveshchaniy-pachkoy-2026', 'massovaya-obrabotka-foto-tovarov-2026'] }),

  E({ slug: 'konvertaciya-i-skleyka-pdf-pachkoy-2026', heroIcon: 'ph-fill ph-file-pdf',
    title: 'Сканы в один PDF с поиском: склейка, разбивка, сжатие и распознавание пачкой',
    metaTitle: 'Склейка сканов в PDF с поиском: обработка пачкой',
    metaDescription: 'Пачки сканов договоров, актов и архивов: склейка по папкам, распознавание текста для поиска, разбивка по документам, сжатие и единые имена файлов.',
    excerpt: 'Архив сканов без поиска бесполезен. Разбираю, как обработать тысячи файлов разом и почему документы с персональными данными нельзя отдавать в чужие онлайн-сервисы.',
    tags: ['PDF', 'сканы', 'документы', 'разовые задачи'],
    relatedSlugs: ['stirling-pdf-instrumenty-2026', 'ocifrovka-bumazhnyh-anket-i-blankov-2026', 'generaciya-dogovorov-i-schetov-iz-shablona-2026'] }),

  // ---------- Абонентка ----------
  E({ slug: 'otchet-so-smeny-cherez-bota-2026', category: 'industries', heroIcon: 'ph-fill ph-clipboard-text', ctaInternal: CTA2,
    title: 'Отчёт со смены через бота: выручка, фото витрины и проблемы — владельцу в одну сводку',
    metaTitle: 'Отчёт со смены через бота: выручка, фото, проблемы',
    metaDescription: 'Сотрудник в конце смены отвечает боту на короткие вопросы, бот напоминает, если отчёта нет, а владелец получает сводку по всем точкам и историю в таблице.',
    excerpt: 'Отчёты со смены приходят в личку вразнобой или не приходят вовсе. Показываю, как бот собирает их по единой форме и складывает в одну сводку владельцу.',
    tags: ['боты', 'отчёты', 'сеть точек', 'абонентка'],
    relatedSlugs: ['vyruchka-kazhdoy-tochki-kontrol-seti-2026', 'prostoy-bot-na-odnu-zadachu-2026', 'krazhi-i-nedostachi-na-kasse-2026'] }),

  E({ slug: 'napominaniya-klientam-ob-oplate-2026', category: 'finance', heroIcon: 'ph-fill ph-bell', ctaInternal: CTA2,
    title: 'Напоминания клиентам об оплате по графику: вежливо, вовремя и с отметкой, кто оплатил',
    metaTitle: 'Напоминания клиентам об оплате по графику',
    metaDescription: 'Абонентские услуги, рассрочки, аренда, обучение: напоминание перед оплатой и в день платежа, ссылка на оплату, отметка об оплате и список должников владельцу.',
    excerpt: 'Клиенты не отказываются платить — они забывают. Разбираю, как настроить напоминания по графику, чтобы они работали без неловких звонков.',
    tags: ['оплата', 'напоминания', 'дебиторка', 'абонентка'],
    relatedSlugs: ['debitorka-iz-1c-napominaniya-dolzhnikam-2026', 'platezhnyy-kalendar-malyy-biznes-2026', 'otchet-so-smeny-cherez-bota-2026'] }),

  E({ slug: 'pereschet-prajsa-pri-smene-kursa-2026', heroIcon: 'ph-fill ph-currency-circle-dollar', ctaInternal: CTA2,
    title: 'Пересчёт прайса при смене курса или цен поставщика: новые цены сами уходят на сайт',
    metaTitle: 'Пересчёт прайса при смене курса: цены на сайте сами',
    metaDescription: 'Цена зависит от курса и закупки. Правила наценки и округления, порог изменения, пересчёт по расписанию и выгрузка на сайт, в бот и на площадки.',
    excerpt: 'Импортёр пересчитывает прайс вручную каждую неделю и всё равно отстаёт от курса. Показываю, как настроить пересчёт по правилам, чтобы цены не прыгали каждый день.',
    tags: ['прайс', 'курс валют', 'цены', 'абонентка'],
    relatedSlugs: ['sebestoimost-importa-v-1c-dostavka-poshliny-2026', 'import-kataloga-iz-prajsa-postavshchika-2026', 'tovarnyy-fid-dlya-reklamy-i-ploshchadok-2026'] }),

  E({ slug: 'pozicii-sayta-v-poiske-raz-v-nedelyu-2026', category: 'marketing', heroIcon: 'ph-fill ph-trend-up', ctaInternal: CTA2,
    title: 'Позиции сайта в поиске раз в неделю: что выросло, что упало и почему',
    metaTitle: 'Позиции сайта в поиске: еженедельный отчёт',
    metaDescription: 'Ключевые запросы по городу, снимок позиций в Яндексе раз в неделю, сравнение с прошлой неделей и отчёт в мессенджер: что выросло, что упало и на какой странице.',
    excerpt: 'Без регулярного замера непонятно, помогают ли правки на сайте. Разбираю, как отслеживать позиции раз в неделю и как читать отчёт, чтобы не паниковать из-за колебаний.',
    tags: ['SEO', 'позиции', 'Яндекс', 'абонентка'],
    relatedSlugs: ['pereezd-sayta-bez-poteri-poziciy-2026', 'otchet-po-reklame-i-zayavkam-kazhdoe-utro-2026', 'sayt-upal-monitoring-sayta-i-domena-2026'] }),

  E({ slug: 'sbor-vakansiy-i-rezyume-po-filtram-2026', category: 'sales', heroIcon: 'ph-fill ph-users', ctaInternal: CTA2,
    title: 'Сбор вакансий и резюме по фильтрам: новые позиции в мессенджер каждый день',
    metaTitle: 'Сбор вакансий и резюме по фильтрам в мессенджер',
    metaDescription: 'Для HR, кадровых агентств и анализа рынка зарплат: сбор из открытых источников по должности, городу и зарплате, отсев дублей и выжимка в мессенджер.',
    excerpt: 'Рекрутер тратит утро на просмотр одних и тех же площадок. Показываю, как собирать новые вакансии и резюме по фильтрам и что учесть про персональные данные.',
    tags: ['HR', 'вакансии', 'парсер', 'абонентка'],
    relatedSlugs: ['uvedomleniya-o-tenderah-i-obyavleniyah-2026', 'parser-dannyh-na-zakaz-2026', 'otslezhivanie-izmeneniy-na-saytah-2026'] }),

  E({ slug: 'otslezhivanie-izmeneniy-na-saytah-2026', heroIcon: 'ph-fill ph-eye', ctaInternal: CTA2,
    title: 'Отслеживание изменений на важных сайтах: правила площадок, цены поставщиков, условия закупок',
    metaTitle: 'Отслеживание изменений на сайтах: уведомления в мессенджер',
    metaDescription: 'Правила маркетплейсов, прайсы поставщиков, условия тендеров. Сохраняем снимок страницы, сравниваем и присылаем в мессенджер, что именно поменялось.',
    excerpt: 'Важные изменения на чужих сайтах замечают слишком поздно. Разбираю, как следить за нужными страницами и получать только настоящие изменения, без шума.',
    tags: ['мониторинг', 'сайты', 'уведомления', 'абонентка'],
    relatedSlugs: ['changedetection-monitoring-saytov-2026', 'monitoring-assortimenta-konkurentov-2026', 'uvedomleniya-o-tenderah-i-obyavleniyah-2026'] }),

  E({ slug: 'avtovygruzka-obyavleniy-na-avito-iz-kataloga-2026', category: 'marketing', heroIcon: 'ph-fill ph-megaphone', ctaInternal: CTA2,
    title: 'Автовыгрузка объявлений на Авито из каталога: цены и наличие обновляются сами',
    metaTitle: 'Автовыгрузка объявлений на Авито из каталога',
    metaDescription: 'Сотни товаров или услуг: объявления из учёта или таблицы через официальную автозагрузку, обновление цен и остатков, снятие проданного и заявки в CRM.',
    excerpt: 'Вести сотни объявлений вручную невозможно. Показываю, как выгружать их из каталога автоматически и за чем следить, чтобы выгрузка не ломалась.',
    tags: ['Авито', 'объявления', 'каталог', 'абонентка'],
    relatedSlugs: ['avito-i-1c-obyavleniya-iz-ostatkov-2026', 'priem-zayavok-s-avito-v-crm-2027', 'tovarnyy-fid-dlya-reklamy-i-ploshchadok-2026'] }),

  E({ slug: 'ezhemesyachnyy-it-obkhod-malogo-ofisa-2026', category: 'security', heroIcon: 'ph-fill ph-hard-drives', ctaInternal: CTA2,
    title: 'Ежемесячный IT-обход малого офиса: обновления, копии, доступы и продления',
    metaTitle: 'Ежемесячное IT-обслуживание малого офиса',
    metaDescription: 'Раз в месяц: обновления, проверка копий, доступы уволенных, сроки доменов и подписок, место на дисках и короткий отчёт владельцу, что требует решения.',
    excerpt: 'В маленьком офисе IT ломается не сразу, а по накоплению мелочей. Разбираю, что входит в ежемесячный обход и почему он дешевле, чем тушить пожары.',
    tags: ['IT-обслуживание', 'малый бизнес', 'безопасность', 'абонентка'],
    relatedSlugs: ['it-nastroyka-malenkogo-ofisa-razovo-2026', 'proverka-vosstanovleniya-iz-kopii-2026', 'korporativnaya-pochta-i-obshchiy-disk-2026'] }),

];
