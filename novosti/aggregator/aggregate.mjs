// X&X NEWS aggregator — режим «только RSS» (без ИИ-перевода).
// Тянет реальные RSS-ленты, нормализует в фиксированный JSON-контракт, пишет файл.
//
// Запуск:   node aggregate.mjs
// Вывод:    ./news.json  (или OUT=path/to/news.json node aggregate.mjs, или node aggregate.mjs path/to/news.json)
//
// ИИ-перевод пока НЕ делается: поле summaryRu = summary. Точку вставки перевода
// см. в функции translate() ниже.

import Parser from 'rss-parser';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ------- параметры -------
const OUT = process.argv[2] || process.env.OUT || resolve(__dirname, 'news.json');
const PER_SOURCE = Number(process.env.PER_SOURCE || 12);   // сколько свежих брать с одного источника
const TOTAL_CAP = Number(process.env.TOTAL_CAP || 90);     // общий потолок новостей
const FETCH_TIMEOUT_MS = Number(process.env.FETCH_TIMEOUT_MS || 20000);

const parser = new Parser({
  timeout: FETCH_TIMEOUT_MS,
  headers: { 'User-Agent': 'Mozilla/5.0 (compatible; XXNewsBot/1.0; +https://xxnews.example)' },
  customFields: {
    item: [
      ['media:content', 'mediaContent', { keepArray: true }],
      ['media:thumbnail', 'mediaThumbnail', { keepArray: true }],
      ['enclosure', 'enclosureRaw'],
    ],
  },
});

// ------- утилиты -------
const stripHtml = (s = '') =>
  String(s)
    .replace(/<!\[CDATA\[|\]\]>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#8230;|&hellip;/gi, '…')
    .replace(/&#8211;|&ndash;/gi, '–')
    .replace(/&laquo;/gi, '«')
    .replace(/&raquo;/gi, '»')
    .replace(/&[a-z0-9#]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const truncate = (s, n = 280) => {
  if (!s) return '';
  if (s.length <= n) return s;
  const cut = s.slice(0, n);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > n * 0.6 ? cut.slice(0, lastSpace) : cut).trim() + '…';
};

const shortHash = (str) => createHash('sha1').update(str).digest('hex').slice(0, 10);

// slug из заголовка для группировки «та же тема»
const STOP = new Set(('и в во на с со по за от до из у о об о а но же ли бы то как что это the a an of in on to for and or '
  + 'нь ба бол юм гэж энэ тэр').split(/\s+/));
function topicSlug(title = '') {
  const words = title
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 3 && !STOP.has(w))
    .slice(0, 4);
  const slug = words.join('-').replace(/[^a-zа-яёөүңһ0-9-]/gi, '').replace(/-+/g, '-').replace(/^-|-$/g, '');
  return slug || 'news';
}

// эвристическая категоризация в одну из 4 рубрик
const CAT_RULES = [
  ['politics', /(полит|власт|депутат|правительств|выбор|президент|губернатор|закон|бюджет|санкц|парламент|засгийн|улстөр|сонгууль|парламент|ерөнхийлөгч|сайд)/i],
  ['sport', /(спорт|футбол|хоккей|борьб|бокс|турнир|чемпион|матч|олимп|медал|спортсмен|тэмцээн|шатар|бөх|хөлбөмбөг)/i],
  ['culture', /(культур|искусств|театр|музе|выставк|фестивал|концерт|кино|книг|дацан|буддизм|традиц|праздник|соёл|урлаг|наадам|үзвэр|номын)/i],
];
function categorize(title = '', catsRaw = '') {
  const hay = `${title} ${catsRaw}`;
  for (const [cat, re] of CAT_RULES) if (re.test(hay)) return cat;
  return 'regions';
}

// портал отдаётся по HTTPS, поэтому http-картинки браузер заблокирует как mixed content
const httpsify = (url) => (url ? String(url).replace(/^http:\/\//i, 'https://') : null);

const isImageUrl = (url, type) =>
  /^https?:\/\//i.test(url || '') && /image|\.(jpe?g|png|webp|gif)(\?|$)/i.test(type || url || '');

// вытащить картинку из разных RSS-полей
function extractImage(item) {
  // enclosure объявлен кастомным полем, поэтому атрибуты лежат в .$ — но подстрахуемся обоими вариантами
  const encNode = item.enclosureRaw || item.enclosure;
  for (const enc of Array.isArray(encNode) ? encNode : [encNode]) {
    const attrs = enc?.$ || enc;
    if (isImageUrl(attrs?.url, attrs?.type)) return httpsify(attrs.url);
  }
  const mc = item.mediaContent?.[0]?.$ || item.mediaContent?.$;
  if (mc?.url) return httpsify(mc.url);
  const mt = item.mediaThumbnail?.[0]?.$ || item.mediaThumbnail?.$;
  if (mt?.url) return httpsify(mt.url);
  const html = item['content:encoded'] || item.content || item.description || item.summary || '';
  const m = String(html).match(/<img[^>]+src=["']([^"']+)["']/i);
  if (m) return httpsify(m[1]);
  return null;
}

// ------- ТОЧКА ВСТАВКИ ИИ-ПЕРЕВОДА -------
// Сейчас перевода нет: возвращаем исходный текст. Когда появится перевод —
// сделать функцию async и вызвать API (см. README).
function translate(summary /*, fromLang, toLang='ru' */) {
  return summary;
}

// windows-1251 и прочие: rss-parser не декодирует cp1251, поэтому качаем байты сами
async function fetchFeedText(url) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      signal: ctrl.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; XXNewsBot/1.0)' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const head = buf.slice(0, 200).toString('latin1').toLowerCase();
    const ct = (res.headers.get('content-type') || '').toLowerCase();
    let charset = 'utf-8';
    const m = head.match(/encoding=["']([\w-]+)["']/) || ct.match(/charset=([\w-]+)/);
    if (m) charset = m[1].toLowerCase();
    if (charset === 'utf8') charset = 'utf-8';
    try {
      return new TextDecoder(charset).decode(buf);
    } catch {
      return new TextDecoder('utf-8').decode(buf);
    }
  } finally {
    clearTimeout(t);
  }
}

// чиним частые огрехи невалидного XML (напр. arigus: <link><http://...</link>)
function sanitizeXml(xml) {
  return xml
    .replace(/<(link|guid)><(https?:)/gi, '<$1>$2')  // стрелка-мусор перед URL
    .replace(/&(?![a-z0-9#]{1,8};)/gi, '&amp;');      // «голый» амперсанд
}

async function processSource(src) {
  const xml = await fetchFeedText(src.feed);
  let feed;
  try {
    feed = await parser.parseString(xml);
  } catch (e) {
    feed = await parser.parseString(sanitizeXml(xml)); // вторая попытка после чистки
  }
  const items = (feed.items || []).slice(0, PER_SOURCE * 2); // с запасом до дедупа/сортировки

  const out = [];
  for (const it of items) {
    const url = (it.link || it.guid || '').trim();
    const title = stripHtml(it.title || '').trim();
    if (!url || !title) continue;

    const rawDesc = it.contentSnippet || it.summary || it.content || it['content:encoded'] || it.description || '';
    const summary = truncate(stripHtml(rawDesc), 300);
    const dateStr = it.isoDate || it.pubDate || it.date;
    const publishedAt = dateStr && !Number.isNaN(Date.parse(dateStr))
      ? new Date(dateStr).toISOString()
      : new Date().toISOString();
    const catsRaw = Array.isArray(it.categories) ? it.categories.join(' ') : (it.categories || '');
    const image = extractImage(it);

    out.push({
      id: `${src.slug}-${shortHash(url)}`,
      title,
      summary,
      summaryRu: translate(summary, src.language, 'ru'),
      category: categorize(title, catsRaw),
      sourceSlug: src.slug,
      sourceLanguage: src.language,
      publishedAt,
      topicTag: topicSlug(title),
      url,
      popularity: 0, // проставим после общей сортировки
      ...(image ? { image } : {}),
    });
  }
  return out;
}

async function main() {
  const cfgPath = resolve(__dirname, 'feeds.json');
  const cfg = JSON.parse(await readFile(cfgPath, 'utf-8'));
  const sources = (cfg.sources || []).filter(
    (s) => s && typeof s === 'object' && s.slug && s.enabled !== false,
  );

  const usedSources = [];
  let all = [];

  for (const src of sources) {
    try {
      const items = await processSource(src);
      if (items.length === 0) {
        console.warn(`[skip] ${src.slug}: лента распарсилась, но 0 пригодных статей`);
        continue;
      }
      all.push(...items);
      usedSources.push({
        slug: src.slug,
        name: src.name,
        city: src.city,
        language: src.language,
        color: src.color,
        url: src.url,
      });
      console.log(`[ok]   ${src.slug}: ${items.length} статей`);
    } catch (err) {
      console.warn(`[fail] ${src.slug} (${src.feed}): ${err.message}`);
    }
  }

  // дедуп по url и по нормализованному заголовку
  const seen = new Set();
  all = all.filter((n) => {
    const k1 = n.url.toLowerCase();
    const k2 = n.title.toLowerCase().replace(/\s+/g, ' ').trim();
    if (seen.has(k1) || seen.has(k2)) return false;
    seen.add(k1);
    seen.add(k2);
    return true;
  });

  // ограничить ~PER_SOURCE свежих на источник
  const perCount = {};
  all.sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
  all = all.filter((n) => {
    perCount[n.sourceSlug] = (perCount[n.sourceSlug] || 0) + 1;
    return perCount[n.sourceSlug] <= PER_SOURCE;
  });

  // общий потолок + сортировка по дате убыв.
  all = all.slice(0, TOTAL_CAP);

  // популярность: новее = выше (100 - индекс), минимум 10, +5 за картинку
  all.forEach((n, i) => {
    let p = Math.max(10, 100 - i);
    if (n.image) p = Math.min(100, p + 5);
    n.popularity = p;
  });

  const payload = {
    generatedAt: new Date().toISOString(),
    sources: usedSources,
    news: all,
  };

  await mkdir(dirname(resolve(OUT)), { recursive: true });
  await writeFile(resolve(OUT), JSON.stringify(payload, null, 2), 'utf-8');
  console.log(`\nГотово: ${usedSources.length} источников, ${all.length} новостей → ${resolve(OUT)}`);
}

main().catch((e) => {
  console.error('Фатальная ошибка:', e);
  process.exit(1);
});
