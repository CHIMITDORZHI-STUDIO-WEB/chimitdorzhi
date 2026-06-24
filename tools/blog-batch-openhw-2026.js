// Кластер «Открытое железо» в рубрике Open-source: open hardware, 3D-печать, IoT, Raspberry Pi, ЧПУ.
// Блок «Где взять» с ссылкой на репозиторий рендерится по карте opensource-repos.js.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-06-23';
const SVC = {
  title: 'Что я делаю с open-source и железом',
  services: [
    { icon: 'ph-fill ph-cpu', label: 'IoT-датчики и мониторинг' },
    { icon: 'ph-fill ph-hard-drives', label: 'Мини-серверы и self-hosted' },
    { icon: 'ph-fill ph-flow-arrow', label: 'Автоматизация процессов' },
    { icon: 'ph-fill ph-shield-check', label: 'Безопасность и 152-ФЗ' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Внедрение и поддержка' },
  ],
};
const OS = { url: 'https://chimitdorzhi.tech/predlozheniya/open-source-pod-klyuch/', label: 'Развернуть open-source под ключ' };
const AUTO = { url: 'https://chimitdorzhi.tech/services/business-automation/', label: 'Автоматизировать под ключ' };
const PRED = { url: 'https://chimitdorzhi.tech/predlozheniya/', label: 'Обсудить задачу' };
const E = (o) => Object.assign({
  category: 'opensource', published: true, datePublished: D, dateModified: D, readingMinutes: 9,
  servicesOffer: SVC,
}, o, { contentHtml: C(o.slug) });
const T = (...ids) => ids.map(([id, text]) => ({ id, text }));

module.exports = [
  E({ slug: 'open-hardware-otkrytoe-zhelezo-2026', heroIcon: 'ph-fill ph-circuitry', ctaInternal: OS,
    title: 'Открытое железо (open hardware): что это и зачем бизнесу',
    metaTitle: 'Открытое железо (open hardware)',
    metaDescription: 'Открытое железо (open hardware) простыми словами: аппаратные проекты с открытыми схемами и прошивками (Arduino, Prusa, Raspberry Pi, RISC-V). Зачем бизнесу — дешевле кастомные устройства, нет вендор-лока, прототипирование. Где взять подборку проектов и как начать.',
    excerpt: 'Открытое железо — это устройства с открытыми схемами и прошивками, которые можно повторять и дорабатывать, как open-source софт. Разбираю, что это, известные проекты и зачем бизнесу. Со ссылкой на подборку.',
    tags: ['open hardware', 'открытое железо', 'Arduino', 'open-source'],
    toc: T(['chto-eto','Что такое открытое железо'],['primery-proektov','Известные проекты'],['zachem-biznesu','Зачем это бизнесу'],['kak-nachat','Как начать'],['riski','Риски и ограничения'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['3d-pechat-dlya-biznesa-prusa-2026', 'iot-na-otkrytom-zheleze-dlya-biznesa-2026', 'raspberry-pi-dlya-biznesa-2026'] }),
  E({ slug: '3d-pechat-dlya-biznesa-prusa-2026', heroIcon: 'ph-fill ph-cube', ctaInternal: PRED,
    title: '3D-печать для бизнеса на Prusa: прототипы, запчасти и мелкосерийка',
    metaTitle: '3D-печать для бизнеса на Prusa',
    metaDescription: '3D-печать для бизнеса на Prusa и открытых решениях: быстрые прототипы, запчасти и оснастка под заказ, мелкосерийное производство. Для каких задач, как внедрить и когда это окупается. Где взять открытый слайсер PrusaSlicer.',
    excerpt: '3D-печать даёт бизнесу быстрые прототипы, запчасти под заказ и мелкосерийку. Разбираю, для каких задач подходит, как внедрить на открытых решениях Prusa и когда выгоднее своё, а когда печать на заказ.',
    tags: ['3D-печать', 'Prusa', 'прототипы', 'производство'],
    toc: T(['chto-eto','Что даёт 3D-печать'],['dlya-chego','Для каких задач'],['prusa','Prusa и альтернативы'],['kak-vnedrit','Как внедрить'],['ekonomika','Экономика и окупаемость'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['open-hardware-otkrytoe-zhelezo-2026', 'chpu-lazernaya-rezka-open-source-2026', 'iot-na-otkrytom-zheleze-dlya-biznesa-2026'] }),
  E({ slug: 'iot-na-otkrytom-zheleze-dlya-biznesa-2026', heroIcon: 'ph-fill ph-thermometer', ctaInternal: AUTO,
    title: 'IoT на открытом железе для бизнеса: датчики, мониторинг и автоматизация',
    metaTitle: 'IoT на открытом железе для бизнеса',
    metaDescription: 'IoT на открытом железе для бизнеса: недорогие датчики и контроллеры (Arduino, ESP32) с открытой прошивкой ESPHome для мониторинга температуры, оборудования, ресурсов и протечек. Сценарии, как внедрить и безопасность данных (152-ФЗ). Где взять ESPHome.',
    excerpt: 'Недорогие датчики на Arduino и ESP32 с открытой прошивкой следят за температурой, оборудованием и ресурсами и шлют уведомления. Разбираю сценарии для бизнеса, как внедрить и как с безопасностью данных.',
    tags: ['IoT', 'датчики', 'ESP32', 'мониторинг'],
    toc: T(['chto-eto','Что такое IoT на открытом железе'],['scenarii','Сценарии для бизнеса'],['zhelezo-i-soft','Железо и софт'],['kak-vnedrit','Как внедрить'],['bezopasnost','Безопасность и 152-ФЗ'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['home-assistant-umnyy-ofis-2026', 'open-hardware-otkrytoe-zhelezo-2026', 'raspberry-pi-dlya-biznesa-2026'] }),
  E({ slug: 'raspberry-pi-dlya-biznesa-2026', heroIcon: 'ph-fill ph-circuit-board', ctaInternal: OS,
    title: 'Raspberry Pi для бизнеса: мини-сервер, киоск, табло и автоматизация',
    metaTitle: 'Raspberry Pi для бизнеса',
    metaDescription: 'Raspberry Pi для бизнеса: недорогой одноплатный компьютер под информационное табло, инфо-киоск, мини-сервер, контроллер IoT-датчиков и медиаплеер для витрины. Сценарии, что можно собрать, как начать и ограничения. Где взять подборку проектов.',
    excerpt: 'Raspberry Pi — дешёвое универсальное «железо» под табло, киоски, мини-сервер и IoT. Разбираю сценарии для бизнеса, что можно собрать, как начать и где у платы ограничения. Со ссылкой на подборку проектов.',
    tags: ['Raspberry Pi', 'мини-сервер', 'киоск', 'автоматизация'],
    toc: T(['chto-eto','Что такое Raspberry Pi'],['scenarii','Сценарии для бизнеса'],['chto-mozhno-sobrat','Что можно собрать'],['kak-nachat','Как начать'],['ogranicheniya','Ограничения'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['open-hardware-otkrytoe-zhelezo-2026', 'iot-na-otkrytom-zheleze-dlya-biznesa-2026', 'self-hosted-infrastruktura-2026'] }),
  E({ slug: 'chpu-lazernaya-rezka-open-source-2026', heroIcon: 'ph-fill ph-scissors', ctaInternal: PRED,
    title: 'ЧПУ и лазерная резка на открытом железе: как малому производству начать',
    metaTitle: 'ЧПУ и лазерная резка на open source',
    metaDescription: 'ЧПУ и лазерная резка на открытом железе для малого производства: станки с открытой прошивкой (GRBL) для деталей, гравировки, вывесок и мелкосерийки. Применение, открытые решения, как внедрить и техника безопасности. Где взять прошивку GRBL.',
    excerpt: 'ЧПУ-станки и лазерные резаки с открытой прошивкой — доступный вход в малое производство: детали, гравировка, вывески, мерч. Разбираю применение, открытые решения, внедрение и безопасность. Со ссылкой на GRBL.',
    tags: ['ЧПУ', 'лазерная резка', 'GRBL', 'производство'],
    toc: T(['chto-eto','Что это такое'],['primenenie','Для чего это бизнесу'],['resheniya','Открытые решения'],['kak-vnedrit','Как внедрить'],['bezopasnost','Безопасность и нюансы'],['faq','FAQ'],['vyvody','Коротко о главном']),
    relatedSlugs: ['3d-pechat-dlya-biznesa-prusa-2026', 'open-hardware-otkrytoe-zhelezo-2026', 'iot-na-otkrytom-zheleze-dlya-biznesa-2026'] }),
];
