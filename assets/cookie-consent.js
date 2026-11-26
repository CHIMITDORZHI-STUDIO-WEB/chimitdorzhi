/* Баннер согласия для страниц без script.js. Ключ и версия те же, что в script.js
   (localStorage.cookieConsent, version 2): выбор действует на всём сайте.
   Счётчик Метрики ждёт события cookieConsent с analytics: true. */
(function () {
  var KEY = 'cookieConsent', VERSION = 2;
  if (document.getElementById('cookieBanner')) return;
  function stored() { try { var c = JSON.parse(localStorage.getItem(KEY)); return c && c.version === VERSION ? c : null; } catch (_) { return null; } }
  var en = (document.documentElement.lang || 'ru').slice(0, 2) !== 'ru';
  var T = en
    ? { text: 'Essential cookies keep the site working. Visit statistics (Yandex Metrica) are collected only with your permission.', more: 'Privacy policy', yes: 'Allow analytics', no: 'Essential only' }
    : { text: 'Необходимые cookie нужны для работы сайта. Статистику посещений (Яндекс Метрика, Вебвизор) включаем только с вашего согласия.', more: 'Политика конфиденциальности', yes: 'Разрешить аналитику', no: 'Только необходимые' };
  function save(analytics) {
    var c = { essential: true, analytics: analytics, marketing: false, version: VERSION, timestamp: new Date().toISOString() };
    try { localStorage.setItem(KEY, JSON.stringify(c)); } catch (_) {}
    window.dispatchEvent(new CustomEvent('cookieConsent', { detail: c }));
    var b = document.getElementById('cookieMini'); if (b) b.remove();
  }
  function show() {
    if (document.getElementById('cookieMini')) return;
    var st = document.createElement('style');
    st.textContent = '#cookieMini{position:fixed;left:12px;right:12px;bottom:12px;z-index:2147483000;max-width:640px;margin:0 auto;background:#0f1424;color:#e8ebf4;border:1px solid #2b3350;border-radius:12px;padding:14px 16px;font:14px/1.45 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.35)}'
      + '#cookieMini p{margin:0 0 10px}#cookieMini a{color:#8ab4ff}#cookieMini button{font:inherit;cursor:pointer;border-radius:8px;padding:8px 14px;margin:0 8px 4px 0;border:1px solid #48527a;background:transparent;color:#e8ebf4}'
      + '#cookieMini button[data-yes]{background:#f5b642;border-color:#f5b642;color:#121218;font-weight:600}';
    document.head.appendChild(st);
    var b = document.createElement('div');
    b.id = 'cookieMini'; b.setAttribute('role', 'dialog'); b.setAttribute('aria-label', 'cookie');
    b.innerHTML = '<p>' + T.text + ' <a href="/privacy_policy.html">' + T.more + '</a></p><button type="button" data-yes>' + T.yes + '</button><button type="button" data-no>' + T.no + '</button>';
    document.body.appendChild(b);
    b.querySelector('[data-yes]').addEventListener('click', function () { save(true); });
    b.querySelector('[data-no]').addEventListener('click', function () { save(false); });
  }
  window.openCookieSettings = show;
  if (!stored()) { if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', show); else show(); }
})();
