// Кейсы-предложения 14.10.2026 (рубрика «Аудиты и предложения»): платформа онлайн-академии
// инвестиций с партнёркой на две линии, MAX и лояльность поверх 1С для сети магазинов белья,
// КП «ИИ-администратор» для бизнеса с записью.
// Без имён клиентов, брендов, доменов и цен; статус у всех: предложение передано, решение за заказчиком.
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
    title: 'Платформа академии инвестиций: 15 языков и партнёрка на две линии',
    metaTitle: 'Кейс: платформа онлайн-академии с партнёркой на две линии',
    metaDescription: 'Кейс: предложение платформы академии на 15 языках. Курсы поштучно, партнёрка 10% и 5%, оплата в USDT, три версии по голосовым. Решение за заказчиком.',
    excerpt: 'Онлайн-академия инвестиций вела эфиры бесплатно и вручную. Я подготовил предложение платформы в Telegram: курсы разных преподавателей поштучно, 15 языков, партнёрка на две линии 10% и 5%, оплата в USDT, лента и витрина спонсоров. Три версии по голосовым заказчицы, предложение передано, решение за ней.',
    tags: ['кейс', 'онлайн-школа', 'партнёрская программа', 'Telegram', 'коммерческое предложение'],
    relatedSlugs: ['avtomatizaciya-onlayn-shkoly-2026', 'uchet-partnerskih-vyplat-2026', 'lichnyy-kabinet-partnera-2026', 'zapusk-onlayn-kursa-tehchast-2026'],
    ctaInternal: { url: `${S}/predlozheniya/onlayn-shkola-platforma/`, label: 'Обсудить платформу курсов' },
  },
  {
    slug: 'set-magazinov-belya-max-poverh-1c-keys-2026',
    heroIcon: 'ph-fill ph-shopping-bag-open',
    title: 'Сеть магазинов белья: MAX, лояльность и сертификаты поверх 1С',
    metaTitle: 'Кейс: MAX, лояльность и сертификаты поверх 1С для сети белья',
    metaDescription: 'Кейс: предложение для 9 магазинов белья. 1С не трогаем, сверху витрина в MAX с партнёркой, приложение, свои сертификаты, CRM и единое окно соцсетей.',
    excerpt: 'Сеть из 9 магазинов белья своей марки с учётом в 1С и своим программистом. Я предложил оставить 1С единственным источником учёта и поставить рядом сервис для каналов: витрина в MAX с партнёркой и розыгрышами, приложение с картой, свой реестр сертификатов, CRM и единое окно соцсетей. Предложение передано, решение за заказчицей.',
    tags: ['кейс', '1С', 'MAX', 'программа лояльности', 'подарочные сертификаты', 'ритейл'],
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
