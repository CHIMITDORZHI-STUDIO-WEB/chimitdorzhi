const og = require('./og-generator.js');
const arr = require('./blog-data.js').filter(a => a.published && a.contentHtml);
(async () => {
  let n = 0;
  for (const a of arr) { await og.generatePin(a); if (++n % 200 === 0) console.log('...', n); }
  console.log('вертикальных обложек обновлено:', n);
})();
