const sharp = require('sharp');
const path = require('path');
const OUT = 'C:/Users/CHIMIT~1/AppData/Local/Temp/claude/C--Users-Chimitdorzhi--claude/6402d68b-a776-4952-b2e7-94a8589a0229/scratchpad';
const PH = 'C:/Users/Chimitdorzhi/Downloads/ФОТОСЕССИЯ';
const F = "'Manrope','Inter','DejaVu Sans',Arial,sans-serif";
const AMBER = '#f5b642', INK = '#0b1020';
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function wrap(t, max) {
  const w = String(t).toUpperCase().split(/\s+/), out = []; let cur = '';
  for (const x of w) { if ((cur+' '+x).trim().length > max && cur) { out.push(cur.trim()); cur = x; } else cur = (cur+' '+x).trim(); }
  if (cur) out.push(cur.trim());
  return out.slice(0, 5);
}
const badge = (x, y, r, fs, text) => `<circle cx="${x+r}" cy="${y}" r="${r}" fill="${AMBER}"/><path d="M${x+r-r*0.45} ${y} l${r*0.32} ${r*0.34} l${r*0.62} -${r*0.62}" stroke="${INK}" stroke-width="${r*0.22}" fill="none" stroke-linecap="round" stroke-linejoin="round"/><text x="${x+r*2+14}" y="${y+fs*0.35}" font-family="${F}" font-weight="600" font-size="${fs}" fill="#ffffff">${text}</text>`;

// Горизонтальная 1200x630: фото справа, тёмная панель слева
function landscape(a) {
  const lines = wrap(a.title, 14), lh = 62, top = 250 - (lines.length-1)*lh/2, acc = Math.ceil(lines.length/2);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<defs><linearGradient id="p" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stop-color="${INK}"/><stop offset="80%" stop-color="${INK}"/><stop offset="100%" stop-color="${INK}" stop-opacity="0"/></linearGradient></defs>
<rect width="660" height="630" fill="url(#p)"/>
<rect x="72" y="78" rx="18" width="${a.cat.length*12+44}" height="40" fill="${AMBER}"/>
<text x="${72+(a.cat.length*12+44)/2}" y="105" text-anchor="middle" font-family="${F}" font-weight="800" font-size="18" letter-spacing="2" fill="${INK}">${esc(a.cat.toUpperCase())}</text>
${lines.map((l,i)=>`<text x="72" y="${top+i*lh}" font-family="${F}" font-weight="800" font-size="52" letter-spacing="-1" fill="${i>=acc?AMBER:'#fff'}">${esc(l)}</text>`).join('')}
<line x1="72" y1="530" x2="560" y2="530" stroke="#fff" stroke-opacity="0.2" stroke-width="2"/>
<text x="72" y="572" font-family="${F}" font-weight="800" font-size="24" fill="#fff">Чимитдоржи Дарижапов</text>
<text x="72" y="600" font-family="${F}" font-weight="500" font-size="19" fill="#fff" fill-opacity="0.6">chimitdorzhi.tech · ${a.min} мин</text></svg>`;
}
// Вертикальные: текст сверху на затемнении, фото снизу
function vertical(a, W, H, opts) {
  const lines = wrap(a.title, opts.chars), lh = opts.fs * 1.12, top = opts.top, acc = Math.ceil(lines.length/2);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1">
<stop offset="0%" stop-color="#05070d" stop-opacity="0.96"/><stop offset="${opts.fade}%" stop-color="#05070d" stop-opacity="0.82"/><stop offset="${opts.fade+22}%" stop-color="#05070d" stop-opacity="0.18"/><stop offset="100%" stop-color="#05070d" stop-opacity="0.45"/></linearGradient></defs>
<rect width="${W}" height="${H}" fill="url(#s)"/>
<rect x="${opts.pad}" y="${opts.top-opts.fs*2.3}" rx="16" width="${a.cat.length*opts.fs*0.5+40}" height="${opts.fs*0.85}" fill="${AMBER}"/>
<text x="${opts.pad+(a.cat.length*opts.fs*0.5+40)/2}" y="${opts.top-opts.fs*1.72}" text-anchor="middle" font-family="${F}" font-weight="800" font-size="${opts.fs*0.34}" letter-spacing="2" fill="${INK}">${esc(a.cat.toUpperCase())}</text>
${lines.map((l,i)=>`<text x="${opts.pad}" y="${top+i*lh}" font-family="${F}" font-weight="800" font-size="${opts.fs}" letter-spacing="-1" fill="${i>=acc?AMBER:'#fff'}">${esc(l)}</text>`).join('')}
${badge(opts.pad, top + (lines.length-1)*lh + opts.fs*1.3, opts.fs*0.28, opts.fs*0.42, 'chimitdorzhi.tech')}
</svg>`;
}
const a = { f: 'Man_holding_phone_in_office_2K_20260917012820.jpeg', title: 'Клиенты пишут менеджеру в личный телефон', cat: 'Кейсы', min: 5 };
(async () => {
  const src = path.join(PH, a.f);
  // 1200x630
  const half = await sharp(src).resize(620, 630, { fit: 'cover', position: sharp.strategy.attention }).toBuffer();
  const c1 = await sharp({ create: { width: 1200, height: 630, channels: 3, background: INK } }).composite([{ input: half, left: 580, top: 0 }]).png().toBuffer();
  await sharp(c1).composite([{ input: Buffer.from(landscape(a)) }]).png().toFile(`${OUT}/size-1200x630.png`);
  // 1080x1080
  const sq = await sharp(src).resize(1080, 1080, { fit: 'cover', position: sharp.strategy.attention }).toBuffer();
  await sharp(sq).composite([{ input: Buffer.from(vertical(a, 1080, 1080, { chars: 15, fs: 74, top: 230, pad: 72, fade: 34 })) }]).png().toFile(`${OUT}/size-1080x1080.png`);
  // 1080x1920
  const st = await sharp(src).resize(1080, 1920, { fit: 'cover', position: sharp.strategy.attention }).toBuffer();
  await sharp(st).composite([{ input: Buffer.from(vertical(a, 1080, 1920, { chars: 13, fs: 92, top: 380, pad: 76, fade: 30 })) }]).png().toFile(`${OUT}/size-1080x1920.png`);
  // 1000x1500
  const pin = await sharp(src).resize(1000, 1500, { fit: 'cover', position: sharp.strategy.attention }).toBuffer();
  await sharp(pin).composite([{ input: Buffer.from(vertical(a, 1000, 1500, { chars: 14, fs: 82, top: 330, pad: 70, fade: 32 })) }]).png().toFile(`${OUT}/size-1000x1500.png`);
  console.log('готово');
})();
