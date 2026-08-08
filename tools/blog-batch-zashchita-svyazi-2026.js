// Одиночная статья: защита мобильной связи от перехвата (защитный угол).
// Про признаки поддельной базовой станции и защищённую связь для важных
// переговоров. БЕЗ инструкций по перехвату — только защита. Ведёт на кибербез.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-30';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_SVYAZ = {
  title: 'Защита связи и переговоров',
  services: [
    { icon: 'ph-fill ph-shield-check', label: 'Аудит каналов связи компании' },
    { icon: 'ph-fill ph-chat-circle-dots', label: 'Защищённые мессенджеры для команды' },
    { icon: 'ph-fill ph-users-three', label: 'Регламент важных переговоров' },
    { icon: 'ph-fill ph-lock-key', label: 'Шифрование данных и устройств' },
  ],
  ctaLabel: 'Обсудить защиту связи', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'zashchita-svyazi-ot-perehvata-2026',
    category: 'security',
    published: true,
    title: 'Могут ли перехватить ваш телефон: как защитить связь на важных переговорах',
    metaTitle: 'Защита связи от перехвата: важные переговоры',
    metaDescription: 'Что такое перехват мобильной связи, по каким признакам его можно заподозрить и как защитить важные переговоры: защищённые мессенджеры, шифрование.',
    metaKeywords: 'защита от прослушки телефона, перехват мобильной связи, поддельная базовая станция, защищённая связь для бизнеса, безопасные переговоры, сквозное шифрование',
    excerpt: 'Перед крупной сделкой возникает вопрос: а не слушают ли? Разбираю со стороны защиты — что реально может угрожать мобильной связи, по каким признакам это можно заподозрить и как защитить важные переговоры без паранойи.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-shield-check',
    tags: ['безопасность', 'связь', 'переговоры', 'шифрование', '2026'],
    toc: toc(
      ['pochemu-vopros', 'Почему вообще возникает вопрос'],
      ['chto-ugrozhaet', 'Что реально может угрожать связи'],
      ['priznaki', 'По каким признакам можно заподозрить'],
      ['chto-ne-tak-strashno', 'Что не так страшно, как кажется'],
      ['kak-zashchitit', 'Как защитить важные переговоры'],
      ['dlya-kompanii', 'Что сделать на уровне компании'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['proverka-na-skrytye-kamery-trekery-2026', 'kak-rabotaet-shifrovanie-prostymi-slovami-2027', 'kibergigiena-sotrudnikov-2026', 'kiberbezopasnost-udalennoy-komandy-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/cybersecurity/', label: 'Обсудить защиту связи' },
    servicesOffer: SVC_SVYAZ,
    contentHtml: C('zashchita-svyazi-ot-perehvata-2026'),
  },
];
