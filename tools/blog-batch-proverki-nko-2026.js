// Батч: проверки/юр-риски + НКО + контроль персонала + техаудит + разведка + продажи (8 статей ~4 мин, shortForm).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-22';
const SVC = 'https://chimitdorzhi.tech/services';

const SVC_CHECK = {
  title: 'Автоматизация проверок под ключ',
  services: [
    { icon: 'ph-fill ph-magnifying-glass', label: 'Массовая проверка контрагентов по API' },
    { icon: 'ph-fill ph-scales', label: 'Мониторинг долгов, судов, банкротств' },
    { icon: 'ph-fill ph-bell', label: 'Оповещения о рисках контрагента' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция с CRM и 1С' },
  ],
  ctaLabel: 'Обсудить автоматизацию', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_NKO = {
  title: 'IT для НКО и фондов под ключ',
  services: [
    { icon: 'ph-fill ph-heart', label: 'Приём и учёт пожертвований' },
    { icon: 'ph-fill ph-file-text', label: 'Отчётность и прозрачность' },
    { icon: 'ph-fill ph-address-book', label: 'CRM для доноров и волонтёров' },
    { icon: 'ph-fill ph-globe', label: 'Сайт фонда с онлайн-донатами' },
  ],
  ctaLabel: 'Обсудить проект НКО', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_HR = {
  title: 'Учёт и контроль персонала под ключ',
  services: [
    { icon: 'ph-fill ph-clock', label: 'Учёт рабочего времени и табель' },
    { icon: 'ph-fill ph-chart-line', label: 'KPI и отчёты по сотрудникам' },
    { icon: 'ph-fill ph-shield-check', label: 'Контроль в рамках 152-ФЗ' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция с 1С и CRM' },
  ],
  ctaLabel: 'Обсудить автоматизацию', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_SEO = {
  title: 'Технический аудит и поддержка сайта',
  services: [
    { icon: 'ph-fill ph-bug', label: 'Поиск ошибок 404 и битых ссылок' },
    { icon: 'ph-fill ph-robot', label: 'robots.txt, sitemap, микроразметка' },
    { icon: 'ph-fill ph-gauge', label: 'Скорость и индексация' },
    { icon: 'ph-fill ph-shield-check', label: 'Аудит по 152-ФЗ' },
  ],
  ctaLabel: 'Заказать техаудит', ctaUrl: 'https://audit.chimitdorzhi.tech/',
};
const SVC_SALES = {
  title: 'Автоматизация продаж под ключ',
  services: [
    { icon: 'ph-fill ph-chats-circle', label: 'Скрипты продаж в CRM' },
    { icon: 'ph-fill ph-download-simple', label: 'Мониторинг цен и парсеры' },
    { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и мотивация менеджеров' },
    { icon: 'ph-fill ph-robot', label: 'AI-ассистенты и автоворонки' },
  ],
  ctaLabel: 'Обсудить задачу', ctaUrl: 'https://t.me/chimitdorzhi',
};

const CTA_CHECK = { url: `${SVC}/business-automation/`, label: 'Автоматизация проверок' };
const CTA_NKO = { url: `${SVC}/business-automation/`, label: 'IT для НКО' };
const CTA_HR = { url: `${SVC}/hr-team-management/`, label: 'Учёт персонала' };
const CTA_SEO = { url: 'https://audit.chimitdorzhi.tech/', label: 'Заказать техаудит' };
const CTA_SALES = { url: `${SVC}/business-automation/`, label: 'Автоматизация продаж' };

const T = (items) => items.concat([{ id: 'faq', text: 'FAQ' }, { id: 'vyvody', text: 'Коротко о главном' }]);

const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D,
  readingMinutes: 4, shortForm: true, servicesOffer: SVC_CHECK, ctaInternal: CTA_CHECK,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  // === Проверки / юр-риски ===
  E({ slug: 'proverit-dolgi-fssp-kontragenta-2026', category: 'legal', heroIcon: 'ph-fill ph-magnifying-glass',
    servicesOffer: SVC_CHECK, ctaInternal: CTA_CHECK,
    title: 'Как проверить долги через ФССП и контрагента: сервисы и автоматизация',
    metaTitle: 'Проверить долги ФССП и контрагента: как и чем',
    metaDescription: 'Как проверить долги через ФССП, исполнительные производства, банкротство и лицензии контрагента бесплатно.',
    metaKeywords: 'проверить долги фссп, исполнительное производство проверить, проверка контрагента, банк данных исполнительных производств, массовая проверка контрагентов',
    excerpt: 'Как проверить долги через ФССП, исполнительные производства, банкротство и лицензии контрагента, что смотреть перед сделкой и как автоматизировать проверку по API.',
    tags: ['ФССП', 'проверка', 'контрагенты', 'риски'],
    toc: T([{ id: 'fssp', text: 'Проверка долгов через ФССП' }, { id: 'chto-eshche', text: 'Банкротство, суды, лицензии' }, { id: 'zachem', text: 'Зачем это бизнесу' }, { id: 'avtomatizaciya', text: 'Массовая проверка по API' }]),
    relatedSlugs: ['besplatnye-servisy-proverki-kontragenta-2026', 'vypiska-iz-egryul-besplatno-2026', 'integraciya-api-na-zakaz-2026'] }),

  // === НКО ===
  E({ slug: 'otchetnost-nko-2026', category: 'legal', heroIcon: 'ph-fill ph-file-text',
    servicesOffer: SVC_NKO, ctaInternal: CTA_NKO,
    title: 'Отчётность НКО: какие отчёты сдавать и как не запутаться',
    metaTitle: 'Отчётность НКО: какие отчёты и куда сдавать',
    metaDescription: 'Отчётность НКО: какие отчёты сдаёт некоммерческая организация (Минюст, налоговая, фонды), сроки.',
    metaKeywords: 'отчетность нко, отчеты некоммерческой организации, отчетность в минюст, нко отчетность сроки, автоматизация отчетности нко',
    excerpt: 'Какие отчёты сдаёт НКО (Минюст, налоговая, по грантам), в какие сроки, где чаще всего ошибаются и как автоматизировать сбор данных и подготовку отчётности.',
    tags: ['НКО', 'отчётность', 'Минюст', 'некоммерческие'],
    toc: T([{ id: 'kakie', text: 'Какие отчёты сдаёт НКО' }, { id: 'sroki', text: 'Сроки и куда сдавать' }, { id: 'oshibki', text: 'Частые ошибки' }, { id: 'avtomatizaciya', text: 'Как автоматизировать' }]),
    relatedSlugs: ['programma-dlya-nko-2026', 'onlayn-buhgalteriya-sravnenie-2026', 'integraciya-api-na-zakaz-2026'] }),

  E({ slug: 'programma-dlya-nko-2026', category: 'industries', heroIcon: 'ph-fill ph-heart',
    servicesOffer: SVC_NKO, ctaInternal: CTA_NKO,
    title: 'Программа для НКО: учёт пожертвований, доноры и прозрачность',
    metaTitle: 'Программа для НКО: донаты, CRM, прозрачность',
    metaDescription: 'Программа для НКО и фондов: как автоматизировать приём и учёт пожертвований, вести CRM доноров и волонтёров.',
    metaKeywords: 'программа для нко, crm для нко, учет пожертвований, автоматизация фонда, донаты для нко',
    excerpt: 'Как автоматизировать НКО: приём и учёт пожертвований, CRM доноров и волонтёров, прозрачность расходов и отчётность. Готовые решения и когда нужна своя.',
    tags: ['НКО', 'пожертвования', 'CRM', 'фонды'],
    toc: T([{ id: 'zachem', text: 'Зачем НКО автоматизация' }, { id: 'donaty', text: 'Приём и учёт пожертвований' }, { id: 'crm', text: 'CRM доноров и прозрачность' }, { id: 'svoya', text: 'Готовое или своё' }]),
    relatedSlugs: ['otchetnost-nko-2026', 'priem-oplaty-na-sayt-yukassa-2026', 'crm-dlya-optovyh-prodazh-2026'] }),

  // === Контроль персонала ===
  E({ slug: 'programma-kontrolya-sotrudnikov-152fz-2026', category: 'legal', heroIcon: 'ph-fill ph-eye',
    servicesOffer: SVC_HR, ctaInternal: CTA_HR,
    title: 'Программа контроля сотрудников: что законно и как не нарушить 152-ФЗ',
    metaTitle: 'Контроль сотрудников: что законно и 152-ФЗ',
    metaDescription: 'Программы контроля сотрудников: что можно отслеживать законно, а что нарушает 152-ФЗ и тайну переписки.',
    metaKeywords: 'программа контроля сотрудников, контроль сотрудников 152-фз, слежка за сотрудниками законно, мониторинг рабочего времени сотрудников, учет действий сотрудников',
    excerpt: 'Что в контроле сотрудников законно, а что нарушает 152-ФЗ и тайну переписки, как оформить согласия и уведомления и как внедрить контроль без юридических рисков.',
    tags: ['контроль сотрудников', '152-ФЗ', 'персонал', 'право'],
    toc: T([{ id: 'chto-mozhno', text: 'Что можно отслеживать' }, { id: 'chto-nelzya', text: 'Что нарушает 152-ФЗ' }, { id: 'kak-oformit', text: 'Согласия и уведомления' }, { id: 'kak-vnedrit', text: 'Как внедрить без рисков' }]),
    relatedSlugs: ['uchet-rabochego-vremeni-tabel-2026', 'audit-152-fz-2026', 'kibergigiena-sotrudnikov-2026'] }),

  E({ slug: 'uchet-rabochego-vremeni-tabel-2026', category: 'development', heroIcon: 'ph-fill ph-clock',
    servicesOffer: SVC_HR, ctaInternal: CTA_HR,
    title: 'Учёт рабочего времени и табель: от Excel к автоматизации',
    metaTitle: 'Учёт рабочего времени и табель: автоматизация',
    metaDescription: 'Учёт рабочего времени и табель: как вести без хаоса — от Excel-шаблона до автоматизации (отметки, графики смен, переработки, интеграция с 1С).',
    metaKeywords: 'учет рабочего времени, табель учета рабочего времени, табель excel, автоматизация учета времени, график смен сотрудников',
    excerpt: 'Как вести учёт рабочего времени и табель без хаоса: от Excel-шаблона до автоматизации (отметки, графики, переработки, связка с 1С) и когда пора уходить с таблиц.',
    tags: ['учёт времени', 'табель', 'персонал', 'автоматизация'],
    toc: T([{ id: 'zachem', text: 'Зачем вести учёт времени' }, { id: 'excel', text: 'Excel-шаблон: плюсы и пределы' }, { id: 'avtomatizaciya', text: 'Что даёт автоматизация' }, { id: 'kogda', text: 'Когда уходить с таблиц' }]),
    relatedSlugs: ['programma-kontrolya-sotrudnikov-152fz-2026', 'avtomatizaciya-excel-na-zakaz-2026', 'kimai-uchet-rabochego-vremeni-2026'] }),

  // === Техаудит SEO ===
  E({ slug: 'tehnicheskiy-audit-sayta-404-2026', category: 'development', heroIcon: 'ph-fill ph-bug',
    servicesOffer: SVC_SEO, ctaInternal: CTA_SEO,
    title: 'Технический аудит сайта: 404, битые ссылки, robots и sitemap',
    metaTitle: 'Техаудит сайта: 404, битые ссылки, robots, sitemap',
    metaDescription: 'Технический аудит сайта: откуда берутся ошибки 404, как найти битые ссылки, настроить robots.txt, sitemap.xml и микроразметку для индексации.',
    metaKeywords: 'ошибка 404 что делать, битые ссылки, robots.txt, sitemap.xml, технический аудит сайта',
    excerpt: 'Что такое ошибка 404 и как её исправить, как найти битые ссылки, настроить robots.txt и sitemap.xml и добавить микроразметку, чтобы сайт лучше индексировался.',
    tags: ['SEO', 'техаудит', '404', 'индексация'],
    toc: T([{ id: 'oshibka-404', text: 'Ошибка 404 и битые ссылки' }, { id: 'robots-sitemap', text: 'robots.txt и sitemap.xml' }, { id: 'razmetka', text: 'Микроразметка' }, { id: 'audit', text: 'Как провести техаудит' }]),
    relatedSlugs: ['optimizaciya-skorosti-sayta', 'seo-prodvizhenie-sayta-2026', 'audit-152-fz-2026'] }),

  // === Разведка / продажи ===
  E({ slug: 'monitoring-cen-konkurentov-2026', category: 'marketing', heroIcon: 'ph-fill ph-download-simple',
    servicesOffer: SVC_SALES, ctaInternal: CTA_SALES,
    title: 'Мониторинг цен конкурентов: сервисы и свой парсер',
    metaTitle: 'Парсер цен конкурентов: мониторинг под ключ',
    metaDescription: 'Парсер цен конкурентов: автосбор цен по вашим источникам, отслеживание позиций и уведомления об изменении. Готовые сервисы или свой парсер под ключ.',
    metaKeywords: 'мониторинг цен конкурентов, парсер цен конкурентов, отслеживание цен, анализ конкурентов, парсинг цен',
    excerpt: 'Зачем следить за ценами конкурентов, какие сервисы есть, что можно парсить легально и когда выгоднее свой парсер с выгрузкой в таблицу или CRM.',
    tags: ['мониторинг цен', 'конкуренты', 'парсинг', 'аналитика'],
    toc: T([{ id: 'zachem', text: 'Зачем следить за ценами' }, { id: 'servisy', text: 'Готовые сервисы' }, { id: 'svoy-parser', text: 'Когда нужен свой парсер' }, { id: 'legalno', text: 'Что законно' }]),
    relatedSlugs: ['parser-dannyh-na-zakaz-2026', 'analitika-wildberries-servisy-2026', 'changedetection-monitoring-saytov-2026'] }),

  E({ slug: 'skripty-prodazh-v-crm-2026', category: 'sales', heroIcon: 'ph-fill ph-chats-circle',
    servicesOffer: SVC_SALES, ctaInternal: CTA_SALES,
    title: 'Скрипты продаж и их внедрение в CRM',
    metaTitle: 'Скрипты продаж и внедрение в CRM',
    metaDescription: 'Скрипты продаж: как их составить, зачем внедрять прямо в CRM (подсказки менеджеру, этапы, автозаполнение).',
    metaKeywords: 'скрипты продаж, скрипт продаж в crm, внедрение скриптов продаж, мотивация менеджеров, kpi отдела продаж',
    excerpt: 'Как составить скрипты продаж, зачем внедрять их прямо в CRM (подсказки, этапы, автозаполнение), как связать с мотивацией по KPI и как это поднимает конверсию.',
    tags: ['скрипты продаж', 'CRM', 'отдел продаж', 'мотивация'],
    toc: T([{ id: 'zachem', text: 'Зачем скрипты в CRM' }, { id: 'kak-sostavit', text: 'Как составить скрипт' }, { id: 'vnedrenie', text: 'Внедрение в CRM' }, { id: 'motivaciya', text: 'Связка с мотивацией' }]),
    relatedSlugs: ['crm-dlya-optovyh-prodazh-2026', 'integraciya-api-na-zakaz-2026', 'kpi-chto-eto-kak-stavit-2026'] }),
];
