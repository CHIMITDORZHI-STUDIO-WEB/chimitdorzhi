// Группа статей (ryaz-1): GPS-мониторинг парка, уход от платного мониторинга, путевые листы.
// Серия «Свой сервер для автопарка». Запросы: «стоимость мониторинга транспорта», «как перейти с платного мониторинга на свой сервер», «путевой лист форма 4-С 4-П 3».
// Опора: кейсы svoy-gps-server-avtopark-putevye-listy-predlozhenie-keys-2026, logistika-svoya-sistema-vmesto-bitrix24-predlozhenie-keys-2026; Приказ Минтранса от 28.09.2022 № 390, постановление Госкомстата от 28.11.1997 № 78, документация Traccar и Teltonika.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-11-21';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_TCO = {
  title: 'Расчёт мониторинга: подписка или свой сервер Traccar',
  services: [
    { icon: 'ph-fill ph-calculator', label: 'Таблица стоимости владения за 36 и 60 месяцев по вашим счетам' },
    { icon: 'ph-fill ph-map-pin-line', label: 'Сервер Traccar на вашей инфраструктуре: домен, HTTPS, копии' },
    { icon: 'ph-fill ph-truck', label: 'Пилот на двух машинах параллельно с действующей системой' },
    { icon: 'ph-fill ph-file-text', label: 'Модуль путевых листов с автозаполнением из трекера' },
  ],
  ctaLabel: 'Посчитать мониторинг для моего парка', ctaUrl: 'https://t.me/chimitdorzhi',
};

const SVC_MOVE = {
  title: 'Переход на свой сервер с сохранением трекеров',
  services: [
    { icon: 'ph-fill ph-clipboard-text', label: 'Проверка парка: модели, IMEI, SIM, пароли, договор на оборудование' },
    { icon: 'ph-fill ph-arrows-left-right', label: 'Перенастройка трекеров по SMS и конфигуратором, пилот и волны' },
    { icon: 'ph-fill ph-broadcast', label: 'Подбор M2M-SIM, APN и доверенных номеров' },
    { icon: 'ph-fill ph-hard-drives', label: 'Сервер Traccar с резервными копиями и сторожем в Telegram' },
  ],
  ctaLabel: 'Проверить мои трекеры', ctaUrl: 'https://t.me/chimitdorzhi',
};

const SVC_PL = {
  title: 'Путевые листы без ручного заполнения',
  services: [
    { icon: 'ph-fill ph-file-text', label: 'Форма №3, 4-С или 4-П по типу машины и реквизиты по приказу № 390' },
    { icon: 'ph-fill ph-map-pin-line', label: 'Поездки, время и пробег из трекера, отсев ложных точек' },
    { icon: 'ph-fill ph-clipboard-text', label: 'Справочник водителей и машин, выгрузка пачкой в PDF и Excel' },
    { icon: 'ph-fill ph-calculator', label: 'Топливо по норме и сверка пробега трекера с одометром' },
  ],
  ctaLabel: 'Автоматизировать путевые листы', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'monitoring-transporta-abonplata-ili-svoy-server-traccar-za-3-5-let-2026',
    category: 'expert',
    published: true,
    title: 'Мониторинг транспорта за 3-5 лет: абонентская плата против своего сервера Traccar',
    metaTitle: 'Мониторинг транспорта: абонплата или свой Traccar за 5 лет',
    metaDescription: 'Расчёт стоимости владения мониторингом для парка из 50 машин: подписка или свой сервер Traccar за 36 и 60 месяцев, окупаемость и когда выгоды нет.',
    metaKeywords: 'стоимость мониторинга транспорта, абонентская плата GPS мониторинг, свой сервер Traccar, Traccar стоимость внедрения, GPS мониторинг автопарка цена, M2M SIM для трекеров, окупаемость GPS мониторинга, мониторинг 50 машин',
    excerpt: 'Сколько стоит мониторинг парка из 50 машин за 3 и 5 лет по подписке и на своём сервере Traccar. Структура расходов, расчёт по трём сценариям, срок окупаемости и размер парка, с которого переход оправдан. Отдельно разобраны случаи, когда свой сервер не нужен.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 9,
    heroIcon: 'ph-fill ph-calculator',
    tags: ['мониторинг транспорта', 'Traccar', 'стоимость владения', 'GPS-трекеры', 'M2M-SIM', 'автопарк'],
    toc: toc(
      ['struktura', 'Из чего складывается стоимость владения'],
      ['abonplata', 'Абонентская плата: диапазон рынка'],
      ['svoy-server', 'Сколько стоит свой сервер'],
      ['raschet', 'Расчёт для 50 машин на 36 и 60 месяцев'],
      ['okupaemost', 'Когда свой сервер окупается'],
      ['razmer-parka', 'Какой парк нужен, чтобы выгода появилась'],
      ['kogda-ne', 'Когда свой сервер не нужен'],
      ['skrytye', 'Скрытые расходы своего сервера'],
      ['kak-schitat', 'Как посчитать для своего парка за вечер'],
      ['ceny', 'Сколько это стоит у меня'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['traccar-gps-monitoring-transporta-2026', 'svoy-gps-server-avtopark-putevye-listy-predlozhenie-keys-2026', 'gde-zhit-rabochey-sisteme-svoy-server-oblako-ili-podryadchik-2026', 'uchet-nebolshogo-avtoparka-2026', 'kak-uyti-ot-platnogo-gps-monitoringa-i-ostavit-svoi-trekery-2026', 'logistika-svoya-sistema-vmesto-bitrix24-predlozhenie-keys-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/logistics-automation/', label: 'Автоматизация логистики и учёта автопарка' },
    servicesOffer: SVC_TCO,
    contentHtml: C('monitoring-transporta-abonplata-ili-svoy-server-traccar-za-3-5-let-2026'),
  },
  {
    slug: 'kak-uyti-ot-platnogo-gps-monitoringa-i-ostavit-svoi-trekery-2026',
    category: 'expert',
    published: true,
    title: 'Как уйти от платного GPS-мониторинга и оставить свои трекеры',
    metaTitle: 'Как уйти от платного GPS-мониторинга и оставить трекеры',
    metaDescription: 'Как перенести трекеры на свой сервер: проверка блокировки, смена адреса по SMS и конфигуратором, M2M-SIM, APN, пароль и что делать, если не выходит.',
    metaKeywords: 'как уйти от платного GPS мониторинга, перенастроить GPS трекер на свой сервер, сменить сервер трекера по SMS, трекер залочен под сервер, Teltonika FMB920 настройка сервера, M2M SIM для трекера APN, Traccar подключить трекер, пароль SMS трекера',
    excerpt: 'Пошаговый разбор, как оставить свои GPS-трекеры и перейти на собственный сервер: чей трекер по договору, как проверить пароль и доверенные номера, как сменить адрес по SMS и через конфигуратор, как подобрать M2M-SIM и точку доступа. В конце законные пути на случай, если трекер не поддаётся настройке.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 9,
    heroIcon: 'ph-fill ph-arrows-left-right',
    tags: ['GPS-трекеры', 'смена сервера трекера', 'Traccar', 'M2M-SIM', 'Teltonika', 'автопарк'],
    toc: toc(
      ['vopros-vladeniya', 'Сначала выясните, чей это трекер'],
      ['lock', 'Как понять, что трекер закрыт под сервер'],
      ['sms', 'Смена адреса сервера по SMS'],
      ['konfigurator', 'Смена через конфигуратор'],
      ['sim-apn', 'Свои M2M-SIM, APN и доверенный номер'],
      ['paroli', 'Пароль SMS и что делать, если он неизвестен'],
      ['poryadok', 'Порядок перехода для парка'],
      ['ne-poluchaetsya', 'Что делать, если не получается'],
      ['ceny', 'Сколько это стоит у меня'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['traccar-gps-monitoring-transporta-2026', 'svoy-gps-server-avtopark-putevye-listy-predlozhenie-keys-2026', 'monitoring-transporta-abonplata-ili-svoy-server-traccar-za-3-5-let-2026', 'gps-trekking-sotrudnikov-cherez-telefon-2026', 'razvedka-chuzhoy-sistemy-pered-proektom-2026', 'kak-ne-stat-zalozhnikom-podryadchika-dostupy-repozitoriy-dokumentaciya-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/logistics-automation/', label: 'Перенос мониторинга автопарка на свой сервер' },
    servicesOffer: SVC_MOVE,
    contentHtml: C('kak-uyti-ot-platnogo-gps-monitoringa-i-ostavit-svoi-trekery-2026'),
  },
  {
    slug: 'putevoy-list-formy-4-s-4-p-3-kakaya-nuzhna-vashemu-parku-2026',
    category: 'expert',
    published: true,
    title: 'Путевой лист: формы 4-С, 4-П и №3, какая нужна вашему парку',
    metaTitle: 'Путевой лист: формы 4-С, 4-П и 3, какую выбрать для парка',
    metaDescription: 'Чем различаются путевые листы 4-С, 4-П и №3, как выбрать форму по документам, как быть с фургоном на базе легковой, реквизиты по приказу 390 и частые ошибки.',
    metaKeywords: 'путевой лист форма 4-С, путевой лист 4-П, путевой лист форма 3, какой путевой лист нужен, путевой лист грузового автомобиля, фургон на базе легкового путевой лист, приказ 390 путевой лист, обязательные реквизиты путевого листа',
    excerpt: 'Как определить, какая форма путевого листа нужна вашему парку: №3 для легковых, 4-С и 4-П для грузовых. Что требует приказ Минтранса № 390, как поступить с цельнометаллическим фургоном на базе легкового автомобиля и какие ошибки при оформлении встречаются чаще всего.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-file-text',
    tags: ['путевой лист', 'форма 4-С', 'форма 4-П', 'форма №3', 'приказ 390', 'автопарк'],
    toc: toc(
      ['raznica', 'Чем различаются формы 3, 4-С и 4-П'],
      ['kak-vybrat', 'Как определить форму для вашего парка'],
      ['furgon', 'Цельнометаллический фургон на базе легковой'],
      ['rekvizity', 'Обязательные реквизиты по приказу № 390'],
      ['bumaga', 'Бумага или электронный лист'],
      ['oshibki', 'Типичные ошибки при оформлении'],
      ['trekery', 'Как трекер помогает заполнять листы'],
      ['ceny', 'Сколько это стоит у меня'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['putevye-listy-elektronno-2026', 'uchet-avtoparka-putevye-listy-2026', 'svoy-gps-server-avtopark-putevye-listy-predlozhenie-keys-2026', 'tahograf-komu-obyazatelen-2026', 'elektronnaya-transportnaya-nakladnaya-etrn-2026', 'napominaniya-osago-tehosmotr-to-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/logistics-automation/', label: 'Автоматизация путевых листов и учёта автопарка' },
    servicesOffer: SVC_PL,
    contentHtml: C('putevoy-list-formy-4-s-4-p-3-kakaya-nuzhna-vashemu-parku-2026'),
  },
];
