// Кейсы-предложения 14.10.2026 (рубрика «Аудиты и предложения»): платформа онлайн-академии
// инвестиций с партнёркой на две линии, MAX и лояльность поверх 1С для магазина женской одежды из Читы,
// КП «ИИ-администратор» для бизнеса с записью.
// Без имён клиентов, брендов, доменов и цен. 28.10.2026: академия и магазин одежды обновлены
// (платформа в проде, договор и сервис на сервере заказчицы), у КП статус прежний.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-14';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));
const E = (m) => {
  const html = C(m.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 6, category: 'cases',
      servicesOffer: SVC_BIZ },
    m, { contentHtml: html, toc: tocFrom(html) });
};

module.exports = [
  {
    slug: 'onlayn-akademiya-investiciy-partnerka-dve-linii-keys-2026',
    heroIcon: 'ph-fill ph-graduation-cap',
    title: 'Платформа академии инвестиций: партнёрка на две линии и оплата USDT',
    metaTitle: 'Кейс: платформа онлайн-академии с партнёркой на две линии',
    metaDescription: 'Кейс: платформа онлайн-академии в проде. Бот в Telegram, курсы с тарифами, партнёрка 10% и 5%, баллы за активность и приём USDT с автопроверкой.',
    excerpt: 'Онлайн-академия инвестиций вела эфиры бесплатно и вручную. Предложение платформы прошло три версии по голосовым заказчицы и стало ТЗ. 23.10 платформа выложена, 24.10 подключён бот в Telegram, дальше появились баллы, тарифы курса и приём USDT. 28.10 демо-режим выключен, платформа в проде.',
    tags: ['кейс', 'онлайн-школа', 'партнёрская программа', 'Telegram', 'USDT'],
    dateModified: '2026-10-28',
    relatedSlugs: ['avtomatizaciya-onlayn-shkoly-2026', 'uchet-partnerskih-vyplat-2026', 'lichnyy-kabinet-partnera-2026', 'zapusk-onlayn-kursa-tehchast-2026'],
    ctaInternal: { url: `${S}/predlozheniya/onlayn-shkola-platforma/`, label: 'Обсудить платформу курсов' },
  },
  {
    slug: 'set-magazinov-zhenskoy-odezhdy-chita-max-1c-keys-2026',
    heroIcon: 'ph-fill ph-shopping-bag-open',
    title: 'Магазин женской одежды из Читы: MAX, бонусы и сертификаты поверх 1С',
    metaTitle: 'Кейс: MAX, лояльность и сертификаты поверх 1С для магазина',
    metaDescription: 'Кейс: витрина в MAX, партнёрка, сертификаты, приложение и CRM поверх 1С для сети магазинов женской одежды в Чите. Договор подписан, сервис работает.',
    excerpt: 'Магазин женской одежды из Читы ведёт учёт в 1С со своим программистом. Я оставил 1С единственным источником учёта и поставил рядом сервис для каналов. Договор подписан, сервис развёрнут на сервере заказчицы: витрина в MAX с бронями, партнёрка, сертификаты, приложение, CRM и единое окно. Этап «Аудитория и витрина» закрывается.',
    tags: ['кейс', '1С', 'MAX', 'программа лояльности', 'подарочные сертификаты', 'ритейл'],
    dateModified: '2026-10-28',
    relatedSlugs: ['http-servis-1c-dlya-prilozheniya-2026', 'podarochnye-sertifikaty-onlayn-2026', 'edinoe-okno-zayavok-omnikanalnost-2027', 'karta-loyalnosti-v-telefone-bez-prilozheniya-2026'],
    ctaInternal: { url: `${S}/predlozheniya/max-mini-app-magazin/`, label: 'Обсудить витрину в MAX' },
  },
  {
    slug: 'kp-ii-administrator-zapis-keys-2026',
    heroIcon: 'ph-fill ph-moon-stars',
    title: 'КП «ИИ-администратор»: что обещано и что можно проверить в демо',
    metaTitle: 'Кейс: КП «ИИ-администратор» для бизнеса с записью',
    metaDescription: 'Кейс: КП на ИИ-администратора для бизнеса с записью. Отвечает ночью, записывает, передаёт человеку. 8 функций сверены с кодом демо, остальное обещания.',
    excerpt: 'Коммерческое предложение на две страницы для салонов, клиник, автосервисов и студий: ассистент отвечает ночью, записывает и передаёт деликатное человеку. Первая страница целиком проверяется в демо-боте, я сверил восемь функций с кодом. Каналы кроме Telegram и интеграции пока обещания. Передано, решение за заказчиками.',
    tags: ['кейс', 'ИИ-администратор', 'онлайн-запись', 'чат-бот', 'коммерческое предложение'],
    relatedSlugs: ['administrator-ili-bot-2026', 'ai-agent-onlayn-zapis-na-uslugi-2026', '152-fz-dlya-chat-botov-i-messendzherov-2026', 'neyavki-na-zapis-predoplata-napominaniya-2026'],
    ctaInternal: { url: `${S}/predlozheniya/max-bot-zapis-uslugi/`, label: 'Обсудить ИИ-администратора' },
  },
].map(E);
