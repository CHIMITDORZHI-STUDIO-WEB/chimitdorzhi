// Разбор популярного совета: удалить цифровой след через агента ChatGPT.
// Факты сверены: help.openai.com (ChatGPT agent), privacy.ca.gov (DROP).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-15';
const S = 'https://chimitdorzhi.tech';
const SLUG = 'udalit-cifrovoy-sled-cherez-chatgpt-agent-2026';
const html = C(SLUG);

module.exports = [{
  published: true, shortForm: true, datePublished: D, dateModified: D, readingMinutes: 5,
  category: 'security',
  servicesOffer: { title: 'Что я делаю для бизнеса', services: [
    { icon: 'ph-fill ph-shield-check', label: 'Кибербезопасность и защита данных' },
    { icon: 'ph-fill ph-robot', label: 'ИИ-агенты и автоматизация' },
    { icon: 'ph-fill ph-scales', label: 'Соответствие закону о персональных данных' },
    { icon: 'ph-fill ph-globe', label: 'Сайты и сервисы под ключ' },
  ]},
  ctaInternal: { url: `${S}/services/cybersecurity/`, label: 'Обсудить защиту данных' },
  slug: SLUG, heroIcon: 'ph-fill ph-eraser',
  title: 'Удалить себя из интернета через ChatGPT: что правда в популярном совете',
  metaTitle: 'Удалить цифровой след через агента ChatGPT: что работает на самом деле',
  metaDescription: 'Разбираю вирусный совет удалить личные данные из интернета агентом ChatGPT: что он умеет, где остановится и что делать жителям России.',
  excerpt: 'Совет удалить цифровой след тремя запросами к ChatGPT опирается на реальные функции, но обещает больше, чем они дают. Показываю, где правда и что делать вместо этого.',
  tags: ['цифровой след', 'персональные данные', 'ChatGPT', 'кибербезопасность'],
  toc: [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] })),
  relatedSlugs: ['cifrovaya-gigiena-cifrovoy-sled-2026', 'samozapret-na-kredity-gosuslugi-2026', 'utechki-pd-24-chasa-2026'],
  contentHtml: html,
}];
