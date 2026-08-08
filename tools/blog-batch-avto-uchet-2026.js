// Батч «учёт автомобиля» (по мотивам open-source Tracktor — гараж-менеджер).
// 5 коротких статей (4-5 мин): сервисная книжка, стоимость владения,
// напоминания ОСАГО/ТО, учёт автопарка, свой сервер vs приложения.
// Угол: «сделаю такой сервис / разверну под ключ» -> заказ разработки.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-08-03';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_AVTO = {
  title: 'Что я делаю по учёту авто',
  services: [
    { icon: 'ph-fill ph-car-profile', label: 'Сервис учёта авто под ваши задачи' },
    { icon: 'ph-fill ph-bell-ringing', label: 'Напоминания об ОСАГО, ТО и документах' },
    { icon: 'ph-fill ph-chart-line-up', label: 'Учёт расходов и аналитика по машинам' },
    { icon: 'ph-fill ph-hard-drives', label: 'Развёртывание на вашем сервере под ключ' },
  ],
  ctaLabel: 'Обсудить разработку', ctaUrl: 'https://t.me/chimitdorzhi',
};

const mk = (o) => Object.assign({
  published: true, datePublished: D, dateModified: D,
  readingMinutes: 5, shortForm: true, servicesOffer: SVC_AVTO,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  mk({
    slug: 'elektronnaya-servisnaya-knizhka-avto-2026',
    category: 'industries',
    heroIcon: 'ph-fill ph-notebook',
    title: 'Электронная сервисная книжка авто: вся история ТО в одном месте',
    metaTitle: 'Электронная сервисная книжка авто: история ТО',
    metaDescription: 'Бумажная сервисная книжка теряется, а чеки за ТО копятся в бардачке. Как вести историю обслуживания машины в электронном виде.',
    metaKeywords: 'электронная сервисная книжка, история то автомобиля, учёт обслуживания авто, сервисная книжка онлайн, бортовой журнал авто, история ремонта машины',
    excerpt: 'Бумажная сервисная книжка теряется, а чеки за ТО валяются в бардачке — при продаже подтвердить историю обслуживания нечем. Разбираю, как вести её в электронном виде, зачем это поднимает цену авто и как сделать такой сервис под себя.',
    tags: ['авто', 'учёт', 'сервисная книжка', 'ТО', '2026'],
    toc: toc(
      ['problema', 'Почему бумажная книжка не работает'],
      ['chto-eto', 'Что такое электронная сервисная книжка'],
      ['zachem', 'Зачем это владельцу и при продаже'],
      ['kak-sdelat', 'Как сделать такой сервис под себя'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['skolko-stoit-vladet-avtomobilem-uchet-2026', 'napominaniya-osago-tehosmotr-to-2026', 'avtovse-max-bot-miniapp-keys-2026', 'it-dlya-avtoservisa-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/veb-servis-platforma/', label: 'Заказать разработку сервиса' },
  }),
  mk({
    slug: 'skolko-stoit-vladet-avtomobilem-uchet-2026',
    category: 'industries',
    heroIcon: 'ph-fill ph-chart-pie-slice',
    title: 'Сколько реально стоит владеть машиной: как вести учёт расходов',
    metaTitle: 'Сколько стоит владеть машиной: учёт расходов',
    metaDescription: 'Топливо, ТО, страховка, ремонт, налог — реальная стоимость владения авто всегда выше цены покупки.',
    metaKeywords: 'стоимость владения автомобилем, учёт расходов на авто, сколько стоит содержать машину, расходы на автомобиль, топливо то страховка учёт, экономика автомобиля',
    excerpt: 'Цена машины в объявлении — это только вход. Топливо, ТО, страховка, ремонт и налог за год складываются в сумму, которую мало кто считает. Разбираю, как вести учёт всех расходов на авто, что он открывает и как сделать сервис под это.',
    tags: ['авто', 'учёт расходов', 'стоимость владения', 'финансы', '2026'],
    toc: toc(
      ['problema', 'Почему настоящую цену машины не видно'],
      ['iz-chego', 'Из чего складывается стоимость владения'],
      ['kak-vesti', 'Как вести учёт, чтобы он не бросался'],
      ['chto-daet', 'Что показывает такой учёт'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['elektronnaya-servisnaya-knizhka-avto-2026', 'napominaniya-osago-tehosmotr-to-2026', 'uchet-nebolshogo-avtoparka-2026', 'avtovse-max-bot-miniapp-keys-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/mobilnoe-prilozhenie-pwa/', label: 'Заказать приложение учёта' },
  }),
  mk({
    slug: 'napominaniya-osago-tehosmotr-to-2026',
    category: 'industries',
    heroIcon: 'ph-fill ph-bell-ringing',
    title: 'Чтобы не проспать ОСАГО и техосмотр: напоминания по авто',
    metaTitle: 'Напоминания об ОСАГО, техосмотре и ТО',
    metaDescription: 'Просроченный полис ОСАГО — штраф, а забытая замена масла — дорогой ремонт.',
    metaKeywords: 'напоминание осаго, напоминание техосмотр, когда менять масло, штраф без осаго, напоминания по авто, срок действия полиса, продление осаго напоминание',
    excerpt: 'Просрочил ОСАГО — штраф и риск платить за аварию из своего кармана. Забыл про замену масла — попал на ремонт. Разбираю, как настроить напоминания о всех датах по машине и как сделать сервис, который сам предупреждает заранее.',
    tags: ['авто', 'ОСАГО', 'техосмотр', 'напоминания', '2026'],
    toc: toc(
      ['problema', 'Чем оборачивается забытая дата'],
      ['kakie-daty', 'Какие даты стоит держать под контролем'],
      ['kak-rabotaet', 'Как работают напоминания'],
      ['kak-sdelat', 'Как сделать такой сервис с уведомлениями'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['elektronnaya-servisnaya-knizhka-avto-2026', 'skolko-stoit-vladet-avtomobilem-uchet-2026', 'uchet-nebolshogo-avtoparka-2026', 'avtovse-max-bot-miniapp-keys-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/veb-servis-platforma/', label: 'Заказать сервис напоминаний' },
  }),
  mk({
    slug: 'uchet-nebolshogo-avtoparka-2026',
    category: 'opensource',
    heroIcon: 'ph-fill ph-car-simple',
    title: 'Учёт небольшого автопарка без дорогих систем мониторинга',
    metaTitle: 'Учёт небольшого автопарка без дорогих систем',
    metaDescription: 'У малого бизнеса 2-10 машин, а системы мониторинга флота стоят как самолёт.',
    metaKeywords: 'учёт автопарка, управление автопарком малый бизнес, учёт то и топлива, парк машин учёт, свой сервер автопарк, автопарк без дорогих систем, недорогой учёт транспорта',
    excerpt: 'У доставки, такси или стройки 2-10 машин, а «взрослые» системы мониторинга флота берут абонплату за каждую и стоят как самолёт. Разбираю, как вести учёт ТО, топлива и документов по всему парку на своём сервере, без лишних затрат.',
    tags: ['автопарк', 'малый бизнес', 'учёт', 'open-source', '2026'],
    toc: toc(
      ['problema', 'Почему малому парку не подходят большие системы'],
      ['chto-nuzhno', 'Что на самом деле нужно небольшому парку'],
      ['reshenie', 'Своё решение на своём сервере'],
      ['vygoda', 'Что это даёт бизнесу'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['skolko-stoit-vladet-avtomobilem-uchet-2026', 'svoy-server-ucheta-avto-vs-prilozheniya-2026', 'it-dlya-taksoparka-2026', 'avtovse-max-bot-miniapp-keys-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/open-source-pod-klyuch/', label: 'Развернуть учёт парка под ключ' },
  }),
  mk({
    slug: 'svoy-server-ucheta-avto-vs-prilozheniya-2026',
    category: 'opensource',
    heroIcon: 'ph-fill ph-shield-check',
    title: 'Свой сервер учёта авто против мобильных приложений',
    metaTitle: 'Свой сервер учёта авто vs приложения',
    metaDescription: 'Приложения для учёта авто удобны, но данные о ваших машинах, пробегах и расходах живут на чужих серверах.',
    metaKeywords: 'свой сервер учёта авто, self-hosted гараж, данные о машине приватность, приложение учёта авто, свой сервис вместо приложения, учёт авто на своём сервере',
    excerpt: 'Мобильные приложения для учёта авто удобны, пока не задумаешься, где хранятся данные о твоих машинах, пробегах и тратах — на чужих серверах. Разбираю, чем свой сервер лучше, кому это важно и как развернуть учёт авто у себя.',
    tags: ['авто', 'self-hosted', 'приватность', 'open-source', '2026'],
    toc: toc(
      ['problema', 'Где на самом деле лежат ваши данные'],
      ['sravnenie', 'Приложение и свой сервер: в чём разница'],
      ['komu-vazhno', 'Кому это действительно важно'],
      ['kak-razvernut', 'Как развернуть учёт авто у себя'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['uchet-nebolshogo-avtoparka-2026', 'elektronnaya-servisnaya-knizhka-avto-2026', 'avtovse-max-bot-miniapp-keys-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/open-source-pod-klyuch/', label: 'Развернуть на своём сервере' },
  }),
];
