// Одиночная статья (new28-2): сайт для театра, филармонии, дома культуры.
// Коммерческий интент: «сайт для театра заказать», «сайт для дома культуры».
// Опора: кейс amarsain-sayt-teatra-keys-2026. Ведёт на цифровизацию культуры.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-16';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_KULTURA = {
  title: 'Сайт и боты для учреждения культуры',
  services: [
    { icon: 'ph-fill ph-calendar-check', label: 'Афиша из билетного сервиса и карточки спектаклей' },
    { icon: 'ph-fill ph-ticket', label: 'Билеты через оператора и Пушкинская карта' },
    { icon: 'ph-fill ph-chat-circle-dots', label: 'Боты и рассылки в MAX и Telegram' },
    { icon: 'ph-fill ph-eye', label: 'Версия для слабовидящих и 152-ФЗ' },
  ],
  ctaLabel: 'Обсудить сайт учреждения', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'sayt-dlya-teatra-filarmonii-doma-kultury-2026',
    category: 'industries',
    published: true,
    title: 'Сайт для театра, филармонии и дома культуры: афиша, билеты, боты',
    metaTitle: 'Сайт для театра заказать: афиша, билеты, боты и цена',
    metaDescription: 'Сайт для театра, филармонии или дома культуры под ключ: афиша с фильтрами, билеты и Пушкинская карта, боты в MAX, доступность, 152-ФЗ. Цены от 100 000 ₽.',
    metaKeywords: 'сайт для театра заказать, сайт для дома культуры, сайт для филармонии, сайт учреждения культуры, афиша театра на сайте, пушкинская карта на сайте, версия для слабовидящих, бот театра MAX',
    excerpt: 'Что входит в сайт театра, филармонии или дома культуры под ключ: афиша из билетного сервиса, Пушкинская карта, боты в MAX и Telegram, требования к официальному сайту учреждения и цены от 100 000 ₽. На примере моего кейса национального театра.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-masks-theater',
    tags: ['театр', 'учреждения культуры', 'сайт под ключ', 'афиша', 'билеты', '2026'],
    toc: toc(
      ['chto-vhodit', 'Сайт для театра и дома культуры под ключ: что входит'],
      ['afisha', 'Афиша и карточка спектакля'],
      ['bilety', 'Билеты и Пушкинская карта'],
      ['rassylki', 'Рассылки зрителям в MAX и Telegram'],
      ['zakon', 'Доступность, 152-ФЗ и требования к сайту учреждения'],
      ['yazyki', 'Национальные языки'],
      ['cena', 'Из чего складывается цена'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ot-vas', 'Что нужно от вас'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['amarsain-sayt-teatra-keys-2026', 'sayt-afisha-meropriyatiya-2026', 'priem-oplaty-za-bilety-2026', 'dostupnost-sayta-a11y-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/culture-digitalization/', label: 'Цифровизация учреждений культуры' },
    servicesOffer: SVC_KULTURA,
    contentHtml: C('sayt-dlya-teatra-filarmonii-doma-kultury-2026'),
  },
];
