// Одиночная статья (new31-4): госпаблики учреждения во ВКонтакте, Одноклассниках и MAX.
// Запросы: «госпаблик учреждения требования», «официальная страница учреждения в соцсетях 270-ФЗ», «госпаблик в MAX».
// Опора: 8-ФЗ в ред. 270-ФЗ (ст. 1, 10, 13, 24), распоряжение № 2523-р, постановление № 2560 от 31.12.2022, распоряжение № 1880-р (MAX).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-19';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_GOSPABLIK = {
  title: 'Госпаблик учреждения без двойной работы',
  services: [
    { icon: 'ph-fill ph-broadcast', label: 'Автопостинг новостей с сайта во ВКонтакте, Одноклассники и MAX' },
    { icon: 'ph-fill ph-list-checks', label: 'Проверка страниц и сайта по 8-ФЗ: контакты, ссылки, формы Госуслуг' },
    { icon: 'ph-fill ph-chat-circle-dots', label: 'Бот в MAX с ответами на частые вопросы и ссылкой на обращение' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Поддержка: доступы, сбои публикаций, изменения площадок' },
  ],
  ctaLabel: 'Обсудить автопостинг в госпаблики', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'gospabliki-uchrezhdeniya-vk-ok-max-2026',
    category: 'legal',
    published: true,
    title: 'Госпаблик учреждения в ВК, ОК и MAX: что обязательно и как вести',
    metaTitle: 'Госпаблик учреждения: требования 8-ФЗ, ВК, ОК и MAX',
    metaDescription: 'Кто обязан вести официальную страницу по 270-ФЗ, что на ней размещать, нужен ли госпаблик в MAX, как связать его с Госуслугами и вести без отдельного SMM.',
    metaKeywords: 'госпаблик учреждения требования, официальная страница учреждения в соцсетях 270-фз, госпаблик в max, официальная страница подведомственной организации, распоряжение 2523-р, постановление 2560 официальные страницы, госпаблик школы',
    excerpt: 'Что закон требует от официальной страницы администрации, школы, ДК, библиотеки или поликлиники: кто обязан, какие площадки, что размещать, как с MAX на дату статьи, формы Госуслуг, модерация комментариев и автопостинг новостей с сайта.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 9,
    heroIcon: 'ph-fill ph-megaphone',
    tags: ['госпаблики', '8-ФЗ', 'бюджетные учреждения', 'MAX', 'автопостинг', '2026'],
    toc: toc(
      ['kto-obyazan', 'Кто обязан вести госпаблик и с какой даты'],
      ['ploshchadki', 'ВКонтакте, Одноклассники и правила ведения'],
      ['chto-razmeshchat', 'Что размещать на странице и на сайте'],
      ['max', 'Госпаблик в MAX: что есть на дату статьи'],
      ['gosuslugi', 'Связка с Госуслугами: формы и лента на сайте'],
      ['kontent-plan', 'Контент-план на месяц без SMM-специалиста'],
      ['kommentarii', 'Модерация комментариев и обращения граждан'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['sayt-administracii-poseleniya-8-fz-2026', 'elektronnaya-priemnaya-obrashcheniya-grazhdan-59-fz-2026', 'avtoposting-v-telegram-max-vk-2026', 'zakon-ob-antifrode-41-fz-inostrannye-messendzhery-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/razovye-zadachi-skripty-parsery/', label: 'Автопостинг и абонентка' },
    servicesOffer: SVC_GOSPABLIK,
    contentHtml: C('gospabliki-uchrezhdeniya-vk-ok-max-2026'),
  },
];
