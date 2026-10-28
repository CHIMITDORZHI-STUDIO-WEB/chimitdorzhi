module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-palette',
    title: 'Бот и рассылки для художницы: как забрать проект у прошлого подрядчика',
    metaTitle: 'Кейс: перенос бота художницы от прошлого подрядчика',
    metaDescription: 'Прошлый подрядчик отдавал бот и рассылки художницы как есть, а её сайт не открывался. Что я проверил, что забрать до переноса и что предложил в PDF.',
    excerpt: 'У художницы был бот с рассылками и админкой, которые делал прошлый подрядчик. Он отказался от сопровождения и отдавал архив только на условиях «как есть», а сайт с админкой не открывался. Я проверил, что реально работает, составил список того, что забрать вместе с архивом, и собрал решение в PDF на 12 слайдов. Переноса пока не было.',
    tags: ['кейс', 'Telegram-бот', 'рассылки', 'передача проекта', 'художник'],
    cta: 'bots',
    relatedSlugs: ['kak-ne-stat-zalozhnikom-podryadchika-dostupy-repozitoriy-dokumentaciya-2026', 'chuzhoy-bot-ili-sayt-ne-rabotaet-audit-za-dva-chasa-2026', 'vozvrat-domena-u-byvshego-razrabotchika-keys-2026', 'pereezd-s-konstruktora-na-svoy-server-keys-2026'],
  },
  flagship: {
    name: 'Бот и рассылки для художницы',
    slug: 'bot-i-rassylki-hudozhnicy-perenos-predlozhenie-keys-2026',
    type: 'doc', done: false, delivered: true, intl: true,
    task: 'Художнице нужен бот с рассылками для гостей и коллекционеров. Прошлый подрядчик сдал проект позже срока, отказался от сопровождения и отдавал архив только на условиях «как есть». Сайт с админкой не открывался, ботов оказалось три.',
    solution: 'Проверил, что заявлено в передаче и что работает на деле. Составил список того, что забрать вместе с архивом: дамп базы с контактами, передачу ботов на аккаунт художницы, доступы к домену, Cloudflare и серверу. Предложил перенос на свой стек: один бот на четырёх языках, единая база гостей, мини-приложение с галереей и афишей, затем QR у картин, дропы принтов, клуб коллекционеров и события.',
    result: 'Решение в PDF на 12 слайдов передано, идёт обсуждение. Архив и доступы ещё не перенесены, бот на новом стеке не собран, запуска не было.',
    stack: ['Telegram Bot API', 'Telegram Mini App', 'PostgreSQL', 'HTML и CSS', 'Playwright', 'PDF'],
    en: {
      task: 'An artist needs a bot with newsletters for guests and collectors. The previous contractor delivered the project late, refused ongoing support and would hand over the archive only on an "as is" basis. The site with the admin panel did not open, and there turned out to be three bots.',
      solution: 'I checked what the handover claimed against what actually works. I listed what to take together with the archive: a database dump with contacts, transfer of the bots to the artist\'s account, access to the domain, Cloudflare and the server. I proposed moving to our own stack: one bot in four languages, a single guest database, a mini app with a gallery and an events calendar, then QR codes next to paintings, print drops, a collectors\' club and events.',
      result: 'The 12-slide PDF with the solution has been handed over and the discussion is ongoing. The archive and access have not been transferred yet, the bot on the new stack has not been built, and there has been no launch.',
    },
    es: {
      task: 'Una artista necesita un bot con envíos de mensajes para visitantes y coleccionistas. El contratista anterior entregó el proyecto con retraso, rechazó el mantenimiento y solo entregaba el archivo en condiciones de "tal cual". El sitio con el panel de administración no abría y resultó que había tres bots.',
      solution: 'Comprobé lo que declaraba la entrega frente a lo que funciona de verdad. Hice la lista de lo que hay que recibir junto con el archivo: un volcado de la base de datos con los contactos, la transferencia de los bots a la cuenta de la artista, el acceso al dominio, a Cloudflare y al servidor. Propuse pasar a nuestra propia tecnología: un bot en cuatro idiomas, una base única de visitantes, una mini app con galería y agenda, y después códigos QR junto a los cuadros, lanzamientos de láminas, un club de coleccionistas y eventos.',
      result: 'El PDF de 12 diapositivas con la solución está entregado y la conversación continúa. El archivo y los accesos aún no se han transferido, el bot con la nueva tecnología no está construido y no hubo lanzamiento.',
    },
  },
};
