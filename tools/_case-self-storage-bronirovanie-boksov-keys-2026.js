module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-warehouse',
    title: 'Бронирование боксов для склада хранения: система, лендинги и сервер',
    metaTitle: 'Кейс: бронирование боксов для склада хранения',
    metaDescription: 'Бронирование 93 боксов работает на сервере склада с 6 октября 2026. В конце октября: лендинги секций и франшизы, старые сайты заказчика подняты из копий.',
    excerpt: 'Склад ответственного хранения в Красноярске, 93 бокса в двух ярусах. Я собрал демо бронирования и 6 октября 2026 перевёл его в рабочий режим на сервере заказчика. В конце октября добавились лендинг производства секций хранения и лендинг франшизы с заявками в панель, а на том же сервере я поднял из резервных копий старые сайты заказчика и разобрал, почему сервер падал.',
    dateModified: '2026-10-28',
    tags: ['кейс', 'бронирование', 'self-storage', 'личный кабинет', 'FastAPI'],
    cta: 'site',
    relatedSlugs: ['bronirovanie-resursov-kompanii-2026', 'it-platforma-dlya-franshizy-2026', 'rezervnye-kopii-vazhnee-chem-kazhetsya-2026', 'sayt-upal-monitoring-sayta-i-domena-2026'],
  },
  flagship: {
    name: 'Бронирование боксов для self-storage',
    slug: 'self-storage-bronirovanie-boksov-keys-2026',
    type: 'platform', done: true,
    task: 'Склад ответственного хранения в Красноярске, 93 бокса в двух ярусах, без штатного администратора. Нужно показывать клиенту схему склада, давать бронировать и оплачивать бокс онлайн, а владельцу видеть занятость, долги и простои. Позже добавились лендинги второго направления и франшизы.',
    solution: 'Схема яруса А снята с плана склада, ярус Б условный. Бокс удерживается на 15 минут на время оформления, двойная аренда исключена проверкой в транзакции. Кабинет арендатора, панель владельца, вход по коду из SMS, очередь SMS отдельной службой, сторож и ночные копии. Два лендинга с калькулятором по финмодели заказчика и формой заявки в панель.',
    result: 'С 6 октября 2026 рабочий режим на сервере и домене заказчика. 25 октября выложены лендинги секций хранения и франшизы, оба закрыты от поиска до одобрения, заявок через форму на 28 октября нет. На том же сервере подняты из копий старые сайты заказчика, сторож проверяет сертификат по пути посетителя. Онлайн-оплата написана, магазин склада не подключён, автотестов нет.',
    stack: ['Python', 'FastAPI', 'SQLite', 'JavaScript', 'SVG-схема', 'PWA', 'nginx'],
    en: {
      task: 'A storage warehouse in Krasnoyarsk with 93 boxes on two tiers and no in-house administrator. Customers should see the floor plan, book and pay for a box online, and the owner should see occupancy, debts and idle boxes. Landing pages for a second business line and a franchise were added later.',
      solution: 'The plan of tier A is traced from the warehouse floor plan, tier B is a placeholder layout. A box is held for 15 minutes during checkout, and a transaction-level check rules out double rentals. A tenant account, an owner dashboard, SMS code sign-in, an SMS queue as a separate service, a watchdog and nightly backups. Two landing pages with a calculator based on the client\'s financial model and a lead form that feeds the dashboard.',
      result: 'Running in production mode on the client\'s server and domain since 6 October 2026. On 25 October the storage-sections and franchise landing pages went up; both are hidden from search until approved, and there were no form leads as of 28 October. On the same server the client\'s old sites were restored from backups, and the watchdog now checks the certificate along the visitor\'s path. Online payment is coded but the store is not connected, and there are no automated tests.',
    },
    es: {
      task: 'Un almacén de guarda de enseres en Krasnoyarsk, con 93 trasteros en dos niveles y sin administrador propio. El cliente debe ver el plano, reservar y pagar un trastero en línea, y el propietario debe ver la ocupación, las deudas y los trasteros sin uso. Más tarde se añadieron páginas de aterrizaje para una segunda línea de negocio y para la franquicia.',
      solution: 'El plano del nivel A se trazó a partir del plano del almacén; el nivel B es un esquema provisional. Un trastero se retiene 15 minutos durante el pago y una comprobación dentro de una transacción impide el doble alquiler. Cuenta del inquilino, panel del propietario, acceso con código por SMS, cola de SMS como servicio aparte, vigilante y copias nocturnas. Dos páginas de aterrizaje con una calculadora basada en el modelo financiero del cliente y un formulario de solicitud que llega al panel.',
      result: 'En modo de producción en el servidor y el dominio del cliente desde el 6 de octubre de 2026. El 25 de octubre se publicaron las páginas de secciones de almacenaje y de franquicia; ambas están ocultas a los buscadores hasta su aprobación y al 28 de octubre no había solicitudes por el formulario. En el mismo servidor se restauraron desde copias los sitios antiguos del cliente, y el vigilante comprueba ahora el certificado por la ruta del visitante. El pago en línea está programado pero la tienda no está conectada, y no hay pruebas automáticas.',
    },
  },
};
