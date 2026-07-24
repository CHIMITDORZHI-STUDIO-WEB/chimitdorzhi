// Батч: обязаловки работодателя + сайт для профессии + виджеты (8 статей ~4 мин, shortForm).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-22';
const SVC = 'https://chimitdorzhi.tech/services';

const SVC_HR = {
  title: 'Кадры и документы под ключ',
  services: [
    { icon: 'ph-fill ph-file-text', label: 'КЭДО и электронные документы' },
    { icon: 'ph-fill ph-squares-four', label: 'Учёт сотрудников и отчётность' },
    { icon: 'ph-fill ph-shield-check', label: 'Охрана труда и воинский учёт' },
    { icon: 'ph-fill ph-robot', label: 'Автоматизация кадровой рутины' },
  ],
  ctaLabel: 'Обсудить автоматизацию', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_SITE = {
  title: 'Сайт под вашу профессию под ключ',
  services: [
    { icon: 'ph-fill ph-globe', label: 'Сайт-портфолио и лендинг' },
    { icon: 'ph-fill ph-calendar-check', label: 'Онлайн-запись и заявки' },
    { icon: 'ph-fill ph-credit-card', label: 'Приём оплаты' },
    { icon: 'ph-fill ph-shield-check', label: 'Документы и 152-ФЗ' },
    { icon: 'ph-fill ph-magnifying-glass', label: 'SEO и продвижение' },
  ],
  ctaLabel: 'Заказать сайт', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_CONV = {
  title: 'Конверсия сайта под ключ',
  services: [
    { icon: 'ph-fill ph-list-numbers', label: 'Онлайн-прайс и каталоги' },
    { icon: 'ph-fill ph-cursor-click', label: 'Формы, квизы, поп-апы' },
    { icon: 'ph-fill ph-calendar-check', label: 'Онлайн-запись и оплата' },
    { icon: 'ph-fill ph-star', label: 'Работа с репутацией и отзывами' },
  ],
  ctaLabel: 'Поднять конверсию', ctaUrl: 'https://t.me/chimitdorzhi',
};

const CTA_HR = { url: `${SVC}/business-automation/`, label: 'Автоматизация под ключ' };
const CTA_SITE = { url: `${SVC}/web-development/`, label: 'Заказать сайт' };
const CTA_DEV = { url: `${SVC}/web-development/`, label: 'Разработка под ключ' };
const CTA_REP = { url: `${SVC}/digital-marketing/`, label: 'Работа с репутацией' };

const T = (items) => items.concat([{ id: 'faq', text: 'FAQ' }, { id: 'vyvody', text: 'Коротко о главном' }]);

const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D,
  readingMinutes: 4, shortForm: true, servicesOffer: SVC_SITE, ctaInternal: CTA_SITE,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  // === Обязаловки работодателя ===
  E({ slug: 'elektronnye-trudovye-knizhki-2026', category: 'legal', heroIcon: 'ph-fill ph-identification-badge',
    servicesOffer: SVC_HR, ctaInternal: CTA_HR,
    title: 'Электронные трудовые книжки: что обязан работодатель',
    metaTitle: 'Электронные трудовые книжки: обязанности 2026',
    metaDescription: 'Электронные трудовые книжки (ЭТК): что обязан работодатель, как подавать сведения (ЕФС-1), сроки, что делать при приёме и увольнении и как автоматизировать подачу отчётности.',
    metaKeywords: 'электронные трудовые книжки, этк, сведения о трудовой деятельности, ефс-1, обязанности работодателя этк',
    excerpt: 'Что обязан работодатель по электронным трудовым книжкам: какие сведения подавать, в какие сроки, что при приёме и увольнении и как автоматизировать отчётность.',
    tags: ['ЭТК', 'кадры', 'работодателю', 'отчётность'],
    toc: T([{ id: 'chto-eto', text: 'Что такое ЭТК' }, { id: 'obyazannosti', text: 'Что обязан работодатель' }, { id: 'sroki', text: 'Сроки и формы' }, { id: 'avtomatizaciya', text: 'Как автоматизировать' }]),
    relatedSlugs: ['ohrana-truda-dokumenty-2026', 'kedo-kadrovyy-edo-perehod-2026', 'voinskiy-uchet-v-kompanii-2026'] }),

  E({ slug: 'ohrana-truda-dokumenty-2026', category: 'legal', heroIcon: 'ph-fill ph-hard-hat',
    servicesOffer: SVC_HR, ctaInternal: CTA_HR,
    title: 'Охрана труда: обязательные документы для ИП и ООО',
    metaTitle: 'Охрана труда: обязательные документы ИП и ООО',
    metaDescription: 'Охрана труда для малого бизнеса: какие документы обязательны для ИП и ООО с сотрудниками, инструктажи, оценка рисков и СОУТ, штрафы за отсутствие и как всё вести в электронном виде.',
    metaKeywords: 'охрана труда документы, охрана труда для ип, обязательные документы по охране труда, соут, инструктаж по охране труда',
    excerpt: 'Какие документы по охране труда обязательны для ИП и ООО с сотрудниками, что с инструктажами, оценкой рисков и СОУТ, штрафы и как вести всё электронно.',
    tags: ['охрана труда', 'документы', 'работодателю', 'штрафы'],
    toc: T([{ id: 'komu-nuzhno', text: 'Кому это обязательно' }, { id: 'dokumenty', text: 'Обязательные документы' }, { id: 'shtrafy', text: 'Штрафы за отсутствие' }, { id: 'avtomatizaciya', text: 'Как вести электронно' }]),
    relatedSlugs: ['elektronnye-trudovye-knizhki-2026', 'voinskiy-uchet-v-kompanii-2026', 'kedo-kadrovyy-edo-perehod-2026'] }),

  // === Сайт для профессии ===
  E({ slug: 'sayt-dlya-fotografa-2026', category: 'development', heroIcon: 'ph-fill ph-camera',
    servicesOffer: SVC_SITE, ctaInternal: CTA_SITE,
    title: 'Сайт для фотографа: портфолио, которое приносит заказы',
    metaTitle: 'Сайт для фотографа: портфолио и заказы',
    metaDescription: 'Сайт для фотографа: что должно быть на сайте-портфолио, чтобы он приносил заказы (галереи, цены, отзывы, запись), на чём делать и сколько стоит разработка под ключ.',
    metaKeywords: 'сайт для фотографа, портфолио фотографа, сайт фотографа заказать, сайт-визитка фотографа, лендинг для фотографа',
    excerpt: 'Что должно быть на сайте фотографа, чтобы он приносил заказы (галереи, цены, отзывы, онлайн-запись), на чём делать и сколько стоит под ключ.',
    tags: ['сайт', 'фотограф', 'портфолио', 'заказать'],
    toc: T([{ id: 'zachem', text: 'Зачем фотографу свой сайт' }, { id: 'chto-dolzhno', text: 'Что должно быть на сайте' }, { id: 'na-chem', text: 'На чём делать' }, { id: 'cena', text: 'Сроки и цена' }]),
    relatedSlugs: ['sayt-dlya-vracha-2026', 'sayt-dlya-yurista-2026', 'onlayn-prays-list-2026'] }),

  E({ slug: 'sayt-dlya-vracha-2026', category: 'development', heroIcon: 'ph-fill ph-first-aid',
    servicesOffer: SVC_SITE, ctaInternal: CTA_SITE,
    title: 'Сайт для врача: запись, доверие и закон о рекламе',
    metaTitle: 'Сайт для врача: запись, доверие, закон',
    metaDescription: 'Сайт для врача или частного специалиста: что должно быть (услуги, запись, отзывы, документы), как учесть закон о рекламе медуслуг и 152-ФЗ и сколько стоит разработка под ключ.',
    metaKeywords: 'сайт для врача, сайт для доктора, сайт частного врача, сайт медицинского специалиста, реклама медицинских услуг закон',
    excerpt: 'Что должно быть на сайте врача (услуги, запись, отзывы, документы), как учесть закон о рекламе медуслуг и 152-ФЗ и во сколько обойдётся под ключ.',
    tags: ['сайт', 'врач', 'медуслуги', '152-ФЗ'],
    toc: T([{ id: 'zachem', text: 'Зачем врачу свой сайт' }, { id: 'chto-dolzhno', text: 'Что должно быть' }, { id: 'zakon', text: 'Закон о рекламе и 152-ФЗ' }, { id: 'cena', text: 'Сроки и цена' }]),
    relatedSlugs: ['sayt-dlya-fotografa-2026', 'sayt-dlya-yurista-2026', 'polzovatelskoe-soglashenie-obrazec-2026'] }),

  E({ slug: 'sayt-dlya-yurista-2026', category: 'development', heroIcon: 'ph-fill ph-gavel',
    servicesOffer: SVC_SITE, ctaInternal: CTA_SITE,
    title: 'Сайт для юриста: как получать заявки, а не просто визитку',
    metaTitle: 'Сайт для юриста: заявки, а не визитка',
    metaDescription: 'Сайт для юриста или адвоката: что должно быть, чтобы он приносил клиентов (услуги, кейсы, доверие, заявки), на чём делать и сколько стоит разработка под ключ.',
    metaKeywords: 'сайт для юриста, сайт адвоката, сайт юридической фирмы, заказать сайт юристу, лендинг юриста',
    excerpt: 'Что должно быть на сайте юриста, чтобы он приносил заявки (услуги, кейсы, доверие, формы), на чём делать и сколько стоит под ключ.',
    tags: ['сайт', 'юрист', 'заявки', 'заказать'],
    toc: T([{ id: 'zachem', text: 'Зачем юристу свой сайт' }, { id: 'chto-dolzhno', text: 'Что должно быть' }, { id: 'doverie', text: 'Как выстроить доверие' }, { id: 'cena', text: 'Сроки и цена' }]),
    relatedSlugs: ['sayt-dlya-vracha-2026', 'sayt-dlya-fotografa-2026', 'kak-zakazat-razrabotku-ne-poteryat-dengi-2026'] }),

  // === Виджеты/конверсия ===
  E({ slug: 'onlayn-prays-list-2026', category: 'development', heroIcon: 'ph-fill ph-list-numbers',
    servicesOffer: SVC_CONV, ctaInternal: CTA_DEV,
    title: 'Онлайн-прайс-лист: как сделать удобно и с пользой',
    metaTitle: 'Онлайн-прайс-лист: как сделать удобно',
    metaDescription: 'Онлайн-прайс-лист на сайте: чем он лучше PDF, как сделать удобным (поиск, фильтры, актуальные цены, заявка в один клик), как связать с 1С и сколько стоит.',
    metaKeywords: 'прайс-лист онлайн, онлайн прайс лист, прайс на сайте, электронный прайс лист, прайс лист для сайта',
    excerpt: 'Чем онлайн-прайс лучше PDF, как сделать его удобным (поиск, фильтры, актуальные цены, заявка в клик), как связать с 1С и во сколько обойдётся.',
    tags: ['прайс-лист', 'сайт', 'конверсия', 'каталог'],
    toc: T([{ id: 'zachem', text: 'Чем лучше PDF' }, { id: 'kak-sdelat', text: 'Каким должен быть' }, { id: 'integracii', text: 'Связка с 1С и обновление' }, { id: 'cena', text: 'Сроки и цена' }]),
    relatedSlugs: ['vsplyvayushchee-okno-na-sayte-2026', 'skolko-stoit-sayt-2026', 'priem-oplaty-na-sayt-yukassa-2026'] }),

  E({ slug: 'vsplyvayushchee-okno-na-sayte-2026', category: 'marketing', heroIcon: 'ph-fill ph-cursor-click',
    servicesOffer: SVC_CONV, ctaInternal: CTA_DEV,
    title: 'Всплывающее окно на сайте: когда помогает, а когда бесит',
    metaTitle: 'Всплывающее окно: когда помогает, когда бесит',
    metaDescription: 'Всплывающие окна (поп-апы) на сайте: когда они поднимают заявки, а когда только раздражают и роняют конверсию. Правила хороших поп-апов, примеры и как настроить с умом.',
    metaKeywords: 'всплывающее окно на сайте, поп-ап, popup для сайта, всплывающее окно заявка, поп-ап конверсия',
    excerpt: 'Когда всплывающее окно поднимает заявки, а когда только бесит и роняет конверсию. Правила хороших поп-апов и как настроить их с умом.',
    tags: ['поп-ап', 'конверсия', 'сайт', 'маркетинг'],
    toc: T([{ id: 'zachem', text: 'Зачем нужны поп-апы' }, { id: 'kogda-besit', text: 'Когда они бесят' }, { id: 'pravila', text: 'Правила хороших поп-апов' }, { id: 'kak-nastroit', text: 'Как настроить' }]),
    relatedSlugs: ['onlayn-prays-list-2026', 'seo-prodvizhenie-sayta-2026', 'skolko-stoit-sayt-2026'] }),

  E({ slug: 'udalit-otzyv-s-yandex-kart-2026', category: 'marketing', heroIcon: 'ph-fill ph-star-half',
    servicesOffer: SVC_CONV, ctaInternal: CTA_REP,
    title: 'Как удалить отзыв с Яндекс.Карт: что реально работает',
    metaTitle: 'Как удалить отзыв с Яндекс.Карт: что работает',
    metaDescription: 'Как удалить негативный отзыв с Яндекс.Карт: какие отзывы реально можно снять по правилам, как подать жалобу, что делать с необоснованным негативом и как работать с репутацией.',
    metaKeywords: 'удалить отзыв с яндекс карт, удаление отзывов яндекс, как убрать негативный отзыв, жалоба на отзыв яндекс, работа с отзывами',
    excerpt: 'Какие отзывы на Яндекс.Картах реально можно удалить, как подать жалобу, что делать с необоснованным негативом и как системно работать с репутацией.',
    tags: ['репутация', 'отзывы', 'Яндекс.Карты', 'бизнес'],
    toc: T([{ id: 'mozhno-li', text: 'Какие отзывы можно удалить' }, { id: 'kak-podat', text: 'Как подать жалобу' }, { id: 'esli-otkaz', text: 'Если удалить нельзя' }, { id: 'reputaciya', text: 'Системная работа с репутацией' }]),
    relatedSlugs: ['reputaciya-otzyvy-yandex-2gis-2026', 'geomarketing-yandex-karty-2026', 'ii-otvety-na-otzyvy-wb-ozon-2027'] }),
];
