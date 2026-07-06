// Generates the /development/ hub + 18 sub-pages, and patches /sitemap.xml.
// Usage: node tools/build-development.js
//
// Mirrors the audit-landing structure (hero + pains + checklist + 3 pricing tiers + FAQ)
// but stays inside the main chimitdorzhi-site repo and reuses style.css.

const fs = require('fs');
const { clampTitle, clampDesc } = require("./meta-clamp.js");
const path = require('path');
const { categories, services, priceFrom, fmt, SITE } = require('./development-data');

const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'development');
const OUT_SITEMAP = path.join(ROOT, 'sitemap.xml');

const TODAY = new Date().toISOString().slice(0, 10);
const TG = 'https://t.me/chimitdorzhi';

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// For text that already contains &nbsp; we want it to render as nbsp, not be re-escaped
const escAttr = (s) => String(s)
  .replace(/&nbsp;/g, ' ')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const byCategory = (cat) => services.filter((s) => s.category === cat);
const findBySlug = (slug) => services.find((s) => s.slug === slug);

// 3 related services from the same category, excluding self
function relatedFor(svc) {
  return services.filter((s) => s.category === svc.category && s.slug !== svc.slug).slice(0, 3);
}

// ---------------- shared HEAD / NAV / FOOTER ----------------

function head({ title, description, keywords, canonical, ogImage = `${SITE}/hero-photo.webp` }) {
  title = clampTitle(title); description = clampDesc(description);
  return `<!DOCTYPE html>
<html lang="ru" data-theme="dark" data-lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(title)}</title>
    <meta name="description" content="${escAttr(description)}">
    <meta name="keywords" content="${esc(keywords)}">
    <meta name="author" content="Дарижапов Чимитдоржи">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
    <meta name="theme-color" content="#f4f1ea">
    <link rel="canonical" href="${canonical}">

    <meta property="og:type" content="website">
    <meta property="og:url" content="${canonical}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${escAttr(description)}">
    <meta property="og:image" content="${ogImage}">
    <meta property="og:locale" content="ru_RU">
    <meta property="og:site_name" content="CHIMITDORZHI.TECH">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(title)}">
    <meta name="twitter:description" content="${escAttr(description)}">
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
    <link rel="stylesheet" href="/style.css?v=41">
`;
}

const navbar = require('./navbar.js');

function footer() {
  return `<footer id="contact" class="footer">
    <div class="container footer-inner">
        <div class="footer-cta">
            <span class="section-label">КОНТАКТ</span>
            <h2>ЕСТЬ ЗАДАЧА?</h2>
            <h2 class="text-gradient">ДАВАЙТЕ РЕШИМ.</h2>
            <div class="footer-actions">
                <a href="${TG}" target="_blank" rel="noopener" class="btn btn-accent"><i class="ph ph-telegram-logo"></i> Telegram</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p class="footer-copy">&copy; 2026 Дарижапов Чимитдоржи. Все права защищены.</p>
            <div class="footer-legal">
                <p class="footer-legal-name">ИП Дарижапова Рыгзема Баировна</p>
                <p class="footer-legal-details"><span>ИНН: 031101842043</span><span> · </span><span>ОГРНИП: 326750000005553</span></p>
                <p class="footer-legal-details">пер. Каштакский, д. 1а, г. Чита, Забайкальский край</p>
            </div>
            <div class="footer-links">
                <a href="/privacy_policy.html" class="footer-policy-link">Политика конфиденциальности</a>
                <span class="footer-legal-sep"> · </span>
                <a href="/oferta.html" class="footer-policy-link">Публичная оферта</a>
                <span class="footer-legal-sep"> · </span>
                <a href="/terms.html" class="footer-policy-link">Пользовательское соглашение</a>
            </div>
        </div>
    </div>
</footer>
<script src="/script.js?v=23" defer></script>`;
}

// ---------------- helpers ----------------

function hubCard(svc) {
  return `<a href="/development/${svc.slug}/" class="dev-card">
    <div class="dev-card-icon"><i class="ph ${svc.icon}"></i></div>
    <h3>${esc(svc.title)}</h3>
    <p>${esc(svc.shortDesc)}</p>
    <div class="dev-card-price">${priceFrom(svc.priceFrom)}</div>
    <span class="dev-card-link">Подробнее <i class="ph ph-arrow-right"></i></span>
</a>`;
}

function painsHtml(pains) {
  return pains.map((p) => `<div class="dev-pain">
    <i class="ph ph-warning-circle dev-pain-icon" aria-hidden="true"></i>
    <p>${esc(p)}</p>
</div>`).join('\n');
}

function checklistHtml(items) {
  return items.map((it) => `<li class="dev-check-item">
    <i class="ph-fill ph-check-circle dev-check-icon" aria-hidden="true"></i>
    <span>${esc(it)}</span>
</li>`).join('\n');
}

function tiersHtml(tiers) {
  return tiers.map((t, idx) => {
    const featured = idx === 1 ? ' is-featured' : '';
    const features = t.features.map((f) => `<li><i class="ph ph-check"></i><span>${esc(f)}</span></li>`).join('\n            ');
    return `<div class="dev-tier${featured}">
    ${idx === 1 ? '<div class="dev-tier-badge">Популярный</div>' : ''}
    <div class="dev-tier-name">${esc(t.name)}</div>
    <div class="dev-tier-price">${priceFrom(t.priceFrom)}</div>
    <div class="dev-tier-note">*итоговая цена обсуждается</div>
    <ul class="dev-tier-features">
            ${features}
    </ul>
    <a href="${TG}" target="_blank" rel="noopener" class="btn ${idx === 1 ? 'btn-accent' : 'btn-ghost'} dev-tier-cta">Обсудить в Telegram</a>
</div>`;
  }).join('\n');
}

function faqHtml(faq) {
  return faq.map((q) => `<details class="dev-faq">
    <summary>${esc(q.q)}</summary>
    <div class="dev-faq-body">${esc(q.a)}</div>
</details>`).join('\n');
}

// ---------------- JSON-LD ----------------

function serviceJsonLd(svc, url) {
  const offers = svc.tiers.map((t) => ({
    '@type': 'Offer',
    name: `${svc.title} — ${t.name}`,
    price: String(t.priceFrom),
    priceCurrency: 'RUB',
    priceSpecification: {
      '@type': 'PriceSpecification',
      price: String(t.priceFrom),
      priceCurrency: 'RUB',
      valueAddedTaxIncluded: false,
    },
    availability: 'https://schema.org/InStock',
  }));
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.title,
    description: svc.shortDesc,
    provider: {
      '@type': 'Person',
      name: 'Чимитдоржи Дарижапов',
      url: SITE,
      email: 'chimitdorzhi26@gmail.com',
    },
    areaServed: ['Россия'],
    offers,
    url,
    datePublished: '2026-05-19',
    dateModified: TODAY,
  };
  return JSON.stringify(ld, null, 2);
}

function faqJsonLd(faq) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((q) => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: { '@type': 'Answer', text: q.a },
    })),
  };
  return JSON.stringify(ld, null, 2);
}

function breadcrumbJsonLd(items) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
  return JSON.stringify(ld, null, 2);
}

// ---------------- HUB PAGE ----------------

function hubPage() {
  const url = `${SITE}/development/`;
  const groups = Object.entries(categories)
    .sort((a, b) => a[1].order - b[1].order)
    .map(([key, meta]) => {
      const items = byCategory(key);
      return `<section class="section section-tight">
    <div class="container">
        <div class="section-header">
            <span class="section-label"><i class="ph ${meta.icon}"></i> ${esc(meta.label)}</span>
            <h2 class="section-heading">${esc(meta.label)} — ${items.length} ${items.length === 1 ? 'продукт' : (items.length < 5 ? 'продукта' : 'продуктов')}</h2>
        </div>
        <div class="dev-grid">${items.map(hubCard).join('\n')}</div>
    </div>
</section>`;
    }).join('\n');

  const breadcrumbs = [
    { name: 'Главная', url: `${SITE}/` },
    { name: 'Разработка', url },
  ];

  return `${head({
    title: 'Разработка сайтов, ботов и приложений — 18 продуктов | Чимитдоржи',
    description: 'Сайты, боты, мобильные приложения, расширения и виджеты под ключ. 18 продуктов с прозрачными ценами от 15 000 ₽. Связаться в Telegram.',
    keywords: 'разработка под ключ, заказать сайт, заказать бота, разработка мобильного приложения, веб-разработка, разработка приложений Чита',
    canonical: url,
  })}    <script type="application/ld+json">
${breadcrumbJsonLd(breadcrumbs)}
    </script>
</head>
<body>
    <div class="noise-overlay"></div>
    <div class="gradient-blob blob-1"></div>
    <div class="gradient-blob blob-2"></div>

    ${navbar()}

    <main>
        <section class="section dev-hero">
            <div class="container">
                <div class="dev-hero-main">
                    <nav class="breadcrumbs" aria-label="Хлебные крошки">
                        <a href="/">Главная</a>
                        <span class="breadcrumbs-sep">›</span>
                        <span aria-current="page">Разработка</span>
                    </nav>
                    <span class="section-label">18 ПРОДУКТОВ</span>
                    <h1 class="dev-hero-h1">Разработка под ключ</h1>
                    <p class="dev-hero-sub">Сайты, боты, мобильные приложения и всё, что вокруг. С прозрачными тарифами и без воды про «инновационные решения».</p>
                    <div class="dev-hero-actions">
                        <a href="${TG}" target="_blank" rel="noopener" class="btn btn-accent btn-big"><i class="ph ph-telegram-logo"></i> Написать в Telegram</a>
                        <a href="#web" class="btn btn-ghost btn-big">К продуктам ↓</a>
                    </div>
                </div>
                <aside class="dev-hero-side" aria-label="Стек и популярные услуги">
                    <div class="dev-tech-grid" role="list" aria-label="Технологический стек">
                        <div class="dev-tech-tile" role="listitem" title="Telegram"><i class="ph ph-telegram-logo"></i></div>
                        <div class="dev-tech-tile dev-tech-tile-text" role="listitem" title="MAX мессенджер">MAX</div>
                        <div class="dev-tech-tile dev-tech-tile-text" role="listitem" title="ВКонтакте">VK</div>
                        <div class="dev-tech-tile" role="listitem" title="WhatsApp"><i class="ph ph-whatsapp-logo"></i></div>
                        <div class="dev-tech-tile dev-tech-tile-text" role="listitem" title="Flutter">Fl</div>
                        <div class="dev-tech-tile dev-tech-tile-text" role="listitem" title="React Native">RN</div>
                        <div class="dev-tech-tile dev-tech-tile-text" role="listitem" title="Swift">Sw</div>
                        <div class="dev-tech-tile dev-tech-tile-text" role="listitem" title="Kotlin">Kt</div>
                        <div class="dev-tech-tile dev-tech-tile-text" role="listitem" title="Electron">El</div>
                        <div class="dev-tech-tile dev-tech-tile-text" role="listitem" title="Chrome Extension">Cr</div>
                        <div class="dev-tech-tile" role="listitem" title="Web"><i class="ph ph-globe"></i></div>
                        <div class="dev-tech-tile" role="listitem" title="AI"><i class="ph ph-brain"></i></div>
                    </div>
                    <div class="dev-floating-cards">
                        <a href="/development/telegram-bots/" class="dev-floating-card">
                            <i class="ph-fill ph-lightning"></i>
                            <div class="dev-floating-card-body">
                                <div class="dev-floating-card-title">TG-бот</div>
                                <div class="dev-floating-card-price">от 15 000 ₽</div>
                            </div>
                        </a>
                        <a href="/development/sites/" class="dev-floating-card">
                            <i class="ph ph-globe"></i>
                            <div class="dev-floating-card-body">
                                <div class="dev-floating-card-title">Лендинг</div>
                                <div class="dev-floating-card-price">от 30 000 ₽</div>
                            </div>
                        </a>
                        <a href="/development/max-bots/" class="dev-floating-card">
                            <i class="ph ph-robot"></i>
                            <div class="dev-floating-card-body">
                                <div class="dev-floating-card-title">MAX-бот</div>
                                <div class="dev-floating-card-price">от 20 000 ₽</div>
                            </div>
                        </a>
                    </div>
                </aside>
            </div>
        </section>

        <div id="web"></div>
        ${groups}

        <section class="section">
            <div class="container">
                <div class="dev-cta-block">
                    <h2>Не нашли свою задачу?</h2>
                    <p>18 продуктов — это типовые сценарии. Если у вас что-то нестандартное — напишите, разберёмся за 15 минут что подойдёт и сколько будет стоить.</p>
                    <a href="${TG}" target="_blank" rel="noopener" class="btn btn-accent btn-big"><i class="ph ph-telegram-logo"></i> Обсудить проект</a>
                    <p class="dev-cta-note">* Все цены — «от». Финальная стоимость зависит от объёма и сложности, обсуждается после брифа. Информация не является публичной офертой.</p>
                </div>
            </div>
        </section>
    </main>

    ${footer()}
</body>
</html>`;
}

// ---------------- SERVICE PAGE ----------------

function servicePage(svc) {
  const url = `${SITE}/development/${svc.slug}/`;
  const cat = categories[svc.category];
  const related = relatedFor(svc);

  const breadcrumbs = [
    { name: 'Главная', url: `${SITE}/` },
    { name: 'Разработка', url: `${SITE}/development/` },
    { name: svc.title, url },
  ];

  return `${head({
    title: svc.metaTitle,
    description: svc.metaDescription,
    keywords: svc.metaKeywords,
    canonical: url,
  })}    <script type="application/ld+json">
${serviceJsonLd(svc, url)}
    </script>
    <script type="application/ld+json">
${faqJsonLd(svc.faq)}
    </script>
    <script type="application/ld+json">
${breadcrumbJsonLd(breadcrumbs)}
    </script>
</head>
<body>
    <div class="noise-overlay"></div>
    <div class="gradient-blob blob-1"></div>
    <div class="gradient-blob blob-2"></div>

    ${navbar()}

    <main>
        <section class="section dev-hero">
            <div class="container">
                <nav class="breadcrumbs" aria-label="Хлебные крошки">
                    <a href="/">Главная</a>
                    <span class="breadcrumbs-sep">›</span>
                    <a href="/development/">Разработка</a>
                    <span class="breadcrumbs-sep">›</span>
                    <span aria-current="page">${esc(svc.title)}</span>
                </nav>
                <div class="dev-hero-badge">${priceFrom(svc.priceFrom)}</div>
                <h1 class="dev-hero-h1">${esc(svc.h1)}</h1>
                <p class="dev-hero-sub">${esc(svc.heroSubtitle)}</p>
                <div class="dev-simple"><strong>Простыми словами.</strong> ${esc(svc.simpleExplainer)}</div>
                <div class="dev-hero-actions">
                    <a href="${TG}" target="_blank" rel="noopener" class="btn btn-accent btn-big"><i class="ph ph-telegram-logo"></i> Написать в Telegram</a>
                    <a href="#pricing" class="btn btn-ghost btn-big">Тарифы</a>
                </div>
            </div>
        </section>

        <section class="section section-tight">
            <div class="container">
                <span class="section-label">ЗНАКОМО?</span>
                <h2 class="section-heading">Типичные ситуации, с которыми приходят</h2>
                <div class="dev-pains">
${painsHtml(svc.pains)}
                </div>
            </div>
        </section>

        <section class="section section-tight">
            <div class="container">
                <span class="section-label">ЧТО ВХОДИТ</span>
                <h2 class="section-heading">В любой тариф входит</h2>
                <ul class="dev-checklist">
${checklistHtml(svc.checklist)}
                </ul>
            </div>
        </section>

        <section id="pricing" class="section section-tight">
            <div class="container">
                <span class="section-label">ТАРИФЫ</span>
                <h2 class="section-heading">Сколько стоит</h2>
                <p class="section-sub">Цены «от» — финальная стоимость считается после брифа в Telegram.</p>
                <div class="dev-pricing">
${tiersHtml(svc.tiers)}
                </div>
            </div>
        </section>

        <section class="section section-tight">
            <div class="container">
                <span class="section-label">FAQ</span>
                <h2 class="section-heading">Частые вопросы</h2>
                <div class="dev-faqs">
${faqHtml(svc.faq)}
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="dev-cta-block">
                    <h2>Есть вопросы? Напишите в Telegram</h2>
                    <p>За 15 минут разберёмся в задаче, обозначу примерные сроки и стоимость. Без обязательств и продаж.</p>
                    <a href="${TG}" target="_blank" rel="noopener" class="btn btn-accent btn-big"><i class="ph ph-telegram-logo"></i> Написать в Telegram</a>
                    <p class="dev-cta-note">* Информация не является публичной офертой. Финальная стоимость определяется индивидуально.</p>
                </div>
            </div>
        </section>

        ${related.length ? `<section class="section section-tight">
            <div class="container">
                <span class="section-label">${esc(cat.label.toUpperCase())} — ПОХОЖИЕ УСЛУГИ</span>
                <h2 class="section-heading">Смотрите также</h2>
                <div class="dev-grid">${related.map(hubCard).join('\n')}</div>
                <p style="text-align:center;margin-top:24px;"><a href="/development/" class="btn btn-ghost">Все 18 продуктов <i class="ph ph-arrow-right"></i></a></p>
            </div>
        </section>` : ''}
    </main>

    ${footer()}
</body>
</html>`;
}

// ---------------- SITEMAP ----------------

function patchSitemap() {
  const current = fs.readFileSync(OUT_SITEMAP, 'utf8');
  // Strip existing /development/ entries (idempotent rebuild)
  const cleaned = current.replace(/[ \t]*<url>\s*<loc>[^<]*\/development\/[^<]*<\/loc>[\s\S]*?<\/url>\s*/g, '');

  const entries = [];
  entries.push({ loc: `${SITE}/development/`, priority: '0.8' });
  for (const svc of services) {
    entries.push({ loc: `${SITE}/development/${svc.slug}/`, priority: '0.7' });
  }

  const block = entries.map((e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join('\n');

  const next = cleaned.replace(/<\/urlset>\s*$/, `${block}\n</urlset>\n`);
  fs.writeFileSync(OUT_SITEMAP, next, 'utf8');
}

// ---------------- MAIN ----------------

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }

function main() {
  ensureDir(OUT_DIR);
  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), hubPage(), 'utf8');
  console.log('✓ /development/index.html');

  for (const svc of services) {
    const dir = path.join(OUT_DIR, svc.slug);
    ensureDir(dir);
    fs.writeFileSync(path.join(dir, 'index.html'), servicePage(svc), 'utf8');
    console.log(`  ✓ /development/${svc.slug}/index.html`);
  }

  patchSitemap();
  console.log('✓ sitemap.xml patched');

  console.log(`\nGenerated: 1 hub + ${services.length} sub-pages = ${services.length + 1} total`);
}

main();
