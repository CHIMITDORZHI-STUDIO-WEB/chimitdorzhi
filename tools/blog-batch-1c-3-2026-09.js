// 1С, третья часть: интеграции (Ozon, amoCRM, Авито, телефония), деньги (оплаты, должники),
// ИИ поверх 1С (распознавание накладных, ассистент по данным), возвраты и малое производство.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-18';
const S = 'https://chimitdorzhi.tech';

const SVC_1C = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция 1С с CRM, сайтом и маркетплейсами' },
  { icon: 'ph-fill ph-robot', label: 'ИИ-агенты и боты поверх 1С' },
  { icon: 'ph-fill ph-barcode', label: 'Складской учёт и приложения для ТСД' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов' },
]};

const CTA_INTEGR = { url: `${S}/predlozheniya/integraciya-sistem/`, label: 'Обсудить интеграцию с 1С' };
const CTA_MP = { url: `${S}/predlozheniya/avtomatizaciya-sellera-wb-ozon/`, label: 'Обсудить работу с маркетплейсами' };
const CTA_AI = { url: `${S}/services/ai-agents/`, label: 'Обсудить ИИ для 1С' };
const CTA_ACC = { url: `${S}/services/accounting-automation/`, label: 'Обсудить автоматизацию учёта' };
const CTA_SKLAD = { url: `${S}/services/logistics-automation/`, label: 'Обсудить автоматизацию склада' };

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));

const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 5, category: 'development',
      servicesOffer: SVC_1C, ctaInternal: CTA_INTEGR, toc: tocFrom(html) },
    o, { contentHtml: html });
};

module.exports = [

  // ---------- Интеграции ----------
  E({ slug: 'integraciya-ozon-s-1c-2026', heroIcon: 'ph-fill ph-storefront',
    ctaInternal: CTA_MP,
    title: 'Интеграция Ozon с 1С: товары, остатки, заказы и финансовые отчёты',
    metaTitle: 'Интеграция Ozon с 1С: товары, остатки, заказы и отчёты',
    metaDescription: 'Что связывают между Ozon и 1С, чем отличается работа со своего склада и со склада площадки и почему без отчёта о реализации маржа по Ozon посчитана неверно.',
    excerpt: 'Карточки, остатки и заказы на Ozon часто ведут руками, а отчёт площадки разбирают в конце месяца. Показываю, что связывать с 1С и где продавцы теряют деньги незаметно.',
    tags: ['1С', 'Ozon', 'маркетплейсы', 'интеграция'],
    relatedSlugs: ['ostatki-na-wb-ozon-ym-iz-odnoy-1c-2026', 'integraciya-wildberries-1c-2026', 'gotovyy-modul-1c-dlya-marketpleysov-ili-svoya-integraciya-2026'] }),

  E({ slug: 'amocrm-i-1c-integraciya-2026', heroIcon: 'ph-fill ph-arrows-left-right',
    title: 'amoCRM и 1С: как не вести клиентов в двух местах',
    metaTitle: 'Интеграция amoCRM и 1С: клиенты, счета и оплаты в одном месте',
    metaDescription: 'Продажи в CRM, отгрузки и оплаты в 1С — и никто не видит всей картины. Что связывать, где главная версия клиента и как не наплодить дублей.',
    excerpt: 'Менеджер не знает, оплатил ли клиент, бухгалтер не знает о сделке. Разбираю, как связать amoCRM с 1С так, чтобы статус денег и отгрузки был виден прямо в сделке.',
    tags: ['1С', 'amoCRM', 'CRM', 'интеграция'],
    relatedSlugs: ['crm-dlya-malogo-biznesa-2026', 'dorabotka-integraciya-1c-2026', 'telefoniya-i-1c-kartochka-klienta-2026'] }),

  E({ slug: 'avito-i-1c-obyavleniya-iz-ostatkov-2026', heroIcon: 'ph-fill ph-megaphone',
    title: 'Авито и 1С: объявления из остатков и заявки без ручного переноса',
    metaTitle: 'Авито и 1С: объявления из остатков автоматически',
    metaDescription: 'Товар закончился, а объявление висит; цена поменялась в 1С, а на Авито старая. Как формировать объявления из остатков и не терять заявки в чатах.',
    excerpt: 'Магазины и оптовики торгуют на Авито, но объявления ведут руками. Показываю, как связать их с 1С, кому это подходит и какие ошибки приводят к дублям и старым ценам.',
    tags: ['1С', 'Авито', 'объявления', 'интеграция'],
    relatedSlugs: ['priem-zayavok-s-avito-v-crm-2027', 'ostatki-na-wb-ozon-ym-iz-odnoy-1c-2026', 'amocrm-i-1c-integraciya-2026'] }),

  E({ slug: 'telefoniya-i-1c-kartochka-klienta-2026', heroIcon: 'ph-fill ph-phone-call',
    title: 'Звонок клиента открывает его карточку: телефония и 1С',
    metaTitle: 'Интеграция телефонии и 1С: карточка клиента при звонке',
    metaDescription: 'Клиент звонит — у менеджера сразу открыта его карточка: заказы, долг, закреплённый менеджер. Как работает связка облачной АТС и 1С и что подготовить.',
    excerpt: 'Менеджер ищет клиента в базе, пока тот ждёт на линии. Разбираю, как облачная телефония открывает карточку из 1С, куда деваются пропущенные и что даёт руководителю.',
    tags: ['1С', 'телефония', 'продажи', 'интеграция'],
    relatedSlugs: ['amocrm-i-1c-integraciya-2026', 'debitorka-iz-1c-napominaniya-dolzhnikam-2026', 'dorabotka-integraciya-1c-2026'] }),

  // ---------- Деньги ----------
  E({ slug: 'oplaty-sami-raznosyatsya-v-1c-2026', heroIcon: 'ph-fill ph-bank',
    ctaInternal: CTA_ACC,
    title: 'Оплаты сами разносятся в 1С: выписка из банка, СБП и счёт со ссылкой на оплату',
    metaTitle: 'Автоматическая разноска оплат в 1С: банк, СБП и ссылка',
    metaDescription: 'Прямой обмен с банком, сопоставление платежей со счетами и счёт с QR-кодом СБП, где номер счёта уже стоит в назначении. Как убрать ручную разноску.',
    excerpt: 'Бухгалтер каждое утро сопоставляет платежи со счетами вручную. Показываю, как выписка приходит сама, а ссылка на оплату избавляет от неправильных назначений платежа.',
    tags: ['1С', 'оплаты', 'СБП', 'бухгалтерия'],
    relatedSlugs: ['debitorka-iz-1c-napominaniya-dolzhnikam-2026', 'ai-buhgalter-avtomatizaciya-rutiny-2026', 'bot-dlya-optovyh-zakazov-iz-1c-2026'] }),

  E({ slug: 'debitorka-iz-1c-napominaniya-dolzhnikam-2026', heroIcon: 'ph-fill ph-bell-ringing',
    ctaInternal: CTA_ACC,
    title: 'Должники получают напоминание сами: дебиторская задолженность из 1С в мессенджер',
    metaTitle: 'Дебиторская задолженность из 1С: автонапоминания должникам',
    metaDescription: 'До срока — мягкое напоминание с суммой, после — с актом сверки и ссылкой на оплату. Как настроить напоминания из 1С и когда подключать менеджера.',
    excerpt: 'Клиенты платят с отсрочкой, долги копятся, а звонить с напоминаниями никто не любит. Разбираю, как 1С сама напоминает о сроке вежливо и по делу.',
    tags: ['1С', 'дебиторка', 'оплаты', 'опт'],
    relatedSlugs: ['oplaty-sami-raznosyatsya-v-1c-2026', 'bot-dlya-optovyh-zakazov-iz-1c-2026', 'ii-assistent-po-dannym-1c-2026'] }),

  // ---------- ИИ поверх 1С ----------
  E({ slug: 'nakladnye-postavshchikov-v-1c-raspoznavanie-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-scan',
    ctaInternal: CTA_AI,
    title: 'Накладные поставщиков сами попадают в 1С: распознавание документов нейросетью',
    metaTitle: 'Распознавание накладных в 1С нейросетью: черновик за минуту',
    metaDescription: 'Накладные в PDF и на фото превращаются в черновик поступления в 1С. Что делает нейросеть, где основная работа, где она ошибается и что проверяет человек.',
    excerpt: 'Оператор перебивает накладные поставщиков в 1С построчно. Показываю, как нейросеть готовит черновик документа, почему сопоставление товаров — главная работа и где нужен контроль.',
    tags: ['1С', 'нейросети', 'распознавание документов', 'автоматизация'],
    relatedSlugs: ['ai-buhgalter-avtomatizaciya-rutiny-2026', 'ii-assistent-po-dannym-1c-2026', 'ii-galyucinacii-nelzya-slepo-doveryat-2026'] }),

  E({ slug: 'ii-assistent-po-dannym-1c-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-chat-centered-dots',
    ctaInternal: CTA_AI,
    title: 'Спросить у 1С в чате: ИИ-ассистент по продажам, остаткам и долгам',
    metaTitle: 'ИИ-ассистент по данным 1С: ответы в мессенджере',
    metaDescription: 'Руководитель пишет «сколько продали за неделю» и получает цифру, не открывая 1С. Как устроить ассистента безопасно и почему он должен только читать.',
    excerpt: 'Чтобы узнать продажи за неделю, надо открыть 1С и настроить отчёт. Разбираю, как ассистент в мессенджере отвечает цифрами из 1С и почему ему нельзя писать запросы к базе самому.',
    tags: ['1С', 'ИИ-ассистент', 'аналитика', 'мессенджеры'],
    relatedSlugs: ['nakladnye-postavshchikov-v-1c-raspoznavanie-2026', 'dashbord-rukovoditelyu-v-telegram-max-2026', 'http-servis-1c-dlya-prilozheniya-2026'] }),

  // ---------- Учёт ----------
  E({ slug: 'vozvraty-ot-klientov-v-1c-2026', heroIcon: 'ph-fill ph-arrow-u-up-left',
    ctaInternal: CTA_SKLAD,
    title: 'Возвраты от клиентов в 1С: как принять, проверить и не потерять товар',
    metaTitle: 'Возвраты от клиентов в 1С: приёмка, проверка и деньги',
    metaDescription: 'Брак, пересорт, отказ, истёкший срок: куда идёт возвращённый товар, почему его нельзя сразу ставить на остаток и что делать с деньгами клиенту.',
    excerpt: 'Возвраты — источник пересорта: товар вернули, а в 1С он всё ещё у клиента. Показываю порядок приёмки возвратов и где их чаще всего теряют.',
    tags: ['1С', 'возвраты', 'склад', 'опт'],
    relatedSlugs: ['sborka-zakazov-s-tsd-bez-peresorta-2026', 'partii-i-gtd-v-1c-importer-2026', 'vesovoy-tovar-i-sroki-godnosti-v-1c-2026'] }),

  E({ slug: 'proizvodstvo-na-malom-predpriyatii-v-1c-2026', heroIcon: 'ph-fill ph-factory',
    ctaInternal: CTA_ACC,
    title: 'Производство на малом предприятии в 1С: сырьё, выпуск и себестоимость',
    metaTitle: 'Учёт производства в 1С для малого предприятия',
    metaDescription: 'Спецификации, списание сырья по факту, отходы, накладные расходы и себестоимость единицы. С чего начать учёт производства в 1С без большого внедрения.',
    excerpt: 'Сырьё в тетради, выпуск в Excel, реальная себестоимость неизвестна. Разбираю, как малому производству начать учёт в 1С и почему без накладных расходов цена продажи занижена.',
    tags: ['1С', 'производство', 'себестоимость', 'учёт'],
    relatedSlugs: ['sebestoimost-importa-v-1c-dostavka-poshliny-2026', 'skolko-stoit-vnedrenie-1c-2026', 'marzha-i-nacenka-raznica-2026'] }),

];
