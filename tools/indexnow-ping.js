// Sends an IndexNow ping to Yandex so new/updated URLs are re-crawled fast.
// Run: `node tools/indexnow-ping.js`
//
// URL list is built dynamically from blog-data.js (all published articles +
// category pillar pages) plus key static pages — so it never goes stale.
//
// Ownership is verified via the key file `1623999cfbe7e3b7b63fb5d8a3c8042f.txt`
// living at the site root (IndexNow protocol).

const https = require('https');

const KEY = '1623999cfbe7e3b7b63fb5d8a3c8042f';
const HOST = 'chimitdorzhi.tech';

let articles = [];
try { articles = require('./blog-data'); } catch (e) { /* run from anywhere */ }
const published = articles.filter(a => a && a.published && a.contentHtml);

// Category keys that have a pillar page (mirror build-blog.js CATEGORY_META).
const CAT_KEYS = ['legal','ai-dev','ai-life','marketing','sales','media','industries','esports','development','security','finance','mlm','mwrlife','opensource'];
const catKeys = CAT_KEYS.filter(k => published.some(p => p.category === k));

const staticPages = [
  `https://${HOST}/`,
  `https://${HOST}/services/`,
  `https://${HOST}/blog/`,
  `https://${HOST}/mwrlife/`,
  `https://${HOST}/accessibility/`,
];

const urlList = [
  ...staticPages,
  ...catKeys.map(k => `https://${HOST}/blog/category/${k}/`),
  ...published.map(a => `https://${HOST}/blog/${a.slug}/`),
  `https://${HOST}/sitemap.xml`,
];

const body = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList,
});

const req = https.request({
  hostname: 'yandex.com',
  path: '/indexnow',
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(body) },
}, (res) => {
  let data = '';
  res.on('data', (c) => { data += c; });
  res.on('end', () => {
    console.log(`Yandex IndexNow: ${res.statusCode} (${urlList.length} URLs)`);
    if (data) console.log(data);
  });
});
req.on('error', (e) => console.error('error:', e.message));
req.write(body);
req.end();
