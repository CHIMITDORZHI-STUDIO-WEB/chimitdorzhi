module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-chart-line-up',
    title: 'Бот спортивной аналитики: как я проверил модель и признал, что рынок точнее',
    metaTitle: 'Кейс: бот спортивной аналитики и честный бэктест',
    metaDescription: 'Модель исходов матчей на открытых данных, бэктест по времени на 9911 матчах и честный вывод: рынок точнее, поэтому бот ищет цену, а не угадывает.',
    excerpt: 'Бэктест на 4150 матчах дал 51,3% попаданий против 47,3% у правила «всегда хозяева», но линия контор угадывает 53,8% против 51,5% у модели. Я признал, что рынок точнее, и перестроил продукт на поиск лучшей цены.',
    tags: ['кейс', 'чат-боты', 'аналитика данных', 'Python'],
    cta: 'bots',
    relatedSlugs: ['ii-prognoz-sprosa-prodazh-2026', 'razvedka-dannyh-avtoploshchadok-keys-2026', 'interfeys-v-chate-vmesto-mini-app-keys-2026'],
  },
  flagship: {
    name: 'Бот спортивной аналитики с честным бэктестом',
    slug: 'bot-sportivnoy-analitiki-backtest-keys-2026',
    type: 'bot', done: true,
    task: 'Заказчику нужен был бот, который считает вероятности исходов матчей, ищет цену лучше линии, раскладывает бюджет по экспрессу на 15 матчей и ведёт банк с журналом. До интерфейса нужно было ответить на главный вопрос: умеет ли модель что-то, чего не умеет рынок.',
    solution: 'Собрал модель на Python на одной стандартной библиотеке, на открытых данных по футболу, НХЛ и КХЛ. Проверял бэктестом по времени — обучение только на прошлом — и сравнением с коэффициентами закрытия и консенсусом нескольких контор. Добавил режим «уверенные прогнозы», живого оператора с консолью ответов и вход по кодовому слову.',
    result: 'На 4150 матчах модель угадала 51,3% против 47,3% у правила «всегда хозяева», но на 9911 матчах линия контор точнее: 53,8% против 51,5%. Продукт перестроен с угадывания на поиск лучшей цены — на истории это дало +7% ROI, а одинарные при уверенности от 60% попали в 74,6% из 594 случаев. Бэктест — история, а не гарантия; первый живой пользователь нашёл 3 ошибки, все закрыты в тот же час.',
    stack: ['Python', 'стандартная библиотека', 'бэктест по времени', 'открытые данные', 'консоль оператора'],
    en: {
      task: 'The client wanted a bot that estimates match outcome probabilities, looks for prices better than the line, splits a budget across a 15-match accumulator and keeps a bankroll and a log. Before any interface, the key question was whether the model knows anything the market does not.',
      solution: 'I built the model in Python on the standard library alone, using open data for football, the NHL and the KHL. It was tested with a time-based backtest — training only on the past — and against closing odds and a consensus of several bookmakers. On top: a confident-picks mode, a live operator with a reply console and code-word access.',
      result: 'On 4,150 matches the model hit 51.3% versus 47.3% for always picking the home side, but on 9,911 matches the market line is more accurate: 53.8% versus 51.5%. The product was rebuilt from guessing outcomes to finding better prices — +7% ROI on historical data — and singles at 60%+ model confidence hit 74.6% across 594 cases. A backtest is history, not a guarantee; the first live user found 3 bugs, all fixed within the hour.',
    },
    es: {
      task: 'El cliente quería un bot que calculara probabilidades de resultados de partidos, buscara precios mejores que la línea, repartiera un presupuesto en una combinada de 15 partidos y llevara banca y registro. Antes de la interfaz había que responder a la pregunta clave: si el modelo sabe algo que el mercado no sabe.',
      solution: 'Construí el modelo en Python solo con la biblioteca estándar, con datos abiertos de fútbol, la NHL y la KHL. Lo validé con un backtest temporal — entrenamiento solo con el pasado — y comparándolo con las cuotas de cierre y el consenso de varias casas. Añadí un modo de pronósticos seguros, un operador en vivo con consola de respuestas y acceso por palabra clave.',
      result: 'En 4150 partidos el modelo acertó el 51,3% frente al 47,3% de apostar siempre al local, pero en 9911 partidos la línea del mercado es más precisa: 53,8% frente a 51,5%. El producto pasó de adivinar resultados a buscar mejores precios, con un ROI del +7% en datos históricos, y las simples con confianza del 60% o más acertaron el 74,6% en 594 casos. Un backtest es historia, no garantía; el primer usuario real encontró 3 errores, corregidos en la misma hora.',
    },
  },
};
