// 1С, склад и маркетплейсы: десять статей под запросы франчайзи и оптовиков.
// Поводом стали два обращения 18.09.2026 — паллетный учёт на ТСД и модули 1С для маркетплейсов.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-18';
const S = 'https://chimitdorzhi.tech';

const SVC_1C = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-barcode', label: 'Складской учёт и приложения для ТСД' },
  { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция 1С с сайтом, ботом и маркетплейсами' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-robot', label: 'Боты для заказов в Telegram и MAX' },
]};

const CTA_SKLAD = { url: `${S}/services/logistics-automation/`, label: 'Обсудить автоматизацию склада' };
const CTA_INTEGR = { url: `${S}/predlozheniya/integraciya-sistem/`, label: 'Обсудить интеграцию с 1С' };
const CTA_MP = { url: `${S}/predlozheniya/avtomatizaciya-sellera-wb-ozon/`, label: 'Обсудить работу с маркетплейсами' };

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));

const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 5, category: 'development',
      servicesOffer: SVC_1C, ctaInternal: CTA_SKLAD, toc: tocFrom(html) },
    o, { contentHtml: html });
};

module.exports = [

  // ---------- Склад и ТСД ----------
  E({ slug: 'palletnyy-uchet-1c-ut-11-5-2026', heroIcon: 'ph-fill ph-stack',
    title: 'Паллетный учёт в 1С УТ 11.5: что есть из коробки, а что придётся дописать',
    metaTitle: 'Паллетный учёт в 1С УТ 11.5: готовое решение или доработка',
    metaDescription: 'Есть ли в УТ 11.5 готовый паллетный учёт? Чем паллета отличается от ячейки, что даёт типовая конфигурация и что приходится дописывать оптовому складу.',
    excerpt: 'Частый вопрос франчайзи и оптовиков — есть ли готовое решение для паллет в УТ 11.5. Разбираю, где заканчиваются штатные возможности и как дописать контур паллет, не трогая товарный учёт.',
    tags: ['1С', 'склад', 'паллеты', 'УТ 11.5'],
    relatedSlugs: ['skladskoy-uchet-wms-tsd', 'svoe-prilozhenie-tsd-ili-gotovoe-reshenie-2026', 'inventarizaciya-po-palletam-s-tsd-2026'] }),

  E({ slug: 'svoe-prilozhenie-tsd-ili-gotovoe-reshenie-2026', heroIcon: 'ph-fill ph-device-mobile',
    title: 'Своё приложение на ТСД или готовое решение: что выбрать складу',
    metaTitle: 'Приложение для ТСД: готовое решение или своя разработка',
    metaDescription: 'Лицензия за каждый терминал против разработки один раз. Когда складу выгоднее готовое решение для ТСД, когда своё приложение поверх 1С и как посчитать.',
    excerpt: 'Готовое решение для терминалов быстро запускается, но стоимость растёт с каждым устройством. Показываю, где проходит граница окупаемости и кому что подходит.',
    tags: ['1С', 'ТСД', 'склад', 'разработка'],
    relatedSlugs: ['palletnyy-uchet-1c-ut-11-5-2026', 'skladskoy-uchet-wms-tsd', 'http-servis-1c-dlya-prilozheniya-2026'] }),

  E({ slug: 'vesovoy-tovar-i-sroki-godnosti-v-1c-2026', heroIcon: 'ph-fill ph-scales',
    title: 'Весовой товар и сроки годности в 1С: как учитывать коробки с разным весом',
    metaTitle: 'Весовой товар и сроки годности в 1С: учёт коробок',
    metaDescription: 'Продают в килограммах, двигают коробками, а коробки разные. Как учитывать фактический вес, серии и сроки годности в 1С, чтобы остатки сходились.',
    excerpt: 'Мясо, рыба, сыры — в каждой коробке свой вес. Разбираю, почему средний вес ломает остатки, как фиксировать фактический и как отгружать по сроку годности.',
    tags: ['1С', 'склад', 'весовой товар', 'сроки годности'],
    relatedSlugs: ['shtrihkod-gs1-128-na-korobke-2026', 'palletnyy-uchet-1c-ut-11-5-2026', 'partii-i-gtd-v-1c-importer-2026'] }),

  E({ slug: 'shtrihkod-gs1-128-na-korobke-2026', heroIcon: 'ph-fill ph-barcode',
    title: 'Штрихкод GS1-128 на коробке: что в нём зашито и как читать его на складе',
    metaTitle: 'Штрихкод GS1-128: GTIN, партия, срок годности и вес',
    metaDescription: 'Что означают (01), (10), (11), (17) и (310n) в длинном штрихкоде на коробке, как одно сканирование заполняет товар, вес и партию и что делать без штрихкодов.',
    excerpt: 'На коробках от производителей часто стоит длинный штрихкод с несколькими данными сразу. Показываю, что в нём зашито, как его разбирать и как это ложится в 1С.',
    tags: ['1С', 'штрихкоды', 'GS1-128', 'склад'],
    relatedSlugs: ['vesovoy-tovar-i-sroki-godnosti-v-1c-2026', 'svoe-prilozhenie-tsd-ili-gotovoe-reshenie-2026', 'markirovka-ostatkov-na-sklade-2026'] }),

  E({ slug: 'partii-i-gtd-v-1c-importer-2026', heroIcon: 'ph-fill ph-boat',
    title: 'Партии и ГТД в 1С у импортёра: как не потерять номер декларации при отгрузке',
    metaTitle: 'Номер ГТД в 1С у импортёра: как не потерять при отгрузке',
    metaDescription: 'Коробки из разных поставок смешиваются на складе, и номер декларации теряется. Где он пропадает чаще всего и как терминал на складе это предотвращает.',
    excerpt: 'Импортёр получает товар по разным декларациям, а на складе всё перемешивается. Разбираю, где номер ГТД теряется по цепочке и как держать его от приёмки до отгрузки.',
    tags: ['1С', 'ГТД', 'импорт', 'склад'],
    relatedSlugs: ['vesovoy-tovar-i-sroki-godnosti-v-1c-2026', 'palletnyy-uchet-1c-ut-11-5-2026', 'dorabotka-integraciya-1c-2026'] }),

  E({ slug: 'inventarizaciya-po-palletam-s-tsd-2026', heroIcon: 'ph-fill ph-clipboard-text',
    title: 'Инвентаризация по паллетам с ТСД: пересчитать склад за день вместо недели',
    metaTitle: 'Инвентаризация по паллетам с ТСД: быстрый пересчёт склада',
    metaDescription: 'Пересчитывать паллеты, а не коробки: как проходит инвентаризация с терминалом, как разбирать расхождения и почему паллеты надо учитывать с первого дня.',
    excerpt: 'Классическая инвентаризация останавливает склад на дни. Показываю, как пересчёт по паллетам с терминалом сокращает её до одного дня и какие ошибки мешают.',
    tags: ['1С', 'инвентаризация', 'ТСД', 'склад'],
    relatedSlugs: ['palletnyy-uchet-1c-ut-11-5-2026', 'skladskoy-uchet-wms-tsd', 'svoe-prilozhenie-tsd-ili-gotovoe-reshenie-2026'] }),

  E({ slug: 'http-servis-1c-dlya-prilozheniya-2026', heroIcon: 'ph-fill ph-plugs-connected',
    ctaInternal: CTA_INTEGR,
    title: 'HTTP-сервис в 1С: как подключить мобильное приложение или сайт без обмена файлами',
    metaTitle: 'HTTP-сервис в 1С: связь с приложением и сайтом без файлов',
    metaDescription: 'Выгрузка файлов по расписанию — отставание данных и потери. Что такое HTTP-сервис 1С, что нужно для работы, как договориться о протоколе и защитить базу.',
    excerpt: 'Многие связывают 1С с сайтом и приложениями через файлы по расписанию. Разбираю, как HTTP-сервис отвечает на запросы сразу и что продумать до первой строчки кода.',
    tags: ['1С', 'интеграция', 'HTTP-сервис', 'API'],
    relatedSlugs: ['integraciya-api-na-zakaz-2026', 'dorabotka-integraciya-1c-2026', 'svoe-prilozhenie-tsd-ili-gotovoe-reshenie-2026'] }),

  // ---------- Партнёрство (продажи, с фото автора) ----------
  E({ slug: 'franchayzi-1c-i-vneshniy-razrabotchik-2026', category: 'sales', heroIcon: 'ph-fill ph-handshake',
    ctaInternal: CTA_INTEGR,
    title: 'Франчайзи 1С и внешний разработчик: как поделить работу, чтобы не мешать друг другу',
    metaTitle: 'Франчайзи 1С и внешний разработчик: как делить работу',
    metaDescription: 'Учёт в 1С остаётся за франчайзи, мобильное приложение, бот и печать этикеток — за разработчиком. Кто за что отвечает, как согласовать обмен и кто ведёт клиента.',
    excerpt: 'Франчайзи знают учёт, но держать в штате мобильных разработчиков им невыгодно. Показываю, как поделить задачу клиента так, чтобы клиент остался у франчайзи.',
    tags: ['1С', 'партнёрство', 'франчайзи', 'разработка'],
    relatedSlugs: ['http-servis-1c-dlya-prilozheniya-2026', 'palletnyy-uchet-1c-ut-11-5-2026', 'prodayu-bez-sozvonov-v-perepiske-2026'] }),

  // ---------- Маркетплейсы ----------
  E({ slug: 'gotovyy-modul-1c-dlya-marketpleysov-ili-svoya-integraciya-2026', heroIcon: 'ph-fill ph-puzzle-piece',
    ctaInternal: CTA_MP,
    title: 'Готовый модуль 1С для маркетплейсов или своя интеграция: что выбрать',
    metaTitle: 'Модуль 1С для маркетплейсов или своя интеграция',
    metaDescription: 'Готовый модуль по подписке быстро связывает 1С с WB, Ozon и Яндекс Маркетом, но работает по чужой логике. Когда его хватает, а когда нужна доработка.',
    excerpt: 'Для связи 1С с маркетплейсами есть готовые модули и есть заказная интеграция. Разбираю, что умеет модуль, где он упирается и что проверить до покупки.',
    tags: ['1С', 'маркетплейсы', 'интеграция', 'Wildberries'],
    relatedSlugs: ['integraciya-wildberries-1c-2026', 'ostatki-na-wb-ozon-ym-iz-odnoy-1c-2026', 'biznes-na-marketpleysah-2027'] }),

  E({ slug: 'ostatki-na-wb-ozon-ym-iz-odnoy-1c-2026', heroIcon: 'ph-fill ph-arrows-split',
    ctaInternal: CTA_MP,
    title: 'Остатки на WB, Ozon и Яндекс Маркете из одной 1С: как не продать то, чего нет',
    metaTitle: 'Остатки на WB, Ozon и Яндекс Маркете из одной 1С',
    metaDescription: 'Товар ушёл через одну площадку, а на другой ещё в наличии — и заказ приходится отменять. Как держать остатки в одной 1С и делить их между площадками.',
    excerpt: 'Главная боль продавца на нескольких площадках — перепродажа товара, которого уже нет. Показываю, откуда она берётся и как настроить 1С источником правды для всех площадок.',
    tags: ['1С', 'маркетплейсы', 'остатки', 'Ozon'],
    relatedSlugs: ['gotovyy-modul-1c-dlya-marketpleysov-ili-svoya-integraciya-2026', 'integraciya-wildberries-1c-2026', 'fulfilment-dlya-marketpleysov-2026'] }),

];
