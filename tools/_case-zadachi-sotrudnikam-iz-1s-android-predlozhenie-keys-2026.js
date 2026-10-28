module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-list-checks',
    title: 'Задачи сотрудникам из 1С в телефоне: прототип на Android и план тиража',
    metaTitle: 'Кейс: задачи из 1С в приложении на Android, прототип',
    metaDescription: 'Прототип на Android: задачи из типовой 1С через стандартный OData без правки базы. Принять, выполнить с комментарием, создать задачу. Проверен на живой 1С.',
    excerpt: 'Внедренец 1С хочет продавать решение, которое часто просят его клиенты: задача ставится в 1С, сотрудник выполняет её в телефоне, результат возвращается в базу. Я собрал рабочий прототип для Android на стандартных задачах типовой 1С, без доработки базы, и проверил его на живой 1С. Тиражного продукта в продаже пока нет, план развития передан.',
    tags: ['кейс', '1С', 'мобильное приложение', 'Android', 'Flutter'],
    cta: 'auto',
    relatedSlugs: ['http-servis-1c-dlya-prilozheniya-2026', 'dorabotki-1c-cherez-rasshireniya-2026', 'prilozhenie-dlya-zamershchika-i-vyezdnogo-mastera-2026', 'web-to-app-upakovka-saytov-i-pwa-v-android-apk-na-telefone-webview-twa-rustore-2026'],
  },
  flagship: {
    name: 'Задачи из 1С на Android',
    slug: 'zadachi-sotrudnikam-iz-1s-android-predlozhenie-keys-2026',
    type: 'bot', done: false, delivered: true,
    task: 'Внедренец 1С хочет тиражное решение для своих клиентов: задачи ставятся в 1С, сотрудник выполняет их в мобильном приложении, результат возвращается в 1С. Решение должно вставать на типовую конфигурацию без доработки каждой базы.',
    solution: 'Приложение для Android на Flutter работает со стандартными задачами типовой 1С (бизнес-процесс «Задание» и задача исполнителя) через стандартный интерфейс OData, без изменения конфигурации. Умеет показывать мои задачи, принимать их к исполнению, выполнять с комментарием, который автор видит в 1С, и создавать новую задачу себе или коллеге.',
    result: 'Рабочий прототип версии 1.0.0 от 21.10.2026 проверен на живой базе 1С: 6 тестов на живой 1С и 16 тестов экранов на заглушке. Фото, уведомлений и отчётов руководителя пока нет, они в плане развития, который передан заказчику. Тиражного продукта в продаже пока нет.',
    stack: ['Flutter', 'Dart', 'Android', 'OData 1С', '1С:БСП'],
    en: {
      task: 'A 1C implementation specialist wants a replicable product for his clients: tasks are set in 1C, an employee completes them in a mobile app, and the result goes back to 1C. It has to fit a standard configuration without customizing each database.',
      solution: 'An Android app built with Flutter works with the standard tasks of a typical 1C configuration (the «Assignment» business process and the performer task) through the standard OData interface, without changing the configuration. It shows my tasks, lets the employee accept a task, complete it with a comment that the author sees in 1C, and create a new task for themselves or a colleague.',
      result: 'A working prototype, version 1.0.0 of October 21, 2026, tested on a live 1C database: 6 tests against live 1C and 16 screen tests against a stub. Photos, notifications and manager reports are not there yet; they are in the development plan handed to the client. The replicable product is not on sale yet.',
    },
    es: {
      task: 'Un especialista en implantación de 1C quiere un producto replicable para sus clientes: las tareas se crean en 1C, el empleado las cumple en una aplicación móvil y el resultado vuelve a 1C. Debe encajar en una configuración estándar sin adaptar cada base de datos.',
      solution: 'Una aplicación para Android hecha con Flutter trabaja con las tareas estándar de una configuración típica de 1C (el proceso de negocio «Encargo» y la tarea del ejecutor) mediante la interfaz OData estándar, sin modificar la configuración. Muestra mis tareas, permite aceptar una tarea, completarla con un comentario que el autor ve en 1C y crear una tarea nueva para uno mismo o para un compañero.',
      result: 'Un prototipo funcional, versión 1.0.0 del 21 de octubre de 2026, probado en una base 1C real: 6 pruebas con 1C en vivo y 16 pruebas de pantallas con un simulador. Todavía no hay fotos, notificaciones ni informes para el responsable; están en el plan de desarrollo entregado al cliente. El producto replicable aún no está a la venta.',
    },
  },
};
