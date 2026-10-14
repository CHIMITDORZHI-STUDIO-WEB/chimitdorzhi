// Одна статья: фото людей на сайте, согласие на съёмку и публикацию изображения (ст. 152.1 ГК, 152-ФЗ).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-12';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_FOTO = {
  title: 'Фото людей на сайте без рисков',
  services: [
    { icon: 'ph-fill ph-shield-check', label: 'Аудит сайта по 152-ФЗ' },
    { icon: 'ph-fill ph-file-text', label: 'Формы согласий на фото и распространение' },
    { icon: 'ph-fill ph-images', label: 'Учёт снимков с людьми и основаниями' },
    { icon: 'ph-fill ph-user-minus', label: 'Процесс отзыва согласия и удаления' },
  ],
  ctaLabel: 'Проверить сайт со снимками людей', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'foto-lyudey-na-sayte-soglasie-na-publikaciyu-izobrazheniya-2026',
    category: 'legal',
    published: true,
    title: 'Согласие на публикацию фото на сайте: сотрудники, клиенты, дети',
    metaTitle: 'Согласие на публикацию фото на сайте: что нужно',
    metaDescription: 'Согласие на публикацию фото на сайте: статья 152.1 ГК, исключения, фото сотрудников, детей, отзывов, до и после, шаблон формулировки, удаление фото.',
    metaKeywords: 'согласие на публикацию фото на сайте, можно ли публиковать фото сотрудников на сайте, статья 152.1 ГК РФ, согласие на фото сотрудника, право на изображение, фото клиентов на сайте, согласие на публикацию изображения',
    excerpt: 'Когда нужно согласие на публикацию фото на сайте, три исключения из статьи 152.1, фото сотрудников, детей, отзывов и до и после, стоки и сгенерированные лица. Что я проверил по первоисточникам и как делаю сам.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 9,
    heroIcon: 'ph-fill ph-camera',
    tags: ['согласие на фото', 'право на изображение', '152-ФЗ', 'персональные данные', 'сайт', 'право'],
    toc: toc(
      ['kogda-nuzhno', 'Согласие на публикацию фото на сайте: когда оно нужно'],
      ['tri-isklyucheniya', 'Три случая, когда согласие не нужно'],
      ['forma', 'В какой форме брать согласие'],
      ['sotrudniki', 'Можно ли публиковать фото сотрудников на сайте'],
      ['deti', 'Фото детей на сайте школы, секции, центра'],
      ['klienty', 'Фото-отзывы, групповые фото, до и после'],
      ['stok-ii', 'Стоковые фото и сгенерированные лица'],
      ['otvetstvennost', 'Что грозит и как удалить фото по требованию'],
      ['shablon', 'Шаблон формулировки согласия'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['soglasie-na-obrabotku-pd-2026', 'razmytie-lic-na-foto-152-fz-2026', 'otzyv-soglasiya-i-soglasie-za-rebenka-pd-2026', 'chto-schitaetsya-personalnymi-dannymi-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/rkn-audit/', label: 'Аудит сайта по 152-ФЗ' },
    servicesOffer: SVC_FOTO,
    contentHtml: C('foto-lyudey-na-sayte-soglasie-na-publikaciyu-izobrazheniya-2026'),
  },
];
