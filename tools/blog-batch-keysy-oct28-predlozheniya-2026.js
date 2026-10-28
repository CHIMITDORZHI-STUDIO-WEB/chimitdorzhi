// Кейсы-предложения 28.10.2026: проекты в стадии обсуждения (КП, презентации, макеты, демо).
// Без имён клиентов, посредников и цен; статус честный: предложение передано, решение за заказчиком.
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
  'logistika-svoya-sistema-vmesto-bitrix24-predlozhenie-keys-2026',
  'dostavka-edy-chita-avtomatizaciya-predlozhenie-keys-2026',
  'predzakaz-kofe-pwa-kofeyni-v-klinikah-predlozhenie-keys-2026',
  'crm-studii-trenirovok-makety-predlozhenie-keys-2026',
  'odno-okno-kliniki-ii-protokol-predlozhenie-keys-2026',
  'remkontrol-bot-zayavka-zamer-smeta-predlozhenie-keys-2026',
  'lichnyy-kalendar-po-date-rozhdeniya-predlozhenie-keys-2026',
  'ii-stilist-po-selfi-telegram-max-predlozhenie-keys-2026',
  'artel-posutochnikov-servis-predlozhenie-keys-2026',
  'zadachi-sotrudnikam-iz-1s-android-predlozhenie-keys-2026',
  'prostye-resheniya-saas-iz-blokov-predlozhenie-keys-2026',
  'bot-i-rassylki-hudozhnicy-perenos-predlozhenie-keys-2026',
  'rozygryshi-s-partnerkoy-v-max-riski-predlozhenie-keys-2026',
  'deteyling-dubay-klienty-partnerka-predlozhenie-keys-2026',
].map(E);
