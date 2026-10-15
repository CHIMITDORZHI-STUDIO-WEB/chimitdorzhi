// Одиночная статья: реклама в Telegram Ads для малого бизнеса (2026).
// Как работает, минимальный бюджет прямого кабинета и у реселлеров (eLama, Click.ru),
// разъяснение ФАС от 25.03.2026 и мораторий до конца 2026, маркировка, сбор 3%,
// связка «объявление, бот, кодовое слово, заявка». Ведёт на цифровой маркетинг, кодовое слово «АДС».
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-15';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_TGADS = {
  title: 'Реклама в Telegram с подсчётом заявок',
  services: [
    { icon: 'ph-fill ph-robot', label: 'Бот с метками и кодовым словом' },
    { icon: 'ph-fill ph-megaphone', label: 'Запуск через реселлера и маркировка erid' },
    { icon: 'ph-fill ph-chart-bar', label: 'Учёт заявок и стоимость клиента' },
    { icon: 'ph-fill ph-target', label: 'Запасные каналы: MAX и VK Реклама' },
  ],
  ctaLabel: 'Разобрать мою рекламу', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'reklama-v-telegram-ads-dlya-malogo-biznesa-2026',
    category: 'marketing',
    published: true,
    title: 'Реклама в Telegram Ads для малого бизнеса в 2026: запуск и цены',
    metaTitle: 'Реклама в Telegram Ads: минимальный бюджет и запуск',
    metaDescription: 'Реклама в Telegram Ads для малого бизнеса: минимальный бюджет у реселлеров, позиция ФАС до конца 2026 года, маркировка, модерация и связка с ботом.',
    metaKeywords: 'реклама в telegram ads, telegram ads минимальный бюджет, telegram ads для малого бизнеса, реклама в телеграм 2026, telegram ads через реселлера, telegram ads eLama, реклама в telegram ФАС',
    excerpt: 'Как работает официальная реклама в Telegram, сколько нужно на старт в прямом кабинете и через реселлеров, что ФАС решила про рекламу в Telegram до конца 2026 года, какие темы не пройдут модерацию и как вести объявление в бота с кодовым словом, чтобы считать стоимость заявки.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-telegram-logo',
    tags: ['Telegram Ads', 'реклама', 'Telegram', 'маркировка рекламы', 'малый бизнес'],
    toc: toc(
      ['kak-rabotaet', 'Реклама в Telegram Ads: как она работает'],
      ['byudzhet', 'Telegram Ads минимальный бюджет: прямой кабинет и агентства'],
      ['zakon', 'Закон в России: ФАС, замедление, маркировка и сбор 3%'],
      ['moderaciya', 'Модерация и запрещённые темы'],
      ['komu-podhodit', 'Кому подходит и куда вести трафик'],
      ['svyazka', 'Связка: объявление, бот, кодовое слово, заявка'],
      ['stoimost-zayavki', 'Как считать стоимость заявки'],
      ['alternativy', 'Посевы, MAX и VK Реклама'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['markirovka-reklamy-ord-2026', 'sbor-3-procenta-s-internet-reklamy-2026', 'posevy-v-max-kanalah-2027', 'telegram-kanal-zayavki-knopka-pod-postom-bot-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/digital-marketing/', label: 'Реклама и учёт заявок под ключ' },
    servicesOffer: SVC_TGADS,
    contentHtml: C('reklama-v-telegram-ads-dlya-malogo-biznesa-2026'),
  },
];
