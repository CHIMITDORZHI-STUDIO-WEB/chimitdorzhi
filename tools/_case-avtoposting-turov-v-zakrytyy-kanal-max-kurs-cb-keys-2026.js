module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-paper-plane-tilt',
    title: 'Автопостинг туров в закрытый канал MAX с ценой по курсу ЦБ',
    metaTitle: 'Кейс: автопостинг туров в закрытый канал MAX с курсом ЦБ',
    metaDescription: 'Бот сам публикует туры в закрытый канал MAX: случайное время, разрыв между постами, рубли по курсу ЦБ в момент отправки, обложка с ценой. Работает.',
    excerpt: 'Для клуба путешествий я настроил публикацию туров в закрытый канал MAX без ручной работы. Посты выходят в случайное время с разрывом, цена в рублях считается по курсу ЦБ в момент отправки, а плашку с суммой скрипт дорисовывает на обложке. Работает с 18 ноября, охват пока не измерял.',
    tags: ['кейс', 'MAX', 'автопостинг', 'путешествия', 'Python', 'курс ЦБ'],
    cta: 'bots',
    relatedSlugs: ['avtoposting-v-telegram-max-vk-2026', 'kontent-plan-max-kanala-2027', 'pereschet-prajsa-pri-smene-kursa-2026', 'max-kanaly-rassylki-marketing-2026'],
  },
  flagship: {
    name: 'Автопостинг туров в закрытый канал MAX',
    slug: 'avtoposting-turov-v-zakrytyy-kanal-max-kurs-cb-keys-2026',
    type: 'bot', done: true, delivered: false,
    task: 'Клубу путешествий нужно вести закрытый канал в MAX: каждый тур отдельным постом с обложкой и ценой, в случайное время дня, с разрывом между постами. Цены заданы в долларах, а рубли должны считаться на день публикации.',
    solution: 'Скрипт на Python запускается по таймеру каждые 2 минуты и публикует не больше одного поста за запуск через бота, назначенного администратором канала. Рубли считаются по курсу ЦБ в момент отправки, при сбое берётся последний удачный курс. Обложка хранится без цены, плашку с суммой скрипт дорисовывает. Позже добавил рубрики и игры, до семи постов в день.',
    result: 'Работает с 18 ноября, очередь из 83 туров рассчитана до начала декабря. Слабое место: застрявший пост задерживает следующие, об ошибке узнаю из журнала. Охват, реакции и заявки с постов не измерял.',
    stack: ['Python', 'systemd', 'MAX Bot API', 'Pillow', 'курс ЦБ'],
    en: {
      task: 'A travel club needs to run a closed channel in MAX: every tour as a separate post with a cover and a price, at a random time of day, with a gap between posts. Prices are set in dollars, while rubles must be calculated for the day of publication.',
      solution: 'A Python script runs on a timer every 2 minutes and publishes at most one post per run through a bot appointed as the channel administrator. Rubles are calculated at the Central Bank rate at the moment of sending, and if that fails the last successful rate is used. The cover is stored without a price and the script draws the price badge on it. Later I added rubrics and games, up to seven posts a day.',
      result: 'It has been running since November 18, and the queue of 83 tours is planned through the beginning of December. The weak spot is that a stuck post delays the next ones, and I learn about an error from the log. I have not measured reach, reactions or requests from the posts.',
    },
    es: {
      task: 'Un club de viajes necesita llevar un canal cerrado en MAX: cada tour como una publicación independiente con portada y precio, a una hora aleatoria del día y con un intervalo entre publicaciones. Los precios están en dólares, pero los rublos deben calcularse para el día de la publicación.',
      solution: 'Un script en Python se ejecuta con un temporizador cada 2 minutos y publica como máximo una entrada por ejecución mediante un bot designado administrador del canal. Los rublos se calculan al tipo de cambio del Banco Central en el momento del envío y, si falla, se usa el último tipo válido. La portada se guarda sin precio y el script dibuja encima la etiqueta con la suma. Más tarde añadí rúbricas y juegos, hasta siete publicaciones al día.',
      result: 'Funciona desde el 18 de noviembre y la cola de 83 tours está planificada hasta principios de diciembre. El punto débil es que una publicación atascada retrasa las siguientes y me entero del error por el registro. No he medido el alcance, las reacciones ni las solicitudes procedentes de las publicaciones.',
    },
  },
};
