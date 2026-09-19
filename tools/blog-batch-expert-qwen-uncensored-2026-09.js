// Экспертная статья по новости: Qwen3.8-27B Uncensored — модель без ограничений локально.
// Факты о модели — только из новости и страницы на Hugging Face, остальное — методика и оговорки.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-19';
const S = 'https://chimitdorzhi.tech';

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));

const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 5, toc: tocFrom(html),
      servicesOffer: { title: 'Что я делаю для бизнеса', services: [
        { icon: 'ph-fill ph-cpu', label: 'Локальный ИИ на сервере компании' },
        { icon: 'ph-fill ph-database', label: 'Базы знаний на ваших документах' },
        { icon: 'ph-fill ph-shield-check', label: 'Доступы, правила и журнал запросов' },
      ]} },
    o, { contentHtml: html });
};

module.exports = [
  E({ slug: 'qwen-uncensored-lokalno-2026', category: 'expert', heroIcon: 'ph-fill ph-cpu',
    ctaInternal: { url: `${S}/predlozheniya/privatnoe-ai-oblako/`, label: 'Развернуть свой ИИ с правилами' },
    title: 'Нейросеть без цензуры локально: что такое Qwen3.8-27B Uncensored и стоит ли её ставить бизнесу',
    metaTitle: 'Qwen3.8-27B Uncensored: нейросеть без цензуры локально',
    metaDescription: 'Модель без ограничений запускается через LM Studio, по данным автора ей хватает 15 ГБ памяти. Что значит «без цензуры», какие риски и что нужно бизнесу.',
    excerpt: 'Новость про нейросеть без цензуры, которую можно запустить у себя за пару кликов. Разбираю, что о ней известно, как я проверяю такие модели и почему компании нужна другая.',
    tags: ['локальный ИИ', 'Qwen', 'LM Studio', 'нейросети', 'кибербезопасность'],
    relatedSlugs: ['kakoy-lokalnyy-llm-vybrat-2026', 'skolko-zheleza-nuzhno-lokalnomu-ii-2026', 'ollama-vs-lm-studio-2026', 'lokalnyy-ii-ne-paranoyya-a-raschet-2026'] }),
];
