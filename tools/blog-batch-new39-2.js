// Одиночная статья (new39-2): перенос заявок из старой системы заявок в новую.
// Опора: кейс servis-desk-1c-telegram-max-keys-2026 (версия 0.4.1), документация Atlassian по импорту из CSV.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-31';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC = {
  title: 'Перенос заявок в новую систему без потери истории',
  services: [
    { icon: 'ph-fill ph-swap', label: 'Таблица соответствия полей, статусов, клиентов и исполнителей' },
    { icon: 'ph-fill ph-ticket', label: 'Загрузка заявок, времени работ и вложений с сохранением дат' },
    { icon: 'ph-fill ph-shield-check', label: 'Проверка на выборке и параллельная работа неделю' },
    { icon: 'ph-fill ph-database', label: 'Резервная копия и откат, подготовленные до загрузки' },
  ],
  ctaLabel: 'Обсудить перенос заявок', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'perenos-zayavok-iz-staroy-sistemy-v-novuyu-2026',
    category: 'development',
    published: true,
    title: 'Перенос заявок из старой системы в новую: что и как не потерять',
    metaTitle: 'Перенос заявок в новую систему: поля, статусы, откат',
    metaDescription: 'Как перенести заявки из Итилиума, Jira или Excel в новую систему: что переносить, сопоставление полей и статусов, даты, проверка на выборке и откат.',
    metaKeywords: 'перенос заявок в новую систему, миграция из итилиум, импорт из jira csv, перенос тикетов, смена системы заявок, перенос заявок из excel, сервис-деск миграция, откат миграции',
    excerpt: 'Что переносить при смене системы заявок: сами заявки, исполнителей, клиентов, время работ, комментарии и вложения. Как сопоставить поля и статусы, не потерять даты, проверить загрузку на выборке, неделю работать параллельно и подготовить откат. Пример из моего проекта: загрузка задач и работ в сервис-деск на 1С.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 7,
    heroIcon: 'ph-fill ph-swap',
    tags: ['перенос данных', 'система заявок', 'сервис-деск', 'импорт', 'Jira', '1С'],
    toc: toc(
      ['chto-perenosit', 'Что переносить из старой системы заявок'],
      ['sopostavlenie', 'Как сопоставить поля, статусы и людей'],
      ['vygruzka-sistem', 'Выгрузка из Итилиума, Jira и Excel: что учесть'],
      ['istoriya', 'Как не потерять историю и даты'],
      ['proverka', 'Проверка на выборке до полной загрузки'],
      ['parallelno', 'Параллельная работа неделю и откат'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит перенос заявок'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['servis-desk-1c-telegram-max-keys-2026', 'perehod-s-crm-na-crm-perenos-dannyh-2026', 'svyazat-1c-i-bitrix24-2026', 'uyti-s-bitrix24-na-svoyu-sistemu-bez-ostanovki-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/business-automation/', label: 'Автоматизация процессов' },
    servicesOffer: SVC,
    contentHtml: C('perenos-zayavok-iz-staroy-sistemy-v-novuyu-2026'),
  },
];
