// Экспертный батч про цифровые активы: IT-угол, образовательно, без инвест/юрсоветов.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-06-30';

const SVC = {
  title: 'Что я делаю под ключ',
  services: [
    { icon: 'ph-fill ph-code', label: 'Сайты и веб-приложения' },
    { icon: 'ph-fill ph-robot', label: 'Боты в Telegram и MAX, ИИ-агенты' },
    { icon: 'ph-fill ph-flow-arrow', label: 'Автоматизация процессов' },
    { icon: 'ph-fill ph-shield-check', label: 'Безопасность, 152-ФЗ, комплаенс' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Внедрение и поддержка' },
  ],
  ctaLabel: 'Обсудить ваш проект',
  ctaUrl: 'https://t.me/chimitdorzhi',
};
const PRED = { url: 'https://chimitdorzhi.tech/predlozheniya/', label: 'Обсудить ваш проект' };
const SEC = { url: 'https://chimitdorzhi.tech/services/cybersecurity/', label: 'Автоматизировать комплаенс' };

const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D, readingMinutes: 7,
  servicesOffer: SVC,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'cfa-vs-kriptovalyuta-biznes-rf-2027', category: 'finance',
    heroIcon: 'ph-fill ph-scales', ctaInternal: PRED,
    title: 'ЦФА или криптовалюта: что легально для бизнеса в России и в чём разница',
    metaTitle: 'ЦФА vs криптовалюта: что легально бизнесу в РФ',
    metaDescription: 'Чем цифровые финансовые активы (ЦФА) отличаются от криптовалюты, что легально для бизнеса в России, кто выпускает и учитывает ЦФА и как это применимо на практике. Образовательный разбор простыми словами. Не является инвестиционной или юридической консультацией.',
    excerpt: 'Путаете ЦФА и криптовалюту? Разбираю простыми словами, чем они отличаются, что из этого легально для бизнеса в России и где ЦФА реально применимы. Образовательный материал, не инвест- и не юрконсультация.',
    tags: ['ЦФА', 'криптовалюта', 'цифровые активы', 'бизнес'],
    toc: [
      { id: 'chto-takoe-cfa', text: 'Что такое ЦФА' },
      { id: 'chto-takoe-kripta', text: 'Что такое криптовалюта' },
      { id: 'v-chem-raznica', text: 'В чём принципиальная разница' },
      { id: 'chto-legalno-rf', text: 'Что легально в России' },
      { id: 'komu-nuzhno', text: 'Кому и зачем это нужно' },
      { id: 'faq', text: 'FAQ' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    relatedSlugs: ['cfa-dlya-biznesa-2026', 'cifrovoy-rubl-dlya-biznesa-tehnicheski-2027', 'regulirovanie-cifrovyh-aktivov-mira-2027'] }),

  E({ slug: 'cifrovoy-rubl-dlya-biznesa-tehnicheski-2027', category: 'finance',
    heroIcon: 'ph-fill ph-currency-rub', ctaInternal: PRED,
    title: 'Цифровой рубль для бизнеса: что меняется технически и как к этому готовиться',
    metaTitle: 'Цифровой рубль для бизнеса: что меняется технически',
    metaDescription: 'Цифровой рубль простыми словами: чем он отличается от безнала и криптовалюты, как устроен технически, что меняется для бизнеса в расчётах и кассах, как готовить свою IT-инфраструктуру. Образовательный разбор, не инвестиционная и не юридическая консультация.',
    excerpt: 'Цифровой рубль уже на пороге, а что он меняет для бизнеса технически — непонятно. Разбираю: чем он отличается от безнала и крипты, как устроен и как готовить свою IT-инфраструктуру.',
    tags: ['цифровой рубль', 'ЦБ', 'платежи', 'IT-инфраструктура'],
    toc: [
      { id: 'chto-takoe', text: 'Что такое цифровой рубль' },
      { id: 'kak-ustroen', text: 'Как он устроен технически' },
      { id: 'chto-menyaetsya', text: 'Что меняется для бизнеса' },
      { id: 'integraciya-it', text: 'Как готовить IT-инфраструктуру' },
      { id: 'riski-i-mify', text: 'Риски и мифы' },
      { id: 'faq', text: 'FAQ' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    relatedSlugs: ['cifrovoy-rubl-dlya-biznesa-2026', 'cfa-vs-kriptovalyuta-biznes-rf-2027', 'finteh-i-platezhi-dlya-biznesa-2027'] }),

  E({ slug: 'aml-kyc-avtomatizaciya-proverki-klientov-2027', category: 'security',
    heroIcon: 'ph-fill ph-user-focus', ctaInternal: SEC,
    title: 'AML и KYC как ИТ-задача: как автоматизировать проверку клиентов',
    metaTitle: 'AML/KYC: как автоматизировать проверку клиентов',
    metaDescription: 'AML и KYC простыми словами: зачем бизнесу проверять клиентов, как устроена проверка (идентификация, санкционные и другие списки, оценка риска), что можно автоматизировать и как внедрять такие системы. Образовательный разбор с IT-стороны, не юридическая консультация.',
    excerpt: 'Проверка клиентов (KYC) и противодействие отмыванию (AML) — это рутина, которую можно и нужно автоматизировать. Разбираю с IT-стороны: как устроена проверка, что автоматизировать и как внедрять.',
    tags: ['AML', 'KYC', 'автоматизация', 'комплаенс'],
    toc: [
      { id: 'chto-takoe', text: 'Что такое AML и KYC' },
      { id: 'komu-nuzhno', text: 'Кому это нужно' },
      { id: 'kak-rabotaet', text: 'Как устроена проверка' },
      { id: 'chto-avtomatizirovat', text: 'Что можно автоматизировать' },
      { id: 'kak-vnedryat', text: 'Как внедрять систему' },
      { id: 'faq', text: 'FAQ' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    relatedSlugs: ['audit-152-fz-2026', 'zashchita-sayta-ot-botov-parsinga-2027', 'iz-excel-v-crm-za-mesyac-2027'] }),

  E({ slug: 'web3-defi-dao-prostymi-slovami-2027', category: 'expert',
    heroIcon: 'ph-fill ph-graph', ctaInternal: PRED,
    title: 'Web3, DeFi и DAO простыми словами: что это как технологии, а не как инвестиции',
    metaTitle: 'Web3, DeFi, DAO простыми словами: технологии',
    metaDescription: 'Web3, DeFi и DAO простыми словами: что это за технологии, как устроены блокчейн, смарт-контракты и децентрализованные приложения, где они реально применимы и где хайп. Образовательный разбор без инвестиционных советов — только про технологию.',
    excerpt: 'Web3, DeFi, DAO — модные слова, за которыми прячется понятная технология. Разбираю без инвестиционного хайпа: что это такое, как устроено под капотом и где реально применимо.',
    tags: ['Web3', 'DeFi', 'DAO', 'блокчейн'],
    toc: [
      { id: 'chto-takoe-web3', text: 'Что такое Web3' },
      { id: 'defi', text: 'DeFi: децентрализованные финансы' },
      { id: 'dao', text: 'DAO: децентрализованные организации' },
      { id: 'pod-kapotom', text: 'Что под капотом: блокчейн и смарт-контракты' },
      { id: 'gde-primenimo', text: 'Где применимо, а где хайп' },
      { id: 'faq', text: 'FAQ' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    relatedSlugs: ['cfa-vs-kriptovalyuta-biznes-rf-2027', 'regulirovanie-cifrovyh-aktivov-mira-2027', 'cfa-dlya-biznesa-2026'] }),

  E({ slug: 'regulirovanie-cifrovyh-aktivov-mira-2027', category: 'expert',
    heroIcon: 'ph-fill ph-globe-hemisphere-west', ctaInternal: PRED,
    title: 'Как в мире регулируют цифровые активы: MiCA, VARA, MAS — образовательный обзор',
    metaTitle: 'Регулирование цифровых активов: MiCA, VARA, MAS',
    metaDescription: 'Образовательный обзор подходов к регулированию цифровых активов в мире: MiCA в Евросоюзе, VARA в ОАЭ, MAS в Сингапуре — общими словами, зачем нужны такие режимы и что это значит для понимания темы в России. Не инвестиционная и не юридическая консультация.',
    excerpt: 'Пока в России формируется рынок цифровых активов, в мире уже сложились режимы регулирования — MiCA, VARA, MAS. Обзорно и своими словами: зачем они нужны и что из этого полезно понимать. Образовательный материал, не инвест- и не юрсовет.',
    tags: ['регулирование', 'цифровые активы', 'MiCA', 'обзор'],
    toc: [
      { id: 'zachem-regulirovat', text: 'Зачем вообще регулировать' },
      { id: 'mica-es', text: 'MiCA: подход Евросоюза' },
      { id: 'vara-oae', text: 'VARA: подход ОАЭ' },
      { id: 'mas-singapur', text: 'MAS: подход Сингапура' },
      { id: 'chto-znachit-rf', text: 'Что из этого полезно понимать в России' },
      { id: 'faq', text: 'FAQ' },
      { id: 'vyvody', text: 'Коротко о главном' },
    ],
    relatedSlugs: ['cfa-vs-kriptovalyuta-biznes-rf-2027', 'web3-defi-dao-prostymi-slovami-2027', 'cfa-dlya-biznesa-2026'] }),
];
