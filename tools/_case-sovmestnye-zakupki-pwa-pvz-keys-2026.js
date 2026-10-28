module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-package',
    title: 'Совместные закупки в одном PWA: заказ, выдача и блогеры по городам',
    metaTitle: 'Кейс: PWA для совместных закупок с пунктами выдачи',
    metaDescription: 'PWA совместных закупок: город, пункт выдачи, общий лимит, пять ролей команды. С 16 октября 2026 модуль блогеров: ссылки по городам и учёт подписчиков.',
    excerpt: 'Организатор совместных закупок собирал заявки в трёх мессенджерах. Я собрал одно PWA: город, пункт выдачи, заказ и общий лимит позиции на всех, плюс закупщик, сборщик и франчайзи. 16 октября 2026 добавился модуль блогеров: у каждого своя ссылка с выбором города, а система считает, сколько людей он привёл в каналы каждого города.',
    dateModified: '2026-10-28',
    tags: ['кейс', 'PWA', 'совместные закупки', 'платформа', 'реферальная механика'],
    cta: 'site',
    relatedSlugs: ['pwa-iz-sayta-za-vyhodnye-2026', 'max-mini-apps-2026', 'telegram-chat-vk-soobshchestvo-2026', 'referalnaya-programma-novye-klienty-2026'],
  },
  flagship: {
    name: 'PWA совместных закупок с пунктами выдачи',
    slug: 'sovmestnye-zakupki-pwa-pvz-keys-2026',
    type: 'platform', done: true,
    task: 'Организатор совместных закупок собирал заявки в трёх мессенджерах и сводил их руками. Нужна одна ссылка: город, пункт выдачи, заказ, общий лимит позиции на всех, плюс рабочие места закупщика, сборщика и пунктов, а потом и учёт того, кто приводит людей в каналы городов.',
    solution: 'PWA на Node.js и SQLite без сборки фронта: пять ролей команды, заказ в одной транзакции с общим лимитом, живые остатки, посты с видео в каналы городов, взвешивание, расчёт долей, карта пунктов. Модуль блогеров: ссылка с выбором города, точный учёт вступлений через пригласительные ссылки Telegram и ссылку бота MAX, итог кампании по городу.',
    result: 'Работает в бою: на 2 октября публичный адрес отдавал витрину, 9 городов и 6 пунктов в 4 городах. В октябре добавлены надбавка франчайзи, лимит пункта в кг, день выдачи по городу и видео в постах, 16 октября выкачен модуль блогеров. Проверочных скриптов 19 плюс сквозной тест. Не проверено: автоответы на комментарии в живых каналах и число живых покупателей.',
    stack: ['Node.js', 'Express', 'SQLite', 'PWA', 'Telegram', 'MAX', 'ВКонтакте'],
    en: {
      task: 'An organizer of group buying collected orders in three messengers and merged them by hand. They needed one link: city, pickup point, order, one shared limit per item for everyone, plus workspaces for the buyer, the picker and the pickup points, and later a way to track who brings people into the city channels.',
      solution: 'A PWA on Node.js and SQLite with no frontend build: five team roles, orders placed in a single transaction against a shared limit, live stock counters, posts with video to city channels, weighing, share calculation and a map of pickup points. A bloggers module: a link with a city picker, exact join tracking through Telegram invite links and a MAX bot start link, and a campaign total per city.',
      result: 'Live: as of 2 October the public address served the storefront, with 9 cities and 6 pickup points in 4 cities. October added a franchisee markup, a per-point limit in kilograms, a per-city pickup day and video in posts, and the bloggers module shipped on 16 October. There are 19 check scripts plus an end-to-end test. Not verified: auto-replies to comments in live channels and the number of real buyers.',
    },
    es: {
      task: 'Un organizador de compras conjuntas recogía pedidos en tres mensajerías y los unía a mano. Necesitaba un solo enlace: ciudad, punto de entrega, pedido, un límite común por producto para todos, puestos de trabajo para el comprador, el empaquetador y los puntos, y después una forma de saber quién atrae gente a los canales de cada ciudad.',
      solution: 'Una PWA en Node.js y SQLite sin compilación del frontend: cinco roles de equipo, pedido en una sola transacción contra un límite común, existencias en vivo, publicaciones con vídeo en los canales de cada ciudad, pesaje, cálculo de participaciones y mapa de puntos. Un módulo de blogueros: enlace con selección de ciudad, conteo exacto de suscripciones mediante enlaces de invitación de Telegram y el enlace de inicio del bot de MAX, y el resultado de la campaña por ciudad.',
      result: 'En producción: al 2 de octubre la dirección pública mostraba el escaparate, con 9 ciudades y 6 puntos en 4 ciudades. En octubre se añadieron el recargo del franquiciado, el límite por punto en kilos, el día de entrega por ciudad y el vídeo en las publicaciones, y el 16 de octubre salió el módulo de blogueros. Hay 19 scripts de verificación y una prueba de extremo a extremo. Sin verificar: las respuestas automáticas a comentarios en canales reales y el número de compradores reales.',
    },
  },
};
