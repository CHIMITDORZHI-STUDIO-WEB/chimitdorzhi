module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-robot',
    title: 'ИИ-агент студии: свой кабинет, база знаний, подключения и заявки',
    metaTitle: 'Кейс: ИИ-агент студии с кабинетом и базой знаний',
    metaDescription: 'Собственный ИИ-агент: кабинет, знания, каналы и Авито, сторож входящих, кредиты, лендинг. К 17 ноября: сферы бизнеса, интервью, контакты. Запущено у себя.',
    dateModified: '2026-11-17',
    excerpt: 'Собственный продукт студии: личный ИИ-агент в Telegram, который читает входящие в нескольких каналах и предлагает ответы моим голосом. К нему я собрал кабинет, каталог подключений, кредиты, презентацию, лендинг с формой заявок и пульт для партнёров. Работает у меня с 2 ноября, к 17 ноября добавил сферы бизнеса, интервью владельца, паузу по переписке и вкладку «Контакты». Платящих заказчиков пока нет.',
    tags: ['кейс', 'ИИ-агент', 'Telegram', 'автоматизация', 'собственный продукт'],
    cta: 'auto',
    relatedSlugs: ['ai-agenty-v-biznese-2026', 'pamyat-ii-agentov-mezhdu-sessiyami-2026', 'granica-avtonomnosti-ii-agenta-2026', 'ai-assistent-telegram-business-2027'],
  },
  flagship: {
    name: 'ИИ-агент студии: кабинет, знания, подключения',
    slug: 'ii-agent-studii-kabinet-baza-znaniy-podklyucheniya-keys-2026',
    type: 'ai', done: true,
    task: 'Собственный продукт студии: личный ИИ-агент, который следит за входящими в мессенджерах, почте и на Авито, знает мои дела и пишет моим голосом, но ничего не отправляет без моего «да». Из него нужно собрать витрину и основу для агентов заказчиков.',
    solution: 'Агент в Telegram с MCP-инструментами для Telegram, MAX, ВКонтакте, почты и Авито, сторож входящих, веб-кабинет (знания, стиль, дашборд, подключение каналов), кредиты с экономным режимом, PDF-презентация, лендинг ai.chimitdorzhi.tech с каталогом подключений и формой заявок и пульт студии, где партнёры видят своих заказчиков только на чтение.',
    result: 'Запущено у себя: агент работает с 2 ноября 2026, кабинет, пульт и лендинг в сети. Платящих заказчиков и кейсов клиентов пока нет, цифр результата нет. Сферы бизнеса, интервью, пауза и лимит сотрудников выложены 13 ноября, поздравления во ВКонтакте с 10 ноября выключены по умолчанию. Вкладка «Контакты» и память без срока проверены на копии, на живых агентах не включены. Авито проверено на имитации API, а входящие из MAX и ВКонтакте, почта и загрузка переписки Telegram вживую не проверялись.',
    stack: ['Python', 'aiohttp', 'SQLite', 'Telegram Bot API', 'MCP', 'Caddy', 'HTML/JS'],
    en: {
      task: 'A studio product of my own: a personal AI agent that watches incoming messages in messengers, email and Avito, knows my affairs and writes in my voice, but sends nothing without my yes. It has to become a showcase and a base for customers\' agents.',
      solution: 'An agent in Telegram with MCP tools for Telegram, MAX, VKontakte, email and Avito, an inbox watcher, a web cabinet (knowledge, style, dashboard, channel connection), credits with an economy mode, a PDF presentation, the ai.chimitdorzhi.tech landing with a catalogue of integrations and a lead form, and a studio console where partners see their own customers read-only.',
      result: 'Running for myself: the agent has worked since 2 November 2026, and the cabinet, console and landing are online. There are no paying customers, no client cases and no result figures yet. On 13 November I added business-sphere templates, an owner interview, a chat pause and a staff message limit; birthday greetings in VKontakte (since 10 November) are off by default. The "Contacts" tab and unlimited memory were checked on a copy and are not enabled on live agents. Avito was checked against a simulated API; incoming messages from MAX and VKontakte, email and the Telegram history import were not tested live.',
    },
    es: {
      task: 'Un producto propio del estudio: un agente de IA personal que vigila los mensajes entrantes en mensajeros, correo y Avito, conoce mis asuntos y escribe con mi voz, pero no envía nada sin mi sí. Debe servir de escaparate y de base para los agentes de los clientes.',
      solution: 'Un agente en Telegram con herramientas MCP para Telegram, MAX, VKontakte, correo y Avito, un vigilante de entrantes, un panel web (conocimiento, estilo, tablero, conexión de canales), créditos con modo económico, una presentación en PDF, la landing ai.chimitdorzhi.tech con catálogo de integraciones y formulario de solicitudes, y una consola del estudio donde los socios ven a sus clientes solo en modo lectura.',
      result: 'Funciona para mí: el agente trabaja desde el 2 de noviembre de 2026 y el panel, la consola y la landing están en línea. Todavía no hay clientes de pago, casos de clientes ni cifras de resultado. El 13 de noviembre añadí plantillas por sector de negocio, una entrevista al dueño, una pausa desde el chat y un límite de mensajes del personal; las felicitaciones de cumpleaños en VKontakte (desde el 10 de noviembre) están desactivadas por defecto. La pestaña «Contactos» y la memoria sin caducidad se probaron en una copia y no están activadas en los agentes en vivo. Avito se probó con una API simulada; los mensajes entrantes de MAX y VKontakte, el correo y la importación del historial de Telegram no se probaron en vivo.',
    },
  },
};
