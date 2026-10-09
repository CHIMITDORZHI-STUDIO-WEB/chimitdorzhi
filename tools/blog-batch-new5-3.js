// Одиночная статья: таблицы и карточки прямо в сообщении Telegram-бота (Rich Messages, Bot API 10.1).
// Намерение: выбор между ботом и Mini App и экономия на разработке. Обзор Bot API 10 и кейс сравнения
// уже есть отдельно, статья ссылается на них. Ведёт на разработку Telegram-ботов.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-09';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_RICH = {
  title: 'Бот с таблицами и карточками в чате',
  services: [
    { icon: 'ph-fill ph-table', label: 'Прайс, расписание и смета таблицей в сообщении' },
    { icon: 'ph-fill ph-squares-four', label: 'Карточки товаров с фото и характеристиками' },
    { icon: 'ph-fill ph-list-checks', label: 'Статус заказа в одном обновляемом сообщении' },
    { icon: 'ph-fill ph-app-window', label: 'Mini App только там, где нужна корзина или кабинет' },
  ],
  ctaLabel: 'Обсудить бота', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'tablica-v-soobshchenii-telegram-bota-vmesto-mini-app-2026',
    category: 'development',
    published: true,
    title: 'Таблица в сообщении Telegram-бота: когда Mini App не нужен',
    metaTitle: 'Telegram бот: таблица в сообщении вместо Mini App',
    metaDescription: 'Rich Messages в Telegram: таблицы, карточки и статус заказа прямо в сообщении бота. Бот или Mini App, что выбрать и сколько это экономит на разработке.',
    metaKeywords: 'telegram бот таблица в сообщении, rich messages telegram, бот или mini app что выбрать, sendRichMessage, Bot API 10.1, мини-приложение telegram цена, прайс в telegram боте',
    excerpt: 'С июня 2026 года Telegram-бот присылает таблицы, списки, раскрывающиеся секции и карточки прямо в сообщении. Разбираю, какие экраны мини-приложения теперь переезжают в чат, где Mini App всё ещё нужен, что с этим в MAX и сколько можно сэкономить на разработке.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 7,
    heroIcon: 'ph-fill ph-table',
    tags: ['Telegram-боты', 'Rich Messages', 'Mini App', 'разработка', 'Bot API'],
    toc: toc(
      ['chto-eto', 'Telegram-бот и таблица в сообщении: что изменилось'],
      ['gde-ranshe', 'Где раньше делали Mini App только ради вёрстки'],
      ['plyusy', 'Что это даёт бизнесу'],
      ['bot-ili-mini-app', 'Бот или Mini App: что выбрать'],
      ['max', 'А что в MAX'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['skolko-stoit', 'Сколько на этом можно сэкономить'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['interfeys-v-chate-vmesto-mini-app-keys-2026', 'telegram-bot-api-10-novye-vozmozhnosti-dlya-biznes-botov-2026', 'telegram-mini-app-chto-eto-2026', 'skolko-stoit-chat-bot-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/development/telegram-bots/', label: 'Telegram-боты под ключ' },
    servicesOffer: SVC_RICH,
    contentHtml: C('tablica-v-soobshchenii-telegram-bota-vmesto-mini-app-2026'),
  },
];
