module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-users-three',
    title: 'Crowdy: SaaS с ИИ-инструментами для каналов и чатов в MAX',
    metaTitle: 'Кейс: Crowdy, SaaS с ИИ-инструментами для MAX',
    metaDescription: 'Свой SaaS для MAX: рост по реф-ссылкам, ИИ-ответы в личке и под постами, рассылки подписчикам, автопостинг, модерация, аналитика. Рабочее демо с 22.10.',
    excerpt: 'Собственный продукт: кабинет, где владелец канала или чата в MAX подключает своего бота и включает семь модулей, от роста по реферальным ссылкам до ИИ-модерации. Всё работает только через бота клиента в его же чатах. Демо открыто на crowdy.chimitdorzhi.space, с живым ботом клиента сервис ещё не проверен.',
    tags: ['кейс', 'MAX', 'SaaS', 'ИИ-бот', 'модерация'],
    cta: 'bots',
    relatedSlugs: ['ai-bot-v-max-gigachat-yandexgpt-2026', 'limity-telegram-i-max-rassylka-vstala-2026', 'max-kanaly-rassylki-marketing-2026', 'sozdat-svoy-veb-servis-saas-2026'],
  },
  flagship: {
    name: 'Crowdy: ИИ-инструменты для MAX',
    slug: 'crowdy-ii-instrumenty-dlya-max-keys-2026',
    type: 'platform', done: false,
    task: 'Собственный SaaS для владельцев каналов и чатов в MAX: собрать в одном кабинете рост аудитории, ответы клиентам, рассылки, контент и модерацию. Работать только через бота самого клиента в его чатах, без чужих аккаунтов и чужой аудитории.',
    solution: 'Python, FastAPI и SQLite, один проект равен одному боту MAX. Семь модулей: рост по реферальным ссылкам и QR, ИИ-автоответчик в личке по базе знаний, ИИ-ответы под постами, рассылки только подписавшимся, автопостинг по контент-плану, модерация со стоп-словами и ИИ-фильтром спама, аналитика. ИИ подключается через любой OpenAI-совместимый адрес. Есть REST API, MCP-сервер на 10 инструментов, вебхуки с подписью HMAC, три тарифа и админка.',
    result: 'Рабочее демо на crowdy.chimitdorzhi.space с 22.10.2026. Самопроверка проходит 63 проверки, MAX и ИИ в ней заменены заглушками. С настоящим ботом клиента сервис вживую не проверен, встроенный ИИ выключен до подключения ключа, приём оплаты не подключён.',
    stack: ['Python', 'FastAPI', 'SQLite', 'Jinja2', 'httpx', 'MAX Bot API', 'OpenAI-совместимый API', 'MCP'],
    en: {
      task: 'My own SaaS for owners of channels and chats in MAX: bring audience growth, replies to customers, broadcasts, content and moderation into one dashboard. It works only through the client\'s own bot in the client\'s own chats, without other people\'s accounts or audiences.',
      solution: 'Python, FastAPI and SQLite; one project equals one MAX bot. Seven modules: growth through referral links and QR codes, an AI auto-responder in direct messages based on a knowledge base, AI replies under posts, broadcasts only to subscribers, autoposting from a content plan, moderation with stop words and an AI spam filter, and analytics. AI connects through any OpenAI-compatible endpoint. There is a REST API, an MCP server with 10 tools, HMAC-signed webhooks, three plans and an admin panel.',
      result: 'A working demo at crowdy.chimitdorzhi.space since 22 October 2026. The self-check passes 63 checks, with MAX and AI replaced by stubs. The service has not been tested live with a real client bot, the built-in AI is off until a key is added, and payment collection is not connected.',
    },
    es: {
      task: 'Un SaaS propio para propietarios de canales y chats en MAX: reunir en un solo panel el crecimiento de la audiencia, las respuestas a clientes, los envíos masivos, el contenido y la moderación. Funciona solo a través del bot del propio cliente en sus propios chats, sin cuentas ni audiencias ajenas.',
      solution: 'Python, FastAPI y SQLite; un proyecto equivale a un bot de MAX. Siete módulos: crecimiento con enlaces de referido y códigos QR, un contestador con IA en mensajes privados basado en una base de conocimiento, respuestas con IA bajo las publicaciones, envíos solo a suscriptores, publicación automática según un plan de contenido, moderación con palabras prohibidas y filtro de spam con IA, y analítica. La IA se conecta a través de cualquier dirección compatible con OpenAI. Hay una API REST, un servidor MCP con 10 herramientas, webhooks firmados con HMAC, tres tarifas y un panel de administración.',
      result: 'Una demo funcional en crowdy.chimitdorzhi.space desde el 22 de octubre de 2026. La autocomprobación pasa 63 verificaciones, con MAX y la IA sustituidos por simulaciones. El servicio no se ha probado en vivo con un bot real de un cliente, la IA integrada está desactivada hasta que se añada una clave y el cobro de pagos no está conectado.',
    },
  },
};
