// Батч 5 «зарубежный стартап, которого нет в России/Забайкалье» — кафе/доставка.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-03';

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
  E({ slug: 'belyy-leybl-onlayn-zakaza-dlya-kafe-2027', heroIcon: 'ph-fill ph-storefront',
    title: 'ChowNow по-русски: свой онлайн-заказ для кафе без высокой комиссии агрегаторов',
    metaTitle: 'Свой онлайн-заказ для кафе без комиссии (аналог ChowNow)',
    metaDescription: 'Разбираю модель зарубежного сервиса ChowNow: белый лейбл онлайн-заказа, который кафе подключает на свой сайт и в приложение, чтобы принимать заказы напрямую и не отдавать большую комиссию агрегаторам доставки. Как такое решение могло бы работать для независимых кафе в России.',
    excerpt: 'Агрегаторы доставки забирают большую комиссию с каждого заказа кафе. За рубежом есть альтернатива — свой сайт для онлайн-заказа под брендом заведения. У нас это редкость. Разбираю модель ChowNow и что нужно для запуска.',
    tags: ['стартап-идея', 'SaaS', 'общепит', 'бизнес-модель'],
    relatedSlugs: ['pos-sistema-dlya-restorana-pod-klyuch-2027', 'qr-zakaz-i-oplata-scheta-za-stolom-2027', 'svoya-kurerskaya-sluzhba-restorana-2027'] }),

  E({ slug: 'besplatnaya-razdacha-lishney-edy-sosedyam-2027', heroIcon: 'ph-fill ph-hand-heart',
    title: 'Olio по-русски: сосед соседу бесплатно отдаёт лишнюю еду',
    metaTitle: 'Платформа бесплатной раздачи лишней еды (аналог Olio)',
    metaDescription: 'Разбираю модель зарубежного приложения Olio: соседи бесплатно отдают друг другу лишнюю или скоропортящуюся еду вместо выбрасывания, а кафе и магазины могут отдавать остатки после закрытия. Почему в России эта идея живёт разрозненно и как выглядело бы отдельное приложение под эту задачу.',
    excerpt: 'Осталась лишняя еда после готовки или закупки — за рубежом её отдают соседям бесплатно через приложение вместо мусорного ведра. У нас формата почти нет. Разбираю модель Olio и её потенциал для района и малого общепита.',
    tags: ['стартап-идея', 'экология', 'локальное сообщество', 'бизнес-модель'],
    relatedSlugs: ['besplatnyy-obmen-veshchami-rayon-2027', 'podpiska-na-produkty-ot-fermerov-2027', 'socset-dlya-sosedey-rayona-2027'] }),

  E({ slug: 'podpiska-na-produkty-ot-fermerov-2027', heroIcon: 'ph-fill ph-carrot',
    title: 'Farmstead по-русски: подписка на продукты напрямую от фермеров',
    metaTitle: 'Подписка на продукты от фермеров (аналог Farmstead)',
    metaDescription: 'Разбираю модель зарубежного сервиса Farmstead: подписка на регулярную доставку свежих продуктов напрямую от местных фермеров, минуя перекупщиков и крупные сети. Как такая платформа могла бы работать для фермерских хозяйств Забайкалья и Бурятии и городских покупателей.',
    excerpt: 'Свежие продукты напрямую от фермера с доставкой на дом по подписке — за рубежом это отдельная ниша, минующая перекупщиков. У нас фермер и покупатель редко встречаются напрямую. Разбираю модель Farmstead для местного рынка.',
    tags: ['стартап-идея', 'подписка', 'фермерские продукты', 'бизнес-модель'],
    relatedSlugs: ['besplatnaya-razdacha-lishney-edy-sosedyam-2027', 'it-dlya-fermerov-zabaykalya-buryatii-2026', 'nabory-dlya-gotovki-s-receptom-2027'] }),

  E({ slug: 'qr-zakaz-i-oplata-scheta-za-stolom-2027', heroIcon: 'ph-fill ph-qr-code',
    title: 'Bbot по-русски: QR-заказ и оплата счёта прямо за столом',
    metaTitle: 'QR-заказ и оплата счёта за столом (аналог Bbot)',
    metaDescription: 'Разбираю модель зарубежного сервиса Bbot: гость сканирует QR-код за столом, заказывает и оплачивает счёт сам через телефон, без ожидания официанта. Как такая система могла бы работать в кафе и ресторанах и что технически нужно для запуска.',
    excerpt: 'Отсканировал QR за столом, заказал, оплатил — и не ждёшь официанта ни на одном из этих шагов. За рубежом это готовая система. У нас QR-меню часто останавливается на просмотре без заказа и оплаты. Разбираю модель Bbot.',
    tags: ['стартап-идея', 'SaaS', 'общепит', 'бизнес-модель'],
    relatedSlugs: ['belyy-leybl-onlayn-zakaza-dlya-kafe-2027', 'pos-sistema-dlya-restorana-pod-klyuch-2027', 'uchet-sebestoimosti-blyud-i-zakupok-2027'] }),

  E({ slug: 'svoya-kurerskaya-sluzhba-restorana-2027', heroIcon: 'ph-fill ph-bicycle',
    title: 'Homer Logistics по-русски: своя курьерская служба под брендом ресторана',
    metaTitle: 'Своя курьерская служба для ресторана (аналог Homer Logistics)',
    metaDescription: 'Разбираю модель зарубежного сервиса Homer Logistics: курьерская служба, которая доставляет заказы под брендом самого ресторана, а не под лейблом агрегатора, сохраняя контакт с клиентом и снижая комиссию. Как такая инфраструктура доставки могла бы работать для сетей кафе в России.',
    excerpt: 'Заказ доставляет курьер в форме агрегатора, а не ресторана — клиент забывает, у кого заказывал. За рубежом есть служба доставки под брендом самого заведения. У нас такой инфраструктуры почти нет. Разбираю модель Homer Logistics.',
    tags: ['стартап-идея', 'логистика', 'общепит', 'бизнес-модель'],
    relatedSlugs: ['belyy-leybl-onlayn-zakaza-dlya-kafe-2027', 'darkstory-momentalnaya-dostavka-2027', 'marketplace-vremennogo-personala-2027'] }),

  E({ slug: 'uchet-sebestoimosti-blyud-i-zakupok-2027', heroIcon: 'ph-fill ph-calculator',
    title: 'MarketMan по-русски: учёт себестоимости блюд и управление закупками ресторана',
    metaTitle: 'Учёт себестоимости блюд и закупок (аналог MarketMan)',
    metaDescription: 'Разбираю модель зарубежного сервиса MarketMan: SaaS для ресторанов, который автоматически считает себестоимость каждого блюда по рецепту и текущим ценам поставщиков, отслеживает остатки и подсказывает, когда пора заказывать продукты. Как такая система помогает не терять маржу и что нужно для запуска в России.',
    excerpt: 'Кафе часто не знает точную себестоимость каждого блюда и теряет маржу на скачках цен поставщиков. За рубежом это решает отдельный SaaS с автоматическим расчётом. У нас чаще Excel вручную. Разбираю модель MarketMan.',
    tags: ['стартап-идея', 'SaaS', 'общепит', 'бизнес-модель'],
    relatedSlugs: ['pos-sistema-dlya-restorana-pod-klyuch-2027', 'qr-zakaz-i-oplata-scheta-za-stolom-2027', 'iz-excel-v-crm-za-mesyac-2027'] }),
];
