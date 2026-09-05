// SEO-кластер 17: расшифровка термина «под ключ» — информационный запрос без единой закрывающей статьи на сайте.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-05';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const WEB_DEV = { url: `${S}/services/web-development/`, label: 'Заказать разработку под ключ' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 5, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'chto-znachit-pod-klyuch-2026', category: 'development', heroIcon: 'ph-fill ph-key', ctaInternal: WEB_DEV,
    title: 'Что значит «под ключ»: как это выглядит в договоре и где обычно спорят',
    metaTitle: 'Что значит «под ключ»: что входит и где спорят',
    metaDescription: 'Что значит «под ключ» простыми словами: что входит в такой проект, а что нет, где обычно возникают споры и как я фиксирую границы работ в договоре и ТЗ.',
    excerpt: 'Под ключ — не юридический термин, а описание объёма ответственности. Разбираю, что обычно входит в такой проект, а что нет, где спорят чаще всего и как я закрываю эти места в договоре.',
    tags: ['под ключ', 'договор', 'техническое задание', 'разработка', 'заказчику'],
    toc: [{ id: 'chto-znachit', text: 'Что значит «под ключ» простыми словами' }, { id: 'chto-vhodit', text: 'Что обычно входит и что не входит' }, { id: 'gde-sporyat', text: 'Где обычно спорят' }, { id: 'sravnenie', text: 'Под ключ, почасовая работа или отдельные этапы' }, { id: 'moya-metodika', text: 'Как я фиксирую «под ключ» в договоре' }, ...FAQ_VYV],
    relatedSlugs: ['tehpodderzhka-sayta-skolko-stoit-2026', 'skolko-stoit-sayt-chita-ulan-ude-2026', 'frilanser-vs-studiya-vs-agentstvo-2026', 'tilda-vs-kastomnaya-razrabotka-2026'] }),
];
