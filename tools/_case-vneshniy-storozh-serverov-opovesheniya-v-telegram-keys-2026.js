module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-heartbeat',
    title: 'Внешний сторож серверов: оповещение в Telegram за 10 минут',
    metaTitle: 'Кейс: внешний сторож серверов с оповещением в Telegram',
    metaDescription: 'Свой инструмент студии: проверка сайтов снаружи каждые 5 минут, одно сообщение при падении и одно при возврате с длительностью. Родился из зависания сервера.',
    excerpt: 'Сервер завис на несколько часов, а о проблеме мне первым сообщил клиент. После этого я собрал внешнего сторожа: он каждые пять минут проверяет сайты с другой машины и пишет в Telegram один раз при падении и один раз при возврате. Это мой собственный инструмент студии, он работает.',
    tags: ['кейс', 'мониторинг', 'Telegram', 'серверы', 'Python', 'собственный продукт'],
    cta: 'auto',
    relatedSlugs: ['sayt-upal-monitoring-sayta-i-domena-2026', 'uptime-kuma-monitoring-dostupnosti-2026', 'otkazoustoychivost-monitoring-bekapy-2026', 'cronmaster-veb-interfeys-dlya-zadaniy-cron-na-servere-2026'],
  },
  flagship: {
    name: 'Внешний сторож серверов',
    slug: 'vneshniy-storozh-serverov-opovesheniya-v-telegram-keys-2026',
    type: 'ai', done: true, delivered: false,
    task: 'Сервер завис на несколько часов, и о проблеме первым узнал клиент. Нужна проверка снаружи, которая сама заметит падение и сообщит сразу, без потока одинаковых сообщений.',
    solution: 'Небольшой скрипт на Python запускается по таймеру на отдельной машине каждые 5 минут, параллельно проверяет сервер и сайты, повторяет неудачную пробу через 5 секунд и пишет в Telegram-бот студии одно сообщение при падении и одно при возврате с длительностью простоя.',
    result: 'Сторож работает с 14 ноября, тестовое сообщение дошло. Слепое пятно известно: если упадёт сама машина со сторожем, оповещения не будет. Список сайтов лежит в одном массиве, отключается одной командой.',
    stack: ['Python', 'systemd', 'Telegram Bot API'],
    en: {
      task: 'A server hung for several hours and the client was the first to find out. I needed an outside check that notices a failure by itself and reports at once, without a stream of identical messages.',
      solution: 'A small Python script runs on a timer on a separate machine every 5 minutes, checks the server and the sites in parallel, repeats a failed probe after 5 seconds and writes to the studio\'s Telegram bot: one message on failure and one on recovery with the length of the outage.',
      result: 'The watcher has been running since November 14 and a test message was delivered. The blind spot is known: if the machine hosting the watcher itself goes down, no alert is sent. The site list is a single array, and one command turns it off.',
    },
    es: {
      task: 'Un servidor se colgó durante varias horas y el cliente fue el primero en enterarse. Hacía falta una comprobación desde fuera que detecte la caída por sí sola y avise de inmediato, sin una cascada de mensajes idénticos.',
      solution: 'Un pequeño script en Python se ejecuta con un temporizador en una máquina aparte cada 5 minutos, comprueba el servidor y los sitios en paralelo, repite una prueba fallida a los 5 segundos y escribe en el bot de Telegram del estudio: un mensaje al caer y otro al volver con la duración de la interrupción.',
      result: 'El vigilante funciona desde el 14 de noviembre y un mensaje de prueba llegó correctamente. El punto ciego es conocido: si cae la propia máquina del vigilante, no habrá aviso. La lista de sitios está en un único arreglo y se desactiva con un solo comando.',
    },
  },
};
