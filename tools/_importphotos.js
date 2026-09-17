const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const SRC = 'C:/Users/Chimitdorzhi/Downloads/ФОТОСЕССИЯ';
const DST = path.resolve(__dirname, '..', 'assets', 'cover-photos');
// Берём разнообразные кадры: по одному-двум из каждой съёмочной ситуации.
const files = fs.readdirSync(SRC).filter(f => /\.(jpe?g|png)$/i.test(f)).sort();
const groups = new Map();
for (const f of files) {
  const key = f.replace(/_2K_\d+\.\w+$/, '');
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(f);
}
const picked = [];
for (const [key, list] of groups) picked.push(...list.slice(0, 2));
(async () => {
  let i = 0;
  for (const f of picked) {
    const out = path.join(DST, String(i + 1).padStart(2, '0') + '-' + f.replace(/_2K_\d+/, '').toLowerCase().replace(/\.jpeg$/, '.jpg'));
    await sharp(path.join(SRC, f)).resize(1080, 1934, { fit: 'cover', position: sharp.strategy.attention }).jpeg({ quality: 78, mozjpeg: true }).toFile(out);
    i++;
  }
  const total = fs.readdirSync(DST).reduce((s, f) => s + fs.statSync(path.join(DST, f)).size, 0);
  console.log('фото перенесено:', i, '· вес:', Math.round(total / 1024 / 1024 * 10) / 10, 'МБ');
})();
