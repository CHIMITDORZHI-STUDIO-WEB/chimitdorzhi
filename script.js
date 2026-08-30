// ================================
// script.js — GSAP Animations, Theme Toggle, Language Switcher
// ================================

document.addEventListener('DOMContentLoaded', () => {

    // ---- NAVBAR SCROLL ----
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    });

    // ---- BURGER MENU ----
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (burger && mobileMenu) {
        burger.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('active');
            burger.classList.toggle('active');
            burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
        mobileMenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                burger.classList.remove('active');
                burger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ---- THEME TOGGLE ----
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    updateThemePressed(savedTheme);

    const mobileThemeToggle = document.getElementById('mobileThemeToggle');

    function toggleTheme() {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeIcon(next);
        updateThemePressed(next);
    }

    function updateThemePressed(theme) {
        // aria-pressed=true when light theme is active (i.e. toggled away from default dark)
        const pressed = theme === 'light' ? 'true' : 'false';
        document.querySelectorAll('.theme-toggle').forEach(btn => {
            btn.setAttribute('aria-pressed', pressed);
        });
    }

    themeToggle.addEventListener('click', toggleTheme);
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleTheme);
    }

    function updateThemeIcon(theme) {
        const iconClass = theme === 'dark' ? 'ph ph-moon' : 'ph ph-sun';
        document.querySelectorAll('.theme-toggle i').forEach(icon => {
            icon.className = iconClass;
        });
    }

    // ---- LANGUAGE SWITCHER ----
    const langBtns = document.querySelectorAll('.lang-btn');
    const savedLang = localStorage.getItem('lang') || document.documentElement.getAttribute('data-lang') || 'ru';

    // Apply saved language
    langBtns.forEach(btn => {
        const isActive = btn.dataset.lang === savedLang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
    if (typeof applyLanguage === 'function') {
        applyLanguage(savedLang);
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            langBtns.forEach(b => {
                const active = b.dataset.lang === lang;
                b.classList.toggle('active', active);
                b.setAttribute('aria-pressed', active ? 'true' : 'false');
            });
            localStorage.setItem('lang', lang);
            if (typeof applyLanguage === 'function') {
                applyLanguage(lang);
            }
        });
    });

    // ---- GSAP ANIMATIONS ----
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero entrance
        gsap.from('.hero-eyebrow', { opacity: 0, y: 30, duration: 0.8, delay: 0.2 });
        gsap.from('.hero-title', { opacity: 0, y: 50, duration: 1, delay: 0.4, ease: 'power3.out' });
        gsap.from('.hero-sub', { opacity: 0, y: 30, duration: 0.8, delay: 0.7 });
        gsap.from('.hero-actions', { opacity: 0, y: 20, duration: 0.6, delay: 0.9 });
        gsap.from('.hero-tags .htag', { opacity: 0, y: 15, duration: 0.5, stagger: 0.1, delay: 1.1 });

        // Section headers
        gsap.utils.toArray('.section-header').forEach(header => {
            gsap.from(header, {
                scrollTrigger: { trigger: header, start: 'top 85%', toggleActions: 'play none none none' },
                opacity: 0, y: 40, duration: 0.8, ease: 'power2.out'
            });
        });

        // Cards animation
        gsap.utils.toArray('.about-card, .bento-card, .svc-card, .case-card, .ev-col, .skill-card, .cert-col').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' },
                opacity: 0, y: 40, duration: 0.6, delay: (i % 3) * 0.1, ease: 'power2.out'
            });
        });

        // Skill bars fill animation
        gsap.utils.toArray('.sb-fill').forEach(bar => {
            const targetWidth = bar.style.width;
            bar.style.width = '0%';
            gsap.to(bar, {
                scrollTrigger: { trigger: bar, start: 'top 90%', toggleActions: 'play none none none' },
                width: targetWidth, duration: 1.2, ease: 'power2.out'
            });
        });
    }

    // ---- SHOW MORE / SHOW LESS for collapsible grids ----
    document.querySelectorAll('.show-more-btn').forEach(btn => {
        const target = document.querySelector(btn.dataset.target);
        if (!target) return;
        const labelEl = btn.querySelector('span[data-i18n]');
        const collapseKey = btn.dataset.collapseText;
        const expandKey = btn.dataset.expandText;
        btn.addEventListener('click', () => {
            const isCollapsed = target.classList.toggle('is-collapsed') === false ? false : target.classList.contains('is-collapsed');
            // toggle returns true if class added, false if removed; let's just check after toggle
            const collapsedNow = target.classList.contains('is-collapsed');
            btn.classList.toggle('is-expanded', !collapsedNow);
            if (labelEl) {
                const newKey = collapsedNow ? collapseKey : expandKey;
                labelEl.setAttribute('data-i18n', newKey);
                if (typeof translations !== 'undefined') {
                    const lang = localStorage.getItem('lang') || 'ru';
                    const dict = translations[lang] || translations.ru || {};
                    if (dict[newKey]) labelEl.textContent = dict[newKey];
                }
            }
            if (!collapsedNow) {
                if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
            } else {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ---- SERVICES FILTER ----
    const svcFilterBtns = document.querySelectorAll('.services-filter .filter-btn');
    if (svcFilterBtns.length) {
        svcFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const cat = btn.dataset.category;
                svcFilterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                document.querySelectorAll('.svc-card').forEach(card => {
                    const match = cat === 'all' || card.dataset.category === cat;
                    card.classList.toggle('is-hidden', !match);
                    if (match) {
                        if (typeof gsap !== 'undefined') {
                            gsap.set(card, { opacity: 1, y: 0, clearProps: 'transform' });
                        } else {
                            card.style.opacity = '1';
                            card.style.transform = '';
                        }
                    }
                });
                // auto-expand grid when filter is set; collapse back on "all"
                const grid = document.getElementById('servicesGrid');
                const showMoreBtn = document.querySelector('[data-target="#servicesGrid"]');
                if (grid) {
                    if (cat === 'all') grid.classList.add('is-collapsed');
                    else grid.classList.remove('is-collapsed');
                    if (showMoreBtn) showMoreBtn.style.display = (cat === 'all') ? '' : 'none';
                }
                if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
            });
        });
    }

    // ---- CASES & EVENTS FILTER ----
    const caseFilterBtns = document.querySelectorAll('.cases-filter .filter-btn');
    if (caseFilterBtns.length) {
        const caseCards = document.querySelectorAll('.case-card, .event-card');
        const caseBlocks = document.querySelectorAll('.cases-block');
        caseFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const f = btn.dataset.filter;
                caseFilterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                caseCards.forEach(card => {
                    const match = f === 'all' || card.dataset.filter === f;
                    card.classList.toggle('is-hidden', !match);
                    if (match) {
                        if (typeof gsap !== 'undefined') {
                            gsap.set(card, { opacity: 1, y: 0, clearProps: 'transform' });
                        } else {
                            card.style.opacity = '1';
                            card.style.transform = '';
                        }
                    }
                });
                caseBlocks.forEach(block => {
                    const blockCat = block.dataset.block;
                    const show = f === 'all' || blockCat === f;
                    block.classList.toggle('is-hidden', !show);
                });
                // auto-expand cases grid when filter is set
                const cgrid = document.getElementById('casesGrid');
                const cBtn = document.querySelector('[data-target="#casesGrid"]');
                if (cgrid) {
                    if (f === 'all') cgrid.classList.add('is-collapsed');
                    else cgrid.classList.remove('is-collapsed');
                    if (cBtn) cBtn.style.display = (f === 'all') ? '' : 'none';
                }
                if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
            });
        });
    }

    // ---- SMOOTH SCROLL ----
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
            }
        });
    });
});

/* Лид-цели в Яндекс.Метрике (счётчик 109281884).
   Один делегированный слушатель ловит клики по всем CTA на любой странице
   и шлёт цель. В интерфейсе Метрики создайте цели типа «JavaScript-событие»
   с идентификаторами: lead_telegram, lead_market, lead_email, lead_call. */
(function () {
    var YM_ID = 109281884;
    function goal(name) {
        try { if (typeof ym === 'function') ym(YM_ID, 'reachGoal', name); } catch (e) {}
    }
    document.addEventListener('click', function (e) {
        var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
        if (!a) return;
        var h = a.getAttribute('href') || '';
        if (/t\.me\/chimitdorzhi/i.test(h)) goal('lead_telegram');
        else if (/(^https?:\/\/[^/]*chimitdorzhi\.tech)?\/market\//i.test(h) || /#checklist/i.test(h)) goal('lead_market');
        else if (/^mailto:/i.test(h)) goal('lead_email');
        else if (/^tel:/i.test(h)) goal('lead_call');
    }, true);
})();

/* ===== WX shell: сайдбар на витринах (блог-список, рубрики, услуги, предложения). Статьи не трогаем. ===== */
(function(){
  if(document.querySelector('.wx-rail')) return; // главная уже с сайдбаром
  var path=location.pathname.replace(/\/index\.html$/,'/');
  var seg=path.replace(/^\/+|\/+$/g,'').split('/').filter(Boolean);
  var s0=seg[0]||'';
  var isArticle = s0==='blog' && seg.length===2 && ['category','page','tag'].indexOf(seg[1])<0;
  var isBlog = s0==='blog' && !isArticle;
  var isServices = s0==='services';
  var isOffers = s0==='market' || s0==='predlozheniya';
  var isCases = s0==='cases';
  var isAbout = s0==='about';
  if(isArticle){ document.body.classList.add('wx-read'); return; } /* статья: новый стиль без сайдбара */
  if(!(isBlog||isServices||isOffers||isCases||isAbout)) return;
  function n(href,ic,label,on,ext,key){return '<a href="'+href+'"'+(ext?' target="_blank" rel="noopener"':'')+(on?' aria-current="page"':'')+' class="wx-nav'+(on?' on':'')+'"><i class="ph-fill '+ic+'" aria-hidden="true"></i> <span'+(key?' data-i18n="'+key+'"':'')+'>'+label+'</span></a>';}
  function grp(label,key){return '<div class="wx-grp" data-i18n="'+key+'">'+label+'</div>';}
  var h='<a href="/" class="wx-logo"><img src="/logo-wordmark.png" alt="Chimitdorzhi Studio"></a>';
  h+='<button type="button" class="wx-search js-search-open" aria-label="Поиск"><i class="ph ph-magnifying-glass"></i> <span data-i18n="sb.search">Поиск…</span></button>';
  h+=n('/','ph-squares-four','Главная',false,false,'nav.home');
  h+=n('/services/','ph-stack','Услуги',isServices,false,'nav.services');
  h+=n('/cases/','ph-briefcase','Кейсы',isCases,false,'nav.cases');
  h+=n('/blog/','ph-newspaper','Блог',isBlog,false,'nav.blog');
  h+=n('/market/','ph-gift','Предложения',isOffers,false,'nav.offers');
  h+=n('/about/','ph-user','Обо мне',isAbout,false,'nav.about');
  if(isBlog){
    h+=grp('Рубрики блога','sb.grp.rubrics');
    h+=n('/blog/category/development/','ph-code','Разработка',false,false,'rubric.development');
    h+=n('/blog/category/ai-dev/','ph-brain','Внедрение ИИ',false,false,'rubric.ai');
    h+=n('/blog/category/legal/','ph-shield-check','152-ФЗ',false,false,'rubric.legal');
    h+=n('/cases/','ph-briefcase','Кейсы',false,false,'nav.cases');
    h+=n('/blog/category/marketing/','ph-megaphone','Маркетинг',false,false,'rubric.marketing');
  } else if(isServices){
    h+=grp('Направления','sb.grp.directions');
    h+=n('/services/web-development/','ph-browser','Сайты и боты',false,false,'rubric.web_bots');
    h+=n('/services/ai-agents/','ph-brain','Внедрение ИИ',false,false,'rubric.ai');
    h+=n('/services/business-automation/','ph-gear','Автоматизация',false,false,'rubric.automation');
    h+=n('/services/cybersecurity/','ph-shield-check','152-ФЗ',false,false,'rubric.legal');
  } else if(isOffers){
    h+=grp('Разделы','sb.grp.sections');
    h+=n('/services/','ph-stack','Все услуги',false,false,'sb.all_services');
    h+=n('/blog/','ph-newspaper','Блог',false,false,'nav.blog');
  } else if(isCases){
    h+=grp('Направления','sb.grp.directions');
    h+=n('/services/web-development/','ph-browser','Сайты и боты',false,false,'rubric.web_bots');
    h+=n('/services/ai-agents/','ph-brain','Внедрение ИИ',false,false,'rubric.ai');
    h+=n('/services/business-automation/','ph-gear','Автоматизация',false,false,'rubric.automation');
    h+=n('/services/','ph-stack','Все услуги',false,false,'sb.all_services');
  } else if(isAbout){
    h+=grp('Смотрите также','sb.grp.also');
    h+=n('/cases/','ph-briefcase','Кейсы',false,false,'nav.cases');
    h+=n('/services/','ph-stack','Услуги',false,false,'nav.services');
    h+=n('/blog/','ph-newspaper','Блог',false,false,'nav.blog');
  }
  h+='<div class="wx-cta"><div class="wx-cta-top"><span class="wx-cta-dot"></span> <span data-i18n="sb.cta_status">На связи · отвечаю за час</span></div><div class="wx-cta-title" data-i18n="sb.cta_title">Есть задача?</div><a href="https://t.me/chimitdorzhi" target="_blank" rel="noopener" class="wx-cta-btn"><i class="ph-fill ph-telegram-logo"></i> <span data-i18n="sb.cta_btn">Обсудить</span></a></div>';
  h+='<div class="wx-sp"></div><div class="wx-social">'
    +'<a href="https://t.me/chimitdorzhi" target="_blank" rel="noopener" aria-label="Telegram"><i class="ph-fill ph-telegram-logo"></i></a>'
    +'<a href="https://vk.com/chimitdorzhi" target="_blank" rel="noopener" aria-label="ВКонтакте"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.66 2 15.07 2Zm3.15 14.27h-1.53c-.58 0-.76-.47-1.8-1.5-.9-.87-1.3-.99-1.53-.99-.31 0-.4.09-.4.52v1.38c0 .37-.12.59-1.09.59-1.6 0-3.37-.97-4.62-2.78-1.88-2.65-2.39-4.64-2.39-5.05 0-.22.09-.43.52-.43h1.53c.39 0 .53.17.68.59.75 2.18 2.01 4.09 2.53 4.09.2 0 .29-.09.29-.58V9.7c-.06-1.06-.62-1.15-.62-1.53 0-.18.15-.36.39-.36h2.4c.32 0 .44.17.44.55v3.05c0 .32.14.44.24.44.2 0 .36-.12.72-.48 1.11-1.24 1.9-3.15 1.9-3.15.1-.22.28-.43.67-.43h1.53c.46 0 .56.24.46.55-.19.89-2.06 3.53-2.06 3.53-.16.26-.22.38 0 .67.16.22.68.66 1.03 1.06.64.72 1.13 1.33 1.26 1.75.14.42-.07.63-.5.63Z"/></svg></a>'
    +'<a href="https://max.ru/channel_chimitdorzhi" target="_blank" rel="noopener" aria-label="MAX" class="wx-max">MAX</a>'
    +'<button type="button" class="wx-theme" aria-label="Сменить тему"><i class="ph-fill ph-moon-stars"></i></button>'
    +'</div>';
  var aside=document.createElement('aside');
  aside.className='wx-rail'; aside.setAttribute('aria-label','Разделы сайта'); aside.innerHTML=h;
  document.body.insertBefore(aside, document.body.firstChild);
  document.body.classList.add('wx-shell');
})();

/* ===== Услуги: липкий фильтр по направлениям ===== */
(function(){
  var seg=location.pathname.replace(/^\/+|\/+$/g,'').split('/').filter(Boolean);
  if(!(seg[0]==='services' && seg.length===1)) return;
  var secs=[].slice.call(document.querySelectorAll('section.section-tight')).filter(function(s){return s.querySelector('.services-grid');});
  if(secs.length<2) return;
  var bar=document.createElement('div'); bar.className='svc-filter';
  var html='<button class="svc-chip on" data-i="-1"><i class="ph ph-squares-four"></i> Все</button>';
  secs.forEach(function(s,i){ var lab=s.querySelector('.section-label'); var t=lab?lab.textContent.trim():('Раздел '+(i+1));
    var n=s.querySelectorAll('.svc-card').length;
    html+='<button class="svc-chip" data-i="'+i+'">'+t+' <span class="svc-cnt">'+n+'</span></button>'; });
  bar.innerHTML=html;
  var featured=document.querySelector('section.section-featured');
  var anchor=featured||secs[0];
  anchor.parentNode.insertBefore(bar, anchor);
  bar.addEventListener('click', function(e){ var b=e.target.closest('.svc-chip'); if(!b) return;
    bar.querySelectorAll('.svc-chip').forEach(function(x){ x.classList.toggle('on', x===b); });
    var idx=parseInt(b.dataset.i,10);
    if(featured) featured.style.display=(idx<0)?'':'none';
    secs.forEach(function(s,i){ s.style.display=(idx<0||i===idx)?'':'none'; });
    var y=bar.getBoundingClientRect().top+window.scrollY-90; window.scrollTo({top:y,behavior:'smooth'});
  });
})();

/* ===== Кейсы: фильтр карточек по направлению ===== */
(function(){
  var bar=document.getElementById('pfFilter'); if(!bar) return;
  var cards=[].slice.call(document.querySelectorAll('.pf-card'));
  bar.addEventListener('click', function(e){ var b=e.target.closest('.svc-chip'); if(!b) return;
    bar.querySelectorAll('.svc-chip').forEach(function(x){ x.classList.toggle('on', x===b); });
    var k=b.dataset.pf;
    cards.forEach(function(c){ c.hidden=(k!=='all' && c.dataset.type!==k); });
  });
})();

/* WX: кнопка темы в сайдбаре проксирует топбарный переключатель */
document.addEventListener('click', function(e){
  if(e.target.closest('.wx-theme')){ var t=document.getElementById('themeToggle'); if(t) t.click(); }
});
