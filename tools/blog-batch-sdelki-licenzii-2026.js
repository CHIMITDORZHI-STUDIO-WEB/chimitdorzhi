// Батч: сделки с бизнесом, лицензии/аккредитации, бюджетники, семейные архивы (8 статей ~4 мин).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-22';
const SVC = 'https://chimitdorzhi.tech/services';

const SVC_DD = {
  title: 'Техническая проверка IT-активов',
  services: [
    { icon: 'ph-fill ph-magnifying-glass', label: 'Аудит сайта, кода и хостинга' },
    { icon: 'ph-fill ph-key', label: 'Проверка прав на домен и доступы' },
    { icon: 'ph-fill ph-database', label: 'Оценка базы клиентов и CRM' },
    { icon: 'ph-fill ph-shield-check', label: 'Риски по 152-ФЗ и лицензиям' },
  ],
  ctaLabel: 'Заказать проверку', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_LIC = {
  title: 'Сайт под требования и проверки',
  services: [
    { icon: 'ph-fill ph-file-text', label: 'Сайт под требования регулятора' },
    { icon: 'ph-fill ph-shield-check', label: 'Раздел «Сведения об организации»' },
    { icon: 'ph-fill ph-eye', label: 'Версия для слабовидящих' },
    { icon: 'ph-fill ph-scales', label: '152-ФЗ и документы на сайте' },
  ],
  ctaLabel: 'Привести сайт в порядок', ctaUrl: 'https://audit.chimitdorzhi.tech/',
};
const SVC_GOV = {
  title: 'IT для учреждений и НКО',
  services: [
    { icon: 'ph-fill ph-books', label: 'Электронные каталоги и оцифровка' },
    { icon: 'ph-fill ph-globe', label: 'Сайты по требованиям законодательства' },
    { icon: 'ph-fill ph-archive', label: 'Архивы и цифровые фонды' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Сопровождение и обучение' },
  ],
  ctaLabel: 'Обсудить проект', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_FAMILY = {
  title: 'Семейные архивы и родословные',
  services: [
    { icon: 'ph-fill ph-tree-structure', label: 'Родословное древо онлайн' },
    { icon: 'ph-fill ph-image', label: 'Оцифровка фото и документов' },
    { icon: 'ph-fill ph-users-three', label: 'Семейная сеть и совместный доступ' },
    { icon: 'ph-fill ph-hard-drives', label: 'Надёжное хранение архива' },
  ],
  ctaLabel: 'Обсудить семейный архив', ctaUrl: 'https://t.me/chimitdorzhi',
};

const CTA_DD = { url: `${SVC}/it-audit/`, label: 'Техническая проверка' };
const CTA_LIC = { url: 'https://audit.chimitdorzhi.tech/', label: 'Аудит сайта' };
const CTA_GOV = { url: `${SVC}/web-development/`, label: 'Разработка для учреждений' };
const CTA_BIZ = { url: `${SVC}/business-automation/`, label: 'Автоматизация под ключ' };
const CTA_FAMILY = { url: `${SVC}/web-development/`, label: 'Семейный архив под ключ' };

const T = (items) => items.concat([{ id: 'faq', text: 'FAQ' }, { id: 'vyvody', text: 'Коротко о главном' }]);

const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D,
  readingMinutes: 4, shortForm: true, servicesOffer: SVC_DD, ctaInternal: CTA_DD,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'kupit-gotovyy-biznes-proverka-it-2026', category: 'development', heroIcon: 'ph-fill ph-magnifying-glass',
    servicesOffer: SVC_DD, ctaInternal: CTA_DD,
    title: 'Купить готовый бизнес: как проверить сайт, базу и IT-активы',
    metaTitle: 'Купить готовый бизнес: проверка IT-активов',
    metaDescription: 'Покупаете готовый бизнес — проверьте не только выручку: кому принадлежит домен и сайт, реальна ли база клиентов, где хостинг и доступы.',
    metaKeywords: 'купить готовый бизнес, как проверить бизнес перед покупкой, проверка бизнеса, due diligence, покупка бизнеса риски',
    excerpt: 'Что проверить в IT-части бизнеса перед покупкой: права на домен и сайт, реальность базы клиентов, доступы, подписки и риски по 152-ФЗ. Чек-лист покупателя.',
    tags: ['покупка бизнеса', 'проверка', 'due diligence', 'активы'],
    toc: T([{ id: 'chto-zabyvayut', text: 'Что забывают проверить' }, { id: 'cheklist', text: 'Чек-лист технической проверки' }, { id: 'baza', text: 'Как проверить базу клиентов' }, { id: 'riski', text: 'Красные флаги сделки' }]),
    relatedSlugs: ['ocenka-i-prodazha-biznesa-cifrovye-aktivy-2026', 'cifrovoe-nasledstvo-biznesa-2026', 'razrabotchik-propal-zabrat-sayt-2026'] }),

  E({ slug: 'licenziya-obrazovatelnaya-trebovaniya-k-saytu-2026', category: 'legal', heroIcon: 'ph-fill ph-graduation-cap',
    servicesOffer: SVC_LIC, ctaInternal: CTA_LIC,
    title: 'Лицензия на образовательную деятельность: требования к сайту',
    metaTitle: 'Образовательная лицензия: требования к сайту',
    metaDescription: 'Лицензия на образовательную деятельность требует сайта по правилам: раздел Сведения об организации, документы, доступность и 152-ФЗ.',
    metaKeywords: 'лицензия на образовательную деятельность, требования к сайту образовательной организации, сведения об образовательной организации, сайт учебного центра',
    excerpt: 'Какие требования предъявляют к сайту при получении образовательной лицензии: обязательный раздел со сведениями, документы, доступность и защита данных учеников.',
    tags: ['лицензия', 'образование', 'сайт', 'требования'],
    toc: T([{ id: 'komu-nuzhna', text: 'Кому нужна лицензия' }, { id: 'trebovaniya', text: 'Требования к сайту' }, { id: 'dokumenty', text: 'Какие документы разместить' }, { id: 'oshibki', text: 'Частые ошибки и отказы' }]),
    relatedSlugs: ['trebovaniya-k-saytu-shkoly-2026', 'politika-obrabotki-pd-obrazec-2026', 'audit-152-fz-2026'] }),

  E({ slug: 'akkreditaciya-it-kompanii-2026', category: 'legal', heroIcon: 'ph-fill ph-certificate',
    servicesOffer: SVC_LIC, ctaInternal: CTA_BIZ,
    title: 'Аккредитация IT-компании: зачем нужна и как получить',
    metaTitle: 'Аккредитация IT-компании: как получить',
    metaDescription: 'Аккредитация IT-компании: льготы по налогам и взносам, отсрочка сотрудникам, требования к выручке и ОКВЭД, как проходит сама процедура.',
    metaKeywords: 'аккредитация it компании, аккредитация ит компании как получить, льготы для it компаний, оквэд для аккредитации, аккредитация минцифры',
    excerpt: 'Какие льготы даёт аккредитация IT-компании, кто может её получить, какие требования к ОКВЭД и доле IT-выручки и как проходит процедура подачи.',
    tags: ['аккредитация', 'IT-компания', 'льготы', 'Минцифры'],
    toc: T([{ id: 'zachem', text: 'Что даёт аккредитация' }, { id: 'komu', text: 'Кто может получить' }, { id: 'kak-poluchit', text: 'Как проходит процедура' }, { id: 'nyuansy', text: 'Нюансы и подводные камни' }]),
    relatedSlugs: ['reestr-rossiyskogo-po-2026', 'importozameshchenie-po-2026', 'kak-otkryt-svoyu-franshizu-2026'] }),

  E({ slug: 'elektronnyy-katalog-biblioteki-2026', category: 'industries', heroIcon: 'ph-fill ph-books',
    servicesOffer: SVC_GOV, ctaInternal: CTA_GOV,
    title: 'Электронный каталог библиотеки: оцифровка фонда с нуля',
    metaTitle: 'Электронный каталог библиотеки: оцифровка фонда',
    metaDescription: 'Оцифровка библиотечного фонда с нуля: что должно быть в каталоге — поиск, выдача, читательский билет, какие системы готовы и когда нужна разработка.',
    metaKeywords: 'электронный каталог библиотеки, оцифровка библиотечного фонда, автоматизация библиотеки, библиотечная система, учет книг библиотека',
    excerpt: 'Как перевести библиотечный фонд в электронный каталог: что внутри системы (поиск, выдача, читатели), какие есть готовые решения и когда нужна своя.',
    tags: ['библиотека', 'оцифровка', 'каталог', 'учреждения'],
    toc: T([{ id: 'zachem', text: 'Зачем библиотеке каталог' }, { id: 'chto-vnutri', text: 'Что внутри системы' }, { id: 'ocifrovka', text: 'Как оцифровать фонд' }, { id: 'gotovoe-svoe', text: 'Готовое или своё' }]),
    relatedSlugs: ['ocifrovka-bumazhnyh-form-2026', 'trebovaniya-k-saytu-shkoly-2026', 'svoy-konverter-dokumentov-2026'] }),

  E({ slug: 'ocenka-i-prodazha-biznesa-cifrovye-aktivy-2026', category: 'finance', heroIcon: 'ph-fill ph-chart-line-up',
    servicesOffer: SVC_DD, ctaInternal: CTA_DD,
    title: 'Оценка и продажа бизнеса: сколько стоят цифровые активы',
    metaTitle: 'Оценка бизнеса: сколько стоят цифровые активы',
    metaDescription: 'Оценка бизнеса перед продажей: как считать стоимость цифровых активов — сайта, базы клиентов, домена, соцсетей, автоматизации — и как упаковать бизнес.',
    metaKeywords: 'оценка стоимости бизнеса, как продать бизнес, оценка цифровых активов, продажа бизнеса подготовка, стоимость сайта при продаже бизнеса',
    excerpt: 'Как считать стоимость цифровых активов при продаже бизнеса (сайт, база, домен, автоматизация) и что сделать заранее, чтобы бизнес стоил дороже.',
    tags: ['оценка бизнеса', 'продажа', 'активы', 'финансы'],
    toc: T([{ id: 'chto-schitayut', text: 'Что обычно считают' }, { id: 'cifrovye', text: 'Цифровые активы бизнеса' }, { id: 'kak-ocenit', text: 'Как их оценить' }, { id: 'upakovka', text: 'Как поднять цену перед продажей' }]),
    relatedSlugs: ['kupit-gotovyy-biznes-proverka-it-2026', 'cifrovoe-nasledstvo-biznesa-2026', 'svoya-razrabotka-ili-gotovoe-tco-2026'] }),

  E({ slug: 'cifrovoe-nasledstvo-biznesa-2026', category: 'development', heroIcon: 'ph-fill ph-key',
    servicesOffer: SVC_DD, ctaInternal: CTA_BIZ,
    title: 'Цифровое наследство бизнеса: доступы, домены и аккаунты',
    metaTitle: 'Цифровое наследство бизнеса: доступы и домены',
    metaDescription: 'Что будет с сайтом, доменом, почтой и базой, если ключевой человек уйдёт: как навести порядок в доступах, оформить их на компанию.',
    metaKeywords: 'цифровое наследство, передача доступов компании, домен оформлен на сотрудника, потеря доступа к сайту, ликвидация ооо данные',
    excerpt: 'Что будет с сайтом, доменом, почтой и базой, если ключевой сотрудник уйдёт или бизнес закроется: как навести порядок в доступах и оформить их на компанию.',
    tags: ['доступы', 'домен', 'риски', 'наследство'],
    toc: T([{ id: 'problema', text: 'Типичная катастрофа' }, { id: 'inventarizaciya', text: 'Инвентаризация активов' }, { id: 'na-kompaniyu', text: 'Как оформить на компанию' }, { id: 'likvidaciya', text: 'Если бизнес закрывается' }]),
    relatedSlugs: ['razrabotchik-propal-zabrat-sayt-2026', 'kupit-gotovyy-biznes-proverka-it-2026', 'perenesti-sayt-domen-bez-prostoya-2026'] }),

  E({ slug: 'trebovaniya-k-saytu-shkoly-2026', category: 'legal', heroIcon: 'ph-fill ph-student',
    servicesOffer: SVC_LIC, ctaInternal: CTA_LIC,
    title: 'Требования к сайту школы, детсада и бюджетного учреждения',
    metaTitle: 'Требования к сайту школы и детсада: чек-лист',
    metaDescription: 'Требования к сайту школы, детского сада и бюджетного учреждения: обязательный раздел со сведениями, перечень документов, версия для слабовидящих.',
    metaKeywords: 'требования к сайту школы, сайт детского сада требования, сайт бюджетного учреждения, сведения об образовательной организации, версия для слабовидящих',
    excerpt: 'Что обязательно должно быть на сайте школы, детсада или учреждения: раздел со сведениями, документы, доступная версия, хостинг в РФ и защита данных.',
    tags: ['школа', 'детсад', 'сайт', 'требования'],
    toc: T([{ id: 'komu', text: 'Кого это касается' }, { id: 'obyazatelnoe', text: 'Что обязательно на сайте' }, { id: 'dostupnost', text: 'Версия для слабовидящих' }, { id: 'proverki', text: 'Проверки и штрафы' }]),
    relatedSlugs: ['licenziya-obrazovatelnaya-trebovaniya-k-saytu-2026', 'politika-obrabotki-pd-obrazec-2026', 'dostupnost-sayta-a11y-2026'] }),

  E({ slug: 'programma-semeynoe-drevo-2026', category: 'industries', heroIcon: 'ph-fill ph-tree-structure',
    servicesOffer: SVC_FAMILY, ctaInternal: CTA_FAMILY,
    title: 'Программа для семейного древа и оцифровка семейного архива',
    metaTitle: 'Программа для семейного древа и архив семьи',
    metaDescription: 'Как составить родословную онлайн и сохранить семейный архив: какие программы для семейного древа есть, чем отличаются.',
    metaKeywords: 'программа для семейного древа, составить родословную онлайн, генеалогическое древо программа, оцифровка семейного архива, родословная семьи',
    excerpt: 'Какие есть программы для семейного древа, чем отличаются, как оцифровать старые фото и документы и где надёжно хранить семейный архив, чтобы он не пропал.',
    tags: ['родословная', 'семейное древо', 'архив', 'оцифровка'],
    toc: T([{ id: 'zachem', text: 'Зачем это делать сейчас' }, { id: 'programmy', text: 'Чем составить древо' }, { id: 'ocifrovka', text: 'Как оцифровать архив' }, { id: 'hranenie', text: 'Где хранить надёжно' }]),
    relatedSlugs: ['gerel-semeynaya-set-keys-2026', 'cifrovizaciya-mifologii-rodoslovnyh-2027', 'svoy-oblachnyy-disk-2026'] }),
];
