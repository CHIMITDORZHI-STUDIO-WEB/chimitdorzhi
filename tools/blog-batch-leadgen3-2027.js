// Батч lead-gen 3: 2 B2B-статьи под заявки — каталог для производителя, автоматизация сети точек.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-05';

const SVC = {
  title: 'Что я делаю под ключ',
  services: [
    { icon: 'ph-fill ph-robot', label: 'ИИ-агенты и боты в Telegram/MAX' },
    { icon: 'ph-fill ph-code', label: 'Сайты и веб-приложения' },
    { icon: 'ph-fill ph-flow-arrow', label: 'Автоматизация и интеграции с CRM' },
    { icon: 'ph-fill ph-chart-line-up', label: 'Аналитика и дашборды' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Внедрение и поддержка' },
  ],
  ctaLabel: 'Обсудить проект',
  ctaUrl: 'https://t.me/chimitdorzhi',
};

const CTA_WEB = { url: 'https://chimitdorzhi.tech/services/web-development/', label: 'Обсудить проект' };
const CTA_GEN = { url: 'https://chimitdorzhi.tech/predlozheniya/', label: 'Обсудить задачу' };

const toc = (pairs) => pairs.map(([id, text]) => ({ id, text }));

const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D, readingMinutes: 6,
  servicesOffer: SVC,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'sayt-katalog-proizvoditelya-oborudovaniya-2027', heroIcon: 'ph-fill ph-factory', category: 'development', ctaInternal: CTA_WEB,
    toc: toc([['chto-eto', 'Что это и какую задачу решает'], ['kak-rabotaet', 'Как это работает'], ['chto-daet', 'Что это даёт бизнесу'], ['skolko-stoit', 'Сколько стоит и сроки'], ['faq', 'FAQ'], ['vyvody', 'Коротко о главном']]),
    title: 'Сайт-каталог для производителя оборудования: B2B-продажи вместо PDF-прайса',
    metaTitle: 'Сайт-каталог для производителя оборудования (B2B)',
    metaDescription: 'Как сделать сайт-каталог для производителя оборудования: карточки с техническими характеристиками, фильтр по параметрам, заявки на КП и интеграция с 1С вместо устаревшего PDF-прайса. Разбираю, как это работает, что даёт и сколько стоит.',
    excerpt: 'Покупатель оборудования ищет по параметрам и мощности, а находит только PDF-прайс без поиска. Нормальный B2B-каталог с фильтрами и заявками на КП решает эту проблему. Разбираю, как это устроено.',
    tags: ['разработка', 'B2B', 'каталог', 'производство'],
    relatedSlugs: ['avtomatizaciya-seti-magazinov-2027', 'pochemu-sayt-ne-prinosit-zayavok-audit-2027', 'kak-sostavit-tz-na-sayt-bot-2027'] }),

  E({ slug: 'avtomatizaciya-seti-magazinov-2027', heroIcon: 'ph-fill ph-buildings', category: 'development', ctaInternal: CTA_GEN,
    toc: toc([['chto-eto', 'Что это и какую задачу решает'], ['kak-rabotaet', 'Как это работает'], ['chto-daet', 'Что это даёт бизнесу'], ['skolko-stoit', 'Сколько стоит и сроки'], ['faq', 'FAQ'], ['vyvody', 'Коротко о главном']]),
    title: 'Автоматизация для сети из нескольких магазинов: единая база вместо разрозненных таблиц',
    metaTitle: 'Автоматизация сети магазинов: единая база вместо таблиц',
    metaDescription: 'Как автоматизировать сеть из нескольких точек: единая база остатков, клиентов и выручки вместо разрозненных Excel-таблиц по каждому магазину, салону или кафе. Разбираю, как это работает, что даёт владельцу и сколько стоит внедрение.',
    excerpt: 'В каждой точке сети своя таблица учёта, а свести цифры по всей сети — отдельная головная боль руководителя. Единая база решает это за счёт общего учёта и сводных показателей. Разбираю, как это устроено.',
    tags: ['автоматизация', 'сеть магазинов', 'CRM', 'бизнес-процессы'],
    relatedSlugs: ['sayt-katalog-proizvoditelya-oborudovaniya-2027', 'vnedrenie-crm-zabaykalye-2027', 'edinoe-okno-zayavok-omnikanalnost-2027'] }),
];
