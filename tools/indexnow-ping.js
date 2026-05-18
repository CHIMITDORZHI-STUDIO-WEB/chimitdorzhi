// Sends an IndexNow ping to Yandex (and others) so the sitemap is re-crawled
// faster after a deploy. Run: `node tools/indexnow-ping.js`
//
// Setup: file `1623999cfbe7e3b7b63fb5d8a3c8042f.txt` already lives at site root
// and contains the same key. IndexNow protocol uses it to verify ownership.

const https = require('https');

const KEY = '1623999cfbe7e3b7b63fb5d8a3c8042f';
const HOST = 'chimitdorzhi.tech';
const SITEMAP = `https://${HOST}/sitemap.xml`;

const body = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: [
    `https://${HOST}/`,
    `https://${HOST}/services/`,
    `https://${HOST}/blog/`,
    `https://${HOST}/blog/audit-152-fz-2026/`,
    SITEMAP,
  ],
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
    console.log(`Yandex IndexNow: ${res.statusCode}`);
    if (data) console.log(data);
  });
});
req.on('error', (e) => console.error('error:', e.message));
req.write(body);
req.end();
