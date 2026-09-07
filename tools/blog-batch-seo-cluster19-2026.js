// SEO-кластер 19: переносной ИИ-агент для программирования (запуск без установки в систему).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-07';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const AI_AGENTS = { url: `${S}/services/ai-agents/`, label: 'Собрать ИИ-агента под задачу' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'perenosnoy-ii-agent-fleshka-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-robot', ctaInternal: AI_AGENTS,
    title: 'Переносной ИИ-агент: работа на чужом компьютере без установки',
    metaTitle: 'Переносной ИИ-агент: работа без установки в систему',
    metaDescription: 'Переносной ИИ-агент запускается с флешки и не ставится в систему. Кому это нужно, где риск с ключами и автономным режимом, что я проверяю до боевых данных.',
    excerpt: 'Появился класс инструментов, где ИИ-агент для кода живёт в папке на флешке: ключи и логи там же, в систему ничего не прописывается. Разбираю, кому это реально нужно, кому нет и где проходит граница безопасности.',
    tags: ['ИИ-агенты', 'безопасность', 'разработка', 'локальный LLM'],
    toc: [{ id: 'chto-eto', text: 'Что это за класс инструментов' }, { id: 'granica', text: 'Где проходит граница безопасности' }, { id: 'tri-varianta', text: 'Три варианта рабочего места агента' }, { id: 'metodika', text: 'Что я проверяю перед боевыми данными' }, ...FAQ_VYV],
    relatedSlugs: ['bezopasnyy-dostup-ii-agenta-k-baze-2026', 'granica-avtonomnosti-ii-agenta-2026', 'lokalnyy-llm-vs-oblako-biznes-2027', 'zapret-usb-na-predpriyatii-2026'] }),
];
