module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-funnel',
    title: 'CRM для логистической компании: откуда пришла каждая заявка',
    metaTitle: 'Кейс: CRM для логистики с учётом источников заявок',
    metaDescription: 'CRM для компании, возящей авто из Китая и Японии: два поля источника, раздвоенная воронка, роли и уведомления без персональных данных.',
    excerpt: 'CRM рядом с сайтом логистической компании: у каждой заявки записано, откуда человек узнал о компании и куда обратился. Раздвоенная воронка, менеджеры видят только свои заявки, в уведомлениях нет персональных данных. Работает в бою, статистики по реальным источникам пока нет.',
    tags: ['кейс', 'CRM', 'источники заявок', 'логистика', '152-ФЗ'],
    cta: 'site',
    relatedSlugs: ['sayt-logistiki-kalkulyator-rastamozhki-keys-2026', 'avtomost-vitrina-avto-kitay-keys-2026', 'iz-excel-v-crm-za-mesyac-2027', 'crm-dlya-malogo-biznesa-2026'],
  },
  flagship: {
    name: 'CRM логистической компании с источниками заявок',
    slug: 'crm-logistiki-istochniki-zayavok-keys-2026',
    type: 'platform', done: true,
    task: 'Компания возит грузы и автомобили из Китая и Японии, клиенты приходят из ВК, YouTube, Авито, поиска, по рекомендациям и звонят. Нужно было записывать, откуда пришла каждая заявка, вести воронку и не показывать менеджерам чужих клиентов.',
    solution: 'Своя CRM на Node.js и SQLite без внешних пакетов. Два поля: «откуда узнал» и «куда обратился», источник заявки с сайта определяется по UTM, реферера или коду партнёра. Воронка раздвоена на Китай сухопутом и Японию с Кореей морем, у менеджера доступ только к своим заявкам, а уведомления в Telegram и пуши идут без имён и телефонов.',
    result: 'Работает в бою: адрес отвечает, код на сервере совпадает с моим, автотесты сервера проходят 49 из 49. Реальной статистики по источникам пока нет, заявки из мессенджеров и ВК сами в CRM не падают, это следующий этап.',
    stack: ['Node.js', 'SQLite', 'PWA', 'Web Push', 'UTM-метки'],
    en: {
      task: 'A company ships cargo and cars from China and Japan; clients come from VK, YouTube, classifieds, search, referrals and phone calls. They needed to record where each lead came from, run a pipeline, and keep managers from seeing other people\'s clients.',
      solution: 'A custom CRM on Node.js and SQLite with no external packages. Two fields: "where they heard of us" and "where they contacted us"; the source of a website lead is detected from UTM tags, the referrer or a partner code. The pipeline is split into China by land and Japan and Korea by sea, a manager can only open their own leads, and Telegram and push notifications carry no names or phone numbers.',
      result: 'Live: the address responds, the server code matches mine, and the server test suite passes 49 of 49. There are no real statistics by source yet, and leads from messengers and VK do not reach the CRM on their own; that is the next stage.',
    },
    es: {
      task: 'Una empresa transporta carga y coches desde China y Japón; los clientes llegan desde VK, YouTube, anuncios, buscadores, recomendaciones y llamadas. Había que registrar de dónde viene cada solicitud, llevar el embudo y evitar que los gestores vean clientes ajenos.',
      solution: 'Un CRM propio en Node.js y SQLite sin paquetes externos. Dos campos: "cómo nos conoció" y "dónde nos contactó"; el origen de una solicitud del sitio se detecta por etiquetas UTM, el referente o el código de un socio. El embudo se divide en China por tierra y Japón y Corea por mar, el gestor solo accede a sus propias solicitudes y las notificaciones de Telegram y push no incluyen nombres ni teléfonos.',
      result: 'En funcionamiento: la dirección responde, el código del servidor coincide con el mío y las pruebas del servidor pasan 49 de 49. Todavía no hay estadísticas reales por origen y las solicitudes de mensajeros y VK no llegan solas al CRM; es la siguiente etapa.',
    },
  },
};
