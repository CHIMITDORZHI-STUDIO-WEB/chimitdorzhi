module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-ticket',
    title: 'Платформа мероприятий в Telegram: билеты с QR, оплата в USDT и нетворкинг',
    metaTitle: 'Кейс: платформа мероприятий с QR-билетами и USDT',
    metaDescription: 'Мини-приложение Telegram для организатора деловых событий: афиша, билеты с QR, оплата в USDT, визитки гостей, партнёрка в две линии. Демо, 45 проверок.',
    excerpt: 'Организатор деловых мероприятий продаёт билеты через чаты и несколько разрозненных сайтов. Я собрал платформу в Telegram: афиша, заказ с лимитом мест, оплата в USDT, электронные билеты с QR, нетворкинг гостей и партнёрская программа. С 26 октября это рабочее демо, настоящих продаж ещё не было.',
    tags: ['кейс', 'мероприятия', 'Telegram', 'мини-приложение', 'билеты'],
    cta: 'bots',
    relatedSlugs: ['bot-registracii-na-meropriyatie-2026', 'ai-networking-na-konferencii-2026', 'dohodimost-do-meropriyatiya-2026', 'lichnyy-kabinet-partnera-2026'],
  },
  flagship: {
    name: 'Платформа мероприятий: QR-билеты и USDT',
    slug: 'platforma-meropriyatiy-bilety-qr-usdt-keys-2026',
    type: 'platform', done: false, delivered: false, intl: true, metric: true,
    task: 'Организатор деловых мероприятий в нескольких странах живёт на чатах событий и разрозненных сайтах. Нужен один вход для гостя на русском и английском: афиша, билеты, рассылки и партнёрская программа в две линии.',
    solution: 'Презентация на 13 слайдов и фирменный стиль в виде токенов, затем мини-приложение Telegram на FastAPI, SQLite и чистом JS. Афиша с категориями билетов и лимитом мест, оплата в USDT с проверкой хэша в панели, электронные билеты с QR и отметкой на входе, визитки гостей по согласию, партнёрка с выводом, рассылки и напоминания за сутки и за 3 часа.',
    result: 'Рабочее демо с 26.10.2026, стенд отвечает 200 (проверено 28.10). Сквозной тест 45 из 45 проверок. Настоящих продаж не было, бот ждёт токен, кошелька для оплаты и раздела спикеров пока нет.',
    stack: ['Python', 'FastAPI', 'SQLite', 'Telegram Mini App', 'JS без сборки', 'USDT'],
    en: {
      task: 'An organizer of business events in several countries runs everything through event chats and scattered websites. Guests need a single entry point in Russian and English: event listings, tickets, mailings and a two-level partner program.',
      solution: 'A 13-slide presentation and a brand style expressed as tokens, then a Telegram mini app on FastAPI, SQLite and plain JS. Event listings with ticket categories and seat limits, USDT payment with a transaction hash checked in the admin panel, e-tickets with QR codes and check-in at the door, guest business cards shared by consent, a partner program with withdrawals, mailings and reminders one day and 3 hours before the start.',
      result: 'A working demo since 26 October 2026; the stand returns 200 (checked on 28 October). The end-to-end test passes 45 of 45 checks. There have been no real sales yet: the bot is waiting for its token, and there is no payment wallet or speakers section so far.',
    },
    es: {
      task: 'Un organizador de eventos de negocios en varios países lo gestiona todo a través de chats de eventos y sitios web dispersos. Los invitados necesitan una sola entrada en ruso e inglés: cartelera, entradas, envíos de mensajes y un programa de socios de dos niveles.',
      solution: 'Una presentación de 13 diapositivas y un estilo de marca expresado en tokens, y después una mini-app de Telegram con FastAPI, SQLite y JS puro. Cartelera con categorías de entradas y límite de plazas, pago en USDT con el hash de la transacción verificado en el panel, entradas electrónicas con código QR y control de acceso en la puerta, tarjetas de visita de los invitados compartidas con su consentimiento, un programa de socios con retiros, envíos de mensajes y recordatorios un día y 3 horas antes del inicio.',
      result: 'Demo funcional desde el 26 de octubre de 2026; el entorno responde 200 (comprobado el 28 de octubre). La prueba de extremo a extremo pasa 45 de 45 comprobaciones. Todavía no ha habido ventas reales: el bot espera su token y aún no hay billetera de pago ni sección de ponentes.',
    },
  },
};
