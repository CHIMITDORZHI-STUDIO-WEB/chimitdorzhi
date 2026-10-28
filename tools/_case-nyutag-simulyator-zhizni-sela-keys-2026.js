module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-game-controller',
    title: 'НЮТАГ: онлайн-симулятор жизни села на 3D-карте с входом через MAX',
    metaTitle: 'Кейс: НЮТАГ, симулятор жизни села на 3D-карте',
    metaDescription: 'Своя браузерная игра на карте настоящего села: работа и зарплата, дом, хозяйство, выборы главы, вход через MAX и Telegram. Плюс промо-ролик 60 с и рилсы.',
    excerpt: 'Собственный продукт: многопользовательская игра на 3D-карте настоящего села Узон в Забайкалье. Жители входят через MAX или Telegram, устраиваются на работу, получают зарплату из бюджета села, строят дом и хозяйство. Игра работает на nutag.chimitdorzhi.space, к ней снят промо-ролик, постеры и рилсы из кадров самой игры.',
    tags: ['кейс', 'браузерная игра', 'MAX', 'Telegram', 'three.js', 'промо-ролик'],
    cta: 'bots',
    relatedSlugs: ['mini-app-v-max-dlya-biznesa-2026', 'three-js-3d-konfigurator-tovara-2026', 'remotion-video-iz-shablonov-2026', 'odin-bot-v-telegram-i-max-chto-obshchee-i-chto-raznoe-2026'],
  },
  flagship: {
    name: 'НЮТАГ: симулятор жизни села',
    slug: 'nyutag-simulyator-zhizni-sela-keys-2026',
    type: 'game', done: true, metric: true,
    task: 'Собственный продукт: онлайн-игра, где карта повторяет настоящее село Узон в Забайкалье, а игроки живут в нём вместе в реальном времени. Вход без установки, через MAX, позже через Telegram.',
    solution: 'Сервер на Node.js с WebSocket и SQLite, 3D-карта на three.js по данным OpenStreetMap, рельеф и снимки со спутника по сезонам. 33 должности с мини-играми, смены по часам Читы, зарплата из бюджета села, дом с ремонтом, участки, хозяйство, учёба, семья, выборы главы, админка с аналитикой. К игре снят промо-ролик 60 с в 16:9 и 9:16, 17 постеров и рилсы по функциям.',
    result: 'Игра в проде на nutag.chimitdorzhi.space, вход через MAX и Telegram работает. На 27.10.2026 в игре 13 жителей, в группе тестеров в MAX 5 человек. Сквозной тест 24 из 24 шагов; на стенде 400 игроков онлайн занимают 20% ядра.',
    stack: ['Node.js', 'WebSocket', 'SQLite', 'three.js', 'MAX Bot API', 'Telegram Bot API', 'OpenStreetMap', 'Remotion', 'Playwright'],
    en: {
      task: 'My own product: an online game whose map repeats the real village of Uzon in Zabaykalsky Krai, with players living in it together in real time. No installation; sign-in through MAX, later through Telegram.',
      solution: 'A Node.js server with WebSocket and SQLite, a 3D map on three.js built from OpenStreetMap data, terrain and seasonal satellite imagery. 33 jobs with mini-games, shifts by Chita time, wages paid from the village budget, a house with renovation, land plots, a homestead, education, family, elections of the village head, and an admin panel with analytics. For the game I made a 60-second promo video in 16:9 and 9:16, 17 posters and feature reels.',
      result: 'The game is live at nutag.chimitdorzhi.space; sign-in through MAX and Telegram works. As of 27 October 2026 there are 13 residents in the game and 5 people in the testers group in MAX. The end-to-end test passes 24 of 24 steps; on the test stand 400 players online use 20% of one CPU core.',
    },
    es: {
      task: 'Un producto propio: un juego en línea cuyo mapa reproduce el pueblo real de Uzón, en Zabaikalie, donde los jugadores viven juntos en tiempo real. Sin instalar nada; se entra a través de MAX y, más tarde, también de Telegram.',
      solution: 'Un servidor en Node.js con WebSocket y SQLite, un mapa 3D en three.js construido con datos de OpenStreetMap, relieve e imágenes de satélite según la estación. 33 puestos de trabajo con minijuegos, turnos según la hora de Chitá, salarios pagados del presupuesto del pueblo, una casa con reformas, parcelas, granja, estudios, familia, elecciones del jefe del pueblo y un panel de administración con analítica. Para el juego hice un vídeo promocional de 60 s en 16:9 y 9:16, 17 pósters y reels por funciones.',
      result: 'El juego está en producción en nutag.chimitdorzhi.space y el acceso por MAX y Telegram funciona. A 27 de octubre de 2026 hay 13 habitantes en el juego y 5 personas en el grupo de testers en MAX. La prueba de extremo a extremo pasa 24 de 24 pasos; en el banco de pruebas, 400 jugadores conectados usan el 20% de un núcleo.',
    },
  },
};
