// Одиночная статья (new37-10): ИИ-демо для выставки или форума, которое не упадёт на стенде.
// Запросы: «ии демо для выставки», «демо на стенде форума», «как показать ии на выставке».
// Опора: кейс ii-buhgalter-1s-stend-foruma-keys-2026; core.telegram.org/bots/features#deep-linking, dev.max.ru (мини-приложения, ссылки startapp),
// ст. 3 152-ФЗ (определение обезличивания, consultant.ru).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-29';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_AI_DEMO = {
  title: 'ИИ-демо для выставки и форума',
  services: [
    { icon: 'ph-fill ph-presentation-chart', label: 'Сценарий показа на 3 минуты и демо-база вместо рабочей' },
    { icon: 'ph-fill ph-arrow-counter-clockwise', label: 'Кнопка «навести беспорядок» и откат по журналу' },
    { icon: 'ph-fill ph-shield-check', label: 'Обезличивание перед нейросетью и запасной режим без интернета' },
    { icon: 'ph-fill ph-qr-code', label: 'QR на бота в Telegram и MAX, сбор лидов с согласием' },
  ],
  ctaLabel: 'Обсудить демо для стенда', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'ii-demo-dlya-vystavki-stend-bez-sboev-2026',
    category: 'ai-dev',
    published: true,
    title: 'ИИ-демо для выставки или форума, которое не упадёт на стенде',
    metaTitle: 'ИИ-демо для выставки: стенд без сбоев, откат и лиды',
    metaDescription: 'Как сделать ИИ-демо для стенда: сценарий на 3 минуты, демо-база, кнопка беспорядка и откат, режим без интернета, обезличивание, QR на бота, чек-лист.',
    metaKeywords: 'ии демо для выставки, демо на стенде форума, как показать ии на выставке, ии демо стенд, сбор лидов на выставке бот, обезличивание данных нейросеть, демо-база 1с',
    excerpt: 'Что нужно, чтобы ИИ-демо выдержало день на стенде: короткий повторяемый сценарий, демо-база вместо рабочей, кнопка «навести беспорядок» с откатом по журналу, запасной режим без интернета, замер времени ответа, обезличивание перед нейросетью, QR на бота и сбор лидов. Плюс чек-лист за неделю до события.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-presentation-chart',
    tags: ['ИИ', 'выставка', 'демо', 'лиды', '1С', '2026'],
    toc: toc(
      ['scenariy', 'Сценарий на 3 минуты'],
      ['demo-baza', 'Демо-база вместо боевой'],
      ['bardak-i-otkat', 'Кнопка «навести беспорядок» и откат'],
      ['bez-interneta', 'Запасной режим без интернета'],
      ['vremya-otveta', 'Время ответа: сколько ждёт гость'],
      ['obezlichivanie', 'Обезличивание: что видит нейросеть'],
      ['unesti', 'Что гость уносит: QR и бот'],
      ['lidy', 'Как собрать лиды'],
      ['chek-list', 'Чек-лист за неделю до события'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит ИИ-демо для стенда'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['ii-buhgalter-1s-stend-foruma-keys-2026', 'igra-na-vystavke-sbor-lidov-u-stenda-2026', 'bot-registracii-na-meropriyatie-2026', 'ii-galyucinacii-nelzya-slepo-doveryat-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/ai-agents/', label: 'ИИ-агенты для бизнеса' },
    servicesOffer: SVC_AI_DEMO,
    contentHtml: C('ii-demo-dlya-vystavki-stend-bez-sboev-2026'),
  },
];
