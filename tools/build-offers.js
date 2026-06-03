// Генератор раздела «Предложения» (/predlozheniya/).
// Читает tools/offers-data.js → хаб + страница каждого предложения.
// Запуск: node tools/build-offers.js

const fs = require('fs');
const path = require('path');
const offers = require('./offers-data.js');

const SITE = 'https://chimitdorzhi.tech';
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'predlozheniya');

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Ссылка в Telegram с предзаполненным текстом (best-effort: где клиент поддерживает —
// текст подставится, иначе просто откроется чат).
const TG = 'https://t.me/chimitdorzhi';
const tg = (text) => `${TG}?text=${encodeURIComponent(text)}`;

// Этапы работы — одинаковы для всех предложений.
const PROCESS = [
  { icon: 'ph-chat-circle-text', t: 'Заявка и разговор', d: 'Пишете мне — обсуждаем задачу, цели и бюджет. Без форм и спама.' },
  { icon: 'ph-clipboard-text', t: 'Бриф и смета', d: 'Уточняю детали, фиксирую состав и называю точную цену и срок.' },
  { icon: 'ph-code', t: 'Разработка', d: 'Делаю решение, показываю промежуточные результаты, вношу правки.' },
  { icon: 'ph-rocket-launch', t: 'Запуск', d: 'Внедряю, тестируем на реальных задачах, обучаю вашу команду.' },
  { icon: 'ph-lifebuoy', t: 'Поддержка', d: 'Сопровождаю после запуска и развиваю под новые задачи.' },
];

function processBlock() {
  const steps = PROCESS.map((s, i) => `
            <div class="offer-step">
                <div class="offer-step-num">${i + 1}</div>
                <div class="offer-step-body">
                    <div class="offer-step-title"><i class="ph-fill ${s.icon}" aria-hidden="true"></i> ${esc(s.t)}</div>
                    <p>${esc(s.d)}</p>
                </div>
            </div>`).join('\n');
  return `<div class="offer-block"><h2>Как проходит работа</h2><div class="offer-steps">${steps}</div></div>`;
}

// ---------- обложки для предложений (1200×630) ----------
const OFFER_GRADIENTS = {
  'Автоматизация': ['#0e7490', '#22d3ee'],
  'Боты и AI': ['#5b21b6', '#a855f7'],
  'Геймификация': ['#9f1239', '#fb7185'],
};
function escXml(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}
function wrapTitle(title, maxChars = 28) {
  const words = String(title).split(/\s+/);
  const lines = []; let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > maxChars) { if (cur) lines.push(cur); cur = w; } else { cur = (cur + ' ' + w).trim(); }
  }
  if (cur) lines.push(cur);
  return lines.slice(0, 4);
}
function offerSvg(o) {
  const [c1, c2] = OFFER_GRADIENTS[o.segment] || ['#1e293b', '#64748b'];
  const lines = wrapTitle(o.title, 26);
  const lh = 76; const startY = 250 - (lines.length - 2) * (lh / 2);
  const titleSvg = lines.map((l, i) => `<text x="80" y="${startY + i * lh}" font-family="Arial, sans-serif" font-weight="800" font-size="60" fill="#ffffff">${escXml(l)}</text>`).join('\n  ');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient>
  <radialGradient id="glow" cx="80%" cy="20%" r="50%"><stop offset="0%" stop-color="#ffffff" stop-opacity="0.18"/><stop offset="100%" stop-color="#ffffff" stop-opacity="0"/></radialGradient></defs>
  <rect width="1200" height="630" fill="url(#bg)"/><rect width="1200" height="630" fill="url(#glow)"/>
  <text x="80" y="100" font-family="Arial, sans-serif" font-weight="700" font-size="24" fill="#ffffff" opacity="0.9" letter-spacing="2">ПРЕДЛОЖЕНИЕ · ${escXml((o.niche || '').toUpperCase())}</text>
  <line x1="80" y1="120" x2="200" y2="120" stroke="#ffffff" stroke-width="3" opacity="0.7"/>
  ${titleSvg}
  <line x1="80" y1="520" x2="1120" y2="520" stroke="#ffffff" stroke-width="2" opacity="0.25"/>
  <text x="80" y="572" font-family="Arial, sans-serif" font-weight="700" font-size="30" fill="#ffffff">Чимитдоржи Дарижапов</text>
  <text x="80" y="606" font-family="Arial, sans-serif" font-weight="400" font-size="22" fill="#ffffff" opacity="0.8">chimitdorzhi.tech / предложения</text>
</svg>`;
}
async function generateCovers(list) {
  let sharp;
  try { sharp = require('sharp'); } catch { console.log('  ⚠ sharp недоступен — пропуск обложек'); return; }
  for (const o of list) {
    const dir = path.join(OUT, o.slug);
    fs.mkdirSync(dir, { recursive: true });
    await sharp(Buffer.from(offerSvg(o))).png({ compressionLevel: 9 }).toFile(path.join(dir, 'cover.png'));
  }
  console.log(`  обложки: ${list.length}`);
}

function head({ title, description, canonical, ogImage = `${SITE}/hero-photo.webp` }) {
  return `<!DOCTYPE html>
<html lang="ru" data-theme="dark" data-lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="theme-color" content="#121218">
    <link rel="canonical" href="${canonical}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${canonical}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    <meta property="og:image" content="${ogImage}">
    <meta property="og:locale" content="ru_RU">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
    <link rel="preload" href="/assets/fonts/InterVariable.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/assets/phosphor/Phosphor.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="/assets/phosphor/regular.css" media="print" onload="this.media='all'">
    <link rel="stylesheet" href="/assets/phosphor/fill.css" media="print" onload="this.media='all'">
    <noscript><link rel="stylesheet" href="/assets/phosphor/regular.css"><link rel="stylesheet" href="/assets/phosphor/fill.css"></noscript>
    <link rel="stylesheet" href="/style.css?v=33">
`;
}

function navbar() {
  return `<nav class="navbar" id="navbar">
    <div class="container nav-inner">
        <a href="/" class="logo">CHIMITDORZHI<span class="logo-dot">.</span></a>
        <ul class="nav-links" id="navLinks">
            <li><a href="/#about">Обо мне</a></li>
            <li><a href="/#services">Услуги</a></li>
            <li><a href="/predlozheniya/" class="nav-link-highlight">Предложения</a></li>
            <li><a href="/blog/">Блог</a></li>
            <li><a href="/#cases">Кейсы</a></li>
            <li><a href="/#contact">Контакт</a></li>
        </ul>
        <div class="nav-controls">
            <a href="https://t.me/chimitdorzhi" target="_blank" rel="noopener" class="btn btn-accent nav-cta">Связаться</a>
        </div>
        <button class="burger" id="burger" aria-label="Меню" aria-expanded="false" aria-controls="mobileMenu"><span></span><span></span><span></span></button>
    </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
    <ul>
        <li><a href="/#about">Обо мне</a></li>
        <li><a href="/#services">Услуги</a></li>
        <li><a href="/predlozheniya/">Предложения</a></li>
        <li><a href="/blog/">Блог</a></li>
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
                <a href="https://t.me/chimitdorzhi" target="_blank" rel="noopener" class="btn btn-accent"><i class="ph ph-telegram-logo" aria-hidden="true"></i> Telegram</a>
                <a href="https://vk.com/chimitdorzhi" target="_blank" rel="noopener" class="btn btn-ghost"><i class="ph ph-chat-circle-dots" aria-hidden="true"></i> ВКонтакте</a>
                <a href="tel:+79316053007" class="btn btn-ghost"><i class="ph ph-phone" aria-hidden="true"></i> +7 (931) 605-30-07</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p class="footer-copy">&copy; 2026 Дарижапов Чимитдоржи. Все права защищены.</p>
            <div class="footer-links">
                <a href="/about/" class="footer-policy-link">Об авторе</a>
                <span class="footer-legal-sep"> · </span>
                <a href="/predlozheniya/" class="footer-policy-link">Предложения</a>
                <span class="footer-legal-sep"> · </span>
                <a href="/blog/" class="footer-policy-link">Блог</a>
                <span class="footer-legal-sep"> · </span>
                <a href="/privacy_policy.html" class="footer-policy-link">Политика конфиденциальности</a>
            </div>
        </div>
    </div>
</footer>
<script src="/i18n.js?v=28" defer></script>
<script src="/script.js?v=27" defer></script>`;
}

function ctaBlock(o) {
  return `<div class="offer-cta-card">
        <div class="offer-cta-body">
            <h3>Обсудим ваше «${esc(o.niche)}»?</h3>
            <p>Расскажите о задаче — предложу решение и точную цену под вас. Без форм: пишите или звоните напрямую.</p>
        </div>
        <div class="offer-cta-actions">
            <a href="${tg(`Здравствуйте! Интересует решение «${o.title}» (${o.niche}).`)}" target="_blank" rel="noopener" class="btn btn-accent"><i class="ph ph-telegram-logo" aria-hidden="true"></i> Написать в Telegram</a>
            <a href="https://vk.com/chimitdorzhi" target="_blank" rel="noopener" class="btn btn-ghost"><i class="ph ph-chat-circle-dots" aria-hidden="true"></i> ВКонтакте</a>
            <a href="tel:+79316053007" class="btn btn-ghost"><i class="ph ph-phone" aria-hidden="true"></i> Позвонить</a>
        </div>
    </div>`;
}

function offerLd(o, url) {
  const obj = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: o.title,
    serviceType: o.niche,
    description: o.metaDescription,
    provider: { '@id': `${SITE}/#organization` },
    areaServed: { '@type': 'Country', name: 'Россия' },
    url,
  };
  if (o.priceMin) {
    obj.offers = {
      '@type': 'Offer',
      priceCurrency: 'RUB',
      price: String(o.priceMin),
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'RUB', minPrice: o.priceMin },
      availability: 'https://schema.org/InStock',
      url,
    };
  }
  return JSON.stringify(obj, null, 2);
}

function faqLd(o) {
  if (!o.faq || o.faq.length < 2) return '';
  const json = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: o.faq.map((p) => ({ '@type': 'Question', name: p.q, acceptedAnswer: { '@type': 'Answer', text: p.a } })),
  }, null, 2);
  return `    <script type="application/ld+json">\n${json}\n    </script>\n`;
}

function breadcrumbLd(o, url) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Предложения', item: `${SITE}/predlozheniya/` },
      { '@type': 'ListItem', position: 3, name: o.title, item: url },
    ],
  }, null, 2);
}

function offerPage(o) {
  const url = `${SITE}/predlozheniya/${o.slug}/`;
  const includes = (o.includes || []).map((i) => `<li><i class="ph-fill ph-check-circle" aria-hidden="true"></i> ${esc(i)}</li>`).join('\n');
  const result = (o.result || []).map((r) => `<li><i class="ph-fill ph-trend-up" aria-hidden="true"></i> ${esc(r)}</li>`).join('\n');
  const packages = (o.packages || []).map((p) => `
        <div class="offer-pkg">
            <div class="offer-pkg-name">${esc(p.name)}</div>
            <div class="offer-pkg-price">${esc(p.priceFrom)}</div>
            <ul>${p.items.map((it) => `<li>${esc(it)}</li>`).join('')}</ul>
            <a href="${tg(`Здравствуйте! Интересует пакет «${p.name}» — ${o.title}.`)}" target="_blank" rel="noopener" class="btn btn-ghost offer-pkg-btn">Обсудить «${esc(p.name)}»</a>
        </div>`).join('\n');
  const faq = (o.faq || []).map((p) => `<div class="offer-faq-item"><p class="offer-faq-q">${esc(p.q)}</p><p class="offer-faq-a">${esc(p.a)}</p></div>`).join('\n');
  const related = [...(o.relatedServices || []), ...(o.relatedBlog || [])]
    .map((r) => `<a href="${r.url}" class="offer-related-link">${esc(r.label)} <i class="ph ph-arrow-right" aria-hidden="true"></i></a>`).join('\n');
  const forWhom = (o.forWhom || []).map((x) => `<li><i class="ph-fill ph-check-circle" aria-hidden="true"></i> ${esc(x)}</li>`).join('');
  const notInc = (o.notIncluded || []).map((x) => `<li><i class="ph ph-x-circle" aria-hidden="true"></i> ${esc(x)}</li>`).join('');
  const fitBlock = (forWhom || notInc) ? `<div class="offer-block"><h2>Кому подходит</h2><div class="offer-fit"><div class="offer-fit-col offer-fit-yes"><h3>Подходит</h3><ul>${forWhom}</ul></div><div class="offer-fit-col offer-fit-no"><h3>Не входит</h3><ul>${notInc}</ul></div></div></div>` : '';

  return `${head({ title: o.metaTitle, description: o.metaDescription, canonical: url, ogImage: `${SITE}/predlozheniya/${o.slug}/cover.png` })}    <script type="application/ld+json">
${offerLd(o, url)}
    </script>
    <script type="application/ld+json">
${breadcrumbLd(o, url)}
    </script>
${faqLd(o)}</head>
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
                    <a href="/">Главная</a><span class="breadcrumbs-sep">›</span>
                    <a href="/predlozheniya/">Предложения</a><span class="breadcrumbs-sep">›</span>
                    <span aria-current="page">${esc(o.niche)}</span>
                </nav>
                <div class="offer-hero">
                    <span class="offer-eyebrow"><i class="ph-fill ${esc(o.icon)}" aria-hidden="true"></i> ${esc(o.niche)}</span>
                    <h1 class="offer-title">${esc(o.title)}</h1>
                    <p class="offer-tagline">${esc(o.tagline)}</p>
                    <div class="offer-meta">
                        <span class="offer-price">${esc(o.priceFrom)}</span>
                        <span class="offer-timeline"><i class="ph ph-clock" aria-hidden="true"></i> Срок: ${esc(o.timeline)}</span>
                    </div>
                    <div class="offer-hero-actions">
                        <a href="${tg(`Здравствуйте! Интересует «${o.title}» (${o.priceFrom}).`)}" target="_blank" rel="noopener" class="btn btn-accent"><i class="ph ph-telegram-logo" aria-hidden="true"></i> Обсудить задачу</a>
                        ${(o.packages || []).length ? '<a href="#packages" class="btn btn-ghost">Смотреть пакеты</a>' : '<a href="https://vk.com/chimitdorzhi" target="_blank" rel="noopener" class="btn btn-ghost"><i class="ph ph-chat-circle-dots" aria-hidden="true"></i> ВКонтакте</a>'}
                    </div>
                </div>

                ${o.bodyHtml ? `<div class="offer-block"><div class="blog-body offer-body">${o.bodyHtml}</div></div>` : `
                <div class="offer-block">
                    <h2>В чём проблема</h2>
                    <p>${esc(o.problem)}</p>
                </div>

                <div class="offer-block">
                    <h2>Что входит в решение</h2>
                    <ul class="offer-list">${includes}</ul>
                </div>

                ${result ? `<div class="offer-block"><h2>Результат для бизнеса</h2><ul class="offer-list offer-list--result">${result}</ul></div>` : ''}

                ${fitBlock}

                ${packages ? `<div class="offer-block" id="packages"><h2>Пакеты</h2><div class="offer-pkgs">${packages}</div><p class="offer-note">Итоговая цена зависит от ваших процессов и интеграций. Точную смету назову после короткого разговора.</p></div>` : ''}`}

                ${processBlock()}

                ${faq ? `<div class="offer-block"><h2>Частые вопросы</h2>${faq}</div>` : ''}

                ${related ? `<div class="offer-block"><h2>Связанные услуги и статьи</h2><div class="offer-related">${related}</div></div>` : ''}

                ${ctaBlock(o)}
            </div>
        </section>
    </main>
    ${footer()}
</body>
</html>`;
}

function hubPage(list) {
  const url = `${SITE}/predlozheniya/`;
  const segments = [...new Set(list.map((o) => o.segment).filter(Boolean))];
  const cards = list.map((o) => `
            <a href="/predlozheniya/${o.slug}/" class="offer-card" data-segment="${esc(o.segment || '')}">
                <span class="offer-card-icon"><i class="ph-fill ${esc(o.icon)}" aria-hidden="true"></i></span>
                <span class="offer-card-niche">${esc(o.niche)}</span>
                <span class="offer-card-title">${esc(o.title)}</span>
                <span class="offer-card-tagline">${esc(o.tagline)}</span>
                <span class="offer-card-foot"><span class="offer-card-price">${esc(o.priceFrom)}</span><span class="offer-card-more">Подробнее <i class="ph ph-arrow-right" aria-hidden="true"></i></span></span>
            </a>`).join('\n');
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Предложения и готовые решения для бизнеса',
    url,
    description: 'Готовые IT-решения под нишу: онлайн-запись, боты, CRM, автоматизация и AI. Пакеты с ценой «от» и сроками.',
    inLanguage: 'ru',
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Предложения', item: url },
    ],
  };
  return `${head({ title: 'Предложения — готовые IT-решения для бизнеса с ценами | Чимитдоржи Дарижапов', description: 'Готовые решения под нишу: онлайн-запись, чат-боты, CRM, автоматизация и AI. Пакеты с ценой «от» и сроком внедрения. Под ключ для бизнеса в России.', canonical: url })}    <script type="application/ld+json">
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
                    <a href="/">Главная</a><span class="breadcrumbs-sep">›</span>
                    <span aria-current="page">Предложения</span>
                </nav>
                <div class="section-header">
                    <span class="section-label">ПРЕДЛОЖЕНИЯ</span>
                    <h1 class="section-heading">Готовые решения для <span class="text-gradient">бизнеса</span></h1>
                    <p class="section-sub">Упакованные IT-решения под вашу нишу: онлайн-запись, боты, CRM, автоматизация и AI. С понятным составом, ценой «от» и сроком. Точную смету называю после короткого разговора — без форм и спама.</p>
                </div>
                ${segments.length > 1 ? `<div class="offer-filter" role="group" aria-label="Фильтр по нишам">
                    <button class="offer-chip active" data-seg="all">Все <span>${list.length}</span></button>
                    ${segments.map((s) => `<button class="offer-chip" data-seg="${esc(s)}">${esc(s)}</button>`).join('\n                    ')}
                </div>` : ''}
                <div class="offer-grid" id="offerGrid">
${cards}
                </div>
            </div>
        </section>
    </main>
    ${footer()}
    <script>
    (function(){
      var chips=document.querySelectorAll('.offer-chip');
      var cards=document.querySelectorAll('#offerGrid .offer-card');
      if(!chips.length)return;
      chips.forEach(function(c){c.addEventListener('click',function(){
        chips.forEach(function(x){x.classList.remove('active');});
        c.classList.add('active');
        var seg=c.getAttribute('data-seg');
        cards.forEach(function(card){
          card.style.display=(seg==='all'||card.getAttribute('data-segment')===seg)?'':'none';
        });
      });});
    })();
    </script>
</body>
</html>`;
}

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }

function updateSitemap(pub) {
  const SITEMAP = path.join(ROOT, 'sitemap.xml');
  if (!fs.existsSync(SITEMAP)) return;
  const today = new Date().toISOString().slice(0, 10);
  let xml = fs.readFileSync(SITEMAP, 'utf8');
  // убрать прежние записи /predlozheniya (идемпотентность)
  xml = xml.replace(/\s*<url>\s*<loc>https:\/\/chimitdorzhi\.tech\/predlozheniya[^<]*<\/loc>[\s\S]*?<\/url>/g, '');
  const entries = [
    { loc: `${SITE}/predlozheniya/`, freq: 'weekly', priority: '0.8' },
    ...pub.map((o) => ({ loc: `${SITE}/predlozheniya/${o.slug}/`, freq: 'monthly', priority: '0.8' })),
  ];
  const block = entries.map((e) =>
    `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${e.freq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
  ).join('\n');
  xml = xml.replace(/<\/urlset>\s*$/m, `${block}\n</urlset>\n`);
  fs.writeFileSync(SITEMAP, xml, 'utf8');
}

async function main() {
  const pub = offers.filter((o) => o && o.published !== false);
  ensureDir(OUT);
  await generateCovers(pub);
  fs.writeFileSync(path.join(OUT, 'index.html'), hubPage(pub), 'utf8');
  for (const o of pub) {
    const dir = path.join(OUT, o.slug);
    ensureDir(dir);
    fs.writeFileSync(path.join(dir, 'index.html'), offerPage(o), 'utf8');
  }
  updateSitemap(pub);
  console.log(`OK: предложений ${pub.length} + хаб → ${OUT}; sitemap обновлён`);
}

main();
