// Конверсионный батч под заявки: MAX-экспертиза (пустой рынок) + комплаенс + прогрев возражений.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-06-30';

// Услуги — общий блок «что делаю под ключ».
const SVC = {
  title: 'Что я делаю под ключ',
  services: [
    { icon: 'ph-fill ph-code', label: 'Сайты и веб-приложения' },
    { icon: 'ph-fill ph-robot', label: 'Боты в Telegram и MAX, ИИ-агенты' },
    { icon: 'ph-fill ph-flow-arrow', label: 'Автоматизация процессов' },
    { icon: 'ph-fill ph-shield-check', label: 'Безопасность и 152-ФЗ' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Внедрение и поддержка' },
  ],
  ctaLabel: 'Обсудить ваш проект',
  ctaUrl: 'https://t.me/chimitdorzhi',
};

const PRED = { url: 'https://chimitdorzhi.tech/predlozheniya/', label: 'Обсудить ваш проект' };
const TG = { url: 'https://chimitdorzhi.tech/services/telegram-bots/', label: 'Заказать бота под ключ' };
const SEC = { url: 'https://chimitdorzhi.tech/services/cybersecurity/', label: 'Закрыть риски по закону' };

const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D, readingMinutes: 9,
  servicesOffer: SVC,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'kak-sdelat-platezhnogo-bota-v-max-2027', category: 'development',
    heroIcon: 'ph-fill ph-robot', ctaInternal: PRED,
    title: 'Как сделать платёжного бота в MAX и не застрять на публикации',
    metaTitle: 'Платёжный бот в MAX: как сделать и опубликовать',
    metaDescription: 'Как сделать бота с приёмом оплаты в мессенджере MAX и пройти публикацию: что умеет бот и Mini App, как устроен приём платежей, какие требования к верификации юрлица и API, какие подводные камни на старте. Разбор от практика, который это уже собрал.',
    excerpt: 'Хотите бота с оплатой в MAX, но непонятно, как его собрать и, главное, опубликовать? Разбираю по шагам: что умеет MAX-бот, как устроен приём платежей и что нужно для верификации и выхода в прод.',
    tags: ['MAX', 'платёжный бот', 'Mini App', 'публикация'],
    toc: [
      { id: 'chto-takoe-max-bot', text: 'Что такое бот и Mini App в MAX' },
      { id: 'priem-oplaty', text: 'Как устроен приём оплаты' },
      { id: 'publikaciya-verifikaciya', text: 'Публикация и верификация юрлица' },
      { id: 'api-trebovaniya', text: 'Требования API и подводные камни' },
      { id: 'etapy', text: 'Этапы и сроки' },
      { id: 'faq', text: 'FAQ' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    relatedSlugs: ['referalnaya-mehanika-v-max-keys-2027', 'magazin-bot-max-2026', 'max-mini-apps-2026'] }),

  E({ slug: 'referalnaya-mehanika-v-max-keys-2027', category: 'development',
    heroIcon: 'ph-fill ph-share-network', ctaInternal: PRED,
    title: 'Реферальная механика в MAX: deep links, проверка подписки и антифрод (разбор кейса)',
    metaTitle: 'Реферальная механика в MAX: как устроена',
    metaDescription: 'Как устроена реферальная кампания «приведи друга» в мессенджере MAX: deep links с payload, отслеживание приглашений, проверка подписки на канал, защита от накруток и антифрод. Разбор на реальном кейсе и что нужно, чтобы запустить такую механику под ключ.',
    excerpt: 'Хотите вирусную механику «приведи друга» в MAX, но боитесь накруток? Разбираю на реальном кейсе, как работают deep links, проверка подписки и антифрод — и что нужно, чтобы это не превратилось в раздачу призов ботам.',
    tags: ['MAX', 'реферальная программа', 'антифрод', 'кейс'],
    toc: [
      { id: 'zachem-referalka', text: 'Зачем бизнесу реферальная механика' },
      { id: 'deep-links', text: 'Deep links и отслеживание приглашений' },
      { id: 'proverka-podpiski', text: 'Проверка подписки и условия' },
      { id: 'antifrod', text: 'Антифрод: защита от накруток' },
      { id: 'keys', text: 'Как это выглядит на практике' },
      { id: 'faq', text: 'FAQ' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    relatedSlugs: ['kak-sdelat-platezhnogo-bota-v-max-2027', 'konkurs-priglasheniy-max-virusnyy-rost-2027', 'magazin-bot-max-2026'] }),

  E({ slug: '54-fz-dlya-platezhey-samozanyatyy-ip-ooo-2027', category: 'finance',
    heroIcon: 'ph-fill ph-receipt', ctaInternal: PRED,
    title: '54-ФЗ для приёма оплаты: что нужно самозанятому, ИП и ООО',
    metaTitle: '54-ФЗ: приём оплаты для самозанятого, ИП, ООО',
    metaDescription: '54-ФЗ при приёме онлайн-оплаты: когда нужна онлайн-касса, чем отличаются сценарии для самозанятого, ИП и ООО, как это связано с эквайрингом и оплатой в боте или на сайте. Образовательный разбор, что учесть, чтобы не получить штраф. Не является юридической консультацией.',
    excerpt: 'Запускаете приём оплаты в боте или на сайте и боитесь штрафов по 54-ФЗ? Разбираю простыми словами, когда нужна касса и чем отличаются сценарии для самозанятого, ИП и ООО. Образовательный материал, не юридическая консультация.',
    tags: ['54-ФЗ', 'онлайн-касса', 'приём платежей', 'самозанятый'],
    toc: [
      { id: 'chto-takoe-54fz', text: 'Что такое 54-ФЗ простыми словами' },
      { id: 'samozanyatyy', text: 'Сценарий для самозанятого' },
      { id: 'ip', text: 'Сценарий для ИП' },
      { id: 'ooo', text: 'Сценарий для ООО' },
      { id: 'onlayn-platezhi', text: 'Оплата в боте и на сайте' },
      { id: 'faq', text: 'FAQ' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    relatedSlugs: ['priem-platezhey-sbp-sayt', 'finteh-i-platezhi-dlya-biznesa-2027', 'kak-sdelat-platezhnogo-bota-v-max-2027'] }),

  E({ slug: 'fiksirovannaya-cena-vs-pochasovka-2027', category: 'expert',
    heroIcon: 'ph-fill ph-scales', ctaInternal: PRED,
    title: 'Фиксированная цена или почасовка: как платить за разработку и не переплатить',
    metaTitle: 'Фиксированная цена vs почасовка в разработке',
    metaDescription: 'Фиксированная цена, почасовая оплата или поэтапная оплата за разработку сайта, бота или автоматизации: чем модели отличаются, где риски для заказчика, как считать и какую выбрать под свою задачу. Разбор от практика, чтобы не переплатить и не остаться с недоделкой.',
    excerpt: 'Боитесь, что разработка «уплывёт» по бюджету или вас разведут на почасовке? Разбираю три модели оплаты — фикс, почасовка, поэтапно — где риски заказчика и как выбрать свою, чтобы не переплатить.',
    tags: ['стоимость разработки', 'оплата', 'фиксированная цена', 'заказчику'],
    toc: [
      { id: 'dve-modeli', text: 'Три модели оплаты' },
      { id: 'fiksirovannaya', text: 'Фиксированная цена' },
      { id: 'pochasovka', text: 'Почасовая оплата' },
      { id: 'etapnaya-oplata', text: 'Поэтапная оплата' },
      { id: 'kak-vybrat', text: 'Как выбрать под свою задачу' },
      { id: 'faq', text: 'FAQ' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    relatedSlugs: ['kak-vybrat-it-podryadchika-2027', 'skolko-stoit-sayt-2026', 'it-soprovozhdenie-biznesa-2027'] }),
];
