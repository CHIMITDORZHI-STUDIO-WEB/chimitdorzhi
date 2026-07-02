// Батч 7 «зарубежный стартап, которого нет в России/Забайкалье».
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-03';

const SVC = {
  title: 'Что я делаю под ключ',
  services: [
    { icon: 'ph-fill ph-code', label: 'Сайты и веб-приложения' },
    { icon: 'ph-fill ph-robot', label: 'Боты в Telegram и MAX, ИИ-агенты' },
    { icon: 'ph-fill ph-flow-arrow', label: 'Автоматизация и интеграции' },
    { icon: 'ph-fill ph-storefront', label: 'Маркетплейсы и платформы' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Внедрение и поддержка' },
  ],
  ctaLabel: 'Обсудить ваш проект',
  ctaUrl: 'https://t.me/chimitdorzhi',
};
const PRED = { url: 'https://chimitdorzhi.tech/predlozheniya/', label: 'Обсудить ваш проект' };
const TOC = [
  { id: 'chto-eto', text: 'Что это за модель за рубежом' },
  { id: 'pochemu-net-v-rf', text: 'Почему такого нет у нас' },
  { id: 'kak-mogla-by-vyglyadet', text: 'Как это могло бы выглядеть здесь' },
  { id: 'chto-nuzhno-dlya-zapuska', text: 'Что нужно для запуска' },
  { id: 'riski-i-slozhnosti', text: 'Риски и сложности' },
  { id: 'faq', text: 'FAQ' },
  { id: 'vyvody', text: 'Коротко о главном' },
];

const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D, readingMinutes: 5,
  servicesOffer: SVC, ctaInternal: PRED, category: 'industries', toc: TOC,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'marketplace-sidelok-dlya-pozhilyh-2027', heroIcon: 'ph-fill ph-hand-heart',
    title: 'Honor по-русски: маркетплейс сиделок для пожилых с координацией смен',
    metaTitle: 'Маркетплейс сиделок для пожилых (аналог Honor)',
    metaDescription: 'Разбираю модель зарубежного сервиса Honor: платформа, которая подбирает семье проверенную сиделку для пожилого родственника и технологично координирует расписание смен, замены при болезни сиделки и общение с семьёй. Как такая платформа могла бы работать в России. Образовательный разбор, не медицинская консультация.',
    excerpt: 'Найти надёжную сиделку для пожилого родственника и не думать, кто заменит её в отпуске, — за рубежом для этого есть платформа с координацией смен. У нас это держится на личных договорённостях. Разбираю модель Honor.',
    tags: ['стартап-идея', 'маркетплейс', 'уход за пожилыми', 'бизнес-модель'],
    relatedSlugs: ['nyani-sidelki-marketplace-2027', 'telemedicina-dlya-zhivotnyh-2027', 'raspisanie-smen-dlya-pochasovogo-personala-2027'] }),

  E({ slug: 'raspisanie-smen-dlya-pochasovogo-personala-2027', heroIcon: 'ph-fill ph-calendar-check',
    title: 'Homebase по-русски: расписание смен и учёт времени для почасового персонала',
    metaTitle: 'Расписание смен для почасового персонала (аналог Homebase)',
    metaDescription: 'Разбираю модель зарубежного сервиса Homebase: SaaS для бизнеса с почасовым персоналом (кафе, магазины, склады), который автоматически составляет расписание смен, учитывает доступность сотрудников, считает отработанные часы и уведомляет о заменах. Как такая система могла бы работать для малого бизнеса в России.',
    excerpt: 'Составить расписание смен для десятка сотрудников кафе или магазина вручную — это часы работы каждую неделю. За рубежом это автоматизирует отдельный SaaS. У нас чаще Excel и звонки. Разбираю модель Homebase.',
    tags: ['стартап-идея', 'SaaS', 'управление персоналом', 'бизнес-модель'],
    relatedSlugs: ['marketplace-vremennogo-personala-2027', 'uchet-sebestoimosti-blyud-i-zakupok-2027', 'marketplace-sidelok-dlya-pozhilyh-2027'] }),

  E({ slug: 'fitnes-oborudovanie-plyus-podpiska-na-trenirovki-2027', heroIcon: 'ph-fill ph-barbell',
    title: 'Peloton по-русски: фитнес-оборудование и подписка на live-тренировки в комплекте',
    metaTitle: 'Фитнес-оборудование с подпиской на тренировки (аналог Peloton)',
    metaDescription: 'Разбираю модель зарубежного сервиса Peloton: покупатель приобретает фитнес-оборудование (велотренажёр, беговую дорожку) со встроенным экраном и подписывается на живые и записанные тренировки с инструкторами. Как такая гибридная модель «железо плюс подписка» могла бы работать для российского фитнес-рынка.',
    excerpt: 'Купил велотренажёр — и сразу получил доступ к живым тренировкам с инструктором и рейтингом среди других участников. За рубежом это целая гибридная бизнес-модель «железо плюс подписка». У нас такого почти нет. Разбираю модель Peloton.',
    tags: ['стартап-идея', 'подписка', 'фитнес', 'бизнес-модель'],
    relatedSlugs: ['edinyy-abonement-fitnes-studii-2027', 'saas-dlya-personalnyh-trenerov-2027', 'saas-dlya-studiy-zapis-oplata-crm-2027'] }),

  E({ slug: 'saas-dlya-personalnyh-trenerov-2027', heroIcon: 'ph-fill ph-person-simple-run',
    title: 'Trainerize по-русски: SaaS для персональных тренеров — ведение клиентов и программ',
    metaTitle: 'SaaS для персональных тренеров (аналог Trainerize)',
    metaDescription: 'Разбираю модель зарубежного сервиса Trainerize: приложение для персональных тренеров, которое позволяет вести клиентов удалённо — составлять программы тренировок и питания, отслеживать прогресс и общаться, не привязываясь к личным встречам в зале. Как такой инструмент мог бы работать для тренеров в России.',
    excerpt: 'Персональный тренер ведёт клиентов по переписке в мессенджере и теряет данные о прогрессе. За рубежом есть специализированное приложение для программ тренировок и удалённого сопровождения. У нас такого почти нет. Разбираю модель Trainerize.',
    tags: ['стартап-идея', 'SaaS', 'фитнес', 'бизнес-модель'],
    relatedSlugs: ['fitnes-oborudovanie-plyus-podpiska-na-trenirovki-2027', 'edinyy-abonement-fitnes-studii-2027', 'saas-dlya-studiy-zapis-oplata-crm-2027'] }),

  E({ slug: 'vyezdnoy-avtomehanik-po-zapisi-2027', heroIcon: 'ph-fill ph-wrench',
    title: 'YourMechanic по-русски: выездной автомеханик к вам по записи',
    metaTitle: 'Выездной автомеханик по записи (аналог YourMechanic)',
    metaDescription: 'Разбираю модель зарубежного сервиса YourMechanic: вместо поездки в автосервис клиент вызывает сертифицированного механика к себе домой или в офис на конкретное время, механик проводит диагностику и ремонт на месте. Как такая платформа могла бы работать для автовладельцев в России.',
    excerpt: 'Не нужно везти машину в сервис и ждать — за рубежом механик сам приезжает к вам на парковку в назначенное время и чинит на месте. У нас такой платформы почти нет. Разбираю модель YourMechanic и что нужно для запуска.',
    tags: ['стартап-идея', 'маркетплейс', 'автосервис', 'бизнес-модель'],
    relatedSlugs: ['marketplace-nezavisimyh-masterov-krasoty-2027', 'zayavka-neskolko-predlozheniy-masterov-2027', 'raspisanie-smen-dlya-pochasovogo-personala-2027'] }),
];
