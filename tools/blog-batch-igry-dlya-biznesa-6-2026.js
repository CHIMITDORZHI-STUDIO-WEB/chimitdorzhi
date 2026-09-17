// Серия «Игры для бизнеса»: статьи 61–65. Проверка, призы, перезапуск, права и удержание.
// Оглавление собирается из заголовков h2 самой статьи, чтобы не расходилось с текстом.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-17';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-game-controller', label: 'Игры и геймификация под бренд' },
  { icon: 'ph-fill ph-robot', label: 'Боты и мини-приложения в Telegram, MAX' },
  { icon: 'ph-fill ph-gear', label: 'Программы лояльности и CRM' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const CTA_GAMES = { url: `${S}/development/games/`, label: 'Обсудить игру для бизнеса' };

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));

const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, shortForm: true, datePublished: D, dateModified: D, readingMinutes: 5, category: 'igry-dlya-biznesa',
      servicesOffer: SVC_BIZ, ctaInternal: CTA_GAMES, toc: tocFrom(html) },
    o, { contentHtml: html });
};

module.exports = [

  E({ slug: 'pleytest-igry-do-zapuska-2026', heroIcon: 'ph-fill ph-magnifying-glass',
    title: 'Плейтест: как проверить игру на десяти людях до запуска',
    metaTitle: 'Плейтест бренд-игры: проверка на десяти людях до запуска',
    metaDescription: 'Плейтест ловит не баги, а непонимание: человек не понял, что делать, и ушёл. Кого звать, за чем смотреть молча и какие три вопроса задать после.',
    excerpt: 'Игру запускают сразу на всех и узнают о проблемах из жалоб. Показываю, как за один вечер проверить её на десяти людях и какие находки повторяются чаще всего.',
    tags: ['игры для бизнеса', 'тестирование', 'запуск', 'интерфейс'],
    relatedSlugs: ['pochemu-brend-igry-provalivayutsya-2026', 'dostupnaya-igra-dlya-vseh-igrokov-2026', 'igra-za-dve-nedeli-do-akcii-2026'] }),

  E({ slug: 'prizy-i-nalogi-v-igre-2026', heroIcon: 'ph-fill ph-gift',
    title: 'Призы и налоги: что оформить, чтобы приз не стал проблемой',
    metaTitle: 'Призы в акции: налоги, документы и правила выдачи',
    metaDescription: 'Выигрыш в рекламной акции — доход победителя. Кто платит налог с денежного и с вещевого приза, какие документы нужны и что обязательно в правилах.',
    excerpt: 'Про призы вспоминают в момент выдачи, когда уже поздно. Разбираю, кто платит налог, что подписывает победитель и какие пункты правил снимают споры заранее.',
    tags: ['игры для бизнеса', 'призы', 'налоги', 'правила акции'],
    relatedSlugs: ['koleso-fortuny-i-skretch-karty-zakon-2026', 'antichit-v-brend-igre-2026', 'kakie-dannye-sobirat-v-igre-soglasie-2026'] }),

  E({ slug: 'igra-ne-vzletela-perezapusk-2026', heroIcon: 'ph-fill ph-arrow-counter-clockwise',
    title: 'Игра не взлетела: перезапускать или закрывать',
    metaTitle: 'Игра не взлетела: как поставить диагноз и что делать',
    metaDescription: 'Прежде чем менять механику наугад, поставьте диагноз: не нашли, не поняли, бросили на середине или дошли и не купили. Для каждого случая — своё лечение.',
    excerpt: 'Игра сделана, а играют единицы. Показываю, как по цифрам понять, что именно сломалось, когда перезапуск спасает и когда честнее закрыть и не тратить бюджет.',
    tags: ['игры для бизнеса', 'аналитика', 'перезапуск', 'ошибки'],
    relatedSlugs: ['pochemu-brend-igry-provalivayutsya-2026', 'kakie-sobytiya-otpravlyat-iz-igry-v-analitiku-2026', 'kak-prodvigat-brend-igru-posle-zapuska-2026'] }),

  E({ slug: 'chuzhie-personazhi-muzyka-shrifty-v-igre-2026', heroIcon: 'ph-fill ph-copyright',
    title: 'Чужие персонажи, музыка и шрифты: где заканчивается «вдохновились»',
    metaTitle: 'Права в бренд-игре: персонажи, музыка, шрифты и картинки',
    metaDescription: 'Что нельзя брать из известных игр и мультфильмов, почему музыка из интернета опасна, зачем шрифту лицензия и что прописать в договоре с подрядчиком.',
    excerpt: 'В игру легко занести чужое и получить претензию уже после запуска. Разбираю, где проходит граница между стилем и копированием и как проверить проект до релиза.',
    tags: ['игры для бизнеса', 'авторские права', 'лицензии', 'риски'],
    relatedSlugs: ['skiny-i-mody-dlya-brenda-zakonnost-2026', 'neyroseti-v-proizvodstve-igry-2026', 'kto-vladeet-igroy-posle-razrabotki-2026'] }),

  E({ slug: 'geymifikaciya-v-lichnom-kabinete-servisa-2026', heroIcon: 'ph-fill ph-squares-four',
    title: 'Геймификация в личном кабинете сервиса: как удержать подписчика',
    metaTitle: 'Геймификация в личном кабинете: удержание подписчиков',
    metaDescription: 'Человек оплатил подписку, зашёл пару раз и пропал. Прогресс настройки, задания первой недели и статусы помогают дойти до первой пользы — и где это вредит.',
    excerpt: 'У сервисов по подписке беда не в привлечении, а в том, что клиент не доходит до первой пользы. Показываю механики кабинета, которые помогают, и те, что раздражают.',
    tags: ['игры для бизнеса', 'подписка', 'удержание', 'онбординг'],
    relatedSlugs: ['igry-chtoby-uchenik-doshel-do-konca-kursa-2026', 'karta-loyalnosti-kak-igra-2026', 'onbording-sotrudnikov-cherez-igru-2026'] }),

];
