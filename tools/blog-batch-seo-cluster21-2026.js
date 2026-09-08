// SEO-кластер 21: локальное распознавание лиц на открытом SDK — что умеет и где подводит.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-08';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const CV = { url: `${S}/services/computer-vision/`, label: 'Обсудить компьютерное зрение' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'raspoznavanie-lic-otkrytyy-sdk-2026', category: 'opensource', heroIcon: 'ph-fill ph-scan-smiley', ctaInternal: CV,
    title: 'Распознавание лиц на своём сервере: что умеет открытый SDK и где он вас подведёт',
    metaTitle: 'Распознавание лиц на своём сервере: открытый SDK',
    metaDescription: 'Открытый SDK распознавания лиц работает локально, но у него нет файла лицензии и нет проверки живости. Разбираю, что он умеет и что проверить до внедрения.',
    excerpt: 'Открытый SDK распознавания лиц считает всё на вашем железе и не отправляет снимки в чужое облако. Разбираю, что он реально делает, почему отсутствие файла лицензии и модуля живости меняет картину, и что я проверяю, прежде чем ставить такое на объект.',
    tags: ['компьютерное зрение', 'open source', 'биометрия', 'безопасность'],
    toc: [{ id: 'chto-umeet', text: 'Что на самом деле делает такой SDK' }, { id: 'licenziya', text: 'Первая ловушка: «open-source» без лицензии' }, { id: 'liveness', text: 'Вторая ловушка: система пропустит фотографию' }, { id: 'zakon', text: 'Локально — не значит законно' }, { id: 'checklist', text: 'Что я проверяю, прежде чем ставить распознавание лиц на объект' }, ...FAQ_VYV],
    relatedSlugs: ['biometria-ebs-2026', 'vidy-biometrii-2026', 'razmytie-lic-na-foto-152-fz-2026', 'frigate-umnoe-videonablyudenie-2026'] }),
];
