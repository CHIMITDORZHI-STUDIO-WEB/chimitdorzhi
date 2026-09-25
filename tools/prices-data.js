// Прайс «что мы делаем» для страницы /ceny/.
// Перенесён из «Цены_для_партнёра.md» 25.09.2026. Цены — нижняя граница, «от».
// price.kind: price — сумма; project — от 500 000 ₽, показываем «по проекту»;
// included — входит в пакет «Цифровой сотрудник»; text — цены нет, только описание.
// price.unit: once — разово, month — в месяц, hour — в час. term.days: -1 — постоянно.
module.exports = [
  {
    "id": "dorabotka-1s",
    "group": "c1",
    "section": "1С",
    "name": "Доработка 1С",
    "what": "Отчёты, печатные формы, обработки, расширения без снятия с поддержки",
    "price": {
      "kind": "price",
      "value": 2700,
      "unit": "hour",
      "prefix": ""
    },
    "priceRaw": "от 2 700 ₽/час",
    "term": {
      "days": 1,
      "label": "от 1 дня"
    },
    "monthly": "нет"
  },
  {
    "id": "1s-i-sayt-crm-bot",
    "group": "c1",
    "section": "1С",
    "name": "1С и сайт, CRM, бот",
    "what": "Обмен заказами, остатками, ценами и клиентами между 1С и сайтом, CRM, ботом",
    "price": {
      "kind": "price",
      "value": 40000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 40 000 ₽",
    "term": {
      "days": 7,
      "label": "от 1 недели"
    },
    "monthly": "нет"
  },
  {
    "id": "1s-i-marketpleysy",
    "group": "c1",
    "section": "1С",
    "name": "1С и маркетплейсы",
    "what": "Wildberries, Ozon, Яндекс Маркет: настройка модуля или своя интеграция через API",
    "price": {
      "kind": "price",
      "value": 25000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 25 000 ₽",
    "term": {
      "days": 3,
      "label": "от 3 дней"
    },
    "monthly": "модуль от 3 000 ₽"
  },
  {
    "id": "markirovka-chestnyy-znak",
    "group": "c1",
    "section": "1С",
    "name": "Маркировка «Честный знак»",
    "what": "Настройка в 1С, ЭДО, сканеры, коды на приёмке и отгрузке",
    "price": {
      "kind": "price",
      "value": 15000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 15 000 ₽",
    "term": {
      "days": 3,
      "label": "от 3 дней"
    },
    "monthly": "ЭДО по тарифу оператора"
  },
  {
    "id": "fgis-merkuriy-v-1s",
    "group": "c1",
    "section": "1С",
    "name": "ФГИС «Меркурий» в 1С",
    "what": "Ветеринарные документы на мясо, молоко, рыбу прямо из 1С, без ручного ввода на сайте ВетИС",
    "price": {
      "kind": "price",
      "value": 20000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 20 000 ₽",
    "term": {
      "days": 3,
      "label": "от 3 дней"
    },
    "monthly": "модуль от 900 ₽"
  },
  {
    "id": "edo-i-elektronnaya-podpis",
    "group": "c1",
    "section": "1С",
    "name": "ЭДО и электронная подпись",
    "what": "Диадок, СБИС, 1С-ЭДО: подключение, настройка в 1С, доверенности МЧД, подпись сотрудников",
    "price": {
      "kind": "price",
      "value": 10000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 10 000 ₽",
    "term": {
      "days": 1,
      "label": "от 1 дня"
    },
    "monthly": "тариф ЭДО от 3 000 ₽/год"
  },
  {
    "id": "egais-v-1s",
    "group": "c1",
    "section": "1С",
    "name": "ЕГАИС в 1С",
    "what": "Алкоголь и пиво: приёмка, остатки, списание, отчёты",
    "price": {
      "kind": "price",
      "value": 15000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 15 000 ₽",
    "term": {
      "days": 3,
      "label": "от 3 дней"
    },
    "monthly": "нет"
  },
  {
    "id": "drugie-gossistemy-v-1s",
    "group": "c1",
    "section": "1С",
    "name": "Другие госсистемы в 1С",
    "what": "ЕГИСЗ для клиник, ФГИС «Зерно» и «Сатурн» для агро, ГИИС ДМДК для ювелирки: обмен прямо из 1С",
    "price": {
      "kind": "price",
      "value": 20000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 20 000 ₽",
    "term": {
      "days": 3,
      "label": "от 3 дней"
    },
    "monthly": "модуль по тарифу"
  },
  {
    "id": "b2b-kabinet-s-1s",
    "group": "c1",
    "section": "1С",
    "name": "B2B-кабинет с 1С",
    "what": "Оптовый покупатель сам видит свои цены и остатки, заказывает, смотрит долги и документы",
    "price": {
      "kind": "price",
      "value": 200000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 200 000 ₽",
    "term": {
      "days": 30,
      "label": "от 1 месяца"
    },
    "monthly": "сервер от 2 000 ₽"
  },
  {
    "id": "bot-zakazov-s-1s",
    "group": "c1",
    "section": "1С",
    "name": "Бот заказов с 1С",
    "what": "Клиент заказывает в MAX или Telegram, заказ сразу падает в 1С, остатки и цены из 1С",
    "price": {
      "kind": "price",
      "value": 80000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 80 000 ₽",
    "term": {
      "days": 14,
      "label": "от 2 недель"
    },
    "monthly": "сервер от 1 000 ₽"
  },
  {
    "id": "mobilnoe-prilozhenie-s-1s",
    "group": "c1",
    "section": "1С",
    "name": "Мобильное приложение с 1С",
    "what": "Для торговых агентов, курьеров, выездных мастеров: заявки, заказы, фотоотчёты",
    "price": {
      "kind": "price",
      "value": 150000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 150 000 ₽",
    "term": {
      "days": 30,
      "label": "от 1 месяца"
    },
    "monthly": "сервер от 2 000 ₽"
  },
  {
    "id": "telefoniya-i-crm",
    "group": "c1",
    "section": "1С",
    "name": "Телефония и CRM",
    "what": "Запись звонков, карточка клиента при входящем, пропущенные сразу в задачи",
    "price": {
      "kind": "price",
      "value": 20000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 20 000 ₽",
    "term": {
      "days": 3,
      "label": "от 3 дней"
    },
    "monthly": "телефония по тарифу"
  },
  {
    "id": "1s-i-avito",
    "group": "c1",
    "section": "1С",
    "name": "1С и Авито",
    "what": "Объявления, цены и остатки из 1С на Авито, заказы и сообщения обратно",
    "price": {
      "kind": "price",
      "value": 20000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 20 000 ₽",
    "term": {
      "days": 3,
      "label": "от 3 дней"
    },
    "monthly": "модуль от 1 500 ₽"
  },
  {
    "id": "otchety-dlya-sobstvennika",
    "group": "c1",
    "section": "1С",
    "name": "Отчёты для собственника",
    "what": "Дашборд по продажам, складу и деньгам из 1С на телефоне, управленческий учёт",
    "price": {
      "kind": "price",
      "value": 60000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 60 000 ₽",
    "term": {
      "days": 14,
      "label": "от 2 недель"
    },
    "monthly": "нет"
  },
  {
    "id": "soprovozhdenie-1s",
    "group": "c1",
    "section": "1С",
    "name": "Сопровождение 1С",
    "what": "Абонентское обслуживание, обновления, мелкие доработки",
    "price": {
      "kind": "price",
      "value": 15000,
      "unit": "month",
      "prefix": ""
    },
    "priceRaw": "от 15 000 ₽/мес",
    "term": {
      "days": -1,
      "label": "постоянно"
    },
    "monthly": "это и есть абонентка"
  },
  {
    "id": "lending",
    "group": "web",
    "section": "Сайты",
    "name": "Лендинг",
    "what": "Одна-три страницы, заявки в мессенджер или CRM, адаптив, базовое SEO",
    "price": {
      "kind": "price",
      "value": 40000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 40 000 ₽",
    "term": {
      "days": 5,
      "label": "от 5 дней"
    },
    "monthly": "хостинг и домен от 500 ₽"
  },
  {
    "id": "korporativnyy-sayt",
    "group": "web",
    "section": "Сайты",
    "name": "Корпоративный сайт",
    "what": "Разделы, услуги, кейсы, блог, несколько языков",
    "price": {
      "kind": "price",
      "value": 100000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 100 000 ₽",
    "term": {
      "days": 21,
      "label": "от 3 недель"
    },
    "monthly": "хостинг и домен от 500 ₽"
  },
  {
    "id": "internet-magazin",
    "group": "web",
    "section": "Сайты",
    "name": "Интернет-магазин",
    "what": "Каталог, корзина, оплата, личный кабинет, обмен с 1С",
    "price": {
      "kind": "price",
      "value": 200000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 200 000 ₽",
    "term": {
      "days": 30,
      "label": "от 1 месяца"
    },
    "monthly": "сервер от 2 000 ₽"
  },
  {
    "id": "marketpleys-ili-agregator",
    "group": "web",
    "section": "Сайты",
    "name": "Маркетплейс или агрегатор",
    "what": "Площадка под нишу или город: продавцы, заказы, комиссия",
    "price": {
      "kind": "project",
      "value": 500000,
      "unit": "once"
    },
    "priceRaw": "от 500 000 ₽",
    "term": {
      "days": 90,
      "label": "от 3 месяцев"
    },
    "monthly": "сервер от 5 000 ₽"
  },
  {
    "id": "perenos-sayta-s-konstruktora",
    "group": "web",
    "section": "Сайты",
    "name": "Перенос сайта с конструктора",
    "what": "С Tilda и других конструкторов на свой хостинг: сайт тот же, подписка больше не нужна",
    "price": {
      "kind": "price",
      "value": 30000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 30 000 ₽",
    "term": {
      "days": 5,
      "label": "от 5 дней"
    },
    "monthly": "хостинг от 500 ₽"
  },
  {
    "id": "kvizy-i-kalkulyatory-na-sayt",
    "group": "web",
    "section": "Сайты",
    "name": "Квизы и калькуляторы на сайт",
    "what": "Калькулятор стоимости, подбор товара или услуги, заявка с готовым расчётом",
    "price": {
      "kind": "price",
      "value": 20000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 20 000 ₽",
    "term": {
      "days": 3,
      "label": "от 3 дней"
    },
    "monthly": "нет"
  },
  {
    "id": "seo",
    "group": "mkt",
    "section": "Продвижение",
    "name": "SEO",
    "what": "Рост сайта в Яндексе и Google: структура, тексты, техническая оптимизация, ссылки",
    "price": {
      "kind": "price",
      "value": 40000,
      "unit": "month",
      "prefix": ""
    },
    "priceRaw": "от 40 000 ₽/мес",
    "term": {
      "days": 90,
      "label": "эффект от 3 месяцев"
    },
    "monthly": "это и есть оплата"
  },
  {
    "id": "geo-otvety-neyrosetey",
    "group": "mkt",
    "section": "Продвижение",
    "name": "GEO: ответы нейросетей",
    "what": "Чтобы Алиса, Яндекс Нейро, ChatGPT и другие ИИ называли и рекомендовали компанию в своих ответах",
    "price": {
      "kind": "price",
      "value": 50000,
      "unit": "month",
      "prefix": ""
    },
    "priceRaw": "от 50 000 ₽/мес",
    "term": {
      "days": 60,
      "label": "эффект от 2 месяцев"
    },
    "monthly": "это и есть оплата"
  },
  {
    "id": "kontekstnaya-reklama",
    "group": "mkt",
    "section": "Продвижение",
    "name": "Контекстная реклама",
    "what": "Яндекс Директ: настройка кампаний и ведение",
    "price": {
      "kind": "price",
      "value": 25000,
      "unit": "once",
      "prefix": "настройка"
    },
    "priceRaw": "настройка от 25 000 ₽",
    "term": {
      "days": 5,
      "label": "от 5 дней"
    },
    "monthly": "ведение от 20 000 ₽ + бюджет"
  },
  {
    "id": "skvoznaya-analitika-i-koll-treking",
    "group": "mkt",
    "section": "Продвижение",
    "name": "Сквозная аналитика и колл-трекинг",
    "what": "Откуда пришла каждая заявка и звонок, сколько стоил клиент по каждому каналу рекламы",
    "price": {
      "kind": "price",
      "value": 30000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 30 000 ₽",
    "term": {
      "days": 7,
      "label": "от 1 недели"
    },
    "monthly": "сервис аналитики от 5 000 ₽"
  },
  {
    "id": "smm-i-kontent",
    "group": "mkt",
    "section": "Продвижение",
    "name": "SMM и контент",
    "what": "Ведение соцсетей, посты, ролики, личный бренд руководителя",
    "price": {
      "kind": "price",
      "value": 40000,
      "unit": "month",
      "prefix": ""
    },
    "priceRaw": "от 40 000 ₽/мес",
    "term": {
      "days": -1,
      "label": "постоянно"
    },
    "monthly": "это и есть оплата"
  },
  {
    "id": "kontent-zavod",
    "group": "mkt",
    "section": "Продвижение",
    "name": "Контент-завод",
    "what": "Ролики и карусели на потоке с автопубликацией в соцсети по графику",
    "price": {
      "kind": "price",
      "value": 50000,
      "unit": "month",
      "prefix": ""
    },
    "priceRaw": "от 50 000 ₽/мес",
    "term": {
      "days": -1,
      "label": "постоянно"
    },
    "monthly": "это и есть оплата"
  },
  {
    "id": "email-i-sms-rassylki",
    "group": "mkt",
    "section": "Продвижение",
    "name": "Email- и SMS-рассылки",
    "what": "Цепочки писем, напоминания, возврат клиентов, поздравления и акции",
    "price": {
      "kind": "price",
      "value": 30000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 30 000 ₽",
    "term": {
      "days": 7,
      "label": "от 1 недели"
    },
    "monthly": "сервис рассылок от 1 000 ₽"
  },
  {
    "id": "menedzher-marketpleysov",
    "group": "mkt",
    "section": "Продвижение",
    "name": "Менеджер маркетплейсов",
    "what": "Ведение кабинетов Wildberries и Ozon: карточки, цены, акции, реклама внутри площадки",
    "price": {
      "kind": "price",
      "value": 30000,
      "unit": "month",
      "prefix": ""
    },
    "priceRaw": "от 30 000 ₽/мес",
    "term": {
      "days": -1,
      "label": "постоянно"
    },
    "monthly": "это и есть оплата"
  },
  {
    "id": "kommercheskie-predlozheniya-i-prezentacii",
    "group": "mkt",
    "section": "Продвижение",
    "name": "Коммерческие предложения и презентации",
    "what": "КП, презентации для инвесторов и партнёров, продающие тексты",
    "price": {
      "kind": "price",
      "value": 20000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 20 000 ₽",
    "term": {
      "days": 3,
      "label": "от 3 дней"
    },
    "monthly": "нет"
  },
  {
    "id": "markirovka-reklamy",
    "group": "mkt",
    "section": "Продвижение",
    "name": "Маркировка рекламы",
    "what": "Регистрация креативов в ОРД и ЕРИР, отчёты, чтобы не было штрафов",
    "price": {
      "kind": "price",
      "value": 10000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 10 000 ₽",
    "term": {
      "days": 1,
      "label": "от 1 дня"
    },
    "monthly": "ОРД от 5 000 ₽"
  },
  {
    "id": "otzyvy-i-kartochki-na-kartah",
    "group": "mkt",
    "section": "Продвижение",
    "name": "Отзывы и карточки на картах",
    "what": "Яндекс Карты, 2ГИС: карточка компании, ответы на отзывы, рост рейтинга",
    "price": {
      "kind": "price",
      "value": 15000,
      "unit": "month",
      "prefix": ""
    },
    "priceRaw": "от 15 000 ₽/мес",
    "term": {
      "days": -1,
      "label": "постоянно"
    },
    "monthly": "это и есть оплата"
  },
  {
    "id": "dizayn-i-firmennyy-stil",
    "group": "mkt",
    "section": "Продвижение",
    "name": "Дизайн и фирменный стиль",
    "what": "Логотип, фирменный стиль, дизайн интерфейсов",
    "price": {
      "kind": "price",
      "value": 50000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 50 000 ₽",
    "term": {
      "days": 14,
      "label": "от 2 недель"
    },
    "monthly": "нет"
  },
  {
    "id": "bot-v-messendzhere",
    "group": "bots",
    "section": "Боты и мини-приложения",
    "name": "Бот в мессенджере",
    "what": "MAX, Telegram, VK, иностранные мессенджеры и соцсети: запись, заявки, рассылки, частые вопросы",
    "price": {
      "kind": "price",
      "value": 30000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 30 000 ₽",
    "term": {
      "days": 7,
      "label": "от 1 недели"
    },
    "monthly": "сервер от 500 ₽"
  },
  {
    "id": "bot-dlya-biznesa",
    "group": "bots",
    "section": "Боты и мини-приложения",
    "name": "Бот для бизнеса",
    "what": "Оплата, запись в календарь, CRM, розыгрыши, партнёрская программа по QR",
    "price": {
      "kind": "price",
      "value": 80000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 80 000 ₽",
    "term": {
      "days": 14,
      "label": "от 2 недель"
    },
    "monthly": "сервер от 1 000 ₽"
  },
  {
    "id": "mini-prilozhenie-v-messendzhere",
    "group": "bots",
    "section": "Боты и мини-приложения",
    "name": "Мини-приложение в мессенджере",
    "what": "MAX, Telegram, VK: витрина, заказ, оплата, баллы и лояльность",
    "price": {
      "kind": "price",
      "value": 150000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 150 000 ₽",
    "term": {
      "days": 30,
      "label": "от 1 месяца"
    },
    "monthly": "сервер от 2 000 ₽"
  },
  {
    "id": "edinoe-okno-soobscheniy",
    "group": "bots",
    "section": "Боты и мини-приложения",
    "name": "Единое окно сообщений",
    "what": "Все переписки из MAX, Telegram, VK, Авито, иностранных мессенджеров и с сайта в одном окне, с распределением по менеджерам",
    "price": {
      "kind": "price",
      "value": 50000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 50 000 ₽",
    "term": {
      "days": 7,
      "label": "от 1 недели"
    },
    "monthly": "сервер от 2 000 ₽"
  },
  {
    "id": "programma-loyalnosti-i-partnerka",
    "group": "ind",
    "section": "Решения для отраслей",
    "name": "Программа лояльности и партнёрка",
    "what": "Баллы, кешбэк, приведи друга, общая программа между несколькими брендами",
    "price": {
      "kind": "price",
      "value": 150000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 150 000 ₽",
    "term": {
      "days": 21,
      "label": "от 3 недель"
    },
    "monthly": "сервер от 2 000 ₽"
  },
  {
    "id": "onlayn-zapis-i-bronirovanie",
    "group": "ind",
    "section": "Решения для отраслей",
    "name": "Онлайн-запись и бронирование",
    "what": "Салоны, клиники, гостиницы, посуточная аренда: календарь, предоплата, напоминания",
    "price": {
      "kind": "price",
      "value": 150000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 150 000 ₽",
    "term": {
      "days": 21,
      "label": "от 3 недель"
    },
    "monthly": "сервер от 2 000 ₽"
  },
  {
    "id": "platforma-obucheniya",
    "group": "ind",
    "section": "Решения для отраслей",
    "name": "Платформа обучения",
    "what": "Видеоуроки, тесты, проверка заданий, кабинеты ученика и преподавателя",
    "price": {
      "kind": "price",
      "value": 200000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 200 000 ₽",
    "term": {
      "days": 30,
      "label": "от 1 месяца"
    },
    "monthly": "сервер и видео от 3 000 ₽"
  },
  {
    "id": "servis-zakaza-i-dostavki",
    "group": "ind",
    "section": "Решения для отраслей",
    "name": "Сервис заказа и доставки",
    "what": "Такси, доставка, выездные услуги: клиент, исполнитель, диспетчер, карта",
    "price": {
      "kind": "project",
      "value": 800000,
      "unit": "once"
    },
    "priceRaw": "от 800 000 ₽",
    "term": {
      "days": 90,
      "label": "от 3 месяцев"
    },
    "monthly": "сервер и карты от 10 000 ₽"
  },
  {
    "id": "geymifikaciya",
    "group": "ind",
    "section": "Решения для отраслей",
    "name": "Геймификация",
    "what": "Уровни, задания, награды для клиентов кафе и магазинов или для сотрудников",
    "price": {
      "kind": "price",
      "value": 150000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 150 000 ₽",
    "term": {
      "days": 21,
      "label": "от 3 недель"
    },
    "monthly": "сервер от 2 000 ₽"
  },
  {
    "id": "3d-tury-i-virtualnye-ekskursii",
    "group": "ind",
    "section": "Решения для отраслей",
    "name": "3D-туры и виртуальные экскурсии",
    "what": "Гостиницы, недвижимость, базы отдыха, шоурумы: тур для сайта, Яндекс Карт и объявлений",
    "price": {
      "kind": "price",
      "value": 40000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 40 000 ₽",
    "term": {
      "days": 3,
      "label": "от 3 дней"
    },
    "monthly": "хостинг тура от 500 ₽"
  },
  {
    "id": "chaevye-po-qr",
    "group": "ind",
    "section": "Решения для отраслей",
    "name": "Чаевые по QR",
    "what": "Для кафе, салонов, такси: QR на столе или бейдже",
    "price": {
      "kind": "price",
      "value": 15000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 15 000 ₽",
    "term": {
      "days": 3,
      "label": "от 3 дней"
    },
    "monthly": "комиссия эквайринга"
  },
  {
    "id": "qr-menyu-s-zakazom",
    "group": "ind",
    "section": "Решения для отраслей",
    "name": "QR-меню с заказом",
    "what": "Гость сканирует QR на столе, выбирает блюда и заказывает, заказ сразу на кухню и официанту",
    "price": {
      "kind": "price",
      "value": 30000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 30 000 ₽",
    "term": {
      "days": 7,
      "label": "от 1 недели"
    },
    "monthly": "сервер от 1 000 ₽"
  },
  {
    "id": "elektronnaya-ochered",
    "group": "ind",
    "section": "Решения для отраслей",
    "name": "Электронная очередь",
    "what": "Клиники, сервисы, офисы: запись в очередь с телефона, табло, уведомления о вызове",
    "price": {
      "kind": "price",
      "value": 50000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 50 000 ₽",
    "term": {
      "days": 14,
      "label": "от 2 недель"
    },
    "monthly": "сервер от 1 000 ₽"
  },
  {
    "id": "it-dlya-raboty-s-kitaem-i-ved",
    "group": "ind",
    "section": "Решения для отраслей",
    "name": "IT для работы с Китаем и ВЭД",
    "what": "Переписка с фабриками на китайском и английском, перевод спецификаций, сравнение предложений в одной таблице",
    "price": {
      "kind": "price",
      "value": 40000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 40 000 ₽",
    "term": {
      "days": 7,
      "label": "от 1 недели"
    },
    "monthly": "нет"
  },
  {
    "id": "vypusk-cfa",
    "group": "ind",
    "section": "Решения для отраслей",
    "name": "Выпуск ЦФА",
    "what": "Привлечение денег через цифровые финансовые активы: подготовка выпуска, документы, выбор оператора платформы",
    "price": {
      "kind": "price",
      "value": 300000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 300 000 ₽",
    "term": {
      "days": 60,
      "label": "от 2 месяцев"
    },
    "monthly": "комиссия оператора ЦФА"
  },
  {
    "id": "audit-i-plan-vnedreniya-ii",
    "group": "ai",
    "section": "ИИ: внедрение и автоматизация",
    "name": "Аудит и план внедрения ИИ",
    "what": "Разбираем процессы, находим, где ИИ окупится, считаем экономию, план по этапам",
    "price": {
      "kind": "price",
      "value": 50000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 50 000 ₽",
    "term": {
      "days": 7,
      "label": "от 1 недели"
    },
    "monthly": "нет"
  },
  {
    "id": "ii-konsultant",
    "group": "ai",
    "section": "ИИ: внедрение и автоматизация",
    "name": "ИИ-консультант",
    "what": "Отвечает клиентам на сайте и в мессенджерах по базе знаний компании, круглосуточно",
    "price": {
      "kind": "price",
      "value": 50000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 50 000 ₽",
    "term": {
      "days": 7,
      "label": "от 1 недели"
    },
    "monthly": "модель от 3 000 ₽"
  },
  {
    "id": "ii-agent",
    "group": "ai",
    "section": "ИИ: внедрение и автоматизация",
    "name": "ИИ-агент",
    "what": "Сам принимает заявки, записывает, работает с CRM и 1С, ведёт несколько каналов сразу",
    "price": {
      "kind": "price",
      "value": 150000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 150 000 ₽",
    "term": {
      "days": 21,
      "label": "от 3 недель"
    },
    "monthly": "модель от 5 000 ₽"
  },
  {
    "id": "avtomatizaciya-processov-s-ii",
    "group": "ai",
    "section": "ИИ: внедрение и автоматизация",
    "name": "Автоматизация процессов с ИИ",
    "what": "Разбор входящих писем и заявок, заполнение CRM, документы по шаблону, согласования",
    "price": {
      "kind": "price",
      "value": 100000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 100 000 ₽",
    "term": {
      "days": 14,
      "label": "от 2 недель"
    },
    "monthly": "модель от 3 000 ₽"
  },
  {
    "id": "agent-dlya-raboty-na-kompyutere",
    "group": "ai",
    "section": "ИИ: внедрение и автоматизация",
    "name": "Агент для работы на компьютере",
    "what": "Повторяет действия сотрудника в программах и на сайтах: выгрузки, формы, отчёты",
    "price": {
      "kind": "price",
      "value": 150000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 150 000 ₽",
    "term": {
      "days": 21,
      "label": "от 3 недель"
    },
    "monthly": "модель от 5 000 ₽"
  },
  {
    "id": "svoy-ii-na-servere-kompanii",
    "group": "ai",
    "section": "ИИ: внедрение и автоматизация",
    "name": "Свой ИИ на сервере компании",
    "what": "Открытая модель на вашем сервере: данные не уходят наружу, 152-ФЗ, без подписок",
    "price": {
      "kind": "price",
      "value": 100000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 100 000 ₽",
    "term": {
      "days": 14,
      "label": "от 2 недель"
    },
    "monthly": "сервер с видеокартой от 15 000 ₽"
  },
  {
    "id": "obuchenie-komandy-rabote-s-ii",
    "group": "ai",
    "section": "ИИ: внедрение и автоматизация",
    "name": "Обучение команды работе с ИИ",
    "what": "Практикум под задачи компании: промпты, ассистенты, безопасность данных",
    "price": {
      "kind": "price",
      "value": 80000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 80 000 ₽",
    "term": {
      "days": 1,
      "label": "от 1 дня"
    },
    "monthly": "нет"
  },
  {
    "id": "poisk-po-dokumentam-rag",
    "group": "ai",
    "section": "ИИ: текст и код",
    "name": "Поиск по документам (RAG)",
    "what": "Ответы по регламентам, договорам, базе знаний со ссылкой на источник",
    "price": {
      "kind": "price",
      "value": 150000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 150 000 ₽",
    "term": {
      "days": 21,
      "label": "от 3 недель"
    },
    "monthly": "модель и сервер от 5 000 ₽"
  },
  {
    "id": "voprosy-k-baze-dannyh-obychnym-yazykom",
    "group": "ai",
    "section": "ИИ: текст и код",
    "name": "Вопросы к базе данных обычным языком",
    "what": "«Сколько продали в августе по Чите»: ИИ сам строит запрос к 1С или базе и отвечает",
    "price": {
      "kind": "price",
      "value": 150000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 150 000 ₽",
    "term": {
      "days": 21,
      "label": "от 3 недель"
    },
    "monthly": "модель от 3 000 ₽"
  },
  {
    "id": "razbor-i-klassifikaciya-tekstov",
    "group": "ai",
    "section": "ИИ: текст и код",
    "name": "Разбор и классификация текстов",
    "what": "Обращения, отзывы, письма: темы, тональность, срочность, маршрут",
    "price": {
      "kind": "price",
      "value": 80000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 80 000 ₽",
    "term": {
      "days": 14,
      "label": "от 2 недель"
    },
    "monthly": "модель от 3 000 ₽"
  },
  {
    "id": "perevod-i-lokalizaciya",
    "group": "ai",
    "section": "ИИ: текст и код",
    "name": "Перевод и локализация",
    "what": "Сайты, документы, переписка с поставщиками, в том числе китайский",
    "price": {
      "kind": "price",
      "value": 30000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 30 000 ₽",
    "term": {
      "days": 3,
      "label": "от 3 дней"
    },
    "monthly": "нет"
  },
  {
    "id": "moderaciya-i-proverka-otvetov",
    "group": "ai",
    "section": "ИИ: текст и код",
    "name": "Модерация и проверка ответов",
    "what": "Фильтр запрещённого, проверка фактов в ответах ИИ, защита от утечек",
    "price": {
      "kind": "price",
      "value": 100000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 100 000 ₽",
    "term": {
      "days": 14,
      "label": "от 2 недель"
    },
    "monthly": "модель от 3 000 ₽"
  },
  {
    "id": "raspoznavanie-dokumentov",
    "group": "ai",
    "section": "ИИ: документы и данные",
    "name": "Распознавание документов",
    "what": "Сканы, накладные, счета, паспорта, чеки: данные сразу в 1С и CRM",
    "price": {
      "kind": "price",
      "value": 100000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 100 000 ₽",
    "term": {
      "days": 14,
      "label": "от 2 недель"
    },
    "monthly": "модель от 3 000 ₽"
  },
  {
    "id": "chertezhi-i-cad",
    "group": "ai",
    "section": "ИИ: документы и данные",
    "name": "Чертежи и CAD",
    "what": "Распознавание чертежей и спецификаций, поиск по архиву чертежей",
    "price": {
      "kind": "price",
      "value": 200000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 200 000 ₽",
    "term": {
      "days": 30,
      "label": "от 1 месяца"
    },
    "monthly": "сервер от 5 000 ₽"
  },
  {
    "id": "prognozy-prodazh-i-sprosa",
    "group": "ai",
    "section": "ИИ: документы и данные",
    "name": "Прогнозы продаж и спроса",
    "what": "Прогноз по истории продаж: закупки, остатки, сезонность",
    "price": {
      "kind": "price",
      "value": 200000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 200 000 ₽",
    "term": {
      "days": 30,
      "label": "от 1 месяца"
    },
    "monthly": "сервер от 3 000 ₽"
  },
  {
    "id": "rekomendacii-dlya-magazina",
    "group": "ai",
    "section": "ИИ: документы и данные",
    "name": "Рекомендации для магазина",
    "what": "«С этим покупают», персональные подборки на сайте и в рассылках",
    "price": {
      "kind": "price",
      "value": 200000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 200 000 ₽",
    "term": {
      "days": 30,
      "label": "от 1 месяца"
    },
    "monthly": "сервер от 3 000 ₽"
  },
  {
    "id": "kontent-dlya-marketpleysov-i-reklamy",
    "group": "ai",
    "section": "ИИ: картинки и видео",
    "name": "Контент для маркетплейсов и рекламы",
    "what": "Фото товара, фон, инфографика, карточки, баннеры",
    "price": {
      "kind": "price",
      "value": 30000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 30 000 ₽",
    "term": {
      "days": 3,
      "label": "от 3 дней"
    },
    "monthly": "нет"
  },
  {
    "id": "video-i-ii-avatary",
    "group": "ai",
    "section": "ИИ: картинки и видео",
    "name": "Видео и ИИ-аватары",
    "what": "Ролики, говорящий аватар, нарезки из длинных видео",
    "price": {
      "kind": "price",
      "value": 50000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 50 000 ₽",
    "term": {
      "days": 7,
      "label": "от 1 недели"
    },
    "monthly": "нет"
  },
  {
    "id": "3d-modeli-tovarov-iz-foto",
    "group": "ai",
    "section": "ИИ: картинки и видео",
    "name": "3D-модели товаров из фото",
    "what": "Для сайта, маркетплейсов и просмотра в дополненной реальности",
    "price": {
      "kind": "price",
      "value": 100000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 100 000 ₽",
    "term": {
      "days": 14,
      "label": "от 2 недель"
    },
    "monthly": "нет"
  },
  {
    "id": "virtualnaya-primerka",
    "group": "ai",
    "section": "ИИ: картинки и видео",
    "name": "Виртуальная примерка",
    "what": "Одежда и аксессуары на фото покупателя",
    "price": {
      "kind": "price",
      "value": 150000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 150 000 ₽",
    "term": {
      "days": 30,
      "label": "от 1 месяца"
    },
    "monthly": "сервер с видеокартой от 10 000 ₽"
  },
  {
    "id": "proverka-podlinnosti-foto-i-dokumentov",
    "group": "ai",
    "section": "ИИ: картинки и видео",
    "name": "Проверка подлинности фото и документов",
    "what": "Выявление подделок и дипфейков",
    "price": {
      "kind": "price",
      "value": 150000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 150 000 ₽",
    "term": {
      "days": 30,
      "label": "от 1 месяца"
    },
    "monthly": "сервер от 5 000 ₽"
  },
  {
    "id": "videoanalitika-na-gotovyh-modelyah",
    "group": "ai",
    "section": "ИИ: компьютерное зрение",
    "name": "Видеоаналитика на готовых моделях",
    "what": "Подсчёт посетителей, очереди, каски и спецодежда на существующих камерах",
    "price": {
      "kind": "price",
      "value": 150000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 150 000 ₽",
    "term": {
      "days": 21,
      "label": "от 3 недель"
    },
    "monthly": "сервер от 5 000 ₽"
  },
  {
    "id": "vezd-po-nomeram",
    "group": "ai",
    "section": "ИИ: компьютерное зрение",
    "name": "Въезд по номерам",
    "what": "Шлагбаум, парковка, склад: распознавание номеров, учёт въезда и выезда",
    "price": {
      "kind": "price",
      "value": 100000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 100 000 ₽",
    "term": {
      "days": 14,
      "label": "от 2 недель"
    },
    "monthly": "сервер от 3 000 ₽"
  },
  {
    "id": "kontrol-vykladki",
    "group": "ai",
    "section": "ИИ: компьютерное зрение",
    "name": "Контроль выкладки",
    "what": "Пустые полки, ценники, соблюдение планограммы по фото и камерам",
    "price": {
      "kind": "price",
      "value": 300000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 300 000 ₽",
    "term": {
      "days": 30,
      "label": "от 1 месяца"
    },
    "monthly": "сервер от 5 000 ₽"
  },
  {
    "id": "podschet-produkcii",
    "group": "ai",
    "section": "ИИ: компьютерное зрение",
    "name": "Подсчёт продукции",
    "what": "Учёт штук, мешков, палет, машин на конвейере и складе по камере",
    "price": {
      "kind": "price",
      "value": 300000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 300 000 ₽",
    "term": {
      "days": 30,
      "label": "от 1 месяца"
    },
    "monthly": "сервер с видеокартой от 10 000 ₽"
  },
  {
    "id": "kontrol-kachestva-na-proizvodstve",
    "group": "ai",
    "section": "ИИ: компьютерное зрение",
    "name": "Контроль качества на производстве",
    "what": "Своя обученная модель: брак, дефекты, сортировка",
    "price": {
      "kind": "project",
      "value": 500000,
      "unit": "once"
    },
    "priceRaw": "от 500 000 ₽",
    "term": {
      "days": 60,
      "label": "от 2 месяцев"
    },
    "monthly": "сервер с видеокартой от 15 000 ₽"
  },
  {
    "id": "rasshifrovka-zvonkov-i-soveschaniy",
    "group": "ai",
    "section": "ИИ: речь и звук",
    "name": "Расшифровка звонков и совещаний",
    "what": "Текст, протокол встречи, оценка работы менеджеров по скрипту",
    "price": {
      "kind": "price",
      "value": 60000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 60 000 ₽",
    "term": {
      "days": 14,
      "label": "от 2 недель"
    },
    "monthly": "модель от 3 000 ₽"
  },
  {
    "id": "golosovoy-robot",
    "group": "ai",
    "section": "ИИ: речь и звук",
    "name": "Голосовой робот",
    "what": "Принимает и делает звонки, записывает, обзванивает базу, итог в CRM",
    "price": {
      "kind": "price",
      "value": 100000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 100 000 ₽",
    "term": {
      "days": 21,
      "label": "от 3 недель"
    },
    "monthly": "минуты от 6 ₽"
  },
  {
    "id": "sintez-rechi-i-ozvuchka",
    "group": "ai",
    "section": "ИИ: речь и звук",
    "name": "Синтез речи и озвучка",
    "what": "Голос для роликов и автоответчика, свой голос бренда",
    "price": {
      "kind": "price",
      "value": 30000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 30 000 ₽",
    "term": {
      "days": 3,
      "label": "от 3 дней"
    },
    "monthly": "нет"
  },
  {
    "id": "diagnostika-oborudovaniya-po-zvuku",
    "group": "ai",
    "section": "ИИ: речь и звук",
    "name": "Диагностика оборудования по звуку",
    "what": "Выявление неисправностей станков и техники по шуму",
    "price": {
      "kind": "price",
      "value": 300000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 300 000 ₽",
    "term": {
      "days": 60,
      "label": "от 2 месяцев"
    },
    "monthly": "сервер от 5 000 ₽"
  },
  {
    "id": "medicina",
    "group": "ai",
    "section": "ИИ: отрасли и наука",
    "name": "Медицина",
    "what": "Анализ снимков, помощь врачу с документами и расшифровкой приёма",
    "price": {
      "kind": "project",
      "value": 500000,
      "unit": "once"
    },
    "priceRaw": "от 500 000 ₽",
    "term": {
      "days": 60,
      "label": "от 2 месяцев"
    },
    "monthly": "сервер с видеокартой от 15 000 ₽"
  },
  {
    "id": "finansy-i-bezopasnost",
    "group": "ai",
    "section": "ИИ: отрасли и наука",
    "name": "Финансы и безопасность",
    "what": "Скоринг, выявление мошенничества, кибербезопасность",
    "price": {
      "kind": "price",
      "value": 300000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 300 000 ₽",
    "term": {
      "days": 60,
      "label": "от 2 месяцев"
    },
    "monthly": "сервер от 5 000 ₽"
  },
  {
    "id": "sputnikovye-snimki-i-geodannye",
    "group": "ai",
    "section": "ИИ: отрасли и наука",
    "name": "Спутниковые снимки и геоданные",
    "what": "Поля, стройки, лес, изменения территорий",
    "price": {
      "kind": "price",
      "value": 300000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 300 000 ₽",
    "term": {
      "days": 60,
      "label": "от 2 месяцев"
    },
    "monthly": "снимки и сервер от 10 000 ₽"
  },
  {
    "id": "nauka-i-issledovaniya",
    "group": "ai",
    "section": "ИИ: отрасли и наука",
    "name": "Наука и исследования",
    "what": "Обработка данных экспериментов, биология и химия, погода и климат",
    "price": {
      "kind": "price",
      "value": 300000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 300 000 ₽",
    "term": {
      "days": 60,
      "label": "от 2 месяцев"
    },
    "monthly": "сервер с видеокартой от 15 000 ₽"
  },
  {
    "id": "ii-v-obrazovanii",
    "group": "ai",
    "section": "ИИ: отрасли и наука",
    "name": "ИИ в образовании",
    "what": "Школы, колледжи, вузы: проверка работ, методические материалы, ИИ-наставник для студентов",
    "price": {
      "kind": "price",
      "value": 100000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 100 000 ₽",
    "term": {
      "days": 30,
      "label": "от 1 месяца"
    },
    "monthly": "модель от 3 000 ₽"
  },
  {
    "id": "robototehnika",
    "group": "ai",
    "section": "ИИ: отрасли и наука",
    "name": "Робототехника",
    "what": "ИИ для роботов и автономной техники",
    "price": {
      "kind": "project",
      "value": 1000000,
      "unit": "once"
    },
    "priceRaw": "от 1 000 000 ₽",
    "term": {
      "days": 90,
      "label": "от 3 месяцев"
    },
    "monthly": "по проекту"
  },
  {
    "id": "pilot-za-3-dnya",
    "group": "employee",
    "section": "Цифровой сотрудник",
    "name": "Пилот за 3 дня",
    "what": "Одна задача, обычно первая линия ответов. День 1: прайс и правила. День 2: ассистент отвечает, вы правите. День 3: работает сам, спорное присылает вам",
    "price": {
      "kind": "price",
      "value": 30000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 30 000 ₽",
    "term": {
      "days": 3,
      "label": "3 дня"
    },
    "monthly": "нет"
  },
  {
    "id": "rabota-assistenta",
    "group": "employee",
    "section": "Цифровой сотрудник",
    "name": "Работа ассистента",
    "what": "Сервер, модели, сопровождение, новые роли по мере роста",
    "price": {
      "kind": "price",
      "value": 15000,
      "unit": "month",
      "prefix": ""
    },
    "priceRaw": "от 15 000 ₽/мес",
    "term": {
      "days": -1,
      "label": "постоянно"
    },
    "monthly": "это и есть оплата"
  },
  {
    "id": "operator-pervoy-linii",
    "group": "employee",
    "section": "Цифровой сотрудник",
    "name": "Оператор первой линии",
    "what": "Отвечает на типовые вопросы за минуту в любое время по вашему прайсу, нестандартное передаёт вам с выжимкой",
    "price": {
      "kind": "included"
    },
    "priceRaw": "в составе",
    "term": {
      "days": null,
      "label": ""
    },
    "monthly": ""
  },
  {
    "id": "smm",
    "group": "employee",
    "section": "Цифровой сотрудник",
    "name": "СММ",
    "what": "Предлагает посты с текстом и картинкой, публикует после вашего «да», ведёт график, отвечает на комментарии",
    "price": {
      "kind": "included"
    },
    "priceRaw": "в составе",
    "term": {
      "days": null,
      "label": ""
    },
    "monthly": ""
  },
  {
    "id": "yurist",
    "group": "employee",
    "section": "Цифровой сотрудник",
    "name": "Юрист",
    "what": "Читает договор за минуту, показывает перекосы и риски, готовит документы по шаблонам, следит за сроками",
    "price": {
      "kind": "included"
    },
    "priceRaw": "в составе",
    "term": {
      "days": null,
      "label": ""
    },
    "monthly": ""
  },
  {
    "id": "kadrovik",
    "group": "employee",
    "section": "Цифровой сотрудник",
    "name": "Кадровик",
    "what": "Пишет вакансию, разбирает отклики, задаёт первые вопросы кандидатам, ведёт кадровые бумаги",
    "price": {
      "kind": "included"
    },
    "priceRaw": "в составе",
    "term": {
      "days": null,
      "label": ""
    },
    "monthly": ""
  },
  {
    "id": "analitik",
    "group": "employee",
    "section": "Цифровой сотрудник",
    "name": "Аналитик",
    "what": "Считает обращения и источники, частые вопросы, где уходят клиенты. Сводка за день, отчёт за месяц",
    "price": {
      "kind": "included"
    },
    "priceRaw": "в составе",
    "term": {
      "days": null,
      "label": ""
    },
    "monthly": ""
  },
  {
    "id": "finansovyy-pomoschnik",
    "group": "employee",
    "section": "Цифровой сотрудник",
    "name": "Финансовый помощник",
    "what": "Налоговая нагрузка и сравнение режимов, разбор кредитных договоров и претензий, пакеты на гранты",
    "price": {
      "kind": "included"
    },
    "priceRaw": "в составе",
    "term": {
      "days": null,
      "label": ""
    },
    "monthly": ""
  },
  {
    "id": "tehnicheskiy-pomoschnik",
    "group": "employee",
    "section": "Цифровой сотрудник",
    "name": "Технический помощник",
    "what": "Переносит данные между площадками, собирает выгрузки, заполняет таблицы",
    "price": {
      "kind": "included"
    },
    "priceRaw": "в составе",
    "term": {
      "days": null,
      "label": ""
    },
    "monthly": ""
  },
  {
    "id": "rossiyskaya-specifika",
    "group": "employee",
    "section": "Цифровой сотрудник",
    "name": "Российская специфика",
    "what": "Маркировка рекламы, проверка контрагента по ИНН, тендеры, переписка с Китаем, Wildberries и Ozon, отзывы на Яндекс Картах и 2ГИС",
    "price": {
      "kind": "included"
    },
    "priceRaw": "в составе",
    "term": {
      "days": null,
      "label": ""
    },
    "monthly": ""
  },
  {
    "id": "kak-rabotaet",
    "group": "employee",
    "section": "Цифровой сотрудник",
    "name": "Как работает",
    "what": "Живёт на сервере клиента в России. Каналы: MAX, Авито, VK, Telegram, почта, CRM и 1С. Управляется обычным чатом: текстом, голосом, фото. Журнал всех действий, 152-ФЗ, для медицины и юристов локальная модель",
    "price": {
      "kind": "included"
    },
    "priceRaw": "",
    "term": {
      "days": null,
      "label": ""
    },
    "monthly": ""
  },
  {
    "id": "pwa-prilozhenie",
    "group": "web",
    "section": "Приложения",
    "name": "PWA-приложение",
    "what": "Ставится с сайта без магазинов приложений: заказ, лояльность, кабинет клиента, пуши",
    "price": {
      "kind": "price",
      "value": 150000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 150 000 ₽",
    "term": {
      "days": 30,
      "label": "от 1 месяца"
    },
    "monthly": "сервер от 2 000 ₽"
  },
  {
    "id": "veb-servis-ili-saas",
    "group": "web",
    "section": "Приложения",
    "name": "Веб-сервис или SaaS",
    "what": "Сервис с кабинетами, подписками и оплатой",
    "price": {
      "kind": "price",
      "value": 400000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 400 000 ₽",
    "term": {
      "days": 60,
      "label": "от 2 месяцев"
    },
    "monthly": "сервер от 5 000 ₽"
  },
  {
    "id": "mobilnoe-prilozhenie-ios-i-android",
    "group": "web",
    "section": "Приложения",
    "name": "Мобильное приложение iOS и Android",
    "what": "Одно приложение на обе платформы; нативное отдельно по каждой",
    "price": {
      "kind": "price",
      "value": 300000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 300 000 ₽",
    "term": {
      "days": 60,
      "label": "от 2 месяцев"
    },
    "monthly": "сервер и магазины от 3 000 ₽"
  },
  {
    "id": "rasshirenie-dlya-brauzera-programma-dlya-pk",
    "group": "web",
    "section": "Приложения",
    "name": "Расширение для браузера, программа для ПК",
    "what": "Под внутренние задачи или продукт",
    "price": {
      "kind": "price",
      "value": 50000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 50 000 ₽",
    "term": {
      "days": 14,
      "label": "от 2 недель"
    },
    "monthly": "нет"
  },
  {
    "id": "opisanie-processov-i-reglamenty",
    "group": "c1",
    "section": "Учёт и автоматизация",
    "name": "Описание процессов и регламенты",
    "what": "Как устроена работа сейчас, где теряются время и деньги, регламенты и сроки для сотрудников. Первый шаг перед автоматизацией",
    "price": {
      "kind": "price",
      "value": 50000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 50 000 ₽",
    "term": {
      "days": 14,
      "label": "от 2 недель"
    },
    "monthly": "нет"
  },
  {
    "id": "crm-pod-process",
    "group": "c1",
    "section": "Учёт и автоматизация",
    "name": "CRM под процесс",
    "what": "Кабинеты по ролям, задачи и сроки, учёт техники и товара по QR, отчёты владельцу",
    "price": {
      "kind": "price",
      "value": 300000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 300 000 ₽",
    "term": {
      "days": 30,
      "label": "от 1 месяца"
    },
    "monthly": "сервер от 3 000 ₽"
  },
  {
    "id": "vnedrenie-bitriks24-ili-amocrm",
    "group": "c1",
    "section": "Учёт и автоматизация",
    "name": "Внедрение Битрикс24 или amoCRM",
    "what": "Воронки, роботы, интеграция с сайтом, телефонией, мессенджерами и 1С",
    "price": {
      "kind": "price",
      "value": 50000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 50 000 ₽",
    "term": {
      "days": 7,
      "label": "от 1 недели"
    },
    "monthly": "лицензия CRM от 2 500 ₽"
  },
  {
    "id": "gotovye-sistemy-na-servere-klienta",
    "group": "c1",
    "section": "Учёт и автоматизация",
    "name": "Готовые системы на сервере клиента",
    "what": "Open-source CRM, платформы, база знаний на своём сервере вместо подписок",
    "price": {
      "kind": "price",
      "value": 80000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 80 000 ₽",
    "term": {
      "days": 7,
      "label": "от 1 недели"
    },
    "monthly": "сервер от 2 000 ₽"
  },
  {
    "id": "avtomatizaciya-processov-i-dokumentov",
    "group": "c1",
    "section": "Учёт и автоматизация",
    "name": "Автоматизация процессов и документов",
    "what": "Заявки, согласования, документооборот, уведомления, связка сервисов",
    "price": {
      "kind": "price",
      "value": 60000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 60 000 ₽",
    "term": {
      "days": 14,
      "label": "от 2 недель"
    },
    "monthly": "сервер от 1 000 ₽"
  },
  {
    "id": "baza-znaniy-i-onbording",
    "group": "c1",
    "section": "Учёт и автоматизация",
    "name": "База знаний и онбординг",
    "what": "Регламенты в одном месте, обучение новичков, тесты, чек-листы первой недели",
    "price": {
      "kind": "price",
      "value": 80000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 80 000 ₽",
    "term": {
      "days": 14,
      "label": "от 2 недель"
    },
    "monthly": "сервер от 1 000 ₽"
  },
  {
    "id": "elektronnoe-podpisanie-dogovorov",
    "group": "c1",
    "section": "Учёт и автоматизация",
    "name": "Электронное подписание договоров",
    "what": "Клиент подписывает договор онлайн с телефона, без бумаги и визита в офис",
    "price": {
      "kind": "price",
      "value": 30000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 30 000 ₽",
    "term": {
      "days": 7,
      "label": "от 1 недели"
    },
    "monthly": "сервис подписи по тарифу"
  },
  {
    "id": "analitika",
    "group": "c1",
    "section": "Учёт и автоматизация",
    "name": "Аналитика",
    "what": "Юнит-экономика, отчёты, дашборды, выгрузки из касс и ОФД",
    "price": {
      "kind": "price",
      "value": 80000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 80 000 ₽",
    "term": {
      "days": 14,
      "label": "от 2 недель"
    },
    "monthly": "нет"
  },
  {
    "id": "monitoring-cen-konkurentov",
    "group": "c1",
    "section": "Учёт и автоматизация",
    "name": "Мониторинг цен конкурентов",
    "what": "Ежедневный сбор цен и наличия с сайтов и маркетплейсов, отчёт об изменениях",
    "price": {
      "kind": "price",
      "value": 40000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 40 000 ₽",
    "term": {
      "days": 14,
      "label": "от 2 недель"
    },
    "monthly": "сервер от 2 000 ₽"
  },
  {
    "id": "priem-platezhey",
    "group": "c1",
    "section": "Учёт и автоматизация",
    "name": "Приём платежей",
    "what": "СБП, онлайн-касса, эквайринг на сайте и в боте",
    "price": {
      "kind": "price",
      "value": 25000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 25 000 ₽",
    "term": {
      "days": 3,
      "label": "от 3 дней"
    },
    "monthly": "касса и эквайринг по тарифу"
  },
  {
    "id": "moysklad-evotor-i-drugie-uchetnye-sistemy",
    "group": "c1",
    "section": "Учёт и автоматизация",
    "name": "МойСклад, Эвотор и другие учётные системы",
    "what": "Для магазинов не на 1С: связка с сайтом, маркетплейсами, ботом и CRM",
    "price": {
      "kind": "price",
      "value": 20000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 20 000 ₽",
    "term": {
      "days": 3,
      "label": "от 3 дней"
    },
    "monthly": "подписка системы по тарифу"
  },
  {
    "id": "audit-sayta-po-152-fz",
    "group": "sec",
    "section": "Безопасность и инфраструктура",
    "name": "Аудит сайта по 152-ФЗ",
    "what": "Проверка на штрафы РКН: согласия, политика, cookies, формы",
    "price": {
      "kind": "price",
      "value": 15000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 15 000 ₽",
    "term": {
      "days": 2,
      "label": "от 2 дней"
    },
    "monthly": "нет"
  },
  {
    "id": "privedenie-v-poryadok-po-152-fz",
    "group": "sec",
    "section": "Безопасность и инфраструктура",
    "name": "Приведение в порядок по 152-ФЗ",
    "what": "Политика, согласия, cookies на сайте, уведомление в Роскомнадзор, документы для сотрудников",
    "price": {
      "kind": "price",
      "value": 30000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 30 000 ₽",
    "term": {
      "days": 7,
      "label": "от 1 недели"
    },
    "monthly": "нет"
  },
  {
    "id": "tehnicheskiy-audit",
    "group": "sec",
    "section": "Безопасность и инфраструктура",
    "name": "Технический аудит",
    "what": "Сайт, серверы, программы, безопасность: что сломается, что переплачиваете, план исправлений",
    "price": {
      "kind": "price",
      "value": 50000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 50 000 ₽",
    "term": {
      "days": 7,
      "label": "от 1 недели"
    },
    "monthly": "нет"
  },
  {
    "id": "it-direktor-na-autsorse",
    "group": "sec",
    "section": "Безопасность и инфраструктура",
    "name": "IT-директор на аутсорсе",
    "what": "Техническая стратегия, контроль подрядчиков, бюджет на IT",
    "price": {
      "kind": "price",
      "value": 80000,
      "unit": "month",
      "prefix": ""
    },
    "priceRaw": "от 80 000 ₽/мес",
    "term": {
      "days": -1,
      "label": "постоянно"
    },
    "monthly": "это и есть оплата"
  },
  {
    "id": "kiberbezopasnost",
    "group": "sec",
    "section": "Безопасность и инфраструктура",
    "name": "Кибербезопасность",
    "what": "Защита от взлома, шифровальщиков и фишинга: двухфакторный вход, резервные копии, права доступа, защищённый удалённый доступ, обучение сотрудников",
    "price": {
      "kind": "price",
      "value": 40000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 40 000 ₽",
    "term": {
      "days": 7,
      "label": "от 1 недели"
    },
    "monthly": "антивирус и защита от 1 500 ₽"
  },
  {
    "id": "it-infrastruktura",
    "group": "sec",
    "section": "Безопасность и инфраструктура",
    "name": "IT-инфраструктура",
    "what": "Серверы, резервные копии, удалённый доступ сотрудников, защита",
    "price": {
      "kind": "price",
      "value": 40000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 40 000 ₽",
    "term": {
      "days": 7,
      "label": "от 1 недели"
    },
    "monthly": "сервер от 2 000 ₽"
  },
  {
    "id": "prihodyaschiy-administrator",
    "group": "sec",
    "section": "Безопасность и инфраструктура",
    "name": "Приходящий администратор",
    "what": "Компьютеры, сеть, принтеры, почта, помощь сотрудникам, удалённо и с выездом",
    "price": {
      "kind": "price",
      "value": 10000,
      "unit": "month",
      "prefix": ""
    },
    "priceRaw": "от 10 000 ₽/мес",
    "term": {
      "days": -1,
      "label": "постоянно"
    },
    "monthly": "это и есть оплата"
  },
  {
    "id": "perehod-na-rossiyskoe-po",
    "group": "sec",
    "section": "Безопасность и инфраструктура",
    "name": "Переход на российское ПО",
    "what": "Замена зарубежных сервисов, перенос данных",
    "price": {
      "kind": "price",
      "value": 150000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 150 000 ₽",
    "term": {
      "days": 30,
      "label": "от 1 месяца"
    },
    "monthly": "по тарифам новых сервисов"
  },
  {
    "id": "it-proekt-pod-grant",
    "group": "sec",
    "section": "Безопасность и инфраструктура",
    "name": "IT-проект под грант",
    "what": "Упаковка проекта под Фонд содействия инновациям и программы Минцифры",
    "price": {
      "kind": "price",
      "value": 100000,
      "unit": "once",
      "prefix": ""
    },
    "priceRaw": "от 100 000 ₽",
    "term": {
      "days": 21,
      "label": "от 3 недель"
    },
    "monthly": "нет"
  },
  {
    "id": "podderzhka",
    "group": "sec",
    "section": "Поддержка и доработки",
    "name": "Поддержка",
    "what": "Исправления, небольшие доработки, обновления, мониторинг",
    "price": {
      "kind": "price",
      "value": 20000,
      "unit": "month",
      "prefix": ""
    },
    "priceRaw": "от 20 000 ₽/мес",
    "term": {
      "days": -1,
      "label": "постоянно"
    },
    "monthly": "это и есть оплата"
  },
  {
    "id": "razrabotka-po-chasam",
    "group": "sec",
    "section": "Поддержка и доработки",
    "name": "Разработка по часам",
    "what": "Любая задача вне таблицы: доработка, интеграция, срочная правка",
    "price": {
      "kind": "price",
      "value": 3000,
      "unit": "hour",
      "prefix": ""
    },
    "priceRaw": "от 3 000 ₽/час",
    "term": {
      "days": 1,
      "label": "от 1 дня"
    },
    "monthly": "нет"
  }
];
