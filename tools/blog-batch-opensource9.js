// Кластер «Open-source и свой сервер», часть 9: документы, формы, инфра (4 обзора).
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
  E({ slug: 'stirling-pdf-instrumenty-2026', heroIcon: 'ph-fill ph-file-pdf',
    title: 'Stirling-PDF: 50+ инструментов для PDF на своём сервере',
    metaTitle: 'Stirling-PDF: инструменты для PDF на сервере',
    metaDescription: 'Stirling-PDF — open-source набор из 50+ инструментов для PDF через веб: объединение, разделение, сжатие, OCR, водяные знаки, конвертация. Self-hosted, документы не уходят в чужие сервисы (152-ФЗ) — разверну под ключ.',
    excerpt: 'Stirling-PDF заменяет онлайн-сервисы для PDF своим: объединение, сжатие, OCR, конвертация, подпись — всё на вашем сервере, документы не уходят наружу. Разбираю, кому нужно и что требуется.',
    tags: ['Stirling-PDF', 'PDF', 'документооборот', 'open-source'],
    relatedSlugs: ['paperless-ngx-arhiv-dokumentov-2026', 'chandra-ai-ocr-dokumenty-2026', 'cryptpad-privatnyy-ofis-2026'] }),
  E({ slug: 'formbricks-formy-oprosy-2026', heroIcon: 'ph-fill ph-list-checks',
    title: 'Formbricks: формы и опросы на своём сервере вместо Typeform',
    metaTitle: 'Formbricks: формы и опросы на своём сервере',
    metaDescription: 'Formbricks — open-source инструмент для форм, опросов и анкет (аналог Typeform/Google Forms): ветвление, файловые загрузки, вебхуки, опросы на сайте. Данные у себя по 152-ФЗ, без подписок — разверну под ключ.',
    excerpt: 'Formbricks собирает заявки и обратную связь через формы и опросы — как Typeform, но на вашем сервере и с данными у себя. Разбираю возможности, кому подходит и что нужно для запуска.',
    tags: ['Formbricks', 'формы', 'опросы', 'open-source'],
    relatedSlugs: ['typebot-chat-boty-kvizy-2026', 'baserow-baza-dannyh-bez-koda-2026', 'umami-analitika-bez-google-2026'] }),
  E({ slug: 'home-assistant-umnyy-ofis-2026', heroIcon: 'ph-fill ph-house-line',
    title: 'Home Assistant: умный офис и здание на своём сервере',
    metaTitle: 'Home Assistant: умный офис на своём сервере',
    metaDescription: 'Home Assistant — open-source система автоматизации (умный дом/офис/здание): объединяет свет, климат, камеры, датчики и доступ, сценарии, локально без облака. Экономия и безопасность, данные у себя — настрою под ключ.',
    excerpt: 'Home Assistant объединяет устройства офиса или здания в одну систему со сценариями автоматизации — локально, без облака. Экономия энергии, безопасность, удобство. Разбираю бизнес-применение и запуск.',
    tags: ['Home Assistant', 'умный офис', 'IoT', 'open-source'],
    relatedSlugs: ['viseron-ai-videonablyudenie-2026', 'adguard-home-zaschita-seti-2026', 'n8n-avtomatizaciya-bez-zapier-2026'] }),
  E({ slug: 'adguard-home-zaschita-seti-2026', heroIcon: 'ph-fill ph-shield-checkered',
    title: 'AdGuard Home: защита и фильтрация сети офиса на своём сервере',
    metaTitle: 'AdGuard Home: защита и фильтрация сети офиса',
    metaDescription: 'AdGuard Home — open-source DNS-сервер с блокировкой рекламы, трекеров и вредоносных сайтов на уровне всей сети. Чистый и безопасный интернет в офисе и гостевом Wi-Fi без расширений — настрою под ключ.',
    excerpt: 'AdGuard Home режет рекламу, трекеры и вредоносные сайты на всех устройствах сети сразу — без расширений. Чистый и безопасный интернет в офисе и гостевом Wi-Fi. Разбираю, кому нужно и что требуется.',
    tags: ['AdGuard Home', 'DNS', 'безопасность', 'open-source'],
    relatedSlugs: ['home-assistant-umnyy-ofis-2026', 'bitwarden-menedzher-paroley-2026', 'viseron-ai-videonablyudenie-2026'] }),
];
