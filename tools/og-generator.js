// OG cover generator. Generates 1200x630 PNG per article using SVG + sharp.
// Output: blog/<slug>/cover.png
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..');
const OUT_BLOG = path.join(ROOT, 'blog');

// Category → gradient palette (start, end)
const CATEGORY_GRADIENTS = {
  legal:       ['#1e3a8a', '#4f8cff'], // blue
  'ai-dev':    ['#5b21b6', '#a855f7'], // violet
  'ai-life':   ['#7c3aed', '#ec4899'], // violet-pink
  marketing:   ['#c2410c', '#fb923c'], // orange
  sales:       ['#065f46', '#10b981'], // emerald
  media:       ['#7c2d12', '#f59e0b'], // amber-rust
  industries:  ['#9f1239', '#f87171'], // coral
  esports:     ['#0f172a', '#22d3ee'], // cyan-night
  development: ['#1e293b', '#64748b'], // slate
  security:    ['#7f1d1d', '#ef4444'], // red
  finance:     ['#064e3b', '#34d399'], // green
  ai:          ['#5b21b6', '#a855f7'], // legacy
  career:      ['#1e3a8a', '#4f8cff'], // legacy
};

const CATEGORY_LABELS = {
  legal:       'Право и compliance',
  'ai-dev':    'AI для разработчиков',
  'ai-life':   'AI для жизни и работы',
  marketing:   'Маркетинг и контент',
  sales:       'Продажи и стартап',
  media:       'Медиа и подкасты',
  industries:  'Отрасли',
  esports:     'Киберспорт',
  development: 'Разработка',
  security:    'Безопасность',
  finance:     'Финансы',
};

function escapeXml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Split title into 2-3 lines, ~28 chars per line max
function wrapTitle(title, maxChars = 32) {
  const words = title.split(/\s+/);
  const lines = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > maxChars && cur) {
      lines.push(cur.trim());
      cur = w;
    } else {
      cur = (cur + ' ' + w).trim();
    }
    if (lines.length >= 3) break;
  }
  if (cur && lines.length < 4) lines.push(cur.trim());
  return lines.slice(0, 4);
}

function buildSvg(article) {
  const [c1, c2] = CATEGORY_GRADIENTS[article.category] || CATEGORY_GRADIENTS.legal;
  const cat = CATEGORY_LABELS[article.category] || article.category || '';
  const lines = wrapTitle(article.title, 30);
  const lineHeight = 78;
  const startY = 230 - (lines.length - 2) * (lineHeight / 2);

  const titleSvg = lines.map((line, i) =>
    `<text x="80" y="${startY + i * lineHeight}" font-family="Arial, 'Liberation Sans', sans-serif" font-weight="800" font-size="62" fill="#ffffff">${escapeXml(line)}</text>`
  ).join('\n  ');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
    <radialGradient id="glow" cx="80%" cy="20%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- top bar -->
  <text x="80" y="100" font-family="Arial, sans-serif" font-weight="700" font-size="24" fill="#ffffff" opacity="0.85" letter-spacing="2">${escapeXml(cat.toUpperCase())}</text>
  <line x1="80" y1="120" x2="180" y2="120" stroke="#ffffff" stroke-width="3" opacity="0.7"/>

  <!-- title -->
  ${titleSvg}

  <!-- bottom: author + domain -->
  <line x1="80" y1="510" x2="1120" y2="510" stroke="#ffffff" stroke-width="2" opacity="0.25"/>
  <text x="80" y="565" font-family="Arial, sans-serif" font-weight="700" font-size="30" fill="#ffffff">Чимитдоржи Дарижапов</text>
  <text x="80" y="600" font-family="Arial, sans-serif" font-weight="400" font-size="22" fill="#ffffff" opacity="0.8">chimitdorzhi.tech / блог</text>

  <!-- reading minutes badge -->
  <rect x="980" y="540" width="140" height="60" rx="30" fill="#ffffff" fill-opacity="0.18" stroke="#ffffff" stroke-opacity="0.4" stroke-width="2"/>
  <text x="1050" y="580" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="22" fill="#ffffff">${article.readingMinutes || 10} мин</text>
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

module.exports = { generateCover, generateAll, buildSvg };
