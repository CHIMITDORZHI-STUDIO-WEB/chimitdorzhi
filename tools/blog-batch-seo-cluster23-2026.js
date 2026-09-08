// SEO-кластер 23: локальный ИИ в телефоне и журнал работы ИИ-агента.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-08';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const AI_AGENTS = { url: `${S}/services/ai-agents/`, label: 'Обсудить внедрение агента' };
const OSS = { url: `${S}/predlozheniya/open-source-pod-klyuch/`, label: 'Развернуть локальный ИИ' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'llm-9b-na-telefone-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-device-mobile', ctaInternal: OSS,
    title: '9 миллиардов параметров в кармане: что реально помещается в телефон',
    metaTitle: 'ИИ на телефоне: что реально влезает в смартфон',
    metaDescription: 'Вышла открытая модель на 9 млрд параметров с контекстом 256 тысяч токенов. Считаю, влезет ли она в телефон на самом деле и что в новостях о ней перепутали.',
    excerpt: 'Раз в пару месяцев появляется новость о том, что серьёзный ИИ теперь помещается в телефон. Разбираю свежий случай: что вышло на самом деле, сколько весит самая лёгкая сборка, какой телефон её потянет и какие три утверждения из пересказа не сходятся с документацией.',
    tags: ['локальный ИИ', 'мобильные устройства', 'open source', 'выбор модели'],
    toc: [{ id: 'chto-vyshlo', text: 'Что вышло на самом деле' }, { id: 'skolko-vesit', text: 'Сколько это весит и что значит для телефона' }, { id: 'chto-ne-tak', text: 'Что в новости не сходится' }, { id: 'kogda-nuzhno', text: 'Когда ИИ прямо в телефоне действительно нужен' }, { id: 'kak-proveryayu', text: 'Как я проверяю такие модели, прежде чем советовать' }, ...FAQ_VYV],
    relatedSlugs: ['ii-chitaet-ekran-telefona-vision-model-2026', 'lokalnyy-ii-na-slabom-noutbuke-2026', 'spark-x25-4b-agentnaya-model-lokalno-2026', 'skolko-ram-dlya-lokalnogo-ii-2026'] }),

  E({ slug: 'zhurnal-raboty-ii-agenta-2026', category: 'opensource', heroIcon: 'ph-fill ph-list-checks', ctaInternal: AI_AGENTS,
    title: 'Что именно сделал ваш ИИ-агент: журнал, который нельзя переписать',
    metaTitle: 'Журнал работы ИИ-агента: что он сделал и по чьему разрешению',
    metaDescription: 'История чата показывает, что написано. Журнал исполнения — что сделано: вызовы инструментов, решения о доступе, итог задачи. Разбор на примере Apache Maka.',
    excerpt: 'Когда ИИ-агент трогает деньги или данные клиентов, рано или поздно возникает вопрос: что он сделал и по чьему разрешению. Разбираю класс инструментов, где работа агента пишется в журнал, который только дополняется, а интерфейс лишь показывает его.',
    tags: ['ИИ-агенты', 'open source', 'безопасность', 'аудит'],
    toc: [{ id: 'zachem-zhurnal', text: 'Зачем агенту журнал' }, { id: 'chto-zapisyvaet', text: 'Что именно записывается' }, { id: 'odno-yadro', text: 'Одно ядро на три интерфейса' }, { id: 'chego-zhdat', text: 'Чего ждать от проекта в таком возрасте' }, { id: 'komu-nuzhno', text: 'Кому это нужно уже сейчас' }, ...FAQ_VYV],
    relatedSlugs: ['granica-avtonomnosti-ii-agenta-2026', 'agent-dlya-dlinnyh-zadach-2026', 'ii-agent-na-svoem-pk-2026', 'bezopasnyy-dostup-ii-agenta-k-baze-2026'] }),
];
