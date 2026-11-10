// Кейсы 10.11.2026.
// Без имён клиентов, доменов и сумм; статус честный (в проде / рабочее демо / сдано).
const C = (s) => require('./blog-content-' + s + '.js');
const M = (s) => require('./_case-' + s + '.js').meta;
const D = '2026-11-10';
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
  'prostaya-onlayn-zapis-spa-vrach-stolik-keys-2026',
  'nabor-vidzhetov-dlya-sayta-malogo-biznesa-predlozhenie-keys-2026',
  'konsierzh-svoi-lyudi-po-miru-telegram-mini-app-keys-2026',
  'zarabotok-v-prilozhenii-partnerskaya-vkladka-uchet-keys-2026',
  'ii-agent-rashod-limity-tarifa-dostup-sotrudnikov-keys-2026',
].map(E);
