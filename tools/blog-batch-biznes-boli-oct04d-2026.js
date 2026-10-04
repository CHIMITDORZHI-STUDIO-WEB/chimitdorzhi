// Серия «Хочу начать бизнес», 04.10.2026, третья пачка: мини-пекарня, автосервис и шиномонтаж, груминг и зоогостиница, студия йоги и танцев, доставка обедов в офисы, цветочный бутик, прачечная самообслуживания, организатор свадеб, монтаж кондиционеров, крафтовая ферма. Без обещаний дохода, цифры только из источников или условные.
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
  'mini-pekarnya-s-tochkoy-prodazh-s-nulya-pomeshchenie-merkuriy-kassa-2026',
  'avtoservis-i-shinomontazh-s-nulya-zakaz-naryad-garantiya-otkhody-2026',
  'grooming-salon-i-zoogostinica-s-nulya-dogovor-veterinarnye-pravila-zapis-2026',
  'studiya-yogi-i-tancev-s-nulya-zal-abonementy-raspisanie-2026',
  'dostavka-domashnih-obedov-v-ofisy-s-nulya-sanitariya-predzakaz-marshruty-2026',
  'cvetochnyy-butik-i-dostavka-buketov-s-nulya-zakupka-spisaniya-predzakaz-2026',
  'pralechnaya-samoobsluzhivaniya-s-nulya-oborudovanie-stoki-kassa-2026',
  'organizator-svadeb-i-meropriyatiy-s-nulya-dogovor-smeta-predoplaty-2026',
  'montazh-kondicionerov-s-nulya-dopuski-garantiya-zayavki-2026',
  'kraftovaya-ferma-s-dostavkoy-po-podpiske-s-nulya-veterinarnye-dokumenty-merkuriy-2026',
].map((s) => E(ART(s)));
