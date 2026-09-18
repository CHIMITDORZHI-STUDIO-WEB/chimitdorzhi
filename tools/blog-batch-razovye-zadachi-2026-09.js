// Разовые задачи и абонентка: парсеры, выгрузки, скрипты, простые боты и
// регулярный присмотр. Все статьи ведут на предложение «Разовые задачи».
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-19';
const S = 'https://chimitdorzhi.tech';

const SVC = { title: 'Небольшие задачи без большого проекта', services: [
  { icon: 'ph-fill ph-download-simple', label: 'Парсеры и выгрузки в таблицы' },
  { icon: 'ph-fill ph-code', label: 'Скрипты, генераторы документов, обработка файлов' },
  { icon: 'ph-fill ph-robot', label: 'Простые боты и заявки в мессенджер' },
  { icon: 'ph-fill ph-lifebuoy', label: 'Абонентка: мониторинг, поддержка, отчёты' },
]};
const CTA1 = { url: `${S}/predlozheniya/razovye-zadachi-skripty-parsery/`, label: 'Описать задачу и получить оценку' };
const CTA2 = { url: `${S}/predlozheniya/razovye-zadachi-skripty-parsery/`, label: 'Обсудить абонентку' };

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));

const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 4, shortForm: true, category: 'development',
      servicesOffer: SVC, ctaInternal: CTA1, toc: tocFrom(html) },
    o, { contentHtml: html });
};

module.exports = [

  // ---------- Разовые ----------
  E({ slug: 'parser-cen-wb-ozon-v-tablicu-2026', category: 'marketing', heroIcon: 'ph-fill ph-tag',
    title: 'Парсер цен и остатков с Wildberries и Ozon в таблицу: разово или каждый день',
    metaTitle: 'Парсер цен с Wildberries и Ozon в таблицу на заказ',
    metaDescription: 'Цены, скидки, наличие и рейтинг конкурентов по вашим позициям — в одной таблице. Что собирать, как часто и почему парсер маркетплейса нужно поддерживать.',
    excerpt: 'Селлеру нужно видеть цены и наличие конкурентов, а не копировать их руками. Разбираю, как устроен парсер маркетплейсов, что в нём собирать и когда хватит разового снимка.',
    tags: ['парсер', 'маркетплейсы', 'цены конкурентов', 'разовые задачи'],
    relatedSlugs: ['monitoring-cen-konkurentov-2026', 'parser-dannyh-na-zakaz-2026', 'monitoring-assortimenta-konkurentov-2026'] }),

  E({ slug: 'sbor-bazy-kompaniy-iz-otkrytyh-istochnikov-2026', category: 'sales', heroIcon: 'ph-fill ph-address-book',
    title: 'Сбор базы компаний из открытых справочников и карт для отдела продаж',
    metaTitle: 'Сбор базы компаний из открытых источников для продаж',
    metaDescription: 'Список организаций по городу и отрасли с телефонами и сайтами — из открытых данных. Что собирать законно, как чистить дубли и загружать базу в CRM.',
    excerpt: 'Отделу продаж нужна база компаний, а собирать её вручную — недели. Показываю, что можно собирать из открытых источников, где граница законного и как подготовить базу к работе.',
    tags: ['парсер', 'база клиентов', 'продажи', 'разовые задачи'],
    relatedSlugs: ['parser-dannyh-na-zakaz-2026', 'crm-dlya-malogo-biznesa-2026', 'konkurentnaya-razvedka-legalno-2026'] }),

  E({ slug: 'vygruzka-iz-crm-v-tablicu-2026', heroIcon: 'ph-fill ph-table',
    title: 'Выгрузка из CRM в таблицу: отчёт, который обновляется сам',
    metaTitle: 'Выгрузка из CRM в Google-таблицу автоматически',
    metaDescription: 'Сделки, заявки и работа менеджеров в таблице без копирования руками. Как данные из CRM сами попадают в таблицу по расписанию и не ломаются при смене воронки.',
    excerpt: 'Стандартные отчёты CRM неудобны, и их копируют в таблицу руками. Разбираю, как настроить выгрузку, которая обновляется сама, и какие поля в ней действительно нужны.',
    tags: ['CRM', 'таблицы', 'отчёты', 'разовые задачи'],
    relatedSlugs: ['amocrm-i-1c-integraciya-2026', 'dashbord-rukovoditelyu-v-telegram-max-2026', 'skript-dlya-google-tablic-2026'] }),

  E({ slug: 'perehod-s-crm-na-crm-perenos-dannyh-2026', heroIcon: 'ph-fill ph-arrows-left-right',
    title: 'Переезд с одной CRM на другую: как перенести клиентов, сделки и историю',
    metaTitle: 'Переезд на другую CRM: перенос клиентов и сделок',
    metaDescription: 'Сменили CRM — и нельзя потерять базу. Что переносится легко, что сложнее, как сопоставить поля и этапы, почистить дубли и переключиться без потерь.',
    excerpt: 'Переход на новую CRM пугает потерей базы и истории. Показываю, что переносится само, где основная работа и как пройти переключение без остановки продаж.',
    tags: ['CRM', 'перенос данных', 'миграция', 'разовые задачи'],
    relatedSlugs: ['migraciya-dannyh-slozhnee-chem-kazhetsya-2026', 'bitrix24-vs-amocrm-2026', 'iz-excel-v-crm-za-mesyac-2027'] }),

  E({ slug: 'skript-dlya-google-tablic-2026', heroIcon: 'ph-fill ph-grid-four',
    title: 'Скрипт для Google- и Яндекс-таблиц: когда таблица начинает работать сама',
    metaTitle: 'Скрипт для Google-таблиц на заказ: автоматизация таблиц',
    metaDescription: 'Автозаполнение, сводка из нескольких листов, сообщение по строке, напоминание по дате. Что умеет скрипт в таблице и когда пора переходить на нормальную систему.',
    excerpt: 'Таблица — самый популярный учёт в малом бизнесе. Разбираю, что в ней можно автоматизировать скриптом, где у этого подхода предел и как не потерять доступ к таблице.',
    tags: ['Google-таблицы', 'скрипты', 'автоматизация', 'разовые задачи'],
    relatedSlugs: ['excel-spasenie-i-tupik-2026', 'napisat-skript-na-zakaz-2026', 'vygruzka-iz-crm-v-tablicu-2026'] }),

  E({ slug: 'generaciya-dogovorov-i-schetov-iz-shablona-2026', heroIcon: 'ph-fill ph-file-text',
    title: 'Договоры, счета и КП из шаблона за минуту: генератор документов под ваш бизнес',
    metaTitle: 'Генератор договоров и счетов из шаблона на заказ',
    metaDescription: 'Менеджер собирает договор из старого и ошибается в реквизитах. Шаблон с полями, данные из таблицы или CRM, готовый документ или PDF и хранение в папке клиента.',
    excerpt: 'Договоры и счета собирают копированием старых, и ошибки неизбежны. Показываю, как устроен генератор документов из шаблона и что в нём всё равно проверяет человек.',
    tags: ['документы', 'договоры', 'автоматизация', 'разовые задачи'],
    relatedSlugs: ['uchet-dogovorov-sroki-prodleniya-2026', 'napisat-skript-na-zakaz-2026', 'vygruzka-iz-crm-v-tablicu-2026'] }),

  E({ slug: 'massovaya-obrabotka-foto-tovarov-2026', heroIcon: 'ph-fill ph-images',
    title: 'Массовая обработка фото товаров: переименовать, сжать, убрать фон, собрать карточки',
    metaTitle: 'Массовая обработка фото товаров: скрипт на заказ',
    metaDescription: 'Сотни фото для сайта и маркетплейсов: переименовать по артикулу, привести к размеру, сжать, наложить знак, убрать фон и разложить по папкам — одним скриптом.',
    excerpt: 'Обработка сотен фото товаров вручную съедает дни. Разбираю, что скрипт делает с фото пачкой, где нужна нейросеть и что проверять глазами перед загрузкой.',
    tags: ['фото товаров', 'маркетплейсы', 'скрипты', 'разовые задачи'],
    relatedSlugs: ['rembg-udalenie-fona-foto-2026', 'medlennyy-sayt-ubivaet-prodazhi-2026', 'import-kataloga-iz-prajsa-postavshchika-2026'] }),

  E({ slug: 'ocifrovka-bumazhnyh-anket-i-blankov-2026', heroIcon: 'ph-fill ph-scan',
    title: 'Бумажные анкеты и бланки в таблицу: распознавание вместо ручного набора',
    metaTitle: 'Распознавание бумажных анкет и бланков в таблицу',
    metaDescription: 'Анкеты, заявления и бланки заказов: сканируем, распознаём поля в таблицу, человек проверяет сомнительное. Рукописный текст и персональные данные.',
    excerpt: 'Бумажные анкеты перебивают руками часами. Показываю, как распознавание забирает поля в таблицу, где оно ошибается и как обращаться со сканами с персональными данными.',
    tags: ['OCR', 'распознавание', 'документы', 'разовые задачи'],
    relatedSlugs: ['ocifrovka-bumazhnyh-form-2026', 'ocr-raspoznat-tekst-s-foto-2026', 'nakladnye-postavshchikov-v-1c-raspoznavanie-2026'] }),

  E({ slug: 'import-kataloga-iz-prajsa-postavshchika-2026', heroIcon: 'ph-fill ph-download-simple',
    title: 'Импорт каталога из прайса поставщика на сайт или маркетплейс',
    metaTitle: 'Импорт каталога из прайса поставщика на сайт',
    metaDescription: 'Прайс поставщика на тысячи позиций со своими названиями и артикулами. Как сопоставить поля и категории, подтянуть фото, посчитать наценку и не наплодить дублей.',
    excerpt: 'Перенос прайса поставщика на сайт по строчке — недели работы. Разбираю, как загрузить каталог целиком, что обычно не так в прайсах и когда нужно регулярное обновление.',
    tags: ['каталог', 'интернет-магазин', 'импорт', 'разовые задачи'],
    relatedSlugs: ['moysklad-vmesto-1c-integraciya-2026', 'ostatki-na-wb-ozon-ym-iz-odnoy-1c-2026', 'massovaya-obrabotka-foto-tovarov-2026'] }),

  E({ slug: 'rasshirenie-brauzera-dlya-rutiny-sotrudnika-2026', heroIcon: 'ph-fill ph-puzzle-piece',
    title: 'Расширение для браузера под рутину сотрудника: когда оно дешевле новой программы',
    metaTitle: 'Расширение для браузера под задачи сотрудника на заказ',
    metaDescription: 'Сотрудник весь день повторяет одни действия в веб-сервисе. Расширение добавляет кнопку, подставляет шаблон и переносит данные в CRM — без смены программы.',
    excerpt: 'Иногда рутину убирает не новая система, а маленькое расширение для браузера. Показываю, что оно умеет, как его ставят только своим сотрудникам и о чём помнить по безопасности.',
    tags: ['расширение браузера', 'автоматизация', 'сотрудники', 'разовые задачи'],
    relatedSlugs: ['napisat-skript-na-zakaz-2026', 'vygruzka-iz-crm-v-tablicu-2026', 'prostoy-bot-na-odnu-zadachu-2026'] }),

  E({ slug: 'kalkulyator-stoimosti-na-sayt-2026', heroIcon: 'ph-fill ph-calculator',
    title: 'Калькулятор стоимости на сайт: клиент считает сам и оставляет заявку',
    metaTitle: 'Калькулятор стоимости на сайт: заказать разработку',
    metaDescription: 'Клиент хочет понять порядок цены до звонка. Какие параметры спрашивать, вилка вместо точной цены и заявка с расчётом в мессенджер.',
    excerpt: 'Калькулятор на сайте отвечает на главный вопрос клиента и приносит заявку с готовым расчётом. Разбираю, как его сделать, чтобы он не отпугивал ценой.',
    tags: ['калькулятор', 'сайт', 'заявки', 'разовые задачи'],
    relatedSlugs: ['lending-pod-direkt-kalkulyator-keys-2026', 'zayavki-s-sayta-v-telegram-i-celi-metriki-2026', 'prostoy-bot-na-odnu-zadachu-2026'] }),

  E({ slug: 'prostoy-bot-na-odnu-zadachu-2026', heroIcon: 'ph-fill ph-robot',
    title: 'Простой бот на одну задачу: заявка, запись, опрос или выдача файла',
    metaTitle: 'Простой бот в Telegram и MAX на одну задачу',
    metaDescription: 'Не нужна большая система — нужен бот, который делает одно дело: принимает заявку, записывает, проводит опрос или выдаёт прайс. Что важно даже в маленьком боте.',
    excerpt: 'Большой бот с десятью функциями часто не нужен. Показываю, какие задачи закрывает простой бот, куда уходит результат и что проверить, чтобы заявки не терялись.',
    tags: ['боты', 'Telegram', 'MAX', 'разовые задачи'],
    relatedSlugs: ['onlayn-zapis-bez-sayta-v-messendzhere-2026', 'zayavki-s-sayta-v-telegram-i-celi-metriki-2026', 'podderzhka-botov-i-integraciy-2026'] }),

  E({ slug: 'zayavki-s-sayta-v-telegram-i-celi-metriki-2026', category: 'marketing', heroIcon: 'ph-fill ph-paper-plane-tilt',
    title: 'Заявки с сайта в Telegram или MAX и цели в Метрике: чтобы ни одна не потерялась',
    metaTitle: 'Заявки с сайта в Telegram и MAX, цели в Метрике',
    metaDescription: 'Форма шлёт письмо на почту, которую никто не читает. Заявка в мессенджер менеджеру и в CRM с источником, цели в Метрике и еженедельная проверка формы.',
    excerpt: 'Заявки с сайта теряются в почте, а откуда они пришли, неизвестно. Разбираю, как отправлять их в мессенджер и CRM и настроить цели, чтобы видеть источник каждой.',
    tags: ['заявки', 'Яндекс Метрика', 'Telegram', 'разовые задачи'],
    relatedSlugs: ['okupaemost-reklamy-metrika-celi-2026', 'zayavki-iz-whatsapp-i-lichnyh-soobshcheniy-v-sistemu-2026', 'sayt-upal-monitoring-sayta-i-domena-2026'] }),

  E({ slug: 'it-nastroyka-malenkogo-ofisa-razovo-2026', category: 'security', heroIcon: 'ph-fill ph-hard-drives',
    title: 'IT-порядок в маленьком офисе за одну задачу: почта, копии, доступы, пароли',
    metaTitle: 'IT-порядок в маленьком офисе: почта, копии, доступы',
    metaDescription: 'В компании на 3–15 человек нет айтишника. Разово навести порядок: почта на домене, общий диск, копии, пароли, список сервисов и владельцев.',
    excerpt: 'Маленькой компании не нужен штатный айтишник, но нужен порядок. Показываю, что можно настроить за одну задачу и как потом жить самостоятельно или с лёгкой абоненткой.',
    tags: ['IT-инфраструктура', 'малый бизнес', 'доступы', 'разовые задачи'],
    relatedSlugs: ['korporativnaya-pochta-i-obshchiy-disk-2026', 'rezervnye-kopii-vazhnee-chem-kazhetsya-2026', 'proverka-vosstanovleniya-iz-kopii-2026'] }),

  // ---------- Абонентка ----------
  E({ slug: 'monitoring-assortimenta-konkurentov-2026', category: 'marketing', heroIcon: 'ph-fill ph-binoculars', ctaInternal: CTA2,
    title: 'Мониторинг ассортимента конкурентов: новинки, пропавшие позиции и акции каждую неделю',
    metaTitle: 'Мониторинг ассортимента конкурентов каждую неделю',
    metaDescription: 'Не только цены: что конкурент добавил, убрал, что закончилось и какие акции запустил. Сбор по расписанию, сравнение с прошлой неделей и отчёт в мессенджер.',
    excerpt: 'Цены — лишь часть картины. Разбираю, как следить за ассортиментом и акциями конкурентов и получать короткий отчёт «что изменилось» каждую неделю.',
    tags: ['конкуренты', 'мониторинг', 'парсер', 'абонентка'],
    relatedSlugs: ['monitoring-cen-konkurentov-2026', 'parser-cen-wb-ozon-v-tablicu-2026', 'konkurentnaya-razvedka-legalno-2026'] }),

  E({ slug: 'otchet-po-reklame-i-zayavkam-kazhdoe-utro-2026', category: 'marketing', heroIcon: 'ph-fill ph-chart-bar', ctaInternal: CTA2,
    title: 'Отчёт по рекламе и заявкам каждое утро: сколько стоила заявка вчера',
    metaTitle: 'Отчёт по рекламе и заявкам каждое утро в мессенджер',
    metaDescription: 'Владелец платит за рекламу и не знает, сколько продаж она дала. Утренняя сводка: расход по каналам, заявки, стоимость заявки и продажи из CRM.',
    excerpt: 'Рекламный бюджет уходит, а связь с продажами не видна. Показываю, как собрать утреннюю сводку из кабинетов, Метрики и CRM и почему за ней нужно следить.',
    tags: ['реклама', 'отчёты', 'аналитика', 'абонентка'],
    relatedSlugs: ['dashbord-rukovoditelyu-v-telegram-max-2026', 'okupaemost-reklamy-metrika-celi-2026', 'zayavki-s-sayta-v-telegram-i-celi-metriki-2026'] }),

  E({ slug: 'uvedomleniya-o-tenderah-i-obyavleniyah-2026', category: 'sales', heroIcon: 'ph-fill ph-bell-ringing', ctaInternal: CTA2,
    title: 'Уведомления о новых тендерах и объявлениях по ключевым словам',
    metaTitle: 'Уведомления о тендерах по ключевым словам в мессенджер',
    metaDescription: 'Поставщику важно первым узнавать о закупках по своей теме. Сбор с площадок по словам, регионам и суммам, отсев мусора и выжимка со ссылкой в мессенджер.',
    excerpt: 'Хорошие закупки находят те, кто узнал о них первым. Разбираю, как настроить уведомления о тендерах и объявлениях и почему словарь фильтров приходится уточнять.',
    tags: ['тендеры', 'госзакупки', 'уведомления', 'абонентка'],
    relatedSlugs: ['goszakupki-44-fz-223-fz-kak-nachat-2026', 'parser-dannyh-na-zakaz-2026', 'monitoring-upominaniy-kompanii-2026'] }),

  E({ slug: 'sayt-upal-monitoring-sayta-i-domena-2026', heroIcon: 'ph-fill ph-heartbeat', ctaInternal: CTA2,
    title: 'Сайт упал, а вы узнали от клиента: мониторинг сайта, домена и формы заявок',
    metaTitle: 'Мониторинг сайта, домена и формы заявок',
    metaDescription: 'Сайт лёг ночью, сертификат истёк, домен не продлили, форма молча сломалась. Проверка каждые минуты, сроки домена, тестовая заявка и тревога в мессенджер.',
    excerpt: 'О проблемах с сайтом владелец часто узнаёт последним. Показываю, что проверять автоматически, как быстро узнать о сбое и почему следить мало — надо ещё чинить.',
    tags: ['мониторинг', 'сайт', 'домен', 'абонентка'],
    relatedSlugs: ['uptime-kuma-monitoring-dostupnosti-2026', 'zayavki-s-sayta-v-telegram-i-celi-metriki-2026', 'skolko-stoit-soderzhat-sayt-i-bota-2026'] }),

  E({ slug: 'podderzhka-botov-i-integraciy-2026', heroIcon: 'ph-fill ph-lifebuoy', ctaInternal: CTA2,
    title: 'Бот работал и перестал: зачем нужна поддержка ботов и интеграций',
    metaTitle: 'Поддержка ботов и интеграций: почему они ломаются',
    metaDescription: 'Мессенджеры меняют правила, истекают токены, интеграция ломается тихо. Что входит в поддержку: мониторинг ошибок, обновления, правки и отчёт.',
    excerpt: 'Бот и интеграции не ломаются громко — они тихо перестают работать. Разбираю, почему так бывает и что делает поддержка, чтобы вы узнали о проблеме раньше клиентов.',
    tags: ['поддержка', 'боты', 'интеграции', 'абонентка'],
    relatedSlugs: ['skolko-stoit-podderzhka-dorabotka-po-2026', 'skolko-stoit-soderzhat-sayt-i-bota-2026', 'prostoy-bot-na-odnu-zadachu-2026'] }),

  E({ slug: 'avtoposting-v-telegram-max-vk-2026', category: 'marketing', heroIcon: 'ph-fill ph-calendar-plus', ctaInternal: CTA2,
    title: 'Автопостинг в Telegram, MAX и VK по контент-плану',
    metaTitle: 'Автопостинг в Telegram, MAX и VK по контент-плану',
    metaDescription: 'Посты пишутся пачкой, а публикуются по расписанию во все каналы сразу. Контент-план в таблице, адаптация под площадки, проверка выхода и отчёт по реакциям.',
    excerpt: 'Вести три канала вручную — это ежедневная рутина. Показываю, как публиковать по контент-плану во все площадки сразу и что при этом нужно проверять.',
    tags: ['автопостинг', 'Telegram', 'MAX', 'абонентка'],
    relatedSlugs: ['avtoposting-v-threads-keys-2026', 'postiz-avtoposting-socseti-2026', 'monitoring-upominaniy-kompanii-2026'] }),

  E({ slug: 'proverka-vosstanovleniya-iz-kopii-2026', category: 'security', heroIcon: 'ph-fill ph-arrow-counter-clockwise', ctaInternal: CTA2,
    title: 'Копия есть, а восстановиться нельзя: зачем раз в месяц проверять резервные копии',
    metaTitle: 'Проверка резервных копий: пробное восстановление раз в месяц',
    metaDescription: 'Копии настроены давно, но из них никто не восстанавливался. Пустая, неполная, на том же диске, потерян пароль — проверка ловит это заранее.',
    excerpt: 'Резервная копия, из которой нельзя восстановиться, бесполезна. Разбираю частые беды с копиями и как устроена ежемесячная проверка с пробным восстановлением.',
    tags: ['резервные копии', 'безопасность', '1С', 'абонентка'],
    relatedSlugs: ['rezervnye-kopii-vazhnee-chem-kazhetsya-2026', 'rezervnoe-kopirovanie-1c-2026', 'it-nastroyka-malenkogo-ofisa-razovo-2026'] }),

  E({ slug: 'monitoring-upominaniy-kompanii-2026', category: 'marketing', heroIcon: 'ph-fill ph-megaphone', ctaInternal: CTA2,
    title: 'Мониторинг упоминаний компании: что о вас пишут в чатах, пабликах и на форумах',
    metaTitle: 'Мониторинг упоминаний компании в чатах и пабликах',
    metaDescription: 'Отзывы на картах видны, а обсуждения в городских чатах и пабликах — нет. Сбор упоминаний в открытых источниках, уведомления и сводка раз в неделю.',
    excerpt: 'О компании говорят не только в отзывах. Показываю, как находить упоминания в открытых чатах и пабликах, быстро узнавать о негативе и отвечать по существу.',
    tags: ['репутация', 'мониторинг', 'отзывы', 'абонентка'],
    relatedSlugs: ['reputaciya-otzyvy-yandex-2gis-2026', 'ii-bot-otzyvy-reputaciya-2026', 'avtoposting-v-telegram-max-vk-2026'] }),

  E({ slug: 'soprovozhdenie-ii-pomoshchnika-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-brain', ctaInternal: CTA2,
    title: 'ИИ-помощник запущен: кто следит за ответами и обновляет базу знаний',
    metaTitle: 'Сопровождение ИИ-помощника: ответы и база знаний',
    metaDescription: 'Цены, услуги и правила меняются, а база знаний бота — нет, и он начинает ошибаться. Разбор неудачных ответов, обновление базы, тесты и контроль расходов.',
    excerpt: 'ИИ-помощник без присмотра со временем начинает отвечать неправильно. Разбираю, что входит в его сопровождение и как понять, что бот пора поправить.',
    tags: ['ИИ', 'боты', 'база знаний', 'абонентка'],
    relatedSlugs: ['ii-galyucinacii-nelzya-slepo-doveryat-2026', 'obuchit-sotrudnikov-rabotat-s-ii-2026', 'podderzhka-botov-i-integraciy-2026'] }),

  E({ slug: 'avtomaticheskaya-peredacha-zakazov-v-dostavku-2026', heroIcon: 'ph-fill ph-truck', ctaInternal: CTA2,
    title: 'Заказы сами уходят на сборку и в доставку: без переписывания из одной системы в другую',
    metaTitle: 'Автоматическая передача заказов на сборку и в доставку',
    metaDescription: 'Заказ с сайта менеджер переписывает в учёт, потом в службу доставки и шлёт трек руками. Связка: учёт, сборка, заявка в доставку, трек клиенту и статусы.',
    excerpt: 'Каждый заказ переписывают три раза. Показываю, как связать сайт, учёт и службу доставки, чтобы заказ шёл сам, а клиент получал трек в мессенджер.',
    tags: ['доставка', 'заказы', 'интеграция', 'абонентка'],
    relatedSlugs: ['sborka-zakazov-s-tsd-bez-peresorta-2026', 'svoya-kurerskaya-sluzhba-restorana-2027', 'moysklad-vmesto-1c-integraciya-2026'] }),

];
