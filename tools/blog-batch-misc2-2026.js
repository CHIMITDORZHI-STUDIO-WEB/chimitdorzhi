// Сборный батч (июнь 2026): безопасность людей, маркетинг, образование, личные финансы.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-06-23';
const SVC_SEC = {
  title: 'Что я делаю по безопасности',
  services: [
    { icon: 'ph-fill ph-shield-check', label: 'Защита данных и 152-ФЗ' },
    { icon: 'ph-fill ph-lock-key', label: 'Доступы, 2FA, пароли' },
    { icon: 'ph-fill ph-hard-drives', label: 'Бэкапы и свой сервер' },
    { icon: 'ph-fill ph-graduation-cap', label: 'Обучение команды' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Реагирование на инциденты' },
  ],
};
const SVC_MKT = {
  title: 'Что я делаю под ключ',
  services: [
    { icon: 'ph-fill ph-flow-arrow', label: 'Триггерные цепочки и автоворонки' },
    { icon: 'ph-fill ph-chat-circle-dots', label: 'Боты Telegram/MAX' },
    { icon: 'ph-fill ph-megaphone', label: 'Контент и рассылки' },
    { icon: 'ph-fill ph-kanban', label: 'CRM и автоматизация' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Поддержка и сопровождение' },
  ],
};
const SEC = { url: 'https://chimitdorzhi.tech/services/cybersecurity/', label: 'Защита данных и 152-ФЗ под ключ' };
const AUTO = { url: 'https://chimitdorzhi.tech/services/business-automation/', label: 'Автоматизировать под ключ' };
const DM = { url: 'https://chimitdorzhi.tech/services/digital-marketing/', label: 'Настроить маркетинг под ключ' };
const PRED = { url: 'https://chimitdorzhi.tech/predlozheniya/', label: 'Обсудить ваш проект' };
const AGENTS = { url: 'https://chimitdorzhi.tech/services/ai-agents/', label: 'Внедрить ИИ под ключ' };
const E = (o, cat, svc) => Object.assign({
  category: cat, published: true, datePublished: D, dateModified: D, readingMinutes: 9,
  servicesOffer: svc,
}, o, { contentHtml: C(o.slug) });
const T = (...ids) => ids.map(([id, text]) => ({ id, text }));

module.exports = [
  E({ slug: 'ugon-akkaunta-telegram-max-zashchita-2026', heroIcon: 'ph-fill ph-lock-key-open', ctaInternal: SEC,
    title: 'Угон аккаунта Telegram и MAX: как защититься и что делать, если взломали',
    metaTitle: 'Угон аккаунта Telegram и MAX: защита',
    metaDescription: 'Как угоняют аккаунты в Telegram и MAX (МАКС) и как защититься: двухэтапная аутентификация, осторожность с кодами и ссылками, проверка сессий. Что срочно делать, если аккаунт уже взломали, и чем это грозит бизнесу.',
    excerpt: 'Аккаунт в Telegram или MAX угоняют за минуты — через фейковую поддержку и коды из СМС. Разбираю, как защититься заранее и что делать, если уже взломали. Отдельно — риски для бизнеса.',
    tags: ['безопасность', 'Telegram', 'MAX', 'аккаунт'],
    toc: T(['kak-ugonyayut','Как угоняют аккаунты'],['zashchita','Как защититься заранее'],['esli-vzlomali','Если уже взломали'],['dlya-biznesa','Что важно для бизнеса'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['cifrovaya-gigiena-rukovoditelya-2026', 'plan-na-sluchay-utechki-dannyh-2026', '152-fz-dlya-chat-botov-i-messendzherov-2026'] }, 'security', SVC_SEC),
  E({ slug: 'cifrovaya-gigiena-rukovoditelya-2026', heroIcon: 'ph-fill ph-shield-star', ctaInternal: SEC,
    title: 'Цифровая гигиена для руководителя: как не стать слабым звеном',
    metaTitle: 'Цифровая гигиена для руководителя',
    metaDescription: 'Цифровая гигиена для руководителя: почему директор — цель №1, правила (менеджер паролей, 2FA, защита от фишинга, разделение личного и рабочего), безопасность устройств и доступов и гигиена для команды. Чтобы через вас не ударили по компании.',
    excerpt: 'Через руководителя бьют по всей компании: доступ к деньгам, данным, решениям. Разбираю правила цифровой гигиены для директора и команды — без паранойи, но по делу.',
    tags: ['безопасность', 'руководитель', 'цифровая гигиена', '152-ФЗ'],
    toc: T(['zachem','Почему руководитель — цель №1'],['pravila','Правила цифровой гигиены'],['ustroystva','Устройства и доступы'],['komanda','Гигиена для команды'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['ugon-akkaunta-telegram-max-zashchita-2026', 'ii-dlya-lichnyh-finansov-2026', 'plan-na-sluchay-utechki-dannyh-2026'] }, 'security', SVC_SEC),
  E({ slug: 'triggernye-cepochki-soobshcheniy-2026', heroIcon: 'ph-fill ph-flow-arrow', ctaInternal: AUTO,
    title: 'Триггерные цепочки сообщений: welcome, брошенная корзина, возврат клиента',
    metaTitle: 'Триггерные цепочки сообщений',
    metaDescription: 'Триггерные цепочки сообщений: автоматические письма и сообщения по событию — welcome-серия, брошенная корзина, реактивация, допродажи, отзывы. Каналы (e-mail, Telegram, MAX, SMS), как настроить и частые ошибки. С учётом согласий и 152-ФЗ.',
    excerpt: 'Триггерные цепочки работают за вас 24/7: welcome, брошенная корзина, возврат уснувших. Разбираю главные сценарии, каналы (e-mail, Telegram, MAX) и как настроить без спама.',
    tags: ['триггерные цепочки', 'рассылки', 'автоматизация', 'маркетинг'],
    toc: T(['chto-eto','Что такое триггерные цепочки'],['scenarii','Главные сценарии'],['kanaly','Каналы'],['kak-nastroit','Как настроить'],['oshibki','Частые ошибки'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['rfm-analiz-segmentaciya-klientov-2026', 'reperposing-kontenta-1-v-10-2026', 'telegram-bot-priema-zayavok-i-oplat-2026'] }, 'sales', SVC_MKT),
  E({ slug: 'reperposing-kontenta-1-v-10-2026', heroIcon: 'ph-fill ph-copy', ctaInternal: DM,
    title: 'Репёрпосинг контента: как из одного материала сделать 10 форматов',
    metaTitle: 'Репёрпосинг контента: 1 в 10',
    metaDescription: 'Репёрпосинг контента: как из одной статьи, подкаста или вебинара сделать десяток форматов под VK, Telegram, MAX, YouTube/Rutube, Дзен и рассылку. Зачем это бизнесу и эксперту, где помогает ИИ и каких ошибок избегать.',
    excerpt: 'Один материал — десяток форматов под разные площадки: так контент не выгорает, а охват растёт. Разбираю систему репёрпосинга и где ускоряет ИИ.',
    tags: ['репёрпосинг', 'контент', 'маркетинг', 'ИИ'],
    toc: T(['chto-eto','Что такое репёрпосинг'],['zachem','Зачем бизнесу и эксперту'],['kak-iz-1-v-10','Как из одного сделать десять'],['ii-pomoshch','Где помогает ИИ'],['oshibki','Частые ошибки'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['triggernye-cepochki-soobshcheniy-2026', 'zapusk-onlayn-kursa-tehchast-2026', 'kontent-kotoryy-citiruyut-ii-2026'] }, 'marketing', SVC_MKT),
  E({ slug: 'zapusk-onlayn-kursa-tehchast-2026', heroIcon: 'ph-fill ph-graduation-cap', ctaInternal: PRED,
    title: 'Как запустить онлайн-курс: техническая часть под ключ',
    metaTitle: 'Запуск онлайн-курса: техчасть',
    metaDescription: 'Техническая часть запуска онлайн-курса: платформа (готовая или своя на сервере), приём оплаты и автоматическая выдача доступа, личный кабинет, боты Telegram/MAX, автоматизация и аналитика. Что нужно и как запустить под ключ с учётом 152-ФЗ и 54-ФЗ.',
    excerpt: 'Контент курса — это полдела, нужна ещё техническая обвязка: площадка, оплата, доступ, боты. Разбираю, что выбрать (готовое или своё) и как запустить онлайн-курс под ключ.',
    tags: ['онлайн-курс', 'образование', 'платформа', 'автоматизация'],
    toc: T(['chto-nuzhno','Что нужно технически'],['platforma','Платформа: готовая или своя'],['oplata-dostup','Оплата и доступ'],['avtomatizaciya','Автоматизация и боты'],['kak-zapustit','Как запустить под ключ'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['priem-oplaty-sbp-na-sayte-2026', 'telegram-bot-priema-zayavok-i-oplat-2026', 'svoya-crm-na-servere-vs-oblachnaya-2026'] }, 'development', SVC_MKT),
  E({ slug: 'ii-dlya-lichnyh-finansov-2026', heroIcon: 'ph-fill ph-wallet', ctaInternal: AGENTS,
    title: 'ИИ для управления личными финансами: как навести порядок в деньгах',
    metaTitle: 'ИИ для личных финансов',
    metaDescription: 'ИИ для личных финансов: категоризация трат, анализ расходов, напоминания о платежах, помощь с бюджетом и разбор подписок. Какие инструменты использовать, как настроить и как не слить чувствительные финданные. Без инвестиционных советов.',
    excerpt: 'ИИ помогает навести порядок в деньгах: разложить траты, найти лишние подписки, не пропустить платежи. Разбираю инструменты и как делать это безопасно — без советов «куда вложить».',
    tags: ['ИИ', 'личные финансы', 'бюджет', 'учёт'],
    toc: T(['chto-eto','Чем ИИ помогает с финансами'],['scenarii','Сценарии применения'],['instrumenty','Инструменты и настройка'],['bezopasnost','Безопасность и приватность'],['oshibki','Частые ошибки'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['ai-pomoshchnik-buhgaltera-2026', 'rag-sistemy-dlya-biznesa-2026', 'cifrovaya-gigiena-rukovoditelya-2026'] }, 'ai-life', SVC_MKT),
];
