// Батч: персональные данные / 152-ФЗ + Честный знак (7 коротких статей ~4 мин, shortForm).
// PD-статьи ведут на Директ-лендинг аудита 152-ФЗ.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-22';

const SVC_PD = {
  title: 'Что я делаю по 152-ФЗ и compliance',
  services: [
    { icon: 'ph-fill ph-shield-check', label: 'Полный аудит сайта по 152-ФЗ — от 5 000 ₽' },
    { icon: 'ph-fill ph-file-text', label: 'Подача уведомления в РКН под ключ' },
    { icon: 'ph-fill ph-cookie', label: 'Cookie-баннер и согласия по закону' },
    { icon: 'ph-fill ph-database', label: 'Миграция данных на серверы РФ' },
    { icon: 'ph-fill ph-warning-circle', label: 'Помощь при утечке за 24 часа' },
  ],
  ctaLabel: 'Заказать аудит 152-ФЗ',
  ctaUrl: 'https://audit.chimitdorzhi.tech/',
};
const CTA_PD = { url: 'https://audit.chimitdorzhi.tech/', label: 'Заказать аудит 152-ФЗ' };

const SVC_AUTO = {
  title: 'Автоматизация и интеграции для бизнеса',
  services: [
    { icon: 'ph-fill ph-barcode', label: 'Подключение к Честному знаку под ключ' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция с 1С, кассой и CRM' },
    { icon: 'ph-fill ph-scan', label: 'Настройка сканеров и рабочих мест' },
    { icon: 'ph-fill ph-robot', label: 'Автоматизация приёмки и продаж' },
  ],
  ctaLabel: 'Обсудить автоматизацию',
  ctaUrl: 'https://t.me/chimitdorzhi',
};
const CTA_AUTO = { url: 'https://chimitdorzhi.tech/services/business-automation', label: 'Автоматизация под ключ' };

const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D, readingMinutes: 4, shortForm: true,
  servicesOffer: SVC_PD, ctaInternal: CTA_PD,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'politika-obrabotki-pd-obrazec-2026', category: 'legal', heroIcon: 'ph-fill ph-file-text',
    title: 'Политика обработки персональных данных: образец 2026 и что в ней должно быть',
    metaTitle: 'Политика обработки ПД: образец 2026 и структура',
    metaDescription: 'Политика обработки персональных данных: готовый образец 2026, обязательна ли она, что должно быть внутри по 152-ФЗ, куда разместить на сайте и какой штраф за отсутствие.',
    metaKeywords: 'политика обработки персональных данных образец, политика обработки пд, политика конфиденциальности образец 2026, 152-фз политика, обязательна ли политика обработки пд',
    excerpt: 'Что такое политика обработки ПД, обязательна ли она, что должно быть внутри по 152-ФЗ, готовый образец и куда разместить на сайте, чтобы не получить штраф.',
    tags: ['152-ФЗ', 'персональные данные', 'политика', 'образец'],
    toc: [
      { id: 'chto-eto', text: 'Что это и зачем' },
      { id: 'obyazatelno', text: 'Обязательна ли и штраф' },
      { id: 'struktura', text: 'Что должно быть внутри' },
      { id: 'obrazec', text: 'Образец и размещение' },
      { id: 'faq', text: 'FAQ' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    relatedSlugs: ['soglasie-na-obrabotku-pd-2026', 'audit-152-fz-2026', 'cookie-banner-zakon'] }),

  E({ slug: 'chto-schitaetsya-personalnymi-dannymi-2026', category: 'legal', heroIcon: 'ph-fill ph-identification-card',
    title: 'Что считается персональными данными: имя, телефон, cookie и IP — простыми словами',
    metaTitle: 'Что считается персональными данными: имя, cookie, IP',
    metaDescription: 'Что по закону считается персональными данными: имя, телефон, email, cookie, IP-адрес — что да, а что нет. Простыми словами о том, какие ПД собирает ваш сайт и что с этим делать по 152-ФЗ.',
    metaKeywords: 'что считается персональными данными, персональные данные на сайте, cookie персональные данные, ip адрес персональные данные, что относится к пд',
    excerpt: 'Имя, телефон, email, cookie, IP — что из этого по закону персональные данные, а что нет. Простыми словами: какие ПД собирает ваш сайт и что с этим делать.',
    tags: ['152-ФЗ', 'персональные данные', 'cookie', 'простыми словами'],
    toc: [
      { id: 'opredelenie', text: 'Что такое ПД по закону' },
      { id: 'primery', text: 'Что да, а что нет' },
      { id: 'na-sayte', text: 'Какие ПД собирает сайт' },
      { id: 'chto-delat', text: 'Что с этим делать' },
      { id: 'faq', text: 'FAQ' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    relatedSlugs: ['soglasie-na-obrabotku-pd-2026', 'cookie-banner-zakon', 'audit-152-fz-2026'] }),

  E({ slug: 'proverka-roskomnadzora-kak-prohodit-2026', category: 'legal', heroIcon: 'ph-fill ph-magnifying-glass',
    title: 'Как проходит проверка Роскомнадзора по персональным данным в 2026',
    metaTitle: 'Как проходит проверка Роскомнадзора по ПД 2026',
    metaDescription: 'Как проходит проверка Роскомнадзора по персональным данным: кого и когда проверяют, какие бывают проверки, что смотрят и как подготовиться, чтобы не получить штраф по 152-ФЗ.',
    metaKeywords: 'проверка роскомнадзора, как проходит проверка ркн, проверка роскомнадзора персональные данные, план проверок ркн, что смотрит роскомнадзор',
    excerpt: 'Кого и когда проверяет Роскомнадзор, какие бывают проверки, что именно смотрят и как подготовиться, чтобы проверка по 152-ФЗ прошла без штрафа.',
    tags: ['152-ФЗ', 'Роскомнадзор', 'проверка', 'персональные данные'],
    toc: [
      { id: 'kto-i-kogda', text: 'Кого и когда проверяют' },
      { id: 'vidy', text: 'Виды проверок' },
      { id: 'chto-smotryat', text: 'Что проверяют' },
      { id: 'podgotovka', text: 'Как подготовиться' },
      { id: 'faq', text: 'FAQ' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    relatedSlugs: ['audit-152-fz-2026', 'uvedomlenie-rkn-2026', 'soglasie-na-obrabotku-pd-2026'] }),

  E({ slug: 'shtrafy-za-pd-2026-tablica', category: 'legal', heroIcon: 'ph-fill ph-scales',
    title: 'Штрафы за персональные данные в 2026: таблица по статьям',
    metaTitle: 'Штрафы за персональные данные 2026: таблица',
    metaDescription: 'Штрафы за нарушения по персональным данным в 2026: полная таблица по статьям КоАП, оборотные штрафы за утечки, суммы для ИП, ООО и должностных лиц и как их избежать.',
    metaKeywords: 'штрафы за персональные данные 2026, штрафы 152-фз таблица, оборотные штрафы за утечку, штраф за отсутствие согласия на пд, коап персональные данные',
    excerpt: 'Полная таблица штрафов по персональным данным на 2026: статьи КоАП, суммы для ИП, ООО и должностных лиц, оборотные штрафы за утечки и как их избежать.',
    tags: ['152-ФЗ', 'штрафы', 'персональные данные', 'КоАП'],
    toc: [
      { id: 'obzor', text: 'Что изменилось в 2026' },
      { id: 'tablica', text: 'Таблица штрафов по статьям' },
      { id: 'oborotnye', text: 'Оборотные штрафы за утечки' },
      { id: 'kak-izbezhat', text: 'Как избежать' },
      { id: 'faq', text: 'FAQ' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    relatedSlugs: ['oborotnye-shtrafy-utechki-pd-2026', 'audit-152-fz-2026', 'utechki-pd-24-chasa-2026'] }),

  E({ slug: 'otzyv-soglasiya-i-soglasie-za-rebenka-pd-2026', category: 'legal', heroIcon: 'ph-fill ph-user-focus',
    title: 'Согласие на обработку ПД: как отозвать и как оформить за несовершеннолетнего',
    metaTitle: 'Отзыв согласия на ПД и согласие за ребёнка',
    metaDescription: 'Как отозвать согласие на обработку персональных данных и как оформить согласие за несовершеннолетнего (школы, секции, детские центры): порядок, сроки и образцы 2026.',
    metaKeywords: 'отзыв согласия на обработку персональных данных, как отозвать согласие пд, согласие на обработку пд несовершеннолетнего, согласие за ребенка школа, образец отзыва согласия',
    excerpt: 'Как отозвать согласие на обработку ПД и как оформить согласие за несовершеннолетнего для школ, секций и детских центров: порядок, сроки и готовые образцы.',
    tags: ['152-ФЗ', 'согласие', 'персональные данные', 'дети'],
    toc: [
      { id: 'otzyv', text: 'Как отозвать согласие' },
      { id: 'obrazec-otzyva', text: 'Образец отзыва' },
      { id: 'za-rebenka', text: 'Согласие за несовершеннолетнего' },
      { id: 'obrazec-detskiy', text: 'Образец для школ и секций' },
      { id: 'faq', text: 'FAQ' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    relatedSlugs: ['soglasie-na-obrabotku-pd-2026', 'audit-152-fz-2026', '152-fz-dlya-organizatora-meropriyatiy-2026'] }),

  E({ slug: 'dogovor-porucheniya-obrabotka-pd-2026', category: 'legal', heroIcon: 'ph-fill ph-handshake',
    title: 'Договор поручения на обработку персональных данных: когда нужен и что включить',
    metaTitle: 'Договор поручения на обработку ПД: образец',
    metaDescription: 'Договор поручения на обработку персональных данных: когда он нужен (СДЭК, CRM, облака, подрядчики), что обязательно включить по 152-ФЗ и готовый чек-лист с образцом 2026.',
    metaKeywords: 'договор поручения на обработку персональных данных, поручение обработки пд образец, договор с оператором пд, 152-фз поручение обработки, обработчик персональных данных',
    excerpt: 'Когда нужен договор поручения на обработку ПД (СДЭК, CRM, облака, подрядчики), что обязательно включить по 152-ФЗ и готовый чек-лист с образцом.',
    tags: ['152-ФЗ', 'договор', 'персональные данные', 'подрядчики'],
    toc: [
      { id: 'chto-eto', text: 'Что такое поручение обработки' },
      { id: 'kogda-nuzhen', text: 'Когда нужен' },
      { id: 'chto-vklyuchit', text: 'Что включить в договор' },
      { id: 'obrazec', text: 'Образец и чек-лист' },
      { id: 'faq', text: 'FAQ' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    relatedSlugs: ['soglasie-na-obrabotku-pd-2026', 'audit-152-fz-2026', 'lokalizaciya-pd-2026'] }),

  E({ slug: 'chestnyy-znak-podklyuchenie-poshagovo-2026', category: 'industries', heroIcon: 'ph-fill ph-barcode',
    servicesOffer: SVC_AUTO, ctaInternal: CTA_AUTO,
    title: 'Честный знак: подключение пошагово в 2026 — что нужно и с чего начать',
    metaTitle: 'Честный знак: подключение пошагово 2026',
    metaDescription: 'Как подключиться к Честному знаку в 2026 пошагово: что такое маркировка и кого касается, что нужно (УКЭП, ЭДО, сканер), порядок регистрации и частые ошибки при подключении.',
    metaKeywords: 'честный знак подключение, честный знак пошагово, как подключиться к честному знаку, маркировка товаров честный знак, регистрация в честном знаке',
    excerpt: 'Что такое Честный знак и кого он касается, что нужно для подключения (УКЭП, ЭДО, сканер), пошаговый порядок регистрации и частые ошибки, из-за которых буксуют.',
    tags: ['Честный знак', 'маркировка', 'автоматизация', 'бизнес'],
    toc: [
      { id: 'chto-eto', text: 'Что это и кого касается' },
      { id: 'chto-nuzhno', text: 'Что нужно для подключения' },
      { id: 'shagi', text: 'Подключение по шагам' },
      { id: 'avtomatizaciya', text: 'Автоматизация и ошибки' },
      { id: 'faq', text: 'FAQ' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    relatedSlugs: ['finteh-i-platezhi-dlya-biznesa-2027', 'avtomatizaciya-riteyla-seti-2026', 'chestny-znak-obschepit-sibir'] }),
];
