document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Content Data Configuration for Hero Section Switch
    const contentData = {
        pm: {
            title: "ДАРИЖАПОВ<br><span class=\"gradient-text gradient-pm\">ЧИМИТДОРЖИ</span>",
            subtitle: "Высококвалифицированный IT-специалист. 16+ лет опыта в IT. Управление полным циклом разработки, интеграция инноваций и организация масштабных мероприятий.",
            badge: "PM STATUS: ONLINE",
            ctaPrimary: "Обсудить проект",
            ctaSecondary: "Написать в Telegram <i class=\"ph ph-telegram-logo\"></i>",
            stats: `
                <div class="stat-item fade-in-up">
                    <i class="ph ph-briefcase"></i>
                    <div>
                        <strong>16+ лет</strong>
                        <span>Опыта в IT</span>
                    </div>
                </div>
                <div class="stat-item fade-in-up" style="animation-delay: 0.1s">
                    <i class="ph ph-calendar-check"></i>
                    <div>
                        <strong>50+ мероприятий</strong>
                        <span>Успешных проектов</span>
                    </div>
                </div>
                <div class="stat-item fade-in-up" style="animation-delay: 0.2s">
                    <i class="ph ph-users-three"></i>
                    <div>
                        <strong>Agile & Scrum</strong>
                        <span>Управление командами</span>
                    </div>
                </div>
            `
        },
        studio: {
            title: "CHIMITDORZHI<br><span class=\"gradient-text\">STUDIO</span>",
            subtitle: "Технологическая студия полного цикла. Разработка AI/ML агентов, сложных веб-приложений (React/Next.js), автоматизация бизнеса и интеграция с LLM.",
            badge: "STUDIO: СИСТЕМА АКТИВНА",
            ctaPrimary: "Заказать разработку",
            ctaSecondary: "Смотреть проекты <i class=\"ph ph-arrow-down\"></i>",
            stats: `
                <div class="stat-item fade-in-up">
                    <i class="ph ph-brain"></i>
                    <div>
                        <strong>AI & RAG</strong>
                        <span>LLM Интеграции</span>
                    </div>
                </div>
                <div class="stat-item fade-in-up" style="animation-delay: 0.1s">
                    <i class="ph ph-code"></i>
                    <div>
                        <strong>WEB/App</strong>
                        <span>Современная разработка</span>
                    </div>
                </div>
                <div class="stat-item fade-in-up" style="animation-delay: 0.2s">
                    <i class="ph ph-robot"></i>
                    <div>
                        <strong>Автоматизация</strong>
                        <span>Боты и бизнес-процессы</span>
                    </div>
                </div>
            `
        }
    };

    // Elements
    const roleToggle = document.getElementById('roleToggle');
    const labelPm = document.getElementById('label-pm');
    const labelStudio = document.getElementById('label-studio');

    // Content containers
    const mainTitle = document.getElementById('mainTitle');
    const mainSubtitle = document.getElementById('mainSubtitle');
    const statusBadge = document.getElementById('statusBadge');
    const primaryCta = document.getElementById('primaryCta');
    const cvButton = document.getElementById('cvButton');
    const statsContainer = document.getElementById('statsContainer');

    // Initial Load Setup
    statsContainer.innerHTML = contentData.pm.stats;

    function renderMode(mode) {
        const bodyTag = document.body;
        const data = contentData[mode];

        if (mode === 'studio') {
            bodyTag.classList.add('studio-mode');
            labelPm.classList.remove('active');
            labelStudio.classList.add('active');
        } else {
            bodyTag.classList.remove('studio-mode');
            labelStudio.classList.remove('active');
            labelPm.classList.add('active');
        }

        // GSAP transition for content swapping
        if (typeof gsap !== 'undefined') {
            const tl = gsap.timeline();
            tl.to([mainTitle, mainSubtitle, statusBadge, primaryCta, cvButton, statsContainer], {
                opacity: 0,
                y: -10,
                duration: 0.2,
                stagger: 0.05,
                onComplete: () => {
                    // Swap content
                    mainTitle.innerHTML = data.title;
                    mainSubtitle.innerHTML = data.subtitle;
                    statusBadge.innerHTML = data.badge;
                    primaryCta.innerHTML = data.ctaPrimary;
                    cvButton.innerHTML = data.ctaSecondary;
                    cvButton.href = mode === 'pm' ? 'https://t.me/chimitdorzhi' : '#portfolio';
                    statsContainer.innerHTML = data.stats;

                    // Animate back in
                    gsap.to([mainTitle, mainSubtitle, statusBadge, primaryCta, cvButton, statsContainer], {
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                        stagger: 0.05,
                        ease: "power2.out"
                    });
                }
            });
        }
    }

    roleToggle.addEventListener('change', (e) => {
        const mode = e.target.checked ? 'studio' : 'pm';
        renderMode(mode);
    });
});
