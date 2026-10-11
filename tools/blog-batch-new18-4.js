// Одиночная статья: бесконтактное заселение в мини-отель, апартаменты и посуточную квартиру.
// Правила № 1912 (с 01.03.2026) и изменения № 674, регистрация гостей (5242-1, 109-ФЗ),
// штрафы 169-ФЗ, туристический налог, 152-ФЗ, путь гостя и методика автора.
// Ведёт на предложение для апарт-отелей и посуточной аренды.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-11';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_ZASELENIE = {
  title: 'Заселение без стойки под ключ',
  services: [
    { icon: 'ph-fill ph-calendar-check', label: 'Онлайн-бронь с предоплатой и чеком' },
    { icon: 'ph-fill ph-lock-key', label: 'Умный замок с кодом на даты проживания' },
    { icon: 'ph-fill ph-robot', label: 'Бот с инструкцией и ответами гостям' },
    { icon: 'ph-fill ph-clock-countdown', label: 'Предрегистрация и контроль сроков уведомлений' },
  ],
  ctaLabel: 'Разобрать мой объект', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'beskontaktnoe-zaselenie-mini-otel-apartamenty-2026',
    category: 'industries',
    published: true,
    title: 'Бесконтактное заселение в гостиницу и посуточную квартиру в 2026',
    metaTitle: 'Бесконтактное заселение в гостиницу: что можно по закону',
    metaDescription: 'Бесконтактное заселение в гостиницу и посуточную квартиру: код двери, регистрация гостя, оплата до приезда и где по закону нужен администратор.',
    metaKeywords: 'бесконтактное заселение в гостиницу, самостоятельное заселение посуточно, заселение без администратора, умный замок для посуточной аренды, регистрация гостей в гостинице, заселение через госуслуги, правила 1912',
    excerpt: 'Как устроить заселение без стойки в мини-отеле, апартаментах и посуточной квартире: онлайн-бронь с предоплатой, предрегистрация по ссылке, код от двери на даты, бот для вопросов. И где граница по закону: проверка документа по Правилам № 1912, сроки уведомлений в МВД и штрафы с июня 2026 года.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-lock-key',
    tags: ['гостиницы', 'посуточная аренда', 'заселение', 'умный замок', '2026'],
    toc: toc(
      ['chto-takoe', 'Бесконтактное заселение в гостиницу: что это и где граница'],
      ['gostinica-ili-kvartira', 'Гостиница, апартаменты или квартира: какие правила ваши'],
      ['dokument', 'Документ гостя: где без человека пока нельзя'],
      ['registraciya', 'Регистрация и уведомление о прибытии: сутки и один рабочий день'],
      ['kak-ustroeno', 'Самостоятельное заселение посуточно: как устроен путь гостя'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['it-dlya-mini-gostinicy-hostela-2026', 'posutochnaya-arenda-bez-komissii-2026', 'koordinaciya-klinerov-mezhdu-zaezdami-2027', 'gostinica-kp-dvuyazychnoe-predlozhenie-keys-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/apart-otel-posutochnaya/', label: 'Заселение без стойки для апарт-отеля' },
    servicesOffer: SVC_ZASELENIE,
    contentHtml: C('beskontaktnoe-zaselenie-mini-otel-apartamenty-2026'),
  },
];
