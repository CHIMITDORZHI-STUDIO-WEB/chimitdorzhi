// Общая сборка посадочных «услуга x отрасль» (партии offers-batch-43 и дальше).
// Цены берутся только из prices-data.js по id, формат «от ... ₽».
const PRICES = require('./prices-data.js');

const price = (id) => {
  const p = PRICES.find((x) => x.id === id);
  if (!p) throw new Error('нет позиции прайса: ' + id);
  return p;
};
const raw = (id) => price(id).priceRaw;
const term = (id) => price(id).term.label;
const blog = (slug, label) => ({ url: `/blog/${slug}/`, label });

// pkg: [название, id прайса или null, пункты]
const pkg = ([name, id, items]) => ({
  name,
  priceFrom: id ? raw(id) : 'считаю после разбора задачи',
  items,
});

function landing(o) {
  const base = o.priceId ? price(o.priceId) : null;
  return {
    published: true,
    icon: o.icon,
    painsTitle: 'Узнаёте себя?',
    includesTitle: 'Что входит',
    packagesTitle: 'Сколько стоит и сколько делаю',
    ...o,
    priceFrom: base ? base.priceRaw : 'Стоимость считаю после разбора задачи',
    priceMin: base && base.price.unit === 'once' ? base.price.value : undefined,
    timeline: o.timeline || (base ? base.term.label : 'считаю после разбора задачи'),
    tgButton: o.tgButton || 'Написать в Telegram',
    packages: o.packages.map(pkg),
  };
}

module.exports = { landing, blog, raw, term };
