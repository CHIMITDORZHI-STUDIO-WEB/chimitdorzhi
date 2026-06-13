// Кластер «МЛМ-бренды», фаза 2: средние бренды + сравнение.
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
const BRAND = toc(['chto-eto', 'Что это'], ['produkt', 'Продукт'], ['kak-ustroen-biznes', 'Как устроен бизнес'], ['komu-podhodit', 'Кому подходит'], ['plyusy-i-riski', 'Плюсы и риски'], ['kak-nachat', 'Как начать'], ['faq', 'FAQ'], ['vyvody', 'Коротко о главном']);
const E = (o) => Object.assign({
  category: 'marketing', published: true, datePublished: D, dateModified: D, readingMinutes: 11,
  servicesOffer: SVC_SET,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({
    slug: 'oriflame-obzor-2026',
    title: 'Орифлэйм (Oriflame): как устроен бизнес и реально ли заработать',
    metaTitle: 'Орифлэйм: честный обзор бизнеса 2026',
    metaDescription: 'Орифлэйм (Oriflame): что за компания, продукт и каталог, как устроен бизнес и доход, кому подходит, плюсы и риски, как начать осознанно. Нейтральный обзор без обещаний дохода и ярлыков.',
    metaKeywords: 'орифлэйм, oriflame, орифлейм бизнес, орифлэйм как заработать, орифлэйм каталог, отзывы',
    excerpt: 'Орифлэйм — международная компания с каталожной косметикой и сетевой моделью. Разбираю честно: продукт, как устроен бизнес и доход, кому подходит, плюсы и на что обратить внимание — без обещаний и ярлыков.',
    heroIcon: 'ph-fill ph-flower',
    tags: ['Орифлэйм', 'Oriflame', 'МЛМ', 'обзор', '2026'],
    toc: BRAND,
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/ai-kontent-setevik/', label: 'Выделиться своим контентом' },
    relatedSlugs: ['mlm-kompanii-buryatiya-zabaykalye-irkutsk-2026', 'oriflame-vs-sibirskoe-zdorovie-vs-faberlik-2026', 'avon-obzor-2026'],
  }),
  E({
    slug: 'avon-obzor-2026',
    title: 'Эйвон (Avon): как устроен бизнес и реально ли заработать',
    metaTitle: 'Эйвон (Avon): честный обзор бизнеса',
    metaDescription: 'Эйвон (Avon): что за компания, продукт и каталог, как устроен бизнес и доход, кому подходит, плюсы и риски, как начать. Нейтральный обзор без обещаний дохода и ярлыков.',
    metaKeywords: 'эйвон, avon, эйвон бизнес, эйвон как заработать, эйвон каталог, представитель эйвон, отзывы',
    excerpt: 'Эйвон — один из старейших игроков прямых продаж. Разбираю честно: продукт и каталог, как устроен бизнес и доход представителя, кому подходит и на что обратить внимание.',
    heroIcon: 'ph-fill ph-sparkle',
    tags: ['Эйвон', 'Avon', 'МЛМ', 'обзор', '2026'],
    toc: BRAND,
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/sayt-distributora/', label: 'Собрать страницу под заявки' },
    relatedSlugs: ['mlm-kompanii-buryatiya-zabaykalye-irkutsk-2026', 'oriflame-obzor-2026', 'istochniki-zayavok-dlya-setevika-2026'],
  }),
  E({
    slug: 'amway-obzor-2026',
    title: 'Амвэй (Amway): как устроен бизнес и реально ли заработать',
    metaTitle: 'Амвэй (Amway): честный обзор бизнеса',
    metaDescription: 'Амвэй (Amway): что за компания, продукт (товары для дома, питание Nutrilite, косметика), как устроен бизнес и доход, кому подходит, плюсы и риски, как начать. Нейтрально, без обещаний дохода.',
    metaKeywords: 'амвэй, amway, амвей бизнес, амвэй как заработать, nutrilite, amway отзывы',
    excerpt: 'Амвэй — одна из крупнейших мировых компаний прямых продаж. Разбираю честно: линейки продукта, как устроен бизнес и доход, кому подходит, плюсы и на что обратить внимание — без обещаний и ярлыков.',
    heroIcon: 'ph-fill ph-drop',
    tags: ['Амвэй', 'Amway', 'МЛМ', 'обзор', '2026'],
    toc: BRAND,
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/avtovoronka-rekrutinga/', label: 'Настроить поток партнёров' },
    relatedSlugs: ['mlm-kompanii-buryatiya-zabaykalye-irkutsk-2026', 'oriflame-vs-sibirskoe-zdorovie-vs-faberlik-2026', 'rekruting-mlm-cherez-internet-2026'],
  }),
  E({
    slug: 'nl-international-obzor-2026',
    title: 'NL International: как устроен бизнес и реально ли заработать',
    metaTitle: 'NL International: честный обзор бизнеса',
    metaDescription: 'NL International (родом из Новосибирска): что за компания, продукт (питание Energy Diet, косметика, быт), как устроен бизнес и доход, кому подходит, плюсы и риски, как начать. Нейтрально, без обещаний.',
    metaKeywords: 'nl international, нл интернешнл, energy diet, нл бизнес, nl как заработать, отзывы',
    excerpt: 'NL International — российская (новосибирская) компания, известная функциональным питанием Energy Diet и активным онлайн-продвижением. Разбираю честно: продукт, бизнес и доход, кому подходит и на что обратить внимание.',
    heroIcon: 'ph-fill ph-barbell',
    tags: ['NL International', 'Energy Diet', 'МЛМ', 'обзор', '2026'],
    toc: BRAND,
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/crm-setevika/', label: 'Навести порядок в базе' },
    relatedSlugs: ['mlm-kompanii-buryatiya-zabaykalye-irkutsk-2026', 'sibirskoe-zdorovie-obzor-2026', 'kontent-plan-dlya-setevika-30-dney-2026'],
  }),
  E({
    slug: 'oriflame-vs-sibirskoe-zdorovie-vs-faberlik-2026', readingMinutes: 10,
    title: 'Орифлэйм vs Сибирское здоровье vs Фаберлик: что выбрать в регионе',
    metaTitle: 'Орифлэйм vs Сибирское здоровье vs Фаберлик',
    metaDescription: 'Сравнение Орифлэйм, Сибирское здоровье и Фаберлик: чем отличаются продукт, бизнес-модель и каталог, кому что ближе и как выбрать компанию под себя. Нейтрально, без «лучшей» и без обещаний дохода.',
    metaKeywords: 'орифлэйм или сибирское здоровье, фаберлик или орифлэйм, сравнение сетевых компаний, что выбрать млм, сибирское здоровье vs фаберлик',
    excerpt: 'Орифлэйм, Сибирское здоровье и Фаберлик — три популярных выбора в регионе. Сравниваю нейтрально: продукт, бизнес-модель, аудитория, плюсы и минусы — и как выбрать под себя, не гоняясь за «лучшей».',
    heroIcon: 'ph-fill ph-scales',
    tags: ['сравнение', 'МЛМ', 'Орифлэйм', 'Сибирское здоровье', 'Фаберлик'],
    toc: toc(['kak-sravnivat', 'Как сравнивать'], ['produkt', 'Продукт'], ['biznes-model', 'Бизнес-модель'], ['komu-chto', 'Кому что'], ['kak-vybrat', 'Как выбрать'], ['faq', 'FAQ'], ['vyvody', 'Коротко о главном']),
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/sayt-distributora/', label: 'Сделать свой актив' },
    relatedSlugs: ['sibirskoe-zdorovie-obzor-2026', 'faberlik-obzor-2026', 'oriflame-obzor-2026'],
  }),
];
