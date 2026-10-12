// Одиночная статья: официальный канал компании в MAX и подтверждение организации.
// Факты сверены по dev.max.ru (подключение, каналы, боты, правила размещения),
// пресс-релизам VK и сообщениям о тесте синих галочек, на 2026-10-12.
// Кодовое слово ГАЛОЧКА. Ведёт на разработку ботов для MAX.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-12';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_MAX_CHANNEL = {
  title: 'Официальное присутствие компании в MAX',
  services: [
    { icon: 'ph-fill ph-seal-check', label: 'Верификация организации на платформе MAX' },
    { icon: 'ph-fill ph-megaphone', label: 'Оформление официального канала компании' },
    { icon: 'ph-fill ph-chat-circle-dots', label: 'Бот в MAX для заявок и ответов' },
    { icon: 'ph-fill ph-storefront', label: 'Связка канала, сайта и бота' },
  ],
  ctaLabel: 'Обсудить канал и бота в MAX', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'oficialnyy-kanal-kompanii-v-max-kak-podtverdit-organizaciyu-2026',
    category: 'development',
    published: true,
    title: 'Официальный канал компании в MAX: как подтвердить организацию',
    metaTitle: 'Официальный канал компании в MAX: как подтвердить',
    metaDescription: 'Как получить галочку в MAX и подтвердить организацию: верификация через Госуслуги, связка канала с компанией, модерация бота. Что пока тест.',
    metaKeywords: 'официальный канал компании в max, как получить галочку в max, верификация организации в max, подтвердить организацию в max, канал для бизнеса в max, синяя галочка max, max для партнёров',
    excerpt: 'Единой галочки для любой компании в документации MAX нет, синие галочки пока тестируют. Зато есть подтверждение организации, и именно оно открывает официальный канал. Разбираю условия, шаги и подводные камни.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-seal-check',
    tags: ['MAX', 'верификация', 'канал компании', 'боты', 'бизнес'],
    toc: toc(
      ['chto-takoe', 'Официальный канал компании в MAX: что за этим стоит'],
      ['galochka', 'Как получить галочку в MAX и есть ли она вообще'],
      ['verifikaciya', 'Как подтвердить организацию: условия и шаги'],
      ['kanal-ili-bot', 'Канал, бот и личный профиль: чем отличаются'],
      ['zachem', 'Зачем это бизнесу'],
      ['plan', 'Пошаговый план: от документов до связки с ботом'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['oshibki', 'Где обычно спотыкаются'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: [
      'perevod-auditorii-v-max-2027',
      'korporativnye-kommunikacii-max-2027',
      'mini-app-v-max-dlya-biznesa-2026',
      'biznes-akkaunt-v-max-2026',
    ],
    ctaInternal: { url: 'https://chimitdorzhi.tech/development/max-bots/', label: 'Бот в MAX для вашей компании' },
    servicesOffer: SVC_MAX_CHANNEL,
    contentHtml: C('oficialnyy-kanal-kompanii-v-max-kak-podtverdit-organizaciyu-2026'),
  },
];
