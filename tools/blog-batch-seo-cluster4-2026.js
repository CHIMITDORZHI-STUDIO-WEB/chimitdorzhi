// SEO-кластер 4: DevOps-услуги, AI-консультант (GigaChat vs YandexGPT снят — дубль двух существующих статей).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-02';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const DEVOPS = { url: `${S}/services/devops/`, label: 'Заказать DevOps под ключ' };
const AI_KONSULTANT = { url: `${S}/predlozheniya/ai-konsultant/`, label: 'Заказать AI-консультанта' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 5, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'uslugi-devops-stoimost-2026', category: 'development', heroIcon: 'ph-fill ph-arrows-clockwise', ctaInternal: DEVOPS,
    title: 'Услуги DevOps: сколько стоят и что входит в 2026',
    metaTitle: 'Услуги DevOps: стоимость и что входит в 2026',
    metaDescription: 'Сколько стоят услуги DevOps в 2026: вилки цен за разовую настройку, абонемент и почасовку, что входит в работу и когда DevOps не нужен. Разбираю на практике.',
    excerpt: 'Стоимость услуг DevOps пугает разбросом: от 30 тысяч до миллионов. Разбираю, что реально входит в DevOps для малого и среднего бизнеса, какие форматы оплаты бывают и от чего зависит цена.',
    tags: ['DevOps', 'стоимость', 'CI/CD', 'инфраструктура', 'сервер'],
    toc: [{ id: 'chto-vhodit', text: 'Что входит в услуги DevOps' }, { id: 'formaty-oplaty', text: 'Форматы оплаты и вилки цен' }, { id: 'ot-chego-zavisit', text: 'От чего зависит стоимость' }, { id: 'kogda-ne-nuzhen', text: 'Когда DevOps не нужен' }, { id: 'chek-list-tz', text: 'Чек-лист ТЗ на DevOps' }, ...FAQ_VYV],
    relatedSlugs: ['otkazoustoychivost-monitoring-bekapy-2026', 'svoy-vps-dlya-razrabotchika-2026', 'kak-nastroit-vps-s-nulya-2026', 'self-hosted-infrastruktura-2026'] }),

  E({ slug: 'ai-konsultant-dlya-biznesa-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-sparkle', ctaInternal: AI_KONSULTANT,
    title: 'AI-консультант для бизнеса: что это, чем отличается от чат-бота и сколько стоит',
    metaTitle: 'AI-консультант для бизнеса: что это и сколько стоит',
    metaDescription: 'AI-консультант для бизнеса: чем отличается от чат-бота и ChatGPT, из чего состоит, где окупается и сколько стоит внедрить на сайт и в мессенджеры. Разбираю.',
    excerpt: 'ИИ-консультант отвечает клиентам по вашей базе знаний, а не по сценарию из кнопок. Разбираю, чем он отличается от обычного бота, из чего состоит, где окупается и сколько стоит внедрение.',
    tags: ['AI-консультант', 'ИИ для бизнеса', 'чат-бот', 'RAG', 'продажи'],
    toc: [{ id: 'chto-eto', text: 'Что такое AI-консультант' }, { id: 'otlichie', text: 'Чем отличается от чат-бота и ChatGPT' }, { id: 'iz-chego-sostoit', text: 'Из чего состоит' }, { id: 'gde-okupaetsya', text: 'Где окупается' }, { id: 'stoimost-sroki', text: 'Сколько стоит и как долго' }, { id: 'riski', text: 'Риски и как их закрывают' }, ...FAQ_VYV],
    relatedSlugs: ['ai-agenty-vs-chatboty-2027', 'skolko-stoit-ai-agent-dlya-prodazh-2026', 'ii-agent-zayavki-s-sayta-crm-2027', 'rag-prostymi-slovami-2027'] }),
];
