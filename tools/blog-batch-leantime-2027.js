// Одиночная статья-обзор: Leantime + бесплатные системы управления проектами.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-06-30';

const SVC = {
  title: 'Что я делаю под ключ',
  services: [
    { icon: 'ph-fill ph-code', label: 'Сайты и веб-приложения' },
    { icon: 'ph-fill ph-robot', label: 'Боты в Telegram и MAX, ИИ-агенты' },
    { icon: 'ph-fill ph-flow-arrow', label: 'Автоматизация и интеграции' },
    { icon: 'ph-fill ph-hard-drives', label: 'Разворачивание open-source на вашем сервере' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Внедрение и поддержка' },
  ],
  ctaLabel: 'Обсудить ваш проект',
  ctaUrl: 'https://t.me/chimitdorzhi',
};
const PRED = { url: 'https://chimitdorzhi.tech/predlozheniya/', label: 'Развернуть и настроить под ключ' };

module.exports = [
  Object.assign({
    published: true, datePublished: D, dateModified: D, readingMinutes: 8,
    servicesOffer: SVC, ctaInternal: PRED, category: 'opensource',
    slug: 'leantime-besplatnaya-sistema-upravleniya-proektami-2027',
    heroIcon: 'ph-fill ph-kanban',
    title: 'Leantime и бесплатные системы управления проектами: обзор для тех, кто не проджект-менеджер',
    metaTitle: 'Leantime и бесплатные системы управления проектами',
    metaDescription: 'Обзор Leantime — бесплатной self-hosted системы управления проектами (Гант, канбан, календарь, списки), заточенной под людей без опыта в проджект-менеджменте и под особенности восприятия при СДВГ, дислексии и аутизме. Плюс бесплатные open-source альтернативы Jira, Trello и Notion и как выбрать своё.',
    excerpt: 'Нужна система управления проектами, но Jira пугает, а подписки надоели? Разбираю Leantime — бесплатную self-hosted систему для тех, кто не проджект-менеджер, и заодно другие open-source альтернативы Jira, Trello и Notion.',
    tags: ['Leantime', 'управление проектами', 'open-source', 'self-hosted'],
    toc: [
      { id: 'chto-takoe-leantime', text: 'Что такое Leantime' },
      { id: 'vozmozhnosti', text: 'Возможности: Гант, канбан, календарь' },
      { id: 'dlya-neproekt', text: 'Для тех, кто не проджект-менеджер' },
      { id: 'besplatnye-alternativy', text: 'Бесплатные альтернативы Jira, Trello, Notion' },
      { id: 'self-hosted', text: 'Self-hosted или облако: что выбрать' },
      { id: 'komu-podhodit', text: 'Кому что подходит' },
      { id: 'faq', text: 'FAQ' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    relatedSlugs: ['svoy-vps-dlya-razrabotchika-2026', 'iz-excel-v-crm-za-mesyac-2027', 'crm-dlya-malogo-biznesa-2026'],
  }, { contentHtml: C('leantime-besplatnaya-sistema-upravleniya-proektami-2027') }),
];
