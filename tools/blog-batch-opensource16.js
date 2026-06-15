// Кластер «Open-source и свой сервер», часть 16: транскрибация, дрон-съёмка, учёт, файлы, аудио (5 обзоров).
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
  category: 'opensource', published: true, datePublished: D, dateModified: D, readingMinutes: 9,
  servicesOffer: SVC, toc: TOC, ctaInternal: CTA,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'whisperx-transkribaciya-rechi-2026', heroIcon: 'ph-fill ph-microphone',
    title: 'WhisperX: автоматическая транскрибация речи на своём сервере',
    metaTitle: 'WhisperX: транскрибация речи на своём сервере',
    metaDescription: 'WhisperX — open-source распознавание речи с точными таймкодами и определением говорящих: расшифровка совещаний, интервью, подкастов, субтитры. Аудио не уходит в чужое облако (152-ФЗ), без поминутной оплаты — разверну под ключ.',
    excerpt: 'WhisperX расшифровывает аудио и видео в текст с таймкодами и определением говорящих — совещания, интервью, подкасты, субтитры — на вашем сервере, без отправки записей в чужое облако. Разбираю применение и как на этом зарабатывать.',
    tags: ['WhisperX', 'транскрибация', 'распознавание речи', 'open-source'],
    relatedSlugs: ['ai-transkripciya-soveshchaniy-2026', 'audiobookshelf-server-audioknig-podkastov-2026', 'owncast-svoya-strim-platforma-2026'] }),
  E({ slug: 'opendronemap-obrabotka-dron-semki-2026', heroIcon: 'ph-fill ph-drone',
    title: 'OpenDroneMap: обработка аэрофотосъёмки с дронов на своём сервере',
    metaTitle: 'OpenDroneMap: обработка дрон-съёмки на сервере',
    metaDescription: 'OpenDroneMap (ODM) — open-source обработка снимков с дронов в геоданные: ортофотопланы, 3D-модели, облака точек, модели рельефа. Для агро, стройки, геодезии и кадастра, данные у себя — разверну под ключ.',
    excerpt: 'OpenDroneMap превращает снимки с дрона в ортофотопланы, 3D-модели и карты рельефа на вашем сервере — для сельского хозяйства, стройки и геодезии, без дорогих облачных сервисов. Разбираю применение и как на этом зарабатывать.',
    tags: ['OpenDroneMap', 'дроны', 'геодезия', 'open-source'],
    relatedSlugs: ['whisperx-transkribaciya-rechi-2026', 'grafana-dashbordy-metriki-2026', 'home-assistant-umnyy-ofis-2026'] }),
  E({ slug: 'kimai-uchet-rabochego-vremeni-2026', heroIcon: 'ph-fill ph-timer',
    title: 'Kimai: учёт рабочего времени и таймтрекинг на своём сервере',
    metaTitle: 'Kimai: учёт рабочего времени и таймтрекинг',
    metaDescription: 'Kimai — open-source учёт рабочего времени: таймеры по проектам и клиентам, табели, отчёты, биллинг часов, роли, API. Прозрачный таймтрекинг и выставление часов без подписки за пользователя, данные у себя — разверну под ключ.',
    excerpt: 'Kimai — это прозрачный учёт рабочего времени по проектам и клиентам с табелями, отчётами и биллингом часов, на вашем сервере и без подписки за пользователя. Для фрилансеров, агентств и команд. Разбираю запуск.',
    tags: ['Kimai', 'таймтрекинг', 'учёт времени', 'open-source'],
    relatedSlugs: ['plane-upravlenie-proektami-2026', 'redmine-upravlenie-proektami-2026', 'invoice-ninja-scheta-2026'] }),
  E({ slug: 'syncthing-sinhronizaciya-faylov-2026', heroIcon: 'ph-fill ph-arrows-clockwise',
    title: 'Syncthing: синхронизация файлов между устройствами без облака',
    metaTitle: 'Syncthing: синхронизация файлов без облака',
    metaDescription: 'Syncthing — open-source синхронизация файлов напрямую между устройствами (P2P), без облака-посредника: шифрование при передаче, версионность, выборочная синхронизация. Файлы не лежат в чужом облаке (152-ФЗ) — настрою под ключ.',
    excerpt: 'Syncthing синхронизирует файлы напрямую между компьютерами, серверами и телефонами без облака-посредника, с шифрованием передачи. Замена Dropbox для тех, кому важна конфиденциальность данных. Разбираю запуск.',
    tags: ['Syncthing', 'синхронизация', 'файлы', 'open-source'],
    relatedSlugs: ['nextcloud-svoy-oblachnyy-disk-2026', 'duplicati-rezervnoe-kopirovanie-2026', 'cryptpad-privatnyy-ofis-2026'] }),
  E({ slug: 'audiobookshelf-server-audioknig-podkastov-2026', heroIcon: 'ph-fill ph-headphones',
    title: 'AudioBookshelf: свой сервер аудиокниг и подкастов',
    metaTitle: 'AudioBookshelf: свой сервер аудиокниг',
    metaDescription: 'AudioBookshelf — open-source сервер аудиокниг и подкастов: своя медиатека, стриминг на телефон, отметки прогресса, главы, мультипользователи. Для онлайн-школ, авторов курсов и личной коллекции, контент у себя — разверну под ключ.',
    excerpt: 'AudioBookshelf — это свой сервер аудиокниг и подкастов со стримингом на телефон и отметками прогресса. Для онлайн-школ и авторов курсов, чтобы раздавать аудиоматериалы ученикам, и для личной коллекции. Разбираю запуск.',
    tags: ['AudioBookshelf', 'аудиокниги', 'подкасты', 'open-source'],
    relatedSlugs: ['whisperx-transkribaciya-rechi-2026', 'jellyfin-svoya-mediateka-2026', 'moodle-onlayn-obuchenie-2026'] }),
];
