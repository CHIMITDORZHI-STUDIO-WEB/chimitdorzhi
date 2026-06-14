// Кластер «Open-source и свой сервер», часть 6: AI-инструменты (4 обзора).
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
  E({ slug: 'viseron-ai-videonablyudenie-2026', heroIcon: 'ph-fill ph-video-camera',
    title: 'Viseron: AI-видеонаблюдение на своём сервере без облака',
    metaTitle: 'Viseron: AI-видеонаблюдение на своём сервере',
    metaDescription: 'Viseron — open-source система видеонаблюдения с ИИ: распознавание людей, машин и движения, запись по событиям, всё локально без облака. Видео у себя по 152-ФЗ — разверну на вашем сервере под ключ.',
    excerpt: 'Viseron делает камеры умными: распознаёт людей, машины и движение и пишет по событиям — локально на вашем сервере, без облачных подписок и с видео у себя. Разбираю, кому подходит и что нужно.',
    tags: ['Viseron', 'видеонаблюдение', 'AI', 'open-source'],
    relatedSlugs: ['nextcloud-svoy-oblachnyy-disk-2026', 'immich-fotoarhiv-2026', 'moss-tts-nano-sintez-rechi-2026'] }),
  E({ slug: 'catvton-virtualnaya-primerka-2026', heroIcon: 'ph-fill ph-t-shirt',
    title: 'CatVTON: виртуальная примерка одежды на своём сервере',
    metaTitle: 'CatVTON: виртуальная примерка одежды AI',
    metaDescription: 'CatVTON — open-source AI-модель виртуальной примерки одежды: фото человека + вещь = реалистичный результат «как сидит». Для магазинов одежды и маркетплейсов: меньше возвратов, выше конверсия. Разверну под ключ.',
    excerpt: 'CatVTON показывает покупателю, как вещь будет сидеть, по одному фото — виртуальная примерочная на сайте или в боте магазина. Разбираю, кому подходит, что умеет и что нужно для запуска.',
    tags: ['CatVTON', 'виртуальная примерка', 'AI', 'open-source'],
    relatedSlugs: ['bagisto-internet-magazin-2026', 'medusa-headless-magazin-2026', 'zarabotok-na-internet-magazine-2026'] }),
  E({ slug: 'moss-tts-nano-sintez-rechi-2026', heroIcon: 'ph-fill ph-waveform',
    title: 'MOSS-TTS-Nano: синтез речи на своём сервере без GPU',
    metaTitle: 'MOSS-TTS-Nano: синтез речи на своём сервере',
    metaDescription: 'MOSS-TTS-Nano — open-source компактная модель синтеза речи (TTS): до 20 языков, работает на CPU, клонирование голоса и стриминг. Своя озвучка и голосовые сервисы с данными у себя — разверну под ключ.',
    excerpt: 'MOSS-TTS-Nano озвучивает текст человеческим голосом на своём сервере — без видеокарты и без отправки данных наружу. Для роликов, голосовых ботов и IVR. Разбираю возможности и запуск.',
    tags: ['MOSS-TTS-Nano', 'синтез речи', 'TTS', 'open-source'],
    relatedSlugs: ['botpress-ai-chat-boty-2026', 'ollama-svoy-chatgpt-na-servere-2026', 'viseron-ai-videonablyudenie-2026'] }),
  E({ slug: 'moneyprinterturbo-ai-video-2026', heroIcon: 'ph-fill ph-film-slate',
    title: 'MoneyPrinterTurbo: авто-генерация коротких видео на своём сервере',
    metaTitle: 'MoneyPrinterTurbo: авто-генерация коротких видео',
    metaDescription: 'MoneyPrinterTurbo — open-source инструмент авто-генерации коротких видео для соцсетей: тема → сценарий, видеоряд, субтитры, музыка. Ускоритель производства черновиков (не «деньги с кнопки»), на своём сервере. Разверну под ключ.',
    excerpt: 'MoneyPrinterTurbo собирает черновики коротких роликов из темы: сценарий, видеоряд, субтитры, музыка. Честно: это ускоритель производства, а не «станок для денег». Разбираю, кому подходит и что нужно.',
    tags: ['MoneyPrinterTurbo', 'AI-видео', 'контент', 'open-source'],
    relatedSlugs: ['postiz-avtoposting-socseti-2026', 'moss-tts-nano-sintez-rechi-2026', 'zarabotok-na-neyrosetyah-novichku-2026'] }),
];
