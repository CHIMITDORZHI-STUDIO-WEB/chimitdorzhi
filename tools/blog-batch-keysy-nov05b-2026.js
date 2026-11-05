// Кейсы 05.11.2026, пакет 2.
// Без имён клиентов, доменов и сумм; статус честный (в проде / рабочее демо / сдано).
const C = (s) => require('./blog-content-' + s + '.js');
const M = (s) => require('./_case-' + s + '.js').meta;
const D = '2026-11-05';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const CTA = {
  site: { url: `${S}/services/web-development/`, label: 'Обсудить сайт' },
  bots: { url: `${S}/development/telegram-bots/`, label: 'Обсудить бота' },
  auto: { url: `${S}/services/business-automation/`, label: 'Обсудить автоматизацию' },
};

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));
const E = (slug) => {
  const html = C(slug);
  const { cta, ...m } = M(slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 6, category: 'cases',
      servicesOffer: SVC_BIZ },
    m, { slug, ctaInternal: CTA[cta] || CTA.site, contentHtml: html, toc: tocFrom(html) });
};

module.exports = [
  'issledovanie-rynka-kofeyni-biznes-plan-san-paulu-keys-2026',
  'platforma-vstrech-svoy-kod-afisha-mesta-keys-2026',
  'konfigurator-vhodnyh-dverey-na-sayt-demo-keys-2026',
  'elektronnoe-pto-ispolnitelnaya-dokumentaciya-predlozhenie-keys-2026',
  'seriya-rolikov-dlya-dostavki-edy-v-dubae-keys-2026',
  'konditerskaya-konstruktor-torta-napominaniya-predlozhenie-keys-2026',
  'sistema-partnerov-dlya-cvetochnoy-studii-predlozhenie-keys-2026',
  'vernut-sayt-na-tilde-i-domen-posle-uhoda-razrabotchika-predlozhenie-keys-2026',
  'lokalnaya-otkrytaya-ii-model-dlya-promptov-i-kartinok-predlozhenie-keys-2026',
  'promo-rolik-igry-remotion-iz-kadrov-igry-keys-2026',
].map(E);
