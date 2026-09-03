// SEO-кластер 10: open-source на своём сервере — поисковый движок Manticore и HR-система Frappe HRMS.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-03';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const OS_POISK = { url: `${S}/predlozheniya/open-source-pod-klyuch/`, label: 'Развернуть поиск под ключ' };
const OS_HR = { url: `${S}/predlozheniya/open-source-pod-klyuch/`, label: 'Развернуть HR-систему под ключ' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 5, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'manticore-search-poisk-na-svoem-servere-2026', category: 'opensource', heroIcon: 'ph-fill ph-magnifying-glass', ctaInternal: OS_POISK,
    title: 'Manticore Search: полнотекстовый и векторный поиск в одном движке на своём сервере',
    metaTitle: 'Manticore Search: полнотекстовый и векторный поиск',
    metaDescription: 'Manticore Search — открытая поисковая база: полнотекстовый, векторный и гибридный поиск одним SQL-запросом. Когда один движок лучше двух и как я его внедряю.',
    excerpt: 'Manticore Search закрывает текстовый и смысловой поиск одним движком и языком SQL. Разбираю, когда это выгоднее двух отдельных баз, а когда лучше остаться на лёгком поисковике.',
    tags: ['Manticore Search', 'поиск по сайту', 'open source', 'векторный поиск', 'RAG'],
    toc: [{ id: 'chto-eto', text: 'Что это и чем отличается от привычного поиска' }, { id: 'zachem-biznesu', text: 'Зачем это бизнесу на понятных примерах' }, { id: 'odin-ili-dva', text: 'Когда один движок лучше двух, а когда нет' }, { id: 'metodika', text: 'Как я внедряю поиск: моя методика' }, { id: 'kak-razvernut', text: 'Как развернуть и что учесть' }, ...FAQ_VYV],
    relatedSlugs: ['meilisearch-poisk-dlya-sayta-2026', 'qdrant-semanticheskiy-poisk-2026', 'umnyy-ii-poisk-po-saytu-2026', 'rag-sistemy-dlya-biznesa-2026'] }),

  E({ slug: 'hr-sistema-na-svoem-servere-frappe-hrms-2026', category: 'opensource', heroIcon: 'ph-fill ph-users-three', ctaInternal: OS_HR,
    title: 'HR-система на своём сервере: кадры, отпуска и зарплата без облачной подписки',
    metaTitle: 'HR-система на своём сервере: Frappe HRMS для кадров',
    metaDescription: 'Frappe HRMS — открытая HR-система для своего сервера: отпуска, табель, зарплата. Разбираю, кому подходит, что даёт по 152-ФЗ и как я внедряю её поэтапно.',
    excerpt: 'Frappe HRMS — открытая HR-система из 13+ модулей, которую ставят на свой сервер. Разбираю, с какого размера компании она окупается и что установка у себя реально даёт по 152-ФЗ, а что нет.',
    tags: ['HR-система', 'open source', '152-ФЗ', 'кадровый учёт', 'автоматизация'],
    toc: [{ id: 'chto-eto', text: 'Что это такое и что входит' }, { id: 'komu-podhodit', text: 'Кому подходит и когда начинает окупаться' }, { id: 'svoe-ili-oblako', text: 'Своё против облачного HR-сервиса' }, { id: '152-fz', text: '152-ФЗ и кадровые данные: где проходит граница' }, { id: 'metodika', text: 'Как я внедряю такие системы: методика' }, ...FAQ_VYV],
    relatedSlugs: ['ai-v-hr-naym-2026', 'lokalizaciya-pd-2026', 'audit-152-fz-2026', 'soglasie-na-obrabotku-pd-2026'] }),
];
