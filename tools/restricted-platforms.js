/*
 * restricted-platforms.js — маркировка запрещённых и заблокированных в России площадок.
 *
 * Группа A (метка «*»): Meta и её продукты Instagram, Facebook, Threads, WhatsApp.
 *   Meta Platforms Inc. признана экстремистской организацией (решение Тверского
 *   районного суда Москвы от 21.03.2022).
 * Группа B (метка «**»): площадки, доступ к которым ограничен Роскомнадзором:
 *   LinkedIn, X (Twitter), Discord, Signal, Viber, Snapchat, FaceTime.
 * Telegram, YouTube, TikTok, Roblox не маркируются.
 *
 * API:
 *   markHtml(html)            → html с метками после каждого упоминания в видимом тексте
 *   markHtmlWithInfo(html)    → { html, found:Set, counts:{key:n} }
 *   detect(html)              → Set ключей всех упомянутых площадок (видимый текст)
 *   noteHtml(found, lang)     → <aside class="blog-legal-note"> со сносками ('' если пусто)
 *   applyToPage(page, opts)   → размечает видимое содержимое <main> и подставляет сноску
 *                               вместо NOTE_PLACEHOLDER (или перед </main>, если его нет)
 *   scanHtml(html)            → список упоминаний { key, text, marked, exempt, context }
 *
 * Не трогает: <script>, <style>, <code>, <pre>, <textarea>, <title>, <svg>, комментарии,
 * атрибуты тегов, URL и домены (instagram.com, api.whatsapp, whatsapp-bots, facebook/…),
 * составные слова (MetaCLIP, metaTitle, Meta-тег, AgroSignal), уже готовую сноску
 * (элементы с классом blog-legal-note или атрибутом data-rp-skip).
 */
'use strict';

const NOTE_PLACEHOLDER = '<!--RESTRICTED-NOTE-->';

const PLATFORMS = {
  meta:      { group: 'A', ru: 'Meta',        en: 'Meta' },
  instagram: { group: 'A', ru: 'Instagram',   en: 'Instagram' },
  facebook:  { group: 'A', ru: 'Facebook',    en: 'Facebook' },
  threads:   { group: 'A', ru: 'Threads',     en: 'Threads' },
  whatsapp:  { group: 'A', ru: 'WhatsApp',    en: 'WhatsApp' },
  linkedin:  { group: 'B', ru: 'LinkedIn',    en: 'LinkedIn' },
  twitter:   { group: 'B', ru: 'X (Twitter)', en: 'X (Twitter)' },
  discord:   { group: 'B', ru: 'Discord',     en: 'Discord' },
  signal:    { group: 'B', ru: 'Signal',      en: 'Signal' },
  viber:     { group: 'B', ru: 'Viber',       en: 'Viber' },
  snapchat:  { group: 'B', ru: 'Snapchat',    en: 'Snapchat' },
  facetime:  { group: 'B', ru: 'FaceTime',    en: 'FaceTime' },
};
const MARK = { A: '*', B: '**' };

// Падежные окончания для кириллических написаний: Инстаграме, вотсапу, Дискорда…
const END = '(?:ами|ах|ам|ом|ов|а|е|у|ы)?';
// Латинское название с русским окончанием через апостроф: WhatsApp'е
const APOS = "(?:['’][а-яё]{1,3})?";

// Порядок важен только для читаемости: пересечения разрешаются «раньше и длиннее».
const PATTERNS = [
  // X (Twitter) — одиночная «X» не трогается
  { key: 'twitter', re: /X\s?\((?:бывш(?:ий|ее|ая)\s+|ранее\s+|экс-|ex-|formerly\s+)?(?:Twitter|Твиттер)\)/g },
  { key: 'twitter', re: /(?:Twitter|Твиттер)\s?\((?:теперь\s+|now\s+)?X\)/g },
  { key: 'twitter', re: /(?:Twitter|Твиттер)\s?\/\s?X(?![A-Za-z0-9])/g },
  { key: 'twitter', re: /X\s?\/\s?(?:Twitter|Твиттер)/g },
  { key: 'twitter', re: new RegExp('twitter' + APOS + '(?![-\\s]?(?:карточ|[Cc]ard))', 'gi') }, // «Twitter-карточка» = тип разметки, не соцсеть
  { key: 'twitter', re: new RegExp('[Тт]в[иі]ттер' + END, 'g') },

  { key: 'instagram', re: new RegExp('instagram' + APOS, 'gi') },
  { key: 'instagram', re: new RegExp('[Ии]нстаграм' + END, 'g') },
  { key: 'instagram', re: /[Ии]нст(?:ой|а|е|у|ы)/g },
  { key: 'facebook', re: new RegExp('facebook' + APOS, 'gi') },
  { key: 'facebook', re: new RegExp('[Фф]ейсбук' + END, 'g') },
  { key: 'threads', re: /Threads/g },
  { key: 'threads', re: new RegExp('[Тт]редс' + END, 'g') },
  { key: 'whatsapp', re: new RegExp('whatsapp' + APOS, 'gi') },
  { key: 'whatsapp', re: new RegExp('(?:[Вв]а[тц]с?ап|[Вв]отсап|[Вв]ацап|[Уу]атсап)' + END, 'g') },
  { key: 'meta', re: /Meta(?:\s+Platforms(?:,?\s+Inc\.)?|\s+AI(?![A-Za-z]))?/g },

  { key: 'linkedin', re: new RegExp('linkedin' + APOS, 'gi') },
  { key: 'linkedin', re: new RegExp('[Лл]инкед[иИ]н' + END, 'g') },
  { key: 'discord', re: new RegExp('discord' + APOS, 'gi') },
  { key: 'discord', re: new RegExp('[Дд]искорд' + END, 'g') },
  { key: 'signal', re: /Signal/g },
  { key: 'viber', re: new RegExp('viber' + APOS, 'gi') },
  { key: 'viber', re: new RegExp('[Вв]айбер' + END, 'g') },
  { key: 'snapchat', re: new RegExp('snapchat' + APOS, 'gi') },
  { key: 'facetime', re: new RegExp('facetime' + APOS, 'gi') },
];

const WORD = /[A-Za-z0-9_А-Яа-яЁё]/;
const LATIN_ALNUM = /[A-Za-z0-9]/;

// SEO-термины, в которых «Meta» — не компания: Meta Title, Meta Description…
const META_NOT_COMPANY = /^\s+(?:title|description|keywords|tags?|robots|data|теги?|тегов|тега|описани[ея])(?![A-Za-zА-Яа-яЁё])/i;
const META_SEO_HYPHEN = /^(?:тег|описани|данн|заголов|информац|title|tag|description|keyword|robots|data)/i;
// Ручная оговорка «Meta признана экстремистской…» сама является пометкой — звезду не ставим.
const META_DISCLAIMER_AFTER = /^\s*(?:[,—–-]\s*)?(?:(?:которая|которой|она)\s+)?(?:была\s+)?признан/;

function decodeEnt(s) {
  return s.replace(/&nbsp;|&#160;|&#xa0;/gi, ' ');
}

/**
 * Найти упоминания в куске видимого текста.
 * text — сырой текст между тегами (может содержать сущности).
 * after — HTML сразу после этого текстового куска (для проверки «звезда уже стоит»).
 */
function findInText(text, after) {
  const raw = [];
  for (const p of PATTERNS) {
    p.re.lastIndex = 0;
    let m;
    while ((m = p.re.exec(text))) {
      raw.push({ key: p.key, start: m.index, end: m.index + m[0].length, text: m[0] });
      if (m[0].length === 0) p.re.lastIndex++;
    }
  }
  raw.sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));
  const out = [];
  let lastEnd = -1;
  for (const r of raw) {
    if (r.start < lastEnd) continue; // пересечение: побеждает раньше начавшееся/длиннее
    const verdict = judge(text, r, after);
    if (verdict === 'skip') continue;
    r.exempt = verdict === 'exempt';
    const nextRest = text.slice(r.end);
    r.marked = nextRest.startsWith('*') || (nextRest === '' && /^(?:<\/?(?:a|b|strong|em|i|span|sup|mark|u|s)\b[^>]*>)*\*/i.test(after || ''));
    out.push(r);
    lastEnd = r.end;
  }
  return out;
}

function judge(text, r, after) {
  const prev = r.start > 0 ? text[r.start - 1] : '';
  const prev2 = r.start > 1 ? text[r.start - 2] : '';
  const next = r.end < text.length ? text[r.end] : '';
  const next2 = r.end + 1 < text.length ? text[r.end + 1] : '';
  const isLowerLatin = /^[a-z]/.test(r.text);
  const isLatin = /^[A-Za-z]/.test(r.text);

  // Границы слова: составные слова не трогаем (MetaCLIP, AgroSignal, инстанция).
  if (prev && WORD.test(prev)) return 'skip';
  if (next && WORD.test(next)) return 'skip';
  // Сущность HTML перед словом: &amp;Meta — не наш случай
  if (prev === ';' && /&[a-z#0-9]+$/i.test(text.slice(0, r.start))) return 'skip';
  // URL, домены, пути, хэндлы
  if (prev === '.' || prev === '@' || prev === '#' || prev === '\\' || prev === ':') return 'skip';
  if (prev === '/' && (isLowerLatin || prev2 === '/')) return 'skip';
  if (prev === '-' && LATIN_ALNUM.test(prev2) && isLatin) return 'skip';
  if (next === '.' && LATIN_ALNUM.test(next2)) return 'skip';
  if (next === ':' && next2 === '/') return 'skip';
  if (next === '/' && /[a-z0-9_]/.test(next2)) return 'skip';
  if (isLowerLatin && (next === '-' || next === '_') && LATIN_ALNUM.test(next2)) return 'skip';
  if (next === '_' ) return 'skip';

  if (r.key === 'meta') {
    const rest = text.slice(r.end);
    // Meta-тег, Meta-теги, Meta-описание — SEO-термин; Meta-продукты — компания
    if ((next === '-' || next === '‑') && META_SEO_HYPHEN.test(rest.slice(1))) return 'skip';
    if (/^Meta$/.test(r.text) && META_NOT_COMPANY.test(rest)) return 'skip';
    if (META_DISCLAIMER_AFTER.test(decodeEnt(rest))) return 'exempt';
  }
  if (r.key === 'signal') {
    // signal processing, Signal strength… — не мессенджер
    if (/^\s+(?:processing|strength|to|of|and|level|noise|chain|flow|bars?)\b/.test(text.slice(r.end))) return 'skip';
  }
  if (r.key === 'threads') {
    // технические «Threads» (Virtual Threads, Threads per core) — не соцсеть
    if (/(?:Virtual|Green|POSIX|Java)\s+$/i.test(text.slice(0, r.start))) return 'skip';
    if (/^\s+(?:per|count)\b/i.test(text.slice(r.end))) return 'skip';
  }
  return 'mark';
}

// ---------- обход HTML ----------

const TAG_RE = /<!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>|<!doctype[^>]*>|<\/?([a-zA-Z][a-zA-Z0-9:-]*)((?:\s+[^\s=>\/]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?)*)\s*\/?>/gi;
const RAW_TEXT = new Set(['script', 'style', 'textarea', 'title']);
const SKIP_CONTENT = new Set(['code', 'pre', 'svg', 'math', 'head', 'noscript', 'template']);
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);

/**
 * Пройти по HTML и вызвать onText(text, after) для каждого видимого текстового куска.
 * onText возвращает новую строку (или ту же). Возвращает собранный HTML.
 */
function walkHtml(html, onText) {
  let out = '';
  let pos = 0;
  const skip = {}; // tag -> depth для пропускаемых элементов
  let skipDepth = 0;
  const skipStack = []; // {tag, depth} для элементов с классом-исключением
  const openCount = {};
  TAG_RE.lastIndex = 0;
  let m;
  const visible = () => skipDepth === 0 && skipStack.length === 0;
  while ((m = TAG_RE.exec(html))) {
    const text = html.slice(pos, m.index);
    if (text) out += visible() ? onText(text, html.slice(m.index, m.index + 200)) : text;
    const tag = m[0];
    out += tag;
    pos = m.index + tag.length;
    const name = (m[1] || '').toLowerCase();
    if (!name) continue;
    const closing = tag[1] === '/';
    const selfClosing = /\/>$/.test(tag) || VOID.has(name);
    if (!closing && RAW_TEXT.has(name)) {
      const endRe = new RegExp('</' + name + '\\s*>', 'ig');
      endRe.lastIndex = pos;
      const e = endRe.exec(html);
      const endPos = e ? e.index : html.length;
      out += html.slice(pos, endPos);
      pos = endPos;
      TAG_RE.lastIndex = pos;
      continue;
    }
    if (SKIP_CONTENT.has(name)) {
      if (!closing && !selfClosing) { skip[name] = (skip[name] || 0) + 1; skipDepth++; }
      else if (closing && skip[name] > 0) { skip[name]--; skipDepth--; }
      continue;
    }
    if (selfClosing) continue;
    if (!closing) {
      openCount[name] = (openCount[name] || 0) + 1;
      if (/\bblog-legal-note\b|\bdata-rp-skip\b/.test(m[2] || '')) skipStack.push({ name, depth: openCount[name] });
    } else {
      if (skipStack.length && skipStack[skipStack.length - 1].name === name && skipStack[skipStack.length - 1].depth === openCount[name]) skipStack.pop();
      openCount[name] = Math.max(0, (openCount[name] || 0) - 1);
    }
  }
  const tail = html.slice(pos);
  if (tail) out += visible() ? onText(tail, '') : tail;
  return out;
}

function markHtmlWithInfo(html) {
  const found = new Set();
  const counts = {};
  const res = walkHtml(String(html || ''), (text, after) => {
    const ms = findInText(text, after);
    if (!ms.length) return text;
    let s = '';
    let p = 0;
    for (const r of ms) {
      s += text.slice(p, r.end);
      p = r.end;
      // Ручная оговорка «Meta признана экстремистской…» звезду не получает,
      // но сноска с реквизитами решения суда на странице всё равно выводится.
      found.add(r.key);
      if (r.exempt) continue;
      if (r.marked) continue;
      s += MARK[PLATFORMS[r.key].group];
      counts[r.key] = (counts[r.key] || 0) + 1;
    }
    return s + text.slice(p);
  });
  return { html: res, found, counts };
}

function markHtml(html) {
  return markHtmlWithInfo(html).html;
}

function scanHtml(html) {
  const list = [];
  walkHtml(String(html || ''), (text, after) => {
    for (const r of findInText(text, after)) {
      list.push({ key: r.key, text: r.text, marked: r.marked, exempt: !!r.exempt,
        context: decodeEnt(text.slice(Math.max(0, r.start - 50), r.end + 50)).replace(/\s+/g, ' ') });
    }
    return text;
  });
  return list;
}

function detect(html) {
  return new Set(scanHtml(html).map((r) => r.key));
}

// ---------- сноска ----------

function joinList(items, lang) {
  if (items.length <= 1) return items.join('');
  const and = lang === 'en' ? ' and ' : ' и ';
  return items.slice(0, -1).join(', ') + and + items[items.length - 1];
}

function noteHtml(found, lang) {
  lang = lang === 'en' ? 'en' : 'ru';
  const set = found instanceof Set ? found : new Set(found || []);
  const name = (k) => PLATFORMS[k][lang];
  const ownedOrder = ['instagram', 'facebook', 'threads', 'whatsapp'].filter((k) => set.has(k));
  const accessOrder = ['instagram', 'facebook', 'whatsapp', 'threads'].filter((k) => set.has(k));
  const bOrder = ['linkedin', 'twitter', 'discord', 'signal', 'viber', 'snapchat', 'facetime'].filter((k) => set.has(k));
  const paras = [];
  const court = lang === 'en'
    ? '(Tverskoy District Court of Moscow, 21.03.2022)'
    : '(решение Тверского районного суда Москвы от 21.03.2022)';
  if (ownedOrder.length) {
    const owned = joinList(ownedOrder.map(name), lang);
    const access = joinList(accessOrder.map(name), lang);
    if (lang === 'en') {
      paras.push(`* ${owned} ${ownedOrder.length > 1 ? 'are' : 'is'} owned by Meta Platforms Inc., which is designated an extremist organization in Russia; its activities are banned in the Russian Federation ${court}. Access to ${access} is restricted in Russia by Roskomnadzor.`);
    } else {
      paras.push(`* ${owned} ${ownedOrder.length > 1 ? 'принадлежат' : 'принадлежит'} компании Meta Platforms Inc., которая признана в России экстремистской организацией, её деятельность на территории Российской Федерации запрещена ${court}. Доступ к ${access} в России ограничен Роскомнадзором.`);
    }
  } else if (set.has('meta')) {
    paras.push(lang === 'en'
      ? `* Meta Platforms Inc. is designated an extremist organization in Russia; its activities are banned in the Russian Federation ${court}.`
      : `* Meta Platforms Inc. признана в России экстремистской организацией, её деятельность на территории Российской Федерации запрещена ${court}.`);
  }
  if (bOrder.length) {
    const list = joinList(bOrder.map(name), lang);
    paras.push(lang === 'en'
      ? `** Access to ${list} is restricted in Russia by Roskomnadzor.`
      : `** Доступ к ${list} в России ограничен Роскомнадзором.`);
  }
  if (!paras.length) return '';
  return `<aside class="blog-legal-note" role="note">${paras.map((p) => `<p>${p}</p>`).join('')}</aside>`;
}

// ---------- страница целиком ----------

const totals = { pages: 0, counts: {} };

/**
 * Разметить видимое содержимое <main> страницы и подставить сноску.
 * opts.lang — 'ru' | 'en'; opts.region — RegExp видимой области (по умолчанию <main>…</main>).
 */
function applyToPage(page, opts) {
  opts = opts || {};
  const lang = opts.lang || 'ru';
  let html = String(page || '');
  const re = opts.region || /<main\b[^>]*>[\s\S]*<\/main>/i;
  const m = html.match(re);
  if (!m) return html.split(NOTE_PLACEHOLDER).join('');
  const info = markHtmlWithInfo(m[0]);
  let region = info.html;
  const note = noteHtml(info.found, lang);
  if (region.includes(NOTE_PLACEHOLDER)) {
    let first = true;
    region = region.split(NOTE_PLACEHOLDER).map((part, i) => (i === 0 ? part : ((first ? (first = false, note) : '') + part))).join('');
  } else if (note) {
    region = region.replace(/<\/main>\s*$/i, `<div class="container rp-note-wrap">${note}</div>\n</main>`);
  }
  if (info.found.size) {
    totals.pages++;
    for (const [k, n] of Object.entries(info.counts)) totals.counts[k] = (totals.counts[k] || 0) + n;
  }
  return html.slice(0, m.index) + region + html.slice(m.index + m[0].length);
}

module.exports = {
  PLATFORMS, NOTE_PLACEHOLDER, MARK,
  markHtml, markHtmlWithInfo, detect, noteHtml, applyToPage, scanHtml, findInText, walkHtml, totals,
};
