// Уникальное содержимое страниц услуг: tools/services-unique/<slug>.js (по файлу на услугу).
// Формат: { lead, whenTitle, pains: [], examples: [{ title, text }], faq: [{ q, a }], cases: [{ slug, why }], title, md }
// Все поля необязательные. Тексты обычные строки без HTML.
const fs = require('fs');
const path = require('path');
const RELATED = require('./related-cases.js');
const DIR = path.join(__dirname, 'services-unique');

const cache = new Map();
const HIDE = /threads|instagram|whatsapp|kp-token/;
function unique(slug) {
  if (cache.has(slug)) return cache.get(slug);
  const f = path.join(DIR, slug + '.js');
  const u = fs.existsSync(f) ? require(f) : null;
  if (u) {
    const key = 'services/' + slug;
    const own = (u.cases || []).filter((c) => !HIDE.test(c.slug));
    const rest = (RELATED[key] || []).filter((h) => !HIDE.test(h.slug) && !own.some((c) => c.slug === h.slug));
    if (own.length || rest.length) RELATED[key] = own.concat(rest).slice(0, 3); else delete RELATED[key];
  }
  cache.set(slug, u);
  return u;
}

const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const section = (inner) => '<section class="section section-tight">\n    <div class="container">\n' + inner + '\n    </div>\n</section>';

function uniqueSection(slug) {
  const u = unique(slug);
  if (!u) return '';
  const out = [];
  if (u.lead) out.push(section('        <p style="max-width:820px;line-height:1.7;">' + esc(u.lead) + '</p>'));
  if ((u.pains || []).length) out.push(section('        <h2 class="service-h2">' + esc(u.whenTitle || 'Когда это нужно') + '</h2>\n        <ul class="service-factors">\n' + u.pains.map((p) => '            <li>' + esc(p) + '</li>').join('\n') + '\n        </ul>'));
  if ((u.examples || []).length) out.push(section('        <h2 class="service-h2">Как это выглядит на задаче</h2>\n' + u.examples.map((e) => '        <h3 style="margin:18px 0 6px;">' + esc(e.title) + '</h3>\n        <p style="max-width:820px;line-height:1.7;">' + esc(e.text) + '</p>').join('\n')));
  return out.join('\n');
}

module.exports = { unique, uniqueSection };
