// Аккуратная подрезка title/description под SEO-нормы.
// title до 60-62 (бренд-суффикс снимается при необходимости), description до 160.
// Режем по границе предложения/слова, без обрыва посреди слова.
const BRAND_SUFFIX = ' | Чимитдоржи Дарижапов';

function clampDesc(s, max = 160) {
  if (!s) return s;
  s = String(s).replace(/\s+/g, ' ').trim();
  if (s.length <= max) return s;
  let cut = s.slice(0, max);
  // по концу предложения
  const dot = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('! '), cut.lastIndexOf('? '));
  if (dot > max * 0.55) return cut.slice(0, dot + 1).trim();
  // по границе слова
  const sp = cut.lastIndexOf(' ');
  if (sp > 0) cut = cut.slice(0, sp);
  return cut.replace(/[\s,;:.—-]+$/, '').trim() + '…';
}

function clampTitle(t, max = 62) {
  if (!t) return t;
  t = String(t).replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  // снять бренд-суффикс
  if (t.endsWith(BRAND_SUFFIX)) {
    const base = t.slice(0, -BRAND_SUFFIX.length).trim();
    if (base.length <= max) return base;
    let cut = base.slice(0, max - 1);
    const sp = cut.lastIndexOf(' ');
    if (sp > 0) cut = cut.slice(0, sp);
    return cut.replace(/[\s,;:.—-]+$/, '').trim() + '…';
  }
  let cut = t.slice(0, max - 1);
  const sp = cut.lastIndexOf(' ');
  if (sp > 0) cut = cut.slice(0, sp);
  return cut.replace(/[\s,;:.—-]+$/, '').trim() + '…';
}

module.exports = { clampTitle, clampDesc };
