// Коммерческий батч: запросы с готовностью купить (заказать / стоимость / под ключ / Чита).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-06-28';
const TOC = [
  { id: 'chto-eto', text: 'Что это и кому нужно' },
  { id: 'chto-vhodit', text: 'Что входит в работу' },
  { id: 'skolko-stoit', text: 'От чего зависит цена' },
  { id: 'etapy', text: 'Этапы и сроки' },
  { id: 'pochemu-pod-klyuch', text: 'Почему под ключ выгоднее' },
  { id: 'faq', text: 'FAQ' },
  { id: 'vyvody', text: 'Коротко о главном' },
];
const SVC = {
  title: 'Что я делаю под ключ',
  services: [
    { icon: 'ph-fill ph-code', label: 'Сайты и веб-приложения' },
    { icon: 'ph-fill ph-robot', label: 'Telegram/MAX-боты и ИИ-агенты' },
    { icon: 'ph-fill ph-flow-arrow', label: 'Автоматизация процессов' },
    { icon: 'ph-fill ph-shield-check', label: 'Безопасность и 152-ФЗ' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Внедрение и поддержка' },
  ],
  ctaLabel: 'Обсудить ваш проект',
  ctaUrl: 'https://t.me/chimitdorzhi',
};
const TG = { url: 'https://chimitdorzhi.tech/services/telegram-bots/', label: 'Заказать бота под ключ' };
const AUTO = { url: 'https://chimitdorzhi.tech/services/business-automation/', label: 'Заказать автоматизацию' };
const AI = { url: 'https://chimitdorzhi.tech/services/ai-agents/', label: 'Внедрить ИИ под ключ' };
const SEC = { url: 'https://chimitdorzhi.tech/services/cybersecurity/', label: 'Настроить 152-ФЗ и защиту' };
const WEB = { url: 'https://chimitdorzhi.tech/services/web-development/', label: 'Заказать сайт под ключ' };
const PRED = { url: 'https://chimitdorzhi.tech/predlozheniya/', label: 'Обсудить ваш проект' };
const E = (o) => Object.assign({
  category: 'development', published: true, datePublished: D, dateModified: D, readingMinutes: 9,
  servicesOffer: SVC, toc: TOC,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'zakazat-telegram-bota-cena-2027', heroIcon: 'ph-fill ph-robot', ctaInternal: TG,
    title: 'Заказать Telegram-бота для бизнеса: что входит, сроки и от чего зависит цена',
    metaTitle: 'Заказать Telegram-бота: цена и сроки',
    metaDescription: 'Заказать Telegram-бота для бизнеса под ключ: что входит в работу (сценарии, приём заявок, оплата, интеграции, админка), от чего зависит цена, этапы и сроки. Как не переплатить и не получить нерабочего бота. Разработаю под вашу задачу.',
    excerpt: 'Хотите заказать Telegram-бота для бизнеса, но непонятно, что входит и сколько стоит? Разбираю по полочкам: из чего складывается цена, какие этапы, сроки и как не получить нерабочего бота.',
    tags: ['заказать бота', 'Telegram-бот', 'цена', 'под ключ'],
    relatedSlugs: ['chatbot-telegram-max-vk-2026', 'zakazat-chat-bota-zapis-cena-2027', 'skolko-stoit-sayt-2026'] }),
  E({ slug: 'zakazat-avtomatizaciyu-biznesa-2027', heroIcon: 'ph-fill ph-flow-arrow', ctaInternal: AUTO,
    title: 'Заказать автоматизацию бизнеса под ключ: с чего начать и сколько стоит',
    metaTitle: 'Заказать автоматизацию бизнеса: с чего начать',
    metaDescription: 'Заказать автоматизацию бизнеса под ключ: с чего начать, что реально автоматизировать (заявки, напоминания, отчёты, передача данных между сервисами), от чего зависит цена и за сколько окупается. Помогу найти узкие места и внедрить.',
    excerpt: 'Решили заказать автоматизацию, но не знаете, с чего начать и сколько это стоит? Разбираю, что автоматизировать в первую очередь, из чего складывается цена и за сколько окупается.',
    tags: ['автоматизация', 'заказать', 'цена', 'под ключ'],
    relatedSlugs: ['iz-excel-v-crm-za-mesyac-2027', 'vnedrit-ii-pod-klyuch-cena-2027', 'crm-dlya-malogo-biznesa-2026'] }),
  E({ slug: 'vnedrit-ii-pod-klyuch-cena-2027', heroIcon: 'ph-fill ph-brain', ctaInternal: AI,
    title: 'Внедрить ИИ в бизнес под ключ: что входит, сроки и стоимость',
    metaTitle: 'Внедрить ИИ под ключ: цена и сроки',
    metaDescription: 'Внедрить ИИ в бизнес под ключ: что входит (аудит, выбор задачи, ИИ-агент/бот на российском стеке, интеграции, обучение команды), от чего зависит цена, сроки и как считать окупаемость. Без хайпа, по делу. Внедрю под вашу задачу.',
    excerpt: 'Хотите внедрить ИИ, но боитесь переплатить за «хайп»? Разбираю, что реально входит во внедрение под ключ, от чего зависит цена, сроки и как посчитать окупаемость.',
    tags: ['внедрить ИИ', 'под ключ', 'цена', 'ИИ-агент'],
    relatedSlugs: ['vnedrenie-ai-dorozhnaya-karta-90-dney-2026', 'okupaemost-ii-agentov-biznes-keys-2026', 'zakazat-avtomatizaciyu-biznesa-2027'] }),
  E({ slug: 'nastroyka-152fz-pod-klyuch-2027', heroIcon: 'ph-fill ph-shield-check', ctaInternal: SEC,
    title: 'Настройка 152-ФЗ под ключ: что сделаю, чтобы не было штрафов',
    metaTitle: 'Настройка 152-ФЗ под ключ: что входит',
    metaDescription: 'Настройка 152-ФЗ под ключ: что входит в работу (аудит обработки данных, документы и согласия, уведомление в РКН, политика, базовая защита), от чего зависит цена и сроки. Образовательный материал, не юридическая консультация. Помогу закрыть риски штрафов.',
    excerpt: 'Боитесь оборотных штрафов по 152-ФЗ? Разбираю, что входит в настройку под ключ — от аудита данных до уведомления в РКН и защиты, от чего зависит цена и сроки.',
    tags: ['152-ФЗ', 'под ключ', 'штрафы', 'персональные данные'],
    relatedSlugs: ['audit-152-fz-2026', 'uvedomlenie-rkn-2026', 'oborotnye-shtrafy-utechki-pd-2026'] }),
  E({ slug: 'zakazat-sayt-biznes-chita-2027', heroIcon: 'ph-fill ph-globe', ctaInternal: WEB,
    title: 'Заказать сайт для бизнеса в Чите и Забайкалье: этапы, сроки и на что смотреть',
    metaTitle: 'Заказать сайт в Чите: этапы и сроки',
    metaDescription: 'Заказать сайт для бизнеса в Чите и Забайкалье: какие бывают сайты и что выбрать, что входит в работу, этапы и сроки, от чего зависит цена и как не нарваться на нерабочий сайт. Сделаю под ключ — от дизайна до запуска и поддержки.',
    excerpt: 'Нужен сайт для бизнеса в Чите или Забайкалье? Разбираю, какой сайт выбрать, что входит в работу, этапы, сроки и на что смотреть, чтобы не переплатить и получить результат.',
    tags: ['заказать сайт', 'Чита', 'Забайкалье', 'под ключ'],
    relatedSlugs: ['skolko-stoit-sayt-chita-ulan-ude-2026', 'lokalnoe-prodvizhenie-chita-ulan-ude-2026', 'cifrovizaciya-biznesa-buryatiya-zabaykalye-2026'] }),
  E({ slug: 'kak-vybrat-it-podryadchika-2027', heroIcon: 'ph-fill ph-clipboard-text', ctaInternal: PRED,
    title: 'Как выбрать IT-подрядчика для бизнеса: чек-лист, чтобы не переплатить и не остаться с недоделкой',
    metaTitle: 'Как выбрать IT-подрядчика: чек-лист',
    metaDescription: 'Как выбрать IT-подрядчика для бизнеса: на что смотреть (опыт, отзывы, договор, передача исходников, поддержка, кто отвечает за результат), какие красные флаги и как составить ТЗ, чтобы не переплатить. Чек-лист и разбор от практика.',
    excerpt: 'Боитесь нарваться на исполнителя, который возьмёт деньги и пропадёт? Чек-лист, как выбрать IT-подрядчика: на что смотреть, красные флаги и как составить ТЗ.',
    tags: ['выбрать подрядчика', 'IT-услуги', 'чек-лист', 'ТЗ'],
    relatedSlugs: ['skolko-stoit-sayt-2026', '10-oshibok-pri-zakaze-sayta-bota-2026', 'it-soprovozhdenie-biznesa-2027'] }),
  E({ slug: 'it-soprovozhdenie-biznesa-2027', heroIcon: 'ph-fill ph-lifebuoy', ctaInternal: PRED,
    title: 'IT-сопровождение бизнеса: абонентка или разовые задачи — что выгоднее',
    metaTitle: 'IT-сопровождение бизнеса: что выгоднее',
    metaDescription: 'IT-сопровождение бизнеса: чем абонентское обслуживание отличается от разовых задач, что входит, кому что выгоднее и от чего зависит цена. Как не остаться без поддержки после запуска сайта или бота. Возьму ваш IT на сопровождение.',
    excerpt: 'После запуска сайта или бота нужна поддержка — но что выбрать: абонентку или разовые задачи? Разбираю, что входит, кому что выгоднее и от чего зависит цена.',
    tags: ['IT-сопровождение', 'поддержка', 'абонентка', 'бизнес'],
    relatedSlugs: ['kak-vybrat-it-podryadchika-2027', 'it-outsourcing-sibir-2027', 'gotovye-it-resheniya-dlya-biznesa-2026'] }),
  E({ slug: 'zakazat-chat-bota-zapis-cena-2027', heroIcon: 'ph-fill ph-calendar-check', ctaInternal: TG,
    title: 'Заказать чат-бота для записи клиентов: цена и за сколько окупается',
    metaTitle: 'Бот для записи клиентов: цена и окупаемость',
    metaDescription: 'Заказать чат-бота для записи клиентов: что он умеет (запись 24/7, напоминания, перенос, оплата), от чего зависит цена, за сколько окупается за счёт снижения неявок и экономии времени администратора. Для салонов, клиник, услуг. Сделаю под ключ.',
    excerpt: 'Администратор не успевает записывать, клиенты не приходят? Бот для записи берёт это на себя 24/7. Разбираю, что он умеет, сколько стоит и за сколько окупается.',
    tags: ['бот для записи', 'заказать', 'цена', 'окупаемость'],
    relatedSlugs: ['max-bot-zapis-na-uslugi-2026', 'zakazat-telegram-bota-cena-2027', 'avtomatizaciya-salonov-krasoty-yclients'] }),
];
