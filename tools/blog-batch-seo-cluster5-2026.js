// SEO-кластер 5: подбор запчастей по VIN в CRM, АгроСигнал vs ExactFarming.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-02';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const AVTOSERVIS = { url: `${S}/predlozheniya/avtoservis/`, label: 'Автоматизировать автосервис' };
const AGRO = { url: `${S}/predlozheniya/agro-tochnoe-zemledelie/`, label: 'Подобрать и внедрить агросистему' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 5, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'podbor-zapchastey-po-vin-v-crm-2026', category: 'industries', heroIcon: 'ph-fill ph-car', ctaInternal: AVTOSERVIS,
    title: 'Подбор запчастей по VIN в CRM автосервиса: как автоматизировать',
    metaTitle: 'Подбор запчастей по VIN в CRM автосервиса',
    metaDescription: 'Автоматизация подбора запчастей по VIN в CRM автосервиса: откуда берут данные, как встроить в карточку клиента и бота, связка с 1С и поставщиками, цены.',
    excerpt: 'Ручной подбор запчастей по VIN съедает час на заявку и плодит ошибки. Разбираю, как встроить VIN-декодирование в CRM и бота автосервиса, связать с 1С и поставщиками и сколько это стоит.',
    tags: ['автосервис', 'VIN', 'запчасти', 'CRM', 'интеграция'],
    toc: [{ id: 'problema', text: 'Почему ручной подбор — дыра' }, { id: 'vin-dekodirovanie', text: 'Что такое VIN-декодирование' }, { id: 'crm-i-bot', text: 'Как встроить в CRM и бота' }, { id: '1c-postavshchiki', text: 'Связка с 1С, МойСклад и поставщиками' }, { id: 'etapy-stoimost', text: 'Этапы внедрения и стоимость' }, ...FAQ_VYV],
    relatedSlugs: ['crm-bot-dlya-avtoservisa-2026', 'bot-napominalka-osago-to-2026', 'avtozapchasti-avtomatizaciya-2027', 'iz-excel-v-crm-za-mesyac-2027'] }),

  E({ slug: 'agrosignal-ili-exactfarming-chto-vybrat-2026', category: 'industries', heroIcon: 'ph-fill ph-plant', ctaInternal: AGRO,
    title: 'АгроСигнал или ExactFarming: что выбрать фермеру и агрохолдингу',
    metaTitle: 'АгроСигнал или ExactFarming: что выбрать',
    metaDescription: 'АгроСигнал или ExactFarming: сравниваю системы управления агропредприятием по критериям — для кого, данные, интеграции с 1С, стоимость владения, пилот на сезон.',
    excerpt: 'АгроСигнал и ExactFarming — две российские платформы управления агропредприятием. Разбираю, как выбирать между ними по критериям, а не по рекламе: размер хозяйства, данные, 1С, техника, цена владения и пилот на один сезон.',
    tags: ['агро', 'ExactFarming', 'АгроСигнал', 'точное земледелие', 'выбор системы'],
    toc: [{ id: 'chto-eto', text: 'Что такое система управления агропредприятием' }, { id: 'dlya-kogo', text: 'Для кого: малое хозяйство или холдинг' }, { id: 'kriterii', text: 'Критерии сравнения' }, { id: 'chek-list', text: 'Чек-лист выбора' }, { id: 'pilot', text: 'Пилот на один сезон' }, ...FAQ_VYV],
    relatedSlugs: ['cifrovizaciya-agrosektora-2026', 'crm-dlya-agrobiznesa-2026', 'it-dlya-fermerov-zabaykalya-buryatii-2026', 'peredacha-dannyh-bez-svyazi-v-pole-2026'] }),
];
