// Батч: боль владельца → софт/услуга (7 статей ~4 мин, shortForm). Голубой океан, высокая конверсия.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-22';
const SVC = 'https://chimitdorzhi.tech/services';

const SVC_SOFT = {
  title: 'Программа под ваш бизнес под ключ',
  services: [
    { icon: 'ph-fill ph-squares-four', label: 'Учёт, CRM и отраслевые программы' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграции с 1С, кассой, маркетплейсами' },
    { icon: 'ph-fill ph-file-text', label: 'Электронные документы и отчётность' },
    { icon: 'ph-fill ph-robot', label: 'Боты и автоматизация рутины' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Поддержка после запуска' },
  ],
  ctaLabel: 'Обсудить программу', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_SEC = {
  title: 'Спасение и защита сайта',
  services: [
    { icon: 'ph-fill ph-shield-check', label: 'Лечение и защита взломанного сайта' },
    { icon: 'ph-fill ph-key', label: 'Возврат сайта, домена и доступов' },
    { icon: 'ph-fill ph-bug', label: 'Поиск и удаление вирусов' },
    { icon: 'ph-fill ph-wrench', label: 'Доработка и поддержка' },
  ],
  ctaLabel: 'Срочно помочь с сайтом', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_AI = {
  title: 'ИИ и автоматизация под ключ',
  services: [
    { icon: 'ph-fill ph-brain', label: 'Бот с базой знаний (RAG)' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграции: WB, 1С, CRM' },
    { icon: 'ph-fill ph-chat-circle-dots', label: 'AI-ассистенты и автоответы' },
    { icon: 'ph-fill ph-chart-line', label: 'Автоматизация рутины' },
  ],
  ctaLabel: 'Обсудить задачу', ctaUrl: 'https://t.me/chimitdorzhi',
};

const CTA_SOFT = { url: `${SVC}/business-automation/`, label: 'Программа под ключ' };
const CTA_SEC = { url: `${SVC}/cybersecurity/`, label: 'Помощь с сайтом' };
const CTA_DEV = { url: `${SVC}/web-development/`, label: 'Разработка под ключ' };
const CTA_AI = { url: `${SVC}/ai-agents/`, label: 'ИИ под ключ' };

const T = (items) => items.concat([{ id: 'faq', text: 'FAQ' }, { id: 'vyvody', text: 'Коротко о главном' }]);

const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D,
  readingMinutes: 4, shortForm: true, servicesOffer: SVC_SOFT, ctaInternal: CTA_SOFT,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'putevye-listy-elektronno-2026', category: 'industries', heroIcon: 'ph-fill ph-file-text',
    servicesOffer: SVC_SOFT, ctaInternal: CTA_SOFT,
    title: 'Путевые листы электронно: как перейти в 2026',
    metaTitle: 'Путевые листы электронно: как перейти 2026',
    metaDescription: 'Электронные путевые листы: кому они обязательны, что нужно для перехода (ЭЦП, оператор ЭДО, интеграция), как это работает пошагово и как автоматизировать выпуск под свой автопарк.',
    metaKeywords: 'путевые листы электронно, электронный путевой лист, эпл, переход на электронные путевые листы, оформление путевых листов',
    excerpt: 'Кому обязательны электронные путевые листы, что нужно для перехода, как это работает и как автоматизировать выпуск под свой автопарк.',
    tags: ['путевые листы', 'ЭДО', 'транспорт', 'автоматизация'],
    toc: T([{ id: 'chto-eto', text: 'Что это и кому обязательно' }, { id: 'chto-nuzhno', text: 'Что нужно для перехода' }, { id: 'kak-rabotaet', text: 'Как это работает' }, { id: 'avtomatizaciya', text: 'Автоматизация выпуска' }]),
    relatedSlugs: ['programma-dlya-avtoservisa-2026', 'integraciya-api-na-zakaz-2026', 'ai-dlya-logistiki-2026'] }),

  E({ slug: 'programma-dlya-avtoservisa-2026', category: 'industries', heroIcon: 'ph-fill ph-wrench',
    servicesOffer: SVC_SOFT, ctaInternal: CTA_SOFT,
    title: 'Программа для автосервиса: обзор и что выбрать',
    metaTitle: 'Программа для автосервиса: обзор и выбор 2026',
    metaDescription: 'Программа для автосервиса и СТО: что должна уметь (заказ-наряды, запись, склад запчастей, история авто, зарплаты), какие готовые решения есть и когда выгоднее своя система.',
    metaKeywords: 'программа для автосервиса, программа для сто, учет в автосервисе, crm для автосервиса, автоматизация автосервиса',
    excerpt: 'Что должна уметь программа для автосервиса, какие готовые решения есть, где их пределы и когда выгоднее сделать систему под ваш сервис.',
    tags: ['автосервис', 'СТО', 'учёт', 'программа'],
    toc: T([{ id: 'zachem', text: 'Что должна уметь программа' }, { id: 'gotovye', text: 'Готовые решения' }, { id: 'predely', text: 'Где их пределы' }, { id: 'svoya', text: 'Когда нужна своя' }]),
    relatedSlugs: ['putevye-listy-elektronno-2026', 'avtozapchasti-avtomatizaciya-2027', 'svoya-crm-na-servere-vs-oblachnaya-2026'] }),

  E({ slug: 'programma-dlya-lombarda-2026', category: 'industries', heroIcon: 'ph-fill ph-vault',
    servicesOffer: SVC_SOFT, ctaInternal: CTA_SOFT,
    title: 'Программа для ломбарда: учёт, залоги и отчётность в ЦБ',
    metaTitle: 'Программа для ломбарда: учёт и отчётность ЦБ',
    metaDescription: 'Программа для ломбарда: учёт залогов и займов, оценка, хранение, продажа невыкупа и отчётность в ЦБ и Росфинмониторинг. Что должна уметь система и когда нужна своя разработка.',
    metaKeywords: 'программа для ломбарда, учет в ломбарде, автоматизация ломбарда, отчетность ломбарда цб, crm для ломбарда',
    excerpt: 'Что должна уметь программа для ломбарда: залоги, займы, оценка, хранение, невыкуп и отчётность в ЦБ. Готовые решения и когда нужна своя.',
    tags: ['ломбард', 'учёт', 'отчётность', 'программа'],
    toc: T([{ id: 'zachem', text: 'Что должна уметь программа' }, { id: 'otchetnost', text: 'Отчётность в ЦБ' }, { id: 'gotovye', text: 'Готовые решения и пределы' }, { id: 'svoya', text: 'Когда нужна своя' }]),
    relatedSlugs: ['programma-dlya-avtoservisa-2026', 'svoya-crm-na-servere-vs-oblachnaya-2026', 'sozdat-svoy-veb-servis-saas-2026'] }),

  E({ slug: 'vzlomali-sayt-chto-delat-2026', category: 'security', heroIcon: 'ph-fill ph-shield-warning',
    servicesOffer: SVC_SEC, ctaInternal: CTA_SEC,
    title: 'Взломали сайт: что делать и как найти вирус',
    metaTitle: 'Взломали сайт: что делать и удалить вирус',
    metaDescription: 'Взломали сайт — что делать: пошаговый план, как найти и удалить вирус, закрыть уязвимость, восстановить из бэкапа и защититься на будущее. Признаки заражения и первые действия.',
    metaKeywords: 'взломали сайт что делать, вирус на сайте, удалить вирус с сайта, сайт заражен, восстановить взломанный сайт',
    excerpt: 'Пошаговый план, если взломали сайт: как найти и удалить вирус, закрыть дыру, восстановить из бэкапа и защититься на будущее.',
    tags: ['взлом', 'безопасность', 'вирус', 'сайт'],
    toc: T([{ id: 'priznaki', text: 'Признаки взлома' }, { id: 'pervye-shagi', text: 'Первые действия' }, { id: 'virus', text: 'Найти и удалить вирус' }, { id: 'zashchita', text: 'Защита на будущее' }]),
    relatedSlugs: ['razrabotchik-propal-zabrat-sayt-2026', 'zaschita-sayta-ot-parsinga', 'optimizaciya-skorosti-sayta'] }),

  E({ slug: 'razrabotchik-propal-zabrat-sayt-2026', category: 'development', heroIcon: 'ph-fill ph-key',
    servicesOffer: SVC_SEC, ctaInternal: CTA_DEV,
    title: 'Разработчик пропал: как забрать сайт, домен и доступы',
    metaTitle: 'Разработчик пропал: как забрать сайт и домен',
    metaDescription: 'Разработчик пропал или не отдаёт сайт: как вернуть контроль над доменом, хостингом и админкой, что делать без доступов и исходников и как принять проект без потерь.',
    metaKeywords: 'разработчик пропал, забрать сайт у разработчика, вернуть домен, не отдают сайт, передача сайта другому разработчику',
    excerpt: 'Что делать, если разработчик пропал или не отдаёт сайт: как вернуть домен, хостинг и админку, что делать без доступов и как принять проект.',
    tags: ['сайт', 'домен', 'доступы', 'перехват'],
    toc: T([{ id: 'situaciya', text: 'Типичная ситуация' }, { id: 'domen-hosting', text: 'Вернуть домен и хостинг' }, { id: 'bez-dostupov', text: 'Что делать без доступов' }, { id: 'prinyat', text: 'Как принять проект' }]),
    relatedSlugs: ['dorabotka-sayta-2026', 'vzlomali-sayt-chto-delat-2026', 'kak-vybrat-it-podryadchika-2027'] }),

  E({ slug: 'bot-s-bazoy-znaniy-rag-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-brain',
    servicesOffer: SVC_AI, ctaInternal: CTA_AI,
    title: 'Бот с базой знаний (RAG): отвечает по вашим документам',
    metaTitle: 'Бот с базой знаний (RAG) по вашим документам',
    metaDescription: 'Бот с базой знаний на RAG: как ИИ отвечает клиентам и сотрудникам по вашим документам и регламентам без выдумок, чем отличается от обычного чат-бота и сколько стоит внедрение.',
    metaKeywords: 'бот с базой знаний, rag бот, ии по документам, чат-бот по базе знаний, ассистент по регламентам',
    excerpt: 'Как бот на RAG отвечает по вашим документам и регламентам без выдумок, чем отличается от обычного чат-бота и что нужно для внедрения.',
    tags: ['RAG', 'база знаний', 'ИИ', 'бот'],
    toc: T([{ id: 'chto-eto', text: 'Что такое RAG-бот' }, { id: 'zachem', text: 'Кому и зачем' }, { id: 'kak-delaem', text: 'Как это внедряется' }, { id: 'cena', text: 'Данные, приватность и цена' }]),
    relatedSlugs: ['ai-agenty-v-biznese-2026', 'korporativnyy-ai-assistent-na-svoih-dannyh-2027', 'integraciya-wildberries-1c-2026'] }),

  E({ slug: 'integraciya-wildberries-1c-2026', category: 'development', heroIcon: 'ph-fill ph-plugs-connected',
    servicesOffer: SVC_AI, ctaInternal: CTA_DEV,
    title: 'Интеграция Wildberries с 1С: как связать и что даёт',
    metaTitle: 'Интеграция Wildberries с 1С: как связать',
    metaDescription: 'Интеграция Wildberries с 1С: как автоматически синхронизировать заказы, остатки, цены и продажи между маркетплейсом и 1С, какие есть способы и когда нужна разработка под ключ.',
    metaKeywords: 'интеграция wildberries 1с, wb и 1с, синхронизация wildberries 1с, выгрузка заказов wb в 1с, автоматизация маркетплейса 1с',
    excerpt: 'Как связать Wildberries и 1С: синхронизация заказов, остатков, цен и продаж, какие есть способы и когда нужна интеграция под ключ.',
    tags: ['Wildberries', '1С', 'интеграция', 'маркетплейсы'],
    toc: T([{ id: 'zachem', text: 'Зачем связывать WB и 1С' }, { id: 'chto-sinhronizirovat', text: 'Что синхронизируют' }, { id: 'sposoby', text: 'Способы интеграции' }, { id: 'cena', text: 'Сроки и цена' }]),
    relatedSlugs: ['integraciya-api-na-zakaz-2026', 'analitika-wildberries-servisy-2026', 'ai-dlya-sellerov-wb-ozon-2026'] }),
];
