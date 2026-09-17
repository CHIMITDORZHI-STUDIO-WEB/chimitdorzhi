// Серия «Игры для бизнеса»: статьи 41–50.
// Оглавление собирается из заголовков h2 самой статьи, чтобы не расходилось с текстом.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-17';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-game-controller', label: 'Игры и геймификация под бренд' },
  { icon: 'ph-fill ph-robot', label: 'Боты и мини-приложения в Telegram, MAX' },
  { icon: 'ph-fill ph-gear', label: 'Программы лояльности и CRM' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const CTA_GAMES = { url: `${S}/development/games/`, label: 'Обсудить игру для бизнеса' };

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));

const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, shortForm: true, datePublished: D, dateModified: D, readingMinutes: 5, category: 'igry-dlya-biznesa',
      servicesOffer: SVC_BIZ, ctaInternal: CTA_GAMES, toc: tocFrom(html) },
    o, { contentHtml: html });
};

module.exports = [

  E({ slug: 'antichit-v-brend-igre-2026', heroIcon: 'ph-fill ph-shield-warning',
    title: 'Античит в бренд-игре: как защитить призы от накрутки',
    metaTitle: 'Античит в бренд-игре: как защитить призы от накрутки',
    metaDescription: 'Как только за игру дают приз, появляются желающие получить его нечестно. Разбираю, что проверять на сервере, как ловить фейковые аккаунты и где перегнуть.',
    excerpt: 'Результату из браузера верить нельзя: счёт подделывается за минуту. Показываю, какие проверки действительно защищают призы и почему жёсткая защита отпугивает честных игроков.',
    tags: ['игры для бизнеса', 'безопасность', 'призы', 'разработка'],
    relatedSlugs: ['pochemu-brend-igry-provalivayutsya-2026', 'koleso-fortuny-i-skretch-karty-zakon-2026', 'kakie-dannye-sobirat-v-igre-soglasie-2026'] }),

  E({ slug: 'igra-vmesto-ankety-podbor-personala-2026', heroIcon: 'ph-fill ph-user-focus',
    title: 'Игра вместо анкеты: отбор кандидатов через короткое задание',
    metaTitle: 'Игровое задание в найме: отбор кандидатов вместо анкеты',
    metaDescription: 'Короткая практическая игра вместо теста показывает, как человек решает задачи. Кому подходит такой отбор, кому нет и что смотреть кроме баллов.',
    excerpt: 'Отклики копятся, собеседования съедают день. Разбираю, как короткое игровое задание отсеивает поток без обид и где оно только отпугнёт хорошего специалиста.',
    tags: ['игры для бизнеса', 'найм', 'персонал', 'автоматизация'],
    relatedSlugs: ['onbording-sotrudnikov-cherez-igru-2026', 'igrovoy-trenazher-standartov-servisa-2026', 'komandnaya-igra-mezhdu-filialami-seti-2026'] }),

  E({ slug: 'konfigurator-kak-igra-soberi-svoy-2026', heroIcon: 'ph-fill ph-sliders',
    title: 'Конфигуратор как игра: «соберите свой» вместо длинного каталога',
    metaTitle: 'Конфигуратор товара как игра: собери свой набор',
    metaDescription: 'Конфигуратор превращает выбор в сборку: клиент собирает набор и сразу видит цену. Где это работает, что обязательно внутри и когда он не нужен.',
    excerpt: 'Когда выбор пугает, человек уходит. Показываю, чем конфигуратор отличается от фильтра, какие элементы в нём обязательны и какие ошибки убивают конверсию.',
    tags: ['игры для бизнеса', 'конверсия', 'интернет-магазин', 'заявки'],
    relatedSlugs: ['viktorina-obyasnyaet-slozhnyy-produkt-2026', 'igra-opros-mnenie-klientov-2026', 'kollekcionirovanie-nakleek-za-pokupki-2026'] }),

  E({ slug: 'nastolnaya-igra-brenda-v-oflayne-2026', heroIcon: 'ph-fill ph-cards',
    title: 'Настольная игра бренда: печатный тираж как подарок и как реклама',
    metaTitle: 'Настольная игра бренда: тираж как подарок клиентам',
    metaDescription: 'Коробка с игрой живёт дома у клиента годами. Из чего складывается тираж, какие форматы дешевле и как связать печатную игру с ботом или сайтом.',
    excerpt: 'Пост в ленте живёт день, коробка с игрой — годы. Разбираю форматы печатных игр под бренд, из чего складывается стоимость и почему правила надо тестировать до печати.',
    tags: ['игры для бизнеса', 'офлайн', 'мерч', 'подарки клиентам'],
    relatedSlugs: ['nastolka-pro-gorod-vmesto-monopolii-2026', 'qr-igra-na-upakovke-2026', 'kvest-po-gorodu-s-partnerami-2026'] }),

  E({ slug: 'igra-v-rassylke-pismo-i-messendzher-2026', heroIcon: 'ph-fill ph-envelope-open',
    title: 'Игра в рассылке: механика прямо в письме и в сообщении',
    metaTitle: 'Игровые механики в рассылке: письмо и мессенджер',
    metaDescription: 'Что реально работает в письме, а что только в боте: скретч-картинки, ежедневные бонусы и серии. Плюс согласие на рассылку и частота, чтобы не стать спамом.',
    excerpt: 'Настоящая игра внутри письма не работает — почтовые программы режут скрипты. Показываю, что остаётся в письме, что умеет бот и как не превратить механику в спам.',
    tags: ['игры для бизнеса', 'рассылки', 'мессенджеры', 'удержание'],
    relatedSlugs: ['sezonnye-igry-advent-kalendar-dlya-biznesa-2026', 'igra-v-telegram-i-max-dlya-biznesa-2026', 'referalnaya-igra-privedi-druga-2026'] }),

  E({ slug: 'geymifikaciya-dlya-prodavca-na-marketpleyse-2026', heroIcon: 'ph-fill ph-package',
    title: 'Геймификация для продавца на маркетплейсе: что можно, когда площадка чужая',
    metaTitle: 'Геймификация на маркетплейсе: вкладыш, отзывы, повторные заказы',
    metaDescription: 'На маркетплейсе продавец не владеет ни карточкой, ни клиентом. Что запрещено, что можно через вкладыш с QR и как довести покупателя до повторного заказа.',
    excerpt: 'Свою игру в карточку товара не встроить, а уводить покупателя ссылкой площадки запрещают. Разбираю, что остаётся продавцу и как это не нарушает правила.',
    tags: ['игры для бизнеса', 'маркетплейсы', 'повторные продажи', 'отзывы'],
    relatedSlugs: ['qr-igra-na-upakovke-2026', 'karta-loyalnosti-kak-igra-2026', 'kollekcionirovanie-nakleek-za-pokupki-2026'] }),

  E({ slug: 'kakie-dannye-sobirat-v-igre-soglasie-2026', heroIcon: 'ph-fill ph-lock-key',
    title: 'Какие данные собирать в игре и как правильно спросить согласие',
    metaTitle: 'Данные в бренд-игре: что собирать и как спросить согласие',
    metaDescription: 'Принцип минимума в бренд-игре: собирать только нужное и тогда, когда понадобилось. Разделение согласий, хранение, сроки и отдельная осторожность с детьми.',
    excerpt: 'Чем меньше данных просит игра, тем больше людей доходит до конца. Разбираю, что действительно нужно для выдачи приза, как спрашивать согласие и что делать с базой после розыгрыша.',
    tags: ['игры для бизнеса', 'персональные данные', 'согласия', 'правила акции'],
    relatedSlugs: ['koleso-fortuny-i-skretch-karty-zakon-2026', 'igry-dlya-detskoy-auditorii-chto-uchest-2026', 'kto-vladeet-igroy-posle-razrabotki-2026'] }),

  E({ slug: 'dostupnaya-igra-dlya-vseh-igrokov-2026', heroIcon: 'ph-fill ph-hand-tap',
    title: 'Доступная игра: чтобы в неё смогли поиграть все',
    metaTitle: 'Доступная бренд-игра: звук, контраст, одна рука, слабый телефон',
    metaDescription: 'Часть игроков уходит не от скуки, а от неудобства: нет звука, мелкие кнопки, слабый телефон. Простые требования, которые расширяют охват без переделки.',
    excerpt: 'В транспорте звук выключен, телефон держат одной рукой, интернет тормозит. Показываю набор простых правил, после которых в игру смогут играть все, а не только идеальный игрок.',
    tags: ['игры для бизнеса', 'доступность', 'мобильные', 'интерфейс'],
    relatedSlugs: ['pochemu-brend-igry-provalivayutsya-2026', 'pashalki-i-sekretnye-promokody-na-sayte-2026', 'igra-v-telegram-i-max-dlya-biznesa-2026'] }),

  E({ slug: 'konkurs-kontenta-s-igrovym-podschetom-2026', heroIcon: 'ph-fill ph-camera',
    title: 'Конкурс фото и видео с игровым подсчётом: как получить контент от клиентов',
    metaTitle: 'Конкурс контента с баллами: как собрать фото и видео клиентов',
    metaDescription: 'Обычный конкурс с хештегом работает слабо. Разбираю подсчёт баллов вместо голосования, модерацию присланного и права на работы участников.',
    excerpt: 'Клиенты присылают фото и видео, бренд получает материал и охват. Показываю, как считать честно, что писать в правилах про права на работы и почему призов лучше несколько.',
    tags: ['игры для бизнеса', 'пользовательский контент', 'конкурсы', 'соцсети'],
    relatedSlugs: ['igra-opros-mnenie-klientov-2026', 'referalnaya-igra-privedi-druga-2026', 'koleso-fortuny-i-skretch-karty-zakon-2026'] }),

  E({ slug: 'neyroseti-v-proizvodstve-igry-2026', heroIcon: 'ph-fill ph-magic-wand',
    title: 'Нейросети в производстве игры: что ускоряют, а что ломают',
    metaTitle: 'Нейросети в разработке бренд-игры: где помогают, где мешают',
    metaDescription: 'Черновики, варианты персонажей и переводы нейросети делают быстро. Единый стиль, точный вид товара и факты — нет. Где проходит граница и что с правами.',
    excerpt: 'Нейросети реально сокращают сроки, но не везде. Разбираю, что отдать машине на черновиках, что оставить человеку и чем рискует бренд, делая персонажа из сгенерированной картинки.',
    tags: ['игры для бизнеса', 'нейросети', 'производство', 'авторские права'],
    relatedSlugs: ['ii-personazh-v-igre-dlya-brenda-riski-2026', 'skolko-stoit-igra-dlya-biznesa-2026', 'kto-vladeet-igroy-posle-razrabotki-2026'] }),

];
