module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-barcode',
    title: 'Паллетный учёт на ТСД для оптовика: приложение под 1С',
    metaTitle: 'Кейс: паллетный учёт на ТСД для оптовика под 1С',
    metaDescription: 'Приложение на Flutter для 7 ТСД мясного оптовика: приёмка, формирование и отгрузка паллет, GS1-128, этикетки с QR и протокол обмена с 1С.',
    excerpt: 'Оптовик мясной продукции, 7 терминалов на Android. Приложение для учёта паллет рядом с 1С УТ: приёмка фуры, разделение, отгрузка, этикетки с QR и протокол обмена с защитой от дублей. Разработано и отдано демо-сборкой, подключение к 1С — следующий этап.',
    tags: ['кейс', 'ТСД', '1С', 'складской учёт'],
    cta: 'auto',
    relatedSlugs: ['http-servis-1c-dlya-prilozheniya-2026', 'shtrihkod-gs1-128-na-korobke-2026', 'svoe-prilozhenie-tsd-ili-gotovoe-reshenie-2026'],
  },
  flagship: {
    name: 'Паллетный учёт на ТСД рядом с 1С',
    slug: 'palletnyy-uchet-tsd-1c-keys-2026',
    type: 'platform', done: false,
    task: 'Оптовик мясной продукции, 7 терминалов сбора данных на Android. Нужен учёт паллет: приёмка фуры, формирование, разделение и расформирование, отгрузка целыми паллетами и россыпью. Товарный учёт в 1С УТ не трогаем.',
    solution: 'Приложение на Flutter, данные идут через слой-интерфейс, который потом подключается к HTTP-сервису 1С. Сканирование GS1-128 и EAN плюс ручной ввод веса, печать этикетки 100×150 с QR, запрет отгружать вместе паллеты разных организаций. Протокол обмена v1 описан документом: Basic-авторизация, Idempotency-Key, коды ошибок; маркировка заложена на следующий этап.',
    result: 'Разработано: 16 логических и fuzz-тестов, 12 сценариев экранов, демо-APK для arm64 и arm32 отдан заказчику. В проде пока нет, подключение к 1С — следующий этап.',
    stack: ['Flutter', 'Android', 'HTTP-сервис 1С', 'GS1-128', 'EAN'],
    en: {
      task: 'A wholesale meat distributor with 7 Android data-collection terminals. They needed pallet tracking: unloading a truck, building, splitting and breaking down pallets, shipping whole pallets and loose boxes. Stock accounting in 1C stays untouched.',
      solution: 'A Flutter app whose data goes through an interface layer that later connects to a 1C HTTP service. GS1-128 and EAN scanning plus manual weight entry, a 100×150 label with a QR code, and a rule that pallets of different companies cannot ship together. Exchange protocol v1 is written up as a document: Basic auth, Idempotency-Key, error codes; product marking is planned for the next stage.',
      result: 'Built: 16 logic and fuzz tests, 12 screen scenarios, and a demo APK for arm64 and arm32 handed to the client. Not in production yet; connecting to 1C is the next stage.',
    },
    es: {
      task: 'Un mayorista de carne con 7 terminales de captura de datos Android. Necesitaba el control de palés: recepción del camión, formación, división y deshecho de palés, envío de palés completos y de cajas sueltas. La contabilidad de mercancía en 1C no se toca.',
      solution: 'Una app en Flutter cuyos datos pasan por una capa de interfaz que luego se conecta a un servicio HTTP de 1C. Escaneo de GS1-128 y EAN más introducción manual del peso, etiqueta de 100×150 con QR y la regla de no enviar juntos palés de empresas distintas. El protocolo de intercambio v1 está documentado: autenticación Basic, Idempotency-Key, códigos de error; el marcado de productos queda para la siguiente etapa.',
      result: 'Desarrollado: 16 pruebas lógicas y de fuzzing, 12 escenarios de pantallas y un APK de demostración para arm64 y arm32 entregado al cliente. Aún no está en producción; la conexión con 1C es la siguiente etapa.',
    },
  },
};
