// Экспертная статья (new39-6): бэктест прогнозной модели на истории, спрос, продажи, отток.
// Опора: кейс bot-sportivnoy-analitiki-backtest-keys-2026 (только методика и вывод), документация scikit-learn (TimeSeriesSplit, common pitfalls, DummyClassifier).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-31';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC = {
  title: 'Проверка прогноза на вашей истории и отчёт без самообмана',
  services: [
    { icon: 'ph-fill ph-chart-line-up', label: 'Бэктест по времени на ваших данных' },
    { icon: 'ph-fill ph-ruler', label: 'Сравнение с простым правилом и ошибка в рублях' },
    { icon: 'ph-fill ph-database', label: 'Сбор истории из 1С, таблиц и учётной системы' },
    { icon: 'ph-fill ph-robot', label: 'Бот или отчёт с прогнозом по утрам' },
  ],
  ctaLabel: 'Проверить прогноз на истории', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'proverka-prognoznoy-modeli-na-istorii-bektest-2026',
    category: 'ai-dev',
    published: true,
    title: 'Как проверить прогнозную модель на истории и не обмануть себя',
    metaTitle: 'Бэктест прогнозной модели: проверка на истории 2026',
    metaDescription: 'Как проверить прогноз спроса, продаж и оттока бэктестом: разбиение по времени, утечка будущего, простая база, честная оценка и когда выбрать правило.',
    metaKeywords: 'бэктест, проверка прогнозной модели, прогноз спроса, прогноз продаж, прогноз оттока, TimeSeriesSplit, утечка данных, базовая модель, честная оценка модели',
    excerpt: 'Как я проверяю прогнозную модель на истории: обучение только на прошлом, проверка на периоде после него, поиск утечки будущего, сравнение с простым правилом вроде «завтра как сегодня», честная оценка в деньгах и ситуация, когда правильно признать, что модель не лучше простого правила.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 9,
    heroIcon: 'ph-fill ph-chart-line-up',
    tags: ['бэктест', 'прогноз спроса', 'прогноз продаж', 'отток клиентов', 'машинное обучение', 'аналитика'],
    toc: toc(
      ['zachem', 'Зачем проверять на истории'],
      ['razbienie-po-vremeni', 'Разбиение по времени вместо случайного'],
      ['utechka-buduschego', 'Утечка будущего: где она прячется'],
      ['bazovaya-model', 'Сравнение с простой базовой моделью'],
      ['chestnaya-ocenka', 'Честная оценка и когда признать поражение'],
      ['keys', 'Пример из практики: модель против внешнего ориентира'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько это стоит'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['bot-sportivnoy-analitiki-backtest-keys-2026', 'ii-prognoz-sprosa-prodazh-2026', 'timesfm-3-prognoz-prodazh-i-sprosa-2026', 'ii-prognoz-sprosa-zakupki-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/ai-agents/', label: 'ИИ-агенты и аналитика' },
    servicesOffer: SVC,
    contentHtml: C('proverka-prognoznoy-modeli-na-istorii-bektest-2026'),
  },
];
