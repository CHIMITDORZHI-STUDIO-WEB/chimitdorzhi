module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-map-pin-area',
    title: 'Сервис соседской взаимопомощи: карта, боты Telegram и MAX',
    metaTitle: 'Кейс: сервис соседской взаимопомощи в Telegram и MAX',
    metaDescription: 'Гиперлокальный сервис: карта заявок, срочный мастер и помощь по-соседски, Mini App и боты Telegram и MAX на одной базе. Работает, 115 тестов.',
    excerpt: 'Сервис, где соседи помогают друг другу, а срочный мастер находится по карте. Mini App и боты в Telegram и MAX живут на одной базе, аккаунты связываются по телефону. Версия 2.1 работает с 19 ноября, оплата ждёт ключей платёжного сервиса.',
    tags: ['кейс', 'Telegram', 'MAX', 'мини-приложение', 'геопоиск', 'взаимопомощь'],
    cta: 'bots',
    relatedSlugs: ['socset-dlya-sosedey-rayona-2027', 'besplatnaya-razdacha-lishney-edy-sosedyam-2027', 'interfeys-v-chate-vmesto-mini-app-keys-2026', 'kak-sozdat-bota-v-max-poshagovo-2026'],
  },
  flagship: {
    name: 'Сервис соседской взаимопомощи: карта и боты Telegram и MAX',
    slug: 'servis-sosedskoy-vzaimopomoschi-telegram-max-keys-2026',
    type: 'platform', done: true, delivered: true, metric: true,
    task: 'Заказчику нужен гиперлокальный сервис в двух режимах: срочный мастер за деньги и помощь по-соседски. Mini App и боты в Telegram и MAX на одной базе, заявки на карте с поиском по радиусу, один аккаунт на два мессенджера, сверка чека между мастером и клиентом.',
    solution: 'Сделал по шагам, каждый заказчик принимал отдельно: фундамент и база с геоданными, бизнес-логика и вход через оба мессенджера, Mini App с картой, боты с уведомлениями и админкой. Потом версия 2: любой город, 28 категорий, визитки мастеров, чат сделки, отзывы, баллы и пульт управления. Версия 2.1 добавила соседский чат района. Затем каталог мастеров, доска объявлений и лендинги услуг.',
    result: 'Версия 2.1 работает на сервере с 19 ноября, 115 автотестов проходят, в аудите 19 ноября найдены и в тот же вечер исправлены критичные ошибки. Платежи подготовлены, но ждут ключей платёжного сервиса от заказчика. Цифр живого использования у меня нет.',
    stack: ['Python', 'FastAPI', 'aiogram', 'PostgreSQL и PostGIS', 'Redis', 'Alembic', 'Mini App на JS'],
    en: {
      task: 'The customer needed a hyperlocal service with two modes: an urgent paid tradesperson and help between neighbours. A Mini App and bots in Telegram and MAX on one database, requests on a map with radius search, one account across two messengers, and a receipt check between the tradesperson and the client.',
      solution: 'I built it in steps, each accepted by the customer separately: a foundation and a database with geodata, business logic and sign-in through both messengers, a Mini App with a map, and bots with notifications and an admin panel. Then version 2: any city, 28 categories, tradesperson profile pages, a deal chat, reviews, points and a control panel. Version 2.1 added a neighbourhood chat. After that came a directory of tradespeople, a notice board and landing pages for services.',
      result: 'Version 2.1 has been running on a server since 19 November, 115 automated tests pass, and the audit of 19 November found critical bugs that were fixed the same evening. Payments are prepared but wait for the payment service keys from the customer. I have no live usage figures.',
    },
    es: {
      task: 'El cliente necesitaba un servicio hiperlocal con dos modos: un profesional urgente de pago y ayuda entre vecinos. Una Mini App y bots en Telegram y MAX sobre una sola base de datos, solicitudes en un mapa con búsqueda por radio, una cuenta para dos mensajeros y una conciliación del recibo entre el profesional y el cliente.',
      solution: 'Lo construí por pasos, y el cliente aceptó cada uno por separado: una base con datos geográficos, la lógica de negocio y el acceso por ambos mensajeros, una Mini App con mapa y bots con avisos y panel de administración. Después la versión 2: cualquier ciudad, 28 categorías, fichas de profesionales, chat del trato, reseñas, puntos y un panel de control. La versión 2.1 añadió un chat del barrio. Luego llegaron un catálogo de profesionales, un tablón de anuncios y páginas de aterrizaje de servicios.',
      result: 'La versión 2.1 funciona en un servidor desde el 19 de noviembre, pasan 115 pruebas automáticas y la auditoría del 19 de noviembre encontró errores críticos que se corrigieron esa misma tarde. Los pagos están preparados, pero esperan las claves del servicio de pago por parte del cliente. No tengo cifras de uso real.',
    },
  },
};
