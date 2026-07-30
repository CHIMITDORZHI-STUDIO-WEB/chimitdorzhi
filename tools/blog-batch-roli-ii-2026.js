// Одиночная статья: ИИ размывает границы профессий. Опора — исследование
// OpenAI на 800 тыс. промптов (43,5% задач вне своей специальности).
// Ведёт на корпоративное обучение ИИ и автоматизацию.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-30';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_AI_TRAIN = {
  title: 'Обучение и внедрение ИИ в команде',
  services: [
    { icon: 'ph-fill ph-graduation-cap', label: 'Обучение сотрудников работе с ИИ' },
    { icon: 'ph-fill ph-shield-check', label: 'Регламент: что можно, а что нельзя' },
    { icon: 'ph-fill ph-robot', label: 'Автоматизация рутины вместо ручной работы' },
    { icon: 'ph-fill ph-chart-line-up', label: 'Оценка результата, а не «поиграли и бросили»' },
  ],
  ctaLabel: 'Обсудить внедрение ИИ', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'ii-razmyvaet-roli-v-komande-2026',
    category: 'ai-life',
    published: true,
    title: 'ИИ размывает роли: когда один человек делает работу трёх',
    metaTitle: 'ИИ размывает роли: один делает работу трёх',
    metaDescription: 'Исследование OpenAI: 43,5% запросов к ИИ — задачи вне своей специальности. Что это значит для малого бизнеса, где нет узких специалистов, и где начинаются риски.',
    metaKeywords: 'ии меняет профессии, задачи вне специальности, ии в малом бизнесе, обучение сотрудников ии, размывание ролей, универсальный сотрудник, автоматизация вместо найма',
    excerpt: 'Маркетолог правит код, инженер пишет тексты, бухгалтер разбирает договор. Исследование OpenAI на 800 тысяч запросов показало: 43,5% задач люди решают вне своей специальности. Разбираю, что это даёт малому бизнесу и где грабли.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-users-three',
    tags: ['ИИ', 'команда', 'обучение', 'малый бизнес', '2026'],
    toc: toc(
      ['issledovanie', 'Что показало исследование'],
      ['pochemu-malyy-biznes', 'Почему это про малый бизнес'],
      ['chto-daet', 'Что это реально даёт'],
      ['gde-grabli', 'Где начинаются грабли'],
      ['kak-ispolzovat', 'Как использовать осознанно'],
      ['ne-zamena-lyudey', 'Чем это не является'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['bezopasnyy-ii-v-kompanii-2026', 'novye-professii-epohi-ii-2027', '7-mifov-ob-ii-dlya-biznesa-2026', 'ai-agenty-v-biznese-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/corporate-ai-training/', label: 'Обучить команду работать с ИИ' },
    servicesOffer: SVC_AI_TRAIN,
    contentHtml: C('ii-razmyvaet-roli-v-komande-2026'),
  },
];
