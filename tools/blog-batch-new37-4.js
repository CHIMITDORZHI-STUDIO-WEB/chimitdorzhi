// Одиночная статья (new37-4): как своя система такси раздаёт заказы.
// Опора: кейс taksi-rayona-bot-pwa-predlozhenie-keys-2026; документация PostgreSQL (explicit locking); 580-ФЗ ссылкой на пиллар.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-29';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_TAXI = {
  title: 'Своя раздача заказов для таксопарка',
  services: [
    { icon: 'ph-fill ph-map-pin', label: 'Очередь на стоянках, зоны и соседи из вашей прежней системы' },
    { icon: 'ph-fill ph-car', label: 'Режим часа пик и один текущий заказ у водителя' },
    { icon: 'ph-fill ph-shield-check', label: 'Атомарное принятие заказа без двойных назначений' },
    { icon: 'ph-fill ph-users-three', label: 'Кабинет диспетчера: зависшие заказы, запросы на снятие' },
  ],
  ctaLabel: 'Обсудить систему такси', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'raspredelenie-zakazov-taksi-ochered-stoyanok-2026',
    category: 'industries',
    published: true,
    title: 'Как своя система такси раздаёт заказы: очередь, зоны, час пик',
    metaTitle: 'Распределение заказов такси: очередь, зоны, час пик',
    metaDescription: 'Как своя система такси раздаёт заказы: очередь на стоянках, соседние зоны, режим часа пик, принятие без двойных назначений, контроль отмен и диспетчер.',
    metaKeywords: 'распределение заказов такси, алгоритм распределения заказов такси, очередь на стоянке такси, автоматическая раздача заказов, диспетчерская такси, своя система такси, двойное назначение заказа',
    excerpt: 'Простым языком для владельца таксопарка: как своя система решает, кому отдать заказ. Очередь на стоянке зоны подачи, соседние зоны и ближайшие машины кругами, рассылка нескольким водителям в час пик, атомарное принятие без двойных назначений, снятие заказа только через диспетчера и что остаётся диспетчерской.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-taxi',
    tags: ['такси', 'таксопарк', 'диспетчерская', 'распределение заказов', '2026'],
    toc: toc(
      ['ochered-stoyanok', 'Очередь на стоянке: кто первым встал, тот первым получил'],
      ['sosednie-zony', 'Соседние зоны и круги поиска'],
      ['chas-pik', 'Режим часа пик'],
      ['dvoynye-naznacheniya', 'Атомарное принятие: как не дать заказ двоим'],
      ['kontrol-otmen', 'Контроль отмен'],
      ['dispetcher', 'Что остаётся диспетчеру'],
      ['zakon', 'Что про это говорит закон'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит своя система раздачи заказов'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['taksi-rayona-bot-pwa-predlozhenie-keys-2026', 'svoe-taksi-bez-agregatora-max-2026', 'it-dlya-taksoparka-2026', 'sayt-taksoparka-sluzhba-zakaza-taksi-580-fz-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/development/telegram-bots/', label: 'Разработка ботов' },
    servicesOffer: SVC_TAXI,
    contentHtml: C('raspredelenie-zakazov-taksi-ochered-stoyanok-2026'),
  },
];
