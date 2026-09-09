// SEO-кластер 27: безопасный доступ агента к тому, что тратит деньги.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-09';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const AI_AGENTS = { url: `${S}/services/ai-agents/`, label: 'Обсудить внедрение агента' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ, ctaInternal: AI_AGENTS }, o, { contentHtml: C(o.slug) });

module.exports = [

  E({ slug: 'agent-kotoryy-tratit-dengi-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-lock-key',
    title: 'Агент, который тратит ваши деньги: как его пускать в рекламный кабинет',
    metaTitle: 'ИИ-агент в рекламном кабинете: как пускать безопасно',
    metaDescription: 'Агент может проверить кампанию лучше человека и одной ставкой съесть бюджет. Разбираю конструкцию доступа: только чтение и пять ворот перед любой правкой.',
    excerpt: 'ИИ-агент в рекламном кабинете полезен и опасен одновременно. Разбираю на примере открытого набора проверок, как совмещают одно с другим: только чтение по умолчанию, пять условий перед любой записью и оценка, которая умеет сказать «не знаю».',
    tags: ['ИИ-агенты', 'реклама', 'безопасность', 'права доступа'],
    toc: [
      { id: 'chto-eto', text: 'Что это такое' },
      { id: 'tolko-chtenie', text: 'Только чтение по умолчанию' },
      { id: 'pyat-usloviy', text: 'Пять условий, без которых нет записи' },
      { id: 'ne-znayu', text: 'Оценка, которая умеет сказать «не знаю»' },
      { id: 'chto-brat', text: 'Что из этого взять для Директа' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['bezopasnyy-dostup-ii-agenta-k-baze-2026', 'granica-avtonomnosti-ii-agenta-2026', 'zhurnal-raboty-ii-agenta-2026', 'yandex-direkt-s-nulya-2026'] }),

];
