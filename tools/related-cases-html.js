// Блок «Похожие проекты» для страниц услуг и разработки.
// Данные: tools/related-cases.js (страница -> кейсы). Заголовок кейса берётся из blog-data,
// неопубликованный или удалённый кейс молча пропускается.

const RELATED = require('./related-cases.js');

let byslug = null;
function articles() {
  if (!byslug) {
    byslug = new Map();
    for (const a of require('./blog-data.js')) {
      if (a && a.slug && a.published !== false) byslug.set(a.slug, a);
    }
  }
  return byslug;
}

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// page: 'services/devops' или 'development/telegram-bots'
// gridClass/cardClass: классы сетки и карточки того раздела, куда встраиваем
function casesSection(page, { gridClass, cardClass, iconClass, titleTag = 'h3', headingClass = 'section-heading' }) {
  const list = (RELATED[page] || [])
    .map((c) => ({ ...c, a: articles().get(c.slug) }))
    .filter((c) => c.a);
  if (!list.length) return '';
  const cards = list.map((c) => `<a href="/blog/${c.slug}/" class="${cardClass}">
    <div class="${iconClass}"><i class="ph ph-briefcase" aria-hidden="true"></i></div>
    <${titleTag}>${esc(c.a.title)}</${titleTag}>
    <p>${esc(c.why)}</p>
    <span class="dev-card-link">Читать кейс <i class="ph ph-arrow-right" aria-hidden="true"></i></span>
</a>`).join('\n');
  return `<section class="section section-tight">
    <div class="container">
        <span class="section-label">ПОХОЖИЕ ПРОЕКТЫ</span>
        <h2 class="${headingClass}">Что я уже сделал по этой задаче</h2>
        <div class="${gridClass}">${cards}</div>
        <p style="text-align:center;margin-top:24px;"><a href="/cases/" class="btn btn-ghost">Все кейсы <i class="ph ph-arrow-right" aria-hidden="true"></i></a></p>
    </div>
</section>`;
}

module.exports = { casesSection };
