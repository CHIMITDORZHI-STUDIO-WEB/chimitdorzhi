/* Форма заявки (/ceny/, /predlozheniya/): проверка полей, отправка на приёмник, состояния. */
(function () {
  var forms = document.querySelectorAll('form.lead-form');
  if (!forms.length) return;
  var TG = 'https://t.me/chimitdorzhi?text=';

  function goal(name) {
    try { if (window.ym) ym(109281884, 'reachGoal', name, { page: location.pathname }); } catch (e) {}
  }

  [].forEach.call(forms, function (form) {
    var btn = form.querySelector('.lead-submit');
    var btnText = btn.querySelector('span');
    var status = form.querySelector('.lead-status');
    var f = function (n) { return form.elements[n]; };
    var started = false;

    function setErr(input, errId, bad) {
      var err = document.getElementById(errId);
      if (err) err.hidden = !bad;
      input.setAttribute('aria-invalid', bad ? 'true' : 'false');
      (input.closest('.lead-field, .lead-consent') || input).classList.toggle('is-error', bad);
      return bad;
    }
    function check() {
      var bad = false, first = null;
      [['name', 'leadNameErr', function (v) { return v.trim().length < 2; }],
       ['contact', 'leadContactErr', function (v) { return v.trim().length < 3; }]].forEach(function (c) {
        var el = f(c[0]);
        if (setErr(el, c[1], c[2](el.value))) { bad = true; first = first || el; }
      });
      if (setErr(f('consent'), 'leadConsentErr', !f('consent').checked)) { bad = true; first = first || f('consent'); }
      if (first) first.focus();
      return !bad;
    }
    function tgFallback() {
      var parts = [form.getAttribute('data-tg') || 'Здравствуйте! Хочу обсудить задачу.'];
      var m = f('message');
      // Заранее подставленный текст повторяет первую строку, его не дублируем.
      if (m.value.trim() && m.value !== m.defaultValue) parts.push(m.value.trim());
      if (f('name').value.trim()) parts.push('Меня зовут ' + f('name').value.trim() + '.');
      return TG + encodeURIComponent(parts.join('\n'));
    }
    function busy(on) {
      form.classList.toggle('is-loading', on);
      btn.disabled = on;
      btn.setAttribute('aria-busy', on ? 'true' : 'false');
      btnText.textContent = on ? 'Отправляю…' : 'Отправить заявку';
    }

    // Ошибку поля убираем, как только человек начал его исправлять.
    form.addEventListener('input', function (e) {
      if (!started) { started = true; goal('lead_form_start'); }
      var map = { name: 'leadNameErr', contact: 'leadContactErr', consent: 'leadConsentErr' };
      var id = map[e.target.name];
      if (id && e.target.getAttribute('aria-invalid') === 'true') setErr(e.target, id, false);
    });
    form.addEventListener('change', function (e) {
      if (e.target.name === 'consent' && e.target.checked) setErr(e.target, 'leadConsentErr', false);
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (form.classList.contains('is-loading')) return;
      status.className = 'lead-status';
      status.textContent = '';
      if (!check()) return;
      busy(true);
      var body = {
        name: f('name').value, contact: f('contact').value, message: f('message').value,
        website: f('website').value, consent: true,
        source: form.getAttribute('data-source') || '', page: location.href,
      };
      var ctrl = window.AbortController ? new AbortController() : null;
      var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, 15000);
      fetch(form.action, {
        method: 'POST',
        // text/plain не требует предварительного запроса CORS, приёмник читает тело как JSON.
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify(body),
        signal: ctrl ? ctrl.signal : undefined,
      }).then(function (r) {
        if (!r.ok) throw new Error(String(r.status));
        return r.json();
      }).then(function (d) {
        if (!d || !d.ok) throw new Error('not ok');
        clearTimeout(timer);
        goal('lead_form_sent');
        form.classList.remove('is-loading');
        form.classList.add('is-sent');
        form.innerHTML = '<div class="lead-done" tabindex="-1"><i class="ph-fill ph-check-circle" aria-hidden="true"></i>'
          + '<div><b>Заявка отправлена</b><p>Она уже у меня. Свяжусь с вами по контакту, который вы оставили.</p></div></div>';
        form.querySelector('.lead-done').focus();
      }).catch(function () {
        clearTimeout(timer);
        busy(false);
        status.className = 'lead-status is-error';
        status.innerHTML = 'Не получилось отправить заявку. Напишите мне в Telegram, текст уже подставлен: '
          + '<a href="' + tgFallback() + '" target="_blank" rel="noopener">открыть Telegram</a>.';
      });
    });
  });

  // Кнопки «Оставить заявку» с готовым текстом (например, смета на /ceny/).
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('[data-lead-fill]') : null;
    if (!a) return;
    var form = document.querySelector('form.lead-form');
    if (!form || !form.elements.message) return;
    e.preventDefault();
    var text = a.getAttribute('data-lead-fill');
    if (text === '@smeta' && window.__leadSmeta) text = window.__leadSmeta();
    if (text && text.charAt(0) !== '@') form.elements.message.value = text;
    var box = document.getElementById('zayavka');
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (box) box.scrollIntoView({ behavior: reduce ? 'instant' : 'smooth', block: 'start' });
    setTimeout(function () {
      // Если плавная прокрутка не дошла (вкладка в фоне, старый браузер), переходим сразу.
      var top = box ? box.getBoundingClientRect().top : 0;
      if (box && (top < -40 || top > innerHeight * 0.6)) box.scrollIntoView({ behavior: 'instant', block: 'start' });
      form.elements.name.focus({ preventScroll: true });
    }, 600);
  });
})();
