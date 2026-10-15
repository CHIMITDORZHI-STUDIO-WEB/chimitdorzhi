// Одиночная статья: чек-лист запуска сайта, что проверить перед открытием.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-15';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_RELIZ = {
  title: 'Запуск сайта без сюрпризов',
  services: [
    { icon: 'ph-fill ph-list-checks', label: 'Проверка сайта перед открытием по 40 пунктам' },
    { icon: 'ph-fill ph-chart-line-up', label: 'Метрика, цели и Вебмастер на аккаунте владельца' },
    { icon: 'ph-fill ph-shield-check', label: 'HTTPS, копии, мониторинг и доступы на вас' },
    { icon: 'ph-fill ph-code', label: 'Сайт под ключ со сдачей по чек-листу' },
  ],
  ctaLabel: 'Проверить сайт перед запуском', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'chek-list-zapuska-sayta-pered-otkrytiem-2026',
    category: 'development',
    published: true,
    title: 'Чек-лист запуска сайта: что проверить перед открытием',
    metaTitle: 'Чек-лист запуска сайта: 40 пунктов перед открытием',
    metaDescription: 'Чек-лист запуска сайта из 40 пунктов: заявки, Метрика, SEO, 152-ФЗ, скорость, HTTPS, копии и доступы. Что проверить перед запуском сайта и как.',
    metaKeywords: 'чек лист запуска сайта, что проверить перед запуском сайта, запуск сайта чек-лист, приёмка сайта у подрядчика, проверка сайта перед открытием, robots.txt sitemap перед запуском, core web vitals',
    excerpt: 'Сайт выглядит готовым, а заявки уходят на почту разработчика, robots.txt закрывает его от поиска, а домен записан не на вас. Даю свой чек-лист из 40 пунктов: заявки, аналитика, SEO, закон, скорость, безопасность, копии и контент.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-rocket-launch',
    tags: ['запуск сайта', 'чек-лист', 'SEO', '152-ФЗ', 'разработка сайтов'],
    toc: toc(
      ['chek-list-zapuska', 'Чек-лист запуска сайта: как им пользоваться'],
      ['zayavki', 'Заявки и формы'],
      ['analitika', 'Аналитика'],
      ['seo', 'SEO-база перед открытием'],
      ['zakon', 'Закон и документы'],
      ['skorost', 'Скорость и мобильная версия'],
      ['bezopasnost', 'Безопасность и доступы'],
      ['kopii', 'Резервные копии и мониторинг'],
      ['dostupnost-kontent', 'Доступность и контент'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['priemka-raboty-podryadchika-2026', 'testirovanie-bota-i-sayta-pered-zapuskom-2026', 'pereezd-sayta-bez-poteri-poziciy-2026', 'obyazatelnye-stranicy-na-sayte-kompanii-chek-list-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/web-development/', label: 'Разработка сайтов под ключ' },
    servicesOffer: SVC_RELIZ,
    contentHtml: C('chek-list-zapuska-sayta-pered-otkrytiem-2026'),
  },
];
