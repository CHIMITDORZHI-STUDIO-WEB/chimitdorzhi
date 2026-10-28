module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-diamond',
    title: 'Сайт-магазин украшений из камня для мастерской из Читы: СДЭК и ЮKassa',
    metaTitle: 'Кейс: магазин украшений из камня с СДЭК и ЮKassa',
    metaDescription: 'Сайт мастерской украшений из натурального камня: каталог, доставка СДЭК с картой ПВЗ, оплата ЮKassa с чеками, 152-ФЗ. На сервере заказчика с 24.10.2026.',
    excerpt: 'Мастерская из Читы делает украшения из натурального камня, проводит мастер-классы и учит. Я собрал сайт с каталогом, расчётом доставки СДЭК, оплатой через ЮKassa с чеками, записью на занятия и панелью управления. С 24.10.2026 он работает на сервере и домене мастерской.',
    tags: ['кейс', 'интернет-магазин', 'СДЭК', 'ЮKassa', '152-ФЗ'],
    cta: 'site',
    relatedSlugs: ['152-fz-internet-magazin-2026', 'internet-magazin-chita-ili-marketpleys-2026', 'cena-dostavki-na-sayte-i-schet-sdek-gabarity-obyemnyy-ves-2026', 'gde-zhit-rabochey-sisteme-svoy-server-oblako-ili-podryadchik-2026'],
  },
  flagship: {
    name: 'Магазин украшений из камня: СДЭК и ЮKassa',
    slug: 'internet-magazin-ukrasheniy-iz-kamnya-chita-keys-2026',
    type: 'site', done: true, delivered: true,
    task: 'Ювелирной мастерской из Читы нужен был свой сайт: продажа украшений из натурального камня с доставкой по России, запись на мастер-классы и заявки на обучение. Цвета строго из логотипа, данные покупателей по 152-ФЗ.',
    solution: 'Сайт на FastAPI и SQLite с панелью управления. Каталог из 26 изделий с фильтром по коллекциям, расчёт доставки СДЭК с картой пунктов выдачи и автоматической накладной после оплаты, оплата ЮKassa с чеками по 54-ФЗ и сверкой платежей. Шрифты и карта отдаются с самого сайта, шесть страниц документов, удаление данных по срокам.',
    result: 'В проде с 24.10.2026 на сервере и домене мастерской, адрес отвечает 200 (проверил 28.10.2026). СДЭК и ЮKassa работают в боевом режиме и проверены с нового сервера. Цифр по продажам у меня нет.',
    stack: ['Python', 'FastAPI', 'SQLite', 'API СДЭК', 'ЮKassa', 'Leaflet', 'nginx'],
    en: {
      task: 'A jewellery workshop from Chita needed its own website: selling natural stone jewellery with delivery across Russia, booking master classes and applying for training. Colours strictly from the logo, customer data handled under Russian personal data law 152-FZ.',
      solution: 'A website on FastAPI and SQLite with an admin panel. A catalogue of 26 pieces with a collection filter, CDEK delivery calculation with a pickup point map and an automatic waybill after payment, YooKassa payments with fiscal receipts under 54-FZ and payment reconciliation. Fonts and the map are served from the site itself, six pages of legal documents, data deletion by retention period.',
      result: 'In production since 24 October 2026 on the workshop\'s own server and domain; the address returns 200 (checked on 28 October 2026). CDEK and YooKassa run in live mode and were verified from the new server. I have no sales figures.',
    },
    es: {
      task: 'Un taller de joyería de Chitá necesitaba su propio sitio web: vender joyas de piedra natural con envío a toda Rusia, reservar clases magistrales y solicitar formación. Colores estrictamente del logotipo y datos de los clientes conforme a la ley rusa de datos personales 152-FZ.',
      solution: 'Un sitio en FastAPI y SQLite con panel de administración. Un catálogo de 26 piezas con filtro por colecciones, cálculo de envío de CDEK con mapa de puntos de recogida y guía de envío automática tras el pago, pagos con YooKassa con recibos fiscales según la 54-FZ y conciliación de pagos. Las fuentes y el mapa se sirven desde el propio sitio, seis páginas de documentos legales y borrado de datos por plazos.',
      result: 'En producción desde el 24 de octubre de 2026 en el servidor y el dominio propios del taller; la dirección responde 200 (comprobado el 28 de octubre de 2026). CDEK y YooKassa funcionan en modo real y se comprobaron desde el nuevo servidor. No tengo cifras de ventas.',
    },
  },
};
