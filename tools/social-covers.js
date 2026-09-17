// Обложки под соцсети для конкретных статей: квадрат 1080x1080 и вертикаль 1080x1920.
// В репозитории такие файлы не хранятся (их сотни мегабайт) — генерируем по запросу.
//
// Использование:
//   node tools/social-covers.js <slug> [ещё-slug ...]     — квадрат и сторис
//   node tools/social-covers.js --last 5                  — для пяти свежих статей
//   node tools/social-covers.js --kind square <slug>      — только один формат
//
// Результат: social-covers/<slug>-square.jpg и <slug>-story.jpg в корне проекта.
const fs = require('fs');
const path = require('path');
const og = require('./og-generator.js');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'social-covers');

function parseArgs(argv) {
  const slugs = []; let kinds = ['square', 'story']; let last = 0;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--kind') { kinds = [argv[++i]]; continue; }
    if (argv[i] === '--last') { last = parseInt(argv[++i], 10) || 5; continue; }
    slugs.push(argv[i]);
  }
  return { slugs, kinds, last };
}

async function main() {
  const { slugs, kinds, last } = parseArgs(process.argv.slice(2));
  const all = require('./blog-data.js').filter(a => a && a.published && a.contentHtml);
  let targets = [];
  if (last) {
    targets = all.slice().sort((a, b) =>
      String(b.datePublished).localeCompare(String(a.datePublished)) || a.slug.localeCompare(b.slug)).slice(0, last);
  } else {
    for (const s of slugs) {
      const a = all.find(x => x.slug === s);
      if (!a) { console.log('не нашёл статью:', s); continue; }
      targets.push(a);
    }
  }
  if (!targets.length) {
    console.log('Укажите slug статьи или --last N. Пример: node tools/social-covers.js --last 3');
    return;
  }
  fs.mkdirSync(OUT, { recursive: true });
  for (const a of targets) {
    for (const kind of kinds) {
      if (!og.SIZES[kind]) { console.log('неизвестный формат:', kind); continue; }
      const img = await og.renderSize(a, kind);
      const file = path.join(OUT, `${a.slug}-${kind}.jpg`);
      await img.jpeg({ quality: 86, mozjpeg: true }).toFile(file);
      console.log('готово:', path.relative(ROOT, file));
    }
  }
}

if (require.main === module) main();
module.exports = { main };
