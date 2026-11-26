// Перелинковка предложений: соседние решения по кругу внутри рубрики и кейсы по теме.
// Круг гарантирует, что на каждую страницу предложения ведут ссылки с других.
const offers = require('./offers-data.js').filter((o) => o && o.published !== false);
let CASES = [];
try { CASES = require('./blog-data.js').filter((a) => a.category === 'cases' && a.published !== false); } catch (e) { CASES = []; }

const N = 6;
const STOP = new Set(['бизне', 'сервис', 'решен', 'прило', 'систе', 'прогр', 'telegr', 'teleg', 'платф', 'разра', 'клиен', 'заявк', 'автом', 'учета', 'учёта', 'кейс', 'мессе', 'компа', 'услуг', 'работ', 'готов', 'своей', 'своя', 'свой', 'через', 'чтобы', 'кото', 'котор', 'проду', 'онлай', 'бесед', 'предл', 'демо', 'сайта', 'данны', 'проек', 'мини-', 'канал']);
const stems = (text) => new Set((String(text || '').toLowerCase().match(/[a-zа-яё0-9]{4,}/g) || []).map((w) => w.slice(0, 5)).filter((w) => !STOP.has(w)));
const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const link = (url, label) => '<a href="' + url + '" class="offer-related-link">' + esc(label) + ' <i class="ph ph-arrow-right" aria-hidden="true"></i></a>';

function neighbours(o) {
  const ring = (list) => {
    const i = list.findIndex((x) => x.slug === o.slug);
    const out = [];
    for (let k = 1; k < list.length && out.length < N; k++) out.push(list[(i + k + list.length) % list.length]);
    return out;
  };
  const out = ring(offers.filter((x) => x.segment === o.segment));
  if (out.length < N) for (const x of ring(offers)) { if (out.length >= N) break; if (!out.includes(x)) out.push(x); }
  return out;
}

// Темы, которые не подставляем к чужим предложениям
const NO_CASE = /setevoy|mwr|kripto|token|memkoin|spl-|spygambl|solana|dating|xx-/i;
const caseStems = CASES.filter((a) => !NO_CASE.test(a.slug)).map((a) => ({ a, s: stems(a.title + ' ' + (a.tags || []).join(' ')) }));
function cases(o) {
  const niche = stems(o.niche);
  const mine = stems(o.niche + ' ' + o.title);
  return caseStems
    .map(({ a, s }) => ({ a, byNiche: [...niche].filter((w) => s.has(w)).length, score: [...mine].filter((w) => s.has(w)).length }))
    // кейс подставляем, только когда совпала ниша и ещё хотя бы одно слово, или совпадений три и больше
    .filter((x) => x.byNiche >= 2 || (x.byNiche >= 1 && x.score >= 3) || x.score >= 4)
    .sort((x, y) => y.byNiche - x.byNiche || y.score - x.score || String(y.a.datePublished).localeCompare(String(x.a.datePublished)))
    .slice(0, 3)
    .map((x) => x.a);
}

function offerLinksBlock(o) {
  const have = JSON.stringify([o.relatedServices || [], o.relatedBlog || [], o.articleGroups || [], o.bodyHtml || '']);
  const cs = cases(o).filter((a) => !have.includes('/blog/' + a.slug + '/'));
  const casesHtml = cs.length ? '<div class="offer-block"><h2>Кейсы по теме</h2><div class="offer-related">' + cs.map((a) => link('/blog/' + a.slug + '/', a.title)).join('') + link('/cases/', 'Все кейсы') + '</div></div>' : '';
  const ns = neighbours(o);
  const nsHtml = ns.length ? '<div class="offer-block"><h2>Другие решения</h2><div class="offer-related">' + ns.map((x) => link('/predlozheniya/' + x.slug + '/', x.niche || x.title)).join('') + link('/predlozheniya/', 'Все предложения') + '</div></div>' : '';
  return casesHtml + nsHtml;
}

module.exports = { offerLinksBlock, neighbours, cases, offers };
