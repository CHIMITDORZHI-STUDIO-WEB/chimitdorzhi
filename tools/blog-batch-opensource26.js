// Батч opensource #26: 6 инструментов без конкурента внутри блога.
// ERPNext, Directus, Snipe-IT, Portainer, Airbyte, Strapi.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-31';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_OS = {
  title: 'Что я делаю с open-source',
  services: [
    { icon: 'ph-fill ph-package', label: 'Разворачиваю на вашем сервере' },
    { icon: 'ph-fill ph-gear', label: 'Настройка под ваши процессы' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция с 1С и вашими системами' },
    { icon: 'ph-fill ph-headset', label: 'Поддержка и обновления' },
  ],
  ctaLabel: 'Обсудить внедрение', ctaUrl: 'https://t.me/chimitdorzhi',
};

const OS_TOC = toc(
  ['chto-eto', 'Что это и что заменяет'],
  ['vozmozhnosti', 'Что умеет'],
  ['komu-podhodit', 'Кому подходит'],
  ['chto-nuzhno', 'Что нужно для запуска'],
  ['kak-vnedrit', 'Как внедрить под ключ'],
  ['faq', 'Частые вопросы'],
  ['vyvody', 'Коротко о главном'],
);

const CTA = { url: 'https://chimitdorzhi.tech/predlozheniya/open-source-pod-klyuch/', label: 'Развернуть под ключ' };

const mk = (o) => Object.assign({
  category: 'opensource', published: true, datePublished: D, dateModified: D,
  readingMinutes: 9, toc: OS_TOC, servicesOffer: SVC_OS, ctaInternal: CTA,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  mk({
    slug: 'erpnext-besplatnaya-erp-2026',
    heroIcon: 'ph-fill ph-buildings',
    title: 'ERPNext: бесплатная ERP для учёта, склада, продаж и HR',
    metaTitle: 'ERPNext: бесплатная ERP на своём сервере',
    metaDescription: 'ERPNext — открытая ERP-система: учёт, склад, продажи, закупки, производство, HR в одном месте, на своём сервере и без лицензий на пользователя. Кому подходит и как внедрить.',
    metaKeywords: 'erpnext, бесплатная erp, erp система, управленческий учёт, erp на своём сервере, erp для малого бизнеса, складской учёт erp',
    excerpt: 'ERP за миллионы рублей и годы внедрения — не единственный вариант. ERPNext даёт учёт, склад, продажи, закупки и HR в одной системе, на своём сервере и без платы за каждого пользователя. Разбираю, кому это подходит и как внедрить без боли.',
    tags: ['ERPNext', 'ERP', 'учёт', 'open-source', '2026'],
    relatedSlugs: ['1c-ili-bitrix24-2026', 'importozameshchenie-po-2026', 'avtomatizaciya-riteyla-seti-2026'],
  }),
  mk({
    slug: 'directus-headless-bekend-2026',
    heroIcon: 'ph-fill ph-database',
    title: 'Directus: CMS и API поверх вашей базы данных',
    metaTitle: 'Directus: headless-бэкенд поверх своей SQL-базы',
    metaDescription: 'Directus превращает вашу SQL-базу в удобную админку и готовый API за минуты: контент, данные, интеграции для сайта и приложения. Кому подходит headless-подход и как внедрить.',
    metaKeywords: 'directus, headless cms, api для базы данных, бэкенд для приложения, админка для базы, directus на своём сервере',
    excerpt: 'Есть база данных, но нужна удобная админка и API поверх неё — без месяцев разработки бэкенда. Directus даёт и то, и другое поверх вашей SQL-базы. Разбираю, где это экономит время и кому подходит.',
    tags: ['Directus', 'headless CMS', 'API', 'open-source', '2026'],
    relatedSlugs: ['nocodb-airtable-svoy-server-2026', 'budibase-vnutrennie-prilozheniya-2026', 'svoy-vps-dlya-razrabotchika-2026'],
  }),
  mk({
    slug: 'snipe-it-uchet-orgtehniki-2026',
    heroIcon: 'ph-fill ph-desktop',
    title: 'Snipe-IT: учёт и инвентаризация оргтехники в компании',
    metaTitle: 'Snipe-IT: учёт оргтехники и инвентаризация',
    metaDescription: 'Snipe-IT — открытая система учёта оргтехники: кто какой ноутбук получил, где что стоит, когда заканчивается гарантия, история устройств. На своём сервере, без лицензий. Как внедрить.',
    metaKeywords: 'snipe-it, учёт оргтехники, инвентаризация пк, учёт компьютеров, система учёта техники, инвентаризация оборудования компании',
    excerpt: 'Кто получил какой ноутбук, где стоит принтер, у кого корпоративный телефон, когда кончается гарантия — обычно это живёт в голове сисадмина или в старой таблице. Snipe-IT наводит в этом порядок. Разбираю, кому нужно и как внедрить.',
    tags: ['Snipe-IT', 'учёт техники', 'инвентаризация', 'open-source', '2026'],
    relatedSlugs: ['uchet-oborudovaniya-ble-metki-2026', 'importozameshchenie-po-2026', 'self-hosted-infrastruktura-2026'],
  }),
  mk({
    slug: 'portainer-upravlenie-docker-2026',
    heroIcon: 'ph-fill ph-stack',
    title: 'Portainer: панель управления Docker и своим сервером',
    metaTitle: 'Portainer: удобное управление Docker через панель',
    metaDescription: 'Portainer — веб-панель для управления Docker и контейнерами без командной строки: запуск, обновление, логи, мониторинг сервисов. Кому это упрощает жизнь и как поставить.',
    metaKeywords: 'portainer, управление docker, панель docker, docker без командной строки, управление контейнерами, docker для бизнеса',
    excerpt: 'Свой сервер с несколькими сервисами в Docker — это удобно, пока всё работает. Когда надо обновить, перезапустить или посмотреть логи, командная строка пугает. Portainer даёт это через понятную веб-панель. Разбираю, кому пригодится.',
    tags: ['Portainer', 'Docker', 'сервер', 'open-source', '2026'],
    relatedSlugs: ['svoy-vps-dlya-razrabotchika-2026', 'self-hosted-infrastruktura-2026', 'iot-na-otkrytom-zheleze-dlya-biznesa-2026'],
  }),
  mk({
    slug: 'airbyte-sinhronizaciya-dannyh-2026',
    heroIcon: 'ph-fill ph-arrows-left-right',
    title: 'Airbyte: синхронизация данных между 1С, CRM и магазином',
    metaTitle: 'Airbyte: синхронизация данных между системами',
    metaDescription: 'Airbyte собирает данные из разных систем — CRM, магазин, база, сервисы — в одно место для отчётов и аналитики. Что такое ETL простыми словами, кому нужно и как настроить.',
    metaKeywords: 'airbyte, синхронизация данных, интеграция данных, etl система, сбор данных из разных систем, объединение данных crm магазин, data pipeline',
    excerpt: 'Данные разбросаны: продажи в CRM, заказы в магазине, финансы в учёте — и чтобы собрать общий отчёт, кто-то вручную сводит выгрузки. Airbyte делает это автоматически. Объясняю, что такое синхронизация данных простыми словами и кому она нужна.',
    tags: ['Airbyte', 'данные', 'ETL', 'интеграция', '2026'],
    relatedSlugs: ['metabase-dashbordy-bi-2026', 'integraciya-sayta-s-1c-2026', 'avtomatizaciya-riteyla-seti-2026'],
  }),
  mk({
    slug: 'strapi-headless-cms-2026',
    heroIcon: 'ph-fill ph-brackets-curly',
    title: 'Strapi: headless CMS как бэкенд для сайта и приложения',
    metaTitle: 'Strapi: headless CMS для сайта и приложения',
    metaDescription: 'Strapi — открытая headless CMS: один контент-бэкенд с API для сайта, мобильного приложения и других каналов сразу. Чем отличается от обычной CMS, кому подходит и как внедрить.',
    metaKeywords: 'strapi, headless cms, бэкенд для сайта, cms для приложения, api для контента, headless подход, strapi на своём сервере',
    excerpt: 'Когда контент нужен и на сайте, и в приложении, и где-то ещё, вести его в трёх местах — боль. Headless CMS вроде Strapi хранит контент один раз и отдаёт по API куда угодно. Разбираю, чем это отличается от обычной CMS и кому подходит.',
    tags: ['Strapi', 'headless CMS', 'API', 'open-source', '2026'],
    relatedSlugs: ['directus-headless-bekend-2026', 'nocodb-airtable-svoy-server-2026', 'svoy-vps-dlya-razrabotchika-2026'],
  }),
];
