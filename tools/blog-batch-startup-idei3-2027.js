// Батч 3 «зарубежный стартап, которого нет в России/Забайкалье».
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-02';

const SVC = {
  title: 'Что я делаю под ключ',
  services: [
    { icon: 'ph-fill ph-code', label: 'Сайты и веб-приложения' },
    { icon: 'ph-fill ph-robot', label: 'Боты в Telegram и MAX, ИИ-агенты' },
    { icon: 'ph-fill ph-flow-arrow', label: 'Автоматизация и интеграции' },
    { icon: 'ph-fill ph-storefront', label: 'Маркетплейсы и платформы' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Внедрение и поддержка' },
  ],
  ctaLabel: 'Обсудить ваш проект',
  ctaUrl: 'https://t.me/chimitdorzhi',
};
const PRED = { url: 'https://chimitdorzhi.tech/predlozheniya/', label: 'Обсудить ваш проект' };
const TOC = [
  { id: 'chto-eto', text: 'Что это за модель за рубежом' },
  { id: 'pochemu-net-v-rf', text: 'Почему такого нет у нас' },
  { id: 'kak-mogla-by-vyglyadet', text: 'Как это могло бы выглядеть здесь' },
  { id: 'chto-nuzhno-dlya-zapuska', text: 'Что нужно для запуска' },
  { id: 'riski-i-slozhnosti', text: 'Риски и сложности' },
  { id: 'faq', text: 'FAQ' },
  { id: 'vyvody', text: 'Коротко о главном' },
];

const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D, readingMinutes: 5,
  servicesOffer: SVC, ctaInternal: PRED, category: 'industries', toc: TOC,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'obmen-prisotrom-dom-pitomec-po-chlenstvu-2027', heroIcon: 'ph-fill ph-house-line',
    title: 'TrustedHousesitters по-русски: обмен присмотром за домом и питомцем по членству',
    metaTitle: 'TrustedHousesitters по-русски: обмен присмотром за домом и',
    metaDescription: 'Разбираю модель зарубежного сервиса TrustedHousesitters: платформа по подписке, где владельцы жилья с питомцами уезжают в отпуск, а проверенные путешественники бесплатно живут в их доме взамен на присмотр за питомцем. Почему такой модели обмена нет в России и что нужно для запуска.',
    excerpt: 'Уезжаете в отпуск — находите через платформу человека, который бесплатно поживёт в вашем доме и присмотрит за питомцем. За рубежом это целая индустрия обмена доверием. У нас такого нет. Разбираю модель TrustedHousesitters.',
    tags: ['стартап-идея', 'шеринг', 'путешествия', 'бизнес-модель'],
    relatedSlugs: ['telemedicina-dlya-zhivotnyh-2027', 'vygul-sobak-marketplace-2027', 'odolzhi-sosedskuyu-sobaku-2027'] }),

  E({ slug: 'personalnyy-shopper-dostavka-produktov-2027', heroIcon: 'ph-fill ph-shopping-cart',
    title: 'Instacart по-русски: личный шоппер закупает продукты в магазине и доставляет',
    metaTitle: 'Личный шоппер для покупок в магазине (аналог Instacart)',
    metaDescription: 'Разбираю модель зарубежного сервиса Instacart: не даркстор, а реальный шоппер, который сам ходит по полкам обычного супермаркета, выбирает товары по списку клиента и привозит заказ. Чем это отличается от доставки из тёмных складов и как выглядела бы такая модель в России.',
    excerpt: 'Не склад, а живой человек ходит по вашему любимому супермаркету и выбирает продукты как для себя. За рубежом это отдельная модель доставки. У нас чаще выбирают даркстор. Разбираю модель Instacart.',
    tags: ['стартап-идея', 'маркетплейс', 'доставка продуктов', 'бизнес-модель'],
    relatedSlugs: ['darkstory-momentalnaya-dostavka-2027', 'nabory-dlya-gotovki-s-receptom-2027', 'marketplace-vremennogo-personala-2027'] }),

  E({ slug: 'verifikaciya-gostey-kratkosrochnoy-arendy-2027', heroIcon: 'ph-fill ph-shield-check',
    title: 'Autohost и Superhog по-русски: верификация гостей краткосрочной аренды жилья',
    metaTitle: 'Autohost и Superhog по-русски: верификация гостей',
    metaDescription: 'Разбираю модель зарубежных сервисов Autohost и Superhog: B2B-платформа для владельцев квартир посуточной аренды, которая проверяет гостя перед заселением и оценивает риск вечеринок или ущерба имуществу. Как такой сервис мог бы работать для арендодателей в России.',
    excerpt: 'Перед заселением гостя посуточной квартиры за рубежом система сама оценивает риск — не сорвётся ли в вечеринку, не оставит ли ущерб. У нас арендодатель полагается только на интуицию. Разбираю модель Autohost/Superhog.',
    tags: ['стартап-идея', 'SaaS', 'недвижимость', 'бизнес-модель'],
    relatedSlugs: ['iot-platforma-dlya-arendodateley-2027', 'sputnikovyy-monitoring-selskogo-hozyaystva-2027', 'kto-mozhet-pokupat-cfa-kvaly-2027'] }),

  E({ slug: 'generator-yuridicheskih-dokumentov-onlayn-2027', heroIcon: 'ph-fill ph-file-text',
    title: 'Rocket Lawyer по-русски: генератор типовых юридических документов онлайн',
    metaTitle: 'Rocket Lawyer по-русски: генератор типовых юридических',
    metaDescription: 'Разбираю модель зарубежного сервиса Rocket Lawyer: онлайн-платформа, где по нескольким вопросам собирается типовой юридический документ — договор, соглашение, доверенность — без похода к юристу за простыми случаями. Как такой сервис мог бы работать в России и где его реальные границы. Образовательный материал, не юридическая консультация.',
    excerpt: 'Нужен типовой договор или соглашение — за рубежом можно собрать его онлайн за несколько минут по анкете. У нас за этим чаще идут к юристу даже за самым простым документом. Разбираю модель Rocket Lawyer и её честные границы.',
    tags: ['стартап-идея', 'SaaS', 'legal tech', 'бизнес-модель'],
    relatedSlugs: ['kak-sostavit-tz-2026', 'ai-dlya-yurista-dokumenty-2026', 'dostup-k-zarplate-do-dnya-vyplaty-2027'] }),

  E({ slug: 'iot-platforma-dlya-arendodateley-2027', heroIcon: 'ph-fill ph-buildings',
    title: 'SmartRent по-русски: IoT-платформа для арендодателей многоквартирных домов',
    metaTitle: 'IoT-платформа для арендодателей (аналог SmartRent)',
    metaDescription: 'Разбираю модель зарубежного сервиса SmartRent: единая платформа для управляющих компаний и арендодателей многоквартирных домов, которая объединяет умные замки, показания счётчиков и удалённый доступ гостей и мастеров в одном приложении. Как это могло бы работать для управляющих компаний в России.',
    excerpt: 'Управляющий домом за рубежом выдаёт временный электронный доступ мастеру или новому жильцу удалённо, в одно касание, и видит показания счётчиков в приложении. У нас это до сих пор бумажный журнал и физические ключи. Разбираю модель SmartRent.',
    tags: ['стартап-идея', 'IoT', 'proptech', 'бизнес-модель'],
    relatedSlugs: ['verifikaciya-gostey-kratkosrochnoy-arendy-2027', 'cifrovizaciya-snt-tszh-2026', 'darkstory-momentalnaya-dostavka-2027'] }),

  E({ slug: 'dostup-k-zarplate-do-dnya-vyplaty-2027', heroIcon: 'ph-fill ph-wallet',
    title: 'DailyPay и Even по-русски: доступ к уже заработанной зарплате до дня выплаты',
    metaTitle: 'DailyPay и Even по-русски: доступ к уже заработанной',
    metaDescription: 'Разбираю модель зарубежных сервисов DailyPay и Even: сотрудник может получить часть уже отработанной, но ещё не выплаченной зарплаты раньше официальной даты, без займов и процентов. Как такая модель могла бы работать в России. Образовательный материал, не финансовая консультация.',
    excerpt: 'Сотрудник уже отработал смены, но зарплата придёт только через две недели — за рубежом можно получить часть заработанного раньше через отдельный сервис. У нас в такой ситуации идут за займом под процент. Разбираю модель DailyPay/Even.',
    tags: ['стартап-идея', 'fintech', 'HR-tech', 'бизнес-модель'],
    relatedSlugs: ['generator-yuridicheskih-dokumentov-onlayn-2027', 'marketplace-vremennogo-personala-2027', '54-fz-dlya-platezhey-samozanyatyy-ip-ooo-2027'] }),
];
