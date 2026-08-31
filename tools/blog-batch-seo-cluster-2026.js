// SEO-кластер под запросы из GSC (локальный ИИ, self-host, ниши, MLM-мост).
// Короткие статьи ~4 мин, с перелинковкой и CTA на услуги.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-08-31';
const S = 'https://chimitdorzhi.tech';

const SVC_AI = {
  title: 'Что я делаю с ИИ под ключ',
  services: [
    { icon: 'ph-fill ph-robot', label: 'ИИ-агенты и чат-боты' },
    { icon: 'ph-fill ph-brain', label: 'База знаний с ИИ-поиском (RAG)' },
    { icon: 'ph-fill ph-hard-drives', label: 'Локальные модели на своём сервере' },
    { icon: 'ph-fill ph-shield-check', label: 'Приватность и 152-ФЗ' },
  ],
};
const SVC_INFRA = {
  title: 'Что я делаю с инфраструктурой',
  services: [
    { icon: 'ph-fill ph-hard-drives', label: 'Свой сервер: Docker, nginx, HTTPS' },
    { icon: 'ph-fill ph-cloud', label: 'Self-host вместо SaaS (своё облако, BI)' },
    { icon: 'ph-fill ph-shield-check', label: 'Мониторинг, бэкапы, харденинг' },
    { icon: 'ph-fill ph-plugs', label: 'Импортозамещение ПО' },
  ],
};
const SVC_BIZ = {
  title: 'Что я делаю для бизнеса',
  services: [
    { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
    { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
    { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
    { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
  ],
};

const RAG = { url: `${S}/services/rag-systems/`, label: 'Внедрить базу знаний с ИИ (RAG)' };
const AGENTS = { url: `${S}/services/ai-agents/`, label: 'Внедрить ИИ-агента под ключ' };
const MIGRATE = { url: `${S}/services/russian-stack-migration/`, label: 'Перейти на российский ИИ-стек' };
const INFRA = { url: `${S}/services/it-infrastructure/`, label: 'Развернуть инфраструктуру под ключ' };
const DEVOPS = { url: `${S}/services/devops/`, label: 'Настроить сервер и деплой' };
const ANALYTICS = { url: `${S}/services/ai-analytics/`, label: 'Настроить аналитику и дашборды' };
const BOTS = { url: `${S}/services/telegram-bots/`, label: 'Заказать бота под ключ' };
const AUTO = { url: `${S}/services/business-automation/`, label: 'Автоматизировать процесс под ключ' };
const SEC = { url: `${S}/services/cybersecurity/`, label: 'Заказать проверку безопасности' };
const WEB = { url: `${S}/services/web-development/`, label: 'Заказать сайт под ключ' };
const BRAND = { url: `${S}/services/personal-brand/`, label: 'Упаковать личный бренд' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D, readingMinutes: 4,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  // ===== Кластер: локальный ИИ =====
  E({ slug: 'kakoy-lokalnyy-llm-vybrat-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-brain', ctaInternal: RAG, servicesOffer: SVC_AI,
    title: 'Какой локальный LLM выбрать в 2026: Llama, Qwen, GigaChat, Saiga под русский язык',
    metaTitle: 'Какой локальный LLM выбрать в 2026 под русский',
    metaDescription: 'Llama, Qwen, GigaChat, Saiga: какой локальный LLM выбрать под русский язык и бизнес-задачи в 2026 — без облака и с учётом 152-ФЗ.',
    excerpt: 'Llama, Qwen, Saiga, GigaChat — какую локальную модель выбрать под русский язык и свою задачу. Сравниваю по языку, размеру, лицензии и железу, без маркетинга.',
    tags: ['локальный LLM', 'нейросети', 'русский язык', '152-ФЗ'],
    toc: [{ id: 'chto-eto', text: 'Зачем локальная модель' }, { id: 'kandidaty', text: 'Кандидаты: Llama, Qwen, Saiga, GigaChat' }, { id: 'kak-vybrat', text: 'Как выбрать под свою задачу' }, { id: 'zhelezo', text: 'Что нужно по железу' }, ...FAQ_VYV],
    relatedSlugs: ['lokalnyy-llm-na-noutbuke-2026', 'skolko-ram-dlya-lokalnogo-ii-2026', 'rossiyskiy-ai-stack-2026', 'besplatnye-ai-agenty-2026'] }),

  E({ slug: 'lokalnyy-ii-na-slabom-noutbuke-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-laptop', ctaInternal: RAG, servicesOffer: SVC_AI,
    title: 'Локальный ИИ на слабом ноутбуке: что реально работает на 8 и 16 ГБ',
    metaTitle: 'Локальный ИИ на слабом ноутбуке: 8 и 16 ГБ',
    metaDescription: 'Что реально работает из локальных нейросетей на ноутбуке с 8 и 16 ГБ памяти в 2026: модели, квантизация, скорость и подводные камни.',
    excerpt: 'Не нужен сервер за миллион, чтобы запустить нейросеть локально. Разбираю, какие модели реально работают на 8 и 16 ГБ, что такое квантизация и где предел.',
    tags: ['локальный ИИ', 'ноутбук', 'квантизация', 'нейросети'],
    toc: [{ id: 'chto-eto', text: 'Можно ли вообще на слабом железе' }, { id: '8gb', text: 'Что работает на 8 ГБ' }, { id: '16gb', text: 'Что работает на 16 ГБ' }, { id: 'kvantizaciya', text: 'Квантизация простыми словами' }, ...FAQ_VYV],
    relatedSlugs: ['skolko-ram-dlya-lokalnogo-ii-2026', 'lokalnyy-llm-na-noutbuke-2026', 'kakoy-lokalnyy-llm-vybrat-2026', 'gpu-dlya-lokalnogo-ii-2026'] }),

  E({ slug: 'ollama-lmstudio-localai-sravnenie-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-cube', ctaInternal: RAG, servicesOffer: SVC_AI,
    title: 'Ollama vs LM Studio vs LocalAI — что выбрать бизнесу',
    metaTitle: 'Ollama vs LM Studio vs LocalAI: что выбрать',
    metaDescription: 'Ollama, LM Studio, LocalAI: чем отличаются и что выбрать бизнесу для локального ИИ в 2026 — по простоте, API, серверу и приватности.',
    excerpt: 'Три популярных способа запустить локальную нейросеть. Сравниваю Ollama, LM Studio и LocalAI по простоте, API и пригодности для бизнеса, а не для эксперимента.',
    tags: ['Ollama', 'LM Studio', 'LocalAI', 'локальный ИИ'],
    toc: [{ id: 'chto-eto', text: 'Зачем вообще эти инструменты' }, { id: 'ollama', text: 'Ollama' }, { id: 'lmstudio', text: 'LM Studio' }, { id: 'localai', text: 'LocalAI' }, { id: 'chto-vybrat', text: 'Что выбрать бизнесу' }, ...FAQ_VYV],
    relatedSlugs: ['lokalnyy-llm-na-noutbuke-2026', 'kakoy-lokalnyy-llm-vybrat-2026', 'rag-na-svoih-dokumentah-lokalno-2026', 'rossiyskiy-ai-stack-2026'] }),

  E({ slug: 'rag-na-svoih-dokumentah-lokalno-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-brain', ctaInternal: RAG, servicesOffer: SVC_AI,
    title: 'RAG на своих документах локально: пошагово без облака',
    metaTitle: 'RAG на своих документах локально, пошагово',
    metaDescription: 'Как сделать ИИ-поиск по своим документам (RAG) локально, без облака: как это устроено, шаги внедрения и учёт 152-ФЗ.',
    excerpt: 'ИИ, который отвечает по вашим документам и ничего не выдумывает — это RAG. Разбираю по шагам, как собрать его локально, чтобы данные не уходили в чужое облако.',
    tags: ['RAG', 'база знаний', 'локальный ИИ', '152-ФЗ'],
    toc: [{ id: 'chto-eto', text: 'Что такое RAG простыми словами' }, { id: 'kak-rabotaet', text: 'Как это работает' }, { id: 'shagi', text: 'Шаги внедрения' }, { id: 'privatnost', text: 'Приватность и 152-ФЗ' }, ...FAQ_VYV],
    relatedSlugs: ['kak-sozdat-ai-agenta-2026', 'besplatnye-ai-agenty-2026', 'lokalnyy-llm-na-noutbuke-2026', 'ai-agent-vyzov-instrumentov-gigachat-2026'] }),

  E({ slug: 'gpu-dlya-lokalnogo-ii-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-graphics-card', ctaInternal: INFRA, servicesOffer: SVC_AI,
    title: 'GPU и видеокарта для локального ИИ: что купить в 2026',
    metaTitle: 'GPU для локального ИИ: что купить в 2026',
    metaDescription: 'Какую видеокарту купить для локального ИИ в 2026: сколько VRAM нужно под 7B, 13B и 70B модели, и когда GPU не нужен вовсе.',
    excerpt: 'Видеокарта решает, какую модель вы потянете локально. Разбираю, сколько VRAM нужно под разные размеры моделей и когда без GPU можно обойтись.',
    tags: ['GPU', 'видеокарта', 'VRAM', 'локальный ИИ'],
    toc: [{ id: 'chto-eto', text: 'Зачем ИИ видеокарта' }, { id: 'vram', text: 'Сколько VRAM под какую модель' }, { id: 'varianty', text: 'Что купить под задачу' }, { id: 'bez-gpu', text: 'Когда GPU не нужен' }, ...FAQ_VYV],
    relatedSlugs: ['skolko-ram-dlya-lokalnogo-ii-2026', 'lokalnyy-ii-na-slabom-noutbuke-2026', 'lokalnyy-llm-na-noutbuke-2026', 'kakoy-lokalnyy-llm-vybrat-2026'] }),

  E({ slug: 'ai-agent-vyzov-instrumentov-gigachat-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-flow-arrow', ctaInternal: AGENTS, servicesOffer: SVC_AI,
    title: 'AI-агент с вызовом инструментов на GigaChat и YandexGPT: практика',
    metaTitle: 'AI-агент с вызовом инструментов на GigaChat',
    metaDescription: 'Как собрать ИИ-агента с вызовом инструментов (tool calling) на российском стеке GigaChat и YandexGPT: как устроено и что учесть.',
    excerpt: 'Агент, который не просто болтает, а вызывает функции — считает, ищет, оформляет заявку. Разбираю на практике, как это сделать на GigaChat и YandexGPT.',
    tags: ['ИИ-агент', 'tool calling', 'GigaChat', 'YandexGPT'],
    toc: [{ id: 'chto-eto', text: 'Что такое вызов инструментов' }, { id: 'zachem', text: 'Зачем это бизнесу' }, { id: 'kak-rabotaet', text: 'Как это работает' }, { id: 'stek', text: 'Российский стек: нюансы' }, ...FAQ_VYV],
    relatedSlugs: ['kak-sozdat-ai-agenta-2026', 'ai-bot-v-max-gigachat-yandexgpt-2026', 'rossiyskiy-ai-stack-2026', 'rag-na-svoih-dokumentah-lokalno-2026'] }),

  // ===== Кластер: своя инфраструктура =====
  E({ slug: 'svoy-vps-s-nulya-docker-nginx-https-2026', category: 'opensource', heroIcon: 'ph-fill ph-hard-drives', ctaInternal: DEVOPS, servicesOffer: SVC_INFRA,
    title: 'Свой VPS с нуля: Docker, nginx и HTTPS за вечер',
    metaTitle: 'Свой VPS с нуля: Docker, nginx, HTTPS',
    metaDescription: 'Как поднять свой VPS с нуля за вечер: Docker, nginx, бесплатный HTTPS. Пошаговая логика без воды и когда лучше отдать это на аутсорс.',
    excerpt: 'Свой сервер — это не страшно и не дорого. Разбираю логику от пустой Ubuntu до сайта на HTTPS: Docker, nginx, сертификат — и где обычно спотыкаются.',
    tags: ['VPS', 'Docker', 'nginx', 'HTTPS'],
    toc: [{ id: 'chto-eto', text: 'Зачем свой сервер' }, { id: 'shagi', text: 'Путь от пустой Ubuntu до сайта' }, { id: 'https', text: 'HTTPS бесплатно' }, { id: 'grabli', text: 'Где спотыкаются' }, ...FAQ_VYV],
    relatedSlugs: ['svoy-vps-dlya-razrabotchika-2026', 'svoyo-oblako-nextcloud-2026', 'open-source-analogi-saas-2026', 'otkazoustoychivost-monitoring-bekapy-2026'] }),

  E({ slug: 'open-source-analogi-saas-2026', category: 'opensource', heroIcon: 'ph-fill ph-plugs', ctaInternal: INFRA, servicesOffer: SVC_INFRA,
    title: '15 open-source аналогов популярных SaaS на своём сервере',
    metaTitle: '15 open-source аналогов SaaS на своём сервере',
    metaDescription: '15 open-source аналогов популярных SaaS, которые ставятся на свой сервер: CRM, облако, аналитика, заметки, почта — дешевле и под контролем.',
    excerpt: 'Подписки на SaaS складываются в кругленькую сумму, а данные лежат у чужого дяди. Собрал 15 open-source аналогов, которые ставятся на свой сервер.',
    tags: ['open-source', 'self-host', 'импортозамещение', 'SaaS'],
    toc: [{ id: 'chto-eto', text: 'Зачем менять SaaS на self-host' }, { id: 'spisok', text: '15 аналогов по категориям' }, { id: 'komu', text: 'Кому это подходит' }, { id: 'podvodnye', text: 'Подводные камни' }, ...FAQ_VYV],
    relatedSlugs: ['svoy-vps-s-nulya-docker-nginx-https-2026', 'svoyo-oblako-nextcloud-2026', 'bi-dashbordy-metabase-2026', 'svoy-oblachnyy-disk-2026'] }),

  E({ slug: 'svoyo-oblako-nextcloud-2026', category: 'opensource', heroIcon: 'ph-fill ph-cloud', ctaInternal: INFRA, servicesOffer: SVC_INFRA,
    title: 'Своё облако вместо Google Drive: Nextcloud под ключ',
    metaTitle: 'Своё облако вместо Google Drive: Nextcloud',
    metaDescription: 'Nextcloud как замена Google Drive и Dropbox: своё облако на своём сервере — файлы, календарь, документы под контролем и по 152-ФЗ.',
    excerpt: 'Google Drive удобен, пока не задумаешься, где лежат ваши файлы. Nextcloud — своё облако на своём сервере: диск, календарь, документы, и всё под вашим контролем.',
    tags: ['Nextcloud', 'своё облако', 'self-host', '152-ФЗ'],
    toc: [{ id: 'chto-eto', text: 'Что такое Nextcloud' }, { id: 'chto-umeet', text: 'Что он умеет' }, { id: 'komu', text: 'Кому это нужно' }, { id: 'vnedrenie', text: 'Как внедрить' }, ...FAQ_VYV],
    relatedSlugs: ['svoy-oblachnyy-disk-2026', 'svoy-vps-s-nulya-docker-nginx-https-2026', 'open-source-analogi-saas-2026', 'otkazoustoychivost-monitoring-bekapy-2026'] }),

  E({ slug: 'bi-dashbordy-metabase-2026', category: 'opensource', heroIcon: 'ph-fill ph-chart-bar', ctaInternal: ANALYTICS, servicesOffer: SVC_INFRA,
    title: 'BI-дашборды на Metabase: подключаем свою базу',
    metaTitle: 'BI-дашборды на Metabase: подключаем базу',
    metaDescription: 'Metabase — бесплатный BI на своём сервере: как подключить свою базу и собрать дашборды по продажам, деньгам и заявкам без аналитика.',
    excerpt: 'Данные есть у всех, а понятных отчётов нет. Metabase — бесплатный BI на своём сервере: подключаете базу и собираете дашборды сами, без дорогого аналитика.',
    tags: ['Metabase', 'BI', 'дашборды', 'аналитика'],
    toc: [{ id: 'chto-eto', text: 'Что такое Metabase' }, { id: 'chto-daet', text: 'Что он даёт бизнесу' }, { id: 'podklyuchenie', text: 'Как подключить свою базу' }, { id: 'primery', text: 'Примеры дашбордов' }, ...FAQ_VYV],
    relatedSlugs: ['metabase-dashbordy-bi-2026', 'open-source-analogi-saas-2026', 'svoy-vps-s-nulya-docker-nginx-https-2026', 'svoyo-oblako-nextcloud-2026'] }),

  E({ slug: 'otkazoustoychivost-monitoring-bekapy-2026', category: 'opensource', heroIcon: 'ph-fill ph-shield-check', ctaInternal: INFRA, servicesOffer: SVC_INFRA,
    title: 'Отказоустойчивость для малого бизнеса: мониторинг и бэкапы',
    metaTitle: 'Отказоустойчивость: мониторинг и бэкапы',
    metaDescription: 'Как сделать сервис малого бизнеса устойчивым к сбоям: мониторинг, самовосстановление, валидируемые бэкапы и резерв — простыми словами.',
    excerpt: 'Сайт или бот падает ночью — и вы узнаёте об этом от клиента. Разбираю, как сделать сервис устойчивым: мониторинг, авто-восстановление, бэкапы, которые реально восстанавливаются.',
    tags: ['отказоустойчивость', 'мониторинг', 'бэкапы', 'DevOps'],
    toc: [{ id: 'chto-eto', text: 'Что такое отказоустойчивость' }, { id: 'monitoring', text: 'Мониторинг и самовосстановление' }, { id: 'bekapy', text: 'Бэкапы, которые работают' }, { id: 'rezerv', text: 'Резерв и переключение' }, ...FAQ_VYV],
    relatedSlugs: ['svoy-vps-s-nulya-docker-nginx-https-2026', 'svoyo-oblako-nextcloud-2026', 'open-source-analogi-saas-2026', 'svoy-oblachnyy-disk-2026'] }),

  // ===== Кластер: ниши (низкий CTR, острый интент) =====
  E({ slug: 'crm-dlya-agrobiznesa-2026', category: 'industries', heroIcon: 'ph-fill ph-plant', ctaInternal: AUTO, servicesOffer: SVC_BIZ,
    title: 'CRM для агробизнеса: поля, техника, урожай в одном месте',
    metaTitle: 'CRM для агробизнеса: поля, техника, урожай',
    metaDescription: 'CRM и автоматизация для агробизнеса: учёт полей, техники, работ и урожая вместо тетрадей и Excel — под ключ и под ваш процесс.',
    excerpt: 'Поля в тетради, техника в голове, урожай в Excel — и всё разваливается в сезон. Разбираю, что должна уметь CRM для агробизнеса и с чего начать автоматизацию.',
    tags: ['агробизнес', 'CRM', 'автоматизация', 'сельское хозяйство'],
    toc: [{ id: 'chto-eto', text: 'Почему Excel перестаёт тянуть' }, { id: 'chto-uchityvat', text: 'Что учитывать: поля, техника, урожай' }, { id: 'kak-vnedrit', text: 'Как внедрить без боли' }, { id: 'effekt', text: 'Что это даёт' }, ...FAQ_VYV],
    relatedSlugs: ['cifrovizaciya-agrosektora-2026', 'cifrovizaciya-snt-tszh-vznosy-2026', 'bot-napominalka-osago-to-2026', 'bi-dashbordy-metabase-2026'] }),

  E({ slug: 'bot-napominalka-osago-to-2026', category: 'industries', heroIcon: 'ph-fill ph-bell', ctaInternal: BOTS, servicesOffer: SVC_BIZ,
    title: 'Бот-напоминалка клиентам: ОСАГО, ТО, техосмотр',
    metaTitle: 'Бот-напоминалка: ОСАГО, ТО, техосмотр',
    metaDescription: 'Бот, который сам напоминает клиентам про ОСАГО, ТО и техосмотр и возвращает их к вам: как устроен и сколько экономит на удержании.',
    excerpt: 'Клиент забыл продлить ОСАГО — и ушёл к конкуренту. Бот-напоминалка сам пишет клиенту вовремя и возвращает его к вам. Разбираю, как это работает и кому нужно.',
    tags: ['бот', 'напоминания', 'ОСАГО', 'удержание клиентов'],
    toc: [{ id: 'chto-eto', text: 'Проблема забытых сроков' }, { id: 'kak-rabotaet', text: 'Как работает бот-напоминалка' }, { id: 'komu', text: 'Кому это нужно' }, { id: 'effekt', text: 'Что это даёт бизнесу' }, ...FAQ_VYV],
    relatedSlugs: ['napominaniya-osago-tehosmotr-to-2026', 'crm-dlya-agrobiznesa-2026', 'cifrovizaciya-snt-tszh-vznosy-2026', 'ai-bot-v-max-gigachat-yandexgpt-2026'] }),

  E({ slug: 'cifrovizaciya-snt-tszh-vznosy-2026', category: 'industries', heroIcon: 'ph-fill ph-house-line', ctaInternal: AUTO, servicesOffer: SVC_BIZ,
    title: 'Цифровизация СНТ и ТСЖ: взносы, собрания, оплата без бумаг',
    metaTitle: 'Цифровизация СНТ и ТСЖ: взносы и собрания',
    metaDescription: 'Как перевести СНТ или ТСЖ в цифру: учёт взносов, онлайн-собрания, оплата и уведомления вместо тетрадей, чатов и наличных.',
    excerpt: 'Взносы в тетради, собрания в беседке, долги — на бумажке. Разбираю, как перевести СНТ или ТСЖ в цифру: учёт, онлайн-оплата, уведомления, и с чего начать.',
    tags: ['СНТ', 'ТСЖ', 'цифровизация', 'ЖКХ'],
    toc: [{ id: 'chto-eto', text: 'Почему тетради больше не работают' }, { id: 'chto-avtomatizirovat', text: 'Что автоматизировать' }, { id: 'kak', text: 'Как это устроить' }, { id: 'effekt', text: 'Что получают жители и правление' }, ...FAQ_VYV],
    relatedSlugs: ['cifrovizaciya-snt-tszh-2026', 'crm-dlya-agrobiznesa-2026', 'bot-napominalka-osago-to-2026', 'napominaniya-osago-tehosmotr-to-2026'] }),

  E({ slug: 'osint-dlya-biznesa-proverka-kontragenta-2026', category: 'security', heroIcon: 'ph-fill ph-magnifying-glass', ctaInternal: SEC, servicesOffer: SVC_BIZ,
    title: 'OSINT для бизнеса: как легально проверить контрагента и кандидата',
    metaTitle: 'OSINT для бизнеса: проверка контрагента',
    metaDescription: 'OSINT для бизнеса: как по открытым источникам легально проверить контрагента, кандидата и партнёра — что можно, что нельзя и где грань.',
    excerpt: 'Проверить контрагента до сделки и кандидата до найма можно легально — по открытым источникам. Разбираю, что такое OSINT для бизнеса, что можно, а что уже нарушение.',
    tags: ['OSINT', 'проверка контрагента', 'безопасность', 'due diligence'],
    toc: [{ id: 'chto-eto', text: 'Что такое OSINT' }, { id: 'zachem', text: 'Зачем это бизнесу' }, { id: 'gde-gran', text: 'Что можно и где грань закона' }, { id: 'kak', text: 'С чего начать' }, ...FAQ_VYV],
    relatedSlugs: ['osint-freymvork-2026', 'cookie-banner-zakon', 'bi-dashbordy-metabase-2026', 'otkazoustoychivost-monitoring-bekapy-2026'] }),

  E({ slug: 'sponsorstvo-v-kibersporte-gayd-2026', category: 'esports', heroIcon: 'ph-fill ph-game-controller', ctaInternal: BRAND, servicesOffer: SVC_BIZ,
    title: 'Спонсорство в киберспорте: как бренду зайти и не слить бюджет',
    metaTitle: 'Спонсорство в киберспорте: гайд для бренда',
    metaDescription: 'Как бренду зайти в спонсорство киберспорта и стриминга: форматы, на что смотреть, как считать отдачу и типичные ошибки новичков.',
    excerpt: 'Аудитория киберспорта — молодая и лояльная, но слить бюджет тут легко. Разбираю форматы спонсорства, как считать отдачу и на чём обычно горят новые бренды.',
    tags: ['киберспорт', 'спонсорство', 'маркетинг', 'стриминг'],
    toc: [{ id: 'chto-eto', text: 'Почему бренды идут в киберспорт' }, { id: 'formaty', text: 'Форматы спонсорства' }, { id: 'otdacha', text: 'Как считать отдачу' }, { id: 'oshibki-start', text: 'На чём горят новички' }, ...FAQ_VYV],
    relatedSlugs: ['sponsorstvo-kibersport-streaming-2026', 'kontent-plan-max-kanala-2027', 'svoy-lending-dlya-setevika-2026', 'chto-novogo-v-max-2026'] }),

  // ===== Кластер: MLM-мост =====
  E({ slug: 'kak-seteviku-avtomatizirovat-strukturu-2026', category: 'mlm', heroIcon: 'ph-fill ph-share-network', ctaInternal: BOTS, servicesOffer: SVC_BIZ,
    title: 'Как сетевику автоматизировать структуру: бот, CRM и аналитика',
    metaTitle: 'Как сетевику автоматизировать структуру',
    metaDescription: 'Как сетевику автоматизировать работу со структурой: бот для новичков, CRM для учёта, аналитика по команде — чтобы расти без ручной рутины.',
    excerpt: 'Ручной онбординг новичков и учёт в блокноте — потолок роста в сетевом. Разбираю, как бот, CRM и аналитика снимают рутину и дают структуре расти самой.',
    tags: ['сетевой бизнес', 'MLM', 'автоматизация', 'CRM'],
    toc: [{ id: 'chto-eto', text: 'Где сетевик упирается в потолок' }, { id: 'bot', text: 'Бот для новичков и рутины' }, { id: 'crm', text: 'CRM и аналитика по команде' }, { id: 'kak-nachat', text: 'С чего начать' }, ...FAQ_VYV],
    relatedSlugs: ['ref-bot-dlya-mlm-chestno-2026', 'svoy-lending-dlya-setevika-2026', 'onboarding-bot-setevoy-biznes-max-2027', 'ai-bot-v-max-gigachat-yandexgpt-2026'] }),

  E({ slug: 'svoy-lending-dlya-setevika-2026', category: 'mlm', heroIcon: 'ph-fill ph-globe', ctaInternal: WEB, servicesOffer: SVC_BIZ,
    title: 'Свой лендинг для сетевика: как выделиться и не нарушить правила компании',
    metaTitle: 'Свой лендинг для сетевика: как сделать',
    metaDescription: 'Как сетевику сделать свой лендинг: выделиться среди сотен одинаковых реф-ссылок и не нарушить правила компании по бренду и обещаниям.',
    excerpt: 'Одинаковая реф-ссылка теряется среди тысяч таких же. Свой лендинг выделяет вас — но есть правила компании, которые легко нарушить. Разбираю, как сделать грамотно.',
    tags: ['сетевой бизнес', 'лендинг', 'личный бренд', 'MLM'],
    toc: [{ id: 'chto-eto', text: 'Зачем сетевику свой лендинг' }, { id: 'pravila', text: 'Правила компании: где грань' }, { id: 'chto-dolzhno-byt', text: 'Что должно быть на лендинге' }, { id: 'kak-sdelat', text: 'Как сделать быстро' }, ...FAQ_VYV],
    relatedSlugs: ['kak-seteviku-avtomatizirovat-strukturu-2026', 'ref-bot-dlya-mlm-chestno-2026', 'sayt-eksperta-nedvizhimosti-lending-keys-2026', 'personalnyy-brend-ekspert-2026'] }),

  E({ slug: 'ref-bot-dlya-mlm-chestno-2026', category: 'mlm', heroIcon: 'ph-fill ph-users-three', ctaInternal: BOTS, servicesOffer: SVC_BIZ,
    title: 'Реф-бот для MLM: как считать структуру честно и без накруток',
    metaTitle: 'Реф-бот для MLM: честный учёт структуры',
    metaDescription: 'Реф-бот для сетевого бизнеса: как честно считать приглашения и структуру, защититься от накруток и мотивировать команду — на примере кейса.',
    excerpt: 'Реф-механика в сетевом ломается на накрутках и спорах «кто кого привёл». Разбираю, как сделать реф-бота с честным учётом — на примере своего кейса на 819 участников.',
    tags: ['реф-бот', 'MLM', 'сетевой бизнес', 'антифрод'],
    toc: [{ id: 'chto-eto', text: 'Зачем реф-бот в сетевом' }, { id: 'chestnost', text: 'Как считать честно' }, { id: 'antifrod', text: 'Защита от накруток' }, { id: 'keys', text: 'Как это было в бою' }, ...FAQ_VYV],
    relatedSlugs: ['kak-seteviku-avtomatizirovat-strukturu-2026', 'svoy-lending-dlya-setevika-2026', 'referalnyy-bot-konkurs-priglasheniy-keys-2026', 'onboarding-bot-setevoy-biznes-max-2027'] }),
];
