// Blog generator. Reads tools/blog-data.js, builds:
//   /blog/index.html           — hub
//   /blog/<slug>/index.html    — per article (only if published: true && contentHtml)
//   Updates sitemap.xml: removes prior /blog/* entries, adds new ones.
//
// Usage: node tools/build-blog.js

const fs = require('fs');
const path = require('path');
const articles = require('./blog-data');

const SITE = 'https://chimitdorzhi.tech';
const ROOT = path.resolve(__dirname, '..');
const OUT_BLOG = path.join(ROOT, 'blog');
const OUT_SITEMAP = path.join(ROOT, 'sitemap.xml');
const OUT_FEED    = path.join(OUT_BLOG, 'feed.xml');

const CATEGORY_LABELS = {
  legal:       'Право и compliance',
  'ai-dev':    'AI для разработчиков',
  'ai-life':   'AI для жизни и работы',
  marketing:   'Маркетинг и контент',
  sales:       'Продажи и стартап',
  media:       'Медиа и подкасты',
  industries:  'Отрасли',
  esports:     'Киберспорт',
  development: 'Разработка',
  security:    'Безопасность',
  finance:     'Финансы',
  mlm:         'Сетевой бизнес',
  mwrlife:     'MWR Life',
  // legacy/fallback
  ai:          'AI и автоматизация',
  career:      'Карьера и обучение',
  security:    'Безопасность',
};

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

function formatRuDate(iso) {
  const months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
  const [y,m,d] = iso.split('-').map(Number);
  return `${d} ${months[m-1]} ${y}`;
}

// ---------- shared head/nav/footer ----------

function head({ title, description, keywords, canonical, ogImage = `${SITE}/hero-photo.webp` }) {
  return `<!DOCTYPE html>
<html lang="ru" data-theme="dark" data-lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <meta name="keywords" content="${esc(keywords)}">
    <meta name="author" content="Дарижапов Чимитдоржи">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
    <meta name="theme-color" content="#121218">
    <link rel="canonical" href="${canonical}">
    <link rel="alternate" hreflang="ru" href="${canonical}">
    <link rel="alternate" hreflang="x-default" href="${canonical}">
    <link rel="alternate" type="application/rss+xml" title="Блог Чимитдоржи Дарижапова" href="${SITE}/blog/feed.xml">

    <meta property="og:type" content="article">
    <meta property="og:url" content="${canonical}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    <meta property="og:image" content="${ogImage}">
    <meta property="og:locale" content="ru_RU">
    <meta property="og:site_name" content="CHIMITDORZHI.TECH">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(title)}">
    <meta name="twitter:description" content="${esc(description)}">
    <meta name="twitter:image" content="${ogImage}">

    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
    <link rel="icon" type="image/png" sizes="120x120" href="/favicon-120.png">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="preload" href="/assets/fonts/InterVariable.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/assets/phosphor/Phosphor.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/assets/phosphor/Phosphor-Fill.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="/assets/phosphor/regular.css" media="print" onload="this.media='all'">
    <link rel="stylesheet" href="/assets/phosphor/fill.css" media="print" onload="this.media='all'">
    <noscript>
        <link rel="stylesheet" href="/assets/phosphor/regular.css">
        <link rel="stylesheet" href="/assets/phosphor/fill.css">
    </noscript>
    <link rel="stylesheet" href="/style.css?v=23">
`;
}

function navbar() {
  return `<nav class="navbar" id="navbar">
    <div class="container nav-inner">
        <a href="/" class="logo">CHIMITDORZHI<span class="logo-dot">.</span></a>
        <ul class="nav-links" id="navLinks">
            <li><a href="/#about" data-i18n="nav.about">Обо мне</a></li>
            <li><a href="/#services" data-i18n="nav.services">Услуги</a></li>
            <li class="nav-dropdown">
                <a href="/#projects" class="nav-dropdown-toggle"><span data-i18n="nav.projects">Проекты</span> <i class="ph ph-caret-down nav-caret" aria-hidden="true"></i></a>
                <div class="nav-dropdown-menu">
                    <div class="nav-dropdown-label" data-i18n="nav.proj.label">Наши продукты</div>
                    <a href="https://gerel.space" target="_blank" rel="noopener" class="nav-dropdown-item">
                        <span class="nav-dropdown-icon nav-dropdown-icon--gerel"><i class="ph-fill ph-users-three" aria-hidden="true"></i></span>
                        <span class="nav-dropdown-text">
                            <span class="nav-dropdown-title">Gerel.space</span>
                            <span class="nav-dropdown-desc" data-i18n="nav.proj.gerel_desc">Семейная соцсеть</span>
                        </span>
                        <i class="ph ph-arrow-up-right nav-dropdown-arrow" aria-hidden="true"></i>
                    </a>
                    <a href="/universe_buryat/" class="nav-dropdown-item">
                        <span class="nav-dropdown-icon nav-dropdown-icon--logo"><img src="/universe_buryat/logo.png" alt="Вселенная Бурят" loading="lazy"></span>
                        <span class="nav-dropdown-text">
                            <span class="nav-dropdown-title" data-i18n="nav.universe">Вселенная Бурят</span>
                            <span class="nav-dropdown-desc" data-i18n="nav.proj.universe_desc">Культурный портал</span>
                        </span>
                        <i class="ph ph-arrow-right nav-dropdown-arrow" aria-hidden="true"></i>
                    </a>
                    <a href="/arey/" class="nav-dropdown-item">
                        <span class="nav-dropdown-icon nav-dropdown-icon--arey"><i class="ph-fill ph-vinyl-record" aria-hidden="true"></i></span>
                        <span class="nav-dropdown-text">
                            <span class="nav-dropdown-title" data-i18n="nav.arey">AREY</span>
                            <span class="nav-dropdown-desc" data-i18n="nav.proj.arey_desc">Музыкальный лейбл</span>
                        </span>
                        <i class="ph ph-arrow-right nav-dropdown-arrow" aria-hidden="true"></i>
                    </a>
                    <a href="https://audit.chimitdorzhi.tech/" target="_blank" rel="noopener" class="nav-dropdown-item">
                        <span class="nav-dropdown-icon nav-dropdown-icon--audit"><i class="ph-fill ph-seal-check" aria-hidden="true"></i></span>
                        <span class="nav-dropdown-text">
                            <span class="nav-dropdown-title" data-i18n="nav.audit">Аудит 152-ФЗ</span>
                            <span class="nav-dropdown-desc" data-i18n="nav.proj.audit_desc">Защита от штрафов до 500 млн</span>
                        </span>
                        <i class="ph ph-arrow-up-right nav-dropdown-arrow" aria-hidden="true"></i>
                    </a>
                    <a href="/mwrlife/" class="nav-dropdown-item">
                        <span class="nav-dropdown-icon nav-dropdown-icon--audit"><i class="ph-fill ph-airplane-tilt" aria-hidden="true"></i></span>
                        <span class="nav-dropdown-text">
                            <span class="nav-dropdown-title">MWR Life</span>
                            <span class="nav-dropdown-desc">Travel-клуб и партнёрка</span>
                        </span>
                        <i class="ph ph-arrow-right nav-dropdown-arrow" aria-hidden="true"></i>
                    </a>
                </div>
            </li>
            <li><a href="/#cases" data-i18n="nav.cases">Кейсы</a></li>
            <li><a href="/blog/" data-i18n="nav.blog">Блог</a></li>
            <li><a href="/#contact" data-i18n="nav.contact">Контакт</a></li>
        </ul>
        <div class="nav-controls">
            <div class="lang-switcher" id="langSwitcher" role="group" aria-label="Выбор языка">
                <button class="lang-btn active" data-lang="ru" aria-pressed="true" aria-label="Русский">RU</button>
                <button class="lang-btn" data-lang="en" aria-pressed="false" aria-label="English">EN</button>
                <button class="lang-btn" data-lang="cn" aria-pressed="false" aria-label="中文">CN</button>
            </div>
            <a href="https://t.me/chimitdorzhi" target="_blank" class="btn btn-accent nav-cta" data-i18n="nav.cta">СВЯЗАТЬСЯ</a>
        </div>
        <button class="burger" id="burger" aria-label="Меню" aria-expanded="false" aria-controls="mobileMenu"><span></span><span></span><span></span></button>
    </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
    <ul>
        <li><a href="/#about">Обо мне</a></li>
        <li><a href="/#services">Услуги</a></li>
        <li><a href="/services/">Каталог услуг</a></li>
        <li><a href="/#cases">Кейсы</a></li>
        <li><a href="/blog/">Блог</a></li>
        <li><a href="/#contact">Контакт</a></li>
    </ul>
</div>`;
}

function footer() {
  return `<footer id="contact" class="footer">
    <div class="container footer-inner">
        <div class="footer-cta">
            <span class="section-label" data-i18n="footer.label">КОНТАКТ</span>
            <h2 data-i18n="footer.h1">ЕСТЬ ЗАДАЧА?</h2>
            <h2 class="text-gradient" data-i18n="footer.h2">ДАВАЙТЕ РЕШИМ.</h2>
            <div class="footer-actions">
                <a href="https://t.me/chimitdorzhi" target="_blank" rel="noopener" class="btn btn-accent"><i class="ph ph-telegram-logo" aria-hidden="true"></i> Telegram</a>
                <a href="mailto:chimitdorzhi26@gmail.com" class="btn btn-ghost">chimitdorzhi26@gmail.com</a>
                <a href="tel:+79316053007" class="btn btn-ghost"><i class="ph ph-phone" aria-hidden="true"></i> +7 (931) 605-30-07</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p class="footer-copy">&copy; 2026 <span data-i18n="footer.copy">Дарижапов Чимитдоржи. Все права защищены.</span></p>
            <div class="footer-legal">
                <p class="footer-legal-name" data-i18n="footer.legal_name">ИП Дарижапова Рыгзема Баировна</p>
                <p class="footer-legal-details">
                    <span data-i18n="footer.legal_inn">ИНН: 031101842043</span><span> · </span><span data-i18n="footer.legal_ogrnip">ОГРНИП: 326750000005553</span>
                </p>
                <p class="footer-legal-details" data-i18n="footer.legal_address">пер. Каштакский, д. 1а, г. Чита, Забайкальский край</p>
            </div>
            <div class="footer-links">
                <a href="/privacy_policy.html" class="footer-policy-link" data-i18n="footer.privacy">Политика конфиденциальности</a>
                <span class="footer-legal-sep"> · </span>
                <a href="/oferta.html" class="footer-policy-link" data-i18n="footer.oferta">Публичная оферта</a>
                <span class="footer-legal-sep"> · </span>
                <a href="/terms.html" class="footer-policy-link" data-i18n="footer.terms">Пользовательское соглашение</a>
                <span class="footer-legal-sep"> · </span>
                <a href="/accessibility/" class="footer-policy-link" data-i18n="footer.a11y">Доступность</a>
            </div>
        </div>
    </div>
</footer>
<script src="/i18n.js?v=23" defer></script>
<script src="/services-i18n.js?v=23" defer></script>
<script src="/script.js?v=23" defer></script>`;
}

// ---------- article page ----------

function coverUrl(a) {
  return `${SITE}/blog/${a.slug}/cover.png`;
}

function blogPostingLd(a, url) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: a.title,
    description: a.metaDescription,
    image: coverUrl(a),
    author: {
      '@type': 'Person',
      name: 'Чимитдоржи Дарижапов',
      url: SITE,
    },
    publisher: {
      '@type': 'Organization',
      name: 'CHIMITDORZHI.TECH',
      logo: { '@type': 'ImageObject', url: `${SITE}/favicon-120.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    datePublished: a.datePublished,
    dateModified: a.dateModified,
    keywords: a.tags.join(', '),
    articleSection: CATEGORY_LABELS[a.category] || 'Блог',
    inLanguage: 'ru',
  }, null, 2);
}

function breadcrumbLd(a, url) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Блог', item: `${SITE}/blog/` },
      { '@type': 'ListItem', position: 3, name: a.title, item: url },
    ],
  }, null, 2);
}

// Extract FAQ Q&A pairs from the article's FAQ section for FAQPage schema.
function extractFaq(html) {
  if (!html) return [];
  // Isolate the FAQ section: from <h2 id="faq"...> up to the next <h2 or end.
  const m = html.match(/<h2[^>]*id="faq"[^>]*>[\s\S]*?(?=<h2[\s>]|$)/i);
  if (!m) return [];
  const section = m[0];
  const pairs = [];
  // Pattern A: <p><strong>Question?</strong> Answer.</p>
  const reP = /<p>\s*<strong>(.*?)<\/strong>\s*([\s\S]*?)<\/p>/gi;
  let x;
  while ((x = reP.exec(section)) !== null) {
    const q = x[1].replace(/<[^>]+>/g, '').trim();
    const a = x[2].replace(/<[^>]+>/g, '').trim();
    if (q && a && q.length > 4 && a.length > 4) pairs.push({ q, a });
  }
  // Pattern B (fallback): <h3>Question?</h3><p>Answer</p>
  if (pairs.length === 0) {
    const reH = /<h3[^>]*>(.*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/gi;
    while ((x = reH.exec(section)) !== null) {
      const q = x[1].replace(/<[^>]+>/g, '').trim();
      const a = x[2].replace(/<[^>]+>/g, '').trim();
      if (q && a) pairs.push({ q, a });
    }
  }
  return pairs;
}

function faqLd(a) {
  const pairs = extractFaq(a.contentHtml);
  if (pairs.length < 2) return '';
  const json = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pairs.map(p => ({
      '@type': 'Question',
      name: p.q,
      acceptedAnswer: { '@type': 'Answer', text: p.a },
    })),
  }, null, 2);
  return `    <script type="application/ld+json">\n${json}\n    </script>\n`;
}

function tocHtml(toc) {
  if (!toc || !toc.length) return '';
  const items = toc.map((t, i) =>
    `<li><a href="#${t.id}"><span class="blog-toc-num">${String(i+1).padStart(2,'0')}</span> ${esc(t.text)}</a></li>`
  ).join('\n');
  return `<aside class="blog-toc" aria-label="Оглавление">
  <h2><i class="ph ph-list-bullets" aria-hidden="true"></i> Содержание</h2>
  <ol>${items}</ol>
</aside>`;
}

function tagsHtml(tags) {
  return `<div class="blog-tags">${tags.map(t => `<span class="blog-tag"><i class="ph ph-hash" aria-hidden="true"></i>${esc(t)}</span>`).join('')}</div>`;
}

function servicesOfferCard(article) {
  if (!article.servicesOffer) return '';
  const s = article.servicesOffer;
  return `
<div class="blog-services-offer">
  <div class="blog-services-offer-eyebrow">${esc(s.eyebrow || 'Услуги по теме')}</div>
  <h3 class="blog-services-offer-title">${esc(s.title)}</h3>
  <ul class="blog-services-offer-list">
    ${s.services.map(item => `
    <li><i class="${item.icon}"></i> <span>${esc(item.label)}</span></li>
    `).join('')}
  </ul>
  <a href="${esc(s.ctaUrl || 'https://t.me/chimitdorzhi')}" target="_blank" rel="noopener" class="blog-services-offer-cta">
    <i class="ph-fill ph-telegram-logo" aria-hidden="true"></i> ${esc(s.ctaLabel || 'Написать в Telegram')}
  </a>
</div>`;
}

function relatedHtml(a, published) {
  // Resolve relatedSlugs to published articles. If none — fall back to service links.
  const map = new Map(published.map(p => [p.slug, p]));
  const found = (a.relatedSlugs || []).map(s => map.get(s)).filter(Boolean).filter(r => r.slug !== a.slug);
  if (found.length) {
    const cards = found.map(cardHtml).join('\n');
    return `<section class="blog-related">
  <h2>Читайте также</h2>
  <div class="blog-grid">${cards}</div>
</section>`;
  }
  // Fallback: pitch services
  return `<section class="blog-related">
  <h2>Что дальше</h2>
  <div class="blog-grid">
    <a class="blog-card blog-card-svc" href="/audit/">
      <div class="blog-card-icon"><i class="ph-fill ph-shield-check" aria-hidden="true"></i></div>
      <span class="blog-card-cat">Услуга</span>
      <h3>Аудит 152-ФЗ под ключ</h3>
      <p>От 5 000 ₽. Отчёт с приоритетами + готовые документы. Срок 1–3 дня.</p>
      <span class="blog-card-link">Подробнее <i class="ph ph-arrow-right" aria-hidden="true"></i></span>
    </a>
    <a class="blog-card blog-card-svc" href="/services/rkn-audit/">
      <div class="blog-card-icon"><i class="ph-fill ph-file-magnifying-glass" aria-hidden="true"></i></div>
      <span class="blog-card-cat">Услуга</span>
      <h3>Подача уведомления в РКН</h3>
      <p>Заполним анкету, подадим, ответим на вопросы регулятора.</p>
      <span class="blog-card-link">Подробнее <i class="ph ph-arrow-right" aria-hidden="true"></i></span>
    </a>
    <a class="blog-card blog-card-svc" href="/services/">
      <div class="blog-card-icon"><i class="ph-fill ph-grid-four" aria-hidden="true"></i></div>
      <span class="blog-card-cat">Каталог</span>
      <h3>Все услуги</h3>
      <p>39 направлений: разработка, AI, кибербезопасность, обучение.</p>
      <span class="blog-card-link">Смотреть <i class="ph ph-arrow-right" aria-hidden="true"></i></span>
    </a>
  </div>
</section>`;
}

// Contextual auto-linking: link the FIRST occurrence of a keyword phrase inside
// a prose <p> to the matching service page. Skips headings, code, tables, existing
// links and the lead. Caps total links to avoid over-optimization.
const AUTOLINK_RULES = [
  { re: /Telegram-бот(?:а|ы|ов|у)?/i,        url: 'https://chimitdorzhi.tech/services/telegram-bots/' },
  { re: /чат-бот(?:а|ы|ов|у)?/i,             url: 'https://chimitdorzhi.tech/services/telegram-bots/' },
  { re: /AI-агент(?:а|ы|ов|у)?/i,            url: 'https://chimitdorzhi.tech/services/ai-agents/' },
  { re: /RAG-систем(?:а|ы|у)/i,              url: 'https://chimitdorzhi.tech/services/rag-systems/' },
  { re: /кибербезопасност(?:ь|и)/i,          url: 'https://chimitdorzhi.tech/services/cybersecurity/' },
  { re: /аудит(?:а)? 152-ФЗ/i,               url: 'https://audit.chimitdorzhi.tech/' },
  { re: /юнит-экономик(?:а|и|у)/i,           url: 'https://chimitdorzhi.tech/services/business-analytics-unit-economics/' },
  { re: /импортозамещени(?:е|я)/i,           url: 'https://chimitdorzhi.tech/services/russian-stack-migration/' },
  { re: /мобильн(?:ое|ого) приложени(?:е|я)/i, url: 'https://chimitdorzhi.tech/services/mobile-apps/' },
  { re: /разработк(?:а|и|у) сайта/i,         url: 'https://chimitdorzhi.tech/services/web-development/' },
];

function autolinkServices(html, selfUrl) {
  if (!html) return html;
  const used = new Set();
  let count = 0;
  const MAX = 4;
  // Split into segments, keeping protected blocks intact.
  const parts = html.split(/(<pre[\s\S]*?<\/pre>|<h[1-6][\s\S]*?<\/h[1-6]>|<table[\s\S]*?<\/table>|<a [\s\S]*?<\/a>)/i);
  for (let i = 0; i < parts.length; i++) {
    const seg = parts[i];
    if (!seg || /^<(pre|h[1-6]|table|a )/i.test(seg)) continue; // protected
    let s = seg;
    for (const rule of AUTOLINK_RULES) {
      if (count >= MAX) break;
      if (used.has(rule.url)) continue;
      if (rule.url === selfUrl) continue; // don't self-link
      const m = s.match(rule.re);
      if (!m) continue;
      const idx = s.indexOf(m[0]);
      s = s.slice(0, idx) +
          `<a href="${rule.url}" class="blog-inline-link">${m[0]}</a>` +
          s.slice(idx + m[0].length);
      used.add(rule.url);
      count++;
    }
    parts[i] = s;
  }
  return parts.join('');
}

function articlePage(a, published) {
  const url = `${SITE}/blog/${a.slug}/`;
  const cat = CATEGORY_LABELS[a.category] || 'Блог';
  const bodyHtml = autolinkServices(a.contentHtml, a.ctaInternal && a.ctaInternal.url);
  return `${head({ title: a.metaTitle || a.title, description: a.metaDescription, keywords: a.metaKeywords || a.tags.join(', '), canonical: url, ogImage: coverUrl(a) })}    <script type="application/ld+json">
${blogPostingLd(a, url)}
    </script>
    <script type="application/ld+json">
${breadcrumbLd(a, url)}
    </script>
${faqLd(a)}</head>
<body>
    <a href="#main" class="skip-link">Перейти к содержимому</a>
    <div class="reading-progress" id="readingProgress" aria-hidden="true"></div>
    <div class="noise-overlay"></div>
    <div class="gradient-blob blob-1"></div>
    <div class="gradient-blob blob-2"></div>

    ${navbar()}

    <main id="main" class="blog-article-wrap">
        <div class="container">
            <nav class="breadcrumbs" aria-label="Хлебные крошки">
                <a href="/">Главная</a>
                <span class="breadcrumbs-sep">›</span>
                <a href="/blog/">Блог</a>
                <span class="breadcrumbs-sep">›</span>
                <span aria-current="page">${esc(a.title)}</span>
            </nav>

            <div class="blog-article-layout">
                <article class="blog-article">
                    <div class="blog-meta">
                        ${CATEGORY_META[a.category] ? `<a class="blog-meta-cat" href="/blog/category/${a.category}/"><i class="ph ph-bookmark" aria-hidden="true"></i> ${esc(cat)}</a>` : `<span class="blog-meta-cat"><i class="ph ph-bookmark" aria-hidden="true"></i> ${esc(cat)}</span>`}
                        <span><i class="ph ph-clock" aria-hidden="true"></i> ${a.readingMinutes} мин чтения</span>
                        <time datetime="${a.datePublished}"><i class="ph ph-calendar" aria-hidden="true"></i> ${formatRuDate(a.datePublished)}</time>
                    </div>

                    <h1 class="blog-h1">${esc(a.title)}</h1>

                    <p class="blog-lead">${esc(a.excerpt)}</p>

                    ${tagsHtml(a.tags)}

                    <div class="blog-body">
                        ${bodyHtml}
                    </div>

                    ${servicesOfferCard(a)}

                    <div class="blog-cta-card blog-cta-card-final">
                        <div class="blog-cta-card-body">
                            <h3>Нужен профессиональный аудит 152-ФЗ?</h3>
                            <p>Отчёт за 1–3 дня, устранение нарушений под ключ. От 5 000 ₽.</p>
                        </div>
                        <div class="blog-cta-card-actions">
                            <a href="${esc(a.ctaInternal ? a.ctaInternal.url : '/audit/')}" class="btn btn-accent"><i class="ph ph-shield-check" aria-hidden="true"></i> ${esc(a.ctaInternal ? a.ctaInternal.label : 'Заказать аудит')}</a>
                            <a href="https://t.me/chimitdorzhi" target="_blank" rel="noopener" class="btn btn-ghost"><i class="ph ph-telegram-logo" aria-hidden="true"></i> Telegram</a>
                            <a href="https://vk.com/chimitdorzhi" target="_blank" rel="noopener" class="btn btn-ghost"><i class="ph ph-chat-circle-dots" aria-hidden="true"></i> ВКонтакте</a>
                        </div>
                    </div>

                    ${relatedHtml(a, published)}
                </article>

                ${tocHtml(a.toc)}
            </div>
        </div>
    </main>

    ${footer()}
    <script>
    (function(){
      var bar=document.getElementById('readingProgress');
      var art=document.querySelector('.blog-article');
      if(!bar||!art)return;
      if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches){bar.style.display='none';return;}
      function upd(){
        var r=art.getBoundingClientRect();
        var total=art.offsetHeight-window.innerHeight;
        var passed=Math.min(Math.max(-r.top,0),total);
        bar.style.width=(total>0?(passed/total*100):0)+'%';
      }
      window.addEventListener('scroll',upd,{passive:true});
      window.addEventListener('resize',upd,{passive:true});
      upd();
    })();
    </script>
</body>
</html>`;
}

// ---------- hub page ----------

function cardHtml(a) {
  const cat = CATEGORY_LABELS[a.category] || 'Блог';
  return `<a class="blog-card" href="/blog/${a.slug}/" data-category="${a.category}">
  <div class="blog-card-icon"><i class="${a.heroIcon}"></i></div>
  <span class="blog-card-cat"><i class="ph ph-tag" aria-hidden="true"></i>${esc(cat)}</span>
  <h3>${esc(a.title)}</h3>
  <p>${esc(a.excerpt)}</p>
  <div class="blog-card-meta">
    <span><i class="ph ph-calendar" aria-hidden="true"></i> ${formatRuDate(a.datePublished)}</span>
    <span><i class="ph ph-clock" aria-hidden="true"></i> ${a.readingMinutes} мин</span>
  </div>
  <span class="blog-card-link">Читать <i class="ph ph-arrow-right" aria-hidden="true"></i></span>
</a>`;
}

function hubPage(published) {
  const url = `${SITE}/blog/`;
  const cards = published.map(cardHtml).join('\n');
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Блог CHIMITDORZHI.TECH',
    url,
    description: 'Экспертные статьи об IT, 152-ФЗ, AI, разработке и карьере от практика с 16+ годами опыта.',
    blogPost: published.map(a => ({
      '@type': 'BlogPosting',
      headline: a.title,
      url: `${SITE}/blog/${a.slug}/`,
      datePublished: a.datePublished,
      author: { '@type': 'Person', name: 'Чимитдоржи Дарижапов' },
    })),
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Блог', item: url },
    ],
  };

  return `${head({
    title: 'Блог — экспертные статьи об IT, 152-ФЗ, AI | Чимитдоржи Дарижапов',
    description: 'Практические статьи об IT-аудите, 152-ФЗ, разработке, AI и карьере. Без воды, с конкретными цифрами и примерами.',
    keywords: 'блог IT, статьи 152-ФЗ, AI разработка, разработка Telegram-ботов, IT карьера',
    canonical: url,
  })}    <script type="application/ld+json">
${JSON.stringify(ld, null, 2)}
    </script>
    <script type="application/ld+json">
${JSON.stringify(breadcrumb, null, 2)}
    </script>
</head>
<body>
    <a href="#main" class="skip-link">Перейти к содержимому</a>
    <div class="noise-overlay"></div>
    <div class="gradient-blob blob-1"></div>
    <div class="gradient-blob blob-2"></div>

    ${navbar()}

    <main id="main">
        <section class="section">
            <div class="container">
                <nav class="breadcrumbs" aria-label="Хлебные крошки">
                    <a href="/">Главная</a>
                    <span class="breadcrumbs-sep">›</span>
                    <span aria-current="page">Блог</span>
                </nav>
                <div class="section-header">
                    <span class="section-label">БЛОГ</span>
                    <h1 class="section-heading">Заметки <span class="text-gradient">практика</span></h1>
                    <p class="section-sub">Пишу о том, что вижу на проектах: 152-ФЗ, AI/ML, разработка под российский стек, карьера в IT. Без маркетинга, с конкретными цифрами.</p>
                </div>

                <div class="blog-filter-chips" role="group" aria-label="Фильтр категорий">
                    <button class="filter-btn active" data-blog-cat="all">Все <span class="filter-count">${published.length}</span></button>
                    ${[
                      { key: 'legal',       label: 'Право' },
                      { key: 'ai-dev',      label: 'AI / разработка' },
                      { key: 'ai-life',     label: 'AI / жизнь' },
                      { key: 'marketing',   label: 'Маркетинг' },
                      { key: 'sales',       label: 'Продажи' },
                      { key: 'media',       label: 'Медиа' },
                      { key: 'industries',  label: 'Отрасли' },
                      { key: 'esports',     label: 'Киберспорт' },
                      { key: 'development', label: 'Разработка' },
                      { key: 'security',    label: 'Безопасность' },
                      { key: 'finance',     label: 'Финансы' },
                      { key: 'mlm',         label: 'Сетевой бизнес' },
                      { key: 'mwrlife',     label: 'MWR Life' },
                      { key: 'ai',          label: 'AI (старое)' },
                      { key: 'career',      label: 'Карьера' },
                    ].map(c => {
                      const cnt = published.filter(p => p.category === c.key).length;
                      if (cnt === 0) return '';
                      return `<button class="filter-btn" data-blog-cat="${c.key}">${c.label} <span class="filter-count">${cnt}</span></button>`;
                    }).join('\n                    ')}
                </div>

                <div class="blog-grid" id="blogGrid">
                    ${cards}
                </div>

                ${published.length === 1 ? `
                <div class="blog-coming-soon">
                    <p><i class="ph ph-clock-countdown" aria-hidden="true"></i> Готовятся к публикации: <strong>Cookie-баннер по закону</strong>, <strong>Уведомление в РКН 2026</strong>, <strong>Сколько стоит Telegram-бот</strong> и ещё 6 статей. Следите за обновлениями.</p>
                </div>` : ''}

                <nav class="blog-sections" aria-label="Разделы блога">
                    <h2>Разделы блога</h2>
                    <div class="blog-sections-list">
                    ${Object.keys(CATEGORY_META).filter(k => published.some(p => p.category === k)).map(k => {
                      const cnt = published.filter(p => p.category === k).length;
                      return `<a href="/blog/category/${k}/" class="blog-section-link">${esc(CATEGORY_META[k].h1)} <span>${cnt}</span></a>`;
                    }).join('\n                    ')}
                    </div>
                </nav>
            </div>
        </section>
    </main>

    ${footer()}

    <script>
    // Filter chips
    (function(){
      var btns = document.querySelectorAll('.blog-filter-chips .filter-btn');
      var cards = document.querySelectorAll('#blogGrid .blog-card');
      btns.forEach(function(btn){
        btn.addEventListener('click', function(){
          btns.forEach(function(b){ b.classList.remove('active'); });
          btn.classList.add('active');
          var cat = btn.getAttribute('data-blog-cat');
          cards.forEach(function(c){
            var show = cat === 'all' || c.getAttribute('data-category') === cat;
            c.style.display = show ? '' : 'none';
          });
        });
      });
    })();
    </script>
</body>
</html>`;
}

// ---------- category pillar pages ----------

const CATEGORY_META = {
  legal: {
    h1: 'Право и 152-ФЗ',
    intro: 'Всё о защите персональных данных и соответствии 152-ФЗ для бизнеса: согласия, уведомление в РКН, утечки, cookie-баннеры, локализация данных и новые оборотные штрафы. Практические разборы от специалиста, который проводит аудиты на соответствие закону.',
    service: { url: 'https://audit.chimitdorzhi.tech/', label: 'Аудит 152-ФЗ' },
  },
  'ai-dev': {
    h1: 'AI для разработчиков',
    intro: 'AI-агенты, RAG-системы, MCP, локальные LLM и российский AI-стек — для тех, кто внедряет искусственный интеллект в продукты и процессы. С кодом, архитектурой и реальными кейсами на YandexGPT и GigaChat.',
    service: { url: 'https://chimitdorzhi.tech/services/ai-agents/', label: 'Внедрить AI-агентов' },
  },
  'ai-life': {
    h1: 'AI для жизни и работы',
    intro: 'Практическое применение нейросетей в повседневной работе и быту: помощники, автоматизация рутины, AI для бухгалтера, юриста, родителей. Без хайпа — только то, что реально экономит время.',
    service: { url: 'https://chimitdorzhi.tech/services/corporate-ai-training/', label: 'Обучение команды AI' },
  },
  marketing: {
    h1: 'Маркетинг и контент',
    intro: 'SEO под Яндекс, контент-маркетинг, партнёрский маркетинг и продвижение в российских реалиях 2026. Что реально приводит клиентов, а что — слив бюджета.',
    service: { url: 'https://chimitdorzhi.tech/services/digital-marketing/', label: 'Маркетинг под ключ' },
  },
  sales: {
    h1: 'Продажи и стартап',
    intro: 'Воронки продаж, юнит-экономика, бизнес-планы и CRM для малого бизнеса и стартапов. Как считать деньги и строить продажи на цифрах, а не на интуиции.',
    service: { url: 'https://chimitdorzhi.tech/services/business-analytics-unit-economics/', label: 'Собрать финмодель' },
  },
  media: {
    h1: 'Медиа и подкасты',
    intro: 'Запуск и монетизация подкастов, стрим-студии, своё медиа. Технический стек и бизнес-модель для тех, кто создаёт контент.',
    service: { url: 'https://chimitdorzhi.tech/services/podcast-production/', label: 'Продакшн подкаста' },
  },
  industries: {
    h1: 'IT и автоматизация по отраслям',
    intro: 'Цифровизация конкретных индустрий: HoReCa, автосервис, медицина, логистика, агросектор, ритейл, туризм, образование и десятки других. CRM, боты, IoT и AI под специфику каждой отрасли — с бюджетами и стеком.',
    service: { url: 'https://chimitdorzhi.tech/services/business-automation/', label: 'Автоматизировать бизнес' },
  },
  esports: {
    h1: 'Киберспорт',
    intro: 'Организация турниров, киберспортивные лиги, спонсорство и монетизация — от практика с опытом 50+ мероприятий. Бизнес-сторона киберспорта без воды.',
    service: { url: 'https://chimitdorzhi.tech/services/business-automation/', label: 'Автоматизировать ивенты' },
  },
  development: {
    h1: 'Разработка',
    intro: 'Сайты, Telegram-боты, PWA, MVP, своя инфраструктура и импортозамещение ПО. Сколько стоит, как делают и что выбрать — Tilda или кастом, no-code или код.',
    service: { url: 'https://chimitdorzhi.tech/services/web-development/', label: 'Заказать разработку' },
  },
  security: {
    h1: 'Безопасность',
    intro: 'Кибербезопасность для бизнеса: защита от фишинга, чек-листы безопасности сайта, реагирование на утечки. Практика, а не теория.',
    service: { url: 'https://chimitdorzhi.tech/services/cybersecurity/', label: 'Аудит безопасности' },
  },
  finance: {
    h1: 'Финансы',
    intro: 'Финансы для предпринимателя: юнит-экономика, ЦФА, цифровой рубль, налоги. Как считать и не потерять деньги.',
    service: { url: 'https://chimitdorzhi.tech/services/business-analytics-unit-economics/', label: 'Финансовая аналитика' },
  },
  mlm: {
    h1: 'Сетевой бизнес',
    intro: 'Автоматизация и инструменты для сетевого бизнеса: CRM структуры, боты, контент на AI, калькуляторы маркетинг-планов, своя платформа дистрибьютора. Объективно и в рамках закона.',
    service: { url: 'https://chimitdorzhi.tech/services/business-automation/', label: 'Автоматизировать структуру' },
  },
  mwrlife: {
    h1: 'MWR Life / Travel Advantage',
    intro: 'Всё про travel-клуб MWR Life: как путешествовать дешевле, как устроена партнёрская программа, честные обзоры и разборы. Объективно, без обещаний дохода.',
    service: { url: 'https://chimitdorzhi.tech/mwrlife/', label: 'Узнать про MWR Life' },
  },
};

function categoryPage(key, catArticles) {
  const meta = CATEGORY_META[key];
  const label = CATEGORY_LABELS[key] || key;
  const url = `${SITE}/blog/category/${key}/`;
  const cards = catArticles.map(cardHtml).join('\n');
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${meta.h1} — статьи и гайды`,
    url,
    description: meta.intro,
    inLanguage: 'ru',
    hasPart: catArticles.map(a => ({
      '@type': 'BlogPosting',
      headline: a.title,
      url: `${SITE}/blog/${a.slug}/`,
      datePublished: a.datePublished,
    })),
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Блог', item: `${SITE}/blog/` },
      { '@type': 'ListItem', position: 3, name: meta.h1, item: url },
    ],
  };
  return `${head({
    title: `${meta.h1}: статьи и гайды 2026 | Чимитдоржи Дарижапов`,
    description: meta.intro.slice(0, 300),
    keywords: `${label}, ${meta.h1}, статьи, гайды, 2026`,
    canonical: url,
  })}    <script type="application/ld+json">
${JSON.stringify(ld, null, 2)}
    </script>
    <script type="application/ld+json">
${JSON.stringify(breadcrumb, null, 2)}
    </script>
</head>
<body>
    <a href="#main" class="skip-link">Перейти к содержимому</a>
    <div class="noise-overlay"></div>
    <div class="gradient-blob blob-1"></div>
    <div class="gradient-blob blob-2"></div>

    ${navbar()}

    <main id="main">
        <section class="section">
            <div class="container">
                <nav class="breadcrumbs" aria-label="Хлебные крошки">
                    <a href="/">Главная</a>
                    <span class="breadcrumbs-sep">›</span>
                    <a href="/blog/">Блог</a>
                    <span class="breadcrumbs-sep">›</span>
                    <span aria-current="page">${esc(meta.h1)}</span>
                </nav>
                <div class="section-header">
                    <span class="section-label">РАЗДЕЛ БЛОГА</span>
                    <h1 class="section-heading">${esc(meta.h1)}</h1>
                    <p class="section-sub">${esc(meta.intro)}</p>
                    <div class="blog-cat-actions">
                        <a href="${meta.service.url}"${meta.service.url.startsWith('http') && !meta.service.url.includes('chimitdorzhi.tech') ? ' target="_blank" rel="noopener"' : ''} class="btn btn-accent"><i class="ph ph-arrow-right" aria-hidden="true"></i> ${esc(meta.service.label)}</a>
                        <a href="/blog/" class="btn btn-ghost"><i class="ph ph-list" aria-hidden="true"></i> Все статьи блога</a>
                    </div>
                </div>

                <div class="blog-grid">
                    ${cards}
                </div>
            </div>
        </section>
    </main>

    ${footer()}
</body>
</html>`;
}

// ---------- sitemap update ----------

function updateSitemap(published) {
  const today = new Date().toISOString().slice(0, 10);
  let xml = fs.readFileSync(OUT_SITEMAP, 'utf8');

  // Strip any existing /blog/ entries (idempotent re-runs).
  xml = xml.replace(/\s*<url>\s*<loc>https:\/\/chimitdorzhi\.tech\/blog[^<]*<\/loc>[\s\S]*?<\/url>/g, '');

  // Category pillar pages present
  const catKeys = Object.keys(CATEGORY_META).filter(k => published.some(p => p.category === k));

  // Build new entries
  const blogEntries = [
    { loc: `${SITE}/blog/`, lastmod: today, freq: 'weekly', priority: '0.8' },
    ...catKeys.map(k => ({
      loc: `${SITE}/blog/category/${k}/`,
      lastmod: today,
      freq: 'weekly',
      priority: '0.6',
    })),
    ...published.map(a => ({
      loc: `${SITE}/blog/${a.slug}/`,
      lastmod: a.dateModified || a.datePublished,
      freq: 'monthly',
      priority: '0.7',
    })),
  ];
  const block = blogEntries.map(e =>
    `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.freq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
  ).join('\n');

  // Insert before </urlset>
  xml = xml.replace(/<\/urlset>\s*$/m, `${block}\n</urlset>\n`);

  fs.writeFileSync(OUT_SITEMAP, xml, 'utf8');
}

// ---------- RSS feed ----------

function rssDate(iso) {
  // RFC 822 — required by RSS 2.0
  const d = new Date(iso + 'T09:00:00+03:00');
  return d.toUTCString();
}

function buildRss(published) {
  const sorted = [...published].sort((a, b) =>
    (b.datePublished || '').localeCompare(a.datePublished || '')
  );
  const latest = sorted[0] ? sorted[0].dateModified || sorted[0].datePublished : new Date().toISOString().slice(0, 10);

  const channelCover = `${SITE}/hero-photo.webp`;
  const items = sorted.map(a => {
    const url = `${SITE}/blog/${a.slug}/`;
    const cat = CATEGORY_LABELS[a.category] || a.category || '';
    const cover = `${SITE}/blog/${a.slug}/cover.png`;
    // Полный HTML статьи + картинка-обложка в начале — требование Дзена
    const fullHtml = `<p><img src="${cover}" alt="${esc(a.title)}"/></p>\n${(a.contentHtml || '').replace(/]]>/g, ']]&gt;')}`;
    return `    <item>
      <title>${esc(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${a.excerpt || ''}]]></description>
      <content:encoded><![CDATA[${fullHtml}]]></content:encoded>
      <pubDate>${rssDate(a.datePublished)}</pubDate>
      <category>${esc(cat)}</category>
      <author>noreply@chimitdorzhi.tech (Чимитдоржи Дарижапов)</author>
      <enclosure url="${cover}" type="image/png" length="0"/>
      <media:thumbnail url="${cover}"/>
      <media:content url="${cover}" medium="image" type="image/png"/>
    </item>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:media="http://search.yahoo.com/mrss/" xmlns:yandex="http://news.yandex.ru" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Блог Чимитдоржи Дарижапова</title>
    <link>${SITE}/blog/</link>
    <atom:link href="${SITE}/blog/feed.xml" rel="self" type="application/rss+xml" />
    <description>Экспертные статьи о 152-ФЗ, разработке, AI и предпринимательстве в России.</description>
    <language>ru</language>
    <lastBuildDate>${rssDate(latest)}</lastBuildDate>
    <ttl>60</ttl>
    <image>
      <url>${channelCover}</url>
      <title>Блог Чимитдоржи Дарижапова</title>
      <link>${SITE}/blog/</link>
    </image>
${items}
  </channel>
</rss>`;
}

// ---------- main ----------

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }

async function main() {
  ensureDir(OUT_BLOG);
  const published = articles.filter(a => a.published && a.contentHtml);

  // Генерация уникальных OG-обложек 1200×630 для каждой статьи
  const og = require('./og-generator.js');
  let covers = 0;
  for (const a of published) {
    await og.generateCover(a);
    covers++;
  }
  console.log(`  Generated ${covers} cover(s) (cover.png)`);

  let pages = 0;
  for (const a of published) {
    const dir = path.join(OUT_BLOG, a.slug);
    ensureDir(dir);
    fs.writeFileSync(path.join(dir, 'index.html'), articlePage(a, published), 'utf8');
    pages++;
  }

  fs.writeFileSync(path.join(OUT_BLOG, 'index.html'), hubPage(published), 'utf8');

  // Category pillar pages
  let catPages = 0;
  const catKeys = Object.keys(CATEGORY_META).filter(k => published.some(p => p.category === k));
  for (const k of catKeys) {
    const catArticles = published.filter(p => p.category === k);
    const dir = path.join(OUT_BLOG, 'category', k);
    ensureDir(dir);
    fs.writeFileSync(path.join(dir, 'index.html'), categoryPage(k, catArticles), 'utf8');
    catPages++;
  }
  console.log(`  Generated ${catPages} category pillar page(s)`);

  updateSitemap(published);
  fs.writeFileSync(OUT_FEED, buildRss(published), 'utf8');

  console.log(`OK: generated ${pages} article(s) + hub`);
  console.log(`  ${OUT_BLOG}/index.html`);
  for (const a of published) console.log(`  ${OUT_BLOG}/${a.slug}/index.html`);
  console.log(`  Sitemap updated: ${OUT_SITEMAP}`);
  console.log(`  RSS feed:       ${OUT_FEED}`);

  // Word count check for published articles
  const stripTags = (s) => s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  for (const a of published) {
    const words = stripTags(a.contentHtml).split(/\s+/).filter(Boolean).length;
    console.log(`  [${a.slug}] ${words} words`);
  }
}

main().catch(err => { console.error(err); process.exit(1); });
