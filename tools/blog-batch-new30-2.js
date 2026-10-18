// Одиночная статья (new30-2): независимая оценка качества (НОК) и сайт учреждения.
// Запросы: «НОК сайт учреждения», «независимая оценка качества условий требования к сайту», «открытость и доступность информации НОК».
// Опора: 392-ФЗ, приказ Минтруда № 344н, отраслевые перечни показателей (599, 114, 201н, 317н), bus.gov.ru, ПП № 102.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-18';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_NOK = {
  title: 'Сайт учреждения к независимой оценке',
  services: [
    { icon: 'ph-fill ph-list-checks', label: 'Ревизия сайта по отраслевому перечню показателей НОК' },
    { icon: 'ph-fill ph-chat-circle-dots', label: 'Рабочие каналы обратной связи и раздел вопросов' },
    { icon: 'ph-fill ph-eye', label: 'Версия для слабовидящих по постановлению № 102' },
    { icon: 'ph-fill ph-clipboard-text', label: 'План устранения недостатков по отчёту оператора' },
  ],
  ctaLabel: 'Обсудить подготовку к НОК', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'nezavisimaya-ocenka-kachestva-nok-sayt-uchrezhdeniya-2026',
    category: 'legal',
    published: true,
    title: 'НОК и сайт учреждения: за что снимают баллы и как их вернуть',
    metaTitle: 'НОК и сайт учреждения: требования и как вернуть баллы',
    metaDescription: 'Независимая оценка качества и сайт учреждения: что проверяют по открытости информации, способы обратной связи, версия для слабовидящих, как вернуть баллы.',
    metaKeywords: 'нок сайт учреждения, независимая оценка качества условий требования к сайту, открытость и доступность информации нок, независимая оценка качества школы сайт, нок учреждения культуры, дистанционные способы обратной связи нок, версия для слабовидящих нок',
    excerpt: 'Как сайт школы, детсада, дома культуры, музея, поликлиники или учреждения соцобслуживания влияет на баллы независимой оценки качества: перечень сведений, каналы обратной связи, версия для слабовидящих, результаты на bus.gov.ru и план доработки.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-seal-check',
    tags: ['НОК', 'бюджетные учреждения', 'открытость информации', 'доступность', '2026'],
    toc: toc(
      ['chto-takoe', 'Что такое НОК и кого оценивают'],
      ['kriterii', 'Пять критериев и где в них сайт'],
      ['otkrytost', 'Открытость информации: что смотрят на сайте'],
      ['obratnaya-svyaz', 'Дистанционные способы связи: самые дешёвые баллы'],
      ['invalidy', 'Доступность для инвалидов: версия для слабовидящих'],
      ['rezultaty', 'Где смотреть результаты НОК'],
      ['kak-vernut', 'Как вернуть баллы: план работ по сайту'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит подготовка сайта к НОК'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['sayt-dlya-slabovidyashchih-postanovlenie-102-chek-list-2026', 'trebovaniya-k-saytu-shkoly-2026', 'sayt-medicinskoy-kliniki-trebovaniya-zakona-2026', 'sayt-dlya-teatra-filarmonii-doma-kultury-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/culture-digitalization/', label: 'Цифровизация учреждений культуры' },
    servicesOffer: SVC_NOK,
    contentHtml: C('nezavisimaya-ocenka-kachestva-nok-sayt-uchrezhdeniya-2026'),
  },
];
