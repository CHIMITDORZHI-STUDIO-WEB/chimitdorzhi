// Серия «Игры для бизнеса»: статьи 11–20.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-15';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-game-controller', label: 'Игры и геймификация под бренд' },
  { icon: 'ph-fill ph-robot', label: 'Боты и мини-приложения в Telegram, MAX' },
  { icon: 'ph-fill ph-gear', label: 'Программы лояльности и CRM' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const CTA_GAMES = { url: `${S}/development/games/`, label: 'Обсудить игру для бизнеса' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign(
  { published: true, shortForm: true, datePublished: D, dateModified: D, readingMinutes: 4, category: 'igry-dlya-biznesa',
    servicesOffer: SVC_BIZ, ctaInternal: CTA_GAMES },
  o, { contentHtml: C(o.slug) });

module.exports = [

  E({ slug: 'server-minecraft-dlya-brenda-shkoly-2026', heroIcon: 'ph-fill ph-cube-transparent',
    title: 'Сервер или карта в Minecraft для бренда, школы или лагеря: что можно и чего нельзя',
    metaTitle: 'Minecraft для бренда и школы: форматы, правила и поддержка сервера',
    metaDescription: 'Как бренду, школе или лагерю построить свой мир в Minecraft: форматы, правила коммерческого использования игры и почему сервер нужно поддерживать.',
    excerpt: 'Minecraft — одна из немногих игр, где можно построить собственный мир для своей аудитории. Разбираю форматы, правила игры для коммерческих проектов и где это уместно.',
    tags: ['игры для бизнеса', 'Minecraft', 'образование', 'детская аудитория'],
    toc: [
      { id: 'formaty', text: 'Какие форматы бывают' },
      { id: 'pravila', text: 'Правила, о которых нужно знать' },
      { id: 'shkoly', text: 'Школы, кружки и лагеря' },
      { id: 'brend', text: 'Когда это имеет смысл для бренда' },
      { id: 'podderzhka', text: 'Мир нужно поддерживать' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['biznes-privatnyy-server-gta-cs-minecraft-2027', 'brendirovannyy-mir-v-roblox-2026', 'skiny-i-mody-dlya-brenda-zakonnost-2026'] }),

  E({ slug: 'skiny-i-mody-dlya-brenda-zakonnost-2026', heroIcon: 'ph-fill ph-paint-brush',
    title: 'Скины и моды для популярных игр под бренд: где законно, а где нет',
    metaTitle: 'Моды и скины под бренд: законные пути и главные риски',
    metaDescription: 'Мод с логотипом для чужой игры — это коммерческое использование, которому нужно разрешение. Разбираю риски и законные пути попасть в игру.',
    excerpt: 'Идея сделать мод с логотипом для популярной игры кажется простой, а юридически это одна из самых запутанных механик. Показываю, где проходят границы.',
    tags: ['игры для бизнеса', 'моды', 'интеллектуальная собственность', 'маркетинг'],
    toc: [
      { id: 'chto', text: 'Мод и скин: в чём разница' },
      { id: 'chya', text: 'Чья это игра' },
      { id: 'riski', text: 'Где риски' },
      { id: 'zakonno', text: 'Законные пути' },
      { id: 'skiny-rynok', text: 'Про торговлю скинами' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['marketplace-skinov-steam-cs2-2027', 'brendirovannyy-mir-v-roblox-2026', 'server-minecraft-dlya-brenda-shkoly-2026'] }),

  E({ slug: 'reklama-v-mobilnyh-igrah-ili-svoya-igra-2026', heroIcon: 'ph-fill ph-device-mobile',
    title: 'Реклама внутри мобильных игр или своя игра: когда что дешевле',
    metaTitle: 'Реклама в мобильных играх или своя игра: как выбрать',
    metaDescription: 'Реклама в чужих играх даёт быстрый охват, своя игра — вовлечение и повторные контакты. Разбираю форматы, сравнение и когда их стоит совместить.',
    excerpt: 'Зайти в игры можно двумя разными путями, и их часто путают. Показываю, чем реклама в мобильных играх отличается от своей игры и как выбрать под цель.',
    tags: ['игры для бизнеса', 'реклама', 'мобильные игры', 'маркетинг'],
    toc: [
      { id: 'reklama', text: 'Реклама внутри мобильных игр' },
      { id: 'svoya', text: 'Своя игра' },
      { id: 'sravnenie', text: 'Сравнение' },
      { id: 'vybor', text: 'Как выбрать' },
      { id: 'vmeste', text: 'Можно ли совместить' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['ekonomika-mobilnoy-f2p-igry-2027', 'skolko-stoit-igra-dlya-biznesa-2026', 'okupaemost-igry-dlya-biznesa-metriki-2026'] }),

  E({ slug: 'ar-igra-cherez-kameru-dlya-biznesa-2026', heroIcon: 'ph-fill ph-scan',
    title: 'AR-игра через камеру телефона: поиск предметов в магазине или на мероприятии',
    metaTitle: 'AR-игра для бизнеса: дополненная реальность в браузере телефона',
    metaDescription: 'AR-игра накладывает виртуальные объекты на камеру телефона. Разбираю форматы для магазина и выставки, работу без приложения и реальные ограничения.',
    excerpt: 'Дополненная реальность перестала быть технологией только для крупных брендов. Показываю, где AR-игра работает для бизнеса, а где остаётся красивой игрушкой.',
    tags: ['игры для бизнеса', 'дополненная реальность', 'розница', 'мероприятия'],
    toc: [
      { id: 'chto', text: 'Что такое AR-игра' },
      { id: 'formaty', text: 'Форматы для бизнеса' },
      { id: 'bez-prilozheniya', text: 'В браузере или в приложении' },
      { id: 'ogranicheniya', text: 'Ограничения' },
      { id: 'kogda', text: 'Когда оно того стоит' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['model-viewer-ar-prosmotr-tovara-2026', 'kvest-po-gorodu-s-partnerami-2026', 'qr-igra-na-upakovke-2026'] }),

  E({ slug: 'onbording-sotrudnikov-cherez-igru-2026', heroIcon: 'ph-fill ph-graduation-cap',
    title: 'Онбординг через игру: как быстрее обучить кассира или официанта',
    metaTitle: 'Игровой онбординг сотрудников в общепите и рознице',
    metaDescription: 'Короткие задания на телефоне дают новичку базу до первой смены, а руководителю — видимость того, что усвоено. Разбираю, как устроить игровой онбординг.',
    excerpt: 'Новичок выходит на смену, а старший объясняет всё между заказами. Показываю, как игровой онбординг снимает базовое обучение с наставника.',
    tags: ['игры для бизнеса', 'обучение персонала', 'общепит', 'розница'],
    toc: [
      { id: 'problema', text: 'Почему обычное обучение не работает' },
      { id: 'kak', text: 'Как устроен игровой онбординг' },
      { id: 'vygoda', text: 'Что получает руководитель' },
      { id: 'granicy', text: 'Что игра не заменит' },
      { id: 'zapusk', text: 'Как запустить' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['h5p-interaktivnye-uroki-2026', 'igrovoy-trenazher-standartov-servisa-2026', 'viktorina-obyasnyaet-slozhnyy-produkt-2026'] }),

  E({ slug: 'pashalki-i-sekretnye-promokody-na-sayte-2026', heroIcon: 'ph-fill ph-egg',
    title: 'Пасхалки и секретные промокоды на сайте: мини-игра, которую находят сами',
    metaTitle: 'Пасхалки на сайте для бизнеса: секретные промокоды и мини-игры',
    metaDescription: 'Спрятанная мини-игра или секретный промокод работают через ощущение открытия. Разбираю, где прятать, какие границы соблюдать и как ограничить код.',
    excerpt: 'Большинство игровых механик громкие, а пасхалка работает тихо — для тех, кто нашёл. Показываю, почему это эффективно и как не испортить эффект.',
    tags: ['игры для бизнеса', 'сайт', 'промокоды', 'маркетинг'],
    toc: [
      { id: 'chto', text: 'Что такое пасхалка' },
      { id: 'pochemu', text: 'Почему это работает' },
      { id: 'gde', text: 'Где прятать' },
      { id: 'granicy', text: 'Границы, которые нельзя переходить' },
      { id: 'svyaz', text: 'Пасхалка как часть кампании' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['kvest-po-gorodu-s-partnerami-2026', 'brendirovannaya-arkada-padayushchie-bloki-2026', 'pochemu-brend-igry-provalivayutsya-2026'] }),

  E({ slug: 'igrovoy-trenazher-standartov-servisa-2026', heroIcon: 'ph-fill ph-shield-checkered',
    title: 'Игровой тренажёр по стандартам сервиса и технике безопасности',
    metaTitle: 'Игровой тренажёр для персонала: сервис и техника безопасности',
    metaDescription: 'Тренажёр учит действовать правильно в стрессовой ситуации, а не просто знать правила. Разбираю, как он устроен и почему не заменяет инструктаж по охране труда.',
    excerpt: 'Ошибки сотрудников чаще происходят не от незнания правил, а от того, что в стрессе правило не вспоминается. Показываю, как тренажёр учит именно этому.',
    tags: ['игры для бизнеса', 'обучение персонала', 'сервис', 'охрана труда'],
    toc: [
      { id: 'otlichie', text: 'Чем тренажёр отличается от обучения' },
      { id: 'kak', text: 'Как устроен тренажёр' },
      { id: 'gde', text: 'Где он особенно полезен' },
      { id: 'bezopasnost', text: 'Про технику безопасности' },
      { id: 'sozdanie', text: 'Как создать тренажёр' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['godot-trenazhery-obucheniya-2026', 'onbording-sotrudnikov-cherez-igru-2026', 'h5p-interaktivnye-uroki-2026'] }),

  E({ slug: 'skolko-stoit-igra-dlya-biznesa-2026', heroIcon: 'ph-fill ph-coins',
    title: 'Сколько стоит игра для бизнеса: от шаблона до разработки с нуля',
    metaTitle: 'Сколько стоит игра для бизнеса: из чего складывается цена',
    metaDescription: 'Разница между шаблонной игрой и собственной разработкой бывает в разы. Разбираю, что определяет цену, какие расходы забывают и как сравнивать предложения.',
    excerpt: 'Исполнители называют цены, которые отличаются в разы, и это не всегда обман. Показываю, из чего складывается стоимость игры, чтобы вы могли сравнивать.',
    tags: ['игры для бизнеса', 'стоимость разработки', 'бюджет', 'маркетинг'],
    toc: [
      { id: 'urovni', text: 'Три уровня игр' },
      { id: 'factory', text: 'Что определяет цену' },
      { id: 'skrytye', text: 'Скрытые расходы' },
      { id: 'kak-sravnivat', text: 'Как сравнивать предложения' },
      { id: 'start', text: 'С чего начать при небольшом бюджете' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['okupaemost-igry-dlya-biznesa-metriki-2026', 'gdevelop-promo-igry-bez-koda-2026', 'phaser-promo-igry-dlya-biznesa-2026'] }),

  E({ slug: 'okupaemost-igry-dlya-biznesa-metriki-2026', heroIcon: 'ph-fill ph-chart-line-up',
    title: 'Как понять, окупилась ли игра для бизнеса: считать покупки, а не партии',
    metaTitle: 'Окупаемость игры для бизнеса: какие метрики считать',
    metaDescription: 'Количество партий ничего не говорит о деньгах. Разбираю воронку от игры до покупки, метки, которые нужно заложить до запуска, и честный расчёт окупаемости.',
    excerpt: 'Игру запустили, отчёт пестрит большими числами. Показываю, какие цифры имеют значение, а какие только создают ощущение успеха.',
    tags: ['игры для бизнеса', 'аналитика', 'окупаемость', 'маркетинг'],
    toc: [
      { id: 'obmanchivye', text: 'Цифры, которые обманывают' },
      { id: 'voronka', text: 'Воронка, которая имеет значение' },
      { id: 'metki', text: 'Метки нужно заложить до запуска' },
      { id: 'raschet', text: 'Как посчитать окупаемость' },
      { id: 'dolgaya', text: 'Отложенный эффект' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['skvoznaya-analitika-malyy-biznes-2026', 'skolko-stoit-igra-dlya-biznesa-2026', 'pochemu-brend-igry-provalivayutsya-2026'] }),

  E({ slug: 'pochemu-brend-igry-provalivayutsya-2026', heroIcon: 'ph-fill ph-warning',
    title: 'Пять причин, почему бренд-игры проваливаются',
    metaTitle: 'Почему бренд-игры проваливаются: пять причин и как их избежать',
    metaDescription: 'Скучно, сложно, нет награды, нет повода вернуться, нарушены правила. Разбираю пять причин провала бренд-игр и как проверить идею до разработки.',
    excerpt: 'Бренд вложился в игру, а через неделю в неё никто не играет. Причины удивительно однообразны — показываю пять главных, чтобы проверить их до разработки.',
    tags: ['игры для бизнеса', 'ошибки', 'геймификация', 'маркетинг'],
    toc: [
      { id: 'skuchno', text: 'Причина первая: скучно' },
      { id: 'slozhno', text: 'Причина вторая: сложно' },
      { id: 'nagrada', text: 'Причина третья: нет понятной награды' },
      { id: 'vozvrat', text: 'Причина четвёртая: нет повода вернуться' },
      { id: 'pravila', text: 'Причина пятая: нарушены правила' },
      { id: 'koren', text: 'Общий корень всех провалов' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['razbor-provala-vnedreniya-2026', 'okupaemost-igry-dlya-biznesa-metriki-2026', 'brendirovannaya-arkada-padayushchie-bloki-2026'] }),

];
