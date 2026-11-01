// Одиночная статья (new40-2): разведка чужой системы перед проектом, оценка объёма и риска за 1-3 дня.
// Серия «Разбор чужой системы». Запросы: «оценка чужой системы перед разработкой», «разведка перед проектом», «делать, чинить или переписать».
// Опора: кейсы razvedka-dannyh-avtoploshchadok-keys-2026, api-dannyh-avto-iz-kitaya-platforma-keys-2026, proverka-istorii-avto-iz-kitaya-po-vin-keys-2026; php.net/eol, RFC 9309.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-31';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC = {
  title: 'Разведка чужой системы перед проектом: отчёт и решение за 1-3 дня',
  services: [
    { icon: 'ph-fill ph-magnifying-glass', label: 'Объём, формат и обновление данных: измерения, а не допущения' },
    { icon: 'ph-fill ph-flask', label: 'Пробный разбор на узком срезе до подписания сметы' },
    { icon: 'ph-fill ph-question', label: 'Список неизвестных: что нельзя узнать без доступа' },
    { icon: 'ph-fill ph-scales', label: 'Решение: делать, чинить или переписать, со сроком и вилкой стоимости' },
  ],
  ctaLabel: 'Заказать разведку', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'razvedka-chuzhoy-sistemy-pered-proektom-2026',
    category: 'expert',
    published: true,
    title: 'Разведка чужой системы перед проектом: объём и риск за 1-3 дня',
    metaTitle: 'Разведка чужой системы перед проектом: объём и риск',
    metaDescription: 'Как оценить чужую систему до разработки за 1-3 дня: что смотреть и спросить, пробный разбор, отчёт и решение «делать, чинить или переписать», границы.',
    metaKeywords: 'разведка чужой системы, оценка системы перед разработкой, делать чинить или переписать, оценка объёма проекта, технический аудит перед проектом, пробный разбор, оценка рисков разработки',
    excerpt: 'Как за 1-3 дня оценить объём и риск проекта на чужой системе: что смотреть, что спросить у владельца, как устроен пробный разбор, что в отчёте и как выбрать между «делать, чинить, переписать». Честно про то, чего нельзя узнать без доступа.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-magnifying-glass',
    tags: ['разведка перед проектом', 'оценка рисков', 'технический аудит', 'чужая система', 'смета', 'интеграции'],
    toc: toc(
      ['zachem', 'Зачем нужна разведка до сметы'],
      ['chto-smotret', 'Что я смотрю за 1-3 дня'],
      ['chto-sprosit', 'Что я спрашиваю у владельца'],
      ['probnyy-razbor', 'Пробный разбор: небольшой срез вместо веры на слово'],
      ['granicy', 'Чего нельзя узнать без доступа'],
      ['mozhno', 'Что можно в разведке'],
      ['chego-ne-delayu', 'Чего я не делаю'],
      ['otchet', 'Отчёт и решение: делать, чинить или переписать'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит разведка'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['razvedka-dannyh-avtoploshchadok-keys-2026', 'api-dannyh-avto-iz-kitaya-platforma-keys-2026', 'proverka-istorii-avto-iz-kitaya-po-vin-keys-2026', 'chuzhoy-bot-ili-sayt-ne-rabotaet-audit-za-dva-chasa-2026', 'it-podryadchik-kak-vrach-diagnostika-2026', 'razobrat-sistemu-bez-dokumentacii-esli-razrabotchik-ushyol-2026', 'zabrat-dannye-iz-zakrytoy-sistemy-bez-eksporta-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/it-audit/', label: 'Технический аудит' },
    servicesOffer: SVC,
    contentHtml: C('razvedka-chuzhoy-sistemy-pered-proektom-2026'),
  },
];
