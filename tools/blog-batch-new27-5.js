// Одиночная статья (серия new27, коммерческий интент): бот и CRM для визового
// агентства. Опора на кейс vizovyy-bot-telegram-crm-keys-2026 (концепт, кода нет).
// Цены только из prices-data.js. Ведёт на разработку Telegram-ботов.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-15';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_VIZA = {
  title: 'Бот и CRM для визового агентства',
  services: [
    { icon: 'ph-fill ph-airplane-tilt', label: 'Бот заявок из рилсов и рекламы' },
    { icon: 'ph-fill ph-list-checks', label: 'Сбор документов по чек-листу' },
    { icon: 'ph-fill ph-kanban', label: 'CRM с этапами и нормативами' },
    { icon: 'ph-fill ph-shield-check', label: 'Хранение паспортов по 152-ФЗ' },
  ],
  ctaLabel: 'Обсудить бота и CRM', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'bot-i-crm-dlya-vizovogo-agentstva-2026',
    category: 'industries',
    published: true,
    title: 'Бот и CRM для визового агентства под ключ: заявки, документы, статусы',
    metaTitle: 'CRM для визового агентства и бот под ключ: цена и сроки',
    metaDescription: 'CRM для визового агентства и бот под ключ: заявка из рилса, документы по чек-листу, статусы клиенту, оплата, 152-ФЗ. Цены от 80 000 ₽, сроки от 2 недель.',
    metaKeywords: 'crm для визового агентства, бот для визового центра, бот для визового агентства, crm визового центра, сбор документов на визу бот, мониторинг слотов визового центра, заказать бота для визового агентства',
    excerpt: 'Как бот и CRM забирают у визового агентства рутину: заявка из рилса, анкета, документы по чек-листу, статусы клиенту, оплата и доска с нормативами для сотрудника. Что с паспортами по 152-ФЗ, почему мониторинг слотов идёт отдельным модулем и сколько это стоит.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-identification-card',
    tags: ['визы', 'CRM', 'чат-бот', 'сбор документов', '152-ФЗ'],
    toc: toc(
      ['crm-dlya-vizovogo-agentstva', 'CRM для визового агентства: кому и зачем'],
      ['put-klienta', 'Что делает бот: путь клиента от рилса до визы'],
      ['crm-etapy', 'CRM для сотрудника: этапы, нормативы, напоминания'],
      ['dokumenty-152-fz', 'Паспорта, фото и 152-ФЗ'],
      ['monitoring-slotov', 'Мониторинг слотов визовых центров'],
      ['cena', 'Сколько стоит бот и CRM'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['chto-nuzhno', 'Что нужно от вас'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['vizovyy-bot-telegram-crm-keys-2026', 'sbor-dokumentov-ot-klienta-v-bote-2026', '152-fz-dlya-chat-botov-i-messendzherov-2026', 'telegram-bot-priema-zayavok-i-oplat-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/development/telegram-bots/', label: 'Обсудить бота для агентства' },
    servicesOffer: SVC_VIZA,
    contentHtml: C('bot-i-crm-dlya-vizovogo-agentstva-2026'),
  },
];
