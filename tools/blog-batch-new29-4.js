// Одиночная статья (new29-4): сайт для музея, онлайн-билеты, аудиогид в браузере, доступность.
// Коммерческий интент: «сайт для музея заказать», «аудиогид для музея в браузере», «онлайн-билеты музей сайт».
// Опора: кейс amarsain-sayt-teatra-keys-2026 (без названия). Ведёт на цифровизацию культуры.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-17';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_MUZEY = {
  title: 'Сайт и аудиогид для музея',
  services: [
    { icon: 'ph-fill ph-ticket', label: 'Онлайн-билеты через оператора и Пушкинская карта' },
    { icon: 'ph-fill ph-headphones', label: 'Аудиогид в браузере по QR-коду' },
    { icon: 'ph-fill ph-cube', label: '3D-тур и виртуальная экскурсия по залам' },
    { icon: 'ph-fill ph-eye', label: 'Доступность по постановлению № 102 и 152-ФЗ' },
  ],
  ctaLabel: 'Обсудить сайт музея', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'sayt-dlya-muzeya-bilety-audiogid-2026',
    category: 'industries',
    published: true,
    title: 'Сайт для музея: онлайн-билеты, аудиогид в браузере и доступность',
    metaTitle: 'Сайт для музея заказать: билеты, аудиогид, цена',
    metaDescription: 'Сайт для музея под ключ: афиша выставок, онлайн-билеты и Пушкинская карта, аудиогид по QR в браузере, 3D-тур, доступность и 152-ФЗ. От 100 000 ₽.',
    metaKeywords: 'сайт для музея заказать, аудиогид для музея в браузере, онлайн-билеты музей сайт, сайт музея под ключ, пушкинская карта музей, виртуальная экскурсия музей, 3d-тур музей, версия для слабовидящих музей',
    excerpt: 'Что входит в сайт музея, галереи или музея-заповедника: афиша выставок и экскурсий, билеты через оператора и Пушкинская карта, аудиогид по QR-коду без приложения, 3D-тур, коллекция онлайн, требования к сайту государственного музея и цены.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-bank',
    tags: ['музей', 'учреждения культуры', 'аудиогид', 'билеты', 'доступность', '2026'],
    toc: toc(
      ['chto-vhodit', 'Сайт для музея под ключ: что входит'],
      ['bilety', 'Онлайн-билеты и Пушкинская карта'],
      ['audiogid', 'Аудиогид в браузере по QR-коду'],
      ['3d-tur', 'Виртуальная экскурсия и 3D-тур'],
      ['kollekciya', 'Коллекция онлайн: как оформить карточки предметов'],
      ['zakon', 'Требования к сайту государственного и муниципального музея'],
      ['cena', 'Сколько стоит сайт для музея'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['sayt-dlya-teatra-filarmonii-doma-kultury-2026', 'amarsain-sayt-teatra-keys-2026', 'priem-oplaty-za-bilety-2026', '3d-tur-dlya-gostinicy-bazy-otdyha-salona-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/culture-digitalization/', label: 'Цифровизация учреждений культуры' },
    servicesOffer: SVC_MUZEY,
    contentHtml: C('sayt-dlya-muzeya-bilety-audiogid-2026'),
  },
];
