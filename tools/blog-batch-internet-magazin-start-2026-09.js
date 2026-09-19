// Спутники статьи «Сколько заработать на интернет-магазине» (главная точка входа трафика):
// бюджет запуска, магазин в мессенджере без сайта, первые продажи. Лестница: разбор ниши →
// бот-магазин → магазин под ключ.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-19';
const S = 'https://chimitdorzhi.tech';

const SVC = { title: 'Чем я помогу на старте', services: [
  { icon: 'ph-fill ph-magnifying-glass', label: 'Бесплатно посмотрю нишу и подскажу старт' },
  { icon: 'ph-fill ph-robot', label: 'Магазин в Telegram или MAX за неделю' },
  { icon: 'ph-fill ph-shopping-cart', label: 'Интернет-магазин под ключ' },
  { icon: 'ph-fill ph-credit-card', label: 'Оплата, касса, чеки и доставка' },
]};

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));
const TG = (msg) => ({ title: 'Хотите начать с малого?', text: 'Пришлите нишу — бесплатно скажу, с чего начать и сколько на самом деле нужно. Сообщение уже подготовлено.', message: msg, before: 'kak-vyglyadit' });

const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 5, category: 'sales',
      servicesOffer: SVC, toc: tocFrom(html) },
    o, { contentHtml: html });
};

module.exports = [
  E({ slug: 'skolko-stoit-zapustit-internet-magazin-2026', heroIcon: 'ph-fill ph-calculator',
    ctaInternal: { url: `${S}/predlozheniya/zapusk-onlayn-biznesa-pod-klyuch/`, label: 'Обсудить запуск магазина' },
    inlineTg: TG('Здравствуйте! Прочитал про бюджет запуска интернет-магазина. Хочу понять, сколько нужно в моём случае. Ниша: '),
    title: 'Сколько стоит запустить интернет-магазин в 2026: минимальный и нормальный бюджет',
    metaTitle: 'Сколько стоит открыть интернет-магазин в 2026: бюджет',
    metaDescription: 'Из чего складывается бюджет запуска интернет-магазина: товар, площадка, оплата, касса, доставка, реклама. Минимальный старт и где нельзя экономить.',
    excerpt: 'Главная ошибка новичка — потратить всё на сайт и остаться без денег на товар и рекламу. Разбираю статьи расходов, минимальный старт и что можно отложить.',
    tags: ['интернет-магазин', 'бюджет', 'запуск', 'e-commerce'],
    relatedSlugs: ['zarabotok-na-internet-magazine-2026', 'magazin-v-telegram-ili-max-bez-sayta-2026', 'pervye-prodazhi-internet-magazina-2026'] }),

  E({ slug: 'magazin-v-telegram-ili-max-bez-sayta-2026', heroIcon: 'ph-fill ph-robot',
    ctaInternal: { url: `${S}/predlozheniya/bot-magazin-zakazy/`, label: 'Запустить магазин в мессенджере' },
    inlineTg: TG('Здравствуйте! Хочу магазин в Telegram или MAX без сайта. Что продаю: '),
    title: 'Магазин в Telegram или MAX без сайта: как начать продавать за неделю',
    metaTitle: 'Магазин в Telegram или MAX без сайта: запуск за неделю',
    metaDescription: 'Каталог, корзина, оплата и чеки прямо в мессенджере. Как запустить магазин в Telegram или MAX без сайта, откуда брать покупателей и когда понадобится сайт.',
    excerpt: 'Самый быстрый способ проверить спрос — магазин прямо в мессенджере. Показываю, как он устроен, где его ограничения и как потом перейти на сайт без потери клиентов.',
    tags: ['интернет-магазин', 'Telegram', 'MAX', 'боты'],
    relatedSlugs: ['zarabotok-na-internet-magazine-2026', 'skolko-stoit-zapustit-internet-magazin-2026', 'oblachnaya-kassa-2026'] }),

  E({ slug: 'pervye-prodazhi-internet-magazina-2026', heroIcon: 'ph-fill ph-trend-up',
    ctaInternal: { url: `${S}/predlozheniya/bot-magazin-zakazy/`, label: 'Запустить магазин и первые продажи' },
    inlineTg: TG('Здравствуйте! Прочитал про первые продажи интернет-магазина. Хочу обсудить старт. Ниша: '),
    title: 'Первые продажи интернет-магазина: откуда брать покупателей в первый месяц',
    metaTitle: 'Первые продажи интернет-магазина: где взять покупателей',
    metaDescription: 'Тёплый круг, свой канал, карты и справочники, доски объявлений, небольшая реклама с измерением. Откуда берутся первые покупатели и что считать с первого дня.',
    excerpt: 'Магазин запущен, а заказов нет. Разбираю каналы, которые дают первые продажи быстрее всего, и ошибки, на которых сливают первый бюджет.',
    tags: ['интернет-магазин', 'продажи', 'продвижение', 'e-commerce'],
    relatedSlugs: ['zarabotok-na-internet-magazine-2026', 'magazin-v-telegram-ili-max-bez-sayta-2026', 'yandex-karty-2gis-lokalnyy-biznes-2027'] }),
];
