module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-cpu',
    title: 'Открытая ИИ-модель на своём железе: три варианта и отказ в пользу облака',
    metaTitle: 'Кейс: открытая ИИ-модель на ноутбуке и сервере',
    metaDescription: 'Что потянет ноутбук на 8 ГБ для промптов и картинок и когда нужен сервер с видеокартой. Три варианта по объёму, заказчик выбрал облако, запуска не было.',
    excerpt: 'Дизайнер хотел поставить открытую ИИ-модель у себя для промптов и генерации картинок, из железа ноутбук с 8 ГБ. Я разобрал, что потянет ноутбук, и предложил три варианта по объёму и срокам. Заказчик в тот же день посчитал и выбрал облачные сервисы, запуска не было. Кейс показывает, когда свой сервер не нужен.',
    dateModified: '2026-11-05',
    tags: ['кейс', 'локальный ИИ', 'генерация изображений', 'открытые модели', 'предложение'],
    cta: 'auto',
    relatedSlugs: ['kakoy-lokalnyy-llm-vybrat-2026', 'gpu-dlya-lokalnogo-ii-2026', 'comfyui-generaciya-izobrazheniy-2026', 'dreamserver-lokalnyy-ai-server-2026'],
  },
  flagship: {
    name: 'Открытая ИИ-модель на своём железе',
    slug: 'lokalnaya-otkrytaya-ii-model-dlya-promptov-i-kartinok-predlozhenie-keys-2026',
    type: 'ai', done: false, delivered: true,
    task: 'Дизайнер хотел поставить открытую ИИ-модель у себя для составления промптов и генерации картинок. Из железа ноутбук с 8 ГБ памяти, нужно понять, что на нём реально запустить.',
    solution: 'Разобрал, что потянет ноутбук: текстовая модель среднего размера на 8 ГБ запускается, для картинок нужна видеокарта NVIDIA от 6 ГБ или арендованный сервер. Предложил три варианта по объёму и срокам: модель на ноутбуке, сервер с видеокартой на аккаунте заказчика, сервер плюс дообучение под его стиль и бот в Telegram.',
    result: 'Предложение передано. Заказчик в тот же день отказался: для его объёмов облачные сервисы по его оценке выгоднее. Разработки и запуска не было.',
    stack: ['Flux', 'SDXL', 'сервер с GPU', 'Telegram-бот'],
    en: {
      task: 'A designer wanted to run an open AI model on his own hardware to write prompts and generate images. He only had a laptop with 8 GB of memory, so the question was what could realistically run on it.',
      solution: 'I worked out what the laptop can handle: a mid-sized text model runs on 8 GB, while images need an NVIDIA graphics card with at least 6 GB or a rented server. I proposed three options by scope and timeline: a model on the laptop, a GPU server on the client\'s own account, or the server plus fine-tuning on his style and a Telegram bot.',
      result: 'The proposal has been handed over. The client declined the same day: for his volumes cloud services are cheaper by his own estimate. Nothing has been built or launched.',
    },
    es: {
      task: 'Un diseñador quería instalar un modelo de IA abierto en su propio equipo para redactar prompts y generar imágenes. Solo tenía un portátil con 8 GB de memoria, así que había que averiguar qué se podía ejecutar en él.',
      solution: 'Analicé qué aguanta el portátil: un modelo de texto de tamaño medio funciona con 8 GB, pero para las imágenes hace falta una tarjeta NVIDIA de al menos 6 GB o un servidor alquilado. Propuse tres opciones por alcance y plazo: un modelo en el portátil, un servidor con GPU en la cuenta del cliente, o el servidor más un ajuste fino con su estilo y un bot de Telegram.',
      result: 'La propuesta se ha entregado. El cliente la rechazó ese mismo día: para sus volúmenes los servicios en la nube le salen más baratos, según su propio cálculo. No se ha desarrollado ni lanzado nada.',
    },
  },
};
