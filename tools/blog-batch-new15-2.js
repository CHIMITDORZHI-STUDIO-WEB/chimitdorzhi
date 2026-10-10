// Одиночная статья (new15, n=2): бот поверх YCLIENTS и GetCourse.
// Запись, оплата курса, розыгрыш и приглашения без своей CRM. Ведёт на разработку ботов.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-10';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_SVYAZKA = {
  title: 'Бот поверх YCLIENTS и GetCourse',
  services: [
    { icon: 'ph-fill ph-calendar-check', label: 'Запись из бота в расписание YCLIENTS' },
    { icon: 'ph-fill ph-graduation-cap', label: 'Оплата курса и доступ в GetCourse' },
    { icon: 'ph-fill ph-gift', label: 'Розыгрыш и приглашения для учеников' },
    { icon: 'ph-fill ph-table', label: 'Сводная таблица без своей CRM' },
  ],
  ctaLabel: 'Обсудить связку', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'integraciya-yclients-s-botom-i-getcourse-bez-crm-2026',
    category: 'development',
    published: true,
    title: 'Интеграция YCLIENTS с ботом и GetCourse: запись, курсы, розыгрыш',
    metaTitle: 'Интеграция YCLIENTS с ботом и GetCourse без своей CRM',
    metaDescription: 'Как бот в Telegram и MAX записывает в YCLIENTS, продаёт курс через GetCourse и ведёт розыгрыш без своей CRM: что открыто в API, лимиты, тарифы, цены.',
    metaKeywords: 'интеграция yclients с ботом, getcourse бот telegram, бот для записи yclients max, api yclients, api getcourse, розыгрыш в боте, бот без crm',
    excerpt: 'Офлайн живёт в YCLIENTS, онлайн в GetCourse, а клиенты пишут в мессенджер. Разбираю, как собрать над ними бота в Telegram или MAX: запись, оплата курса, розыгрыш и приглашения, сводка в таблице. Что открыто в API, какие лимиты и где связка ломается.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-plugs-connected',
    tags: ['YCLIENTS', 'GetCourse', 'бот в MAX', 'Telegram-бот', 'интеграции'],
    toc: toc(
      ['chto-takoe-svyazka', 'Что такое интеграция YCLIENTS с ботом и GetCourse'],
      ['chto-otkryto-v-api', 'Что открыто в API YCLIENTS и GetCourse'],
      ['zapis-v-yclients', 'Запись из бота в YCLIENTS'],
      ['oplata-kursa', 'Оплата курса и доступ в GetCourse'],
      ['rozygrysh-i-priglasheniya', 'Розыгрыш и «приведи подругу» для учеников'],
      ['tablica-vmesto-crm', 'Таблица вместо своей CRM'],
      ['kak-ya-delayu', 'Как я собираю такую связку'],
      ['ogranicheniya', 'Ограничения и риски'],
      ['skolko-stoit', 'Сколько стоит'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: [
      'yclients-bot-max-napominaniya-2026',
      'svoya-platforma-obucheniya-vmesto-getcourse-kogda-nuzhna-2026',
      'rozygrysh-prizov-v-messendzhere-pravila-nalog-cheki-2026',
      'kafe-nacionalnoy-kuhni-bot-max-rozygryshi-keys-2026',
    ],
    ctaInternal: { url: 'https://chimitdorzhi.tech/development/max-bots/', label: 'Бот в MAX поверх YCLIENTS и GetCourse' },
    servicesOffer: SVC_SVYAZKA,
    contentHtml: C('integraciya-yclients-s-botom-i-getcourse-bez-crm-2026'),
  },
];
