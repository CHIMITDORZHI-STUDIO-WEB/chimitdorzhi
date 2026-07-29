// Батч «радиоэфир»: контрнаблюдение (поиск чужих камер и трекеров) и учёт
// оборудования по BLE-меткам. Обе темы — про одни и те же радиосигналы,
// но с противоположных сторон: защита от чужих устройств и контроль своих.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-30';

const SVC_SWEEP = {
  title: 'Проверка помещений и техники',
  services: [
    { icon: 'ph-fill ph-magnifying-glass', label: 'Поиск скрытых камер и микрофонов' },
    { icon: 'ph-fill ph-car', label: 'Проверка автомобиля на трекеры' },
    { icon: 'ph-fill ph-wifi-high', label: 'Аудит беспроводной сети офиса' },
    { icon: 'ph-fill ph-file-text', label: 'Отчёт с находками и рекомендациями' },
  ],
  ctaLabel: 'Обсудить проверку', ctaUrl: 'https://t.me/chimitdorzhi',
};

const SVC_TAGS = {
  title: 'Учёт оборудования под ключ',
  services: [
    { icon: 'ph-fill ph-tag', label: 'BLE-метки на технику и инструмент' },
    { icon: 'ph-fill ph-map-pin', label: 'Карта размещения в реальном времени' },
    { icon: 'ph-fill ph-bell-ringing', label: 'Тревога при выносе за периметр' },
    { icon: 'ph-fill ph-clipboard-text', label: 'Инвентаризация без ручного пересчёта' },
  ],
  ctaLabel: 'Обсудить учёт техники', ctaUrl: 'https://t.me/chimitdorzhi',
};

const toc = (...p) => p.map(([id, text]) => ({ id, text }));

module.exports = [
  {
    slug: 'proverka-na-skrytye-kamery-trekery-2026',
    category: 'security',
    published: true,
    title: 'Скрытые камеры и трекеры: как проверить переговорную, офис и машину',
    metaTitle: 'Скрытые камеры и трекеры: как проверить помещение',
    metaDescription: 'Как найти скрытую камеру, микрофон или чужой BLE-трекер: что реально ловится техническими средствами, что делать при находке и когда нужен специалист.',
    metaKeywords: 'скрытая камера как найти, поиск жучков, чужой трекер в машине, проверка переговорной, детектор скрытых камер, ble трекер обнаружить, защита от прослушки',
    excerpt: 'Перед сделкой хочется знать, что разговор в переговорной никто не пишет. Разбираю, что реально ловится техническими средствами, как проверить помещение и машину и что делать, если нашли чужое устройство.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 9,
    heroIcon: 'ph-fill ph-shield-warning',
    tags: ['безопасность', 'скрытые камеры', 'трекеры', 'переговоры', '2026'],
    toc: toc(
      ['komu-nuzhno', 'Кому и когда это нужно'],
      ['chto-ishchut', 'Что вообще прячут'],
      ['kak-nahodyat', 'Как их находят технически'],
      ['chto-ne-lovitsya', 'Чего техника не найдёт'],
      ['svoimi-silami', 'Что можно сделать своими силами'],
      ['nashli-chto-dalshe', 'Нашли устройство — что дальше'],
      ['zakon', 'Правовая сторона'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['osint-cifrovoy-sled-kompanii-2026', 'kibergigiena-sotrudnikov-2026', 'kiberbezopasnost-udalennoy-komandy-2026', 'podschet-posetiteley-magazina-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/cybersecurity/', label: 'Обсудить проверку помещения' },
    servicesOffer: SVC_SWEEP,
    contentHtml: C('proverka-na-skrytye-kamery-trekery-2026'),
  },
  {
    slug: 'uchet-oborudovaniya-ble-metki-2026',
    category: 'industries',
    published: true,
    shortForm: true,
    title: 'BLE-метки для учёта оборудования: где что лежит и куда уехало',
    metaTitle: 'BLE-метки для учёта оборудования и инструмента',
    metaDescription: 'Как метки Bluetooth помогают отслеживать инструмент, технику и тару: инвентаризация без пересчёта, тревога при выносе за периметр, сколько это стоит.',
    metaKeywords: 'ble метки учёт оборудования, отслеживание инструмента, инвентаризация склада, метки на технику, контроль выноса оборудования, bluetooth трекер для бизнеса',
    excerpt: 'Дорогой инструмент кочует между объектами, а перед инвентаризацией начинается квест «где перфоратор». Разбираю, как BLE-метки решают это и во сколько обходятся.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 4,
    heroIcon: 'ph-fill ph-tag',
    tags: ['BLE', 'учёт', 'склад', 'инвентаризация', '2026'],
    toc: toc(
      ['problema', 'Где теряются деньги'],
      ['kak-rabotaet', 'Как работают метки'],
      ['komu-podhodit', 'Кому это окупается'],
      ['skolko-stoit', 'Сколько стоит и что учесть'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['avtomatizaciya-riteyla-seti-2026', 'cifrovizaciya-kurerskih-sluzhb-pvz-2026', 'podschet-posetiteley-magazina-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/robotizaciya-sklada/', label: 'Навести порядок на складе' },
    servicesOffer: SVC_TAGS,
    contentHtml: C('uchet-oborudovaniya-ble-metki-2026'),
  },
];
