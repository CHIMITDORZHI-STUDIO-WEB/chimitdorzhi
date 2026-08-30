/* Минимальный шелл для market (Предложения): рисует общий сайдбар wx-rail,
   как на витринах. Без зависимостей от основного script.js (GSAP и пр.). */
(function () {
  function build() {
    if (document.querySelector('.wx-rail')) return;
    function n(href, ic, label, on, ext) {
      return '<a href="' + href + '"' + (ext ? ' target="_blank" rel="noopener"' : '') +
        ' class="wx-nav' + (on ? ' on' : '') + '"><i class="ph-fill ' + ic + '" aria-hidden="true"></i> ' + label + '</a>';
    }
    var h = '<a href="/" class="wx-logo"><img src="/logo-wordmark.png" alt="Chimitdorzhi Studio"></a>';
    h += '<button type="button" class="wx-search js-search-open" aria-label="Поиск"><i class="ph ph-magnifying-glass"></i> <span>Поиск…</span></button>';
    h += n('/', 'ph-squares-four', 'Главная', false);
    h += n('/services/', 'ph-stack', 'Услуги', false);
    h += n('/cases/', 'ph-briefcase', 'Кейсы', false);
    h += n('/blog/', 'ph-newspaper', 'Блог', false);
    h += n('/market/', 'ph-gift', 'Предложения', true);
    h += n('/about/', 'ph-user', 'Обо мне', false);
    h += '<div class="wx-grp">Разделы</div>';
    h += n('/services/', 'ph-stack', 'Все услуги', false);
    h += n('/blog/', 'ph-newspaper', 'Блог', false);
    h += '<div class="wx-cta"><div class="wx-cta-top"><span class="wx-cta-dot"></span> На связи · отвечаю за час</div><div class="wx-cta-title">Есть задача?</div><a href="https://t.me/chimitdorzhi" target="_blank" rel="noopener" class="wx-cta-btn"><i class="ph-fill ph-telegram-logo"></i> Обсудить</a></div>';
    h += '<div class="wx-sp"></div><div class="wx-social">'
      + '<a href="https://t.me/chimitdorzhi" target="_blank" rel="noopener" aria-label="Telegram"><i class="ph-fill ph-telegram-logo"></i></a>'
      + '<a href="https://vk.com/chimitdorzhi" target="_blank" rel="noopener" aria-label="ВКонтакте"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.66 2 15.07 2Zm3.15 14.27h-1.53c-.58 0-.76-.47-1.8-1.5-.9-.87-1.3-.99-1.53-.99-.31 0-.4.09-.4.52v1.38c0 .37-.12.59-1.09.59-1.6 0-3.37-.97-4.62-2.78-1.88-2.65-2.39-4.64-2.39-5.05 0-.22.09-.43.52-.43h1.53c.39 0 .53.17.68.59.75 2.18 2.01 4.09 2.53 4.09.2 0 .29-.09.29-.58V9.7c-.06-1.06-.62-1.15-.62-1.53 0-.18.15-.36.39-.36h2.4c.32 0 .44.17.44.55v3.05c0 .32.14.44.24.44.2 0 .36-.12.72-.48 1.11-1.24 1.9-3.15 1.9-3.15.1-.22.28-.43.67-.43h1.53c.46 0 .56.24.46.55-.19.89-2.06 3.53-2.06 3.53-.16.26-.22.38 0 .67.16.22.68.66 1.03 1.06.64.72 1.13 1.33 1.26 1.75.14.42-.07.63-.5.63Z"/></svg></a>'
      + '<a href="https://max.ru/channel_chimitdorzhi" target="_blank" rel="noopener" aria-label="MAX" class="wx-max">MAX</a>'
      + '</div>';
    var aside = document.createElement('aside');
    aside.className = 'wx-rail';
    aside.setAttribute('aria-label', 'Разделы сайта');
    aside.innerHTML = h;
    document.body.insertBefore(aside, document.body.firstChild);
    document.body.classList.add('wx-shell');
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
