// Одиночная статья: Вебвизор Яндекс Метрики и персональные данные (152-ФЗ).
// Что записывает Вебвизор, как закрыть поля, что говорит закон. Ведёт на аудит сайта по 152-ФЗ.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-14';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_VEBVIZOR = {
  title: 'Метрика и Вебвизор по закону',
  services: [
    { icon: 'ph-fill ph-file-magnifying-glass', label: 'Проверка записей Вебвизора и запуска счётчиков' },
    { icon: 'ph-fill ph-eye-slash', label: 'Закрытие полей, оплаты и кабинета от записи' },
    { icon: 'ph-fill ph-cookie', label: 'Баннер и запуск Метрики после согласия' },
    { icon: 'ph-fill ph-scales', label: 'Политика, согласия и срок хранения данных' },
  ],
  ctaLabel: 'Проверить мой сайт', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'vebvizor-yandeks-metrika-chto-zapisyvat-po-zakonu-2026',
    category: 'legal',
    published: true,
    title: 'Вебвизор и персональные данные: что можно записывать по закону',
    metaTitle: 'Вебвизор и персональные данные: что записывать по закону',
    metaDescription: 'Вебвизор Яндекс Метрики и 152-ФЗ: что он записывает, как скрыть поля и оплату классами, нужно ли согласие, срок хранения и чек-лист настроек для сайта.',
    metaKeywords: 'вебвизор персональные данные, яндекс метрика 152-фз, вебвизор согласие посетителя, ym-disable-keys, ym-hide-content, вебвизор запись форм, срок хранения вебвизор, штраф за яндекс метрику, аналитика на сайте по закону',
    excerpt: 'Вебвизор записывает визит как видео, и в запись могут попасть имя, телефон и адрес из формы. Разбираю по справке Яндекса и 152-ФЗ, что он пишет и не пишет, как закрыть поля, оплату и кабинет, как проверить сайт за 15 минут и какие вопросы оставить юристу.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-eye',
    tags: ['152-ФЗ', 'Яндекс Метрика', 'Вебвизор', 'аудит сайта', 'персональные данные'],
    toc: toc(
      ['vebvizor-pd', 'Вебвизор и персональные данные: считаются ли записи ПД'],
      ['chto-zapisyvaet', 'Что записывает Вебвизор и что нет по справке Яндекса'],
      ['zakon', 'Что требует 152-ФЗ: основание, уведомление, политика, штрафы'],
      ['nastroyka', 'Чек-лист: как настроить Метрику и Вебвизор'],
      ['proverka', 'Как проверить свой сайт за 15 минут'],
      ['kak-ya-delayu', 'Как я делаю такой аудит'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['cookie-banner-zakon', 'chto-schitaetsya-personalnymi-dannymi-2026', 'google-fonts-recaptcha-youtube-transgranichnaya-peredacha-pd-2026', 'politika-obrabotki-pd-obrazec-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/rkn-audit/', label: 'Аудит сайта по 152-ФЗ' },
    servicesOffer: SVC_VEBVIZOR,
    contentHtml: C('vebvizor-yandeks-metrika-chto-zapisyvat-po-zakonu-2026'),
  },
];
