// Zen drip-feeder. Дозированно «подаёт» архив статей в Дзен через RSS.
//
// Проблема: Дзен при подключении RSS забирает только НОВЫЕ записи и игнорирует
// ~90 старых статей как «уже опубликованные».
//
// Решение: ведём состояние tools/zen-drip-state.json — { slug: "YYYY-MM-DD" }
// с датой «выпуска в Дзен» для каждой статьи. При запуске берём следующие
// BATCH ещё не выпущенных архивных статей (от старых к новым) и помечаем их
// сегодняшней датой. Эта дата используется как pubDate в RSS (см. build-blog.js
// → feedPubDate()), поэтому Дзен видит их как свежие.
//
// Запуск:
//   node tools/zen-drip.js            — выпустить следующие 7 статей (по умолч.)
//   node tools/zen-drip.js 10         — выпустить 10
//   node tools/zen-drip.js --status   — показать прогресс, ничего не меняя
//
// После запуска нужно пересобрать фид: node tools/build-blog.js
// (build-blog читает это состояние и проставляет drip-даты в feed.xml).

const fs = require('fs');
const path = require('path');

const STATE = path.join(__dirname, 'zen-drip-state.json');
const articles = require('./blog-data');
const published = articles.filter(a => a.published && a.contentHtml);

const args = process.argv.slice(2);
const statusOnly = args.includes('--status');
const batchArg = args.find(a => /^\d+$/.test(a));
const BATCH = batchArg ? parseInt(batchArg, 10) : 7;

function loadState() {
  try { return JSON.parse(fs.readFileSync(STATE, 'utf8')); }
  catch { return {}; }
}
function saveState(s) { fs.writeFileSync(STATE, JSON.stringify(s, null, 2) + '\n'); }

const state = loadState();
const releasedSlugs = new Set(Object.keys(state));

// Очередь: ещё не выпущенные, от самых старых к новым (хронология архива).
const pending = published
  .filter(a => !releasedSlugs.has(a.slug))
  .sort((x, y) => (x.datePublished || '').localeCompare(y.datePublished || ''));

if (statusOnly) {
  console.log(`Всего опубликовано:        ${published.length}`);
  console.log(`Выпущено в Дзен (drip):    ${releasedSlugs.size}`);
  console.log(`Осталось в очереди:        ${pending.length}`);
  if (pending.length) {
    console.log(`\nСледующие ${Math.min(BATCH, pending.length)} к выпуску:`);
    pending.slice(0, BATCH).forEach((a, i) => console.log(`  ${i + 1}. ${a.title}`));
  } else {
    console.log('\nОчередь пуста — весь архив выпущен.');
  }
  process.exit(0);
}

if (pending.length === 0) {
  console.log('Очередь архива пуста — весь блог уже выпущен в Дзен.');
  process.exit(0);
}

// Дата выпуска. new Date() в этой среде запрещён в build-скриптах? Здесь это
// CLI-утилита, Date доступен. Берём сегодняшнюю дату (UTC).
const today = new Date().toISOString().slice(0, 10);

const batch = pending.slice(0, BATCH);
for (const a of batch) state[a.slug] = today;
saveState(state);

console.log(`Выпущено в Дзен (drip), дата ${today}: ${batch.length} статей`);
batch.forEach((a, i) => console.log(`  ${i + 1}. ${a.title}`));
console.log(`Осталось в очереди: ${pending.length - batch.length}`);
console.log('\nДальше: node tools/build-blog.js  (пересоберёт feed.xml с новыми датами)');
