module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-map-trifold',
    title: 'Карта бурятских родословных с границами эпох: стенд для тестов',
    metaTitle: 'Кейс: карта родословных и границ разных эпох, стенд',
    metaDescription: 'Идея карты бурятских родословных с границами эпох: древа с местами, племена и роды по эпохам, аршаны, дацаны. Закрытый стенд, запуска ещё не было.',
    excerpt: 'Ведущая блога про поиск бурятских предков предложила карту, где люди грузят свои родословные и находят дальних родственников на фоне границ разных эпох. Я собрал под это закрытый стенд на базе своей семейной соцсети: древа с местами, атлас с племенами, родами, дацанами и аршанами. Это стенд для тестирования, публичного запуска не было.',
    tags: ['кейс', 'карта', 'родословная', 'этнография', 'веб-приложение'],
    cta: 'site',
    relatedSlugs: ['gerel-semeynaya-set-keys-2026', 'cifrovizaciya-mifologii-rodoslovnyh-2027', 'karta-rasseleniya-naroda-keys-2026', 'leaflet-interaktivnye-karty-2026'],
  },
  flagship: {
    name: 'Карта бурятских родословных с границами эпох',
    slug: 'karta-buryatskih-rodoslovnyh-istoricheskie-sloi-keys-2026',
    type: 'platform', done: false, delivered: false, intl: false,
    task: 'Ведущая блога про поиск бурятских предков хотела интерактивную карту с границами разных эпох, куда люди сами загружают родословные с привязкой к месту и находят дальних родственников. Нужно было понять, как грузить данные и работает ли идея.',
    solution: 'Основой стала моя семейная соцсеть: древо, места рождения, жизни и захоронения с геокодером, род и подрод, импорт и экспорт GEDCOM, объединение древ. Сверху я построил атлас со слоями: племена и роды по эпохам, переселения, дацаны, аршаны, говоры, войны и походы, перепись 1897 года.',
    result: 'Работает закрытый стенд для тестирования: ведущая блога проверяет его и присылает правки, я их вношу. Публичного запуска нет, реальной аудитории нет. Знаки родов не сделаны: в открытых источниках их почти нет, нужны книги из библиотеки.',
    stack: ['Node.js', 'Express', 'SQLite', 'React', 'MapLibre', 'GEDCOM', 'GeoJSON'],
    en: {
      task: 'A woman who runs a blog about tracing Buryat ancestors wanted an interactive map with the borders of different eras, where people upload their own family trees tied to a place and find distant relatives. We had to work out how to load the data and whether the idea holds up.',
      solution: 'The base is my own family social network: a tree, places of birth, life and burial with a geocoder, clan and sub-clan, GEDCOM import and export, tree merging. On top I built an atlas with layers: tribes and clans by era, migrations, monasteries, sacred springs, dialects, wars and campaigns, the 1897 census.',
      result: 'A closed test stand is running: the blogger checks it and sends corrections, and I apply them. There is no public launch and no real audience. Clan marks are not done: open sources hold almost none, and books from a library are needed.',
    },
    es: {
      task: 'Una mujer que lleva un blog sobre la búsqueda de antepasados buriatos quería un mapa interactivo con las fronteras de distintas épocas, donde la gente suba su árbol genealógico vinculado a un lugar y encuentre parientes lejanos. Había que ver cómo cargar los datos y si la idea funciona.',
      solution: 'La base es mi propia red social familiar: árbol, lugares de nacimiento, vida y sepultura con geocodificador, clan y subclán, importación y exportación GEDCOM, fusión de árboles. Encima construí un atlas con capas: tribus y clanes por época, migraciones, monasterios, manantiales sagrados, dialectos, guerras y campañas, el censo de 1897.',
      result: 'Funciona un banco de pruebas cerrado: la autora del blog lo revisa y envía correcciones, y yo las aplico. No hay lanzamiento público ni audiencia real. Las marcas de clan no están hechas: las fuentes abiertas casi no las tienen y hacen falta libros de una biblioteca.',
    },
  },
};
