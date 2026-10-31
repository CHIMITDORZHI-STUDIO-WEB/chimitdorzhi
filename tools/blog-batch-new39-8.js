// Одиночная статья (new39-8): ИИ-протокол приёма врача в закрытом контуре. Опора: кейс odno-okno-kliniki-ii-protokol-predlozhenie-keys-2026 (предложение, не внедрено).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-31';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC = {
  title: 'ИИ-протокол приёма для клиники в закрытом контуре',
  services: [
    { icon: 'ph-fill ph-microphone', label: 'Запись приёма и расшифровка на сервере клиники' },
    { icon: 'ph-fill ph-file-text', label: 'Черновик протокола по шаблону вашей специальности' },
    { icon: 'ph-fill ph-lock-key', label: 'Схема контура для юриста без выхода данных наружу' },
    { icon: 'ph-fill ph-stethoscope', label: 'Пробный приём на вымышленных данных' },
  ],
  ctaLabel: 'Обсудить схему для клиники', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'ii-protokol-priema-vracha-zakrytyy-kontur-2026',
    category: 'industries',
    published: true,
    title: 'ИИ-протокол приёма врача в закрытом контуре клиники',
    metaTitle: 'ИИ-протокол приёма врача: закрытый контур и 152-ФЗ',
    metaDescription: 'Как устроен ИИ-протокол приёма на сервере клиники: запись, расшифровка, черновик, подпись врача. Согласие, статья 10 152-ФЗ, ЕГИСЗ и что не подтверждено.',
    metaKeywords: 'ИИ протокол приёма врача, протокол приёма нейросеть, расшифровка приёма врача локально, ИИ для клиники 152-ФЗ, закрытый контур клиника, согласие на запись приёма, данные о здоровье 152-ФЗ статья 10',
    excerpt: 'Как работает ИИ-протокол приёма на локальной модели внутри клиники: запись, расшифровка, черновик по шаблону, проверка и подпись врача. Что не уходит наружу, согласие пациента, статья 10 закона 152-ФЗ, ответственность врача, ЕГИСЗ отдельным этапом и честный список того, что не подтверждено.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-stethoscope',
    tags: ['клиника', 'ИИ-протокол', 'локальный ИИ', '152-ФЗ', 'врачебная тайна', 'ЕГИСЗ'],
    toc: toc(
      ['kak-ustroeno', 'Как это устроено'],
      ['zakrytyy-kontur', 'Закрытый контур: что наружу не уходит'],
      ['soglasie', 'Согласие пациента на запись аудио'],
      ['152-fz', 'Данные о здоровье и статья 10 закона 152-ФЗ'],
      ['otvetstvennost', 'Ответственность врача'],
      ['egisz', 'ЕГИСЗ отдельным этапом'],
      ['ne-podtverzhdeno', 'Что не подтверждено'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько это стоит'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['odno-okno-kliniki-ii-protokol-predlozhenie-keys-2026', 'openmed-lokalnyy-ii-dlya-kliniki-bez-oblaka-2026', 'elektronnaya-medkarta-mis-2026', 'obezlichivanie-dannyh-pered-otpravkoy-v-neyroset-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/rkn-audit/', label: 'Аудит по 152-ФЗ' },
    servicesOffer: SVC,
    contentHtml: C('ii-protokol-priema-vracha-zakrytyy-kontur-2026'),
  },
];
