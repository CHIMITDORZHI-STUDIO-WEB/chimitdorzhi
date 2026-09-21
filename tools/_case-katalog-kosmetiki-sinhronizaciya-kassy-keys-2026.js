module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-storefront',
    title: 'Каталог косметики: пустая витрина, 591 товар и связь с кассой',
    metaTitle: 'Кейс: каталог косметики на конструкторе и связь с кассой',
    metaDescription: 'Почему витрина показывала демо-товары в долларах, как 591 товар разметили в 25 разделов с фильтром по бренду и связали кассу с сайтом по CommerceML.',
    excerpt: 'Сеть магазинов косметики: каталог заполнен, а сайт показывает демо-товары в долларах. Две причины пустой витрины, разметка 591 товара, фильтр по бренду и связь кассы с сайтом без платного посредника. Остатки пока честно помечены как непроверенные.',
    tags: ['кейс', 'интернет-магазин', 'интеграция с кассой', 'каталог товаров'],
    cta: 'site',
    relatedSlugs: ['konstruktor-ili-zakazat-2026', 'ostatki-mezhdu-magazinami-seti-2026', 'evotor-atol-ili-oblachnaya-kassa-2026'],
  },
  flagship: {
    name: 'Каталог косметики: витрина, разделы и связь с кассой',
    slug: 'katalog-kosmetiki-sinhronizaciya-kassy-keys-2026',
    type: 'site', done: true,
    task: 'Сеть магазинов косметики, сайт на конструкторе. Каталог был заполнен, а витрина показывала демо-товары с ценами в долларах. Нужны были меню по типу средства, фильтр по бренду и остатки из кассовой системы.',
    solution: 'Нашёл две причины пустой витрины: у блока магазина стоял источник «каталог-пример», а все 591 товар были поштучно выключены в видимости; валюту перевёл в рубли. Товары разметил скриптом-классификатором и загрузил обратно CSV-импортом. Кассу связал с сайтом по CommerceML без платного складского сервиса, после первой выгрузки сопоставил карточки кассы со старыми по названиям. Массовое включение и выключение товаров — скриптом на странице конструктора; публикацию платформа принимает только от живого клика, поэтому кнопку жмёт владелец.',
    result: '25 разделов по типу средства и фильтр «Бренд»; второй раздел по типу получили 247 из 248 брендовых товаров, бренд заполнен у 394 из 591. Сопоставлено 356 пар (286 точно, 70 по близости), на 560 карточек кассы добавлены раздел и бренд; на витрине 853 товара, 640 из них синхронизируются с кассой. Не проверено: передача остатков — две ручные выгрузки дали «Обновлено: 0», автоотправка ещё не включена.',
    stack: ['конструктор сайтов', 'CommerceML', 'CSV-импорт', 'Python', 'JavaScript'],
    en: {
      task: 'A chain of cosmetics shops with a site on a website builder. The catalogue was filled in, yet the storefront showed the builder demo products priced in dollars. They needed a menu by product type, a brand filter and stock levels from the till system.',
      solution: 'I found two causes of the empty storefront: the shop block was pointed at the "sample catalogue" source, and all 591 products had been switched off one by one; the currency was moved to roubles. Products were tagged by a classifier script and loaded back via CSV import. The till was linked to the site over CommerceML without a paid inventory service, and after the first export its cards were matched to the old ones by name. Bulk show and hide runs as a script on the builder page; the platform accepts publishing only from a real human click, so the owner presses the button.',
      result: '25 sections by product type and a Brand filter; 247 of 248 branded products got a second section by type, and the brand is filled for 394 of 591. 356 pairs matched (286 exact, 70 by similarity), section and brand added to 560 till cards; the storefront holds 853 products, 640 of them synced with the till. Not verified yet: stock transfer — two manual exports returned "Updated: 0", and automatic sending is not switched on.',
    },
    es: {
      task: 'Una cadena de tiendas de cosmética con la web en un constructor. El catálogo estaba lleno, pero la tienda mostraba productos de demostración con precios en dólares. Hacían falta un menú por tipo de producto, un filtro por marca y el stock desde el sistema de caja.',
      solution: 'Encontré dos causas de la tienda vacía: el bloque de tienda usaba la fuente «catálogo de ejemplo» y los 591 productos estaban ocultos uno por uno; la moneda pasó a rublos. Los productos se clasificaron con un script y se cargaron de nuevo por importación CSV. La caja se conectó a la web por CommerceML sin un servicio de inventario de pago y, tras la primera exportación, sus fichas se emparejaron con las antiguas por nombre. Mostrar y ocultar en masa se hace con un script en la página del constructor; la plataforma solo acepta publicar con un clic humano, así que el botón lo pulsa el dueño.',
      result: '25 secciones por tipo de producto y filtro «Marca»; 247 de 248 productos de marca recibieron una segunda sección por tipo, y la marca está rellena en 394 de 591. Se emparejaron 356 pares (286 exactos, 70 por similitud) y se añadieron sección y marca a 560 fichas de caja; la tienda muestra 853 productos, 640 sincronizados con la caja. Sin verificar: la transferencia de stock — dos exportaciones manuales dieron «Actualizado: 0» y el envío automático aún no está activado.',
    },
  },
};
