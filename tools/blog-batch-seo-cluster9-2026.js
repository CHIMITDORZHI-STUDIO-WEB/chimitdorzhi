// SEO-кластер 9: торговые ИИ-агенты для магазина, 3D-модели товаров из фото.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-03';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const AI_KONSULTANT = { url: `${S}/predlozheniya/ai-konsultant/`, label: 'Заказать ИИ-консультанта в магазин' };
const AI_SYEMKA = { url: `${S}/predlozheniya/ai-predmetnaya-syemka/`, label: 'Собрать конвейер контента для каталога' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 5, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'torgovye-ii-agenty-dlya-magazina-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-shopping-cart', ctaInternal: AI_KONSULTANT,
    title: 'Торговые ИИ-агенты для интернет-магазина: Anthropic выложила эталонную архитектуру — что это даёт бизнесу',
    metaTitle: 'Торговые ИИ-агенты для магазина: эталон от Anthropic',
    metaDescription: 'Anthropic открыла исходный код Claude Commerce Agents. Разбираю, чем торговый ИИ-агент отличается от чат-бота, где он окупается в рознице и как я его собираю.',
    excerpt: 'Anthropic открыла исходный код торговых агентов Claude Commerce Agents — публичный эталон архитектуры, задержек и оценки качества. Разбираю, чем такой агент отличается от чат-бота с кнопками и где он окупается в российской рознице.',
    tags: ['ИИ-агенты', 'интернет-магазин', 'Anthropic', 'автоматизация продаж', 'e-commerce'],
    toc: [{ id: 'chto-takoe', text: 'Что такое торговый ИИ-агент' }, { id: 'chto-otkryla-anthropic', text: 'Что открыла Anthropic и почему это важно' }, { id: 'gde-okupaetsya', text: 'Где окупается, а где нет' }, { id: 'kak-sobirayu', text: 'Как я собираю такого агента' }, { id: 's-chego-nachat', text: 'С чего начать за 2-3 недели' }, ...FAQ_VYV],
    relatedSlugs: ['ai-konsultant-dlya-biznesa-2026', 'ai-agenty-vs-chatboty-2027', 'ii-agent-zayavki-s-sayta-crm-2027', 'mcp-model-context-protocol-2026'] }),

  E({ slug: '3d-modeli-tovarov-iz-foto-neyroset-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-cube', ctaInternal: AI_SYEMKA,
    title: '3D-модели товаров из фотографии: что уже умеют нейросети и где это применимо в продажах',
    metaTitle: '3D-модели товаров из фото: что умеют нейросети',
    metaDescription: 'Hyper3D WorldGen строит 3D-сцену из одного изображения. Разбираю, где нейросетевые 3D-модели товаров применимы в продажах, где нет и как встроить их в контент.',
    excerpt: 'Hyper3D выпустила WorldGen — модель, которая строит 3D-сцену с физикой из одного 2D-изображения. Разбираю честно: где нейросетевые модели уже применимы в продажах, а где для карточки товара по-прежнему нужна съёмка.',
    tags: ['3D-модели', 'нейросети', 'интернет-магазин', 'контент', 'AR'],
    toc: [{ id: 'chto-izmenilos', text: 'Что изменилось в получении 3D' }, { id: 'chto-daet-worldgen', text: 'Что даёт WorldGen по описанию' }, { id: 'gde-primenimo', text: 'Где применимо сейчас, а где нет' }, { id: 'konveyer-kontenta', text: 'Как я встраиваю это в конвейер контента' }, { id: 's-chego-nachat', text: 'С чего начать: пилот на одной категории' }, ...FAQ_VYV],
    relatedSlugs: ['model-viewer-ar-prosmotr-tovara-2026', 'three-js-3d-konfigurator-tovara-2026', 'ii-dlya-internet-magazina-kartochki-tovarov-2026', 'playcanvas-web-3d-konfigurator-2026'] }),
];
