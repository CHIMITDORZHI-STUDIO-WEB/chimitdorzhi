// Группы и сценарии прайса — общие для страницы /ceny/ (build-prices.js)
// и PDF-версии (build-prices-pdf.js), чтобы они не разъезжались.

// Группы навигации: порядок = порядок на странице и в PDF.
const GROUPS = [
  { key: 'ai', label: 'Искусственный интеллект', short: 'ИИ', icon: 'brain',
    lead: 'От аудита и пилота до своего ИИ на сервере компании: консультанты, агенты, распознавание документов, зрение и речь.' },
  { key: 'employee', label: 'Цифровой сотрудник', short: 'Цифровой сотрудник', icon: 'user-focus',
    lead: 'Один ассистент берёт на себя рутину нескольких сотрудников. Роли подключаются по мере роста, цена работы при этом не растёт.' },
  { key: 'c1', label: '1С и учёт', short: '1С и учёт', icon: 'receipt',
    lead: 'Доработки и интеграции 1С, маркировка, госсистемы, CRM под процесс и автоматизация документов.' },
  { key: 'web', label: 'Сайты и приложения', short: 'Сайты и приложения', icon: 'browser',
    lead: 'Лендинги, магазины и сервисы, приложения для телефона и программы под внутренние задачи.' },
  { key: 'bots', label: 'Боты и мессенджеры', short: 'Боты', icon: 'chat-circle-dots',
    lead: 'Боты и мини-приложения в MAX, Telegram и VK, единое окно для всех переписок.' },
  { key: 'ind', label: 'Решения для отраслей', short: 'Отрасли', icon: 'storefront',
    lead: 'Готовые механики под кафе, салоны, гостиницы, обучение и доставку.' },
  { key: 'mkt', label: 'Маркетинг и продвижение', short: 'Маркетинг', icon: 'megaphone',
    lead: 'SEO и ответы нейросетей, реклама, аналитика, контент и маркетплейсы.' },
  { key: 'sec', label: 'Безопасность и поддержка', short: 'Безопасность', icon: 'shield-check',
    lead: '152-ФЗ, аудит, защита от взлома, инфраструктура и сопровождение.' },
];

// Типовые ситуации: готовый набор позиций, который одной кнопкой попадает в смету.
const SCENARIOS = [
  { title: 'Продаю на маркетплейсах', note: 'Связать 1С с площадками, маркировка, карточки и ведение кабинетов',
    ids: ['1s-i-marketpleysy', 'markirovka-chestnyy-znak', 'kontent-dlya-marketpleysov-i-reklamy', 'menedzher-marketpleysov'] },
  { title: 'Работаю по записи', note: 'Салон, клиника, гостиница: запись с предоплатой, бот, отзывы на картах',
    ids: ['onlayn-zapis-i-bronirovanie', 'bot-v-messendzhere', 'otzyvy-i-kartochki-na-kartah', 'audit-sayta-po-152-fz'] },
  { title: 'Оптовая торговля с 1С', note: 'Кабинет оптовика, заказы из мессенджера, ЭДО и отчёты владельцу',
    ids: ['b2b-kabinet-s-1s', 'bot-zakazov-s-1s', 'edo-i-elektronnaya-podpis', 'otchety-dlya-sobstvennika'] },
  { title: 'Производство и склад', note: 'Описать процессы, CRM под них, учёт въезда и видеоаналитика',
    ids: ['opisanie-processov-i-reglamenty', 'crm-pod-process', 'vezd-po-nomeram', 'videoanalitika-na-gotovyh-modelyah'] },
  { title: 'Хочу ИИ, не знаю, с чего начать', note: 'Аудит, пилот ассистента за три дня и консультант по базе знаний',
    ids: ['audit-i-plan-vnedreniya-ii', 'pilot-za-3-dnya', 'ii-konsultant', 'rabota-assistenta'] },
];

module.exports = { GROUPS, SCENARIOS };
