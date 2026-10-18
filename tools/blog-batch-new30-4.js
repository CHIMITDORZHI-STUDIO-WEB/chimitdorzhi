// Одиночная статья (new30-4): скорость сайта для владельца бизнеса, как читать PageSpeed и что чинить первым.
// Запросы: «как ускорить сайт», «pagespeed insights как читать», «медленно грузится сайт что делать».
// Опора: web.dev (Core Web Vitals, LCP, INP, CLS), PageSpeed Insights about, Lighthouse scoring, справка Яндекс Вебмастера.
// Ведёт на технический аудит (/services/it-audit/).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-18';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_SKOROST = {
  title: 'Ускорение сайта по замерам',
  services: [
    { icon: 'ph-fill ph-gauge', label: 'Замер PageSpeed и Core Web Vitals на мобильном до и после' },
    { icon: 'ph-fill ph-image', label: 'Картинки первого экрана: размер, WebP и AVIF, ленивая загрузка' },
    { icon: 'ph-fill ph-code', label: 'Чистка скриптов, виджетов и шрифтов' },
    { icon: 'ph-fill ph-hard-drives', label: 'Ответ сервера, кэш, CDN и переезд хостинга' },
  ],
  ctaLabel: 'Ускорить сайт', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'skorost-sayta-pagespeed-chto-chinit-2026',
    category: 'development',
    published: true,
    title: 'Скорость сайта: как читать PageSpeed и что чинить в первую очередь',
    metaTitle: 'PageSpeed (ПейджСпид): как читать и ускорить сайт',
    metaDescription: 'Как читать PageSpeed Insights: LCP, INP и CLS, баллы Lighthouse, ошибка Яндекса «Долгий ответ сервера». Что чинить первым, если сайт медленно грузится.',
    metaKeywords: 'как ускорить сайт, pagespeed insights как читать, медленно грузится сайт что делать, пейджспид, core web vitals, lcp inp cls, скорость загрузки сайта, долгий ответ сервера яндекс вебмастер, оптимизация скорости сайта',
    excerpt: 'Что показывает PageSpeed Insights: данные реальных посетителей и тест Lighthouse, пороги LCP, INP и CLS, что значат баллы от 0 до 100, как скорость видит Яндекс Вебмастер, какие причины тормозят сайт и что чинить первым. Плюс моя методика ускорения и цены.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 7,
    heroIcon: 'ph-fill ph-gauge',
    tags: ['скорость сайта', 'PageSpeed', 'Core Web Vitals', 'технический аудит', '2026'],
    toc: toc(
      ['chto-pokazyvaet', 'Что показывает PageSpeed Insights'],
      ['core-web-vitals', 'Core Web Vitals: LCP, INP и CLS простыми словами'],
      ['bally', 'Что значат баллы от 0 до 100'],
      ['yandeks', 'Как на скорость смотрит Яндекс'],
      ['prichiny', 'Почему сайт грузится медленно: что чинить первым'],
      ['chego-ne-delat', 'Чего не делать'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит ускорение сайта'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['yandeks-vebmaster-dlya-vladelca-biznesa-2026', 'tehnicheskiy-audit-sayta-404-2026', 'vps-vs-hosting-2026', 'uyti-s-tildy-wix-na-svoy-sayt-2027'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/it-audit/', label: 'Технический аудит сайта' },
    servicesOffer: SVC_SKOROST,
    contentHtml: C('skorost-sayta-pagespeed-chto-chinit-2026'),
  },
];
