// Одиночная статья: сайт агентства недвижимости в Дубае для покупателей из России.
// Для агентств и брокеров в ОАЭ. Правила RERA по рекламе по руководству DLD (ноябрь 2024).
// Ведёт на разработку сайтов. Кодовое слово ДУБАЙ.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-10';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_DUBAI = {
  title: 'Сайт и CRM для агентства недвижимости',
  services: [
    { icon: 'ph-fill ph-buildings', label: 'Каталог off-plan и вторички с фильтрами' },
    { icon: 'ph-fill ph-calculator', label: 'Калькулятор платёжного плана' },
    { icon: 'ph-fill ph-funnel', label: 'CRM заявок с источником и кабинет партнёра' },
    { icon: 'ph-fill ph-translate', label: 'Русская и английская версии, SEO и GEO' },
  ],
  ctaLabel: 'Обсудить сайт агентства', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'sayt-agentstva-nedvizhimosti-v-dubae-dlya-pokupateley-iz-rossii-2026',
    category: 'industries',
    published: true,
    title: 'Сайт агентства недвижимости в Дубае для покупателей из России',
    metaTitle: 'Сайт агентства недвижимости в Дубае: что должно быть',
    metaDescription: 'Что нужно сайту агентства недвижимости в Дубае для покупателей из России: каталог off-plan, платёжный план, CRM, русский язык и правила RERA.',
    metaKeywords: 'сайт агентства недвижимости дубай, сайт для риелтора в оаэ, недвижимость дубай сайт на русском, разрешение trakheesi, crm для агентства недвижимости, off-plan каталог',
    excerpt: 'Покупатель из России выбирает квартиру в Дубае с телефона и не может приехать на показ. Разбираю, что должно быть на сайте агентства: каталог off-plan и вторички, калькулятор платёжного плана, уровни доступа, CRM с источником заявки, два языка и правила RERA о рекламе.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-buildings',
    tags: ['недвижимость', 'ОАЭ', 'сайт под ключ', 'CRM', 'мультиязычность'],
    toc: toc(
      ['chto-dolzhno-byt', 'Сайт агентства недвижимости в Дубае: что должно быть'],
      ['pravila-rera', 'Разрешение Trakheesi и QR-код: что требует RERA'],
      ['katalog', 'Каталог off-plan и вторички с фильтрами'],
      ['platezhnyy-plan', 'Калькулятор платёжного плана'],
      ['urovni-dostupa', 'Гость, клиент, партнёр: три уровня доступа'],
      ['crm', 'CRM заявок с источником'],
      ['yazyki-messendzhery', 'Русский, английский, мессенджеры и 3D-туры'],
      ['seo-geo', 'SEO и GEO под русскоязычные запросы'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['skolko-stoit', 'Сроки и цены'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['vitrina-nedvizhimosti-crm-keys-2026', 'sayt-dlya-biznesa-v-oae-yazyki-oplata-domen-zakon-2026', 'korporativnyy-sayt-kompanii-oae-keys-2026', 'agentstvo-nedvizhimosti-obekty-klienty-pokazy-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/web-development/', label: 'Обсудить сайт агентства' },
    servicesOffer: SVC_DUBAI,
    contentHtml: C('sayt-agentstva-nedvizhimosti-v-dubae-dlya-pokupateley-iz-rossii-2026'),
  },
];
