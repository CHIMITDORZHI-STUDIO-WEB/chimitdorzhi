// Одиночная статья (new29-3): доступные PDF на сайте для экранного диктора.
// Запросы: «доступный pdf для слабовидящих», «ГОСТ Р 70176-2022», «pdf для экранного диктора».
// Категория legal: статья отвечает на требование подп. «в» п. 2 приложения ПП № 102, как и соседняя dostupnost-sayta-a11y-2026.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-17';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_PDF = {
  title: 'Доступные документы на сайте',
  services: [
    { icon: 'ph-fill ph-file-magnifying-glass', label: 'Опись PDF на сайте: текстовый слой, теги, приоритет' },
    { icon: 'ph-fill ph-scan', label: 'Распознавание и вычитка архива сканов' },
    { icon: 'ph-fill ph-file-text', label: 'HTML-версии ключевых документов в админке' },
    { icon: 'ph-fill ph-eye', label: 'Проверка доступности: NVDA, PAC, WCAG 2.2' },
  ],
  ctaLabel: 'Проверить документы на сайте', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'dostupnye-pdf-na-sayte-ekrannyy-diktor-2026',
    category: 'legal',
    published: true,
    title: 'Доступные PDF на сайте: документы, которые прочитает экранный диктор',
    metaTitle: 'Доступный PDF для слабовидящих по ГОСТ Р 70176-2022',
    metaDescription: 'Как сделать PDF на сайте читаемым для экранного диктора: требование ПП № 102, ГОСТ Р 70176-2022, тегированный PDF, распознавание сканов, проверка NVDA и PAC.',
    metaKeywords: 'доступный pdf для слабовидящих, ГОСТ Р 70176-2022, pdf для экранного диктора, тегированный pdf, PDF/UA, постановление 102 доступность, распознавание сканов приказов, PAC PDF Accessibility Checker',
    excerpt: 'Что требует постановление № 102 от документов на сайте учреждения, что такое ГОСТ Р 70176-2022, почему скан приказа недоступен и как переделать архив из сотен PDF: HTML-версии, тегированный экспорт из Word и LibreOffice, распознавание с вычиткой.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-file-pdf',
    tags: ['доступность', 'PDF', 'ГОСТ Р 70176-2022', 'постановление 102', 'распознавание документов', '2026'],
    toc: toc(
      ['trebovanie', 'Что требует постановление № 102 про документы'],
      ['gost', 'ГОСТ Р 70176-2022: что это за стандарт'],
      ['skan', 'Почему скан приказа недоступен'],
      ['tri-puti', 'Три способа сделать документ доступным'],
      ['proverka', 'Как проверить PDF самому'],
      ['arhiv', 'Что делать с архивом из сотен файлов'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['dostupnost-sayta-a11y-2026', 'konvertaciya-i-skleyka-pdf-pachkoy-2026', 'stirling-pdf-instrumenty-2026', 'trebovaniya-k-saytu-shkoly-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/it-audit/', label: 'Аудит сайта и доступности' },
    servicesOffer: SVC_PDF,
    contentHtml: C('dostupnye-pdf-na-sayte-ekrannyy-diktor-2026'),
  },
];
