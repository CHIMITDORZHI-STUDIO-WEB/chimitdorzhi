// Предпринимателям и стартаперам, 05.10.2026: первые клиенты, договор с разработчиком, независимость от подрядчика, доли и партнёры, первый сотрудник, интервью с клиентами, регламенты, цена, продажа в переписке, метрики. Без обещаний дохода, цифры только из источников или условные.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-05';
const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });
const ART = (s) => require('./_art-' + s + '.js');
module.exports = [
  'pervye-10-klientov-bez-reklamnogo-byudzheta-2026',
  'dogovor-so-studiey-ili-frilanserom-na-razrabotku-etapy-priemka-prava-na-kod-2026',
  'kak-ne-stat-zalozhnikom-podryadchika-dostupy-repozitoriy-dokumentaciya-2026',
  'partnery-i-doli-v-biznese-ip-ili-ooo-soglashenie-vyhod-2026',
  'pervyy-sotrudnik-tk-gph-ili-samozanyatyy-stoimost-oshibki-2026',
  'intervyu-s-klientami-do-razrabotki-10-voprosov-2026',
  'reglamenty-za-nedelyu-biznes-bez-vladeltsa-2026',
  'kak-nazvat-cenu-produktu-ili-usluge-podpiska-ili-razovo-2026',
  'prodazha-v-perepiske-ot-zayavki-do-oplaty-vozrazheniya-2026',
  'pyat-cifr-biznesa-na-kazhduyu-nedelyu-metriki-bez-analitika-2026',
].map((s) => E(ART(s)));
