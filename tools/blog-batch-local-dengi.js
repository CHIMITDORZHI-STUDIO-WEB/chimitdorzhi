// Локальные коммерческие темы (Чита/Улан-Удэ/Бурятия/Забайкалье) — низкая конкуренция, близкие клиенты.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-06-19';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));
const SVC = {
  title: 'Что делаю под ключ для местного бизнеса',
  services: [
    { icon: 'ph-fill ph-browser', label: 'Сайты и лендинги' },
    { icon: 'ph-fill ph-robot', label: 'Чат-боты и автоворонки' },
    { icon: 'ph-fill ph-sparkle', label: 'Внедрение ИИ' },
    { icon: 'ph-fill ph-gear', label: 'Автоматизация и CRM' },
    { icon: 'ph-fill ph-map-pin', label: 'Лично и удалённо по РФ' },
    { icon: 'ph-fill ph-chat-circle-dots', label: 'Бесплатный расчёт под задачу' },
  ],
};
const CTA = { url: 'https://chimitdorzhi.tech/predlozheniya/', label: 'Получить расчёт под задачу' };
const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D, readingMinutes: 8,
  servicesOffer: SVC, ctaInternal: CTA,
}, o, { contentHtml: C(o.slug) });
const TOC_LOCAL = () => toc(['chto-eto', 'О чём речь'], ['komu-nuzhno', 'Кому нужно'], ['chto-vhodit', 'Что входит'], ['skolko', 'Сроки и стоимость'], ['primer', 'Пример'], ['kak-zakazat', 'Как заказать'], ['faq', 'FAQ'], ['vyvody', 'Коротко о главном']);

module.exports = [
  E({ slug: 'razrabotka-pod-klyuch-chita-ulan-ude-2026', category: 'development', heroIcon: 'ph-fill ph-map-pin-line',
    toc: toc(['chto-eto', 'Чем помогаю'], ['napravleniya', 'Направления'], ['pochemu-ya', 'Почему частный специалист'], ['skolko', 'Сколько стоит'], ['kak-zakazat', 'Как заказать'], ['faq', 'FAQ'], ['vyvody', 'Коротко о главном']),
    title: 'Разработка и автоматизация под ключ в Чите, Улан-Удэ и Забайкалье',
    metaTitle: 'Разработка под ключ: Чита, Улан-Удэ, Забайкалье',
    metaDescription: 'Разработка и автоматизация под ключ для бизнеса в Чите, Улан-Удэ, Бурятии и Забайкалье: сайты и лендинги, чат-боты, ИИ, автоматизация и CRM, реклама. Частный специалист полного цикла, лично и удалённо по РФ, без агентской наценки.',
    excerpt: 'Сайты, боты, ИИ, автоматизация и CRM для бизнеса Читы, Улан-Удэ и Забайкалья — под ключ, лично на связи и без агентской наценки. Собрал навигатор по направлениям с ценами и ссылками на разборы.',
    tags: ['Чита', 'Улан-Удэ', 'Забайкалье', 'разработка под ключ'],
    relatedSlugs: ['skolko-stoit-sayt-chita-ulan-ude-2026', 'chat-bot-dlya-biznesa-chita-ulan-ude-2026', 'avtomatizaciya-biznesa-chita-zabaykalye-2026'] }),
  E({ slug: 'chat-bot-dlya-biznesa-chita-ulan-ude-2026', category: 'development', heroIcon: 'ph-fill ph-robot', toc: TOC_LOCAL(),
    title: 'Чат-бот для бизнеса в Чите и Улан-Удэ: что умеет и сколько стоит',
    metaTitle: 'Чат-бот для бизнеса в Чите и Улан-Удэ',
    metaDescription: 'Чат-бот для бизнеса в Чите и Улан-Удэ: запись, ответы 24/7, заказы, оплата, напоминания. Платформы Telegram, MAX, WhatsApp, VK, что входит в работу и вилки цен. Местный бизнес и удалённо по РФ, с примером для кафе и салона.',
    excerpt: 'Бот берёт на себя запись, ответы и заказы, пока вы заняты делом. Разбираю, что он умеет для бизнеса в Чите и Улан-Удэ, что входит в работу и сколько это стоит, с примером.',
    tags: ['чат-бот', 'Чита', 'Улан-Удэ', 'стоимость'],
    relatedSlugs: ['skolko-stoit-chat-bot-2026', 'avtomatizaciya-kafe-magazina-chita-ulan-ude-2026', 'razrabotka-pod-klyuch-chita-ulan-ude-2026'] }),
  E({ slug: 'ii-dlya-biznesa-chita-ulan-ude-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-sparkle', toc: TOC_LOCAL(),
    title: 'ИИ для бизнеса в Чите и Улан-Удэ: задачи, с чего начать и цена',
    metaTitle: 'ИИ для бизнеса в Чите и Улан-Удэ',
    metaDescription: 'ИИ для бизнеса в Чите и Улан-Удэ: с каких задач начать (ассистент поддержки и продаж, обработка заявок, контент, документы), российские модели GigaChat и YandexGPT, 152-ФЗ, недорогой пилот и вилки цен. Местный бизнес и удалённо.',
    excerpt: 'ИИ — это не только для крупных. Разбираю, с каких задач начать малому бизнесу в Чите и Улан-Удэ, какие российские модели использовать по 152-ФЗ и сколько стоит недорогой пилот.',
    tags: ['ИИ', 'Чита', 'Улан-Удэ', 'нейросети'],
    relatedSlugs: ['skolko-stoit-vnedrit-ii-2026', 'chat-bot-dlya-biznesa-chita-ulan-ude-2026', 'razrabotka-pod-klyuch-chita-ulan-ude-2026'] }),
  E({ slug: 'zakazat-lending-chita-ulan-ude-2026', category: 'development', heroIcon: 'ph-fill ph-file-html', toc: TOC_LOCAL(),
    title: 'Заказать лендинг в Чите и Улан-Удэ: сроки, цена, что входит',
    metaTitle: 'Заказать лендинг в Чите и Улан-Удэ',
    metaDescription: 'Заказать лендинг в Чите и Улан-Удэ: зачем он местному бизнесу, что входит (оффер, дизайн, копирайтинг, формы, оплата, интеграция с CRM и мессенджерами, мобильная версия), сроки и вилки цен. Лично и удалённо по РФ, с примером.',
    excerpt: 'Лендинг под рекламу, услугу или акцию собирает заявки лучше многостраничника. Разбираю, что входит, сроки и цены для бизнеса в Чите и Улан-Удэ, с примером.',
    tags: ['лендинг', 'Чита', 'Улан-Удэ', 'сайт'],
    relatedSlugs: ['skolko-stoit-lending-2026', 'skolko-stoit-sayt-chita-ulan-ude-2026', 'komu-zakazat-sayt-chita-ulan-ude-2026'] }),
  E({ slug: 'komu-zakazat-sayt-chita-ulan-ude-2026', category: 'development', heroIcon: 'ph-fill ph-users-three',
    toc: toc(['chto-eto', 'С чего начать выбор'], ['varianty', 'Варианты исполнителей'], ['kak-vybrat', 'Как выбрать'], ['primer', 'Пример'], ['kak-zakazat', 'Как заказать'], ['faq', 'FAQ'], ['vyvody', 'Коротко о главном']),
    title: 'Кому заказать сайт в Чите и Улан-Удэ: фрилансер, студия или частный специалист',
    metaTitle: 'Кому заказать сайт в Чите и Улан-Удэ',
    metaDescription: 'Кому заказать сайт в Чите и Улан-Удэ: честное сравнение фрилансера, студии и частного специалиста по цене, надёжности и поддержке. На что смотреть, красные флаги и как не нарваться. Частный специалист полного цикла, лично и удалённо.',
    excerpt: 'Фрилансер дешевле, студия дороже, а пропасть может любой. Разбираю, кому заказать сайт в Чите и Улан-Удэ, на что смотреть и как не нарваться — честно, без самовосхваления.',
    tags: ['выбор подрядчика', 'Чита', 'Улан-Удэ', 'сайт'],
    relatedSlugs: ['frilanser-vs-studiya-vs-agentstvo-2026', 'kak-vybrat-podryadchika-razrabotka-2026', 'razrabotka-pod-klyuch-chita-ulan-ude-2026'] }),
  E({ slug: 'avtomatizaciya-kafe-magazina-chita-ulan-ude-2026', category: 'industries', heroIcon: 'ph-fill ph-storefront', toc: TOC_LOCAL(),
    title: 'Автоматизация кафе и магазина в Чите и Улан-Удэ: что внедрить и сколько стоит',
    metaTitle: 'Автоматизация кафе и магазина: Чита, Улан-Удэ',
    metaDescription: 'Автоматизация кафе и магазина в Чите и Улан-Удэ: касса и 54-ФЗ, маркировка «Честный знак», складской учёт, программа лояльности, бот для заказов и брони, CRM, доставка. С чего начать и вилки цен. Лично и удалённо по РФ.',
    excerpt: 'Касса, маркировка, склад, лояльность, бот для заказов — автоматизация снимает рутину с кафе и магазина. Разбираю, с чего начать в Чите и Улан-Удэ и сколько это стоит.',
    tags: ['автоматизация', 'кафе', 'магазин', 'Чита'],
    relatedSlugs: ['avtomatizaciya-biznesa-chita-zabaykalye-2026', 'chat-bot-dlya-biznesa-chita-ulan-ude-2026', 'skolko-stoit-avtomatizaciya-biznesa-2026'] }),
];
