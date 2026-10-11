// Одиночная статья: туристический налог на сайте бронирования.
// Глава 33.1 НК РФ (база, ставки по годам, минимум 100 руб. в сутки, льготы п. 2 ст. 418.4),
// момент расчёта при полной оплате, чек по письму Минфина, показ цены на сайте и в боте.
// Ведёт на предложение онлайн-бронирования для отеля и глэмпинга.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-12';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_TURNALOG = {
  title: 'Туристический налог в бронировании',
  services: [
    { icon: 'ph-fill ph-calculator', label: 'Калькулятор налога на сайте и в боте' },
    { icon: 'ph-fill ph-calendar-check', label: 'Онлайн-бронь с итогом до оплаты' },
    { icon: 'ph-fill ph-receipt', label: 'Оплата с онлайн-кассой и чеком' },
    { icon: 'ph-fill ph-file-text', label: 'Отчёт за квартал для бухгалтера' },
  ],
  ctaLabel: 'Разобрать мою бронь', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'turisticheskiy-nalog-na-sayte-bronirovaniya-2026',
    category: 'legal',
    published: true,
    title: 'Туристический налог на сайте гостиницы: как рассчитать и показать',
    metaTitle: 'Туристический налог: как рассчитать и показать на сайте',
    metaDescription: 'Туристический налог: как рассчитать с минимумом 100 ₽ в сутки, ставки 2026-2029, льготы, чек и как показать налог на сайте гостиницы до оплаты.',
    metaKeywords: 'туристический налог как рассчитать, туристический налог на сайте гостиницы, расчет туристического налога, минимальный туристический налог 100 рублей, ставка туристического налога 2026, туристический налог в чеке, туристический налог льготы',
    excerpt: 'Формула туристического налога для гостиницы, мини-отеля и базы отдыха: база без НДС, ставки по годам, минимум 100 ₽ в сутки и порог, после которого платят процент. Плюс льготы, момент расчёта при полной оплате, чек и то, как показать налог на сайте и в боте до оплаты.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-calculator',
    tags: ['туристический налог', 'гостиницы', 'бронирование', 'налоги', '2026'],
    toc: toc(
      ['kak-rasschitat', 'Туристический налог: как рассчитать за проживание'],
      ['kto-platit', 'Кто платит и где налог введён'],
      ['lgoty', 'Льготы и документы гостя'],
      ['cena-na-sayte', 'Туристический налог на сайте гостиницы: как показывать цену'],
      ['chek', 'Чек, отмена и менеджер каналов'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['beskontaktnoe-zaselenie-mini-otel-apartamenty-2026', 'it-dlya-mini-gostinicy-hostela-2026', 'posutochnaya-arenda-bez-komissii-2026', 'onlayn-kassa-54-fz-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/bronirovanie-otel-glamping/', label: 'Онлайн-бронирование для отеля и глэмпинга' },
    servicesOffer: SVC_TURNALOG,
    contentHtml: C('turisticheskiy-nalog-na-sayte-bronirovaniya-2026'),
  },
];
