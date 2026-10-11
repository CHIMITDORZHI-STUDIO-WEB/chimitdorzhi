// Одиночная статья: что изменится для сайтов и онлайн-бизнеса с 1 января 2027
// (чек-лист). Только нормы, сверенные с первоисточниками: 228-ФЗ (НДС на УСН),
// ст. 346.45, 430, 418.5 НК, 243-ФЗ (ИИ, с 1 марта 2027), постановления № 1116
// и № 821. Ведёт на аудит сайта по 152-ФЗ, кодовое слово «ЯНВАРЬ».
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-12';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_YANVAR = {
  title: 'Подготовка сайта и бота к 2027 году',
  services: [
    { icon: 'ph-fill ph-shield-check', label: 'Аудит сайта по 152-ФЗ' },
    { icon: 'ph-fill ph-receipt', label: 'Настройка онлайн-кассы и оплаты на сайте' },
    { icon: 'ph-fill ph-barcode', label: 'Коды «Честного знака» в чеке' },
    { icon: 'ph-fill ph-robot', label: 'Оферта и приветствие бота с нейросетью' },
  ],
  ctaLabel: 'Проверить мой сайт', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'chto-izmenitsya-dlya-saytov-s-1-yanvarya-2027',
    category: 'legal',
    published: true,
    title: 'Что изменится с 1 января 2027 для бизнеса с сайтом: чек-лист',
    metaTitle: 'Что изменится с 1 января 2027 для бизнеса: чек-лист',
    metaDescription: 'Что изменится с 1 января 2027 для бизнеса с сайтом, магазином и ботом: НДС на УСН, патент, турналог, закон об ИИ, маркировка. Нормы с номерами.',
    metaKeywords: 'что изменится с 1 января 2027 для бизнеса, законы с 1 января 2027 для интернет-магазинов, изменения 2027 для сайтов, НДС на УСН 2027 порог, туристический налог 2027 ставка, закон об ИИ 1 марта 2027, маркировка игрушек 2027',
    excerpt: 'Собрал только то, что подтверждено документами: порог НДС на УСН 20 млн, патент 15 млн, взносы ИП, туристический налог до 3%, закон об ИИ с 1 марта, игрушки в «Честном знаке» и товарные знаки на маркетплейсах. По каждому пункту: что поправить на сайте, в кассе или в боте до 31 декабря.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-calendar-check',
    tags: ['законы 2027', 'чек-лист', 'интернет-магазин', 'НДС на УСН', 'закон об ИИ'],
    toc: toc(
      ['chto-izmenitsya-s-1-yanvarya-2027', 'Что изменится с 1 января 2027 для бизнеса: сводная таблица'],
      ['nalogi', 'Налоги малого бизнеса: что поправить в кассе и на сайте'],
      ['turisticheskiy-nalog', 'Туристический налог: предельная ставка 3%'],
      ['zakon-ob-ii', 'Закон об ИИ: что проверить в боте до 1 марта 2027'],
      ['markirovka-i-marketpleysy', 'Маркировка и маркетплейсы: две даты 1 марта'],
      ['chto-ne-voshlo', 'Что я проверил и не включил'],
      ['kak-ya-delayu', 'Как я делаю аудит сайта перед новым годом'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['152-fz-izmeneniya-2027', 'nalogi-ip-i-malogo-biznesa-v-2027-chto-podtverzhdeno-228-fz-patent-vznosy-2026', 'zakon-ob-ii-243-fz-chto-znachit-dlya-malogo-biznesa-s-botom-2026', 'chto-izmenilos-s-1-oktyabrya-2026-malyy-biznes'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/rkn-audit/', label: 'Аудит сайта по 152-ФЗ перед 2027 годом' },
    servicesOffer: SVC_YANVAR,
    contentHtml: C('chto-izmenitsya-dlya-saytov-s-1-yanvarya-2027'),
  },
];
