// Кластер «МЛМ-бренды»: хаб-обзор + 3 глубоких разбора (Сибирское здоровье, Фаберлик, Гринвей).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-06-13';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));
const SVC_SET = {
  title: 'Что я делаю для сетевиков',
  services: [
    { icon: 'ph-fill ph-magnet', label: 'Привлечение и автоворонки рекрутинга' },
    { icon: 'ph-fill ph-globe', label: 'Сайт и лендинг дистрибьютора' },
    { icon: 'ph-fill ph-robot', label: 'AI-контент: посты и рассылки' },
    { icon: 'ph-fill ph-address-book', label: 'CRM и база контактов' },
    { icon: 'ph-fill ph-game-controller', label: 'Геймификация и дашборд команды' },
  ],
};
const E = (o) => Object.assign({
  category: 'marketing', published: true, datePublished: D, dateModified: D, readingMinutes: 11,
  servicesOffer: SVC_SET,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({
    slug: 'mlm-kompanii-buryatiya-zabaykalye-irkutsk-2026', readingMinutes: 13,
    title: 'МЛМ-компании в Бурятии, Забайкалье и Иркутске: полный обзор 2026',
    metaTitle: 'МЛМ-компании в Бурятии и Иркутске: обзор',
    metaDescription: 'Полный обзор сетевых (МЛМ) компаний, работающих в Бурятии, Забайкалье и Иркутске: российские и сибирские, международные, прямые продажи. Как отличить МЛМ от пирамиды, как выбрать компанию. Нейтрально, без обещаний дохода.',
    metaKeywords: 'млм компании, сетевые компании список, млм бурятия иркутск, сетевой маркетинг компании, как выбрать сетевую компанию',
    excerpt: 'Какие сетевые компании работают в Бурятии, Забайкалье и Иркутске и чем отличаются: российские и сибирские, международные, прямые продажи. Разбираю, как отличить МЛМ от финансовой пирамиды и как выбрать компанию под себя — нейтрально, без обещаний дохода.',
    heroIcon: 'ph-fill ph-buildings',
    tags: ['МЛМ', 'сетевой маркетинг', 'обзор', 'Бурятия', '2026'],
    toc: toc(['pochemu-populyaren', 'Почему популярен в регионе'], ['kak-chitat-obzor', 'Как читать обзор'], ['rossiyskie-sibirskie', 'Российские и сибирские'], ['mezhdunarodnye', 'Международные'], ['pryamye-prodazhi', 'Прямые продажи и ниши'], ['mlm-ili-piramida', 'МЛМ или пирамида'], ['kak-vybrat', 'Как выбрать'], ['cifrovoy-ugol', 'Цифровой угол'], ['faq', 'FAQ'], ['vyvody', 'Коротко о главном']),
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/sayt-distributora/', label: 'Сделать свой актив сетевика' },
    relatedSlugs: ['sibirskoe-zdorovie-obzor-2026', 'faberlik-obzor-2026', 'greenway-obzor-2026'],
  }),
  E({
    slug: 'sibirskoe-zdorovie-obzor-2026',
    title: 'Сибирское здоровье: как устроен бизнес и реально ли заработать',
    metaTitle: 'Сибирское здоровье: честный обзор бизнеса',
    metaDescription: 'Сибирское здоровье (Siberian Wellness): что это, какой продукт (БАДы, питание, косметика), как устроен бизнес и доход, кому подходит, плюсы и риски, как начать осознанно. Нейтрально, без обещаний дохода.',
    metaKeywords: 'сибирское здоровье, siberian wellness, сибирское здоровье как заработать, сибирское здоровье бизнес, отзывы',
    excerpt: 'Сибирское здоровье — один из крупнейших российских игроков сетевого рынка. Разбираю честно: что за продукт, как устроен бизнес и доход, кому подходит, а кому нет, плюсы и на что обратить внимание — без обещаний и без ярлыков.',
    heroIcon: 'ph-fill ph-leaf',
    tags: ['Сибирское здоровье', 'МЛМ', 'обзор', 'сетевой маркетинг', '2026'],
    toc: toc(['chto-eto', 'Что это'], ['produkt', 'Продукт'], ['kak-ustroen-biznes', 'Как устроен бизнес'], ['komu-podhodit', 'Кому подходит'], ['plyusy-i-riski', 'Плюсы и риски'], ['kak-nachat', 'Как начать'], ['faq', 'FAQ'], ['vyvody', 'Коротко о главном']),
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/ai-kontent-setevik/', label: 'Выделиться своим контентом' },
    relatedSlugs: ['mlm-kompanii-buryatiya-zabaykalye-irkutsk-2026', 'faberlik-obzor-2026', 'zakonchilsya-spisok-znakomyh-setevoy-2026'],
  }),
  E({
    slug: 'faberlik-obzor-2026',
    title: 'Фаберлик 2026: как работает бизнес, каталог, личный кабинет',
    metaTitle: 'Фаберлик 2026: бизнес, каталог, кабинет',
    metaDescription: 'Фаберлик 2026: что за компания, продукт и каталог, как устроен бизнес и доход, личный кабинет и как начать, кому подходит, плюсы и риски. Честный обзор, без обещаний дохода и ярлыков.',
    metaKeywords: 'фаберлик, faberlic, фаберлик 2026, фаберлик каталог, фаберлик личный кабинет, фаберлик бизнес',
    excerpt: 'Фаберлик — российская компания прямых продаж с «кислородной» косметикой и каталожной моделью. Разбираю, как устроен бизнес и доход, что в личном кабинете и как начать, кому подходит и на что обратить внимание.',
    heroIcon: 'ph-fill ph-flask',
    tags: ['Фаберлик', 'МЛМ', 'обзор', 'косметика', '2026'],
    toc: toc(['chto-eto', 'Что это'], ['produkt', 'Продукт и каталог'], ['kak-ustroen-biznes', 'Как устроен бизнес'], ['lichnyy-kabinet', 'Личный кабинет'], ['komu-podhodit', 'Кому подходит'], ['plyusy-i-riski', 'Плюсы и риски'], ['faq', 'FAQ'], ['vyvody', 'Коротко о главном']),
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/avtovoronka-rekrutinga/', label: 'Настроить поток партнёров' },
    relatedSlugs: ['mlm-kompanii-buryatiya-zabaykalye-irkutsk-2026', 'sibirskoe-zdorovie-obzor-2026', 'rekruting-mlm-cherez-internet-2026'],
  }),
  E({
    slug: 'greenway-obzor-2026',
    title: 'Гринвей (Greenway): обзор продукта и бизнеса без розовых очков',
    metaTitle: 'Гринвей (Greenway): честный обзор',
    metaDescription: 'Гринвей (Greenway): что за компания, продукт (эко-товары, бытовая химия, фильтры), как устроен бизнес и доход, кому подходит, плюсы и риски, как начать. Честно, без розовых очков и без обещаний дохода.',
    metaKeywords: 'гринвей, greenway, гринвей обзор, гринвей бизнес, гринвей продукция, гринвей отзывы',
    excerpt: 'Гринвей — российская компания эко-товаров для дома с сетевой моделью. Разбираю без розовых очков: что за продукт, как устроен бизнес и доход, кому подходит, а кому нет, плюсы и на что обратить внимание.',
    heroIcon: 'ph-fill ph-recycle',
    tags: ['Гринвей', 'Greenway', 'МЛМ', 'обзор', '2026'],
    toc: toc(['chto-eto', 'Что это'], ['produkt', 'Продукт'], ['kak-ustroen-biznes', 'Как устроен бизнес'], ['komu-podhodit', 'Кому подходит'], ['plyusy-i-riski', 'Плюсы и риски'], ['kak-nachat', 'Как начать'], ['faq', 'FAQ'], ['vyvody', 'Коротко о главном']),
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/sayt-distributora/', label: 'Собрать страницу под заявки' },
    relatedSlugs: ['mlm-kompanii-buryatiya-zabaykalye-irkutsk-2026', 'sibirskoe-zdorovie-obzor-2026', 'istochniki-zayavok-dlya-setevika-2026'],
  }),
];
