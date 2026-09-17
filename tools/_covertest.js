const sharp = require('sharp');
const path = require('path');
const OUT = 'C:/Users/CHIMIT~1/AppData/Local/Temp/claude/C--Users-Chimitdorzhi--claude/6402d68b-a776-4952-b2e7-94a8589a0229/scratchpad';
const PH = 'C:/Users/Chimitdorzhi/Downloads/ФОТОСЕССИЯ';
const FONT = "'Manrope','Inter','DejaVu Sans',Arial,sans-serif";
const AMBER = '#f5b642';
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function wrap(t, max) {
  const w = String(t).toUpperCase().split(/\s+/); const out = []; let cur = '';
  for (const x of w) { if ((cur+' '+x).trim().length > max && cur) { out.push(cur.trim()); cur = x; } else cur = (cur+' '+x).trim(); }
  if (cur) out.push(cur.trim());
  return out.slice(0, 4);
}
// Вариант 1: фото на всю обложку, затемнение слева, текст поверх
function overlayFull(a) {
  const lines = wrap(a.title, 17), lh = 64, top = 200;
  const accentFrom = Math.ceil(lines.length / 2);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<defs><linearGradient id="s" x1="0" y1="0" x2="1" y2="0">
<stop offset="0%" stop-color="#05070d" stop-opacity="0.93"/><stop offset="52%" stop-color="#05070d" stop-opacity="0.6"/><stop offset="100%" stop-color="#05070d" stop-opacity="0.05"/></linearGradient>
<linearGradient id="t" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#05070d" stop-opacity="0.7"/><stop offset="45%" stop-color="#05070d" stop-opacity="0"/></linearGradient></defs>
<rect width="1200" height="630" fill="url(#s)"/>
<rect width="1200" height="630" fill="url(#t)"/>
<text x="72" y="96" font-family="${FONT}" font-weight="700" font-size="20" letter-spacing="3" fill="${AMBER}">${esc(a.cat.toUpperCase())}</text>
${lines.map((l,i)=>`<text x="72" y="${top+i*lh}" font-family="${FONT}" font-weight="800" font-size="56" letter-spacing="-1" fill="${i>=accentFrom?AMBER:'#ffffff'}">${esc(l)}</text>`).join('\n')}
<circle cx="84" cy="556" r="13" fill="${AMBER}"/><path d="M78 556 l4 4 l8 -8" stroke="#05070d" stroke-width="3" fill="none" stroke-linecap="round"/>
<text x="106" y="564" font-family="${FONT}" font-weight="600" font-size="24" fill="#ffffff">chimitdorzhi.tech</text>
</svg>`;
}
// Вариант 2: половина фото справа, тёмная панель слева
function overlaySplit(a) {
  const lines = wrap(a.title, 14), lh = 62, top = 250 - (lines.length-1)*lh/2;
  const accentFrom = Math.ceil(lines.length / 2);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<defs><linearGradient id="p" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0b1020"/><stop offset="82%" stop-color="#0b1020"/><stop offset="100%" stop-color="#0b1020" stop-opacity="0"/></linearGradient></defs>
<rect x="0" y="0" width="660" height="630" fill="url(#p)"/>
<rect x="72" y="78" rx="18" width="${Math.round(a.cat.length*12+44)}" height="40" fill="${AMBER}"/>
<text x="${72+Math.round((a.cat.length*12+44)/2)}" y="105" text-anchor="middle" font-family="${FONT}" font-weight="800" font-size="18" letter-spacing="2" fill="#0b1020">${esc(a.cat.toUpperCase())}</text>
${lines.map((l,i)=>`<text x="72" y="${top+i*lh}" font-family="${FONT}" font-weight="800" font-size="52" letter-spacing="-1" fill="${i>=accentFrom?AMBER:'#ffffff'}">${esc(l)}</text>`).join('\n')}
<line x1="72" y1="530" x2="560" y2="530" stroke="#ffffff" stroke-opacity="0.2" stroke-width="2"/>
<text x="72" y="572" font-family="${FONT}" font-weight="800" font-size="24" fill="#ffffff">Чимитдоржи Дарижапов</text>
<text x="72" y="600" font-family="${FONT}" font-weight="500" font-size="19" fill="#ffffff" fill-opacity="0.6">chimitdorzhi.tech · ${a.min} мин</text>
</svg>`;
}
const samples = [
  { f: 'Man_holding_phone_in_office_2K_20260917012820.jpeg', title: 'Клиенты пишут менеджеру в личный телефон', cat: 'Кейсы', min: 5, pos: 'right' },
  { f: 'Man_explaining_in_meeting_room_2K_20260917012711.jpeg', title: 'Скидка или игра с призами: что дешевле', cat: 'Игры для бизнеса', min: 5, pos: 'right' },
  { f: 'Businessman_standing_in_office_2K_20260917012726.jpeg', title: 'Сколько стоит содержать игру после запуска', cat: 'Игры для бизнеса', min: 5, pos: 'right' },
];
(async () => {
  for (const s of samples) {
    const src = path.join(PH, s.f);
    const base = await sharp(src).resize(1200, 630, { fit: 'cover', position: sharp.strategy.attention }).toBuffer();
    await sharp(base).composite([{ input: Buffer.from(overlayFull(s)) }]).png().toFile(`${OUT}/ph-full-${s.cat === 'Кейсы' ? 'a' : s.title.slice(0,6)}.png`);
    const half = await sharp(src).resize(620, 630, { fit: 'cover', position: sharp.strategy.attention }).toBuffer();
    const canvas = await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#0b1020' } })
      .composite([{ input: half, left: 580, top: 0 }]).png().toBuffer();
    await sharp(canvas).composite([{ input: Buffer.from(overlaySplit(s)) }]).png().toFile(`${OUT}/ph-split-${s.cat === 'Кейсы' ? 'a' : s.title.slice(0,6)}.png`);
    console.log('ok', s.f);
  }
})();
