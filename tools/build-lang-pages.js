// ================================================================
// build-lang-pages.js — Prerender static localized homepages
//
// Reads the root index.html + per-language dictionaries from i18n.js
// and bakes the translated text + SEO meta into static pages under
// /en/, /cn/, /mn/ so search engines and AI crawlers index localized
// content without executing JS.
//
// Re-runnable: overwrites {dir}/index.html on every run.
// Run:  node tools/build-lang-pages.js
// ================================================================

const fs = require('fs');
const path = require('path');
const { parse } = require('node-html-parser');

const ROOT = path.resolve(__dirname, '..');
const INDEX_PATH = path.join(ROOT, 'index.html');
const I18N_PATH = path.join(ROOT, 'i18n.js');
const BASE = 'https://chimitdorzhi.tech';

// ---- Full hreflang set (identical on every generated page + root) --------
const HREFLANG = [
    { lang: 'ru', href: BASE + '/' },
    { lang: 'en', href: BASE + '/en/' },
    { lang: 'cn', href: BASE + '/cn/' },
    { lang: 'mn', href: BASE + '/mn/' },
    { lang: 'x-default', href: BASE + '/' },
];

// ---- Language configuration ----------------------------------------------
// `code` indexes translations[code] in i18n.js; `dir` is the output folder.
// Brands/terms (IT, AI/ML, 152-ФЗ, Telegram, MAX) are left untranslated.
const LANGS = [
    {
        code: 'en',
        dir: 'en',
        htmlLang: 'en',
        metaLanguage: 'English',
        ogLocale: 'en_US',
        ogLocaleAlternate: 'ru_RU',
        seo: {
            title: 'Chimitdorzhi Darizhapov — IT, AI/ML and Business Digitalization',
            description: 'AI/ML and IT consultant with 16+ years of experience. AI solution development, business digitalization, chatbots, websites and automation across Russia. Russian tech stack.',
            ogTitle: 'Chimitdorzhi Darizhapov | IT Project Manager & AI Expert',
            ogDescription: 'IT Project Manager, AI/ML expert, entrepreneur (founder of Chimitdorzhi Studio) and visionary. I design complex IT systems and implement AI solutions. 16+ years of experience.',
            ogImageAlt: 'Chimitdorzhi Darizhapov — IT Project Manager and AI/ML expert',
            twTitle: 'Chimitdorzhi Darizhapov | IT PM & AI Expert',
            twDescription: 'IT Project Manager, AI/ML expert and entrepreneur. AI implementation, managing complex IT projects, development. 16+ years of experience.',
            twImageAlt: 'Chimitdorzhi Darizhapov — IT Project Manager and AI/ML expert',
        },
    },
    {
        code: 'cn',
        dir: 'cn',
        htmlLang: 'zh-Hans',
        metaLanguage: 'Chinese',
        ogLocale: 'zh_CN',
        ogLocaleAlternate: 'ru_RU',
        seo: {
            title: 'Chimitdorzhi Darizhapov — IT、AI/ML 与企业数字化',
            description: 'AI/ML 与 IT 顾问，拥有 16 年以上经验。提供 AI 解决方案开发、企业数字化、聊天机器人、网站及自动化服务，覆盖全俄罗斯。基于俄罗斯技术栈。',
            ogTitle: 'Chimitdorzhi Darizhapov | IT Project Manager 与 AI 专家',
            ogDescription: 'IT Project Manager、AI/ML 专家、企业家（Chimitdorzhi Studio 创始人）及远见者。设计复杂的 IT 系统并落地 AI 解决方案。拥有 16 年以上经验。',
            ogImageAlt: 'Chimitdorzhi Darizhapov — IT Project Manager 与 AI/ML 专家',
            twTitle: 'Chimitdorzhi Darizhapov | IT PM 与 AI 专家',
            twDescription: 'IT Project Manager、AI/ML 专家及企业家。AI 落地、复杂 IT 项目管理、开发。拥有 16 年以上经验。',
            twImageAlt: 'Chimitdorzhi Darizhapov — IT Project Manager 与 AI/ML 专家',
        },
    },
    {
        code: 'mn',
        dir: 'mn',
        htmlLang: 'mn',
        metaLanguage: 'Mongolian',
        ogLocale: 'mn_MN',
        ogLocaleAlternate: 'ru_RU',
        seo: {
            title: 'Чимитдоржи Дарижапов — IT, AI/ML ба бизнесийн дижитал шилжилт',
            description: 'AI/ML ба IT зөвлөх, 16+ жилийн туршлагатай. AI шийдэл боловсруулах, бизнесийн дижитал шилжилт, чат-бот, вэб сайт болон автоматжуулалт. Оросын технологийн стек.',
            ogTitle: 'Дарижапов Чимитдоржи (Chimitdorzhi Darizhapov) | IT Project Manager & AI Expert',
            ogDescription: 'IT Project Manager, AI/ML мэргэжилтэн, бизнес эрхлэгч (Chimitdorzhi Studio-г үүсгэн байгуулагч) ба алсын хараатан. Нарийн төвөгтэй IT системийг зохион бүтээж, AI шийдэл нэвтрүүлдэг. 16+ жилийн туршлагатай.',
            ogImageAlt: 'Чимитдоржи Дарижапов — IT Project Manager ба AI/ML мэргэжилтэн',
            twTitle: 'Дарижапов Чимитдоржи (Chimitdorzhi Darizhapov) | IT PM & AI Expert',
            twDescription: 'IT Project Manager, AI/ML мэргэжилтэн ба бизнес эрхлэгч. AI нэвтрүүлэх, нарийн төвөгтэй IT төсөл удирдах, боловсруулалт. 16+ жилийн туршлага.',
            twImageAlt: 'Чимитдоржи Дарижапов — IT Project Manager ба AI/ML мэргэжилтэн',
        },
    },
];

// ---- Extract the translations object from i18n.js ------------------------
// The file starts with `const translations = { ... };` followed by helper
// functions. We brace-match the object literal and eval ONLY that literal
// (never the whole file, which references document/* and functions).
function extractTranslations(i18nText) {
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
    return eval('(' + objLiteral + ')');
}

function setMeta(head, selector, attr, value) {
    const el = head.querySelector(selector);
    if (el) el.setAttribute(attr, value);
    return el;
}

function buildPage(htmlSource, dict, cfg) {
    const root = parse(htmlSource, {
        comment: true,
        blockTextElements: { script: true, style: true, noscript: true },
    });

    // ---- Replace innerHTML of every data-i18n element -------------------
    let replaced = 0;
    root.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
            el.set_content(dict[key]); // values may contain HTML, insert as-is
            replaced++;
        }
    });

    // ---- <html lang / data-lang> ----------------------------------------
    const htmlEl = root.querySelector('html');
    htmlEl.setAttribute('lang', cfg.htmlLang);
    htmlEl.setAttribute('data-lang', cfg.code);

    // ---- SEO tags in <head> ---------------------------------------------
    const head = root.querySelector('head');
    const canonical = BASE + '/' + cfg.dir + '/';

    const titleEl = head.querySelector('title');
    if (titleEl) titleEl.set_content(cfg.seo.title);
    setMeta(head, 'meta[name="title"]', 'content', cfg.seo.title);
    setMeta(head, 'meta[name="description"]', 'content', cfg.seo.description);
    setMeta(head, 'meta[name="language"]', 'content', cfg.metaLanguage);

    // canonical
    setMeta(head, 'link[rel="canonical"]', 'href', canonical);

    // hreflang — full set, identical on every page
    head.querySelectorAll('link[rel="alternate"]').forEach(el => el.remove());
    const altBlock = HREFLANG
        .map(h => '\n    <link rel="alternate" hreflang="' + h.lang + '" href="' + h.href + '">')
        .join('');
    const canonicalLink = head.querySelector('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.insertAdjacentHTML('afterend', altBlock);
    else head.insertAdjacentHTML('beforeend', altBlock);

    // Open Graph
    setMeta(head, 'meta[property="og:url"]', 'content', canonical);
    setMeta(head, 'meta[property="og:title"]', 'content', cfg.seo.ogTitle);
    setMeta(head, 'meta[property="og:description"]', 'content', cfg.seo.ogDescription);
    setMeta(head, 'meta[property="og:image:alt"]', 'content', cfg.seo.ogImageAlt);
    setMeta(head, 'meta[property="og:locale"]', 'content', cfg.ogLocale);
    setMeta(head, 'meta[property="og:locale:alternate"]', 'content', cfg.ogLocaleAlternate);

    // Twitter
    setMeta(head, 'meta[name="twitter:url"]', 'content', canonical);
    setMeta(head, 'meta[name="twitter:title"]', 'content', cfg.seo.twTitle);
    setMeta(head, 'meta[name="twitter:description"]', 'content', cfg.seo.twDescription);
    setMeta(head, 'meta[name="twitter:image:alt"]', 'content', cfg.seo.twImageAlt);

    // JSON-LD (schema.org) is intentionally left untouched.

    // ---- Make this language active in both language switchers ------------
    root.querySelectorAll('.lang-btn').forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        const active = lang === cfg.code;
        const cls = (btn.getAttribute('class') || '')
            .split(/\s+/).filter(c => c && c !== 'active');
        if (active) cls.push('active');
        btn.setAttribute('class', cls.join(' '));
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    // Asset paths unchanged (already absolute in index.html).

    return { html: root.toString(), replaced, canonical };
}

function main() {
    const i18nText = fs.readFileSync(I18N_PATH, 'utf8');
    const translations = extractTranslations(i18nText);
    const htmlSource = fs.readFileSync(INDEX_PATH, 'utf8');

    for (const cfg of LANGS) {
        const dict = translations[cfg.code];
        if (!dict) throw new Error('No `' + cfg.code + '` key in translations');

        const { html, replaced, canonical } = buildPage(htmlSource, dict, cfg);

        const outDir = path.join(ROOT, cfg.dir);
        const outPath = path.join(outDir, 'index.html');
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(outPath, html, 'utf8');

        console.log(
            '[build-lang-pages] ' + cfg.code +
            ': replaced ' + replaced + ' nodes -> ' + outPath +
            ' (' + Buffer.byteLength(html, 'utf8') + ' bytes, canonical ' + canonical + ')'
        );
    }
}

main();
