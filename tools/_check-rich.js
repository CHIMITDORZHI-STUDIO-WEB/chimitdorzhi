// Валидатор rich-контента офферов. Запуск: node tools/_check-rich.js offers-rich-32a.js [...]
const path = require('path');
const EMOJI = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}\u{2B05}-\u{2B07}\u{2B1B}\u{2B1C}\u{2B50}]/u;
const SOCIAL = /instagram|инстаграм|facebook|фейсбук|whatsapp|reels|tiktok|тикток/i;
const MIXED = /[A-Za-z]+[А-Яа-яЁё]|[А-Яа-яЁё]+[A-Za-z]/;
const COUNTS = { pains:4, beforeAfter:5, deliverables:6, process:4, result:4, objections:4, faq:3 };
const ALLOW = /\b(MAX|Telegram|VK|CRM|SEO|GEO|AI|MVP|СБП|IT|API|UTM|QR|B2B|B2C|NPS|O2O|UGC|SaaS|1С|GigaChat|YandexGPT|RSS)\b/g;

const files = process.argv.slice(2);
if (!files.length) { console.error('укажи файлы'); process.exit(1); }
let errors = 0, total = 0;
for (const f of files) {
  const mod = require(path.join(__dirname, f));
  for (const [slug, r] of Object.entries(mod)) {
    total++;
    const probs = [];
    for (const [k, n] of Object.entries(COUNTS)) {
      const len = Array.isArray(r[k]) ? r[k].length : -1;
      if (len !== n) probs.push(`${k}=${len} (нужно ${n})`);
    }
    if (!r.whyMe || typeof r.whyMe !== 'string') probs.push('нет whyMe');
    if (!Array.isArray(r.relatedServices) || r.relatedServices.length < 2) probs.push('relatedServices<2');
    if (!Array.isArray(r.relatedBlog) || r.relatedBlog.length < 2) probs.push('relatedBlog<2');
    if (Array.isArray(r.beforeAfter) && r.beforeAfter.some(x => !x.before || !x.after)) probs.push('beforeAfter: нет before/after');
    if (Array.isArray(r.process) && r.process.some(x => !x.title || !x.days || !x.detail)) probs.push('process: нет title/days/detail');
    if (Array.isArray(r.objections) && r.objections.some(x => !x.q || !x.a)) probs.push('objections: нет q/a');
    if (Array.isArray(r.faq) && r.faq.some(x => !x.q || !x.a)) probs.push('faq: нет q/a');
    const hay = JSON.stringify(r);
    if (EMOJI.test(hay)) probs.push('ЭМОДЗИ');
    if (SOCIAL.test(hay)) probs.push('ЗАПРЕЩ.СОЦСЕТЬ');
    const mm = hay.replace(ALLOW, '').match(MIXED);
    if (mm) probs.push('СМЕШ.СЛОВО: ' + mm[0]);
    if (probs.length) { errors += probs.length; console.log(`✗ ${slug}: ${probs.join('; ')}`); }
  }
}
console.log(errors ? `\nПРОБЛЕМ: ${errors} (офферов ${total})` : `\n✓ Все ${total} офферов валидны`);
process.exit(errors ? 1 : 0);
