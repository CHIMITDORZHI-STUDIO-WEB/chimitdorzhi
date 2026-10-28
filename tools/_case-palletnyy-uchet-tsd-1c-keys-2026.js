module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-barcode',
    title: 'Паллетный учёт на ТСД для оптовика: приложение и расширение 1С',
    metaTitle: 'Кейс: паллетный учёт на ТСД для оптовика под 1С',
    metaDescription: 'Приложение на Flutter для 7 ТСД мясного оптовика и расширение 1С УТ: паллеты, россыпь, сверка склада, работа без связи, печать на сервере. Идёт внедрение.',
    excerpt: 'Оптовик мясной продукции, 7 терминалов на Android. Приложение для учёта паллет и расширение для 1С УТ: приёмка фуры, разделение, россыпь, отгрузка, этикетки с QR. К концу октября 2026 добавились сверка склада с терминала, работа без связи и печать на сервере 1С. Расширение 2.5.1 и приложение 1.5.1 переданы заказчику, идёт внедрение.',
    dateModified: '2026-10-28',
    tags: ['кейс', 'ТСД', '1С', 'складской учёт'],
    cta: 'auto',
    relatedSlugs: ['http-servis-1c-dlya-prilozheniya-2026', 'shtrihkod-gs1-128-na-korobke-2026', 'svoe-prilozhenie-tsd-ili-gotovoe-reshenie-2026'],
  },
  flagship: {
    name: 'Паллетный учёт на ТСД рядом с 1С',
    slug: 'palletnyy-uchet-tsd-1c-keys-2026',
    type: 'platform', done: false, delivered: true,
    task: 'Оптовик мясной продукции, 7 терминалов сбора данных на Android. Нужен учёт паллет: приёмка фуры, формирование, разделение и расформирование, отгрузка целыми паллетами и россыпью. Товарный учёт в 1С УТ не трогаем.',
    solution: 'Приложение на Flutter и расширение паллетного учёта для 1С УТ с HTTP-сервисом для терминалов. Сканирование GS1-128 и EAN плюс ручной ввод веса, этикетка 100×150 с QR, запрет отгружать вместе паллеты разных организаций. В октябре добавились режим килограммов, россыпь, перемещение в два этапа и статусы заданий для ТСД.',
    result: 'Расширение 1С 2.5.1 и приложение 1.5.1 переданы заказчику 28 октября, идёт внедрение. К концу октября добавились сверка склада с терминала, работа без связи, печать на сервере 1С без компьютера склада и сквозная инструкция. 12 наборов автотестов 1С, 114 тестов приложения.',
    stack: ['Flutter', 'Android', 'HTTP-сервис 1С', 'GS1-128', 'EAN'],
    en: {
      task: 'A wholesale meat distributor with 7 Android data-collection terminals. They needed pallet tracking: unloading a truck, building, splitting and breaking down pallets, shipping whole pallets and loose boxes. Stock accounting in 1C stays untouched.',
      solution: 'A Flutter app plus a pallet-tracking extension for 1C with an HTTP service for the terminals. GS1-128 and EAN scanning plus manual weight entry, a 100×150 label with a QR code, and a rule that pallets of different companies cannot ship together. In October came a kilogram mode, loose stock, two-step transfers and task statuses for the terminals.',
      result: 'The 1C extension 2.5.1 and app 1.5.1 were handed over to the client on 28 October; rollout is under way. By the end of October came a warehouse pallet audit from the terminal, offline work, printing on the 1C server without a warehouse PC, and an end-to-end manual. 12 1C test suites and 114 app tests.',
    },
    es: {
      task: 'Un mayorista de carne con 7 terminales de captura de datos Android. Necesitaba el control de palés: recepción del camión, formación, división y deshecho de palés, envío de palés completos y de cajas sueltas. La contabilidad de mercancía en 1C no se toca.',
      solution: 'Una app en Flutter y una extensión de control de palés para 1C con un servicio HTTP para los terminales. Escaneo de GS1-128 y EAN más introducción manual del peso, etiqueta de 100×150 con QR y la regla de no enviar juntos palés de empresas distintas. En octubre llegaron el modo por kilos, la mercancía suelta, el traslado en dos pasos y los estados de tareas para los terminales.',
      result: 'La extensión 2.5.1 de 1C y la app 1.5.1 se entregaron al cliente el 28 de octubre; la implantación está en curso. A finales de octubre llegaron la verificación de palés del almacén desde el terminal, el trabajo sin conexión, la impresión en el servidor de 1C sin un PC en el almacén y un manual completo. 12 conjuntos de pruebas de 1C y 114 pruebas de la app.',
    },
  },
};
