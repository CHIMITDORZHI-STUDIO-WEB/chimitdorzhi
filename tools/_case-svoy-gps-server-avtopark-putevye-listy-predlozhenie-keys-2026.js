module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-map-pin-line',
    title: 'Свой GPS-сервер для автопарка из 50 машин: стенд и путевые листы',
    metaTitle: 'Кейс: свой GPS-сервер для автопарка с путевыми листами',
    metaDescription: 'Свой сервер Traccar вместо платного мониторинга для парка около 50 машин: рабочий стенд, первый трекер на связи, модуль путевых листов, тест одобрен.',
    dateModified: '2026-11-21',
    excerpt: 'Компания с парком около 50 машин хочет уйти от абонентской платы за мониторинг на собственный сервер. Я проверил её трекеры, предложил три варианта по объёму и поднял рабочий стенд: первый трекер на связи, модуль собирает путевой лист по данным машины, итог теста руководство одобрило. Остальной парк пока не подключён.',
    tags: ['кейс', 'GPS-мониторинг', 'Traccar', 'путевые листы', 'автопарк', 'рабочий стенд'],
    cta: 'auto',
    relatedSlugs: ['traccar-gps-monitoring-transporta-2026', 'putevye-listy-elektronno-2026', 'gps-trekking-sotrudnikov-cherez-telefon-2026', 'razvedka-chuzhoy-sistemy-pered-proektom-2026'],
  },
  flagship: {
    name: 'Свой GPS-сервер для автопарка: стенд и путевые листы',
    slug: 'svoy-gps-server-avtopark-putevye-listy-predlozhenie-keys-2026',
    type: 'doc', done: false, delivered: true,
    task: 'Компания с парком около 50 машин платит абонентскую плату за облачный мониторинг и хочет перейти на собственный сервер, сохранив текущие трекеры. Кроме онлайн-карты, пробега и архива поездок ей нужны заполненные путевые листы.',
    solution: 'Разобрал две модели трекеров, предложил сервер Traccar, пилот на одной-двух машинах, модуль автозаполнения путевых листов и три варианта по объёму. Затем поднял рабочий стенд: трекер компании передаёт данные, модуль собирает лист по поездкам, справочник водителей и отделы настроены.',
    result: 'Рабочий стенд на одну машину компании, итог теста руководство одобрило. Остальной парк не подключён, перенос на сервер заказчика впереди, второй тип трекера не проверялся.',
    stack: ['Traccar', 'Python', 'FastAPI', 'HTML и CSS', 'PDF'],
    en: {
      task: 'A company with a fleet of about 50 vehicles pays a subscription for a cloud monitoring service and wants to move to its own server while keeping its current trackers. Besides the live map, mileage and trip archive, it needs filled-in waybills.',
      solution: 'I reviewed the two tracker models and proposed a Traccar server, a pilot on one or two vehicles, an auto-filled waybill module and three variants by scope. Then I set up a working test stand: a tracker of the company sends data, the module builds a waybill from the trips, and the driver directory and departments are configured.',
      result: 'A working test stand for one vehicle of the company, and the management approved the test outcome. The rest of the fleet is not connected, the move to the server of the customer is still ahead, and the second tracker type has not been tested.',
    },
    es: {
      task: 'Una empresa con una flota de unos 50 vehículos paga una suscripción por un servicio de monitoreo en la nube y quiere pasar a un servidor propio conservando sus rastreadores actuales. Además del mapa en vivo, el kilometraje y el archivo de viajes, necesita hojas de ruta ya rellenadas.',
      solution: 'Analicé los dos modelos de rastreadores y propuse un servidor Traccar, un piloto en uno o dos vehículos, un módulo de hojas de ruta autocompletadas y tres variantes por alcance. Después monté un banco de pruebas operativo: el rastreador de la empresa envía datos, el módulo genera la hoja de ruta a partir de los viajes, y el directorio de conductores y los departamentos están configurados.',
      result: 'Un banco de pruebas operativo para uno de los vehículos de la empresa, y la dirección aprobó el resultado de la prueba. El resto de la flota no está conectado, el traslado al servidor del cliente queda pendiente y el segundo tipo de rastreador no se ha probado.',
    },
  },
};
