// Экспертная статья (new39-5): напоминания, часовые пояса и тихие часы для бота и мини-приложения.
// Опора: кейсы prilozhenie-rukovoditelya-komandy-telegram-max-keys-2026 и sayt-kosmetologa-etap-1-keys-2026; IANA tz, MDN Intl.DateTimeFormat.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-31';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC = {
  title: 'Бот и мини-приложение с напоминаниями без ошибок во времени',
  services: [
    { icon: 'ph-fill ph-clock', label: 'Время в UTC и часовой пояс в профиле человека' },
    { icon: 'ph-fill ph-bell', label: 'Напоминания за сутки и за 2 часа' },
    { icon: 'ph-fill ph-moon', label: 'Тихие часы по местному времени получателя' },
    { icon: 'ph-fill ph-calendar-check', label: 'Запись, оплата и CRM в одном боте' },
  ],
  ctaLabel: 'Обсудить бота с напоминаниями', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'napominaniya-chasovye-poyasa-i-tihie-chasy-2026',
    category: 'development',
    published: true,
    title: 'Напоминания клиентам и сотрудникам: часовые пояса и тихие часы',
    metaTitle: 'Напоминания в боте: часовые пояса и тихие часы 2026',
    metaDescription: 'Как сделать напоминания в боте и мини-приложении: время в UTC и пояс IANA, напоминание за сутки и за 2 часа, перевод часов, тихие часы, переезд.',
    metaKeywords: 'напоминания в боте, часовые пояса в боте, тихие часы, хранение времени в UTC, IANA часовой пояс, напоминание за сутки и за 2 часа, перевод часов, мини-приложение Telegram',
    excerpt: 'Как я делаю напоминания для бота и мини-приложения так, чтобы они приходили вовремя в любом часовом поясе: время в UTC и пояс IANA, напоминание за сутки и за 2 часа, перевод часов, тихие часы ночью, повторы, архив и что делать, если пользователь переехал.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-clock',
    tags: ['напоминания', 'часовые пояса', 'Telegram-бот', 'мини-приложение', 'UTC', 'тихие часы'],
    toc: toc(
      ['utc-i-poyas', 'Что хранить: время в UTC и пояс пользователя'],
      ['otkuda-poyas', 'Откуда взять пояс человека'],
      ['za-sutki-i-za-2-chasa', 'Напоминание за сутки и за 2 часа'],
      ['perevod-chasov', 'Перевод часов и ловушки местного времени'],
      ['tihie-chasy', 'Тихие часы: ночью не пишем'],
      ['povtory-i-arhiv', 'Повторы и архив'],
      ['pereehal', 'Что делать, если пользователь переехал'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько это стоит'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['prilozhenie-rukovoditelya-komandy-telegram-max-keys-2026', 'sayt-kosmetologa-etap-1-keys-2026', 'neyavki-na-zapis-predoplata-napominaniya-2026', 'podtverzhdenie-vizita-klinika-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/development/telegram-bots/', label: 'Разработка Telegram-ботов' },
    servicesOffer: SVC,
    contentHtml: C('napominaniya-chasovye-poyasa-i-tihie-chasy-2026'),
  },
];
