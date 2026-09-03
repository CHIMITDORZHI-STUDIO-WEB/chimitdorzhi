// SEO-кластер 8: локальный ИИ на единой памяти (Mac Studio) и расчёт бюджета на токены ИИ-агента.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-03';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const PRIVATE_AI = { url: `${S}/predlozheniya/privatnoe-ai-oblako/`, label: 'Развернуть приватный ИИ-контур' };
const AI_AGENTS = { url: `${S}/services/ai-agents/`, label: 'Посчитать бюджет ИИ-агента' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 5, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'mac-studio-dlya-lokalnogo-ii-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-desktop', ctaInternal: PRIVATE_AI,
    title: 'Mac Studio для локального ИИ: почему Apple Silicon обходит стойку из видеокарт',
    metaTitle: 'Mac Studio для локального ИИ: единая память вместо GPU',
    metaDescription: 'Mac Studio с 512 ГБ единой памяти против стойки видеокарт и облака: где выгоднее крутить локальный ИИ, как посчитать память под модель и внедрить контур.',
    excerpt: 'Единая память Apple Silicon позволяет держать модель на сотни гигабайт в одной тихой коробке вместо стойки видеокарт. Разбираю, как это устроено, кому подходит и как я подбираю конфигурацию под задачу.',
    tags: ['локальный ИИ', 'Mac Studio', 'железо для LLM', 'приватный контур', 'Apple Silicon'],
    toc: [{ id: 'edinaya-pamyat', text: 'В чём фокус единой памяти' }, { id: 'sravnenie', text: 'Три подхода: Mac, стойка видеокарт, облако' }, { id: 'komu-podhodit', text: 'Кому это подходит, а кому нет' }, { id: 'kak-vybrat-konfiguraciyu', text: 'Методика: как я подбираю конфигурацию' }, { id: 'kak-vstroit', text: 'Как встроить это в работу компании' }, ...FAQ_VYV],
    relatedSlugs: ['skolko-zheleza-nuzhno-lokalnomu-ii-2026', 'gpu-dlya-lokalnyh-llm-2027', 'lokalnyy-llm-vs-oblako-biznes-2027', 'svoy-ai-server-dlya-biznesa-2027'] }),

  E({ slug: 'skolko-stoyat-tokeny-ii-agenta-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-currency-rub', ctaInternal: AI_AGENTS,
    title: 'Сколько стоят токены ИИ-агента: как посчитать бюджет до внедрения',
    metaTitle: 'Сколько стоят токены ИИ-агента: расчёт бюджета',
    metaDescription: 'Как посчитать бюджет ИИ-агента по токенам: формула, скрытые множители, разбор на реальных тарифах и приёмы экономии через кэширование входа. Методика практика.',
    excerpt: 'Счёт за ИИ-агента считается отдельно за вход и выход, и вход обычно съедает большую часть бюджета. Показываю арифметику на реальных тарифах и приёмы, которые режут сумму почти вдвое.',
    tags: ['ИИ-агенты', 'бюджет', 'токены', 'стоимость внедрения', 'LLM API'],
    toc: [{ id: 'chto-takoe-token', text: 'Что такое токен и почему вход и выход считают отдельно' }, { id: 'iz-chego-schet', text: 'Из чего складывается счёт за месяц' }, { id: 'raschet-primer', text: 'Расчёт на примере: консультант поддержки' }, { id: 'ne-tolko-cena', text: 'Чем дело не ограничивается: скорость, лимиты, юрисдикция' }, { id: 'metodika', text: 'Методика: как я закладываю бюджет на проекте' }, ...FAQ_VYV],
    relatedSlugs: ['skolko-stoit-ai-agent-dlya-prodazh-2026', 'skolko-stoit-vnedrit-ii-2026', 'okupaemost-ii-agentov-biznes-keys-2026', 'rossiyskiy-ai-stack-2026'] }),
];
