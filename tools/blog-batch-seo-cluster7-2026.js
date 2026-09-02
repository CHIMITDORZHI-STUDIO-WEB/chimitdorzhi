// SEO-кластер 7: open-source — PriceGhost (мониторинг цен на своём сервере).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-02';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const OPENSOURCE = { url: `${S}/predlozheniya/open-source-pod-klyuch/`, label: 'Развернуть под ключ' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 5, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'priceghost-monitoring-cen-2026', category: 'opensource', heroIcon: 'ph-fill ph-tag', ctaInternal: OPENSOURCE,
    title: 'PriceGhost: мониторинг цен на своём сервере — уведомления в Telegram о скидках и ценах конкурентов',
    metaTitle: 'PriceGhost: мониторинг цен на своём сервере, Telegram',
    metaDescription: 'PriceGhost — open-source мониторинг цен на своём сервере: уведомления в Telegram о снижении цены, целевой стоимости и наличии товара. Как развернуть и встроить.',
    excerpt: 'PriceGhost следит за ценами в интернет-магазинах с вашего сервера и присылает в Telegram сигнал о скидке, целевой цене или появлении товара. Разбираю, что он умеет, как развернуть и где его границы.',
    tags: ['PriceGhost', 'мониторинг цен', 'open-source', 'самохостинг', 'Telegram'],
    toc: [{ id: 'chto-umeet', text: 'Что умеет PriceGhost' }, { id: 'zachem-biznesu', text: 'Зачем это бизнесу' }, { id: 'kak-ustroeno', text: 'Как это устроено' }, { id: 'kak-razvernut', text: 'Как развернуть и встроить в процесс' }, { id: 'ogranicheniya', text: 'Ограничения и когда лучше своя разработка' }, ...FAQ_VYV],
    relatedSlugs: ['monitoring-cen-konkurentov-2026', 'zaschita-sayta-ot-parsinga', 'metabase-dashbordy-bi-2026', 'n8n-avtomatizaciya-bez-zapier-2026'] }),
];
