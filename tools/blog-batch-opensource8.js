// Кластер «Open-source и свой сервер», часть 8: почта, безопасность, AI (6 обзоров).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-06-15';
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
  E({ slug: 'docker-mailserver-pochtovyy-server-2026', heroIcon: 'ph-fill ph-envelope',
    title: 'docker-mailserver: корпоративная почта на своём сервере',
    metaTitle: 'docker-mailserver: корпоративная почта на сервере',
    metaDescription: 'docker-mailserver — open-source почтовый сервер в Docker: SMTP, IMAP, спам-фильтры, SSL. Корпоративная почта на своём домене, импортозамещение Gmail/Outlook, данные у себя по 152-ФЗ — разверну под ключ.',
    excerpt: 'docker-mailserver поднимает полноценную корпоративную почту на вашем сервере: ящики на своём домене, спам-фильтры, шифрование — без подписок и с данными у себя. Разбираю, что нужно для запуска и доставляемости.',
    tags: ['docker-mailserver', 'почтовый сервер', 'импортозамещение', 'open-source'],
    relatedSlugs: ['send-bezopasnaya-peredacha-faylov-2026', 'mautic-marketing-avtomatizaciya-2026', 'rustdesk-udalennyy-dostup-2026'] }),
  E({ slug: 'bitwarden-menedzher-paroley-2026', heroIcon: 'ph-fill ph-key',
    title: 'Bitwarden и Vaultwarden: менеджер паролей для команды на своём сервере',
    metaTitle: 'Bitwarden/Vaultwarden: менеджер паролей команды',
    metaDescription: 'Bitwarden (и лёгкий сервер Vaultwarden) — open-source менеджер паролей для команды: шифрование, общие хранилища, расширения и приложения. Импортозамещение 1Password/LastPass, данные у себя по 152-ФЗ — разверну под ключ.',
    excerpt: 'Bitwarden с self-hosted сервером Vaultwarden держит пароли компании под контролем на вашем сервере: общие хранилища, расширения, шифрование. Разбираю, кому нужно и что требуется для запуска.',
    tags: ['Bitwarden', 'Vaultwarden', 'пароли', 'безопасность'],
    relatedSlugs: ['send-bezopasnaya-peredacha-faylov-2026', 'cryptpad-privatnyy-ofis-2026', 'matrix-element-korporativnyy-messenger-2026'] }),
  E({ slug: 'chandra-ai-ocr-dokumenty-2026', heroIcon: 'ph-fill ph-scan',
    title: 'Chandra: AI-OCR для извлечения данных из документов на своём сервере',
    metaTitle: 'Chandra: AI-OCR извлечение данных из документов',
    metaDescription: 'Chandra — open-source AI-OCR модель: превращает изображения и PDF в структурированные данные (таблицы, рукописный текст, формы, формулы, 90+ языков). Автоматизация документооборота локально по 152-ФЗ — внедрю под ключ.',
    excerpt: 'Chandra извлекает из сканов и PDF структурированные данные — таблицы, формы, рукописный текст — для автоматической обработки. Дополняет архив Paperless-ngx. Разбираю применение и запуск.',
    tags: ['Chandra', 'AI-OCR', 'документооборот', 'open-source'],
    relatedSlugs: ['paperless-ngx-arhiv-dokumentov-2026', 'wiki-js-korporativnaya-wiki-2026', 'dify-ai-prilozheniya-2026'] }),
  E({ slug: 'fooocus-generaciya-izobrazheniy-2026', heroIcon: 'ph-fill ph-image',
    title: 'Fooocus: генерация изображений локально вместо Midjourney',
    metaTitle: 'Fooocus: генерация изображений вместо Midjourney',
    metaDescription: 'Fooocus — open-source генерация изображений по тексту (на базе Stable Diffusion, аналог Midjourney): качественные картинки локально, без подписки и интернета. Своя генерация для контента — разверну под ключ.',
    excerpt: 'Fooocus генерирует изображения по промпту локально — как Midjourney, но без подписки и с картинками у себя. Для маркетинга и контента. Разбираю требования к видеокарте и запуск.',
    tags: ['Fooocus', 'генерация изображений', 'Midjourney', 'AI'],
    relatedSlugs: ['ollama-svoy-chatgpt-na-servere-2026', 'moss-tts-nano-sintez-rechi-2026', 'moneyprinterturbo-ai-video-2026'] }),
  E({ slug: 'hermes-agent-ai-assistent-na-servere-2026', heroIcon: 'ph-fill ph-brain',
    title: 'Hermes-agent: персональный AI-агент на своём сервере',
    metaTitle: 'Hermes-agent: персональный AI-агент на сервере',
    metaDescription: 'Hermes-agent — open-source самообучающийся AI-агент на сервере: память между сессиями, создание навыков, задачи по расписанию через мессенджеры. Передовая технология, данные у себя — разверну и сопровожу под ключ.',
    excerpt: 'Hermes-agent — это персональный AI-агент на вашем сервере, который помнит контекст, создаёт навыки и выполняет задачи через мессенджеры. Честно: передовое и требует сопровождения. Разбираю, кому подходит.',
    tags: ['Hermes-agent', 'AI-агент', 'автоматизация', 'open-source'],
    relatedSlugs: ['dify-ai-prilozheniya-2026', 'ollama-svoy-chatgpt-na-servere-2026', 'agentic-inbox-ai-pochta-2026'] }),
  E({ slug: 'agentic-inbox-ai-pochta-2026', heroIcon: 'ph-fill ph-envelope-open',
    title: 'agentic-inbox: AI-помощник для почты на своём контуре',
    metaTitle: 'agentic-inbox: AI-помощник для почты',
    metaDescription: 'agentic-inbox (Cloudflare) — open-source почтовый клиент с AI-агентом: читает входящие, ищет по переписке, готовит черновики ответов (отправка только после подтверждения). Разгрузка от рутины в почте — внедрю под ключ.',
    excerpt: 'agentic-inbox разгружает почту: AI читает входящие и готовит черновики ответов, а отправляете вы сами. Ниша узкая (Cloudflare Workers), но рутину снимает. Разбираю, кому подходит и что нужно.',
    tags: ['agentic-inbox', 'AI-почта', 'автоматизация', 'open-source'],
    relatedSlugs: ['hermes-agent-ai-assistent-na-servere-2026', 'docker-mailserver-pochtovyy-server-2026', 'dify-ai-prilozheniya-2026'] }),
];
