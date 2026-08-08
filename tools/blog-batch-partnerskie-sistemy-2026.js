// Батч: партнёрские, дилерские и франшизные системы (8 статей ~4 мин, shortForm).
// Весь кластер ведёт в разработку партнёрских систем. Хаб — «Личный кабинет партнёра».
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-22';
const SVC = 'https://chimitdorzhi.tech/services';

const SVC_PARTNER = {
  title: 'Партнёрская система под ключ',
  services: [
    { icon: 'ph-fill ph-users-three', label: 'Личный кабинет партнёра и дилера' },
    { icon: 'ph-fill ph-tree-structure', label: 'Многоуровневые структуры и рефссылки' },
    { icon: 'ph-fill ph-coins', label: 'Автоматический расчёт вознаграждений' },
    { icon: 'ph-fill ph-chart-line-up', label: 'Аналитика и рейтинги' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция с 1С, CRM и оплатой' },
  ],
  ctaLabel: 'Обсудить партнёрскую систему', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_DILER = {
  title: 'B2B и дилерская сеть под ключ',
  services: [
    { icon: 'ph-fill ph-buildings', label: 'B2B-портал и кабинет дилера' },
    { icon: 'ph-fill ph-list-numbers', label: 'Персональные прайсы и заказы' },
    { icon: 'ph-fill ph-address-book', label: 'CRM для работы с сетью' },
    { icon: 'ph-fill ph-graduation-cap', label: 'Обучение и база материалов' },
  ],
  ctaLabel: 'Обсудить B2B-проект', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_FRANCH = {
  title: 'IT-платформа для франшизы',
  services: [
    { icon: 'ph-fill ph-buildings', label: 'Единая система для всех точек' },
    { icon: 'ph-fill ph-chart-bar', label: 'Контроль стандартов и отчётность' },
    { icon: 'ph-fill ph-coins', label: 'Расчёт роялти и выплат' },
    { icon: 'ph-fill ph-graduation-cap', label: 'Обучение франчайзи' },
  ],
  ctaLabel: 'Обсудить платформу', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_GAME = {
  title: 'Геймификация и мотивация',
  services: [
    { icon: 'ph-fill ph-trophy', label: 'Конкурсы и рейтинги для партнёров' },
    { icon: 'ph-fill ph-medal', label: 'Баллы, статусы, достижения' },
    { icon: 'ph-fill ph-robot', label: 'Бот с личным зачётом' },
    { icon: 'ph-fill ph-chart-line', label: 'Прозрачная аналитика результатов' },
  ],
  ctaLabel: 'Обсудить геймификацию', ctaUrl: 'https://t.me/chimitdorzhi',
};

const CTA_PARTNER = { url: `${SVC}/business-automation/`, label: 'Партнёрская система под ключ' };
const CTA_DILER = { url: `${SVC}/business-automation/`, label: 'B2B под ключ' };
const CTA_FRANCH = { url: `${SVC}/business-automation/`, label: 'Платформа для франшизы' };
const CTA_GAME = { url: `${SVC}/business-automation/`, label: 'Геймификация под ключ' };

const T = (items) => items.concat([{ id: 'faq', text: 'FAQ' }, { id: 'vyvody', text: 'Коротко о главном' }]);

const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D,
  readingMinutes: 4, shortForm: true, servicesOffer: SVC_PARTNER, ctaInternal: CTA_PARTNER,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  // === ХАБ кластера ===
  E({ slug: 'lichnyy-kabinet-partnera-2026', category: 'development', heroIcon: 'ph-fill ph-users-three',
    servicesOffer: SVC_PARTNER, ctaInternal: CTA_PARTNER,
    title: 'Личный кабинет партнёра: что внутри и как сделать',
    metaTitle: 'Личный кабинет партнёра: что внутри и как сделать',
    metaDescription: 'Личный кабинет партнёра: какие разделы нужны — статистика, рефссылки, выплаты, материалы, — как считать вознаграждение и когда хватит готового решения.',
    metaKeywords: 'личный кабинет партнера, партнерский кабинет, кабинет дилера, партнерская программа кабинет, разработка личного кабинета партнера',
    excerpt: 'Какие разделы нужны в кабинете партнёра (статистика, рефссылки, выплаты, материалы), как считать вознаграждения и когда нужна своя система вместо готовой.',
    tags: ['партнёры', 'личный кабинет', 'B2B', 'разработка'],
    toc: T([{ id: 'zachem', text: 'Зачем нужен кабинет' }, { id: 'razdely', text: 'Что внутри: разделы' }, { id: 'raschet', text: 'Как считаются вознаграждения' }, { id: 'gotovoe-svoe', text: 'Готовое или своё' }]),
    relatedSlugs: ['uchet-partnerskih-vyplat-2026', 'b2b-portal-optoviki', 'geymifikaciya-partnerov-2026'] }),

  E({ slug: 'uchet-partnerskih-vyplat-2026', category: 'development', heroIcon: 'ph-fill ph-coins',
    servicesOffer: SVC_PARTNER, ctaInternal: CTA_PARTNER,
    title: 'Учёт партнёрских выплат и отслеживание рефссылок',
    metaTitle: 'Учёт партнёрских выплат и рефссылки',
    metaDescription: 'Как технически устроен учёт партнёрских выплат: отслеживание рефссылок и промокодов, атрибуция продаж, расчёт начислений, холд и выплаты.',
    metaKeywords: 'учет партнерских выплат, отслеживание реферальных ссылок, атрибуция продаж, промокод партнера, начисление вознаграждений',
    excerpt: 'Как отследить, кто привёл клиента (ссылки, промокоды, атрибуция), как считать начисления и выплаты партнёрам и что здесь автоматизируется.',
    tags: ['выплаты', 'рефссылки', 'атрибуция', 'автоматизация'],
    toc: T([{ id: 'otslezhivanie', text: 'Как отследить, кто привёл' }, { id: 'atribuciya', text: 'Атрибуция: чья продажа' }, { id: 'nachisleniya', text: 'Начисления и выплаты' }, { id: 'oshibki', text: 'Частые ошибки' }]),
    relatedSlugs: ['lichnyy-kabinet-partnera-2026', 'partnerskiy-marketing-affiliate-2026', 'geymifikaciya-partnerov-2026'] }),

  // === Дилеры ===
  E({ slug: 'kak-nayti-dilerov-i-postroit-set-2026', category: 'sales', heroIcon: 'ph-fill ph-handshake',
    servicesOffer: SVC_DILER, ctaInternal: CTA_DILER,
    title: 'Как найти дилеров и построить дилерскую сеть',
    metaTitle: 'Как найти дилеров и построить сеть',
    metaDescription: 'Где искать дилеров и региональных представителей, что им предложить, как держать цены под контролем и не потерять управляемость сети при росте.',
    metaKeywords: 'как найти дилеров, дилерская сеть, работа с дилерами, региональный представитель, развитие дилерской сети',
    excerpt: 'Где искать дилеров и региональных представителей, что им предложить, как выстроить систему работы с сетью и удержать управляемость при росте.',
    tags: ['дилеры', 'B2B', 'продажи', 'сеть'],
    toc: T([{ id: 'gde-iskat', text: 'Где искать дилеров' }, { id: 'chto-predlozhit', text: 'Что предложить дилеру' }, { id: 'sistema', text: 'Система работы с сетью' }, { id: 'it', text: 'Что автоматизировать' }]),
    relatedSlugs: ['crm-dlya-optovyh-prodazh-2026', 'b2b-portal-optoviki', 'lichnyy-kabinet-partnera-2026'] }),

  // === Франшиза ===
  E({ slug: 'kak-otkryt-svoyu-franshizu-2026', category: 'sales', heroIcon: 'ph-fill ph-storefront',
    servicesOffer: SVC_FRANCH, ctaInternal: CTA_FRANCH,
    title: 'Как открыть свою франшизу: упаковка и запуск',
    metaTitle: 'Как открыть свою франшизу: упаковка и запуск',
    metaDescription: 'Как упаковать бизнес во франшизу: готов ли бизнес к масштабированию, что входит в упаковку (стандарты, обучение, договор, финмодель).',
    metaKeywords: 'как открыть свою франшизу, упаковка франшизы, продать франшизу, франшиза с нуля, масштабирование бизнеса',
    excerpt: 'Готов ли ваш бизнес стать франшизой, что входит в упаковку (стандарты, обучение, договор, финмодель), сколько это стоит и с чего начинать.',
    tags: ['франшиза', 'масштабирование', 'упаковка', 'бизнес'],
    toc: T([{ id: 'gotov-li', text: 'Готов ли бизнес к франшизе' }, { id: 'upakovka', text: 'Что входит в упаковку' }, { id: 'skolko', text: 'Сколько стоит и сроки' }, { id: 'it', text: 'IT-часть франшизы' }]),
    relatedSlugs: ['paushalnyy-vznos-i-royalti-2026', 'it-platforma-dlya-franshizy-2026', 'kak-nayti-dilerov-i-postroit-set-2026'] }),

  E({ slug: 'paushalnyy-vznos-i-royalti-2026', category: 'finance', heroIcon: 'ph-fill ph-calculator',
    servicesOffer: SVC_FRANCH, ctaInternal: CTA_FRANCH,
    title: 'Паушальный взнос и роялти: как считать и на что смотреть',
    metaTitle: 'Паушальный взнос и роялти: как считать',
    metaDescription: 'Паушальный взнос и роялти простыми словами: чем отличаются, какие схемы роялти бывают и как их считать франчайзеру и покупателю франшизы.',
    metaKeywords: 'паушальный взнос, роялти франшиза, что такое паушальный взнос, как считать роялти, платежи по франшизе',
    excerpt: 'Чем паушальный взнос отличается от роялти, какие бывают схемы платежей и как считать их — и франчайзеру, и тому, кто покупает франшизу.',
    tags: ['франшиза', 'роялти', 'финансы', 'расчёты'],
    toc: T([{ id: 'raznica', text: 'В чём разница' }, { id: 'shemy', text: 'Схемы роялти' }, { id: 'kak-schitat', text: 'Как считать' }, { id: 'kontrol', text: 'Как контролировать выручку' }]),
    relatedSlugs: ['kak-otkryt-svoyu-franshizu-2026', 'it-platforma-dlya-franshizy-2026', 'uchet-partnerskih-vyplat-2026'] }),

  E({ slug: 'it-platforma-dlya-franshizy-2026', category: 'development', heroIcon: 'ph-fill ph-buildings',
    servicesOffer: SVC_FRANCH, ctaInternal: CTA_FRANCH,
    title: 'IT-платформа для франшизы: единая система для всех точек',
    metaTitle: 'IT-платформа для франшизы: система для точек',
    metaDescription: 'IT-платформа для франшизы: как управлять сетью точек из одной системы — отчётность франчайзи, контроль стандартов, расчёт роялти, обучение.',
    metaKeywords: 'it платформа для франшизы, система управления франшизой, контроль франчайзи, автоматизация франшизы, единая система для точек',
    excerpt: 'Как управлять сетью франчайзи из одной системы: отчётность точек, контроль стандартов, автоматический расчёт роялти, обучение и единые данные.',
    tags: ['франшиза', 'платформа', 'управление', 'разработка'],
    toc: T([{ id: 'problema', text: 'Почему Excel не тянет сеть' }, { id: 'chto-vnutri', text: 'Что внутри платформы' }, { id: 'kontrol', text: 'Контроль стандартов и роялти' }, { id: 'vnedrenie', text: 'Сроки и стоимость' }]),
    relatedSlugs: ['kak-otkryt-svoyu-franshizu-2026', 'paushalnyy-vznos-i-royalti-2026', 'lichnyy-kabinet-partnera-2026'] }),

  // === Агенты ===
  E({ slug: 'agentskiy-dogovor-i-voznagrazhdenie-2026', category: 'legal', heroIcon: 'ph-fill ph-file-text',
    servicesOffer: SVC_PARTNER, ctaInternal: CTA_PARTNER,
    title: 'Агентский договор и вознаграждение: как оформить и считать',
    metaTitle: 'Агентский договор и агентское вознаграждение',
    metaDescription: 'Агентский договор простыми словами: чем отличается от подряда и поставки, что обязательно прописать, как считать вознаграждение и отчёт агента.',
    metaKeywords: 'агентский договор, агентское вознаграждение, отчет агента, договор с агентом, как стать агентом компании',
    excerpt: 'Что такое агентский договор, чем отличается от других, что в нём обязательно прописать и как считается и подтверждается агентское вознаграждение.',
    tags: ['агентский договор', 'вознаграждение', 'право', 'партнёры'],
    toc: T([{ id: 'chto-eto', text: 'Что такое агентский договор' }, { id: 'chto-propisat', text: 'Что обязательно прописать' }, { id: 'voznagrazhdenie', text: 'Как считается вознаграждение' }, { id: 'avtomatizaciya', text: 'Автоматизация расчётов' }]),
    relatedSlugs: ['uchet-partnerskih-vyplat-2026', 'lichnyy-kabinet-partnera-2026', 'dogovor-porucheniya-obrabotka-pd-2026'] }),

  // === Геймификация ===
  E({ slug: 'geymifikaciya-partnerov-2026', category: 'sales', heroIcon: 'ph-fill ph-trophy',
    servicesOffer: SVC_GAME, ctaInternal: CTA_GAME,
    title: 'Геймификация партнёров и конкурсы для менеджеров продаж',
    metaTitle: 'Геймификация партнёров и конкурсы продаж',
    metaDescription: 'Как мотивировать партнёров и менеджеров без бесконечных скидок: рабочие механики конкурсов, рейтинги без демотивации, баллы и статусы вместо скидок.',
    metaKeywords: 'геймификация партнеров, конкурс для менеджеров продаж, рейтинг продавцов, мотивация партнеров, бонусная программа b2b',
    excerpt: 'Как мотивировать партнёров и менеджеров без скидок: рабочие механики конкурсов, рейтинги, которые не демотивируют, баллы и статусы вместо дисконта.',
    tags: ['геймификация', 'мотивация', 'партнёры', 'продажи'],
    toc: T([{ id: 'pochemu-skidki', text: 'Почему скидки перестают работать' }, { id: 'mehaniki', text: 'Рабочие механики' }, { id: 'reyting', text: 'Рейтинг без демотивации' }, { id: 'vnedrenie', text: 'Как это внедряется' }]),
    relatedSlugs: ['referalnyy-bot-konkurs-priglasheniy-keys-2026', 'lichnyy-kabinet-partnera-2026', 'geymifikaciya-otdela-prodazh-i-sotrudnikov-2027'] }),
];
