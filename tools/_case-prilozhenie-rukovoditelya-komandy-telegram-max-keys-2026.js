module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-tree-structure',
    title: 'Приложение руководителя большой команды в Telegram, MAX и на сайте',
    metaTitle: 'Кейс: приложение руководителя команды в Telegram и MAX',
    metaDescription: 'Мини-приложение Telegram и MAX и сайт на одной базе: структура команды, поручения, база знаний, ИИ-секретарь, 152-ФЗ. В проде с 25.10, заказчик тестирует.',
    excerpt: 'Руководителю большой команды нужно было видеть всю структуру, ставить поручения вниз по цепочке и получать сводку без звонков. Я собрал мини-приложение в Telegram и MAX и сайт на одной базе: иерархия, поручения со сроками и напоминаниями, база знаний и ИИ-секретарь. Работает с 25.10.2026 на сервере заказчика, сейчас он тестирует его сам.',
    tags: ['кейс', 'мини-приложение', 'Telegram', 'MAX', '152-ФЗ', 'ИИ-секретарь'],
    cta: 'bots',
    relatedSlugs: ['max-mini-apps-2026', 'odin-bot-v-telegram-i-max-chto-obshchee-i-chto-raznoe-2026', '152-fz-dlya-chat-botov-i-messendzherov-2026', 'kto-chto-vidit-v-prilozhenii-roli-i-prava-dlya-biznesa-2026'],
  },
  flagship: {
    name: 'Приложение руководителя команды в Telegram и MAX',
    slug: 'prilozhenie-rukovoditelya-komandy-telegram-max-keys-2026',
    type: 'platform', done: true, delivered: true,
    task: 'Руководителю большой команды, собранной по десяткам, сотням и тысячам, нужно видеть всю структуру, ставить поручения вниз по цепочке и получать сводку снизу без звонков. Люди сидят в разных мессенджерах, данные должны храниться по 152-ФЗ.',
    solution: 'Мини-приложение в Telegram и MAX и сайт на одной базе (Python, FastAPI, SQLite): дерево людей с приглашениями, поручения со сроками по часовому поясу каждого и напоминаниями, база знаний с файлами, ИИ-секретарь, который получает только обезличенные данные. Документы по 152-ФЗ, обязательное согласие, удаление данных по кнопке, шифрованная копия базы на втором сервере, 22 автотеста.',
    result: 'В проде с 25.10.2026 на сервере и домене заказчика, адрес отвечает 200 (проверил 28.10.2026). С 26.10 заказчик сам занял место руководителя в Telegram и MAX и тестирует. Цифр использования пока нет.',
    stack: ['Python', 'FastAPI', 'SQLite', 'JS мини-приложение', 'Telegram Bot API', 'MAX Bot API', 'DeepSeek API'],
    en: {
      task: 'A leader of a large team organised in tens, hundreds and thousands needs to see the whole structure, push assignments down the chain and get a summary from below without phone calls. People use different messengers, and the data must be stored in line with Russian personal data law 152-FZ.',
      solution: 'A mini app in Telegram and MAX plus a website on one database (Python, FastAPI, SQLite): a people tree with invitations, assignments with deadlines in each person\'s time zone and reminders, a knowledge base with files, and an AI secretary that only receives anonymised data. 152-FZ documents, mandatory consent, data deletion with one button, an encrypted database copy on a second server, 22 automated tests.',
      result: 'In production since 25 October 2026 on the client\'s server and domain; the address returns 200 (checked on 28 October 2026). Since 26 October the client has taken the leader seat in Telegram and MAX himself and is testing it. There are no usage numbers yet.',
    },
    es: {
      task: 'El líder de un equipo grande organizado en decenas, centenas y millares necesita ver toda la estructura, bajar encargos por la cadena y recibir un resumen desde abajo sin llamadas. La gente usa mensajeros distintos y los datos deben guardarse conforme a la ley rusa de datos personales 152-FZ.',
      solution: 'Una mini-app en Telegram y MAX y un sitio web sobre una misma base de datos (Python, FastAPI, SQLite): un árbol de personas con invitaciones, encargos con plazos en la zona horaria de cada uno y recordatorios, una base de conocimiento con archivos y un secretario con IA que solo recibe datos anonimizados. Documentos según la 152-FZ, consentimiento obligatorio, borrado de datos con un botón, una copia cifrada de la base en un segundo servidor y 22 pruebas automáticas.',
      result: 'En producción desde el 25 de octubre de 2026 en el servidor y el dominio del cliente; la dirección responde 200 (comprobado el 28 de octubre de 2026). Desde el 26 de octubre el propio cliente ocupa el puesto de líder en Telegram y MAX y lo está probando. Todavía no hay cifras de uso.',
    },
  },
};
