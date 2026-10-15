// Одиночная статья (серия new27, коммерческий интент): сайт агентства недвижимости
// с каталогом и умным фильтром, цена и сроки. Опора на кейс четырёх демо-сайтов
// (121 страница подборок, noindex ниже двух объектов). Цены из tools/prices-data.js.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-15';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_KATALOG = {
  title: 'Сайт агентства недвижимости под ключ',
  services: [
    { icon: 'ph-fill ph-funnel', label: 'Каталог с умным фильтром и подборками' },
    { icon: 'ph-fill ph-buildings', label: 'Страницы районов, проектов и застройщиков' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Заявки в CRM с источником' },
    { icon: 'ph-fill ph-translate', label: 'Языковые версии и разметка Schema.org' },
  ],
  ctaLabel: 'Обсудить каталог', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'sayt-agentstva-nedvizhimosti-s-katalogom-i-filtrom-cena-2026',
    category: 'development',
    published: true,
    title: 'Сайт для агентства недвижимости: цена, каталог и умный фильтр',
    metaTitle: 'Сайт для агентства недвижимости: цена и сроки каталога',
    metaDescription: 'Сайт для агентства недвижимости с каталогом и умным фильтром: цена от 100 000 ₽, срок от 3 недель. Подборки с ЧПУ, noindex для пустых, заявки в CRM.',
    metaKeywords: 'сайт для агентства недвижимости цена, каталог недвижимости с фильтром заказать, сайт агентства недвижимости под ключ, умный фильтр ЧПУ, сайт застройщика с каталогом, сколько стоит сайт агентства недвижимости',
    excerpt: 'Сколько стоит и сколько делается сайт агентства недвижимости с каталогом: карточки, районы, проекты, умный фильтр с готовыми страницами подборок, заявки в CRM и языковые версии. Разбираю на своём кейсе со 121 страницей подборок и по справкам Яндекса и Google, как не наплодить дублей.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-funnel',
    tags: ['сайт агентства недвижимости', 'каталог', 'умный фильтр', 'SEO', 'веб-разработка'],
    toc: toc(
      ['sayt-dlya-agentstva-nedvizhimosti-cena', 'Сайт для агентства недвижимости: цена и кому он нужен'],
      ['chto-vnutri', 'Что входит в сайт с каталогом'],
      ['umnyy-filtr', 'Умный фильтр и страницы подборок с ЧПУ'],
      ['dubli', 'Где риск дублей и что советуют Яндекс и Google'],
      ['razmetka-yazyki', 'Разметка Schema.org и несколько языков'],
      ['iz-chego-cena', 'Из чего складывается цена'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['chto-nuzhno', 'Что нужно от вас'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['chetyre-demo-sayta-agentstva-nedvizhimosti-dubay-keys-2026', 'sayt-agentstva-nedvizhimosti-v-dubae-dlya-pokupateley-iz-rossii-2026', 'vitrina-nedvizhimosti-crm-keys-2026', 'agentstvo-nedvizhimosti-obekty-klienty-pokazy-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/development/sites/', label: 'Заказать сайт с каталогом' },
    servicesOffer: SVC_KATALOG,
    contentHtml: C('sayt-agentstva-nedvizhimosti-s-katalogom-i-filtrom-cena-2026'),
  },
];
