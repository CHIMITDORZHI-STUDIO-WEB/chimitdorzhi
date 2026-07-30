// Одиночная статья: приватный голосовой ввод (диктовка на устройстве без
// утечки данных) для регулируемых профессий. Ведёт на локальный ИИ-контур.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-30';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_VOICE = {
  title: 'Приватный голосовой ИИ под ключ',
  services: [
    { icon: 'ph-fill ph-microphone', label: 'Диктовка с распознаванием на устройстве' },
    { icon: 'ph-fill ph-shield-check', label: 'Аудио и текст не покидают контур' },
    { icon: 'ph-fill ph-brain', label: 'Локальные модели: точность или скорость' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция с вашими программами' },
  ],
  ctaLabel: 'Обсудить приватный ввод', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'golosovoy-vvod-bez-utechki-2026',
    category: 'ai-life',
    published: true,
    title: 'Голосовой ввод без утечки данных: диктовка для врача, юриста, психолога',
    metaTitle: 'Голосовой ввод без утечки: диктовка на устройстве',
    metaDescription: 'Как диктовать текст голосом, когда данные нельзя отдавать в облако: распознавание на устройстве, локальные модели, приватность для врачей, юристов и психологов.',
    metaKeywords: 'голосовой ввод текста, диктовка на компьютере, распознавание речи офлайн, локальный голосовой ввод, диктовка для врача, приватный голосовой ввод, speech to text офлайн',
    excerpt: 'Диктовать быстрее, чем печатать, — но облачный голосовой ввод отправляет вашу речь на чужой сервер. Для врача, юриста и психолога это недопустимо. Разбираю, как надиктовывать текст так, чтобы аудио не покидало устройство.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-microphone',
    tags: ['голосовой ввод', 'локальный ИИ', 'приватность', 'диктовка', '2026'],
    toc: toc(
      ['zachem', 'Зачем диктовать вместо печати'],
      ['problema-oblaka', 'Чем опасен облачный ввод'],
      ['kak-rabotaet-lokalno', 'Как работает распознавание на устройстве'],
      ['komu-kriticheski', 'Кому это критически важно'],
      ['chto-nuzhno', 'Что нужно для запуска'],
      ['ogranicheniya', 'Ограничения и на что смотреть'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['lokalnyy-llm-na-noutbuke-2026', 'ai-transkripciya-soveshchaniy-2026', 'ai-dlya-yurista-advokata-2026', '152-fz-dlya-psihologa-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/privatnoe-ai-oblako/', label: 'Настроить приватный ИИ' },
    servicesOffer: SVC_VOICE,
    contentHtml: C('golosovoy-vvod-bez-utechki-2026'),
  },
];
