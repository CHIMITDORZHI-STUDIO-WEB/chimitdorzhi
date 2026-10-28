module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-calendar-star',
    title: 'Личный календарь по дате рождения: бот, мини-приложение и PDF вместо Excel',
    metaTitle: 'Кейс: личный календарь по дате рождения в боте и PDF',
    metaDescription: 'Предложение для преподавателя нумерологии: бот, мини-приложение и PDF на год вместо Excel. Расчёт перенесён в код и сверен 756 из 756. Идёт обсуждение.',
    excerpt: 'Преподаватель нумерологии раздавала студентам календарь на год через копии Excel-файла. Я перенёс её формулы в код, сверил расчёт с её PDF (756 чисел из 756) и собрал презентацию: бот в Telegram, мини-приложение, PDF и кабинет. Предложение передано, решение за заказчицей.',
    tags: ['кейс', 'Telegram-бот', 'мини-приложение', 'PDF', 'онлайн-обучение'],
    cta: 'bots',
    relatedSlugs: ['personalnye-razbory-eksperta-kak-avtomatizirovat-raschet-i-slaydy-2026', 'servis-personalnyh-razborov-dlya-astrologa-2026', 'telegram-mini-app-chto-eto-2026', 'platforma-onlayn-shkoly-2026'],
  },
  flagship: {
    name: 'Личный календарь для студентов',
    slug: 'lichnyy-kalendar-po-date-rozhdeniya-predlozhenie-keys-2026',
    type: 'doc', done: false, delivered: true, intl: true,
    task: 'Преподаватель нумерологии из Дубая выдавала студентам календарь на год через копии Excel-файла с формулами. Нужна программа: студент вводит дату рождения и получает календарь в PDF. Тексты из файла не переносить, взять только структуру и формулы.',
    solution: 'Перенёс формулы из Excel в код на JavaScript и сверил расчёт с её PDF. Собрал презентацию на 11 слайдов: бот в Telegram, мини-приложение и версия в браузере, экраны месяца и дня, PDF на год, кабинет с текстами, доступом и рассылкой, запуск в три этапа. Перекрасил презентацию в цвета её сайта.',
    result: 'Расчёт совпал с её PDF: 756 чисел из 756, ошибка Excel с 29 февраля исправлена. Презентация передана, идёт обсуждение, решение за заказчицей. Бот и мини-приложение пока не написаны.',
    stack: ['JavaScript', 'Node.js', 'HTML и CSS', 'Playwright', 'PDF'],
    en: {
      task: 'A numerology teacher in Dubai gave her students a yearly calendar through copies of an Excel file with formulas. She needed a program: a student enters a date of birth and gets the calendar as a PDF. The texts from the file were not to be carried over, only the structure and the formulas.',
      solution: 'I moved the Excel formulas into JavaScript code and checked the calculation against her PDF. I built an 11-slide presentation: a Telegram bot, a mini app and a browser version, month and day screens, a yearly PDF, a dashboard for texts, access and broadcasts, and a three-stage launch. I recolored the presentation in the colors of her website.',
      result: 'The calculation matched her PDF: 756 numbers out of 756, and the Excel error with February 29 is fixed. The presentation has been handed over, the discussion is ongoing and the decision is up to the client. The bot and the mini app have not been built yet.',
    },
    es: {
      task: 'Una profesora de numerología en Dubái entregaba a sus alumnos un calendario anual mediante copias de un archivo de Excel con fórmulas. Necesitaba un programa: el alumno introduce su fecha de nacimiento y recibe el calendario en PDF. Los textos del archivo no debían trasladarse, solo la estructura y las fórmulas.',
      solution: 'Pasé las fórmulas de Excel a código JavaScript y comprobé el cálculo con su PDF. Preparé una presentación de 11 diapositivas: bot en Telegram, mini aplicación y versión en el navegador, pantallas de mes y de día, PDF anual, un panel para textos, acceso y envíos, y un lanzamiento en tres etapas. Cambié los colores de la presentación a los de su sitio web.',
      result: 'El cálculo coincidió con su PDF: 756 números de 756, y el error de Excel con el 29 de febrero está corregido. La presentación se entregó, la conversación sigue y la decisión depende de la clienta. El bot y la mini aplicación todavía no están hechos.',
    },
  },
};
