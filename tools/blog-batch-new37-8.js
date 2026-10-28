// Одиночная статья (new37-8): вход в мини-приложение Telegram и MAX без пароля, подпись initData.
// Запросы: «вход в мини-приложение telegram», «проверка initData», «авторизация mini app max», «initData hash 401».
// Опора: core.telegram.org/bots/webapps (проверка initData, auth_date, initDataUnsafe, requestContact), dev.max.ru/docs/webapps/validation и /bridge.
// Кейсы: prilozhenie-rukovoditelya-komandy-telegram-max-keys-2026, uchet-dlya-buhfirmy-v-dubae-bot-pwa-keys-2026, sayt-kosmetologa-etap-1-keys-2026.
// category 'development'.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-29';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_MINIAPP_AUTH = {
  title: 'Мини-приложение с надёжным входом',
  services: [
    { icon: 'ph-fill ph-lock-key', label: 'Проверка подписи initData на сервере для Telegram и MAX' },
    { icon: 'ph-fill ph-user-circle', label: 'Один профиль по номеру телефона из двух мессенджеров и сайта' },
    { icon: 'ph-fill ph-device-mobile', label: 'Вход в PWA и браузере через бота или по паролю' },
    { icon: 'ph-fill ph-shield-check', label: 'Аудит входа и прав в готовом приложении' },
  ],
  ctaLabel: 'Обсудить мини-приложение', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'vhod-v-mini-prilozhenie-telegram-max-bez-parolya-2026',
    category: 'development',
    published: true,
    title: 'Вход в мини-приложение Telegram и MAX без пароля: как это работает',
    metaTitle: 'Вход в мини-приложение Telegram и MAX: подпись initData',
    metaDescription: 'Как мини-приложение в Telegram и MAX узнаёт человека без пароля: проверка подписи initData на сервере, срок auth_date, склейка профиля по телефону, вход в PWA.',
    metaKeywords: 'вход в мини-приложение telegram, проверка initdata, авторизация telegram mini app, мини-приложение max авторизация, initData hash, auth_date, initDataUnsafe, requestContact, ошибка 401 mini app',
    excerpt: 'Мини-приложение узнаёт человека по подписи, которую ставит мессенджер. Объясняю простым языком, как сервер проверяет initData токеном бота, зачем ограничивать срок по auth_date, как склеить профиль из Telegram, MAX и сайта и что делать в PWA.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-lock-key',
    tags: ['мини-приложение', 'Telegram', 'MAX', 'безопасность', 'PWA'],
    toc: toc(
      ['zachem', 'Почему пароль здесь не нужен'],
      ['podpis', 'Как работает подпись initData'],
      ['ne-verit-klientu', 'Почему нельзя верить данным с клиента'],
      ['srok', 'Срок auth_date и часы сервера'],
      ['telefon', 'Склейка профиля по номеру телефона'],
      ['pwa', 'Что делать в PWA и браузере'],
      ['oshibki', 'Типичные ошибки'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['prilozhenie-rukovoditelya-komandy-telegram-max-keys-2026', 'uchet-dlya-buhfirmy-v-dubae-bot-pwa-keys-2026', 'sayt-kosmetologa-etap-1-keys-2026', 'telegram-mini-app-chto-eto-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/development/telegram-mini-apps/', label: 'Разработка мини-приложений Telegram' },
    servicesOffer: SVC_MINIAPP_AUTH,
    contentHtml: C('vhod-v-mini-prilozhenie-telegram-max-bez-parolya-2026'),
  },
];
