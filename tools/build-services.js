// Generates landing pages for every service, the catalog page,
// the homepage services-grid snippet, and the sitemap.
//
// Usage: node tools/build-services.js
//
// Re-run any time tools/services-data.js changes.

const fs = require('fs');
const path = require('path');
const { categories, services } = require('./services-data');

const SITE = 'https://chimitdorzhi.tech';
const ROOT = path.resolve(__dirname, '..');
const OUT_SERVICES = path.join(ROOT, 'services');
const OUT_SITEMAP = path.join(ROOT, 'sitemap.xml');
const OUT_SNIPPET = path.join(ROOT, 'tools', 'services-snippet.html');

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const jsonEsc = (s) => String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"');

const byCategory = (cat) => services.filter((x) => x.c === cat);
const findBySlug = (slug) => services.find((x) => x.s === slug);

// ---------- shared head/nav/footer for sub-pages ----------

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

    <meta property="og:type" content="website">
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

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <link rel="stylesheet" href="/style.css?v=8">
`;
}

function navbar() {
  return `<nav class="navbar" id="navbar">
    <div class="container nav-inner">
        <a href="/" class="logo">CHIMITDORZHI<span class="logo-dot">.</span></a>
        <ul class="nav-links" id="navLinks">
            <li><a href="/#about">Обо мне</a></li>
            <li><a href="/#services">Услуги</a></li>
            <li class="nav-dropdown">
                <a href="/#projects" class="nav-dropdown-toggle">Проекты <i class="ph ph-caret-down nav-caret"></i></a>
                <div class="nav-dropdown-menu" role="menu">
                    <div class="nav-dropdown-label">Наши продукты</div>
                    <a href="https://gerel.space" target="_blank" rel="noopener" class="nav-dropdown-item">
                        <span class="nav-dropdown-icon nav-dropdown-icon--gerel"><i class="ph-fill ph-users-three"></i></span>
                        <span class="nav-dropdown-text">
                            <span class="nav-dropdown-title">Gerel.space</span>
                            <span class="nav-dropdown-desc">Семейная соцсеть</span>
                        </span>
                        <i class="ph ph-arrow-up-right nav-dropdown-arrow"></i>
                    </a>
                    <a href="/universe_buryat/" class="nav-dropdown-item">
                        <span class="nav-dropdown-icon nav-dropdown-icon--logo"><img src="/universe_buryat/logo.png" alt="Вселенная Бурят" loading="lazy"></span>
                        <span class="nav-dropdown-text">
                            <span class="nav-dropdown-title">Вселенная Бурят</span>
                            <span class="nav-dropdown-desc">Культурный портал</span>
                        </span>
                        <i class="ph ph-arrow-right nav-dropdown-arrow"></i>
                    </a>
                </div>
            </li>
            <li><a href="/#cases">Кейсы</a></li>
            <li><a href="/#contact">Контакт</a></li>
        </ul>
        <div class="nav-controls">
            <a href="https://t.me/chimitdorzhi" target="_blank" class="btn btn-accent nav-cta">СВЯЗАТЬСЯ</a>
        </div>
        <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
    <ul>
        <li><a href="/#about">Обо мне</a></li>
        <li><a href="/#services">Услуги</a></li>
        <li><a href="/services/">Каталог услуг</a></li>
        <li class="mobile-has-submenu">
            <details>
                <summary><span>Проекты</span> <i class="ph ph-caret-down"></i></summary>
                <ul class="mobile-submenu">
                    <li><a href="https://gerel.space" target="_blank" rel="noopener" class="mobile-sub-item">
                        <span class="nav-dropdown-icon nav-dropdown-icon--gerel"><i class="ph-fill ph-users-three"></i></span>
                        <span class="mobile-sub-text"><span class="mobile-sub-title">Gerel.space</span><span class="mobile-sub-desc">Семейная соцсеть</span></span>
                    </a></li>
                    <li><a href="/universe_buryat/" class="mobile-sub-item">
                        <span class="nav-dropdown-icon nav-dropdown-icon--logo"><img src="/universe_buryat/logo.png" alt="Вселенная Бурят" loading="lazy"></span>
                        <span class="mobile-sub-text"><span class="mobile-sub-title">Вселенная Бурят</span><span class="mobile-sub-desc">Культурный портал</span></span>
                    </a></li>
                </ul>
            </details>
        </li>
        <li><a href="/#cases">Кейсы</a></li>
        <li><a href="/#contact">Контакт</a></li>
    </ul>
</div>`;
}

function footer() {
  return `<footer id="contact" class="footer">
    <div class="container footer-inner">
        <div class="footer-cta">
            <span class="section-label">КОНТАКТ</span>
            <h2>ЕСТЬ ЗАДАЧА?</h2>
            <h2 class="text-gradient">ДАВАЙТЕ РЕШИМ.</h2>
            <div class="footer-actions">
                <a href="https://t.me/chimitdorzhi" target="_blank" class="btn btn-accent"><i class="ph ph-telegram-logo"></i> Telegram</a>
                <a href="mailto:chimitdorzhi26@gmail.com" class="btn btn-ghost">chimitdorzhi26@gmail.com</a>
                <a href="tel:+79316053007" class="btn btn-ghost"><i class="ph ph-phone"></i> +7 (931) 605-30-07</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p class="footer-copy">&copy; 2026 Дарижапов Чимитдоржи. Все права защищены.</p>
            <div class="footer-legal">
                <p class="footer-legal-name">ИП Дарижапова Рыгзема Баировна</p>
                <p class="footer-legal-details">ИНН: 031101842043 · ОГРНИП: 326750000005553</p>
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
<script src="/script.js?v=8"></script>`;
}

// ---------- service card (used in homepage grid + catalog + related) ----------

function tagsHtml(tags) {
  return `<div class="svc-tags">${tags.map((t) => `<span>${esc(t)}</span>`).join('')}</div>`;
}

function homeCard(svc) {
  return `<a href="/services/${svc.s}/" class="svc-card svc-card-link" data-category="${svc.c}">
    <div class="svc-icon ${svc.ic}"><i class="ph ph-${svc.pi}"></i></div>
    <h3>${esc(svc.n)}</h3>
    <p>${esc(svc.d)}</p>
    <div class="svc-price">${esc(svc.pt)}</div>
    ${tagsHtml(svc.tg)}
    <span class="svc-link">Подробнее <i class="ph ph-arrow-right"></i></span>
</a>`;
}

// ---------- per-service landing page ----------

function serviceJsonLd(svc, url) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.n,
    description: svc.d,
    provider: {
      '@type': 'Person',
      name: 'Чимитдоржи Дарижапов',
      url: SITE,
      telephone: '+7-931-605-30-07',
      email: 'chimitdorzhi26@gmail.com',
    },
    areaServed: ['Россия', 'Чита', 'Москва'],
    offers: {
      '@type': 'Offer',
      price: String(svc.p),
      priceCurrency: 'RUB',
    },
    url,
  };
  return JSON.stringify(ld, null, 2);
}

function breadcrumbJsonLd(svc, url) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Услуги', item: `${SITE}/services/` },
      { '@type': 'ListItem', position: 3, name: svc.n, item: url },
    ],
  };
  return JSON.stringify(ld, null, 2);
}

function relatedSection(svc) {
  const related = (svc.r || []).map(findBySlug).filter(Boolean);
  if (!related.length) return '';
  return `<section class="section">
    <div class="container">
        <div class="section-header"><span class="section-label">СВЯЗАННЫЕ УСЛУГИ</span></div>
        <div class="services-grid">${related.map(homeCard).join('\n')}</div>
    </div>
</section>`;
}

function pricingFactorsSection(svc) {
  if (!svc.pf || !svc.pf.length) return '';
  return `<section class="section section-tight">
    <div class="container">
        <h2 class="service-h2">От чего зависит стоимость</h2>
        <ul class="service-factors">
            ${svc.pf.map((f) => `<li>${esc(f)}</li>`).join('\n            ')}
        </ul>
    </div>
</section>`;
}

function servicePage(svc) {
  const url = `${SITE}/services/${svc.s}/`;
  const cat = categories[svc.c];
  return `${head({ title: svc.t, description: svc.md, keywords: svc.mk, canonical: url })}    <script type="application/ld+json">
${serviceJsonLd(svc, url)}
    </script>
    <script type="application/ld+json">
${breadcrumbJsonLd(svc, url)}
    </script>
</head>
<body>
    <div class="noise-overlay"></div>
    <div class="gradient-blob blob-1"></div>
    <div class="gradient-blob blob-2"></div>

    ${navbar()}

    <main>
        <section class="section service-hero">
            <div class="container">
                <nav class="breadcrumbs" aria-label="Хлебные крошки">
                    <a href="/">Главная</a>
                    <span class="breadcrumbs-sep">›</span>
                    <a href="/services/">Услуги</a>
                    <span class="breadcrumbs-sep">›</span>
                    <span aria-current="page">${esc(svc.n)}</span>
                </nav>
                <div class="service-hero-inner">
                    <span class="section-label">${esc(cat ? cat.label.toUpperCase() : 'УСЛУГА')}</span>
                    <h1 class="service-h1">${esc(svc.n)}</h1>
                    <p class="service-lead">${esc(svc.d)}</p>
                    <div class="service-price-tag">${esc(svc.pt)}</div>
                    <div class="service-actions">
                        <a href="https://t.me/chimitdorzhi" target="_blank" class="btn btn-accent"><i class="ph ph-telegram-logo"></i> Обсудить в Telegram</a>
                        <a href="tel:+79316053007" class="btn btn-ghost"><i class="ph ph-phone"></i> Позвонить</a>
                    </div>
                    ${tagsHtml(svc.tg)}
                </div>
            </div>
        </section>

        ${pricingFactorsSection(svc)}

        ${relatedSection(svc)}

        <section class="section section-tight">
            <div class="container">
                <p class="legal-disclaimer">
                    <small>Информация на странице носит справочный характер и не является публичной офертой. Финальная стоимость определяется индивидуально после согласования технического задания.</small>
                </p>
            </div>
        </section>
    </main>

    ${footer()}
</body>
</html>`;
}

// ---------- catalog page (services/index.html) ----------

function catalogPage() {
  const url = `${SITE}/services/`;
  const groups = Object.entries(categories)
    .sort((a, b) => a[1].order - b[1].order)
    .map(([key, meta]) => {
      const items = byCategory(key);
      if (!items.length) return '';
      return `<section class="section section-tight">
    <div class="container">
        <div class="section-header"><span class="section-label">${esc(meta.label.toUpperCase())}</span></div>
        <div class="services-grid">${items.map(homeCard).join('\n')}</div>
    </div>
</section>`;
    }).join('\n');

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Услуги', item: url },
    ],
  };

  return `${head({
    title: 'Каталог услуг — IT, AI, кибербезопасность | Чимитдоржи Дарижапов',
    description: '39 услуг: разработка, AI/ML, кибербезопасность, цифровизация, обучение. Чита, Москва, удалённо.',
    keywords: 'каталог услуг IT, AI разработка, кибербезопасность, цифровизация бизнеса, IT консалтинг Чита',
    canonical: url,
  })}    <script type="application/ld+json">
${JSON.stringify(ld, null, 2)}
    </script>
</head>
<body>
    <div class="noise-overlay"></div>
    <div class="gradient-blob blob-1"></div>
    <div class="gradient-blob blob-2"></div>

    ${navbar()}

    <main>
        <section class="section">
            <div class="container">
                <nav class="breadcrumbs" aria-label="Хлебные крошки">
                    <a href="/">Главная</a>
                    <span class="breadcrumbs-sep">›</span>
                    <span aria-current="page">Услуги</span>
                </nav>
                <div class="section-header">
                    <span class="section-label">КАТАЛОГ</span>
                    <h1 class="section-heading">Услуги</h1>
                    <p class="section-sub">${services.length} услуг по 8 направлениям: разработка, AI, безопасность, инфраструктура, отрасли, образование, медиа, инновации.</p>
                </div>
            </div>
        </section>

        ${groups}

        <section class="section section-tight">
            <div class="container">
                <p class="legal-disclaimer">
                    <small>Информация носит справочный характер и не является публичной офертой. Финальная стоимость определяется индивидуально после согласования ТЗ.</small>
                </p>
            </div>
        </section>
    </main>

    ${footer()}
</body>
</html>`;
}

// ---------- homepage services snippet ----------

function homeSnippet() {
  const filterButtons = [`<button class="filter-btn active" data-category="all">Все</button>`]
    .concat(
      Object.entries(categories)
        .sort((a, b) => a[1].order - b[1].order)
        .map(([k, v]) => `<button class="filter-btn" data-category="${k}">${esc(v.label)}</button>`),
    ).join('\n                    ');

  const cards = services.map(homeCard).join('\n                    ');

  return `        <section id="services" class="section">
            <div class="container">
                <div class="section-header">
                    <span class="section-label" data-i18n="svc.label">03 / Чем могу помочь</span>
                    <h2 class="section-heading" data-i18n="svc.heading">Услуги</h2>
                </div>
                <div class="services-filter">
                    ${filterButtons}
                </div>
                <div class="services-grid" id="servicesGrid">
                    ${cards}
                </div>
                <p class="services-disclaimer">
                    <small>Информация носит справочный характер и не является публичной офертой. Финальная стоимость определяется индивидуально после согласования ТЗ.</small>
                </p>
                <div class="services-more">
                    <a href="/services/" class="btn btn-ghost">Смотреть весь каталог <i class="ph ph-arrow-right"></i></a>
                </div>
            </div>
        </section>
`;
}

// ---------- sitemap ----------

function sitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const entries = [
    { loc: `${SITE}/`,           priority: '1.0', freq: 'weekly' },
    { loc: `${SITE}/services/`,  priority: '0.9', freq: 'weekly' },
  ];
  for (const svc of services) {
    entries.push({
      loc: `${SITE}/services/${svc.s}/`,
      priority: svc.priority === 'high' ? '0.9' : '0.8',
      freq: 'weekly',
    });
  }
  entries.push(
    { loc: `${SITE}/universe_buryat/`,    priority: '0.7', freq: 'monthly' },
    { loc: `${SITE}/privacy_policy.html`, priority: '0.3', freq: 'yearly' },
    { loc: `${SITE}/oferta.html`,         priority: '0.3', freq: 'yearly' },
    { loc: `${SITE}/terms.html`,          priority: '0.3', freq: 'yearly' },
    { loc: `${SITE}/legal.html`,          priority: '0.3', freq: 'yearly' },
  );

  const urls = entries.map((e) =>
    `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${e.freq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
  ).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

// ---------- write everything ----------

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function main() {
  ensureDir(OUT_SERVICES);

  let pageCount = 0;
  for (const svc of services) {
    const dir = path.join(OUT_SERVICES, svc.s);
    ensureDir(dir);
    fs.writeFileSync(path.join(dir, 'index.html'), servicePage(svc), 'utf8');
    pageCount++;
  }

  fs.writeFileSync(path.join(OUT_SERVICES, 'index.html'), catalogPage(), 'utf8');
  fs.writeFileSync(OUT_SITEMAP, sitemap(), 'utf8');
  fs.writeFileSync(OUT_SNIPPET, homeSnippet(), 'utf8');

  console.log(`✓ Generated ${pageCount} service pages + catalog + sitemap`);
  console.log(`  ${OUT_SERVICES}/<slug>/index.html`);
  console.log(`  ${OUT_SERVICES}/index.html`);
  console.log(`  ${OUT_SITEMAP}`);
  console.log(`  ${OUT_SNIPPET}  (paste into homepage)`);
}

main();
