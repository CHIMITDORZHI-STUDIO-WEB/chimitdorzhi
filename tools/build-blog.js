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

function articlePage(a, published) {
  const url = `${SITE}/blog/${a.slug}/`;
  const cat = CATEGORY_LABELS[a.category] || 'Блог';
  return `${head({ title: a.metaTitle || a.title, description: a.metaDescription, keywords: a.metaKeywords || a.tags.join(', '), canonical: url, ogImage: coverUrl(a) })}    <script type="application/ld+json">
${blogPostingLd(a, url)}
    </script>
    <script type="application/ld+json">
${breadcrumbLd(a, url)}
    </script>
</head>
<body>
    <a href="#main" class="skip-link">Перейти к содержимому</a>
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
                        <span class="blog-meta-cat"><i class="ph ph-bookmark" aria-hidden="true"></i> ${esc(cat)}</span>
                        <span><i class="ph ph-clock" aria-hidden="true"></i> ${a.readingMinutes} мин чтения</span>
                        <time datetime="${a.datePublished}"><i class="ph ph-calendar" aria-hidden="true"></i> ${formatRuDate(a.datePublished)}</time>
                    </div>

                    <h1 class="blog-h1">${esc(a.title)}</h1>

                    <p class="blog-lead">${esc(a.excerpt)}</p>

                    ${tagsHtml(a.tags)}

                    <div class="blog-body">
                        ${a.contentHtml}
                    </div>

                    ${servicesOfferCard(a)}

                    <div class="blog-cta-card blog-cta-card-final">
                        <div class="blog-cta-card-body">
                            <h3>Нужен профессиональный аудит 152-ФЗ?</h3>
                            <p>Отчёт за 1–3 дня, устранение нарушений под ключ. От 5 000 ₽.</p>
                        </div>
                        <div class="blog-cta-card-actions">
                            <a href="${esc(a.ctaInternal ? a.ctaInternal.url : '/audit/')}" class="btn btn-accent"><i class="ph ph-shield-check" aria-hidden="true"></i> ${esc(a.ctaInternal ? a.ctaInternal.label : 'Заказать аудит')}</a>
                            <a href="https://t.me/chimitdorzhi" target="_blank" rel="noopener" class="btn btn-ghost"><i class="ph ph-telegram-logo" aria-hidden="true"></i> Написать в Telegram</a>
                        </div>
                    </div>

                    ${relatedHtml(a, published)}
                </article>

                ${tocHtml(a.toc)}
            </div>
        </div>
    </main>

    ${footer()}
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

// ---------- sitemap update ----------

function updateSitemap(published) {
  const today = new Date().toISOString().slice(0, 10);
  let xml = fs.readFileSync(OUT_SITEMAP, 'utf8');

  // Strip any existing /blog/ entries (idempotent re-runs).
  xml = xml.replace(/\s*<url>\s*<loc>https:\/\/chimitdorzhi\.tech\/blog[^<]*<\/loc>[\s\S]*?<\/url>/g, '');

  // Build new entries
  const blogEntries = [
    { loc: `${SITE}/blog/`, lastmod: today, freq: 'weekly', priority: '0.8' },
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
