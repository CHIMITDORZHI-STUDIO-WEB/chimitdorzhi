// Разборы работ начала октября 2026: свои продукты (Kinly, Ферзь, SPACE, MCP, Tilda Assistant, Шагай, Витрина решений),
// сданные клиентские проекты и отданные предложения. Без имён клиентов и сумм; статус честный (в проде / разработано / сдано).
const C = (s) => require('./blog-content-' + s + '.js');
const M = (s) => require('./_case-' + s + '.js').meta;
const D = '2026-10-02';
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
  'kinly-semeynyy-assistent-telegram-max-keys-2026',
  'ferz-rabochee-mesto-rukovoditelya-saas-keys-2026',
  'space-platforma-gotovyh-resheniy-keys-2026',
  'svoi-mcp-servery-socseti-iz-dialoga-keys-2026',
  'tilda-assistant-upravlenie-adminkoy-keys-2026',
  'shagay-naadan-telegram-mini-app-keys-2026',
  'vitrina-resheniy-48-kartochek-gruppa-keys-2026',
  'sayt-kosmetologa-etap-1-keys-2026',
  'lending-massazhista-zapis-predoplata-keys-2026',
  'sovmestnye-zakupki-pwa-pvz-keys-2026',
  'self-storage-bronirovanie-boksov-keys-2026',
  'crm-logistiki-istochniki-zayavok-keys-2026',
  'taksi-rayona-bot-pwa-predlozhenie-keys-2026',
  'avtoshkola-pwa-uchet-vozhdeniya-predlozhenie-keys-2026',
  'vozvrat-domena-u-byvshego-razrabotchika-keys-2026',
  'kafe-pwa-gostya-prezentaciya-keys-2026',
  'gostinica-kp-dvuyazychnoe-predlozhenie-keys-2026',
].map(E);
