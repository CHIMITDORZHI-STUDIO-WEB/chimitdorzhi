// Генератор раздела «Предложения» (/predlozheniya/).
// Читает tools/offers-data.js → хаб + страница каждого предложения.
// Запуск: node tools/build-offers.js

const fs = require('fs');
const { clampTitle, clampDesc } = require("./meta-clamp.js");
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

// ---------- обложки для предложений (1200×630), редакционный стиль ----------
const CREAM = '#f4f1ea', INK = '#16130f', COBALT = '#1e4fd6';
const SEGMENT_ACCENT = {
  'Автоматизация': '#0e7490', // петроль
  'Боты и AI': '#6d28d9',     // фиолет
  'Геймификация': '#be123c',  // роза-красный
  'Право': '#1e4fd6',         // кобальт
  'Флагманы': '#b8862b',      // золото
};
const COVER_FONT = "'Manrope', 'Inter', 'DejaVu Sans', 'Liberation Sans', Arial, sans-serif";
function escXml(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}
function wrapTitle(title, maxChars = 26) {
  const words = String(title).split(/\s+/);
  const lines = []; let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > maxChars && cur) { lines.push(cur); cur = w; } else { cur = (cur + ' ' + w).trim(); }
    if (lines.length >= 4) break;
  }
  if (cur && lines.length < 4) lines.push(cur);
  return lines.slice(0, 4);
}
function offerSvg(o) {
  const accent = SEGMENT_ACCENT[o.segment] || COBALT;
  const lines = wrapTitle(o.title, 26);
  const lh = 76; const startY = 300 - (lines.length - 1) * (lh / 2);
  const titleSvg = lines.map((l, i) => `<text x="92" y="${startY + i * lh}" font-family="${COVER_FONT}" font-weight="800" font-size="62" letter-spacing="-1.5" fill="${INK}">${escXml(l)}</text>`).join('\n  ');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs><radialGradient id="tint" cx="100%" cy="0%" r="70%"><stop offset="0%" stop-color="${accent}" stop-opacity="0.10"/><stop offset="100%" stop-color="${accent}" stop-opacity="0"/></radialGradient></defs>
  <rect width="1200" height="630" fill="${CREAM}"/><rect width="1200" height="630" fill="url(#tint)"/>
  <circle cx="1120" cy="120" r="220" fill="${accent}" fill-opacity="0.06"/>
  <rect x="0" y="0" width="14" height="630" fill="${accent}"/>
  <text x="92" y="120" font-family="${COVER_FONT}" font-weight="800" font-size="26" fill="${accent}" letter-spacing="3">ПРЕДЛОЖЕНИЕ · ${escXml((o.niche || '').toUpperCase())}</text>
  <rect x="92" y="138" width="64" height="4" rx="2" fill="${accent}"/>
  ${titleSvg}
  <line x1="92" y1="520" x2="1108" y2="520" stroke="${INK}" stroke-width="2" stroke-opacity="0.14"/>
  <text x="92" y="572" font-family="${COVER_FONT}" font-weight="800" font-size="30" fill="${INK}">Чимитдоржи Дарижапов</text>
  <text x="92" y="606" font-family="${COVER_FONT}" font-weight="500" font-size="22" fill="${INK}" opacity="0.55">chimitdorzhi.tech · предложения</text>
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
  title = clampTitle(title); description = clampDesc(description);
  return `<!DOCTYPE html>
<html lang="ru" data-theme="dark" data-lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="theme-color" content="#f4f1ea">
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
    <link rel="stylesheet" href="/style.css?v=44">
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
            <li><a href="/infografika/">Инфографика</a></li>
            <li><a href="/#cases">Кейсы</a></li>
            <li><a href="/#contact">Контакт</a></li>
        </ul>
        <div class="nav-controls">
            <button class="nav-search-btn js-search-open" type="button" aria-label="Поиск по сайту"><i class="ph ph-magnifying-glass" aria-hidden="true"></i></button>
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
            <li><a href="/infografika/">Инфографика</a></li>
        <li><a href="/#contact">Контакт</a></li>
    </ul>
</div>
${require('./search-modal.js')}`;
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
            <h3>Обсудим задачу в нише «${esc(o.niche)}»?</h3>
            <p>Бесплатная консультация — это 20–30 минут разговора: разберём вашу ситуацию, я скажу, что реально стоит делать (иногда — что делать пока не нужно), назову срок и точную цену под вас. Ни к чему не обязывает. Без форм — пишите или звоните напрямую.</p>
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

  // ---- Экспертные блоки (рендерятся только если поля заданы) ----
  const pains = (o.pains || []).map((x) => `<li><i class="ph-fill ph-warning-circle" aria-hidden="true"></i> ${esc(x)}</li>`).join('\n');
  const painsBlock = pains ? `<div class="offer-block"><h2>Знакомо?</h2><ul class="offer-list offer-list--pain">${pains}</ul></div>` : '';

  const baRows = (o.beforeAfter || []).map((r) => `<tr><td>${esc(r.before)}</td><td>${esc(r.after)}</td></tr>`).join('\n');
  const beforeAfterBlock = baRows ? `<div class="offer-block"><h2>Как сейчас и как будет</h2><table class="blog-table"><thead><tr><th>Сейчас, без решения</th><th>С решением</th></tr></thead><tbody>${baRows}</tbody></table></div>` : '';

  const deliver = (o.deliverables || []).map((x) => `<li><i class="ph-fill ph-check-circle" aria-hidden="true"></i> ${esc(x)}</li>`).join('\n');
  const deliverablesBlock = deliver ? `<div class="offer-block"><h2>Что вы получите на руки</h2><ul class="offer-list">${deliver}</ul></div>` : '';

  const customSteps = (o.process || []).map((s, i) => `
            <div class="offer-step">
                <div class="offer-step-num">${i + 1}</div>
                <div class="offer-step-body">
                    <div class="offer-step-title">${esc(s.title)}${s.days ? ` <span class="offer-step-days">(${esc(s.days)})</span>` : ''}</div>
                    <p>${esc(s.detail)}</p>
                </div>
            </div>`).join('\n');
  const customProcessBlock = customSteps ? `<div class="offer-block"><h2>Как мы работаем</h2><div class="offer-steps">${customSteps}</div></div>` : '';

  const objections = (o.objections || []).map((p) => `<div class="offer-faq-item"><p class="offer-faq-q">${esc(p.q)}</p><p class="offer-faq-a">${esc(p.a)}</p></div>`).join('\n');
  const objectionsBlock = objections ? `<div class="offer-block"><h2>А если…</h2>${objections}</div>` : '';

  const whyMeBlock = o.whyMe ? `<div class="offer-block"><h2>Почему со мной</h2><div class="blog-body offer-body"><p>${esc(o.whyMe)}</p></div></div>` : '';

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
                ${o.problem ? `<div class="offer-block"><h2>В чём проблема</h2><p>${esc(o.problem)}</p></div>` : ''}

                ${painsBlock}

                ${beforeAfterBlock}

                ${includes ? `<div class="offer-block"><h2>Что входит в решение</h2><ul class="offer-list">${includes}</ul></div>` : ''}

                ${deliverablesBlock}

                ${result ? `<div class="offer-block"><h2>Результат для бизнеса</h2><ul class="offer-list offer-list--result">${result}</ul></div>` : ''}

                ${fitBlock}

                ${whyMeBlock}

                ${objectionsBlock}

                ${packages ? `<div class="offer-block" id="packages"><h2>Пакеты</h2><div class="offer-pkgs">${packages}</div><p class="offer-note">Итоговая цена зависит от ваших процессов и интеграций. Точную смету назову после короткого разговора.</p></div>` : ''}`}

                ${o.process ? customProcessBlock : processBlock()}

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

// Группировка рубрик для удобной навигации заказчика
const SEGMENT_GROUPS = [
  { label: 'Отрасли', segs: ['Розница и торговля', 'Бытовые услуги', 'Красота и здоровье', 'HoReCa и общепит', 'Авто и транспорт', 'Туризм и гостеприимство', 'Недвижимость', 'Развлечения и досуг', 'Спорт и фитнес', 'Медицина и MedTech', 'Образование и EdTech', 'АПК и фермерство', 'Производство и стройка', 'Логистика и склад', 'Маркетплейсы и e-commerce', 'Госсектор', 'Этнокультура и наследие'] },
  { label: 'AI и технологии', segs: ['AI-ассистенты для работы', 'Запуск продукта и стартап', 'Корпоративный AI', 'Боты и AI', 'Зрение и роботизация'] },
  { label: 'Под задачу', segs: ['Мессенджер MAX', 'Маркетинг и трафик', 'Вовлечение и вирусный рост', 'Геймификация бизнеса', 'Геймификация под нишу', 'Медиа, контент и креаторы', 'Финтех и платежи', 'HR и команда', 'Безопасность и аудит', 'Право и документы', 'Комплексные платформы', 'Геймификация', 'Сетевой бизнес (MLM)'] },
];

// Иконка для каждого сегмента (Phosphor), чтобы чипы читались как на блоге/инфографике
const SEGMENT_ICONS = {
  'Розница и торговля': 'ph-shopping-cart', 'Бытовые услуги': 'ph-wrench', 'Красота и здоровье': 'ph-scissors',
  'HoReCa и общепит': 'ph-fork-knife', 'Авто и транспорт': 'ph-car', 'Туризм и гостеприимство': 'ph-airplane-tilt',
  'Недвижимость': 'ph-buildings', 'Развлечения и досуг': 'ph-confetti', 'Спорт и фитнес': 'ph-barbell',
  'Медицина и MedTech': 'ph-first-aid', 'Образование и EdTech': 'ph-graduation-cap', 'АПК и фермерство': 'ph-plant',
  'Производство и стройка': 'ph-factory', 'Логистика и склад': 'ph-truck', 'Маркетплейсы и e-commerce': 'ph-storefront',
  'Госсектор': 'ph-bank', 'Этнокультура и наследие': 'ph-globe-hemisphere-east',
  'AI-ассистенты для работы': 'ph-sparkle', 'Запуск продукта и стартап': 'ph-rocket-launch', 'Корпоративный AI': 'ph-brain',
  'Боты и AI': 'ph-robot', 'Зрение и роботизация': 'ph-eye',
  'Мессенджер MAX': 'ph-chat-circle-dots', 'Маркетинг и трафик': 'ph-megaphone', 'Вовлечение и вирусный рост': 'ph-trend-up',
  'Геймификация бизнеса': 'ph-game-controller', 'Геймификация под нишу': 'ph-trophy', 'Геймификация': 'ph-game-controller',
  'Медиа, контент и креаторы': 'ph-microphone', 'Финтех и платежи': 'ph-credit-card', 'HR и команда': 'ph-users-three',
  'Безопасность и аудит': 'ph-shield-check', 'Право и документы': 'ph-scales', 'Комплексные платформы': 'ph-stack',
  'Сетевой бизнес (MLM)': 'ph-share-network',
};
const segIcon = (s) => SEGMENT_ICONS[s] || 'ph-tag';

function buildFilterGroups(list) {
  const counts = {};
  list.forEach((o) => { if (o.segment) counts[o.segment] = (counts[o.segment] || 0) + 1; });
  const placed = new Set();
  const groups = SEGMENT_GROUPS.map((g) => ({
    label: g.label,
    segs: g.segs.filter((s) => { if (counts[s]) { placed.add(s); return true; } return false; }),
  })).filter((g) => g.segs.length);
  // Любые сегменты, не попавшие в карту групп — в «Прочее», чтобы ничего не потерять
  const rest = Object.keys(counts).filter((s) => !placed.has(s));
  if (rest.length) groups.push({ label: 'Прочее', segs: rest });
  return { groups, counts };
}

function hubPage(list) {
  const url = `${SITE}/predlozheniya/`;
  const segments = [...new Set(list.map((o) => o.segment).filter(Boolean))];
  const { groups: filterGroups, counts: segCounts } = buildFilterGroups(list);
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
                ${searchBox()}
                ${segments.length > 1 ? `<div class="offer-filter" role="group" aria-label="Фильтр по рубрикам">
                    <div class="offer-filter-row offer-filter-all">
                        <button class="offer-chip active" data-seg="all"><i class="ph ph-squares-four" aria-hidden="true"></i> Все решения <span>${list.length}</span></button>
                    </div>
                    ${filterGroups.map((g) => `<div class="offer-filter-group">
                        <span class="offer-filter-label">${esc(g.label)}</span>
                        <div class="offer-filter-row">
                            ${g.segs.slice().sort((a, b) => (segCounts[b] || 0) - (segCounts[a] || 0)).map((s) => `<button class="offer-chip" data-seg="${esc(s)}"><i class="ph ${segIcon(s)}" aria-hidden="true"></i> ${esc(s)} <span>${segCounts[s]}</span></button>`).join('\n                            ')}
                        </div>
                    </div>`).join('\n                    ')}
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
    ${searchScript()}
</body>
</html>`;
}

// ---------- Поиск по сайту (статьи + предложения), клиентский ----------
function searchBox() {
  return `<div class="site-search">
                    <i class="ph ph-magnifying-glass site-search-ic" aria-hidden="true"></i>
                    <input id="siteSearch" type="search" placeholder="Поиск по статьям и предложениям…" autocomplete="off" aria-label="Поиск по сайту">
                    <div id="searchResults" class="search-results" hidden></div>
                </div>
                <style>
                .site-search{position:relative;max-width:660px;margin:0 0 26px;}
                .site-search input{width:100%;padding:14px 16px 14px 46px;border:1.5px solid var(--border);border-radius:12px;background:var(--bg-card);color:var(--text);font-family:inherit;font-size:1rem;}
                .site-search input:focus{outline:none;border-color:var(--accent);}
                .site-search-ic{position:absolute;left:16px;top:50%;transform:translateY(-50%);color:var(--text-secondary);font-size:1.2rem;}
                .search-results{position:absolute;z-index:40;left:0;right:0;top:calc(100% + 6px);background:var(--bg-card);border:1.5px solid var(--border);border-radius:12px;box-shadow:0 16px 48px rgba(20,30,60,.16);max-height:62vh;overflow:auto;}
                .search-item{display:block;padding:12px 16px;border-bottom:1px solid var(--border);text-decoration:none;color:var(--text);}
                .search-item:last-child{border-bottom:none;}
                .search-item:hover{background:var(--bg-card-hover);}
                .search-kind{display:block;font-size:.7rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;color:var(--accent);}
                .search-t{display:block;font-weight:700;font-size:.98rem;line-height:1.3;margin-top:1px;}
                .search-d{display:block;color:var(--text-secondary);font-size:.85rem;line-height:1.4;margin-top:2px;}
                .search-empty{padding:14px 16px;color:var(--text-secondary);font-size:.9rem;}
                </style>`;
}
function searchScript() {
  return `<script>
    (function(){
      var inp=document.getElementById('siteSearch'),box=document.getElementById('searchResults');
      if(!inp)return;var idx=null,loading=false,pending=null;
      function esc(s){return String(s).replace(/[&<>]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;'}[c];});}
      function load(cb){if(idx)return cb();if(loading){pending=cb;return;}loading=true;fetch('/search-index.json').then(function(r){return r.json();}).then(function(d){idx=d;cb();if(pending){var p=pending;pending=null;p();}}).catch(function(){});}
      function render(q){var t=q.trim().toLowerCase();if(t.length<2){box.hidden=true;box.innerHTML='';return;}var w=t.split(/\\s+/);var res=idx.filter(function(it){var hay=(it.t+' '+it.d+' '+(it.g||'')+' '+(it.c||'')).toLowerCase();return w.every(function(x){return hay.indexOf(x)>=0;});});var n=res.length;res=res.slice(0,12);if(!n){box.innerHTML='<div class="search-empty">Ничего не найдено</div>';box.hidden=false;return;}box.innerHTML=res.map(function(it){return '<a class="search-item" href="'+it.u+'"><span class="search-kind">'+esc(it.k)+(it.c?' · '+esc(it.c):'')+'</span><span class="search-t">'+esc(it.t)+'</span><span class="search-d">'+esc(it.d).slice(0,110)+'</span></a>';}).join('')+(n>12?'<div class="search-empty">+ ещё '+(n-12)+' — уточните запрос</div>':'');box.hidden=false;}
      var deb;inp.addEventListener('input',function(){clearTimeout(deb);var q=inp.value;deb=setTimeout(function(){load(function(){render(q);});},120);});
      document.addEventListener('click',function(e){if(!e.target.closest('.site-search'))box.hidden=true;});
    })();
    </script>`;
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

// Самообновляемая пилларная статья блога: каталог предложений генерится из offers-data.
const PILLAR_SEGMENT_ORDER = ['Флагманы', 'Автоматизация', 'Боты и AI', 'Геймификация', 'Право'];
const PILLAR_SEGMENT_H = {
  'Флагманы': 'Флагманы: комплексные платформы под ключ',
  'Автоматизация': 'Автоматизация бизнеса по нишам',
  'Боты и AI': 'Боты и AI',
  'Геймификация': 'Геймификация и вовлечение',
  'Право': 'Право и 152-ФЗ',
};

function generatePillar(pub) {
  const count = pub.length;
  const bySeg = {};
  for (const o of pub) (bySeg[o.segment] = bySeg[o.segment] || []).push(o);
  const segs = [...PILLAR_SEGMENT_ORDER.filter((s) => bySeg[s]), ...Object.keys(bySeg).filter((s) => !PILLAR_SEGMENT_ORDER.includes(s))];

  const segIntro = {
    'Флагманы': 'Это крупные комплексные продукты — платформы и экосистемы под ключ. Их берут, когда нужно не закрыть одну задачу, а перевести в цифру целое направление или весь бизнес. Дороже и серьёзнее точечных решений, но и отдача кратно масштабнее: единые данные, контроль и возможность расти без переделок.',
    'Автоматизация': 'Самый большой блок — решения под конкретную нишу. Они снимают рутину, убирают потерю заявок и неявки, наводят порядок в записи, учёте и расписании. Запускаются быстро, окупаются на повседневных операциях и почти всегда состоят из похожих кирпичиков: онлайн-запись или приём заявок, CRM, напоминания, оплата и уведомления — собранные под специфику вашей сферы.',
    'Боты и AI': 'Решения на чат-ботах и нейросетях: приём заявок и продажи прямо в мессенджерах, умные ответы по вашей базе знаний, обработка отзывов и документов. Работают круглосуточно, отвечают мгновенно и снимают с сотрудников однотипную нагрузку. AI-часть строится на российских нейросетях с хранением данных в РФ.',
    'Геймификация': 'Механики вовлечения и удержания: конкурсы, розыгрыши, баллы и уровни. Они превращают разовых клиентов и подписчиков в постоянных и привлекают новых руками самих участников — дешевле любой рекламы. Особенно хорошо работают там, где важны повторные покупки и сарафанное радио.',
    'Право': 'Решения, которые закрывают юридические риски — прежде всего соответствие 152-ФЗ. Защищают бизнес от штрафов, которые с 2025 года выросли в десятки раз: повторные нарушения — до 500 000 рублей для юрлиц, а оборотные за утечки — до 500 млн. Под закон попадает практически любой сайт с формой.',
  };
  const catalog = segs.map((s) => {
    const items = bySeg[s].map((o) => `    <li><a href="/predlozheniya/${o.slug}/">${esc(o.title)}</a> — ${esc(o.tagline)}</li>`).join('\n');
    const intro = segIntro[s] ? `<p>${segIntro[s]}</p>\n` : '';
    return `<h3>${esc(PILLAR_SEGMENT_H[s] || s)} (${bySeg[s].length})</h3>\n${intro}<ul>\n${items}\n</ul>`;
  }).join('\n\n');

  // таблица «задача → решение» из стабильного набора
  const pick = (slug) => pub.find((o) => o.slug === slug);
  const tableRows = [
    ['Принимать заявки и отвечать клиентам 24/7', 'ai-konsultant'],
    ['Записывать клиентов онлайн', 'zapis-salon-krasoty'],
    ['Продавать в мессенджере без сайта', 'bot-magazin-zakazy'],
    ['Возвращать клиентов и растить средний чек', 'programma-loyalnosti'],
    ['Связать сайт, CRM и 1С', 'integraciya-sistem'],
    ['Защититься от штрафов по 152-ФЗ', '152-fz-pod-klyuch'],
    ['Перейти в цифру целиком', 'cifrovizaciya-pod-klyuch'],
    ['Видеть все цифры бизнеса на одном экране', 'dashboard-rukovoditelya'],
  ].map(([task, slug]) => { const o = pick(slug); return o ? `      <tr><td>${esc(task)}</td><td><a href="/predlozheniya/${o.slug}/">${esc(o.title)}</a></td></tr>` : ''; }).filter(Boolean).join('\n');

  const html = `// Content HTML for "Готовые IT-решения для бизнеса" article.
// ВНИМАНИЕ: файл генерируется автоматически из offers-data.js (build-offers.js).
// Не редактируйте вручную — изменения перезапишутся при сборке.
module.exports = \`
<div class="blog-tldr">
  <h3>Коротко (TL;DR)</h3>
  <ul>
    <li>Вместо долгой разработки с нуля — готовые проверенные решения под вашу нишу, собранные под бренд и ключ.</li>
    <li>В каталоге уже ${count} предложений: автоматизация по отраслям, чат-боты и AI, геймификация, 152-ФЗ и флагманские платформы.</li>
    <li>Решения модульные: начинаем с малого, расширяемся по мере роста бизнеса.</li>
    <li>Цена обсуждается под задачу и начинается с бесплатной консультации — без форм и спама.</li>
    <li>Российский стек, соответствие 152-ФЗ, поддержка после запуска.</li>
  </ul>
</div>

<h2 id="chto-takoe-gotovye-resheniya">Что такое готовые решения и чем они лучше</h2>
<p>Когда бизнесу нужна автоматизация, есть два пути. Первый — заказывать всё с нуля у разных подрядчиков: долго, дорого и потом системы не дружат между собой. Второй — взять готовое, проверенное решение под вашу нишу и собрать его под ваш бренд и процессы. Я иду вторым путём: за годы практики у меня накопилась библиотека решений, которые уже доказали свою пользу у других — их остаётся адаптировать под вас, а не изобретать заново.</p>
<p>Это быстрее, дешевле и предсказуемее. Вы не платите за эксперименты и не ждёте месяцами — большинство решений запускается за дни или недели. При этом всё работает на российском стеке, с соблюдением 152-ФЗ, и я не пропадаю после сдачи: сопровождаю и развиваю систему дальше. Ниже — весь каталог. Если не знаете, с чего начать, посмотрите <a href="/predlozheniya/">все предложения</a> или таблицу подбора в конце.</p>
<p>Готовое решение — это не шаблон «как у всех». Каркас и логика уже отлажены на реальных проектах, но оформление, тексты, поля и сценарии настраиваются под ваш бизнес и бренд. Вы получаете и скорость готового продукта, и индивидуальность кастомной разработки — без переплаты за то и другое одновременно. Там, где задача типовая, мы экономим ваше время; там, где она уникальна, дорабатываем под вас.</p>
<p>Работаю удалённо по всей России — от Москвы и Санкт-Петербурга до Читы, Улан-Удэ и других городов: для запуска не нужно находиться в одном городе. Подходит и малому бизнесу, которому важно быстро начать получать заявки, и среднему, который перерос таблицы и разрозненные сервисы. Если вы только запускаетесь — берите точечное решение под главную задачу; если масштабируетесь — смотрите в сторону флагманских платформ.</p>

<div class="blog-callout blog-callout-info"><i class="ph-fill ph-info" aria-hidden="true"></i><p>Решения модульные и совместимые: можно начать с одного бота или записи, а потом дорастить до полноценной платформы — без переделки с нуля.</p></div>

<h2 id="katalog">Каталог решений</h2>
<p>Сейчас в каталоге ${count} готовых решений, сгруппированных по типу задачи. Каждое ведёт на отдельную страницу с подробным описанием, составом, разделом «кому подходит и что не входит» и ответами на частые вопросы. Цены на страницах не указаны намеренно: они зависят от объёма и интеграций, поэтому честнее назвать точную сумму после короткого разговора, чем вешать ярлык «от».</p>
<p>Каталог постоянно пополняется — если вашей задачи пока нет в списке, это не значит, что её нельзя решить: почти всегда подходящее решение собирается из готовых модулей под вашу специфику.</p>

${catalog}

<h2 id="kak-vybrat">Как выбрать решение под свою задачу</h2>
<p>Проще всего отталкиваться не от технологии, а от задачи бизнеса. Вот короткая шпаргалка по самым частым запросам:</p>
<table class="blog-table">
  <thead><tr><th>Ваша задача</th><th>Подходящее решение</th></tr></thead>
  <tbody>
${tableRows}
  </tbody>
</table>
<p>Если задача шире одной строки или вы хотите перейти в цифру целиком — это флагманские решения вроде <a href="/predlozheniya/cifrovizaciya-pod-klyuch/">цифровизации под ключ</a>. Не уверены, что выбрать, — опишите задачу, и я предложу оптимальный вариант. Полезно сначала почитать <a href="/blog/skolko-stoit-sayt-2026/">сколько стоит сайт</a> и <a href="/blog/crm-dlya-malogo-biznesa-2026/">про CRM для бизнеса</a>, а термины есть в <a href="/slovar/">словаре</a>.</p>
<p>Ещё один ориентир — по стадии бизнеса. На старте важнее всего начать получать заявки и не терять их: подойдут запись или приём заявок, простой бот и присутствие на картах. Когда поток клиентов вырос, на первый план выходит удержание и средний чек — здесь работают лояльность, рассылки и аналитика. А на этапе масштабирования критичны единые данные и контроль: интеграции систем, дашборд руководителя и платформа для сети. Двигаясь по этой логике, вы внедряете именно то, что даёт результат сейчас, а не «всё подряд».</p>
<p>И последнее: не выбирайте по названию технологии. «Хочу бота» или «хочу приложение» — это про инструмент, а не про результат. Сформулируйте, какую боль закрываете и какой результат хотите в цифрах (меньше неявок, выше повторные продажи, быстрее обработка заявок), — и решение подберётся почти само.</p>

<div class="blog-callout blog-callout-tip"><i class="ph-fill ph-lightbulb" aria-hidden="true"></i><p>Не пытайтесь внедрить всё сразу. Возьмите одно решение, которое закрывает самую больную задачу прямо сейчас, окупите его — и двигайтесь дальше.</p></div>

<h2 id="kak-rabotaem">Как мы работаем и сколько стоит</h2>
<p>Работа всегда начинается с разговора, а не с прайса. Вы рассказываете о задаче — я задаю уточняющие вопросы, предлагаю решение и называю точную цену и срок под вас. Никаких форм на сайте: пишите в Telegram, ВКонтакте или звоните напрямую.</p>
<p>Дальше — короткий бриф и фиксация состава, разработка с промежуточными показами, запуск с обучением вашей команды и поддержка после старта. Цена зависит от объёма и интеграций, поэтому единого ценника нет: точную смету я называю после бесплатной консультации. Для небольших решений это дни и десятки тысяч рублей, для флагманских платформ — отдельный проект со своими этапами.</p>
<p>Почему со мной удобно: я веду проект от стратегии до результата, работаю на российском стеке и по 152-ФЗ, и остаюсь на связи после запуска. При необходимости могу выступить и как <a href="/predlozheniya/cto-as-a-service/">IT-директор на аутсорсе</a>, чтобы выстроить всю цифровую часть бизнеса системно.</p>
<p>Отдельно про результат и ожидания. Я не обещаю «продаж в два раза за неделю» — на выручку влияет слишком много факторов вне IT. Но я отвечаю за то, что система будет работать, решать заявленную задачу и иметь измеримые показатели: меньше неявок, быстрее обработка обращений, выше доля повторных клиентов. Эти метрики мы фиксируем на старте, чтобы потом было видно эффект. Внедрение идёт прозрачно: вы видите промежуточные результаты и вносите правки по ходу, а не получаете «чёрный ящик» в конце.</p>
<p>Если решение со временем нужно развивать — добавить модуль, подключить новый канал, масштабировать на вторую точку — это делается на той же основе, без переписывания с нуля. Поэтому начать с малого не страшно: вложенное не выбрасывается, а становится фундаментом.</p>

<h2 id="faq">Частые вопросы</h2>
<p><strong>Сколько стоят ваши решения?</strong> Единого прайса нет — цена зависит от задачи и объёма. Небольшие решения обходятся в десятки тысяч рублей, крупные платформы считаются отдельно. Точную смету называю после бесплатной консультации.</p>
<p><strong>Чем готовое решение лучше разработки с нуля?</strong> Оно уже проверено на других проектах, собирается под вас быстрее и дешевле, а не изобретается заново. Вы не платите за эксперименты и запускаетесь за дни или недели.</p>
<p><strong>А если моей ниши нет в каталоге?</strong> Каталог покрывает большинство задач, но решения модульные — почти всегда я могу собрать подходящее под вашу специфику. Просто опишите задачу.</p>
<p><strong>Это законно и безопасно по данным клиентов?</strong> Да. Все решения работают на российском стеке, данные хранятся в РФ, обработка персональных данных настраивается по 152-ФЗ.</p>
<p><strong>Вы поддерживаете решение после запуска?</strong> Да, сопровождаю и развиваю систему дальше — не пропадаю после сдачи проекта.</p>
<p><strong>Сколько времени занимает запуск?</strong> Точечные решения — от нескольких дней до пары недель. Флагманские платформы запускаются по этапам: сначала MVP за несколько недель, затем расширение. Точный срок называю после того, как пойму объём.</p>
<p><strong>Нужно ли менять мои текущие программы?</strong> Чаще всего нет. Я добавляю недостающие модули и связываю их с тем, что у вас уже работает, включая 1С и существующую CRM. Полная замена — только если она реально выгоднее.</p>
<p><strong>Я не из вашего города — это проблема?</strong> Нет. Работаю удалённо по всей России, общение и запуск идут онлайн. География не влияет ни на сроки, ни на качество.</p>
<p><strong>С чего начать?</strong> Напишите мне в Telegram или ВКонтакте и опишите задачу своими словами. Я задам пару уточняющих вопросов и предложу решение с ценой и сроком. Консультация бесплатная.</p>
<p><strong>Можно заказать сразу несколько решений?</strong> Да, и часто это разумно: например, запись плюс лояльность плюс бот. Поскольку решения совместимы и работают на единых данных, в связке они дают больше, чем по отдельности, а внедрение обходится дешевле, чем собирать всё у разных подрядчиков.</p>
<p><strong>Вы работаете по договору?</strong> Да, работаю официально с договором и понятным составом работ. Все условия, сроки и стоимость фиксируются до старта, чтобы не было сюрпризов.</p>
<p><strong>А если бюджет совсем небольшой?</strong> Тогда начнём с одного точечного решения, которое закрывает самую острую задачу и быстрее всего окупается. Это честнее, чем растягивать бюджет на «всё сразу» и не довести до результата ничего. Дальше будете расширяться на заработанное.</p>
<p><strong>Что нужно от меня для старта?</strong> На старте — только описание задачи и короткий разговор. Дальше по ходу понадобятся доступы, тексты, фото и контакт ответственного человека с вашей стороны. Всё остальное, включая техническую часть и настройку, я беру на себя.</p>
\`;
`;
  fs.writeFileSync(path.join(__dirname, 'blog-content-gotovye-resheniya.js'), html, 'utf8');
  console.log(`  пиллар обновлён: каталог из ${count} предложений`);
}

// Витрина на главной: 6 избранных карточек между маркерами в index.html.
const HOME_FEATURED = ['ai-vnedrenie-90-dney', 'kompyuternoe-zrenie', 'ai-diagnostika-snimki', 'korporativnyy-ai-otdel', 'zashchita-ot-shifrovalshchikov', 'cifrovizaciya-pod-klyuch'];
function offerCard(o) {
  return `                    <a href="/predlozheniya/${o.slug}/" class="offer-card" data-segment="${esc(o.segment || '')}">
                        <span class="offer-card-icon"><i class="ph-fill ${esc(o.icon)}" aria-hidden="true"></i></span>
                        <span class="offer-card-niche">${esc(o.niche)}</span>
                        <span class="offer-card-title">${esc(o.title)}</span>
                        <span class="offer-card-tagline">${esc(o.tagline)}</span>
                        <span class="offer-card-foot"><span class="offer-card-price">${esc(o.priceFrom)}</span><span class="offer-card-more">Подробнее <i class="ph ph-arrow-right" aria-hidden="true"></i></span></span>
                    </a>`;
}
function generateHomeShowcase(pub) {
  const INDEX = path.join(ROOT, 'index.html');
  if (!fs.existsSync(INDEX)) return;
  let featured = HOME_FEATURED.map((s) => pub.find((o) => o.slug === s)).filter(Boolean);
  // добор до 6, если каких-то слагов нет
  if (featured.length < 6) for (const o of pub) { if (featured.length >= 6) break; if (!featured.includes(o)) featured.push(o); }
  const cards = featured.slice(0, 6).map(offerCard).join('\n');
  let html = fs.readFileSync(INDEX, 'utf8');
  const re = /(<!--OFFERS_HOME_START-->)[\s\S]*?(<!--OFFERS_HOME_END-->)/;
  if (re.test(html)) {
    html = html.replace(re, `$1\n${cards}\n                    $2`);
    fs.writeFileSync(INDEX, html, 'utf8');
    console.log(`  витрина на главной: ${featured.slice(0, 6).length} карточек`);
  }
}

async function main() {
  const pub = offers.filter((o) => o && o.published !== false);
  ensureDir(OUT);
  generatePillar(pub);
  generateHomeShowcase(pub);
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
