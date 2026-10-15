// Серия new27 (коммерческий интент), статья 1: Service Desk на 1С под ключ.
// Опора на кейс servis-desk-1c-telegram-max-keys-2026 (в работе, идёт приёмка).
// Цены только из prices-data.js, без имён клиентов и сумм договоров.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-15';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_HELPDESK = {
  title: 'Service Desk на 1С под ключ',
  services: [
    { icon: 'ph-fill ph-headset', label: 'Заявки из Telegram и MAX в 1С' },
    { icon: 'ph-fill ph-timer', label: 'Задачи, этапы и учёт времени' },
    { icon: 'ph-fill ph-microphone', label: 'Голосовой ввод и ИИ-черновик ответа' },
    { icon: 'ph-fill ph-book-open-text', label: 'База знаний и календарь команды' },
  ],
  ctaLabel: 'Обсудить систему заявок', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'service-desk-na-1s-zakazat-sistemu-zayavok-2026',
    category: 'development',
    published: true,
    title: 'Service Desk на 1С: заказать систему заявок для IT-отдела под ключ',
    metaTitle: 'Service desk на 1С: система заявок для IT-отдела под ключ',
    metaDescription: 'Service desk на 1С под ключ: заявки из Telegram и MAX, задачи, этапы, учёт времени, база знаний, голос и ИИ на вашем сервере. Цена от 60 000 ₽, сроки.',
    metaKeywords: 'service desk на 1с, система заявок для it отдела заказать, хелпдеск на 1с, сервис деск 1с, учёт времени в 1с, заявки из telegram в 1с, заявки из max в 1с',
    excerpt: 'Service desk на 1С для франчайзи, IT-аутсорса, сервисных компаний и IT-отделов: заявки из Telegram и MAX, задачи и этапы, учёт времени, соисполнители, база знаний, голос и ИИ на своём сервере. Что входит, сколько стоит, когда лучше облачного helpdesk и когда 1С не нужна.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 8,
    heroIcon: 'ph-fill ph-headset',
    tags: ['1С', 'сервис-деск', 'система заявок', 'учёт времени', 'боты Telegram и MAX'],
    toc: toc(
      ['komu', 'Service desk на 1С: кому заказать систему заявок'],
      ['chto-vnutri', 'Что входит в систему заявок'],
      ['kogda-1s', 'Когда своя система на 1С лучше облачного helpdesk'],
      ['kogda-net', 'Когда 1С не нужна'],
      ['keys', 'Как это выглядит на живом проекте'],
      ['cena', 'Из чего складывается цена'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ot-vas', 'Что нужно от вас'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['servis-desk-1c-telegram-max-keys-2026', 'freescout-sluzhba-podderzhki-2026', 'franchayzi-1c-i-vneshniy-razrabotchik-2026', 'dorabotki-1c-cherez-rasshireniya-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/accounting-automation/', label: 'Автоматизация учёта и 1С' },
    servicesOffer: SVC_HELPDESK,
    contentHtml: C('service-desk-na-1s-zakazat-sistemu-zayavok-2026'),
  },
];
