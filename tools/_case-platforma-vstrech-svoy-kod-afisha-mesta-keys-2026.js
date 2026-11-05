module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-users-three',
    title: 'Платформа встреч на своём коде: вторая версия, афиша и места',
    metaTitle: 'Кейс: платформа встреч на своём коде, афиша и места',
    metaDescription: 'Вторая версия платформы встреч по интересам: вход через Telegram и MAX, афиша из двух источников, 42,8 тысячи мест из открытой карты. В проде.',
    excerpt: 'Первую версию платформы встреч я запустил на открытом движке, а через неделю собрал вторую на своём коде: главный экран вокруг времени и намерения, вход через Telegram и MAX, афиша из двух источников и около 42,8 тысячи мест из открытой карты. Работает на сервере заказчика, оплата тарифов и анонсы в каналы пока не готовы.',
    tags: ['кейс', 'платформа встреч', 'Telegram', 'MAX', 'афиша', 'Next.js'],
    cta: 'bots',
    relatedSlugs: ['mobilizon-svoya-ploschadka-meropriyatiy-2026', 'telegram-mini-app-chto-eto-2026', 'mini-app-v-max-dlya-biznesa-2026', 'leaflet-interaktivnye-karty-2026'],
  },
  flagship: {
    name: 'Платформа встреч на своём коде',
    slug: 'platforma-vstrech-svoy-kod-afisha-mesta-keys-2026',
    type: 'platform', done: true, delivered: true,
    task: 'Основателю стартапа офлайн-встреч нужна площадка, где за минуту находят, с кем и куда пойти сегодня. Готовый движок событий не даёт механик «свободен сегодня» и «нужен ещё один человек», а вход, напоминания и мини-приложение должны работать в Telegram и MAX.',
    solution: 'Собрал вторую версию на Next.js, Prisma и PostgreSQL рядом с первой, перенёс данные без дублей. Главный экран построен вокруг времени и намерения. Вход через мини-приложения Telegram и MAX и по номеру, напоминания и рассылки, админка. Афишу собирает скрипт из двух источников, места для встреч берутся из открытой карты.',
    result: 'В проде на сервере заказчика, около 42,8 тысячи мест в 65 городах, афиша обновляется по расписанию. Оплата тарифа «Про» не подключена, анонсы в каналы не сделаны, мобильное приложение по чужому ТЗ в работу не взято.',
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Docker', 'nginx', 'Telegram и MAX API', 'Leaflet'],
    en: {
      task: 'The founder of an offline-meetups startup needs a platform where people can find in a minute who to meet and where to go today. A ready-made events engine lacks the "free today" and "need one more person" mechanics, and sign-in, reminders and a mini-app must work in Telegram and MAX.',
      solution: 'I built a second version on Next.js, Prisma and PostgreSQL next to the first and migrated the data without duplicates. The main screen is built around time and intent. Sign-in through Telegram and MAX mini-apps and by phone number, reminders and mailings, an admin panel. A script collects the events listing from two sources, and meeting places come from an open map.',
      result: 'Live on the client\'s server, about 42,800 places in 65 cities, the listing updates on a schedule. Payment for the "Pro" tier is not connected, announcements to channels are not done, and the mobile app from another contractor\'s spec has not been taken on.',
    },
    es: {
      task: 'El fundador de una startup de encuentros presenciales necesita una plataforma donde la gente encuentre en un minuto con quién y adónde ir hoy. Un motor de eventos ya hecho no tiene las mecánicas "libre hoy" y "falta una persona más", y el acceso, los recordatorios y la mini-app deben funcionar en Telegram y MAX.',
      solution: 'Construí una segunda versión con Next.js, Prisma y PostgreSQL junto a la primera y migré los datos sin duplicados. La pantalla principal gira en torno al tiempo y la intención. Acceso mediante mini-apps de Telegram y MAX y por número de teléfono, recordatorios y envíos, panel de administración. Un script recopila la cartelera de dos fuentes y los lugares de encuentro salen de un mapa abierto.',
      result: 'En producción en el servidor del cliente, unos 42.800 lugares en 65 ciudades, la cartelera se actualiza según un horario. El pago del plan "Pro" no está conectado, los anuncios en canales no están hechos y la aplicación móvil de la especificación de otro contratista no se ha asumido.',
    },
  },
};
