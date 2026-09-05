#!/usr/bin/env node
/**
 * SEO-проверки готовых страниц блога: микроразметка + качество текста.
 *
 * Скрипты validate-schema.py и content-quality.py взяты из проекта claude-seo
 * (https://github.com/AgriciDaniel/claude-seo, MIT, см. LICENSE-claude-seo).
 *
 * Запуск:
 *   node tools/seo-checks/run.js                 — последние 30 статей по дате сборки
 *   node tools/seo-checks/run.js --all           — все статьи (долго: ~1 с на страницу)
 *   node tools/seo-checks/run.js <slug> [<slug>] — конкретные статьи
 *   node tools/seo-checks/run.js --limit=100     — первые N
 *
 * Коды выхода: 1 — найдены ошибки схемы (это блокер), иначе 0.
 * Низкое качество текста ошибкой не считается — это сигнал посмотреть глазами.
 */
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const HERE = __dirname;
const PY = process.platform === 'win32' ? 'python' : 'python3';

// Порог качества: ниже — стоит перечитать текст. Средний по блогу ~83.
const QUALITY_FLOOR = 70;
const AI_PATTERN_CEIL = 20;   // выше — текст читается как машинный
const FILLER_CEIL = 20;       // выше — много воды

const args = process.argv.slice(2);
const all = args.includes('--all');
const limitArg = args.find(a => a.startsWith('--limit='));
const slugs = args.filter(a => !a.startsWith('--'));

function pagesFor() {
  const blogDir = path.join(ROOT, 'blog');
  if (slugs.length) {
    return slugs.map(s => path.join(blogDir, s, 'index.html')).filter(fs.existsSync);
  }
  let dirs = fs.readdirSync(blogDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => path.join(blogDir, d.name, 'index.html'))
    .filter(fs.existsSync);
  if (all) return dirs;
  const n = limitArg ? parseInt(limitArg.split('=')[1], 10) : 30;
  // самые свежие по времени изменения файла
  return dirs
    .map(f => ({ f, m: fs.statSync(f).mtimeMs }))
    .sort((a, b) => b.m - a.m)
    .slice(0, n)
    .map(x => x.f);
}

function runPy(script, fileArgs) {
  try {
    return { ok: true, out: execFileSync(PY, [path.join(HERE, script), ...fileArgs],
      { encoding: 'utf8', timeout: 90000, cwd: ROOT }) };
  } catch (e) {
    return { ok: false, out: (e.stdout || '') + (e.stderr || ''), code: e.status };
  }
}

const pages = pagesFor();
if (!pages.length) { console.log('нечего проверять'); process.exit(0); }
console.log(`проверяю страниц: ${pages.length}\n`);

let schemaErrors = 0, flagged = [], scores = [];

for (const p of pages) {
  const slug = path.basename(path.dirname(p));

  const s = runPy('validate-schema.py', [p]);
  if (!s.ok) {
    schemaErrors++;
    console.log(`  СХЕМА: ${slug}`);
    const msg = s.out.trim().split('\n').slice(0, 3).map(l => '        ' + l).join('\n');
    if (msg) console.log(msg);
  }

  const q = runPy('content-quality.py', [p, '--json']);
  if (q.ok && q.out.trim()) {
    try {
      const j = JSON.parse(q.out);
      scores.push(j.overall_quality || 0);
      if ((j.overall_quality ?? 100) < QUALITY_FLOOR
          || (j.ai_pattern_score ?? 0) >= AI_PATTERN_CEIL
          || (j.filler_score ?? 0) >= FILLER_CEIL) {
        flagged.push({ slug, q: j.overall_quality, ai: j.ai_pattern_score, fi: j.filler_score });
      }
    } catch { /* нечитаемый json — пропускаем */ }
  }
}

const avg = scores.length ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1) : '—';
console.log(`\nмикроразметка: ${schemaErrors ? schemaErrors + ' с ошибками' : 'без ошибок'}`);
console.log(`качество текста: средний балл ${avg}/100`);

if (flagged.length) {
  console.log(`\nстоит перечитать (${flagged.length}):`);
  for (const f of flagged.sort((a, b) => a.q - b.q).slice(0, 20)) {
    console.log(`  балл=${String(f.q).padStart(3)} ии=${String(f.ai).padStart(3)} вода=${String(f.fi).padStart(3)}  ${f.slug}`);
  }
} else {
  console.log('флагов по качеству нет');
}

process.exit(schemaErrors > 0 ? 1 : 0);
