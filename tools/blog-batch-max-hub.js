// Опорная (хаб) страница кластера MAX: собирает все материалы про мессенджер MAX
// в один каталог по темам. Контент генерируется скриптом из реальных статей —
// при добавлении новых материалов пересобрать content-файл.
module.exports = [
  {
    slug: 'max-messendzher-dlya-biznesa-2026',
    category: 'development',
    published: true,
    title: 'MAX для бизнеса: всё о ботах, мини-аппах и продвижении в мессенджере',
    metaTitle: 'MAX для бизнеса: боты, мини-аппы, продвижение',
    metaDescription: 'Опорная страница по мессенджеру MAX: 50 материалов о разработке ботов и мини-аппов, продвижении канала, воронках, отраслевых сценариях и кейсах с реальными результатами.',
    metaKeywords: 'MAX мессенджер, бот в MAX, мини-апп MAX, продвижение в MAX, канал в MAX, разработка для MAX, MAX для бизнеса, реклама в MAX, российский мессенджер',
    excerpt: 'Всё о мессенджере MAX в одном месте: как создать бота и мини-апп, как продвигать канал и набирать подписчиков, как строить воронки и считать окупаемость. 50 материалов по темам плюс кейсы с реальными результатами.',
    datePublished: '2026-08-05',
    dateModified: '2026-08-05',
    readingMinutes: 9,
    heroIcon: 'ph-fill ph-chat-circle-dots',
    tags: ['MAX', 'мессенджер', 'боты', 'мини-аппы', 'каталог'],
    toc: [
      { id: 'start', text: 'С чего начать' },
      { id: 'razrabotka', text: 'Разработка ботов и мини-аппов' },
      { id: 'prodvizhenie', text: 'Продвижение канала и аудитория' },
      { id: 'voronki', text: 'Воронки, рассылки и продажи' },
      { id: 'otrasli', text: 'Отрасли и сценарии' },
      { id: 'ai', text: 'ИИ внутри MAX' },
      { id: 'keysy', text: 'Кейсы: что уже сделано' },
      { id: 'strategiya', text: 'Стратегия, сравнения, безопасность' },
      { id: 'pochemu-max', text: 'Почему MAX сейчас интереснее, чем кажется' },
      { id: 'faq', text: 'Частые вопросы' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    contentHtml: require('./blog-content-max-messendzher-dlya-biznesa-2026.js'),
    relatedSlugs: [
      'kak-sozdat-bota-v-max-poshagovo-2026',
      'mini-app-v-max-dlya-biznesa-2026',
      'avtovse-max-bot-miniapp-keys-2026',
      'mango-bot-artel-keys-2026',
    ],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/bot-dlya-biznesa/', label: 'Заказать бота в MAX' },
    servicesOffer: {
      title: 'Что я делаю в MAX',
      services: [
        { icon: 'ph-fill ph-robot', label: 'Боты: заявки, каталог, оплата, уведомления' },
        { icon: 'ph-fill ph-device-mobile', label: 'Мини-аппы: магазин, кабинет, запись' },
        { icon: 'ph-fill ph-share-network', label: 'Реферальные механики с защитой от накруток' },
        { icon: 'ph-fill ph-megaphone', label: 'Каналы, рассылки, воронки' },
      ],
      ctaLabel: 'Обсудить проект в MAX',
      ctaUrl: 'https://t.me/chimitdorzhi',
    },
  },
];
