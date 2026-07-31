// Одиночная статья: бот-монитор публичных чатов на заявки «куплю/ищу».
// Легитимный lead-gen (мониторинг публичных сообщений), ведёт на разработку ботов.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-31';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_MON = {
  title: 'Бот-монитор заявок под ключ',
  services: [
    { icon: 'ph-fill ph-magnifying-glass', label: 'Отслеживание чатов по вашим словам' },
    { icon: 'ph-fill ph-bell-ringing', label: 'Уведомление о заявке за секунды' },
    { icon: 'ph-fill ph-funnel', label: 'Фильтры и стоп-слова против шума' },
    { icon: 'ph-fill ph-table', label: 'Выгрузка лидов в таблицу или CRM' },
  ],
  ctaLabel: 'Обсудить бота', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'bot-monitor-chatov-zayavki-2026',
    category: 'development',
    published: true,
    title: 'Бот-монитор чатов: ловим заявки «куплю/ищу» первыми',
    metaTitle: 'Бот-монитор чатов: ловить заявки в Telegram',
    metaDescription: 'Как бот следит за публичными чатами и каналами и ловит сообщения «куплю, ищу, посоветуйте» по вашей теме, а вы отвечаете первым. Что законно, как настроить и кому окупается.',
    metaKeywords: 'мониторинг чатов telegram, бот для поиска клиентов, ловить заявки в чатах, парсинг telegram чатов, лиды из telegram, бот монитор ключевых слов',
    excerpt: 'В тематических чатах каждый день пишут «ищу того, кто сделает сайт», «посоветуйте разработчика», «куплю». Кто ответит первым — заберёт клиента. Разбираю, как бот ловит такие заявки за секунды, что при этом законно, и кому это окупается.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-chats-circle',
    tags: ['бот', 'мониторинг', 'лиды', 'Telegram', '2026'],
    toc: toc(
      ['problema', 'Почему заявки уходят к другим'],
      ['kak-rabotaet', 'Как работает бот-монитор'],
      ['chto-lovit', 'Что настроить, чтобы не тонуть в шуме'],
      ['zakon', 'Что законно, а что нет'],
      ['komu-okupaetsya', 'Кому это окупается'],
      ['kak-vnedrit', 'Что нужно для запуска'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['chatbot-telegram-max-vk-2026', 'monitoring-goszakupok-44fz-2026', 'voronka-prodazh-b2b-2026', 'crm-dlya-malogo-biznesa-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/telegram-bots/', label: 'Заказать бота-монитора' },
    servicesOffer: SVC_MON,
    contentHtml: C('bot-monitor-chatov-zayavki-2026'),
  },
];
