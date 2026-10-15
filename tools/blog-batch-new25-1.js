// Одиночная статья: подписание договора по коду из SMS или в боте, простая электронная подпись (ПЭП).
// Для малого бизнеса: услуги, аренда, обучение, ремонт. Ведёт на автоматизацию документов.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-15';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_PEP = {
  title: 'Подписание договоров онлайн',
  services: [
    { icon: 'ph-fill ph-signature', label: 'Подписание по коду из SMS на сайте' },
    { icon: 'ph-fill ph-device-mobile', label: 'Кнопка «Подписать» в боте с подтверждённым номером' },
    { icon: 'ph-fill ph-file-text', label: 'Договор из шаблона и копия клиенту' },
    { icon: 'ph-fill ph-seal-check', label: 'Журнал подписаний с хешем для спора' },
  ],
  ctaLabel: 'Обсудить подписание договоров', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'podpisanie-dogovora-po-kodu-iz-sms-prostaya-elektronnaya-podpis-2026',
    category: 'legal',
    published: true,
    title: 'Простая электронная подпись договора: код из SMS и кнопка в боте',
    metaTitle: 'Простая электронная подпись договора по коду из SMS',
    metaDescription: 'Простая электронная подпись договора: когда подписание по смс коду имеет силу, какое соглашение нужно, где ПЭП не подходит и что хранить в журнале.',
    metaKeywords: 'простая электронная подпись договора, подписание договора по смс коду, ПЭП, подписание договора в боте, соглашение о простой электронной подписи, 63-ФЗ, электронное подписание договоров',
    excerpt: 'Договор с клиентом можно подписать кодом из SMS или кнопкой в боте, и он будет равнозначен бумажному. Разбираю, что для этого требуют 63-ФЗ и ГК, где ПЭП не подходит, что писать в журнал подписаний и как я собираю такую схему для малого бизнеса.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-signature',
    tags: ['ПЭП', 'электронная подпись', 'договоры', '63-ФЗ', 'автоматизация документов'],
    toc: toc(
      ['prostaya-elektronnaya-podpis-dogovora', 'Простая электронная подпись договора: зачем она малому бизнесу'],
      ['chto-govorit-zakon', 'Что говорит закон: 63-ФЗ и Гражданский кодекс'],
      ['gde-ne-podhodit', 'Где ПЭП не подходит'],
      ['skhema', 'Схема подписания по коду из SMS и в боте'],
      ['zhurnal', 'Журнал подписания: что сохранять для спора'],
      ['servisy', 'Готовый сервис или своя система'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['docuseal-podpisanie-dogovorov-na-servere-2026', 'dogovor-oferty-2026', 'elektronnaya-podpis-biznes-2026', 'soglasie-na-obrabotku-pd-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/business-automation/', label: 'Автоматизация договоров и документов' },
    servicesOffer: SVC_PEP,
    contentHtml: C('podpisanie-dogovora-po-kodu-iz-sms-prostaya-elektronnaya-podpis-2026'),
  },
];
