// Тематические статьи 03.10.2026, шестая серия: доставка, ЭЦП и учёт (наложенный платёж СДЭК, вебхуки СДЭК, WB FBS и ошибка 409, статусы Почты России, токены и КриптоПро, СФР и сертификаты, реестр ЭЦП и МЧД, СДЭК и Почта в amoCRM, ИИ-проверка домашних заданий, цена доставки и вес).
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
  'sdek-otklyuchil-v2-payment-nalozhennyy-platezh-sverka-2026',
  'vebhuki-sdek-otklyuchayutsya-sami-statusy-ne-prihodyat-2026',
  'wb-fbs-s-1-oktyabrya-sposob-otgruzki-nakladnaya-oshibka-409-2026',
  'pochta-rossii-skryla-detalnye-statusy-chto-pokazyvat-klientu-2026',
  'rutoken-2-0-i-kriptopro-posle-1-aprelya-proverka-za-5-minut-2026',
  'sfr-otklonil-otchet-atribut-soglasovanie-klyuchey-sertifikat-2026',
  'reestr-ecp-mchd-i-srokov-dlya-buhfirmy-bot-napominalka-2026',
  'sdek-i-pochta-rossii-v-amocrm-trek-nomer-status-v-sdelke-2026',
  'ii-proverka-domashnih-zadaniy-onlayn-shkola-rubriki-2026',
  'cena-dostavki-na-sayte-i-schet-sdek-gabarity-obyemnyy-ves-2026',
].map((s) => E(ART(s)));
