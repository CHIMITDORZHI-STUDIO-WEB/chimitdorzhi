// Серия «Игры для бизнеса»: статьи 51–60. Коммерческий блок — читают перед заказом.
// Оглавление собирается из заголовков h2 самой статьи, чтобы не расходилось с текстом.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-17';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-game-controller', label: 'Игры и геймификация под бренд' },
  { icon: 'ph-fill ph-robot', label: 'Боты и мини-приложения в Telegram, MAX' },
  { icon: 'ph-fill ph-gear', label: 'Программы лояльности и CRM' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const CTA_GAMES = { url: `${S}/development/games/`, label: 'Обсудить игру для бизнеса' };

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));

const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, shortForm: true, datePublished: D, dateModified: D, readingMinutes: 5, category: 'igry-dlya-biznesa',
      servicesOffer: SVC_BIZ, ctaInternal: CTA_GAMES, toc: tocFrom(html) },
    o, { contentHtml: html });
};

module.exports = [

  E({ slug: 'tehzadanie-na-igru-dlya-biznesa-2026', heroIcon: 'ph-fill ph-clipboard-text',
    title: 'Техзадание на игру для бизнеса: что написать, чтобы не переделывать',
    metaTitle: 'Техзадание на игру для бизнеса: что обязательно описать',
    metaDescription: 'Переделки начинаются там, где все представляли разное. Что описать в техзадании на игру: цель, механику, призы, площадку и кто ведёт игру после запуска.',
    excerpt: '«Хотим игру» — и дальше начинаются переделки за ваш счёт. Разбираю, что обязательно написать в техзадании, что забывают почти все и как проверить его на дыры до старта работ.',
    tags: ['игры для бизнеса', 'техзадание', 'заказ разработки', 'приёмка'],
    relatedSlugs: ['skolko-stoit-igra-dlya-biznesa-2026', 'kto-vladeet-igroy-posle-razrabotki-2026', 'konstruktor-promo-igr-ili-svoya-razrabotka-2026'] }),

  E({ slug: 'konstruktor-promo-igr-ili-svoya-razrabotka-2026', heroIcon: 'ph-fill ph-puzzle-piece',
    title: 'Конструктор промо-игр или своя разработка: что выбрать бизнесу',
    metaTitle: 'Конструктор промо-игр или своя разработка: что выбрать',
    metaDescription: 'Готовые сервисы колеса фортуны запускаются за день, но упираются в потолок. Где хватит конструктора, когда нужна своя игра и что теряется при переносе.',
    excerpt: 'Конструктор дешёвый и быстрый, пока не упрёшься в чужой бренд, чужие данные и отсутствие интеграций. Показываю, где проходит граница и как начать с конструктора без ловушки.',
    tags: ['игры для бизнеса', 'выбор решения', 'конструкторы', 'данные'],
    relatedSlugs: ['skolko-stoit-igra-dlya-biznesa-2026', 'tehzadanie-na-igru-dlya-biznesa-2026', 'kto-vladeet-igroy-posle-razrabotki-2026'] }),

  E({ slug: 'skolko-stoit-soderzhat-igru-posle-zapuska-2026', heroIcon: 'ph-fill ph-receipt',
    title: 'Сколько стоит содержать игру после запуска',
    metaTitle: 'Сколько стоит содержать игру после запуска: состав расходов',
    metaDescription: 'Про цену разработки говорят все, про ежемесячные расходы почти никто. Сервер, призы, модерация, доработки: что растёт с числом игроков и что можно убрать.',
    excerpt: 'Главный страх заказчика — скрытые платежи после запуска. Разбираю по статьям, из чего складывается содержание игры, что дорожает при росте и как снизить расходы.',
    tags: ['игры для бизнеса', 'бюджет', 'поддержка', 'стоимость владения'],
    relatedSlugs: ['skolko-stoit-igra-dlya-biznesa-2026', 'okupaemost-igry-dlya-biznesa-metriki-2026', 'konstruktor-promo-igr-ili-svoya-razrabotka-2026'] }),

  E({ slug: 'igra-za-dve-nedeli-do-akcii-2026', heroIcon: 'ph-fill ph-timer',
    title: 'Игра за две недели: что реально успеть к акции',
    metaTitle: 'Игра за две недели до акции: что успеть, а что нет',
    metaDescription: 'Клиенты приходят за неделю до праздника. Что успевается на готовой механике, что требует месяца и как ужать замысел без потери смысла.',
    excerpt: 'До праздника неделя, а игры нет. Показываю, что реально сделать в короткий срок, что съедает время на самом деле и почему тестирование выкидывать нельзя.',
    tags: ['игры для бизнеса', 'сроки', 'акции', 'запуск'],
    relatedSlugs: ['sezonnye-igry-advent-kalendar-dlya-biznesa-2026', 'skolko-stoit-igra-dlya-biznesa-2026', 'tehzadanie-na-igru-dlya-biznesa-2026'] }),

  E({ slug: 'skidka-ili-igra-s-prizami-chto-deshevle-2026', heroIcon: 'ph-fill ph-percent',
    title: 'Скидка или игра с призами: что дешевле для бизнеса',
    metaTitle: 'Скидка или игра с призами: что обходится дешевле',
    metaDescription: 'Скидка забирает маржу с каждой покупки и приучает ждать акций. Игра стоит фиксированно, а призы получают не все. Как честно сравнить на своём примере.',
    excerpt: 'Скидка кажется простым решением, пока не посчитаешь, какую часть прибыли она съедает. Сравниваю два пути по деньгам и говорю, когда скидка всё-таки лучше.',
    tags: ['игры для бизнеса', 'маржа', 'акции', 'экономика'],
    relatedSlugs: ['okupaemost-igry-dlya-biznesa-metriki-2026', 'karta-loyalnosti-kak-igra-2026', 'koleso-fortuny-i-skretch-karty-zakon-2026'] }),

  E({ slug: 'odna-igra-na-set-tochek-i-franshizu-2026', heroIcon: 'ph-fill ph-buildings',
    title: 'Одна игра на сеть точек или франшизу: кто платит и как считать',
    metaTitle: 'Игра для сети точек и франшизы: кто платит и как считать',
    metaDescription: 'Разработка одна, точек много. Схемы оплаты, что настраивается в каждой точке, кто выдаёт призы и как сравнивать результаты, не наказывая слабые точки.',
    excerpt: 'У сети главный вопрос не про механику, а про деньги и управление. Разбираю, кто платит за разработку и призы, что настраивается локально и почему пилот нужен на двух точках.',
    tags: ['игры для бизнеса', 'сети и франшизы', 'управление', 'призы'],
    relatedSlugs: ['komandnaya-igra-mezhdu-filialami-seti-2026', 'karta-loyalnosti-kak-igra-2026', 'skolko-stoit-soderzhat-igru-posle-zapuska-2026'] }),

  E({ slug: 'igra-pod-zapusk-novogo-tovara-2026', heroIcon: 'ph-fill ph-rocket-launch',
    title: 'Игра под запуск нового товара: как собрать интерес до старта продаж',
    metaTitle: 'Игра под запуск товара: собрать интерес до старта продаж',
    metaDescription: 'Новинка выходит, а спроса нет, потому что о ней не знали. Механики предзапуска: угадай что внутри, охота за первой партией, конкурс названия и список ожидания.',
    excerpt: 'Товар приезжает на склад, а очереди за ним нет. Показываю механики, которые собирают интерес и контакты до старта продаж, и как перевести участников в покупателей.',
    tags: ['игры для бизнеса', 'запуск продукта', 'предзаказ', 'маркетинг'],
    relatedSlugs: ['sezonnye-igry-advent-kalendar-dlya-biznesa-2026', 'konkurs-kontenta-s-igrovym-podschetom-2026', 'igra-opros-mnenie-klientov-2026'] }),

  E({ slug: 'igra-dlya-dilerov-i-optovyh-partnerov-2026', heroIcon: 'ph-fill ph-handshake',
    title: 'Игра для дилеров и оптовых партнёров: мотивация тех, кто продаёт ваш товар',
    metaTitle: 'Геймификация дилеров: как мотивировать партнёров продавать',
    metaDescription: 'Производитель платит за рекламу, а продают дилеры, которым выгоднее чужой товар. Баллы за отгрузки, уровни партнёра, обучение и что считать результатом.',
    excerpt: 'Ваш товар продают чужие менеджеры, и им всё равно, чей он. Разбираю механики для дилеров, где проходит граница между мотивацией и подкупом закупщика и что измерять.',
    tags: ['игры для бизнеса', 'B2B', 'дилеры', 'мотивация'],
    relatedSlugs: ['igra-dlya-b2b-prodazh-slozhnyh-uslug-2026', 'komandnaya-igra-mezhdu-filialami-seti-2026', 'igra-vmesto-ankety-podbor-personala-2026'] }),

  E({ slug: 'reklama-vedet-v-igru-a-ne-na-sayt-2026', heroIcon: 'ph-fill ph-megaphone',
    title: 'Реклама ведёт в игру, а не на сайт: когда это работает',
    metaTitle: 'Реклама ведёт в игру вместо лендинга: когда это работает',
    metaDescription: 'Игра как посадочная снижает барьер: контакт просят после игры, а не до. Где связка работает, где проваливается и как понять, окупилась ли реклама.',
    excerpt: 'Человек заходит на страницу товара, смотрит и уходит. Разбираю связку «объявление — игра — заявка»: где она даёт дешёвый контакт, а где только сжигает бюджет.',
    tags: ['игры для бизнеса', 'реклама', 'посадочные страницы', 'заявки'],
    relatedSlugs: ['kak-prodvigat-brend-igru-posle-zapuska-2026', 'kakie-sobytiya-otpravlyat-iz-igry-v-analitiku-2026', 'okupaemost-igry-dlya-biznesa-metriki-2026'] }),

  E({ slug: 'kakie-sobytiya-otpravlyat-iz-igry-v-analitiku-2026', heroIcon: 'ph-fill ph-chart-bar',
    title: 'Какие события отправлять из игры, чтобы потом было что считать',
    metaTitle: 'Аналитика бренд-игры: какие события заложить до запуска',
    metaDescription: 'Игра запущена, а данных нет. Базовый набор событий: открыл, начал, дошёл до конца, получил приз, оставил контакт, вернулся — и связь игрока с заявкой.',
    excerpt: 'Число партий не говорит ничего о деньгах. Показываю набор событий, который надо заложить до запуска, и как по нему видно, какой экран лишний и что приносит заявки.',
    tags: ['игры для бизнеса', 'аналитика', 'метрики', 'воронка'],
    relatedSlugs: ['okupaemost-igry-dlya-biznesa-metriki-2026', 'reklama-vedet-v-igru-a-ne-na-sayt-2026', 'pochemu-brend-igry-provalivayutsya-2026'] }),

];
