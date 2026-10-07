// Предпринимателям и стартаперам, 06.10.2026: регистрация ИП или ООО, налоговый календарь, договор поставки, неплатящие клиенты, проверки, лизинг, страхование, закрытие бизнеса, личные и бизнес-деньги, продажа бизнеса. Без обещаний дохода, цифры только из источников или условные.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-06';
const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });
const ART = (s) => require('./_art-' + s + '.js');
module.exports = [
  'registraciya-ip-ili-ooo-poshagovo-okved-schet-rezhim-2026',
  'nalogovyy-kalendar-malogo-biznesa-ens-uvedomleniya-sroki-2026',
  'dogovor-postavki-otsrochka-priemka-brak-neustoyka-2026',
  'plohie-kliyenty-i-debitorka-otkaz-rastorzhenie-pretenziya-2026',
  'proverki-malogo-biznesa-fns-rospotrebnadzor-trudovaya-inspekciya-2026',
  'oborudovanie-lizing-ili-svoi-dengi-kak-sravnit-2026',
  'strahovanie-biznesa-chto-pokryvaet-i-chto-net-minimum-2026',
  'zakrytie-ip-ili-ooo-poryadok-dolgi-kassa-arhiv-2026',
  'lichnye-i-biznes-dengi-kak-razdelit-i-platit-sebe-2026',
  'prodazha-malogo-biznesa-ili-doli-ocenka-dokumenty-pokupatel-2026',
].map((s) => E(ART(s)));
