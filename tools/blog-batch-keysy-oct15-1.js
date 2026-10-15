// Разбор работы 14-15.10.2026: четыре демо-сайта для агентства недвижимости в Дубае
// (хаб, три варианта каталога по референсам маркетолога и вариант «маркетплейс» с объявлениями собственников).
// Без названия агентства, имён, доменов, IP и сайтов-референсов; статус честный (демо на стенде, решение за заказчиком).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-15';
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
    slug: 'chetyre-demo-sayta-agentstva-nedvizhimosti-dubay-keys-2026',
    heroIcon: 'ph-fill ph-browsers',
    title: 'Четыре демо-сайта агентства недвижимости в Дубае: каталог и объявления',
    metaTitle: 'Кейс: четыре демо-сайта для агентства недвижимости в Дубае',
    metaDescription: 'Кейс: хаб и четыре демо-сайта агентства в Дубае. Умный фильтр со 121 страницей подборок, доска объявлений от собственников с проверкой брокером.',
    excerpt: 'Маркетолог агентства недвижимости в Дубае прислала два референса каталога. За два дня я собрал хаб и четыре варианта сайта на общих данных: три подачи каталога с умным фильтром и маркетплейс, где объявления добавляют собственники, а брокер проверяет их и публикует с разрешением DLD. Демо на тестовом стенде, выбор за заказчиком.',
    tags: ['кейс', 'сайт агентства недвижимости', 'умный фильтр', 'доска объявлений', 'Дубай'],
    relatedSlugs: ['sayt-agentstva-nedvizhimosti-v-dubae-dlya-pokupateley-iz-rossii-2026', 'vitrina-nedvizhimosti-crm-keys-2026', 'bitrix24-vs-amocrm-2026', 'ii-administrator-perepiski-2026'],
    ctaInternal: { url: `${S}/services/web-development/`, label: 'Обсудить сайт с каталогом' },
  },
].map(E);
