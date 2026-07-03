// Батч: бизнес-модели игровой индустрии — приватные серверы, хостинг, маркетплейсы, буст, аккаунты, F2P-экономика, UA.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-03';

const SVC = {
  title: 'Что я делаю под ключ',
  services: [
    { icon: 'ph-fill ph-code', label: 'Сайты и веб-приложения' },
    { icon: 'ph-fill ph-robot', label: 'Боты в Telegram и MAX, ИИ-агенты' },
    { icon: 'ph-fill ph-flow-arrow', label: 'Автоматизация и интеграции' },
    { icon: 'ph-fill ph-storefront', label: 'Маркетплейсы и платформы' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Внедрение и поддержка' },
  ],
  ctaLabel: 'Обсудить ваш проект',
  ctaUrl: 'https://t.me/chimitdorzhi',
};
const PRED = { url: 'https://chimitdorzhi.tech/predlozheniya/', label: 'Обсудить ваш проект' };

const TOC_A = [
  { id: 'model', text: 'Как устроена бизнес-модель' },
  { id: 'ekonomika', text: 'Юнит-экономика' },
  { id: 'riski', text: 'Риски и правовые вопросы' },
  { id: 'kak-zapustit', text: 'Что нужно, чтобы запустить' },
  { id: 'faq', text: 'FAQ' },
  { id: 'vyvody', text: 'Коротко о главном' },
];
const TOC_B = [
  { id: 'model', text: 'Как устроена бизнес-модель' },
  { id: 'ekonomika', text: 'Юнит-экономика' },
  { id: 'tehstek', text: 'Технический стек' },
  { id: 'kak-zapustit', text: 'Что нужно, чтобы запустить' },
  { id: 'faq', text: 'FAQ' },
  { id: 'vyvody', text: 'Коротко о главном' },
];
const TOC_F2P = [
  { id: 'model', text: 'Как устроена модель F2P' },
  { id: 'metriki', text: 'Ключевые метрики: LTV, ARPU, ARPPU' },
  { id: 'kogortnyy-analiz', text: 'Когортный анализ на пальцах' },
  { id: 'kak-primenit', text: 'Как это применять на практике' },
  { id: 'faq', text: 'FAQ' },
  { id: 'vyvody', text: 'Коротко о главном' },
];
const TOC_UA = [
  { id: 'chto-eto', text: 'Что такое UA и почему это отдельная профессия' },
  { id: 'kanaly', text: 'Каналы привлечения' },
  { id: 'cac', text: 'CAC и как считать окупаемость' },
  { id: 'kak-optimizirovat', text: 'Как оптимизировать стоимость привлечения' },
  { id: 'faq', text: 'FAQ' },
  { id: 'vyvody', text: 'Коротко о главном' },
];
const TOC_MARKET = [
  { id: 'model', text: 'Как устроена модель маркетплейса' },
  { id: 'komissiya', text: 'Комиссия площадки и монетизация' },
  { id: 'antifrod', text: 'Эскроу, антифрод и трейд-баны' },
  { id: 'storonnie-ploshchadki', text: 'Сторонние маркетплейсы вне Steam' },
  { id: 'faq', text: 'FAQ' },
  { id: 'vyvody', text: 'Коротко о главном' },
];
const TOC_BUST = [
  { id: 'model', text: 'Как устроен рынок буст-услуг' },
  { id: 'spros', text: 'Кто и почему покупает буст' },
  { id: 'pochemu-banyat', text: 'Почему платформы банят за буст' },
  { id: 'yuridicheskaya-zona', text: 'Юридическая серая зона' },
  { id: 'faq', text: 'FAQ' },
  { id: 'vyvody', text: 'Коротко о главном' },
];
const TOC_ACC = [
  { id: 'model', text: 'Как устроен рынок продажи аккаунтов' },
  { id: 'riski-pokupatelya', text: 'Риски для покупателя' },
  { id: 'riski-prodavca', text: 'Риски для продавца' },
  { id: 'eskrou', text: 'Эскроу-сервисы и как они снижают риск' },
  { id: 'faq', text: 'FAQ' },
  { id: 'vyvody', text: 'Коротко о главном' },
];

const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D, readingMinutes: 8,
  servicesOffer: SVC, ctaInternal: PRED, category: 'esports',
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'biznes-privatnyy-server-gta-cs-minecraft-2027', heroIcon: 'ph-fill ph-server',
    toc: TOC_A,
    title: 'Бизнес на приватном сервере GTA/CS/Minecraft: юнит-экономика, донат-система, риски с правообладателями',
    metaTitle: 'Бизнес на приватном игровом сервере: экономика и риски',
    metaDescription: 'Разбираю бизнес-модель приватных серверов GTA (FiveM/RP), CS2 и Minecraft: как устроена монетизация через донат, юнит-экономика запуска и риски нарушения пользовательских соглашений разработчиков игр.',
    excerpt: 'RP-сервер GTA или сервер Minecraft с донат-привилегиями может приносить реальный доход — но это отдельный бизнес со своей экономикой и правовыми рисками. Разбираю модель.',
    tags: ['игровая индустрия', 'бизнес-модель', 'эспорт', 'донат'],
    relatedSlugs: ['hosting-igrovyh-serverov-saas-2027', 'kibertirniry-organizaciya-2026', 'importozameshchenie-po-2026'] }),

  E({ slug: 'hosting-igrovyh-serverov-saas-2027', heroIcon: 'ph-fill ph-cloud',
    toc: TOC_B,
    title: 'Хостинг игровых серверов как SaaS-бизнес: аналог Pterodactyl-платформ «под ключ»',
    metaTitle: 'Хостинг игровых серверов как SaaS-бизнес: разбор модели',
    metaDescription: 'Разбираю бизнес-модель game server hosting: как устроена подписочная аренда игровых серверов «в один клик» на базе панелей вроде Pterodactyl, технический стек, юнит-экономика и что нужно для запуска.',
    excerpt: 'Аренда сервера Minecraft или Rust в один клик без настройки — за этим стоит целый SaaS-бизнес на базе панелей вроде Pterodactyl. Разбираю модель game server hosting.',
    tags: ['игровая индустрия', 'SaaS', 'хостинг', 'бизнес-модель'],
    relatedSlugs: ['biznes-privatnyy-server-gta-cs-minecraft-2027', 'rossiyskie-oblaka-hosting-2027', 'importozameshchenie-po-2026'] }),

  E({ slug: 'ekonomika-mobilnoy-f2p-igry-2027', heroIcon: 'ph-fill ph-chart-line-up',
    toc: TOC_F2P,
    title: 'Экономика мобильной F2P-игры: LTV, ARPU, ARPPU, когортный анализ на пальцах',
    metaTitle: 'Экономика мобильной F2P-игры: LTV, ARPU, ARPPU просто',
    metaDescription: 'Объясняю ключевые метрики экономики бесплатных мобильных игр простым языком: что такое LTV, ARPU и ARPPU, зачем нужен когортный анализ и как с помощью этих цифр понять, окупается ли игра.',
    excerpt: 'LTV, ARPU, ARPPU и когортный анализ звучат сложно, но за ними простая логика: сколько денег приносит игрок и окупает ли он себя. Разбираю на понятных числовых примерах.',
    tags: ['игровая индустрия', 'мобильные игры', 'метрики', 'бизнес-модель'],
    relatedSlugs: ['user-acquisition-mobilnyh-igr-2027', 'hosting-igrovyh-serverov-saas-2027', 'geymifikaciya-saas-2026'] }),

  E({ slug: 'user-acquisition-mobilnyh-igr-2027', heroIcon: 'ph-fill ph-target',
    toc: TOC_UA,
    title: 'UA (User Acquisition) для мобильных игр: во сколько обходится один игрок и как считать окупаемость',
    metaTitle: 'User Acquisition для мобильных игр: CAC и окупаемость',
    metaDescription: 'Разбираю платное привлечение пользователей (UA) в мобильных играх: каналы привлечения, что такое CAC, как соотнести его с LTV и посчитать окупаемость рекламного бюджета на конкретном примере.',
    excerpt: 'Каждый игрок в мобильной игре что-то стоит привлечь — вопрос в том, окупается ли эта стоимость. Разбираю, как устроен User Acquisition и как считать окупаемость по CAC и LTV.',
    tags: ['игровая индустрия', 'мобильные игры', 'маркетинг', 'бизнес-модель'],
    relatedSlugs: ['ekonomika-mobilnoy-f2p-igry-2027', 'hosting-igrovyh-serverov-saas-2027', 'voronka-prodazh-b2b-2026'] }),

  E({ slug: 'marketplace-skinov-steam-cs2-2027', heroIcon: 'ph-fill ph-shopping-bag',
    toc: TOC_MARKET,
    title: 'Как устроен маркетплейс скинов (Steam Community Market/CS2): комиссия площадки, эскроу, антифрод',
    metaTitle: 'Маркетплейс скинов CS2: комиссия, эскроу, антифрод',
    metaDescription: 'Разбираю бизнес-модель торговли игровыми предметами: как устроен официальный Steam Community Market, зачем нужны сторонние маркетплейсы скинов, что такое эскроу-система Steam и как площадки борются со скам-трейдами.',
    excerpt: 'Рынок скинов CS2 — это не просто торговля картинками: комиссии, эскроу-задержки, антифрод и целая индустрия сторонних площадок вокруг официального Steam Market. Разбираю модель.',
    tags: ['игровая индустрия', 'маркетплейс', 'эспорт', 'бизнес-модель'],
    relatedSlugs: ['bust-akkauntov-reytinga-2027', 'prodazha-peredacha-igrovyh-akkauntov-2027', 'biznes-privatnyy-server-gta-cs-minecraft-2027'] }),

  E({ slug: 'bust-akkauntov-reytinga-2027', heroIcon: 'ph-fill ph-trophy',
    toc: TOC_BUST,
    title: 'Буст аккаунтов и рейтинга: юридическая серая зона, спрос и почему платформы банят',
    metaTitle: 'Буст аккаунтов и рейтинга: рынок, спрос, риски бана',
    metaDescription: 'Разбираю нишу буста игрового рейтинга: как устроен рынок буст-услуг в League of Legends, Dota 2, CS2 и других играх, кто покупает буст, почему разработчики банят за него и в чём юридическая серая зона.',
    excerpt: 'За деньги кто-то поднимет ваш ранг в любимой игре — целая ниша с ценообразованием по дивизионам и посредническими платформами. Разбираю, как это устроено и почему за это банят.',
    tags: ['игровая индустрия', 'эспорт', 'бизнес-модель'],
    relatedSlugs: ['marketplace-skinov-steam-cs2-2027', 'prodazha-peredacha-igrovyh-akkauntov-2027', 'kibertirniry-organizaciya-2026'] }),

  E({ slug: 'prodazha-peredacha-igrovyh-akkauntov-2027', heroIcon: 'ph-fill ph-user-switch',
    toc: TOC_ACC,
    title: 'Продажа и передача игровых аккаунтов: риски для покупателя и продавца, эскроу-сервисы',
    metaTitle: 'Продажа игровых аккаунтов: риски и эскроу-сервисы',
    metaDescription: 'Разбираю рынок купли-продажи готовых игровых аккаунтов: почему это формально нарушает пользовательские соглашения игр, какие риски у покупателя и продавца и как эскроу-сервисы посредников снижают вероятность мошенничества.',
    excerpt: 'Прокачанный аккаунт с редкими предметами можно купить или продать — но аккаунт юридически не ваш, а разработчика игры. Разбираю риски обеих сторон сделки и роль эскроу-посредников.',
    tags: ['игровая индустрия', 'эспорт', 'бизнес-модель'],
    relatedSlugs: ['bust-akkauntov-reytinga-2027', 'marketplace-skinov-steam-cs2-2027', 'biznes-privatnyy-server-gta-cs-minecraft-2027'] }),
];
