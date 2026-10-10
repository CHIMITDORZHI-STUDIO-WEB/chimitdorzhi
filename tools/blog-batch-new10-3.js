// Одиночная статья: проверка авто из Китая по VIN (история, ДТП, пробег)
// и встраивание проверки в сайт или бот продавца. Ведёт на /services/china-it/.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-10';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_VIN = {
  title: 'Проверка авто из Китая по VIN на вашем сайте',
  services: [
    { icon: 'ph-fill ph-magnifying-glass', label: 'Тест провайдера на ваших VIN' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция API отчётов в сайт или CRM' },
    { icon: 'ph-fill ph-robot', label: 'Проверка по VIN в боте с оплатой' },
    { icon: 'ph-fill ph-file-pdf', label: 'Отчёт на русском: карточка и PDF' },
  ],
  ctaLabel: 'Обсудить проверку по VIN', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'proverka-avto-iz-kitaya-po-vin-istoriya-probeg-2026',
    category: 'industries',
    published: true,
    title: 'Проверка авто из Китая по VIN: что покажет отчёт и как встроить в сайт',
    metaTitle: 'Проверка авто из Китая по VIN: ДТП, владельцы, пробег',
    metaDescription: 'Проверка авто из Китая по VIN: что реально покажет отчёт (комплектация, ДТП, ТО, пробег), чего не узнать и как встроить проверку в сайт или бот продавца.',
    metaKeywords: 'проверка авто из китая по vin, история китайского авто по вин, vin китай проверить пробег, проверка vin китайского автомобиля, отчёт по vin китай, api проверки vin',
    excerpt: 'Прогнал реальные VIN китайских машин через двух провайдеров и купил платный отчёт. Рассказываю, что приходит на самом деле, где дыры с пробегом и ТО, и как встроить проверку в сайт или бот продавца с оплатой и кэшем.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 7,
    heroIcon: 'ph-fill ph-car-profile',
    tags: ['авто из Китая', 'VIN', 'проверка истории', 'API', 'интеграции'],
    toc: toc(
      ['chto-eto', 'Проверка авто из Китая по VIN: что это'],
      ['struktura-vin', 'Как устроен VIN китайской машины'],
      ['chto-mozhno-uznat', 'Что реально можно узнать по VIN'],
      ['chego-nelzya', 'Чего не узнать и где риск с пробегом'],
      ['moy-test', 'Что показал мой тест на трёх VIN'],
      ['kak-vstroit', 'Как встроить проверку в сайт или бот'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['api-dannyh-avto-iz-kitaya-platforma-keys-2026', 'wetocar-katalog-avto-kitay-keys-2026', 'avtomost-vitrina-avto-kitay-keys-2026', 'vitrina-avto-iz-postov-kanala-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/china-it/', label: 'IT для работы с Китаем' },
    servicesOffer: SVC_VIN,
    contentHtml: C('proverka-avto-iz-kitaya-po-vin-istoriya-probeg-2026'),
  },
];
