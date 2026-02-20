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
            mobileMenu.classList.toggle('active');
            burger.classList.toggle('active');
        });
        mobileMenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                burger.classList.remove('active');
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

    themeToggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeIcon(next);
    });

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'ph ph-moon';
        } else {
            icon.className = 'ph ph-sun';
        }
    }

    // ---- LANGUAGE SWITCHER ----
    const langBtns = document.querySelectorAll('.lang-btn');
    const savedLang = localStorage.getItem('lang') || 'ru';

    // Apply saved language
    langBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === savedLang);
    });
    if (typeof applyLanguage === 'function') {
        applyLanguage(savedLang);
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
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
        gsap.utils.toArray('.about-card, .bento-card, .svc-card, .case-card, .ev-col, .skill-card, .cert-col, .project-link-card').forEach((card, i) => {
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

    // ---- SMOOTH SCROLL ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
