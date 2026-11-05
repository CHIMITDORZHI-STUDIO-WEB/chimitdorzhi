module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-package',
    title: 'Совместные закупки в одном PWA: заказ, выдача и блогеры по городам',
    metaTitle: 'Кейс: PWA для совместных закупок с пунктами выдачи',
    metaDescription: 'PWA совместных закупок: город, пункт выдачи, общий лимит, пять ролей команды, модуль блогеров и доска объявлений. В ноябре 2026 подключены ключи ВКонтакте.',
    excerpt: 'Организатор совместных закупок собирал заявки в трёх мессенджерах. Я собрал одно PWA: город, пункт выдачи, заказ и общий лимит позиции на всех, плюс закупщик, сборщик и франчайзи. В октябре добавился модуль блогеров с учётом подписчиков по городам, к ноябрю доска объявлений с кнопкой в постах и ключи семи сообществ ВКонтакте.',
    dateModified: '2026-11-05',
    tags: ['кейс', 'PWA', 'совместные закупки', 'платформа', 'реферальная механика'],
    cta: 'site',
    relatedSlugs: ['pwa-iz-sayta-za-vyhodnye-2026', 'max-mini-apps-2026', 'telegram-chat-vk-soobshchestvo-2026', 'referalnaya-programma-novye-klienty-2026'],
  },
  flagship: {
    name: 'PWA совместных закупок с пунктами выдачи',
    slug: 'sovmestnye-zakupki-pwa-pvz-keys-2026',
    type: 'platform', done: true,
    task: 'Организатор совместных закупок собирал заявки в трёх мессенджерах и сводил их руками. Нужна одна ссылка: город, пункт выдачи, заказ, общий лимит позиции на всех, плюс рабочие места закупщика, сборщика и пунктов, а потом и учёт того, кто приводит людей в каналы городов.',
    solution: 'PWA на Node.js и SQLite без сборки фронта: пять ролей команды, заказ в одной транзакции с общим лимитом, живые остатки, посты с видео в каналы городов, взвешивание, расчёт долей, карта пунктов. Модуль блогеров: ссылка с выбором города, точный учёт вступлений через пригласительные ссылки Telegram и ссылку бота MAX, итог кампании по городу. К ноябрю в постах доски появилась кнопка «Разместить объявление», а 5 ноября подключены ключи семи сообществ ВКонтакте.',
    result: 'Работает: 9 городов с каналами в Telegram и MAX и 7 пунктов выдачи. В октябре добавлены надбавка франчайзи, лимит пункта в кг, день выдачи по городу и видео в постах, 16 октября модуль блогеров, в конце октября объявления с кнопкой в постах. Проверочных скриптов 19 плюс сквозной тест. Не проверено: автоответы на комментарии в живых каналах и пробные посты во ВКонтакте после подключения ключей.',
    stack: ['Node.js', 'Express', 'SQLite', 'PWA', 'Telegram', 'MAX', 'ВКонтакте'],
    en: {
      task: 'An organizer of group buying collected orders in three messengers and merged them by hand. They needed one link: city, pickup point, order, one shared limit per item for everyone, plus workspaces for the buyer, the picker and the pickup points, and later a way to track who brings people into the city channels.',
      solution: 'A PWA on Node.js and SQLite with no frontend build: five team roles, orders placed in a single transaction against a shared limit, live stock counters, posts with video to city channels, weighing, share calculation and a map of pickup points. A bloggers module: a link with a city picker, exact join tracking through Telegram invite links and a MAX bot start link, and a campaign total per city. By November the classifieds posts got a "Post an ad" button, and on 5 November keys for seven VK communities were connected.',
      result: 'Working: 9 cities with Telegram and MAX channels and 7 pickup points. October added a franchisee markup, a per-point limit in kilograms, a per-city pickup day and video in posts; the bloggers module shipped on 16 October and ads with a button in posts at the end of October. There are 19 check scripts plus an end-to-end test. Not verified: auto-replies to comments in live channels and test posts to VK after the keys were connected.',
    },
    es: {
      task: 'Un organizador de compras conjuntas recogía pedidos en tres mensajerías y los unía a mano. Necesitaba un solo enlace: ciudad, punto de entrega, pedido, un límite común por producto para todos, puestos de trabajo para el comprador, el empaquetador y los puntos, y después una forma de saber quién atrae gente a los canales de cada ciudad.',
      solution: 'Una PWA en Node.js y SQLite sin compilación del frontend: cinco roles de equipo, pedido en una sola transacción contra un límite común, existencias en vivo, publicaciones con vídeo en los canales de cada ciudad, pesaje, cálculo de participaciones y mapa de puntos. Un módulo de blogueros: enlace con selección de ciudad, conteo exacto de suscripciones mediante enlaces de invitación de Telegram y el enlace de inicio del bot de MAX, y el resultado de la campaña por ciudad. Hacia noviembre las publicaciones del tablón recibieron el botón "Publicar un anuncio", y el 5 de noviembre se conectaron las claves de siete comunidades de VK.',
      result: 'Funcionando: 9 ciudades con canales de Telegram y MAX y 7 puntos de entrega. En octubre se añadieron el recargo del franquiciado, el límite por punto en kilos, el día de entrega por ciudad y el vídeo en las publicaciones; el módulo de blogueros salió el 16 de octubre y los anuncios con botón en las publicaciones a finales de octubre. Hay 19 scripts de verificación y una prueba de extremo a extremo. Sin verificar: las respuestas automáticas a comentarios en canales reales y las publicaciones de prueba en VK tras conectar las claves.',
    },
  },
};
