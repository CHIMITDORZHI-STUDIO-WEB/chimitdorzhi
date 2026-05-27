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
    const savedLang = localStorage.getItem('lang') || 'ru';

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
        gsap.from('.htag', { opacity: 0, y: 15, duration: 0.5, stagger: 0.1, delay: 1.1 });

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
