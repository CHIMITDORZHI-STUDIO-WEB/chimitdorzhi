// Кластер «Open-source и свой сервер», часть 20: почта, бронь, IoT, обучение, гео (5 обзоров).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-06-16';
const TOC = [
  { id: 'chto-eto', text: 'Что это и что заменяет' },
  { id: 'vozmozhnosti', text: 'Что умеет' },
  { id: 'komu-podhodit', text: 'Кому подходит' },
  { id: 'chto-nuzhno', text: 'Что нужно для запуска' },
  { id: 'kak-vnedrit', text: 'Как внедрить под ключ' },
  { id: 'faq', text: 'FAQ' },
  { id: 'vyvody', text: 'Коротко о главном' },
];
const SVC = {
  title: 'Что я делаю с open-source',
  services: [
    { icon: 'ph-fill ph-hard-drives', label: 'Развёртывание на вашем сервере' },
    { icon: 'ph-fill ph-arrows-left-right', label: 'Перенос данных из старого сервиса' },
    { icon: 'ph-fill ph-shield-check', label: 'Безопасность и 152-ФЗ' },
    { icon: 'ph-fill ph-wrench', label: 'Настройка под ваши процессы' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Поддержка и обновления' },
  ],
};
const CTA = { url: 'https://chimitdorzhi.tech/predlozheniya/open-source-pod-klyuch/', label: 'Развернуть open-source под ключ' };
const E = (o) => Object.assign({
  category: 'opensource', published: true, datePublished: D, dateModified: D, readingMinutes: 10,
  servicesOffer: SVC, toc: TOC, ctaInternal: CTA,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'stalwart-pochtovyy-server-2026', heroIcon: 'ph-fill ph-envelope-simple',
    title: 'Stalwart Mail: свой современный почтовый сервер на своём сервере',
    metaTitle: 'Stalwart Mail: свой почтовый сервер',
    metaDescription: 'Stalwart Mail — современный open-source почтовый сервер «всё-в-одном» (SMTP, IMAP, JMAP): свой корпоративный e-mail на своём домене, антиспам, шифрование, веб-админка. Переписка у себя, без абонентки за ящик, импортозамещение — разверну под ключ.',
    excerpt: 'Stalwart Mail — это свой корпоративный e-mail на своём домене: SMTP/IMAP/JMAP, антиспам и шифрование в одном. Переписка не лежит и не читается на чужом сервисе. Честно про настройку DNS и репутацию. Разбираю и как на этом зарабатывать.',
    tags: ['Stalwart', 'почтовый сервер', 'email', 'open-source'],
    relatedSlugs: ['docker-mailserver-pochtovyy-server-2026', 'keycloak-edinyy-vhod-sso-2026', 'nextcloud-svoy-oblachnyy-disk-2026'] }),
  E({ slug: 'qloapps-bronirovanie-oteley-2026', heroIcon: 'ph-fill ph-bed',
    title: 'QloApps: система бронирования для отелей, глэмпингов и гостевых домов',
    metaTitle: 'QloApps: система бронирования для отелей',
    metaDescription: 'QloApps — open-source система бронирования и управления для отелей: номера и тарифы, календарь занятости, онлайн-бронирование с сайта, приём оплаты, гости и отчёты. Прямые брони без комиссии агрегаторов, данные гостей у себя — разверну под ключ.',
    excerpt: 'QloApps — это своя система бронирования для отеля, глэмпинга или гостевого дома: номера, тарифы, календарь занятости и брони с сайта без высокой комиссии агрегаторов. Особенно к месту для природного туризма. Разбираю и как на этом зарабатывать.',
    tags: ['QloApps', 'бронирование', 'отели', 'open-source'],
    relatedSlugs: ['it-dlya-turizma-otelei-2026', 'wanderer-turisticheskie-marshruty-2026', 'cal-com-onlayn-zapis-2026'] }),
  E({ slug: 'esphome-zigbee-datchiki-2026', heroIcon: 'ph-fill ph-thermometer',
    title: 'ESPHome и Zigbee2MQTT: свои датчики умного здания без вендора',
    metaTitle: 'ESPHome и Zigbee2MQTT: свои датчики умного здания',
    metaDescription: 'ESPHome и Zigbee2MQTT — open-source основа умного здания без вендора и облака: свои датчики температуры, протечки, открытия дверей, управление светом и реле, локально и в связке с Home Assistant. Без абонентки, данные у себя — соберу под ключ.',
    excerpt: 'ESPHome и Zigbee2MQTT дают свои датчики и автоматизацию для офиса, магазина или склада — температура, протечки, двери, реле — локально и без чужого облака. Это монтаж и наладка. Разбираю применение и как на этом зарабатывать.',
    tags: ['ESPHome', 'Zigbee2MQTT', 'IoT', 'open-source'],
    relatedSlugs: ['home-assistant-umnyy-ofis-2026', 'thingsboard-iot-platforma-2026', 'frigate-umnoe-videonablyudenie-2026'] }),
  E({ slug: 'h5p-interaktivnye-uroki-2026', heroIcon: 'ph-fill ph-puzzle-piece',
    title: 'H5P: интерактивные уроки, тесты и тренажёры для онлайн-обучения',
    metaTitle: 'H5P: интерактивные уроки и тренажёры',
    metaDescription: 'H5P — open-source конструктор интерактивного контента: интерактивные видео с вопросами, тесты, флешкарты, перетаскивания, ветвящиеся сценарии, тренажёры. Встраивается в Moodle и на сайт. Вовлечение и доходимость в онлайн-обучении — внедрю под ключ.',
    excerpt: 'H5P оживляет курсы интерактивом: видео с вопросами по ходу, тесты, тренажёры, флешкарты — вместо пассивных «видео + PDF», которые забрасывают. Для онлайн-школ и корп-обучения. Разбираю применение и как на этом зарабатывать.',
    tags: ['H5P', 'онлайн-обучение', 'интерактив', 'open-source'],
    relatedSlugs: ['moodle-onlayn-obuchenie-2026', 'classquiz-kviz-igry-2026', 'bigbluebutton-vebinary-2026'] }),
  E({ slug: 'dawarich-istoriya-peremeshcheniy-2026', heroIcon: 'ph-fill ph-map-pin-area',
    title: 'Dawarich: приватная история перемещений на своём сервере',
    metaTitle: 'Dawarich: приватная история перемещений',
    metaDescription: 'Dawarich — open-source хранилище истории перемещений (приватная альтернатива Google Timeline): геотреки со смартфона, карта, статистика, посещённые места. Личный архив или учёт поездок выездных сотрудников, данные у себя — внедрю под ключ.',
    excerpt: 'Dawarich хранит историю перемещений у вас, а не в облаке Google: карта поездок, статистика, посещённые места — как приватный личный архив или учёт выездных сотрудников (с согласия). Разбираю применение, 152-ФЗ и как на этом зарабатывать.',
    tags: ['Dawarich', 'геотреки', 'перемещения', 'open-source'],
    relatedSlugs: ['traccar-gps-monitoring-transporta-2026', 'immich-fotoarhiv-2026', 'openrouteservice-svoi-karty-marshruty-2026'] }),
];
