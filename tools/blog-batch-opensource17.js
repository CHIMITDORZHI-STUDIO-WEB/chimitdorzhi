// Кластер «Open-source и свой сервер», часть 17: приватный AI (1 обзор).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-06-16';
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
  title: 'Что я делаю с open-source',
  services: [
    { icon: 'ph-fill ph-hard-drives', label: 'Развёртывание на вашем сервере' },
    { icon: 'ph-fill ph-arrows-left-right', label: 'Перенос данных из старого сервиса' },
    { icon: 'ph-fill ph-shield-check', label: 'Безопасность и 152-ФЗ' },
    { icon: 'ph-fill ph-wrench', label: 'Настройка под ваши процессы' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Поддержка и обновления' },
  ],
};
const CTA = { url: 'https://chimitdorzhi.tech/predlozheniya/open-source-pod-klyuch/', label: 'Развернуть open-source под ключ' };
const E = (o) => Object.assign({
  category: 'opensource', published: true, datePublished: D, dateModified: D, readingMinutes: 9,
  servicesOffer: SVC, toc: TOC, ctaInternal: CTA,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'open-webui-svoy-chatgpt-2026', heroIcon: 'ph-fill ph-chat-circle-dots',
    title: 'Open WebUI: приватный «свой ChatGPT» на своём сервере',
    metaTitle: 'Open WebUI: приватный свой ChatGPT на сервере',
    metaDescription: 'Open WebUI — open-source веб-интерфейс для языковых моделей, как ChatGPT, но на своём сервере: чат, работа с локальными моделями через Ollama, ответы по своим документам (RAG), роли. Переписка и данные не уходят в чужое облако (152-ФЗ) — разверну под ключ.',
    excerpt: 'Open WebUI выглядит как ChatGPT, но работает на вашем сервере и с локальными моделями: чат, ответы по своим документам, роли для команды. Переписка и данные компании не уходят наружу. Разбираю возможности и как на этом зарабатывать.',
    tags: ['Open WebUI', 'AI', 'свой ChatGPT', 'open-source'],
    relatedSlugs: ['ollama-svoy-chatgpt-na-servere-2026', 'librechat-korporativnyy-chatgpt-2026', 'dify-ai-prilozheniya-2026'] }),
];
