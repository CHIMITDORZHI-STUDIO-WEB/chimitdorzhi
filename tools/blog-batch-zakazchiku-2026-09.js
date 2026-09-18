// Статьи под заказчика: магазины и сети, запись без неявок, защита базы,
// ИИ в компании, заявки из мессенджеров и работа с подрядчиком.
// Каждая ведёт на конкретную услугу и содержит раздел «Как это выглядит, когда настроено».
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-18';
const S = 'https://chimitdorzhi.tech';
const P = (slug, label) => ({ url: `${S}/predlozheniya/${slug}/`, label });
const SV = (slug, label) => ({ url: `${S}/services/${slug}/`, label });

const SVC = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-plugs-connected', label: 'Связка учёта, CRM, сайта и мессенджеров' },
  { icon: 'ph-fill ph-robot', label: 'Боты и ИИ-помощники для рутины' },
  { icon: 'ph-fill ph-code', label: 'Сайты, боты и системы под задачу' },
  { icon: 'ph-fill ph-shield-check', label: 'Защита данных и доступов' },
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

  E({ slug: 'ostatki-mezhdu-magazinami-seti-2026', category: 'industries', heroIcon: 'ph-fill ph-storefront',
    ctaInternal: P('integraciya-sistem', 'Обсудить общие остатки по точкам'),
    title: 'Остатки между магазинами сети: как за минуту увидеть, что нужный размер есть в другой точке',
    metaTitle: 'Остатки между магазинами сети: размер в другой точке за минуту',
    metaDescription: 'Нужного размера нет, соседняя точка не берёт трубку, покупатель уходит. Общие остатки по всем точкам, бронь в другом магазине и перемещения без путаницы.',
    excerpt: 'Покупка срывается, потому что продавец не знает, что нужный размер лежит в соседнем магазине. Разбираю, как устроить общие остатки по сети и бронь товара за минуту.',
    tags: ['остатки', 'сеть магазинов', 'ритейл', 'учёт'],
    relatedSlugs: ['magazin-odezhdy-i-belya-razmery-vozvraty-2026', 'reviziya-v-magazine-bez-zakrytiya-2026', 'vyruchka-kazhdoy-tochki-kontrol-seti-2026'] }),

  E({ slug: 'magazin-odezhdy-i-belya-razmery-vozvraty-2026', category: 'industries', heroIcon: 'ph-fill ph-t-shirt',
    ctaInternal: P('bot-magazin-zakazy', 'Обсудить витрину и учёт для магазина'),
    title: 'Магазин одежды и белья: размеры, примерка, возвраты и остатки по точкам',
    metaTitle: 'Магазин одежды и белья: размеры, возвраты и остатки',
    metaDescription: 'Одна модель — десятки позиций по размерам и цветам. Учёт по размерам, подбор без лишних возвратов, база покупательниц и витрина в мессенджере с бронью.',
    excerpt: 'У магазина одежды и белья свои боли: размерная сетка, примерка, возвраты и сезон. Показываю, как навести порядок в учёте и продавать через мессенджер без путаницы.',
    tags: ['магазин одежды', 'бельё', 'ритейл', 'остатки'],
    relatedSlugs: ['ostatki-mezhdu-magazinami-seti-2026', 'chestnyy-znak-podklyuchenie-poshagovo-2026', 'priemka-tovara-ot-postavshchika-v-magazine-2026'] }),

  E({ slug: 'neyavki-na-zapis-predoplata-napominaniya-2026', category: 'industries', heroIcon: 'ph-fill ph-clock-countdown',
    ctaInternal: P('max-bot-zapis-uslugi', 'Настроить запись без неявок'),
    title: 'Неявки на запись: предоплата, напоминания и лист ожидания',
    metaTitle: 'Неявки клиентов на запись: напоминания, предоплата, лист ожидания',
    metaDescription: 'Клиент записался и не пришёл — окно пустое, мастер без денег. Напоминания с кнопкой отмены, предоплата там, где уместна, и лист ожидания.',
    excerpt: 'Салоны, клиники и сервисы теряют деньги на пустых окнах. Разбираю, почему клиенты не приходят и как напоминания, предоплата и лист ожидания закрывают эти дыры.',
    tags: ['онлайн-запись', 'неявки', 'салоны', 'боты'],
    relatedSlugs: ['onlayn-zapis-psiholog-kouch-2026', 'onlayn-zapis-bez-sayta-v-messendzhere-2026', 'ai-agent-onlayn-zapis-na-uslugi-2026'] }),

  E({ slug: 'sotrudnik-unes-bazu-klientov-2026', category: 'security', heroIcon: 'ph-fill ph-user-minus',
    ctaInternal: P('152-fz-pod-klyuch', 'Закрыть утечку базы изнутри'),
    title: 'Сотрудник унёс базу клиентов: что делать и как не допустить',
    metaTitle: 'Сотрудник унёс базу клиентов: что делать и как не допустить',
    metaDescription: 'Менеджер уволился, а клиенты уходят к нему. Как обычно уносят базу, что зафиксировать, если это уже случилось, и какие доступы закрыть заранее.',
    excerpt: 'Базу клиентов чаще уносят свои, чем взламывают чужие. Разбираю, как это происходит, что делать в первые дни и как устроить работу, чтобы клиенты оставались у компании.',
    tags: ['безопасность', 'утечки', 'база клиентов', 'сотрудники'],
    relatedSlugs: ['sotrudniki-glavnaya-dyra-v-bezopasnosti-2026', 'prava-dostupa-v-1c-utechka-bazy-2026', 'chto-grozit-kompanii-za-utechku-bazy-2026'] }),

  E({ slug: 'obuchit-sotrudnikov-rabotat-s-ii-2026', category: 'ai-life', heroIcon: 'ph-fill ph-chalkboard-teacher',
    ctaInternal: SV('corporate-ai-training', 'Обучить команду работе с ИИ'),
    title: 'Обучить сотрудников работать с ИИ: с чего начать руководителю',
    metaTitle: 'Как обучить сотрудников работать с ИИ: план для руководителя',
    metaDescription: 'Одни вставляют в чат договоры клиентов, другие не пользуются вообще. С каких задач начать, какие правила ввести и как понять, что обучение окупилось.',
    excerpt: 'Сотрудники уже пользуются нейросетями как попало. Показываю, как начать с реальных задач отделов, ввести понятные правила и не слить данные клиентов в чужие сервисы.',
    tags: ['ИИ', 'обучение сотрудников', 'нейросети', 'руководителю'],
    relatedSlugs: ['rabochiy-den-s-ii-agentami-2026', 'ii-galyucinacii-nelzya-slepo-doveryat-2026', 'lokalnyy-ii-ne-paranoyya-a-raschet-2026'] }),

  E({ slug: 'zayavki-iz-whatsapp-i-lichnyh-soobshcheniy-v-sistemu-2026', heroIcon: 'ph-fill ph-chats-circle',
    ctaInternal: P('integraciya-sistem', 'Собрать заявки в одну систему'),
    title: 'Заявки из WhatsApp и личных сообщений — в одну систему',
    metaTitle: 'Заявки из WhatsApp и мессенджеров в одну систему',
    metaDescription: 'Менеджеры ведут клиентов в личных телефонах, руководитель не видит переписку, заявки теряются. Рабочие аккаунты, одна система и контроль скорости ответа.',
    excerpt: 'Клиенты пишут в мессенджеры, менеджеры отвечают с личных телефонов, и компания не видит ничего. Разбираю, как собрать все переписки в одну систему без резкой ломки.',
    tags: ['мессенджеры', 'заявки', 'CRM', 'интеграция'],
    relatedSlugs: ['crm-dlya-malogo-biznesa-2026', 'sotrudnik-unes-bazu-klientov-2026', 'amocrm-i-1c-integraciya-2026'] }),

  E({ slug: 'dogovor-na-razrabotku-chto-propisat-2026', heroIcon: 'ph-fill ph-file-text',
    ctaInternal: SV('web-development', 'Обсудить проект и договор'),
    title: 'Договор на разработку: что прописать, чтобы не спорить потом',
    metaTitle: 'Договор на разработку сайта или бота: что прописать',
    metaDescription: 'Конфликты с подрядчиком начинаются с договора, где не сказано, что делается. Этапы, приёмка, доработки, права на код, доступы и гарантия простыми словами.',
    excerpt: 'Большинство споров с подрядчиком — не про плохой код, а про размытый договор. Разбираю пункты, которые стоит прописать до старта, чтобы потом не спорить.',
    tags: ['договор', 'разработка', 'подрядчик', 'заказчику'],
    relatedSlugs: ['podryadchik-sorval-srok-chto-delat-2026', 'kak-sostavit-tz-na-sayt-bot-2026', 'razrabotchik-propal-zabrat-sayt-2026'] }),

  E({ slug: 'podryadchik-sorval-srok-chto-delat-2026', heroIcon: 'ph-fill ph-hourglass-medium',
    ctaInternal: SV('cto-as-a-service', 'Разобраться с затянутым проектом'),
    title: 'Подрядчик сорвал срок: что делать по шагам',
    metaTitle: 'Подрядчик сорвал срок разработки: что делать по шагам',
    metaDescription: 'Подрядчик на связи, обещает «вот-вот», а сроки уехали на месяцы. Как выяснить причину, забрать доступы и код, проверить сделанное и когда пора расходиться.',
    excerpt: 'Разработчик не пропал, но проект стоит. Показываю порядок действий: честный разговор, фиксация договорённостей, доступы у себя и спокойная передача проекта, если нужно.',
    tags: ['подрядчик', 'сроки', 'разработка', 'заказчику'],
    relatedSlugs: ['dogovor-na-razrabotku-chto-propisat-2026', 'razrabotchik-propal-zabrat-sayt-2026', 'dorabotka-sayta-2026'] }),

  E({ slug: 'pereezd-sayta-bez-poteri-poziciy-2026', heroIcon: 'ph-fill ph-arrows-left-right',
    ctaInternal: SV('web-development', 'Перенести сайт без потерь'),
    title: 'Переезд сайта без потери позиций в поиске: что сохранить и как проверить',
    metaTitle: 'Переезд сайта без потери позиций: адреса, редиректы, проверка',
    metaDescription: 'Сменили движок — и через месяц упал трафик из поиска. Адреса страниц, постоянные переадресации, карта сайта и что проверять в первые недели после переезда.',
    excerpt: 'Переезд с конструктора или смена движка часто стоит бизнесу поискового трафика. Разбираю, что сохранить, как настроить переадресации и что проверить после запуска.',
    tags: ['SEO', 'переезд сайта', 'редиректы', 'разработка'],
    relatedSlugs: ['pereezd-s-konstruktora-na-svoy-server-keys-2026', 'medlennyy-sayt-ubivaet-prodazhi-2026', 'skolko-stoit-soderzhat-sayt-i-bota-2026'] }),

  E({ slug: 'skolko-stoit-soderzhat-sayt-i-bota-2026', heroIcon: 'ph-fill ph-receipt',
    ctaInternal: SV('web-development', 'Посчитать расходы на свой проект'),
    title: 'Сколько стоит содержать сайт и бота каждый месяц',
    metaTitle: 'Сколько стоит содержать сайт и бота: регулярные расходы',
    metaDescription: 'Про цену разработки спрашивают все, про ежемесячные платежи узнают после запуска. Домен, сервер, касса, рассылки, нейросети, копии, поддержка.',
    excerpt: 'После запуска сайта и бота приходят регулярные счета, о которых не предупредили. Разбираю, из чего складываются расходы, что растёт вместе с бизнесом и как избежать сюрпризов.',
    tags: ['стоимость', 'поддержка', 'сайт', 'боты'],
    relatedSlugs: ['skolko-stoit-sayt-bot-pod-klyuch-2026', 'skolko-stoit-podderzhka-dorabotka-po-2026', 'pereezd-sayta-bez-poteri-poziciy-2026'] }),

];
