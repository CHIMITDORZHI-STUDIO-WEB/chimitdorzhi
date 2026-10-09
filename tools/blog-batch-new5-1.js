// Одиночная статья: камеры видеонаблюдения с ИИ для бизнеса.
// Что работает на обычных камерах, номера, выкладка, лица и 152-ФЗ, облако
// или свой сервер, цены из prices-data. Ведёт на компьютерное зрение.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-09';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_CV = {
  title: 'Видеоаналитика для бизнеса под ключ',
  services: [
    { icon: 'ph-fill ph-users-three', label: 'Подсчёт посетителей и очередей' },
    { icon: 'ph-fill ph-car-profile', label: 'Въезд и парковка по номерам' },
    { icon: 'ph-fill ph-storefront', label: 'Контроль выкладки на полках' },
    { icon: 'ph-fill ph-hard-drives', label: 'Свой сервер для видеоаналитики' },
  ],
  ctaLabel: 'Обсудить видеоаналитику', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'kamery-videonablyudeniya-s-ii-dlya-biznesa-2026',
    category: 'ai-dev',
    published: true,
    title: 'Камеры видеонаблюдения с ИИ для бизнеса: что работает и сколько стоит',
    metaTitle: 'Камеры видеонаблюдения с ИИ для бизнеса: задачи и цены',
    metaDescription: 'Камеры с ИИ для бизнеса: подсчёт посетителей, очереди, номера машин, выкладка. Что работает на старых камерах, лица и 152-ФЗ, облако или сервер, цены.',
    metaKeywords: 'камеры видеонаблюдения с ии для бизнеса, видеоаналитика для бизнеса, умные камеры для магазина, подсчёт посетителей по камерам, распознавание номеров, распознавание лиц 152-ФЗ',
    excerpt: 'Разбираю, что камеры с ИИ реально умеют в магазине, на складе и на парковке: посетители, очереди, номера машин, выкладка. Где хватит старых камер, где нужны новые, почему распознавание лиц упирается в 152-ФЗ и сколько это стоит.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-video-camera',
    tags: ['видеоаналитика', 'компьютерное зрение', 'видеонаблюдение', 'ритейл', '152-ФЗ'],
    toc: toc(
      ['chto-eto', 'Камеры видеонаблюдения с ИИ для бизнеса: что это на деле'],
      ['obychnye-ili-novye', 'Что работает на обычных камерах, а что требует новых'],
      ['posetiteli-ochered', 'Подсчёт посетителей и очереди'],
      ['nomera-mashin', 'Номера машин: въезд, парковка, склад'],
      ['vykladka-krazhi', 'Выкладка на полках и кражи'],
      ['lica-152-fz', 'Распознавание лиц: биометрия по 152-ФЗ'],
      ['oblako-ili-server', 'Облако или свой сервер'],
      ['skolko-stoit', 'Сколько стоит видеоаналитика для бизнеса'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['frigate-umnoe-videonablyudenie-2026', 'alpr-raspoznavanie-avtonomerov-2026', 'raspoznavanie-lic-otkrytyy-sdk-2026', 'signalizaciya-videonablyudenie-montazh-obsluzhivanie-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/computer-vision/', label: 'Видеоаналитика и компьютерное зрение' },
    servicesOffer: SVC_CV,
    contentHtml: C('kamery-videonablyudeniya-s-ii-dlya-biznesa-2026'),
  },
];
