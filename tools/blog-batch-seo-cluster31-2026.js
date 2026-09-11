// SEO-кластер 31: как читать релизы моделей — на примере GigaChat 3.5 Reasoning.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-11';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const AGENTS = { url: `${S}/services/ai-agents/`, label: 'Подобрать модель под задачу' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ, ctaInternal: AGENTS }, o, { contentHtml: C(o.slug) });

module.exports = [

  E({ slug: 'gigachat-3-5-reasoning-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-brain',
    title: 'GigaChat 3.5 Reasoning: три цифры из пресс-релиза и столбец, которого в нём нет',
    metaTitle: 'GigaChat 3.5 Reasoning: что показывает карточка модели',
    metaDescription: 'Сбер выложил GigaChat 3.5 Reasoning под MIT. Цифры из новости настоящие, но в карточке модели восемнадцать тестов и столбец сравнения с DeepSeek.',
    excerpt: 'В новости три бенчмарка и рост показателей. В карточке модели — восемнадцать строк и третий столбец с конкурентом, где GigaChat уступает по среднему. Зато на русском языке выигрывает в полтора-два раза. Разбираю, что из этого следует для выбора модели.',
    tags: ['GigaChat', 'открытые модели', 'бенчмарки', 'выбор модели'],
    toc: [
      { id: 'chto-vylozhili', text: 'Что именно выложили' },
      { id: 'tretiy-stolbec', text: 'Столбец, которого нет в пересказе' },
      { id: 'russkiy', text: 'Где модель действительно первая' },
      { id: 'rassuzhdenie-ne-apgreyd', text: 'Рассуждение — не бесплатный апгрейд' },
      { id: 'kak-chitat', text: 'Как читать такие новости за пять минут' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['reasoning-modeli-dlya-biznesa-2026', 'otkrytaya-model-cena-rassuzhdeniy-2026', 'gigachat-vs-yandexgpt-vs-chatgpt-2026', 'licenzii-otkrytyh-modeley-2026'] }),

];
