// Одиночная статья (new29-5): Яндекс Вебмастер для владельца бизнеса.
// Интент: «яндекс вебмастер как пользоваться», «яндекс вебмастер для чайников», «почему сайт не в поиске яндекса».
// Ведёт на технический аудит, SEO и сквозную аналитику. Кодовое слово «ВЕБМАСТЕР».
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-17';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_VEBMASTER = {
  title: 'Разбор сайта в Яндекс Вебмастере',
  services: [
    { icon: 'ph-fill ph-magnifying-glass', label: 'Технический аудит: индексация, 404, robots.txt, sitemap' },
    { icon: 'ph-fill ph-chart-line-up', label: 'SEO: работа с запросами на позициях 3-10' },
    { icon: 'ph-fill ph-gauge', label: 'Скорость и мобильная версия' },
    { icon: 'ph-fill ph-list-checks', label: 'Связка Вебмастера и Метрики: какие запросы дают заявки' },
  ],
  ctaLabel: 'Разобрать мой Вебмастер', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'yandeks-vebmaster-dlya-vladelca-biznesa-2026',
    category: 'marketing',
    published: true,
    title: 'Яндекс Вебмастер для владельца бизнеса: что смотреть раз в неделю',
    metaTitle: 'Яндекс Вебмастер (Yandex Webmaster): как пользоваться',
    metaDescription: 'Яндекс Вебмастер (Yandex Webmaster) для владельца бизнеса: права и доступ подрядчику, 5 отчётов раз в неделю, переобход, связка с Метрикой.',
    metaKeywords: 'яндекс вебмастер как пользоваться, яндекс вебмастер для чайников, почему сайт не в поиске яндекса, yandex webmaster, переобход страниц, страницы в поиске, диагностика сайта, связать вебмастер и метрику',
    excerpt: 'Какие отчёты Яндекс Вебмастера смотреть владельцу сайта раз в неделю, как дать доступ подрядчику без пароля, что значат типичные предупреждения, как отправить страницы на переобход и связать Вебмастер с Метрикой, чтобы видеть, какие запросы дают заявки.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-magnifying-glass',
    tags: ['Яндекс Вебмастер', 'SEO', 'индексация', 'Яндекс Метрика', 'заявки с сайта', '2026'],
    toc: toc(
      ['prava', 'Как подтвердить права и дать доступ подрядчику'],
      ['otchety', 'Какие отчёты смотреть раз в неделю'],
      ['preduprezhdeniya', 'Типичные предупреждения и что с ними делать'],
      ['pereobhod', 'Как отправить страницы на переобход'],
      ['metrika', 'Как связать Вебмастер с Метрикой и понять, какие запросы дают заявки'],
      ['oshibki', 'Ошибки, на которых владелец теряет трафик'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит, если некогда разбираться самому'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['pochemu-sayt-ne-prinosit-zayavok-audit-2027', 'tehnicheskiy-audit-sayta-404-2026', 'yandeks-metrika-dlya-vladeltsa-pyat-celey-2026', 'pozicii-sayta-v-poiske-raz-v-nedelyu-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/it-audit/', label: 'IT-аудит и технический аудит сайта' },
    servicesOffer: SVC_VEBMASTER,
    contentHtml: C('yandeks-vebmaster-dlya-vladelca-biznesa-2026'),
  },
];
