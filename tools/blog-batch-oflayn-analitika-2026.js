// Батч: аналитика офлайн-трафика (радар + BLE + Wi-Fi-портал с хешированием),
// разоблачение Wi-Fi-подсчёта по MAC, IT для фитнес-клуба. Короткие статьи 4-5 мин.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-08-10';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_ANALYTICS = {
  title: 'Что я делаю по офлайн-аналитике',
  services: [
    { icon: 'ph-fill ph-radio-button', label: 'Подсчёт трафика на радаре без камер и биометрии' },
    { icon: 'ph-fill ph-wifi-high', label: 'Гостевой Wi-Fi с captive-порталом и согласием' },
    { icon: 'ph-fill ph-chart-line-up', label: 'Дашборды проходимости и возвратных визитов' },
    { icon: 'ph-fill ph-shield-check', label: 'Обезличивание и хранение данных по 152-ФЗ' },
  ],
  ctaLabel: 'Обсудить внедрение', ctaUrl: 'https://t.me/chimitdorzhi',
};

const SVC_FITNESS = {
  title: 'Что я делаю для фитнес-клуба',
  services: [
    { icon: 'ph-fill ph-chart-bar', label: 'Аналитика загрузки по часам и залам' },
    { icon: 'ph-fill ph-user-circle-plus', label: 'Ранний сигнал оттока по частоте визитов' },
    { icon: 'ph-fill ph-wifi-high', label: 'Гостевой Wi-Fi и легальный сбор лидов' },
    { icon: 'ph-fill ph-medal', label: 'Программа лояльности и удержание' },
  ],
  ctaLabel: 'Обсудить проект', ctaUrl: 'https://t.me/chimitdorzhi',
};

const mk = (o, svc) => Object.assign({
  published: true, datePublished: D, dateModified: D,
  readingMinutes: 5, shortForm: true, servicesOffer: svc,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  mk({
    slug: 'analitika-oflayn-trafika-2026',
    category: 'industries',
    heroIcon: 'ph-fill ph-chart-line-up',
    title: 'Аналитика офлайн-трафика: как считать посетителей и превращать в выручку',
    metaTitle: 'Аналитика офлайн-трафика: считаем посетителей',
    metaDescription: 'Как радар, BLE и Wi-Fi-портал вместе считают трафик офлайн-точки, находят возвратных гостей и остаются в рамках 152-ФЗ за счёт обезличивания.',
    metaKeywords: 'аналитика офлайн трафика, подсчёт посетителей, счётчик посетителей, ble сканирование, wi-fi аналитика, проходимость магазина, обезличивание данных 152-фз',
    excerpt: 'Касса знает число чеков, но не знает, сколько людей прошло мимо и не купило. Разбираю, как собрать честную аналитику офлайн-трафика из радара, BLE и Wi-Fi-портала, где здесь деньги для бизнеса и как удержать всё это в рамках 152-ФЗ.',
    tags: ['аналитика', 'трафик', 'ритейл', '152-ФЗ', '2026'],
    toc: toc(
      ['zachem', 'Зачем считать трафик'],
      ['istochniki', 'Три источника данных'],
      ['obezlichivanie', 'Как остаться в рамках 152-ФЗ'],
      ['polza', 'Что это даёт бизнесу'],
      ['vnedrenie', 'Как внедрить по этапам'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['podschet-posetiteley-magazina-2026', 'openwisp-upravlenie-wifi-2026', 'gostevoy-wifi-po-zakonu-2026', 'programma-loyalnosti-kafe-salon-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/market/#checklist', label: 'Собрать аналитику трафика' },
  }, SVC_ANALYTICS),
  mk({
    slug: 'wifi-analitika-mac-ne-rabotaet-2026',
    category: 'marketing',
    heroIcon: 'ph-fill ph-wifi-slash',
    title: 'Wi-Fi-аналитика по MAC больше не работает: почему коробки завышают трафик',
    metaTitle: 'Wi-Fi-аналитика по MAC: почему цифрам нельзя верить',
    metaDescription: 'Из-за рандомизации MAC один посетитель превращается в десятки «устройств». Разбираю, почему Wi-Fi-счётчики завышают трафик и что считать вместо них.',
    metaKeywords: 'wi-fi аналитика, подсчёт по mac, рандомизация mac адреса, счётчик посетителей погрешность, wi-fi трекинг, аналитика проходимости, probe request',
    excerpt: 'Коробочные Wi-Fi-счётчики обещают посчитать всех прохожих по MAC-адресу. С iOS 14 и Android 10 телефоны маскируют MAC при сканировании сетей, и один человек превращается в десятки «уникальных устройств». Разбираю, почему этим цифрам нельзя верить и чем считать трафик честно.',
    tags: ['Wi-Fi', 'аналитика', 'маркетинг', 'трафик', '2026'],
    toc: toc(
      ['obeshchanie', 'Что обещают коробки'],
      ['pochemu-slomalos', 'Почему это сломалось'],
      ['naskolko', 'Насколько врут цифры'],
      ['chto-vmesto', 'Что считать вместо этого'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['analitika-oflayn-trafika-2026', 'podschet-posetiteley-magazina-2026', 'gostevoy-wifi-po-zakonu-2026', 'marketing-i-trafik-2027'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/market/#checklist', label: 'Собрать честную аналитику' },
  }, SVC_ANALYTICS),
  mk({
    slug: 'it-dlya-fitnes-kluba-2026',
    category: 'industries',
    heroIcon: 'ph-fill ph-barbell',
    title: 'IT для фитнес-клуба: удержание, загрузка залов и аналитика без слежки',
    metaTitle: 'IT для фитнес-клуба: удержание и аналитика загрузки',
    metaDescription: 'Как фитнес-клубу видеть мёртвые часы, ловить ранний сигнал оттока и собирать лиды легально — без парсинга чужих баз и слежки за клиентами.',
    metaKeywords: 'it для фитнес клуба, crm фитнес клуб, удержание клиентов фитнес, загрузка зала аналитика, отток клиентов фитнес, лиды для фитнес клуба, программа лояльности фитнес',
    excerpt: 'Фитнес-клуб теряет клиентов тихо: человек перестаёт ходить за месяц до того, как не продлит абонемент. Разбираю, как IT помогает увидеть мёртвые часы, поймать ранний сигнал оттока и собирать лиды легально — без покупки чужих баз и слежки.',
    tags: ['фитнес', 'удержание', 'аналитика', 'лиды', '2026'],
    toc: toc(
      ['problema', 'Как клуб теряет клиентов'],
      ['zagruzka', 'Загрузка залов по часам'],
      ['ottok', 'Ранний сигнал оттока'],
      ['lidy', 'Лиды без чужих баз'],
      ['vnedrenie', 'С чего начать'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['cifrovizaciya-fitnes-kluba-2026', 'analitika-oflayn-trafika-2026', 'programma-loyalnosti-kafe-salon-2026', 'sistemy-loyalnosti-2027'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/market/#checklist', label: 'Обсудить IT для клуба' },
  }, SVC_FITNESS),
];
