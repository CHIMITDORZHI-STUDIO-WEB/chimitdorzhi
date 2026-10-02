// Тематические статьи 02.10.2026, четвёртая серия: 1С и маркетплейсы (выгрузка из 1С в SQL и BI, МойСклад для сети точек, 1С для мастерской и электромонтажа, переход с FBO на FBS, единая отчётность по нескольким юрлицам).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-02';
const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });
const ART = (s) => require('./_art-' + s + '.js');
module.exports = [
  'vygruzka-iz-1s-v-sql-i-bi-konsolidaciya-neskolkih-baz-2026',
  'moysklad-dlya-seti-tochek-sezonnoy-torgovli-offlayn-kassa-2026',
  'kakaya-1s-nuzhna-elektromontazhu-remontu-masterskoy-obekty-2026',
  'perehod-s-fbo-na-fbs-vozvraty-pvz-schitaem-zaranee-2026',
  'otchetnost-po-neskolkim-ip-i-ploshchadkam-edinyy-otchet-vladelcu-2026',
].map((s) => E(ART(s)));
