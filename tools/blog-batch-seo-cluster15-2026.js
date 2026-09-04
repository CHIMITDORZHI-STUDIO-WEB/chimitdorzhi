// SEO-кластер 15: лёгкий учёт имущества и гарантий (Homebox) — третий сценарий рядом с GLPI и InvenTree.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-04';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const OS_POD_KLYUCH = { url: `${S}/predlozheniya/open-source-pod-klyuch/`, label: 'Развернуть учёт под ключ' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 5, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'uchet-imushchestva-i-garantiy-homebox-2026', category: 'opensource', heroIcon: 'ph-fill ph-package', ctaInternal: OS_POD_KLYUCH,
    title: 'Учёт имущества и гарантий на своём сервере: Homebox для дома и небольшой компании',
    metaTitle: 'Homebox: учёт имущества и гарантий на своём сервере',
    metaDescription: 'Homebox — open-source учёт имущества на своём сервере: категории, локации, фото, гарантийные талоны, даты покупки и обслуживание. Методика внедрения.',
    excerpt: 'Homebox ведёт учёт вещей, гарантий и обслуживания на вашем сервере и весит меньше 50 МБ памяти в простое. Разбираю, кому он подходит вместо тяжёлых систем и как я такое внедряю.',
    tags: ['Homebox', 'open-source', 'учёт имущества', 'гарантии', 'self-hosted'],
    toc: [{ id: 'chto-eto', text: 'Что это и что умеет' }, { id: 'kakuyu-bol', text: 'Какую боль это закрывает' }, { id: 'dom-i-biznes', text: 'Дом, а что с бизнесом' }, { id: 'sravnenie', text: 'Три инструмента под три задачи' }, { id: 'metodika', text: 'Как я это внедряю' }, ...FAQ_VYV],
    relatedSlugs: ['glpi-itsm-uchet-aktivov-2026', 'inventree-skladskoy-uchet-2026', 'nfc-pasport-oborudovaniya-2026', 'uchet-oborudovaniya-ble-metki-2026'] }),
];
