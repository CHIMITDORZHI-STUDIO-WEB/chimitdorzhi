// SEO-кластер 18: портативный локальный ИИ — работа на чужой машине, на объекте и в изолированном контуре.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-07';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const OPENSOURCE = { url: `${S}/predlozheniya/open-source-pod-klyuch/`, label: 'Развернуть локальный ИИ' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'portativnyy-ii-na-fleshke-2026', category: 'opensource', heroIcon: 'ph-fill ph-hard-drives', ctaInternal: OPENSOURCE,
    title: 'ИИ на флешке: локальные модели без установки на чужом компьютере',
    metaTitle: 'ИИ на флешке: локальные модели без установки',
    metaDescription: 'Портативный локальный ИИ: студия из четырёх инструментов живёт в папке и не ставится в систему. Что нужно для запуска, где это работает и где нет.',
    excerpt: 'Портативная ИИ-студия живёт в одной папке и запускается на чужом компьютере без установки в систему. Разбираю, что честно нужно для запуска, где такой формат выручает и где он не работает.',
    tags: ['локальный ИИ', 'open source', 'портативность', 'офлайн', 'безопасность данных'],
    toc: [{ id: 'chto-eto', text: 'Что это и почему «на флешке» — не игрушка' }, { id: 'chto-nuzhno', text: 'Что честно нужно для запуска' }, { id: 'sposoby', text: 'Три способа взять ИИ с собой' }, { id: 'metodika', text: 'Как я это применяю' }, ...FAQ_VYV],
    relatedSlugs: ['lokalnyy-ii-na-slabom-noutbuke-2026', 'zapret-usb-na-predpriyatii-2026', 'peredacha-dannyh-bez-svyazi-v-pole-2026', 'kakoy-lokalnyy-llm-vybrat-2026'] }),
];
