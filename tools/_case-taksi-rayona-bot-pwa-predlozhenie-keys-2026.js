module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-taxi',
    title: 'Своя система такси для таксопарка района: боты, диспетчерская, водитель',
    metaTitle: 'Кейс: своя система заказа такси для таксопарка района',
    metaDescription: 'Таксопарк района ушёл с арендованной диспетчерской: заказ в ботах Telegram и MAX, кабинет диспетчера, приложение водителя. Работает с 19 октября 2026.',
    excerpt: 'Таксопарк небольшого района платил подписку за коробочную диспетчерскую. Сначала я показал предложение и демо, в октябре собрал свою систему на сервере заказчика: заказ в мини-приложениях Telegram и MAX и в PWA, автоматическая раздача, кабинет диспетчера и руководителя, приложение водителя для Android. С 19 октября она работает на домене парка, с 21 октября на линии живые водители.',
    dateModified: '2026-10-28',
    tags: ['кейс', 'такси', 'бот в MAX', 'Telegram Mini App', 'диспетчерская'],
    cta: 'bots',
    relatedSlugs: ['svoe-taksi-bez-agregatora-max-2026', 'it-dlya-taksoparka-2026', 'bot-vmesto-mobilnogo-prilozheniya-2026', 'max-mini-apps-2026'],
  },
  flagship: {
    name: 'Своя система такси для таксопарка района',
    slug: 'taksi-rayona-bot-pwa-predlozhenie-keys-2026',
    type: 'platform', done: true, delivered: true,
    task: 'Таксопарк небольшого района платит ежемесячную подписку за коробочную диспетчерскую, заказы и база пассажиров живут у поставщика. Нужна своя система: заказ без установки приложения, автоматическая раздача машин, кабинет диспетчера и приложение водителя.',
    solution: 'Сервер на Node.js, Fastify и PostgreSQL на хостинге заказчика: заказ в мини-приложениях Telegram и MAX, в PWA и голосом в боте, раздача по очереди стоянок и зонам с режимом часа пик, атомарное принятие заказа, контроль отмен, кабинет диспетчера и руководителя, Android-приложение водителя с фоновой геопозицией. Зоны перенесены из прежней системы, пассажирам без мессенджера звонит робот через облачную АТС парка.',
    result: 'Работает с 19 октября 2026 на домене парка, с 21 октября на линии живые водители. Нагрузочный прогон на копии базы: 30 водителей и 20 заказов розданы за 14 секунд без двойных назначений. Безналичная оплата не подключена, это следующий этап.',
    stack: ['Node.js', 'Fastify', 'PostgreSQL', 'Telegram Mini App', 'MAX', 'PWA', 'Flutter'],
    en: {
      task: 'A taxi fleet in a small district pays a monthly subscription for an off-the-shelf dispatch platform, and its orders and passenger base live with the vendor. They needed their own system: ordering without installing an app, automatic car assignment, a dispatcher workspace and a driver app.',
      solution: 'A Node.js, Fastify and PostgreSQL server on the client\'s hosting: ordering in Telegram and MAX mini apps, in a PWA and by voice message in the bot, assignment by taxi-stand queue and zones with a rush-hour mode, atomic order acceptance, cancellation control, a dispatcher and manager workspace, and an Android driver app with background location. Zones were moved over from the previous system, and passengers without a messenger get a robot call through the fleet\'s cloud PBX.',
      result: 'Live since 19 October 2026 on the fleet\'s domain, with real drivers on the line since 21 October. A load run on a copy of the database: 30 drivers and 20 orders assigned in 14 seconds with no double assignments. Card payment is not connected yet; it is the next stage.',
    },
    es: {
      task: 'Una flota de taxis de un distrito pequeño paga una suscripción mensual por una plataforma de despacho en caja, y sus pedidos y su base de pasajeros están en manos del proveedor. Necesitaba un sistema propio: pedir sin instalar una aplicación, asignación automática de coches, un puesto para el despachador y una app para el conductor.',
      solution: 'Un servidor en Node.js, Fastify y PostgreSQL en el hosting del cliente: pedidos en las mini apps de Telegram y MAX, en una PWA y por mensaje de voz en el bot, asignación por cola de paradas y zonas con modo de hora punta, aceptación atómica del pedido, control de cancelaciones, un panel para el despachador y la dirección, y una app Android para el conductor con geolocalización en segundo plano. Las zonas se trasladaron del sistema anterior, y a los pasajeros sin mensajería los llama un robot a través de la centralita en la nube de la flota.',
      result: 'En funcionamiento desde el 19 de octubre de 2026 en el dominio de la flota, con conductores reales en línea desde el 21 de octubre. Una prueba de carga sobre una copia de la base: 30 conductores y 20 pedidos asignados en 14 segundos sin asignaciones dobles. El pago con tarjeta aún no está conectado; es la siguiente etapa.',
    },
  },
};
