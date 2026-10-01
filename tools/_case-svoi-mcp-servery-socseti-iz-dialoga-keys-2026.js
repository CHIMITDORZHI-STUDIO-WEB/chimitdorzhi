module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-plugs-connected',
    title: 'Свои MCP-серверы: Одноклассники, ТенЧат, ВКонтакте и Postmypost из диалога с ИИ',
    metaTitle: 'Кейс: свои MCP-серверы для соцсетей из диалога с ИИ',
    metaDescription: 'Четыре личных MCP-сервера для ОК, ТенЧата, ВКонтакте и Postmypost: белые списки, лимиты, пауза и черновики. Что работает, а что ограничено площадками.',
    excerpt: 'Четыре собственных MCP-сервера, через которые ИИ читает ленты и переписку, готовит черновики и отправляет по моей команде. У каждой площадки свои ограничения и свои защиты. Часть путей неофициальная, и это риск.',
    tags: ['кейс', 'MCP', 'ИИ-агенты', 'соцсети', 'автопостинг'],
    cta: 'bots',
    relatedSlugs: ['mcp-model-context-protocol-2026', 'granica-avtonomnosti-ii-agenta-2026', 'ai-assistent-telegram-business-2027', 'postiz-avtoposting-socseti-2026'],
  },
  flagship: {
    name: 'MCP-серверы для соцсетей из диалога с ИИ',
    slug: 'svoi-mcp-servery-socseti-iz-dialoga-keys-2026',
    type: 'ai', done: false,
    task: 'Автор ведёт несколько соцсетей и хочет работать с ними из диалога с ИИ: читать входящие, готовить ответы, ставить посты. Главное условие: ИИ не должен писать людям что попало и сколько попало.',
    solution: 'Четыре MCP-сервера на Python: Одноклассники, ТенЧат, ВКонтакте и Postmypost. Чтение свободное, запись через проверку: белый список контактов, лимиты в час и в сутки, пауза, журнал, черновик по умолчанию и пробный прогон рассылки.',
    result: 'Собрано 105 инструментов, статусы ТенЧата, ОК и Postmypost и профиль ВКонтакте отвечают на живые запросы. В бою не запущено: отправка в ОК не проверена, доступ ко ВКонтакте закрывался в сентябре, а ТенЧат работает через внутреннее неофициальное API, это риск.',
    stack: ['Python', 'MCP (FastMCP)', 'Playwright', 'API ВКонтакте', 'API Postmypost'],
    en: {
      task: 'The author runs several social accounts and wants to work with them from a conversation with an AI: read incoming messages, draft replies, schedule posts. The key requirement is that the AI must not write to people whatever and however much it likes.',
      solution: 'Four MCP servers in Python: Odnoklassniki, TenChat, VKontakte and Postmypost. Reading is open, writing goes through checks: a contact whitelist, hourly and daily limits, a pause switch, an action log, drafts by default and a dry run for bulk messages.',
      result: 'Built: 105 tools, and the status calls for TenChat, Odnoklassniki and Postmypost, plus a VKontakte profile read, answer live requests. Not run in production: sending in Odnoklassniki is unverified, VKontakte access was closed for a while in September, and TenChat runs on an internal unofficial API, which is a risk.',
    },
    es: {
      task: 'El autor lleva varias redes sociales y quiere trabajar con ellas desde una conversación con una IA: leer mensajes entrantes, preparar respuestas y programar publicaciones. La condición principal es que la IA no escriba a la gente cualquier cosa ni en cualquier cantidad.',
      solution: 'Cuatro servidores MCP en Python: Odnoklassniki, TenChat, VKontakte y Postmypost. La lectura es libre y la escritura pasa por controles: lista blanca de contactos, límites por hora y por día, pausa, registro de acciones, borrador por defecto y simulacro previo en los envíos masivos.',
      result: 'Construido: 105 herramientas; las consultas de estado de TenChat, Odnoklassniki y Postmypost y la lectura del perfil de VKontakte responden a peticiones reales. No está en producción: el envío en Odnoklassniki no se ha verificado, el acceso a VKontakte estuvo cerrado en septiembre y TenChat funciona con una API interna no oficial, lo que supone un riesgo.',
    },
  },
};
