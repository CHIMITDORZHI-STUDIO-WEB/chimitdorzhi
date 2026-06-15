/* ============================================================================
 * storage.js — сохранение прогресса в localStorage.
 * Ничего не знает про механику: только читает/пишет состояние.
 * Состояние: { points: number, completed: string[] (id пройденных уровней) }.
 * ==========================================================================*/
const Storage = (function () {
  const KEY = 'tolkovatel.v2';

  function defaults() {
    return { points: 0, completed: [] };
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return defaults();
      const s = JSON.parse(raw);
      return {
        points: typeof s.points === 'number' ? s.points : 0,
        completed: Array.isArray(s.completed) ? s.completed : []
      };
    } catch (e) {
      return defaults();
    }
  }

  function save(state) {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      /* приватный режим / переполнение — молча игнорируем */
    }
  }

  function reset() {
    try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ }
  }

  return { load, save, reset };
})();
