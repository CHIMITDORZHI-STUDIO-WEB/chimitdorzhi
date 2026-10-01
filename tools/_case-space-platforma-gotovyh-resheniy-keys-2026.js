module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-rocket-launch',
    title: 'SPACE: моя платформа готовых решений для микробизнеса с входом через Telegram',
    metaTitle: 'Кейс SPACE: платформа готовых решений с входом через Telegram',
    metaDescription: 'Собственная платформа с входом через Telegram: геймификация, рассылки и цифровой сотрудник. Что построил, что убрал и в каком состоянии продукт сегодня.',
    excerpt: 'Мой собственный продукт: платформа, где предприниматель входит через Telegram и подключает готовые решения сам. Разбираю, что построил за август и сентябрь, почему сузил продукт и что работает на корне домена сегодня. Как кабинет платформа сейчас не работает.',
    tags: ['кейс', 'SaaS', 'Telegram', 'платформа', 'цифровой сотрудник'],
    cta: 'bots',
    relatedSlugs: ['geymifikaciya-saas-2026', 'ai-assistent-telegram-business-2027', 'zarabotok-na-mikro-saas-2026', 'skolko-stoit-veb-prilozhenie-2026'],
  },
  flagship: {
    name: 'SPACE: платформа готовых решений',
    slug: 'space-platforma-gotovyh-resheniy-keys-2026',
    type: 'platform', done: false,
    task: 'Собственный продукт: платформа, где предприниматель входит через Telegram и сам подключает готовые решения без разработчика. Геймификация бота, рассылки, партнёрка, затем цифровой сотрудник для ответов клиентам.',
    solution: 'Вход через Telegram с серверной проверкой подписи HMAC-SHA256, FastAPI и SQLite с плоской схемой под переезд на PostgreSQL. Модули геймификации и рассылок, партнёрская программа баллами, агент с черновиками и журналом действий без хранения переписки. На корне домена лендинг студии из генератора, русская и английская версии.',
    result: 'Построено: около 27 000 строк Python, 57 таблиц, 187 маршрутов, 636 проверок без провалов в локальном прогоне. Как кабинет платформа сейчас не работает, корень домена отдаёт лендинг студии, оплаты в платформе нет.',
    stack: ['Python', 'FastAPI', 'SQLite', 'Telegram Login', 'nginx', 'Playwright'],
    en: {
      task: 'My own product: a platform where a business owner signs in with Telegram and switches on ready-made solutions without a developer. Bot gamification, mailings, a referral program, and later a digital employee that answers customers.',
      solution: 'Telegram sign-in with server-side HMAC-SHA256 signature checks, FastAPI and SQLite with a flat schema that moves to PostgreSQL. Gamification and mailing modules, a points-based referral program, and an agent with drafts and an action log that does not store conversations. The domain root serves the studio landing page, built by a generator in Russian and English.',
      result: 'Built: about 27,000 lines of Python, 57 tables, 187 routes, 636 checks with no failures in a local run. The platform is not running as a cabinet now; the domain root serves the studio landing page, and the platform has no payments.',
    },
    es: {
      task: 'Un producto propio: una plataforma donde el dueño de un negocio entra con Telegram y activa soluciones ya hechas sin un desarrollador. Gamificación de bots, envíos masivos, programa de referidos y, más adelante, un empleado digital que responde a los clientes.',
      solution: 'Acceso con Telegram y verificación de la firma HMAC-SHA256 en el servidor, FastAPI y SQLite con un esquema plano que pasa a PostgreSQL sin cambiar la lógica. Módulos de gamificación y envíos, programa de referidos con puntos y un agente con borradores y registro de acciones que no guarda las conversaciones. En la raíz del dominio hay la página de la agencia, generada en ruso e inglés.',
      result: 'Construido: unas 27 000 líneas de Python, 57 tablas, 187 rutas y 636 comprobaciones sin fallos en una ejecución local. La plataforma ya no funciona como panel; la raíz del dominio muestra la página de la agencia y la plataforma no tiene pagos.',
    },
  },
};
