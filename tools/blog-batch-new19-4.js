// Одиночная статья: закон об антифроде 41-ФЗ, ч. 1 ст. 15 (запрет иностранных мессенджеров
// для информирования граждан). Текст статьи 15 и сроки (ст. 16) сверены по КонсультантПлюс,
// КоАП 13.11.2 и ч. 8 ст. 10 149-ФЗ тоже, на 2026-10-12. Ведёт на разработку ботов для MAX.
// Кодовое слово АНТИФРОД.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-12';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_ANTIFROD = {
  title: 'Переписка с клиентами по закону',
  services: [
    { icon: 'ph-fill ph-scales', label: 'Проверка, попадает ли компания под 41-ФЗ' },
    { icon: 'ph-fill ph-robot', label: 'Бот для MAX и Telegram на одном коде' },
    { icon: 'ph-fill ph-chats-circle', label: 'Единое окно сообщений для менеджеров' },
    { icon: 'ph-fill ph-address-book', label: 'База клиентов и согласия в CRM' },
  ],
  ctaLabel: 'Обсудить переезд переписки', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'zakon-ob-antifrode-41-fz-inostrannye-messendzhery-2026',
    category: 'legal',
    published: true,
    title: 'Закон 41-ФЗ и иностранные мессенджеры: кому запрещено писать клиентам',
    metaTitle: 'Закон 41-ФЗ иностранные мессенджеры: кому запрещено',
    metaDescription: 'Закон 41-ФЗ об антифроде: кому с 1 июня 2025 года запрещено писать клиентам в иностранных мессенджерах, штрафы, касается ли запрет малого бизнеса.',
    metaKeywords: 'закон 41-фз иностранные мессенджеры, запрет иностранных мессенджеров для бизнеса, закон об антифроде, статья 15 41-фз, запрет whatsapp для бизнеса, штраф за иностранные мессенджеры, 13.11.2 коап, перевод клиентов в max',
    excerpt: 'С 1 июня 2025 года закон об антифроде запрещает информировать граждан через иностранные мессенджеры семи группам организаций. Разбираю по тексту закона, кого это касается, какие штрафы, почему салон или кафе под запрет не попадает и как всё равно перевести переписку в MAX без нарушений 152-ФЗ и закона о рекламе.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-scales',
    tags: ['41-ФЗ', 'мессенджеры', 'MAX', 'закон', 'антифрод'],
    toc: toc(
      ['zakon-41-fz-inostrannye-messendzhery', 'Закон 41-ФЗ и иностранные мессенджеры: что запрещено'],
      ['komu-zapreshcheno', 'Кому запрещено: точный перечень'],
      ['malyy-biznes', 'Салон, кафе, интернет-магазин: касается ли вас запрет'],
      ['shtrafy', 'Штрафы и спорные места'],
      ['drugie-normy', 'Что ещё поменял закон об антифроде'],
      ['kuda-perevodit', 'Куда переводить переписку с клиентами'],
      ['perenos-bazy', 'Как перенести базу без нарушений 152-ФЗ и 38-ФЗ'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['whatsapp-blokirovka-perevesti-klientov-v-max-i-telegram-2026', 'korporativnye-kommunikacii-max-2027', 'zapasnoy-kanal-svyazi-s-klientami-blokirovka-2026', 'perevod-auditorii-v-max-2027'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/development/max-bots/', label: 'Бот в MAX для переписки с клиентами' },
    servicesOffer: SVC_ANTIFROD,
    contentHtml: C('zakon-ob-antifrode-41-fz-inostrannye-messendzhery-2026'),
  },
];
