const sharp = require('sharp');
const OUT = 'C:/Users/CHIMIT~1/AppData/Local/Temp/claude/C--Users-Chimitdorzhi--claude/6402d68b-a776-4952-b2e7-94a8589a0229/scratchpad';
const F = "'Manrope','Inter','DejaVu Sans',Arial,sans-serif";
const AMBER = '#f5b642', INK = '#0b1020';
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function wrap(t, max) {
  const w = String(t).toUpperCase().split(/\s+/), out = []; let cur = '';
  for (const x of w) { if ((cur+' '+x).trim().length > max && cur) { out.push(cur.trim()); cur = x; } else cur = (cur+' '+x).trim(); }
  if (cur) out.push(cur.trim());
  return out.slice(0, 4);
}
function textBlock(a, opts) {
  const lines = wrap(a.title, opts.chars || 16), lh = 62, top = opts.top || 250 - (wrap(a.title, opts.chars||16).length-1)*31, acc = Math.ceil(lines.length/2);
  return `<rect x="72" y="78" rx="18" width="${a.cat.length*12+44}" height="40" fill="${AMBER}"/>
<text x="${72+(a.cat.length*12+44)/2}" y="105" text-anchor="middle" font-family="${F}" font-weight="800" font-size="18" letter-spacing="2" fill="${INK}">${esc(a.cat.toUpperCase())}</text>
${lines.map((l,i)=>`<text x="72" y="${top+i*lh}" font-family="${F}" font-weight="800" font-size="54" letter-spacing="-1" fill="${i>=acc?AMBER:'#fff'}">${esc(l)}</text>`).join('')}
<line x1="72" y1="528" x2="1128" y2="528" stroke="#fff" stroke-opacity="0.18" stroke-width="2"/>
<text x="72" y="570" font-family="${F}" font-weight="800" font-size="24" fill="#fff">Чимитдоржи Дарижапов</text>
<text x="72" y="600" font-family="${F}" font-weight="500" font-size="19" fill="#fff" fill-opacity="0.6">chimitdorzhi.tech · ${a.min} мин</text>
<rect x="988" y="546" width="140" height="56" rx="28" fill="${AMBER}"/><text x="1058" y="583" text-anchor="middle" font-family="${F}" font-weight="800" font-size="21" fill="${INK}">${a.min} мин</text>`;
}
// Г1: сетка + свечение цветом рубрики
function g1(a) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<defs><pattern id="gr" width="44" height="44" patternUnits="userSpaceOnUse"><path d="M44 0H0V44" fill="none" stroke="#fff" stroke-opacity="0.05"/></pattern>
<radialGradient id="gl" cx="86%" cy="14%" r="62%"><stop offset="0%" stop-color="${a.hue}" stop-opacity="0.6"/><stop offset="100%" stop-color="${a.hue}" stop-opacity="0"/></radialGradient></defs>
<rect width="1200" height="630" fill="#070a14"/><rect width="1200" height="630" fill="url(#gr)"/><rect width="1200" height="630" fill="url(#gl)"/>
<circle cx="1010" cy="170" r="150" fill="none" stroke="${AMBER}" stroke-opacity="0.35" stroke-width="2"/>
<circle cx="1010" cy="170" r="96" fill="none" stroke="${AMBER}" stroke-opacity="0.25" stroke-width="2"/>
<rect x="0" y="0" width="1200" height="5" fill="${AMBER}"/>
${textBlock(a, { chars: 17, top: 230 })}</svg>`;
}
// Г2: мягкие цветные пятна (меш)
function g2(a) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<defs><filter id="b" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="130"/></filter>
<linearGradient id="f" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#05070d" stop-opacity="0.25"/><stop offset="100%" stop-color="#05070d" stop-opacity="0.9"/></linearGradient></defs>
<rect width="1200" height="630" fill="#070a14"/>
<g filter="url(#b)"><circle cx="980" cy="120" r="260" fill="${a.hue}" fill-opacity="0.9"/><circle cx="1120" cy="470" r="220" fill="${AMBER}" fill-opacity="0.55"/><circle cx="640" cy="60" r="200" fill="${a.hue2}" fill-opacity="0.6"/></g>
<rect width="1200" height="630" fill="url(#f)"/>
${textBlock(a, { chars: 17, top: 240 })}</svg>`;
}
// Г3: крупная диагональная плашка цветом рубрики
function g3(a) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<rect width="1200" height="630" fill="#070a14"/>
<path d="M820 0 L1200 0 L1200 630 L620 630 Z" fill="${a.hue}" fill-opacity="0.9"/>
<path d="M980 0 L1200 0 L1200 630 L780 630 Z" fill="${AMBER}" fill-opacity="0.22"/>
<circle cx="1090" cy="470" r="90" fill="none" stroke="#fff" stroke-opacity="0.28" stroke-width="3"/>
${textBlock(a, { chars: 14, top: 240 })}</svg>`;
}
const a = { title: 'Скачать Ollama для Windows и запустить нейросеть', cat: 'AI для разработчиков', min: 5, hue: '#6d28d9', hue2: '#2563eb' };
(async () => {
  for (const [n, fn] of [['g1', g1], ['g2', g2], ['g3', g3]]) {
    await sharp(Buffer.from(fn(a))).png().toFile(`${OUT}/gfx-${n}.png`);
  }
  console.log('готово');
})();
