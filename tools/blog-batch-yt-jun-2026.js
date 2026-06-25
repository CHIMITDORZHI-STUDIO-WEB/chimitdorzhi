// Батч (июнь 2026) по материалам отраслевых интервью: GEO (заказы из ИИ),
// оплата звёздами в Telegram, новые OCR-модели для документов без облака.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-06-25';
const SVC_GEO = {
  title: 'Чем помогу с GEO и продвижением в ИИ',
  services: [
    { icon: 'ph-fill ph-robot', label: 'GEO-аудит: готовность сайта к ответам ИИ' },
    { icon: 'ph-fill ph-file-text', label: 'Настройка llms.txt и robots.txt под AI-краулеры' },
    { icon: 'ph-fill ph-brackets-curly', label: 'Schema: Person, Organization, FAQ, Speakable' },
    { icon: 'ph-fill ph-chart-line-up', label: 'Мониторинг упоминаний бренда в нейросетях' },
    { icon: 'ph-fill ph-magnifying-glass', label: 'SEO + GEO под Яндекс и ИИ-поиск' },
  ],
};
const SVC_BOT = {
  title: 'Что я делаю с ботами и мини-приложениями',
  services: [
    { icon: 'ph-fill ph-robot', label: 'Боты Telegram и MAX' },
    { icon: 'ph-fill ph-device-mobile', label: 'Мини-приложения и магазины' },
    { icon: 'ph-fill ph-credit-card', label: 'Приём оплаты: СБП, карты, звёзды' },
    { icon: 'ph-fill ph-flow-arrow', label: 'Автоворонки и интеграции' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Поддержка и сопровождение' },
  ],
};
const SVC_DOC = {
  title: 'Что я делаю с ИИ-обработкой документов',
  services: [
    { icon: 'ph-fill ph-file-magnifying-glass', label: 'OCR и распознавание документов' },
    { icon: 'ph-fill ph-brain', label: 'RAG и ИИ-ассистенты по базе знаний' },
    { icon: 'ph-fill ph-cpu', label: 'Локальные модели на вашем сервере' },
    { icon: 'ph-fill ph-shield-check', label: 'Приватность и 152-ФЗ' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Внедрение и поддержка' },
  ],
};
const DM = { url: 'https://chimitdorzhi.tech/services/digital-marketing/', label: 'Заказать GEO-аудит' };
const AUTO = { url: 'https://chimitdorzhi.tech/services/business-automation/', label: 'Сделать бота под ключ' };
const AGENTS = { url: 'https://chimitdorzhi.tech/services/ai-agents/', label: 'Внедрить ИИ-обработку документов' };
const E = (o, cat, svc) => Object.assign({
  category: cat, published: true, datePublished: D, dateModified: D, readingMinutes: 9,
  servicesOffer: svc,
}, o, { contentHtml: C(o.slug) });
const T = (...ids) => ids.map(([id, text]) => ({ id, text }));

module.exports = [
  E({ slug: 'geo-pochemu-net-zakazov-iz-ai-2026', heroIcon: 'ph-fill ph-magnifying-glass', ctaInternal: DM,
    title: 'Почему у вас нет заказов из ChatGPT и Алисы — и что с этим делать',
    metaTitle: 'Почему нет заказов из ChatGPT и Алисы (GEO)',
    metaDescription: 'Почему бизнес может вообще не получать заявок из ChatGPT, Алисы, Perplexity и Gemini и что с этим делать. ИИ-чаты как новый вход в интернет, эффект zero-click, как проверить свою видимость в ответах ИИ, с чего начать (техаудит, Schema, контент) и как измерить эффект. По наблюдениям практиков GEO.',
    excerpt: 'Люди всё чаще получают готовый ответ прямо в ИИ-чате и не идут на сайт. Если вас нет в ответах моделей — для пользователя вас «не существует». Разбираю, как это проверить и с чего начать, чтобы попадать в ответы ИИ.',
    tags: ['GEO', 'AI-поиск', 'ChatGPT', 'Алиса'],
    toc: T(['chto-proishodit','ИИ-чаты как новый вход в интернет'],['pochemu-vas-net','Почему вас нет в ответах ИИ'],['kak-proverit','Как проверить свою видимость в ИИ'],['chto-delat','Что делать: с чего начать'],['izmerit','Как измерить эффект'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['kontent-kotoryy-citiruyut-ii-2026', 'geo-chek-list-30-punktov-2026', 'geo-2027-alisa-gigachat-neyropoisk'] }, 'geo', SVC_GEO),
  E({ slug: 'oplata-zvezdami-telegram-stars-2026', heroIcon: 'ph-fill ph-star', ctaInternal: AUTO,
    title: 'Оплата звёздами в Telegram (Stars): как работает и кому это нужно',
    metaTitle: 'Оплата звёздами в Telegram (Stars)',
    metaDescription: 'Telegram Stars (звёзды) простыми словами: как работает оплата внутри ботов и мини-приложений, почему цифровые товары обязаны продаваться за звёзды (правила Apple и Google), а физические можно принимать картами, СБП и крипто-кошельком. Кому это нужно, минусы звёзд и альтернативы.',
    excerpt: 'Звёзды Telegram — внутренняя валюта для оплаты в ботах и мини-приложениях. Разбираю, как это работает, почему цифровые товары обязаны идти через звёзды, а физические — нет, и кому это реально нужно.',
    tags: ['Telegram', 'Telegram Stars', 'оплата', 'боты'],
    toc: T(['chto-eto','Что такое Telegram Stars'],['kak-rabotaet','Как работает оплата звёздами'],['cifrovye-vs-fizicheskie','Цифровые и физические товары: разница'],['komu-nuzhno','Кому и когда это нужно'],['alternativy','Альтернативы: кошелёк и обычная оплата'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['magazin-v-telegram-mini-app-2026', 'priem-platezhey-sbp-sayt', 'chatbot-telegram-max-vk-2026'] }, 'development', SVC_BOT),
  E({ slug: 'novye-ocr-modeli-2026-dokumenty-bez-oblaka', heroIcon: 'ph-fill ph-file-magnifying-glass', ctaInternal: AGENTS,
    title: 'Новые OCR-модели 2026: превращаем документы в данные без облака',
    metaTitle: 'Новые OCR-модели 2026: документы без облака',
    metaDescription: 'Новое поколение OCR-моделей в 2026: распознают не только текст, но и структуру документов (таблицы, заголовки), работают со многими языками и длинными файлами. Главное для бизнеса — self-hosted-запуск: документы не покидают компанию, что важно для 152-ФЗ. Зачем это нужно, для RAG и автоматизации, как внедрить.',
    excerpt: 'OCR нового поколения превращает сканы и PDF не просто в текст, а в структуру с таблицами и полями. Главное — модели можно запускать на своём сервере, не отправляя договоры в чужое облако. Разбираю пользу для бизнеса и как внедрить.',
    tags: ['OCR', 'документы', 'self-hosted', 'RAG'],
    toc: T(['chto-takoe-ocr','Что такое OCR и зачем бизнесу'],['chto-novogo','Что нового в OCR в 2026'],['self-hosted','Self-hosted: документы не покидают компанию'],['dlya-chego','Для чего это бизнесу'],['kak-vnedrit','Как внедрить'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['chandra-ai-ocr-dokumenty-2026', 'docling-pdf-v-dannye-dlya-ai-2026', 'rag-sistemy-dlya-biznesa-2026'] }, 'ai-dev', SVC_DOC),
];
