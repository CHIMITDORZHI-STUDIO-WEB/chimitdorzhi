// Экспертный блог (июнь 2026, часть 2): честность, деньги, владение, сроки, MVP.
// Перелинковка на страницы услуг/предложений автора + между статьями.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-06-25';
const SVC = {
  title: 'Как я работаю с бизнесом',
  services: [
    { icon: 'ph-fill ph-stethoscope', label: 'IT-аудит и диагностика задачи' },
    { icon: 'ph-fill ph-handshake', label: 'Прозрачная смета и оплата этапами' },
    { icon: 'ph-fill ph-key', label: 'Передача прав на код и доступы' },
    { icon: 'ph-fill ph-flow-arrow', label: 'Автоматизация и разработка под ключ' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Поддержка и сопровождение' },
  ],
};
const WEB = { url: 'https://chimitdorzhi.tech/services/web-development/', label: 'Сделать сайт как надо' };
const PRED = { url: 'https://chimitdorzhi.tech/predlozheniya/', label: 'Обсудить ваш проект' };
const AUDIT = { url: 'https://chimitdorzhi.tech/services/it-audit/', label: 'Заказать IT-аудит' };
const E = (o) => Object.assign({
  category: 'expert', published: true, datePublished: D, dateModified: D, readingMinutes: 9,
  servicesOffer: SVC,
}, o, { contentHtml: C(o.slug) });
const T = (...ids) => ids.map(([id, text]) => ({ id, text }));

module.exports = [
  E({ slug: 'kto-vladeet-saytom-dannymi-akkauntami-2026', heroIcon: 'ph-fill ph-key', ctaInternal: AUDIT,
    title: 'Кто на самом деле владеет вашим сайтом, данными и аккаунтами',
    metaTitle: 'Кто владеет вашим сайтом и данными',
    metaDescription: 'Кому реально принадлежат сайт, домен, хостинг, исходный код, рекламные кабинеты и аккаунты компании.',
    excerpt: 'Вы уверены, что сайт, домен и аккаунты принадлежат вам, а не подрядчику или бывшему сотруднику? Очень часто — нет, и это всплывает в худший момент. Разбираю, кто настоящий владелец и как вернуть контроль.',
    tags: ['экспертное', 'права на код', 'доступы', 'безопасность'],
    toc: T(['pochemu-vazhno','Почему это критически важно'],['kto-vladeet','Кто на самом деле владелец'],['tipichnye-lovushki','Типичные ловушки, когда вы не владелец'],['kak-zabrat','Как вернуть контроль и оформить правильно'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['zavisimost-ot-podryadchika-vendora-2026', 'chto-znachit-pod-klyuch-2026', 'skrytaya-cena-deshevogo-sayta-bota-2026'] }),
  E({ slug: 'oplata-etapami-chestnee-predoplaty-2026', heroIcon: 'ph-fill ph-handshake', ctaInternal: PRED,
    title: 'Почему оплата этапами честнее 100% предоплаты',
    metaTitle: 'Почему оплата этапами честнее предоплаты',
    metaDescription: 'Почему оплата IT-проекта по этапам (аванс плюс платежи за принятые этапы) честнее и безопаснее для обеих сторон, чем 100% предоплата или работа без аванса.',
    excerpt: 'Просят 100% вперёд — повод насторожиться. Готовы работать совсем без аванса — тоже. Разбираю, почему оплата этапами честнее для обеих сторон и как правильно разбить проект на платежи.',
    tags: ['экспертное', 'оплата', 'договор', 'честность'],
    toc: T(['pochemu-vopros','Почему вопрос оплаты — это про доверие'],['riski-predoplaty','Чем рискует клиент при 100% предоплате'],['kak-etapy','Как работает оплата этапами'],['kak-ya-rabotayu','Как я выстраиваю оплату честно'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['chto-znachit-pod-klyuch-2026', 'pochemu-sryvayutsya-dedlayny-2026', 'pochemu-ne-obeshchayu-rost-prodazh-2026'] }),
  E({ slug: 'chto-znachit-pod-klyuch-2026', heroIcon: 'ph-fill ph-package', ctaInternal: PRED,
    title: 'Что значит «под ключ» на самом деле — и где обычно обманывают',
    metaTitle: 'Что значит «под ключ» в IT — и где прячут недоделки',
    metaDescription: 'Под ключ в IT — это аналитика, разработка, наполнение, запуск, обучение и передача доступов. Где этим словом прикрывают недоделки и что писать в договоре.',
    excerpt: '«Сделаем под ключ» звучит надёжно, но под этой вывеской часто прячут недоделки: без наполнения, без интеграций, без передачи прав, а доработки — за отдельные деньги. Разбираю, что должно входить и как проверить.',
    tags: ['экспертное', 'под ключ', 'договор', 'выбор подрядчика'],
    toc: T(['chto-znachit','Что такое «под ключ» на самом деле'],['chto-vhodit','Что должно входить в работу под ключ'],['gde-obmanyvayut','Где обычно обманывают'],['kak-proverit','Как проверить, что вам правда сделают под ключ'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['oplata-etapami-chestnee-predoplaty-2026', 'kto-vladeet-saytom-dannymi-akkauntami-2026', 'skrytaya-cena-deshevogo-sayta-bota-2026'] }),
  E({ slug: 'zavisimost-ot-podryadchika-vendora-2026', heroIcon: 'ph-fill ph-lock-key', ctaInternal: AUDIT,
    title: 'Зависимость от одного подрядчика или вендора: как не попасть в ловушку',
    metaTitle: 'Зависимость от подрядчика и вендора',
    metaDescription: 'Вендор-лок: код, доступы и данные заперты у одного подрядчика. Как ловушка возникает незаметно и что вернуть себе — репозиторий, документацию, сервер.',
    excerpt: 'Пока всё работает, зависимость от одного подрядчика незаметна. Она всплывает, когда он поднимает цены или пропадает, а уйти нельзя — код и доступы только у него. Разбираю, как в это попадают и как защититься.',
    tags: ['экспертное', 'вендор-лок', 'риски', 'независимость'],
    toc: T(['chto-takoe','Что такое зависимость от подрядчика и вендора'],['chem-opasno','Чем это опасно для бизнеса'],['kak-voznikaet','Как незаметно возникает зависимость'],['kak-ne-popast','Как не попасть в ловушку'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['kto-vladeet-saytom-dannymi-akkauntami-2026', 'chto-znachit-pod-klyuch-2026', 'it-podryadchik-kak-vrach-diagnostika-2026'] }),
  E({ slug: 'pochemu-sryvayutsya-dedlayny-2026', heroIcon: 'ph-fill ph-clock-countdown', ctaInternal: PRED,
    title: 'Почему срываются дедлайны в IT — честно изнутри',
    metaTitle: 'Почему срываются дедлайны в IT',
    metaDescription: 'Честный разбор изнутри: почему IT-проекты выбиваются из сроков. Реальные причины — расплывчатое ТЗ, правки на ходу.',
    excerpt: 'Сорванные сроки в IT — почти норма, и я расскажу честно, почему так. Часто причина не в лени подрядчика, а в расплывчатом ТЗ, правках на ходу и материалах, которые присылают с задержкой. Разбираю и то, как я снижаю риск.',
    tags: ['экспертное', 'сроки', 'управление проектом', 'честность'],
    toc: T(['pravda-o-srokah','Правда о сроках в IT-проектах'],['pochemu-sryvayutsya','Почему дедлайны срываются: реальные причины'],['chya-vina','Чья это вина — и почему не только подрядчика'],['kak-ya-rabotayu','Как я работаю со сроками честно'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['oplata-etapami-chestnee-predoplaty-2026', 'chto-znachit-pod-klyuch-2026', 'pochemu-ya-otkazyvayus-ot-proektov-2026'] }),
  E({ slug: 'mvp-luchshe-idealnogo-produkta-2026', heroIcon: 'ph-fill ph-rocket-launch', ctaInternal: WEB,
    title: 'Почему MVP лучше идеального продукта: запуск против перфекционизма',
    metaTitle: 'Почему MVP лучше идеального продукта',
    metaDescription: 'MVP (минимально жизнеспособный продукт) против попытки сразу сделать идеально и со всеми функциями.',
    excerpt: 'Полгода строить «идеальный» продукт — значит полгода угадывать, что нужно людям, вместо того чтобы спросить у них. Разбираю, почему лучше запустить простой MVP и доращивать, и в чём опасность перфекционизма.',
    tags: ['экспертное', 'MVP', 'запуск', 'продукт'],
    toc: T(['chto-takoe-mvp','Что такое MVP простыми словами'],['pochemu-luchshe','Почему MVP лучше идеального продукта'],['opasnost-perfekcionizma','Опасность перфекционизма и долгой стройки'],['kak-ya-delayu','Как я запускаю через MVP'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['krasivyy-sayt-protiv-rabotayushchego-2026', 'chto-znachit-pod-klyuch-2026', 'skrytaya-cena-deshevogo-sayta-bota-2026'] }),
  E({ slug: 'krasivyy-sayt-protiv-rabotayushchego-2026', heroIcon: 'ph-fill ph-paint-brush', ctaInternal: WEB,
    title: 'Красивый сайт против работающего: это разные вещи',
    metaTitle: 'Красивый сайт против работающего',
    metaDescription: 'Почему «красивый сайт» и «работающий сайт» — разные вещи. Красота без скорости, понятной структуры, призывов к действию, мобильной версии.',
    excerpt: 'Красивый сайт радует владельца, работающий — приносит заявки. Это не всегда одно и то же. Разбираю, что реально делает сайт работающим и как совместить красоту с результатом, а не выкинуть деньги на дизайн ради дизайна.',
    tags: ['экспертное', 'сайт', 'конверсия', 'дизайн'],
    toc: T(['dva-podhoda','Красивый и работающий — разные приоритеты'],['chto-takoe-rabochiy','Что делает сайт работающим'],['krasota-bez-tolku','Когда красота не работает на бизнес'],['kak-sovmestit','Как совместить красоту и результат'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['mvp-luchshe-idealnogo-produkta-2026', 'skrytaya-cena-deshevogo-sayta-bota-2026', 'pochemu-ne-obeshchayu-rost-prodazh-2026'] }),
];
