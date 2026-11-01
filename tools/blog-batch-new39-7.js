// Одиночная статья (new39-7): распознавание старинных и редких письменностей по фото. Опора: кейс raspoznavanie-staromongolskogo-teksta-keys-2026.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-31';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC = {
  title: 'Распознавание редких письменностей по фото с проверкой',
  services: [
    { icon: 'ph-fill ph-camera', label: 'Пробный прогон на ваших фото до договора' },
    { icon: 'ph-fill ph-translate', label: 'Транскрипция, современная запись и перевод' },
    { icon: 'ph-fill ph-list-checks', label: 'Список сомнительных мест для сверки носителем языка' },
    { icon: 'ph-fill ph-file-pdf', label: 'Отчёт в PDF с границей надёжного и чернового' },
  ],
  ctaLabel: 'Обсудить распознавание', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'raspoznavanie-starinnyh-pismennostey-po-foto-2026',
    category: 'ai-dev',
    published: true,
    title: 'Распознавание старинных и редких письменностей по фото',
    metaTitle: 'Распознавание старинных письменностей по фото: что работает',
    metaDescription: 'Почему обычный OCR не читает вязь и рукописи, что работает: ИИ с изображением, транскрипция, перевод, проверка носителем и честные пределы точности.',
    metaKeywords: 'распознавание старинных рукописей по фото, старомонгольская письменность распознавание, OCR редких языков, распознавание рукописного текста нейросеть, перевод старописьменного текста, оцифровка архивов',
    excerpt: 'Почему обычный OCR не читает вертикальную вязь, рукописи и редкие алфавиты, какая цепочка работает: модель под письмо, транскрипция, перевод, сверка и проверка носителем языка. Честные пределы точности и список того, что просить у заказчика.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 7,
    heroIcon: 'ph-fill ph-translate',
    tags: ['OCR', 'рукописи', 'старомонгольская письменность', 'архивы', 'нейросети', 'перевод'],
    toc: toc(
      ['pochemu-ocr', 'Почему обычный OCR не справляется'],
      ['chto-rabotaet', 'Что работает на практике'],
      ['keys', 'Как это выглядело в моём проекте'],
      ['proverka', 'Как проверять результат'],
      ['predely', 'Честные пределы точности'],
      ['chto-prosit', 'Что просить у заказчика'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько это стоит'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['raspoznavanie-staromongolskogo-teksta-keys-2026', 'chandra-ai-ocr-dokumenty-2026', 'ii-dlya-sohraneniya-buryatskogo-yazyka-2027', 'pdf2md-skany-i-arhivy-dokumentov-v-tekst-s-otchetom-gde-ocr-oshibsya-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/ai-agents/', label: 'ИИ-агенты и обработка документов' },
    servicesOffer: SVC,
    contentHtml: C('raspoznavanie-starinnyh-pismennostey-po-foto-2026'),
  },
];
