module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-gauge',
    title: 'Сайт и шесть пультов собственника с закрытым пробным кабинетом',
    metaTitle: 'Кейс: сайт и шесть пультов собственника для компании',
    metaDescription: 'Сайт, закрытый пробный кабинет с ручной выдачей доступа, шесть отраслевых пультов на демоданных и бот первой линии. Запущено на домене заказчика 28.10.',
    excerpt: 'Компания по автоматизации продаёт руководителям «пульт собственника» и хотела показывать его без открытого демо. Я собрал для неё сайт, закрытый кабинет с ручной выдачей пробного доступа, шесть отраслевых пультов на демоданных и бота первой линии. С 28 октября всё работает на домене заказчика.',
    tags: ['кейс', 'дашборд руководителя', 'личный кабинет', 'Telegram-бот', 'FastAPI'],
    cta: 'auto',
    relatedSlugs: ['dashbord-rukovoditelyu-v-telegram-max-2026', 'lichnyy-kabinet-dlya-klientov-2026', 'mgnovennyy-avtootvet-lidu-2026', 'kvalifikaciya-lidov-botom-2026'],
  },
  flagship: {
    name: 'Сайт и шесть пультов собственника',
    slug: 'pulty-sobstvennika-sayt-probnyy-kabinet-keys-2026',
    type: 'platform', done: true, delivered: true, metric: true,
    task: 'Компания по автоматизации продаёт руководителям «пульт собственника» в шести версиях под разные отрасли. По семи техзаданиям нужен сайт и закрытый кабинет, где человек после заявки получает персональный пробный доступ только к выданным версиям, а все цифры на демоданных сходятся по строкам.',
    solution: 'Один проект на FastAPI, SQLite и чистом JS: сайт, кабинет и админка. Доступ выдаёт администратор вручную: одноразовая ссылка на 72 часа, проба 7 суток, вход администратора с 2FA. Шесть пультов (общий, ремонт, маркетинговое агентство, недвижимость, салон красоты, косметология) считают карточки из строк наборов на каждый запрос, во всех есть контент-план с согласованием. Отдельно бот первой линии в Telegram отвечает по базе знаний и передаёт разговор менеджеру.',
    result: 'Кабинет работал на техническом адресе в день получения техзаданий, 28.10.2026 подключён домен заказчика с сертификатом и запущен бот. Контрольные суммы всех семи техзаданий сходятся в тестах, у бота 21 проверка. Работает на сервере заказчика. Реальных цифр по пробным доступам пока нет.',
    stack: ['Python', 'FastAPI', 'SQLite', 'JavaScript', 'nginx', 'Telegram Bot API'],
    en: {
      task: 'An automation company sells business owners an "owner\'s control panel" in six versions for different industries. Based on seven specifications, they needed a website and a closed workspace where, after submitting a request, a person gets personal trial access to the issued versions only, and every figure in the demo data adds up row by row.',
      solution: 'One project on FastAPI, SQLite and plain JS: the website, the workspace and the admin panel. Access is issued manually by an administrator: a one-time link valid for 72 hours, a 7-day trial, and admin login with 2FA. Six panels (general, renovation, marketing agency, real estate, beauty salon, cosmetology) compute their cards from the dataset rows on every request, and each has a content plan with approvals. Separately, a first-line Telegram bot answers from a knowledge base and hands the conversation over to a manager.',
      result: 'The workspace ran on a technical address on the day the specifications arrived; on 28 October 2026 the client\'s own domain was connected with a certificate and the bot was launched. The control totals of all seven specifications match in the tests, and the bot has 21 checks. It runs on the client\'s server. There are no real figures on trial access yet.',
    },
    es: {
      task: 'Una empresa de automatización vende a los dueños de negocio un "panel del propietario" en seis versiones para distintos sectores. A partir de siete especificaciones necesitaba un sitio web y un área privada donde, tras enviar una solicitud, la persona recibe un acceso de prueba personal solo a las versiones asignadas, y todas las cifras de los datos de demostración cuadran fila por fila.',
      solution: 'Un solo proyecto en FastAPI, SQLite y JS puro: el sitio, el área privada y el panel de administración. El acceso lo concede un administrador a mano: un enlace de un solo uso válido 72 horas, una prueba de 7 días y entrada del administrador con 2FA. Seis paneles (general, reformas, agencia de marketing, inmobiliaria, salón de belleza, cosmetología) calculan sus tarjetas a partir de las filas de los datos en cada petición, y todos tienen un plan de contenidos con aprobación. Aparte, un bot de primera línea en Telegram responde con una base de conocimiento y pasa la conversación a un gestor.',
      result: 'El área privada funcionaba en una dirección técnica el mismo día en que llegaron las especificaciones; el 28 de octubre de 2026 se conectó el dominio del cliente con certificado y se lanzó el bot. Los totales de control de las siete especificaciones cuadran en las pruebas y el bot tiene 21 comprobaciones. Funciona en el servidor del cliente. Todavía no hay cifras reales de accesos de prueba.',
    },
  },
};
