// Кейсы 28.10.2026: запуски, рабочие демо и сданные работы конца октября.
// Без имён клиентов, доменов и сумм; статус честный (в проде / рабочее демо / сдано).
const C = (s) => require('./blog-content-' + s + '.js');
const M = (s) => require('./_case-' + s + '.js').meta;
const D = '2026-10-28';
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
  'pulty-sobstvennika-sayt-probnyy-kabinet-keys-2026',
  'uchet-dlya-buhfirmy-v-dubae-bot-pwa-keys-2026',
  'minio-dlya-servera-vzaimodeystviya-1c-keys-2026',
  'nyutag-simulyator-zhizni-sela-keys-2026',
  'crowdy-ii-instrumenty-dlya-max-keys-2026',
  'ii-buhgalter-1s-stend-foruma-keys-2026',
  'prilozhenie-rukovoditelya-komandy-telegram-max-keys-2026',
  'internet-magazin-ukrasheniy-iz-kamnya-chita-keys-2026',
  'ii-servis-upravleniya-zhiznyu-mvp-keys-2026',
  'platforma-meropriyatiy-bilety-qr-usdt-keys-2026',
  'audity-i-analitika-dlya-agentstva-oae-keys-2026',
].map(E);
