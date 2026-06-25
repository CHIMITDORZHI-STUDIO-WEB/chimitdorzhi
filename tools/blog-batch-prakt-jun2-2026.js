// Сборный батч (июнь 2026): ИИ для магазина и записи, 152-ФЗ (согласие, кибербез
// удалёнки), приём оплаты из-за рубежа, облачное хранилище (opensource, блок «Где взять»).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-06-25';
const SVC_AI = {
  title: 'Что я делаю с ИИ под ключ',
  services: [
    { icon: 'ph-fill ph-robot', label: 'ИИ-агенты и чат-боты' },
    { icon: 'ph-fill ph-storefront', label: 'Автоматизация магазина' },
    { icon: 'ph-fill ph-flow-arrow', label: 'Воронки и интеграции' },
    { icon: 'ph-fill ph-shield-check', label: 'Приватность и 152-ФЗ' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Внедрение и поддержка' },
  ],
};
const SVC_SEC = {
  title: 'Что я делаю по безопасности и 152-ФЗ',
  services: [
    { icon: 'ph-fill ph-shield-check', label: 'Аудит 152-ФЗ и документы' },
    { icon: 'ph-fill ph-lock-key', label: 'Доступы, 2FA, пароли' },
    { icon: 'ph-fill ph-hard-drives', label: 'Бэкапы и свой сервер' },
    { icon: 'ph-fill ph-file-text', label: 'Согласия и уведомление в РКН' },
    { icon: 'ph-fill ph-graduation-cap', label: 'Обучение команды' },
  ],
};
const SVC_OS = {
  title: 'Что я делаю с self-hosted',
  services: [
    { icon: 'ph-fill ph-cloud', label: 'Своё облако (Nextcloud)' },
    { icon: 'ph-fill ph-hard-drives', label: 'Сервер и хранилище' },
    { icon: 'ph-fill ph-shield-check', label: 'Безопасность и 152-ФЗ' },
    { icon: 'ph-fill ph-arrows-clockwise', label: 'Бэкапы и синхронизация' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Внедрение и поддержка' },
  ],
};
const SVC_GEN = {
  title: 'Чем помогаю бизнесу',
  services: [
    { icon: 'ph-fill ph-credit-card', label: 'Приём платежей на сайте' },
    { icon: 'ph-fill ph-flow-arrow', label: 'Автоматизация процессов' },
    { icon: 'ph-fill ph-robot', label: 'Боты Telegram/MAX' },
    { icon: 'ph-fill ph-shield-check', label: 'Защита данных' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Сопровождение' },
  ],
};
const AUTO = { url: 'https://chimitdorzhi.tech/services/business-automation/', label: 'Автоматизировать под ключ' };
const AGENTS = { url: 'https://chimitdorzhi.tech/services/ai-agents/', label: 'Внедрить ИИ-агента под ключ' };
const SEC = { url: 'https://chimitdorzhi.tech/services/cybersecurity/', label: 'Защита данных и 152-ФЗ под ключ' };
const PRED = { url: 'https://chimitdorzhi.tech/predlozheniya/', label: 'Обсудить ваш проект' };
const OS = { url: 'https://chimitdorzhi.tech/predlozheniya/open-source-pod-klyuch/', label: 'Развернуть своё облако под ключ' };
const E = (o, cat, svc) => Object.assign({
  category: cat, published: true, datePublished: D, dateModified: D, readingMinutes: 8,
  servicesOffer: svc,
}, o, { contentHtml: C(o.slug) });
const T = (...ids) => ids.map(([id, text]) => ({ id, text }));

module.exports = [
  E({ slug: 'ii-dlya-internet-magazina-kartochki-tovarov-2026', heroIcon: 'ph-fill ph-storefront', ctaInternal: AUTO,
    title: 'ИИ для интернет-магазина: карточки и описания товаров пачкой',
    metaTitle: 'ИИ для интернет-магазина: карточки товаров',
    metaDescription: 'Как интернет-магазину использовать ИИ-нейросети для генерации описаний и карточек товаров массово: SEO-тексты, характеристики, ответы на отзывы. Что ИИ умеет, как поставить на поток и какие ошибки и риски учесть (уникальность, проверка фактов). С учётом WB, Ozon, Telegram и MAX.',
    excerpt: 'Писать сотни описаний товаров руками — долго. ИИ генерирует карточки и SEO-тексты пачкой. Разбираю, что нейросеть реально умеет для магазина, как поставить это на поток и где обязательно проверять за ней.',
    tags: ['ИИ', 'интернет-магазин', 'карточки товаров', 'контент'],
    toc: T(['chto-mozhet','Что ИИ умеет для интернет-магазина'],['opisaniya','Описания и карточки товаров пачкой'],['kak-vnedrit','Как поставить генерацию на поток'],['oshibki','Частые ошибки и риски'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['ai-dlya-sellerov-wb-ozon-2026', 'ai-agent-onlayn-zapis-na-uslugi-2026', 'chatbot-telegram-max-vk-2026'] }, 'ai-life', SVC_AI),
  E({ slug: 'ai-agent-onlayn-zapis-na-uslugi-2026', heroIcon: 'ph-fill ph-calendar-check', ctaInternal: AGENTS,
    title: 'ИИ-агент для онлайн-записи на услуги: бот, который сам записывает клиентов',
    metaTitle: 'ИИ-агент для онлайн-записи на услуги',
    metaDescription: 'ИИ-агент для онлайн-записи на услуги: умный бот в Telegram, MAX и на сайте сам отвечает клиенту, подбирает время, записывает в расписание, напоминает и переносит визиты. Чем отличается от формы записи и живого администратора, кому подходит и как внедрить под ключ с учётом 152-ФЗ.',
    excerpt: 'ИИ-агент работает как администратор на записи: отвечает клиенту, подбирает время, записывает и напоминает — в Telegram, MAX и на сайте. Разбираю, как это работает, кому подходит и где нужен живой человек.',
    tags: ['ИИ-агент', 'онлайн-запись', 'чат-бот', 'автоматизация'],
    toc: T(['chto-eto','Что такое ИИ-агент для записи'],['kak-rabotaet','Как это работает'],['komu-podhodit','Кому подходит'],['vnedrenie','Как внедрить под ключ'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['ai-agenty-v-biznese-2026', 'ii-dlya-internet-magazina-kartochki-tovarov-2026', 'chatbot-telegram-max-vk-2026'] }, 'ai-dev', SVC_AI),
  E({ slug: 'kiberbezopasnost-udalennoy-komandy-2026', heroIcon: 'ph-fill ph-shield-check', ctaInternal: SEC,
    title: 'Кибербезопасность удалённой команды: доступы, устройства и утечки',
    metaTitle: 'Кибербезопасность удалённой команды',
    metaDescription: 'Кибербезопасность удалённой и гибридной команды для малого бизнеса: менеджер паролей, двухфакторная аутентификация, защищённый доступ, личные устройства и домашняя сеть, отзыв доступов при увольнении, бэкапы и связь с 152-ФЗ. Правила без паранойи, чтобы через сотрудников не ударили по компании.',
    excerpt: 'Сотрудники работают из дома, с личных ноутбуков и домашнего Wi-Fi — и каждый становится точкой входа. Разбираю правила кибербезопасности удалённой команды: доступы, устройства, утечки и что делать при увольнении.',
    tags: ['безопасность', 'удалённая работа', 'утечки данных', '152-ФЗ'],
    toc: T(['riski','Чем опасна удалённая работа для данных'],['dostupy','Доступы, пароли и двухфакторка'],['ustroystva','Личные устройства и домашняя сеть'],['pravila','Правила и регламент для команды'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['cifrovaya-gigiena-rukovoditelya-2026', 'soglasie-na-obrabotku-pd-2026', 'oblachnoe-hranilishche-dlya-biznesa-2026'] }, 'security', SVC_SEC),
  E({ slug: 'priem-oplaty-iz-za-rubezha-2026', heroIcon: 'ph-fill ph-currency-circle-dollar', ctaInternal: PRED,
    title: 'Приём оплаты из-за рубежа в 2026: какие способы есть у бизнеса и фрилансера',
    metaTitle: 'Приём оплаты из-за рубежа в 2026',
    metaDescription: 'Обзор легальных способов принимать оплату от зарубежных клиентов в 2026 для бизнеса, фрилансера и IT: банки дружественных стран, платёжные агенты, расчёты в нацвалютах, что такое валютный контроль и зачем нужны контракт и инвойс. Образовательный обзор, не финансовая и не юридическая консультация.',
    excerpt: 'Принимать оплату от зарубежных клиентов стало сложнее, но способы есть. Разбираю обзорно, какие варианты бывают у бизнеса и фрилансера, что такое валютный контроль и почему без бухгалтера и юриста тут не обойтись.',
    tags: ['платежи', 'валютный контроль', 'фриланс', 'экспорт'],
    toc: T(['slozhnosti','Почему это стало сложнее'],['sposoby','Какие способы есть у бизнеса и фрилансера'],['chto-uchest','Что учесть: валютный контроль и документы'],['riski','Риски и как себя обезопасить'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['priem-platezhey-sbp-sayt', 'samozanyatomu-priem-oplaty-cheki-2026', 'oblachnoe-hranilishche-dlya-biznesa-2026'] }, 'finance', SVC_GEN),
  E({ slug: 'oblachnoe-hranilishche-dlya-biznesa-2026', heroIcon: 'ph-fill ph-cloud', ctaInternal: OS,
    title: 'Облачное хранилище для бизнеса: своё или чужое',
    metaTitle: 'Облачное хранилище для бизнеса: своё или чужое',
    metaDescription: 'Облачное хранилище файлов для бизнеса: сравнение чужого публичного облака (аренда, удобно, но данные у провайдера) и своего self-hosted облака на своём сервере (контроль, приватность, но нужна настройка). Когда что выбрать, риски вендор-лока и блокировок, безопасность и 152-ФЗ. Пример открытого решения — Nextcloud.',
    excerpt: 'Где держать рабочие файлы компании — в чужом облаке или на своём сервере? Разбираю плюсы и минусы обоих вариантов, риски блокировок и вендор-лока, приватность и 152-ФЗ. На примере открытого Nextcloud.',
    tags: ['облако', 'self-hosted', 'Nextcloud', '152-ФЗ'],
    toc: T(['zachem','Зачем бизнесу облачное хранилище'],['svoy-vs-chuzhoy','Своё или чужое: плюсы и минусы'],['kak-vybrat','Как выбрать под свою задачу'],['bezopasnost','Безопасность данных и 152-ФЗ'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['nextcloud-svoy-oblachnyy-disk-2026', 'self-hosted-infrastruktura-2026', 'kiberbezopasnost-udalennoy-komandy-2026'] }, 'opensource', SVC_OS),
];
