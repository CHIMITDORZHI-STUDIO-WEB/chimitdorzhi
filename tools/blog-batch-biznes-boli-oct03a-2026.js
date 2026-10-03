// Тематические статьи 03.10.2026, пятая серия: 1С, МойСклад и учёт (Меркурий и ФГИС, перенос данных, стоимость 1С и ИТС, сверка эквайринга, ЕГАИС в рознице, обмен ЗУП и Бухгалтерии, нестандартные чеки в МойСклад, заказ поставщику из файла, склад на старых WMS, ИИ и договоры в 1С:Документооборот).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-03';
const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });
const ART = (s) => require('./_art-' + s + '.js');
module.exports = [
  'merkuriy-fgis-zerno-eis-iz-1s-oshibki-obmena-2026',
  'perenos-bp-v-unf-ut-10-3-v-roznicu-chto-perenositsya-2026',
  'skolko-stoit-1s-its-licenzii-chto-obyazatelno-2026',
  'sverka-reestrov-ekvayringa-sberbank-alfa-v-1s-bp-2026',
  'egais-magazin-piva-i-sigaret-roznitsa-utm-oshibki-2026',
  'obmen-zup-i-buhgalteriya-posle-obnovleniya-kd2-rib-2026',
  'nestandartnye-cheki-moysklad-sertifikaty-kredit-avans-2026',
  'zakaz-postavshchiku-iz-excel-i-foto-nakladnoy-v-moysklad-2026',
  'upravlenie-skladom-3-1-i-starye-wms-yacheyki-otbor-specialist-2026',
  'ii-proverka-i-soglasovanie-dogovorov-v-1s-dokumentooborot-2026',
].map((s) => E(ART(s)));
