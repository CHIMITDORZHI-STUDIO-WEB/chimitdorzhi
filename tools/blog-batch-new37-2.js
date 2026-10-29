// Одиночная статья (new37-2): обезличивание данных клиентов перед отправкой в нейросеть.
// Запросы: «обезличивание данных нейросеть», «персональные данные chatgpt бот», «трансграничная передача нейросеть 152-фз».
// Опора: кейсы ii-buhgalter-1s-stend-foruma-keys-2026, prilozhenie-rukovoditelya-komandy-telegram-max-keys-2026, sayt-kosmetologa-etap-1-keys-2026; ст. 3 (п. 1, 9, 11) и ст. 12 (ч. 3, 4, 5, 10, 11) 152-ФЗ по consultant.ru.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-29';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_MASK = {
  title: 'Обезличивание данных в ИИ-боте',
  services: [
    { icon: 'ph-fill ph-eye-slash', label: 'Метки вместо имён, телефонов и реквизитов до отправки в модель' },
    { icon: 'ph-fill ph-list-checks', label: 'Журнал «что ушло в нейросеть» и тест на утечки' },
    { icon: 'ph-fill ph-database', label: 'Локальная модель на вашем сервере' },
    { icon: 'ph-fill ph-shield-check', label: 'Аудит сайта и бота по 152-ФЗ' },
  ],
  ctaLabel: 'Проверить, что уходит в нейросеть', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'obezlichivanie-dannyh-pered-otpravkoy-v-neyroset-2026',
    category: 'ai-dev',
    published: true,
    title: 'Бот отправляет данные клиентов в нейросеть: как их обезличить',
    metaTitle: 'Обезличивание данных перед отправкой в нейросеть',
    metaDescription: 'Как обезличить данные клиентов до отправки в нейросеть: метки вместо имён, вырезание персданных, журнал, локальная модель и статья 12 152-ФЗ.',
    metaKeywords: 'обезличивание данных нейросеть, персональные данные в нейросети, ии бот 152-фз, трансграничная передача персональных данных нейросеть, маскирование персональных данных, локальная модель, журнал запросов к ии',
    excerpt: 'Если бот передаёт переписку во внешнюю нейросеть, туда уходят имена, телефоны и реквизиты. Как заменить их метками до отправки, вырезать персданные из свободного текста, вести журнал «что ушло в нейросеть», когда нужна локальная модель и что статья 12 152-ФЗ требует при трансграничной передаче. На примере трёх моих проектов.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 9,
    heroIcon: 'ph-fill ph-eye-slash',
    tags: ['ИИ', 'нейросети', '152-ФЗ', 'персональные данные', 'чат-боты'],
    toc: toc(
      ['chto-uhodit', 'Что именно ваш бот отправляет в нейросеть'],
      ['obezlichivanie-zakon', 'Что закон называет обезличиванием'],
      ['metki', 'Метки вместо имён и телефонов'],
      ['vyrezanie', 'Вырезание персданных из свободного текста'],
      ['lokalnaya-model', 'Локальная модель: когда данные вообще не выходят'],
      ['zhurnal', 'Журнал «что ушло в нейросеть»'],
      ['transgranichnaya', 'Трансграничная передача и статья 12 152-ФЗ'],
      ['chto-govorit-klientu', 'Что говорить клиенту'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит обезличивание и аудит бота'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['ii-buhgalter-1s-stend-foruma-keys-2026', 'prilozhenie-rukovoditelya-komandy-telegram-max-keys-2026', 'sayt-kosmetologa-etap-1-keys-2026', 'presidio-obezlichivanie-personalnyh-dannyh-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/rkn-audit/', label: 'Аудит по 152-ФЗ' },
    servicesOffer: SVC_MASK,
    contentHtml: C('obezlichivanie-dannyh-pered-otpravkoy-v-neyroset-2026'),
  },
];
