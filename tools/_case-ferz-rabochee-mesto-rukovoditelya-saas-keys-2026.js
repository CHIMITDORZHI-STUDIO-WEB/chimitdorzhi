module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-crown',
    title: 'Ферзь: рабочее место руководителя без штатных юриста и кадровика',
    metaTitle: 'Кейс: Ферзь, рабочее место руководителя без юриста',
    metaDescription: 'Свой SaaS для руководителя: 30 ИИ-специалистов, риски в рублях, календарь сроков, 63 сценария и ответ файлом Word. Что построено и что не проверено.',
    excerpt: 'Руководителю небольшого учреждения или бизнеса нужны юрист, кадровик, экономист и закупщик, а нужного специалиста рядом может не оказаться. Разбор моего собственного SaaS «Ферзь»: 30 ролей, риски, сроки, обезличивание данных, и честно о том, чего в нём пока нет.',
    tags: ['кейс', 'SaaS', 'ИИ-агенты', 'рабочее место руководителя'],
    cta: 'auto',
    relatedSlugs: ['ai-dlya-yurista-dokumenty-2026', 'ai-agenty-avtonomnye-sotrudniki-2026', 'kedo-kadrovyy-edo-perehod-2026', 'korporativnyy-ai-assistent-na-svoih-dannyh-2027'],
  },
  flagship: {
    name: 'Ферзь: рабочее место руководителя',
    slug: 'ferz-rabochee-mesto-rukovoditelya-saas-keys-2026',
    type: 'platform', done: false,
    task: 'Руководителю небольшого учреждения или бизнеса приходится самому закрывать работу юриста, кадровика, экономиста и закупщика. Нужного специалиста рядом может не оказаться, а ставку под редкие задачи держать дорого. Это мой собственный продукт.',
    solution: 'Веб-кабинет на FastAPI и SQLite: 30 ролей-специалистов в 5 группах, досье организации, экспресс-проверка из 10 вопросов с суммами штрафов, календарь сроков, 63 сценария, поручения сотрудникам и ответ готовым файлом Word. Персональные данные заменяются метками до отправки в модель, для организаций вне России российские нормы отключаются.',
    result: 'Сайт работает на своём домене: лендинг, вход и админка отвечают 200, закрытый API без входа отвечает 401. В коде 14 таблиц и 55 маршрутов API, автотестов нет. Платных клиентов не заявляю; по моим заметкам, ответы пока готовит оператор через пульт, на сервере это не перепроверялось.',
    stack: ['FastAPI', 'SQLite', 'JavaScript', 'python-docx', 'Claude API', 'nginx'],
    en: {
      task: 'The head of a small institution or business often has to do the work of a lawyer, HR officer, economist and procurement specialist alone. The right specialist may not be nearby, and keeping a salary for rare tasks is expensive. This is my own product.',
      solution: 'A web workspace on FastAPI and SQLite: 30 specialist roles in 5 groups, an organisation file, a 10-question express check with fine amounts, a deadline calendar, 63 scenarios, task assignment to staff and every answer delivered as a ready Word file. Personal data is replaced with tokens before it reaches the model, and for organisations outside Russia the Russian rules are switched off.',
      result: 'The site is live on its own domain: the landing page, login and admin return 200, and the private API returns 401 without a session. The code has 14 tables and 55 API routes, with no automated tests. I do not claim paying customers; according to my notes, answers are still prepared by an operator through a console, which I did not recheck on the server.',
    },
    es: {
      task: 'El director de una institución pequeña o de un negocio suele tener que hacer solo el trabajo de abogado, jefe de personal, economista y responsable de compras. Puede que no haya el especialista adecuado cerca, y mantener un sueldo para tareas poco frecuentes es caro. Es un producto propio.',
      solution: 'Un espacio de trabajo web con FastAPI y SQLite: 30 roles de especialistas en 5 grupos, expediente de la organización, comprobación exprés de 10 preguntas con importes de multas, calendario de plazos, 63 escenarios, encargos al personal y cada respuesta entregada como archivo Word listo. Los datos personales se sustituyen por marcas antes de llegar al modelo, y para organizaciones fuera de Rusia se desactivan las normas rusas.',
      result: 'El sitio funciona en su propio dominio: la página de inicio, el acceso y el panel de administración responden 200, y la API privada responde 401 sin sesión. El código tiene 14 tablas y 55 rutas de API, sin pruebas automáticas. No afirmo que haya clientes de pago; según mis notas, las respuestas las prepara por ahora un operador desde una consola, algo que no volví a comprobar en el servidor.',
    },
  },
};
