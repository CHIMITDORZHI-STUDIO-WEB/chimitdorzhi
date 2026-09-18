// Не 1С: программы, в которых реально работает малый бизнес, и как связать их
// с ботом, сайтом и отчётами владельцу. Каждая статья ведёт на конкретную услугу.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-19';
const S = 'https://chimitdorzhi.tech';
const P = (slug, label) => ({ url: `${S}/predlozheniya/${slug}/`, label });
const SV = (slug, label) => ({ url: `${S}/services/${slug}/`, label });

const SVC = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-plugs-connected', label: 'Связка учётных программ с сайтом, ботом и маркетплейсами' },
  { icon: 'ph-fill ph-chart-line-up', label: 'Сводки владельцу в Telegram и MAX' },
  { icon: 'ph-fill ph-robot', label: 'Боты для записи, заказов и лояльности' },
  { icon: 'ph-fill ph-shield-check', label: 'Порядок с доступами и данными' },
]};

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));

const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 5, category: 'development',
      servicesOffer: SVC, toc: tocFrom(html) },
    o, { contentHtml: html });
};

module.exports = [

  E({ slug: 'moysklad-vmesto-1c-integraciya-2026', heroIcon: 'ph-fill ph-package',
    ctaInternal: P('integraciya-sistem', 'Связать МойСклад с сайтом и ботом'),
    title: 'МойСклад: когда его хватает вместо 1С и как связать его с сайтом, ботом и маркетплейсами',
    metaTitle: 'МойСклад вместо 1С: кому хватает и как связать с сайтом',
    metaDescription: 'Малой рознице и интернет-магазину часто хватает МойСклада. Когда он подходит, когда уже тесно и как связать остатки и заказы с сайтом, ботом и маркетплейсами.',
    excerpt: 'Не каждому бизнесу нужна 1С. Разбираю, кому хватает МойСклада, где он начинает жать и как связать его с сайтом, ботом и маркетплейсами без ручных правок.',
    tags: ['МойСклад', 'товароучёт', 'интеграция', 'интернет-магазин'],
    relatedSlugs: ['1c-ili-bitrix24-2026', 'ostatki-mezhdu-magazinami-seti-2026', 'ostatki-na-wb-ozon-ym-iz-odnoy-1c-2026'] }),

  E({ slug: 'yclients-bot-max-napominaniya-2026', category: 'industries', heroIcon: 'ph-fill ph-calendar-check',
    ctaInternal: P('max-bot-zapis-uslugi', 'Подключить бота к записи'),
    title: 'YCLIENTS и бот в MAX: запись, напоминания и возврат клиентов в одной связке',
    metaTitle: 'YCLIENTS и бот в MAX: запись, напоминания, возврат клиентов',
    metaDescription: 'Сервис записи уже есть, а клиенты пишут в мессенджер и администратор переписывает всё руками. Бот в MAX берёт окна из расписания и напоминает о визите.',
    excerpt: 'Менять сервис записи не нужно — нужно подключить к нему мессенджер. Показываю, как бот в MAX записывает в то же расписание, напоминает о визите и зовёт клиентов вернуться.',
    tags: ['YCLIENTS', 'онлайн-запись', 'MAX', 'салоны'],
    relatedSlugs: ['neyavki-na-zapis-predoplata-napominaniya-2026', 'onlayn-zapis-bez-sayta-v-messendzhere-2026', 'programma-loyalnosti-kafe-salon-2026'] }),

  E({ slug: 'iiko-r-keeper-otchety-vladelcu-2026', category: 'industries', heroIcon: 'ph-fill ph-fork-knife',
    ctaInternal: P('kontrol-franshizy-horeca', 'Настроить сводку по ресторану'),
    title: 'iiko и r_keeper: как владельцу видеть выручку, себестоимость и списания без выгрузок руками',
    metaTitle: 'iiko и r_keeper: отчёты владельцу без выгрузок руками',
    metaDescription: 'В кассовой системе ресторана есть все цифры, а владелец видит их раз в неделю в таблице от управляющего. Утренняя сводка: выручка, отмены, списания и фудкост.',
    excerpt: 'Данные о ресторане уже лежат в кассовой системе, но до владельца доходят поздно. Разбираю, какие цифры забирать автоматически и как получать их каждое утро в мессенджер.',
    tags: ['iiko', 'r_keeper', 'общепит', 'отчёты'],
    relatedSlugs: ['vyruchka-kazhdoy-tochki-kontrol-seti-2026', 'krazhi-i-nedostachi-na-kasse-2026', 'dashbord-rukovoditelyu-v-telegram-max-2026'] }),

  E({ slug: 'smart-terminal-evotor-chto-umeet-2026', category: 'industries', heroIcon: 'ph-fill ph-cash-register',
    ctaInternal: SV('business-automation', 'Настроить кассу под бизнес'),
    title: 'Смарт-терминал вроде Эвотора: что можно выжать из кассы, кроме чеков',
    metaTitle: 'Смарт-терминал Эвотор: что умеет касса кроме чеков',
    metaDescription: 'Смарт-кассу покупают ради чеков и не пользуются остальным. Товароучёт, отчёты по кассирам, лояльность, связка с учётом и сайтом и сводка владельцу из облака.',
    excerpt: 'Смарт-терминал умеет гораздо больше, чем пробивать чеки. Показываю, что в нём обычно простаивает, что стоит настроить и когда нужна своя интеграция.',
    tags: ['Эвотор', 'касса', 'розница', 'автоматизация'],
    relatedSlugs: ['oblachnaya-kassa-2026', 'krazhi-i-nedostachi-na-kasse-2026', 'programma-loyalnosti-kafe-salon-2026'] }),

  E({ slug: 'korporativnaya-pochta-i-obshchiy-disk-2026', category: 'security', heroIcon: 'ph-fill ph-folders',
    ctaInternal: SV('it-infrastructure', 'Навести порядок с почтой и доступами'),
    title: 'Корпоративная почта и общий диск: как навести порядок с доступами, чтобы файлы не жили в личных аккаунтах',
    metaTitle: 'Корпоративная почта и общий диск: порядок с доступами',
    metaDescription: 'Договоры в личной почте менеджера, прайсы на личном диске, папки открыты по ссылке. Почта на домене, права по ролям и чек-лист прихода и ухода.',
    excerpt: 'Файлы компании живут в личных аккаунтах сотрудников, пока кто-то не уволится. Разбираю, как перевести почту и документы на компанию и раздать доступы по ролям.',
    tags: ['корпоративная почта', 'доступы', 'безопасность', 'IT-инфраструктура'],
    relatedSlugs: ['sotrudnik-unes-bazu-klientov-2026', 'rezervnye-kopii-vazhnee-chem-kazhetsya-2026', 'hosting-domen-prostymi-slovami-2026'] }),

];
