module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-warehouse',
    title: 'Бронирование боксов для склада хранения: от демо к рабочей системе',
    metaTitle: 'Кейс: бронирование боксов для self-storage, от демо до рабочей системы',
    metaDescription: 'Система бронирования для склада хранения на 93 бокса: схема SVG, кабинет и панель владельца. С 6 октября 2026 в рабочем режиме: вход по коду, очередь SMS.',
    excerpt: 'Склад ответственного хранения, 93 бокса в двух ярусах. Сначала я собрал демо: схема склада, бронь на 15 минут, кабинет арендатора и панель владельца. 6 октября 2026 перевёл его в рабочий режим на сервере заказчика: очередь SMS, вход по одноразовому коду, закрытая панель, бронь с ожиданием оплаты.',
    dateModified: '2026-10-08',
    tags: ['кейс', 'бронирование', 'self-storage', 'личный кабинет', 'FastAPI'],
    cta: 'site',
    relatedSlugs: ['bronirovanie-resursov-kompanii-2026', 'kak-prinimat-oplatu-na-sayte-ekvayring-2026', 'iot-platforma-dlya-arendodateley-2027', 'kabinet-zhilca-dlya-uk-2026'],
  },
  flagship: {
    name: 'Бронирование боксов для self-storage',
    slug: 'self-storage-bronirovanie-boksov-keys-2026',
    type: 'platform', done: true,
    task: 'Склад ответственного хранения в Красноярске, 93 бокса в двух ярусах, без штатного администратора. Нужно показывать клиенту схему склада, давать бронировать и оплачивать бокс онлайн, а владельцу видеть занятость, долги и простои.',
    solution: 'Схема яруса А снята с плана склада, ярус Б условный. Бокс удерживается на 15 минут на время оформления, двойная аренда исключена проверкой в транзакции. Есть кабинет арендатора с продлением и панель владельца с подсказками по загрузке и долгам.',
    result: 'Сначала демо: 7 экранов, 28 эндпоинтов API, 9 таблиц SQLite. С 6 октября 2026 рабочий режим на сервере и домене заказчика: вход по одноразовому коду из SMS, очередь SMS отдельной службой, сторож и резервные копии, бронь ждёт оплату 48 часов. Онлайн-оплата написана, магазин склада не подключён, арендаторов в системе пока нет, автотестов нет.',
    stack: ['Python', 'FastAPI', 'SQLite', 'JavaScript', 'SVG-схема', 'PWA'],
    en: {
      task: 'A storage warehouse in Krasnoyarsk with 93 boxes on two tiers and no in-house administrator. Customers should see the floor plan, book and pay for a box online, and the owner should see occupancy, debts and idle boxes.',
      solution: 'The plan of tier A is traced from the warehouse floor plan, tier B is a placeholder layout. A box is held for 15 minutes during checkout, and a transaction-level check rules out double rentals. There is a tenant account with renewals and an owner dashboard with hints on occupancy and debts.',
      result: 'First a demo: 7 screens, 28 API endpoints, 9 SQLite tables. Since 6 October 2026 it runs in production mode on the client server and domain: one-time SMS code sign-in, an SMS queue as a separate service, a watchdog and backups, bookings wait 48 hours for payment. Online payment is coded but the store is not connected yet, there are no tenants in the system yet and no automated tests.',
    },
    es: {
      task: 'Un almacén de guarda de enseres en Krasnoyarsk, con 93 trasteros en dos niveles y sin administrador propio. El cliente debe ver el plano, reservar y pagar un trastero en línea, y el propietario debe ver la ocupación, las deudas y los trasteros sin uso.',
      solution: 'El plano del nivel A se trazó a partir del plano del almacén; el nivel B es un esquema provisional. Un trastero se retiene 15 minutos durante el pago y una comprobación dentro de una transacción impide el doble alquiler. Hay una cuenta del inquilino con renovaciones y un panel del propietario con avisos de ocupación y deudas.',
      result: 'Primero una demostración: 7 pantallas, 28 endpoints de API, 9 tablas SQLite. Desde el 6 de octubre de 2026 funciona en modo de producción en el servidor y el dominio del cliente: acceso con código de un solo uso por SMS, cola de SMS como servicio aparte, vigilante y copias de seguridad, la reserva espera el pago 48 horas. El pago en línea está programado pero la tienda aún no está conectada, todavía no hay inquilinos en el sistema ni pruebas automáticas.',
    },
  },
};
