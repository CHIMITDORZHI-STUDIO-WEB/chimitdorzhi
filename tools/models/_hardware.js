// Страницы «что запускается на таком железе» для энциклопедии открытых моделей.
// key — класс железа из поля hardware у записей каталога (min | gpu | multi).
// Никаких цен и обещаний: только то, что видно по данным каталога и по общеизвестным
// характеристикам самого железа.
module.exports = [
  {
    slug: 'bez-videokarty',
    key: 'min',
    title: 'Какие ИИ-модели работают без видеокарты',
    h1: 'Что запустить на обычном компьютере без видеокарты',
    description: 'Открытые ИИ-модели, которые работают на ноутбуке или сервере без видеокарты: распознавание речи, поиск по документам, небольшие языковые модели.',
    intro: 'Без видеокарты открытая модель работает на процессоре и обычной оперативной памяти. Это медленнее, зато не нужно ничего докупать: подходит там, где ответ не нужен мгновенно, а объём небольшой — ночная обработка документов, расшифровка записей, поиск по базе знаний.',
    examples: [
      ['Офисный ноутбук', '16 ГБ оперативной памяти, обычный процессор. Тянет небольшие языковые модели в сжатом виде, распознавание речи, синтез речи, эмбеддинги для поиска.'],
      ['Рабочая станция или мини-ПК', '32–64 ГБ памяти. То же самое, но модель побольше и несколько задач одновременно.'],
      ['Виртуальный сервер без видеокарты', 'Самый дешёвый вариант хостинга. Годится для фоновой обработки: разобрать почту за ночь, проиндексировать архив, расшифровать записи разговоров.'],
    ],
    note: 'Узкое место здесь — скорость. Языковая модель на процессоре отвечает секундами, а не мгновенно, поэтому в живой чат с клиентом такой сценарий обычно не ставят. Зато на ночных задачах разница незаметна. Второй момент: оперативной памяти нужно примерно столько же, сколько занимает файл модели, плюс запас на контекст.',
    title_en: 'Which AI models run without a GPU',
    h1_en: 'What runs on a regular computer without a GPU',
    description_en: 'Open AI models that run on a laptop or a server with no GPU: speech recognition, document search, small language models.',
    intro_en: 'Without a GPU an open model runs on the CPU and ordinary RAM. It is slower, but you buy nothing extra: a good fit where the answer is not needed instantly and volumes are modest — overnight document processing, transcription, knowledge-base search.',
    examples_en: [
      ['Office laptop', '16 GB of RAM, a regular CPU. Handles small language models in compressed form, speech recognition, speech synthesis and search embeddings.'],
      ['Workstation or mini PC', '32-64 GB of RAM. The same, but a larger model and several tasks at once.'],
      ['Virtual server without a GPU', 'The cheapest hosting option. Good for background work: process the mailbox overnight, index an archive, transcribe call recordings.'],
    ],
    note_en: 'The bottleneck here is speed. A language model on a CPU answers in seconds rather than instantly, so live customer chat is usually not the place for it. On overnight jobs the difference is invisible. One more point: you need roughly as much RAM as the model file weighs, plus headroom for context.',
  },
  {
    slug: 'odna-videokarta',
    key: 'gpu',
    title: 'Какие ИИ-модели влезают в одну видеокарту',
    h1: 'Что запустить на одной видеокарте',
    description: 'Открытые ИИ-модели для сервера с одной видеокартой: языковые модели, генерация картинок и видео, распознавание документов. Что влезает в 16, 24 и 80 ГБ.',
    intro: 'Одна видеокарта — самый частый вариант для бизнеса: сервер с картой на 16, 24, 48 или 80 ГБ видеопамяти закрывает почти всё, кроме самых больших моделей. Здесь уже работает живой чат, генерация картинок и разбор документов в реальном времени.',
    examples: [
      ['Карта на 16 ГБ', 'Языковые модели среднего размера в сжатом виде, распознавание документов, генерация картинок. Самый доступный порог входа.'],
      ['Карта на 24 ГБ', 'Рабочая лошадка: модель побольше или несколько задач на одной карте. Хватает и на чат-бота, и на фоновую обработку.'],
      ['Карта на 48–80 ГБ', 'Модели в несжатом виде, длинный контекст, генерация видео. Дороже, но одна такая карта заменяет связку из нескольких.'],
    ],
    note: 'Считать нужно не по числу параметров, а по видеопамяти: её съедают и сами веса, и контекст, и очередь запросов. Модель, которая «влезает» по весам ровно впритык, на длинном документе упадёт. Закладывайте запас и проверяйте на своём сценарии, а не на демонстрационном примере.',
    title_en: 'Which AI models fit on a single GPU',
    h1_en: 'What runs on a single GPU',
    description_en: 'Open AI models for a server with one GPU: language models, image and video generation, document understanding. What fits into 16, 24 and 80 GB.',
    intro_en: 'A single GPU is the most common business setup: a server with a 16, 24, 48 or 80 GB card covers almost everything except the largest models. This is where live chat, image generation and real-time document processing become practical.',
    examples_en: [
      ['16 GB card', 'Mid-sized language models in compressed form, document understanding, image generation. The cheapest way in.'],
      ['24 GB card', 'The workhorse: a bigger model, or several tasks on one card. Enough for a chatbot and background processing together.'],
      ['48-80 GB card', 'Models at full precision, long context, video generation. More expensive, but one card replaces a small cluster.'],
    ],
    note_en: 'Plan by video memory, not by parameter count: the weights, the context and the request queue all consume it. A model that fits the weights exactly will fail on a long document. Leave headroom and test on your own scenario rather than a demo prompt.',
  },
  {
    slug: 'klaster',
    key: 'multi',
    title: 'Какие ИИ-модели требуют нескольких видеокарт',
    h1: 'Что требует нескольких видеокарт',
    description: 'Открытые ИИ-модели, которым нужен кластер: флагманские языковые модели, большие MoE, генерация длинного видео. Когда это оправдано, а когда нет.',
    intro: 'Несколько видеокарт нужны флагманским моделям: тем, что сравнимы по возможностям с лучшими облачными сервисами. Это дорогая конфигурация, и заходить в неё стоит, когда меньшая модель на ваших задачах уже проверена и её не хватило.',
    examples: [
      ['Сервер на 2–4 карты', 'Большие языковые модели и модели с разреженной архитектурой. Обычно арендуется, а не покупается.'],
      ['Сервер на 8 карт', 'Самые крупные открытые модели и генерация длинного видео. Уже уровень дата-центра.'],
      ['Аренда по часам', 'Разумный первый шаг: снять кластер на время проверки гипотезы, а не покупать железо под неподтверждённую задачу.'],
    ],
    note: 'Главная ошибка здесь — начинать с флагмана. Практика обычно обратная: сначала маленькая модель на одной карте, замер качества на своих примерах, и только если не хватает — переход на старшую. Кластер добавляет не только стоимость железа, но и сопровождение: сеть, охлаждение, обновления, дежурство.',
    title_en: 'Which AI models need several GPUs',
    h1_en: 'What needs several GPUs',
    description_en: 'Open AI models that require a cluster: flagship language models, large MoE models, long video generation. When it is worth it and when it is not.',
    intro_en: 'Several GPUs are needed by flagship models, the ones comparable to the best cloud services. It is an expensive setup, and it makes sense only after a smaller model has been tested on your tasks and fell short.',
    examples_en: [
      ['A 2-4 GPU server', 'Large language models and sparse architectures. Usually rented rather than bought.'],
      ['An 8 GPU server', 'The largest open models and long video generation. Data-centre territory.'],
      ['Hourly rental', 'The sensible first step: rent a cluster while you test the idea instead of buying hardware for an unproven task.'],
    ],
    note_en: 'The usual mistake is to start with the flagship. In practice it goes the other way: a small model on one GPU, quality measured on your own examples, and only then a move up. A cluster adds more than hardware cost: networking, cooling, updates and someone on call.',
  },
];
