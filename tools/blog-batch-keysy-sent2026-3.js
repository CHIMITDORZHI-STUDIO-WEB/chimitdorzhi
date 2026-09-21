// Разборы работ третьей недели сентября: каталог косметики с кассой, паллеты на ТСД,
// сайт компании в ОАЭ, бот спортивной аналитики, инструменты партнёров турклуба,
// конвейер роликов, мультсериал по либретто, старомонгольский текст, аудит по 152-ФЗ.
const C = (s) => require('./blog-content-' + s + '.js');
const M = (s) => require('./_case-' + s + '.js').meta;
const D = '2026-09-22';
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
  'katalog-kosmetiki-sinhronizaciya-kassy-keys-2026',
  'palletnyy-uchet-tsd-1c-keys-2026',
  'korporativnyy-sayt-kompanii-oae-keys-2026',
  'bot-sportivnoy-analitiki-backtest-keys-2026',
  'instrumenty-dlya-partnerov-turkluba-keys-2026',
  'konveyer-rolikov-foto-infografika-keys-2026',
  'multserial-po-libretto-ii-keys-2026',
  'raspoznavanie-staromongolskogo-teksta-keys-2026',
  'audit-sayta-po-152-fz-dokazatelstva-keys-2026',
].map(E);
