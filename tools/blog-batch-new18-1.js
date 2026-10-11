// Одиночная статья: как помечать Instagram, WhatsApp и Meta на сайте компании.
// Правовая база (решение суда 21.03.2022, ст. 4 Закона о СМИ, КоАП 13.15/20.3, 72-ФЗ),
// спор о сайтах не-СМИ, чек-лист и опыт автоматической маркировки на своём сайте.
// Ведёт на аудит сайта по 152-ФЗ.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-11';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_POMETKI = {
  title: 'Пометки и проверка сайта',
  services: [
    { icon: 'ph-fill ph-list-checks', label: 'Поиск упоминаний запрещённых площадок' },
    { icon: 'ph-fill ph-scales', label: 'Сноски и формулировки по решению суда' },
    { icon: 'ph-fill ph-shield-check', label: 'Аудит сайта по 152-ФЗ' },
    { icon: 'ph-fill ph-browser', label: 'Автоматическая маркировка при публикации' },
  ],
  ctaLabel: 'Проверить мой сайт', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'kak-pomechat-instagram-whatsapp-meta-na-sayte-2026',
    category: 'legal',
    published: true,
    title: 'Как указывать Инстаграм, WhatsApp и Meta на сайте компании в 2026',
    metaTitle: 'Как указывать Инстаграм как запрещённую организацию на сайте',
    metaDescription: 'Как указывать Инстаграм и Meta на сайте компании: текст сноски, звёздочки, логотипы, ссылки и реклама. Что требует закон и как я сделал пометки у себя.',
    metaKeywords: 'как указывать инстаграм запрещенная организация на сайте, маркировка meta экстремистская организация, инстаграм запрещен в россии сноска, meta признана экстремистской организацией формулировка, whatsapp пометка на сайте, логотип инстаграм на сайте штраф',
    excerpt: 'Что решил суд в 2022 году, какие статьи КоАП здесь при чём, обязательна ли пометка для сайта, который не СМИ, и как оформить звёздочки, сноску, ссылки и кнопки. Плюс мой опыт: как я пометил около 190 страниц своего сайта автоматически.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-scales',
    tags: ['запрещённые соцсети', 'право', 'сайт', 'Роскомнадзор', '2026'],
    toc: toc(
      ['kak-ukazyvat', 'Как указывать Инстаграм как запрещённую организацию на сайте'],
      ['chto-zapreshcheno', 'Что запрещено: Meta, Instagram, Facebook и WhatsApp'],
      ['statyi-i-shtrafy', 'Какие статьи и штрафы здесь при чём'],
      ['nuzhno-li', 'Обязательна ли маркировка Meta как экстремистской организации, если вы не СМИ'],
      ['kak-oformit', 'Как оформить пометки на практике'],
      ['kak-sdelal-ya', 'Как я сделал маркировку у себя на сайте'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['audit-152-fz-2026', 'markirovka-reklamy-ord-2026', 'whatsapp-blokirovka-perevesti-klientov-v-max-i-telegram-2026', 'zapasnoy-kanal-svyazi-s-klientami-blokirovka-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/rkn-audit/', label: 'Аудит сайта по 152-ФЗ' },
    servicesOffer: SVC_POMETKI,
    contentHtml: C('kak-pomechat-instagram-whatsapp-meta-na-sayte-2026'),
  },
];
