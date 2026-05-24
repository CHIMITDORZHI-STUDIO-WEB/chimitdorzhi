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
    `https://${HOST}/blog/utechki-pd-24-chasa-2026/`,
    `https://${HOST}/blog/rossiyskiy-ai-stack-2026/`,
    `https://${HOST}/blog/ai-agenty-v-biznese-2026/`,
    `https://${HOST}/blog/chek-list-bezopasnosti-sayta-47-punktov/`,
    `https://${HOST}/blog/rag-sistemy-dlya-biznesa-2026/`,
    `https://${HOST}/blog/ai-v-marketinge-2026/`,
    `https://${HOST}/blog/lokalnyy-llm-na-noutbuke-2026/`,
    `https://${HOST}/blog/mcp-model-context-protocol-2026/`,
    `https://${HOST}/blog/ai-transkripciya-soveshchaniy-2026/`,
    `https://${HOST}/blog/svoy-sayt-vs-socseti-2026/`,
    `https://${HOST}/blog/svoy-magazin-vs-wildberries-ozon-2026/`,
    `https://${HOST}/blog/dostupnost-sayta-a11y-2026/`,
    `https://${HOST}/blog/ai-chatbot-na-sayt-bez-programmirovaniya-2026/`,
    `https://${HOST}/blog/seo-internet-magazina-yandex-30-hakov-2026/`,
    `https://${HOST}/blog/svoy-vps-dlya-razrabotchika-2026/`,
    `https://${HOST}/blog/mvp-to-production-3-mesyatsa-2026/`,
    `https://${HOST}/blog/ai-dlya-roditeley-2026/`,
    `https://${HOST}/blog/ai-v-povsednevnoy-zhizni-25-sposobov-2026/`,
    `https://${HOST}/blog/kak-obnaruzhit-fishing-2026/`,
    `https://${HOST}/blog/zashchita-brenda-2026/`,
    `https://${HOST}/blog/saas-pricing-2026/`,
    `https://${HOST}/blog/podcast-s-gostyami-monetizaciya-2026/`,
    `https://${HOST}/blog/telegram-chat-vk-soobshchestvo-2026/`,
    `https://${HOST}/blog/ai-pomoshchnik-buhgaltera-2026/`,
    `https://${HOST}/blog/ai-dlya-yurista-advokata-2026/`,
    `https://${HOST}/blog/voronka-prodazh-b2b-2026/`,
    `https://${HOST}/blog/partnerskiy-marketing-affiliate-2026/`,
    `https://${HOST}/blog/biznes-plan-2026-shablon/`,
    `https://${HOST}/blog/crm-dlya-malogo-biznesa-2026/`,
    `https://${HOST}/blog/svoya-strim-studiya-2026/`,
    `https://${HOST}/blog/live-commerce-rf-2026/`,
    `https://${HOST}/blog/kibertirniry-organizaciya-2026/`,
    `https://${HOST}/blog/sponsorstvo-kibersport-streaming-2026/`,
    `https://${HOST}/blog/geymifikaciya-saas-2026/`,
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
