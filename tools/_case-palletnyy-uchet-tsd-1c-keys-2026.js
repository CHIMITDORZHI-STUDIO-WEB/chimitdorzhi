module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-barcode',
    title: 'Паллетный учёт на ТСД для оптовика: приложение и расширение 1С',
    metaTitle: 'Кейс: паллетный учёт на ТСД для оптовика под 1С',
    metaDescription: 'Приложение на Flutter для 7 ТСД мясного оптовика и расширение 1С УТ: паллеты, россыпь, килограммы, перемещение в два этапа. Проверено на копии базы.',
    excerpt: 'Оптовик мясной продукции, 7 терминалов на Android. Приложение для учёта паллет и расширение для 1С УТ: приёмка фуры, разделение, россыпь, отгрузка, этикетки с QR. В октябре 2026 расширение дошло до 2.4.0 и стоит на сервере заказчика с копией базы, запуск на складе назначен на 26 октября.',
    dateModified: '2026-10-08',
    tags: ['кейс', 'ТСД', '1С', 'складской учёт'],
    cta: 'auto',
    relatedSlugs: ['http-servis-1c-dlya-prilozheniya-2026', 'shtrihkod-gs1-128-na-korobke-2026', 'svoe-prilozhenie-tsd-ili-gotovoe-reshenie-2026'],
  },
  flagship: {
    name: 'Паллетный учёт на ТСД рядом с 1С',
    slug: 'palletnyy-uchet-tsd-1c-keys-2026',
    type: 'platform', done: false,
    task: 'Оптовик мясной продукции, 7 терминалов сбора данных на Android. Нужен учёт паллет: приёмка фуры, формирование, разделение и расформирование, отгрузка целыми паллетами и россыпью. Товарный учёт в 1С УТ не трогаем.',
    solution: 'Приложение на Flutter и расширение паллетного учёта для 1С УТ с HTTP-сервисом для терминалов. Сканирование GS1-128 и EAN плюс ручной ввод веса, этикетка 100×150 с QR, запрет отгружать вместе паллеты разных организаций. В октябре добавились режим килограммов, россыпь, перемещение в два этапа и статусы заданий для ТСД.',
    result: 'Расширение 1С 2.4.0 и приложение 1.4.0 стоят на сервере заказчика с копией рабочей базы, сценарии прогнаны через эмулятор терминала. 11 наборов автотестов 1С, 103 теста приложения. На живом складе пока нет, запуск назначен на 26 октября.',
    stack: ['Flutter', 'Android', 'HTTP-сервис 1С', 'GS1-128', 'EAN'],
    en: {
      task: 'A wholesale meat distributor with 7 Android data-collection terminals. They needed pallet tracking: unloading a truck, building, splitting and breaking down pallets, shipping whole pallets and loose boxes. Stock accounting in 1C stays untouched.',
      solution: 'A Flutter app plus a pallet-tracking extension for 1C with an HTTP service for the terminals. GS1-128 and EAN scanning plus manual weight entry, a 100×150 label with a QR code, and a rule that pallets of different companies cannot ship together. In October came a kilogram mode, loose stock, two-step transfers and task statuses for the terminals.',
      result: 'The 1C extension 2.4.0 and app 1.4.0 run on the client server against a copy of the live database; the scenarios were run through a terminal emulator. 11 1C test suites and 103 app tests. Not on the live warehouse yet; launch is set for 26 October.',
    },
    es: {
      task: 'Un mayorista de carne con 7 terminales de captura de datos Android. Necesitaba el control de palés: recepción del camión, formación, división y deshecho de palés, envío de palés completos y de cajas sueltas. La contabilidad de mercancía en 1C no se toca.',
      solution: 'Una app en Flutter y una extensión de control de palés para 1C con un servicio HTTP para los terminales. Escaneo de GS1-128 y EAN más introducción manual del peso, etiqueta de 100×150 con QR y la regla de no enviar juntos palés de empresas distintas. En octubre llegaron el modo por kilos, la mercancía suelta, el traslado en dos pasos y los estados de tareas para los terminales.',
      result: 'La extensión 2.4.0 de 1C y la app 1.4.0 funcionan en el servidor del cliente con una copia de la base real; los escenarios se probaron en un emulador de terminal. 11 conjuntos de pruebas de 1C y 103 pruebas de la app. Aún no está en el almacén real; el arranque está previsto para el 26 de octubre.',
    },
  },
};
