// Серия «Сколько зарабатывает…», часть 3 (ещё 10 ниш) + блок «второй шаг»:
// статьи для тех, кто уже открылся и хочет больше с того, что есть.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-20';
const S = 'https://chimitdorzhi.tech';
const P = (slug, label) => ({ url: `${S}/predlozheniya/${slug}/`, label });

const SVC_START = { title: 'Чем я помогу на старте', services: [
  { icon: 'ph-fill ph-calculator', label: 'Бесплатно разберу идею и цифры' },
  { icon: 'ph-fill ph-robot', label: 'Запись, бронь или заявки через бота за неделю' },
  { icon: 'ph-fill ph-storefront', label: 'Сайт, оплата, касса и CRM под ключ' },
  { icon: 'ph-fill ph-hand-heart', label: 'Лояльность и возврат клиентов' },
]};
const SVC_ROST = { title: 'Чем я помогу действующей точке', services: [
  { icon: 'ph-fill ph-calendar-check', label: 'Запись, напоминания и заполнение пустых часов' },
  { icon: 'ph-fill ph-hand-heart', label: 'Лояльность, возврат клиентов и рассылки' },
  { icon: 'ph-fill ph-chart-line-up', label: 'Отчёт владельцу и управленческий учёт' },
  { icon: 'ph-fill ph-users-three', label: 'Графики смен, табель и чек-листы' },
]};

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));
const TG_START = (what) => ({
  title: 'Посчитали и хотите начать?',
  text: 'Пришлите идею и цифры из калькулятора — бесплатно скажу, с чего начать и что можно не делать. Сообщение уже подготовлено.',
  message: 'Здравствуйте! Думаю открыть ' + what + '. Хочу обсудить старт. Город и идея: ',
  before: 'kak-vyglyadit',
});
const TG_ROST = (what) => ({
  title: 'Хотите так же у себя?',
  text: 'Опишите, что у вас сейчас, — бесплатно подскажу, с чего начать и что даст результат быстрее. Сообщение уже подготовлено.',
  message: 'Здравствуйте! У меня уже работает бизнес. Хочу ' + what + '. Что есть сейчас: ',
  before: 'kak-vyglyadit',
});
const tagsNiche = (x) => ['сколько зарабатывает', x, 'открыть бизнес', 'калькулятор'];

const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 6, category: 'sales',
      servicesOffer: SVC_START, toc: tocFrom(html) },
    o, { contentHtml: html });
};

module.exports = [

  // ---------- Ещё 10 ниш с калькулятором ----------
  E({ slug: 'skolko-zarabatyvaet-shaurma-2026', heroIcon: 'ph-fill ph-bowl-food',
    ctaInternal: P('obshchepit', 'Обсудить запуск точки'), inlineTg: TG_START('точку шаурмы или фастфуда'),
    title: 'Сколько зарабатывает точка шаурмы или фастфуда: поток, себестоимость и окупаемость',
    metaTitle: 'Сколько зарабатывает шаурма: калькулятор прибыли',
    metaDescription: 'Поток, средний чек, себестоимость и аренда. Сколько приносит точка шаурмы или фастфуда и за сколько окупается открытие — посчитайте на своих цифрах.',
    excerpt: 'Точка фастфуда живёт потоком и скоростью. Разбираю, из чего складывается прибыль, где её съедает себестоимость, и даю калькулятор для своей точки.',
    tags: tagsNiche('шаурма'),
    relatedSlugs: ['it-dlya-kofeyni-obshchepita-2026', 'skolko-zarabatyvaet-dostavka-edy-2026', 'skolko-zarabatyvaet-kofeynya-s-soboy-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-kofeynya-s-soboy-2026', heroIcon: 'ph-fill ph-coffee',
    ctaInternal: P('kofeynya', 'Обсудить запуск кофейни'), inlineTg: TG_START('кофейню с собой'),
    title: 'Сколько зарабатывает кофейня с собой без зала: стаканы в день, аренда и окупаемость',
    metaTitle: 'Сколько зарабатывает кофейня с собой: калькулятор',
    metaDescription: 'Стаканы в день, себестоимость, аренда места и бариста. Сколько приносит кофейня с собой без зала и за сколько окупается — посчитайте в калькуляторе.',
    excerpt: 'Кофейня с собой дешевле в запуске, но всё решает поток мимо точки. Разбираю экономику и даю калькулятор для формата без зала.',
    tags: tagsNiche('кофейня с собой'),
    relatedSlugs: ['skolko-zarabatyvaet-kofeynya-2026', 'programma-loyalnosti-kafe-salon-2026', 'skolko-zarabatyvaet-shaurma-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-ostrovok-v-tc-2026', heroIcon: 'ph-fill ph-storefront',
    ctaInternal: P('programma-loyalnosti', 'Обсудить учёт и лояльность'), inlineTg: TG_START('островок в торговом центре'),
    title: 'Сколько зарабатывает островок в торговом центре: аренда за место, поток и сезонность',
    metaTitle: 'Сколько зарабатывает островок в ТЦ: калькулятор',
    metaDescription: 'Поток торгового центра, наценка, аренда места и сезонность. Сколько приносит островок в ТЦ и за сколько окупается оборудование — в калькуляторе.',
    excerpt: 'Островок в ТЦ полностью зависит от чужого потока и условий аренды. Разбираю экономику формата и даю калькулятор с сезонностью.',
    tags: tagsNiche('островок в ТЦ'),
    relatedSlugs: ['skolko-zarabatyvaet-produktovyy-magazin-2026', 'magazin-v-telegram-ili-max-bez-sayta-2026', 'skolko-zarabatyvaet-vending-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-vending-2026', heroIcon: 'ph-fill ph-cube',
    ctaInternal: P('umnyy-kiosk-vending', 'Обсудить вендинг и мониторинг'), inlineTg: TG_START('вендинговые автоматы'),
    title: 'Сколько зарабатывают вендинговые автоматы: точки, инкассация и окупаемость аппарата',
    metaTitle: 'Сколько зарабатывает вендинг: калькулятор прибыли',
    metaDescription: 'Продажи на автомат, аренда места, обслуживание и порча. Сколько приносит вендинговый бизнес и за сколько окупается аппарат — посчитайте в калькуляторе.',
    excerpt: 'В вендинге всё решает место, а не автомат. Разбираю экономику точки и даю калькулятор с обслуживанием, инкассацией и потерями.',
    tags: tagsNiche('вендинг'),
    relatedSlugs: ['skolko-zarabatyvaet-produktovyy-magazin-2026', 'otchet-so-smeny-cherez-bota-2026', 'skolko-zarabatyvaet-ostrovok-v-tc-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-prachechnaya-2026', heroIcon: 'ph-fill ph-clock-countdown',
    ctaInternal: P('himchistka-prachechnaya', 'Обсудить запуск прачечной'), inlineTg: TG_START('прачечную самообслуживания'),
    title: 'Сколько зарабатывает прачечная самообслуживания: машины, загрузка и коммуналка',
    metaTitle: 'Сколько зарабатывает прачечная самообслуживания',
    metaDescription: 'Циклы на машину, цена стирки, вода и электричество, аренда и ремонт. Сколько приносит прачечная самообслуживания и когда окупается оборудование.',
    excerpt: 'Прачечная самообслуживания работает почти без персонала, но платит за коммуналку с каждой стирки. Разбираю экономику и даю калькулятор.',
    tags: tagsNiche('прачечная'),
    relatedSlugs: ['it-dlya-prachechnoy-2026', 'napominaniya-o-srokah-dokumentov-i-oborudovaniya-2026', 'skolko-zarabatyvaet-vending-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-avtoshkola-2026', heroIcon: 'ph-fill ph-graduation-cap',
    ctaInternal: P('it-dlya-avtoshkoly', 'Обсудить набор и учёт'), inlineTg: TG_START('автошколу'),
    title: 'Сколько зарабатывает автошкола: группы, инструкторы и сезонность',
    metaTitle: 'Сколько зарабатывает автошкола: калькулятор прибыли',
    metaDescription: 'Наборы групп, цена обучения, доля инструкторов и содержание машин. Сколько приносит автошкола и за сколько окупается запуск — в калькуляторе.',
    excerpt: 'Автошкола зарабатывает наборами, а платит за машины и класс каждый месяц. Разбираю экономику и даю калькулятор с сезонностью набора.',
    tags: tagsNiche('автошкола'),
    relatedSlugs: ['cifrovizaciya-avtoshkol-2026', 'napominaniya-klientam-ob-oplate-2026', 'skolko-zarabatyvaet-yazykovaya-shkola-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-tipografiya-2026', heroIcon: 'ph-fill ph-cube',
    ctaInternal: P('zakazy-tipografiya', 'Обсудить приём заказов'), inlineTg: TG_START('типографию или печать'),
    title: 'Сколько зарабатывает типография и печать: тираж, срочные заказы и окупаемость оборудования',
    metaTitle: 'Сколько зарабатывает типография: калькулятор прибыли',
    metaDescription: 'Мелкие заказы против тиражей, материалы, зарплаты и простой техники. Сколько приносит типография и когда окупается оборудование — в калькуляторе.',
    excerpt: 'В печати деньги приносят тиражи и срочные заказы, а съедает простой оборудования. Разбираю экономику и даю калькулятор.',
    tags: tagsNiche('типография'),
    relatedSlugs: ['massovaya-generaciya-sertifikatov-i-beydzhey-2026', 'skolko-zarabatyvaet-remont-telefonov-2026', 'skolko-zarabatyvaet-atelye-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-atelye-2026', heroIcon: 'ph-fill ph-scissors',
    ctaInternal: P('atelye-poshiv', 'Обсудить запись и учёт заказов'), inlineTg: TG_START('ателье'),
    title: 'Сколько зарабатывает ателье и ремонт одежды: мастера, поток и сезон',
    metaTitle: 'Сколько зарабатывает ателье: калькулятор прибыли',
    metaDescription: 'Заказы на мастера, средний чек, доля мастера и материалы. Сколько приносит ателье или мастерская по ремонту одежды и когда окупается запуск.',
    excerpt: 'Ателье живёт мелким ремонтом каждый день и пошивом по сезону. Разбираю экономику и даю калькулятор для своей мастерской.',
    tags: tagsNiche('ателье'),
    relatedSlugs: ['skolko-zarabatyvaet-manikyurnaya-studiya-2026', 'neyavki-na-zapis-predoplata-napominaniya-2026', 'skolko-zarabatyvaet-tipografiya-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-svadebnoe-agentstvo-2026', heroIcon: 'ph-fill ph-confetti',
    ctaInternal: P('it-event-agentstvo', 'Обсудить учёт мероприятий'), inlineTg: TG_START('свадебное или ивент-агентство'),
    title: 'Сколько зарабатывает свадебное или ивент-агентство: мероприятия, подрядчики и сезон',
    metaTitle: 'Сколько зарабатывает свадебное агентство: калькулятор',
    metaDescription: 'Мероприятия в сезон, доля агентства от бюджета, координаторы и реклама. Сколько приносит ивент-агентство за год и как пережить межсезонье.',
    excerpt: 'Ивент-агентство зарабатывает в сезон и живёт на эти деньги весь год. Разбираю экономику, работу с подрядчиками и даю калькулятор на год.',
    tags: tagsNiche('свадебное агентство'),
    relatedSlugs: ['it-dlya-svadebnyh-event-agentstv-2026', 'skolko-zarabatyvaet-fotostudiya-2026', 'sezonnyy-biznes-mezhsezone-2026'] }),

  E({ slug: 'skolko-zarabatyvaet-yazykovaya-shkola-2026', heroIcon: 'ph-fill ph-graduation-cap',
    ctaInternal: P('crm-obrazovatelnogo-centra', 'Обсудить учёт групп и оплат'), inlineTg: TG_START('языковую школу'),
    title: 'Сколько зарабатывает языковая школа или репетиторский центр: группы, онлайн и абонементы',
    metaTitle: 'Сколько зарабатывает языковая школа: калькулятор',
    metaDescription: 'Группы, заполняемость, доля преподавателя и аренда класса. Сколько приносит языковая школа, чем онлайн отличается от офлайна и сколько учеников набирать.',
    excerpt: 'Школа языков держится на заполненных группах и продлении абонементов. Разбираю экономику, сравниваю онлайн с офлайном и даю калькулятор.',
    tags: tagsNiche('языковая школа'),
    relatedSlugs: ['it-dlya-yazykovoy-shkoly-repetitorov-2026', 'skolko-zarabatyvaet-shkola-tancev-2026', 'skolko-zarabatyvaet-avtoshkola-2026'] }),

  // ---------- Второй шаг: бизнес уже работает ----------
  E({ slug: 'pervye-100-klientov-dlya-tochki-2026', category: 'marketing', heroIcon: 'ph-fill ph-users-three',
    servicesOffer: SVC_ROST, ctaInternal: P('programma-loyalnosti', 'Обсудить возврат и лояльность'),
    inlineTg: TG_ROST('привести первых клиентов'),
    title: 'Где взять первых 100 клиентов салону, кафе или студии без большого бюджета',
    metaTitle: 'Первые 100 клиентов для салона, кафе или студии',
    metaDescription: 'Карты и справочники, первые отзывы, свой канал, соседи и партнёры, локальные чаты. Откуда берутся первые клиенты и что считать с первого дня.',
    excerpt: 'Точка открылась, а людей нет. Разбираю каналы, которые дают первых клиентов без большого бюджета, и что из них считать.',
    tags: ['привлечение клиентов', 'малый бизнес', 'маркетинг', 'запуск'],
    relatedSlugs: ['yandex-karty-2gis-lokalnyy-biznes-2027', 'otzyvy-s-kart-na-sayt-2026', 'pervye-prodazhi-internet-magazina-2026'] }),

  E({ slug: 'kak-podnyat-sredniy-chek-2026', category: 'sales', heroIcon: 'ph-fill ph-chart-line-up',
    servicesOffer: SVC_ROST, ctaInternal: P('programma-loyalnosti', 'Обсудить допродажи и лояльность'),
    inlineTg: TG_ROST('поднять средний чек'),
    title: 'Как поднять средний чек, не поднимая цены',
    metaTitle: 'Как поднять средний чек, не поднимая цены',
    metaDescription: 'Допродажи по сценарию, комплекты, следующая услуга при расчёте, абонементы и сертификаты. Что работает, а что раздражает клиентов.',
    excerpt: 'Поднять цены страшно, а чек вырастить можно и без этого. Разбираю приёмы, которые работают, и те, что портят впечатление.',
    tags: ['средний чек', 'продажи', 'допродажи', 'малый бизнес'],
    relatedSlugs: ['programma-loyalnosti-kafe-salon-2026', 'skolko-zarabatyvaet-salon-krasoty-2026', 'pochemu-klienty-ne-vozvrashchayutsya-2026'] }),

  E({ slug: 'zapolnit-pustye-chasy-2026', category: 'marketing', heroIcon: 'ph-fill ph-calendar-check',
    servicesOffer: SVC_ROST, ctaInternal: P('ne-propusti-vizit', 'Настроить напоминания и лист ожидания'),
    inlineTg: TG_ROST('заполнить пустые часы'),
    title: 'Как заполнить пустые часы: утро, будни и межсезонье',
    metaTitle: 'Как заполнить пустые часы: утро, будни, межсезонье',
    metaDescription: 'Разная цена по времени, абонементы на непопулярные часы, лист ожидания и точечные приглашения. Чем занять пустые окна и почему скидки для всех вредны.',
    excerpt: 'Пустой час не продать завтра — он просто потерян. Разбираю, чем заполнять утро, будни и межсезонье, не приучая клиентов к скидкам.',
    tags: ['загрузка', 'запись', 'малый бизнес', 'маркетинг'],
    relatedSlugs: ['neyavki-na-zapis-predoplata-napominaniya-2026', 'skolko-zarabatyvaet-fotostudiya-2026', 'programma-loyalnosti-kafe-salon-2026'] }),

  E({ slug: 'pyat-cifr-vladeltsu-kazhduyu-nedelyu-2026', category: 'finance', heroIcon: 'ph-fill ph-gauge',
    servicesOffer: SVC_ROST, ctaInternal: P('upravlencheskiy-uchet', 'Настроить отчёт владельцу'),
    inlineTg: TG_ROST('видеть цифры каждую неделю'),
    title: 'Пять цифр, которые владелец должен видеть каждую неделю',
    metaTitle: 'Пять цифр владельцу каждую неделю: простой отчёт',
    metaDescription: 'Выручка и чеки, средний чек, загрузка, доля повторных клиентов и деньги на счёте. Где их брать и на что реагировать, пока не поздно.',
    excerpt: 'Ощущения обманывают, а пять цифр — нет. Разбираю, какой отчёт владельцу нужен каждую неделю и как сделать, чтобы он приходил сам.',
    tags: ['управленческий учёт', 'отчёты', 'малый бизнес', 'финансы'],
    relatedSlugs: ['upravlencheskiy-uchet-malyy-biznes-2026', 'dashbord-rukovoditelyu-v-telegram-max-2026', 'otchet-so-smeny-cherez-bota-2026'] }),

  E({ slug: 'administrator-ili-bot-2026', heroIcon: 'ph-fill ph-robot',
    servicesOffer: SVC_ROST, ctaInternal: P('bot-dlya-biznesa', 'Обсудить бота для рутины'),
    inlineTg: TG_ROST('разгрузить администратора'),
    title: 'Администратор или бот: что дешевле и что во что упирается',
    metaTitle: 'Администратор или бот: честное сравнение',
    metaDescription: 'Что бот делает лучше человека, что умеет только человек и где бот раздражает клиентов. Как посчитать, сколько обращений типовые, и собрать схему.',
    excerpt: 'Бот не заменяет администратора, но снимает с него рутину. Разбираю, что кому отдать и как посчитать, окупится ли это у вас.',
    tags: ['боты', 'персонал', 'автоматизация', 'малый бизнес'],
    relatedSlugs: ['prostoy-bot-na-odnu-zadachu-2026', 'onlayn-zapis-bez-sayta-v-messendzhere-2026', 'ii-galyucinacii-nelzya-slepo-doveryat-2026'] }),

  E({ slug: 'vtoraya-tochka-bez-poteri-pervoy-2026', category: 'industries', heroIcon: 'ph-fill ph-storefront',
    servicesOffer: SVC_ROST, ctaInternal: P('platforma-set-franshiza', 'Обсудить управление сетью'),
    inlineTg: TG_ROST('открыть вторую точку'),
    title: 'Как открыть вторую точку и не потерять первую',
    metaTitle: 'Как открыть вторую точку и не потерять первую',
    metaDescription: 'Что должно работать до второй точки: процессы, ответственный, учёт по точке, общая база клиентов. Частые ошибки и что меняется в управлении.',
    excerpt: 'Вторая точка вскрывает всё, что держалось на владельце. Разбираю, что настроить заранее и по каким признакам понять, что вы готовы.',
    tags: ['масштабирование', 'сеть точек', 'малый бизнес', 'управление'],
    relatedSlugs: ['vyruchka-kazhdoy-tochki-kontrol-seti-2026', 'ostatki-mezhdu-magazinami-seti-2026', 'chek-listy-dlya-sotrudnikov-v-bote-2026'] }),

  E({ slug: 'franshiza-ili-svoe-delo-2026', heroIcon: 'ph-fill ph-handshake',
    servicesOffer: SVC_ROST, ctaInternal: P('platforma-set-franshiza', 'Обсудить франшизу и сеть'),
    inlineTg: TG_ROST('выбрать между франшизой и своим делом'),
    title: 'Франшиза или своё дело: что выгоднее и что вы покупаете',
    metaTitle: 'Франшиза или своё дело: что выгоднее',
    metaDescription: 'Что даёт франшиза и что забирает: паушальный взнос, роялти, требования и ограничения. Когда она оправдана новичку и как её проверить до договора.',
    excerpt: 'Франшиза продаёт не бизнес, а инструкции и имя. Разбираю, что вы получаете и теряете, и как проверить предложение до подписания.',
    tags: ['франшиза', 'открыть бизнес', 'малый бизнес', 'выбор'],
    relatedSlugs: ['kak-otkryt-svoyu-franshizu-2026', 'biznes-plan-za-vecher-kalkulyator-2026', 'pochemu-novyy-biznes-zakryvaetsya-2026'] }),

  E({ slug: 'pochemu-uhodyat-sotrudniki-v-uslugah-2026', category: 'industries', heroIcon: 'ph-fill ph-user-minus',
    servicesOffer: SVC_ROST, ctaInternal: P('tabel-grafiki-smen', 'Настроить графики и учёт выработки'),
    inlineTg: TG_ROST('удержать сотрудников'),
    title: 'Почему уходят сотрудники в сфере услуг и чем это лечится',
    metaTitle: 'Почему уходят мастера и сотрудники в услугах',
    metaDescription: 'Непрозрачные проценты, неудобный график, пустые смены и устные договорённости. Что настроить, чтобы люди не уходили и не уводили клиентов.',
    excerpt: 'Мастера уходят не только из-за денег. Разбираю настоящие причины и что настроить, чтобы работа была понятной, а клиенты оставались у компании.',
    tags: ['персонал', 'сфера услуг', 'управление', 'малый бизнес'],
    relatedSlugs: ['sotrudnik-unes-bazu-klientov-2026', 'uchet-prihoda-i-uhoda-cherez-bota-2026', 'raspisanie-smen-dlya-pochasovogo-personala-2027'] }),

  E({ slug: 'sezonnyy-biznes-mezhsezone-2026', category: 'finance', heroIcon: 'ph-fill ph-clock-countdown',
    servicesOffer: SVC_ROST, ctaInternal: P('upravlencheskiy-uchet', 'Настроить учёт и платёжный календарь'),
    inlineTg: TG_ROST('пережить межсезонье'),
    title: 'Сезонный бизнес: как пережить межсезонье и не проесть сезон',
    metaTitle: 'Сезонный бизнес: как пережить межсезонье',
    metaDescription: 'Подушка из сезона, платёжный календарь, вторая услуга на низкий сезон, предоплаты и абонементы. Что делать с деньгами и людьми в тихие месяцы.',
    excerpt: 'Сезонный бизнес зарабатывает три месяца, а живёт двенадцать. Разбираю, как распределить деньги и чем занять команду в межсезонье.',
    tags: ['сезонность', 'финансы', 'малый бизнес', 'планирование'],
    relatedSlugs: ['platezhnyy-kalendar-malyy-biznes-2026', 'skolko-zarabatyvaet-shinomontazh-2026', 'napominaniya-klientam-ob-oplate-2026'] }),

];
