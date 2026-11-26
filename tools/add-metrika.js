// Дописывает счётчик Метрики и цели на страницы, где их нет. Запуск: node tools/add-metrika.js
// Telegram мини-приложения не трогаем (Вебвизор записывал бы действия внутри приложения), OAuth и служебные страницы тоже.
const fs = require('fs');
const path = require('path');
const { METRIKA } = require('./metrika-snippet.js');
const ROOT = path.resolve(__dirname, '..');
const SKIP_DIRS = new Set(['node_modules', '.git', 'tools', 'docs', 'gh-articles', 'games', 'marketplace', 'novosti', 'stream', 'xynandxyn', 'dating', 'mwrlife']);
const BANNER = '<script src="/assets/cookie-consent.js" defer></script>';
let added = 0, banners = 0;
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (!SKIP_DIRS.has(e.name) && e.name !== '404') walk(p); continue; }
    if (!e.name.endsWith('.html') || e.name === '404.html' || /^(yandex_|google)[0-9a-f]+\.html$/.test(e.name)) continue;
    let s = fs.readFileSync(p, 'utf8');
    if (s.includes('109281884') || /http-equiv=["']refresh["']/i.test(s) || !/<\/head>/i.test(s)) continue;
    s = s.replace(/<\/head>/i, () => METRIKA + '</head>');
    added++;
    // Баннер согласия нужен там, где его не вставит script.js, иначе счётчик не включится.
    const hasScript = /<script[^>]+src=["'][^"']*script\.js/i.test(s);
    const ownSwitch = /cookieConsent['"]?\s*[,)]/.test(s.replace(METRIKA, '')) || /id=["']cookieBanner/.test(s);
    if (!hasScript && !ownSwitch && /<\/body>/i.test(s)) { s = s.replace(/<\/body>/i, () => BANNER + '\n</body>'); banners++; }
    fs.writeFileSync(p, s);
  }
})(ROOT);
console.log('счётчик добавлен:', added, '| баннер согласия добавлен:', banners);
