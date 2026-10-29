// Одиночная статья (new37-3): пробный доступ к B2B-продукту без утечки.
// Опора: кейс pulty-sobstvennika-sayt-probnyy-kabinet-keys-2026; RFC 6238 (TOTP), OWASP Password Storage, ст. 7 152-ФЗ.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-29';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_TRIAL = {
  title: 'Закрытый пробный кабинет для вашего продукта',
  services: [
    { icon: 'ph-fill ph-key', label: 'Ручная выдача доступа и одноразовая ссылка с ограниченным сроком' },
    { icon: 'ph-fill ph-clock-countdown', label: 'Срок пробы, продление и отзыв из карточки сотрудника' },
    { icon: 'ph-fill ph-shield-check', label: 'Вход администратора с 2FA, журнал действий без секретов' },
    { icon: 'ph-fill ph-eye', label: 'Демоданные, которые сходятся по строкам' },
  ],
  ctaLabel: 'Обсудить пробный доступ', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'probnyy-dostup-b2b-demo-bez-utechki-2026',
    category: 'development',
    published: true,
    title: 'Пробный доступ к B2B-продукту: как давать демо и не слить продукт',
    metaTitle: 'Пробный доступ к B2B-продукту: демо без утечки',
    metaDescription: 'Как давать демо B2B-продукта под контролем: ручная выдача, одноразовая ссылка, срок пробы, 2FA, журнал, отзыв доступа и демоданные вместо реальных.',
    metaKeywords: 'пробный доступ к продукту, демо доступ b2b, как давать демо продукта, демо кабинет, одноразовая ссылка доступ, срок пробного периода, отзыв доступа, демо данные, утечка демо',
    excerpt: 'Открытое демо B2B-продукта легко растащить на скриншоты и идеи. Разбираю схему пробного доступа под контролем: заявка и ручная выдача, одноразовая ссылка и срок пробы, 2FA для администратора, журнал и мгновенный отзыв, демоданные вместо реальной базы, водяные знаки и ограничение выгрузки как мера второго ряда.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-lock-key',
    tags: ['B2B', 'демо', 'личный кабинет', 'безопасность', '2FA', '2026'],
    toc: toc(
      ['otkrytoe-demo', 'Чем опасно открытое демо'],
      ['ruchnaya-vydacha', 'Ручная выдача вместо автоматической регистрации'],
      ['odnorazovaya-ssylka', 'Одноразовая ссылка и срок пробы'],
      ['dvuhfaktornyy-vhod', 'Вход администратора и двухфакторная защита'],
      ['demo-dannye', 'Демоданные вместо реальных'],
      ['zhurnal-i-otzyv', 'Журнал действий и отзыв доступа'],
      ['vodyanye-znaki', 'Водяные знаки и ограничение экспорта'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит пробный кабинет'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['pulty-sobstvennika-sayt-probnyy-kabinet-keys-2026', 'lichnyy-kabinet-dlya-klientov-2026', 'kto-chto-vidit-v-prilozhenii-roli-i-prava-dlya-biznesa-2026', 'dvuhfaktornaya-autentifikaciya-gid-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/development/sites/', label: 'Разработка сайтов и кабинетов' },
    servicesOffer: SVC_TRIAL,
    contentHtml: C('probnyy-dostup-b2b-demo-bez-utechki-2026'),
  },
];
