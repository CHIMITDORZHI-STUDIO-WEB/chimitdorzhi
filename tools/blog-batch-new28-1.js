// Одиночная статья (серия new28, коммерческий интент): визуализатор трека под релиз
// для артистов, лейблов, диджеев и продюсеров. Опора на кейс
// vizualizatory-trekov-muzykalnogo-leybla-keys-2026. Ведёт на /services/music-production/.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-16';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_TREK = {
  title: 'Видео под релиз',
  services: [
    { icon: 'ph-fill ph-waveform', label: 'Аудиореактивные визуализаторы 1080×1920' },
    { icon: 'ph-fill ph-film-strip', label: 'Генеративные клипы с монтажом по тактам' },
    { icon: 'ph-fill ph-monitor-play', label: 'Обложка в движении и калейдоскоп' },
    { icon: 'ph-fill ph-headphones', label: 'Серия роликов на каталог лейбла' },
  ],
  ctaLabel: 'Обсудить ролики под трек', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'vizualizator-treka-dlya-muzykanta-zakazat-2026',
    category: 'marketing',
    published: true,
    title: 'Визуализатор трека: заказать видео под релиз для артиста и лейбла',
    metaTitle: 'Визуализатор трека заказать: видео под релиз, цена',
    metaDescription: 'Визуализатор трека под релиз: вертикальные ролики 1080×1920 для Reels, Shorts и VK, графика по звуку, стили, права на трек и цена от 50 000 ₽.',
    metaKeywords: 'визуализатор трека заказать, видео для трека под релиз, визуализатор музыки для reels, аудиореактивное видео, видео для лейбла, вертикальное видео под трек, ролик для shorts под музыку',
    excerpt: 'Визуализатор трека даёт релизу поток вертикальных роликов без съёмки: графика двигается по данным звука, длина совпадает с фрагментом. Разбираю форматы и стили, как я делаю ролики, что с правами на трек, обложку и генерацию, из чего складывается цена. Опора на мой кейс: 13 роликов для лейбла за шесть дней.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-film-strip',
    tags: ['визуализатор', 'видео под релиз', 'музыка', 'вертикальное видео', 'генеративное видео'],
    toc: toc(
      ['chto-takoe', 'Заказать визуализатор трека: что это и кому подходит'],
      ['formaty', 'Форматы и стили видео для трека'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['prava', 'Права на трек, обложку и генерацию'],
      ['cena', 'Из чего складывается цена и сроки'],
      ['ot-vas', 'Что нужно от вас'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['vizualizatory-trekov-muzykalnogo-leybla-keys-2026', 'konveyer-rolikov-foto-infografika-keys-2026', 'neyroset-dlya-video-2026', 'remotion-video-iz-shablonov-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/music-production/', label: 'Обсудить видео под релиз' },
    servicesOffer: SVC_TREK,
    contentHtml: C('vizualizator-treka-dlya-muzykanta-zakazat-2026'),
  },
];
