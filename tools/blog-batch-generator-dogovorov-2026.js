// Замена статьи про генератор документов (старая generaciya-dogovorov-i-schetov-iz-shablona-2026
// снята с публикации и редиректит сюда). Угол: почему менеджер ошибается в реквизитах.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-27';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

module.exports = [
  {
    slug: 'generator-dogovorov-i-kp-2026',
    published: true, datePublished: D, dateModified: D, readingMinutes: 4,
    category: 'biznes-krugozor',
    heroIcon: 'ph-fill ph-file-text',
    ctaInternal: { url: `${S}/services/business-automation/`, label: 'Обсудить генератор документов под компанию' },
    title: 'Договор за минуту: клиент ввёл данные, документ готов',
    metaTitle: 'Генератор договоров, счетов и КП под вашу компанию',
    metaDescription: 'Менеджер вводит данные в форму, система подставляет их в ваш шаблон и выдаёт готовый договор, счёт или КП в PDF. Реквизиты, нумерация и история сами.',
    excerpt: 'Менеджер вручную правит вордовский шаблон под каждого клиента, ошибается в реквизитах и суммах, тратит время. Генератор документов делает иначе: человек вводит данные в форму, система собирает готовый договор, счёт или КП в PDF с автоматической нумерацией и историей. Разбираю, как это устроено, сколько экономит и что остаётся за юристом.',
    tags: ['автоматизация', 'документооборот', 'договоры', 'КП'],
    toc: [
      { id: 'dogovor-za-minutu', text: 'Договор за минуту: клиент ввёл данные, документ готов' },
      { id: 'pochemu-tak', text: 'Почему менеджер ошибается в реквизитах' },
      { id: 'kak-rabotaet', text: 'Как работает генератор документов' },
      { id: 'skolko-ekonomit', text: 'Сколько это экономит' },
      { id: 'chto-uchest', text: 'Что важно учесть' },
      { id: 'chto-sdelat', text: 'Что можно сделать уже сейчас' },
      { id: 'faq', text: 'Частые вопросы' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    relatedSlugs: ['ii-analiz-dogovorov-schetov-2026', 'avtomatizaciya-schetov-aktov-2027', 'audit-152-fz-2026', 'programma-rascheta-zakaza-i-kp-2026'],
    servicesOffer: SVC_BIZ,
    contentHtml: C('generator-dogovorov-i-kp-2026'),
  },
];
