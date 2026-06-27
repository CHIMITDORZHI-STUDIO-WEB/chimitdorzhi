// ================================================================
// build-mn.js — Prerender static Mongolian homepage into /mn/
//
// Reads root index.html + the `mn` dictionary from i18n.js, bakes
// the Mongolian (Khalkha Cyrillic) text into a static page so search
// engines and AI crawlers index Mongolian content without JS.
//
// Re-runnable: overwrites mn/index.html on every run.
// Run:  node tools/build-mn.js
// ================================================================

const fs = require('fs');
const path = require('path');
const { parse } = require('node-html-parser');

const ROOT = path.resolve(__dirname, '..');
const INDEX_PATH = path.join(ROOT, 'index.html');
const I18N_PATH = path.join(ROOT, 'i18n.js');
const OUT_DIR = path.join(ROOT, 'mn');
const OUT_PATH = path.join(OUT_DIR, 'index.html');

// ---- 1. Extract the `mn` dictionary from i18n.js -------------------------
// The file starts with `const translations = { ... };`. We locate the object
// literal by brace-matching and eval ONLY that literal (never the whole file,
// which contains document/* and helper functions).
function extractMnDict(i18nText) {
    const marker = 'const translations = {';
    const start = i18nText.indexOf(marker);
    if (start === -1) throw new Error('Could not find `const translations = {` in i18n.js');

    const open = i18nText.indexOf('{', start);
    let depth = 0;
    let end = -1;
    for (let i = open; i < i18nText.length; i++) {
        const ch = i18nText[i];
        if (ch === '{') depth++;
        else if (ch === '}') {
            depth--;
            if (depth === 0) { end = i; break; }
        }
    }
    if (end === -1) throw new Error('Unbalanced braces while parsing translations object');

    const objLiteral = i18nText.slice(open, end + 1);
    // eslint-disable-next-line no-eval
    const translations = eval('(' + objLiteral + ')');
    if (!translations.mn) throw new Error('No `mn` key in translations');
    return translations.mn;
}

// ---- SEO strings (Mongolian / Khalkha Cyrillic) --------------------------
const SEO = {
    title: 'Чимитдоржи Дарижапов — IT, AI/ML ба бизнесийн дижитал шилжилт',
    description: 'AI/ML ба IT зөвлөх, 16+ жилийн туршлагатай. AI шийдэл боловсруулах, бизнесийн дижитал шилжилт, чат-бот, вэб сайт болон автоматжуулалт. Оросын технологийн стек.',
    canonical: 'https://chimitdorzhi.tech/mn/',
    ogTitle: 'Дарижапов Чимитдоржи (Chimitdorzhi Darizhapov) | IT Project Manager & AI Expert',
    ogDescription: 'IT Project Manager, AI/ML мэргэжилтэн, бизнес эрхлэгч (Chimitdorzhi Studio-г үүсгэн байгуулагч) ба алсын хараатан. Нарийн төвөгтэй IT системийг зохион бүтээж, AI шийдэл нэвтрүүлдэг. 16+ жилийн туршлагатай.',
    twTitle: 'Дарижапов Чимитдоржи (Chimitdorzhi Darizhapov) | IT PM & AI Expert',
    twDescription: 'IT Project Manager, AI/ML мэргэжилтэн ба бизнес эрхлэгч. AI нэвтрүүлэх, нарийн төвөгтэй IT төсөл удирдах, боловсруулалт. 16+ жилийн туршлага.',
    imageAlt: 'Чимитдоржи Дарижапов — IT Project Manager ба AI/ML мэргэжилтэн',
};

function setMeta(head, selector, attr, value) {
    const el = head.querySelector(selector);
    if (el) el.setAttribute(attr, value);
    return el;
}

function main() {
    const i18nText = fs.readFileSync(I18N_PATH, 'utf8');
    const mn = extractMnDict(i18nText);

    const html = fs.readFileSync(INDEX_PATH, 'utf8');
    const root = parse(html, {
        comment: true,
        blockTextElements: { script: true, style: true, noscript: true },
    });

    // ---- (c) Replace innerHTML of every data-i18n element ----------------
    let replaced = 0;
    root.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key && Object.prototype.hasOwnProperty.call(mn, key)) {
            el.set_content(mn[key]); // values may contain HTML, insert as-is
            replaced++;
        }
    });

    // ---- (d) <html lang/data-lang> --------------------------------------
    const htmlEl = root.querySelector('html');
    htmlEl.setAttribute('lang', 'mn');
    htmlEl.setAttribute('data-lang', 'mn');

    // ---- (d) SEO tags in <head> -----------------------------------------
    const head = root.querySelector('head');

    const titleEl = head.querySelector('title');
    if (titleEl) titleEl.set_content(SEO.title);
    setMeta(head, 'meta[name="title"]', 'content', SEO.title);
    setMeta(head, 'meta[name="description"]', 'content', SEO.description);
    setMeta(head, 'meta[name="language"]', 'content', 'Mongolian');

    // canonical
    setMeta(head, 'link[rel="canonical"]', 'href', SEO.canonical);

    // hreflang alternates — rewrite the existing alternate links
    head.querySelectorAll('link[rel="alternate"]').forEach(el => el.remove());
    const canonicalLink = head.querySelector('link[rel="canonical"]');
    const altBlock =
        '\n    <link rel="alternate" hreflang="ru" href="https://chimitdorzhi.tech/">' +
        '\n    <link rel="alternate" hreflang="mn" href="https://chimitdorzhi.tech/mn/">' +
        '\n    <link rel="alternate" hreflang="x-default" href="https://chimitdorzhi.tech/">';
    if (canonicalLink) {
        canonicalLink.insertAdjacentHTML('afterend', altBlock);
    } else {
        head.insertAdjacentHTML('beforeend', altBlock);
    }

    // Open Graph
    setMeta(head, 'meta[property="og:url"]', 'content', SEO.canonical);
    setMeta(head, 'meta[property="og:title"]', 'content', SEO.ogTitle);
    setMeta(head, 'meta[property="og:description"]', 'content', SEO.ogDescription);
    setMeta(head, 'meta[property="og:image:alt"]', 'content', SEO.imageAlt);
    setMeta(head, 'meta[property="og:locale"]', 'content', 'mn_MN');
    setMeta(head, 'meta[property="og:locale:alternate"]', 'content', 'ru_RU');

    // Twitter
    setMeta(head, 'meta[name="twitter:url"]', 'content', SEO.canonical);
    setMeta(head, 'meta[name="twitter:title"]', 'content', SEO.twTitle);
    setMeta(head, 'meta[name="twitter:description"]', 'content', SEO.twDescription);
    setMeta(head, 'meta[name="twitter:image:alt"]', 'content', SEO.imageAlt);

    // JSON-LD (schema.org) is intentionally left untouched.

    // ---- (e) Make MN active in both language switchers ------------------
    root.querySelectorAll('.lang-btn').forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        if (lang === 'mn') {
            const cls = (btn.getAttribute('class') || '').split(/\s+/).filter(Boolean);
            if (!cls.includes('active')) cls.push('active');
            btn.setAttribute('class', cls.join(' '));
            btn.setAttribute('aria-pressed', 'true');
        } else {
            const cls = (btn.getAttribute('class') || '')
                .split(/\s+/).filter(c => c && c !== 'active');
            btn.setAttribute('class', cls.join(' '));
            btn.setAttribute('aria-pressed', 'false');
        }
    });

    // ---- (g) Asset paths unchanged (already absolute in index.html) -----

    // ---- (h) Write output -----------------------------------------------
    fs.mkdirSync(OUT_DIR, { recursive: true });
    const out = root.toString();
    fs.writeFileSync(OUT_PATH, out, 'utf8');

    console.log('[build-mn] data-i18n elements replaced: ' + replaced);
    console.log('[build-mn] wrote: ' + OUT_PATH + ' (' + out.length + ' bytes)');
}

main();
