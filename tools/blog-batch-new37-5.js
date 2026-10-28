// Одиночная статья (new37-5): как уйти с Битрикс24 на свою систему без остановки работы.
// Опора: кейс logistika-svoya-sistema-vmesto-bitrix24-predlozhenie-keys-2026; справка helpdesk.bitrix24.ru/open/20966844/ (экспорт CRM), /open/27523952/ (миграция порталов);
// apidocs.bitrix24.ru: crm.item.list, crm.activity.list, crm.timeline.comment.list, входящие вебхуки.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-29';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_B24_MOVE = {
  title: 'Переезд с Битрикс24 на свою систему',
  services: [
    { icon: 'ph-fill ph-magnifying-glass', label: 'Разбор портала: живые процессы, поля и интеграции' },
    { icon: 'ph-fill ph-database', label: 'Выгрузка сделок, контактов, дел и файлов через REST API' },
    { icon: 'ph-fill ph-arrows-left-right', label: 'Перенос по одному процессу при работающем Битрикс24' },
    { icon: 'ph-fill ph-chat-circle-dots', label: 'Согласования из MAX и Telegram, обучение по ролям' },
  ],
  ctaLabel: 'Обсудить переезд', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'uyti-s-bitrix24-na-svoyu-sistemu-bez-ostanovki-2026',
    category: 'development',
    published: true,
    title: 'Как уйти с Битрикс24 на свою систему и не остановить работу',
    metaTitle: 'Уйти с Битрикс24 на свою систему без остановки работы',
    metaDescription: 'Когда уход с Битрикс24 оправдан и когда нет, разбор портала, выгрузка сделок, контактов, дел и файлов, перенос процессов по одному и обучение сотрудников.',
    metaKeywords: 'уйти с битрикс24, переход с битрикс24, своя система вместо битрикс24, выгрузка данных из битрикс24, экспорт сделок битрикс24, перенос crm, отказ от битрикс24',
    excerpt: 'Как переехать с Битрикс24 на свою систему, не останавливая работу: когда это оправдано и когда лучше остаться, как разобрать портал, выгрузить сделки, контакты, дела и файлы, запустить новую систему параллельно и переносить процессы по одному.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-arrows-left-right',
    tags: ['Битрикс24', 'CRM', 'переезд', 'автоматизация', 'перенос данных'],
    toc: toc(
      ['kogda-opravdano', 'Когда уход с Битрикс24 оправдан'],
      ['kogda-ne-nuzhno', 'Когда уходить не нужно'],
      ['razbor-portala', 'Разбор портала: что реально используется'],
      ['vygruzka', 'Выгрузка данных: сделки, контакты, файлы, история'],
      ['parallelno', 'Параллельная работа и перенос процессов по одному'],
      ['obuchenie', 'Обучение и что оставить в Битрикс24'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит переезд с Битрикс24'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['logistika-svoya-sistema-vmesto-bitrix24-predlozhenie-keys-2026', 'bitrix24-vs-amocrm-2026', 'skolko-stoit-crm-vnedrenie-2026', 'perehod-s-crm-na-crm-perenos-dannyh-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/business-automation/', label: 'Автоматизация бизнес-процессов' },
    servicesOffer: SVC_B24_MOVE,
    contentHtml: C('uyti-s-bitrix24-na-svoyu-sistemu-bez-ostanovki-2026'),
  },
];
