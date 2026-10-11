// Одиночная статья: бот спрашивает оценку после визита, низкую оценку сразу видит
// управляющий. Ссылка на карты всем (без review gating), правила Яндекса и 2ГИС
// сверены 10.10.2026. Ведёт на разработку ботов MAX.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-10';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_OTKLIK = {
  title: 'Бот оценок после визита',
  services: [
    { icon: 'ph-fill ph-star', label: 'Вопрос об оценке после визита в MAX, Telegram или SMS' },
    { icon: 'ph-fill ph-bell-ringing', label: 'Уведомление управляющему и эскалация владельцу' },
    { icon: 'ph-fill ph-map-pin', label: 'Ссылки на карточки в Яндекс Картах и 2ГИС' },
    { icon: 'ph-fill ph-chart-bar', label: 'Отчёт: ответы, оценки, реакция, возвраты' },
  ],
  ctaLabel: 'Обсудить бота оценок', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'bot-ocenka-posle-vizita-negativ-upravlyayushchemu-2026',
    category: 'marketing',
    published: true,
    title: 'Сбор отзывов после визита: бот просит оценку, жалобу видит управляющий',
    metaTitle: 'Сбор отзывов после визита: бот и негатив за час',
    metaDescription: 'Сбор отзывов после визита ботом: оценка от 1 до 5, низкую сразу видит управляющий, ссылка на Яндекс Карты и 2ГИС всем. Правила площадок и метрики.',
    metaKeywords: 'сбор отзывов после визита, как работать с негативными отзывами клиентов, бот для сбора отзывов, оценка после визита, отзывы яндекс карты 2гис, негатив управляющему',
    excerpt: 'Через несколько часов после визита бот просит оценку от 1 до 5. Низкая оценка сразу приходит управляющему с контактом и деталями визита, ссылку на карты получают все. Разбираю правила Яндекса и 2ГИС, согласия и четыре метрики.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-star',
    tags: ['отзывы', 'боты', 'репутация', 'Яндекс Карты', '2ГИС'],
    toc: toc(
      ['kak-rabotaet', 'Сбор отзывов после визита: как это работает'],
      ['pravila', 'Что разрешают Яндекс Карты и 2ГИС'],
      ['negativ', 'Как работать с негативными отзывами клиентов за час'],
      ['soglasie', 'Согласие, рассылки и персональные данные'],
      ['metriki', 'Какие цифры смотреть'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['reputaciya-otzyvy-yandex-2gis-2026', 'nps-indeks-loyalnosti-2026', 'yandex-karty-2gis-lokalnyy-biznes-2027', 'pochemu-klienty-ne-vozvrashchayutsya-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/development/max-bots/', label: 'Собрать бота оценок после визита' },
    servicesOffer: SVC_OTKLIK,
    contentHtml: C('bot-ocenka-posle-vizita-negativ-upravlyayushchemu-2026'),
  },
];
