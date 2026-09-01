// MAX нововведения 2026: 8 коротких SEO-статей под конкретные запросы,
// с перелинковкой на услуги. Дубли с существующим MAX-кластером исключены.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-08-26';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_MAX = {
  title: 'Что я делаю в MAX',
  services: [
    { icon: 'ph-fill ph-robot', label: 'Боты: заявки, каталог, оплата, уведомления' },
    { icon: 'ph-fill ph-device-mobile', label: 'Мини-аппы: магазин, кабинет, запись' },
    { icon: 'ph-fill ph-megaphone', label: 'Каналы, рассылки, воронки, эфиры' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция MAX с CRM и вашими системами' },
  ],
  ctaLabel: 'Обсудить проект в MAX', ctaUrl: 'https://t.me/chimitdorzhi',
};

const HUB = 'max-messendzher-dlya-biznesa-2026';
const NEWHUB = 'chto-novogo-v-max-2026';
const CTA_BOT = { url: 'https://chimitdorzhi.tech/predlozheniya/bot-dlya-biznesa/', label: 'Заказать бота в MAX' };

const mk = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D,
  readingMinutes: 4, shortForm: true, servicesOffer: SVC_MAX, ctaInternal: CTA_BOT,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  mk({
    slug: 'chto-novogo-v-max-2026',
    category: 'development', heroIcon: 'ph-fill ph-sparkle',
    title: 'Что нового в MAX в 2026: истории, комментарии, стримы и другое',
    metaTitle: 'Что нового в MAX 2026: все обновления',
    metaDescription: 'Что нового в MAX в 2026: обзор обновлений мессенджера — истории, комментарии в каналах, прямые эфиры, счётчики просмотров и что из этого важно бизнесу.',
    metaKeywords: 'что нового в max, новые функции max, обновления max 2026, max мессенджер новшества, истории комментарии стримы max, max нововведения',
    excerpt: 'MAX за 2026 год из простого мессенджера превратился в площадку с историями, комментариями и прямыми эфирами. Собрал в одном месте, что уже появилось, что тестируется и что на подходе — и что из этого стоит использовать бизнесу.',
    tags: ['MAX', 'обновления', 'мессенджер', '2026'],
    toc: toc(['uzhe-est','Что уже появилось'],['testiruetsya','Что тестируется'],['na-podhode','Что на подходе'],['dlya-biznesa','Что из этого важно бизнесу'],['faq','Частые вопросы'],['vyvody','Коротко о главном']),
    relatedSlugs: [HUB, 'max-kanaly-rassylki-marketing-2026', 'mini-app-v-max-dlya-biznesa-2026', 'kak-sozdat-bota-v-max-poshagovo-2026'],
  }),
  mk({
    slug: 'istorii-storis-v-max-dlya-biznesa-2026',
    category: 'marketing', heroIcon: 'ph-fill ph-circle-dashed',
    title: 'Истории (сторис) в MAX: как использовать для бизнеса',
    metaTitle: 'Истории в MAX: как использовать бизнесу',
    metaDescription: 'В MAX появились истории — короткий контент на 24 часа. Разбираю, как бизнесу использовать сторис в MAX: анонсы, акции, вовлечение аудитории канала.',
    metaKeywords: 'истории в max, сторис в max, stories max, контент в max, продвижение в max, истории канала max, как использовать сторис',
    excerpt: 'В MAX появились истории — короткие публикации, которые исчезают через сутки. Для бизнеса это новый бесплатный способ напоминать о себе. Разбираю, как использовать сторис в MAX: что публиковать, как часто и как вести из истории к заявке.',
    tags: ['MAX', 'истории', 'контент', 'продвижение', '2026'],
    toc: toc(['chto-eto','Что такое истории в MAX'],['zachem','Зачем они бизнесу'],['chto-publikovat','Что публиковать'],['oshibki','Частые ошибки'],['faq','Частые вопросы'],['vyvody','Коротко о главном']),
    relatedSlugs: [NEWHUB, HUB, 'max-kanaly-rassylki-marketing-2026', 'kontent-plan-max-kanala-2027'],
  }),
  mk({
    slug: 'strimy-efiry-v-max-2026',
    category: 'marketing', heroIcon: 'ph-fill ph-broadcast',
    title: 'Прямые эфиры и стримы в MAX: как проводить и зачем бизнесу',
    metaTitle: 'Стримы и прямые эфиры в MAX для бизнеса',
    metaDescription: 'В MAX появились прямые эфиры прямо в каналах и чатах: как провести стрим, что показывать бизнесу и превратить эфир в заявки. Разбираю на практике.',
    metaKeywords: 'стримы в max, прямой эфир в max, трансляции max, эфир в канале max, вебинар в max, live max, как провести эфир',
    excerpt: 'MAX разрешил вести прямые эфиры прямо в каналах и чатах, без сторонних сервисов. Для бизнеса это живой контакт с аудиторией: разборы, ответы, запуски. Разбираю, как провести стрим в MAX и как довести зрителя до заявки.',
    tags: ['MAX', 'стримы', 'эфиры', 'продвижение', '2026'],
    toc: toc(['chto-eto','Что за эфиры в MAX'],['zachem','Зачем бизнесу'],['scenarii','Сценарии эфиров'],['kak-provesti','Как провести эфир'],['faq','Частые вопросы'],['vyvody','Коротко о главном']),
    relatedSlugs: [NEWHUB, HUB, 'vovlechennost-v-max-2027', 'progrev-i-zapusk-cherez-max-2027'],
  }),
  mk({
    slug: 'kommentarii-v-kanalah-max-2026',
    category: 'marketing', heroIcon: 'ph-fill ph-chats',
    title: 'Комментарии в каналах MAX: как включить и зачем бизнесу',
    metaTitle: 'Комментарии в каналах MAX: как включить',
    metaDescription: 'В каналах MAX появились комментарии и ветки обсуждений. Разбираю, как их включить, зачем они бизнесу и как модерировать комментарии ботом.',
    metaKeywords: 'комментарии в max, комментарии в канале max, обсуждения max, как включить комментарии max, ветки обсуждений max, модерация комментариев',
    excerpt: 'В каналах MAX заработали комментарии — теперь под постом можно вести полноценные обсуждения. Это вовлечение, обратная связь и живые заявки прямо в комментариях. Разбираю, как их включить, зачем они бизнесу и как не утонуть в спаме.',
    tags: ['MAX', 'комментарии', 'каналы', 'вовлечение', '2026'],
    toc: toc(['chto-eto','Что дают комментарии'],['kak-vklyuchit','Как включить'],['zachem','Зачем бизнесу'],['moderaciya','Модерация и спам'],['faq','Частые вопросы'],['vyvody','Коротко о главном']),
    relatedSlugs: [NEWHUB, HUB, 'vovlechennost-v-max-2027', 'max-kanaly-rassylki-marketing-2026'],
  }),
  mk({
    slug: 'oprosy-v-max-dlya-biznesa-2026',
    category: 'marketing', heroIcon: 'ph-fill ph-chart-bar-horizontal',
    title: 'Опросы в MAX: как собирать мнение аудитории и лиды',
    metaTitle: 'Опросы в MAX для бизнеса: как использовать',
    metaDescription: 'В MAX появились опросы. Разбираю, как бизнесу использовать опросы в канале: узнать мнение аудитории, оживить вовлечение и мягко собрать заявки.',
    metaKeywords: 'опросы в max, опрос в канале max, голосование max, как сделать опрос max, вовлечение опросами, обратная связь max',
    excerpt: 'В MAX заработали опросы — быстрый способ узнать мнение аудитории и оживить канал. Для бизнеса это ещё и мягкий сбор заявок и идей для контента. Разбираю, как использовать опросы в MAX и какие вопросы реально работают.',
    tags: ['MAX', 'опросы', 'вовлечение', 'каналы', '2026'],
    toc: toc(['chto-eto','Что дают опросы'],['kak-sdelat','Как создать опрос'],['scenarii','Рабочие сценарии'],['oshibki','Частые ошибки'],['faq','Частые вопросы'],['vyvody','Коротко о главном']),
    relatedSlugs: [NEWHUB, HUB, 'vovlechennost-v-max-2027', 'kontent-plan-max-kanala-2027'],
  }),
  mk({
    slug: 'biznes-akkaunt-v-max-2026',
    category: 'development', heroIcon: 'ph-fill ph-seal-check',
    title: 'Бизнес-аккаунт в MAX: что даёт и как оформить',
    metaTitle: 'Бизнес-аккаунт в MAX: что даёт бизнесу',
    metaDescription: 'MAX запускает бизнес-аккаунты — верифицированные профили организаций. Разбираю, что даёт бизнес-аккаунт в MAX, чем полезен и как подготовиться.',
    metaKeywords: 'бизнес аккаунт max, верифицированный профиль max, аккаунт организации max, галочка в max, бизнес профиль max, официальный аккаунт max',
    excerpt: 'MAX вводит бизнес-аккаунты — верифицированные профили компаний с отметкой и расширенными возможностями. Разбираю, что даёт бизнес-аккаунт в MAX, чем он полезен для доверия и продаж и как к нему подготовиться.',
    tags: ['MAX', 'бизнес-аккаунт', 'верификация', '2026'],
    toc: toc(['chto-eto','Что такое бизнес-аккаунт'],['chto-daet','Что он даёт'],['komu-nuzhen','Кому нужен'],['kak-podgotovitsya','Как подготовиться'],['faq','Частые вопросы'],['vyvody','Коротко о главном']),
    relatedSlugs: [NEWHUB, HUB, 'chat-bot-v-max-zakazat-2026', 'max-bot-dlya-biznesa-okupaemost-2026'],
  }),
  mk({
    slug: 'integraciya-max-s-crm-2026',
    category: 'development', heroIcon: 'ph-fill ph-plugs-connected',
    title: 'Интеграция MAX с CRM: заявки из мессенджера сразу в систему',
    metaTitle: 'Интеграция MAX с CRM: как связать',
    metaDescription: 'Как связать MAX с CRM, чтобы заявки и диалоги из мессенджера попадали прямо в систему. Разбираю варианты интеграции, что это даёт и с чего начать.',
    metaKeywords: 'интеграция max с crm, max crm, подключить max к crm, заявки из max в crm, автоматизация max, бот max crm, синхронизация max',
    excerpt: 'Заявки из MAX теряются, если менеджер вручную переносит их в таблицу. Интеграция MAX с CRM решает это: диалог и контакт из мессенджера сразу попадают в систему с нужными полями. Разбираю варианты, что это даёт и с чего начать.',
    tags: ['MAX', 'CRM', 'интеграция', 'автоматизация', '2026'],
    toc: toc(['problema','Где теряются заявки'],['kak-rabotaet','Как работает интеграция'],['chto-daet','Что это даёт'],['s-chego-nachat','С чего начать'],['faq','Частые вопросы'],['vyvody','Коротко о главном']),
    relatedSlugs: [HUB, 'integraciya-api-na-zakaz-2026', 'chat-bot-v-max-zakazat-2026', 'dashbord-rukovoditelyu-v-telegram-max-2026'],
  }),
  mk({
    slug: 'kak-ustanovit-max-bez-google-play-2026',
    category: 'development', heroIcon: 'ph-fill ph-download-simple',
    title: 'Как установить MAX без Google Play: рабочие способы 2026',
    metaTitle: 'Как установить MAX без Google Play',
    metaDescription: 'MAX убрали из Google Play — вот рабочие способы установить его на Android и iPhone: RuStore, сайт, APK и как не поймать подделку. Разбираю на практике.',
    metaKeywords: 'как скачать max, установить max без google play, max apk, max rustore, max на айфон, скачать мессенджер max, max не устанавливается',
    excerpt: 'С августа 2026 MAX пропал из Google Play, и люди не понимают, где его брать. Разбираю рабочие способы установить MAX на Android и iPhone, как обновлять и как не скачать поддельную версию вместо настоящей.',
    tags: ['MAX', 'установка', 'Android', 'инструкция', '2026'],
    toc: toc(['pochemu','Почему MAX пропал из Google Play'],['android','Как установить на Android'],['iphone','Как установить на iPhone'],['bezopasnost','Как не скачать подделку'],['faq','Частые вопросы'],['vyvody','Коротко о главном']),
    relatedSlugs: [NEWHUB, HUB, 'kak-sozdat-bota-v-max-poshagovo-2026', 'ugon-akkaunta-telegram-max-zashchita-2026'],
  }),
];
