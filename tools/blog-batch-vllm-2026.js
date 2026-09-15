// Локальные модели под нагрузку: vLLM против Ollama.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-15';
const S = 'https://chimitdorzhi.tech';

const SVC_AI = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-cpu', label: 'Свои нейросети на сервере компании' },
  { icon: 'ph-fill ph-robot', label: 'ИИ-агенты и боты для клиентов' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-shield-check', label: 'Инфраструктура и отказоустойчивость' },
]};

module.exports = [
  Object.assign({
    published: true, shortForm: true, datePublished: D, dateModified: D, readingMinutes: 4,
    category: 'ai-dev', servicesOffer: SVC_AI,
    ctaInternal: { url: `${S}/services/ai-agents/`, label: 'Обсудить свою модель на сервере' },
    slug: 'vllm-ili-ollama-server-pod-nagruzku-2026', heroIcon: 'ph-fill ph-lightning',
    title: 'vLLM или Ollama: когда бизнесу нужен сервер под нагрузку',
    metaTitle: 'vLLM или Ollama: что выбрать для своей нейросети на сервере',
    metaDescription: 'Ollama удобна одному человеку, vLLM держит много одновременных запросов. Разбираю разницу, признаки, что вы переросли Ollama, и как переходить.',
    excerpt: 'Ollama ставится за минуты, но при росте пользователей бот начинает тормозить. Показываю, в какой момент нужен vLLM, чем он отличается и когда он избыточен.',
    tags: ['локальные LLM', 'vLLM', 'Ollama', 'инфраструктура ИИ'],
    toc: [
      { id: 'chto', text: 'Что такое vLLM' },
      { id: 'raznica', text: 'Главная разница с Ollama' },
      { id: 'sravnenie', text: 'Сравнение для бизнеса' },
      { id: 'priznaki', text: 'Признаки, что вы переросли Ollama' },
      { id: 'kogda-ne', text: 'Когда vLLM не нужен' },
      { id: 'perehod', text: 'Как переходить' },
      { id: 'faq', text: 'Частые вопросы' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    relatedSlugs: ['ollama-svoy-chatgpt-na-servere-2026', 'gpu-dlya-lokalnyh-llm-2027', 'lokalnyy-llm-vs-oblako-biznes-2027'],
  }, { contentHtml: C('vllm-ili-ollama-server-pod-nagruzku-2026') }),
];
