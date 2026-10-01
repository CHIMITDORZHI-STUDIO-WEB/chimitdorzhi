module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-house-line',
    title: 'Kinly: семейный ИИ-ассистент в Telegram и MAX на одном коде',
    metaTitle: 'Кейс: семейный ИИ-ассистент Kinly в Telegram и MAX',
    metaDescription: 'Свой семейный ассистент: дела из голоса, фото и пересылок, напоминания, игра для детей. Один код для Telegram и MAX, 515 автотестов, работает.',
    excerpt: 'Собственный продукт: бот и мини-приложение, где семья вводит дела голосом, фото и пересылкой, а ИИ раскладывает их по задачам, покупкам и расходам. Один код обслуживает Telegram и MAX. Система работает, настоящей аудитории пока нет.',
    tags: ['кейс', 'Telegram', 'MAX', 'ИИ-бот', 'мини-приложение'],
    cta: 'bots',
    relatedSlugs: ['ai-bot-v-max-gigachat-yandexgpt-2026', 'ii-razbiraet-cheki-v-tablicu-2026', 'interfeys-v-chate-vmesto-mini-app-keys-2026', 'ii-iz-golosovyh-v-crm-2026'],
  },
  flagship: {
    name: 'Kinly: семейный ассистент в Telegram и MAX',
    slug: 'kinly-semeynyy-assistent-telegram-max-keys-2026',
    type: 'bot', done: true, metric: true,
    task: 'Собственный продукт по идее знакомого: семья должна вводить дела обычным сообщением, а не заполнять приложение. Голос, фото чека, пересланный текст превращаются в задачу, покупку, расход или напоминание нужному человеку.',
    solution: 'Бот на aiogram и FastAPI с SQLite в одном процессе, мини-приложение на чистом JS и модели OpenAI для разбора ввода. Переводчик превращает события MAX в обновления Telegram, поэтому один код обслуживает оба мессенджера, а семья может быть смешанной. Есть роли, игра для детей, режим бабушки, расходы, документы и режим «Работа» для небольшой команды.',
    result: 'Работает: адрес отвечает 200, 139 HTTP-методов, 48 таблиц, 11 наборов тестов с 515 проверками без ошибок в прогоне от 02.10.2026. Реальной аудитории и цифр использования нет, тестируют знакомые. Голосовое из MAX с телефона и мини-приложение MAX на телефоне не проверены.',
    stack: ['Python', 'aiogram', 'FastAPI', 'SQLite', 'OpenAI API', 'JS мини-приложение'],
    en: {
      task: 'My own product, based on an idea from an acquaintance: a family should enter chores through ordinary messages instead of filling in an app. A voice note, a photo of a receipt or a forwarded text turns into a task, a purchase, an expense or a reminder for the right person.',
      solution: 'A bot built on aiogram and FastAPI with SQLite in a single process, a mini app in plain JS and OpenAI models to parse input. A translator turns MAX events into Telegram updates, so one codebase serves both messengers and a family can be mixed. It has roles, a game for kids, a grandmother mode, expenses, documents and a Work mode for a small team.',
      result: 'It is live: the address returns 200, 139 HTTP methods, 48 tables, and 11 test suites with 515 checks passed with no failures in the run of 2 October 2026. There is no real audience and no usage numbers; acquaintances are testing it. A voice message from MAX on a phone and the MAX mini app on a phone are not verified.',
    },
    es: {
      task: 'Un producto propio, nacido de la idea de un conocido: una familia debe introducir sus tareas con un mensaje normal en lugar de rellenar una aplicación. Una nota de voz, la foto de un ticket o un texto reenviado se convierten en una tarea, una compra, un gasto o un recordatorio para la persona adecuada.',
      solution: 'Un bot con aiogram y FastAPI y SQLite en un solo proceso, una mini-app en JS puro y modelos de OpenAI para interpretar lo que se escribe. Un traductor convierte los eventos de MAX en actualizaciones de Telegram, así que un mismo código sirve a ambos mensajeros y una familia puede ser mixta. Incluye roles, un juego para niños, un modo abuela, gastos, documentos y un modo Trabajo para un equipo pequeño.',
      result: 'Funciona: la dirección responde 200, hay 139 métodos HTTP, 48 tablas y 11 conjuntos de pruebas con 515 comprobaciones sin fallos en la ejecución del 2 de octubre de 2026. No hay audiencia real ni cifras de uso; lo prueban conocidos. No se ha verificado un mensaje de voz desde MAX en un teléfono ni la mini-app de MAX en un teléfono.',
    },
  },
};
