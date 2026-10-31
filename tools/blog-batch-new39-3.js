// Одиночная статья (new39-3): деньги в программе, копейки, округление, сверка строк и итога.
// Опора: кейсы pulty-sobstvennika-sayt-probnyy-kabinet-keys-2026 и remkontrol-bot-zayavka-zamer-smeta-predlozhenie-keys-2026; технические факты: MDN (Number, Math.round, toFixed).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-31';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC = {
  title: 'Расчёты без расхождений: сметы, счета, партнёрские выплаты',
  services: [
    { icon: 'ph-fill ph-coins', label: 'Деньги в целых копейках и одно правило округления' },
    { icon: 'ph-fill ph-calculator', label: 'Автотест: сумма строк равна итогу' },
    { icon: 'ph-fill ph-file-text', label: 'Сметы, счета и акты по вашим формулам' },
    { icon: 'ph-fill ph-magnifying-glass', label: 'Аудит расчётов в таблице или программе' },
  ],
  ctaLabel: 'Обсудить расчёты', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'dengi-v-programme-hranit-v-kopeykah-2026',
    category: 'development',
    published: true,
    title: 'Деньги в программе: почему суммы хранят в копейках',
    metaTitle: 'Деньги в программе: хранить в копейках, а не дробью',
    metaDescription: 'Почему суммы хранят целыми копейками, где теряются копейки (налог, скидка, процент партнёра, деление) и как проверить, что сумма строк равна итогу.',
    metaKeywords: 'деньги в копейках, хранение денег в программе, округление в смете, сумма строк равна итогу, ошибки округления, IEEE 754, расчёт сметы, копейки в счёте',
    excerpt: 'Почему программа хранит рубли целым числом копеек, где копейки пропадают при делении, налоге, скидке и проценте партнёра, какое правило округления записать в ТЗ и как автотестом проверить, что сумма строк равна итогу. Короткая техническая врезка по документации MDN и два примера из моей практики.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 7,
    heroIcon: 'ph-fill ph-calculator',
    tags: ['деньги в программе', 'округление', 'сметы', 'расчёты', 'автотесты', '2026'],
    toc: toc(
      ['zachem-kopeyki', 'Зачем хранить деньги в копейках'],
      ['gde-teryayutsya', 'Где теряются копейки'],
      ['okruglenie', 'Правила округления в сметах и счетах'],
      ['proverka-summy', 'Проверка «сумма строк равна итогу»'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько это стоит'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['pulty-sobstvennika-sayt-probnyy-kabinet-keys-2026', 'remkontrol-bot-zayavka-zamer-smeta-predlozhenie-keys-2026', 'bot-kviz-raschet-smety-2027', 'versii-smety-i-soglasovanie-klientom-v-bote-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/business-automation/', label: 'Автоматизация бизнеса' },
    servicesOffer: SVC,
    contentHtml: C('dengi-v-programme-hranit-v-kopeykah-2026'),
  },
];
