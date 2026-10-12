// Одиночная статья: видео на сайте вместо YouTube (VK Видео, Rutube, облачные
// видеохостинги, свой хостинг). Ведёт на разработку сайтов.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-12';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_VIDEO = {
  title: 'Видео на сайте без YouTube',
  services: [
    { icon: 'ph-fill ph-video', label: 'Плеер по клику для VK Видео и Rutube' },
    { icon: 'ph-fill ph-cloud-arrow-up', label: 'Свой видеохостинг на S3 с потоком HLS' },
    { icon: 'ph-fill ph-gauge', label: 'Замер и ускорение страниц с видео' },
    { icon: 'ph-fill ph-shield-check', label: 'Проверка внешних доменов по 152-ФЗ' },
  ],
  ctaLabel: 'Обсудить видео на сайте', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'video-na-sayte-vk-video-rutube-svoy-hosting-vmesto-youtube-2026',
    category: 'development',
    published: true,
    title: 'Видео на сайт вместо YouTube: VK Видео, Rutube или свой хостинг',
    metaTitle: 'Видео на сайт вместо YouTube: чем заменить плеер',
    metaDescription: 'Как встроить видео на сайт без YouTube: VK Видео, Rutube, Yandex Cloud Video, свой S3 и HLS. Сравнение цен, скорость, субтитры, разметка и сценарии.',
    metaKeywords: 'видео на сайт вместо youtube, как встроить видео на сайт без youtube, vk видео на сайте, rutube плеер на сайте, свой видеохостинг, hls плеер, lite embed видео, субтитры на сайте, разметка VideoObject',
    excerpt: 'YouTube в России открывается не у всех, а ролик на сайте должен играть у каждого. Разбираю, куда выложить видео и как вставить плеер: VK Видео, Rutube, облачные сервисы и свой хостинг с HLS. Цены, скорость страницы, субтитры, разметка и выбор по сценариям.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 9,
    heroIcon: 'ph-fill ph-video',
    tags: ['видео на сайте', 'YouTube', 'VK Видео', 'Rutube', 'скорость сайта', '2026'],
    toc: toc(
      ['video-vmesto-youtube', 'Видео на сайт вместо YouTube: что с YouTube в России'],
      ['varianty', 'Куда выложить: VK Видео, Rutube, облачные сервисы и свой хостинг'],
      ['svoy-hosting', 'Свой хостинг видео: MP4, HLS и S3'],
      ['skorost', 'Скорость: плеер по клику, ленивая загрузка, автозапуск'],
      ['dannye-posetitelya', 'Данные посетителя и 152-ФЗ'],
      ['subtitry', 'Субтитры и доступность'],
      ['seo', 'SEO для видео: разметка VideoObject'],
      ['scenarii', 'Что выбрать по сценарию'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: [
      'google-fonts-recaptcha-youtube-transgranichnaya-peredacha-pd-2026',
      'medlennyy-sayt-ubivaet-prodazhi-2026',
      'dostupnost-sayta-a11y-2026',
      'peertube-svoya-videoplatforma-2026',
    ],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/web-development/', label: 'Сделать видео на сайте быстро и без YouTube' },
    servicesOffer: SVC_VIDEO,
    contentHtml: C('video-na-sayte-vk-video-rutube-svoy-hosting-vmesto-youtube-2026'),
  },
];
