// Кейсы 05.11.2026: ИИ-агент студии и кейсы-предложения.
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
  'ii-agent-studii-kabinet-baza-znaniy-podklyucheniya-keys-2026',
  'audit-i-dva-offera-charter-samoletov-yaht-predlozhenie-keys-2026',
  'dataset-buryatskogo-yazyka-predlozhenie-keys-2026',
  'umnye-ekrany-android-tv-predlozhenie-keys-2026',
  'vitrina-max-yurfirma-bankrotstvo-predlozhenie-keys-2026',
  'kontur-ovk-servis-proektov-predlozhenie-keys-2026',
  'set-gostinic-sibir-sistema-bronirovaniya-predlozhenie-keys-2026',
  'poselok-svoy-vezd-vmesto-oblachnogo-shlagbauma-predlozhenie-keys-2026',
  'onlayn-shkola-praktik-koncepciya-predlozhenie-keys-2026',
  'psiholog-pwa-obuchayushchee-prilozhenie-predlozhenie-keys-2026',
  'prilozhenie-delovogo-soobshchestva-makety-predlozhenie-keys-2026',
].map(E);
