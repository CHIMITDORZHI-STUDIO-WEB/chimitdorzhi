// Кластер «Open-source и свой сервер», часть 25: локальные AI-серверы «всё в одном».
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-06-28';
const TOC = [
  { id: 'chto-eto', text: 'Что это и что заменяет' },
  { id: 'vozmozhnosti', text: 'Что умеет' },
  { id: 'komu-podhodit', text: 'Кому подходит' },
  { id: 'chto-nuzhno', text: 'Что нужно для запуска' },
  { id: 'kak-vnedrit', text: 'Как внедрить под ключ' },
  { id: 'faq', text: 'FAQ' },
  { id: 'vyvody', text: 'Коротко о главном' },
];
const SVC = {
  title: 'Что я разворачиваю под ключ',
  services: [
    { icon: 'ph-fill ph-hard-drives', label: 'Локальный AI-сервер (Ollama, LLM)' },
    { icon: 'ph-fill ph-chat-circle-dots', label: 'Свой ChatGPT (Open WebUI)' },
    { icon: 'ph-fill ph-flow-arrow', label: 'Автоматизация (n8n)' },
    { icon: 'ph-fill ph-image', label: 'Генерация изображений (ComfyUI)' },
    { icon: 'ph-fill ph-shield-check', label: 'Приватность и 152-ФЗ' },
  ],
};
const CTA = { url: 'https://chimitdorzhi.tech/predlozheniya/open-source-pod-klyuch/', label: 'Развернуть под ключ' };
const E = (o) => Object.assign({
  category: 'opensource', published: true, datePublished: D, dateModified: D, readingMinutes: 10,
  servicesOffer: SVC, toc: TOC, ctaInternal: CTA,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'dreamserver-lokalnyy-ai-server-2026', heroIcon: 'ph-fill ph-hard-drives',
    title: 'DreamServer: локальный AI-сервер (Ollama, Open WebUI, n8n, ComfyUI) одной установкой',
    metaTitle: 'DreamServer: локальный AI-сервер под ключ',
    metaDescription: 'DreamServer — open-source инструмент, который ставит и связывает на вашем компьютере или сервере локальный AI-стек: Ollama (запуск LLM), Open WebUI (свой ChatGPT в браузере), n8n (автоматизация) и ComfyUI (генерация картинок) — без ручной настройки каждого. Данные не уходят в облако, соответствие 152-ФЗ. Разверну под ключ.',
    excerpt: 'DreamServer ставит и связывает локальный AI-стек одной установкой — Ollama, Open WebUI, n8n и ComfyUI на вашем железе, без ручной возни с каждым. Свой ChatGPT и автоматизация без облака. Разбираю, кому подходит и как развернуть под ключ.',
    tags: ['DreamServer', 'локальный AI-сервер', 'Ollama', 'open-source'],
    relatedSlugs: ['ollama-svoy-chatgpt-na-servere-2026', 'open-webui-svoy-chatgpt-2026', 'n8n-avtomatizaciya-bez-zapier-2026'] }),
];
