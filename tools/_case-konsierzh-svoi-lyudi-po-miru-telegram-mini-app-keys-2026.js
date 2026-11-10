module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-globe-hemisphere-west',
    title: 'Консьерж «свои люди по миру»: бот, закрытый канал и мини-приложение',
    metaTitle: 'Кейс: консьерж для жизни за границей в Telegram',
    metaDescription: 'Бот, закрытый канал, мини-приложение и админка: каталог сообществ по странам, заявки на визы и переезд, баллы за друзей. Рабочее демо, запуска на людей не было.',
    excerpt: 'Совместный продукт с партнёром: консьерж для тех, кто живёт или переезжает за границу. Бот выдаёт доступ в закрытый канал, мини-приложение показывает направления и каталог сообществ по странам, админка управляет всем без программиста. Работает как демо, на живых людей продукт ещё не запускали.',
    tags: ['кейс', 'Telegram', 'мини-приложение', 'закрытый канал', 'админка', 'сообщества'],
    cta: 'bots',
    relatedSlugs: ['interfeys-v-chate-vmesto-mini-app-keys-2026', 'telegram-kanal-zayavki-knopka-pod-postom-bot-2026', 'referalnaya-igra-privedi-druga-2026', 'magazin-v-telegram-mini-app-2026'],
  },
  flagship: {
    name: 'Консьерж «свои люди по миру»: бот, канал, мини-приложение',
    slug: 'konsierzh-svoi-lyudi-po-miru-telegram-mini-app-keys-2026',
    type: 'platform', done: false,
    task: 'Совместный с партнёром продукт: консьерж для тех, кто живёт или переезжает за границу. Нужен вход без паролей, закрытый канал по подписке и номеру, заявки на услуги, каталог сообществ по странам и баллы за приглашённых друзей, а партнёру нужна админка, чтобы вести всё самой.',
    solution: 'Бот и канал в Telegram, мини-приложение с входом по подписи Telegram и вход на сайте через подтверждение в боте. Каталог сообществ по странам с предложениями от людей и модерацией, заявки с журналом статусов, рассылки через очередь, баллы только за друга, который в канале и оставил номер. Админка открывается одноразовой ссылкой из бота.',
    result: 'Работает как демо: 54 проверки логики, ноль нарушений axe-core на всех экранах в обеих темах, живой путь через боевой API 11 из 11 (замер 08.11.2026). Канал пуст, каталог на боевом сервере без сообществ, запуска на людей не было. Запуск мини-приложения на живом телефоне внутри Telegram не проверен.',
    stack: ['Python', 'FastAPI', 'SQLite', 'Telegram Bot API', 'TypeScript', 'Vite', 'Caddy'],
    intl: true,
    en: {
      task: 'A product built jointly with a partner: a concierge for people who live in or are moving abroad. It needs passwordless sign-in, a closed channel gated by subscription and phone number, service requests, a catalogue of communities by country and points for invited friends, while the partner needs an admin panel to run it without a developer.',
      solution: 'A bot and a channel in Telegram, a mini app that signs in by the Telegram signature, and a website sign-in confirmed through the bot. A catalogue of communities by country with suggestions from users and moderation, requests with a status log, broadcasts through a queue, and points only for a friend who is in the channel and has left a number. The admin panel opens through a one-time link from the bot.',
      result: 'It works as a demo: 54 logic checks, zero axe-core violations on every screen in both themes, the live path through the production API 11 of 11 (measured on 8 November 2026). The channel is empty, the catalogue on the production server has no communities, and there has been no launch to real people. Launching the mini app on a live phone inside Telegram is not verified.',
    },
    es: {
      task: 'Un producto hecho junto con una socia: un conserje para quienes viven o se mudan al extranjero. Hace falta acceso sin contraseñas, un canal cerrado con suscripción y número de teléfono, solicitudes de servicios, un catálogo de comunidades por país y puntos por amigos invitados, y la socia necesita un panel de administración para llevarlo sin programador.',
      solution: 'Un bot y un canal en Telegram, una mini-app con acceso por la firma de Telegram y acceso en la web confirmado desde el bot. Un catálogo de comunidades por país con propuestas de los usuarios y moderación, solicitudes con registro de estados, envíos masivos mediante una cola y puntos solo por el amigo que está en el canal y dejó su número. El panel de administración se abre con un enlace de un solo uso desde el bot.',
      result: 'Funciona como demo: 54 comprobaciones de lógica, cero infracciones de axe-core en todas las pantallas en ambos temas, el recorrido real por la API de producción 11 de 11 (medido el 8 de noviembre de 2026). El canal está vacío, el catálogo en el servidor de producción no tiene comunidades y no ha habido lanzamiento a personas reales. No se ha verificado el arranque de la mini-app en un teléfono real dentro de Telegram.',
    },
  },
};
