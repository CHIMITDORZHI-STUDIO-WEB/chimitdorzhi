// Кластер «Локальный ИИ»: запуск/оптимизация llama.cpp (opensource, с блоком «Где взять»)
// и требования к железу (ai-dev). Дополняют обзорные статьи про Ollama/LM Studio.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-06-25';
const SVC_OS = {
  title: 'Что я делаю с локальным ИИ',
  services: [
    { icon: 'ph-fill ph-cpu', label: 'Локальные LLM на вашем сервере' },
    { icon: 'ph-fill ph-gauge', label: 'Подбор модели и оптимизация' },
    { icon: 'ph-fill ph-hard-drives', label: 'Сервер и self-hosted' },
    { icon: 'ph-fill ph-shield-check', label: 'Приватность и 152-ФЗ' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Внедрение и поддержка' },
  ],
};
const SVC_AI = {
  title: 'Что я делаю с ИИ под ключ',
  services: [
    { icon: 'ph-fill ph-robot', label: 'ИИ-ассистенты и агенты' },
    { icon: 'ph-fill ph-cpu', label: 'Локальные модели без облака' },
    { icon: 'ph-fill ph-stack', label: 'Подбор железа и стека' },
    { icon: 'ph-fill ph-shield-check', label: 'Приватность и 152-ФЗ' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Поддержка и сопровождение' },
  ],
};
const OS = { url: 'https://chimitdorzhi.tech/predlozheniya/open-source-pod-klyuch/', label: 'Развернуть локальный ИИ под ключ' };
const AGENTS = { url: 'https://chimitdorzhi.tech/services/ai-agents/', label: 'Внедрить ИИ под ключ' };
const E = (o, cat, svc) => Object.assign({
  category: cat, published: true, datePublished: D, dateModified: D, readingMinutes: 10,
  servicesOffer: svc,
}, o, { contentHtml: C(o.slug) });
const T = (...ids) => ids.map(([id, text]) => ({ id, text }));

module.exports = [
  E({ slug: 'llama-cpp-zapusk-i-optimizaciya-2026', heroIcon: 'ph-fill ph-cpu', ctaInternal: OS,
    title: 'llama.cpp: как запустить и ускорить локальный LLM',
    metaTitle: 'llama.cpp: запуск и оптимизация',
    metaDescription: 'llama.cpp простыми словами: open-source движок для запуска локальных LLM на своём железе. Чем отличается от Ollama и LM Studio, как запустить (GGUF, сервер) и что реально влияет на скорость — выгрузка слоёв на видеокарту, размер контекста, потоки и квантизация. Где взять репозиторий.',
    excerpt: 'llama.cpp — движок, на котором держатся Ollama и LM Studio. Разбираю простыми словами, как запустить локальный LLM и что реально ускоряет работу: выгрузка слоёв на видеокарту, контекст, потоки и квантизация. Со ссылкой на репозиторий.',
    tags: ['llama.cpp', 'локальный LLM', 'open-source', 'оптимизация'],
    toc: T(['chto-eto','Что такое llama.cpp'],['pochemu','Чем отличается от Ollama и LM Studio'],['ustanovka','Как запустить'],['optimizaciya','Что реально влияет на скорость'],['vybor-modeli','Выбор модели и квантизации'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['skolko-zheleza-nuzhno-lokalnomu-ii-2026', 'lokalnyy-llm-na-noutbuke-2026', 'ollama-svoy-chatgpt-na-servere-2026'] }, 'opensource', SVC_OS),
  E({ slug: 'skolko-zheleza-nuzhno-lokalnomu-ii-2026', heroIcon: 'ph-fill ph-graphics-card', ctaInternal: AGENTS,
    title: 'Сколько железа нужно локальному ИИ: GPU, RAM, VRAM по моделям',
    metaTitle: 'Железо для локального ИИ: GPU, RAM, VRAM',
    metaDescription: 'Сколько железа нужно для локального ИИ: разбор по VRAM, RAM и квантизации. Сколько памяти требуют модели на 7B, 13B, 30B, 70B параметров, видеокарта или процессор, и как выбрать конфигурацию под задачу без переплаты. Практические ориентиры с честными оговорками.',
    excerpt: 'Главный ограничитель локального ИИ — не скорость, а память: оперативная и видеопамять. Разбираю, сколько нужно под модели 7B/13B/70B, что важнее — GPU или RAM, и как выбрать железо под задачу без переплаты.',
    tags: ['локальный ИИ', 'железо', 'GPU', 'VRAM'],
    toc: T(['chto-vliyaet','От чего зависят требования'],['vram-ram','VRAM, RAM и квантизация'],['po-modelyam','Сколько нужно по моделям'],['gpu-cpu','Видеокарта или процессор'],['kak-vybrat','Как выбрать железо под задачу'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['llama-cpp-zapusk-i-optimizaciya-2026', 'lokalnyy-llm-na-noutbuke-2026', 'rossiyskiy-ai-stack-2026'] }, 'ai-dev', SVC_AI),
];
