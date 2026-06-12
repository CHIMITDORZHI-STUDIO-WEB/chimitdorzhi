// Blog generator. Reads tools/blog-data.js, builds:
//   /blog/index.html           — hub
//   /blog/<slug>/index.html    — per article (only if published: true && contentHtml)
//   Updates sitemap.xml: removes prior /blog/* entries, adds new ones.
//
// Usage: node tools/build-blog.js

const fs = require('fs');
const { clampTitle, clampDesc } = require("./meta-clamp.js");
const path = require('path');
const articles = require('./blog-data');
const OFFERS = require('./offers-data.js');
// Живое число опубликованных предложений — подставляется вместо токена {{OFFERS_COUNT}}.
const OFFERS_COUNT = OFFERS.filter(o => o && o.published !== false).length;
const subOffersCount = (s) => String(s).split('{{OFFERS_COUNT}}').join(OFFERS_COUNT);

// Карта: slug статьи → slug предложения. Добавляйте по мере роста раздела.
const OFFER_LINKS = {
  'reklama-v-max-2027': 'analitika-soobshchestva',
  'pervye-podpischiki-max-bez-byudzheta-2027': 'max-deeplink-referral',
  'posevy-v-max-kanalah-2027': 'analitika-soobshchestva',
  'perevod-auditorii-v-max-2027': 'max-deeplink-referral',
  'kontent-plan-max-kanala-2027': 'max-dajdzhest-krosspost',
  'vovlechennost-v-max-2027': 'geymifikaciya-kanala-max',
  'progrev-i-zapusk-cherez-max-2027': 'max-rassylki-voronki',
  'avtovoronka-v-max-2027': 'max-rassylki-voronki',
  'bot-plus-rassylka-max-povtornye-prodazhi-2027': 'max-rassylki-voronki',
  'segmentaciya-podpischikov-max-2027': 'max-rassylki-voronki',
  'monetizaciya-kanala-max-2027': 'klub-po-podpiske',
  'analitika-max-kanala-2027': 'analitika-soobshchestva',
  'max-ili-telegram-dlya-biznesa-2027': 'bot-dlya-biznesa',
  'lokalnyy-marketing-v-max-2027': 'analitika-soobshchestva',
  'geymifikaciya-dlya-biznesa-gayd-2027': 'konstruktor-konkursov',
  'programma-loyalnosti-bez-skidok-2027': 'statusnaya-loyalnost',
  'geymifikaciya-otdela-prodazh-i-sotrudnikov-2027': 'geymifikaciya-otdela-prodazh',
  'korporativnye-kommunikacii-max-2027': 'importozameshchenie-ofisa',
  'pervaya-1000-podpischikov-max-2027': 'geymifikaciya-kanala-max',
  'avtovoronki-v-messendzherah-2027': 'welcome-voronka-novichki',
  'svoya-veb-analitika-2027': 'skvoznaya-analitika-koltreking',
  'korporativnyy-ai-assistent-na-svoih-dannyh-2027': 'ai-konsultant',
  'ai-videoavatary-2027': 'ai-dvoynik-eksperta',
  'finetuning-rag-api-chto-vybrat-2027': 'ai-konsultant',
  'geo-2027-alisa-gigachat-neyropoisk': 'audit-i-uskorenie-sayta',
  '152-fz-izmeneniya-2027': '152-fz-pod-klyuch',
  'ai-kontent-doverie-eeat-2027': 'ai-kontent-zavod',
  'rossiyskie-oblaka-hosting-2027': 'importozameshchenie-infrastruktura',
  'konkurs-priglasheniy-max-virusnyy-rost-2027': 'geymifikaciya-kanala-max',
  // --- импорт «Антиравити» ---
  'ai-chatbot-prodazhi-2027': 'bot-dlya-biznesa',
  'ai-hr-avtomatizaciya': 'ai-pomoshchnik-rekrutera',
  'avtomatizaciya-detailing-crm': 'avtomoyka-deteyling',
  'avtomatizaciya-roznica-14-dney': 'integraciya-sistem',
  'avtomatizaciya-salonov-krasoty-yclients': 'zapis-salon-krasoty',
  'avtozapchasti-avtomatizaciya-2027': 'avtozapchasti-vin',
  'b2b-portal-optoviki': 'b2b-portal-opt',
  'chestny-znak-obschepit-sibir': 'chestnyy-znak-markirovka',
  'cifrovoy-baykal-2027': 'bronirovanie-otel-glamping',
  'crm-nedvizhimost-sibir-2027': 'ai-ocenka-nedvizhimosti',
  'dostavka-edy-iiko-sibir-2027': 'dostavka-bot-povtornye-zakazy',
  'geomarketing-sibir-2027': 'ai-upravlenie-reputaciey',
  'it-outsourcing-sibir-2027': 'cto-as-a-service',
  'korporativnaya-pochta-linux': 'importozameshchenie-ofisa',
  'markirovka-odezhdy-sibir-2027': 'chestnyy-znak-markirovka',
  'optimizaciya-skorosti-sayta': 'audit-i-uskorenie-sayta',
  'priem-platezhey-sbp-sayt': 'priem-platezhey-sbp',
  'sayt-spec-tehnika-kitay-2027': 'sayt-distributora',
  'skladskoy-uchet-wms-tsd': 'wms-ai-prognoz',
  'udalenniy-ofis-vpn-telefoniya': 'importozameshchenie-infrastruktura',
  'uskorenie-1c-postgresql': 'importozameshchenie-infrastruktura',
  'zaschita-sayta-ot-parsinga': 'audit-i-uskorenie-sayta',
  'kak-kreatoru-postavit-kontent-na-potok-2027': 'ai-kontent-zavod',
  'kak-prevratit-ideyu-v-produkt-2027': 'prototip-poc-investor',
  'finteh-i-platezhi-dlya-biznesa-2027': 'priem-platezhey-sbp',
  'biznes-na-marketpleysah-2027': 'repraiser-wb-ozon',
  'marketing-i-trafik-2027': 'skvoznaya-analitika-koltreking',
  'it-dlya-zoomagazina-gruminga-2027': 'zoomagazin-gruming',
  'avtomatizaciya-sportshkoly-sekciy-2027': 'sportshkola-sekcii',
  'it-dlya-magazina-stroymaterialov-2027': 'magazin-stroymaterialov',
  'avtomatizaciya-skupki-komissionki-2027': 'skupka-komissionka',
  'iz-excel-v-crm-za-mesyac-2027': 'integraciya-sistem',
  'sistemy-loyalnosti-2027': 'programma-loyalnosti',
  'zashchita-sayta-ot-botov-parsinga-2027': 'audit-i-uskorenie-sayta',
  'ai-perevod-rabota-s-kitaem-2027': 'ai-konsultant',
  'ai-agenty-vs-chatboty-2027': 'ai-konsultant',
  'yandex-karty-2gis-lokalnyy-biznes-2027': 'ai-upravlenie-reputaciey',
  'ai-dlya-biznesa-buryatiya-zabaykalye-2027': 'bot-dlya-biznesa',
  'avtomatizaciya-razvlecheniy-dosuga-2027': 'kvest-komnaty',
  'biznes-na-arende-i-prokate-2027': 'arenda-spectehniki',
  'avtomatizaciya-lokalnyh-uslug-2027': 'servis-centr-remont',
  'it-dlya-avtoservisa-2026': 'avtoservis',
  'cifrovizaciya-avtomoyki-detailing-2026': 'avtoservis',
  'it-dlya-shinomontazha-hraneniya-shin-2026': 'avtoservis',
  'it-dlya-horeca-2026': 'kofeynya',
  'max-bot-restoran-kafe-2026': 'kofeynya',
  'it-dlya-letnih-verand-obshchepita-2026': 'obshchepit',
  'it-dlya-pekarni-konditerskoy-2026': 'obshchepit',
  'cifrovizaciya-cvetochnogo-magazina-2026': 'cvetochnyy-magazin',
  'chatbot-telegram-max-vk-2026': 'bot-dlya-biznesa',
  'ai-bot-v-max-gigachat-yandexgpt-2026': 'bot-dlya-biznesa',
  'magazin-bot-max-2026': 'bot-dlya-biznesa',
  'max-bot-zapis-na-uslugi-2026': 'bot-dlya-biznesa',
  'telegram-chat-vk-soobshchestvo-2026': 'bot-dlya-biznesa',
  'max-kanaly-rassylki-marketing-2026': 'geymifikaciya-kanala-max',
  'geymifikaciya-saas-2026': 'geymifikaciya-kanala-max',
  'it-dlya-salonov-krasoty-2026': 'zapis-salon-krasoty',
  'it-dlya-stomatologiy-medcentrov-2026': 'it-stomatologiya',
  'ai-chatbot-na-sayt-bez-programmirovaniya-2026': 'ai-konsultant',
  'rag-sistemy-dlya-biznesa-2026': 'ai-konsultant',
  'cifrovizaciya-fitnes-kluba-2026': 'avtomatizaciya-fitnesa',
  'avtomatizaciya-onlayn-shkoly-2026': 'onlayn-shkola-platforma',
  'it-dlya-yazykovoy-shkoly-repetitorov-2026': 'onlayn-shkola-platforma',
  'audit-152-fz-2026': '152-fz-pod-klyuch',
  'cookie-banner-zakon': '152-fz-pod-klyuch',
  'soglasie-na-obrabotku-pd-2026': '152-fz-pod-klyuch',
  'uvedomlenie-rkn-2026': '152-fz-pod-klyuch',
  'crm-dlya-malogo-biznesa-2026': 'integraciya-sistem',
  'tilda-vs-kastomnaya-razrabotka-2026': 'bystryy-start-sayt',
  'skolko-stoit-sayt-2026': 'bystryy-start-sayt',
  'it-dlya-turizma-otelei-2026': 'bronirovanie-otel-glamping',
  'glamping-bazy-otdyha-2026': 'bronirovanie-otel-glamping',
  'magazin-bot-max-2026': 'bot-magazin-zakazy',
  'svoy-magazin-vs-wildberries-ozon-2026': 'bot-magazin-zakazy',
  'max-bot-rieltor-2026': 'crm-agentstvo-nedvizhimosti',
  'cifrovizaciya-avtoshkol-2026': 'it-dlya-avtoshkoly',
  'ai-dlya-sellerov-wb-ozon-2026': 'avtomatizaciya-sellera-wb-ozon',
  'it-dlya-kliningovoy-kompanii-2026': 'zayavki-klining-uslugi',
  'cifrovizaciya-optovoy-bazy-distributora-2026': 'b2b-portal-opt',
  'dostavka-vody-produktov-2026': 'dostavka-bot-povtornye-zakazy',
  'it-dlya-stroitelnyh-kompaniy-2026': 'crm-stroitelnaya-kompaniya',
  'ai-dlya-yurista-advokata-2026': 'ai-pomoshchnik-yurist-buhgalter',
  'ai-dlya-yurista-dokumenty-2026': 'ai-pomoshchnik-yurist-buhgalter',
  'ai-buhgalter-avtomatizaciya-rutiny-2026': 'ai-pomoshchnik-yurist-buhgalter',
  'ai-pomoshchnik-buhgaltera-2026': 'ai-pomoshchnik-yurist-buhgalter',
  'cifrovizaciya-vetklinik-2026': 'it-vetklinika',
  'ai-v-hr-naym-2026': 'hr-bot-podbor',
  'ai-transkripciya-soveshchaniy-2026': 'baza-znaniy-ai',
  'mvp-to-production-3-mesyatsa-2026': 'zapusk-saas-produkta',
  'saas-pricing-2026': 'zapusk-saas-produkta',
  'importozameshchenie-po-2026': 'importozameshchenie-infrastruktura',
  'self-hosted-infrastruktura-2026': 'importozameshchenie-infrastruktura',
  'svoy-vps-dlya-razrabotchika-2026': 'importozameshchenie-infrastruktura',
  'ai-agenty-v-biznese-2026': 'ai-otdel-prodazh-podderzhki',
};

function blogOfferCta(a) {
  const offerSlug = OFFER_LINKS[a.slug];
  if (!offerSlug) return '';
  const o = OFFERS.find((x) => x.slug === offerSlug && x.published !== false);
  if (!o) return '';
  return `
                    <a class="blog-offer-cta" href="/predlozheniya/${o.slug}/">
                        <span class="blog-offer-cta-body">
                            <span class="blog-offer-cta-eyebrow">Готовое решение по теме</span>
                            <span class="blog-offer-cta-title">${esc(o.title)}</span>
                            <span class="blog-offer-cta-price">${esc(o.priceFrom)} · ${esc(o.timeline)}</span>
                        </span>
                        <span class="btn btn-accent"><i class="ph ph-arrow-right" aria-hidden="true"></i> Смотреть предложение</span>
                    </a>`;
}

// Баннер каталога предложений (хаб блога и конец статей). {{OFFERS_COUNT}} подставляется при записи.
function catalogBanner() {
  return `
                    <a class="blog-offer-cta" href="/predlozheniya/">
                        <span class="blog-offer-cta-body">
                            <span class="blog-offer-cta-eyebrow">Готовые решения под ключ</span>
                            <span class="blog-offer-cta-title">{{OFFERS_COUNT}} готовых IT-решений для бизнеса</span>
                            <span class="blog-offer-cta-price">Автоматизация, боты, AI, 152-ФЗ и платформы · бесплатная консультация</span>
                        </span>
                        <span class="btn btn-accent"><i class="ph ph-squares-four" aria-hidden="true"></i> Смотреть каталог</span>
                    </a>`;
}

const SITE = 'https://chimitdorzhi.tech';
let FRESH_SLUGS = new Set(); // слаги самых свежих статей, задаётся в main()
const ROOT = path.resolve(__dirname, '..');
const OUT_BLOG = path.join(ROOT, 'blog');
const OUT_SITEMAP = path.join(ROOT, 'sitemap.xml');
const OUT_FEED    = path.join(OUT_BLOG, 'feed.xml');

const CATEGORY_LABELS = {
  legal:       'Право и compliance',
  'ai-dev':    'AI для разработчиков',
  'ai-life':   'AI для жизни и работы',
  marketing:   'Маркетинг и контент',
  geo:         'GEO и AI-поиск',
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
  title = clampTitle(title); description = clampDesc(description);
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
    <meta name="theme-color" content="#f4f1ea">
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
    <link rel="stylesheet" href="/style.css?v=41">
`;
}

function navbar() {
  return `<nav class="navbar" id="navbar">
    <div class="container nav-inner">
        <a href="/" class="logo">CHIMITDORZHI<span class="logo-dot">.</span></a>
        <ul class="nav-links" id="navLinks">
            <li><a href="/#about" data-i18n="nav.about">Обо мне</a></li>
            <li><a href="/#services" data-i18n="nav.services">Услуги</a></li>
            <li><a href="/predlozheniya/" data-i18n="nav.offers">Предложения</a></li>
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
            <li><a href="/infografika/">Инфографика</a></li>
            <li><a href="/#contact" data-i18n="nav.contact">Контакт</a></li>
        </ul>
        <div class="nav-controls">
            <button class="nav-search-btn js-search-open" type="button" aria-label="Поиск по сайту"><i class="ph ph-magnifying-glass" aria-hidden="true"></i></button>
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
        <li><a href="/predlozheniya/">Предложения</a></li>
        <li><a href="/#cases">Кейсы</a></li>
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
                <a href="/about/" class="footer-policy-link">Об авторе</a>
                <span class="footer-legal-sep"> · </span>
                <a href="/slovar/" class="footer-policy-link">Словарь терминов</a>
                <span class="footer-legal-sep"> · </span>
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

// Связывание статьи с терминами глоссария (about) по совпадению с заголовком/тегами.
function aboutTermsFor(a) {
  if (typeof GLOSSARY === 'undefined' || !GLOSSARY) return [];
  const hay = `${a.title} ${(a.tags || []).join(' ')}`.toLowerCase();
  const seen = new Set();
  const out = [];
  for (const t of GLOSSARY) {
    const core = t.term.toLowerCase().split(' (')[0].trim();
    const match = t.slug === a.slug || (core.length > 2 && hay.includes(core));
    if (match && !seen.has(t.id)) {
      seen.add(t.id);
      out.push({ '@type': 'DefinedTerm', '@id': `${SITE}/slovar/#${t.id}`, name: t.term });
    }
    if (out.length >= 6) break;
  }
  return out;
}

function blogPostingLd(a, url) {
  const about = aboutTermsFor(a);
  const obj = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: a.title,
    description: a.metaDescription,
    image: coverUrl(a),
    author: {
      '@type': 'Person',
      '@id': `${SITE}/#person`,
      name: 'Чимитдоржи Дарижапов',
      url: `${SITE}/about/`,
      jobTitle: 'IT-предприниматель, AI/ML-эксперт, специалист по 152-ФЗ',
      sameAs: [
        'https://t.me/chimitdorzhi',
        'https://vk.com/chimitdorzhi',
        'https://www.youtube.com/@chimitdorzhi_studio',
      ],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certificate', recognizedBy: { '@type': 'Organization', name: 'Vanderbilt University' } },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certificate', recognizedBy: { '@type': 'Organization', name: 'MongoDB Inc.' } },
      ],
    },
    publisher: { '@id': `${SITE}/#organization` },
    isPartOf: { '@id': `${SITE}/#website` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    datePublished: a.datePublished,
    dateModified: a.dateModified,
    keywords: a.tags.join(', '),
    articleSection: CATEGORY_LABELS[a.category] || 'Блог',
    inLanguage: 'ru',
    // Speakable — что зачитывать голосовым ассистентам (Алиса и др.)
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.blog-lead', '.blog-tldr'],
    },
  };
  if (about.length) obj.about = about;
  return JSON.stringify(obj, null, 2);
}

// Организация-издатель — каноническое определение сущности (граф знаний / GEO).
// На @id ${SITE}/#organization ссылается publisher во всех статьях.
function organizationLd() {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE}/#organization`,
    name: 'Chimitdorzhi Studio',
    alternateName: ['CHIMITDORZHI.TECH', 'Чимитдоржи Студио'],
    url: SITE,
    logo: { '@type': 'ImageObject', url: `${SITE}/favicon-120.png` },
    description: 'IT-студия Чимитдоржи Дарижапова: разработка сайтов и Telegram-ботов, AI-решения на российском стеке, автоматизация бизнеса и соответствие 152-ФЗ.',
    founder: { '@id': `${SITE}/#person` },
    foundingDate: '2016',
    areaServed: { '@type': 'Country', name: 'Россия' },
    knowsAbout: [
      '152-ФЗ', 'персональные данные', 'разработка сайтов', 'Telegram-боты',
      'AI-агенты', 'YandexGPT', 'GigaChat', 'RAG', 'автоматизация бизнеса',
      'кибербезопасность', 'импортозамещение ПО',
    ],
    sameAs: [
      'https://t.me/chimitdorzhi',
      'https://vk.com/chimitdorzhi',
      'https://www.youtube.com/@chimitdorzhi_studio',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+7-931-605-30-07',
      contactType: 'customer service',
      email: 'chimitdorzhi26@gmail.com',
      availableLanguage: ['Russian', 'English'],
    },
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
    <a class="blog-card blog-card-svc" href="https://audit.chimitdorzhi.tech/">
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
                    ${blogOfferCta(a)}

                    <div class="blog-cta-card blog-cta-card-final">
                        <div class="blog-cta-card-body">
                            <h3>Готовы обсудить вашу задачу?</h3>
                            <p>Бесплатная консультация — разберём, как внедрить это в вашем бизнесе под ключ. Без форм, пишите напрямую.</p>
                        </div>
                        <div class="blog-cta-card-actions">
                            <a href="${esc(a.ctaInternal ? a.ctaInternal.url : 'https://chimitdorzhi.tech/predlozheniya/')}" class="btn btn-accent"><i class="ph ph-rocket-launch" aria-hidden="true"></i> ${esc(a.ctaInternal ? a.ctaInternal.label : 'Подобрать решение')}</a>
                            <a href="https://t.me/chimitdorzhi" target="_blank" rel="noopener" class="btn btn-ghost"><i class="ph ph-telegram-logo" aria-hidden="true"></i> Telegram</a>
                            <a href="https://vk.com/chimitdorzhi" target="_blank" rel="noopener" class="btn btn-ghost"><i class="ph ph-chat-circle-dots" aria-hidden="true"></i> ВКонтакте</a>
                        </div>
                    </div>

                    ${relatedHtml(a, published)}
                    ${a.slug === 'gotovye-it-resheniya-dlya-biznesa-2026' ? '' : catalogBanner()}
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
    <script>
    (function(){
      var toc=document.querySelector('.blog-toc');
      if(!toc)return;
      var links=[].slice.call(toc.querySelectorAll('a[href^="#"]'));
      if(!links.length)return;
      var map={};
      var targets=links.map(function(l){
        var id=l.getAttribute('href').slice(1);
        var el=document.getElementById(id);
        if(el)map[id]=l;
        return el;
      }).filter(Boolean);
      if(!targets.length)return;
      var current=null;
      function setActive(id){
        if(current===id)return;
        current=id;
        links.forEach(function(l){l.classList.remove('active');});
        if(map[id])map[id].classList.add('active');
      }
      var obs=new IntersectionObserver(function(entries){
        entries.forEach(function(e){
          if(e.isIntersecting)setActive(e.target.id);
        });
      },{rootMargin:'-20% 0px -70% 0px',threshold:0});
      targets.forEach(function(t){obs.observe(t);});
    })();
    </script>
</body>
</html>`;
}

// ---------- hub page ----------

function cardHtml(a) {
  const cat = CATEGORY_LABELS[a.category] || 'Блог';
  const fresh = FRESH_SLUGS.has(a.slug) ? '<span class="blog-card-fresh">Свежее</span>' : '';
  return `<a class="blog-card" href="/blog/${a.slug}/" data-category="${a.category}">
  ${fresh}
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
    <script type="application/ld+json">
${organizationLd()}
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
                    <h1 class="section-heading">База знаний для <span class="text-gradient">бизнеса</span></h1>
                    <p class="section-sub">Более ${Math.floor(published.length / 10) * 10} разборов без воды: 152-ФЗ и защита данных, AI и нейросети, разработка и боты, маркетинг, GEO и цифровизация бизнеса по отраслям. Пишу как практик — с цифрами, ценами и примерами.</p>
                </div>
                ${catalogBanner()}

                ${searchBox()}

                <div class="blog-filter-chips" role="group" aria-label="Фильтр категорий">
                    <button class="filter-btn active" data-blog-cat="all">Все <span class="filter-count">${published.length}</span></button>
                    ${[
                      { key: 'legal',       label: 'Право' },
                      { key: 'ai-dev',      label: 'AI / разработка' },
                      { key: 'ai-life',     label: 'AI / жизнь' },
                      { key: 'marketing',   label: 'Маркетинг' },
                      { key: 'geo',         label: 'GEO / AI-поиск' },
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
  geo: {
    h1: 'GEO и AI-поиск',
    intro: 'Генеративная оптимизация (GEO): как попадать в ответы ChatGPT, Perplexity, Алисы и Яндекс Нейро. llms.txt, schema, граф сущностей, измерение упоминаний бренда в ИИ — практика от того, кто внедряет это на своём сайте.',
    service: { url: 'https://chimitdorzhi.tech/services/digital-marketing/', label: 'Продвижение в ИИ-поиске' },
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

// ---------- глоссарий /slovar/ ----------
// Определения, которые ИИ-движки охотно цитируют. DefinedTermSet + видимый <dl>.
const GLOSSARY = [
  { id: '152-fz', term: '152-ФЗ', def: 'Федеральный закон «О персональных данных» — основной закон РФ, регулирующий сбор, хранение и обработку данных людей. Под него попадает почти любой сайт, собирающий хотя бы имя и телефон.', slug: 'audit-152-fz-2026' },
  { id: 'pd', term: 'Персональные данные (ПД)', def: 'Любая информация, относящаяся к определённому человеку: ФИО, телефон, e-mail, адрес, фото, cookie с идентификатором. Обработка ПД требует согласия и соблюдения 152-ФЗ.', slug: 'soglasie-na-obrabotku-pd-2026' },
  { id: 'operator-pd', term: 'Оператор персональных данных', def: 'Лицо (компания, ИП, физлицо), которое определяет цели и способы обработки ПД. Оператор обязан уведомить Роскомнадзор и обеспечить защиту данных.', slug: 'uvedomlenie-rkn-2026' },
  { id: 'rkn', term: 'Роскомнадзор (РКН)', def: 'Федеральная служба, надзирающая за обработкой персональных данных и связью. Ведёт реестр операторов ПД, проводит проверки и выписывает штрафы за нарушения 152-ФЗ.' },
  { id: 'oborotnyy-shtraf', term: 'Оборотный штраф', def: 'Штраф, рассчитываемый как процент от годовой выручки компании. С 2025 года за повторные утечки персональных данных в РФ — до 3% выручки, максимум 500 млн рублей.', slug: 'oborotnye-shtrafy-utechki-pd-2026' },
  { id: 'soglasie', term: 'Согласие на обработку ПД', def: 'Добровольное, конкретное и информированное разрешение человека на обработку его данных. Обязательно по ст. 9 152-ФЗ; должно содержать цели, перечень данных и срок.', slug: 'soglasie-na-obrabotku-pd-2026' },
  { id: 'lokalizaciya', term: 'Локализация персональных данных', def: 'Требование 152-ФЗ хранить и первично обрабатывать ПД россиян на серверах, физически расположенных в России.', slug: 'lokalizaciya-pd-2026' },
  { id: 'ebs', term: 'Биометрия и ЕБС', def: 'Биометрические ПД (лицо, голос, отпечатки) — особая категория данных. ЕБС — Единая биометрическая система РФ; сбор биометрии регулируется 572-ФЗ и требует отдельного согласия.', slug: 'biometria-ebs-2026' },
  { id: 'ord', term: 'Маркировка рекламы (ОРД)', def: 'С 2022 года вся интернет-реклама в РФ обязательно маркируется через Оператора рекламных данных (ОРД) с присвоением токена erid и передачей сведений в ЕРИР.', slug: 'markirovka-reklamy-ord-2026' },
  { id: 'erid', term: 'erid', def: 'Уникальный идентификатор рекламного креатива, который присваивает ОРД. Указывается в пометке «Реклама» рядом с объявлением.', slug: 'markirovka-reklamy-ord-2026' },
  { id: 'ai-agent', term: 'AI-агент', def: 'Программа на основе нейросети, которая не просто отвечает, а самостоятельно выполняет цепочку действий: ищет данные, вызывает инструменты и API, принимает решения для достижения цели.', slug: 'ai-agenty-v-biznese-2026' },
  { id: 'llm', term: 'LLM (большая языковая модель)', def: 'Large Language Model — нейросеть, обученная на больших объёмах текста и умеющая генерировать и понимать естественный язык. Примеры: GPT, YandexGPT, GigaChat, Llama.', slug: 'lokalnyy-llm-na-noutbuke-2026' },
  { id: 'rag', term: 'RAG (Retrieval-Augmented Generation)', def: 'Подход, при котором нейросеть перед ответом ищет нужные факты в вашей базе знаний и отвечает на их основе. Снижает «галлюцинации» и позволяет работать с актуальными данными компании.', slug: 'rag-sistemy-dlya-biznesa-2026' },
  { id: 'yandexgpt', term: 'YandexGPT', def: 'Российская большая языковая модель от Яндекса. Доступна через API Yandex Cloud, подходит для задач с требованием хранить данные в РФ.', slug: 'rossiyskiy-ai-stack-2026' },
  { id: 'gigachat', term: 'GigaChat', def: 'Российская мультимодальная нейросеть от Сбера. Альтернатива зарубежным LLM с размещением в российском контуре.', slug: 'rossiyskiy-ai-stack-2026' },
  { id: 'mcp', term: 'MCP (Model Context Protocol)', def: 'Открытый протокол, стандартизирующий подключение нейросетей к внешним инструментам и источникам данных. Позволяет AI-агентам единообразно работать с файлами, API и базами.', slug: 'mcp-model-context-protocol-2026' },
  { id: 'importozameshchenie', term: 'Импортозамещение ПО', def: 'Замена зарубежного софта российскими аналогами. Обязательно для госорганов и КИИ; для бизнеса — способ снизить риски отключения и санкций.', slug: 'importozameshchenie-po-2026' },
  { id: 'self-hosted', term: 'Self-hosted', def: 'Размещение сервисов на собственном или арендованном сервере вместо облака вендора. Даёт контроль над данными и независимость, но требует администрирования.', slug: 'self-hosted-infrastruktura-2026' },
  { id: 'pwa', term: 'PWA (Progressive Web App)', def: 'Технология, превращающая обычный сайт в приложение: установка на экран, работа офлайн, push-уведомления — без публикации в магазинах приложений.', slug: 'pwa-iz-sayta-za-vyhodnye-2026' },
  { id: 'crm', term: 'CRM', def: 'Customer Relationship Management — система учёта клиентов, сделок и коммуникаций. Помогает не терять заявки и видеть всю историю работы с клиентом.', slug: 'crm-dlya-malogo-biznesa-2026' },
  { id: 'mvp', term: 'MVP (минимально жизнеспособный продукт)', def: 'Первая версия продукта с минимумом функций, достаточным для проверки спроса на реальных пользователях с минимальными затратами.', slug: 'mvp-to-production-3-mesyatsa-2026' },
  { id: 'unit-ekonomika', term: 'Юнит-экономика', def: 'Расчёт прибыльности в пересчёте на одну единицу — клиента или продажу. Показывает, зарабатывает бизнес или теряет деньги на каждом клиенте.', slug: 'yunit-ekonomika-osnovatelya-2026' },
  { id: 'cfa', term: 'ЦФА (цифровые финансовые активы)', def: 'Цифровые аналоги ценных бумаг и денежных требований, выпускаемые на блокчейн-платформах по 259-ФЗ. Инструмент привлечения финансирования для бизнеса.', slug: 'cfa-dlya-biznesa-2026' },
  { id: 'cifrovoy-rubl', term: 'Цифровой рубль', def: 'Третья форма национальной валюты РФ (наряду с наличными и безналичными), выпускаемая Банком России на собственной платформе.', slug: 'cifrovoy-rubl-dlya-biznesa-2026' },
  { id: 'geo', term: 'GEO (Generative Engine Optimization)', def: 'Оптимизация контента под ответы нейросетей (ChatGPT, Perplexity, Алиса, Яндекс Нейро): структурированные данные, чёткие определения, цитируемость и авторитетность источника.' },
];

function glossaryPage() {
  const url = `${SITE}/slovar/`;
  const sorted = [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term, 'ru'));
  const ldSet = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': `${url}#glossary`,
    name: 'Словарь терминов: 152-ФЗ, AI и разработка',
    url,
    inLanguage: 'ru',
    hasDefinedTerm: sorted.map(t => ({
      '@type': 'DefinedTerm',
      '@id': `${url}#${t.id}`,
      name: t.term,
      description: t.def,
      inDefinedTermSet: `${url}#glossary`,
    })),
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Блог', item: `${SITE}/blog/` },
      { '@type': 'ListItem', position: 3, name: 'Словарь терминов', item: url },
    ],
  };
  const items = sorted.map(t => {
    const link = t.slug ? ` <a class="glossary-more" href="/blog/${t.slug}/">Подробнее →</a>` : '';
    return `        <div class="glossary-item">
          <dt id="${t.id}" class="glossary-term">${esc(t.term)}</dt>
          <dd class="glossary-def">${esc(t.def)}${link}</dd>
        </div>`;
  }).join('\n');

  return `${head({
    title: 'Словарь терминов: 152-ФЗ, AI, разработка | Чимитдоржи Дарижапов',
    description: 'Понятные определения ключевых терминов: 152-ФЗ, персональные данные, оборотные штрафы, AI-агенты, RAG, LLM, ОРД, ЦФА и другие — простыми словами от практика.',
    keywords: 'словарь терминов, 152-ФЗ простыми словами, что такое RAG, что такое AI-агент, глоссарий IT',
    canonical: url,
  })}    <script type="application/ld+json">
${JSON.stringify(ldSet, null, 2)}
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
                    <span aria-current="page">Словарь терминов</span>
                </nav>
                <div class="section-header">
                    <span class="section-label">СЛОВАРЬ</span>
                    <h1 class="section-heading">Термины <span class="text-gradient">простыми словами</span></h1>
                    <p class="section-sub">Короткие понятные определения по 152-ФЗ, AI и разработке. Для людей и для нейросетей.</p>
                </div>
                <dl class="glossary-list">
${items}
                </dl>
            </div>
        </section>
    </main>

    ${footer()}
</body>
</html>`;
}

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

// drip-состояние: { slug: "YYYY-MM-DD" } — дата «выпуска в Дзен».
// Если статья есть в drip-состоянии, в RSS она получает эту дату (свежую),
// чтобы Дзен подхватил её как новую. См. tools/zen-drip.js.
function loadDripState() {
  try { return JSON.parse(fs.readFileSync(path.join(__dirname, 'zen-drip-state.json'), 'utf8')); }
  catch { return {}; }
}

function buildRss(published) {
  const drip = loadDripState();
  // Эффективная дата для RSS: drip-дата (если есть) либо реальная дата публикации.
  const feedDate = a => drip[a.slug] || a.datePublished;
  const sorted = [...published].sort((a, b) =>
    (feedDate(b) || '').localeCompare(feedDate(a) || '')
  );
  const latest = sorted[0] ? (feedDate(sorted[0]) || new Date().toISOString().slice(0, 10)) : new Date().toISOString().slice(0, 10);

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
      <pubDate>${rssDate(feedDate(a))}</pubDate>
      <category>${esc(cat)}</category>
      <author>noreply@chimitdorzhi.tech (Чимитдоржи Дарижапов)</author>
      <enclosure url="${cover}" type="image/png" length="0"/>
      <media:thumbnail url="${cover}"/>
      <media:content url="${cover}" medium="image" type="image/png"/>
    </item>`;
  }).join('\n');

  // Предложения в Дзен-фид НЕ добавляем: Дзен — площадка для статей, а
  // коммерческие лендинги-предложения индексируются через sitemap.xml.
  // Фид остаётся чистым контентным (только статьи блога).

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

// Витрина «Полезное» на главной: 2 избранные статьи между маркерами в index.html.
// Управление — список слагов; если слага нет, добираем самыми свежими.
const HOME_USEFUL = ['audit-152-fz-2026', 'rossiyskiy-ai-stack-2026'];
function homeUsefulCard(a) {
  const cat = CATEGORY_LABELS[a.category] || 'Блог';
  return `                    <a class="blog-card" href="/blog/${a.slug}/" data-category="${a.category}">
                        <div class="blog-card-icon"><i class="${a.heroIcon || 'ph-fill ph-article'}" aria-hidden="true"></i></div>
                        <span class="blog-card-cat">${esc(cat)}</span>
                        <h3>${esc(a.title)}</h3>
                        <p>${esc(a.excerpt)}</p>
                        <div class="blog-card-meta">
                            <span><i class="ph ph-calendar" aria-hidden="true"></i> ${formatRuDate(a.datePublished)}</span>
                            <span><i class="ph ph-clock" aria-hidden="true"></i> ${a.readingMinutes} мин</span>
                        </div>
                        <span class="blog-card-link"><span>Читать</span> <i class="ph ph-arrow-right" aria-hidden="true"></i></span>
                    </a>`;
}
function generateHomeUseful(published) {
  const INDEX = path.join(ROOT, 'index.html');
  if (!fs.existsSync(INDEX)) return;
  const bySlug = new Map(published.map((p) => [p.slug, p]));
  let featured = HOME_USEFUL.map((s) => bySlug.get(s)).filter(Boolean);
  for (const a of published) { if (featured.length >= 2) break; if (!featured.includes(a)) featured.push(a); }
  featured = featured.slice(0, 2);
  const cards = featured.map(homeUsefulCard).join('\n');
  let html = fs.readFileSync(INDEX, 'utf8');
  const re = /(<!--USEFUL_HOME_START-->)[\s\S]*?(<!--USEFUL_HOME_END-->)/;
  if (re.test(html)) {
    html = html.replace(re, `$1\n${cards}\n                    $2`);
    fs.writeFileSync(INDEX, html, 'utf8');
    console.log(`  витрина «Полезное» на главной: ${featured.length} статьи`);
  }
}

async function main() {
  ensureDir(OUT_BLOG);
  // Лента: свежие сверху (по дате публикации, при равенстве — позже добавленные выше)
  const published = articles
    .filter(a => a.published && a.contentHtml)
    .map((a, i) => ({ a, i }))
    .sort((x, y) => {
      const d = (y.a.datePublished || '').localeCompare(x.a.datePublished || '');
      return d !== 0 ? d : y.i - x.i;
    })
    .map(o => o.a);

  // «Свежее»: 6 самых новых статей (весь блог вышел сжатым периодом)
  FRESH_SLUGS = new Set(published.slice(0, 6).map(a => a.slug));

  // Генерация уникальных OG-обложек 1200×630 для каждой статьи.
  // Требует sharp. Если модуль недоступен (например, в CI без npm install) —
  // пропускаем: обложки уже закоммичены, для drip-сборки они не критичны.
  let covers = 0;
  try {
    const og = require('./og-generator.js');
    for (const a of published) {
      await og.generateCover(a);
      covers++;
    }
    console.log(`  Generated ${covers} cover(s) (cover.png)`);
  } catch (e) {
    console.log(`  ⚠ Пропуск генерации обложек (${e.message}) — использую существующие.`);
  }

  let pages = 0;
  for (const a of published) {
    const dir = path.join(OUT_BLOG, a.slug);
    ensureDir(dir);
    fs.writeFileSync(path.join(dir, 'index.html'), subOffersCount(articlePage(a, published)), 'utf8');
    pages++;
  }

  fs.writeFileSync(path.join(OUT_BLOG, 'index.html'), subOffersCount(hubPage(published)), 'utf8');

  // Авто-витрина «Полезное» на главной (между маркерами USEFUL_HOME_*)
  generateHomeUseful(published);

  // Глоссарий /slovar/
  const slovarDir = path.join(ROOT, 'slovar');
  ensureDir(slovarDir);
  fs.writeFileSync(path.join(slovarDir, 'index.html'), glossaryPage(), 'utf8');
  console.log(`  Glossary: ${slovarDir}/index.html (${GLOSSARY.length} терминов)`);

  // Category pillar pages
  let catPages = 0;
  const catKeys = Object.keys(CATEGORY_META).filter(k => published.some(p => p.category === k));
  for (const k of catKeys) {
    const catArticles = published.filter(p => p.category === k);
    const dir = path.join(OUT_BLOG, 'category', k);
    ensureDir(dir);
    fs.writeFileSync(path.join(dir, 'index.html'), subOffersCount(categoryPage(k, catArticles)), 'utf8');
    catPages++;
  }
  console.log(`  Generated ${catPages} category pillar page(s)`);

  updateSitemap(published);
  fs.writeFileSync(OUT_FEED, subOffersCount(buildRss(published)), 'utf8');

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

  // Линтер требований (не блокирует сборку — только сигналит).
  // Полная проверка: node tools/check-articles.js
  try {
    const { lint } = require('./check-articles.js');
    const rep = lint(articles);
    if (rep.errCount > 0) {
      console.log(`\n  ⚠ ЛИНТЕР: ${rep.errCount} ошибок в ${rep.total} статьях — запустите: node tools/check-articles.js`);
    } else {
      console.log(`\n  ✓ Линтер: все ${rep.total} статей соответствуют требованиям (предупреждений: ${rep.warnCount})`);
    }
  } catch (e) {
    console.log(`  (линтер пропущен: ${e.message})`);
  }
}

main().catch(err => { console.error(err); process.exit(1); });
