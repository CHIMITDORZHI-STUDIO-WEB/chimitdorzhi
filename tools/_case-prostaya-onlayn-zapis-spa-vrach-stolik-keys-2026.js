module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-calendar-check',
    title: 'Простая онлайн-запись для спа, врача и столика: собственный сервис',
    metaTitle: 'Кейс: простая онлайн-запись для спа, врача и ресторана',
    metaDescription: 'Простая онлайн-запись для спа, врача и столика: виджет в одну строку, QR, квиз и отзывы. К 17 ноября на постоянном сервере с https, как рабочее демо.',
    dateModified: '2026-11-17',
    excerpt: 'Заказчик попросил максимально простой аналог YClients: запись в спа, к врачу и столик, минимум функций. Я собрал отдельный сервис с виджетом в одну строку кода, ссылкой и QR. К 17 ноября он переведён на постоянный сервер с https, получил квиз подбора, виджет отзывов и панель владельца платформы. Это рабочее демо, реальных клиентов у него пока нет.',
    tags: ['кейс', 'онлайн-запись', 'виджет для сайта', 'бронирование столиков', 'малый бизнес'],
    cta: 'site',
    relatedSlugs: ['onlayn-zapis-na-sayte-vidzhet-yclients-ili-svoya-forma-2026', 'onlayn-bronirovanie-stolikov-2026', 'onlayn-zapis-bez-sayta-v-messendzhere-2026', 'neyavki-na-zapis-predoplata-napominaniya-2026'],
  },
  flagship: {
    name: 'Простая онлайн-запись: спа, врач, столик',
    slug: 'prostaya-onlayn-zapis-spa-vrach-stolik-keys-2026',
    type: 'platform', done: false, delivered: false,
    task: 'Нужна максимально простая и понятная онлайн-запись с минимумом функций: спа, приём врача, столик в ресторане. Её должно быть легко вставить на любой сайт.',
    solution: 'Отдельный сервис на FastAPI и SQLite: запись без регистрации клиента, личная ссылка для отмены, кабинет владельца, виджет в одну строку, ссылка и QR, бот-меню для гостей на десяти языках, раздел для конференций.',
    result: 'Рабочее демо на постоянном сервере с https и ежедневной копией базы. К 17 ноября добавились квиз подбора, виджет отзывов, панель владельца платформы и ссылки для спикеров. Реальных записей нет, виджет на чужом сайте вживую не проверен, копии вне сервера впереди.',
    stack: ['Python', 'FastAPI', 'SQLite', 'Docker', 'JavaScript'],
    en: {
      task: 'The request was for a very simple, easy-to-understand online booking tool with minimal features: spa, doctor appointment, restaurant table. It had to be easy to embed on any website.',
      solution: 'A separate service on FastAPI and SQLite: booking without client sign-up, a personal link to cancel, an owner dashboard, a one-line widget, a link and a QR code, a guest menu bot in ten languages, and a conference section.',
      result: 'A working demo on a permanent server with https and a daily database copy. By 17 November it gained a selection quiz, a reviews widget, a platform owner panel and speaker links. There are no real bookings, the widget has not been tested live on a third-party site, and off-server copies are still ahead.',
    },
    es: {
      task: 'Se pidió una reserva en línea muy sencilla y fácil de entender, con las mínimas funciones: spa, cita médica, mesa en un restaurante. Tenía que ser fácil de insertar en cualquier sitio web.',
      solution: 'Un servicio independiente en FastAPI y SQLite: reserva sin registro del cliente, un enlace personal para cancelar, un panel del propietario, un widget de una línea, un enlace y un código QR, un bot de menú para huéspedes en diez idiomas y una sección para conferencias.',
      result: 'Una demo funcional en un servidor permanente con https y copia diaria de la base de datos. Hasta el 17 de noviembre se añadieron un quiz de selección, un widget de reseñas, un panel del propietario de la plataforma y enlaces para ponentes. No hay reservas reales, el widget no se ha probado en vivo en un sitio ajeno y faltan las copias fuera del servidor.',
    },
  },
};
