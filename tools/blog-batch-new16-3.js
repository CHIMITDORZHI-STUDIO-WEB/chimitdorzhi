// Одиночная статья: новогодние корпоративы и банкеты в ресторане.
// Календарь залов, калькулятор, бронь с депозитом, договор и счёт для юрлица,
// меню и рассадка по ссылке. Ведёт на бронирование в MAX Mini App.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-10';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_BANKET = {
  title: 'Корпоративы и банкеты без хаоса',
  services: [
    { icon: 'ph-fill ph-calendar-check', label: 'Страница сезона с календарём залов' },
    { icon: 'ph-fill ph-receipt', label: 'Калькулятор бюджета и бронь с депозитом' },
    { icon: 'ph-fill ph-file-text', label: 'Договор и счёт для компаний из шаблона' },
    { icon: 'ph-fill ph-bell-ringing', label: 'Меню, рассадка и напоминания по ссылке' },
  ],
  ctaLabel: 'Обсудить банкеты', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'novogodnie-korporativy-banket-bron-depozit-restoran-2026',
    category: 'industries',
    published: true,
    title: 'Организация корпоративов в ресторане: онлайн-бронь банкета и депозит',
    metaTitle: 'Организация корпоративов в ресторане: бронь банкета онлайн',
    metaDescription: 'Организация корпоративов в ресторане без хаоса: календарь залов, калькулятор, бронирование банкета онлайн с депозитом, договор, меню и число гостей.',
    metaKeywords: 'организация корпоративов в ресторане, бронирование банкета онлайн, новогодний корпоратив в ресторане, депозит за банкет, предоплата банкета, банкетный зал бронь, корпоратив 2026',
    excerpt: 'Декабрьские корпоративы продаются в октябре. Разбираю, как ресторану принимать заявки на банкеты без двух компаний на одну дату: календарь залов, калькулятор, бронь с депозитом, договор для юрлица, меню и число гостей по ссылке, и что с возвратом и чеками.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-confetti',
    tags: ['ресторан', 'банкет', 'корпоратив', 'бронирование', 'депозит', 'HoReCa'],
    toc: toc(
      ['pochemu-v-oktyabre', 'Организация корпоративов в ресторане: почему всё решается в октябре'],
      ['chto-lomaetsya', 'Что ломается в декабре'],
      ['stranica-korporativy', 'Страница «Корпоративы 2026»: календарь и калькулятор'],
      ['bron-depozit', 'Бронирование банкета онлайн с депозитом'],
      ['menyu-rassadka', 'Меню, рассадка и число гостей по ссылке'],
      ['dengi-i-zakon', 'Депозит, возврат и чеки: что сверить с юристом'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['onlayn-bronirovanie-stolikov-2026', 'onlayn-zapis-s-depozitom-2026', 'kafe-nacionalnoy-kuhni-bot-max-rozygryshi-keys-2026', 'chernaya-pyatnica-novyy-god-chek-list-na-8-nedel-dlya-magazina-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/max-mini-app-bronirovanie/', label: 'Бронирование с оплатой в MAX' },
    servicesOffer: SVC_BANKET,
    contentHtml: C('novogodnie-korporativy-banket-bron-depozit-restoran-2026'),
  },
];
