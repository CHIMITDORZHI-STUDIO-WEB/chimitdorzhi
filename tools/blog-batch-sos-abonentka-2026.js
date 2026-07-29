// Батч: SOS + наследство подрядчика + 1С + абонентка (8 статей ~4 мин, shortForm). Паника/рекуррент.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-22';
const SVC = 'https://chimitdorzhi.tech/services';

const SVC_SOS = {
  title: 'Спасение и поддержка сайта',
  services: [
    { icon: 'ph-fill ph-first-aid', label: 'Срочный ремонт неработающего сайта' },
    { icon: 'ph-fill ph-key', label: 'Возврат сайта, домена и доступов' },
    { icon: 'ph-fill ph-arrows-clockwise', label: 'Перенос и восстановление из бэкапа' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Техподдержка на абонентке' },
  ],
  ctaLabel: 'Срочно помочь с сайтом', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_MIGRATE = {
  title: 'Перенос и обновление сайта',
  services: [
    { icon: 'ph-fill ph-swap', label: 'Перенос домена и хостинга без простоя' },
    { icon: 'ph-fill ph-paint-brush', label: 'Редизайн или пересборка с нуля' },
    { icon: 'ph-fill ph-arrows-clockwise', label: 'Миграция со старого PHP / Битрикса' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Поддержка после переноса' },
  ],
  ctaLabel: 'Обсудить перенос', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_1C = {
  title: 'Работа с 1С под ключ',
  services: [
    { icon: 'ph-fill ph-database', label: 'Резервное копирование 1С' },
    { icon: 'ph-fill ph-hard-drives', label: 'Установка 1С на сервер и в облако' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция сайта с 1С' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Обслуживание и поддержка' },
  ],
  ctaLabel: 'Обсудить 1С', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_SUPPORT = {
  title: 'IT на абонентке под ключ',
  services: [
    { icon: 'ph-fill ph-lifebuoy', label: 'Техподдержка сайта и серверов' },
    { icon: 'ph-fill ph-user-gear', label: 'Приходящий сисадмин' },
    { icon: 'ph-fill ph-shield-check', label: 'Мониторинг, бэкапы, безопасность' },
    { icon: 'ph-fill ph-wrench', label: 'Доработки и обновления' },
  ],
  ctaLabel: 'Обсудить абонентку', ctaUrl: 'https://t.me/chimitdorzhi',
};

const CTA_SOS = { url: `${SVC}/web-development/`, label: 'Помощь с сайтом' };
const CTA_MIGRATE = { url: `${SVC}/web-development/`, label: 'Перенос сайта' };
const CTA_1C = { url: `${SVC}/business-automation/`, label: 'Работа с 1С' };
const CTA_SUPPORT = { url: `${SVC}/it-infrastructure/`, label: 'IT на абонентке' };

const T = (items) => items.concat([{ id: 'faq', text: 'FAQ' }, { id: 'vyvody', text: 'Коротко о главном' }]);

const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D,
  readingMinutes: 4, shortForm: true, servicesOffer: SVC_SOS, ctaInternal: CTA_SOS,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  // === SOS ===
  E({ slug: 'sayt-ne-rabotaet-diagnostika-2026', category: 'development', heroIcon: 'ph-fill ph-first-aid',
    servicesOffer: SVC_SOS, ctaInternal: CTA_SOS,
    title: 'Сайт не работает: диагностика за 10 минут и что делать',
    metaTitle: 'Сайт не работает: диагностика за 10 минут',
    metaDescription: 'Сайт не работает — что делать: быстрая диагностика за 10 минут (хостинг, домен, SSL, код, блокировки), как понять причину, что чинить самому и когда срочно звать специалиста.',
    metaKeywords: 'сайт не работает, сайт не открывается, сайт лежит, сайт недоступен, что делать если сайт не работает',
    excerpt: 'Быстрая диагностика за 10 минут, если сайт не работает: хостинг, домен, SSL, код, блокировки — как найти причину и что делать прямо сейчас.',
    tags: ['сайт не работает', 'диагностика', 'хостинг', 'SOS'],
    toc: T([{ id: 'diagnostika', text: 'Диагностика за 10 минут' }, { id: 'prichiny', text: 'Частые причины' }, { id: 'chto-delat', text: 'Что делать самому' }, { id: 'kogda-zvat', text: 'Когда звать специалиста' }]),
    relatedSlugs: ['ne-prihodyat-zayavki-s-sayta-2026', 'vzlomali-sayt-chto-delat-2026', 'perenesti-sayt-domen-bez-prostoya-2026'] }),

  E({ slug: 'ne-prihodyat-zayavki-s-sayta-2026', category: 'development', heroIcon: 'ph-fill ph-envelope-simple-open',
    servicesOffer: SVC_SOS, ctaInternal: CTA_SOS,
    title: 'Не приходят заявки с сайта: причины и как починить',
    metaTitle: 'Не приходят заявки с сайта: причины и решение',
    metaDescription: 'Не приходят заявки с сайта — 7 причин: форма не отправляет, письма в спаме, сломанная интеграция с CRM, нет уведомлений. Как проверить каждую и как настроить, чтобы не терять лиды.',
    metaKeywords: 'не приходят заявки с сайта, форма не отправляет, не приходят заявки, письма с сайта в спам, заявки не доходят',
    excerpt: 'Почему не приходят заявки с сайта (форма, спам, сломанная интеграция, нет уведомлений), как проверить каждую причину и как больше не терять лиды.',
    tags: ['заявки', 'формы', 'CRM', 'SOS'],
    toc: T([{ id: 'pochemu', text: 'Куда пропадают заявки' }, { id: 'prichiny', text: '7 причин' }, { id: 'kak-proverit', text: 'Как проверить' }, { id: 'kak-nadezhno', text: 'Как настроить надёжно' }]),
    relatedSlugs: ['sayt-ne-rabotaet-diagnostika-2026', 'priem-oplaty-na-sayt-yukassa-2026', 'tehpodderzhka-sayta-skolko-stoit-2026'] }),

  // === Наследство подрядчика ===
  E({ slug: 'perenesti-sayt-domen-bez-prostoya-2026', category: 'development', heroIcon: 'ph-fill ph-swap',
    servicesOffer: SVC_MIGRATE, ctaInternal: CTA_MIGRATE,
    title: 'Перенести сайт и домен к другому подрядчику без простоя',
    metaTitle: 'Перенести сайт и домен без простоя',
    metaDescription: 'Как перенести сайт и домен к другому хостингу и регистратору без простоя: подготовка, перенос данных, смена DNS без даунтайма, что забрать у прежнего подрядчика и как ничего не потерять.',
    metaKeywords: 'перенести домен, перенос сайта на другой хостинг, сменить регистратора домена, перенос сайта без простоя, забрать сайт у подрядчика',
    excerpt: 'Как перенести сайт и домен к новому хостингу и регистратору без простоя: подготовка, перенос данных, смена DNS без даунтайма и что забрать у прежнего подрядчика.',
    tags: ['перенос сайта', 'домен', 'хостинг', 'миграция'],
    toc: T([{ id: 'zachem', text: 'Когда нужен перенос' }, { id: 'domen', text: 'Перенос домена' }, { id: 'hosting', text: 'Перенос сайта без простоя' }, { id: 'chto-zabrat', text: 'Что забрать у подрядчика' }]),
    relatedSlugs: ['razrabotchik-propal-zabrat-sayt-2026', 'obnovit-staryy-sayt-2026', 'sayt-ne-rabotaet-diagnostika-2026'] }),

  E({ slug: 'obnovit-staryy-sayt-2026', category: 'development', heroIcon: 'ph-fill ph-paint-brush-broad',
    servicesOffer: SVC_MIGRATE, ctaInternal: CTA_MIGRATE,
    title: 'Обновить старый сайт: редизайн, с нуля или миграция',
    metaTitle: 'Обновить старый сайт: редизайн или с нуля',
    metaDescription: 'Старый сайт устарел или тормозит: что выбрать — редизайн, пересборку с нуля или миграцию со старого PHP и 1С-Битрикс. Как решить, что дешевле в долгую и как не потерять SEO при обновлении.',
    metaKeywords: 'обновить старый сайт, редизайн сайта, сайт на старом php, уйти с битрикса, пересобрать сайт с нуля',
    excerpt: 'Старый сайт устарел или тормозит: редизайн, пересборка с нуля или миграция со старого PHP/Битрикса — как выбрать, что дешевле в долгую и как не потерять SEO.',
    tags: ['редизайн', 'миграция', 'старый сайт', 'PHP'],
    toc: T([{ id: 'priznaki', text: 'Когда сайт пора обновлять' }, { id: 'varianty', text: 'Редизайн, с нуля или миграция' }, { id: 'php-bitrix', text: 'Старый PHP и Битрикс' }, { id: 'seo', text: 'Как не потерять SEO' }]),
    relatedSlugs: ['perenesti-sayt-domen-bez-prostoya-2026', 'skolko-stoit-sayt-2026', 'dorabotka-sayta-2026'] }),

  // === 1С ===
  E({ slug: 'rezervnoe-kopirovanie-1c-2026', category: 'development', heroIcon: 'ph-fill ph-database',
    servicesOffer: SVC_1C, ctaInternal: CTA_1C,
    title: 'Резервное копирование 1С: как настроить автоматический бэкап',
    metaTitle: 'Резервное копирование 1С: автобэкап и сервер',
    metaDescription: 'Резервное копирование 1С: как настроить автоматический бэкап базы, куда хранить копии, установка 1С на сервер и перенос в облако, чтобы не потерять базу при сбое или шифровальщике.',
    metaKeywords: 'резервное копирование 1с, бэкап 1с автоматически, установка 1с на сервер, 1с в облаке, восстановление базы 1с',
    excerpt: 'Как настроить автоматический бэкап 1С, где хранить копии, установка 1С на сервер и перенос в облако — чтобы не потерять базу при сбое или шифровальщике.',
    tags: ['1С', 'бэкап', 'сервер', 'облако'],
    toc: T([{ id: 'zachem', text: 'Почему это критично' }, { id: 'avtobekap', text: 'Автоматический бэкап' }, { id: 'server-oblako', text: 'Сервер или облако' }, { id: 'vosstanovlenie', text: 'Восстановление и проверка' }]),
    relatedSlugs: ['integraciya-sayta-s-1c-2026', 'svoy-oblachnyy-disk-2026', 'tehpodderzhka-sayta-skolko-stoit-2026'] }),

  // Статья расширена 30.07.2026: было ~800 слов, стало ~2600 — добавлены разбор
  // протоколов обмена, точки отказа и пошаговое внедрение. toc обновлён под новые id.
  E({ slug: 'integraciya-sayta-s-1c-2026', category: 'development', heroIcon: 'ph-fill ph-plugs-connected',
    servicesOffer: SVC_1C, ctaInternal: CTA_1C, readingMinutes: 9, dateModified: '2026-07-30',
    title: 'Интеграция сайта с 1С: обмен товарами, остатками и заказами',
    metaTitle: 'Интеграция сайта с 1С: обмен товарами и заказами',
    metaDescription: 'Как связать сайт с 1С: выгрузка товаров и остатков, приём заказов обратно в базу, синхронизация цен и статусов. Где обмен ломается и сколько стоит настройка.',
    metaKeywords: 'интеграция сайта с 1с, обмен сайта с 1с, синхронизация 1с и сайта, выгрузка товаров из 1с, заказы с сайта в 1с, CommerceML, обмен по расписанию',
    excerpt: 'Сайт показывает товар, которого нет на складе, а заказы менеджер вбивает в 1С руками. Разбираю, как устроен обмен между сайтом и 1С, где он обычно ломается и сколько стоит настроить.',
    tags: ['1С', 'интеграция', 'интернет-магазин', 'обмен'],
    toc: T([{ id: 'zachem', text: 'Зачем связывать сайт и 1С' }, { id: 'chto-obmenivaetsya', text: 'Что именно обменивается' }, { id: 'kak-ustroen-obmen', text: 'Как устроен обмен технически' }, { id: 'gde-lomaetsya', text: 'Где обмен обычно ломается' }, { id: 'skolko-stoit', text: 'Сколько стоит и сколько занимает' }, { id: 'kak-vnedryat', text: 'Как внедрять по шагам' }, { id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }]),
    relatedSlugs: ['rezervnoe-kopirovanie-1c-2026', 'integraciya-wildberries-1c-2026', 'skolko-stoit-internet-magazin-2026'] }),

  // === Абонентка ===
  E({ slug: 'tehpodderzhka-sayta-skolko-stoit-2026', category: 'development', heroIcon: 'ph-fill ph-lifebuoy',
    servicesOffer: SVC_SUPPORT, ctaInternal: CTA_SUPPORT,
    title: 'Техподдержка сайта: что входит и сколько стоит',
    metaTitle: 'Техподдержка сайта: что входит и цена',
    metaDescription: 'Техподдержка и обслуживание сайта: что входит (обновления, бэкапы, безопасность, правки, мониторинг), какие бывают тарифы абонентки, чем это выгоднее разовых обращений и сколько стоит.',
    metaKeywords: 'техподдержка сайта, обслуживание сайта, поддержка сайта стоимость, абонентское обслуживание сайта, сопровождение сайта',
    excerpt: 'Что входит в техподдержку сайта (обновления, бэкапы, безопасность, правки, мониторинг), какие бывают тарифы абонентки и чем это выгоднее разовых обращений.',
    tags: ['техподдержка', 'абонентка', 'сайт', 'обслуживание'],
    toc: T([{ id: 'chto-vhodit', text: 'Что входит в поддержку' }, { id: 'tarify', text: 'Тарифы абонентки' }, { id: 'vygoda', text: 'Абонентка vs разовые правки' }, { id: 'kak-nachat', text: 'Как начать' }]),
    relatedSlugs: ['prihodyashchiy-sisadmin-vs-shtatnyy-2026', 'sayt-ne-rabotaet-diagnostika-2026', 'dorabotka-sayta-2026'] }),

  E({ slug: 'prihodyashchiy-sisadmin-vs-shtatnyy-2026', category: 'development', heroIcon: 'ph-fill ph-user-gear',
    servicesOffer: SVC_SUPPORT, ctaInternal: CTA_SUPPORT,
    title: 'Приходящий сисадмин или штатный: когда что выгоднее',
    metaTitle: 'Приходящий сисадмин или штатный: что выгоднее',
    metaDescription: 'Приходящий сисадмин или штатный в штате: чем отличаются по деньгам и рискам, что входит в IT-аутсорсинг для малого бизнеса, когда выгоднее абонентка и как посчитать выгоду.',
    metaKeywords: 'приходящий сисадмин, системный администратор аутсорс, ит-аутсорсинг для малого бизнеса, сисадмин на аутсорсе, абонентское обслуживание it',
    excerpt: 'Приходящий сисадмин или штатный: чем отличаются по деньгам и рискам, что входит в IT-аутсорсинг для малого бизнеса и когда выгоднее абонентка.',
    tags: ['сисадмин', 'аутсорсинг', 'абонентка', 'IT'],
    toc: T([{ id: 'raznica', text: 'В чём разница' }, { id: 'sravnenie', text: 'Сравнение по деньгам и рискам' }, { id: 'chto-vhodit', text: 'Что входит в аутсорс' }, { id: 'komu-chto', text: 'Кому что выгоднее' }]),
    relatedSlugs: ['tehpodderzhka-sayta-skolko-stoit-2026', 'it-outsourcing-sibir-2027', 'rezervnoe-kopirovanie-1c-2026'] }),
];
