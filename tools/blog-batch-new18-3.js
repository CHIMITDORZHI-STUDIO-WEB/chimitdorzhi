// Одиночная статья: трансграничная передача ПД через сторонние скрипты сайта
// (Google Fonts, reCAPTCHA, YouTube, Google Analytics). Ведёт на аудит по 152-ФЗ.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-11';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_TRANSGRAN = {
  title: 'Сайт без утечки данных за рубеж',
  services: [
    { icon: 'ph-fill ph-file-magnifying-glass', label: 'Аудит внешних доменов и cookie сайта' },
    { icon: 'ph-fill ph-globe-hemisphere-east', label: 'Шрифты, капча и видео без серверов Google' },
    { icon: 'ph-fill ph-chart-line-up', label: 'Перенос аналитики на Метрику или Matomo' },
    { icon: 'ph-fill ph-scales', label: 'Политика, согласия и уведомление в РКН' },
  ],
  ctaLabel: 'Проверить мой сайт', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'google-fonts-recaptcha-youtube-transgranichnaya-peredacha-pd-2026',
    category: 'legal',
    published: true,
    title: 'Трансграничная передача данных на сайте: Google Fonts, YouTube, капча',
    metaTitle: 'Трансграничная передача персональных данных на сайте',
    metaDescription: 'Google Fonts, reCAPTCHA, YouTube и Google Analytics отправляют IP посетителя в США. Что требует 152-ФЗ, какие штрафы, чем заменить и как проверить сайт.',
    metaKeywords: 'трансграничная передача персональных данных сайт, google fonts 152-фз, recaptcha 152-фз, google analytics запрет, youtube на сайте персональные данные, локализация персональных данных, уведомление ркн трансграничная передача',
    excerpt: 'Шрифт, капча, ролик и счётчик с серверов Google отправляют IP посетителя за рубеж с первой секунды на странице. Разбираю, что говорят ст. 12 и ч. 5 ст. 18 152-ФЗ, какие штрафы в КоАП, чем заменить сервисы Google и как за 15 минут проверить свой сайт.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-globe-hemisphere-east',
    tags: ['152-ФЗ', 'трансграничная передача', 'Google Fonts', 'аудит сайта', 'РКН'],
    toc: toc(
      ['chto-eto', 'Трансграничная передача персональных данных через сайт: что это значит'],
      ['zakon', 'Что говорит закон: статья 12, локализация и штрафы'],
      ['chto-uhodit', 'Что на сайте отправляет данные посетителя за рубеж'],
      ['chem-zamenit', 'Чем заменить Google Fonts, reCAPTCHA, YouTube и Analytics'],
      ['kak-proverit', 'Как проверить свой сайт за 15 минут'],
      ['kak-ya-delayu', 'Как я провожу такой аудит'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['audit-sayta-po-152-fz-dokazatelstva-keys-2026', 'cookie-banner-zakon', 'matomo-veb-analitika-2026', 'lokalizaciya-baz-dannyh-rf-152-fz-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/rkn-audit/', label: 'Аудит сайта по 152-ФЗ' },
    servicesOffer: SVC_TRANSGRAN,
    contentHtml: C('google-fonts-recaptcha-youtube-transgranichnaya-peredacha-pd-2026'),
  },
];
