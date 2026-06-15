/* ============================================================================
 * engine.js — движок: рендер уровня, разбор, вердикты, проверка.
 * ВАЖНО: здесь нет ни одного зашитого слова и нет контента уровней.
 * Любой уровень и любые тексты приходят из data.js.
 * Наружу: Engine.load(level, onPass), Engine.check(), Engine.toggleAdd(),
 *         Engine.addWord(text).
 * ==========================================================================*/
const Engine = (function () {
  const $ = (id) => document.getElementById(id);

  let current = null;   // текущий объект уровня
  let added = [];       // слова, добавленные игроком (гипотезы, НЕ оцениваются)
  let onPass = null;    // колбэк(points) при успешном доказательстве

  function langName(code) { return (LANGS[code] && LANGS[code].label) || code; }
  function langColor(code) { return (LANGS[code] && LANGS[code].color) || '#7a6a4a'; }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* мини-язык разбора → размеченные span */
  function parseTransform(t) {
    return String(t || '')
      .replace(/<ar>/g, '<span class="ar">').replace(/<\/ar>/g, '</span>')
      .replace(/<drop>/g, '<span class="drop">').replace(/<\/drop>/g, '</span>')
      .replace(/<keep>/g, '<span class="keep">').replace(/<\/keep>/g, '</span>');
  }

  function clearResult() {
    const r = $('result');
    if (r) { r.className = 'result'; r.innerHTML = ''; }
  }

  function isPlayable() {
    return current && Array.isArray(current.words) && current.words.length > 0;
  }

  function load(level, onPassCb) {
    current = level;
    added = [];
    onPass = onPassCb || null;

    $('rootName').textContent = level.root || '—';
    $('rootNote').innerHTML = level.note || '';
    $('task').textContent = level.task || '';
    clearResult();
    $('addRow').classList.remove('show');
    const addInput = $('addInput');
    if (addInput) addInput.value = '';

    const playable = isPlayable();
    $('controls').style.display = playable ? '' : 'none';
    $('btnAdd').style.display = playable ? '' : 'none';

    if (!playable) {
      $('chain').innerHTML =
        '<div class="placeholder">Этот уровень ещё в подготовке. Загляните позже.</div>';
      $('progress').textContent = '';
      return;
    }

    const c = $('chain');
    c.innerHTML = '';
    current.words.forEach((wd) => c.appendChild(makeWordLink(wd)));
    updateProgress();
  }

  /* Оцениваемое звено (слово из данных уровня): с вердиктом игрока. */
  function makeWordLink(wd) {
    const el = document.createElement('div');
    el.className = 'link';
    el.dataset.verdict = '';

    const tf = parseTransform(wd.transform);
    const trHtml = wd.tr ? '<span class="tr">' + esc(wd.tr) + '</span>' : '';

    el.innerHTML =
      '<div class="row1">' +
        '<span class="lang" style="background:' + langColor(wd.lang) + '">' + esc(langName(wd.lang)) + '</span>' +
        '<span class="word">' + esc(wd.w) + trHtml +
          '<span class="mean">' + esc(wd.mean) + '</span></span>' +
        '<button class="badge" aria-expanded="false">разбор</button>' +
      '</div>' +
      '<div class="proof" role="region">' +
        '<div class="transform">' + (tf || '—') + '</div>' +
        '<div class="verdict">' +
          '<button class="vbtn yes" aria-pressed="false">родственно ✓</button>' +
          '<button class="vbtn no" aria-pressed="false">нет, созвучие ✕</button>' +
        '</div>' +
      '</div>';

    const proof = el.querySelector('.proof');
    const badge = el.querySelector('.badge');
    badge.addEventListener('click', () => {
      const open = proof.classList.toggle('show');
      badge.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    el.querySelector('.vbtn.yes').addEventListener('click', () => setVerdict(el, 'yes'));
    el.querySelector('.vbtn.no').addEventListener('click', () => setVerdict(el, 'no'));
    return el;
  }

  /* Звено, добавленное игроком: гипотеза. Не оценивается и не даёт очков. */
  function makeAddedLink(wd) {
    const el = document.createElement('div');
    el.className = 'link added';
    el.innerHTML =
      '<div class="row1">' +
        '<span class="lang" style="background:' + langColor(wd.lang) + '">' + esc(langName(wd.lang)) + '</span>' +
        '<span class="word">' + esc(wd.w) +
          '<span class="mean">' + esc(wd.mean) + '</span></span>' +
        '<span class="hypothesis">ваша гипотеза</span>' +
      '</div>';
    return el;
  }

  function setVerdict(el, v) {
    el.dataset.verdict = v;
    const y = el.querySelector('.vbtn.yes');
    const n = el.querySelector('.vbtn.no');
    y.classList.toggle('sel-yes', v === 'yes');
    n.classList.toggle('sel-no', v === 'no');
    y.setAttribute('aria-pressed', v === 'yes' ? 'true' : 'false');
    n.setAttribute('aria-pressed', v === 'no' ? 'true' : 'false');
    el.classList.toggle('proven', v === 'yes');
    clearResult();
    updateProgress();
  }

  /* только оцениваемые звенья (слова уровня), без добавленных гипотез */
  function gradedLinks() {
    return [].slice.call(document.querySelectorAll('.link:not(.added)'));
  }

  function updateProgress() {
    const els = gradedLinks();
    const done = els.filter((e) => e.dataset.verdict).length;
    $('progress').textContent = 'Разобрано ' + done + ' из ' + els.length + ' слов';
  }

  function check() {
    if (!isPlayable()) return;
    const words = current.words;
    const els = gradedLinks();
    let correct = 0, unmarked = 0;
    els.forEach((el, i) => {
      const want = words[i].related ? 'yes' : 'no';
      if (!el.dataset.verdict) unmarked++;
      else if (el.dataset.verdict === want) correct++;
    });

    const r = $('result');
    r.classList.add('show');

    if (unmarked > 0) {
      r.className = 'result show miss';
      r.innerHTML = 'Разберите все слова — осталось ' + unmarked +
        '. Откройте «разбор» и решите по каждому.';
      return;
    }
    if (correct === words.length) {
      r.className = 'result show win';
      r.innerHTML = current.win || ('Родство доказано! Один корень ' + esc(current.root) +
        ' прошёл через языки: где звук ведёт к корню — там родство, где корень иной — только созвучие.');
      if (onPass) onPass(correct * POINTS_PER_CORRECT);
    } else {
      r.className = 'result show miss';
      r.innerHTML = 'Верно ' + correct + ' из ' + words.length +
        '. Подсказка: следите за звуком. Где звук восходит к корню — родственно; ' +
        'где корень иной — только созвучие.';
    }
  }

  function toggleAdd() {
    $('addRow').classList.toggle('show');
    const inp = $('addInput');
    if ($('addRow').classList.contains('show') && inp) inp.focus();
  }

  /* Добавляет звено-гипотезу, НЕ перерисовывая уже отмеченные слова. */
  function addWord(text) {
    if (!isPlayable()) return;
    const v = String(text || '').trim();
    if (!v) return;
    const wd = {
      lang: 'rus',
      w: v.toUpperCase(),
      tr: '',
      mean: 'добавлено игроком — проверьте по словарю',
      related: true
    };
    added.push(wd);
    $('chain').appendChild(makeAddedLink(wd)); // дописываем, вердикты остальных не трогаем
    $('addInput').value = '';
  }

  return { load, check, toggleAdd, addWord };
})();
