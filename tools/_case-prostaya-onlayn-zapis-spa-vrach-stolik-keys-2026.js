module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-calendar-check',
    title: 'Простая онлайн-запись для спа, врача и столика: собственный сервис',
    metaTitle: 'Кейс: простая онлайн-запись для спа, врача и ресторана',
    metaDescription: 'Кейс: собрал простой сервис онлайн-записи для спа, врача и столика в ресторане. Виджет в одну строку, ссылка и QR. Сейчас работает в тестовом режиме.',
    excerpt: 'Заказчик попросил максимально простой аналог YClients: запись в спа, к врачу и столик, минимум функций. Я собрал отдельный сервис с виджетом в одну строку кода, ссылкой и QR. Он работает в тестовом режиме на временном сервере, реальных клиентов у него пока нет.',
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
    result: 'Работает в тестовом режиме на временном сервере с демо-заведениями. Ссылки отправлены заказчику на пробу, реальных записей нет, перенос на постоянный сервер, https и резервная копия базы впереди.',
    stack: ['Python', 'FastAPI', 'SQLite', 'Docker', 'JavaScript'],
    en: {
      task: 'The request was for a very simple, easy-to-understand online booking tool with minimal features: spa, doctor appointment, restaurant table. It had to be easy to embed on any website.',
      solution: 'A separate service on FastAPI and SQLite: booking without client sign-up, a personal link to cancel, an owner dashboard, a one-line widget, a link and a QR code, a guest menu bot in ten languages, and a conference section.',
      result: 'It runs in test mode on a temporary server with demo businesses. The links were sent to the client to try out, there are no real bookings yet, and the move to a permanent server, https and a database backup are still ahead.',
    },
    es: {
      task: 'Se pidió una reserva en línea muy sencilla y fácil de entender, con las mínimas funciones: spa, cita médica, mesa en un restaurante. Tenía que ser fácil de insertar en cualquier sitio web.',
      solution: 'Un servicio independiente en FastAPI y SQLite: reserva sin registro del cliente, un enlace personal para cancelar, un panel del propietario, un widget de una línea, un enlace y un código QR, un bot de menú para huéspedes en diez idiomas y una sección para conferencias.',
      result: 'Funciona en modo de prueba en un servidor temporal con negocios de demostración. Los enlaces se enviaron al cliente para que los pruebe, aún no hay reservas reales y quedan por hacer el traslado a un servidor permanente, https y la copia de seguridad de la base de datos.',
    },
  },
};
