// Одиночная статья (new25, n=4): гарантия на разработку сайта и бота, что прописать в договоре.
// Для заказчиков разработки. Ведёт на разработку сайтов.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-15';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_GARANT = {
  title: 'Разработка с понятными условиями после сдачи',
  services: [
    { icon: 'ph-fill ph-code', label: 'Сайты и боты по ТЗ с приёмкой на стенде' },
    { icon: 'ph-fill ph-file-text', label: 'ТЗ и критерии ошибки до старта' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Поддержка после гарантии' },
    { icon: 'ph-fill ph-file-magnifying-glass', label: 'Аудит чужого кода и доступов' },
  ],
  ctaLabel: 'Обсудить проект', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'garantiya-na-razrabotku-sayta-i-bota-dogovor-2026',
    category: 'legal',
    published: true,
    title: 'Гарантия на разработку сайта и бота: что прописать в договоре',
    metaTitle: 'Гарантия на разработку сайта: что прописать в договоре',
    metaDescription: 'Гарантия на разработку сайта и бота по ГК РФ: срок и его начало, где граница ошибки и доработки, время реакции, чужие правки и шаблон пункта договора.',
    metaKeywords: 'гарантия на разработку сайта, гарантийный срок на программное обеспечение по договору, гарантия на разработку бота, гарантийный срок сайта, договор на разработку сайта гарантия, статья 724 ГК РФ',
    excerpt: 'Гарантийный срок на сайт или бота закон не назначает, его пишут в договоре. Разбираю, что говорит ГК РФ, где граница ошибки и доработки, какое время реакции записать, кто отвечает при чужом хостинге и чужих правках, и даю шаблон пункта.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-seal-check',
    tags: ['договор', 'гарантия', 'разработка сайтов', 'боты', 'право'],
    toc: toc(
      ['zakon', 'Гарантия на разработку сайта: что говорит закон'],
      ['oshibka-ili-dorabotka', 'Ошибка или доработка: где граница'],
      ['srok-i-reakciya', 'Срок гарантии и время реакции'],
      ['chuzhie-pravki', 'Чужой хостинг, чужие правки и доступы'],
      ['shablon', 'Шаблон пункта о гарантии'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['posle-garantii', 'Что после гарантии'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['dogovor-so-studiey-ili-frilanserom-na-razrabotku-etapy-priemka-prava-na-kod-2026', 'priemka-raboty-podryadchika-2026', 'kak-ne-stat-zalozhnikom-podryadchika-dostupy-repozitoriy-dokumentaciya-2026', 'tehpodderzhka-sayta-skolko-stoit-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/web-development/', label: 'Заказать сайт или бота с понятной гарантией' },
    servicesOffer: SVC_GARANT,
    contentHtml: C('garantiya-na-razrabotku-sayta-i-bota-dogovor-2026'),
  },
];
