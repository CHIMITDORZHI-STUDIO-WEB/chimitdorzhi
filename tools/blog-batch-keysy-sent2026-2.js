// Разборы восьми работ середины сентября: кафе с розыгрышами, переезд с конструктора,
// финансовый разбор по отчётности, витрина из пересланных постов, модель городской
// лояльности, предложение по токену, разведка данных и интерфейс прямо в чате.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-17';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const CTA_SITE = { url: `${S}/services/web-development/`, label: 'Обсудить сайт' };
const CTA_BOTS = { url: `${S}/development/telegram-bots/`, label: 'Обсудить бота' };
const CTA_AUTO = { url: `${S}/services/business-automation/`, label: 'Обсудить автоматизацию' };

const tocFrom = (html) => [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m => ({ id: m[1], text: m[2] }));
const E = (o) => {
  const html = C(o.slug);
  return Object.assign(
    { published: true, datePublished: D, dateModified: D, readingMinutes: 5, category: 'cases',
      servicesOffer: SVC_BIZ, ctaInternal: CTA_SITE },
    o, { contentHtml: html, toc: tocFrom(html) });
};

module.exports = [

  E({ slug: 'kafe-nacionalnoy-kuhni-bot-max-rozygryshi-keys-2026', heroIcon: 'ph-fill ph-bowl-food',
    title: 'Кафе, сайт и розыгрыши в мессенджере: как это работает вместе',
    metaTitle: 'Кейс: сайт кафе, бот в MAX и розыгрыши для гостей',
    metaDescription: 'Сайт кафе, бот в мессенджере с покупкой номерка в переписке и админка розыгрышей: как связка работает вместе и почему страница похудела в пять раз.',
    excerpt: 'Розыгрыши среди гостей вели вручную: номерки записывали, оплату сверяли в переписке. Собрал связку «сайт плюс бот плюс админка», где номерок покупают в чате, а победителя можно перепроверить.',
    tags: ['кейс', 'общепит', 'бот в MAX', 'розыгрыши'],
    ctaInternal: CTA_BOTS,
    relatedSlugs: ['goryachiy-moment-sayt-kofeen-keys-2026', 'pwa-kofeyni-geymifikaciya-keys-2026', 'pereezd-s-konstruktora-na-svoy-server-keys-2026'] }),

  E({ slug: 'pereezd-s-konstruktora-na-svoy-server-keys-2026', heroIcon: 'ph-fill ph-hard-drives',
    title: 'Переезд с конструктора на свой сервер: что получает бизнес взамен',
    metaTitle: 'Кейс: переезд сайта с конструктора на свой сервер',
    metaDescription: 'Снял сайт с конструктора и достроил то, чего в конструкторе не бывает: заявки со статусами, бота, рассылки и редактор страниц для владельца.',
    excerpt: 'Переезд с конструктора имеет смысл не ради экономии на подписке. Разбираю, что появилось на своём сервере: приём заявок, бот, админка со входом по коду и редактор страниц для владельца.',
    tags: ['кейс', 'сайт под ключ', 'свой сервер', 'админка'],
    relatedSlugs: ['sayt-bez-formy-zayavki-keys-2026', 'kafe-nacionalnoy-kuhni-bot-max-rozygryshi-keys-2026', 'otkazoustoychivaya-infrastruktura-keys-2026'] }),

  E({ slug: 'finansovyy-razbor-kompanii-po-otchetnosti-keys-2026', heroIcon: 'ph-fill ph-chart-line-down',
    title: 'Разбор компании по официальной отчётности: что видно в цифрах',
    metaTitle: 'Кейс: разбор конкурента по официальной отчётности',
    metaDescription: 'Как по открытой отчётности понять, успешен ли конкурент: где прибыль держится на прочих доходах и почему громкая цифра оборота оказалась не оборотом.',
    excerpt: 'Партнёр хотел брать известный сервис за образец. Прочитал отчётность за пять лет по строкам и показал, откуда там прибыль, кто на самом деле финансирует проект и почему громкая цифра оборота ничего не значит.',
    tags: ['кейс', 'аналитика', 'конкурентная разведка', 'финансы'],
    ctaInternal: CTA_AUTO,
    relatedSlugs: ['audit-brenda-partnerskaya-set-keys-2026', 'konkurentnaya-razvedka-legalno-2026', 'razvedka-dannyh-avtoploshchadok-keys-2026'] }),

  E({ slug: 'vitrina-avto-iz-pereslannyh-postov-keys-2026', heroIcon: 'ph-fill ph-paper-plane-tilt',
    title: 'Витрина из пересланных постов: объявление собирается само',
    metaTitle: 'Кейс: витрина авто, где объявление собирается из поста',
    metaDescription: 'Владелец пересылает боту свой пост с фото — объявление появляется на витрине само. Разбираю, почему это дешевле форм и как устроена админка с телефона.',
    excerpt: 'Продавец уже публикует посты, так что заставлять его заполнять формы бессмысленно. Сделал витрину, которая понимает его пост: альбом склеивается в объявление, а опечатку в курсе разборщик чинит сам.',
    tags: ['кейс', 'мини-приложение', 'бот', 'витрина'],
    ctaInternal: CTA_BOTS,
    relatedSlugs: ['wetocar-katalog-avto-kitay-keys-2026', 'avtomost-vitrina-avto-kitay-keys-2026', 'pereezd-s-konstruktora-na-svoy-server-keys-2026'] }),

  E({ slug: 'gorodskaya-programma-loyalnosti-model-keys-2026', heroIcon: 'ph-fill ph-wallet',
    title: 'Общий кошелёк баллов для города: как устроить, чтобы это работало',
    metaTitle: 'Кейс: модель городской программы лояльности',
    metaDescription: 'Баллы копятся в одних заведениях и тратятся в других. Разбираю, за что брать деньги, зачем делить участников на два типа и каким обязан быть пилот.',
    excerpt: 'В программе лояльности сложнее всего не техника, а экономика. Показываю, почему считать надо собственные транзакции, а не выручку партнёров, и что будет, если собрать в пилот только кофейни.',
    tags: ['кейс', 'лояльность', 'экономика продукта', 'ритейл'],
    ctaInternal: CTA_AUTO,
    relatedSlugs: ['partnyorskaya-sistema-qr-keys-2026', 'participation-loyalty-loyalnost-cherez-uchastie-2026', 'peru-loyalty-keys-2026'] }),

  E({ slug: 'kp-token-s-vyplatami-derzhatelyam-keys-2026', heroIcon: 'ph-fill ph-scales',
    title: 'Токен с выплатами держателям: что я предложил изменить в чужой архитектуре',
    metaTitle: 'Кейс: предложение по токену с выплатами держателям',
    metaDescription: 'Заказчик прислал свою архитектуру токена с выплатами. Разбираю три изменения, шесть дыр в снимке держателей и зачем в смете раздел «что не входит».',
    excerpt: 'Запрос был на токен, держатели которого получают выплаты. Показываю, почему на старте не стоит писать свою программу, чем опасен перехватчик переводов и что обязательно выносить за границы работ.',
    tags: ['кейс', 'блокчейн', 'предложение клиенту', 'оценка рисков'],
    ctaInternal: CTA_AUTO,
    relatedSlugs: ['tulkit-zapuska-spl-tokena-keys-2026', 'analizator-memkoinov-keys-2026', 'razvedka-dannyh-avtoploshchadok-keys-2026'] }),

  E({ slug: 'razvedka-dannyh-avtoploshchadok-keys-2026', heroIcon: 'ph-fill ph-binoculars',
    title: 'Сколько стоит свой каталог данных: разведка до начала работ',
    metaTitle: 'Кейс: разведка данных перед проектом каталога',
    metaDescription: 'Прежде чем считать смету на свой каталог данных, я проверил объём источника. Почему нельзя зеркалить фото и зачем лента изменений вместо полного обхода.',
    excerpt: 'Четверть миллиона объявлений и по два десятка фото у каждого меняют и архитектуру, и счёт за инфраструктуру. Разбираю, что дала разведка за один день и какие вопросы я честно оставил без ответа.',
    tags: ['кейс', 'данные', 'архитектура', 'смета'],
    ctaInternal: CTA_AUTO,
    relatedSlugs: ['wetocar-katalog-avto-kitay-keys-2026', 'finansovyy-razbor-kompanii-po-otchetnosti-keys-2026', 'konkurentnaya-razvedka-legalno-2026'] }),

  E({ slug: 'interfeys-v-chate-vmesto-mini-app-keys-2026', heroIcon: 'ph-fill ph-chat-centered-text',
    title: 'Интерфейс прямо в чате: когда мини-приложение больше не нужно',
    metaTitle: 'Кейс: интерфейс в чате вместо мини-приложения',
    metaDescription: 'Новый формат сообщений в Telegram даёт таблицы, карточки и кнопки без отдельного приложения. Где мини-приложение теперь лишнее, а где без него не обойтись.',
    excerpt: 'Собрал двух ботов на одном примере: старый формат и новый. Показываю, какой слой работ уходит из сметы, если вёрстка сообщения больше не требует сайта с доменом и сертификатом.',
    tags: ['кейс', 'Telegram', 'боты', 'мини-приложения'],
    ctaInternal: CTA_BOTS,
    relatedSlugs: ['bot-mini-app-rieltoram-keys-2026', 'vitrina-avto-iz-pereslannyh-postov-keys-2026', 'mini-app-v-max-dlya-biznesa-2026'] }),

];
