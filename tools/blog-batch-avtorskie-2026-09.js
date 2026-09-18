// Авторские материалы середины сентября: личный опыт от первого лица.
// Рубрики экспертный блог, продажи и кейсы — обложки у них с фотографией автора.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-18';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты и ИИ-агенты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-game-controller', label: 'Игры и геймификация под бренд' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const CTA_TALK = { url: `${S}/predlozheniya/`, label: 'Обсудить ваш проект' };
const CTA_SITE = { url: `${S}/services/web-development/`, label: 'Обсудить сайт' };
const CTA_GAMES = { url: `${S}/development/games/`, label: 'Обсудить игру для бизнеса' };

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));

const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 5,
      servicesOffer: SVC_BIZ, ctaInternal: CTA_TALK, toc: tocFrom(html) },
    o, { contentHtml: html });
};

module.exports = [

  // ---------- Экспертный блог ----------
  E({ slug: 'mne-napisal-fizlico-vmesto-kompanii-2026', category: 'expert', heroIcon: 'ph-fill ph-user-switch',
    title: 'Мне написал не тот клиент: почему сайт притягивает физлиц вместо компаний',
    metaTitle: 'Сайт приводит не тех клиентов: физлица вместо компаний',
    metaDescription: 'Тема одна, а поисковые намерения разные. Как статья про утечки начала приводить частных лиц вместо компаний и что я поменял на странице.',
    excerpt: 'После статьи про утечки данных мне пишут частные лица с СМС-кодами, а работаю я с компаниями. Разбираю, почему так вышло и как развести аудиторию, не ломая трафик.',
    tags: ['личный опыт', 'поисковый трафик', 'B2B', 'контент'],
    relatedSlugs: ['proverka-utechek-dannyh-2026', 'oshibki-v-prodvizhenii-svoego-sayta-2026', 'sarafan-luchshe-reklamy-v-it-2026'] }),

  E({ slug: 'oshibki-v-prodvizhenii-svoego-sayta-2026', category: 'expert', heroIcon: 'ph-fill ph-warning-circle',
    title: 'Мои ошибки в продвижении собственного сайта',
    metaTitle: 'Ошибки в продвижении своего сайта: честный разбор',
    metaDescription: 'Статьи в топ-10 без кликов, кнопка связи в самом низу, не настроенные цели в Метрике. Разбираю свои ошибки по данным Вебмастера и что исправил.',
    excerpt: 'У меня больше 1600 статей, а заявок меньше, чем хотелось бы. Разобрал выгрузку из Вебмастера и нашёл шесть собственных ошибок — показываю каждую и что с ней сделал.',
    tags: ['личный опыт', 'SEO', 'конверсия', 'аналитика'],
    relatedSlugs: ['mne-napisal-fizlico-vmesto-kompanii-2026', 'rabochiy-den-s-ii-agentami-2026', 'medlennyy-sayt-ubivaet-prodazhi-2026'] }),

  E({ slug: 'keysy-bez-imen-klientov-2026', category: 'expert', heroIcon: 'ph-fill ph-eye-slash',
    title: 'Почему я публикую кейсы с цифрами, но без имён клиентов',
    metaTitle: 'Кейсы без имён клиентов: где граница открытости',
    metaDescription: 'В моих кейсах нет логотипов и сумм договоров, зато есть измеримый результат. Объясняю, что показываю, что никогда не раскрываю и почему это честнее.',
    excerpt: 'В портфолио больше 50 работ и ни одного логотипа. Рассказываю, где проходит граница между «показать результат» и «сдать заказчика» и почему технические цифры надёжнее громких имён.',
    tags: ['личный опыт', 'кейсы', 'доверие', 'конфиденциальность'],
    relatedSlugs: ['kto-vladeet-saytom-dannymi-akkauntami-2026', 'kak-ya-vedu-proekt-2026', 'vosem-proektov-za-nedelyu-2026'] }),

  E({ slug: 'rabochiy-den-s-ii-agentami-2026', category: 'expert', heroIcon: 'ph-fill ph-robot',
    title: 'Мой рабочий день с ИИ-агентами: что отдаю машине, а что только сам',
    metaTitle: 'Работа с ИИ-агентами: что делегирую, а что делаю сам',
    metaDescription: 'Агенты пишут черновики, разбирают выгрузки и генерируют обложки. Что проверяется автоматически, какую ошибку поймала проверка и что я не доверю никому.',
    excerpt: 'Блог на 1600 статей и клиентские проекты я веду вместе с ИИ-агентами. Показываю, где машина экономит часы, как ловлю её ошибки и за что отвечаю только сам.',
    tags: ['личный опыт', 'ИИ-агенты', 'автоматизация', 'контроль качества'],
    relatedSlugs: ['granica-avtonomnosti-ii-agenta-2026', 'moy-stek-instrumentov-2026', 'oshibki-v-prodvizhenii-svoego-sayta-2026'] }),

  E({ slug: 'vosem-proektov-za-nedelyu-2026', category: 'expert', heroIcon: 'ph-fill ph-check-circle',
    title: 'Сдал восемь работ за неделю: что общего у проектов, которые доходят до конца',
    metaTitle: 'Восемь сданных проектов за неделю: что их объединяет',
    metaDescription: 'Сайт, бот, финансовый разбор, модель лояльности — восемь работ за неделю. Что ускоряет проект, что тормозит и почему скорость упирается в ответы заказчика.',
    excerpt: 'За одну неделю закрыл восемь разных работ — от кода до документов. Разбираю, что общего у проектов, которые доходят до конца, и где они чаще всего застревают.',
    tags: ['личный опыт', 'управление проектами', 'сроки', 'кейсы'],
    relatedSlugs: ['kak-ya-vedu-proekt-2026', 'keysy-bez-imen-klientov-2026', 'pochemu-sryvayutsya-dedlayny-2026'] }),

  // ---------- Продажи ----------
  E({ slug: 'prodayu-bez-sozvonov-v-perepiske-2026', category: 'sales', heroIcon: 'ph-fill ph-chats-circle',
    title: 'Почему я продаю без созвонов: вся работа в переписке',
    metaTitle: 'Продажи без созвонов: почему я работаю в переписке',
    metaDescription: 'Договорённость остаётся на бумаге, клиент отвечает, когда удобно, а переписку можно переслать партнёру. Как устроена работа без звонков и кому она не подходит.',
    excerpt: 'Я не провожу созвонов с потенциальными клиентами — всё обсуждаю письменно. Объясняю, что выигрывает клиент, как не утонуть в переписке и кому такой формат не подойдёт.',
    tags: ['продажи', 'личный опыт', 'переговоры', 'мессенджеры'],
    relatedSlugs: ['tri-voprosa-do-ceny-2026', 'signaly-chto-proekt-ne-slozhitsya-2026', 'voprosy-it-podryadchiku-2026'] }),

  E({ slug: 'signaly-chto-proekt-ne-slozhitsya-2026', category: 'sales', heroIcon: 'ph-fill ph-flag',
    title: 'Как я в первой переписке понимаю, что проект не сложится',
    metaTitle: 'Сигналы, что IT-проект не сложится: видно с первых сообщений',
    metaDescription: '«Как у крупного сервиса, но дешевле и за неделю», нет человека, который решает, просьба ввести людей в заблуждение. Сигналы и что я предлагаю вместо отказа.',
    excerpt: 'Часть проектов видно уже по первым сообщениям. Разбираю сигналы, по которым понимаю, что работа не сложится, и почему честный разговор в начале экономит деньги обеим сторонам.',
    tags: ['продажи', 'личный опыт', 'выбор клиентов', 'этика'],
    relatedSlugs: ['pochemu-ya-otkazyvayus-ot-proektov-2026', 'tri-voprosa-do-ceny-2026', 'prodayu-bez-sozvonov-v-perepiske-2026'] }),

  E({ slug: 'tri-voprosa-do-ceny-2026', category: 'sales', heroIcon: 'ph-fill ph-question',
    title: 'Три вопроса, которые я задаю до того, как назвать цену',
    metaTitle: 'Три вопроса до цены: как считать стоимость IT-проекта честно',
    metaDescription: 'Цена без понимания задачи — гадание. Какую проблему решаем, кто и где будет пользоваться, как поймём, что сработало. Что даёт клиенту каждый из вопросов.',
    excerpt: 'Цифра, названная сразу, почти всегда либо завышена «с запасом», либо потом растёт. Показываю три вопроса, после которых цена становится обоснованной, а иногда проект — ненужным.',
    tags: ['продажи', 'личный опыт', 'ценообразование', 'техзадание'],
    relatedSlugs: ['pochemu-ne-rabotayu-po-fiksu-2026', 'fiksirovannaya-cena-vs-pochasovka-2027', 'prodayu-bez-sozvonov-v-perepiske-2026'] }),

  // ---------- Кейсы ----------
  E({ slug: 'kak-igry-stali-napravleniem-keys-2026', category: 'cases', heroIcon: 'ph-fill ph-game-controller',
    ctaInternal: CTA_GAMES,
    title: 'Как игры для бизнеса стали отдельным направлением',
    metaTitle: 'Игры для бизнеса: как они стали отдельным направлением',
    metaDescription: 'Розыгрыш номерков в боте, реферальная акция в семи городах, кофейня с геймификацией. Что я понял о бизнес-играх и какие механики реально покупают.',
    excerpt: 'Из нескольких проектов выросла отдельная рубрика на 65 статей. Рассказываю, какие игровые механики я делал для клиентов, что из этого работает и почему честность правил важнее красоты.',
    tags: ['кейс', 'игры для бизнеса', 'геймификация', 'личный опыт'],
    relatedSlugs: ['kafe-nacionalnoy-kuhni-bot-max-rozygryshi-keys-2026', 'pwa-kofeyni-geymifikaciya-keys-2026', 'mango-bot-artel-keys-2026'] }),

  E({ slug: 'pereezd-s-konstruktora-za-den-po-chasam-keys-2026', category: 'cases', heroIcon: 'ph-fill ph-clock',
    ctaInternal: CTA_SITE,
    title: 'Переезд с конструктора за один день: как это было по часам',
    metaTitle: 'Переезд сайта с конструктора за день: по часам',
    metaDescription: 'Утро ушло на заблокированный сервер, день — на перенос, админку и бота, вечер — на оптимизацию. Как прошёл переезд с конструктора и что осталось на завтра.',
    excerpt: 'Итог переезда я уже описывал, а здесь — сам процесс. Показываю, что происходило с утра до вечера, где застрял и почему неожиданности почти всегда в инфраструктуре, а не в сайте.',
    tags: ['кейс', 'сайт под ключ', 'свой сервер', 'процесс'],
    relatedSlugs: ['pereezd-s-konstruktora-na-svoy-server-keys-2026', 'otkazoustoychivaya-infrastruktura-keys-2026', 'vosem-proektov-za-nedelyu-2026'] }),

];
