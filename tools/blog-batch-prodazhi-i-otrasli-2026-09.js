// Где бизнес теряет продажи (заявки, скорость ответа, ночные обращения, контроль
// менеджеров, приоритет заявок, КП, дозаказ в опте) + отрасли без статей под
// автоматизацию: ремонт квартир, окна и потолки, бухгалтерская компания,
// агентство недвижимости, транспортная компания.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-21';
const S = 'https://chimitdorzhi.tech';
const P = (slug, label) => ({ url: `${S}/predlozheniya/${slug}/`, label });

const SVC_SALES = { title: 'Что я делаю для продаж', services: [
  { icon: 'ph-fill ph-funnel', label: 'CRM и воронка без потерянных заявок' },
  { icon: 'ph-fill ph-phone-call', label: 'Контроль скорости ответа и анализ звонков' },
  { icon: 'ph-fill ph-robot', label: 'ИИ-консультант и боты для заявок' },
  { icon: 'ph-fill ph-chart-line-up', label: 'Сквозная аналитика и отчёты владельцу' },
]};
const SVC_IND = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-funnel', label: 'Заявки из всех каналов в одну систему' },
  { icon: 'ph-fill ph-device-mobile', label: 'Приложения для выездных сотрудников' },
  { icon: 'ph-fill ph-user-focus', label: 'Кабинет и статусы для клиента' },
  { icon: 'ph-fill ph-plugs-connected', label: 'Связка с учётом, 1С и мессенджерами' },
]};

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));
const TG = (title, msg) => ({
  title,
  text: 'Опишите, что у вас сейчас, — бесплатно подскажу, где теряются клиенты и с чего начать. Сообщение уже подготовлено.',
  message: msg,
  before: 'kak-vyglyadit',
});

const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 5, category: 'sales',
      servicesOffer: SVC_SALES, toc: tocFrom(html) },
    o, { contentHtml: html });
};

module.exports = [

  // ---------- Где теряются продажи ----------
  E({ slug: 'zayavki-est-prodazh-net-2026', heroIcon: 'ph-fill ph-funnel',
    ctaInternal: P('skvoznaya-analitika-koltreking', 'Найти, где теряются заявки'),
    inlineTg: TG('Заявки есть, а продаж мало?', 'Здравствуйте! Заявки приходят, а продаж мало. Откуда заявки и как обрабатываем: '),
    title: 'Заявки есть, продаж нет: где теряются клиенты между заявкой и оплатой',
    metaTitle: 'Заявки есть, продаж нет: где теряются клиенты',
    metaDescription: 'Заявка не дошла, ответили поздно, не перезвонили, не отправили предложение, забыли после «я подумаю». Как найти своё узкое место и что чинить первым.',
    excerpt: 'Если заявки приходят, а денег нет, проблема почти всегда между заявкой и оплатой. Разбираю этапы, где теряются клиенты, и как найти своё узкое место.',
    tags: ['продажи', 'заявки', 'воронка', 'CRM'],
    relatedSlugs: ['menedzhery-ne-perezvanivayut-2026', 'crm-dlya-malogo-biznesa-2026', 'uzhe-probovali-ne-srabotalo-2026'] }),

  E({ slug: 'menedzhery-ne-perezvanivayut-2026', heroIcon: 'ph-fill ph-phone-call',
    ctaInternal: P('ai-analiz-zvonkov-prodazh', 'Настроить контроль скорости ответа'),
    inlineTg: TG('Заявки остывают?', 'Здравствуйте! Менеджеры отвечают на заявки медленно. Сколько заявок в день: '),
    title: 'Менеджеры не перезванивают: как контролировать скорость ответа на заявку',
    metaTitle: 'Менеджеры не перезванивают: контроль скорости ответа',
    metaDescription: 'Клиент пишет нескольким компаниям сразу и уходит к тем, кто ответил первым. Как измерить время ответа, настроить напоминания и отчёт руководителю.',
    excerpt: 'Скорость ответа на заявку часто решает больше, чем цена. Показываю, как её измерить и настроить так, чтобы заявки не остывали.',
    tags: ['продажи', 'менеджеры', 'заявки', 'контроль'],
    relatedSlugs: ['avtootvetchik-na-propushchennye-zvonki-2026', 'zayavki-est-prodazh-net-2026', 'pyat-cifr-vladeltsu-kazhduyu-nedelyu-2026'] }),

  E({ slug: 'klienty-pishut-nochyu-ii-konsultant-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-robot',
    ctaInternal: P('ai-konsultant', 'Обсудить ИИ-консультанта'),
    inlineTg: TG('Клиенты пишут, когда вы спите?', 'Здравствуйте! Хочу, чтобы клиентам отвечали ночью и в выходные. Сфера и частые вопросы: '),
    title: 'Клиенты пишут ночью и в выходные: ИИ-консультант, который отвечает и записывает',
    metaTitle: 'ИИ-консультант: ответы клиентам ночью и в выходные',
    metaDescription: 'Отвечает на типовые вопросы по базе знаний, подбирает услугу, записывает и принимает заявки. Где его границы и как не дать ему выдумывать.',
    excerpt: 'Часть клиентов пишет, когда никого нет на месте. Разбираю, что может ИИ-консультант, где его предел и как понять, окупается ли он.',
    tags: ['ИИ-консультант', 'боты', 'заявки', 'нейросети'],
    relatedSlugs: ['administrator-ili-bot-2026', 'soprovozhdenie-ii-pomoshchnika-2026', 'ii-galyucinacii-nelzya-slepo-doveryat-2026'] }),

  E({ slug: 'kak-proveryat-menedzherov-bez-slezhki-2026', heroIcon: 'ph-fill ph-user-focus',
    ctaInternal: P('ai-analiz-zvonkov-prodazh', 'Обсудить анализ звонков'),
    inlineTg: TG('Хотите видеть работу отдела продаж?', 'Здравствуйте! Хочу понимать, как работают менеджеры. Сколько менеджеров и где ведём клиентов: '),
    title: 'Как проверять работу менеджеров по продажам без слежки',
    metaTitle: 'Как проверять менеджеров по продажам без слежки',
    metaDescription: 'Скорость ответа, доля заявок до предложения и оплаты, причины отказов, разбор звонков. Как превращать проверку в обучение, а не в штрафы.',
    excerpt: 'Контроль продаж не обязан быть слежкой. Разбираю, что смотреть, как разбирать звонки и как использовать это для роста, а не для наказаний.',
    tags: ['продажи', 'менеджеры', 'анализ звонков', 'управление'],
    relatedSlugs: ['skripty-prodazh-v-crm-2026', 'menedzhery-ne-perezvanivayut-2026', 'pochemu-uhodyat-sotrudniki-v-uslugah-2026'] }),

  E({ slug: 'kakoy-zayavke-zvonit-pervoy-2026', heroIcon: 'ph-fill ph-fire',
    ctaInternal: P('integraciya-sistem', 'Настроить сортировку заявок'),
    inlineTg: TG('Заявок больше, чем рук?', 'Здравствуйте! Заявок много, не успеваем всем ответить. Откуда приходят: '),
    title: 'Какой заявке звонить первой: как отделить горячих клиентов от любопытных',
    metaTitle: 'Какой заявке звонить первой: горячие и холодные',
    metaDescription: 'Конкретная задача, сроки, бюджет, повторный клиент. Как по двум-трём вопросам отсортировать заявки в CRM и не бросать тех, кто пока присматривается.',
    excerpt: 'Когда заявок много, первым должен быть звонок тому, кто готов купить. Показываю, как отсортировать заявки и не потерять остальных.',
    tags: ['продажи', 'заявки', 'CRM', 'квалификация'],
    relatedSlugs: ['zayavki-est-prodazh-net-2026', 'menedzhery-ne-perezvanivayut-2026', 'crm-dlya-malogo-biznesa-2026'] }),

  E({ slug: 'otpravili-kp-klient-propal-2026', heroIcon: 'ph-fill ph-file-text',
    ctaInternal: P('ai-generator-kp', 'Обсудить генерацию КП'),
    inlineTg: TG('Клиенты пропадают после КП?', 'Здравствуйте! Отправляем КП, а клиенты пропадают. Что продаём: '),
    title: 'Отправили КП, а клиент пропал: как возвращаться к нему без навязчивости',
    metaTitle: 'Отправили КП, клиент пропал: что делать',
    metaDescription: 'Почему клиенты молчат после коммерческого предложения, как делать КП, на которое отвечают, и график касаний, который напоминает, но не раздражает.',
    excerpt: 'Молчание после КП — не отказ. Разбираю, почему клиенты пропадают и как возвращаться к ним с пользой, а не с вопросом «ну что, решили?».',
    tags: ['продажи', 'КП', 'CRM', 'дожим'],
    relatedSlugs: ['generaciya-dogovorov-i-schetov-iz-shablona-2026', 'programma-rascheta-zakaza-i-kp-2026', 'kakoy-zayavke-zvonit-pervoy-2026'] }),

  E({ slug: 'dozakaz-v-opte-napominaniya-klientam-2026', heroIcon: 'ph-fill ph-arrows-clockwise',
    ctaInternal: P('b2b-portal-opt', 'Обсудить кабинет для оптовиков'),
    inlineTg: TG('Постоянные клиенты заказывают реже?', 'Здравствуйте! Хочу напоминать оптовым клиентам о дозаказе. Сколько клиентов и где учёт: '),
    title: 'Дозаказ в опте: как напоминать постоянным клиентам, пока они не ушли к конкуренту',
    metaTitle: 'Дозаказ в опте: напоминания постоянным клиентам',
    metaDescription: 'У оптовика есть свой ритм заказов. Сигнал менеджеру, когда клиент опаздывает, напоминание с кнопкой «повторить заказ» и отчёт по засыпающим клиентам.',
    excerpt: 'Оптовый клиент уходит тихо: просто перестаёт заказывать. Разбираю, как заметить это вовремя и вернуть его напоминанием, а не скидкой.',
    tags: ['опт', 'B2B', 'повторные продажи', '1С'],
    relatedSlugs: ['bot-dlya-optovyh-zakazov-iz-1c-2026', 'debitorka-iz-1c-napominaniya-dolzhnikam-2026', 'pochemu-klienty-ne-vozvrashchayutsya-2026'] }),

  // ---------- Отрасли ----------
  E({ slug: 'remont-kvartir-zayavki-smety-fotootchety-2026', category: 'industries', heroIcon: 'ph-fill ph-house-line',
    servicesOffer: SVC_IND, ctaInternal: P('crm-stroitelnaya-kompaniya', 'Обсудить систему для ремонта'),
    inlineTg: TG('Делаете ремонты?', 'Здравствуйте! Занимаемся ремонтом квартир, хочу навести порядок в заявках и сметах. Сколько объектов в месяц: '),
    title: 'Ремонт квартир: заявки, сметы и фотоотчёты клиенту в одном месте',
    metaTitle: 'Ремонт квартир: заявки, сметы и фотоотчёты клиенту',
    metaDescription: 'Заявки в телефоне бригадира, сметы с ошибками, звонки «ну как там». Смета по шаблону, согласование допработ, фотоотчёты по этапам и закупка по смете.',
    excerpt: 'В ремонте споры рождаются из устных договорённостей. Показываю, как собрать заявки, сметы, допработы и фотоотчёты в одну систему.',
    tags: ['ремонт', 'стройка', 'сметы', 'CRM'],
    relatedSlugs: ['prilozhenie-dlya-zamershchika-i-vyezdnogo-mastera-2026', 'programma-rascheta-zakaza-i-kp-2026', 'uslugi-dlya-stroitelya-smety-grafiki-avtomatizaciya-2026'] }),

  E({ slug: 'okna-i-natyazhnye-potolki-ot-zvonka-do-zamera-2026', category: 'industries', heroIcon: 'ph-fill ph-calculator',
    servicesOffer: SVC_IND, ctaInternal: P('natyazhnye-potolki-okna', 'Обсудить заявки и замеры'),
    inlineTg: TG('Теряете заявки до замера?', 'Здравствуйте! Продаём окна или потолки, заявки теряются до замера. Откуда приходят заявки: '),
    title: 'Окна и натяжные потолки: как не терять заявки между звонком и замером',
    metaTitle: 'Окна и натяжные потолки: заявки без потерь до замера',
    metaDescription: 'Заявки из разных каналов, замерщик без данных, расчёт через несколько дней. Одна система, запись на замер, замер в приложении и КП в тот же день.',
    excerpt: 'В окнах и потолках клиент уходит к тому, кто быстрее приехал и посчитал. Разбираю, где теряются заявки и как довести их до договора.',
    tags: ['окна', 'натяжные потолки', 'замер', 'заявки'],
    relatedSlugs: ['prilozhenie-dlya-zamershchika-i-vyezdnogo-mastera-2026', 'programma-rascheta-zakaza-i-kp-2026', 'menedzhery-ne-perezvanivayut-2026'] }),

  E({ slug: 'buhgalterskaya-kompaniya-sbor-dokumentov-2026', category: 'industries', heroIcon: 'ph-fill ph-file-text',
    servicesOffer: SVC_IND, ctaInternal: P('ai-pomoshchnik-yurist-buhgalter', 'Обсудить приём документов от клиентов'),
    inlineTg: TG('Документы клиентов в хаосе?', 'Здравствуйте! Мы бухгалтерская компания, хочу навести порядок с документами клиентов. Сколько клиентов: '),
    title: 'Бухгалтерская компания: как собирать документы от клиентов без хаоса в мессенджерах',
    metaTitle: 'Бухгалтерская компания: сбор документов от клиентов',
    metaDescription: 'Сканы в разных чатах, ручные напоминания, завал в конце квартала. Бот или кабинет для документов, чек-лист на месяц, статусы и защита данных клиентов.',
    excerpt: 'Бухгалтер тратит время не на учёт, а на поиск документов в переписке. Показываю, как собирать документы клиентов в одном месте и вовремя.',
    tags: ['бухгалтерия', 'документы', 'боты', 'аутсорсинг'],
    relatedSlugs: ['ai-pomoshchnik-buhgaltera-2026', 'konvertaciya-i-skleyka-pdf-pachkoy-2026', 'korporativnaya-pochta-i-obshchiy-disk-2026'] }),

  E({ slug: 'agentstvo-nedvizhimosti-obekty-klienty-pokazy-2026', category: 'industries', heroIcon: 'ph-fill ph-house-line',
    servicesOffer: SVC_IND, ctaInternal: P('crm-agentstvo-nedvizhimosti', 'Обсудить CRM для агентства'),
    inlineTg: TG('Объекты и клиенты у агентов в телефонах?', 'Здравствуйте! У нас агентство недвижимости, хочу общую базу объектов и клиентов. Сколько агентов: '),
    title: 'Агентство недвижимости: объекты, клиенты и показы в одной системе',
    metaTitle: 'Агентство недвижимости: объекты, клиенты и показы',
    metaDescription: 'Объекты в таблицах, клиенты в личных телефонах, показы в переписке. Общая база, подбор под запрос, запись на показ и база, которая остаётся у агентства.',
    excerpt: 'В агентстве недвижимости база уходит вместе с агентом. Разбираю, как собрать объекты, клиентов и показы в систему, которая принадлежит агентству.',
    tags: ['недвижимость', 'агентство', 'CRM', 'риелторы'],
    relatedSlugs: ['max-bot-rieltor-2026', 'sotrudnik-unes-bazu-klientov-2026', 'parsing-obyavleniy-nedvizhimosti-i-avto-2026'] }),

  E({ slug: 'transportnaya-kompaniya-status-gruza-2026', category: 'industries', heroIcon: 'ph-fill ph-truck',
    servicesOffer: SVC_IND, ctaInternal: P('treking-gruzov', 'Обсудить статусы грузов для клиентов'),
    inlineTg: TG('Клиенты звонят «где груз»?', 'Здравствуйте! У нас перевозки, хочу статусы грузов для клиентов без звонков. Сколько рейсов в месяц: '),
    title: 'Транспортная компания: заявки на перевозку и статус груза клиенту без звонков',
    metaTitle: 'Транспортная компания: заявки и статус груза клиенту',
    metaDescription: 'Заявки по телефону, расчёт вручную, звонки «где груз», отчёты водителей голосом. Заявка с расчётом, отметки водителя с телефона и статусы клиенту.',
    excerpt: 'Клиент перевозчика звонит, когда не знает, где его груз. Показываю, как дать ему статус без звонков и собрать заявки и документы в одном месте.',
    tags: ['логистика', 'грузоперевозки', 'отслеживание', 'CRM'],
    relatedSlugs: ['ai-dlya-logistiki-2026', 'uchet-topliva-i-gsm-po-mashinam-2026', 'skolko-zarabatyvaet-gruzoperevozki-2026'] }),

];
