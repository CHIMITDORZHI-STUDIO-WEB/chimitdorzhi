// Подрядчикам и заказчикам разработки, 06.10.2026: материалы и акты на стройке, смета против факта, отчёты прорабов, субподрядчики, обмен сайта с 1С, аудит чужого проекта, роли заказчика, данные до старта, замер эффекта. Без обещаний дохода, цифры только из источников или условные.
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
  'limity-materialov-na-stroyke-plan-protiv-fakta-soglasovanie-2026',
  'akty-i-ispolnitelnaya-dokumentaciya-na-obekte-kak-ne-teryat-2026',
  'smeta-protiv-fakta-gde-podryadchik-teryaet-marzhu-2026',
  'ezhednevnyy-otchet-prorabov-v-messendzhere-format-foto-2026',
  'subpodryadchiki-dogovor-akty-oplata-po-faktu-2026',
  'sayt-i-1s-obmen-zakazami-i-ostatkami-tri-sposoba-2026',
  'chuzhoy-bot-ili-sayt-ne-rabotaet-audit-za-dva-chasa-2026',
  'kto-prinimaet-resheniya-so-storony-zakazchika-roli-pravki-2026',
  'chto-sobrat-zakazchiku-do-starta-razrabotki-dannye-dostupy-2026',
  'effekt-cherez-30-dney-posle-zapuska-do-i-posle-cifry-2026',
].map((s) => E(ART(s)));
