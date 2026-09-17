const og = require('./og-generator.js');
const arr = require('./blog-data.js');
const OUT = 'C:/Users/CHIMIT~1/AppData/Local/Temp/claude/C--Users-Chimitdorzhi--claude/6402d68b-a776-4952-b2e7-94a8589a0229/scratchpad';
const slugs = ['kafe-nacionalnoy-kuhni-bot-max-rozygryshi-keys-2026', 'skidka-ili-igra-s-prizami-chto-deshevle-2026', 'ustanovit-ollama-windows-2027', 'udalit-cifrovoy-sled-cherez-chatgpt-agent-2026'];
(async () => {
  for (const s of slugs) {
    const a = arr.find(x => x.slug === s);
    const img = await og.renderSize(a, 'cover');
    const f = `${OUT}/new-${s.slice(0, 18)}.${og.usesPhoto(a) ? 'jpg' : 'png'}`;
    await (og.usesPhoto(a) ? img.jpeg({ quality: 82 }) : img.png()).toFile(f);
    console.log(og.usesPhoto(a) ? 'фото ' : 'графика', a.category, '→', f.split('/').pop());
  }
  const a = arr.find(x => x.slug === slugs[0]);
  for (const k of ['pin', 'square', 'story']) {
    const img = await og.renderSize(a, k);
    await img.jpeg({ quality: 82 }).toFile(`${OUT}/new-${k}.jpg`);
  }
  console.log('вертикали готовы');
})();
