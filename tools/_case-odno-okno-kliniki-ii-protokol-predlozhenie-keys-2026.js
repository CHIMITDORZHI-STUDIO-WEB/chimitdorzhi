module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-stethoscope',
    title: 'Одно окно для частной клиники и ИИ-черновик протокола: типовое КП',
    metaTitle: 'Кейс: КП для частной клиники с ИИ-черновиком протокола',
    metaDescription: 'Типовое КП для частных клиник: пациенты, запись, оплаты и документы в одном окне, ИИ-черновик протокола приёма в закрытом контуре. Пока не внедрено.',
    excerpt: 'Типовое предложение для частных клиник на три страницы: пациенты, запись, оплаты, договоры и справки в одной системе на сервере клиники и ИИ, который раскладывает слова врача по шаблону протокола. Есть макет кабинета врача, схема закрытого контура и ответы на вопросы юриста. Предложение готово и передаётся клиникам, внедрений пока нет.',
    tags: ['кейс', 'медицина', 'коммерческое предложение', 'локальный ИИ', '152-ФЗ'],
    cta: 'auto',
    relatedSlugs: ['zapisi-priemov-152-fz-bez-oblaka-2026', 'elektronnaya-medkarta-mis-2026', 'avtomatizaciya-kliniki-medcentra-2026', 'ollama-vs-lm-studio-2026'],
  },
  flagship: {
    name: 'Одно окно для клиники и ИИ-протокол',
    slug: 'odno-okno-kliniki-ii-protokol-predlozhenie-keys-2026',
    type: 'doc', done: false, delivered: true,
    task: 'Частная клиника платит за медицинскую систему по подписке за каждого врача, касса живёт отдельно, договоры собираются в Word, а вечер врача уходит на набор протоколов. Нужна одна система, которую клиника покупает один раз и держит у себя.',
    solution: 'Типовое КП на три страницы A4: шесть модулей в одном окне (пациенты, запись, оплаты, договоры, выдача документов, ИИ-протокол), макет кабинета врача с черновиком протокола, три варианта по объёму, схема закрытого контура без выхода в интернет и 16 ответов на вопросы юриста и клиники. ИИ только записывает и раскладывает слова врача по полям шаблона, диагнозов и лечения не предлагает.',
    result: 'Предложение готово и передаётся клиникам, решения пока нет. Система не внедрена, прототип распознавания ранний, тезис о том, что это не медицинское изделие, юрист ещё не проверял.',
    stack: ['HTML и CSS', 'Playwright', 'PDF', 'Локальные модели распознавания речи (план)'],
    en: {
      task: 'A private clinic pays for its medical system with a per-doctor subscription, the cash register lives separately, contracts are put together in Word, and doctors spend their evenings typing up visit notes. It needs one system that the clinic buys once and keeps on its own premises.',
      solution: 'A standard three-page A4 proposal: six modules in one window (patients, scheduling, payments, contracts, document issuing, AI visit notes), a mockup of the doctor\'s workspace with a draft note, three options by scope, a diagram of a closed environment with no internet access, and 16 answers to questions from a lawyer and a clinic. The AI only records and sorts the doctor\'s words into the template fields and does not suggest diagnoses or treatment.',
      result: 'The proposal is ready and is being offered to clinics, with no decision yet. The system has not been deployed anywhere, the speech recognition prototype is at an early stage, and the claim that it is not a medical device has not yet been checked by a lawyer.',
    },
    es: {
      task: 'Una clínica privada paga su sistema médico con una suscripción por cada médico, la caja funciona por separado, los contratos se preparan en Word y los médicos pasan la tarde redactando los protocolos de consulta. Necesita un solo sistema que la clínica compre una vez y mantenga en sus propias instalaciones.',
      solution: 'Una propuesta estándar de tres páginas A4: seis módulos en una sola ventana (pacientes, citas, pagos, contratos, emisión de documentos, protocolo con IA), una maqueta del puesto del médico con un borrador de protocolo, tres opciones según el alcance, un esquema de entorno cerrado sin acceso a internet y 16 respuestas a preguntas de un abogado y de la clínica. La IA solo registra y ordena las palabras del médico en los campos de la plantilla y no propone diagnósticos ni tratamientos.',
      result: 'La propuesta está lista y se ofrece a las clínicas, aún sin decisión. El sistema no se ha implantado en ningún sitio, el prototipo de reconocimiento de voz está en una fase temprana y la tesis de que no es un producto sanitario todavía no la ha revisado un abogado.',
    },
  },
};
