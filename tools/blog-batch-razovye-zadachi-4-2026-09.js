// Разовые задачи, часть 4: сводка филиалов, описания и перевод каталога, отзывы на сайт,
// заказы маркетплейсов в учёт, экспорт с конструктора, почтовая база, архив чата,
// статистика соцсетей, чек-листы в боте. Плюс «Чек коррекции» (финансы, на кассу).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-19';
const S = 'https://chimitdorzhi.tech';

const SVC = { title: 'Небольшие задачи без большого проекта', services: [
  { icon: 'ph-fill ph-download-simple', label: 'Сводки, выгрузки и отчёты в таблицы' },
  { icon: 'ph-fill ph-code', label: 'Скрипты и обработка каталога пачкой' },
  { icon: 'ph-fill ph-robot', label: 'Боты для сотрудников и клиентов' },
  { icon: 'ph-fill ph-lifebuoy', label: 'Абонентка: присмотр и поддержка' },
]};
const CTA = { url: `${S}/predlozheniya/razovye-zadachi-skripty-parsery/`, label: 'Описать задачу и получить оценку' };

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));

const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 5, category: 'development',
      servicesOffer: SVC, ctaInternal: CTA, toc: tocFrom(html) },
    o, { contentHtml: html });
};

module.exports = [

  E({ slug: 'svodka-otchetov-filialov-v-odnu-tablicu-2026', category: 'industries', heroIcon: 'ph-fill ph-table',
    title: 'Сводка из отчётов филиалов: каждая точка присылает свою таблицу, скрипт собирает общую',
    metaTitle: 'Сводка отчётов филиалов в одну таблицу автоматически',
    metaDescription: 'У каждой точки своя таблица и свой формат. Скрипт собирает их в общую сводку, ловит ошибки, сравнивает точки и напоминает тем, кто не прислал отчёт.',
    excerpt: 'Сводить отчёты филиалов руками — день работы в конце месяца. Разбираю, как скрипт собирает таблицы точек в одну и что делать с разными форматами.',
    tags: ['филиалы', 'таблицы', 'отчёты', 'разовые задачи'],
    relatedSlugs: ['vyruchka-kazhdoy-tochki-kontrol-seti-2026', 'skript-dlya-google-tablic-2026', 'otchet-so-smeny-cherez-bota-2026'] }),

  E({ slug: 'opisaniya-tovarov-neyrosetyu-pachkoy-2026', category: 'marketing', heroIcon: 'ph-fill ph-list-checks',
    title: 'Описания товаров нейросетью пачкой: сотни карточек по единому шаблону',
    metaTitle: 'Описания товаров нейросетью пачкой для сайта и маркетплейсов',
    metaDescription: 'Из характеристик в таблице — описания, выгоды и ключевые слова по единому шаблону. Запреты на выдумки и выборочная проверка человеком.',
    excerpt: 'Писать сотни описаний вручную долго, а нейросеть без правил выдумывает свойства. Показываю, как генерировать описания пачкой и что проверяет человек.',
    tags: ['описания товаров', 'нейросети', 'маркетплейсы', 'разовые задачи'],
    relatedSlugs: ['import-kataloga-iz-prajsa-postavshchika-2026', 'ii-galyucinacii-nelzya-slepo-doveryat-2026', 'massovaya-obrabotka-foto-tovarov-2026'] }),

  E({ slug: 'perevod-kataloga-i-sayta-pachkoy-2026', heroIcon: 'ph-fill ph-translate',
    title: 'Перевод каталога или сайта на другие языки пачкой: для экспорта, туристов и партнёров',
    metaTitle: 'Перевод каталога и сайта на другие языки пачкой',
    metaDescription: 'Каталог, прайс и страницы сайта на английский, китайский, монгольский и другие языки: машинный перевод с глоссарием и проверка ключевых страниц носителем.',
    excerpt: 'Перевод каталога по одной позиции растягивается на месяцы. Разбираю, как перевести его пачкой, не исказив названия и термины, и держать версии в актуальном виде.',
    tags: ['перевод', 'каталог', 'экспорт', 'разовые задачи'],
    relatedSlugs: ['neyroset-dlya-perevoda-2026', 'ai-perevod-rabota-s-kitaem-2027', 'opisaniya-tovarov-neyrosetyu-pachkoy-2026'] }),

  E({ slug: 'otzyvy-s-kart-na-sayt-2026', category: 'marketing', heroIcon: 'ph-fill ph-star',
    title: 'Отзывы с карт на сайт: виджет или регулярный перенос свежих отзывов',
    metaTitle: 'Отзывы с карт на сайт: виджет или перенос свежих отзывов',
    metaDescription: 'Отзывы копятся на картах, а на сайте пусто или старые скриншоты. Официальный виджет или регулярный перенос с датой и оценкой.',
    excerpt: 'Живые отзывы на сайте работают лучше любого текста о себе. Показываю, как выводить их с карт и не нарушить ни правила площадки, ни доверие клиентов.',
    tags: ['отзывы', 'сайт', 'репутация', 'разовые задачи'],
    relatedSlugs: ['reputaciya-otzyvy-yandex-2gis-2026', 'monitoring-upominaniy-kompanii-2026', 'nfc-tablichka-dlya-otzyvov-2026'] }),

  E({ slug: 'zakazy-s-marketpleysov-v-uchet-2026', heroIcon: 'ph-fill ph-shopping-cart',
    title: 'Заказы, возвраты и выплаты с маркетплейсов в учёт: без ручного переноса',
    metaTitle: 'Заказы с маркетплейсов в 1С, МойСклад или таблицу',
    metaDescription: 'Заказы и продажи с площадок попадают в учёт сами, возвраты отдельно, выплаты и удержания сверяются. Готовый модуль или своя интеграция и частые ошибки.',
    excerpt: 'Продажи на маркетплейсах, а учёт отстаёт на неделю. Разбираю, как переносить заказы, возвраты и выплаты в учёт автоматически и не посчитать продажу дважды.',
    tags: ['маркетплейсы', 'учёт', 'интеграция', 'разовые задачи'],
    relatedSlugs: ['gotovyy-modul-1c-dlya-marketpleysov-ili-svoya-integraciya-2026', 'razbor-finansovogo-otcheta-marketpleysa-2026', 'moysklad-vmesto-1c-integraciya-2026'] }),

  E({ slug: 'eksport-sayta-s-konstruktora-rezervnaya-kopiya-2026', heroIcon: 'ph-fill ph-floppy-disk',
    title: 'Экспорт сайта с конструктора: резервная копия страниц, форм и заявок',
    metaTitle: 'Экспорт сайта с конструктора: резервная копия',
    metaDescription: 'Сайт на конструкторе, а копии у владельца нет. Что можно выгрузить — страницы, картинки, заявки, каталог, как хранить копию и что делать, если решите переехать.',
    excerpt: 'Заблокированный аккаунт или забытая оплата — и сайт исчез вместе с заявками. Показываю, что можно сохранить с конструктора заранее и как это хранить.',
    tags: ['конструктор сайтов', 'резервные копии', 'сайт', 'разовые задачи'],
    relatedSlugs: ['uyti-s-tildy-wix-na-svoy-sayt-2027', 'pereezd-sayta-bez-poteri-poziciy-2026', 'rezervnye-kopii-vazhnee-chem-kazhetsya-2026'] }),

  E({ slug: 'proverka-pochtovoy-bazy-pered-rassylkoy-2026', category: 'marketing', heroIcon: 'ph-fill ph-envelope-simple',
    title: 'Проверка почтовой базы перед рассылкой: чтобы письма не уходили в спам',
    metaTitle: 'Проверка email-базы перед рассылкой: без спама и возвратов',
    metaDescription: 'Опечатки, несуществующие и брошенные адреса портят репутацию отправителя. Как проверить базу, убрать дубли и отписавшихся и не попасть в спам.',
    excerpt: 'Рассылка по старой базе может отправить в спам все следующие письма. Разбираю, как почистить почтовую базу перед отправкой и что нельзя забывать про согласия.',
    tags: ['email-рассылки', 'база', 'спам', 'разовые задачи'],
    relatedSlugs: ['email-push-rassylki-rf-2026', 'chistka-bazy-klientov-dubli-telefony-2026', 'listmonk-rassylki-bez-mailchimp-2026'] }),

  E({ slug: 'arhiv-chata-ili-kanala-telegram-2026', heroIcon: 'ph-fill ph-archive',
    title: 'Архив чата или канала Telegram с поиском: когда переписка — это рабочие документы',
    metaTitle: 'Архив чата и канала Telegram с поиском',
    metaDescription: 'Рабочие чаты с договорённостями, файлами и фото и каналы с постами: выгрузка сообщений и файлов, поиск по тексту, таблица с датами и хранение у компании.',
    excerpt: 'Договорённости живут в рабочих чатах, и найти их через полгода трудно. Показываю, как выгрузить чат или канал в архив с поиском и что учесть про согласие участников.',
    tags: ['Telegram', 'архив', 'переписка', 'разовые задачи'],
    relatedSlugs: ['korporativnaya-pochta-i-obshchiy-disk-2026', 'rasshifrovka-zvonkov-i-soveshchaniy-pachkoy-2026', 'konvertaciya-i-skleyka-pdf-pachkoy-2026'] }),

  E({ slug: 'statistika-socsetey-v-odnu-tablicu-2026', category: 'marketing', heroIcon: 'ph-fill ph-chart-bar',
    title: 'Статистика соцсетей в одну таблицу: охваты и реакции Telegram, MAX и VK за месяц',
    metaTitle: 'Статистика Telegram, MAX и VK в одной таблице',
    metaDescription: 'Каждая площадка показывает статистику по-своему. Единые показатели, лучшие и худшие посты месяца и сравнение месяцев в одной таблице.',
    excerpt: 'Сравнить три канала, когда у каждого своя статистика, почти невозможно. Разбираю, как свести охваты и реакции в одну таблицу и что из этого брать в работу.',
    tags: ['соцсети', 'статистика', 'отчёты', 'разовые задачи'],
    relatedSlugs: ['avtoposting-v-telegram-max-vk-2026', 'otchet-po-reklame-i-zayavkam-kazhdoe-utro-2026', 'monitoring-upominaniy-kompanii-2026'] }),

  E({ slug: 'chek-listy-dlya-sotrudnikov-v-bote-2026', category: 'industries', heroIcon: 'ph-fill ph-list-checks',
    title: 'Чек-листы для сотрудников в боте: открытие, закрытие, уборка, приёмка — с фото и отметкой времени',
    metaTitle: 'Чек-листы для сотрудников в боте: с фото и временем',
    metaDescription: 'Бумажный чек-лист заполняют задним числом. В боте — пункты по очереди, фото на ключевых шагах, время, и руководитель сразу видит, что не сделано.',
    excerpt: 'Стандарты работы точки держатся, пока за ними следят. Показываю, как чек-лист в боте помогает новичкам и показывает руководителю, где процесс проседает.',
    tags: ['чек-листы', 'боты', 'сотрудники', 'разовые задачи'],
    relatedSlugs: ['otchet-so-smeny-cherez-bota-2026', 'vnutrennie-zayavki-v-ofise-cherez-bota-2026', 'uchet-prihoda-i-uhoda-cherez-bota-2026'] }),

  E({ slug: 'chek-korrekcii-kogda-i-kak-2026', category: 'finance', heroIcon: 'ph-fill ph-receipt',
    ctaInternal: { url: `${S}/predlozheniya/priem-platezhey-sbp/`, label: 'Настроить оплату и чеки без ошибок' },
    servicesOffer: { title: 'Что я делаю для бизнеса', services: [
      { icon: 'ph-fill ph-cash-register', label: 'Приём оплаты, онлайн-касса и чеки' },
      { icon: 'ph-fill ph-plugs-connected', label: 'Связка сайта и бота с кассой' },
      { icon: 'ph-fill ph-chart-line-up', label: 'Контроль «оплата без чека»' },
    ]},
    title: 'Чек коррекции: когда его пробивают и как не доводить до него',
    metaTitle: 'Чек коррекции: когда пробивать и как не доводить до него',
    metaDescription: 'Касса не работала, оплата пришла на сайт без чека, ошибка в сумме. Что такое чек коррекции, чем он отличается от возврата и как его избежать.',
    excerpt: 'Чек коррекции пробивают, когда что-то уже пошло не так. Разбираю типичные ситуации, общий порядок и как настроить приём оплаты, чтобы чек уходил сам.',
    tags: ['онлайн-касса', 'чек коррекции', 'чеки', 'финансы'],
    relatedSlugs: ['oblachnaya-kassa-2026', 'onlayn-kassa-54-fz-2026', 'ekvayring-ili-sbp-2026'] }),

];
