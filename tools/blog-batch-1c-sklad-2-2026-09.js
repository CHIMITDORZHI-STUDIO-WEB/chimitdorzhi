// 1С, продолжение: заказы оптовиков, склад, маркировка, себестоимость импорта,
// переход на УТ 11, расширения, права доступа и выбор между облаком и своим сервером.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-18';
const S = 'https://chimitdorzhi.tech';

const SVC_1C = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-barcode', label: 'Складской учёт и приложения для ТСД' },
  { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция 1С с сайтом, ботом и маркетплейсами' },
  { icon: 'ph-fill ph-robot', label: 'Боты для заказов в Telegram и MAX' },
  { icon: 'ph-fill ph-shield-check', label: 'Защита данных и доступов' },
]};

const CTA_SKLAD = { url: `${S}/services/logistics-automation/`, label: 'Обсудить автоматизацию склада' };
const CTA_INTEGR = { url: `${S}/predlozheniya/integraciya-sistem/`, label: 'Обсудить интеграцию с 1С' };
const CTA_BOT = { url: `${S}/predlozheniya/max-bot-zakazy-1c/`, label: 'Обсудить бота для заказов' };
const CTA_SEC = { url: `${S}/services/cybersecurity/`, label: 'Обсудить защиту данных' };
const CTA_INFRA = { url: `${S}/services/it-infrastructure/`, label: 'Обсудить сервер для 1С' };

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));

const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 5, category: 'development',
      servicesOffer: SVC_1C, ctaInternal: CTA_INTEGR, toc: tocFrom(html) },
    o, { contentHtml: html });
};

module.exports = [

  // ---------- Продажи и заказы ----------
  E({ slug: 'bot-dlya-optovyh-zakazov-iz-1c-2026', heroIcon: 'ph-fill ph-chat-circle-dots',
    ctaInternal: CTA_BOT,
    title: 'Бот для заказов оптовых клиентов прямо из 1С',
    metaTitle: 'Бот для оптовых заказов из 1С в Telegram и MAX',
    metaDescription: 'Клиент видит свой прайс и остатки в мессенджере, собирает заказ, и он сразу появляется в 1С. Как устроен бот, откуда берёт данные и когда лучше кабинет.',
    excerpt: 'Оптовики до сих пор принимают заказы по телефону, а менеджер перепечатывает их в 1С. Разбираю, как бот в мессенджере убирает этот шаг и с чего начать без большого проекта.',
    tags: ['1С', 'боты', 'опт', 'заказы'],
    relatedSlugs: ['b2b-portal-optoviki', 'http-servis-1c-dlya-prilozheniya-2026', 'torgovyy-predstavitel-zakazy-v-1c-s-telefona-2026'] }),

  E({ slug: 'torgovyy-predstavitel-zakazy-v-1c-s-telefona-2026', heroIcon: 'ph-fill ph-map-pin',
    title: 'Торговый представитель с телефоном: заказы в 1С прямо с точки клиента',
    metaTitle: 'Мобильная торговля: заказы торгового представителя в 1С',
    metaDescription: 'Представитель видит остатки, цены и долги клиента, оформляет заказ на месте — и склад видит его через минуты. Работа без связи, контроль и частые ошибки.',
    excerpt: 'Блокнот торгового представителя — это день задержки между заказом и складом. Показываю, что нужно в телефоне на выезде и почему работа без интернета обязательна.',
    tags: ['1С', 'мобильная торговля', 'опт', 'продажи'],
    relatedSlugs: ['bot-dlya-optovyh-zakazov-iz-1c-2026', 'http-servis-1c-dlya-prilozheniya-2026', 'ostatki-na-wb-ozon-ym-iz-odnoy-1c-2026'] }),

  // ---------- Склад ----------
  E({ slug: 'sborka-zakazov-s-tsd-bez-peresorta-2026', heroIcon: 'ph-fill ph-check-square',
    ctaInternal: CTA_SKLAD,
    title: 'Сборка заказов с ТСД: как перестать путать товар при отгрузке',
    metaTitle: 'Сборка заказов с ТСД: без пересорта и недовложений',
    metaDescription: 'Пересорт и недовложения — главные источники претензий оптовых клиентов. Как терминал сверяет каждую коробку с заказом и не даёт закрыть сборку с ошибкой.',
    excerpt: 'Ошибка сборки обнаруживается у клиента, когда уже поздно. Разбираю, как сборка с терминалом ловит пересорт на складе и с чего начать, чтобы было что сканировать.',
    tags: ['1С', 'ТСД', 'склад', 'отгрузка'],
    relatedSlugs: ['palletnyy-uchet-1c-ut-11-5-2026', 'pechat-etiketok-iz-1c-i-s-tsd-2026', 'svoe-prilozhenie-tsd-ili-gotovoe-reshenie-2026'] }),

  E({ slug: 'pechat-etiketok-iz-1c-i-s-tsd-2026', heroIcon: 'ph-fill ph-printer',
    ctaInternal: CTA_SKLAD,
    title: 'Печать этикеток из 1С и с ТСД: принтер, шаблон и штрихкод на паллету',
    metaTitle: 'Печать этикеток из 1С и с ТСД: принтер и шаблон',
    metaDescription: 'Термопечать или термотрансфер, печать с компьютера или прямо с терминала, обязательные поля и типичные поломки, из-за которых сканер не читает этикетку.',
    excerpt: 'Этикетки — мелочь, которая ломает весь складской процесс. Показываю, как выбрать способ печати, собрать шаблон и проверить этикетку до того, как она уйдёт в холодильник.',
    tags: ['1С', 'этикетки', 'ТСД', 'склад'],
    relatedSlugs: ['shtrihkod-gs1-128-na-korobke-2026', 'sborka-zakazov-s-tsd-bez-peresorta-2026', 'palletnyy-uchet-1c-ut-11-5-2026'] }),

  E({ slug: 'chestnyy-znak-u-optovika-s-tsd-2026', heroIcon: 'ph-fill ph-qr-code',
    ctaInternal: CTA_SKLAD,
    title: 'Честный знак у оптовика: приёмка и отгрузка маркированного товара с терминала',
    metaTitle: 'Честный знак для оптовика: приёмка и отгрузка с ТСД',
    metaDescription: 'Оптовик двигает коробки и паллеты, а не пачки. Агрегация, приёмка по электронному документу, отгрузка и расформирование коробки — и где чаще всего ошибаются.',
    excerpt: 'Про маркировку в рознице пишут много, а у оптового склада своя специфика. Разбираю, как работать с кодами коробок и паллет на терминале и не оставить коды «висеть».',
    tags: ['1С', 'маркировка', 'Честный знак', 'опт'],
    relatedSlugs: ['markirovka-ostatkov-na-sklade-2026', 'chestnyy-znak-podklyuchenie-poshagovo-2026', 'shtrihkod-gs1-128-na-korobke-2026'] }),

  // ---------- Учёт ----------
  E({ slug: 'sebestoimost-importa-v-1c-dostavka-poshliny-2026', heroIcon: 'ph-fill ph-calculator',
    title: 'Себестоимость импортного товара в 1С: как разнести доставку, пошлины и курс',
    metaTitle: 'Себестоимость импорта в 1С: доставка, пошлины и курс',
    metaDescription: 'Маржа по импорту завышена, если в себестоимости только цена поставщика. Из чего она реально складывается и как распределять доставку, пошлины и брокера.',
    excerpt: 'Импортёр видит прибыль, которой нет: доставка и пошлины лежат отдельно от товара. Показываю, как разнести расходы и почему выбор базы распределения меняет картину.',
    tags: ['1С', 'импорт', 'себестоимость', 'учёт'],
    relatedSlugs: ['partii-i-gtd-v-1c-importer-2026', 'marzha-i-nacenka-raznica-2026', 'dorabotka-integraciya-1c-2026'] }),

  // ---------- Сама 1С ----------
  E({ slug: 'perehod-s-ut-10-3-na-ut-11-2026', heroIcon: 'ph-fill ph-arrows-clockwise',
    title: 'Переход со старой УТ 10.3 на УТ 11: что перенесётся, а что придётся делать заново',
    metaTitle: 'Переход с УТ 10.3 на УТ 11: что перенесётся, а что нет',
    metaDescription: 'Справочники и остатки переносятся, доработки и старые отчёты — нет. Почему откладывать переход дорого, в каком порядке его делать и где чаще всего ошибаются.',
    excerpt: 'Многие годами сидят на УТ 10.3 и боятся переезда. Разбираю, что переносится само, где основная работа и как перейти без остановки бизнеса.',
    tags: ['1С', 'УТ 11', 'переход', 'миграция'],
    relatedSlugs: ['dorabotki-1c-cherez-rasshireniya-2026', 'migraciya-dannyh-slozhnee-chem-kazhetsya-2026', 'skolko-stoit-vnedrenie-1c-2026'] }),

  E({ slug: 'dorabotki-1c-cherez-rasshireniya-2026', heroIcon: 'ph-fill ph-puzzle-piece',
    title: 'Доработки через расширения: почему после них 1С обновляется без боли',
    metaTitle: 'Доработки 1С через расширения: обновления без боли',
    metaDescription: 'Доработка прямо в типовой конфигурации превращает каждое обновление в ручную работу. Что такое расширение, где его ограничения и как вернуть 1С на поддержку.',
    excerpt: 'Когда-то доработали типовую 1С напрямую — и теперь обновления откладываются годами. Показываю, чем расширения лучше, где у них предел и что требовать от подрядчика.',
    tags: ['1С', 'расширения', 'обновления', 'доработка'],
    relatedSlugs: ['perehod-s-ut-10-3-na-ut-11-2026', 'dorabotka-integraciya-1c-2026', 'tehnicheskiy-dolg-prostymi-slovami-2026'] }),

  E({ slug: 'prava-dostupa-v-1c-utechka-bazy-2026', category: 'security', heroIcon: 'ph-fill ph-lock-key',
    ctaInternal: CTA_SEC,
    title: 'Права доступа в 1С: кто что видит и как не слить базу клиентов изнутри',
    metaTitle: 'Права доступа в 1С: защита базы клиентов от утечки изнутри',
    metaDescription: 'База клиентов чаще уходит через сотрудника с полными правами, чем через взлом. Минимальные права, личные логины, журнал регистрации и аудит за один день.',
    excerpt: 'Общий логин и полные права «чтобы было проще» — прямой путь к утечке базы. Разбираю, кому что открыть в 1С, как найти следы выгрузки и что делать при увольнении.',
    tags: ['1С', 'безопасность', 'права доступа', 'утечки'],
    relatedSlugs: ['utechki-pd-24-chasa-2026', 'oborotnye-shtrafy-utechki-pd-2026', 'sotrudniki-glavnaya-dyra-v-bezopasnosti-2026'] }),

  E({ slug: '1c-v-oblake-ili-na-svoem-servere-2026', heroIcon: 'ph-fill ph-cloud',
    ctaInternal: CTA_INFRA,
    title: '1С в облаке или на своём сервере: что выбрать бизнесу',
    metaTitle: '1С в облаке или на своём сервере: что выбрать',
    metaDescription: 'Облако быстро и без админа, но с ограничениями на доработки и интеграции. Свой сервер — полный контроль и ответственность. Как выбрать под свою задачу.',
    excerpt: 'Вопрос встаёт, когда нужна работа из дома или старый сервер тормозит. Сравниваю облако и свой сервер по доступу, доработкам, копиям и данным и говорю, кому что подходит.',
    tags: ['1С', 'облако', 'сервер', 'инфраструктура'],
    relatedSlugs: ['rezervnoe-kopirovanie-1c-2026', 'uskorenie-1c-postgresql', 'http-servis-1c-dlya-prilozheniya-2026'] }),

];
