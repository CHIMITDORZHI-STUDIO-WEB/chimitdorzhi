// Тематический батч: защита данных и легальная проверка (3 статьи).
// Не рубрика open-source: своя категория и свой оффер у каждой статьи.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-06-16';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));
const E = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D, readingMinutes: 10,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({
    slug: 'osint-cifrovoy-sled-kompanii-2026', category: 'security', heroIcon: 'ph-fill ph-detective',
    title: 'Что о вашей компании можно узнать из открытых источников — и как закрыть дыры',
    metaTitle: 'Цифровой след компании: что видно и как закрыть',
    metaDescription: 'Что компания невольно публикует о себе в открытых источниках: метаданные документов, открытые папки, утёкшие пароли сотрудников, реквизиты в соцсетях. Чем это грозит и как закрыть дыры — чек-лист аудита цифрового следа и защита данных (152-ФЗ).',
    excerpt: 'О компании из открытых источников видно куда больше, чем кажется: метаданные файлов, открытые папки, утёкшие пароли сотрудников, лишние реквизиты в соцсетях. Разбираю, что именно видно, чем это грозит и как закрыть дыры — с чек-листом для самопроверки.',
    tags: ['безопасность', 'цифровой след', '152-ФЗ', 'защита данных', '2026'],
    toc: toc(['chto-vidno', 'Что видно снаружи'], ['otkuda-utechki', 'Откуда берутся данные'], ['chem-grozit', 'Чем это грозит'], ['kak-zakryt', 'Как закрыть дыры'], ['chek-list', 'Чек-лист аудита'], ['faq', 'FAQ'], ['vyvody', 'Коротко о главном']),
    servicesOffer: {
      title: 'Что я делаю для защиты данных',
      services: [
        { icon: 'ph-fill ph-magnifying-glass', label: 'Аудит цифрового следа компании' },
        { icon: 'ph-fill ph-file-lock', label: 'Чистка метаданных и утечек' },
        { icon: 'ph-fill ph-shield-check', label: 'Соответствие 152-ФЗ' },
        { icon: 'ph-fill ph-lock-key', label: 'Защита доступов и аккаунтов' },
        { icon: 'ph-fill ph-lifebuoy', label: 'Сопровождение и обновления' },
      ],
    },
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/152-fz-pod-klyuch/', label: 'Аудит и защита данных' },
    relatedSlugs: ['wazuh-monitoring-bezopasnosti-2026', 'bitwarden-menedzher-paroley-2026', 'duplicati-rezervnoe-kopirovanie-2026'],
  }),
  E({
    slug: 'proverka-kontragentov-due-diligence-2026', category: 'legal', heroIcon: 'ph-fill ph-scales',
    title: 'Проверка контрагентов и должная осмотрительность (due diligence) легально',
    metaTitle: 'Проверка контрагентов: due diligence легально',
    metaDescription: 'Как легально проверить контрагента перед сделкой: ЕГРЮЛ и сервис ФНС, картотека арбитражных дел, банк данных ФССП, реестр недобросовестных поставщиков, бухотчётность. На что смотреть, как автоматизировать мониторинг и где границы законности.',
    excerpt: 'Должная осмотрительность защищает от сделок с фирмами-однодневками, налоговых рисков и неплатежей. Разбираю, как легально проверить контрагента по официальным реестрам, на что смотреть, как автоматизировать регулярный мониторинг — и где проходит граница законности.',
    tags: ['проверка контрагентов', 'due diligence', 'реестры', 'риски', '2026'],
    toc: toc(['zachem-proveryat', 'Зачем проверять'], ['oficialnye-reestry', 'Официальные источники'], ['priznaki-riska', 'Признаки риска'], ['kak-avtomatizirovat', 'Как автоматизировать'], ['granicy-zakonnosti', 'Границы законности'], ['faq', 'FAQ'], ['vyvody', 'Коротко о главном']),
    servicesOffer: {
      title: 'Что я делаю для проверки рисков',
      services: [
        { icon: 'ph-fill ph-list-checks', label: 'Регламент проверки контрагентов' },
        { icon: 'ph-fill ph-bell-ringing', label: 'Мониторинг изменений и оповещения' },
        { icon: 'ph-fill ph-chart-bar', label: 'Сводная панель по контрагентам' },
        { icon: 'ph-fill ph-robot', label: 'AI-анализ открытых данных' },
        { icon: 'ph-fill ph-shield-check', label: 'Законность и 152-ФЗ' },
      ],
    },
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/ai-monitoring-riskov/', label: 'Настроить мониторинг рисков' },
    relatedSlugs: ['osint-cifrovoy-sled-kompanii-2026', 'monitoring-upominaniy-brenda-2026', 'wazuh-monitoring-bezopasnosti-2026'],
  }),
  E({
    slug: 'monitoring-upominaniy-brenda-2026', category: 'marketing', heroIcon: 'ph-fill ph-megaphone-simple',
    title: 'Мониторинг упоминаний бренда и репутации: где о вас пишут и как это отслеживать',
    metaTitle: 'Мониторинг упоминаний бренда и репутации',
    metaDescription: 'Как настроить мониторинг упоминаний бренда: где о компании пишут (соцсети, отзовики, карты, маркетплейсы, СМИ), как собрать всё в одну панель, определять тональность, быстро реагировать на негатив и считать метрики репутации.',
    excerpt: 'Если вы не следите за упоминаниями, репутацией управляет кто угодно, только не вы. Разбираю, где о компании пишут, как настроить мониторинг и собрать всё в одну панель, как реагировать на негатив и какие метрики репутации отслеживать.',
    tags: ['репутация', 'мониторинг бренда', 'отзывы', 'маркетинг', '2026'],
    toc: toc(['zachem-monitorit', 'Зачем мониторить'], ['gde-pishut', 'Где о вас пишут'], ['kak-nastroit', 'Как настроить'], ['rabota-s-otzyvami', 'Работа с негативом'], ['metriki', 'Метрики и отчёты'], ['faq', 'FAQ'], ['vyvody', 'Коротко о главном']),
    servicesOffer: {
      title: 'Что я делаю для управления репутацией',
      services: [
        { icon: 'ph-fill ph-binoculars', label: 'Настройка мониторинга упоминаний' },
        { icon: 'ph-fill ph-smiley-meh', label: 'AI-определение тональности' },
        { icon: 'ph-fill ph-chat-centered-dots', label: 'Сценарии работы с отзывами' },
        { icon: 'ph-fill ph-chart-line-up', label: 'Метрики и отчёты по репутации' },
        { icon: 'ph-fill ph-bell-ringing', label: 'Оповещения о негативе' },
      ],
    },
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/ai-upravlenie-reputaciey/', label: 'Настроить мониторинг репутации' },
    relatedSlugs: ['proverka-kontragentov-due-diligence-2026', 'osint-cifrovoy-sled-kompanii-2026', 'mixpost-smm-tsentr-2026'],
  }),
];
