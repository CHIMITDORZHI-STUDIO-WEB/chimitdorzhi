// Одиночная статья: ограничения WhatsApp и перевод клиентов, рассылок и бота в MAX и Telegram.
// Факты об ограничениях проверены по публикациям с датой (Интерфакс, РБК, The Moscow Times) на 2026-10-09.
// Ведёт на разработку ботов для MAX. Кодовое слово МАКС.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-09';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_PEREEZD = {
  title: 'Переезд клиентов из WhatsApp',
  services: [
    { icon: 'ph-fill ph-robot', label: 'Бот для MAX и Telegram на одном ядре' },
    { icon: 'ph-fill ph-qr-code', label: 'Ссылки с метками и QR для перехода' },
    { icon: 'ph-fill ph-chats-circle', label: 'Единое окно сообщений для менеджеров' },
    { icon: 'ph-fill ph-address-book', label: 'Карточки клиентов и согласия в CRM' },
  ],
  ctaLabel: 'Обсудить переезд', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'whatsapp-blokirovka-perevesti-klientov-v-max-i-telegram-2026',
    category: 'development',
    published: true,
    title: 'WhatsApp блокировка: что делать бизнесу и как перевести клиентов в MAX',
    metaTitle: 'WhatsApp блокировка: что делать бизнесу и как уйти в MAX',
    metaDescription: 'Что делать бизнесу при блокировке WhatsApp: факты на октябрь 2026, план перевода клиентов в MAX и Telegram из 7 шагов, согласия по 152-ФЗ, цены.',
    metaKeywords: 'whatsapp блокировка что делать бизнесу, перевести клиентов из whatsapp в max, замена whatsapp для бизнеса, блокировка ватсап бизнес, whatsapp business api россия, бот в max для бизнеса, переезд из whatsapp в telegram',
    excerpt: 'Ограничения WhatsApp идут с августа 2025 года, в феврале 2026 года дошли до доменов. Разбираю, что известно на октябрь 2026 года, и даю план из 7 шагов, как перевести клиентов, рассылки и бота в MAX и Telegram, не потеряв базу.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-arrows-left-right',
    tags: ['WhatsApp', 'MAX', 'Telegram', 'переезд клиентов', 'боты для бизнеса'],
    toc: toc(
      ['whatsapp-blokirovka-chto-izvestno', 'WhatsApp блокировка: что известно и что делать бизнесу'],
      ['kuda-perevodit', 'Замена WhatsApp для бизнеса: MAX и Telegram'],
      ['plan-pereezda', 'Как перевести клиентов из WhatsApp в MAX: 7 шагов'],
      ['soglasiya-152-fz', 'Согласия и 152-ФЗ при переезде'],
      ['kak-ya-delayu', 'Как я веду такой переезд'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['zvonki-klientam-posle-ogranicheniya-whatsapp-telegram-2026', 'zayavki-iz-whatsapp-i-lichnyh-soobshcheniy-v-sistemu-2026', 'max-messendzher-dlya-biznesa-2026', 'perevod-auditorii-v-max-2027'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/development/max-bots/', label: 'Бот в MAX для переезда клиентов' },
    servicesOffer: SVC_PEREEZD,
    contentHtml: C('whatsapp-blokirovka-perevesti-klientov-v-max-i-telegram-2026'),
  },
];
