#!/usr/bin/env node
/*
 * check-articles.js — линтер статей блога.
 *
 * Проверяет, что каждая опубликованная статья в blog-data.js соответствует
 * общим требованиям проекта (длина, TL;DR, FAQ, отсутствие эмодзи, маркировка
 * Meta, обязательные поля и т.д.). Технические SEO/GEO-вещи (schema, Speakable,
 * обложки, внутренние ссылки) генерятся в build-blog автоматически — здесь
 * проверяется именно КОНТЕНТ, который пишется руками/ИИ.
 *
 * Использование:
 *   node tools/check-articles.js          — проверить все, exit 1 при ошибках
 *   node tools/check-articles.js --warn    — только предупреждать (exit 0)
 *
 * Также вызывается из build-blog.js в режиме предупреждений.
 */

const path = require('path');

// Требования (откалиброваны по текущим 123 статьям)
const MIN_WORDS = 1300;
const MIN_TAGS = 3;
const MIN_TOC = 3;
// Потолки — санитарные (проект осознанно использует длинные мета-описания);
// ловим только явные выбросы, а не штатный стиль.
const META_TITLE_MAX = 100;
const META_DESC_MIN = 60;
const META_DESC_MAX = 350;

const VALID_CATEGORIES = new Set([
  'cases',
  'legal', 'ai-dev', 'ai-life', 'marketing', 'geo', 'sales', 'media', 'industries',
  'esports', 'development', 'security', 'finance', 'mlm', 'mwrlife', 'opensource',
  'biznes-krugozor', 'expert',
]);

// Пиктографические эмодзи (НЕ трогаем типографские стрелки → и тире —)
const EMOJI_RE = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}\u{2B05}-\u{2B07}\u{2B1B}\u{2B1C}\u{2B50}]/u;

const REQUIRED_FIELDS = ['slug', 'title', 'category', 'metaTitle', 'metaDescription', 'excerpt', 'datePublished', 'heroIcon', 'contentHtml'];

function wordCount(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(/\s+/).filter(Boolean).length;
}

// Подсчёт Q&A в FAQ-секции (та же логика, что в build-blog faqLd)
function faqPairs(html) {
  const m = html.match(/<h2[^>]*id="faq"[^>]*>[\s\S]*?(?=<h2[\s>]|$)/i);
  if (!m) return 0;
  const section = m[0];
  let n = 0, x;
  const reP = /<p>\s*<strong>(.*?)<\/strong>\s*([\s\S]*?)<\/p>/gi;
  while ((x = reP.exec(section)) !== null) {
    if (x[1].replace(/<[^>]+>/g, '').trim().length > 4) n++;
  }
  if (n === 0) {
    const reH = /<h3[^>]*>(.*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/gi;
    while ((x = reH.exec(section)) !== null) n++;
  }
  return n;
}

function checkArticle(a, allSlugs) {
  const errors = [];
  const warnings = [];

  // обязательные поля
  for (const f of REQUIRED_FIELDS) {
    if (!a[f] || (typeof a[f] === 'string' && !a[f].trim())) errors.push(`нет обязательного поля «${f}»`);
  }
  if (!a.slug) return { errors, warnings }; // дальше без slug нет смысла

  // категория
  if (a.category && !VALID_CATEGORIES.has(a.category)) {
    errors.push(`неизвестная категория «${a.category}»`);
  }
  // дубликат slug
  if (allSlugs.filter(s => s === a.slug).length > 1) errors.push('дубликат slug');
  // дата
  if (a.datePublished && !/^\d{4}-\d{2}-\d{2}$/.test(a.datePublished)) errors.push(`datePublished не в формате YYYY-MM-DD: «${a.datePublished}»`);

  const html = a.contentHtml || '';

  // длина
  const w = wordCount(html);
  if (w < MIN_WORDS) errors.push(`мало слов: ${w} (нужно ≥${MIN_WORDS})`);

  // структурные блоки
  if (!/blog-tldr/.test(html)) errors.push('нет блока TL;DR (<div class="blog-tldr">)');
  const fq = faqPairs(html);
  if (fq < 2) errors.push(`нет FAQ-секции с ≥2 вопросами (<h2 id="faq">), найдено: ${fq}`);
  if (!a.servicesOffer) errors.push('нет servicesOffer (карточка услуг по теме)');
  if (!a.ctaInternal || !a.ctaInternal.url) errors.push('нет ctaInternal (ссылка на услугу/CTA)');
  if (!Array.isArray(a.toc) || a.toc.length < MIN_TOC) errors.push(`оглавление (toc) <${MIN_TOC} пунктов`);
  if (!Array.isArray(a.tags) || a.tags.length < MIN_TAGS) errors.push(`тегов <${MIN_TAGS}`);

  // эмодзи (заголовок + excerpt + тело)
  const emojiHay = `${a.title} ${a.excerpt} ${html}`;
  if (EMOJI_RE.test(emojiHay)) {
    const found = emojiHay.match(EMOJI_RE);
    errors.push(`найдены эмодзи (только Phosphor-иконки!): «${found[0]}»`);
  }

  // маркировка Meta (152-ФЗ / штрафы)
  const mentionsMeta = /instagram|инстаграм|facebook|фейсбук/i.test(html);
  const hasMark = /Meta|экстремист/i.test(html);
  if (mentionsMeta && !hasMark) {
    errors.push('упоминается Instagram/Facebook без пометки «Meta признана экстремистской и запрещена в РФ»');
  }

  // WARN: длины мета-тегов
  if (a.metaTitle && a.metaTitle.length > META_TITLE_MAX) warnings.push(`metaTitle длинный: ${a.metaTitle.length} симв (>${META_TITLE_MAX})`);
  if (a.metaDescription) {
    if (a.metaDescription.length > META_DESC_MAX) warnings.push(`metaDescription длинный: ${a.metaDescription.length} (>${META_DESC_MAX})`);
    if (a.metaDescription.length < META_DESC_MIN) warnings.push(`metaDescription короткий: ${a.metaDescription.length} (<${META_DESC_MIN})`);
  }
  // WARN: relatedSlugs
  if (!Array.isArray(a.relatedSlugs) || a.relatedSlugs.length < 2) warnings.push('relatedSlugs <2 (рекомендуется 3)');
  else {
    const bad = a.relatedSlugs.filter(s => !allSlugs.includes(s));
    if (bad.length) warnings.push(`relatedSlugs ссылается на несуществующие: ${bad.join(', ')}`);
  }

  return { errors, warnings };
}

function lint(articles) {
  const pub = articles.filter(a => a && a.published !== false && a.contentHtml);
  const allSlugs = pub.map(a => a.slug);
  const results = pub.map(a => ({ slug: a.slug, ...checkArticle(a, allSlugs) }));
  const errCount = results.reduce((s, r) => s + r.errors.length, 0);
  const warnCount = results.reduce((s, r) => s + r.warnings.length, 0);
  return { results, errCount, warnCount, total: pub.length };
}

function printReport({ results, errCount, warnCount, total }) {
  for (const r of results) {
    if (!r.errors.length && !r.warnings.length) continue;
    console.log(`\n[${r.slug}]`);
    r.errors.forEach(e => console.log(`  ✗ ОШИБКА: ${e}`));
    r.warnings.forEach(w => console.log(`  ⚠ ${w}`));
  }
  console.log(`\nПроверено статей: ${total} · ошибок: ${errCount} · предупреждений: ${warnCount}`);
}

module.exports = { lint, checkArticle };

if (require.main === module) {
  const warnOnly = process.argv.includes('--warn');
  const articles = require(path.join(__dirname, 'blog-data.js'));
  const arr = Array.isArray(articles) ? articles : Object.values(articles).find(Array.isArray);
  const report = lint(arr);
  printReport(report);
  if (report.errCount === 0) console.log('✓ Все статьи соответствуют требованиям.');
  process.exit(warnOnly ? 0 : (report.errCount > 0 ? 1 : 0));
}
