/* ============================================================
   storage.js — сохранение прогресса в localStorage.
   Ничего не знает про механику: только читает/пишет состояние.
   ============================================================ */
(function () {
  const KEY = 'tolkovatel:v1';

  function blank() {
    // levels: { [id]: { passed:bool, score:number, hintUsed:bool } }
    return { levels: {}, total: 0, unlocked: 1 };
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return blank();
      const data = JSON.parse(raw);
      if (!data || typeof data !== 'object') return blank();
      data.levels = data.levels || {};
      data.total = data.total || 0;
      data.unlocked = data.unlocked || 1;
      return data;
    } catch (e) {
      return blank();
    }
  }

  function save(data) {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) {
      /* приватный режим / переполнение — игра работает без сохранения */
    }
  }

  function reset() {
    try { localStorage.removeItem(KEY); } catch (e) {}
    return blank();
  }

  window.Storage = { load, save, reset, blank };
})();
