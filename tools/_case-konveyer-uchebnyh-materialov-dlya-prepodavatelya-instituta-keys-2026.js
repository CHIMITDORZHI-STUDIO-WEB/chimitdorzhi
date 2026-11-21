module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-graduation-cap',
    title: 'Конвейер учебных материалов для преподавателя института образования',
    metaTitle: 'Кейс: презентации, лекции и обработка анкет для педагога',
    metaDescription: 'Презентации на 30 и 50 слайдов, лекции в Word, сборник по образцу, таблицы и диаграммы по анкетам учителей, статья для конференции. Всё сдано.',
    excerpt: 'Преподавателю института развития образования регулярно нужны презентации по присланным PDF, лекции в Word, сборник по образцу и обработка анкет. Я собрал для этого конвейер из скриптов: на входе её источники и образец оформления, на выходе готовые файлы. С октября по ноябрь сдано несколько комплектов.',
    tags: ['кейс', 'презентации', 'Word', 'Excel', 'обработка анкет', 'образование'],
    cta: 'auto',
    relatedSlugs: ['neyroset-dlya-prezentaciy-2026', 'avtomatizaciya-excel-na-zakaz-2026', 'napisat-skript-na-zakaz-2026', 'ocifrovka-bumazhnyh-anket-i-blankov-2026'],
  },
  flagship: {
    name: 'Конвейер учебных материалов для преподавателя',
    slug: 'konveyer-uchebnyh-materialov-dlya-prepodavatelya-instituta-keys-2026',
    type: 'doc', done: true, delivered: true,
    task: 'Преподавателю института развития образования нужны презентации на 30 и 50 слайдов по присланным PDF и образцу оформления, лекции в Word, сборник по образцу прошлого года, обработка анкет учителей и статья под требования конференции.',
    solution: 'Для каждого типа работы я собрал скрипты: слайды описываются данными и собираются в файл по образцу, лекция и статья идут в Word по заданным правилам, анкеты разбираются в таблицы, диаграммы и Excel. Вёрстку проверял рендером в браузере, потому что Office на машине нет.',
    result: 'С конца октября по середину ноября сдано несколько комплектов: презентации, лекции, сборник, обработка анкет 30 учителей и статья. Правки преподавателя вносятся в данные и пересобираются. Принята ли статья конференцией, я не знаю.',
    stack: ['Node.js', 'pptxgenjs', 'Python', 'python-docx', 'matplotlib', 'openpyxl', 'Playwright'],
    en: {
      task: 'A lecturer at an institute for education development needs presentations of 30 and 50 slides built from supplied PDFs and a style sample, lectures in Word, a collection built to last year\'s template, processing of teacher questionnaires and an article that meets conference requirements.',
      solution: 'For each kind of work I built scripts: slides are described as data and assembled into a file that follows the sample, the lecture and the article go to Word under fixed rules, and questionnaires are parsed into tables, charts and Excel. I checked the layout by rendering in a browser, because there is no Office on the machine.',
      result: 'Between the end of October and mid-November several sets were delivered: presentations, lectures, the collection, the processing of 30 teachers\' questionnaires and the article. Her corrections go into the data and everything is rebuilt. I do not know whether the conference accepted the article.',
    },
    es: {
      task: 'Una docente de un instituto de desarrollo de la educación necesita presentaciones de 30 y 50 diapositivas a partir de PDF recibidos y un modelo de estilo, conferencias en Word, una colección según la plantilla del año pasado, el procesamiento de cuestionarios de profesores y un artículo que cumpla los requisitos de una conferencia.',
      solution: 'Para cada tipo de trabajo construí scripts: las diapositivas se describen como datos y se ensamblan en un archivo que sigue el modelo, la conferencia y el artículo salen en Word con reglas fijas, y los cuestionarios se convierten en tablas, gráficos y Excel. Revisé el diseño renderizando en un navegador, porque en la máquina no hay Office.',
      result: 'Entre finales de octubre y mediados de noviembre se entregaron varios paquetes: presentaciones, conferencias, la colección, el procesamiento de los cuestionarios de 30 profesores y el artículo. Sus correcciones se incorporan a los datos y todo se reconstruye. No sé si la conferencia aceptó el artículo.',
    },
  },
};
