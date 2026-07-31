// Батч NFC: 2 денежные темы (таблички отзывов, эл. визитки) + обзор-хаб.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-31';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_NFC = {
  title: 'NFC-решения под ключ',
  services: [
    { icon: 'ph-fill ph-device-mobile', label: 'Страница, которая открывается по касанию' },
    { icon: 'ph-fill ph-arrows-split', label: 'Умные редиректы и правила' },
    { icon: 'ph-fill ph-chart-bar', label: 'Статистика касаний и переходов' },
    { icon: 'ph-fill ph-tag', label: 'Метки и карты под ваш сценарий' },
  ],
  ctaLabel: 'Обсудить NFC-проект', ctaUrl: 'https://t.me/chimitdorzhi',
};

const mk = (o) => Object.assign({
  category: 'development', published: true, datePublished: D, dateModified: D,
  readingMinutes: 4, shortForm: true, servicesOffer: SVC_NFC,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  mk({
    slug: 'nfc-tablichka-dlya-otzyvov-2026',
    heroIcon: 'ph-fill ph-star',
    title: 'NFC-табличка для отзывов: как поднять рейтинг заведения',
    metaTitle: 'NFC-табличка для отзывов: поднять рейтинг',
    metaDescription: 'Клиент подносит телефон к табличке — сразу открывается форма отзыва на Яндекс.Картах или 2ГИС. Как это растит рейтинг заведения, что нужно и как настроить редиректы и статистику.',
    metaKeywords: 'nfc табличка отзывов, табличка для отзывов, поднять рейтинг на картах, отзывы яндекс карты 2гис, qr отзывы кафе, собирать отзывы клиентов',
    excerpt: 'Довольный клиент уходит молча, а недовольный пишет отзыв — так рейтинг заведения ползёт вниз. NFC-табличка ловит момент: поднёс телефон — открылась форма отзыва. Разбираю, как это работает и что нужно для запуска.',
    tags: ['NFC', 'отзывы', 'рейтинг', 'HoReCa', '2026'],
    toc: toc(['problema','Почему рейтинг падает сам'],['kak-rabotaet','Как работает NFC-табличка'],['chto-daet','Что это даёт заведению'],['chto-nuzhno','Что нужно и сколько стоит'],['faq','Частые вопросы'],['vyvody','Коротко о главном']),
    relatedSlugs: ['tsifrovaya-karta-loyalnosti-pwa-keys-2026', 'nfc-pasport-oborudovaniya-2026', 'avtomatizaciya-riteyla-seti-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/geymifikaciya-otzyvov/', label: 'Настроить сбор отзывов' },
  }),
  mk({
    slug: 'elektronnaya-nfc-vizitka-2026',
    heroIcon: 'ph-fill ph-identification-card',
    title: 'Электронная NFC-визитка: контакты по одному касанию',
    metaTitle: 'Электронная NFC-визитка: контакты по касанию',
    metaDescription: 'Тап телефоном по карте или браслету — открывается профиль с контактами, сайтом, мессенджерами и кнопкой «сохранить». Как устроена NFC-визитка, кому нужна и как сделать свой сервис.',
    metaKeywords: 'nfc визитка, электронная визитка, цифровая визитка, виртуальная визитка, визитка по касанию, свой сервис визиток',
    excerpt: 'Бумажные визитки теряются в тот же день, а контакт не сохраняется. NFC-визитка: поднёс телефон — открылся профиль со всеми контактами и кнопкой «сохранить». Разбираю, как это устроено и как сделать такой сервис.',
    tags: ['NFC', 'визитка', 'контакты', 'нетворкинг', '2026'],
    toc: toc(['problema','Чем плоха бумажная визитка'],['kak-rabotaet','Как работает NFC-визитка'],['komu-nuzhno','Кому подходит'],['svoy-servis','Свой сервис визиток как бизнес'],['faq','Частые вопросы'],['vyvody','Коротко о главном']),
    relatedSlugs: ['sayt-eksperta-nedvizhimosti-lending-keys-2026', 'nfc-pasport-oborudovaniya-2026', 'skolko-stoit-sayt-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/web-development/', label: 'Сделать NFC-визитку' },
  }),
  mk({
    slug: 'nfc-metki-dlya-biznesa-2026',
    heroIcon: 'ph-fill ph-tag',
    title: 'NFC-метки для бизнеса: 7 применений, которые приносят деньги',
    metaTitle: 'NFC-метки для бизнеса: 7 рабочих применений',
    metaDescription: 'Обзор: как бизнес использует NFC-метки — сбор отзывов, электронные визитки, лояльность, паспорт техники, пропуски, меню, оплата. Что реально окупается и с чего начать.',
    metaKeywords: 'nfc метки для бизнеса, применение nfc, nfc в бизнесе, что можно сделать с nfc, nfc метки применение, бесконтактные метки бизнес',
    excerpt: 'NFC-метка стоит копейки, а поднесённый телефон открывает что угодно: форму отзыва, визитку, карту лояльности, паспорт оборудования. Собрал 7 применений, которые реально приносят деньги, и разобрал, с чего начать.',
    tags: ['NFC', 'обзор', 'бизнес', 'применения', '2026'],
    toc: toc(['chto-eto','Что такое NFC-метка'],['primeneniya','7 применений для бизнеса'],['chto-okupaetsya','Что реально окупается'],['chto-nuzhno','Что нужно для запуска'],['faq','Частые вопросы'],['vyvody','Коротко о главном']),
    relatedSlugs: ['nfc-tablichka-dlya-otzyvov-2026', 'elektronnaya-nfc-vizitka-2026', 'nfc-pasport-oborudovaniya-2026', 'uchet-oborudovaniya-ble-metki-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/web-development/', label: 'Обсудить NFC под задачу' },
  }),
];
