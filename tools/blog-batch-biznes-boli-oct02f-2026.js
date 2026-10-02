// Тематические статьи 02.10.2026, вторая серия: сроки хранения данных, бот молчит, лимиты рассылок, SMS и мессенджеры, цели Метрики, запасной канал, план Б при сбое, ошибка ИИ-ассистента, отчёт по рекламе, автоответ вне часов.
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
  'srok-hraneniya-dannyh-klientov-kogda-udalyat-2026',
  'bot-perestal-otvechat-diagnostika-15-minut-2026',
  'limity-telegram-i-max-rassylka-vstala-2026',
  'sms-ili-messendzher-uvedomleniya-klientam-stoimost-2026',
  'yandeks-metrika-dlya-vladeltsa-pyat-celey-2026',
  'zapasnoy-kanal-svyazi-s-klientami-blokirovka-2026',
  'servis-leg-plan-b-zapis-zakazy-na-bumage-2026',
  'ii-assistent-oshibsya-pri-klientah-pervye-sutki-2026',
  'otchet-podryadchika-po-reklame-shest-cifr-2026',
  'avtootvet-vne-rabochego-vremeni-zayavki-nochyu-2026',
].map((s) => E(ART(s)));
