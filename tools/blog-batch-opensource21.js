// Кластер «Open-source и свой сервер», часть 21: live commerce — стрим + магазин (5 обзоров).
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
  E({ slug: 'live-commerce-svoya-ploschadka-opensource-2026', heroIcon: 'ph-fill ph-broadcast',
    title: 'Своя площадка live-commerce на open-source: из чего собрать',
    metaTitle: 'Своя площадка live-commerce на open-source',
    metaDescription: 'Из чего собрать свою площадку live-commerce (продажи в прямом эфире) на open-source: низколатентный стрим (LiveKit, SRS, Owncast), headless-магазин (Vendure, Medusa), живой чат, виджет покупки в эфире и мультистрим (Restreamer). Без комиссий, данные у себя — соберу под ключ.',
    excerpt: 'Готовой open-source «коробки» под live-commerce нет — площадка собирается из блоков: низколатентный стрим, headless-магазин, живой чат, кнопка покупки в эфире и мультистрим. Разбираю, из чего и как собрать, и как на этом зарабатывать.',
    tags: ['live commerce', 'прямые эфиры', 'продажи', 'open-source'],
    relatedSlugs: ['live-commerce-rf-2026', 'owncast-svoya-strim-platforma-2026', 'medusa-headless-magazin-2026'] }),
  E({ slug: 'livekit-interaktivnye-translyacii-2026', heroIcon: 'ph-fill ph-video-conference',
    title: 'LiveKit: интерактивные трансляции с минимальной задержкой для live commerce',
    metaTitle: 'LiveKit: интерактивные трансляции (WebRTC)',
    metaDescription: 'LiveKit — open-source WebRTC-платформа для real-time трансляций с суб-секундной задержкой: комнаты, запись, ingress/egress. Живой диалог в эфире и покупка по горячим следам для live-shopping, на своём сервере — соберу под ключ.',
    excerpt: 'LiveKit даёт трансляции с задержкой меньше секунды: зритель спрашивает — ведущий отвечает мгновенно и тут же продаёт, без лага в полминуты, который убивает интерактив. Ядро интерактивного live-shopping. Разбираю и как на этом зарабатывать.',
    tags: ['LiveKit', 'WebRTC', 'трансляции', 'open-source'],
    relatedSlugs: ['live-commerce-svoya-ploschadka-opensource-2026', 'owncast-svoya-strim-platforma-2026', 'srs-strim-server-2026'] }),
  E({ slug: 'srs-strim-server-2026', heroIcon: 'ph-fill ph-broadcast',
    title: 'SRS: свой стриминг-сервер для live commerce и трансляций',
    metaTitle: 'SRS: свой стриминг-сервер на своём сервере',
    metaDescription: 'SRS (Simple Realtime Server) — мощный open-source стриминг-сервер (RTMP, WebRTC, HLS, SRT, кластеризация, низкая задержка). Фундамент своей трансляционной площадки и live-shopping без комиссий за зрителей, поток у себя — разверну под ключ.',
    excerpt: 'SRS принимает поток от ведущего и раздаёт его тысячам зрителей с низкой задержкой — основа своей площадки трансляций и live-commerce без комиссий облачных сервисов. Разбираю применение и как на этом зарабатывать.',
    tags: ['SRS', 'стриминг', 'live commerce', 'open-source'],
    relatedSlugs: ['live-commerce-svoya-ploschadka-opensource-2026', 'livekit-interaktivnye-translyacii-2026', 'restreamer-multistream-2026'] }),
  E({ slug: 'restreamer-multistream-2026', heroIcon: 'ph-fill ph-share-network',
    title: 'Restreamer: свой стрим и мультитрансляция во все площадки сразу',
    metaTitle: 'Restreamer: мультистрим во все площадки',
    metaDescription: 'Restreamer (datarhei) — open-source приём одного потока и одновременная ретрансляция в VK Видео, Telegram, YouTube и на свой сайт, плюс плеер и запись. Максимум охвата эфира без дублирования, поток у себя — настрою под ключ.',
    excerpt: 'Restreamer ведёт один эфир и раздаёт его сразу во все соцсети и на свой сайт — максимум зрителей без дублирования трансляций. Для live-commerce это охват и продажи во всех каналах. Разбираю применение и как на этом зарабатывать.',
    tags: ['Restreamer', 'мультистрим', 'трансляции', 'open-source'],
    relatedSlugs: ['live-commerce-svoya-ploschadka-opensource-2026', 'srs-strim-server-2026', 'owncast-svoya-strim-platforma-2026'] }),
  E({ slug: 'vendure-headless-magazin-2026', heroIcon: 'ph-fill ph-storefront',
    title: 'Vendure: headless-магазин — товарная основа для live commerce',
    metaTitle: 'Vendure: headless-магазин на своём сервере',
    metaDescription: 'Vendure — современный open-source headless commerce (Node/TypeScript, GraphQL): товары, заказы, оплата, скидки, плагины, админка. API-first — витрина любая, вплоть до кнопки «купить в эфире» для live-commerce. Гибкий магазин, данные у себя — внедрю под ключ.',
    excerpt: 'Vendure — это магазин с API, к которому можно прикрутить любую витрину: сайт, приложение или кнопку «купить» прямо в плеере трансляции. Гибче шаблонных движков. Разбираю применение, в т.ч. для live-commerce, и как на этом зарабатывать.',
    tags: ['Vendure', 'headless', 'магазин', 'open-source'],
    relatedSlugs: ['medusa-headless-magazin-2026', 'live-commerce-svoya-ploschadka-opensource-2026', 'bagisto-internet-magazin-2026'] }),
];
