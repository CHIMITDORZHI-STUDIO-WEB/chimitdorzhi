module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-warehouse',
    title: 'Бронирование боксов для склада хранения в Красноярске: демо-система',
    metaTitle: 'Кейс: бронирование боксов для self-storage, демо-система',
    metaDescription: 'Демо системы бронирования для склада хранения в Красноярске: 93 бокса, схема SVG, бронь на 15 минут, кабинет и панель владельца. Пока на стенде.',
    excerpt: 'Склад ответственного хранения из Красноярска, 93 бокса в двух ярусах. Я собрал демо: схема склада, бронь на 15 минут, кабинет арендатора и панель владельца. Оплата имитируется, в бою система не запущена.',
    tags: ['кейс', 'бронирование', 'self-storage', 'личный кабинет', 'FastAPI'],
    cta: 'site',
    relatedSlugs: ['bronirovanie-resursov-kompanii-2026', 'kak-prinimat-oplatu-na-sayte-ekvayring-2026', 'iot-platforma-dlya-arendodateley-2027', 'kabinet-zhilca-dlya-uk-2026'],
  },
  flagship: {
    name: 'Бронирование боксов для self-storage',
    slug: 'self-storage-bronirovanie-boksov-keys-2026',
    type: 'platform', done: false,
    task: 'Склад ответственного хранения в Красноярске, 93 бокса в двух ярусах, без штатного администратора. Нужно показывать клиенту схему склада, давать бронировать и оплачивать бокс онлайн, а владельцу видеть занятость, долги и простои.',
    solution: 'Схема яруса А снята с плана склада, ярус Б условный. Бокс удерживается на 15 минут на время оформления, двойная аренда исключена проверкой в транзакции. Есть кабинет арендатора с продлением и панель владельца с подсказками по загрузке и долгам.',
    result: 'Демо на нашем стенде: 7 экранов, 28 эндпоинтов API, 9 таблиц SQLite. Оплата имитируется, SMS не отправляются, автотестов нет. Договор и запуск на складе не состоялись, в бою не запущено.',
    stack: ['Python', 'FastAPI', 'SQLite', 'JavaScript', 'SVG-схема', 'PWA'],
    en: {
      task: 'A storage warehouse in Krasnoyarsk with 93 boxes on two tiers and no in-house administrator. Customers should see the floor plan, book and pay for a box online, and the owner should see occupancy, debts and idle boxes.',
      solution: 'The plan of tier A is traced from the warehouse floor plan, tier B is a placeholder layout. A box is held for 15 minutes during checkout, and a transaction-level check rules out double rentals. There is a tenant account with renewals and an owner dashboard with hints on occupancy and debts.',
      result: 'A demo on our own test stand: 7 screens, 28 API endpoints, 9 SQLite tables. Payment is simulated, no SMS are sent, there are no automated tests. The contract and the launch at the warehouse did not happen; not running in production.',
    },
    es: {
      task: 'Un almacén de guarda de enseres en Krasnoyarsk, con 93 trasteros en dos niveles y sin administrador propio. El cliente debe ver el plano, reservar y pagar un trastero en línea, y el propietario debe ver la ocupación, las deudas y los trasteros sin uso.',
      solution: 'El plano del nivel A se trazó a partir del plano del almacén; el nivel B es un esquema provisional. Un trastero se retiene 15 minutos durante el pago y una comprobación dentro de una transacción impide el doble alquiler. Hay una cuenta del inquilino con renovaciones y un panel del propietario con avisos de ocupación y deudas.',
      result: 'Una demostración en nuestro entorno de pruebas: 7 pantallas, 28 endpoints de API, 9 tablas SQLite. El pago es simulado, no se envían SMS y no hay pruebas automáticas. El contrato y el lanzamiento en el almacén no se concretaron; no está en producción.',
    },
  },
};
