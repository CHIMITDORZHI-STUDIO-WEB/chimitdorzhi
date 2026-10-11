// Одиночная статья: сбор 3% с интернет-рекламы (ст. 18.2 закона «О рекламе»,
// постановление № 1224, справочник РКН). Кто платит, база, сроки, пример,
// вопросы блогеру, учёт актов. Ведёт на цифровой маркетинг, кодовое слово «ОБОРОТ».
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-12';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_SBOR = {
  title: 'Маркировка рекламы и сбор 3% без ошибок',
  services: [
    { icon: 'ph-fill ph-megaphone', label: 'Регистрация креативов и erid в ОРД' },
    { icon: 'ph-fill ph-file-text', label: 'Договоры и акты с выделенным размещением' },
    { icon: 'ph-fill ph-table', label: 'Реестр размещений и сверка с ЕРИР' },
    { icon: 'ph-fill ph-calculator', label: 'Проверка начислений сбора за квартал' },
  ],
  ctaLabel: 'Разобрать мою цепочку', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'sbor-3-procenta-s-internet-reklamy-2026',
    category: 'legal',
    published: true,
    title: 'Сбор 3 процента с рекламы в интернете: кто платит и как считать',
    metaTitle: 'Сбор 3 процента с рекламы: кто платит и как считать',
    metaDescription: 'Сбор 3 процента с рекламы в интернете: кто платит по ст. 18.2 закона о рекламе, от чего считать, сроки уплаты, пример расчёта и вопросы блогеру.',
    metaKeywords: 'сбор 3 процента с рекламы, оборотный сбор с интернет-рекламы кто платит, сбор 3% с рекламы, налог на рекламу в интернете, статья 18.2 закона о рекламе, обязательные отчисления реклама, сбор с рекламы у блогеров',
    excerpt: 'С доходов от интернет-рекламы с 1 апреля 2025 года платят 3% в бюджет. Разбираю по закону, постановлению № 1224 и справочнику Роскомнадзора, кто платит сбор: площадка, агент или рекламодатель. От чего считать, сроки, пример расчёта, что спросить у блогера до оплаты и как вести учёт актов.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-percent',
    tags: ['сбор 3%', 'интернет-реклама', 'маркировка рекламы', 'ЕРИР', 'закон о рекламе'],
    toc: toc(
      ['kto-platit', 'Сбор 3 процента с рекламы: кто платит'],
      ['ot-chego', 'От чего считают 3% и что в базу не входит'],
      ['markirovka', 'Как сбор связан с маркировкой, erid и ЕРИР'],
      ['sroki', 'Сроки, штрафы и что изменилось в 2026 году'],
      ['primer', 'Пример расчёта'],
      ['chto-sprosit', 'Что спросить у блогера или канала перед оплатой'],
      ['uchet-aktov', 'Как вести учёт актов'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['markirovka-reklamy-ord-2026', 'posevy-v-max-kanalah-2027', 'svodka-po-reklame-dashboard-2026', 'fas-dannye-o-tovare-kak-reklama-chto-predlagayut-i-chto-prinyato-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/digital-marketing/', label: 'Маркировка рекламы и цифровой маркетинг' },
    servicesOffer: SVC_SBOR,
    contentHtml: C('sbor-3-procenta-s-internet-reklamy-2026'),
  },
];
