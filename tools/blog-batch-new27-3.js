// Одиночная статья: своя доска объявлений для ниши или города, сколько стоит (2026).
// Уровни (бот, мини-приложение, сайт, маркетплейс), состав, первые объявления, 289-ФЗ, 152-ФЗ,
// рекомендации (149-ФЗ ст. 10.2-2), запрещённое (ст. 15.1). Опора на кейсы: Дубай, X&X Market, витрина авто.
// Ведёт на предложение «Доска объявлений», кодовое слово «ОБЪЯВЛЕНИЕ».
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-15';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_DOSKA = {
  title: 'Доска объявлений под нишу или город',
  services: [
    { icon: 'ph-fill ph-robot', label: 'Бот в Telegram и MAX для подачи и уведомлений' },
    { icon: 'ph-fill ph-funnel', label: 'Категории, фильтры и страницы подборок' },
    { icon: 'ph-fill ph-shield-check', label: 'Модерация, жалобы и согласия по 152-ФЗ' },
    { icon: 'ph-fill ph-credit-card', label: 'Платные поднятия и приём оплаты' },
  ],
  ctaLabel: 'Разобрать мою нишу', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'svoya-doska-obyavleniy-dlya-nishi-ili-goroda-cena-2026',
    category: 'development',
    published: true,
    title: 'Создать доску объявлений под нишу или город: сколько стоит в 2026',
    metaTitle: 'Создать доску объявлений: стоимость сайта как Авито под нишу',
    metaDescription: 'Создать доску объявлений под нишу или город: цена от бота до сайта как Авито, что входит, где взять первые объявления и что требует закон в 2026.',
    metaKeywords: 'создать доску объявлений, сайт объявлений как авито стоимость, доска объявлений под ключ, своя доска объявлений для города, разработка доски объявлений, нишевая доска объявлений, классифайд под нишу, бот для подачи объявлений',
    excerpt: 'Сколько стоит своя доска объявлений для ниши или города: бот с модерацией, мини-приложение в Telegram или MAX, сайт с кабинетами и платными поднятиями или маркетплейс со сделкой внутри. Что входит, где взять первые объявления, когда доска попадает под 289-ФЗ и что нужно по 152-ФЗ.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-storefront',
    tags: ['доска объявлений', 'маркетплейс', 'Telegram-бот', 'MAX', '289-ФЗ'],
    toc: toc(
      ['skolko-stoit', 'Сколько стоит создать доску объявлений: четыре уровня'],
      ['chto-vhodit', 'Что входит в сайт объявлений как Авито, только под нишу'],
      ['pervye-obyavleniya', 'Доска без объявлений мертва: где взять первые'],
      ['keysy', 'Что я уже делал: три опоры'],
      ['zakon', 'Закон: когда доска становится платформой'],
      ['cena', 'Из чего складывается цена'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ot-vas', 'Что нужно от вас'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['xx-market-obyavleniya-keys-2026', 'chetyre-demo-sayta-agentstva-nedvizhimosti-dubay-keys-2026', 'razrabotka-marketpleysa-pod-klyuch-2026', 'svoe-prilozhenie-agregator-operator-platformy-289-fz-reestr-pcp-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/doska-obyavleniy/', label: 'Доска объявлений под ключ' },
    servicesOffer: SVC_DOSKA,
    contentHtml: C('svoya-doska-obyavleniy-dlya-nishi-ili-goroda-cena-2026'),
  },
];
