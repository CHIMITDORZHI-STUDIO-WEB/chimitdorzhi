// Серия «Хочу начать бизнес», 04.10.2026, вторая пачка: автомойка самообслуживания, мини-склад, грузоперевозки на газели, ремонт квартир, домашняя кондитерская, детский центр, глэмпинг, фотостудия, вендинг, мастерская. Без обещаний дохода, цифры только из источников или условные.
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
  'avtomoyka-samoobsluzhivaniya-s-nulya-uchastok-oborudovanie-razresheniya-2026',
  'mini-sklad-hraneniya-s-nulya-boksy-dogovor-ohrana-2026',
  'gruzoperevozki-i-pereezdy-na-gazeli-s-nulya-zayavki-strahovanie-2026',
  'remont-kvartir-pod-klyuch-s-nulya-brigada-smeta-akty-2026',
  'domashnyaya-konditerskaya-s-nulya-zakonno-zakazy-predoplata-2026',
  'detskiy-razvivayushchiy-centr-s-nulya-pomeshchenie-zapis-abonementy-2026',
  'glemping-i-nebolshaya-baza-otdyha-s-nulya-zemlya-bronirovanie-2026',
  'fotostudiya-i-arenda-zala-s-nulya-pochasovaya-bron-predoplata-2026',
  'vending-avtomaty-kofe-i-snekov-s-nulya-tochki-kassa-uchet-2026',
  'masterskaya-remonta-tehniki-odezhdy-obuvi-s-nulya-priem-garantii-2026',
].map((s) => E(ART(s)));
