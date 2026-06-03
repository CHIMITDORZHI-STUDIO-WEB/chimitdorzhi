// OG cover generator. Generates 1200x630 PNG per article using SVG + sharp.
// Output: blog/<slug>/cover.png
// Стиль: «Светлый редакционный» — кремовый фон, кобальтовый акцент,
// тёмный жирный заголовок, тонкая категорийная подсветка для узнаваемости.
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..');
const OUT_BLOG = path.join(ROOT, 'blog');

// Бренд
const CREAM = '#f4f1ea';
const INK = '#16130f';
const COBALT = '#1e4fd6';

// Категория → один насыщённый акцентный цвет (читается на кремовом)
const CATEGORY_ACCENT = {
  legal:       '#1e4fd6', // кобальт
  'ai-dev':    '#6d28d9', // фиолет
  'ai-life':   '#7c3aed',
  marketing:   '#c2410c', // жжёный оранжевый
  geo:         '#0e7490', // петроль
  sales:       '#047857', // изумруд
  media:       '#b45309', // амбра
  industries:  '#be123c', // роза-красный
  esports:     '#0f766e', // глубокий тил
  development: '#334155', // сланец
  security:    '#b91c1c', // красный
  finance:     '#047857',
  mlm:         '#9d174d', // роза
  mwrlife:     '#b8862b', // золото
  ai:          '#6d28d9',
  career:      '#1e4fd6',
};

const CATEGORY_LABELS = {
  legal:       'Право и compliance',
  'ai-dev':    'AI для разработчиков',
  'ai-life':   'AI для жизни и работы',
  marketing:   'Маркетинг и контент',
  geo:         'GEO и AI-поиск',
  sales:       'Продажи и стартап',
  media:       'Медиа и подкасты',
  industries:  'Отрасли',
  esports:     'Киберспорт',
  development: 'Разработка',
  security:    'Безопасность',
  finance:     'Финансы',
  mlm:         'Сетевой бизнес',
  mwrlife:     'MWR Life',
};

function escapeXml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Разбить заголовок на строки, ~maxChars символов в строке
function wrapTitle(title, maxChars = 26) {
  const words = String(title || '').split(/\s+/);
  const lines = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > maxChars && cur) {
      lines.push(cur.trim());
      cur = w;
    } else {
      cur = (cur + ' ' + w).trim();
    }
    if (lines.length >= 4) break;
  }
  if (cur && lines.length < 4) lines.push(cur.trim());
  return lines.slice(0, 4);
}

const FONT = "'Manrope', 'Inter', 'DejaVu Sans', 'Liberation Sans', Arial, sans-serif";

function buildSvg(article) {
  const accent = CATEGORY_ACCENT[article.category] || COBALT;
  const cat = CATEGORY_LABELS[article.category] || article.category || '';
  const lines = wrapTitle(article.title, 26);
  const lineHeight = 76;
  // вертикальное центрирование блока заголовка вокруг y≈300
  const startY = 300 - (lines.length - 1) * (lineHeight / 2);

  const titleSvg = lines.map((line, i) =>
    `<text x="92" y="${startY + i * lineHeight}" font-family="${FONT}" font-weight="800" font-size="64" letter-spacing="-1.5" fill="${INK}">${escapeXml(line)}</text>`
  ).join('\n  ');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="tint" cx="100%" cy="0%" r="70%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- кремовый фон -->
  <rect width="1200" height="630" fill="${CREAM}"/>
  <rect width="1200" height="630" fill="url(#tint)"/>
  <!-- крупный декоративный полупрозрачный круг в углу -->
  <circle cx="1120" cy="120" r="220" fill="${accent}" fill-opacity="0.06"/>
  <!-- левая акцентная полоса -->
  <rect x="0" y="0" width="14" height="630" fill="${accent}"/>

  <!-- категория -->
  <text x="92" y="120" font-family="${FONT}" font-weight="800" font-size="26" fill="${accent}" letter-spacing="3">${escapeXml(cat.toUpperCase())}</text>
  <rect x="92" y="138" width="64" height="4" rx="2" fill="${accent}"/>

  <!-- заголовок -->
  ${titleSvg}

  <!-- низ: автор + домен -->
  <line x1="92" y1="520" x2="1108" y2="520" stroke="${INK}" stroke-width="2" stroke-opacity="0.14"/>
  <text x="92" y="572" font-family="${FONT}" font-weight="800" font-size="30" fill="${INK}">Чимитдоржи Дарижапов</text>
  <text x="92" y="606" font-family="${FONT}" font-weight="500" font-size="22" fill="${INK}" opacity="0.55">chimitdorzhi.tech · блог</text>

  <!-- бейдж минут чтения -->
  <rect x="968" y="546" width="140" height="58" rx="12" fill="${accent}"/>
  <text x="1038" y="584" text-anchor="middle" font-family="${FONT}" font-weight="800" font-size="22" fill="#ffffff">${article.readingMinutes || 10} мин</text>
</svg>`;
}

async function generateCover(article) {
  if (!article.published) return null;
  const svg = buildSvg(article);
  const outDir = path.join(OUT_BLOG, article.slug);
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, 'cover.png');
  await sharp(Buffer.from(svg)).png({ quality: 90, compressionLevel: 9 }).toFile(outFile);
  return `/blog/${article.slug}/cover.png`;
}

async function generateAll(articles) {
  const published = articles.filter(a => a.published && a.contentHtml);
  let count = 0;
  for (const a of published) {
    await generateCover(a);
    count++;
  }
  return count;
}

module.exports = { generateCover, generateAll, buildSvg, CATEGORY_ACCENT, CATEGORY_LABELS };
