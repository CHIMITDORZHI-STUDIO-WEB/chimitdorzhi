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

    // Content Data Configuration
    const contentData = {
        pm: {
            title: "Создаю сложные <br><span class=\"gradient-text\">цифровые продукты</span><br> и управляю IT-командами.",
            subtitle: "Чимитдоржи — Senior IT Project Manager. 16+ лет опыта в IT. Управление полным циклом разработки и интеграция инноваций.",
            badge: "PM STATUS: ONLINE",
            ctaPrimary: "Обсудить управление проектом",
            ctaSecondary: "Скачать резюме <i class=\"ph ph-download-simple\"></i>",
            stats: `
                <div class="stat-item fade-in-up">
                    <i class="ph ph-briefcase"></i>
                    <div>
                        <strong>16+ лет</strong>
                        <span>Опыта в IT</span>
                    </div>
                </div>
                <div class="stat-item fade-in-up" style="animation-delay: 0.1s">
                    <i class="ph ph-users-three"></i>
                    <div>
                        <strong>Agile & Scrum</strong>
                        <span>Управление командами</span>
                    </div>
                </div>
                <div class="stat-item fade-in-up" style="animation-delay: 0.2s">
                    <i class="ph ph-calendar-check"></i>
                    <div>
                        <strong>50+ мероприятий</strong>
                        <span>Успешных проектов</span>
                    </div>
                </div>
            `,
            services: `
                <div class="service-card">
                    <i class="ph ph-kanban"></i>
                    <h3>Управление проектами</h3>
                    <p>Agile, Scrum, реализация проектов от MVP до Enterprise решений.</p>
                </div>
                <div class="service-card">
                    <i class="ph ph-strategy"></i>
                    <h3>IT-консалтинг</h3>
                    <p>Аудит инфраструктуры, выбор технологического стека, оптимизация процессов.</p>
                </div>
                <div class="service-card">
                    <i class="ph ph-users-three"></i>
                    <h3>Построение команд</h3>
                    <p>Найм, онбординг, выстраивание коммуникации в распределенных командах разработчиков.</p>
                </div>
            `
        },
        studio: {
            title: "Внедряем <span class=\"gradient-text\">AI-решения</span><br> и автоматизируем ваш бизнес.",
            subtitle: "CHIMITDORZHI STUDIO — Технологическая студия полного цикла. Разработка AI/ML агентов, сложных веб-приложений и интеграция с LLM.",
            badge: "STUDIO: СИСТЕМА АКТИВНА",
            ctaPrimary: "Заказать разработку",
            ctaSecondary: "Презентация Студии <i class=\"ph ph-arrow-right\"></i>",
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
            `,
            services: `
                <div class="service-card">
                    <i class="ph ph-brain"></i>
                    <h3>AI/ML Разработка</h3>
                    <p>RAG-системы, автономные AI-агенты, корпоративные базы знаний на основе GPT/Claude.</p>
                </div>
                <div class="service-card">
                    <i class="ph ph-desktop"></i>
                    <h3>Сайты и Веб-приложения</h3>
                    <p>Разработка корпоративных порталов, SaaS-решений, Landing Pages под ключ.</p>
                </div>
                <div class="service-card">
                    <i class="ph ph-robot"></i>
                    <h3>Чат-боты и Интеграции</h3>
                    <p>Умные боты для Telegram, автоматизация воронок продаж, интеграция с CRM.</p>
                </div>
                <div class="service-card">
                    <i class="ph ph-rocket"></i>
                    <h3>Event-менеджмент</h3>
                    <p>Организация хакатонов, tech-конференций и киберспортивных турниров.</p>
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
    const servicesGrid = document.getElementById('servicesGrid');

    // Initial Load Setup
    statsContainer.innerHTML = contentData.pm.stats;
    servicesGrid.innerHTML = contentData.pm.services;

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
            tl.to([mainTitle, mainSubtitle, statusBadge, primaryCta, cvButton, statsContainer, servicesGrid], {
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
                    statsContainer.innerHTML = data.stats;
                    servicesGrid.innerHTML = data.services;

                    // Animate back in
                    gsap.to([mainTitle, mainSubtitle, statusBadge, primaryCta, cvButton, statsContainer, servicesGrid], {
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
