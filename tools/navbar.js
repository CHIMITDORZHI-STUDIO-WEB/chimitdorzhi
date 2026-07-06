/*
 * navbar.js — ЕДИНОЕ меню сайта.
 *
 * Один источник правды для верхней навигации на всех генерируемых страницах
 * (blog, development, infographics, offers, services). Разметка синхронизирована
 * с главной (index.html / en / cn / mn): те же пункты, тот же порядок, MN-язык,
 * переключатель темы, кейсы внутри дропдауна «Проекты».
 *
 * Абсолютные пути (/market/, /arey/ …) — чтобы меню работало из любой вложенности.
 * Все стили и JS (style.css, script.js, i18n.js) уже подключаются на каждой
 * странице и поддерживают MN + тему.
 *
 * navbar() принимает opts только для обратной совместимости со старыми вызовами
 * (напр. navbar({ langSwitcher: true })) — параметры игнорируются, меню всегда
 * одинаковое.
 */

function navbar(/* opts игнорируются — меню единое */) {
  return `<nav class="navbar" id="navbar">
    <div class="container nav-inner">
        <a href="/" class="logo">CHIMITDORZHI<span class="logo-dot">.</span></a>
        <ul class="nav-links" id="navLinks">
            <li><a href="/market/">Собрать проект</a></li>
            <li><a href="/#about" data-i18n="nav.about">Обо мне</a></li>
            <li style="display:none"><a href="/services/" data-i18n="nav.services">Услуги</a></li>
            <li><a href="/predlozheniya/" data-i18n="nav.offers">Предложения</a></li>
            <li class="nav-dropdown">
                <a href="/#projects" class="nav-dropdown-toggle"><span data-i18n="nav.projects">Проекты</span> <i class="ph ph-caret-down nav-caret" aria-hidden="true"></i></a>
                <div class="nav-dropdown-menu">
                    <div class="nav-dropdown-label" data-i18n="nav.proj.label">Наши продукты</div>
                    <a href="/blog/category/cases/" class="nav-dropdown-item">
                        <span class="nav-dropdown-icon nav-dropdown-icon--audit"><i class="ph-fill ph-briefcase" aria-hidden="true"></i></span>
                        <span class="nav-dropdown-text">
                            <span class="nav-dropdown-title">Кейсы</span>
                            <span class="nav-dropdown-desc">Реальные проекты под ключ</span>
                        </span>
                        <i class="ph ph-arrow-right nav-dropdown-arrow" aria-hidden="true"></i>
                    </a>
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
                        <span class="nav-dropdown-icon nav-dropdown-icon--logo"><img src="/assets/arey/logo.jpg" alt="AREY" loading="lazy"></span>
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
                        <span class="nav-dropdown-icon nav-dropdown-icon--mwr"><img src="/assets/mwrlife/mwr-life.png" alt="MWR Life" loading="lazy"></span>
                        <span class="nav-dropdown-text">
                            <span class="nav-dropdown-title">MWR Life</span>
                            <span class="nav-dropdown-desc">Travel-клуб и партнёрка</span>
                        </span>
                        <i class="ph ph-arrow-right nav-dropdown-arrow" aria-hidden="true"></i>
                    </a>
                </div>
            </li>
            <li style="display:none"><a href="/#cases" data-i18n="nav.cases">Кейсы</a></li>
            <li><a href="/blog/" data-i18n="nav.blog">Блог</a></li>
            <li style="display:none"><a href="/infografika/">Инфографика</a></li>
            <li><a href="/#contact" data-i18n="nav.contact">Контакт</a></li>
        </ul>
        <div class="nav-controls">
            <button class="nav-search-btn js-search-open" type="button" aria-label="Поиск по сайту"><i class="ph ph-magnifying-glass" aria-hidden="true"></i></button>
            <div class="lang-switcher" id="langSwitcher" role="group" aria-label="Выбор языка">
                <button class="lang-btn active" data-lang="ru" aria-pressed="true" aria-label="Русский">RU</button>
                <button class="lang-btn" data-lang="en" aria-pressed="false" aria-label="English">EN</button>
                <button class="lang-btn" data-lang="cn" aria-pressed="false" aria-label="中文">CN</button>
                <button class="lang-btn" data-lang="mn" aria-pressed="false" aria-label="Монгол">MN</button>
            </div>
            <button class="theme-toggle" id="themeToggle" aria-label="Переключить тему" aria-pressed="false">
                <i class="ph ph-moon" aria-hidden="true"></i>
            </button>
            <a href="https://t.me/chimitdorzhi" target="_blank" class="btn btn-accent nav-cta" data-i18n="nav.cta">СВЯЗАТЬСЯ</a>
        </div>
        <button class="burger" id="burger" aria-label="Меню" aria-expanded="false" aria-controls="mobileMenu"><span></span><span></span><span></span></button>
    </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
    <ul>
        <li><a href="/market/">Собрать проект</a></li>
        <li><a href="/#about" data-i18n="nav.about">Обо мне</a></li>
        <li><a href="/predlozheniya/" data-i18n="nav.offers">Предложения</a></li>
        <li class="mobile-has-submenu">
            <details>
                <summary aria-label="Проекты — развернуть"><span data-i18n="nav.projects">Проекты</span> <i class="ph ph-caret-down" aria-hidden="true"></i></summary>
                <ul class="mobile-submenu">
                    <li>
                        <a href="/blog/category/cases/" class="mobile-sub-item">
                            <span class="nav-dropdown-icon nav-dropdown-icon--audit"><i class="ph-fill ph-briefcase" aria-hidden="true"></i></span>
                            <span class="mobile-sub-text">
                                <span class="mobile-sub-title">Кейсы</span>
                                <span class="mobile-sub-desc">Реальные проекты под ключ</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="https://gerel.space" target="_blank" rel="noopener" class="mobile-sub-item">
                            <span class="nav-dropdown-icon nav-dropdown-icon--gerel"><i class="ph-fill ph-users-three" aria-hidden="true"></i></span>
                            <span class="mobile-sub-text">
                                <span class="mobile-sub-title">Gerel.space</span>
                                <span class="mobile-sub-desc" data-i18n="nav.proj.gerel_desc">Семейная соцсеть</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/universe_buryat/" class="mobile-sub-item">
                            <span class="nav-dropdown-icon nav-dropdown-icon--logo"><img src="/universe_buryat/logo.png" alt="Вселенная Бурят" loading="lazy"></span>
                            <span class="mobile-sub-text">
                                <span class="mobile-sub-title" data-i18n="nav.universe">Вселенная Бурят</span>
                                <span class="mobile-sub-desc" data-i18n="nav.proj.universe_desc">Культурный портал</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/arey/" class="mobile-sub-item">
                            <span class="nav-dropdown-icon nav-dropdown-icon--logo"><img src="/assets/arey/logo.jpg" alt="AREY" loading="lazy"></span>
                            <span class="mobile-sub-text">
                                <span class="mobile-sub-title" data-i18n="nav.arey">AREY</span>
                                <span class="mobile-sub-desc" data-i18n="nav.proj.arey_desc">Музыкальный лейбл</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="https://audit.chimitdorzhi.tech/" target="_blank" rel="noopener" class="mobile-sub-item">
                            <span class="nav-dropdown-icon nav-dropdown-icon--audit"><i class="ph-fill ph-seal-check" aria-hidden="true"></i></span>
                            <span class="mobile-sub-text">
                                <span class="mobile-sub-title" data-i18n="nav.audit">Аудит 152-ФЗ</span>
                                <span class="mobile-sub-desc" data-i18n="nav.proj.audit_desc">Защита от штрафов до 500 млн</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/mwrlife/" class="mobile-sub-item">
                            <span class="nav-dropdown-icon nav-dropdown-icon--mwr"><img src="/assets/mwrlife/mwr-life.png" alt="MWR Life" loading="lazy"></span>
                            <span class="mobile-sub-text">
                                <span class="mobile-sub-title">MWR Life</span>
                                <span class="mobile-sub-desc">Travel-клуб и партнёрка</span>
                            </span>
                        </a>
                    </li>
                </ul>
            </details>
        </li>
        <li><a href="/blog/" data-i18n="nav.blog">Блог</a></li>
        <li><a href="/#contact" data-i18n="nav.contact">Контакт</a></li>
    </ul>
    <div class="mobile-controls">
        <div class="mobile-lang-switcher" role="group" aria-label="Выбор языка">
            <button class="lang-btn active" data-lang="ru" aria-pressed="true" aria-label="Русский">RU</button>
            <button class="lang-btn" data-lang="en" aria-pressed="false" aria-label="English">EN</button>
            <button class="lang-btn" data-lang="cn" aria-pressed="false" aria-label="中文">CN</button>
            <button class="lang-btn" data-lang="mn" aria-pressed="false" aria-label="Монгол">MN</button>
        </div>
        <button class="theme-toggle mobile-theme-toggle" id="mobileThemeToggle" aria-label="Переключить тему" aria-pressed="false">
            <i class="ph ph-moon" aria-hidden="true"></i>
        </button>
    </div>
</div>
${require('./search-modal.js')}`;
}

module.exports = navbar;
module.exports.navbar = navbar;
