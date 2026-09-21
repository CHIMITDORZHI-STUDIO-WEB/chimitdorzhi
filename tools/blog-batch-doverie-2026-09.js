// Статьи доверия: честные границы работы, когда не надо заказывать, цена рутины,
// приёмка работы, быстрые задачи, разбор «уже пробовали» и копирования конкурентов.
// Задача — не трафик, а решение читателя: писать мне или нет.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-21';
const S = 'https://chimitdorzhi.tech';

const SVC = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-code', label: 'Сайты, боты и программы под задачу' },
  { icon: 'ph-fill ph-plugs-connected', label: 'Интеграции с 1С, CRM и мессенджерами' },
  { icon: 'ph-fill ph-download-simple', label: 'Разовые задачи: парсеры, выгрузки, скрипты' },
  { icon: 'ph-fill ph-lifebuoy', label: 'Поддержка и абонентка после запуска' },
]};

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));
const TG = (what, msg) => ({
  title: what,
  text: 'Опишите задачу в двух словах — отвечу, что подойдёт, сколько займёт и нужно ли это вам вообще. Сообщение уже подготовлено.',
  message: msg,
  before: 'kak-vyglyadit',
});

const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 5, category: 'development',
      servicesOffer: SVC, toc: tocFrom(html) },
    o, { contentHtml: html });
};

module.exports = [

  E({ slug: 'chto-ya-ne-delayu-2026', category: 'expert', heroIcon: 'ph-fill ph-scales',
    ctaInternal: { url: `${S}/predlozheniya/razovye-zadachi-skripty-parsery/`, label: 'Описать задачу' },
    inlineTg: TG('Не уверены, ваша ли это задача?', 'Здравствуйте! Хочу понять, беретесь ли вы за мою задачу. Суть: '),
    title: 'Что я не делаю и почему: честные границы работы',
    metaTitle: 'Что я не делаю: честные границы работы',
    metaDescription: 'За какие задачи я не берусь и почему это в интересах заказчика: обещания позиций и выручки, серые схемы, проекты без понятной задачи и без ответственного.',
    excerpt: 'Отказ экономит деньги обеим сторонам. Рассказываю, за что не берусь, почему и что предлагаю вместо этого.',
    tags: ['работа с заказчиком', 'принципы', 'разработка', 'доверие'],
    relatedSlugs: ['pochemu-ya-otkazyvayus-ot-proektov-2026', 'pochemu-ne-obeshchayu-rost-prodazh-2026', 'tri-voprosa-do-ceny-2026'] }),

  E({ slug: 'konstruktor-ili-zakazat-2026', heroIcon: 'ph-fill ph-stack',
    ctaInternal: { url: `${S}/services/web-development/`, label: 'Обсудить сайт или бота' },
    inlineTg: TG('Не знаете, что выбрать?', 'Здравствуйте! Выбираю между конструктором и разработкой. Что нужно: '),
    title: 'Сделать самому на конструкторе или заказать: честное сравнение для сайта и бота',
    metaTitle: 'Конструктор или заказать разработку: сравнение',
    metaDescription: 'Когда конструктора достаточно, а когда он выходит дороже: каталог, оплата, связь с учётом, ограничения платформы и подписка навсегда. Честное сравнение.',
    excerpt: 'Иногда правильный ответ — «сделайте сами на конструкторе». Разбираю, где он выигрывает, где становится дороже и что вы теряете при переезде.',
    tags: ['конструкторы', 'разработка', 'сайт', 'выбор'],
    relatedSlugs: ['uyti-s-tildy-wix-na-svoy-sayt-2027', 'skolko-stoit-soderzhat-sayt-i-bota-2026', 'eksport-sayta-s-konstruktora-rezervnaya-kopiya-2026'] }),

  E({ slug: 'komu-ne-nuzhna-avtomatizaciya-2026', heroIcon: 'ph-fill ph-hourglass-medium',
    ctaInternal: { url: `${S}/predlozheniya/razovye-zadachi-skripty-parsery/`, label: 'Проверить, нужна ли автоматизация' },
    inlineTg: TG('Сомневаетесь, пора ли?', 'Здравствуйте! Думаю про автоматизацию, но не уверен, что пора. Что происходит сейчас: '),
    title: 'Кому не нужна автоматизация: признаки, что рано',
    metaTitle: 'Кому не нужна автоматизация: признаки, что рано',
    metaDescription: 'Нет устоявшегося процесса, поток маленький, данных нет, проблема не в рутине. Шесть признаков, что автоматизировать рано, и что делать вместо этого.',
    excerpt: 'Автоматизация не лечит проблемы с продажами и продуктом. Разбираю признаки, что вам рано, и что стоит сделать сначала.',
    tags: ['автоматизация', 'малый бизнес', 'принципы', 'выбор'],
    relatedSlugs: ['priznaki-chto-pora-avtomatizirovatsya-2026', 'excel-spasenie-i-tupik-2026', 'kak-schitat-okupaemost-avtomatizacii-2026'] }),

  E({ slug: 'cena-ruchnoy-raboty-kalkulyator-2026', category: 'finance', heroIcon: 'ph-fill ph-hourglass-medium',
    ctaInternal: { url: `${S}/predlozheniya/razovye-zadachi-skripty-parsery/`, label: 'Обсудить задачу с этими цифрами' },
    inlineTg: TG('Посчитали и хотите убрать рутину?', 'Здравствуйте! Посчитал стоимость рутины в калькуляторе. Задача, которая съедает часы: '),
    title: 'Сколько стоит делать это руками: калькулятор потерь на рутине',
    metaTitle: 'Сколько стоит рутина: калькулятор потерь и окупаемости',
    metaDescription: 'Часы сотрудников, стоимость часа и доля работы, которую снимет автоматизация. Калькулятор показывает цену рутины в месяц и год и срок окупаемости.',
    excerpt: 'Цену автоматизации считают все, цену бездействия — почти никто. Даю калькулятор: сколько стоит делать это руками и окупится ли замена.',
    tags: ['автоматизация', 'окупаемость', 'калькулятор', 'финансы'],
    relatedSlugs: ['kak-schitat-okupaemost-avtomatizacii-2026', 'skolko-stoit-avtomatizaciya-biznesa-2026', 'komu-ne-nuzhna-avtomatizaciya-2026'] }),

  E({ slug: 'priemka-raboty-podryadchika-2026', heroIcon: 'ph-fill ph-clipboard-text',
    ctaInternal: { url: `${S}/services/it-audit/`, label: 'Проверить работу подрядчика' },
    inlineTg: TG('Нужен взгляд со стороны?', 'Здравствуйте! Подрядчик сдаёт работу, хочу проверить. Что делали: '),
    title: 'Как принять работу у подрядчика: чек-лист приёмки сайта, бота и интеграции',
    metaTitle: 'Приёмка работы подрядчика: чек-лист для заказчика',
    metaDescription: 'Что проверить до оплаты последнего этапа: главный сценарий, телефон, заявки, оплата, доступы на вас, копии и инструкция. Как оформить замечания списком.',
    excerpt: 'Принять работу — не значит открыть сайт и сказать «красиво». Даю чек-лист приёмки и признаки, что сдавать ещё рано.',
    tags: ['приёмка', 'подрядчик', 'разработка', 'заказчику'],
    relatedSlugs: ['dogovor-na-razrabotku-chto-propisat-2026', 'podryadchik-sorval-srok-chto-delat-2026', 'razrabotchik-propal-zabrat-sayt-2026'] }),

  E({ slug: 'chto-mozhno-sdelat-za-nedelyu-2026', heroIcon: 'ph-fill ph-lightning',
    ctaInternal: { url: `${S}/predlozheniya/razovye-zadachi-skripty-parsery/`, label: 'Выбрать задачу на неделю' },
    inlineTg: TG('Нужен быстрый результат?', 'Здравствуйте! Хочу что-то запустить быстро. Задача: '),
    title: 'Что реально можно сделать за неделю: список задач с результатом',
    metaTitle: 'Что можно сделать за неделю: список задач',
    metaDescription: 'Бот приёма заявок, запись, магазин в мессенджере, парсер, выгрузка, калькулятор на сайт. Что получается за неделю и что за неделю не делается.',
    excerpt: 'Не каждая задача — это проект на месяцы. Показываю, что реально запускается за неделю, и честно говорю, что за неделю не сделать.',
    tags: ['быстрый старт', 'разовые задачи', 'разработка', 'боты'],
    relatedSlugs: ['prostoy-bot-na-odnu-zadachu-2026', 'magazin-v-telegram-ili-max-bez-sayta-2026', 'vosem-proektov-za-nedelyu-2026'] }),

  E({ slug: 'uzhe-probovali-ne-srabotalo-2026', heroIcon: 'ph-fill ph-shield-warning',
    ctaInternal: { url: `${S}/services/it-audit/`, label: 'Разобрать, почему не сработало' },
    inlineTg: TG('Уже пробовали и не пошло?', 'Здравствуйте! У нас уже есть бот, CRM или сайт, но толку нет. Что сделано: '),
    title: 'Мы уже пробовали, не сработало: бот без заявок, CRM без записей, сайт без клиентов',
    metaTitle: 'Бот без заявок, CRM без записей, сайт без клиентов',
    metaDescription: 'Три частые истории и настоящие причины: инструмент без процесса и без ответственного не работает. Как перезапустить то, за что уже заплачено.',
    excerpt: 'Чаще всего дело не в инструменте, а в том, что вокруг него ничего не поменялось. Разбираю три типичные истории и что чинить первым.',
    tags: ['внедрение', 'CRM', 'боты', 'ошибки'],
    relatedSlugs: ['crm-dlya-malogo-biznesa-2026', 'zayavki-s-sayta-v-telegram-i-celi-metriki-2026', 'administrator-ili-bot-2026'] }),

  E({ slug: 'sdelayte-kak-u-konkurenta-2026', category: 'marketing', heroIcon: 'ph-fill ph-copy',
    ctaInternal: { url: `${S}/predlozheniya/integraciya-sistem/`, label: 'Обсудить решение под вашу задачу' },
    inlineTg: TG('Понравилось решение у конкурента?', 'Здравствуйте! Видел решение у конкурента, хочу похожее, но под себя. Что понравилось: '),
    title: 'Сделайте как у конкурента: почему копия чужого решения обычно не работает',
    metaTitle: 'Сделать как у конкурента: почему копия не работает',
    metaDescription: 'Снаружи видно сайт и бота, а не процессы, склад, персонал и рекламный бюджет. Что у конкурентов стоит перенимать, а что бессмысленно копировать.',
    excerpt: 'Чужое решение — вершина айсберга. Разбираю, что действительно стоит взять у конкурентов, а что копировать бессмысленно и рискованно.',
    tags: ['конкуренты', 'маркетинг', 'разработка', 'ошибки'],
    relatedSlugs: ['monitoring-assortimenta-konkurentov-2026', 'konkurentnaya-razvedka-legalno-2026', 'tri-voprosa-do-ceny-2026'] }),

];
