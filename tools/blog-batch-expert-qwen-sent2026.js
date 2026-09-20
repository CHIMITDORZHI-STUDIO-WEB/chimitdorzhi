// Экспертные статьи по новостям (сентябрь 2026): сжатая модель Bonsai 2 27B,
// синхронный перевод Qwen3.8-LiveTranslate, генерация картинок Qwen-Image-2.1.
// Факты — только из новостей и со страниц моделей, остальное — методика и оговорки.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-21';
const S = 'https://chimitdorzhi.tech';

const SVC_AI = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-cpu', label: 'Локальный ИИ на сервере компании' },
  { icon: 'ph-fill ph-database', label: 'Базы знаний и работа с документами' },
  { icon: 'ph-fill ph-images', label: 'Карточки товаров и обработка фото пачкой' },
  { icon: 'ph-fill ph-shield-check', label: 'Доступы, правила и журнал запросов' },
]};

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));

const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 5, category: 'expert',
      servicesOffer: SVC_AI, toc: tocFrom(html) },
    o, { contentHtml: html });
};

module.exports = [
  E({ slug: 'bonsai-2-27b-szhataya-model-2026', heroIcon: 'ph-fill ph-cpu',
    ctaInternal: { url: `${S}/predlozheniya/privatnoe-ai-oblako/`, label: 'Развернуть локальную модель' },
    title: 'Bonsai 2 27B: модель на 27 млрд параметров в 5,9 ГБ — что это значит для бизнеса',
    metaTitle: 'Bonsai 2 27B: 27 млрд параметров в 5,9 ГБ',
    metaDescription: 'Сжатая версия Qwen3.8 27B занимает 5,9 ГБ вместо 54 и, по заявлению авторов, держит 98% результата. Что это даёт бизнесу и что я проверяю до внедрения.',
    excerpt: 'Модель на 27 млрд параметров теперь влезает в обычную видеокарту. Разбираю, что даёт сжатие, где оно теряет качество и как я проверяю такие модели.',
    tags: ['локальный ИИ', 'Bonsai', 'Qwen', 'нейросети'],
    relatedSlugs: ['kakoy-lokalnyy-llm-vybrat-2026', 'skolko-zheleza-nuzhno-lokalnomu-ii-2026', 'qwen-uncensored-lokalno-2026'] }),

  E({ slug: 'qwen-livetranslate-sinhronnyy-perevod-2026', heroIcon: 'ph-fill ph-translate',
    ctaInternal: { url: `${S}/predlozheniya/privatnoe-ai-oblako/`, label: 'Обсудить перевод на своём сервере' },
    title: 'Синхронный перевод в реальном времени: Qwen3.8-LiveTranslate и где это нужно бизнесу',
    metaTitle: 'Qwen3.8-LiveTranslate: синхронный перевод в реальном времени',
    metaDescription: '60 языков, разделение говорящих, сохранение голоса и задержка 2,3 секунды. Где синхронный перевод помогает бизнесу и что проверить до переговоров.',
    excerpt: 'Синхронный перевод дошёл до задержки в пару секунд. Разбираю, где он уже полезен бизнесу, а где ошибка в цифрах обойдётся дорого.',
    tags: ['перевод', 'Qwen', 'нейросети', 'переговоры'],
    relatedSlugs: ['neyroset-dlya-perevoda-2026', 'ai-perevod-rabota-s-kitaem-2027', 'rasshifrovka-zvonkov-i-soveshchaniy-pachkoy-2026'] }),

  E({ slug: 'qwen-image-2-1-kartochki-tovarov-2026', category: 'marketing', heroIcon: 'ph-fill ph-images',
    ctaInternal: { url: `${S}/predlozheniya/ai-kartochki-marketpleys/`, label: 'Обсудить карточки товаров' },
    title: 'Qwen-Image-2.1: генерация картинок в 2K с прозрачным фоном — что это даёт магазину',
    metaTitle: 'Qwen-Image-2.1: 2K и прозрачный фон для карточек',
    metaDescription: 'Генерация в 2K, прозрачный фон, до 10 референсов и точечное редактирование. Что магазину можно генерировать, а что по-прежнему нужно снимать.',
    excerpt: 'Новая модель обещает 2K и прозрачный фон из коробки. Разбираю, что это даёт карточкам товаров и где генерация не заменит съёмку.',
    tags: ['нейросети', 'карточки товаров', 'маркетплейсы', 'Qwen'],
    relatedSlugs: ['massovaya-obrabotka-foto-tovarov-2026', 'opisaniya-tovarov-neyrosetyu-pachkoy-2026', 'rembg-udalenie-fona-foto-2026'] }),
];
