/* Прогон скрипта страницы на заглушке DOM.
   Смысл один: поймать падение до выкладки. Дважды подряд страница
   уходила в продакшен пустой из-за ошибки, которую видно за секунду —
   обращение к удалённому узлу и форматирование пустого числа. */
const fs = require('fs');

const html = fs.readFileSync(
  process.argv[2] || 'C:/Users/Chimitdorzhi/Documents/Claude/Projects/chimitdorzhi-site/ai-economy/index.html', 'utf8');

// Собираем список идентификаторов и классов, которые в разметке действительно есть
const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map(m => m[1]));
const classed = new Set([...html.matchAll(/class="([^"]+)"/g)]
  .flatMap(m => m[1].split(/\s+/)));

function el(id) {
  const node = {
    id,
    className: '',
    value: '0',
    min: '0',
    max: '10',
    hidden: false,
    style: {},
    dataset: {},
    children: [],
    textContent: '',
    innerHTML: '',
    parentElement: null,
    getAttribute: () => null,
    setAttribute: () => {},
    addEventListener: () => {},
    removeAttribute: () => {},
    closest: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
    getBoundingClientRect: () => ({ width: 800, height: 300, top: 0, left: 0, right: 800, bottom: 300 }),
    focus: () => {},
    click: () => {},
    appendChild: () => {},
    remove: () => {},
  };
  return node;
}

// Кнопки, которые скрипт ищет через селекторы
function fakeButtons(sel) {
  const n = /ec-metrics/.test(sel) ? 8 : (/occsort/.test(sel) ? 2 : 3);
  return Array.from({ length: n }, (_, i) => {
    const b = el('btn' + i);
    b.getAttribute = (a) => ({
      'data-m': 'lab', 'data-s': 'expo', 'data-p': 'D2_база',
      'data-v': 'средний', 'data-f': 'Базовый',
      'data-fuel': 'лес_подстилка', 'data-lang': 'Инерция',
    })[a] || null;
    return b;
  });
}

const missing = new Set();
global.document = {
  getElementById(id) {
    if (!ids.has(id)) { missing.add(id); return null; }
    return el(id);
  },
  querySelector: (s) => (s === '.ec-page' ? el('page') : el('any')),
  querySelectorAll: (s) => fakeButtons(s),
  createElement: () => el('new'),
  addEventListener: () => {},
  body: el('body'),
  documentElement: el('html'),
};
global.window = { MutationObserver: null, XMLHttpRequest: function () {
  this.open = () => {}; this.send = () => {}; this.setRequestHeader = () => {};
} };
global.getComputedStyle = () => ({ getPropertyValue: () => '#2F6EA8' });
global.location = { hash: '', href: 'https://chimitdorzhi.tech/ai-economy/' };
global.history = { replaceState: () => {} };
global.navigator = { clipboard: null };
global.XMLHttpRequest = global.window.XMLHttpRequest;
global.Image = function () {};
global.URL = { createObjectURL: () => 'blob:x', revokeObjectURL: () => {} };
global.Blob = function () {};
global.setTimeout = (f) => 0;
global.clearTimeout = () => {};

// Достаём скрипт страницы — тот, где определён помощник on()
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const code = scripts.find(s => s.includes('function on(id, ev, fn)'));
if (!code) {
  console.log('ОШИБКА: скрипт страницы не найден');
  process.exit(1);
}

let failed = false;
try {
  eval(code);
  console.log('скрипт отработал без падений');
} catch (e) {
  failed = true;
  console.log('ПАДЕНИЕ:', e.message);
  console.log(String(e.stack).split('\n').slice(1, 5).join('\n'));
}
if (missing.size) {
  console.log('скрипт искал отсутствующие узлы:', [...missing].join(', '));
}
process.exit(failed ? 1 : 0);
