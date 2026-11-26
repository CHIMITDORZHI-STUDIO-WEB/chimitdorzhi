// Какое предложение показать внутри статьи (блок «Похожая задача?»).
// Порядок правил = приоритет. match смотрит на заголовок, slug и теги (в нижнем регистре).
// Цены только из prices-data.js (price = id позиции).
const PRICES = require('./prices-data.js');

// Рубрики, где блок не нужен: обзоры открытого ПО, книги и кругозор, сетевой маркетинг,
// игры, личные темы. Там остаются обычные кнопки внизу статьи.
const SKIP_CATS = new Set(['opensource', 'biznes-krugozor', 'mwrlife', 'mlm', 'esports', 'media', 'ai-life', 'finance', 'igry-dlya-biznesa']);
// Новости, обзоры компаний и сетевой маркетинг: по заголовку и slug.
const SKIP_RE = /что за компания|развод|пирамид|орифлейм|oriflame|гринвей|greenway|amway|амвей|faberlic|фаберлик|сибирское здоровье|greenleaf|гринлиф|mwr|travel advantage|herbalife|гербалайф|сетевик|сетевой маркетинг|\bмлм\b|\bmlm\b|вышла модель|что нового|дайджест|новости|отзывы на картах|удалить отзыв|osint/;
// Общие правила (бот, CRM, сайт) только там, где читатель похож на заказчика.
const BUYER_CATS = ['development', 'ai-dev', 'expert', 'cases', 'sales', 'marketing'];

const W = (s) => `(?:^|[^а-яёa-z])(?:${s})(?=$|[^а-яёa-z])`;
const R = (src) => new RegExp(src);
const offer = (slug) => `/predlozheniya/${slug}/`;

const RULES = [
  { id: 'gps', re: R('traccar|глонасс|gps|мониторинг[а-я]* транспорт|телематик'), url: offer('svoy-gps-server-vmesto-abonentki'), label: 'свой сервер GPS-мониторинга вместо платы за каждую машину', price: 'gotovye-sistemy-na-servere-klienta', caseSlug: 'svoy-gps-server-avtopark-putevye-listy-predlozhenie-keys-2026', ask: 'свой сервер GPS-мониторинга' },
  { id: 'putevye', re: R('путев[а-я]* лист|путевые|форм[ыа] 4-[сп]'), url: offer('putevye-listy-iz-trekera'), label: 'путевые листы из данных трекера', price: 'avtomatizaciya-processov-i-dokumentov', caseSlug: 'svoy-gps-server-avtopark-putevye-listy-predlozhenie-keys-2026', ask: 'путевые листы из трекера' },
  { id: 'voditel', re: R('приложени[ея] водител|водител[а-я]* (?:к |и )?битрикс'), url: offer('prilozhenie-voditelya-k-bitriks24'), label: 'приложение водителя к Битрикс24', price: 'pwa-prilozhenie', caseSlug: 'logistika-svoya-sistema-vmesto-bitrix24-predlozhenie-keys-2026', ask: 'приложение водителя' },
  { id: 'chaevye', re: R(W('чаевые|чаевых|чаевыми')), url: '/services/qr-tips/', label: 'свою систему чаевых по QR для заведения', price: 'chaevye-po-qr', ask: 'чаевые по QR' },
  { id: 'zashchita', mainOnly: true, re: R('защит[а-я]* (?:сайт|бот|форм)|взлом[а-я]* сайт|кибербезопасност'), url: '/services/cybersecurity/', label: 'защиту сайта и серверов', price: 'kiberbezopasnost', ask: 'защиту сайта' },
  { id: 'monitoring', re: R('uptime|аптайм|мониторинг[а-я]* (?:сервер|сайт|портал|доступност)|сайт (?:упал|лежит|не открывается)|сторож серверов|сканер ошибок'), url: offer('monitoring-bitriks24-i-serverov'), label: 'мониторинг сервера и портала с сообщениями в Telegram', price: 'razrabotka-po-chasam', caseSlug: 'vneshniy-storozh-serverov-opovesheniya-v-telegram-keys-2026', ask: 'мониторинг сервера' },
  { id: 'bitriks', re: R('битрикс|bitrix'), url: offer('remont-bitriks24-posle-integratora'), label: 'разбор и ремонт Битрикс24', price: 'tehnicheskiy-audit', caseSlug: 'skaner-oshibok-dlya-portala-bitriks24-storozh-telegram-keys-2026', ask: 'разбор Битрикс24' },
  { id: 'pallet', re: R('паллет|палет|' + W('тсд') + '|терминал[а-я]* сбора данных'), url: offer('palletnyy-uchet-na-tsd-1c'), label: 'учёт паллет и терминалы сбора данных для 1С', price: 'mobilnoe-prilozhenie-s-1s', caseSlug: 'palletnyy-uchet-tsd-1c-keys-2026', ask: 'склад на ТСД и 1С' },
  { id: 'servicedesk', re: R('сервис[- ]деск|service desk|helpdesk|help desk'), url: offer('servis-desk-1c-telegram-max'), label: 'сервис-деск на 1С с ботами в Telegram и MAX', price: '1s-i-sayt-crm-bot', caseSlug: 'servis-desk-1c-telegram-max-keys-2026', ask: 'сервис-деск' },
  { id: 'taksi', re: R(W('такси|таксопарк[а-я]*')), url: offer('sistema-dlya-taksi-rayona'), label: 'свою систему такси: заказ, диспетчерская, водитель', price: 'bot-dlya-biznesa', caseSlug: 'taksi-rayona-bot-pwa-predlozhenie-keys-2026', ask: 'систему для такси' },
  { id: 'transport', re: R('грузоперевоз|логистическ|транспортн[а-я]* компан|' + W('карго')), url: offer('crm-dlya-transportnoy-kompanii'), label: 'CRM для транспортной компании', price: 'crm-pod-process', caseSlug: 'crm-logistiki-istochniki-zayavok-keys-2026', ask: 'CRM для перевозок' },
  { id: 'keytering', re: R('кейтеринг|фуршет|банкет'), url: offer('sayt-i-crm-dlya-keyteringa'), label: 'сайт с конструктором меню и CRM для кейтеринга', price: 'korporativnyy-sayt', caseSlug: 'keytering-sayt-konstruktor-furshet-crm-predlozhenie-keys-2026', ask: 'сайт для кейтеринга' },
  { id: 'storage', re: R('self[- ]?storage|склад[а-я]* хранени|ответственн[а-я]* хранени|боксы? хранени'), url: offer('bronirovanie-boksov-sklada-hraneniya'), label: 'онлайн-бронирование боксов склада хранения', price: 'onlayn-zapis-i-bronirovanie', caseSlug: 'self-storage-bronirovanie-boksov-keys-2026', ask: 'бронирование боксов' },
  { id: 'zakupki', re: R(W('пвз') + '|совместн[а-я]* закупк|пункт[а-я]* выдачи'), url: offer('sistema-sovmestnyh-zakupok-i-pvz'), label: 'систему заказов и выдачи для закупок и пунктов выдачи', price: 'pwa-prilozhenie', caseSlug: 'sovmestnye-zakupki-pwa-pvz-keys-2026', ask: 'систему для пункта выдачи' },
  { id: 'rozygrysh', re: R('розыгрыш|лотере[яи]'), url: offer('max-rozygrysh-podpiska'), label: 'розыгрыш и партнёрка в канале MAX', price: 'bot-v-messendzhere', caseSlug: 'rozygryshi-s-partnerkoy-v-max-riski-predlozhenie-keys-2026', ask: 'бота для розыгрыша' },
  { id: 'avtopost', re: R('автопостинг|авто-постинг|отложен[а-я]* пост|постинг по расписани|контент-план'), url: offer('avto-posting-kontent-plan'), label: 'автопостинг в каналы MAX и Telegram', price: 'ii-publikaciya-v-socseti', caseSlug: 'avtoposting-turov-v-zakrytyy-kanal-max-kurs-cb-keys-2026', ask: 'автопостинг' },
  { id: 'klub', re: R('клуб[а-я]* по подписк|закрыт[а-я]* клуб|платн[а-я]* (?:канал|клуб|подписк)'), url: offer('klub-po-podpiske'), label: 'платный клуб: бот, оплата, доступ в канал', price: 'bot-dlya-biznesa', caseSlug: 'klub-puteshestviy-po-podpiske-telegram-predlozhenie-keys-2026', ask: 'клуб по подписке' },
  { id: 'loyalnost', re: R('лояльност|кешбэк|кэшбэк|бонусн[а-я]* (?:карт|программ)|штамп'), url: offer('programma-loyalnosti'), label: 'программу лояльности с картой в телефоне', price: 'programma-loyalnosti-i-partnerka', caseSlug: 'tsifrovaya-karta-loyalnosti-pwa-keys-2026', ask: 'программу лояльности' },
  { id: 'banya', re: R(W('баня|бани|банн[а-я]*|сауна|сауны|отель|отеля|отелей|хостел[а-я]*') + '|гостиниц|глэмпинг|база отдыха|посуточн'), url: offer('banya-sauna-kompleks'), label: 'бронирование и единое окно для бани и гостиницы', price: 'onlayn-zapis-i-bronirovanie', caseSlug: 'banny-kompleks-edinoe-okno-bronirovanie-predlozhenie-keys-2026', ask: 'систему бронирования' },
  { id: 'kafe', re: R(W('кафе|бар|бара') + '|ресторан|кофейн|общепит|horeca|столов[а-я]{2}|пиццери|' + W('суши')), url: offer('bot-max-dlya-kafe'), label: 'бота в MAX для кафе: меню, заказ, розыгрыши', price: 'bot-v-messendzhere', caseSlug: 'kafe-nacionalnoy-kuhni-bot-max-rozygryshi-keys-2026', ask: 'бота для кафе' },
  { id: 'zapis', re: R('онлайн-запис|запис[ьи] клиент|yclients|салон[а-я]* красот|барбершоп|косметолог|массажн|' + W('спа')), url: offer('zapis-salon-krasoty'), label: 'свою онлайн-запись без абонентки', price: 'onlayn-zapis-i-bronirovanie', caseSlug: 'prostaya-onlayn-zapis-spa-vrach-stolik-keys-2026', ask: 'онлайн-запись' },
  { id: 'stroyka', re: R(W('строительн[а-я]*|стройк[а-я]*|прораб[а-я]{0,2}') + '|ремонтн[а-я]* компан'), url: offer('crm-stroitelnaya-kompaniya'), label: 'CRM для строительной компании', price: 'crm-pod-process', caseSlug: 'crm-stroitelnoy-kompanii-almaznaya-rezka-keys-2026', ask: 'CRM для стройки' },
  { id: 'kultura', re: R(W('театр[а-я]*|музей|музея|музеев|нко') + '|учреждени[а-я]* культур'), url: offer('muzey-teatr-bilety'), label: 'сайт и боты для учреждения культуры и НКО', price: 'korporativnyy-sayt', caseSlug: 'amarsain-sayt-teatra-keys-2026', ask: 'сайт учреждения' },
  { id: 'uchebnye', re: R('презентаци|учебн[а-я]* материал|' + W('лекци[яий]')), url: offer('ai-generator-uchebnyh'), label: 'конвейер презентаций и учебных материалов', price: 'avtomatizaciya-processov-s-ii', caseSlug: 'konveyer-uchebnyh-materialov-dlya-prepodavatelya-instituta-keys-2026', ask: 'учебные материалы' },
  { id: 'dostupy', re: R('забрать (?:сайт|домен|портал)|вернуть (?:сайт|домен)|разработчик (?:ушел|ушёл|пропал)|подрядчик (?:ушел|ушёл|пропал)|ухода разработчика'), url: offer('zabrat-sayt-i-domen-u-podryadchika'), label: 'помощь вернуть сайт, домен и доступы', price: 'perenos-sayta-s-konstruktora', caseSlug: 'vozvrat-domena-u-byvshego-razrabotchika-keys-2026', ask: 'вернуть сайт и домен' },
  { id: 'master', re: R('муж на час|срочн[а-я]* мастер|биржа мастеров|бытов[а-я]* услуг'), url: offer('servis-srochnyh-masterov'), label: 'сервис заказа мастеров в мессенджере', price: 'bot-dlya-biznesa', caseSlug: 'birzha-srochnyh-masterov-bot-mini-app-keys-2026', ask: 'сервис мастеров' },
  { id: 'robot', re: R('голосов[а-я]* робот|обзвон|прием звонков|приём звонков'), url: '/services/voice-ai/', label: 'голосового робота для звонков', price: 'golosovoy-robot', ask: 'голосового робота' },
  { id: 'ocr', re: R(W('ocr') + '|распознавани[ея] (?:документ|паспорт|накладн|чек)'), url: '/ceny/', label: 'распознавание документов с передачей в 1С и CRM', price: 'raspoznavanie-dokumentov', ask: 'распознавание документов' },
  { id: 'parser', not: /защит|боты? и парс/, re: R('парсер|парсинг|мониторинг цен|отслеживани[ея] (?:цен|изменени)'), url: '/ceny/', label: 'сбор и мониторинг данных с сайтов', price: 'monitoring-cen-konkurentov', ask: 'мониторинг данных' },
  { id: 'agent', re: R('ии[- ]агент|ai[- ]агент|ai agent|ии[- ]ассистент|цифров[а-я]* сотрудник'), url: offer('ii-agent-dlya-biznesa-kabinet'), label: 'ИИ-агента для бизнеса', price: 'ii-agent', caseSlug: 'ii-agent-studii-kabinet-baza-znaniy-podklyucheniya-keys-2026', ask: 'ИИ-агента', cats: [...BUYER_CATS, 'industries'] },
  { id: '152', mainOnly: true, re: R('152-фз|персональн[а-я]* данн|роскомнадзор|' + W('ркн')), url: offer('152-fz-pod-klyuch'), label: 'приведение сайта и бота в порядок по 152-ФЗ', price: 'privedenie-v-poryadok-po-152-fz', ask: '152-ФЗ для сайта' },
  { id: '1c', re: R(W('1с|1c')), url: '/services/business-automation/', label: 'связку 1С с сайтом, CRM и ботом', price: '1s-i-sayt-crm-bot', caseSlug: 'servis-desk-1c-telegram-max-keys-2026', ask: 'интеграцию с 1С', cats: [...BUYER_CATS, 'industries'] },
  { id: 'miniapp', re: R('мини[- ]?приложени|mini[- ]?app|мини[- ]?апп'), url: '/development/telegram-mini-apps/', label: 'мини-приложение в мессенджере', price: 'mini-prilozhenie-v-messendzhere', ask: 'мини-приложение', cats: BUYER_CATS },
  { id: 'bot-max', re: R('(?:' + W('бот|бота|боты|ботов|боте|чат-бот[а-я]*') + ').*(?:max|макс)|(?:' + W('max') + ').*бот'), url: '/development/max-bots/', label: 'бота в MAX под ваш процесс', price: 'bot-v-messendzhere', caseSlug: 'kafe-nacionalnoy-kuhni-bot-max-rozygryshi-keys-2026', ask: 'бота в MAX', cats: BUYER_CATS },
  { id: 'bot', re: R(W('бот|бота|боты|ботов|боте|чат-бот[а-я]*')), url: '/development/telegram-bots/', label: 'бота в Telegram под ваш процесс', price: 'bot-v-messendzhere', caseSlug: 'bot-i-crm-dlya-marketingovogo-agentstva-telegram-keys-2026', ask: 'бота в Telegram', cats: BUYER_CATS },
  { id: 'crm', re: R(W('crm|срм')), url: '/services/business-automation/', label: 'CRM под ваш порядок работы: настрою готовую или напишу свою', price: 'vnedrenie-bitriks24-ili-amocrm', caseSlug: 'crm-logistiki-istochniki-zayavok-keys-2026', ask: 'CRM под процесс', cats: BUYER_CATS },
  { id: 'sayt', re: R(W('сайт|сайта|сайте|сайты|лендинг[а-я]*')), url: '/development/sites/', label: 'сайт или лендинг под заявки', price: 'lending', ask: 'сайт', cats: BUYER_CATS },
];

// Правила по умолчанию для рубрик, где читатель обычно с рабочей задачей.
const DEFAULTS = {
  development: { id: 'default-dev', url: '/services/business-automation/', label: 'автоматизацию под ваш процесс', price: 'avtomatizaciya-processov-i-dokumentov', ask: 'разработку под задачу' },
  'ai-dev': { id: 'default-ai', url: offer('ii-agent-dlya-biznesa-kabinet'), label: 'ИИ-решения под задачу бизнеса', price: 'audit-i-plan-vnedreniya-ii', ask: 'внедрение ИИ' },
  security: { id: 'default-sec', url: '/services/it-audit/', label: 'технический аудит сайта и серверов', price: 'tehnicheskiy-audit', ask: 'технический аудит' },
};

const priceRaw = (id) => {
  const p = PRICES.find((x) => x.id === id);
  if (!p) throw new Error('нет позиции прайса: ' + id);
  return p.priceRaw;
};

function matchOffer(a) {
  const main = `${a.title || ''} ${(a.slug || '').replace(/-/g, ' ')}`.toLowerCase().replace(/ё/g, 'е');
  const tags = (a.tags || []).join(' | ').toLowerCase().replace(/ё/g, 'е');
  const all = `${main} ${tags} ${String(a.slug || '').toLowerCase()}`;
  if (SKIP_RE.test(all)) return null;
  // В обзорах открытого ПО блок только там, где приходят с рабочей задачей (парк машин).
  const openOnly = a.category === 'opensource';
  if (SKIP_CATS.has(a.category) && !openOnly) return null;
  const allowed = (r) => (!openOnly || r.id === 'gps') && (!r.cats || r.cats.includes(a.category)) && !(r.not && r.not.test(main));
  // Сначала по заголовку и slug, потом по тегам: теги шире и чаще уводят в сторону.
  const rule = RULES.find((r) => allowed(r) && r.re.test(main))
    || RULES.find((r) => allowed(r) && !r.mainOnly && r.re.test(tags))
    || (/open[- ]?source|self-hosted|открыт[а-я]* (?:по|код|модел)/.test(all) ? null : DEFAULTS[a.category]);
  return rule ? { ...rule, priceFrom: priceRaw(rule.price) } : null;
}

module.exports = { matchOffer, RULES, DEFAULTS, SKIP_CATS };
