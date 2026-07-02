// Batch B: 4 articles for chimitdorzhi.tech blog.
const c1 = require('./blog-content-korporativnyy-ai-assistent-na-svoih-dannyh-2027.js');
const c2 = require('./blog-content-ai-videoavatary-2027.js');
const c3 = require('./blog-content-finetuning-rag-api-chto-vybrat-2027.js');
const c4 = require('./blog-content-geo-2027-alisa-gigachat-neyropoisk.js');

module.exports = [
  {
    slug: 'korporativnyy-ai-assistent-na-svoih-dannyh-2027',
    category: 'ai-dev',
    published: true,
    title: 'Корпоративный AI-ассистент на своих данных: приватный RAG без утечек',
    metaTitle: 'Корпоративный AI-ассистент на своих данных: приватный RAG',
    metaDescription: 'Как построить корпоративный AI-ассистент на своих данных: приватный RAG-контур без утечек, российский AI-стек GigaChat и YandexGPT, соответствие 152-ФЗ и поэтапное внедрение.',
    metaKeywords: 'корпоративный ai-ассистент, приватный rag, ai на своих данных, gigachat, yandexgpt, 152-фз, защита от утечек',
    excerpt: 'Приватный RAG-контур, где модель отвечает строго по вашим документам, а данные не покидают периметр. Российский AI-стек, соответствие 152-ФЗ и честный поэтапный план внедрения.',
    datePublished: '2026-06-11',
    dateModified: '2026-06-11',
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-brain',
    tags: ['AI-ассистент', 'RAG', 'приватность данных', '152-ФЗ', 'российский AI-стек'],
    toc: [
      { id: 'chto-takoe', text: 'Что такое AI-ассистент на своих данных' },
      { id: 'zachem-biznesu', text: 'Зачем это бизнесу' },
      { id: 'kak-rabotaet-rag', text: 'Как устроен приватный RAG' },
      { id: 'privatnost', text: 'Приватность и защита от утечек' },
      { id: 'rossiyskiy-stack', text: 'Российский AI-стек и 152-ФЗ' },
      { id: 'vnedrenie', text: 'Как внедрять поэтапно' },
      { id: 'oshibki', text: 'Типичные ошибки' },
      { id: 'faq', text: 'FAQ' },
      { id: 'vyvody', text: 'Коротко о главном' }
    ],
    contentHtml: c1,
    relatedSlugs: ['rag-sistemy-dlya-biznesa-2026', 'rossiyskiy-ai-stack-2026', 'lokalnyy-llm-na-noutbuke-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/ai-konsultant/', label: 'Внедрить AI-ассистента' },
    servicesOffer: {
      title: 'Что я делаю',
      services: [
        { icon: 'ph-fill ph-brain', label: 'Приватные RAG-ассистенты на ваших данных' },
        { icon: 'ph-fill ph-shield-check', label: 'Контур без утечек и по 152-ФЗ' },
        { icon: 'ph-fill ph-database', label: 'Подбор векторной базы и модели' },
        { icon: 'ph-fill ph-gear', label: 'Интеграция с авторизацией и доступами' },
        { icon: 'ph-fill ph-chart-line', label: 'Мониторинг качества ответов' }
      ]
    }
  },
  {
    slug: 'ai-videoavatary-2027',
    category: 'ai-dev',
    published: true,
    title: 'AI-видеоаватары для контента, обучения и поддержки',
    metaTitle: 'AI-видеоаватары для контента, обучения и поддержки',
    metaDescription: 'AI-видеоаватары для контента, обучения сотрудников и видеоподдержки: как создаётся цифровая копия, где технология окупается, юридические нюансы биометрии и согласия по 152-ФЗ.',
    metaKeywords: 'ai-видеоаватар, цифровой аватар, видео для обучения, видеоконтент, биометрия, согласие, 152-фз',
    excerpt: 'Цифровая копия лица и голоса, которая собирает ролики из текста за минуты. Разбираю три рабочих сценария, процесс создания и юридические нюансы биометрии без обещаний вирусности.',
    datePublished: '2026-06-11',
    dateModified: '2026-06-11',
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-video',
    tags: ['AI-аватар', 'видеоконтент', 'обучение', 'видеоподдержка', 'биометрия'],
    toc: [
      { id: 'chto-takoe', text: 'Что такое AI-видеоаватар' },
      { id: 'kontent', text: 'Аватары для контента' },
      { id: 'obuchenie', text: 'Аватары для обучения' },
      { id: 'podderzhka', text: 'Аватары в поддержке' },
      { id: 'kak-sozdaetsya', text: 'Как создаётся аватар' },
      { id: 'yuridicheskie-nyuansy', text: 'Юридические нюансы' },
      { id: 'faq', text: 'FAQ' },
      { id: 'vyvody', text: 'Коротко о главном' }
    ],
    contentHtml: c2,
    relatedSlugs: ['ai-avatary-cifrovye-dvoyniki-2026', 'kak-kreatoru-postavit-kontent-na-potok-2027', 'ai-v-marketinge-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/ai-dvoynik-eksperta/', label: 'Сделать AI-аватар' },
    servicesOffer: {
      title: 'Что я делаю',
      services: [
        { icon: 'ph-fill ph-video', label: 'Создание AI-видеоаватара эксперта' },
        { icon: 'ph-fill ph-graduation-cap', label: 'Обучающие видео из текста' },
        { icon: 'ph-fill ph-megaphone', label: 'Контент-конвейер для соцсетей' },
        { icon: 'ph-fill ph-headset', label: 'Видеоподдержка типовых вопросов' },
        { icon: 'ph-fill ph-shield-check', label: 'Согласия и хранение биометрии' }
      ]
    }
  },
  {
    slug: 'finetuning-rag-api-chto-vybrat-2027',
    category: 'ai-dev',
    published: true,
    title: 'Fine-tuning, RAG или API: что выбрать бизнесу для AI',
    metaTitle: 'Fine-tuning, RAG или API: что выбрать бизнесу для AI в 2027',
    metaDescription: 'Чем отличаются fine-tuning, RAG и вызов модели через API, когда что выбирать бизнесу, как считать бюджет и учитывать 152-ФЗ. Пошаговый алгоритм выбора AI-подхода без переплат.',
    metaKeywords: 'fine-tuning, rag, api, выбор ai-подхода, дообучение модели, gigachat, yandexgpt',
    excerpt: 'Три подхода к AI — API, RAG и fine-tuning — это инструменты под разные задачи, а не конкуренты. Разбираю, когда что выбрать, как считать бюджет и почему дообучение нужно реже, чем кажется.',
    datePublished: '2026-06-11',
    dateModified: '2026-06-11',
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-git-fork',
    tags: ['fine-tuning', 'RAG', 'API', 'выбор AI-подхода', 'российский AI-стек'],
    toc: [
      { id: 'tri-podhoda', text: 'Три подхода к AI' },
      { id: 'api', text: 'API: готовая модель' },
      { id: 'rag', text: 'RAG: ответы по документам' },
      { id: 'finetuning', text: 'Fine-tuning: меняем поведение' },
      { id: 'kak-vybrat', text: 'Как выбрать: алгоритм' },
      { id: 'kombinacii', text: 'Комбинации и стоимость' },
      { id: 'faq', text: 'FAQ' },
      { id: 'vyvody', text: 'Коротко о главном' }
    ],
    contentHtml: c3,
    relatedSlugs: ['rag-sistemy-dlya-biznesa-2026', 'rossiyskiy-ai-stack-2026', 'vnedrenie-ai-dorozhnaya-karta-90-dney-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/ai-konsultant/', label: 'Подобрать AI-подход' },
    servicesOffer: {
      title: 'Что я делаю',
      services: [
        { icon: 'ph-fill ph-git-fork', label: 'Подбор AI-подхода под задачу' },
        { icon: 'ph-fill ph-database', label: 'Внедрение RAG на своих данных' },
        { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция через API' },
        { icon: 'ph-fill ph-sliders', label: 'Дообучение модели при необходимости' },
        { icon: 'ph-fill ph-calculator', label: 'Честная оценка бюджета и сроков' }
      ]
    }
  },
  {
    slug: 'geo-2027-alisa-gigachat-neyropoisk',
    category: 'geo',
    published: true,
    title: 'GEO 2027: как попасть в ответы Алисы, GigaChat и нейропоиска',
    metaTitle: 'GEO 2027: как попасть в ответы Алисы, GigaChat и нейропоиска',
    metaDescription: 'GEO для российского нейропоиска: как структурировать контент под цитирование Алисой, GigaChat и нейроответами, что проверить в технической базе сайта и почему гарантий не бывает.',
    metaKeywords: 'geo, нейропоиск, алиса, gigachat, yandexgpt, оптимизация под ai, цитирование ии',
    excerpt: 'GEO — это борьба за попадание в сам ответ нейропоиска, а не в список ссылок. Разбираю, какой контент цитируют Алиса и GigaChat, что нужно в технической базе и почему гарантий не бывает.',
    datePublished: '2026-06-11',
    dateModified: '2026-06-11',
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-magnifying-glass',
    tags: ['GEO', 'нейропоиск', 'Алиса', 'GigaChat', 'контент для AI'],
    toc: [
      { id: 'chto-takoe-geo', text: 'Что такое GEO' },
      { id: 'kak-vybiraet-ai', text: 'Как AI выбирает источник' },
      { id: 'struktura-kontenta', text: 'Структура контента' },
      { id: 'tehnicheskaya-baza', text: 'Техническая база' },
      { id: 'lokalniy-kontekst', text: 'Российский контекст и 152-ФЗ' },
      { id: 'oshibki', text: 'Частые ошибки' },
      { id: 'faq', text: 'FAQ' },
      { id: 'vyvody', text: 'Коротко о главном' }
    ],
    contentHtml: c4,
    relatedSlugs: ['geo-chek-list-30-punktov-2026', 'kontent-kotoryy-citiruyut-ii-2026', 'geo-optimizaciya-chto-eto-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/audit-i-uskorenie-sayta/', label: 'Подготовить сайт к GEO' },
    servicesOffer: {
      title: 'Что я делаю',
      services: [
        { icon: 'ph-fill ph-magnifying-glass', label: 'Подготовка сайта к GEO' },
        { icon: 'ph-fill ph-gauge', label: 'Технический аудит и ускорение' },
        { icon: 'ph-fill ph-article', label: 'Контент под цитирование AI' },
        { icon: 'ph-fill ph-code', label: 'Структурированная разметка' },
        { icon: 'ph-fill ph-device-mobile', label: 'Корректная работа на телефонах' }
      ]
    }
  }
];
