// Разовые задачи и абонентка, часть 3: табель через бота, сроки годности,
// сроки документов и оборудования, внутренние заявки, цены на сырьё, объявления.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-19';
const S = 'https://chimitdorzhi.tech';

const SVC = { title: 'Небольшие задачи без большого проекта', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты для сотрудников: табель, заявки, чек-листы' },
  { icon: 'ph-fill ph-bell', label: 'Напоминания о сроках ответственным' },
  { icon: 'ph-fill ph-download-simple', label: 'Мониторинг цен и объявлений' },
  { icon: 'ph-fill ph-lifebuoy', label: 'Абонентка: присмотр и поддержка' },
]};
const CTA = { url: `${S}/predlozheniya/razovye-zadachi-skripty-parsery/`, label: 'Обсудить настройку и абонентку' };

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));

const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 5, category: 'development',
      servicesOffer: SVC, ctaInternal: CTA, toc: tocFrom(html) },
    o, { contentHtml: html });
};

module.exports = [

  E({ slug: 'uchet-prihoda-i-uhoda-cherez-bota-2026', category: 'industries', heroIcon: 'ph-fill ph-clock',
    title: 'Учёт прихода и ухода сотрудников через бота: геометка, фото и табель в таблицу',
    metaTitle: 'Учёт прихода и ухода сотрудников через бота с геометкой',
    metaDescription: 'Сотрудник отмечается в боте, бот берёт геометку и фото, табель собирается в таблицу. Опоздания и переработки видны, забывшим — напоминание.',
    excerpt: 'Для точек, объектов и выездных бригад турникет не поставишь. Разбираю, как вести учёт времени через бота, где у геометки предел и что сказать сотрудникам.',
    tags: ['учёт времени', 'табель', 'боты', 'абонентка'],
    relatedSlugs: ['uchet-rabochego-vremeni-tabel-2026', 'otchet-so-smeny-cherez-bota-2026', 'raspisanie-smen-dlya-pochasovogo-personala-2027'] }),

  E({ slug: 'kontrol-srokov-godnosti-tovarov-2026', category: 'industries', heroIcon: 'ph-fill ph-clock-countdown',
    title: 'Контроль сроков годности: уведомление заранее и список на уценку или списание',
    metaTitle: 'Контроль сроков годности товаров: уведомления и уценка',
    metaDescription: 'Сроки заносятся при приёмке, проверка идёт каждый день, ответственный заранее получает список: что продать со скидкой, а что списать. Владельцу — отчёт.',
    excerpt: 'Просроченный товар — это и прямые потери, и риск для репутации. Показываю, как ловить сроки заранее и превращать их в уценку, а не в списание.',
    tags: ['сроки годности', 'магазин', 'общепит', 'абонентка'],
    relatedSlugs: ['priemka-tovara-ot-postavshchika-v-magazine-2026', 'reviziya-v-magazine-bez-zakrytiya-2026', 'tandoor-menyu-tehkarty-kafe-2026'] }),

  E({ slug: 'napominaniya-o-srokah-dokumentov-i-oborudovaniya-2026', category: 'legal', heroIcon: 'ph-fill ph-calendar-check',
    title: 'Сроки документов и оборудования под контролем: медкнижки, удостоверения, поверка, ТО',
    metaTitle: 'Напоминания о сроках медкнижек, поверки и ТО',
    metaDescription: 'Реестр всего, у чего есть срок: медкнижки, удостоверения, поверка приборов, ТО техники, огнетушители. Напоминание ответственному заранее.',
    excerpt: 'Про истёкшую медкнижку или поверку вспоминают на проверке. Разбираю, как собрать реестр сроков и настроить напоминания, чтобы продлевать всё вовремя.',
    tags: ['сроки', 'документы', 'охрана труда', 'абонентка'],
    relatedSlugs: ['uchet-dogovorov-sroki-prodleniya-2026', 'ohrana-truda-dokumenty-2026', 'ezhemesyachnyy-it-obkhod-malogo-ofisa-2026'] }),

  E({ slug: 'vnutrennie-zayavki-v-ofise-cherez-bota-2026', heroIcon: 'ph-fill ph-ticket',
    title: 'Внутренние заявки в офисе через бота: сломалось, закончилось, нужен доступ',
    metaTitle: 'Внутренние заявки в офисе через бота',
    metaDescription: 'Просьбы теряются в общих чатах. Бот принимает заявку с фото, отправляет ответственному, показывает статус автору и напоминает, если заявка зависла.',
    excerpt: 'Сломанный принтер и закончившаяся бумага тонут в общем чате. Показываю, как бот превращает такие просьбы в заявки со статусом и сроком.',
    tags: ['заявки', 'боты', 'офис', 'абонентка'],
    relatedSlugs: ['prostoy-bot-na-odnu-zadachu-2026', 'ezhemesyachnyy-it-obkhod-malogo-ofisa-2026', 'it-nastroyka-malenkogo-ofisa-razovo-2026'] }),

  E({ slug: 'monitoring-cen-na-syre-i-materialy-2026', category: 'finance', heroIcon: 'ph-fill ph-chart-line-up',
    title: 'Мониторинг цен на сырьё и материалы: еженедельный отчёт для производства, стройки и общепита',
    metaTitle: 'Мониторинг цен на сырьё и материалы: отчёт раз в неделю',
    metaDescription: 'Металл, стройматериалы, продукты, упаковка: цены из открытых прайсов и сводок в таблице раз в неделю, сигнал при резком росте и связь со сметами.',
    excerpt: 'Рост цен на сырьё замечают, когда маржа уже съедена. Разбираю, как собирать цены на ключевые позиции каждую неделю и что делать с этим отчётом.',
    tags: ['цены', 'сырьё', 'закупки', 'абонентка'],
    relatedSlugs: ['pereschet-prajsa-pri-smene-kursa-2026', 'monitoring-cen-konkurentov-2026', 'uslugi-dlya-stroitelya-smety-grafiki-avtomatizaciya-2026'] }),

  E({ slug: 'parsing-obyavleniy-nedvizhimosti-i-avto-2026', category: 'sales', heroIcon: 'ph-fill ph-car-profile',
    title: 'Парсинг объявлений недвижимости и авто по фильтрам: новые варианты в мессенджер сразу',
    metaTitle: 'Парсинг объявлений недвижимости и авто по фильтрам',
    metaDescription: 'Риелтору и перекупщику важно увидеть объявление первым. Фильтры по району, цене, марке и году, отсев дублей и уведомление с фото и ссылкой в мессенджер.',
    excerpt: 'Хорошие варианты уходят за часы. Показываю, как получать новые объявления по своим фильтрам сразу в мессенджер и где граница законного сбора данных.',
    tags: ['парсер', 'недвижимость', 'авто', 'абонентка'],
    relatedSlugs: ['sbor-vakansiy-i-rezyume-po-filtram-2026', 'parser-dannyh-na-zakaz-2026', 'otslezhivanie-izmeneniy-na-saytah-2026'] }),

];
