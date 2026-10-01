module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-dice-five',
    title: 'Шагай Наадан: три игры на одном броске костей в Telegram Mini App',
    metaTitle: 'Кейс: Шагай Наадан, игра в шагай в Telegram Mini App',
    metaDescription: 'Мой Telegram Mini App по игре в шагай: гадание, дүрбэн бэрхэ и бега на одном броске. Правила в чистых функциях, 44 теста, что проверено, а что нет.',
    excerpt: 'Собственный проект: Telegram Mini App по бурят-монгольской игре в шагай. Три режима на одном броске, правила в чистых функциях и 44 теста. Страница открывается по публичному адресу, серверное сохранение, запуск из Telegram и аудитория не проверены.',
    tags: ['кейс', 'Telegram Mini App', 'игры', 'бурят-монгольская культура'],
    cta: 'bots',
    relatedSlugs: ['telegram-mini-app-chto-eto-2026', 'igra-v-telegram-i-max-dlya-biznesa-2026', 'etno-avangard-v-veb-dizayne-2027', 'karta-loyalnosti-kak-igra-2026'],
  },
  flagship: {
    name: 'Шагай Наадан: игра в Telegram Mini App',
    slug: 'shagay-naadan-telegram-mini-app-keys-2026',
    type: 'bot', done: true,
    task: 'Свой проект: мини-приложение в Telegram по традиционной бурят-монгольской игре в шагай, которое открывается без установки. Нужны три режима на одной механике броска и уважительное обращение с культурным каноном: без китча и казино-эстетики.',
    solution: 'Три режима: ежедневное гадание, дүрбэн бэрхэ (пять раундов с одним перебросом) и конские бега на 12 клеток с ботом. Правила вынесены в чистые функции без React и DOM, бросок идёт через crypto.getRandomValues, кость нарисована SVG, звук синтезируется в браузере, интерфейс на русском, английском и монгольском.',
    result: 'Страница отвечает 200 по публичному адресу, я прошёл раунд в браузере; 44 из 44 тестов проходят, распределение выпадений тестом не проверено. Серверное сохранение, запуск из Telegram и число игроков не проверены, бурятской локали нет. Это первая версия.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Framer Motion', 'Telegram Mini App'],
    en: {
      task: 'My own project: a Telegram mini app for the traditional Buryat-Mongol game of shagai (sheep anklebones) that opens without installing anything. It needed three modes on one dice-throw mechanic and a respectful treatment of the cultural canon, with no kitsch and no casino look.',
      solution: 'Three modes: a daily fortune throw, Durben Berkhe (five rounds with one re-roll) and a 12-cell horse race against a bot. The rules are pure functions with no React or DOM, the throw uses crypto.getRandomValues, the bone is drawn in SVG, sound is synthesized in the browser, and the interface comes in Russian, English and Mongolian.',
      result: 'The page returns 200 at its public address and I played a round in a browser; 44 of 44 tests pass, but the distribution of throws is not covered by a test. Server-side saving, launching from Telegram and the number of players are not verified, and there is no Buryat interface language. This is a first version.',
    },
    es: {
      task: 'Un proyecto propio: una mini app de Telegram sobre el juego tradicional buriato-mongol del shagai (astrágalos de oveja) que se abre sin instalar nada. Necesitaba tres modos sobre una misma mecánica de lanzamiento y un trato respetuoso del canon cultural, sin folclorismo barato ni estética de casino.',
      solution: 'Tres modos: la adivinación diaria, Durben Berkhe (cinco rondas con una sola repetición) y una carrera de caballos de 12 casillas contra un bot. Las reglas son funciones puras sin React ni DOM, el lanzamiento usa crypto.getRandomValues, el hueso está dibujado en SVG, el sonido se sintetiza en el navegador y la interfaz está en ruso, inglés y mongol.',
      result: 'La página responde 200 en su dirección pública y jugué una ronda en el navegador; pasan 44 de 44 pruebas, pero la distribución de los lanzamientos no está cubierta por ninguna prueba. El guardado en el servidor, el lanzamiento desde Telegram y el número de jugadores no están verificados, y no hay idioma buriato en la interfaz. Es una primera versión.',
    },
  },
};
