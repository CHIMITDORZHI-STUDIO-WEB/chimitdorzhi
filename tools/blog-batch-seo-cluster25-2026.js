// SEO-кластер 25: клонирование голоса локально и движок маршрутов для встраивания в продукт.
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

  E({ slug: 'klonirovanie-golosa-na-svoem-servere-2026', category: 'opensource', heroIcon: 'ph-fill ph-waveform',
    title: 'Клонирование голоса на своём сервере: где проходит граница',
    metaTitle: 'Клонирование голоса локально: лицензии и границы',
    metaDescription: 'Клонирование голоса, дубляж и аудиокниги работают локально на обычной машине. Разбираю две лицензии, из-за которых результат нельзя продавать по умолчанию.',
    excerpt: 'Открытые сборки научились клонировать голос, дублировать видео и собирать аудиокниги целиком на вашей машине. Разбираю, что они умеют, почему лицензий здесь две и что сейчас в России с правом на чужой голос.',
    tags: ['синтез речи', 'open source', 'лицензии', 'локальный ИИ'],
    toc: [{ id: 'chto-umeet', text: 'Что умеют такие сборки' }, { id: 'dve-licenzii', text: 'Две лицензии вместо одной' }, { id: '646', text: 'Про 646 языков' }, { id: 'chuzhoy-golos', text: 'Чужой голос: что в России с этим сейчас' }, { id: 'komu', text: 'Кому это действительно нужно' }, ...FAQ_VYV],
    relatedSlugs: ['moss-tts-nano-sintez-rechi-2026', 'dipfeyki-moshennichestvo-zashchita-2026', 'whisperx-transkribaciya-rechi-2026', 'golosovoy-vvod-bez-utechki-2026'] }),

  E({ slug: 'graphhopper-marshruty-v-svoem-produkte-2026', category: 'opensource', heroIcon: 'ph-fill ph-signpost',
    title: 'GraphHopper: движок маршрутов, который можно встроить в свой продукт',
    metaTitle: 'GraphHopper: движок маршрутов для своего продукта',
    metaDescription: 'Движок маршрутов на OpenStreetMap с лицензией Apache 2.0: встраивается в продукт на продажу без раскрытия кода. Плюс расписания транспорта и высоты рельефа.',
    excerpt: 'Когда расчёт маршрута становится частью вашего продукта, а не внешним сервисом, выбор движка определяется лицензией, а не списком функций. Разбираю, чем Apache 2.0 отличается от GPL на практике и зачем движку данные о расписаниях транспорта.',
    tags: ['маршруты', 'OpenStreetMap', 'лицензии', 'логистика'],
    toc: [{ id: 'chto-eto', text: 'Что это такое' }, { id: 'licenziya', text: 'Лицензия, из-за которой его и выбирают' }, { id: 'transport', text: 'Общественный транспорт и рельеф' }, { id: 'komu', text: 'Кому это нужно' }, { id: 'ogranicheniya', text: 'Что учесть до внедрения' }, ...FAQ_VYV],
    relatedSlugs: ['openrouteservice-svoi-karty-marshruty-2026', 'vroom-optimizaciya-marshrutov-2026', 'ai-dlya-logistiki-2026', 'cifrovizaciya-kurerskih-sluzhb-pvz-2026'] }),

];
