// Разборы работ с 05.10.2026: персональные разборы по дате рождения для эксперта,
// рабочее демо клуба личных целей по подписке, визуализаторы треков для музыкального лейбла.
// Без имён клиентов, брендов, доменов и сумм; статус честный (работает / демо / отдано).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-14';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));
const E = (m) => {
  const html = C(m.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 6, category: 'cases',
      servicesOffer: SVC_BIZ },
    m, { contentHtml: html, toc: tocFrom(html) });
};

module.exports = [
  {
    slug: 'personalnye-razbory-po-date-rozhdeniya-keys-2026',
    heroIcon: 'ph-fill ph-moon-stars',
    title: 'Персональные разборы по дате рождения: расчёт, вёрстка A4 и слайды',
    metaTitle: 'Кейс: персональные разборы по дате рождения для эксперта',
    metaDescription: 'Кейс: конвейер разборов по дате рождения. Зурхай, Ба-цзы, планеты, Human Design и числа считает код, вёрстка в PDF A4 и слайды, шаблон совместимости пары.',
    excerpt: 'Эксперт по восточной астрологии хотела продавать персональные разборы как продукт. Я собрал конвейер: расчёт зурхая, Ба-цзы, планет, Human Design и чисел по дате, вёрстка A4 и слайды для соцсетей, шаблон совместимости пары. Расчёт проверен на карте самой заказчицы, разборы отданы.',
    tags: ['кейс', 'продукт эксперта', 'астрология', 'автоматизация вёрстки', 'PDF'],
    relatedSlugs: ['personalnye-razbory-eksperta-kak-avtomatizirovat-raschet-i-slaydy-2026', 'chat-bot-dlya-ezoterika-2026', 'uvedomleniya-po-natalnoy-karte-2027', 'sayt-vizitka-ekspertu-za-vyhodnye-2026'],
    ctaInternal: { url: `${S}/predlozheniya/ai-bot-raskladov-ezoterika/`, label: 'Обсудить продукт для эксперта' },
  },
  {
    slug: 'klub-lichnyh-celey-po-podpiske-demo-keys-2026',
    heroIcon: 'ph-fill ph-target',
    title: 'Клуб личных целей по подписке: бот, мини-приложение и админка',
    metaTitle: 'Кейс: демо клуба личных целей по подписке в Telegram',
    metaDescription: 'Кейс: рабочее демо клуба целей по подписке. Бот, мини-приложение с отметками и серией, напоминания, сигнал куратору, админка с рассылками и текстами.',
    excerpt: 'Предприниматель задумал клуб по подписке на личные цели: аскезы, дисциплина, четыре направления, неделя бесплатно. За четыре дня я сделал презентации и рабочий стенд: бот, мини-приложение, сервер с напоминаниями и сигналом куратору, админку. Рабочее демо, цена разработки не согласована.',
    tags: ['кейс', 'клуб по подписке', 'Telegram Mini App', 'бот', 'прототип'],
    relatedSlugs: ['zakrytyy-klub-po-podpiske-2026', 'telegram-mini-app-chto-eto-2026', 'kak-formirovat-privychki-2026', 'ekosistema-velnes-kluba-keys-2026'],
    ctaInternal: { url: `${S}/predlozheniya/klub-po-podpiske-ekspert/`, label: 'Обсудить клуб по подписке' },
  },
  {
    slug: 'vizualizatory-trekov-muzykalnogo-leybla-keys-2026',
    heroIcon: 'ph-fill ph-waveform',
    title: 'Визуализаторы треков для музыкального лейбла: 13 вертикальных роликов',
    metaTitle: 'Кейс: визуализаторы треков для лейбла электронной музыки',
    metaDescription: 'Кейс: конвейер вертикальных роликов 1080×1920 под треки. Анализ звука, сцены на WebGL, монтаж генеративных клипов по тактам, тёмная серия с монстрами.',
    excerpt: 'Лейблу электронной музыки нужны были вертикальные ролики под треки. Я собрал конвейер: анализ звука по кадрам, сцены на WebGL, покадровый рендер с оригинальным звуком. За шесть дней 13 роликов, мультяшную серию переделал в тёмную по замечанию. Ролики отданы.',
    tags: ['кейс', 'визуализатор', 'WebGL', 'вертикальное видео', 'генеративное видео'],
    relatedSlugs: ['konveyer-rolikov-foto-infografika-keys-2026', 'neyroset-dlya-video-2026', 'remotion-video-iz-shablonov-2026', 'ai-shorts-generator-narezka-vebinarov-v-vertikalnye-roliki-2026'],
    ctaInternal: { url: `${S}/services/music-production/`, label: 'Обсудить ролики под треки' },
  },
].map(E);
