// Обложки статей блога. Единые правила оформления (действуют с 17.09.2026):
//
// 1. Стиль один для всех: тёмная основа #0b1020, шрифт Manrope, заголовок
//    заглавными; вторая половина строк заголовка — жёлтым #f5b642. Сверху жёлтая
//    плашка с названием рубрики, снизу имя автора, адрес сайта и время чтения.
// 2. Фотография автора ставится только там, где она уместна: рубрики из
//    PHOTO_CATEGORIES (кейсы, экспертный блог, продажи). Фото берётся из
//    assets/cover-photos и закрепляется за статьёй по её slug — у одной статьи
//    обложка всегда одна и та же. В обзорах чужих компаний и технических
//    разборах фото не ставим.
// 3. Остальным статьям — графика «диагональная плашка»: цветной блок справа
//    цветом рубрики (CATEGORY_ACCENT) поверх тёмного фона.
// 4. Размеры: cover (1200x630) — сайт, Telegram, VK, Дзен, поиск; pin (1000x1500)
//    — Pinterest; square (1080x1080) и story (1080x1920) — соцсети, делаются по
//    запросу через tools/social-covers.js и в репозитории не хранятся.
// 5. Фото-обложки сохраняются в JPEG (cover.jpg), графические — в PNG (cover.png).
//    Ссылку на нужный файл отдаёт coverFile(article).
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..');
const OUT_BLOG = path.join(ROOT, 'blog');
const PHOTO_DIR = path.join(ROOT, 'assets', 'cover-photos');

// Бренд
const INK = '#0b1020';       // основа
const INK_DEEP = '#070a14';  // фон графики
const AMBER = '#f5b642';     // общий акцент, по нему обложки узнаются
const FONT = "'Manrope', 'Inter', 'DejaVu Sans', 'Liberation Sans', Arial, sans-serif";

// Рубрики, где уместна фотография автора.
const PHOTO_CATEGORIES = new Set(['cases', 'expert', 'sales']);

// Категория → цвет диагональной плашки (на тёмном фоне)
const CATEGORY_ACCENT = {
  legal:       '#2563eb',
  'ai-dev':    '#7c3aed',
  'ai-life':   '#8b5cf6',
  marketing:   '#ea580c',
  geo:         '#0891b2',
  sales:       '#059669',
  media:       '#d97706',
  industries:  '#e11d48',
  esports:     '#14b8a6',
  development: '#3b82f6',
  security:    '#dc2626',
  finance:     '#10b981',
  mlm:         '#db2777',
  mwrlife:     '#d4a03c',
  opensource:  '#22c55e',
  'biznes-krugozor': '#6366f1',
  'igry-dlya-biznesa': '#f97316',
  cases:       '#0ea5e9',
  expert:      '#eab308',
  ai:          '#7c3aed',
  career:      '#2563eb',
};

const CATEGORY_LABELS = {
  legal:       'Право и 152-ФЗ',
  'ai-dev':    'AI для разработчиков',
  'ai-life':   'AI для жизни и работы',
  marketing:   'Маркетинг',
  geo:         'GEO и AI-поиск',
  sales:       'Продажи',
  media:       'Медиа',
  industries:  'Отрасли',
  esports:     'Киберспорт',
  development: 'Разработка',
  security:    'Безопасность',
  finance:     'Финансы',
  mlm:         'Сетевой бизнес',
  mwrlife:     'MWR Life',
  opensource:  'Open-source',
  'biznes-krugozor': 'Бизнес-кругозор',
  'igry-dlya-biznesa': 'Игры для бизнеса',
  cases:       'Кейсы',
  expert:      'Экспертный блог',
};

// Форматы обложек
const SIZES = {
  cover:  { w: 1200, h: 630,  orient: 'land' },
  pin:    { w: 1000, h: 1500, orient: 'tall' },
  square: { w: 1080, h: 1080, orient: 'tall' },
  story:  { w: 1080, h: 1920, orient: 'tall' },
};

function escapeXml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function hashNum(s) { let h = 0; for (let i = 0; i < String(s).length; i++) h = (h * 31 + String(s).charCodeAt(i)) >>> 0; return h; }

// Заголовок заглавными, разбитый на строки
function wrapTitle(title, maxChars, maxLines) {
  const words = String(title || '').toUpperCase().split(/\s+/);
  const lines = []; let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > maxChars && cur) { lines.push(cur.trim()); cur = w; }
    else cur = (cur + ' ' + w).trim();
    if (lines.length >= maxLines) break;
  }
  if (cur && lines.length < maxLines) lines.push(cur.trim());
  return lines.slice(0, maxLines);
}

// Подбор размера заголовка: берём первый вариант, куда текст влезает целиком.
// Так длинные заголовки не обрезаются на полуслове, а короткие остаются крупными.
function fitTitle(title, variants) {
  const total = String(title || '').trim().length;
  for (const v of variants) {
    const lines = wrapTitle(title, v.chars, v.maxLines);
    if (lines.join(' ').length >= total - 2) return { lines, fs: v.fs, lh: Math.round(v.fs * v.lhK) };
  }
  const last = variants[variants.length - 1];
  const lines = wrapTitle(title, last.chars, last.maxLines);
  // не влезло даже в самый мелкий вариант — честное многоточие вместо обрыва
  if (lines.length) lines[lines.length - 1] = lines[lines.length - 1].replace(/[\s,:;—-]*$/, '') + '…';
  return { lines, fs: last.fs, lh: Math.round(last.fs * last.lhK) };
}

// Список фотографий (кешируется на процесс)
let PHOTOS = null;
function photoList() {
  if (PHOTOS) return PHOTOS;
  try {
    PHOTOS = fs.readdirSync(PHOTO_DIR).filter(f => /\.(jpe?g|png)$/i.test(f)).sort();
  } catch (e) { PHOTOS = []; }
  return PHOTOS;
}
// Фото закреплено за статьёй: один и тот же slug всегда даёт один и тот же кадр.
function photoFor(article) {
  const list = photoList();
  if (!list.length) return null;
  return path.join(PHOTO_DIR, list[hashNum(article.slug) % list.length]);
}
// Где на фото лицо: доля высоты кадра (центр лица), по номеру файла. Размечено
// вручную по листу миниатюр 22.09.2026. Автообрезка sharp (attention) уводила кадр
// на одежду или фон и резала лицо, поэтому окно обрезки ставим по лицу.
const FACE_Y = {
  '01': .45, '02': .47, '03': .43, '04': .50, '05': .35, '06': .47, '07': .50, '08': .50, '09': .37,
  '10': .25, '11': .42, '12': .45, '13': .42, '14': .43, '15': .43, '16': .42, '17': .40, '18': .55,
  '19': .47, '20': .52, '21': .47, '22': .52, '23': .42, '24': .42, '25': .42, '26': .42, '27': .42,
  '28': .48, '29': .48, '30': .43, '31': .45, '32': .47, '33': .43, '34': .55, '35': .43, '36': .47,
  '37': .47, '38': .50, '39': .50, '40': .52, '41': .50, '42': .50, '43': .53, '44': .50, '45': .53,
  '46': .40, '47': .40, '48': .50, '49': .50, '50': .42, '51': .43, '52': .45, '53': .45, '54': .40,
  '55': .32, '56': .40, '57': .40, '58': .40, '59': .45, '60': .36, '61': .36, '62': .47, '63': .50,
  '64': .53, '65': .40, '66': .42, '67': .42, '68': .55,
};
// Обрезать фото до w×h так, чтобы лицо оказалось по центру окна (насколько позволяет кадр).
async function cropToFace(photo, w, h) {
  const meta = await sharp(photo).metadata();
  const faceY = FACE_Y[path.basename(photo).slice(0, 2)] ?? 0.42;
  const scale = Math.max(w / meta.width, h / meta.height);
  const rw = Math.round(meta.width * scale), rh = Math.round(meta.height * scale);
  const left = Math.round((rw - w) / 2);
  const top = Math.min(Math.max(Math.round(faceY * rh - h / 2), 0), rh - h);
  return sharp(photo).resize(rw, rh).extract({ left, top, width: w, height: h });
}
function usesPhoto(article) {
  return PHOTO_CATEGORIES.has(article.category) && !!photoFor(article);
}
// Какой файл обложки у статьи: фото — jpg, графика — png
function coverFile(article) { return usesPhoto(article) ? 'cover.jpg' : 'cover.png'; }

// ---------- Общие элементы ----------
function catPill(label, x, y, fs, pad) {
  const w = Math.round(label.length * fs * 0.62 + pad * 2);
  return `<rect x="${x}" y="${y}" rx="${Math.round(fs * 0.9)}" width="${w}" height="${Math.round(fs * 2.1)}" fill="${AMBER}"/>
  <text x="${x + w / 2}" y="${y + Math.round(fs * 1.42)}" text-anchor="middle" font-family="${FONT}" font-weight="800" font-size="${fs}" letter-spacing="1.5" fill="${INK}">${escapeXml(label.toUpperCase())}</text>`;
}
function titleLines(lines, x, y, fs, lh) {
  const accentFrom = Math.ceil(lines.length / 2);
  return lines.map((l, i) =>
    `<text x="${x}" y="${y + i * lh}" font-family="${FONT}" font-weight="800" font-size="${fs}" letter-spacing="-1" fill="${i >= accentFrom ? AMBER : '#ffffff'}">${escapeXml(l)}</text>`
  ).join('\n  ');
}
function verifiedHandle(x, y, r, fs) {
  return `<circle cx="${x + r}" cy="${y}" r="${r}" fill="${AMBER}"/>
  <path d="M${x + r - r * 0.45} ${y} l${(r * 0.32).toFixed(1)} ${(r * 0.34).toFixed(1)} l${(r * 0.62).toFixed(1)} -${(r * 0.62).toFixed(1)}" stroke="${INK}" stroke-width="${(r * 0.24).toFixed(1)}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="${x + r * 2 + Math.round(r * 0.8)}" y="${y + fs * 0.36}" font-family="${FONT}" font-weight="600" font-size="${fs}" fill="#ffffff">chimitdorzhi.tech</text>`;
}

// ---------- Горизонталь 1200x630 ----------
function landscapeOverlay(article, withPhoto) {
  const cat = CATEGORY_LABELS[article.category] || 'Блог';
  const min = article.readingMinutes || 5;
  const fit = fitTitle(article.title, withPhoto
    ? [{ chars: 14, maxLines: 3, fs: 54, lhK: 1.18 }, { chars: 16, maxLines: 4, fs: 46, lhK: 1.2 }, { chars: 19, maxLines: 5, fs: 39, lhK: 1.22 }]
    : [{ chars: 17, maxLines: 3, fs: 56, lhK: 1.18 }, { chars: 20, maxLines: 4, fs: 48, lhK: 1.2 }, { chars: 24, maxLines: 5, fs: 40, lhK: 1.22 }]);
  const lines = fit.lines, lh = fit.lh;
  // держим заголовок ниже плашки рубрики и выше подписи
  const top = Math.max(212, 290 - (lines.length - 1) * lh / 2);
  const panel = withPhoto
    ? `<defs><linearGradient id="p" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stop-color="${INK}"/><stop offset="80%" stop-color="${INK}"/><stop offset="100%" stop-color="${INK}" stop-opacity="0"/></linearGradient></defs>
  <rect width="660" height="630" fill="url(#p)"/>`
    : `<rect width="1200" height="630" fill="${INK_DEEP}"/>
  <path d="M820 0 L1200 0 L1200 630 L620 630 Z" fill="${CATEGORY_ACCENT[article.category] || '#3b82f6'}" fill-opacity="0.92"/>
  <path d="M980 0 L1200 0 L1200 630 L780 630 Z" fill="${AMBER}" fill-opacity="0.22"/>
  <circle cx="1088" cy="472" r="88" fill="none" stroke="#ffffff" stroke-opacity="0.28" stroke-width="3"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  ${panel}
  ${catPill(cat, 72, 78, 18, 22)}
  ${titleLines(lines, 72, top, fit.fs, lh)}
  <line x1="72" y1="528" x2="${withPhoto ? 560 : 700}" y2="528" stroke="#ffffff" stroke-opacity="0.2" stroke-width="2"/>
  <text x="72" y="570" font-family="${FONT}" font-weight="800" font-size="24" fill="#ffffff">Чимитдоржи Дарижапов</text>
  <text x="72" y="600" font-family="${FONT}" font-weight="500" font-size="19" fill="#ffffff" fill-opacity="0.6">chimitdorzhi.tech · ${min} мин чтения</text>
</svg>`;
}

// ---------- Вертикали: pin / square / story ----------
function tallOverlay(article, size, withPhoto) {
  const { w, h } = size;
  const k = w / 1080;                       // масштаб от базовой ширины
  const cat = CATEGORY_LABELS[article.category] || 'Блог';
  const min = article.readingMinutes || 5;
  const base = Math.round((h >= 1700 ? 92 : h >= 1400 ? 84 : 74) * k);
  const chars = h >= 1700 ? 13 : 15;
  const tfit = fitTitle(article.title, [
    { chars, maxLines: 4, fs: base, lhK: 1.12 },
    { chars: chars + 3, maxLines: 5, fs: Math.round(base * 0.84), lhK: 1.14 },
    { chars: chars + 7, maxLines: 6, fs: Math.round(base * 0.7), lhK: 1.16 },
  ]);
  const fs = tfit.fs, lines = tfit.lines, lh = tfit.lh;
  const pad = Math.round(72 * k);
  const top = Math.round(h * (h >= 1700 ? 0.2 : 0.21)) + fs;
  const fade = h >= 1700 ? 30 : 34;
  const scrim = withPhoto
    ? `<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#05070d" stop-opacity="0.96"/>
      <stop offset="${fade}%" stop-color="#05070d" stop-opacity="0.82"/>
      <stop offset="${fade + 22}%" stop-color="#05070d" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#05070d" stop-opacity="0.45"/></linearGradient></defs>
  <rect width="${w}" height="${h}" fill="url(#s)"/>`
    : `<rect width="${w}" height="${h}" fill="${INK_DEEP}"/>
  <path d="M0 ${Math.round(h * 0.62)} L${w} ${Math.round(h * 0.5)} L${w} ${h} L0 ${h} Z" fill="${CATEGORY_ACCENT[article.category] || '#3b82f6'}" fill-opacity="0.92"/>
  <path d="M0 ${Math.round(h * 0.78)} L${w} ${Math.round(h * 0.68)} L${w} ${h} L0 ${h} Z" fill="${AMBER}" fill-opacity="0.22"/>
  <circle cx="${Math.round(w * 0.78)}" cy="${Math.round(h * 0.86)}" r="${Math.round(90 * k)}" fill="none" stroke="#ffffff" stroke-opacity="0.28" stroke-width="3"/>`;
  const pillFs = Math.round(fs * 0.34);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  ${scrim}
  ${catPill(cat, pad, top - Math.round(fs * 2.4), pillFs, Math.round(20 * k))}
  ${titleLines(lines, pad, top, fs, lh)}
  ${verifiedHandle(pad, top + (lines.length - 1) * lh + Math.round(fs * 0.95), Math.round(fs * 0.28), Math.round(fs * 0.42))}
  <rect x="${pad}" y="${top + (lines.length - 1) * lh + Math.round(fs * 1.45)}" width="${Math.round(fs * 1.9)}" height="${Math.round(fs * 0.62)}" rx="${Math.round(fs * 0.31)}" fill="${AMBER}"/>
  <text x="${pad + Math.round(fs * 0.95)}" y="${top + (lines.length - 1) * lh + Math.round(fs * 1.9)}" text-anchor="middle" font-family="${FONT}" font-weight="800" font-size="${Math.round(fs * 0.3)}" fill="${INK}">${min} мин</text>
</svg>`;
}

// ---------- Рендер ----------
async function renderSize(article, kind) {
  const size = SIZES[kind];
  if (!size) throw new Error('Неизвестный формат обложки: ' + kind);
  const withPhoto = usesPhoto(article);
  const overlay = size.orient === 'land'
    ? landscapeOverlay(article, withPhoto)
    : tallOverlay(article, size, withPhoto);

  let base;
  if (withPhoto) {
    const photo = photoFor(article);
    if (size.orient === 'land') {
      // фото справа, слева тёмная панель под текст
      const half = await (await cropToFace(photo, 620, 630)).toBuffer();
      base = await sharp({ create: { width: size.w, height: size.h, channels: 3, background: INK } })
        .composite([{ input: half, left: size.w - 620, top: 0 }]).png().toBuffer();
    } else {
      base = await (await cropToFace(photo, size.w, size.h)).png().toBuffer();
    }
  } else {
    base = await sharp({ create: { width: size.w, height: size.h, channels: 3, background: INK_DEEP } }).png().toBuffer();
  }
  return sharp(base).composite([{ input: Buffer.from(overlay) }]);
}

// Основная обложка статьи: blog/<slug>/cover.png или cover.jpg
async function generateCover(article) {
  if (!article.published) return null;
  const outDir = path.join(OUT_BLOG, article.slug);
  fs.mkdirSync(outDir, { recursive: true });
  const img = await renderSize(article, 'cover');
  const file = coverFile(article);
  const outFile = path.join(outDir, file);
  if (file === 'cover.jpg') {
    await img.jpeg({ quality: 82, mozjpeg: true }).toFile(outFile);
    // убираем устаревшую png-версию, чтобы не было двух обложек
    try { fs.unlinkSync(path.join(outDir, 'cover.png')); } catch (e) { /* её могло не быть */ }
  } else {
    await img.png({ compressionLevel: 9 }).toFile(outFile);
    try { fs.unlinkSync(path.join(outDir, 'cover.jpg')); } catch (e) { /* ок */ }
  }
  return `/blog/${article.slug}/${file}`;
}

// Вертикальная обложка под Pinterest: blog/<slug>/pin.png (или pin.jpg для фото)
async function generatePin(article) {
  if (!article.published) return null;
  const outDir = path.join(OUT_BLOG, article.slug);
  fs.mkdirSync(outDir, { recursive: true });
  const img = await renderSize(article, 'pin');
  const withPhoto = usesPhoto(article);
  const file = withPhoto ? 'pin.jpg' : 'pin.png';
  const outFile = path.join(outDir, file);
  if (withPhoto) {
    await img.jpeg({ quality: 82, mozjpeg: true }).toFile(outFile);
    try { fs.unlinkSync(path.join(outDir, 'pin.png')); } catch (e) { /* ок */ }
  } else {
    await img.png({ compressionLevel: 9 }).toFile(outFile);
    try { fs.unlinkSync(path.join(outDir, 'pin.jpg')); } catch (e) { /* ок */ }
  }
  return `/blog/${article.slug}/${file}`;
}
function pinFile(article) { return usesPhoto(article) ? 'pin.jpg' : 'pin.png'; }

async function generateAll(articles) {
  const published = articles.filter(a => a.published && a.contentHtml);
  let count = 0;
  for (const a of published) { await generateCover(a); count++; }
  return count;
}

module.exports = {
  generateCover, generatePin, generateAll, renderSize,
  coverFile, pinFile, usesPhoto, photoFor,
  SIZES, PHOTO_CATEGORIES, CATEGORY_ACCENT, CATEGORY_LABELS, AMBER, INK,
};
