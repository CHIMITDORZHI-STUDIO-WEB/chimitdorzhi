// Батч кейсов (август 2026): Горячий момент, ВЭД-чекер, 4 сервиса X&X.
// Короткие кейсы (4-5 мин), category cases, CTA на конструктор проекта.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-08-04';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const CTA = { url: 'https://chimitdorzhi.tech/market/#checklist', label: 'Собрать похожий проект' };

const SVC_WEB = {
  title: 'Что я делаю под ключ',
  services: [
    { icon: 'ph-fill ph-browser', label: 'Сайт и лендинг под ваш бренд' },
    { icon: 'ph-fill ph-gear', label: 'Админка, где вы сами меняете контент' },
    { icon: 'ph-fill ph-map-pin', label: 'Карты точек, каталоги, формы' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Хостинг, домен, поддержка' },
  ],
  ctaLabel: 'Обсудить проект', ctaUrl: 'https://t.me/chimitdorzhi',
};

const SVC_AI = {
  title: 'Что я делаю под ключ',
  services: [
    { icon: 'ph-fill ph-brain', label: 'ИИ-обработка документов и данных' },
    { icon: 'ph-fill ph-database', label: 'База знаний, которая учится на решениях' },
    { icon: 'ph-fill ph-file-xls', label: 'Готовые выгрузки в Excel и XML' },
    { icon: 'ph-fill ph-hard-drives', label: 'Развёртывание на вашем сервере' },
  ],
  ctaLabel: 'Обсудить автоматизацию', ctaUrl: 'https://t.me/chimitdorzhi',
};

const SVC_TMA = {
  title: 'Что я делаю под ключ',
  services: [
    { icon: 'ph-fill ph-telegram-logo', label: 'Telegram Mini App и боты' },
    { icon: 'ph-fill ph-identification-badge', label: 'Единый вход и верификация' },
    { icon: 'ph-fill ph-squares-four', label: 'Супер-апп из нескольких сервисов' },
    { icon: 'ph-fill ph-palette', label: 'Единая дизайн-система' },
  ],
  ctaLabel: 'Обсудить мини-апп', ctaUrl: 'https://t.me/chimitdorzhi',
};

const mk = (o, svc) => Object.assign({
  category: 'cases', published: true, datePublished: D, dateModified: D,
  readingMinutes: 5, shortForm: true, servicesOffer: svc, ctaInternal: CTA,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  mk({
    slug: 'goryachiy-moment-sayt-kofeen-keys-2026',
    heroIcon: 'ph-fill ph-coffee',
    title: 'Сайт и админка для сети кофеен самообслуживания «Горячий момент»',
    metaTitle: 'Кейс: сайт и админка для сети кофеен',
    metaDescription: 'Кейс разработки сайта и админ-панели для сети кофеен самообслуживания «Горячий момент»: лендинг под бренд, карта точек.',
    metaKeywords: 'сайт для кофейни, кейс разработки сайта, админка для сайта, карта точек на сайте, лендинг под ключ, сайт с админкой, редактирование сайта без программиста',
    excerpt: 'У сети кофеен самообслуживания «Горячий момент» было 37 точек, франшиза для офисов и ноль присутствия в интернете. Я собрал сайт под бренд с картой точек и админкой, где владелец сам меняет контент, логотип и адреса без программиста.',
    tags: ['кейс', 'сайт', 'админка', 'кофейни', '2026'],
    toc: toc(
      ['problema', 'С чем пришёл клиент'],
      ['reshenie', 'Что я сделал'],
      ['admin', 'Админка без программиста'],
      ['rezultat', 'Что получил клиент'],
      ['dlya-kogo', 'Кому подойдёт такое же'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['sayt-eksperta-nedvizhimosti-lending-keys-2026', 'sayt-kafe-dostavka-natsionalnoy-kuhni-keys-2026', 'teplovik-gossayt-keys-2026'],
  }, SVC_WEB),
  mk({
    slug: 'ved-checker-proverka-tnved-keys-2026',
    heroIcon: 'ph-fill ph-scan',
    title: 'ИИ-проверка кодов ТН ВЭД: фура из 50 000 посылок за минуты',
    metaTitle: 'Кейс: ИИ-проверка кодов ТН ВЭД для декларанта',
    metaDescription: 'Кейс: сервис проверки кодов ТН ВЭД для декларанта. Раньше на фуру уходили часы ручной сверки и переделки после таможни.',
    metaKeywords: 'проверка кодов тн вэд, тн вэд автоматизация, кейс ии для бизнеса, софт для декларанта, автоматизация вэд, подбор кода тн вэд, проверка деклараций',
    excerpt: 'Декларант тратил часы на сверку кодов ТН ВЭД по фуре, а таможня заставляла переделывать сотни позиций. Я собрал сервис, где ИИ и база проверенных кодов сверяют фуру из 50 000 посылок за минуты, считают пошлины и подсвечивают ошибки.',
    tags: ['кейс', 'ИИ', 'ТН ВЭД', 'таможня', 'автоматизация'],
    toc: toc(
      ['problema', 'С чем пришёл клиент'],
      ['reshenie', 'Как устроена проверка'],
      ['baza', 'База, которая учится на декларанте'],
      ['rezultat', 'Что получил клиент'],
      ['dlya-kogo', 'Кому подойдёт такое же'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['avtovse-max-bot-miniapp-keys-2026', 'sistema-upravleniya-obshchezhitiem-keys-2026', 'teplovik-gossayt-keys-2026'],
  }, SVC_AI),
  mk({
    slug: 'xx-dating-znakomstva-keys-2026',
    heroIcon: 'ph-fill ph-heart',
    title: 'X&X Dating: сервис знакомств с проверкой родства в Telegram',
    metaTitle: 'Кейс: сервис знакомств X&X Dating в Telegram',
    metaDescription: 'Кейс X&X Dating — сервис знакомств внутри супер-аппа в Telegram Mini App: верификация по номеру, проверка родственных связей перед знакомством.',
    metaKeywords: 'сервис знакомств кейс, dating приложение разработка, telegram mini app знакомства, верификация пользователей, проверка родства, супер-апп',
    excerpt: 'Как сделать сервис знакомств, где важна проверка родственных связей и подлинность анкет? Я построил X&X Dating внутри супер-аппа в Telegram: верификация по номеру, проверка родства перед знакомством и единый вход со всеми сервисами X&X.',
    tags: ['кейс', 'Telegram Mini App', 'знакомства', 'X&X', 'верификация'],
    toc: toc(
      ['problema', 'Задача сервиса'],
      ['reshenie', 'Как устроен X&X Dating'],
      ['osobennost', 'Проверка родства и верификация'],
      ['rezultat', 'Что получилось'],
      ['dlya-kogo', 'Кому подойдёт такое же'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['xx-news-lenta-keys-2026', 'xx-market-obyavleniya-keys-2026', 'gerel-semeynaya-set-keys-2026'],
  }, SVC_TMA),
  mk({
    slug: 'xx-news-lenta-keys-2026',
    heroIcon: 'ph-fill ph-newspaper',
    title: 'X&X NEWS: новостная лента внутри супер-аппа в Telegram',
    metaTitle: 'Кейс: новостная лента X&X NEWS в Telegram',
    metaDescription: 'Кейс X&X NEWS — новостной сервис внутри супер-аппа в Telegram Mini App: агрегация новостей из источников, лента плиткой, дайджест по подписке.',
    metaKeywords: 'новостная лента кейс, агрегатор новостей разработка, telegram mini app новости, rss лента, дайджест по подписке, супер-апп',
    excerpt: 'Как собрать новостной сервис, который живёт внутри мессенджера и не требует отдельного приложения? Я сделал X&X NEWS — ленту с агрегацией из источников и дайджестом по подписке, встроенную в супер-апп в Telegram с единым входом.',
    tags: ['кейс', 'Telegram Mini App', 'новости', 'X&X', 'агрегатор'],
    toc: toc(
      ['problema', 'Задача сервиса'],
      ['reshenie', 'Как устроен X&X NEWS'],
      ['osobennost', 'Лента, источники и дайджест'],
      ['rezultat', 'Что получилось'],
      ['dlya-kogo', 'Кому подойдёт такое же'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['xx-dating-znakomstva-keys-2026', 'xx-cinema-kino-keys-2026', 'mediabiz-networking-keys-2026'],
  }, SVC_TMA),
  mk({
    slug: 'xx-cinema-kino-keys-2026',
    heroIcon: 'ph-fill ph-film-slate',
    title: 'X&X CINEMA: онлайн-кинотеатр внутри супер-аппа в Telegram',
    metaTitle: 'Кейс: онлайн-кинотеатр X&X CINEMA в Telegram',
    metaDescription: 'Кейс X&X CINEMA — сервис онлайн-кинотеатра внутри супер-аппа в Telegram Mini App: каталог кино, продолжить просмотр, раздел «Моё», тарифы.',
    metaKeywords: 'онлайн-кинотеатр кейс, видеосервис разработка, telegram mini app кино, каталог фильмов, продолжить просмотр, супер-апп',
    excerpt: 'Как запустить онлайн-кинотеатр без разработки отдельного приложения под каждую платформу? Я сделал X&X CINEMA внутри супер-аппа в Telegram: каталог, продолжение просмотра, раздел «Моё» и тарифы — с единым входом со всеми сервисами X&X.',
    tags: ['кейс', 'Telegram Mini App', 'кино', 'X&X', 'видеосервис'],
    toc: toc(
      ['problema', 'Задача сервиса'],
      ['reshenie', 'Как устроен X&X CINEMA'],
      ['osobennost', 'Каталог, просмотр и тарифы'],
      ['rezultat', 'Что получилось'],
      ['dlya-kogo', 'Кому подойдёт такое же'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['xx-news-lenta-keys-2026', 'xx-market-obyavleniya-keys-2026', 'deltour-sayt-turfirmy-keys-2026'],
  }, SVC_TMA),
  mk({
    slug: 'xx-market-obyavleniya-keys-2026',
    heroIcon: 'ph-fill ph-storefront',
    title: 'X&X Market: маркетплейс услуг и объявлений в Telegram',
    metaTitle: 'Кейс: маркетплейс X&X Market в Telegram',
    metaDescription: 'Кейс X&X Market — маркетплейс объявлений и услуг мастеров внутри супер-аппа в Telegram Mini App: каталог, избранное, чаты, заявки мастерам.',
    metaKeywords: 'маркетплейс кейс, доска объявлений разработка, telegram mini app магазин, услуги мастеров, каталог объявлений, супер-апп',
    excerpt: 'Как сделать доску объявлений и услуг мастеров без отдельного сайта и приложения? Я построил X&X Market внутри супер-аппа в Telegram: каталог, избранное, чаты и заявки мастерам с отметкой «подтверждён сообществом» и единым входом.',
    tags: ['кейс', 'Telegram Mini App', 'маркетплейс', 'X&X', 'объявления'],
    toc: toc(
      ['problema', 'Задача сервиса'],
      ['reshenie', 'Как устроен X&X Market'],
      ['osobennost', 'Каталог, заявки и доверие'],
      ['rezultat', 'Что получилось'],
      ['dlya-kogo', 'Кому подойдёт такое же'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['xx-dating-znakomstva-keys-2026', 'xx-cinema-kino-keys-2026', 'peru-loyalty-keys-2026'],
  }, SVC_TMA),
];
