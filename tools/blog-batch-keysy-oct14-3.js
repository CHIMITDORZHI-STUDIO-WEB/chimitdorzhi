// Разборы работ 14.10.2026 по собственному сайту chimitdorzhi.tech:
// автоматические пометки запрещённых и заблокированных площадок и рубрикатор страницы кейсов в две оси.
// Цифры только из замеров 10-11.10 и 14.10.2026; статус честный (работает на сайте).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-14';
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
    slug: 'avtomarkirovka-zapreshchennyh-ploshchadok-na-sayte-keys-2026',
    heroIcon: 'ph-fill ph-shield-warning',
    title: 'Пометки запрещённых площадок на сайте: автоматически при сборке',
    metaTitle: 'Кейс: автоматические пометки запрещённых площадок на сайте',
    metaDescription: 'Кейс: пометки запрещённых и заблокированных площадок на 192 страницах сайта. Модуль ставит звёздочки при сборке, сноска по факту, линтер ловит пропуски.',
    excerpt: 'Поиск по моему сайту нашёл упоминания запрещённых и заблокированных площадок примерно на 190 страницах, 100 из них без пометки. Я написал модуль, который при сборке ставит одну или две звёздочки и сноску только по найденным площадкам, не трогая ссылки и код. Работает, пометки на 192 страницах.',
    tags: ['кейс', 'маркировка', 'законодательство', 'сборка сайта', 'контент'],
    relatedSlugs: ['kak-pomechat-instagram-whatsapp-meta-na-sayte-2026', 'audit-sayta-po-152-fz-dokazatelstva-keys-2026', 'seo-audit-bloga-1500-statey-keys-2026', 'whatsapp-blokirovka-perevesti-klientov-v-max-i-telegram-2026'],
    ctaInternal: { url: `${S}/services/rkn-audit/`, label: 'Проверить сайт на требования РКН' },
  },
  {
    slug: 'rubrikator-keysov-dve-osi-filtra-keys-2026',
    heroIcon: 'ph-fill ph-sliders',
    title: 'Рубрикатор страницы кейсов: фильтр по типу работы и отрасли',
    metaTitle: 'Кейс: фильтр кейсов в две оси, тип работы и отрасль',
    metaDescription: 'Кейс: 122 кейса на сайте разложены по 7 типам и 10 отраслям. Фильтр под заголовком, счётчики по сочетанию, выбор в адресе, страница легче на 280 КБ.',
    excerpt: 'На странице кейсов было 122 проекта, фильтр стоял ниже 80 развёрнутых карточек, а крупнейшей рубрикой было «Другое». Я сделал фильтр в две оси, что сделано и отрасль, со счётчиками по сочетанию и выбором в адресе. Наверху 6 избранных кейсов, HTML страницы похудел с 773 до 490 КБ.',
    tags: ['кейс', 'UX', 'портфолио', 'фильтр', 'свой сайт'],
    relatedSlugs: ['redizayn-frontenda-cherez-tokeny-keys-2026', 'seo-audit-bloga-1500-statey-keys-2026', 'dostupnost-sayta-a11y-2026', 'keys-6-mesyacev-cifry-2026'],
    ctaInternal: { url: `${S}/services/web-development/`, label: 'Обсудить сайт' },
  },
].map(E);
