// Батч: трафик+конверсия — маркетинг/Авито/бухгалтерия (Тип A) + магниты безопасности (Тип B).
// 8 коротких статей ~4 мин, shortForm.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-22';
const SVC = 'https://chimitdorzhi.tech/services';

const SVC_MKT = {
  title: 'Продвижение и трафик под ключ',
  services: [
    { icon: 'ph-fill ph-magnifying-glass', label: 'SEO-продвижение сайта' },
    { icon: 'ph-fill ph-megaphone', label: 'Контекстная реклама и Директ' },
    { icon: 'ph-fill ph-storefront', label: 'Авито и маркетплейсы' },
    { icon: 'ph-fill ph-chart-line-up', label: 'Аналитика и дашборды' },
    { icon: 'ph-fill ph-sparkle', label: 'GEO — попадание в ответы ИИ' },
  ],
  ctaLabel: 'Обсудить продвижение', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_AUTO = {
  title: 'Автоматизация для бизнеса',
  services: [
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция Авито и CRM' },
    { icon: 'ph-fill ph-calculator', label: 'Автоматизация бухгалтерии и отчётов' },
    { icon: 'ph-fill ph-chart-bar', label: 'Аналитика продаж и маркетплейсов' },
    { icon: 'ph-fill ph-robot', label: 'Боты и автоответы' },
  ],
  ctaLabel: 'Обсудить задачу', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_SEC = {
  title: 'Безопасность и защита данных',
  services: [
    { icon: 'ph-fill ph-shield-check', label: 'Аудит безопасности и 152-ФЗ' },
    { icon: 'ph-fill ph-lock-key', label: 'Двухфакторная защита аккаунтов' },
    { icon: 'ph-fill ph-users-three', label: 'Кибергигиена сотрудников' },
    { icon: 'ph-fill ph-warning-circle', label: 'План на случай взлома и утечки' },
  ],
  ctaLabel: 'Обсудить защиту', ctaUrl: 'https://t.me/chimitdorzhi',
};

const CTA_MKT = { url: `${SVC}/digital-marketing/`, label: 'Продвижение под ключ' };
const CTA_AUTO = { url: `${SVC}/business-automation/`, label: 'Автоматизация под ключ' };
const CTA_SEC = { url: `${SVC}/cybersecurity/`, label: 'Аудит безопасности' };

const T = (items) => items.concat([{ id: 'faq', text: 'FAQ' }, { id: 'vyvody', text: 'Коротко о главном' }]);

const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D,
  readingMinutes: 4, shortForm: true, servicesOffer: SVC_MKT, ctaInternal: CTA_MKT,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'seo-prodvizhenie-sayta-2026', category: 'marketing', heroIcon: 'ph-fill ph-magnifying-glass',
    title: 'SEO-продвижение сайта в 2026: что реально работает',
    metaTitle: 'SEO-продвижение сайта 2026: что работает',
    metaDescription: 'SEO-продвижение сайта в 2026: из чего складывается, что реально влияет на позиции (контент, скорость, ссылки, GEO), через сколько ждать результат и сколько это стоит.',
    metaKeywords: 'seo продвижение сайта, продвижение сайта 2026, раскрутка сайта, seo оптимизация, вывести сайт в топ',
    excerpt: 'Из чего складывается SEO в 2026, что реально влияет на позиции, через сколько ждать результат и сколько стоит продвижение под ключ.',
    tags: ['SEO', 'продвижение', 'маркетинг', 'трафик'],
    toc: T([{ id: 'chto-eto', text: 'Что даёт SEO' }, { id: 'chto-vliyaet', text: 'Что влияет на позиции' }, { id: 'sroki', text: 'Через сколько результат' }, { id: 'zakazat', text: 'Самому или заказать' }]),
    relatedSlugs: ['geo-optimizaciya-chto-eto-2026', 'pochemu-reklama-ne-rabotaet-2026', 'skolko-stoit-sayt-2026'] }),

  E({ slug: 'prodvizhenie-na-avito-2026', category: 'marketing', heroIcon: 'ph-fill ph-storefront',
    title: 'Продвижение на Авито: как поднять объявления в 2026',
    metaTitle: 'Продвижение на Авито: как поднять объявления',
    metaDescription: 'Продвижение на Авито в 2026: как работает ранжирование, какие способы поднять объявления реально дают заявки, частые ошибки и как связать Авито с CRM, чтобы не терять лиды.',
    metaKeywords: 'продвижение на авито, как поднять объявление на авито, авито продвижение, реклама на авито, больше заявок с авито',
    excerpt: 'Как работает ранжирование Авито, какие способы поднять объявления реально дают заявки, частые ошибки и как не терять лиды через связку с CRM.',
    tags: ['Авито', 'продвижение', 'лиды', 'маркетинг'],
    toc: T([{ id: 'kak-rabotaet', text: 'Как работает ранжирование' }, { id: 'sposoby', text: 'Способы поднять объявления' }, { id: 'oshibki', text: 'Частые ошибки' }, { id: 'biznesu', text: 'Связка с CRM' }]),
    relatedSlugs: ['avito-dlya-biznesa-2026', 'priem-zayavok-s-avito-v-crm-2027', 'seo-prodvizhenie-sayta-2026'] }),

  E({ slug: 'avito-dlya-biznesa-2026', category: 'marketing', heroIcon: 'ph-fill ph-shopping-cart',
    servicesOffer: SVC_AUTO, ctaInternal: CTA_AUTO,
    title: 'Авито для бизнеса: магазин, доставка и автоответы',
    metaTitle: 'Авито для бизнеса: магазин, доставка, автоответы',
    metaDescription: 'Авито для бизнеса в 2026: как открыть магазин, подключить доставку, настроить автоответы и связать заявки с CRM, чтобы обрабатывать больше обращений без потерь.',
    metaKeywords: 'авито для бизнеса, магазин на авито, авито доставка, автоответы авито, авито pro',
    excerpt: 'Как использовать Авито как канал продаж: магазин, доставка, автоответы и автоматизация заявок в CRM, чтобы не терять обращения.',
    tags: ['Авито', 'бизнес', 'автоматизация', 'продажи'],
    toc: T([{ id: 'vozmozhnosti', text: 'Что даёт Авито бизнесу' }, { id: 'magazin', text: 'Магазин, доставка, автоответы' }, { id: 'avtomatizaciya', text: 'Автоматизация заявок' }, { id: 'cena', text: 'Сроки и цена' }]),
    relatedSlugs: ['prodvizhenie-na-avito-2026', 'priem-zayavok-s-avito-v-crm-2027', 'integraciya-api-na-zakaz-2026'] }),

  E({ slug: 'onlayn-buhgalteriya-sravnenie-2026', category: 'finance', heroIcon: 'ph-fill ph-calculator',
    servicesOffer: SVC_AUTO, ctaInternal: CTA_AUTO,
    title: 'Онлайн-бухгалтерия для ИП: Эльба, Моё дело и Т-Банк',
    metaTitle: 'Онлайн-бухгалтерия: Эльба vs Моё дело vs Т-Банк',
    metaDescription: 'Онлайн-бухгалтерия для ИП и малого бизнеса: сравнение Контур.Эльба, Моё дело и Т-Банк по возможностям и цене, кому что подходит и что можно автоматизировать сверху.',
    metaKeywords: 'онлайн бухгалтерия, контур эльба, эльба или мое дело, онлайн бухгалтерия для ип, сравнение бухгалтерских сервисов',
    excerpt: 'Чем отличаются Эльба, Моё дело и Т-Банк для ИП, кому что подходит по возможностям и цене и что можно доавтоматизировать поверх сервиса.',
    tags: ['бухгалтерия', 'ИП', 'сервисы', 'сравнение'],
    toc: T([{ id: 'zachem', text: 'Зачем онлайн-бухгалтерия' }, { id: 'sravnenie', text: 'Эльба vs Моё дело vs Т-Банк' }, { id: 'komu-chto', text: 'Кому что подходит' }, { id: 'avtomatizaciya', text: 'Что автоматизируем сверху' }]),
    relatedSlugs: ['ai-buhgalter-avtomatizaciya-rutiny-2026', 'elektronnaya-podpis-biznes-2026', 'avtomatizaciya-excel-na-zakaz-2026'] }),

  E({ slug: 'analitika-wildberries-servisy-2026', category: 'marketing', heroIcon: 'ph-fill ph-chart-bar',
    servicesOffer: SVC_AUTO, ctaInternal: CTA_AUTO,
    title: 'Аналитика Wildberries: какие сервисы и метрики нужны селлеру',
    metaTitle: 'Аналитика Wildberries: сервисы и метрики',
    metaDescription: 'Аналитика Wildberries для селлера: какие метрики отслеживать (выкуп, оборачиваемость, реклама, юнит-экономика), какие сервисы аналитики есть и когда нужна своя система отчётов.',
    metaKeywords: 'аналитика wildberries, сервисы аналитики wb, аналитика для селлеров, метрики wildberries, отчеты wildberries',
    excerpt: 'Какие метрики WB реально важны селлеру, какие сервисы аналитики есть и когда выгоднее своя система отчётов и дашбордов.',
    tags: ['Wildberries', 'аналитика', 'селлерам', 'маркетплейсы'],
    toc: T([{ id: 'zachem', text: 'Зачем аналитика WB' }, { id: 'metriki', text: 'Какие метрики важны' }, { id: 'servisy', text: 'Готовые сервисы' }, { id: 'svoya', text: 'Когда нужна своя система' }]),
    relatedSlugs: ['ai-dlya-sellerov-wb-ozon-2026', 'biznes-na-marketpleysah-2027', 'integraciya-api-na-zakaz-2026'] }),

  E({ slug: 'dvuhfaktornaya-autentifikaciya-gid-2026', category: 'security', heroIcon: 'ph-fill ph-lock-key',
    servicesOffer: SVC_SEC, ctaInternal: CTA_SEC,
    title: 'Двухфакторная аутентификация (2FA): полный гид 2026',
    metaTitle: 'Двухфакторная аутентификация (2FA): гид 2026',
    metaDescription: 'Двухфакторная аутентификация простыми словами: что такое 2FA, какие виды бывают (SMS, приложения, ключи), как включить на ключевых сервисах и зачем она бизнесу и сотрудникам.',
    metaKeywords: 'двухфакторная аутентификация, 2fa что это, как включить двухфакторную аутентификацию, двухэтапная проверка, защита аккаунта',
    excerpt: 'Что такое 2FA простыми словами, какие виды надёжнее (SMS, приложения, ключи), как включить на ключевых сервисах и зачем это бизнесу.',
    tags: ['2FA', 'безопасность', 'аккаунты', 'защита'],
    toc: T([{ id: 'chto-eto', text: 'Что такое 2FA' }, { id: 'vidy', text: 'Виды 2FA: что надёжнее' }, { id: 'kak-vklyuchit', text: 'Как включить' }, { id: 'dlya-biznesa', text: 'Зачем это бизнесу' }]),
    relatedSlugs: ['kibergigiena-sotrudnikov-2026', 'ugon-akkaunta-telegram-max-zashchita-2026', 'vzlomali-gosuslugi-chto-delat-2026'] }),

  E({ slug: 'samozapret-na-kredity-gosuslugi-2026', category: 'security', heroIcon: 'ph-fill ph-hand-palm',
    servicesOffer: SVC_SEC, ctaInternal: CTA_SEC,
    title: 'Самозапрет на кредиты через Госуслуги: как оформить в 2026',
    metaTitle: 'Самозапрет на кредиты через Госуслуги 2026',
    metaDescription: 'Самозапрет на кредиты через Госуслуги: что это, как он защищает от мошенников, как установить и снять пошагово и какие есть нюансы. Плюс — как защитить бизнес от мошенничества.',
    metaKeywords: 'самозапрет на кредиты, самозапрет на кредиты через госуслуги, запрет на выдачу кредитов, как поставить самозапрет, защита от мошенников кредит',
    excerpt: 'Что такое самозапрет на кредиты, как он защищает от мошенников, как установить и снять его через Госуслуги пошагово и какие есть нюансы.',
    tags: ['самозапрет', 'кредиты', 'мошенники', 'безопасность'],
    toc: T([{ id: 'chto-eto', text: 'Что такое самозапрет' }, { id: 'kak-ustanovit', text: 'Как установить пошагово' }, { id: 'nyuansy', text: 'Нюансы и снятие' }, { id: 'dlya-biznesa', text: 'Защита бизнеса от мошенничества' }]),
    relatedSlugs: ['vzlomali-gosuslugi-chto-delat-2026', 'dvuhfaktornaya-autentifikaciya-gid-2026', 'kak-obnaruzhit-fishing-2026'] }),

  E({ slug: 'vzlomali-gosuslugi-chto-delat-2026', category: 'security', heroIcon: 'ph-fill ph-warning-octagon',
    servicesOffer: SVC_SEC, ctaInternal: CTA_SEC,
    title: 'Взломали Госуслуги: что делать в первый час',
    metaTitle: 'Взломали Госуслуги: что делать в первый час',
    metaDescription: 'Взломали Госуслуги — что делать в первый час: пошаговый план восстановления доступа, как отозвать доступы, проверить кредитную историю и заявки и защититься на будущее.',
    metaKeywords: 'взломали госуслуги, что делать если взломали госуслуги, восстановить доступ госуслуги, украли аккаунт госуслуги, госуслуги взлом',
    excerpt: 'Пошаговый план на первый час, если взломали Госуслуги: вернуть доступ, отозвать доверенности, проверить кредитную историю и закрыться на будущее.',
    tags: ['Госуслуги', 'взлом', 'безопасность', 'мошенники'],
    toc: T([{ id: 'pervyy-chas', text: 'Первый час: главное' }, { id: 'shagi', text: 'Пошаговый план' }, { id: 'proverit', text: 'Что проверить после' }, { id: 'profilaktika', text: 'Как защититься на будущее' }]),
    relatedSlugs: ['samozapret-na-kredity-gosuslugi-2026', 'dvuhfaktornaya-autentifikaciya-gid-2026', 'kak-obnaruzhit-fishing-2026'] }),
];
