/* ============================================================================
 * app.js — склейка: инициализация, навигация между уровнями, прогресс,
 * звания. Использует data.js / engine.js / storage.js. Регистрирует SW.
 * ==========================================================================*/
(function () {
  const $ = (id) => document.getElementById(id);

  const state = Storage.load();
  let idx = 0;

  function isUnlocked(i) {
    if (i <= 0) return true;
    return state.completed.indexOf(LEVELS[i - 1].id) !== -1;
  }
  function isDone(i) {
    return state.completed.indexOf(LEVELS[i].id) !== -1;
  }
  function firstUnfinished() {
    for (let i = 0; i < LEVELS.length; i++) {
      if (isUnlocked(i) && !isDone(i)) return i;
    }
    return 0;
  }
  function rankFor(points) {
    let name = RANKS[0].name;
    for (let i = 0; i < RANKS.length; i++) {
      if (points >= RANKS[i].points) name = RANKS[i].name;
    }
    return name;
  }

  function renderHeader() {
    const completedCount = LEVELS.filter((l, i) => isDone(i)).length;
    $('statRank').textContent = rankFor(state.points);
    $('statPoints').textContent = state.points + ' очк.';
    $('statLevels').textContent = 'Пройдено ' + completedCount + ' из ' + LEVELS.length;
  }

  function renderNav() {
    $('levelTitle').textContent = 'Уровень ' + (idx + 1) + ' из ' + LEVELS.length +
      ' · корень ' + (LEVELS[idx].root || '—');
    $('btnPrev').disabled = idx <= 0;
    const nextI = idx + 1;
    $('btnNext').disabled = nextI >= LEVELS.length || !isUnlocked(nextI);
    $('btnNext').title = ($('btnNext').disabled && nextI < LEVELS.length)
      ? 'Откроется после прохождения текущего уровня' : '';
  }

  function show(i) {
    if (i < 0 || i >= LEVELS.length || !isUnlocked(i)) return;
    idx = i;
    Engine.load(LEVELS[i], onPass);
    renderHeader();
    renderNav();
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  }

  function onPass(points) {
    const lvl = LEVELS[idx];
    if (state.completed.indexOf(lvl.id) === -1) {
      state.points += points;
      state.completed.push(lvl.id);
      Storage.save(state);
    }
    renderHeader();
    renderNav(); // разблокирует «вперёд», если открылся следующий уровень
  }

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /* ----- проводка кнопок ----- */
  $('btnCheck').addEventListener('click', () => Engine.check());
  $('btnAdd').addEventListener('click', () => Engine.toggleAdd());
  $('addGo').addEventListener('click', () => Engine.addWord($('addInput').value));
  $('addInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); Engine.addWord($('addInput').value); }
  });
  $('btnPrev').addEventListener('click', () => show(idx - 1));
  $('btnNext').addEventListener('click', () => show(idx + 1));

  /* ----- регистрация Service Worker (PWA, офлайн) ----- */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('service-worker.js').catch(function () { /* офлайн необязателен */ });
    });
  }

  /* старт: первый непройденный уровень */
  idx = firstUnfinished();
  show(idx);
})();
