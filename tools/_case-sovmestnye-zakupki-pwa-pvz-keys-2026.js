module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-package',
    title: 'Совместные закупки в одном PWA: заказ, сборка и выдача в пункте',
    metaTitle: 'Кейс: PWA для совместных закупок с пунктами выдачи',
    metaDescription: 'PWA для совместных закупок: город, пункт выдачи, заказ, общий лимит на всех. Пять ролей команды, посты в каналы, сборка и выдача. Система в бою.',
    excerpt: 'Организатор совместных закупок собирал заявки в трёх мессенджерах. Я собрал одно PWA: город, пункт выдачи, заказ и общий лимит позиции на всех, плюс закупщик, сборщик и франчайзи. Система работает, но MAX и онлайн-оплата не подключены.',
    tags: ['кейс', 'PWA', 'совместные закупки', 'платформа', 'Telegram и ВК'],
    cta: 'site',
    relatedSlugs: ['pwa-iz-sayta-za-vyhodnye-2026', 'max-mini-apps-2026', 'telegram-chat-vk-soobshchestvo-2026', 'max-kanaly-rassylki-marketing-2026'],
  },
  flagship: {
    name: 'PWA совместных закупок с пунктами выдачи',
    slug: 'sovmestnye-zakupki-pwa-pvz-keys-2026',
    type: 'platform', done: true,
    task: 'Организатор совместных закупок собирал заявки в трёх мессенджерах и сводил их руками. Нужна одна ссылка: город, пункт выдачи, заказ, общий лимит позиции на всех, плюс рабочие места закупщика, сборщика и пунктов.',
    solution: 'PWA на Node.js и SQLite без сборки фронта: пять ролей команды, заказ в одной транзакции с общим лимитом, живые остатки, посты в каналы городов, взвешивание, расчёт долей, карта пунктов и товар в наличии. Правки в чужом маркетплейсе на общей кодовой базе шли только через два канала: файл стилей по SFTP и консоль темы.',
    result: 'Работает в бою: публичный адрес отвечает 200 и отдаёт витрину, 9 городов и 6 пунктов в 4 городах. 22 таблицы, 96 маршрутов, 14 проверочных скриптов плюс сквозной тест. Не проверено: MAX, число живых покупателей. Онлайн-оплаты нет.',
    stack: ['Node.js', 'Express', 'SQLite', 'PWA', 'Telegram', 'ВКонтакте'],
    en: {
      task: 'An organizer of group buying collected orders in three messengers and merged them by hand. They needed one link: city, pickup point, order, one shared limit per item for everyone, plus workspaces for the buyer, the picker and the pickup points.',
      solution: 'A PWA on Node.js and SQLite with no frontend build: five team roles, orders placed in a single transaction against a shared limit, live stock counters, posts to city channels, weighing, share calculation, a map of pickup points and same-day stock. Work on a third-party marketplace built on a shared codebase went through two channels only: a stylesheet over SFTP and a theme console.',
      result: 'Live: the public address returns 200 and serves the storefront, with 9 cities and 6 pickup points in 4 cities. 22 tables, 96 routes, 14 check scripts plus an end-to-end test. Not verified: MAX posting and the number of real buyers. There is no online payment.',
    },
    es: {
      task: 'Un organizador de compras conjuntas recogía pedidos en tres mensajerías y los unía a mano. Necesitaba un solo enlace: ciudad, punto de entrega, pedido, un límite común por producto para todos, y puestos de trabajo para el comprador, el empaquetador y los puntos.',
      solution: 'Una PWA en Node.js y SQLite sin compilación del frontend: cinco roles de equipo, pedido en una sola transacción contra un límite común, existencias en vivo, publicaciones en los canales de cada ciudad, pesaje, cálculo de comisiones, mapa de puntos y producto disponible el mismo día. El trabajo sobre un marketplace ajeno con código base compartido solo pasó por dos vías: una hoja de estilos por SFTP y la consola de temas.',
      result: 'En producción: la dirección pública responde 200 y muestra el escaparate, con 9 ciudades y 6 puntos en 4 ciudades. 22 tablas, 96 rutas, 14 scripts de verificación y una prueba de extremo a extremo. Sin verificar: MAX y el número de compradores reales. No hay pago en línea.',
    },
  },
};
