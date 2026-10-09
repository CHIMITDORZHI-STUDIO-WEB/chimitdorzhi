// Одиночная статья: анализ звонков менеджеров нейросетью, внедрение от записи до ежедневного отчёта.
// Отличие от ii-slushaet-zvonki-prodazh-2026 (что видно в сводке): здесь внедрение,
// CRM, свой сервер или облако, отчёт каждый день, команда и 152-ФЗ. Ведёт на ИИ-анализ звонков.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-09';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_ZVONKI = {
  title: 'Анализ звонков отдела продаж',
  services: [
    { icon: 'ph-fill ph-phone-call', label: 'Телефония с записью и связь с CRM' },
    { icon: 'ph-fill ph-waveform', label: 'Расшифровка звонков на своём сервере' },
    { icon: 'ph-fill ph-list-checks', label: 'Оценка разговоров по вашему скрипту' },
    { icon: 'ph-fill ph-chart-bar', label: 'Ежедневная сводка руководителю' },
  ],
  ctaLabel: 'Обсудить анализ звонков', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'analiz-zvonkov-menedzherov-neyrosetyu-2026',
    category: 'sales',
    published: true,
    title: 'Как внедрить анализ звонков менеджеров нейросетью: план по шагам',
    metaTitle: 'Внедрение анализа звонков менеджеров: план по шагам',
    metaDescription: 'Как внедрить анализ звонков менеджеров нейросетью: откуда брать записи, связь с CRM, свой сервер или облако, отчёт руководителю каждый день и 152-ФЗ.',
    metaKeywords: 'анализ звонков менеджеров, речевая аналитика для бизнеса, контроль звонков менеджеров нейросеть, расшифровка звонков, анализ звонков отдела продаж, речевая аналитика CRM',
    excerpt: 'Как внедрить разбор звонков отдела продаж нейросетью: что видно в расшифровке, как связать её с CRM, где обрабатывать записи, как выглядит утренний отчёт руководителю и как не поссориться с менеджерами.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-phone-call',
    tags: ['анализ звонков', 'речевая аналитика', 'отдел продаж', 'CRM', '152-ФЗ'],
    toc: toc(
      ['chto-daet', 'Анализ звонков менеджеров: что даёт расшифровка и разбор'],
      ['crm', 'Как связать разбор звонков с CRM'],
      ['server-ili-oblako', 'Расшифровка на своём сервере или в облаке'],
      ['otchet', 'Отчёт руководителю каждый день'],
      ['kak-ya-delayu', 'Как я внедряю анализ звонков'],
      ['bez-bunta', 'Как внедрить контроль звонков без бунта менеджеров'],
      ['zakon', 'Запись разговоров и 152-ФЗ'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['ii-slushaet-zvonki-prodazh-2026', 'kak-proveryat-menedzherov-bez-slezhki-2026', 'whisperx-transkribaciya-rechi-2026', 'skripty-prodazh-v-crm-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/ai-analiz-zvonkov-prodazh/', label: 'ИИ-анализ звонков отдела продаж' },
    servicesOffer: SVC_ZVONKI,
    contentHtml: C('analiz-zvonkov-menedzherov-neyrosetyu-2026'),
  },
];
