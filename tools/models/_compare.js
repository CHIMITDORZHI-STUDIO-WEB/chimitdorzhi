// Страницы сравнения «X или Y» для энциклопедии открытых моделей.
// Данные разбиты по файлам, чтобы их было проще дополнять:
//   _compare_base.js — первая партия
//   _compare_a.js    — текстовые модели и код
//   _compare_b.js    — зрение, OCR, изображения и видео
//   _compare_c.js    — речь, эмбеддинги, временные ряды, фильтры
// Все факты берутся из tools/models-data.js. Бенчмарков и оценок качества нет.
module.exports = [].concat(
  require('./_compare_base.js'),
  require('./_compare_a.js'),
  require('./_compare_b.js'),
  require('./_compare_c.js'),
);
