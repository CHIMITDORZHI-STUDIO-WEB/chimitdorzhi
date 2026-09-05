// SEO-кластер 16: сравнение конструкторов ботов для MAX (запрос без подходящей посадочной).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-05';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const BOTY = { url: `${S}/services/telegram-bots/`, label: 'Собрать бота под задачу' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 5, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'konstruktory-botov-max-sravnenie-2026', category: 'development', heroIcon: 'ph-fill ph-robot', ctaInternal: BOTY,
    title: 'Конструкторы ботов для MAX: как сравнивать и что выбрать под задачу',
    metaTitle: 'Конструкторы ботов для MAX: как сравнивать и выбрать',
    metaDescription: 'Как сравнивать конструкторы ботов для MAX: семь критериев выбора, подводные камни конструкторов и честный ответ, когда хватит сценария, а когда нужен код.',
    excerpt: 'Сравнивать конструкторы ботов для MAX по числу шаблонов бессмысленно. Разбираю семь критериев, по которым я выбираю инструмент под задачу, и объясняю, где конструктор экономит деньги, а где становится дорогой ловушкой.',
    tags: ['MAX', 'конструкторы ботов', 'чат-боты', 'ноукод', 'выбор инструмента'],
    toc: [{ id: 'tri-sposoba', text: 'Три способа собрать бота в MAX' }, { id: 'kriterii', text: 'Критерии сравнения' }, { id: 'podvodnye-kamni', text: 'Подводные камни конструкторов' }, { id: 'tablica', text: 'Три подхода под три ситуации' }, { id: 'metodika', text: 'Как я выбираю: методика' }, ...FAQ_VYV],
    relatedSlugs: ['noukod-vs-kod-2026', 'chatbot-telegram-max-vk-2026', 'ai-bot-v-max-gigachat-yandexgpt-2026', 'white-label-konstruktor-botov-2026'] }),
];
