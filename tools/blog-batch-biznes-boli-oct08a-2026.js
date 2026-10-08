// Владельцам бизнеса и заказчикам разработки, 08.10.2026: офлайн-режим, роли и права, перенос клиентов из Excel, от демо к рабочей системе, вход без пароля, геометка в отчёте, сайт косметики, продажа доменов, данные как продукт, персональные разборы. Без обещаний дохода, цифры только из источников или условные.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-08';
const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });
const ART = (s) => require('./_art-' + s + '.js');
module.exports = [
  'prilozhenie-dlya-obekta-bez-interneta-oflayn-rezhim-pwa-2026',
  'kto-chto-vidit-v-prilozhenii-roli-i-prava-dlya-biznesa-2026',
  'perenos-klientskoy-bazy-iz-excel-v-crm-bez-dublirovaniya-2026',
  'ot-demo-k-rabochey-sisteme-chto-menyaetsya-pri-zapuske-2026',
  'vhod-klienta-bez-parolya-sms-ssylka-ili-telegram-2026',
  'geometka-v-otchete-sotrudnika-chto-mozhno-i-chego-nelzya-2026',
  'internet-magazin-kosmetiki-chto-nelzya-pisat-na-sayte-i-cheki-2026',
  'prodazha-domenov-kak-biznes-vitrina-zaglushki-vhodyashchie-zayavki-2026',
  'dannye-kak-platnyy-produkt-svoy-api-klyuchi-limity-prava-2026',
  'personalnye-razbory-eksperta-kak-avtomatizirovat-raschet-i-slaydy-2026',
].map((s) => E(ART(s)));
