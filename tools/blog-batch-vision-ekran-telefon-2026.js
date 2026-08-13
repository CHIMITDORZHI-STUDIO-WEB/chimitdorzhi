// Батч: зрительная модель, читающая экраны/интерфейсы на телефоне (по мотивам
// Liquid AI LFM2.5-VL-3B). Угол — ИИ «видит экран», а не распознавание документов.
const C = (s) => require('./blog-content-' + s + '.js');

module.exports = [
  {
    slug: 'ii-chitaet-ekran-telefona-vision-model-2026',
    category: 'ai-dev',
    published: true,
    datePublished: '2026-08-10', dateModified: '2026-08-10',
    readingMinutes: 5, shortForm: true,
    heroIcon: 'ph-fill ph-device-mobile-camera',
    title: 'ИИ, который видит экран телефона: зрительные модели прямо на устройстве',
    metaTitle: 'ИИ видит экран телефона: зрительная модель',
    metaDescription: 'Появились зрительные модели на 3 млрд параметров, которые читают экраны и интерфейсы прямо на телефоне, без облака. Что это даёт бизнесу и автоматизации.',
    metaKeywords: 'зрительная модель на телефоне, ии читает экран, vision language model, локальная vision модель, автоматизация интерфейса, lfm2 vl, ии на устройстве',
    excerpt: 'Зрительные модели научились не просто описывать картинки, а читать экраны приложений и точно показывать, где на них что находится — и всё это в 3 млрд параметров прямо на телефоне, без облака. Разбираю на примере Liquid AI LFM2.5-VL-3B, зачем это бизнесу: автоматизация интерфейсов, доступность и обработка изображений без утечки данных.',
    tags: ['ИИ', 'vision', 'на устройстве', 'автоматизация', '2026'],
    toc: [
      { id: 'chto-novogo', text: 'Что нового: ИИ читает не текст, а экран' },
      { id: 'na-telefone', text: 'Почему «на телефоне» — это важно' },
      { id: 'primenenie', text: 'Где применить в бизнесе' },
      { id: 'granica', text: 'Граница: что такая модель не делает' },
      { id: 'faq', text: 'Частые вопросы' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    relatedSlugs: ['moondream-vision-model-na-noutbuke-2026', 'locateanything-nvidia-lokalnoe-raspoznavanie-2026', 'ii-agent-na-svoem-pk-2026', 'novye-ocr-modeli-2026-dokumenty-bez-oblaka'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/ai-vnedrenie-90-dney/', label: 'Внедрить локальный ИИ' },
    servicesOffer: {
      title: 'Что я делаю с локальным зрительным ИИ',
      services: [
        { icon: 'ph-fill ph-device-mobile-camera', label: 'Распознавание фото и документов на устройстве' },
        { icon: 'ph-fill ph-cursor-click', label: 'Автоматизация действий по экрану приложения' },
        { icon: 'ph-fill ph-hard-drives', label: 'Всё локально, без отправки в облако' },
        { icon: 'ph-fill ph-shield-check', label: 'Соответствие 152-ФЗ' },
      ],
      ctaLabel: 'Обсудить задачу', ctaUrl: 'https://t.me/chimitdorzhi',
    },
    contentHtml: C('ii-chitaet-ekran-telefona-vision-model-2026'),
  },
];
