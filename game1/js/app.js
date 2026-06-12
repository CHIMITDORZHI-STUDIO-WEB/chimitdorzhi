/* ============================================================
   app.js — склейка: инициализация, навигация между уровнями,
   прогресс, звания. Использует data/engine/storage.
   ============================================================ */
(function () {
  const { LEVELS, RANKS } = window.GAME_DATA;
  const { buildRow, applyRowState, evaluate, scoreLevel } = window.Engine;
  const $ = (id) => document.getElementById(id);

  // Играбельны только заполненные уровни (заготовки без слов пропускаем).
  const PLAYABLE = LEVELS.filter((lv) => Array.isArray(lv.words) && lv.words.length > 0);
  const DRAFTS = LEVELS.length - PLAYABLE.length;

  let progress = window.Storage.load();
  let li = 0;            // индекс в PLAYABLE
  let state = [];        // отметки текущего уровня
  let hintUsed = false;  // открыл ли подсказку на этом заходе

  function rankFor(total) {
    let r = RANKS[0].title;
    for (const rk of RANKS) if (total >= rk.min) r = rk.title;
    return r;
  }

  function passedCount() {
    return PLAYABLE.filter((lv) => progress.levels[lv.id] && progress.levels[lv.id].passed).length;
  }

  function updateHud() {
    $('rank').textContent = rankFor(progress.total);
    $('score').textContent = String(progress.total);
    $('passed').textContent = passedCount() + ' из ' + PLAYABLE.length;
    const pct = PLAYABLE.length ? Math.round((passedCount() / PLAYABLE.length) * 100) : 0;
    $('bar').style.width = pct + '%';
  }

  function setResult(kind, html) {
    const r = $('result');
    r.className = 'result show ' + (kind || '');
    r.innerHTML = html;
  }
  function clearResult() { $('result').className = 'result'; $('result').innerHTML = ''; }

  function render() {
    const lvl = PLAYABLE[li];
    hintUsed = false;
    state = lvl.words.map(() => null);

    $('rootName').textContent = lvl.root;
    $('rootNote').innerHTML = lvl.note;
    $('task').textContent = lvl.task;
    $('hint').innerHTML = '<b>Подсказка.</b> ' + lvl.hint;
    $('hint').classList.remove('show');
    clearResult();

    const chain = $('chain');
    chain.innerHTML = '';
    lvl.words.forEach((wd, i) => chain.appendChild(buildRow(wd, i, onToggle)));

    // Кнопка «следующий» активна только если есть следующий играбельный уровень.
    $('btnNext').disabled = li >= PLAYABLE.length - 1;

    // Если уровень уже пройден ранее — мягко сообщим.
    const saved = progress.levels[lvl.id];
    if (saved && saved.passed) {
      setResult('win', 'Этот корень вы уже разобрали (получено ' + saved.score + ' очк.). Можно пройти заново для тренировки — очки начисляются один раз.');
    }
    updateMarked();
    updateHud();
  }

  function onToggle(i, row) {
    const wd = PLAYABLE[li].words[i];
    state[i] = state[i] === null ? 'kept' : state[i] === 'kept' ? 'cut' : null;
    applyRowState(row, wd, state[i]);
    updateMarked();
  }

  function updateMarked() {
    const done = state.filter((s) => s !== null).length;
    $('marked').textContent = 'Отмечено ' + done + ' из ' + state.length;
  }

  function check() {
    const lvl = PLAYABLE[li];
    const { correct, unmarked, total } = evaluate(lvl, state);

    if (unmarked > 0) {
      setResult('miss', 'Отметьте все слова — осталось ' + unmarked +
        '. По каждому решите: хранит ли оно корень ' + lvl.root + ' (✓) или это омоним-самозванец (✕).');
      return;
    }

    if (correct === total) {
      const saved = progress.levels[lvl.id];
      let gained = 0;
      if (!saved || !saved.passed) {
        gained = scoreLevel(lvl, state, hintUsed);
        progress.levels[lvl.id] = { passed: true, score: gained, hintUsed: hintUsed };
        progress.total += gained;
        if (li + 1 < PLAYABLE.length && progress.unlocked < li + 2) progress.unlocked = li + 2;
        window.Storage.save(progress);
      }
      const tail = gained ? ' <b>+' + gained + ' очков.</b>' : '';
      setResult('win', 'Верно всё! Вы увидели, как один корень ' + lvl.root +
        ' проходит через языки — и отделили настоящих родственников от созвучных чужаков.' + tail);
      updateHud();
    } else {
      setResult('miss', 'Угадано ' + correct + ' из ' + total +
        '. Похожие по звучанию — ещё не родня: у омонимов другой корень. Откройте значение или словарь и проверьте ещё раз.');
    }
  }

  function init() {
    if (PLAYABLE.length === 0) {
      $('rootName').textContent = '—';
      setResult('miss', 'Пока нет заполненных уровней. Добавьте корень в data.js.');
      return;
    }
    // Стартуем с первого непройденного, иначе с последнего доступного.
    const firstUnsolved = PLAYABLE.findIndex((lv) => !(progress.levels[lv.id] && progress.levels[lv.id].passed));
    li = firstUnsolved === -1 ? 0 : firstUnsolved;

    $('btnCheck').addEventListener('click', check);
    $('btnHint').addEventListener('click', () => {
      const h = $('hint');
      const opening = !h.classList.contains('show');
      h.classList.toggle('show');
      if (opening) hintUsed = true; // штраф учтётся при начислении за уровень
    });
    $('btnNext').addEventListener('click', () => {
      if (li < PLAYABLE.length - 1) { li++; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    });
    $('btnReset').addEventListener('click', () => {
      if (confirm('Сбросить весь прогресс и очки?')) { progress = window.Storage.reset(); li = 0; render(); }
    });

    if (DRAFTS > 0) $('drafts').textContent = 'В трафарете ещё ' + DRAFTS + ' заготовки — новые корни добавляются одним блоком данных.';
    render();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
