// Кластер «Гранты и поддержка» (рубрика Финансы): ИИ-гранты, креативные индустрии ДФО, туризм РГО, льготы.
// Эвергрин: суммы/сроки подаются как «по объявленным условиям», со сверкой на офиц. сайтах.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-06-23';
const SVC = {
  title: 'Чем я помогаю под грант и не только',
  services: [
    { icon: 'ph-fill ph-robot', label: 'ИИ-решения под грантовый проект' },
    { icon: 'ph-fill ph-flow-arrow', label: 'Автоматизация и MVP' },
    { icon: 'ph-fill ph-chart-line', label: 'Аналитика и финмодель' },
    { icon: 'ph-fill ph-browser', label: 'Сайты, боты, мини-аппы' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Сопровождение проекта' },
  ],
};
const PRED = { url: 'https://chimitdorzhi.tech/predlozheniya/', label: 'Обсудить проект под грант' };
const ANALYTICS = { url: 'https://chimitdorzhi.tech/services/business-analytics-unit-economics/', label: 'Финмодель и аналитика под ключ' };
const AGENTS = { url: 'https://chimitdorzhi.tech/services/ai-agents/', label: 'ИИ-решение под ключ' };
const E = (o) => Object.assign({
  category: 'finance', published: true, datePublished: D, dateModified: D, readingMinutes: 9,
  servicesOffer: SVC,
}, o, { contentHtml: C(o.slug) });
const T = (...ids) => ids.map(([id, text]) => ({ id, text }));

module.exports = [
  E({ slug: 'grant-na-ii-proekt-razvitie-ii-2026', heroIcon: 'ph-fill ph-brain', ctaInternal: AGENTS,
    title: 'Грант на ИИ-проект: конкурс «Развитие-Искусственный интеллект» Фонда содействия инновациям',
    metaTitle: 'Грант на ИИ-проект: Развитие-ИИ',
    metaDescription: 'Грант на ИИ-проект по конкурсу «Развитие-Искусственный интеллект» Фонда содействия инновациям: до 30 млн рублей (по объявленным условиям) на разработку ИИ, в т.ч. интеллектуальные системы поддержки решений. Условия, кому подходит, как подать. Сверяйте на fasie.ru.',
    excerpt: 'Фонд содействия инновациям поддерживает ИИ-проекты грантом до 30 млн рублей по конкурсу «Развитие-ИИ». Разбираю, кому подходит, на что можно потратить и как подать заявку. Сроки и суммы сверяйте на fasie.ru.',
    tags: ['грант', 'ИИ', 'Фонд содействия инновациям', 'поддержка'],
    toc: T(['chto-eto','Что за грант'],['usloviya','Условия и кому подходит'],['na-chto','На что можно потратить'],['kak-podat','Как подать заявку'],['oshibki','Частые ошибки'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['kredity-i-lgoty-dlya-biznesa-2026', 'podderzhka-kreativnyh-industriy-dfo-2026', 'granty-podderzhka-biznesa-buryatiya-2026'] }),
  E({ slug: 'podderzhka-kreativnyh-industriy-dfo-2026', heroIcon: 'ph-fill ph-palette', ctaInternal: PRED,
    title: 'Меры поддержки креативных индустрий Дальнего Востока в 2026',
    metaTitle: 'Поддержка креативных индустрий ДФО 2026',
    metaDescription: 'Меры поддержки креативных индустрий Дальнего Востока в 2026: гранты и программы (например, «Креативный код. Россия»), рекламные бонусы на маркетплейсах, региональные субсидии и институты развития. Кому подходит и как получить. Условия сверяйте на офиц. сайтах.',
    excerpt: 'Креативный бизнес ДФО — дизайн, IT-контент, медиа, ремёсла — может получить гранты и продвижение по программам поддержки. Разбираю, какие меры есть и как ими воспользоваться. Сроки сверяйте на офиц. сайтах.',
    tags: ['креативные индустрии', 'ДФО', 'гранты', 'поддержка'],
    toc: T(['chto-eto','Что такое креативные индустрии'],['programmy','Какие меры есть'],['komu','Кому подходит'],['kak-poluchit','Как получить поддержку'],['oshibki','Частые ошибки'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['grant-na-ii-proekt-razvitie-ii-2026', 'kredity-i-lgoty-dlya-biznesa-2026', 'granty-na-vnutrenniy-turizm-rgo-2026'] }),
  E({ slug: 'granty-na-vnutrenniy-turizm-rgo-2026', heroIcon: 'ph-fill ph-mountains', ctaInternal: PRED,
    title: 'Гранты на внутренний туризм и краеведение: программа Русского географического общества',
    metaTitle: 'Гранты на внутренний туризм (РГО)',
    metaDescription: 'Гранты Русского географического общества на внутренний туризм, краеведение и сохранение живой природы: до нескольких миллионов рублей (по условиям программы). Направления, кому подходит и как подать заявку. Актуальные суммы и сроки сверяйте на rgo.ru.',
    excerpt: 'РГО выдаёт гранты на внутренний туризм, краеведение и экологию — это шанс для туристических проектов Байкала и Бурятии. Разбираю направления, кому подходит и как подать. Условия сверяйте на rgo.ru.',
    tags: ['грант', 'туризм', 'РГО', 'краеведение'],
    toc: T(['chto-eto','Что за программа'],['napravleniya','Какие направления'],['komu','Кому подходит'],['kak-podat','Как подать заявку'],['oshibki','Частые ошибки'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['sayt-i-bronirovanie-dlya-turbazy-baykal-buryatiya-2026', 'kredity-i-lgoty-dlya-biznesa-2026', 'podderzhka-kreativnyh-industriy-dfo-2026'] }),
  E({ slug: 'kredity-i-lgoty-dlya-biznesa-2026', heroIcon: 'ph-fill ph-bank', ctaInternal: ANALYTICS,
    title: 'Кредиты, гранты и льготы для бизнеса в 2026: навигатор по мерам поддержки',
    metaTitle: 'Кредиты и льготы для бизнеса 2026',
    metaDescription: 'Навигатор по мерам поддержки бизнеса в 2026: гранты и конкурсы (ИИ, туризм, креативные индустрии), льготные кредиты для МСП и социальных предпринимателей, субсидии, эквайринг и бонусы. Как выбрать подходящую меру. Условия сверяйте на офиц. сайтах.',
    excerpt: 'Гранты, льготные кредиты, субсидии, бонусы — мер поддержки много, и в них легко потеряться. Собрал навигатор: какие бывают, кому подходят и как выбрать. Ставки и условия сверяйте на офиц. сайтах.',
    tags: ['кредиты', 'гранты', 'льготы', 'поддержка бизнеса'],
    toc: T(['obzor','Какие бывают меры'],['granty','Гранты и конкурсы'],['kredity','Льготные кредиты'],['instrumenty','Эквайринг, бонусы, сервисы'],['kak-vybrat','Как выбрать меру'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['grant-na-ii-proekt-razvitie-ii-2026', 'granty-na-vnutrenniy-turizm-rgo-2026', 'podderzhka-kreativnyh-industriy-dfo-2026'] }),
];
