// Тематические статьи 02.10.2026, третья серия: 1С, МойСклад и маркетплейсы (маркировка и ПИоТ, токен Честного знака, закон 289-ФЗ, API Ozon, ЭПД и МЧД, Sber API, сверка WB, маржа, НДС на УСН, страж цены, поставки, сбои и откат в МойСклад, заказы с сайта, производство, старые базы, ТСД, чужая 1С, приложение в каталог).
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
  'tc-piot-kassa-ne-probivaet-markirovannyy-tovar-2026',
  'token-chestnyy-znak-oshibka-400-uuid-2026',
  'zakon-289-fz-selleram-uvedomleniya-shtrafy-sroki-2026',
  'ozon-vyklyuchil-finansovyy-api-vygruzka-slomalas-2026',
  'epd-i-mchd-kto-chto-podpisyvaet-etrn-zavis-2026',
  'vypiska-sberbanka-v-1s-ne-gruzitsya-sber-api-2026',
  'vyplata-wildberries-ne-shoditsya-s-otchetom-sverka-2026',
  'marzha-po-artikulu-na-marketpleysah-realnaya-pribyl-2026',
  'nds-na-usn-porog-20-mln-marketpleysy-baza-2026',
  'strazh-ceny-marketpleys-snizil-cenu-sam-2026',
  'raschet-postavok-na-sklady-wb-ozon-skolko-vezti-2026',
  'integraciya-molcha-teryaet-zakazy-moysklad-503-429-2026',
  'moysklad-integraciya-isportila-kartochki-otkat-bekap-2026',
  'zakazy-iz-tilda-i-wordpress-v-moysklad-trek-statusy-2026',
  'moysklad-chestnyy-znak-tovar-na-metry-upakovka-2026',
  'proizvodstvo-v-moysklad-brak-postavka-chto-dokupit-2026',
  'staraya-1s-77-upp-i-markirovka-most-ili-pereezd-2026',
  'kleverens-sklad-15-data-mobile-netipovaya-konfiguraciya-2026',
  'prinimaem-chuzhuyu-1s-pasport-dorabotok-ishodniki-2026',
  'prilozhenie-v-katalog-moysklad-ip-komissiya-hosting-2026',
].map((s) => E(ART(s)));
