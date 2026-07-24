// Батч: Китай/ВЭД (экспертиза) + юр-документы сайта + ИИ-инструменты + магниты (11 статей ~4 мин, shortForm).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-22';
const SVC = 'https://chimitdorzhi.tech/services';

const SVC_CHINA = {
  title: 'Работа с Китаем и ВЭД под ключ',
  services: [
    { icon: 'ph-fill ph-package', label: 'Поиск и проверка поставщиков' },
    { icon: 'ph-fill ph-truck', label: 'Логистика и карго-доставка' },
    { icon: 'ph-fill ph-file-text', label: 'Помощь с документами и ВЭД' },
    { icon: 'ph-fill ph-car', label: 'Авто из Китая под заказ' },
    { icon: 'ph-fill ph-globe', label: 'Сайты и каталоги для торговли с Китаем' },
  ],
  ctaLabel: 'Обсудить закупку из Китая', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_LEGAL = {
  title: 'Документы и 152-ФЗ для сайта',
  services: [
    { icon: 'ph-fill ph-shield-check', label: 'Аудит сайта по 152-ФЗ — от 5 000 ₽' },
    { icon: 'ph-fill ph-file-text', label: 'Оферта, соглашение, политика ПД' },
    { icon: 'ph-fill ph-cookie', label: 'Cookie-баннер и согласия' },
    { icon: 'ph-fill ph-scales', label: 'Возвраты и правила магазина' },
  ],
  ctaLabel: 'Заказать аудит 152-ФЗ', ctaUrl: 'https://audit.chimitdorzhi.tech/',
};
const SVC_DEV = {
  title: 'Сайты и приём оплаты под ключ',
  services: [
    { icon: 'ph-fill ph-globe', label: 'Сайты и интернет-магазины' },
    { icon: 'ph-fill ph-credit-card', label: 'Приём оплаты: ЮKassa, СБП' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграции с CRM и 1С' },
    { icon: 'ph-fill ph-robot', label: 'Боты и автоматизация' },
  ],
  ctaLabel: 'Заказать разработку', ctaUrl: 'https://t.me/chimitdorzhi',
};
const SVC_AI = {
  title: 'ИИ-инструменты и автоматизация',
  services: [
    { icon: 'ph-fill ph-sparkle', label: 'Генерация контента и видео' },
    { icon: 'ph-fill ph-scan', label: 'Распознавание текста и документов' },
    { icon: 'ph-fill ph-robot', label: 'AI-агенты и боты' },
    { icon: 'ph-fill ph-chart-line', label: 'Автоматизация рутины' },
  ],
  ctaLabel: 'Обсудить ИИ-задачу', ctaUrl: 'https://t.me/chimitdorzhi',
};

const CTA_CHINA = { url: `${SVC}/china-it/`, label: 'Работа с Китаем' };
const CTA_LEGAL = { url: 'https://audit.chimitdorzhi.tech/', label: 'Аудит 152-ФЗ' };
const CTA_DEV = { url: `${SVC}/web-development/`, label: 'Разработка под ключ' };
const CTA_AI = { url: `${SVC}/ai-agents/`, label: 'ИИ под ключ' };

const T = (items) => items.concat([{ id: 'faq', text: 'FAQ' }, { id: 'vyvody', text: 'Коротко о главном' }]);

const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D,
  readingMinutes: 4, shortForm: true, servicesOffer: SVC_DEV, ctaInternal: CTA_DEV,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  // === Китай ===
  E({ slug: 'zakaz-s-1688-napryamuyu-2026', category: 'industries', heroIcon: 'ph-fill ph-package',
    servicesOffer: SVC_CHINA, ctaInternal: CTA_CHINA,
    title: '1688: как заказывать напрямую и через посредника',
    metaTitle: '1688: как заказывать напрямую из Китая',
    metaDescription: 'Как заказывать на 1688 напрямую из Китая: как устроена площадка, как найти поставщика, оплатить и получить товар через посредника-выкупщика, какие риски и как их снизить.',
    metaKeywords: '1688 как заказывать, заказ с 1688 напрямую, выкуп с 1688, посредник 1688, как купить на 1688 из россии',
    excerpt: 'Как устроена 1688, как заказать напрямую и через посредника-выкупщика, как оплатить, привезти и не нарваться на брак. На основе реального опыта закупок.',
    tags: ['Китай', '1688', 'закупки', 'ВЭД'],
    toc: T([{ id: 'chto-eto', text: 'Что такое 1688' }, { id: 'kak-zakazat', text: 'Как заказать напрямую' }, { id: 'posrednik', text: 'Через посредника и выкуп' }, { id: 'riski', text: 'Риски и проверка' }]),
    relatedSlugs: ['kargo-dostavka-iz-kitaya-2026', 'kak-platit-postavshchiku-v-kitay-2026', 'sayt-spec-tehnika-kitay-2027'] }),

  E({ slug: 'kargo-dostavka-iz-kitaya-2026', category: 'industries', heroIcon: 'ph-fill ph-truck',
    servicesOffer: SVC_CHINA, ctaInternal: CTA_CHINA,
    title: 'Карго-доставка из Китая: как работает и какие риски',
    metaTitle: 'Карго-доставка из Китая: как работает и риски',
    metaDescription: 'Карго-доставка из Китая простыми словами: как работает серая логистика, чем отличается от белого импорта, какие риски (потеря, задержка, конфискация) и когда что выбрать.',
    metaKeywords: 'карго доставка из китая, карго китай, доставка товаров из китая, серый импорт, доставка карго риски',
    excerpt: 'Как работает карго-доставка из Китая, чем отличается от белого импорта, какие риски несёт и когда выгоднее оформить всё официально.',
    tags: ['Китай', 'логистика', 'карго', 'ВЭД'],
    toc: T([{ id: 'chto-eto', text: 'Что такое карго' }, { id: 'kak-rabotaet', text: 'Как это работает' }, { id: 'riski', text: 'Риски карго' }, { id: 'belaya', text: 'Белый импорт как альтернатива' }]),
    relatedSlugs: ['tamozhennoe-oformlenie-importa-2026', 'zakaz-s-1688-napryamuyu-2026', 'kak-platit-postavshchiku-v-kitay-2026'] }),

  E({ slug: 'tamozhennoe-oformlenie-importa-2026', category: 'industries', heroIcon: 'ph-fill ph-stamp',
    servicesOffer: SVC_CHINA, ctaInternal: CTA_CHINA,
    title: 'Таможенное оформление импорта: пошагово в 2026',
    metaTitle: 'Таможенное оформление импорта: пошагово 2026',
    metaDescription: 'Таможенное оформление импорта из Китая пошагово: какие документы нужны, как считаются пошлины и НДС, что такое ТН ВЭД и когда стоит нанять таможенного брокера.',
    metaKeywords: 'таможенное оформление, растаможка товара, таможенное оформление импорта, тн вэд, таможенный брокер',
    excerpt: 'Как проходит растаможка импорта пошагово: документы, коды ТН ВЭД, пошлины и НДС, частые ошибки и когда выгоднее взять брокера.',
    tags: ['таможня', 'импорт', 'ВЭД', 'Китай'],
    toc: T([{ id: 'chto-eto', text: 'Что такое растаможка' }, { id: 'etapy', text: 'Этапы оформления' }, { id: 'poshliny', text: 'Пошлины и НДС' }, { id: 'oshibki', text: 'Ошибки и брокер' }]),
    relatedSlugs: ['kargo-dostavka-iz-kitaya-2026', 'zakaz-s-1688-napryamuyu-2026', 'kak-platit-postavshchiku-v-kitay-2026'] }),

  E({ slug: 'kak-platit-postavshchiku-v-kitay-2026', category: 'industries', heroIcon: 'ph-fill ph-currency-circle-dollar',
    servicesOffer: SVC_CHINA, ctaInternal: CTA_CHINA,
    title: 'Как платить поставщику в Китай в 2026: переводы и юани',
    metaTitle: 'Как платить поставщику в Китай: переводы, юани',
    metaDescription: 'Как оплатить поставщику в Китай в 2026: какие способы работают (платёжные агенты, юани, крипта у некоторых), комиссии и сроки, риски и как обезопасить сделку.',
    metaKeywords: 'как оплатить поставщику в китай, перевод денег в китай, оплата в юанях, платежный агент китай, оплата поставщику китай 2026',
    excerpt: 'Какие способы оплаты в Китай реально работают в 2026 (агенты, юани), сколько стоят комиссии, какие сроки и как не потерять деньги.',
    tags: ['Китай', 'платежи', 'юани', 'ВЭД'],
    toc: T([{ id: 'sposoby', text: 'Какие способы работают' }, { id: 'yuani', text: 'Оплата в юанях' }, { id: 'agenty', text: 'Платёжные агенты' }, { id: 'riski', text: 'Риски и комиссии' }]),
    relatedSlugs: ['zakaz-s-1688-napryamuyu-2026', 'kargo-dostavka-iz-kitaya-2026', 'tamozhennoe-oformlenie-importa-2026'] }),

  // === Юр-документы ===
  E({ slug: 'vozvrat-tovara-internet-magazin-2026', category: 'legal', heroIcon: 'ph-fill ph-arrow-u-up-left',
    servicesOffer: SVC_LEGAL, ctaInternal: CTA_DEV,
    title: 'Возврат товара в интернет-магазине: правила 2026',
    metaTitle: 'Возврат товара в интернет-магазине: правила',
    metaDescription: 'Возврат товара в интернет-магазине: какие сроки даёт закон (7 и 14 дней), что можно и нельзя вернуть, как оформить возврат на сайте и что важно учесть продавцу.',
    metaKeywords: 'возврат товара интернет-магазин, возврат товара сроки, как оформить возврат, отказ от товара, права покупателя возврат',
    excerpt: 'Какие сроки возврата даёт закон, что можно и нельзя вернуть, как оформить возврат на сайте и что учесть магазину, чтобы не нарушить закон.',
    tags: ['возврат', 'интернет-магазин', 'закон', 'e-commerce'],
    toc: T([{ id: 'pravila', text: 'Что говорит закон' }, { id: 'sroki', text: 'Сроки: 7 и 14 дней' }, { id: 'kak-oformit', text: 'Как оформить на сайте' }, { id: 'magazinu', text: 'Что учесть продавцу' }]),
    relatedSlugs: ['polzovatelskoe-soglashenie-obrazec-2026', 'skolko-stoit-internet-magazin-2026', 'dogovor-oferty-2026'] }),

  E({ slug: 'polzovatelskoe-soglashenie-obrazec-2026', category: 'legal', heroIcon: 'ph-fill ph-file-text',
    servicesOffer: SVC_LEGAL, ctaInternal: CTA_LEGAL,
    title: 'Пользовательское соглашение для сайта: образец 2026',
    metaTitle: 'Пользовательское соглашение: образец 2026',
    metaDescription: 'Пользовательское соглашение для сайта: когда оно нужно, чем отличается от оферты и политики ПД, что должно быть внутри и готовая структура-образец 2026.',
    metaKeywords: 'пользовательское соглашение образец, пользовательское соглашение для сайта, соглашение на сайте, user agreement образец',
    excerpt: 'Когда нужно пользовательское соглашение, чем оно отличается от оферты и политики ПД, что внутри и готовая структура-образец.',
    tags: ['документы', 'сайт', '152-ФЗ', 'образец'],
    toc: T([{ id: 'chto-eto', text: 'Что это и когда нужно' }, { id: 'chto-vnutri', text: 'Что внутри' }, { id: 'obrazec', text: 'Структура-образец' }, { id: 'svyaz', text: 'Связь с офертой и 152-ФЗ' }]),
    relatedSlugs: ['dogovor-oferty-2026', 'politika-obrabotki-pd-obrazec-2026', 'vozvrat-tovara-internet-magazin-2026'] }),

  E({ slug: 'priem-oplaty-na-sayt-yukassa-2026', category: 'development', heroIcon: 'ph-fill ph-credit-card',
    servicesOffer: SVC_DEV, ctaInternal: CTA_DEV,
    title: 'Приём оплаты на сайт: ЮKassa и альтернативы',
    metaTitle: 'Приём оплаты на сайт: ЮKassa и альтернативы',
    metaDescription: 'Как подключить приём оплаты на сайт: как работает ЮKassa, какие есть альтернативы (СБП, Т-Касса, ЮMoney), что нужно для подключения и как встроить оплату под ключ.',
    metaKeywords: 'подключить юkassa, прием оплаты на сайте, юкасса подключение, оплата на сайте картой, эквайринг для сайта',
    excerpt: 'Как работает ЮKassa, какие есть альтернативы (СБП, Т-Касса), что нужно для подключения и как встроить приём оплаты на сайт под ключ.',
    tags: ['оплата', 'ЮKassa', 'сайт', 'эквайринг'],
    toc: T([{ id: 'sposoby', text: 'Способы приёма оплаты' }, { id: 'yukassa', text: 'Как подключить ЮKassa' }, { id: 'alternativy', text: 'Альтернативы: СБП и другие' }, { id: 'na-sayt', text: 'Как встроить на сайт' }]),
    relatedSlugs: ['skolko-stoit-internet-magazin-2026', 'integraciya-api-na-zakaz-2026', 'vozvrat-tovara-internet-magazin-2026'] }),

  // === ИИ-инструменты ===
  E({ slug: 'neyroset-dlya-video-2026', category: 'ai-life', heroIcon: 'ph-fill ph-film-strip',
    servicesOffer: SVC_AI, ctaInternal: CTA_AI,
    title: 'Нейросеть для видео: чем создать ролик в 2026',
    metaTitle: 'Нейросеть для видео: чем создать ролик 2026',
    metaDescription: 'Нейросети для видео в 2026: что они умеют (генерация роликов, аватары, озвучка, монтаж), какие типы инструментов бывают, как выбрать под задачу и как это применить бизнесу.',
    metaKeywords: 'нейросеть для видео, нейросеть создать видео, ии для видео, генерация видео нейросетью, сделать видео нейросетью',
    excerpt: 'Что умеют нейросети для видео (генерация, аватары, озвучка, монтаж), какие типы инструментов есть, как выбрать под задачу и применить в бизнесе.',
    tags: ['нейросети', 'видео', 'ИИ', 'контент'],
    toc: T([{ id: 'chto-mogut', text: 'Что умеют нейросети для видео' }, { id: 'tipy', text: 'Какие бывают инструменты' }, { id: 'kak-vybrat', text: 'Как выбрать под задачу' }, { id: 'biznesu', text: 'Как применить бизнесу' }]),
    relatedSlugs: ['moneyprinterturbo-ai-video-2026', 'moss-tts-nano-sintez-rechi-2026', 'ocr-raspoznat-tekst-s-foto-2026'] }),

  E({ slug: 'ocr-raspoznat-tekst-s-foto-2026', category: 'ai-life', heroIcon: 'ph-fill ph-scan',
    servicesOffer: SVC_AI, ctaInternal: CTA_AI,
    title: 'OCR: как распознать текст с фото и скана',
    metaTitle: 'OCR: как распознать текст с фото и скана',
    metaDescription: 'OCR простыми словами: как распознать текст с фото, скана или PDF, чем это сделать, насколько точно работает с русским и рукописью и как автоматизировать ввод документов в бизнесе.',
    metaKeywords: 'ocr, распознать текст с фото, распознавание текста, текст из картинки, оцифровка документов',
    excerpt: 'Как распознать текст с фото, скана или PDF, чем это сделать, насколько точно работает с русским и как автоматизировать ввод документов.',
    tags: ['OCR', 'распознавание', 'ИИ', 'документы'],
    toc: T([{ id: 'chto-eto', text: 'Что такое OCR' }, { id: 'chem', text: 'Чем распознать' }, { id: 'tochnost', text: 'Точность и языки' }, { id: 'biznesu', text: 'Автоматизация документов' }]),
    relatedSlugs: ['neyroset-dlya-video-2026', 'whisperx-transkribaciya-rechi-2026', 'ai-pomoshchnik-buhgaltera-2026'] }),

  // === Магниты Тип B ===
  E({ slug: 'vypiska-iz-egryul-besplatno-2026', category: 'legal', heroIcon: 'ph-fill ph-file-magnifying-glass',
    servicesOffer: SVC_LEGAL, ctaInternal: CTA_DEV,
    title: 'Выписка из ЕГРЮЛ бесплатно: как получить за 5 минут',
    metaTitle: 'Выписка из ЕГРЮЛ бесплатно за 5 минут',
    metaDescription: 'Как получить выписку из ЕГРЮЛ или ЕГРИП бесплатно за пару минут: где заказать электронную выписку с подписью ФНС, чем она отличается от бумажной и зачем нужна для проверки контрагента.',
    metaKeywords: 'выписка из егрюл, выписка из егрюл бесплатно, получить выписку егрюл, егрип выписка, выписка егрюл с подписью фнс',
    excerpt: 'Где бесплатно получить электронную выписку из ЕГРЮЛ/ЕГРИП с подписью ФНС за пару минут, чем она отличается от бумажной и зачем нужна для проверки контрагента.',
    tags: ['ЕГРЮЛ', 'реестры', 'проверка', 'бизнес'],
    toc: T([{ id: 'chto-eto', text: 'Что такое выписка ЕГРЮЛ' }, { id: 'kak-poluchit', text: 'Как получить бесплатно' }, { id: 'vidy', text: 'Электронная vs бумажная' }, { id: 'zachem', text: 'Зачем нужна' }]),
    relatedSlugs: ['besplatnye-servisy-proverki-kontragenta-2026', 'proverka-kontragentov-due-diligence-2026', 'patent-ili-usn-dlya-ip-2026'] }),

  E({ slug: 'patent-ili-usn-dlya-ip-2026', category: 'finance', heroIcon: 'ph-fill ph-scales',
    servicesOffer: SVC_DEV, ctaInternal: CTA_DEV,
    title: 'Патент или УСН для ИП в 2026: что выбрать',
    metaTitle: 'Патент или УСН для ИП 2026: что выбрать',
    metaDescription: 'Патент (ПСН) или УСН для ИП в 2026: чем отличаются, кому что выгоднее, как прикинуть налог на своём обороте и можно ли совмещать. Простое сравнение без канцелярита.',
    metaKeywords: 'патент или усн, псн или усн для ип, что выбрать патент усн, налог ип 2026, патентная система налогообложения',
    excerpt: 'Чем отличаются патент (ПСН) и УСН, кому что выгоднее, как прикинуть налог на своём обороте и можно ли совмещать. Простыми словами.',
    tags: ['ИП', 'налоги', 'патент', 'УСН'],
    toc: T([{ id: 'raznica', text: 'В чём разница' }, { id: 'sravnenie', text: 'Сравнение ПСН и УСН' }, { id: 'komu-chto', text: 'Кому что выгоднее' }, { id: 'kak-vybrat', text: 'Как выбрать и совмещать' }]),
    relatedSlugs: ['onlayn-buhgalteriya-sravnenie-2026', 'vypiska-iz-egryul-besplatno-2026', 'ai-buhgalter-avtomatizaciya-rutiny-2026'] }),
];
