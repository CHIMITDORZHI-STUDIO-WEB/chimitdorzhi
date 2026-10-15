// Одиночная статья: как выбрать домен для бизнеса (.ru, .рф, .su).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-14';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_DOMEN = {
  title: 'Домен под ключ',
  services: [
    { icon: 'ph-fill ph-magnifying-glass', label: 'Подбор и проверка имени домена' },
    { icon: 'ph-fill ph-key', label: 'Оформление домена на вашу компанию' },
    { icon: 'ph-fill ph-globe', label: 'Домен-двойник и редиректы' },
    { icon: 'ph-fill ph-clock-countdown', label: 'Контроль продления и мониторинг' },
  ],
  ctaLabel: 'Подобрать и оформить домен', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'kakuyu-domennuyu-zonu-vybrat-dlya-biznesa-ru-rf-su-2026',
    category: 'development',
    published: true,
    title: 'Какой домен выбрать для сайта: .ru, .рф или .su для малого бизнеса',
    metaTitle: 'Какой домен выбрать для сайта: .ru, .рф или .su в 2026',
    metaDescription: 'Домен .рф или .ru что лучше, чем рискуют .com, .io и .su, цены регистрации и продления на 14.10.2026 и чек-лист выбора имени для малого бизнеса.',
    metaKeywords: 'какой домен выбрать для сайта, домен .рф или .ru что лучше, зона .su, кириллический домен, Punycode, домен для бизнеса, цена продления домена, резервный домен',
    excerpt: 'Основной адрес сайта лучше брать в .ru, а .рф держать вторым для вывески. Разобрал, кто управляет зонами, чем рискуют .su, .io и .com, сколько стоит продление и по какому чек-листу я проверяю имя перед покупкой.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-signpost',
    tags: ['домен', 'доменная зона', '.рф', 'сайт для бизнеса', 'регистратор'],
    toc: toc(
      ['kakoy-domen-vybrat', 'Какой домен выбрать для сайта: .ru, .рф или .su'],
      ['ru-ili-rf', 'Домен .рф или .ru: что лучше'],
      ['zona-su', 'Что с зоной .su'],
      ['inostrannye-zony', '.com, .io, .ai: чем рискуете'],
      ['regionalnye-zony', 'Региональные и тематические зоны'],
      ['skolko-stoit', 'Сколько стоит домен'],
      ['chek-list', 'Чек-лист: как выбрать имя'],
      ['kak-oformit', 'Как оформить, чтобы потом не пожалеть'],
      ['dvoynik-i-rezerv', 'Домен-двойник и резервный адрес'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: [
      'identifikaciya-vladeltsa-domena-cherez-gosuslugi-149-fz-kogo-kasaetsya-2026',
      'zashchita-brenda-2026',
      'kak-vernut-domen-u-razrabotchika-2026',
      'hosting-domen-prostymi-slovami-2026',
    ],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/web-development/', label: 'Сайт и домен под ключ' },
    servicesOffer: SVC_DOMEN,
    contentHtml: C('kakuyu-domennuyu-zonu-vybrat-dlya-biznesa-ru-rf-su-2026'),
  },
];
