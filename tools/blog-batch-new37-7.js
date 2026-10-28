// Одиночная статья (new37-7): версии сметы и согласование клиентом в боте для ремонтной или подрядной компании.
// Запросы: «клиент согласовал не ту смету», «версии сметы», «согласование сметы с клиентом в боте», «бот для смет ремонтной компании».
// Опора: кейс remkontrol-bot-zayavka-zamer-smeta-predlozhenie-keys-2026 (версии, привязка ответа к версии, проверки, прайс из Excel).
// category 'industries'.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-29';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_SMETA_VERSIONS = {
  title: 'Бот для смет с версиями и согласованием',
  services: [
    { icon: 'ph-fill ph-ruler', label: 'Замер по помещениям с фото и проверками до расчёта' },
    { icon: 'ph-fill ph-calculator', label: 'Смета по прайсу из Excel, версии прайса и сметы' },
    { icon: 'ph-fill ph-check-circle', label: 'Согласие клиента, привязанное к номеру версии' },
    { icon: 'ph-fill ph-clipboard-text', label: 'История заявки для разбора спора' },
  ],
  ctaLabel: 'Обсудить бота для смет', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'versii-smety-i-soglasovanie-klientom-v-bote-2026',
    category: 'industries',
    published: true,
    title: 'Клиент согласовал не ту смету: версии и подтверждение в боте',
    metaTitle: 'Версии сметы и согласование клиентом в боте для ремонта',
    metaDescription: 'Как избежать спора «я согласовал другую смету»: версии сметы, ответ клиента по номеру версии, сравнение, замер по помещениям, прайс из Excel и проверки.',
    metaKeywords: 'версии сметы, согласование сметы с клиентом, клиент согласовал смету, бот для смет ремонт, смета в телеграм боте, сравнение версий сметы, прайс из excel в бот, замер по помещениям, история изменений сметы',
    excerpt: 'Спор о том, какую смету согласовал клиент, начинается с файла, который правили поверх. Разбираю, как бот хранит версии сметы, привязывает ответ клиента к номеру версии, проверяет замер до расчёта и считает старые сметы по их прайсу.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 7,
    heroIcon: 'ph-fill ph-git-diff',
    tags: ['смета', 'ремонт', 'подрядчики', 'бот в Telegram', 'автоматизация'],
    toc: toc(
      ['otkuda-spor', 'Откуда берётся спор «я согласовал другую смету»'],
      ['versii', 'Каждая правка = новая версия'],
      ['otvet-klienta', 'Ответ клиента привязан к версии'],
      ['sravnenie', 'Сравнение версий: что изменилось'],
      ['zamer', 'Замер по помещениям и проверки перед расчётом'],
      ['prays', 'Прайс из Excel и цены старых смет'],
      ['istoriya', 'История для спора'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['remkontrol-bot-zayavka-zamer-smeta-predlozhenie-keys-2026', 'bot-kviz-raschet-smety-2027', 'masteram-i-podryadchikam-raschety-smety-avtomatizaciya-2026', 'remont-kvartir-zayavki-smety-fotootchety-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/development/telegram-bots/', label: 'Разработка Telegram-ботов' },
    servicesOffer: SVC_SMETA_VERSIONS,
    contentHtml: C('versii-smety-i-soglasovanie-klientom-v-bote-2026'),
  },
];
