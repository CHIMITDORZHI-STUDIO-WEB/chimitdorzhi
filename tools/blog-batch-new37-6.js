// Одиночная статья (new37-6): себестоимость генерации ИИ в продукте и цена для клиента.
// Опора: кейсы ii-stilist-po-selfi-telegram-max-predlozhenie-keys-2026, uchet-dlya-buhfirmy-v-dubae-bot-pwa-keys-2026 (замер на 10 документах), карточка SpyGambl в cases-flagship.js;
// developers.openai.com/api/docs/guides/token-counting (выходные токены), core.telegram.org/bots/payments-stars (цифровые товары только за Stars). Цены провайдеров не приводятся.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-29';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_AI_PRICING = {
  title: 'Экономика ИИ-генерации в вашем продукте',
  services: [
    { icon: 'ph-fill ph-calculator', label: 'Замер себестоимости на 10 реальных примерах' },
    { icon: 'ph-fill ph-coins', label: 'Пакеты кредитов, наценка, комиссии каналов и налог' },
    { icon: 'ph-fill ph-shield-check', label: 'Лимиты от злоупотреблений и возврат кредитов при сбое' },
    { icon: 'ph-fill ph-robot', label: 'Каталог моделей с ценой закупки в админке' },
  ],
  ctaLabel: 'Посчитать экономику', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'sebestoimost-generacii-ii-v-produkte-i-cena-2026',
    category: 'ai-dev',
    published: true,
    title: 'Сколько стоит одна генерация ИИ в продукте и какую цену ставить',
    metaTitle: 'Себестоимость генерации ИИ в продукте и цена для клиента',
    metaDescription: 'Из чего складывается себестоимость генерации ИИ: токены, картинки, видео, документы. Замер на 10 примерах, запас на повторы, наценка, кредиты и лимиты.',
    metaKeywords: 'себестоимость генерации ии, сколько стоит генерация нейросети, цена генерации для клиента, кредиты за генерацию, монетизация ии продукта, стоимость токенов, наценка на ии',
    excerpt: 'Как посчитать, сколько стоит одна генерация ИИ в вашем продукте, и поставить цену клиенту: из чего складывается себестоимость, как замерить её на 10 реальных примерах, какой запас заложить на повторы, как собрать пакеты кредитов, лимиты и каталог моделей с ценой закупки.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-coins',
    tags: ['ИИ', 'токены', 'ценообразование', 'кредиты', 'нейросети', 'экономика продукта'],
    toc: toc(
      ['iz-chego', 'Из чего складывается себестоимость одной генерации'],
      ['zamer', 'Как замерить себестоимость на 10 реальных примерах'],
      ['zapas', 'Запас на повторы и ошибки'],
      ['nacenka', 'Наценка, пакеты и кредиты'],
      ['limity', 'Лимиты от злоупотреблений'],
      ['katalog-modeley', 'Каталог моделей с ценой закупки'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит встроить ИИ с оплатой в продукт'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['ii-stilist-po-selfi-telegram-max-predlozhenie-keys-2026', 'skolko-stoyat-tokeny-ii-agenta-2026', 'uchet-dlya-buhfirmy-v-dubae-bot-pwa-keys-2026', 'oplata-zvezdami-telegram-stars-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/ai-agents/', label: 'ИИ-агенты и сервисы под ключ' },
    servicesOffer: SVC_AI_PRICING,
    contentHtml: C('sebestoimost-generacii-ii-v-produkte-i-cena-2026'),
  },
];
