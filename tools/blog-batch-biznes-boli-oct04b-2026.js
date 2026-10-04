// Серия «Хочу начать бизнес», 04.10.2026: выбор ниши, подготовка к первой продаже и десять нишевых руководств (пункт выдачи, студия красоты, кофе с собой, посуточная аренда, прокат, клининг, мини-производство, нишевый магазин). Без обещаний дохода, цифры только из источников или условные.
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
  'kak-vybrat-nishu-i-proverit-ideyu-za-2-nedeli-do-vlozheniy-2026',
  'chto-sdelat-do-pervoy-prodazhi-registraciya-schet-kassa-uchet-2026',
  'kak-otkryt-punkt-vydachi-zakazov-marketpleysa-s-nulya-2026',
  'studiya-krasoty-na-2-3-mastera-s-chego-nachat-2026',
  'kofe-s-soboy-mini-tochka-s-nulya-2026',
  'posutochnaya-arenda-kvartir-s-nulya-bronirovanie-uchet-2026',
  'prokat-i-arenda-oborudovaniya-s-nulya-zalog-dogovory-uchet-2026',
  'klining-s-nulya-brigady-zakazy-akty-2026',
  'mini-proizvodstvo-na-zakaz-s-nulya-mebel-poshiv-3d-pechat-2026',
  'nishevyy-internet-magazin-bez-sklada-s-nulya-2026',
].map((s) => E(ART(s)));
