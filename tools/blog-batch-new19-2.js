// Одиночная статья: как выложить приложение компании в RuStore (шаги, модерация, сроки).
// Факты по справке RuStore и правилам модерации (проверено 2026-10-12). Ведёт на мобильные приложения.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-12';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_RUSTORE = {
  title: 'Приложение и публикация в RuStore',
  services: [
    { icon: 'ph-fill ph-device-mobile', label: 'Приложение для Android и iOS' },
    { icon: 'ph-fill ph-storefront', label: 'Подготовка к публикации в RuStore' },
    { icon: 'ph-fill ph-app-window', label: 'PWA вместо магазина приложений' },
    { icon: 'ph-fill ph-credit-card', label: 'Оплата и push внутри приложения' },
  ],
  ctaLabel: 'Обсудить приложение', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'kak-vylozhit-prilozhenie-v-rustore-2026',
    category: 'development',
    published: true,
    title: 'Как опубликовать приложение в RuStore: шаги, модерация, сроки',
    metaTitle: 'Как опубликовать приложение в RuStore: шаги и сроки 2026',
    metaDescription: 'Как опубликовать приложение в RuStore: аккаунт для ИП и компании, APK и AAB, ключ подписи, карточка, модерация до 72 часов, платежи 15% и push.',
    metaKeywords: 'как опубликовать приложение в rustore, размещение приложения в rustore, публикация в rustore, модерация rustore сроки, rustore консоль регистрация, rustore pay sdk комиссия',
    excerpt: 'Пошагово по справке RuStore: аккаунт разработчика, APK и AAB, ключ подписи, карточка и политика конфиденциальности, модерация до 72 часов, оплата и push. Плюс что с iPhone и когда хватит PWA или мини-приложения.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 9,
    heroIcon: 'ph-fill ph-storefront',
    tags: ['RuStore', 'мобильные приложения', 'публикация приложений', 'Android', 'PWA'],
    toc: toc(
      ['kak-opublikovat', 'Как опубликовать приложение в RuStore'],
      ['akkaunt', 'Аккаунт разработчика'],
      ['sborka', 'APK, AAB и ключ подписи'],
      ['kartochka', 'Карточка и обязательные материалы'],
      ['moderaciya', 'Модерация и сроки'],
      ['platezhi-push', 'Платежи, push и обновления'],
      ['zakon', 'Закон о предустановке и iPhone'],
      ['bez-magazina', 'Когда магазин не нужен'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['telegram-mini-app-chto-eto-2026', 'mini-app-v-max-dlya-biznesa-2026', 'bot-vmesto-mobilnogo-prilozheniya-2026', 'kak-ustanovit-max-bez-google-play-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/mobile-apps/', label: 'Разработка мобильных приложений' },
    servicesOffer: SVC_RUSTORE,
    contentHtml: C('kak-vylozhit-prilozhenie-v-rustore-2026'),
  },
];
