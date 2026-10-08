// Владельцам бизнеса и заказчикам разработки, 08.10.2026: платформа обучения вместо конструктора, многоязычный сайт, многоуровневая партнёрка, ТЗ на доработку 1С, розыгрыши призов, передача диалога человеку, где жить системе, один бот в двух мессенджерах, склад в таблице, выплаты партнёрам. Без обещаний дохода, цифры только из источников или условные.
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
  'svoya-platforma-obucheniya-vmesto-getcourse-kogda-nuzhna-2026',
  'sayt-i-prilozhenie-na-neskolkih-yazykah-chto-perevodit-seo-2026',
  'mnogourovnevaya-partnerskaya-programma-granica-s-piramidoy-vyplaty-2026',
  'tehzadanie-na-dorabotku-1s-kak-opisat-scenarii-priemka-2026',
  'rozygrysh-prizov-v-messendzhere-pravila-nalog-cheki-2026',
  'bot-peredaet-dialog-cheloveku-operator-istoriya-2026',
  'gde-zhit-rabochey-sisteme-svoy-server-oblako-ili-podryadchik-2026',
  'odin-bot-v-telegram-i-max-chto-obshchee-i-chto-raznoe-2026',
  'skladskoy-uchet-v-tablice-poka-rano-dlya-1s-kogda-perehodit-2026',
  'vyplaty-partneram-i-referalam-uchet-sroki-nalogi-2026',
].map((s) => E(ART(s)));
