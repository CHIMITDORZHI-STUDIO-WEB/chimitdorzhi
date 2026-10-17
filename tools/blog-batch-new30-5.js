// Одиночная статья (new30-5): НДС и электронные счета в ОАЭ для малого бизнеса, чеки через бота.
// Запросы: «НДС в ОАЭ для малого бизнеса», «e-invoicing ОАЭ 2027», «электронные счета ОАЭ».
// Категория biznes-krugozor: налоговый и учётный кругозор предпринимателя, не отраслевая статья
// (рядом в той же категории «что сделать до первой продажи: регистрация, счёт, касса, учёт»).
// Факты: tax.gov.ae (решения МинФина № 243, 244, 64 от 2025, Решение Кабинета № 106 от 2025 и № 74 от 2023), u.ae.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-18';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_INVOICE = {
  title: 'Учёт чеков и счетов для компании в ОАЭ',
  services: [
    { icon: 'ph-fill ph-robot', label: 'Telegram-бот для чеков сотрудников' },
    { icon: 'ph-fill ph-scan', label: 'Распознавание суммы, VAT, TRN и даты' },
    { icon: 'ph-fill ph-table', label: 'Реестр расходов для бухгалтера' },
    { icon: 'ph-fill ph-file-text', label: 'Связка учётной системы с провайдером e-invoicing' },
  ],
  ctaLabel: 'Обсудить учёт чеков', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'nds-i-elektronnye-scheta-v-oae-e-invoicing-2026',
    category: 'biznes-krugozor',
    published: true,
    title: 'НДС и электронные счета в ОАЭ: что изменится для малого бизнеса',
    metaTitle: 'НДС в ОАЭ и e-invoicing 2027: что делать малому бизнесу',
    metaDescription: 'НДС в ОАЭ для малого бизнеса: ставка 5%, пороги AED 375 000 и 187 500, график e-invoicing 2027, провайдеры Peppol, штрафы и учёт чеков через Telegram-бота.',
    metaKeywords: 'ндс в оаэ для малого бизнеса, e-invoicing оаэ 2027, электронные счета оаэ, vat оаэ порог регистрации, peppol оаэ, accredited service provider оаэ, чеки через бота, распознавание чеков',
    excerpt: 'Ставка VAT, пороги регистрации и декларации в ОАЭ, что такое электронный счёт по правилам Минфина, кто и когда обязан перейти, штрафы, сроки хранения и как собирать чеки расходов через бота в Telegram.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-receipt',
    tags: ['ОАЭ', 'НДС', 'электронные счета', 'учёт расходов', 'Telegram-бот', '2026'],
    toc: toc(
      ['nds-osnovy', 'НДС в ОАЭ для малого бизнеса: ставка, пороги, декларации'],
      ['chto-takoe-e-invoicing', 'Электронные счета в ОАЭ: чем они отличаются от PDF'],
      ['grafik', 'График перехода: e-invoicing ОАЭ 2027'],
      ['shtrafy', 'Штрафы и сроки хранения'],
      ['podgotovka', 'Как малому бизнесу подготовиться'],
      ['cheki-bot', 'Чеки расходов через бота в Telegram'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['sayt-dlya-biznesa-v-oae-yazyki-oplata-domen-zakon-2026', 'podotchet-i-cheki-sotrudnikov-2026', 'ii-razbiraet-cheki-v-tablicu-2026', 'nakladnye-postavshchikov-v-1c-raspoznavanie-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/accounting-automation/', label: 'Автоматизация учёта и документов' },
    servicesOffer: SVC_INVOICE,
    contentHtml: C('nds-i-elektronnye-scheta-v-oae-e-invoicing-2026'),
  },
];
