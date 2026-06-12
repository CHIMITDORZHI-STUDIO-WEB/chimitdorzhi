/* ============================================================
   engine.js — движок: рендер уровня, механика проверки, очки.
   ВАЖНО: здесь нет ни одного зашитого слова. Любой уровень
   приходит из data.js и обрабатывается единообразно.
   ============================================================ */
(function () {
  const { LANGS, SCORE, DICT_URL } = window.GAME_DATA;

  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  function langPill(code) {
    const l = LANGS[code] || { label: code, color: '#7a6a4a' };
    return '<span class="lang" style="background:' + l.color + '">' + esc(l.label) + '</span>';
  }

  function dictUrl(word) {
    return DICT_URL.replace('{q}', encodeURIComponent(String(word).toLowerCase()));
  }

  /* Создаёт строку-слово. onToggle(i, rowEl) вызывается при клике/Enter. */
  function buildRow(wd, i, onToggle) {
    const row = document.createElement('div');
    row.className = 'link';
    row.setAttribute('role', 'button');
    row.setAttribute('tabindex', '0');

    const star = wd.star ? ' <span class="star" aria-hidden="true">★</span>' : '';
    const tr = wd.tr ? '<span class="tr">' + esc(wd.tr) + '</span>' : '';
    row.innerHTML =
      langPill(wd.lang) +
      '<span class="word' + (wd.star ? ' is-star' : '') + '">' +
        '<span class="w-line">' + esc(wd.w) + star + tr + '</span>' +
        '<button class="reveal" type="button" aria-expanded="false">значение</button>' +
        '<span class="mean" hidden>' + esc(wd.mean) +
          ' <a class="dict" href="' + dictUrl(wd.w) + '" target="_blank" rel="noopener">найти в словаре ↗</a>' +
        '</span>' +
      '</span>' +
      '<span class="mark" aria-hidden="true">○</span>';

    // Раскрытие значения — отдельное действие, не классификация.
    const revealBtn = row.querySelector('.reveal');
    const meanEl = row.querySelector('.mean');
    revealBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = meanEl.hasAttribute('hidden');
      if (open) { meanEl.removeAttribute('hidden'); revealBtn.textContent = 'скрыть значение'; revealBtn.setAttribute('aria-expanded', 'true'); }
      else { meanEl.setAttribute('hidden', ''); revealBtn.textContent = 'значение'; revealBtn.setAttribute('aria-expanded', 'false'); }
    });
    // Клики внутри панели значения (текст и ссылка) не классифицируют слово.
    meanEl.addEventListener('click', (e) => e.stopPropagation());

    const fire = () => onToggle(i, row);
    row.addEventListener('click', fire);
    row.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fire(); }
    });

    applyRowState(row, wd, null);
    return row;
  }

  function applyRowState(row, wd, st) {
    const mark = row.querySelector('.mark');
    row.classList.remove('kept', 'cut');
    if (st === 'kept') { row.classList.add('kept'); mark.textContent = '✓'; }
    else if (st === 'cut') { row.classList.add('cut'); mark.textContent = '✕'; }
    else { mark.textContent = '○'; }
    const stLabel = st === 'kept' ? 'оставлено' : st === 'cut' ? 'убрано' : 'не отмечено';
    row.setAttribute('aria-label', 'Слово ' + wd.w + ' — ' + stLabel + '. Нажмите, чтобы изменить.');
    row.setAttribute('aria-pressed', st === 'kept' ? 'true' : 'false');
  }

  /* Подсчёт результата проверки. */
  function evaluate(level, state) {
    let correct = 0, unmarked = 0;
    level.words.forEach((wd, i) => {
      const want = wd.related ? 'kept' : 'cut';
      if (state[i] === null) unmarked++;
      else if (state[i] === want) correct++;
    });
    return { correct, unmarked, total: level.words.length };
  }

  /* Очки за уровень (с учётом звёздочки и подсказки). Не ниже нуля. */
  function scoreLevel(level, state, hintUsed) {
    let pts = 0;
    level.words.forEach((wd, i) => {
      const want = wd.related ? 'kept' : 'cut';
      if (state[i] === want) {
        pts += SCORE.perWord;
        if (wd.star) pts += SCORE.starBonus;
      }
    });
    if (hintUsed) pts -= SCORE.hintPenalty;
    return Math.max(0, pts);
  }

  window.Engine = { buildRow, applyRowState, evaluate, scoreLevel, dictUrl, esc };
})();
