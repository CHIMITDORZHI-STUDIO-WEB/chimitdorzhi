// Тематические статьи 04.10.2026, седьмая серия: маркетплейсы, банк, налоги и интеграции (Ozon FBS с 6 октября, остатки на складах FBO, MCP банка для ИИ, ЕНС с 1 сентября, 115-ФЗ, Эвотор и сайт, сломанный парсер, претензия к СДЭК, 5Post и Магнит Пост на Tilda, автовыдача цифрового товара).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-04';
const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });
const ART = (s) => require('./_art-' + s + '.js');
module.exports = [
  'ozon-fbs-s-6-oktyabrya-indeks-oshibok-platnaya-priemka-2026',
  'ostatki-na-skladah-marketpleysa-ezhednevnyy-snimok-sverka-aktov-2026',
  'tochka-otkryla-mcp-dlya-ii-agentov-chto-poruchit-i-limity-2026',
  'ens-s-1-sentyabrya-2026-zachet-za-tretih-lic-ukep-uvedomlenie-na-god-2026',
  'blokirovka-po-115-fz-paket-dokumentov-i-poyasnenie-banku-2026',
  'evotor-i-sayt-ostatki-cheki-korrekcii-karta-loyalnosti-2026',
  'parser-perestal-rabotat-prichiny-i-podderzhka-2026',
  'obyavlennaya-cennost-i-pretenziya-sdek-kak-vernut-dengi-za-poteryu-2026',
  '5post-i-magnit-post-na-sayte-tilda-proksi-vidzhet-pvz-2026',
  'avtovydacha-cifrovogo-tovara-posle-oplaty-tilda-yukassa-2026',
].map((s) => E(ART(s)));
