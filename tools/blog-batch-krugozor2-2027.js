// Батч «Бизнес-кругозор» 2: фреймворки + книги, 4-6 мин чтения.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-03';

const SVC_TOOLS = {
  title: 'Что я делаю под ключ',
  services: [
    { icon: 'ph-fill ph-kanban', label: 'Таск-трекер и процессы (Kaiten/Трекер)' },
    { icon: 'ph-fill ph-robot', label: 'Автоматизация рутины и боты' },
    { icon: 'ph-fill ph-brain', label: 'База знаний с ИИ-поиском' },
    { icon: 'ph-fill ph-chart-line', label: 'Аналитика, финмодель, стратегия' },
    { icon: 'ph-fill ph-browser', label: 'Сайты и лендинги' },
  ],
};
const SVC_BOOK = {
  title: 'Чем я помогаю бизнесу',
  services: [
    { icon: 'ph-fill ph-flow-arrow', label: 'Автоматизация процессов' },
    { icon: 'ph-fill ph-robot', label: 'ИИ-агенты и боты' },
    { icon: 'ph-fill ph-chart-line-up', label: 'Аналитика и данные' },
    { icon: 'ph-fill ph-shield-check', label: 'Безопасность и 152-ФЗ' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Внедрение и поддержка' },
  ],
};
const CTA = { url: 'https://chimitdorzhi.tech/services/business-automation/', label: 'Навести порядок в процессах' };
const TOC_CONCEPT = [
  { id: 'chto-eto', text: 'Что это' },
  { id: 'zachem', text: 'Зачем это нужно' },
  { id: 'kak-primenit', text: 'Как применить' },
  { id: 'oshibki', text: 'Частые ошибки' },
  { id: 'faq', text: 'FAQ' },
  { id: 'vyvody', text: 'Коротко о главном' },
];
const TOC_BOOK = [
  { id: 'o-knige', text: 'О книге и авторе' },
  { id: 'glavnaya-mysl', text: 'Главная мысль' },
  { id: 'klyuchevye-idei', text: 'Ключевые идеи' },
  { id: 'kak-primenit', text: 'Как применить' },
  { id: 'faq', text: 'FAQ' },
  { id: 'vyvody', text: 'Коротко о главном' },
];

const EC = (o) => Object.assign({
  category: 'biznes-krugozor', published: true, datePublished: D, dateModified: D, readingMinutes: 5,
  servicesOffer: SVC_TOOLS, ctaInternal: CTA, toc: TOC_CONCEPT,
}, o, { contentHtml: C(o.slug) });
const EB = (o) => Object.assign({
  category: 'biznes-krugozor', published: true, datePublished: D, dateModified: D, readingMinutes: 5,
  servicesOffer: SVC_BOOK, ctaInternal: CTA, toc: TOC_BOOK, heroIcon: 'ph-fill ph-book-open-text',
}, o, { contentHtml: C(o.slug) });

module.exports = [
  EC({ slug: 'balanced-scorecard-2027', heroIcon: 'ph-fill ph-gauge',
    title: 'Balanced Scorecard: сбалансированная система показателей простыми словами',
    metaTitle: 'Balanced Scorecard простыми словами',
    metaDescription: 'Balanced Scorecard (сбалансированная система показателей) Каплана и Нортона простыми словами: почему нельзя судить о бизнесе только по финансам.',
    excerpt: 'Судить о бизнесе только по прибыли — смотреть в зеркало заднего вида. Balanced Scorecard добавляет ещё три перспективы: клиентов, процессы, обучение. Разбираю, как их связать и не утонуть в метриках.',
    tags: ['Balanced Scorecard', 'стратегия', 'метрики', 'управление'],
    relatedSlugs: ['kpi-chto-eto-kak-stavit-2026', 'okr-kak-stavit-celi-2026', 'north-star-metric-2026'] }),

  EC({ slug: 'vrio-analiz-2027', heroIcon: 'ph-fill ph-diamond',
    title: 'VRIO-анализ: даёт ли ваш ресурс реальное конкурентное преимущество',
    metaTitle: 'VRIO-анализ простыми словами',
    metaDescription: 'VRIO-анализ простыми словами: четыре вопроса — ценность, редкость, воспроизводимость, организация — чтобы понять.',
    excerpt: '«У нас лучшая команда» — это преимущество или просто норма для отрасли? VRIO-анализ отвечает на этот вопрос за четыре шага. Разбираю, как отличить реальное преимущество от иллюзии.',
    tags: ['VRIO', 'конкурентное преимущество', 'стратегия', 'анализ'],
    relatedSlugs: ['5-sil-portera-2026', 'bazovye-strategii-portera-2026', '7-powers-istochniki-preimushchestva-2026'] }),

  EC({ slug: 'value-proposition-canvas-2027', heroIcon: 'ph-fill ph-puzzle-piece',
    title: 'Value Proposition Canvas: карта ценностного предложения простыми словами',
    metaTitle: 'Value Proposition Canvas простыми словами',
    metaDescription: 'Value Proposition Canvas простыми словами: как состыковать продукт с задачами, болями и выгодами клиента. Дополнение к Business Model Canvas.',
    excerpt: 'Business Model Canvas описывает весь бизнес, а Value Proposition Canvas — фокусируется на одном вопросе: действительно ли ваш продукт закрывает боль клиента. Разбираю обе стороны карты и как их состыковать.',
    tags: ['Value Proposition Canvas', 'продукт', 'клиент', 'JTBD'],
    relatedSlugs: ['biznes-model-canvas-za-list-2026', 'jobs-to-be-done-jtbd-2026', 'situacionnaya-model-klienta-2026'] }),

  EC({ slug: 'stp-marketing-2027', heroIcon: 'ph-fill ph-crosshair',
    title: 'STP-маркетинг: сегментация, таргетинг, позиционирование простыми словами',
    metaTitle: 'STP-маркетинг простыми словами',
    metaDescription: 'Сегментация, таргетинг, позиционирование: как разбить рынок, выбрать сегменты, за которые стоит бороться, и занять место в голове аудитории.',
    excerpt: '«Наш продукт для всех» — верный способ не продать никому. STP-маркетинг заставляет выбрать сегмент, нацелиться на него и занять там чёткую позицию. Разбираю все три шага с примером.',
    tags: ['STP', 'маркетинг', 'сегментация', 'позиционирование'],
    relatedSlugs: ['celevaya-auditoriya-portret-klienta-2026', 'utp-kak-sformulirovat-2026', 'positioning-rays-traut-2027'] }),

  EC({ slug: 'cynefin-framework-2027', heroIcon: 'ph-fill ph-flow-arrow',
    title: 'Cynefin: как понять, какая перед вами задача и что с ней делать',
    metaTitle: 'Cynefin framework простыми словами',
    metaDescription: 'Модель Cynefin Дэйва Сноудена простыми словами: пять типов ситуаций — понятная, сложная, комплексная, хаотичная и путаница.',
    excerpt: 'Пытаться решить хаотичную проблему методом из понятной ситуации — верный способ провалиться. Cynefin помогает сначала распознать тип задачи, а потом выбрать подход. Разбираю все пять зон модели.',
    tags: ['Cynefin', 'принятие решений', 'управление', 'сложность'],
    relatedSlugs: ['kak-prinimat-resheniya-2026', 'sistemnoe-myshlenie-2026', 'ooda-petlya-boyda-2027'] }),

  EC({ slug: 'ooda-petlya-boyda-2027', heroIcon: 'ph-fill ph-repeat',
    title: 'OODA-петля Бойда: как принимать решения быстрее конкурентов',
    metaTitle: 'OODA-петля Бойда простыми словами',
    metaDescription: 'OODA-петля (Observe-Orient-Decide-Act) военного стратега Джона Бойда простыми словами: наблюдай, ориентируйся, решай, действуй.',
    excerpt: 'Военный лётчик Джон Бойд заметил: побеждает не тот, у кого план идеальнее, а тот, кто быстрее крутит цикл «наблюдай-ориентируйся-решай-действуй». Разбираю OODA-петлю и как применить её в бизнесе.',
    tags: ['OODA', 'принятие решений', 'скорость', 'стратегия'],
    relatedSlugs: ['cynefin-framework-2027', 'kak-prinimat-resheniya-2026', 'lean-startup-mvp-zapusk-2026'] }),

  EC({ slug: 'margin-of-safety-baffet-2027', heroIcon: 'ph-fill ph-shield-plus',
    title: 'Margin of Safety: запас прочности в решениях по принципу Баффета',
    metaTitle: 'Margin of Safety простыми словами',
    metaDescription: 'Margin of Safety (запас прочности) — принцип Уоррена Баффета и его учителя Бенджамина Грэма простыми словами.',
    excerpt: 'Баффет не пытается угадать цифру точно — он закладывает запас на случай, что ошибся. Margin of Safety работает не только в инвестициях, а в любом важном решении бизнеса. Разбираю принцип и как его применять.',
    tags: ['Margin of Safety', 'Баффет', 'риск', 'решения'],
    relatedSlugs: ['antihrupkost-i-risk-po-talebu-2026', 'circle-of-competence-baffet-2027', 'kak-prinimat-resheniya-2026'] }),

  EC({ slug: 'metod-ayvi-li-2027', heroIcon: 'ph-fill ph-list-numbers',
    title: 'Метод Айви Ли: шесть задач на завтра, которые реально закрываются',
    metaTitle: 'Метод Айви Ли простыми словами',
    metaDescription: 'Метод Айви Ли простыми словами: в конце дня выпишите ровно шесть задач на завтра по важности и работайте по списку строго по порядку.',
    excerpt: 'Консультант Айви Ли получил гонорар за совет, который занимает одну строчку: шесть задач, по порядку, без перескакивания. Разбираю, почему этот простой приём работает лучше сложных систем.',
    tags: ['метод Айви Ли', 'продуктивность', 'приоритизация', 'планирование'],
    relatedSlugs: ['metod-syesh-lyagushku-2026', 'taym-bloking-planirovanie-2026', 'zakon-parkinsona-2026'] }),

  EC({ slug: 'tuckman-model-komandy-2027', heroIcon: 'ph-fill ph-users-four',
    title: 'Модель Такмана: четыре стадии развития команды простыми словами',
    metaTitle: 'Модель Такмана простыми словами',
    metaDescription: 'Формирование, шторм, нормирование, работа — четыре стадии команды по Такману. Почему конфликт на втором этапе норма и как дойти до результата.',
    excerpt: 'Новая команда почти всегда проходит через фазу конфликтов — и это не провал, а нормальный этап. Модель Такмана объясняет четыре стадии развития команды. Разбираю, как не застрять на «шторме».',
    tags: ['модель Такмана', 'команда', 'управление персоналом', 'групповая динамика'],
    relatedSlugs: ['pyat-porokov-komandy-lensioni-2026', 'konflikty-na-rabote-2026', 'delegirovanie-kak-perestat-delat-vsyo-samomu-2026'] }),

  EC({ slug: 'circle-of-competence-baffet-2027', heroIcon: 'ph-fill ph-circles-three',
    title: 'Круг компетенций: принцип Баффета — решать только там, где реально разбираешься',
    metaTitle: 'Круг компетенций Баффета простыми словами',
    metaDescription: 'Круг компетенций Уоррена Баффета простыми словами: важно не то, насколько широк ваш круг знаний, а то, насколько чётко вы видите его границы.',
    excerpt: 'Баффет не пытается разбираться во всём — он чётко знает границы того, в чём разбирается, и не выходит за них в решениях. Разбираю принцип круга компетенций и как определить свой.',
    tags: ['круг компетенций', 'Баффет', 'решения', 'экспертиза'],
    relatedSlugs: ['margin-of-safety-baffet-2027', 'sladkaya-tochka-predprinimatelya-2026', 'mentalnye-modeli-2026'] }),

  EB({ slug: 'nudge-taler-2027', title: '«Nudge: архитектура выбора» Талера и Санстейна: краткий пересказ',
    metaTitle: '«Nudge» Талера: краткий пересказ',
    metaDescription: 'Краткий пересказ книги «Nudge: архитектура выбора» Ричарда Талера и Касса Санстейна: либертарианский патернализм.',
    excerpt: 'Талер и Санстейн доказали Нобелевской премией: маленький сдвиг в том, как предложен выбор, меняет поведение людей сильнее запретов. Разбираю ключевые идеи «архитектуры выбора» и примеры «подталкиваний».',
    tags: ['книга', 'поведенческая экономика', 'nudge', 'выбор'],
    relatedSlugs: ['fogg-behavior-model-2026', 'kognitivnye-iskazheniya-2026', 'psihologiya-ceny-i-vybora-2026'] }),

  EB({ slug: 'positioning-rays-traut-2027', title: '«Позиционирование» Райса и Траута: краткий пересказ',
    metaTitle: '«Позиционирование» Райса и Траута: краткий пересказ',
    metaDescription: 'Позиционирование Райса и Траута кратко: выигрывает не лучший продукт, а тот, кто первым занял место в голове клиента. Как найти своё место.',
    excerpt: 'Райс и Траут в 1980-х объяснили то, что до сих пор недооценивают: побеждает не лучший продукт, а тот, кто первым занял ясное место в голове клиента. Разбираю главные идеи «Позиционирования».',
    tags: ['книга', 'позиционирование', 'маркетинг', 'бренд'],
    relatedSlugs: ['stp-marketing-2027', 'strategiya-golubogo-okeana-2026', 'kategoriynyy-dizayn-dominirovanie-v-nishe-2026'] }),

  EB({ slug: 'start-with-why-sinek-2027', title: '«Начни с "Почему?"» Саймона Синека: краткий пересказ',
    metaTitle: '«Начни с Почему» Синека: краткий пересказ',
    metaDescription: 'Начни с Почему Саймона Синека кратко: золотой круг почему-как-что и причина, по которой компании с ясной целью вызывают больше доверия и лояльности.',
    excerpt: 'Люди покупают не то, что вы делаете, а то, зачем вы это делаете, — утверждает Синек. Разбираю золотой круг «почему-как-что» и как перестроить коммуникацию бизнеса вокруг цели, а не продукта.',
    tags: ['книга', 'золотой круг', 'бренд', 'лидерство'],
    relatedSlugs: ['positioning-rays-traut-2027', 'utp-kak-sformulirovat-2026', 'fioletovaya-korova-godin-2026'] }),

  EB({ slug: 'traction-eos-uikman-2027', title: '«Трэкшн» Джино Уикмана: краткий пересказ операционной системы EOS',
    metaTitle: '«Трэкшн» Уикмана (EOS): краткий пересказ',
    metaDescription: 'Трэкшн Джино Уикмана в пересказе: операционная система EOS и шесть компонентов — видение, люди, данные, проблемы, процессы — для порядка в бизнесе.',
    excerpt: 'Уикман собрал управление растущей компанией в шесть простых компонентов — от видения до еженедельных встреч. Разбираю операционную систему EOS и почему её любят владельцы малого бизнеса.',
    tags: ['книга', 'EOS', 'операционная система', 'малый бизнес'],
    relatedSlugs: ['scaling-up-harnish-2027', 'okr-kak-stavit-celi-2026', 'e-myth-gerber-2026'] }),

  EB({ slug: 'crossing-the-chasm-mur-2027', title: '«Преодоление пропасти» Джеффри Мура: краткий пересказ',
    metaTitle: '«Преодоление пропасти» Мура: краткий пересказ',
    metaDescription: 'Преодоление пропасти Джеффри Мура кратко: между ранними последователями и массовым рынком лежит провал, куда падают продукты. Как его перепрыгнуть.',
    excerpt: 'Продукт может понравиться энтузиастам и всё равно провалиться, не дойдя до массового рынка, — между ними лежит «пропасть». Разбираю модель Мура и стратегию точечного вторжения в одну нишу.',
    tags: ['книга', 'диффузия инноваций', 'рост', 'стратегия'],
    relatedSlugs: ['distribuciya-vazhnee-produkta-2026', 'counter-positioning-dilemma-innovatora-2026', 'bullseye-vybor-kanalov-2026'] }),

  EB({ slug: 'scaling-up-harnish-2027', title: '«Scaling Up» Верна Харниша: краткий пересказ четырёх решений роста',
    metaTitle: '«Scaling Up» Харниша: краткий пересказ',
    metaDescription: 'Scaling Up Верна Харниша в пересказе: четыре решения роста — люди, стратегия, исполнение, деньги — и рабочие инструменты под каждое из них.',
    excerpt: 'Харниш утверждает: рост компании упирается всего в четыре решения — люди, стратегия, исполнение, деньги. Разбираю модель Scaling Up и её главные инструменты для растущего бизнеса.',
    tags: ['книга', 'рост бизнеса', 'масштабирование', 'стратегия'],
    relatedSlugs: ['traction-eos-uikman-2027', 'balanced-scorecard-2027', 'okr-kak-stavit-celi-2026'] }),

  EB({ slug: 'high-output-management-grouv-2027', title: '«Высокоэффективный менеджмент» Энди Гроува: краткий пересказ',
    metaTitle: '«Высокоэффективный менеджмент» Гроува: краткий пересказ',
    metaDescription: 'Краткий пересказ книги Энди Гроува «Высокоэффективный менеджмент»: бывший глава Intel описывает управление через метафору производственного конвейера.',
    excerpt: 'Гроув, легендарный глава Intel, смотрел на управление как на производственный конвейер — с леверджем, узкими местами и метриками выхода. Разбираю его подход к менеджменту как к точной науке.',
    tags: ['книга', 'менеджмент', 'управление', 'Intel'],
    relatedSlugs: ['okr-izmeryayte-vazhnoe-dorr-2026', 'raci-matrica-2026', 'teoriya-ogranicheniy-toc-2026'] }),

  EB({ slug: 'getting-to-yes-fisher-yuri-2027', title: '«Путь к согласию» Фишера и Юри: краткий пересказ',
    metaTitle: '«Путь к согласию» Фишера и Юри: краткий пересказ',
    metaDescription: 'Краткий пересказ классической книги переговорщиков Гарварда Роджера Фишера и Уильяма Юри «Путь к согласию»: переговоры по существу.',
    excerpt: 'Гарвардская школа переговоров учит: спорить о позициях — тупик, а искать интересы за ними — путь к соглашению. Разбираю четыре принципа переговоров по существу из классической книги Фишера и Юри.',
    tags: ['книга', 'переговоры', 'коммуникация', 'Гарвард'],
    relatedSlugs: ['nikogda-ne-delite-raznicu-voss-2026', 'dogovoritsya-mozhno-obo-vsyom-kennedi-2026', 'konflikty-na-rabote-2026'] }),

  EB({ slug: 'made-to-stick-hiz-2027', title: '«Сделано, чтобы прилипать» братьев Хиз: краткий пересказ',
    metaTitle: '«Сделано, чтобы прилипать» Хиз: краткий пересказ',
    metaDescription: 'Почему одни идеи запоминаются, а другие нет: шесть принципов липких идей от братьев Хиз — простота, неожиданность, конкретность, эмоции, истории.',
    excerpt: 'Городские легенды помнят десятилетиями, а презентацию с графиками забывают через час. Братья Хиз вывели шесть принципов «липких» идей. Разбираю каждый с примерами для бизнес-коммуникации.',
    tags: ['книга', 'коммуникация', 'сторителлинг', 'маркетинг'],
    relatedSlugs: ['contagious-berger-2027', 'pishi-sokrashchay-ilyahov-2026', 'peak-end-rule-2026'] }),

  EB({ slug: 'contagious-berger-2027', title: '«Заразительный» Джоны Бергера: краткий пересказ',
    metaTitle: '«Заразительный» Бергера: краткий пересказ',
    metaDescription: 'Шесть принципов STEPPS из книги Джоны Бергера о сарафанном радио: социальная валюта, триггеры, эмоции, публичность, польза и истории.',
    excerpt: 'Бергер годами изучал, почему одни вещи расходятся сами, а другие — нет, и вывел формулу STEPPS. Разбираю шесть принципов заразительности и как применить их к своему продукту или контенту.',
    tags: ['книга', 'сарафанное радио', 'вирусность', 'маркетинг'],
    relatedSlugs: ['made-to-stick-hiz-2027', 'setevoy-effekt-effekt-masshtaba-2026', 'pravilo-7-11-4-zapominaemost-brenda-2026'] }),
];
