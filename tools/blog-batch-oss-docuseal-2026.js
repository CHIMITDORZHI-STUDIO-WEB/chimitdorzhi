// Тематические статьи 27.09.2026, open-source под ЦА: DocuSeal.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-27';
const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });
module.exports = [
  E({ slug: "docuseal-podpisanie-dogovorov-na-servere-2026", category: "opensource", heroIcon: "ph-fill ph-signature", ctaInternal: { url: "https://chimitdorzhi.tech/services/business-automation/", label: "Развернуть DocuSeal под ключ" },
    title: "DocuSeal: подписание договоров на своём сервере без бумаги",
    metaTitle: "DocuSeal: подписание договоров на своём сервере (аналог DocuSign)",
    metaDescription: "DocuSeal, открытый аналог DocuSign на вашем сервере: шаблоны договоров, поля, аудит, PDF. Честно про простую и квалифицированную подпись и 152-ФЗ.",
    excerpt: "DocuSeal, открытый сервис подписания документов на своём сервере: загрузили PDF, разметили поля, отправили ссылку, клиент подписал с телефона. Разбираю, что он умеет, почему self-host выгоднее облака и где простой электронной подписи по закону недостаточно.",
    tags: ["DocuSeal","электронная подпись","open source","документооборот"],
    toc: [
      { id: "bumaga-i-pochta", text: "Договор всё ещё едет курьером" },
      { id: "chto-takoe-docuseal", text: "Что такое DocuSeal и что он умеет" },
      { id: "svoy-server", text: "Почему на своём сервере, а не в облаке" },
      { id: "gde-ne-srabotaet", text: "Где это не сработает и что учесть честно" },
      { id: "chto-sdelat", text: "Что можно сделать уже сейчас" },
      { id: "faq", text: "Частые вопросы" },
      { id: "vyvody", text: "Коротко о главном" },
    ],
    relatedSlugs: ["documenso-elektronnaya-podpis-2026","opensign-elektronnaya-podpis-2026","elektronnaya-podpis-biznes-2026","mayan-edms-upravlenie-dokumentami-2026"] }),
];
