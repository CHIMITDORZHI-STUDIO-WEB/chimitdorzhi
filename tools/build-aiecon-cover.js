/*
 * Обложка страницы «ИИ и экономика Забайкальского края», 1200×630.
 *
 * В том же редакционном стиле, что и обложки предложений, но со своим
 * знаком: сетка из ста клеток — это эмблема самой страницы, и она несёт
 * данные, а не украшает. Пропорции цветов настоящие, из градиентов
 * экспозиции МОТ, применённых к занятости края: 6 клеток высокой
 * экспозиции, 6 повышенной, 6 умеренной, 6 низкой и 76 без неё.
 *
 * Запуск: node tools/build-aiecon-cover.js
 */
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'ai-economy', 'cover.png');
const CREAM = '#f4f1ea';
const INK = '#16130f';
const FONT = "'Manrope', 'Inter', 'DejaVu Sans', 'Liberation Sans', Arial, sans-serif";

// Цвета те же, что на странице: проверены валидатором палитры
const G4 = '#BE7020';
const G3 = '#7558AE';
const G2 = '#2F6EA8';
const G1 = '#2F6EA8';   // тот же синий, но полупрозрачный
const OFF = '#d8d4cb';

// Сколько клеток какого цвета. Сумма ровно сто.
const CELLS = [
  [6, G4, 1], [6, G3, 0.88], [6, G2, 0.82], [6, G1, 0.42], [76, OFF, 1],
];

function grid(x0, y0, step, size) {
  const out = [];
  let i = 0;
  for (const [count, color, opacity] of CELLS) {
    for (let k = 0; k < count; k++, i++) {
      const x = x0 + (i % 10) * step;
      const y = y0 + Math.floor(i / 10) * step;
      out.push(`<rect x="${x}" y="${y}" width="${size}" height="${size}" rx="3" `
        + `fill="${color}" fill-opacity="${opacity}"/>`);
    }
  }
  return out.join('');
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="tint" cx="88%" cy="10%" r="66%">
      <stop offset="0%" stop-color="${G4}" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="${G4}" stop-opacity="0"/>
    </radialGradient>
    <filter id="rough" x="-12%" y="-12%" width="124%" height="124%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="1.6" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>

  <rect width="1200" height="630" fill="${CREAM}"/>
  <rect width="1200" height="630" fill="url(#tint)"/>
  <rect x="0" y="0" width="14" height="630" fill="${G4}"/>

  <text x="92" y="112" font-family="${FONT}" font-weight="800" font-size="24"
        fill="${G4}" letter-spacing="3">ИИ И ЭКОНОМИКА · ЗАБАЙКАЛЬСКИЙ КРАЙ</text>
  <rect x="92" y="130" width="64" height="4" rx="2" fill="${G4}"/>

  <text x="92" y="216" font-family="${FONT}" font-weight="800" font-size="60"
        letter-spacing="-1.6" fill="${INK}">Что искусственный</text>
  <text x="92" y="286" font-family="${FONT}" font-weight="800" font-size="60"
        letter-spacing="-1.6" fill="${INK}">интеллект сделает</text>
  <text x="92" y="356" font-family="${FONT}" font-weight="800" font-size="60"
        letter-spacing="-1.6" fill="${INK}">с экономикой края</text>

  <text x="92" y="424" font-family="${FONT}" font-weight="600" font-size="27"
        fill="${INK}" opacity="0.62">Шесть исследований на данных Росстата:</text>
  <text x="92" y="462" font-family="${FONT}" font-weight="600" font-size="27"
        fill="${INK}" opacity="0.62">экономика, люди, школа, власть, язык, доверие</text>

  <g filter="url(#rough)">${grid(806, 150, 30, 22)}</g>
  <text x="806" y="498" font-family="${FONT}" font-weight="800" font-size="23" fill="${INK}">76 клеток из ста ИИ не трогает</text>
  <text x="806" y="528" font-family="${FONT}" font-weight="500" font-size="18"
        fill="${INK}" opacity="0.55">клетка = процент рабочих мест</text>

  <line x1="92" y1="546" x2="1108" y2="546" stroke="${INK}" stroke-width="2" stroke-opacity="0.14"/>
  <text x="92" y="592" font-family="${FONT}" font-weight="800" font-size="28"
        fill="${INK}">Чимитдоржи Дарижапов</text>
  <text x="700" y="592" font-family="${FONT}" font-weight="500" font-size="21"
        fill="${INK}" opacity="0.55">chimitdorzhi.tech/ai-economy</text>
</svg>`;

(async () => {
  let sharp;
  try {
    sharp = require('sharp');
  } catch {
    console.log('⚠ sharp недоступен — обложка не собрана');
    process.exit(1);
  }
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(OUT);
  const kb = Math.round(fs.statSync(OUT).size / 1024);
  console.log(`обложка: ${OUT} (${kb} КБ, 1200×630)`);
})();
