module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-ruler',
    title: 'РемКонтроль: бот для ремонтной компании от заявки до сметы',
    metaTitle: 'Кейс: бот для ремонтной компании, заявка, замер и смета',
    metaDescription: 'Разбор ТЗ и презентация бота для ремонтной компании: заявка, назначение замерщика, замеры с фото, смета по прайсу, утверждение, PDF. Решение за заказчиком.',
    excerpt: 'Ремонтная компания прислала ТЗ на Telegram-бота: заявка, замер, смета по прайсу, утверждение и PDF клиенту. Я разобрал ТЗ и собрал презентацию на 19 слайдов с экранами бота на каждый шаг, ролями, проверками сметы и двумя тарифами. Презентация передана, решение за заказчиком, бот не написан.',
    tags: ['кейс', 'бот в Telegram', 'ремонт', 'смета', 'коммерческое предложение'],
    cta: 'bots',
    relatedSlugs: ['remont-kvartir-zayavki-smety-fotootchety-2026', 'prilozhenie-dlya-zamershchika-i-vyezdnogo-mastera-2026', 'servis-rascheta-smet-razbor-2026', 'remontnye-brigady-smeta-etapy-oplata-2026'],
  },
  flagship: {
    name: 'РемКонтроль: бот заявка, замер, смета',
    slug: 'remkontrol-bot-zayavka-zamer-smeta-predlozhenie-keys-2026',
    type: 'doc', done: false, delivered: true,
    task: 'Ремонтная компания прислала ТЗ на Telegram-бота: заявка от продаж или из CRM, руководитель назначает замерщика, замеры и фото вносятся на объекте, смета считается по прайсу, руководитель утверждает, клиент получает PDF.',
    solution: 'Разбор ТЗ и презентация на 19 слайдов: путь заявки в шесть шагов, пять ролей с правами, экраны бота на каждый шаг, проверки перед расчётом, версии сметы, статусы и уведомления, дашборд руководителя, архитектура на сервере компании. Два тарифа: первый закрывает ТЗ, второй добавляет договор, этапы работ, фотоотчёты, бот для клиентов и веб-дашборд.',
    result: 'Презентация передана, решение за заказчиком. Экраны в ней это макеты, бот не написан и не запущен.',
    stack: ['HTML и CSS', 'Playwright', 'PDF', 'Python, aiogram, FastAPI, PostgreSQL (план)'],
    en: {
      task: 'A renovation company sent a specification for a Telegram bot: a request comes from sales or from the CRM, the manager assigns a surveyor, measurements and photos are entered on site, the estimate is calculated from the price list, the manager approves it and the client receives a PDF.',
      solution: 'A breakdown of the specification and a 19-slide presentation: a six-step request path, five roles with permissions, bot screens for every step, checks before calculation, estimate versions, statuses and notifications, a manager dashboard and an architecture on the company\'s own server. Two plans: the first covers the specification, the second adds contracts, work stages, photo reports, a client bot and a web dashboard.',
      result: 'The presentation was handed over, and the decision is up to the client. The screens in it are mockups; the bot has not been written or launched.',
    },
    es: {
      task: 'Una empresa de reformas envió una especificación para un bot de Telegram: la solicitud llega desde ventas o desde el CRM, el responsable asigna a un medidor, las medidas y las fotos se introducen en la obra, el presupuesto se calcula según la lista de precios, el responsable lo aprueba y el cliente recibe un PDF.',
      solution: 'Un análisis de la especificación y una presentación de 19 diapositivas: un recorrido de la solicitud en seis pasos, cinco roles con permisos, pantallas del bot para cada paso, comprobaciones antes del cálculo, versiones del presupuesto, estados y notificaciones, un panel para el responsable y una arquitectura en el servidor propio de la empresa. Dos tarifas: la primera cubre la especificación y la segunda añade contratos, etapas de obra, informes con fotos, un bot para clientes y un panel web.',
      result: 'La presentación se entregó y la decisión corresponde al cliente. Las pantallas son maquetas; el bot no se ha escrito ni lanzado.',
    },
  },
};
