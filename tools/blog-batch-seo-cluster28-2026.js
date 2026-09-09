// SEO-кластер 28: лёгкий браузер для агентов и цена рассуждения у открытых моделей.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-09';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const OSS = { url: `${S}/predlozheniya/open-source-pod-klyuch/`, label: 'Развернуть open-source под ключ' };
const AI_AGENTS = { url: `${S}/services/ai-agents/`, label: 'Обсудить внедрение агента' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [

  E({ slug: 'headless-brauzer-dlya-agentov-2026', category: 'opensource', heroIcon: 'ph-fill ph-browsers', ctaInternal: OSS,
    title: 'Браузер для роботов: зачем понадобилась замена Chrome без окна',
    metaTitle: 'Лёгкий headless-браузер для агентов и парсинга',
    metaDescription: 'Роботу не нужен браузер целиком. Разбираю движок, написанный с нуля под автоматизацию: выигрыш по памяти, лицензия AGPL и где он подведёт.',
    excerpt: 'Когда программа ходит по сайтам вместо человека, она запускает настоящий Chrome без окна — и каждая вкладка съедает память как полный браузер. Разбираю альтернативу, написанную с нуля: в чём выигрыш, почему решает лицензия и на чём такой движок споткнётся.',
    tags: ['автоматизация', 'парсинг', 'open source', 'лицензии'],
    toc: [
      { id: 'problema', text: 'Почему обычный подход упирается в память' },
      { id: 'chto-sdelali', text: 'Что сделали' },
      { id: 'licenziya', text: 'Лицензия, которую нельзя пропустить' },
      { id: 'chego-zhdat', text: 'Чего ждать от движка, написанного заново' },
      { id: 'komu', text: 'Кому это нужно' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['rpa-robot-v-brauzere-2026', 'monitoring-cen-konkurentov-2026', 'parser-dannyh-na-zakaz-2026', 'ii-agent-na-svoem-pk-2026'] }),

  E({ slug: 'otkrytaya-model-cena-rassuzhdeniy-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-scales', ctaInternal: AI_AGENTS,
    title: 'Модель на 7 млрд обходит девятимиллиардные: почему это не значит «дешевле»',
    metaTitle: 'Маленькая модель с рассуждением: почему не дешевле',
    metaDescription: 'Модель на 7 млрд параметров обходит более крупные на инженерном тесте. Но результат получен при 32 тысячах токенов рассуждения — и это меняет всю экономику.',
    excerpt: 'Вышло семейство из шести полностью открытых моделей, и версия на 7 млрд параметров обходит более крупные конкурентов. Цифра настоящая, но рядом с ней в карточке написано условие, которое переворачивает вывод о стоимости.',
    tags: ['выбор модели', 'открытые модели', 'стоимость ИИ', 'бенчмарки'],
    toc: [
      { id: 'chto-vyshlo', text: 'Что вышло' },
      { id: 'cifra', text: 'Про цифру 70,6' },
      { id: 'ogovorka', text: 'Оговорка, которая меняет экономику' },
      { id: 'komu', text: 'Кому это нужно, а кому нет' },
      { id: 'kak-proveryat', text: 'Как проверять такие новости' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['reasoning-modeli-dlya-biznesa-2026', 'skolko-stoyat-tokeny-ii-agenta-2026', 'kakoy-lokalnyy-llm-vybrat-2026', 'malenkie-domennye-modeli-slm-2026'] }),

];
