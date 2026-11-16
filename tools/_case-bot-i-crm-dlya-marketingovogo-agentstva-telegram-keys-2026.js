module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-address-book',
    title: 'Бот и мини-приложение CRM для маркетингового агентства',
    metaTitle: 'Кейс: бот и CRM в Telegram для маркетингового агентства',
    metaDescription: 'Клиент пишет боту, сотрудники отвечают из рабочей группы, дела и встречи ставятся голосом. Мини-приложение CRM собрано, 53 проверки из 53, ждёт запуска.',
    excerpt: 'Руководитель агентства работал передатчиком между клиентами и командой и держал всё в голове. Я собрал бота и мини-приложение CRM: клиент пишет боту, на него заводится карточка и тема в рабочей группе, напоминания и встречи ставятся голосом. Всё собрано и проверено на тестовых данных, к запуску ждёт сервер.',
    tags: ['кейс', 'Telegram', 'CRM', 'мини-приложение', 'голосовой ввод'],
    cta: 'bots',
    relatedSlugs: ['ii-iz-golosovyh-v-crm-2026', 'crm-partnera-travel-kluba-2026', 'golosovoy-ezhednevnik-planer-keys-2026', 'interfeys-v-chate-vmesto-mini-app-keys-2026'],
  },
  flagship: {
    name: 'Бот и CRM в Telegram для маркетингового агентства',
    slug: 'bot-i-crm-dlya-marketingovogo-agentstva-telegram-keys-2026',
    type: 'crm', done: false, delivered: false,
    task: 'Руководитель маркетингового агентства пересылал сообщения между клиентами и командой, держал дела в голове и в «Избранном», а после отправки коммерческого предложения у него не было следующего шага. Нужны были ответы клиентам без него, учёт переписки и напоминания голосом.',
    solution: 'Бот и мини-приложение CRM на основе моей готовой системы: клиент пишет боту, даёт согласие на данные, на него заводятся карточка и тема в рабочей группе, ответ из темы уходит клиенту от бота, заметки для своих помечаются двумя косыми чертами. Голосом ставятся напоминания и встречи, есть утренняя сводка и вечерний итог.',
    result: 'Система собрана и проверена на тестовых данных: 53 проверки из 53, на семи экранах в двух темах нет нарушений контраста. Запуска не было, живых клиентов в ней нет, для старта ждёт сервер.',
    stack: ['Python', 'FastAPI', 'SQLite', 'Telegram Bot API', 'JS мини-приложение'],
    en: {
      task: 'The head of a marketing agency relayed messages between clients and the team, kept tasks in his head and in Saved Messages, and had no next step after sending a commercial proposal. He needed replies to clients without him, a record of conversations and voice reminders.',
      solution: 'A bot and a CRM mini app based on my existing system: the client writes to the bot and gives consent for data processing, a card and a topic in the working group are created, a reply from the topic goes to the client from the bot, and notes for the team are marked with two slashes. Reminders and meetings are set by voice, with a morning digest and an evening summary.',
      result: 'The system is built and checked on test data: 53 checks out of 53, and no contrast violations on seven screens in two themes. It has not been launched and has no live clients; it is waiting for a server to start.',
    },
    es: {
      task: 'El director de una agencia de marketing reenviaba mensajes entre los clientes y el equipo, llevaba las tareas en la cabeza y en «Mensajes guardados», y tras enviar una propuesta comercial no tenía un siguiente paso. Necesitaba responder a los clientes sin él, registrar las conversaciones y tener recordatorios por voz.',
      solution: 'Un bot y una mini-app de CRM basados en mi sistema ya existente: el cliente escribe al bot y da su consentimiento para el tratamiento de datos, se crean una ficha y un tema en el grupo de trabajo, la respuesta desde el tema llega al cliente desde el bot y las notas para el equipo se marcan con dos barras. Los recordatorios y las reuniones se programan por voz, con un resumen matutino y otro vespertino.',
      result: 'El sistema está construido y probado con datos de prueba: 53 comprobaciones de 53, y sin infracciones de contraste en siete pantallas en dos temas. No se ha lanzado ni tiene clientes reales; espera un servidor para empezar.',
    },
  },
};
