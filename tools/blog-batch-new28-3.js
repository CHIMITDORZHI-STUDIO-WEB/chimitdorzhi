// Одиночная статья (серия new28, коммерческий интент): система управления общежитием и хостелом.
// Опора на кейс sistema-upravleniya-obshchezhitiem-keys-2026. Цены из prices-data.js.
// Правовая часть: ЖК РФ ст. 92, 94, 100, 105; 152-ФЗ ст. 18 ч. 5; 54-ФЗ ст. 2 (письмо Минфина 07.07.2021).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-16';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_OBSHCHEZHITIE = {
  title: 'Система для общежития под ключ',
  services: [
    { icon: 'ph-fill ph-bed', label: 'План мест, заселение и выселение' },
    { icon: 'ph-fill ph-file-text', label: 'Договоры и начисления жильцам' },
    { icon: 'ph-fill ph-credit-card', label: 'Онлайн-оплата и список должников' },
    { icon: 'ph-fill ph-wrench', label: 'Заявки на ремонт и кабинет жильца' },
  ],
  ctaLabel: 'Обсудить систему для общежития', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'sistema-upravleniya-obshchezhitiem-i-hostelom-2026',
    category: 'industries',
    published: true,
    title: 'Система управления общежитием и хостелом: места, договоры, оплата',
    metaTitle: 'Программа для общежития: система управления под ключ',
    metaDescription: 'Программа для общежития и хостела: план мест, заселение, договоры найма, начисления и онлайн-оплата, долги, заявки. Что внутри, сроки и цена от 300 000 ₽.',
    metaKeywords: 'программа для общежития, система управления общежитием, программа для хостела, учёт мест в общежитии, автоматизация общежития, договор найма в общежитии, онлайн-оплата проживания, рабочее общежитие',
    excerpt: 'Что входит в систему управления общежитием или хостелом: план мест, заселение и выселение, договоры, начисления и онлайн-оплата, долги, пропуск, заявки и отчёты. Разбираю правовые моменты, опыт общежития на две сотни мест, сроки и цены от.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-buildings',
    tags: ['общежитие', 'хостел', 'система управления', 'онлайн-оплата', 'автоматизация'],
    toc: toc(
      ['sistema-upravleniya', 'Система управления общежитием: кому она нужна'],
      ['chto-vnutri', 'Что внутри программы для общежития'],
      ['pravo', 'Договоры, паспорта и чеки: что учесть по закону'],
      ['keys', 'Как это сработало в общежитии на 200 мест'],
      ['cena', 'Из чего складывается цена'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ot-vas', 'Что нужно от вас'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['sistema-upravleniya-obshchezhitiem-keys-2026', 'it-dlya-mini-gostinicy-hostela-2026', 'skolko-zarabatyvaet-hostel-2026', 'beskontaktnoe-zaselenie-mini-otel-apartamenty-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/programma-ucheta-na-zakaz/', label: 'Программа учёта под ваш процесс' },
    servicesOffer: SVC_OBSHCHEZHITIE,
    contentHtml: C('sistema-upravleniya-obshchezhitiem-i-hostelom-2026'),
  },
];
