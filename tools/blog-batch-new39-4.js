// Одиночная статья (new39-4): даты в расчётах, 29 февраля, год 1900 в Excel, возраст, дата рождения.
// Опора: кейсы lichnyy-kalendar-po-date-rozhdeniya-predlozhenie-keys-2026 и personalnye-razbory-po-date-rozhdeniya-keys-2026; факты: Microsoft Learn (1900 и високосный год), MDN (Date).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-31';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC = {
  title: 'Расчёты по датам: проверка таблицы и перенос в бота',
  services: [
    { icon: 'ph-fill ph-calendar-check', label: 'Проверка формул на крайних датах: 29 февраля, 1900, 2100' },
    { icon: 'ph-fill ph-seal-check', label: 'Сверка расчёта с вашим эталоном' },
    { icon: 'ph-fill ph-file-pdf', label: 'PDF и слайды по дате рождения' },
    { icon: 'ph-fill ph-robot', label: 'Бот: ввёл дату, получил результат' },
  ],
  ctaLabel: 'Проверить расчёт', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'daty-v-raschetah-29-fevralya-i-lovushki-excel-2026',
    category: 'development',
    published: true,
    title: 'Даты в расчётах: 29 февраля и ловушки Excel',
    metaTitle: 'Даты в расчётах: 29 февраля, год 1900 в Excel, возраст',
    metaDescription: 'Ловушки дат в Excel и программах: високосный год, ошибка 1900 года, формат и часовой пояс, расчёт возраста и срока, разборы по дате рождения.',
    metaKeywords: 'ошибка Excel 1900 високосный год, 29 февраля в расчётах, как посчитать возраст по дате рождения, часовой пояс дата, формат даты, расчёт по дате рождения, лист Excel даты',
    excerpt: 'Почему даты ломают расчёты: високосный год и 29 февраля, документированная ошибка Excel с 1900 годом, формат даты и часовой пояс, сложение месяцев, подсчёт возраста и срока. Что я проверяю в расчётах по дате рождения и как сверка 756 из 756 нашла лишний день в чужой таблице.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-calendar-check',
    tags: ['даты в расчётах', 'Excel', 'високосный год', 'дата рождения', 'часовой пояс', '2026'],
    toc: toc(
      ['visokosnyy-god', '29 февраля и високосный год'],
      ['excel-1900', 'Год 1900 в Excel: ошибка совместимости'],
      ['format-i-poyas', 'Формат даты и часовой пояс'],
      ['vozrast-i-srok', 'Как считать возраст и срок'],
      ['razbory-po-date', 'Расчёты по дате рождения для эксперта'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько это стоит'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['lichnyy-kalendar-po-date-rozhdeniya-predlozhenie-keys-2026', 'personalnye-razbory-po-date-rozhdeniya-keys-2026', 'personalnye-razbory-eksperta-kak-avtomatizirovat-raschet-i-slaydy-2026', 'servis-personalnyh-razborov-dlya-astrologa-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/business-automation/', label: 'Автоматизация бизнеса' },
    servicesOffer: SVC,
    contentHtml: C('daty-v-raschetah-29-fevralya-i-lovushki-excel-2026'),
  },
];
