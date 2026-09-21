module.exports = {
  flagship: {
    name: 'Сайт, боты и админка для национального театра',
    slug: 'amarsain-sayt-teatra-keys-2026',
    type: 'platform', done: true,
    task: 'Национальный театр много лет жил на конструкторе и накопил там большой архив. Нужно было уйти с конструктора, не потеряв ни новостей, ни ссылок, дать театру свой канал со зрителями и соблюсти 152-ФЗ и 41-ФЗ.',
    solution: 'Статический генератор на Jinja2 и сервер на FastAPI. Афиша сама пересобирается из билетного сервиса, киноафиша раз в неделю генерируется картинкой, есть страницы на английском, китайском и монгольском. Один код ботов для MAX и Telegram с мини-приложением, админка с рассылками, приёмом материалов от сотрудников и спам-фильтром формы. Метрика запускается только после согласия, шрифты свои, согласие хранится с версией текста; по 41-ФЗ со зрителями общается только бот в MAX; подготовлен пакет из 14 документов по персональным данным, памятка и чек-лист директора.',
    result: 'Перенесено 735 новостей, 8 постановок и добавлена ещё одна, труппа из 47 человек и 38 документов, из них 35 на своём сервере. Старые адреса отдают 301, домен запущен 19.09.2026. Сторож проверяет сайт каждые 5 минут, бэкап делается ежедневно с проверкой целостности.',
    stack: ['Jinja2', 'FastAPI', 'MAX Bot API', 'Telegram Bot API', 'мини-приложение'],
    en: {
      task: 'A national theatre had lived on a website builder for years and built up a large archive there. The job was to leave the builder without losing a single news item or link, give the theatre its own channel to its audience, and comply with Russian personal-data law (152-FZ) and the messenger law (41-FZ).',
      solution: 'A static generator on Jinja2 with a FastAPI server. The playbill rebuilds itself from the ticketing service, the cinema listing is rendered as an image once a week, and there are pages in English, Chinese and Mongolian. One bot codebase serves MAX and Telegram, with a mini app, plus an admin panel for broadcasts, staff submissions and a spam filter on the form. Analytics start only after consent, fonts are self-hosted, and consent is stored with the text version; under 41-FZ only the MAX bot talks to the audience; a set of 14 personal-data documents, a memo and a director checklist were prepared.',
      result: '735 news items, 8 productions plus one new one, a company of 47 and 38 documents were moved, 35 of them onto our own server. Old URLs return 301, and the domain went live on 19.09.2026. A watchdog checks the site every 5 minutes, and a daily backup is verified for integrity.',
    },
    es: {
      task: 'Un teatro nacional llevaba años en un constructor de sitios y había acumulado allí un gran archivo. Había que salir del constructor sin perder noticias ni enlaces, dar al teatro su propio canal con el público y cumplir la ley rusa de datos personales (152-FZ) y la de mensajería (41-FZ).',
      solution: 'Un generador estático en Jinja2 con servidor en FastAPI. La cartelera se reconstruye sola desde el servicio de venta de entradas, la cartelera de cine se genera como imagen una vez por semana y hay páginas en inglés, chino y mongol. Un mismo código de bots para MAX y Telegram, con mini app, y un panel con envíos masivos, recepción de materiales del personal y filtro antispam del formulario. La analítica arranca solo tras el consentimiento, las fuentes son propias y el consentimiento se guarda con la versión del texto; según la 41-FZ solo el bot de MAX habla con el público; se preparó un paquete de 14 documentos sobre datos personales, una guía y una lista de control para la dirección.',
      result: 'Se trasladaron 735 noticias, 8 obras más una nueva, una compañía de 47 personas y 38 documentos, 35 de ellos en servidor propio. Las direcciones antiguas devuelven 301 y el dominio se lanzó el 19.09.2026. Un vigilante revisa el sitio cada 5 minutos y la copia diaria se verifica por integridad.',
    },
  },
};
