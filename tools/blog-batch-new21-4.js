const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-14';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_PUSH = {
  title: 'Push-уведомления и связанные каналы',
  services: [
    { icon: 'ph-fill ph-bell-ringing', label: 'Web push на сайт, в магазин и в PWA' },
    { icon: 'ph-fill ph-browser', label: 'Экран запроса разрешения и сегменты подписки' },
    { icon: 'ph-fill ph-chat-circle-dots', label: 'Запасной канал: бот в Telegram или MAX' },
    { icon: 'ph-fill ph-envelope-simple', label: 'Цепочки: корзина, статус заказа, напоминания' },
  ],
  ctaLabel: 'Обсудить push для сайта', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'push-uvedomleniya-sayta-kak-rabotayut-ogranicheniya-2026',
    category: 'development',
    published: true,
    title: 'Push-уведомления на сайте: как работают и нужны ли бизнесу',
    metaTitle: 'Push уведомления на сайте: как работают и нужны ли',
    metaDescription: 'Web push что это: как работает подписка, где поддерживается (Chrome, Safari, iPhone), ограничения, FCM, согласие по 38-ФЗ и когда push окупается.',
    metaKeywords: 'push уведомления на сайте, web push что это, как работают push уведомления, push уведомления iPhone, VAPID, service worker, согласие на push рассылку, push или email или sms',
    excerpt: 'Разбираю web push по первоисточникам: как устроена подписка, где работает (на iPhone только для сайта на экране «Домой»), как Chrome блокирует навязчивые запросы, что с FCM и законом, когда push окупается и чем его дублировать.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 9,
    heroIcon: 'ph-fill ph-bell-ringing',
    tags: ['push-уведомления', 'web push', 'сайт', 'PWA', 'рассылки'],
    toc: toc(
      ['kak-rabotaet', 'Как работает web push'],
      ['brauzery', 'Где работает'],
      ['ogranicheniya', 'Ограничения'],
      ['rossiya', 'Российский контекст'],
      ['pravo', 'Право и согласие'],
      ['okupaetsya', 'Когда окупается'],
      ['chastota', 'Частота и сегменты'],
      ['alternativy', 'Бот, email, SMS'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['email-push-rassylki-rf-2026', 'pwa-iz-sayta-za-vyhodnye-2026', 'triggernye-cepochki-soobshcheniy-2026', 'sms-ili-messendzher-uvedomleniya-klientam-stoimost-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/web-development/', label: 'Подключить push к сайту или PWA' },
    servicesOffer: SVC_PUSH,
    contentHtml: C('push-uvedomleniya-sayta-kak-rabotayut-ogranicheniya-2026'),
  },
];
