// Одиночная статья: заявки из Telegram-канала через кнопку под постом и бота.
// Механика: inline-кнопка с deep link ?start=метка, анкета в боте, учёт по постам,
// кодовые слова, закреп, «напомнить позже», 152-ФЗ, то же в MAX. Ведёт на /development/telegram-bots/.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-10';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_KANAL = {
  title: 'Заявки из канала через бота',
  services: [
    { icon: 'ph-fill ph-telegram-logo', label: 'Бот с анкетой под посты канала' },
    { icon: 'ph-fill ph-link', label: 'Ссылки с меткой для каждого поста' },
    { icon: 'ph-fill ph-table', label: 'Заявки в таблицу или CRM' },
    { icon: 'ph-fill ph-chart-bar', label: 'Учёт переходов и заявок по постам' },
  ],
  ctaLabel: 'Обсудить бота для канала', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'telegram-kanal-zayavki-knopka-pod-postom-bot-2026',
    category: 'marketing',
    published: true,
    title: 'Как получать заявки из Telegram-канала: кнопка под постом и бот',
    metaTitle: 'Как получать заявки из телеграм канала: кнопка и бот',
    metaDescription: 'Кнопка под постом в Телеграм ведёт в бота с меткой поста, бот задаёт 2-3 вопроса и шлёт заявку вам. Как считать заявки по постам и помнить о 152-ФЗ.',
    metaKeywords: 'как получать заявки из телеграм канала, кнопка под постом в телеграм, заявки из telegram канала, бот для канала, deep link start, кодовое слово в комментариях, бот для заявок',
    excerpt: 'Подписчики есть, а заявок мало. Разбираю механику: кнопка под постом с меткой, бот с двумя-тремя вопросами, кодовые слова, закреп и учёт переходов и заявок по каждому посту. Плюс согласие по 152-ФЗ и то же самое в MAX.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 7,
    heroIcon: 'ph-fill ph-cursor-click',
    tags: ['Telegram', 'заявки', 'чат-боты', 'автоворонки', 'кнопка под постом'],
    toc: toc(
      ['kak-poluchat-zayavki', 'Как получать заявки из Telegram-канала: схема в четыре шага'],
      ['knopka-pod-postom', 'Кнопка под постом в Телеграм: как её поставить'],
      ['voprosy-bota', 'Какие вопросы задаёт бот и куда уходит заявка'],
      ['kodovoe-slovo-i-zakrep', 'Кодовое слово, закреп и «напомнить позже»'],
      ['uchet-po-postam', 'Учёт: сколько переходов и заявок дал каждый пост'],
      ['telefon-i-152-fz', 'Телефон и согласие: осторожно с 152-ФЗ'],
      ['max', 'То же самое в канале MAX'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['telegram-kanal-biznesa-zayavki-2026', 'avtovoronki-v-messendzherah-2027', 'konveyer-rolikov-foto-infografika-keys-2026', 'triggernye-cepochki-soobshcheniy-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/development/telegram-bots/', label: 'Бот для заявок из канала' },
    servicesOffer: SVC_KANAL,
    contentHtml: C('telegram-kanal-zayavki-knopka-pod-postom-bot-2026'),
  },
];
