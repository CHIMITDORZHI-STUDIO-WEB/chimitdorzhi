// IndexNow: сообщаем поисковикам только о новых, изменённых и удалённых страницах.
// Раньше весь сайт отправлялся при каждом пуше, Bing такое не приветствует.
//
//   node tools/indexnow-ping.js                 после пуша или по расписанию в CI
//   node tools/indexnow-ping.js --dry-run       показать список, ничего не отправляя
//   node tools/indexnow-ping.js --base <sha>    сравнить с конкретным коммитом
//   node tools/indexnow-ping.js --all           разово отправить всю карту сайта
//
// Ownership is verified via the key file `1623999cfbe7e3b7b63fb5d8a3c8042f.txt`
// living at the site root (IndexNow protocol).

const fs = require('fs');
const path = require('path');
const https = require('https');
const { execFileSync } = require('child_process');

const KEY = '1623999cfbe7e3b7b63fb5d8a3c8042f';
const HOST = 'chimitdorzhi.tech';
const SITE = `https://${HOST}`;
const ROOT = path.join(__dirname, '..');
const WINDOW_HOURS = 30; // суточный запуск с запасом на задержку расписания GitHub
const KEY_PAGES = ['/', '/services/', '/cases/', '/blog/', '/predlozheniya/', '/ceny/'].map((p) => SITE + p);

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');

const git = (list, input) => execFileSync('git', ['-C', ROOT, ...list], { input, maxBuffer: 1 << 29, stdio: ['pipe', 'pipe', 'pipe'] });
const gitText = (...list) => git(list).toString('utf8').trim();
const locs = (xml) => new Set(Array.from(xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g), (m) => m[1]));
const urlOf = (file) => `${SITE}/${encodeURI(file.replace(/(^|\/)index\.html$/, '$1'))}`;

// Коммит, с которым сравниваем.
function findBase() {
  const i = args.indexOf('--base');
  if (i >= 0) return args[i + 1];
  if (process.env.GITHUB_EVENT_NAME === 'push') {
    const before = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8')).before;
    if (/^[0-9a-f]{40}$/.test(before) && !/^0+$/.test(before)) {
      try { git(['cat-file', '-e', `${before}^{commit}`]); } catch (e) { git(['fetch', '-q', '--depth=1', 'origin', before]); }
      return before;
    }
  }
  // В CI клон из одного коммита: докачиваем историю именно текущего коммита.
  if (gitText('rev-parse', '--is-shallow-repository') === 'true') git(['fetch', '-q', '--depth=120', 'origin', gitText('rev-parse', 'HEAD')]);
  const base = gitText('rev-list', '-1', `--before=${WINDOW_HOURS} hours ago`, 'HEAD');
  if (!base) throw new Error('нет коммита старше окна сравнения');
  return base;
}

// Содержимое файлов на указанном коммите, пачками.
function readBlobs(rev, files) {
  const result = [];
  for (let from = 0; from < files.length; from += 200) {
    const chunk = files.slice(from, from + 200);
    const out = git(['cat-file', '--batch'], chunk.map((f) => `${rev}:${f}`).join('\n') + '\n');
    let pos = 0;
    for (let k = 0; k < chunk.length; k++) {
      const eol = out.indexOf(10, pos);
      const m = out.toString('utf8', pos, eol).match(/ blob (\d+)$/);
      pos = eol + 1;
      if (!m) { result.push(''); continue; }
      result.push(out.toString('utf8', pos, pos + Number(m[1])));
      pos += Number(m[1]) + 1;
    }
  }
  return result;
}

// «Отпечаток» страницы: заголовок, описание и текст основной части. Ежедневная сборка
// переставляет карточки похожих статей, даты в разметке и счётчики: это не изменение.
function fingerprint(html) {
  const pick = (re) => (html.match(re) || [''])[0];
  const body = pick(/<article class="blog-article">[\s\S]*?<\/article>/) || pick(/<main[\s\S]*?<\/main>/) || pick(/<body[\s\S]*<\/body>/);
  const text = body
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<section class="blog-(related|subscribe)"[\s\S]*?<\/section>/g, ' ')
    .replace(/<a class="blog-card"[\s\S]*?<\/a>/g, ' ')
    .replace(/<span class="b-l b-l-(?!ru)[a-z]+"[^>]*>[^<]*<\/span>/g, ' ') // переводы в баннере предложений
    .replace(/<[^>]+>/g, ' ')
    .replace(/\d+(?=\s+(готовых|ready-made|soluciones))/g, '');
  return (pick(/<title>[^<]*<\/title>/) + pick(/<meta name="description" content="[^"]*"/) + text).replace(/\s+/g, ' ').trim();
}

function changedUrls() {
  const base = findBase();
  const sitemapNow = locs(fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8'));
  const sitemapWas = locs(readBlobs(base, ['sitemap.xml'])[0]);
  const rows = git(['-c', 'core.quotepath=off', 'diff', '--name-status', '--no-renames', base, 'HEAD', '--', '*.html'])
    .toString('utf8').split('\n').filter(Boolean).map((l) => l.split('\t'));

  const urls = new Set();
  const modified = [];
  for (const [status, file] of rows) {
    const url = urlOf(file);
    if (status === 'A' && sitemapNow.has(url)) urls.add(url);
    else if (status === 'D' && sitemapWas.has(url)) urls.add(url);
    else if (status === 'M' && (sitemapNow.has(url) || sitemapWas.has(url))) modified.push(file);
  }
  const before = readBlobs(base, modified);
  const after = readBlobs('HEAD', modified);
  modified.forEach((file, i) => { if (fingerprint(before[i]) !== fingerprint(after[i])) urls.add(urlOf(file)); });

  // Появились в карте сайта (в том числе страницы, добавленные в неё позже самого файла).
  for (const url of sitemapNow) if (!sitemapWas.has(url)) urls.add(url);
  // Новая статья меняет и списки, где она показана.
  if ([...urls].some((u) => u.startsWith(`${SITE}/blog/`) && !sitemapWas.has(u))) {
    urls.add(`${SITE}/blog/`);
    urls.add(`${SITE}/cases/`);
  }
  console.log(`База ${base.slice(0, 10)}: изменено html ${rows.length}, к отправке ${urls.size}`);
  return [...urls];
}

function buildList() {
  if (args.includes('--all')) return [...locs(fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8'))];
  try {
    return changedUrls();
  } catch (e) {
    console.error('Не удалось определить изменения, отправляю только основные страницы:', e.message);
    return KEY_PAGES;
  }
}

// Пингуем два эндпоинта: Yandex (для Яндекс.Поиска) и api.indexnow.org
// (федеративный — форвардит в Bing, Naver, Seznam и других участников).
function ping(hostname, label, urlList) {
  const body = JSON.stringify({ host: HOST, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList });
  const req = https.request({
    hostname,
    path: '/indexnow',
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(body) },
  }, (res) => {
    let data = '';
    res.on('data', (c) => { data += c; });
    res.on('end', () => {
      console.log(`${label}: ${res.statusCode} (${urlList.length} URLs)`);
      if (data) console.log(data);
    });
  });
  req.on('error', (e) => console.error(`${label} error:`, e.message));
  req.write(body);
  req.end();
}

const list = buildList();
if (!list.length) console.log('Изменений нет, отправлять нечего.');
else if (dryRun) console.log(list.join('\n'));
else {
  for (let from = 0; from < list.length; from += 10000) { // предел одного запроса IndexNow
    const part = list.slice(from, from + 10000);
    ping('yandex.com', 'Yandex IndexNow', part);
    ping('api.indexnow.org', 'IndexNow (federated → Bing/Naver/Seznam)', part);
  }
}
