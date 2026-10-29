// Переводы генерируемых блоков /about/ («Квалификация», «Проекты», вопрос про сертификаты).
// Генераторы регистрируют строки через t(), build-blog.js в конце пишет /about-i18n-blocks.js.
// Механизм тот же, что у статичного /about-i18n.js: data-i18n + translations из /i18n.js.
// На иностранных языках не упоминаем 152-ФЗ и российские законы (правило владельца сайта).
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'about-i18n-blocks.js');
const LANGS = ['ru', 'en', 'cn', 'mn'];
let reg = { ru: {}, en: {}, cn: {}, mn: {} };

// Возвращает атрибут для элемента; русский текст должен совпадать с тем, что стоит в разметке.
function t(key, ru, en, cn, mn) {
  const k = 'abg.' + key;
  reg.ru[k] = ru; reg.en[k] = en; reg.cn[k] = cn; reg.mn[k] = mn;
  return `data-i18n="${k}"`;
}

const ABOUT = path.join(__dirname, '..', 'about', 'index.html');

// Пишет словарь и ставит/обновляет тег на /about/ (после /i18n.js и /about-i18n.js, до /script.js).
function write() {
  const body = JSON.stringify(reg);
  const js = `// Генерирует tools/about-i18n-reg.js при сборке блога, руками не править.
(function () {
  if (typeof translations === 'undefined') return;
  var A = ${body};
  ${JSON.stringify(LANGS)}.forEach(function (l) { translations[l] = translations[l] || {}; Object.assign(translations[l], A[l]); });
})();
`;
  fs.writeFileSync(OUT, js);
  if (!fs.existsSync(ABOUT)) return;
  const v = require('crypto').createHash('md5').update(js).digest('hex').slice(0, 8);
  const tag = `<script src="/about-i18n-blocks.js?v=${v}" defer></script>`;
  let html = fs.readFileSync(ABOUT, 'utf8');
  if (/<script src="\/about-i18n-blocks\.js[^"]*" defer><\/script>/.test(html)) html = html.replace(/<script src="\/about-i18n-blocks\.js[^"]*" defer><\/script>/, () => tag);
  else html = html.replace(/(\s*)(<script src="\/script\.js)/, (m, ws, s) => `${ws}${tag}${ws}${s}`);
  fs.writeFileSync(ABOUT, html);
}

function reset() { reg = { ru: {}, en: {}, cn: {}, mn: {} }; }

module.exports = { t, write, reset };
