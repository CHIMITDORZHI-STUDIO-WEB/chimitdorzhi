// Кейсы-предложения 14.10.2026 (рубрика «Аудиты и предложения»): концепция и ТЗ портала путешествий по подписке,
// визуализация ТЗ бота, витрины и розыгрыша для детской арт-студии поверх YCLIENTS и GetCourse.
// Без имён клиентов, названий проектов, брендов, доменов и цен; статус: предложение передано, решение за заказчиком.
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
    slug: 'travel-portal-po-podpiske-koncepciya-tz-keys-2026',
    heroIcon: 'ph-fill ph-airplane-tilt',
    title: 'Портал путешествий по подписке: концепция, ТЗ и рабочее демо',
    metaTitle: 'Кейс: портал путешествий по подписке, ТЗ и рабочее демо',
    metaDescription: 'Кейс: концепция, ТЗ на 20 слайдах и кликабельное демо travel-портала по подписке: каталог, план с пейволлом, бот, кабинет, админка. Решение за заказчиком.',
    excerpt: 'Проект о самостоятельных путешествиях по подписке: маршрут-планы, еда, визы и жильё. Я подготовил концепцию и ТЗ на 20 слайдах, а следом собрал рабочее демо портала: каталог, маршрут-план с пейволлом, проверка визы, кабинет, симулятор бота и админка. Данные условные, оплата имитируется, решение за заказчиком.',
    tags: ['кейс', 'техническое задание', 'подписка', 'Telegram-бот', 'путешествия', 'прототип'],
    dateModified: '2026-10-15',
    relatedSlugs: ['zakrytyy-klub-po-podpiske-2026', 'avtospisanie-abonementov-podpiska-2026', 'kak-sostavit-tz-na-sayt-bot-2026', 'telegram-kanal-zayavki-knopka-pod-postom-bot-2026'],
    ctaInternal: { url: `${S}/predlozheniya/platforma-podpiski-kontent/`, label: 'Обсудить платформу подписки' },
  },
  {
    slug: 'art-studiya-bot-vitrina-rozygrysh-keys-2026',
    heroIcon: 'ph-fill ph-palette',
    title: 'Бот, витрина и розыгрыш для детской арт-студии поверх YCLIENTS',
    metaTitle: 'Кейс: бот для детской арт-студии поверх YCLIENTS и GetCourse',
    metaDescription: 'Кейс: визуализация ТЗ детской арт-студии. Бот в Telegram и MAX, витрина наборов и розыгрыш поверх YCLIENTS и GetCourse, 11 слайдов и 13 экранов.',
    excerpt: 'Детская арт-студия держит запись в YCLIENTS, а онлайн-клуб и базу в GetCourse. Первая версия с единой платформой устарела, когда пришло ТЗ без своей CRM. По ТЗ я собрал 13 экранов и 11 слайдов: бот, витрина, розыгрыш и шесть поправок к механике. Предложение передано, бота пока нет.',
    tags: ['кейс', 'YCLIENTS', 'GetCourse', 'розыгрыш', 'бот в MAX'],
    relatedSlugs: ['integraciya-yclients-s-botom-i-getcourse-bez-crm-2026', 'rozygrysh-prizov-v-messendzhere-pravila-nalog-cheki-2026', 'yclients-dikidi-ili-svoy-bot-2026', 'it-dlya-detskogo-centra-2026'],
    ctaInternal: { url: `${S}/predlozheniya/it-detskiy-centr/`, label: 'Обсудить бота для студии' },
  },
].map(E);
