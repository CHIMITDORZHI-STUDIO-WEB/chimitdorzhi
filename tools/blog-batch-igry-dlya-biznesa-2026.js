// Серия «Игры для бизнеса»: первые 10 статей.
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
const CTA_TG = { url: `${S}/development/telegram-mini-apps/`, label: 'Обсудить мини-приложение' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign(
  { published: true, shortForm: true, datePublished: D, dateModified: D, readingMinutes: 4, category: 'marketing',
    servicesOffer: SVC_BIZ, ctaInternal: CTA_GAMES },
  o, { contentHtml: C(o.slug) });

module.exports = [

  E({ slug: 'brendirovannaya-arkada-padayushchie-bloki-2026', heroIcon: 'ph-fill ph-squares-four',
    title: 'Аркада с падающими блоками под брендом: зачем бизнесу и почему не «Тетрис»',
    metaTitle: 'Брендированная аркада для бизнеса: как сделать и не нарушить права',
    metaDescription: 'Игра с падающими блоками в цветах бренда: где она работает, как вписать продукт в механику и почему название и оформление «Тетриса» использовать нельзя.',
    excerpt: 'Аркаду знают все, объяснять правила не нужно, партия длится пару минут. Разбираю, как превратить её в промокоды и повторные визиты и не получить претензию правообладателя.',
    tags: ['игры для бизнеса', 'геймификация', 'товарный знак', 'маркетинг'],
    toc: [
      { id: 'zachem', text: 'Зачем бизнесу аркада' },
      { id: 'pravo', text: 'Почему нельзя назвать её «Тетрисом»' },
      { id: 'brend', text: 'Как вписать бренд' },
      { id: 'vygoda', text: 'Что игра должна давать бизнесу' },
      { id: 'skolko', text: 'Сколько это стоит' },
      { id: 'oshibki', text: 'Где такие игры проваливаются' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['igra-v-telegram-i-max-dlya-biznesa-2026', 'qr-igra-na-upakovke-2026', 'geymifikaciya-dlya-biznesa-gayd-2027'] }),

  E({ slug: 'igra-v-telegram-i-max-dlya-biznesa-2026', heroIcon: 'ph-fill ph-game-controller',
    ctaInternal: CTA_TG,
    title: 'Игра для бизнеса в Telegram и MAX: без установки и с каналом связи в придачу',
    metaTitle: 'Игра в Telegram и MAX для бизнеса: почему лучше приложения',
    metaDescription: 'Мини-игра в мессенджере открывается одной кнопкой и оставляет вам канал связи с игроком. Разбираю разницу между Telegram и MAX и как запускать.',
    excerpt: 'У отдельного приложения неустранимая проблема — установка. У игры в мессенджере её нет, а после партии остаётся бот, через который можно вернуть человека.',
    tags: ['игры для бизнеса', 'Telegram', 'MAX', 'мини-приложения'],
    toc: [
      { id: 'pochemu', text: 'Почему мессенджер, а не приложение' },
      { id: 'kanal', text: 'Главная выгода: канал связи' },
      { id: 'raznica', text: 'Telegram и MAX: в чём разница' },
      { id: 'mehaniki', text: 'Какие игры подходят' },
      { id: 'zapusk', text: 'Как запускать' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['magazin-v-telegram-mini-app-2026', 'tapalka-dlya-mestnogo-biznesa-2026', 'brendirovannaya-arkada-padayushchie-bloki-2026'] }),

  E({ slug: 'koleso-fortuny-i-skretch-karty-zakon-2026', heroIcon: 'ph-fill ph-circle-half',
    title: 'Колесо фортуны и скретч-карты: популярная игра для бизнеса и её юридическая сторона',
    metaTitle: 'Колесо фортуны на сайте: закон, налог на призы и честные шансы',
    metaDescription: 'Колесо фортуны — стимулирующее мероприятие с обязательными условиями. Разбираю правила, налог на призы от 4000 рублей и почему подкручивать шансы нельзя.',
    excerpt: 'Самая простая игровая механика оказывается самой юридически чувствительной. Показываю, как сделать колесо, которое приводит клиентов, а не создаёт проблемы.',
    tags: ['игры для бизнеса', 'закон о рекламе', 'акции', 'маркетинг'],
    toc: [
      { id: 'pochemu', text: 'Почему механика так популярна' },
      { id: 'zakon', text: 'Когда игра становится стимулирующим мероприятием' },
      { id: 'nalog', text: 'Про налог на призы' },
      { id: 'podkrutka', text: 'Подкрученное колесо: почему нельзя' },
      { id: 'kak', text: 'Как сделать честно и эффективно' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['geymifikaciya-partnerov-2026', 'qr-igra-na-upakovke-2026', 'kvest-po-gorodu-s-partnerami-2026'] }),

  E({ slug: 'qr-igra-na-upakovke-2026', heroIcon: 'ph-fill ph-qr-code',
    title: 'QR на упаковке ведёт в игру: как связать офлайн-точку с цифровым клиентом',
    metaTitle: 'QR-код с игрой для офлайн-бизнеса: как узнать своих покупателей',
    metaDescription: 'QR на упаковке или чеке превращает анонимного покупателя в цифровой контакт. Где ставить код, почему его игнорируют и как защитить приз от злоупотреблений.',
    excerpt: 'Офлайн-бизнес ничего не знает о покупателе, который заплатил и ушёл. QR с игрой предлагает обмен, на который соглашаются охотнее, чем на анкету.',
    tags: ['игры для бизнеса', 'QR-код', 'офлайн-бизнес', 'лояльность'],
    toc: [
      { id: 'problema', text: 'Проблема, которую решает QR' },
      { id: 'gde', text: 'Где размещать код' },
      { id: 'smysl', text: 'У каждого кода должен быть смысл' },
      { id: 'skan', text: 'Почему QR игнорируют' },
      { id: 'svyaz', text: 'Как не потерять человека после игры' },
      { id: 'zashchita', text: 'Защита от злоупотреблений' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['participation-loyalty-loyalnost-cherez-uchastie-2026', 'karta-loyalnosti-kak-igra-2026', 'igra-v-telegram-i-max-dlya-biznesa-2026'] }),

  E({ slug: 'tapalka-dlya-mestnogo-biznesa-2026', heroIcon: 'ph-fill ph-hand-tap',
    ctaInternal: CTA_TG,
    title: 'Тапалка для местного бизнеса: что взять из хайпа Hamster Kombat, а что оставить',
    metaTitle: 'Тапалка для бизнеса: уроки Hamster Kombat без криптовалюты',
    metaDescription: 'Тапалки собрали огромную аудиторию, но держались на обещании токена и сдулись после раздачи. Разбираю, какие механики забрать местному бизнесу.',
    excerpt: 'Простая игра с нажатиями на экран собрала миллионы игроков. Показываю, что их на самом деле держало и какие механики работают без криптовалютных обещаний.',
    tags: ['игры для бизнеса', 'Telegram', 'лояльность', 'геймификация'],
    toc: [
      { id: 'chto-eto', text: 'Что такое тапалка' },
      { id: 'pochemu', text: 'Что держало аудиторию' },
      { id: 'vzyat', text: 'Что взять для своего бизнеса' },
      { id: 'ne-brat', text: 'Что оставить' },
      { id: 'realnyy-priz', text: 'Реальный приз вместо обещания' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['ekonomika-mobilnoy-f2p-igry-2027', 'igra-v-telegram-i-max-dlya-biznesa-2026', 'karta-loyalnosti-kak-igra-2026'] }),

  E({ slug: 'nastolka-pro-gorod-vmesto-monopolii-2026', heroIcon: 'ph-fill ph-dice-five',
    title: 'Онлайн-настолка про ваш город вместо «Монополии»: игра, за клетки которой платят партнёры',
    metaTitle: 'Настольная игра про город для бизнеса: модель с партнёрами на поле',
    metaDescription: 'Игра в духе «Монополии», где клетки — реальные заведения города, а партнёры платят за место. Почему название использовать нельзя и как связать игру с офлайном.',
    excerpt: 'Механику торговли участками знает каждый. Перенесённая на реальные места города, она становится рекламной площадкой, которую оплачивает местный бизнес.',
    tags: ['игры для бизнеса', 'местный бизнес', 'товарный знак', 'партнёрства'],
    toc: [
      { id: 'ideya', text: 'Идея: поле из реальных мест' },
      { id: 'pravo', text: 'Почему не «Монополия»' },
      { id: 'dengi', text: 'Как игра зарабатывает' },
      { id: 'svyaz', text: 'Связь с городом — условие успеха' },
      { id: 'format', text: 'Онлайн или офлайн' },
      { id: 'riski', text: 'Подводные камни' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['geymifikaciya-partnerov-2026', 'kvest-po-gorodu-s-partnerami-2026', 'brendirovannaya-arkada-padayushchie-bloki-2026'] }),

  E({ slug: 'karta-loyalnosti-kak-igra-2026', heroIcon: 'ph-fill ph-medal',
    title: 'Карта лояльности как игра: геймификация без отдельной игры',
    metaTitle: 'Программа лояльности как игра: уровни, серии и шкала прогресса',
    metaDescription: 'Обычная карта с баллами скучная. Разбираю игровые механики лояльности — шкалу прогресса, мягкие серии, уровни — и почему они часто лучше отдельной игры.',
    excerpt: 'Многим бизнесам нужна не игра, а чтобы клиенты возвращались. Показываю, как превратить скучные баллы в игру, в которую клиент играет, просто покупая.',
    tags: ['игры для бизнеса', 'программа лояльности', 'геймификация', 'удержание клиентов'],
    toc: [
      { id: 'problema', text: 'Почему карта с баллами не работает' },
      { id: 'mehaniki', text: 'Какие игровые механики работают' },
      { id: 'blizkaya-cel', text: 'Эффект близкой цели' },
      { id: 'serii', text: 'Серии: механика возвращения' },
      { id: 'gde', text: 'Где держать такую карту' },
      { id: 'oshibki', text: 'Типичные ошибки' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['pwa-kofeyni-geymifikaciya-keys-2026', 'open-loyalty-programma-loyalnosti-2026', 'tapalka-dlya-mestnogo-biznesa-2026'] }),

  E({ slug: 'kvest-po-gorodu-s-partnerami-2026', heroIcon: 'ph-fill ph-map-trifold',
    title: 'Квест по городу или торговому центру: игра, которая водит людей к партнёрам',
    metaTitle: 'Квест по городу для бизнеса: как привести людей к партнёрам',
    metaDescription: 'Квест с точками в реальных местах физически приводит людей в заведения. Разбираю, кому подходит, как честно подтверждать этапы и продумать маршрут.',
    excerpt: 'Большинство игр держат человека у экрана, а квест выводит его на улицу и ведёт через заведения. Показываю, как устроить его без хаоса и накруток.',
    tags: ['игры для бизнеса', 'местный бизнес', 'мероприятия', 'партнёрства'],
    toc: [
      { id: 'kak', text: 'Как устроен квест' },
      { id: 'komu', text: 'Кому это подходит' },
      { id: 'podtverzhdenie', text: 'Как подтверждать этапы честно' },
      { id: 'marshrut', text: 'Как продумать маршрут' },
      { id: 'partnery', text: 'Главная работа — с партнёрами' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['it-dlya-kvest-antikafe-2026', 'nastolka-pro-gorod-vmesto-monopolii-2026', 'qr-igra-na-upakovke-2026'] }),

  E({ slug: 'viktorina-obyasnyaet-slozhnyy-produkt-2026', heroIcon: 'ph-fill ph-question',
    title: 'Викторина, которая объясняет сложный продукт лучше инструкции',
    metaTitle: 'Викторина для сложного продукта: объяснить и подобрать вариант',
    metaDescription: 'Клиент уходит не потому, что продукт не нужен, а потому что не понял его. Разбираю, как викторина объясняет лучше описания и честно подбирает вариант.',
    excerpt: 'Страницу с описанием сложного продукта дочитывают немногие, викторину проходят до конца охотнее. Показываю, как сделать её продающей через объяснение.',
    tags: ['игры для бизнеса', 'викторина', 'конверсия', 'обучение клиентов'],
    toc: [
      { id: 'problema', text: 'Почему сложный продукт плохо продаётся' },
      { id: 'pochemu', text: 'Почему викторина работает' },
      { id: 'tipy', text: 'Два типа викторин' },
      { id: 'kak', text: 'Как составить хорошую викторину' },
      { id: 'final', text: 'Что делать в конце' },
      { id: 'gde', text: 'Где применять' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['classquiz-kviz-igry-2026', 'karta-loyalnosti-kak-igra-2026', 'igra-v-telegram-i-max-dlya-biznesa-2026'] }),

  E({ slug: 'brendirovannyy-mir-v-roblox-2026', heroIcon: 'ph-fill ph-cube',
    title: 'Брендированный мир в Roblox: где подростки и что разрешает платформа',
    metaTitle: 'Бренд в Roblox: возможности, правила и риски для российского бизнеса',
    metaDescription: 'Как бренды создают свои миры в Roblox, какие ограничения действуют для рекламы детям и почему история блокировки в России требует осторожности.',
    excerpt: 'Roblox даёт прямой доступ к молодой аудитории через собственные миры. Разбираю форматы, правила и отдельный риск для бизнеса, работающего в России.',
    tags: ['игры для бизнеса', 'Roblox', 'молодёжная аудитория', 'маркетинг'],
    toc: [
      { id: 'chto', text: 'Что такое Roblox для бизнеса' },
      { id: 'auditoriya', text: 'Аудитория: возможность и ограничение' },
      { id: 'rossiya', text: 'Риск для российского бизнеса' },
      { id: 'formaty', text: 'Какие форматы бывают' },
      { id: 'alternativy', text: 'Когда лучше не Roblox' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['brendirovannaya-kibersport-liga-2026', 'igra-v-telegram-i-max-dlya-biznesa-2026', 'ekonomika-mobilnoy-f2p-igry-2027'] }),

];
