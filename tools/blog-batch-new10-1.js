// Одиночная статья: сайт и онлайн-продажи для бизнеса в ОАЭ (языки, PDPL, домен .ae, оплата, НДС).
// Факты сверены с первоисточниками 10.10.2026, юридических гарантий нет. Ведёт на разработку сайтов.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-10';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_OAE = {
  title: 'Сайт для компании в ОАЭ под ключ',
  services: [
    { icon: 'ph-fill ph-translate', label: 'Сайт на двух и более языках' },
    { icon: 'ph-fill ph-shield-check', label: 'Политика и согласие по закону ОАЭ' },
    { icon: 'ph-fill ph-credit-card', label: 'Подключение платёжного шлюза' },
    { icon: 'ph-fill ph-globe', label: 'Домен .ae и почта на компанию' },
  ],
  ctaLabel: 'Обсудить сайт в ОАЭ', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'sayt-dlya-biznesa-v-oae-yazyki-oplata-domen-zakon-2026',
    category: 'development',
    published: true,
    title: 'Сайт для бизнеса в ОАЭ: два языка, оплата, домен .ae и закон',
    metaTitle: 'Сайт для бизнеса в ОАЭ: языки, оплата, домен и закон',
    metaDescription: 'Сайт для бизнеса в ОАЭ: какие языки нужны, что требует закон о персональных данных, как получить домен .ae, принимать оплату и когда платить НДС 5%.',
    metaKeywords: 'сайт для бизнеса в оаэ, сайт для компании в дубае, открыть интернет-магазин в оаэ, домен .ae, приём оплаты в оаэ, закон о персональных данных оаэ, НДС в ОАЭ',
    excerpt: 'Компания открыта во freezone, пора запускать сайт и продажи. Разбираю, что меняется в ОАЭ: языки и арабский, закон о персональных данных, домен .ae, платёжный шлюз и НДС 5%. С личным опытом и ссылками на первоисточники.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-buildings',
    tags: ['ОАЭ', 'сайт под ключ', 'интернет-магазин', 'мультиязычность', 'персональные данные'],
    toc: toc(
      ['chto-nuzhno', 'Сайт для бизнеса в ОАЭ: что в нём должно быть'],
      ['yazyki', 'Какие языки нужны: английский, русский, арабский'],
      ['personalnye-dannye', 'Закон о персональных данных: политика и согласие'],
      ['domen', 'Домен .ae: кто может зарегистрировать'],
      ['oplata', 'Приём оплаты: шлюз, карты, Apple Pay'],
      ['nds', 'НДС 5% и онлайн-продажи'],
      ['kak-ya-delayu', 'Как я делаю сайт под ОАЭ'],
      ['skolko-stoit', 'Сколько стоит сайт для компании в ОАЭ'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['korporativnyy-sayt-kompanii-oae-keys-2026', 'sayt-i-prilozhenie-na-neskolkih-yazykah-chto-perevodit-seo-2026', 'kak-prinimat-oplatu-na-sayte-ekvayring-2026', 'skolko-stoit-internet-magazin-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/web-development/', label: 'Обсудить сайт для компании в ОАЭ' },
    servicesOffer: SVC_OAE,
    contentHtml: C('sayt-dlya-biznesa-v-oae-yazyki-oplata-domen-zakon-2026'),
  },
];
