// Батч: open-source решения, которые продаются бизнесу (6 статей ~4 мин, shortForm).
// Формула: обзор готового → где не подходит → разверну под ключ + обслуживание (рекуррент).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-22';
const SVC = 'https://chimitdorzhi.tech/services';

const SVC_UCHET = {
  title: 'Учётные системы под ключ',
  services: [
    { icon: 'ph-fill ph-buildings', label: 'Учёт объектов, аренды и договоров' },
    { icon: 'ph-fill ph-receipt', label: 'Платежи, начисления, задолженности' },
    { icon: 'ph-fill ph-file-text', label: 'Автогенерация документов' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Развёртывание и обслуживание' },
  ],
  ctaLabel: 'Обсудить систему учёта', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_TRACK = {
  title: 'Мониторинг и контроль на выезде',
  services: [
    { icon: 'ph-fill ph-map-pin-line', label: 'GPS-трекинг транспорта и сотрудников' },
    { icon: 'ph-fill ph-device-mobile', label: 'Трекинг через обычный телефон' },
    { icon: 'ph-fill ph-shield-check', label: 'Оформление по 152-ФЗ' },
    { icon: 'ph-fill ph-chart-line', label: 'Отчёты по маршрутам и времени' },
  ],
  ctaLabel: 'Обсудить мониторинг', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_RETAIL = {
  title: 'Аналитика офлайн-точки',
  services: [
    { icon: 'ph-fill ph-users-three', label: 'Подсчёт посетителей без камер' },
    { icon: 'ph-fill ph-chart-bar', label: 'Конверсия витрины и трафик по часам' },
    { icon: 'ph-fill ph-shield-check', label: 'Соответствие 152-ФЗ' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Связка с кассой и CRM' },
  ],
  ctaLabel: 'Обсудить аналитику', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_DOCS = {
  title: 'Документы и данные на своём сервере',
  services: [
    { icon: 'ph-fill ph-files', label: 'Свой конвертер и обработка файлов' },
    { icon: 'ph-fill ph-file-text', label: 'Электронные формы и анкеты' },
    { icon: 'ph-fill ph-shield-check', label: 'Данные не уходят в чужое облако (152-ФЗ)' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция с CRM и учётом' },
  ],
  ctaLabel: 'Обсудить внедрение', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_WEB = {
  title: 'Сайт, который не выглядит шаблоном',
  services: [
    { icon: 'ph-fill ph-paint-brush-broad', label: 'Индивидуальный дизайн под бренд' },
    { icon: 'ph-fill ph-gauge', label: 'Скорость и мобильная версия' },
    { icon: 'ph-fill ph-magnifying-glass', label: 'SEO и структура под запросы' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Поддержка после запуска' },
  ],
  ctaLabel: 'Обсудить сайт', ctaUrl: 'https://t.me/chimitdorzhi',
};

const CTA_UCHET = { url: `${SVC}/business-automation/`, label: 'Система учёта под ключ' };
const CTA_TRACK = { url: `${SVC}/business-automation/`, label: 'Мониторинг под ключ' };
const CTA_DOCS = { url: `${SVC}/business-automation/`, label: 'Автоматизация документов' };
const CTA_WEB = { url: `${SVC}/web-development/`, label: 'Разработка сайта' };

const T = (items) => items.concat([{ id: 'faq', text: 'FAQ' }, { id: 'vyvody', text: 'Коротко о главном' }]);

const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D,
  readingMinutes: 4, shortForm: true, servicesOffer: SVC_UCHET, ctaInternal: CTA_UCHET,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'programma-dlya-upravleniya-arendoy-2026', category: 'industries', heroIcon: 'ph-fill ph-buildings',
    servicesOffer: SVC_UCHET, ctaInternal: CTA_UCHET,
    title: 'Программа для управления арендой: учёт объектов, жильцов и платежей',
    metaTitle: 'Программа для управления арендой недвижимости',
    metaDescription: 'Учёт объектов и арендаторов, договоры по шаблонам, контроль платежей и долгов. Что умеют готовые программы для аренды и когда выгоднее своя.',
    metaKeywords: 'программа для управления арендой, учет арендаторов, crm для арендодателя, учет аренды недвижимости, автоматизация аренды',
    excerpt: 'Как вести аренду без таблиц: учёт объектов и арендаторов, договоры по шаблонам, контроль платежей и долгов. Готовые решения и когда выгоднее своя система.',
    tags: ['аренда', 'недвижимость', 'учёт', 'автоматизация'],
    toc: T([{ id: 'problema', text: 'Почему таблицы не тянут' }, { id: 'chto-dolzhna', text: 'Что должна уметь программа' }, { id: 'gotovye', text: 'Готовые решения и их пределы' }, { id: 'svoya', text: 'Своя система на своём сервере' }]),
    relatedSlugs: ['crm-nedvizhimost-sibir-2027', 'iot-platforma-dlya-arendodateley-2027', 'crm-dlya-optovyh-prodazh-2026'] }),

  E({ slug: 'gps-trekking-sotrudnikov-cherez-telefon-2026', category: 'industries', heroIcon: 'ph-fill ph-device-mobile',
    servicesOffer: SVC_TRACK, ctaInternal: CTA_TRACK,
    title: 'GPS-трекинг сотрудников через телефон: без покупки трекеров',
    metaTitle: 'GPS-трекинг сотрудников через телефон',
    metaDescription: 'GPS-трекинг выездных сотрудников через обычный смартфон: как это работает без покупки трекеров, что можно отслеживать законно по 152-ФЗ.',
    metaKeywords: 'gps трекинг сотрудников, отслеживание курьеров, мониторинг выездных сотрудников, трекинг через телефон, контроль сотрудников gps',
    excerpt: 'Как отслеживать выездных сотрудников и курьеров через обычный смартфон без покупки трекеров, что законно по 152-ФЗ и как развернуть систему у себя.',
    tags: ['GPS', 'сотрудники', 'мониторинг', '152-ФЗ'],
    toc: T([{ id: 'kak-rabotaet', text: 'Как это работает' }, { id: 'komu', text: 'Кому нужно' }, { id: 'zakon', text: 'Что законно: 152-ФЗ и согласия' }, { id: 'vnedrenie', text: 'Как развернуть у себя' }]),
    relatedSlugs: ['traccar-gps-monitoring-transporta-2026', 'programma-kontrolya-sotrudnikov-152fz-2026', 'putevye-listy-elektronno-2026'] }),

  E({ slug: 'gps-trekking-skota-osheyniki-2026', category: 'industries', heroIcon: 'ph-fill ph-cow',
    servicesOffer: SVC_TRACK, ctaInternal: CTA_TRACK,
    title: 'GPS-трекинг скота: ошейники, геозоны и защита от угона',
    metaTitle: 'GPS-трекинг скота: ошейники и защита от угона',
    metaDescription: 'GPS-трекинг скота на пастбище: как работают ошейники-трекеры, геозоны и оповещения об уходе стада, что делать при отсутствии связи в степи (LoRaWAN).',
    metaKeywords: 'gps трекинг скота, ошейник для скота gps, отслеживание коров, защита от угона скота, мониторинг пастбища, поиск отбившегося скота',
    excerpt: 'Как отслеживать скот на пастбище: ошейники-трекеры, геозоны и оповещения об уходе стада, что делать без GSM-связи в степи и сколько это стоит на практике.',
    tags: ['скот', 'GPS', 'фермерам', 'животноводство'],
    toc: T([{ id: 'zachem', text: 'Зачем это животноводу' }, { id: 'kak-rabotaet', text: 'Как работают ошейники' }, { id: 'svyaz', text: 'Если в степи нет связи' }, { id: 'cena', text: 'Сколько стоит и как внедрить' }]),
    relatedSlugs: ['it-dlya-fermerov-zabaykalya-buryatii-2026', 'traccar-gps-monitoring-transporta-2026', 'cifrovizaciya-agrosektora-2026'] }),

  E({ slug: 'podschet-posetiteley-magazina-2026', category: 'industries', heroIcon: 'ph-fill ph-users-three',
    servicesOffer: SVC_RETAIL, ctaInternal: CTA_UCHET,
    title: 'Подсчёт посетителей магазина без камер: как это работает',
    metaTitle: 'Подсчёт посетителей магазина без камер',
    metaDescription: 'Подсчёт посетителей магазина без камер: как работают Wi-Fi и Bluetooth счётчики трафика, что они дают бизнесу (конверсия витрины, часы пик).',
    metaKeywords: 'подсчет посетителей магазина, счетчик посетителей, трафик магазина, конверсия витрины, счетчик людей wi-fi',
    excerpt: 'Как считать посетителей магазина без камер по сигналам Wi-Fi и Bluetooth, что это даёт (конверсия витрины, часы пик), сколько стоит и что учесть по 152-ФЗ.',
    tags: ['ритейл', 'аналитика', 'подсчёт посетителей', '152-ФЗ'],
    toc: T([{ id: 'kak-rabotaet', text: 'Как работает подсчёт' }, { id: 'chto-daet', text: 'Что это даёт бизнесу' }, { id: 'zakon', text: '152-ФЗ: важный нюанс' }, { id: 'vnedrenie', text: 'Сколько стоит и как внедрить' }]),
    relatedSlugs: ['avtomatizaciya-riteyla-seti-2026', 'programma-kontrolya-sotrudnikov-152fz-2026', 'geomarketing-yandex-karty-2026'] }),

  E({ slug: 'svoy-konverter-dokumentov-2026', category: 'development', heroIcon: 'ph-fill ph-files',
    servicesOffer: SVC_DOCS, ctaInternal: CTA_DOCS,
    title: 'Свой конвертер документов: файлы не уходят в чужое облако',
    metaTitle: 'Свой конвертер документов на своём сервере',
    metaDescription: 'Свой конвертер файлов на сервере компании: PDF, Word, Excel, изображения, видео без загрузки в чужие онлайн-сервисы.',
    metaKeywords: 'конвертер документов, конвертер файлов на своем сервере, конвертировать pdf безопасно, свой конвертер, обработка документов компании',
    excerpt: 'Почему конвертировать договоры и документы в бесплатных онлайн-сервисах опасно и как поднять свой конвертер на сервере компании — файлы никуда не уходят.',
    tags: ['документы', 'конвертер', 'безопасность', '152-ФЗ'],
    toc: T([{ id: 'problema', text: 'Чем опасны онлайн-конвертеры' }, { id: 'reshenie', text: 'Свой конвертер на сервере' }, { id: 'komu', text: 'Кому это нужно' }, { id: 'vnedrenie', text: 'Как развернуть' }]),
    relatedSlugs: ['ocifrovka-bumazhnyh-form-2026', 'ocr-raspoznat-tekst-s-foto-2026', 'audit-152-fz-2026'] }),

  E({ slug: 'ocifrovka-bumazhnyh-form-2026', category: 'development', heroIcon: 'ph-fill ph-file-text',
    servicesOffer: SVC_DOCS, ctaInternal: CTA_DOCS,
    title: 'Оцифровка бумажных форм: анкеты и бланки в электронный вид',
    metaTitle: 'Оцифровка бумажных форм: анкеты и бланки',
    metaDescription: 'Оцифровка бумажных бланков и анкет: как превратить PDF в заполняемые формы, собирать данные клиентов онлайн вместо бумаги.',
    metaKeywords: 'оцифровка документов, заполняемые pdf формы, электронные анкеты, перевести бланки в электронный вид, электронные формы для бизнеса',
    excerpt: 'Как перевести бумажные бланки и анкеты в электронные формы, собирать данные без бумаги, автоматически складывать их в базу и не нарушить 152-ФЗ.',
    tags: ['документы', 'формы', 'оцифровка', 'автоматизация'],
    toc: T([{ id: 'problema', text: 'Чем плоха бумага' }, { id: 'kak', text: 'Как оцифровать формы' }, { id: 'avtomatizaciya', text: 'Данные сразу в базу' }, { id: 'zakon', text: '152-ФЗ и согласия' }]),
    relatedSlugs: ['svoy-konverter-dokumentov-2026', 'ocr-raspoznat-tekst-s-foto-2026', 'politika-obrabotki-pd-obrazec-2026'] }),

  E({ slug: 'priznaki-shablonnogo-ii-sayta-2026', category: 'marketing', heroIcon: 'ph-fill ph-magic-wand',
    servicesOffer: SVC_WEB, ctaInternal: CTA_WEB,
    title: 'Почему сайт выглядит «сделанным нейросетью» — и как это исправить',
    metaTitle: 'Почему сайт выглядит сделанным нейросетью',
    metaDescription: 'Признаки шаблонного сайта, собранного нейросетью или конструктором: одинаковые градиенты, безликие фразы, стоковые картинки, эмодзи вместо смысла.',
    metaKeywords: 'сайт выглядит шаблонным, сайт сделанный нейросетью, шаблонный дизайн сайта, почему не доверяют сайту, уникальный дизайн сайта',
    excerpt: 'По каким признакам посетитель понимает, что сайт собран «на автомате», почему это убивает доверие и что делать, чтобы сайт выглядел живым и своим.',
    tags: ['дизайн', 'доверие', 'сайт', 'нейросети'],
    toc: T([{ id: 'priznaki', text: 'Признаки шаблонного сайта' }, { id: 'pochemu-vazhno', text: 'Почему это теряет клиентов' }, { id: 'kak-ispravit', text: 'Как сделать сайт живым' }, { id: 'ii-polezno', text: 'Где ИИ всё-таки полезен' }]),
    relatedSlugs: ['obnovit-staryy-sayt-2026', 'neyroset-dlya-logotipa-dizayna-2026', 'pochemu-ne-delaem-sayty-na-konstruktorah-2027'] }),
];
