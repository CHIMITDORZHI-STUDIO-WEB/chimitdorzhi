module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-wrench',
    title: 'Биржа срочных мастеров: бот, Mini App и цена по спросу',
    metaTitle: 'Кейс: биржа срочных мастеров, бот и Mini App в Telegram',
    metaDescription: 'Биржа срочных услуг для города: бот для мастеров, Mini App для заказчиков, цена по району, срочности и ночи, блокировки заказов, комиссия с баланса.',
    excerpt: 'Биржа срочных бытовых услуг для одного города: мастера работают в боте, заказчики в Mini App. Цена считается по спросу в районе, срочности и времени суток, заказ защищён от двойного захвата, комиссия списывается с баланса мастера. Есть стенд и лендинг, живого потока заказов пока нет.',
    tags: ['кейс', 'Telegram', 'Mini App', 'биржа услуг', 'динамическая цена', 'бот'],
    cta: 'bots',
    relatedSlugs: ['marketplace-bytovyh-uslug-na-dom-2027', 'marketplace-melkih-poruchenij-2027', 'zayavka-neskolko-predlozheniy-masterov-2027', 'birzha-truda-monogoroda-keys-2026'],
  },
  flagship: {
    name: 'Биржа срочных мастеров: бот и Mini App',
    slug: 'birzha-srochnyh-masterov-bot-mini-app-keys-2026',
    type: 'platform', done: false, delivered: false, metric: true,
    task: 'Заказчику нужна биржа срочных бытовых и ремонтных услуг для одного города: сантехник, электрик, сварщик, клининг, муж на час. Цена должна зависеть от спроса в районе, срочности и ночи, заказ должен доставаться ровно одному мастеру, а сервис зарабатывать комиссией с баланса мастера.',
    solution: 'Собрал по четырём шагам ТЗ: бот на aiogram для мастеров, Mini App для заказчиков, расчёт цены по районам и срочности с коэффициентами в Redis, захват заказа под блокировкой и условным обновлением в базе, баланс мастера с журналом движения денег, споры и отмены. К этому добавил лендинг с живым калькулятором цены. Перед показом заказчику провёл аудит из 29 пунктов и исправил его целиком.',
    result: 'Работающий стенд: основной сценарий от регистрации мастера до оценки заказа проверен вручную в живом боте, 33 автотеста проходят, аудит закрыт. Реального потока мастеров и заказов не было, заказчик пришлёт правки списком. Mini App на телефоне в Telegram, сжатие фото с настоящей камеры и контейнерный запуск не проверены.',
    stack: ['Python', 'FastAPI', 'aiogram', 'PostgreSQL', 'Redis', 'Alembic', 'Mini App на JS'],
    en: {
      task: 'The customer needed an exchange for urgent household and repair services in a single city: plumber, electrician, welder, cleaning, handyman. The price had to depend on demand in the district, urgency and night time, an order had to go to exactly one tradesperson, and the service had to earn through a commission on the tradesperson balance.',
      solution: 'I built it in the four steps of the specification: a bot on aiogram for tradespeople, a Mini App for customers, price calculation by district and urgency with coefficients in Redis, order claiming under a lock and a conditional database update, a tradesperson balance with a ledger of money movements, and disputes and cancellations. I added a landing page with a live price calculator. Before showing it to the customer I ran a 29-point audit and fixed all of it.',
      result: 'A working demo environment: the main scenario from tradesperson registration to order rating was checked by hand in the live bot, 33 automated tests pass and the audit is closed. There was no real flow of tradespeople and orders, and the customer will send corrections as a list. The Mini App on a phone inside Telegram, photo compression with a real camera and container launch are not verified.',
    },
    es: {
      task: 'El cliente necesitaba una bolsa de servicios domésticos y de reparación urgentes para una sola ciudad: fontanero, electricista, soldador, limpieza, manitas. El precio debía depender de la demanda en el distrito, la urgencia y la noche, un pedido debía llegar a un único profesional, y el servicio debía ganar con una comisión sobre el saldo del profesional.',
      solution: 'Lo construí en los cuatro pasos de la especificación: un bot con aiogram para los profesionales, una Mini App para los clientes, el cálculo del precio por distrito y urgencia con coeficientes en Redis, la toma del pedido bajo un bloqueo y una actualización condicional en la base de datos, un saldo del profesional con registro de movimientos de dinero, y disputas y cancelaciones. Añadí una página de aterrizaje con una calculadora de precio en vivo. Antes de enseñárselo al cliente hice una auditoría de 29 puntos y la corregí entera.',
      result: 'Un entorno de demostración que funciona: el escenario principal, desde el registro del profesional hasta la valoración del pedido, se comprobó a mano en el bot real, pasan 33 pruebas automáticas y la auditoría está cerrada. No hubo un flujo real de profesionales y pedidos, y el cliente enviará las correcciones en una lista. No se han verificado la Mini App en un teléfono dentro de Telegram, la compresión de fotos con una cámara real ni el arranque en contenedores.',
    },
  },
};
