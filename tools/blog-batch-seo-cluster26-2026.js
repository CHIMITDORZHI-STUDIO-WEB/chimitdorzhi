// SEO-кластер 26: ситуационная панель из открытых источников.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-09';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const OSS = { url: `${S}/predlozheniya/open-source-pod-klyuch/`, label: 'Развернуть open-source под ключ' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ, ctaInternal: OSS }, o, { contentHtml: C(o.slug) });

module.exports = [

  E({ slug: 'situacionnyy-dashbord-iz-otkrytyh-istochnikov-2026', category: 'opensource', heroIcon: 'ph-fill ph-globe-hemisphere-west',
    title: 'Ситуационный дашборд из открытых источников: чем это полезно бизнесу',
    metaTitle: 'Ситуационный дашборд из открытых источников',
    metaDescription: 'Открытые панели сводят авиатрафик, суда, дорожные камеры, пожары и погоду в одну карту. Разбираю, что там за камеры и как применить приём в своём бизнесе.',
    excerpt: 'Появился класс открытых панелей, собирающих публичные потоки данных в одну живую карту. Разбираю, что за ними стоит на самом деле, почему заявленные тысячи камер — это дорожные камеры транспортных ведомств и как применить сам приём под свои задачи.',
    tags: ['открытые данные', 'мониторинг', 'дашборды', 'open source'],
    toc: [
      { id: 'chto-eto', text: 'Что собирают такие панели' },
      { id: 'kamery', text: 'Про 17 тысяч камер' },
      { id: 'rossiya', text: 'Российских источников там нет' },
      { id: 'komu', text: 'Кому такое окно реально нужно' },
      { id: 'kak-sobrat', text: 'Как такое собирается' },
      { id: 'chestno', text: 'Что стоит знать про сам проект' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['osint-dlya-biznesa-proverka-kontragenta-2026', 'monitoring-cen-konkurentov-2026', 'grafana-dashbordy-metriki-2026', 'sputnikovyy-monitoring-selskogo-hozyaystva-2027'] }),

];
