// Разборы работ недели с 29.09.2026: CRM для стройки, расширение 1С «Контроль материалов»,
// демо платформы продажи доменов, демо магазина косметики, платформа API данных по авто из Китая.
// Без имён клиентов, брендов, доменов и сумм; статус честный (работает / передано на приёмку / демо).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-08';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));
const E = (m) => {
  const html = C(m.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 6, category: 'cases',
      servicesOffer: SVC_BIZ },
    m, { contentHtml: html, toc: tocFrom(html) });
};

module.exports = [
  {
    slug: 'crm-stroitelnoy-kompanii-almaznaya-rezka-keys-2026',
    heroIcon: 'ph-fill ph-hard-hat',
    title: 'CRM и приложение для строительной компании: объект, задачи, отчёты с фото',
    metaTitle: 'Кейс: CRM и PWA для строительной компании, алмазная резка',
    metaDescription: 'Кейс: CRM вокруг объекта для стройки. Четыре кабинета, задачи, отчёты с фото и геометкой, инструмент по QR, push, офлайн PWA, отчёты в Excel.',
    excerpt: 'Строительная компания с алмазной резкой и бурением не видела объёмов и теряла инструмент. Я собрал систему вокруг объекта: четыре кабинета, цепочка задач, отчёты с фото и геометкой, учёт инструмента по QR, офлайн PWA и отчёты по восьми разрезам. Работает на сервере заказчика, модули 4-8 не доведены.',
    tags: ['кейс', 'CRM для стройки', 'PWA', 'учёт инструмента', 'полевые отчёты'],
    relatedSlugs: ['uchet-instrumenta-po-qr-brigady-2026', 'svoya-crm-na-servere-vs-oblachnaya-2026', 'crm-logistiki-istochniki-zayavok-keys-2026', 'it-dlya-stroitelnyh-kompaniy-2026'],
    ctaInternal: { url: `${S}/predlozheniya/crm-stroitelnaya-kompaniya/`, label: 'Обсудить CRM для стройки' },
  },
  {
    slug: 'kontrol-materialov-1c-rasshirenie-keys-2026',
    heroIcon: 'ph-fill ph-stamp',
    title: 'Контроль материалов в 1С: лимиты по видам работ и согласование расхода',
    metaTitle: 'Кейс: расширение 1С «Контроль материалов» для стройки',
    metaDescription: 'Кейс: расширение 1С для строительной организации. Лимиты материалов по видам работ, согласование сверх плана с подписью, письма и сводка, 165 автотестов.',
    excerpt: 'Расширение для 1С:Бухгалтерии строительной организации: лимиты материалов по видам работ из сметы, согласование перемещений и расхода с электронной подписью, задачи, письма и утренняя сводка. Версии от 1.0 до 1.1.2, пакет с инструкцией и чек-листом передан на приёмку, приёмка не подтверждена.',
    tags: ['кейс', '1С', 'расширение 1С', 'стройка', 'согласование'],
    relatedSlugs: ['palletnyy-uchet-tsd-1c-keys-2026', 'dorabotki-1c-cherez-rasshireniya-2026', 'zayavki-na-zakupku-s-soglasovaniem-2026', 'franchayzi-1c-i-vneshniy-razrabotchik-2026'],
    ctaInternal: { url: `${S}/services/accounting-automation/`, label: 'Обсудить доработку 1С' },
  },
  {
    slug: 'platforma-prodazhi-domenov-demo-keys-2026',
    heroIcon: 'ph-fill ph-globe-hemisphere-east',
    title: 'Платформа продажи доменов из портфеля: рабочее демо по ТЗ',
    metaTitle: 'Кейс: демо платформы продажи доменов, витрина и CRM сделок',
    metaDescription: 'Кейс: демо платформы продажи доменов. Витрина, заглушки на доменах, CRM сделок, триггеры спроса, партнёры, биржа. Регистраторы и оплата имитированы.',
    excerpt: 'Владельцы портфеля доменов принесли ТЗ на платформу продажи. Я собрал демо по всем этапам: витрина, заглушки в трёх шаблонах, бэк-офис с пятью ролями, кабинеты покупателя и партнёра, биржа с аукционами. Регистраторы, оплата и нейросеть имитированы, домены выдуманы.',
    tags: ['кейс', 'домены', 'прототип', 'CRM сделок', 'веб-платформа'],
    relatedSlugs: ['hosting-domen-prostymi-slovami-2026', 'vozvrat-domena-u-byvshego-razrabotchika-keys-2026', 'kak-vernut-domen-u-razrabotchika-2026', 'partnerskie-vitriny-multitenant-keys-2026'],
    ctaInternal: { url: `${S}/predlozheniya/veb-servis-platforma/`, label: 'Обсудить платформу' },
  },
  {
    slug: 'internet-magazin-kosmetiki-demo-keys-2026',
    heroIcon: 'ph-fill ph-lipstick',
    title: 'Интернет-магазин косметического средства: демо по ТЗ за ночь',
    metaTitle: 'Кейс: демо интернет-магазина косметики с кабинетом и админкой',
    metaDescription: 'Кейс: демо магазина косметики. Каталог, корзина с промокодами, оформление, кабинет, админка, заявки. ЮKassa, Честный знак и СДЭК пока не подключены.',
    excerpt: 'Производитель косметического средства принёс ТЗ на магазин. Я собрал демо: каталог, корзина с промокодами и бонусами, оформление, кабинет по коду, админка с заказами, отзывами и рассылками, логика двух чеков для маркировки. ЮKassa, Честный знак и СДЭК не подключены.',
    tags: ['кейс', 'интернет-магазин', 'косметика', 'маркировка', 'прототип'],
    relatedSlugs: ['katalog-kosmetiki-sinhronizaciya-kassy-keys-2026', 'priem-oplaty-na-sayt-yukassa-2026', 'chestnyy-znak-podklyuchenie-poshagovo-2026', '152-fz-internet-magazin-2026'],
    ctaInternal: { url: `${S}/development/sites/`, label: 'Обсудить магазин' },
  },
  {
    slug: 'api-dannyh-avto-iz-kitaya-platforma-keys-2026',
    heroIcon: 'ph-fill ph-database',
    title: 'Своя платформа API данных по авто из Китая: новые и б/у',
    metaTitle: 'Кейс: платформа API данных по авто из Китая на сервере заказчика',
    metaDescription: 'Кейс: своя платформа API данных по авто из Китая. Новые и б/у, ключи с лимитом, журнал изменений, формат совместим с коммерческим API. Перенесена к заказчику.',
    excerpt: 'Вместо платного посредника своя платформа данных по авто из Китая: новые и б/у, ключи с суточным лимитом, журнал изменений, формат совместим с популярным коммерческим API. 30 сентября перенесена на сервер заказчика. Данные только с открытых площадок, объём пока скромный.',
    tags: ['кейс', 'API', 'авто из Китая', 'данные', 'интеграции'],
    relatedSlugs: ['razvedka-dannyh-avtoploshchadok-keys-2026', 'avtomost-vitrina-avto-kitay-keys-2026', 'chto-takoe-api-prostymi-slovami-2026', 'wetocar-katalog-avto-kitay-keys-2026'],
    ctaInternal: { url: `${S}/services/china-it/`, label: 'Обсудить данные из Китая' },
  },
].map(E);
