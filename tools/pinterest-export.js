// Pinterest export: вертикальные обложки 2:3 (1000x1500) + CSV для массовой загрузки.
//
// Pinterest «Массовое создание пинов» принимает CSV с колонками:
//   Title, Media URL, Pinterest board, Thumbnail, Description, Link, Publish date, Keywords
// Лимит — до 200 пинов на файл. Media URL должен быть публично доступной картинкой.
//
// Использование:
//   node tools/pinterest-export.js [N] [board]
//   node tools/pinterest-export.js 200 "CHIMITDORZHI STUDIO"
//
// Делает:
//   1) рендерит blog/<slug>/pin.png (1000x1500) для N самых свежих статей;
//   2) пишет pinterest/pinterest-<N>.csv.

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { CATEGORY_ACCENT, CATEGORY_LABELS } = require('./og-generator.js');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://chimitdorzhi.tech';
const FONT = "'Manrope', 'Inter', 'DejaVu Sans', 'Liberation Sans', Arial, sans-serif";
const CREAM = '#f4f1ea', INK = '#16130f', COBALT = '#1e4fd6';
const W = 1000, H = 1500;

const N = parseInt(process.argv[2], 10) || 200;
const BOARD = process.argv[3] || 'CHIMITDORZHI STUDIO';

function escapeXml(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}
function wrapTitle(title, maxChars, maxLines) {
  const words = String(title || '').split(/\s+/);
  const lines = []; let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > maxChars && cur) { lines.push(cur.trim()); cur = w; }
    else cur = (cur + ' ' + w).trim();
    if (lines.length >= maxLines) break;
  }
  if (cur && lines.length < maxLines) lines.push(cur.trim());
  return lines.slice(0, maxLines);
}
function clip(s, n) { s = String(s || '').trim(); return s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…'; }
function csvCell(s) { return '"' + String(s == null ? '' : s).replace(/"/g, '""').replace(/\r?\n/g, ' ').trim() + '"'; }

// Вертикальная обложка 2:3 в фирменном «светлом редакционном» стиле.
function buildPinSvg(a) {
  const accent = CATEGORY_ACCENT[a.category] || COBALT;
  const cat = CATEGORY_LABELS[a.category] || a.category || '';
  const lines = wrapTitle(a.title, 18, 6);
  const lh = 88;
  const startY = 560 - (lines.length - 1) * (lh / 2);
  const titleSvg = lines.map((line, i) =>
    `<text x="84" y="${startY + i * lh}" font-family="${FONT}" font-weight="800" font-size="74" letter-spacing="-1.5" fill="${INK}">${escapeXml(line)}</text>`
  ).join('\n  ');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="tint" cx="100%" cy="0%" r="70%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="${CREAM}"/>
  <rect width="${W}" height="${H}" fill="url(#tint)"/>
  <circle cx="940" cy="150" r="260" fill="${accent}" fill-opacity="0.06"/>
  <circle cx="80" cy="1360" r="200" fill="${accent}" fill-opacity="0.05"/>
  <rect x="0" y="0" width="18" height="${H}" fill="${accent}"/>

  <text x="84" y="170" font-family="${FONT}" font-weight="800" font-size="30" fill="${accent}" letter-spacing="3">${escapeXml(cat.toUpperCase())}</text>
  <rect x="84" y="192" width="72" height="5" rx="2" fill="${accent}"/>

  ${titleSvg}

  <line x1="84" y1="1330" x2="916" y2="1330" stroke="${INK}" stroke-width="2" stroke-opacity="0.14"/>
  <text x="84" y="1392" font-family="${FONT}" font-weight="800" font-size="38" fill="${INK}">Чимитдоржи Дарижапов</text>
  <text x="84" y="1438" font-family="${FONT}" font-weight="500" font-size="27" fill="${INK}" opacity="0.55">chimitdorzhi.tech · блог</text>
  <rect x="760" y="1356" width="156" height="64" rx="14" fill="${accent}"/>
  <text x="838" y="1398" text-anchor="middle" font-family="${FONT}" font-weight="800" font-size="26" fill="#ffffff">${a.readingMinutes || 10} мин</text>
</svg>`;
}

// Отрендерить вертикальную обложку pin.png для одной статьи (для встраивания в сборку).
async function renderPin(a) {
  const dir = path.join(ROOT, 'blog', a.slug);
  if (!fs.existsSync(dir)) return false;
  await sharp(Buffer.from(buildPinSvg(a))).png({ quality: 90, compressionLevel: 9 }).toFile(path.join(dir, 'pin.png'));
  return true;
}

module.exports = { buildPinSvg, renderPin };

async function main() {
  const all = require('./blog-data.js').filter(a => a && a.published !== false && a.contentHtml);
  // Самые свежие: по дате публикации (затем изменения), tiebreak — slug для детерминизма.
  const sorted = all.slice().sort((a, b) => {
    const da = (b.datePublished || '') + (b.dateModified || '');
    const db = (a.datePublished || '') + (a.dateModified || '');
    return da < db ? -1 : da > db ? 1 : (a.slug < b.slug ? -1 : 1);
  });
  const ALL_MODE = String(process.argv[2] || '').toLowerCase() === 'all';
  const pick = ALL_MODE ? sorted : sorted.slice(0, N);

  const outDir = path.join(ROOT, 'pinterest');
  fs.mkdirSync(outDir, { recursive: true });
  const HEADER = ['Title', 'Media URL', 'Pinterest board', 'Thumbnail', 'Description', 'Link', 'Publish date', 'Keywords'];
  const pad = n => String(n).padStart(3, '0');
  const PAGE = 200;

  // строка CSV из статьи
  const rowOf = a => [
    clip(a.title, 100),
    `${SITE}/blog/${a.slug}/pin.png`,
    BOARD, '',
    clip(a.excerpt || a.metaDescription || a.title, 480),
    `${SITE}/blog/${a.slug}/`,
    '',
    (a.tags || []).slice(0, 10).join(', '),
  ];
  const writeCsv = (file, articles) => {
    const csv = [HEADER, ...articles.map(rowOf)].map(r => r.map(csvCell).join(',')).join('\r\n');
    fs.writeFileSync(path.join(outDir, file), '﻿' + csv, 'utf8'); // BOM для кириллицы
  };

  let done = 0;
  for (const a of pick) {
    const dir = path.join(ROOT, 'blog', a.slug);
    if (!fs.existsSync(dir)) { console.warn('  нет каталога статьи:', a.slug); continue; }
    await sharp(Buffer.from(buildPinSvg(a))).png({ quality: 90, compressionLevel: 9 }).toFile(path.join(dir, 'pin.png'));
    if (++done % 50 === 0) console.log(`  обложек: ${done}/${pick.length}`);
  }

  if (ALL_MODE) {
    const files = [];
    for (let start = 0; start < pick.length; start += PAGE) {
      const page = pick.slice(start, start + PAGE);
      const file = `pinterest-${pad(start + 1)}-${pad(start + page.length)}.csv`;
      writeCsv(file, page);
      files.push(`${file} (${page.length})`);
    }
    console.log(`\nГотово: ${done} вертикальных обложек (1000x1500). CSV-файлы:\n  ${files.join('\n  ')}`);
  } else {
    writeCsv(`pinterest-${N}.csv`, pick);
    console.log(`\nГотово: ${done} вертикальных обложек (1000x1500), CSV: pinterest/pinterest-${N}.csv (${pick.length} строк)`);
  }
}
if (require.main === module) {
  main().catch(e => { console.error(e); process.exit(1); });
}
