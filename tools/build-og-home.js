// Генерация OG-превью главной (картинка ссылки в Telegram/VK/соцсетях): 1200x630.
// Слева — панель с именем и слоганом (бренд-цвета), справа — фото со смарт-обрезкой по лицу.
const sharp = require('sharp');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'hero-photo.png');
const OUT = path.join(ROOT, 'og-home.jpg');

const W = 1200, H = 630, PW = 480;      // ширина фото справа
const INK = '#16130f', ACCENT = '#1e4fd6', CREAM = '#f4f1ea';
const FONT = "'Manrope','Inter','DejaVu Sans','Liberation Sans',Arial,sans-serif";

(async () => {
  // Фото: обрезаем под колонку PWxH, фокус на лице (attention)
  const photo = await sharp(SRC)
    .resize(PW, H, { fit: 'cover', position: sharp.strategy.attention })
    .toBuffer();

  // Текстовый слой + лёгкий градиент-стык
  const tx = 72;
  const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="seam" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${CREAM}" stop-opacity="0"/>
      <stop offset="1" stop-color="${CREAM}" stop-opacity="0.0"/>
    </linearGradient>
  </defs>
  <rect x="${W - PW - 6}" y="0" width="6" height="${H}" fill="${ACCENT}"/>
  <text x="${tx}" y="150" font-family="${FONT}" font-weight="700" font-size="26" letter-spacing="2" fill="${ACCENT}">16+ ЛЕТ · IT · AI/ML · 152-ФЗ</text>
  <text x="${tx}" y="270" font-family="${FONT}" font-weight="800" font-size="74" letter-spacing="-2" fill="${INK}">Чимитдоржи</text>
  <text x="${tx}" y="356" font-family="${FONT}" font-weight="800" font-size="74" letter-spacing="-2" fill="${INK}">Дарижапов</text>
  <text x="${tx}" y="446" font-family="${FONT}" font-weight="600" font-size="38" fill="${INK}">IT и AI для <tspan fill="${ACCENT}">вашего бизнеса</tspan></text>
  <text x="${tx}" y="566" font-family="${FONT}" font-weight="700" font-size="28" fill="${INK}" opacity="0.55">chimitdorzhi.tech</text>
</svg>`;

  await sharp({ create: { width: W, height: H, channels: 3, background: CREAM } })
    .composite([
      { input: photo, left: W - PW, top: 0 },
      { input: Buffer.from(svg), left: 0, top: 0 },
    ])
    .jpeg({ quality: 88, progressive: true })
    .toFile(OUT);

  console.log('OG-картинка готова:', OUT);
})();
