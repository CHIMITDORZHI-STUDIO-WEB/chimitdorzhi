// Словарь терминов каталога открытых моделей.
// Определения для владельцев бизнеса: простыми словами, с примером из практики.

module.exports = [
  {
    term: 'Открытые веса',
    slug: 'otkrytye-vesa',
    def: 'Файлы готовой модели, которые разработчик выложил в свободный доступ, и их можно скачать и запустить у себя. Это не то же самое, что открытый исходный код всего проекта: данные, на которых модель учили, обычно не публикуют. Для бизнеса открытые веса означают, что данные не уходят в чужое облако и работа не остановится, если поставщик поднимет цены или закроет доступ.',
    _en: {
      term: 'Open weights',
      def: 'The files of a finished model that the developer published for anyone to download and run on their own hardware. This is not the same as fully open source: the training data is usually not released. For a business, open weights mean your data stays on your side and the service does not stop if a vendor raises prices or closes access.',
    },
  },
  {
    term: 'Веса',
    slug: 'vesa',
    def: 'Числа внутри модели, которые и есть всё, чему она научилась. Модель без весов это пустая коробка: архитектура известна, но отвечать ей нечем. Веса занимают от сотен мегабайт до сотен гигабайт, и именно их скачивают, хранят и обновляют, когда говорят, что модель поставили на свой сервер.',
    _en: {
      term: 'Weights',
      def: 'The numbers inside a model that hold everything it learned. Without weights a model is an empty shell: the architecture is known but there is nothing to answer with. Weights range from hundreds of megabytes to hundreds of gigabytes, and they are what you download, store and update when you say a model has been installed on your server.',
    },
  },
  {
    term: 'Инференс',
    slug: 'inferens',
    def: 'Работа готовой модели на обычных запросах: вы дали вопрос или картинку, получили ответ. Обучение делают один раз и дорого, а инференс происходит каждый день и составляет почти всю стоимость эксплуатации. Когда подрядчик говорит про стоимость инференса, речь о том, сколько стоит обслужить поток обращений клиентов, а не о разовой разработке.',
    _en: {
      term: 'Inference',
      def: 'A finished model doing its everyday job: you send a question or an image and get an answer back. Training happens once and is expensive, while inference happens all day and makes up nearly all of the running cost. When a contractor talks about inference cost, they mean serving your daily flow of requests, not the one-off build.',
    },
  },
  {
    term: 'Квантование',
    slug: 'kvantovanie',
    def: 'Сжатие модели: числа внутри неё огрубляют, чтобы она занимала меньше памяти и работала быстрее. Качество при этом немного падает, обычно незаметно в переписке и заметнее в точных расчётах. На практике это разница между моделью, которой нужна серверная видеокарта за большие деньги, и той же моделью на обычном игровом компьютере в офисе.',
    _en: {
      term: 'Quantization',
      def: 'Compressing a model by storing its internal numbers more coarsely so it needs less memory and runs faster. Quality drops a little, usually unnoticeably in chat and more visibly in precise calculations. In practice this is the difference between needing an expensive server card and running the same model on an ordinary desktop machine in the office.',
    },
  },
  {
    term: 'GGUF',
    slug: 'gguf',
    def: 'Популярный формат файла, в котором распространяют сжатые модели для запуска на обычном железе. Один файл содержит и саму модель, и служебные сведения о ней, поэтому его удобно скачать и сразу запустить. Если подрядчик говорит, что возьмёт модель в GGUF, обычно это значит запуск на вашем компьютере или недорогом сервере, без аренды дорогой видеокарты.',
    _en: {
      term: 'GGUF',
      def: 'A popular file format for distributing compressed models that run on ordinary hardware. A single file holds the model and its metadata, so it can be downloaded and started straight away. If a contractor says they will use a GGUF build, that usually means running it on your own machine or a modest server instead of renting an expensive graphics card.',
    },
  },
  {
    term: 'Видеопамять',
    slug: 'videopamyat',
    def: 'Память на видеокарте, в которую модель должна поместиться целиком, чтобы работать быстро. Это главный ограничитель при выборе: не скорость процессора и не объём диска, а сколько гигабайт на карте. Если модель не влезает, она либо не запустится, либо будет отвечать в разы медленнее, что убивает сценарии с живым разговором и поддержкой.',
    _en: {
      term: 'Video memory (VRAM)',
      def: 'Memory on the graphics card, where a model must fit entirely to run fast. This is the main constraint when choosing: not processor speed or disk size, but how many gigabytes the card has. If a model does not fit, it either will not start or answers many times slower, which kills live conversation and support scenarios.',
    },
  },
  {
    term: 'Параметры (B)',
    slug: 'parametry-b',
    def: 'Размер модели, измеренный в миллиардах внутренних чисел: 7B это семь миллиардов, 70B это семьдесят. Чем больше, тем обычно умнее ответы и тем дороже железо и медленнее работа. Для узкой задачи вроде сортировки обращений маленькая модель часто справляется не хуже большой, а стоит в разы дешевле в эксплуатации.',
    _en: {
      term: 'Parameters (B)',
      def: 'Model size measured in billions of internal numbers: 7B means seven billion, 70B means seventy. Bigger usually means better answers, but also costlier hardware and slower responses. For a narrow job such as sorting incoming tickets, a small model often does just as well and costs far less to run.',
    },
  },
  {
    term: 'MoE',
    slug: 'moe',
    def: 'Устройство модели, при котором она состоит из множества частей, а на каждый запрос включается лишь небольшая их доля. Получается большая по знаниям модель, которая считает почти как маленькая. Минус в том, что в памяти всё равно нужно держать целиком, поэтому экономия получается на скорости ответа, а не на требованиях к видеокарте.',
    _en: {
      term: 'Mixture of experts (MoE)',
      def: 'A model built from many parts where only a small share of them switches on for each request. The result is a model with broad knowledge that computes almost as fast as a small one. The catch is that the whole thing still has to sit in memory, so you save on response speed rather than on graphics card requirements.',
    },
  },
  {
    term: 'Токен',
    slug: 'token',
    def: 'Кусочек текста, которым модель считает: примерно слово или часть слова. В токенах меряют и объём запроса, и объём ответа, и по ним же считают стоимость в облачных сервисах. Практический смысл простой: длинная инструкция, которую вы приклеиваете к каждому обращению, оплачивается каждый раз заново и замедляет ответ.',
    _en: {
      term: 'Token',
      def: 'The chunk of text a model counts in: roughly a word or part of a word. Tokens measure the size of your request and of the answer, and cloud services bill by them. The practical meaning is simple: a long instruction attached to every request is paid for again each time and slows the answer down.',
    },
  },
  {
    term: 'Контекст',
    slug: 'kontekst',
    def: 'Сколько текста модель удерживает перед глазами за один раз: ваш вопрос, приложенные документы и предыдущие реплики. Всё, что вышло за пределы контекста, модель просто не видит, как будто этого не было. Поэтому договор на триста страниц не отдают целиком, а сначала находят нужные пункты и передают только их.',
    _en: {
      term: 'Context',
      def: 'How much text a model holds in view at once: your question, attached documents and earlier messages. Anything outside the context window simply does not exist for the model. That is why a three-hundred-page contract is not handed over whole; the relevant clauses are found first and only those are passed in.',
    },
  },
  {
    term: 'Промпт',
    slug: 'prompt',
    def: 'Текст, который вы даёте модели: вопрос, задание, приложенные данные и пример нужного ответа. Качество промпта влияет на результат сильнее, чем выбор между двумя близкими моделями. На практике половина неудачных внедрений лечится не заменой модели, а внятно написанным заданием с примерами того, как должен выглядеть правильный ответ.',
    _en: {
      term: 'Prompt',
      def: 'The text you give a model: the question, the task, any attached data and an example of the answer you want. Prompt quality affects the result more than choosing between two comparable models. In practice, half of failed rollouts are fixed not by swapping the model but by writing a clear task with examples of a correct answer.',
    },
  },
  {
    term: 'Системный промпт',
    slug: 'sistemnyy-prompt',
    def: 'Постоянная инструкция, которая подставляется к каждому обращению и задаёт рамки: кто вы, как отвечать, чего не делать, когда передавать диалог человеку. Клиент её не видит, но именно она определяет тон и границы. Изменение одной строки в ней меняет поведение всего бота, поэтому её версии стоит хранить так же, как код.',
    _en: {
      term: 'System prompt',
      def: 'A standing instruction attached to every request that sets the frame: who the assistant is, how to answer, what not to do, when to hand over to a human. Customers never see it, but it defines tone and boundaries. Changing one line in it changes the behaviour of the whole bot, so its versions deserve the same care as code.',
    },
  },
  {
    term: 'Температура',
    slug: 'temperatura',
    def: 'Настройка разнообразия ответов. Низкая температура даёт предсказуемый и сухой текст, высокая делает его живее, но повышает риск выдумок. Для извлечения данных из счетов её ставят почти в ноль, для черновиков рекламных текстов поднимают. Это самая дешёвая ручка, которой можно подкрутить поведение без смены модели.',
    _en: {
      term: 'Temperature',
      def: 'A setting that controls how varied the answers are. Low temperature gives predictable, dry text; high temperature makes it livelier but raises the risk of invention. For pulling fields out of invoices it is set near zero; for advertising drafts it is raised. It is the cheapest knob for adjusting behaviour without changing the model.',
    },
  },
  {
    term: 'Галлюцинация',
    slug: 'gallyutsinatsiya',
    def: 'Уверенно сказанная неправда: модель придумывает пункт договора, ссылку или цифру, которых не было. Это не поломка, а свойство: модель подбирает правдоподобное продолжение текста, а не проверяет факты. Лечится не уговорами в инструкции, а тем, что ответ строится на найденных документах и проверяется отдельным звеном до показа человеку.',
    _en: {
      term: 'Hallucination',
      def: 'A confident falsehood: the model invents a clause, a link or a number that never existed. This is not a fault but a property: the model picks a plausible continuation of text rather than checking facts. It is not fixed by pleading in the instructions, but by grounding answers in retrieved documents and checking them before a human sees them.',
    },
  },
  {
    term: 'RAG',
    slug: 'rag',
    def: 'Подход, при котором модель сначала ищет нужные куски в ваших документах, а потом отвечает, опираясь на них. Так ответы держатся ваших регламентов, цен и сроков, а не общих знаний из интернета. Это основной способ сделать корпоративного помощника, не переучивая модель, и обновляется он просто заменой документа в базе.',
    _en: {
      term: 'RAG (retrieval-augmented generation)',
      def: 'An approach where the model first searches your documents for relevant pieces and then answers based on them. That keeps answers tied to your policies, prices and deadlines rather than general knowledge from the internet. It is the main way to build a company assistant without retraining anything, and updating it is just replacing a document.',
    },
  },
  {
    term: 'Эмбеддинг',
    slug: 'embedding',
    def: 'Числовой отпечаток смысла текста или картинки. Тексты с близким смыслом получают близкие отпечатки, поэтому поиск начинает находить по сути, а не по совпадению слов. Клиент пишет про сломанный замок, находится инструкция про ремонт фурнитуры, хотя общих слов в них почти нет.',
    _en: {
      term: 'Embedding',
      def: 'A numeric fingerprint of the meaning of a text or an image. Texts with similar meaning get similar fingerprints, so search starts matching substance rather than exact words. A customer writes about a broken lock and the guide on repairing fittings comes up, even though the two share almost no wording.',
    },
  },
  {
    term: 'Векторная база',
    slug: 'vektornaya-baza',
    def: 'Хранилище тех самых числовых отпечатков вместе со ссылками на исходные документы. Обычная база ищет по точному совпадению, а эта по близости смысла. Для бизнеса это техническая деталь с одним практическим следствием: при изменении регламента нужно не только заменить файл, но и пересчитать его отпечатки, иначе поиск будет выдавать старую редакцию.',
    _en: {
      term: 'Vector database',
      def: 'Storage for those numeric fingerprints along with links to the source documents. A regular database matches exact values, this one matches closeness of meaning. For a business it is a technical detail with one practical consequence: when a policy changes you must also recompute its fingerprints, or search keeps returning the old version.',
    },
  },
  {
    term: 'ANN-поиск',
    slug: 'ann-poisk',
    def: 'Быстрый приблизительный поиск среди миллионов числовых отпечатков. Точный перебор был бы слишком медленным, поэтому система сознательно жертвует долей точности ради скорости ответа. На практике это значит, что изредка нужный документ может не попасть в выдачу, и качество поиска настраивают, а не считают заданным раз и навсегда.',
    _en: {
      term: 'Approximate nearest neighbour search',
      def: 'Fast approximate search across millions of numeric fingerprints. Checking every item exactly would be far too slow, so the system deliberately trades a little accuracy for speed. In practice this means the right document occasionally misses the results, so search quality is something you tune rather than assume.',
    },
  },
  {
    term: 'Реранкер',
    slug: 'reranker',
    def: 'Модель, которая пересортировывает найденные фрагменты, вчитываясь в вопрос целиком. Быстрый поиск даёт десяток похожих кусков, но нужный часто оказывается не первым. Реранкер стоит копейки по сравнению с большой моделью и заметно поднимает качество ответов поддержки, потому что модель получает правильный абзац, а не соседний.',
    _en: {
      term: 'Reranker',
      def: 'A model that reorders retrieved fragments while reading the full question properly. Fast search returns a dozen similar pieces, but the right one is often not first. A reranker costs very little compared with a large model and noticeably improves support answers, because the model receives the correct paragraph rather than the one next to it.',
    },
  },
  {
    term: 'Дообучение',
    slug: 'doobuchenie',
    def: 'Доучивание готовой модели на ваших примерах, чтобы она усвоила формат ответов, терминологию или стиль. Требует собранного набора примеров и повторяется при каждом существенном изменении. Знания о ценах и сроках так не вкладывают: их держат в документах и подтягивают поиском, иначе любое изменение прайса означает новое обучение.',
    _en: {
      term: 'Fine-tuning',
      def: 'Further training of a ready model on your own examples so that it picks up your answer format, terminology or style. It needs a collected set of examples and has to be repeated after any significant change. Facts like prices and deadlines are not taught this way: they live in documents and are retrieved, otherwise every price change means retraining.',
    },
  },
  {
    term: 'LoRA',
    slug: 'lora',
    def: 'Дешёвый способ дообучения: вместо переделки всей модели поверх неё обучают небольшую надстройку. Файл получается маленьким, обучение быстрым, а надстройку можно включать и выключать. Так удобно делать несколько вариантов поведения на одной базовой модели, например отдельный стиль ответов для разных брендов внутри одной компании.',
    _en: {
      term: 'LoRA',
      def: 'A cheap way of fine-tuning: instead of reworking the whole model you train a small add-on layer on top of it. The file is small, training is fast, and the add-on can be switched on and off. It is a convenient way to keep several behaviours on one base model, for example a separate answer style for each brand inside a company.',
    },
  },
  {
    term: 'Файн-тюн против промпта',
    slug: 'fayn-tyun-protiv-prompta',
    def: 'Развилка, которая встаёт почти в каждом проекте: доучить модель на своих примерах или просто хорошо написать задание и подложить документы. Начинать почти всегда стоит со второго: это дешевле, быстрее и правится за минуты. Дообучение оправдано, когда нужен устойчивый формат и стиль, а не когда не хватает фактов.',
    _en: {
      term: 'Fine-tuning versus prompting',
      def: 'A fork that appears in almost every project: train the model on your examples, or simply write a good instruction and supply the documents. Start with the second almost every time: it is cheaper, faster and fixable in minutes. Fine-tuning earns its place when you need a stable format and voice, not when facts are missing.',
    },
  },
  {
    term: 'Дистилляция',
    slug: 'distillyatsiya',
    def: 'Обучение маленькой модели на ответах большой, чтобы получить почти то же качество дешевле. Маленькая перенимает поведение старшей на конкретном круге задач, но не её широту. Для бизнеса это способ снять нагрузку с дорогого железа: массовый поток обрабатывает младшая модель, а сложные случаи уходят старшей.',
    _en: {
      term: 'Distillation',
      def: 'Training a small model on the answers of a large one to get nearly the same quality for less money. The small model inherits behaviour on a specific range of tasks, not the breadth of the original. For a business it is a way to relieve expensive hardware: the small model handles the bulk flow and hard cases go to the big one.',
    },
  },
  {
    term: 'Чекпойнт',
    slug: 'chekpoynt',
    def: 'Сохранённое состояние модели на определённый момент: конкретная версия файлов, которую можно запустить. Разные чекпойнты одной модели ведут себя по-разному, поэтому в договоре фиксируют не название семейства, а конкретную версию. Иначе через полгода обновление на первый взгляд той же модели тихо поменяет поведение работающего сервиса.',
    _en: {
      term: 'Checkpoint',
      def: 'A saved state of a model at a point in time: a specific version of the files you can run. Different checkpoints of the same model behave differently, so a contract should name the exact version rather than the family. Otherwise an update to what looks like the same model quietly changes the behaviour of a live service.',
    },
  },
  {
    term: 'Бенчмарк',
    slug: 'benchmark',
    def: 'Стандартный набор заданий, на котором сравнивают модели между собой. Полезен для отсева заведомо слабых вариантов и бесполезен как обещание результата у вас: ваши документы, язык и задачи в него не входили. Решение принимают по своему замеру на своих примерах, а таблицы из интернета используют только для первичного отбора.',
    _en: {
      term: 'Benchmark',
      def: 'A standard set of tasks used to compare models with each other. It is useful for filtering out clearly weak options and useless as a promise of results for you: your documents, language and tasks were not in it. Decisions are made on your own measurements with your own examples, with public tables used only for a first shortlist.',
    },
  },
  {
    term: 'Датасет',
    slug: 'datasets',
    def: 'Набор данных, на котором модель учили или на котором вы её проверяете. У вас это обычно выгрузка переписки, архив документов или папка снимков с камеры. Собрать честный проверочный набор из реальных, в том числе неудобных случаев, обычно дольше, чем настроить саму модель, но именно он определяет, можно ли верить результату.',
    _en: {
      term: 'Dataset',
      def: 'The collection of data a model was trained on, or the set you use to test it. On your side that is usually an export of chat history, a document archive or a folder of camera frames. Assembling an honest test set from real, including awkward, cases usually takes longer than setting up the model, and it decides whether you can trust the result.',
    },
  },
  {
    term: 'Разметка',
    slug: 'razmetka',
    def: 'Ручная работа, при которой люди отмечают в данных правильные ответы: где на снимке дефект, к какой теме относится обращение, какая сумма в счёте. Без разметки нечем ни учить узкую модель, ни честно проверить готовую. Это самая недооценённая статья бюджета: она требует времени сотрудников, которые знают предмет.',
    _en: {
      term: 'Labelling',
      def: 'Manual work where people mark the correct answers in the data: where the defect is in a frame, which topic a ticket belongs to, what the invoice total is. Without labels there is nothing to train a narrow model on and no honest way to test a ready one. It is the most underestimated budget line, because it takes time from people who know the subject.',
    },
  },
  {
    term: 'Оверфиттинг',
    slug: 'overfitting',
    def: 'Модель выучила ваши учебные примеры наизусть и отлично работает на них, но теряется на новых случаях. Со стороны это выглядит как блестящая демонстрация и слабый результат в реальной работе. Защита простая: часть примеров откладывают заранее, на обучении их не показывают и проверяют результат только на них.',
    _en: {
      term: 'Overfitting',
      def: 'The model has memorised your training examples and performs beautifully on them while getting lost on new cases. From the outside this looks like a brilliant demo and weak results in real work. The defence is simple: set part of the examples aside in advance, never show them during training, and measure only on those.',
    },
  },
  {
    term: 'Guard-модель',
    slug: 'guard-model',
    def: 'Маленькая быстрая модель, которая ничего не пишет, а только проверяет: входящее сообщение на попытку выманить лишнее и готовый ответ на недопустимое содержание. Ставится рядом с основной моделью как фильтр на входе и выходе. Для публичных каналов это обязательное звено, потому что один неудачный ответ обходится дороже всей экономии.',
    _en: {
      term: 'Guard model',
      def: 'A small fast model that writes nothing and only checks: the incoming message for attempts to extract what it should not, and the outgoing answer for unacceptable content. It sits beside the main model as a filter on the way in and out. For public channels it is mandatory, because one bad answer costs more than the whole saving.',
    },
  },
  {
    term: 'Судья (LLM-as-judge)',
    slug: 'llm-as-judge',
    def: 'Модель, которую ставят оценивать ответы другой модели по вашим критериям: точно, вежливо, не выдумано. Так можно проверять тысячи ответов вместо выборочного чтения руками. Судью обязательно сверяют с оценками людей на небольшой выборке, иначе вы получаете автоматический контроль качества, который сам ошибается незаметно для вас.',
    _en: {
      term: 'LLM as judge',
      def: 'A model set to grade another model answers against your criteria: accurate, polite, not invented. It lets you check thousands of answers instead of reading a sample by hand. The judge must be calibrated against human grades on a small sample, otherwise you get automated quality control that is quietly wrong on its own.',
    },
  },
  {
    term: 'Промпт-инъекция',
    slug: 'prompt-inektsiya',
    def: 'Приём, когда во входящем письме, документе или на странице сайта спрятана инструкция для модели, и она выполняет её вместо вашей. Опасность появляется там, где помощник читает чужие тексты и имеет доступ к данным или действиям. Защита это фильтр на входе, ограничение прав и правило, что найденный текст считается данными, а не командой.',
    _en: {
      term: 'Prompt injection',
      def: 'A trick where an instruction is hidden inside an incoming email, document or web page, and the model follows it instead of yours. The risk appears wherever an assistant reads outside text and has access to data or actions. The defence is an input filter, restricted permissions, and a rule that retrieved text counts as data rather than a command.',
    },
  },
  {
    term: 'Мультимодальность',
    slug: 'multimodalnost',
    def: 'Способность одной модели работать не только с текстом, но и с картинками, звуком или видео. Это удобно, когда в одном обращении клиент присылает и фото, и подпись к нему. При этом узкая модель под свой тип данных обычно точнее универсальной, поэтому в рабочих контурах их часто ставят рядом, а не выбирают одну.',
    _en: {
      term: 'Multimodality',
      def: 'The ability of one model to handle not only text but also images, audio or video. It helps when a single customer message contains both a photo and a caption. At the same time a narrow model built for one data type is usually more accurate than a general one, so working setups often use both rather than picking one.',
    },
  },
  {
    term: 'VLM',
    slug: 'vlm',
    def: 'Модель, которая одновременно видит картинку и понимает текст: можно показать ей фотографию и задать о ней вопрос. На этом строят описание товара по снимку, разбор чека и объяснение того, что заметила камера. От распознавания текста отличается тем, что понимает содержание сцены, а не только буквы на изображении.',
    _en: {
      term: 'Vision-language model (VLM)',
      def: 'A model that sees an image and understands text at the same time: you can show it a photo and ask a question about it. This is what powers product descriptions from a shot, receipt analysis and explaining what a camera noticed. Unlike text recognition, it understands the content of a scene rather than only the letters in the picture.',
    },
  },
  {
    term: 'OCR',
    slug: 'ocr',
    def: 'Распознавание текста на изображении: скан, фотография документа, кадр с камеры. Современные модели этого класса возвращают не просто буквы, а структуру страницы: таблицы, колонки, сноски. Это первое звено любого документооборота, и его качество задаёт потолок для всего остального: из плохо распознанного счёта верных данных не извлечь.',
    _en: {
      term: 'OCR',
      def: 'Text recognition on an image: a scan, a photo of a document, a camera frame. Modern models of this class return page structure as well as letters: tables, columns, footnotes. It is the first link in any document workflow and its quality caps everything downstream: you cannot extract correct data from a badly recognised invoice.',
    },
  },
  {
    term: 'ASR',
    slug: 'asr',
    def: 'Распознавание речи, то есть перевод звука в текст. С него начинается любая работа со звонками, встречами и голосовыми сообщениями. Смотреть стоит на своё качество связи и свою лексику: студийная запись распознаётся заметно лучше телефонной линии, а названия товаров и фамилии модели путают чаще всего.',
    _en: {
      term: 'ASR (speech recognition)',
      def: 'Turning audio into text. Everything involving calls, meetings and voice messages starts here. Judge it on your own audio quality and vocabulary: a studio recording is recognised far better than a phone line, and product names and surnames are what models get wrong most often.',
    },
  },
  {
    term: 'TTS',
    slug: 'tts',
    def: 'Синтез речи: превращение текста в звучащий голос. Используется в телефонии, озвучке роликов и голосовых уведомлениях. Кроме чистоты голоса важна задержка перед началом речи: в разговоре пауза дольше пары секунд воспринимается как обрыв связи. Клонирование голоса конкретного человека требует его разрешения.',
    _en: {
      term: 'TTS (speech synthesis)',
      def: 'Turning text into a spoken voice. It is used in telephony, video voice-over and audio notifications. Besides how clean the voice sounds, the delay before speech starts matters: in conversation a pause longer than a couple of seconds feels like a dropped call. Cloning a specific person voice requires their permission.',
    },
  },
  {
    term: 'Диаризация',
    slug: 'diarizatsiya',
    def: 'Разделение записи по говорящим: кто из участников произнёс каждую фразу. Без неё расшифровка звонка это сплошной текст, по которому нельзя ни оценить работу оператора, ни проверить, прозвучал ли обязательный скрипт. Для встреч на несколько человек это же звено даёт протокол, в котором видно, кто что предложил.',
    _en: {
      term: 'Diarization',
      def: 'Splitting a recording by speaker: who said each line. Without it a call transcript is one undivided block, and you can neither assess an agent nor check whether a required script was read. For meetings with several people the same step produces minutes that show who proposed what.',
    },
  },
  {
    term: 'Детекция',
    slug: 'detektsiya',
    def: 'Поиск объектов на изображении с указанием, где именно они находятся. На этом держатся счётчики на складе, контроль зон и проверка средств защиты. Работает быстро и прямо на площадке, без отправки видео наружу. Качество решают не столько модели, сколько камеры, свет и чистый объектив.',
    _en: {
      term: 'Detection',
      def: 'Finding objects in an image and marking where exactly they are. Warehouse counters, restricted zone monitoring and safety equipment checks all rest on it. It runs fast and on site, with no video leaving the premises. Quality is decided less by the model than by cameras, lighting and a clean lens.',
    },
  },
  {
    term: 'Сегментация',
    slug: 'segmentatsiya',
    def: 'Выделение объекта по контуру, а не прямоугольной рамкой. Это принципиально там, где нужно померить, а не просто заметить: площадь скола, ширина зазора, форма пятна. В магазинах та же техника убирает фон с фотографии товара, чтобы карточки в каталоге выглядели одинаково аккуратно.',
    _en: {
      term: 'Segmentation',
      def: 'Outlining an object by its contour rather than with a rectangle. That matters wherever you need to measure rather than merely notice: the area of a chip, the width of a gap, the shape of a stain. In retail the same technique removes the background from a product photo so catalogue cards look uniformly tidy.',
    },
  },
  {
    term: 'Апскейл',
    slug: 'apskeyl',
    def: 'Увеличение разрешения картинки или видео с дорисовкой деталей. Помогает вытянуть мелкие фотографии товара до требований площадки или поднять старую съёмку до приличного вида. Важно помнить, что модель дорисовывает правдоподобное, а не восстанавливает утраченное: мелкий текст на этикетке после увеличения может оказаться выдуманным.',
    _en: {
      term: 'Upscaling',
      def: 'Increasing the resolution of an image or video while filling in detail. It helps stretch small product photos up to a marketplace requirement or bring old footage to a decent state. Remember that the model invents something plausible rather than restoring what was lost: small text on a label can come out fabricated after upscaling.',
    },
  },
  {
    term: 'Дипфейк',
    slug: 'dipfeyk',
    def: 'Видео или аудио, где лицо или голос человека подменены синтетическими. В бизнесе встречается с двух сторон: как соблазн сделать ролик с известным лицом и как способ обмана, когда мошенники голосом руководителя просят перевести деньги. Первое недопустимо без разрешения человека, второе требует правила подтверждать платежи вторым каналом.',
    _en: {
      term: 'Deepfake',
      def: 'Video or audio where a person face or voice is replaced with a synthetic one. Businesses meet it from two sides: as a temptation to make a clip with a famous face, and as fraud where scammers use an executive voice to request a transfer. The first is unacceptable without the person permission, the second calls for confirming payments over a second channel.',
    },
  },
  {
    term: 'Водяной знак',
    slug: 'vodyanoy-znak',
    def: 'Скрытая или видимая пометка, по которой можно понять, что материал сгенерирован. Часть моделей ставит её автоматически, часть нет, и снять её нетрудно, поэтому полагаться на неё как на защиту не стоит. Для компании полезнее собственное правило: помечать синтетический контент в своих материалах и хранить исходники.',
    _en: {
      term: 'Watermark',
      def: 'A hidden or visible mark showing that material was generated. Some models add one automatically and some do not, and removing it is not hard, so it is not a defence you can rely on. A company is better served by its own rule: label synthetic content in your materials and keep the originals.',
    },
  },
  {
    term: 'Лицензия на веса',
    slug: 'litsenziya-na-vesa',
    def: 'Документ, который говорит, что вам разрешено делать со скачанной моделью: можно ли использовать её в коммерческом продукте, есть ли ограничения по числу пользователей или отраслям. Условия у разных семейств отличаются сильно, и открытость файлов не равна разрешению на любое применение. Это в общих чертах, конкретный случай смотрит юрист.',
    _en: {
      term: 'Weights licence',
      def: 'The document stating what you may do with a downloaded model: whether it can go into a commercial product, whether there are limits by number of users or by industry. Terms vary a lot between families, and freely downloadable files do not equal permission for any use. This is a general description; a lawyer should review your case.',
    },
  },
  {
    term: 'Лицензия на данные',
    slug: 'litsenziya-na-dannye',
    def: 'Отдельный от весов вопрос: на чём модель училась и какие права это накладывает на то, что она производит. Состав обучающих данных часто не раскрывают, а споры вокруг них продолжаются. Для бизнеса практический вывод один: чем заметнее и публичнее материал, тем внимательнее стоит отнестись к происхождению, и это в общих чертах, конкретный случай смотрит юрист.',
    _en: {
      term: 'Data licence',
      def: 'A separate question from the weights: what the model was trained on and what rights that implies for what it produces. Training data composition is often undisclosed and disputes about it continue. The practical takeaway is one: the more public and visible the material, the more attention its provenance deserves. This is general; a lawyer should review your case.',
    },
  },
  {
    term: 'Ollama',
    slug: 'ollama',
    def: 'Простая программа, которая ставит и запускает модели на обычном компьютере: скачала файл, подняла локальный сервис, дальше с ним общаются приложения. Подходит для проб, демонстраций и работы небольшой команды. Для потока обращений от клиентов её обычно меняют на промышленный вариант запуска, рассчитанный на многих пользователей сразу.',
    _en: {
      term: 'Ollama',
      def: 'A simple program that installs and runs models on an ordinary computer: it downloads the file, starts a local service, and applications talk to it. It suits trials, demos and a small team. For a real flow of customer requests it is usually replaced with an industrial serving setup built for many users at once.',
    },
  },
  {
    term: 'vLLM',
    slug: 'vllm',
    def: 'Промышленный способ запуска моделей на сервере: держит много одновременных запросов, экономно расходует память видеокарты и отдаёт ответы потоком. Если планируется поток обращений, а не эксперимент одного сотрудника, подрядчик обычно предложит именно такой вариант. Разница с настольной программой видна не в качестве ответов, а в том, сколько людей обслуживается на одном железе.',
    _en: {
      term: 'vLLM',
      def: 'An industrial way to serve models on a server: it handles many simultaneous requests, uses graphics card memory efficiently and streams answers back. If you expect a flow of requests rather than one employee experimenting, this is what a contractor will propose. The difference from a desktop app shows not in answer quality but in how many people one machine serves.',
    },
  },
  {
    term: 'Батч',
    slug: 'batch',
    def: 'Пачка запросов, которые обрабатываются вместе, а не по одному. Так железо используется намного эффективнее, и обработка тысячи документов за ночь обходится дешевле, чем та же тысяча по одному в течение дня. Обратная сторона в том, что отдельный ответ ждёт своей пачки, поэтому для живого разговора батчи держат маленькими.',
    _en: {
      term: 'Batch',
      def: 'A group of requests processed together rather than one at a time. Hardware is used far more efficiently that way, so running a thousand documents overnight costs less than the same thousand one by one during the day. The trade-off is that an individual answer waits for its group, so live conversation uses small batches.',
    },
  },
  {
    term: 'Latency',
    slug: 'latency',
    def: 'Задержка: сколько проходит от запроса до ответа, особенно до первых слов. Это то, что чувствует человек. В переписке терпимы секунды, в телефонном разговоре пауза в пару секунд уже читается как обрыв. Часто именно задержка, а не качество текста, решает, будет ли сервис вообще пригоден в вашем канале.',
    _en: {
      term: 'Latency',
      def: 'The delay between a request and an answer, especially before the first words appear. This is what a person feels. In chat a few seconds are tolerable; on a phone call a two-second pause already reads as a dropped line. Latency rather than text quality often decides whether a service is usable in your channel at all.',
    },
  },
  {
    term: 'Throughput',
    slug: 'throughput',
    def: 'Пропускная способность: сколько запросов система переваривает в единицу времени. Это то, что чувствует бюджет. Задержка и пропускная способность тянут в разные стороны: настройки, ускоряющие отдельный ответ, обычно снижают общее число обслуженных обращений, и выбор делается под конкретный сценарий, а не вообще.',
    _en: {
      term: 'Throughput',
      def: 'How many requests the system digests per unit of time. This is what the budget feels. Latency and throughput pull against each other: settings that speed up an individual answer usually reduce the total number of requests served, so the choice is made per scenario rather than in general.',
    },
  },
  {
    term: 'Пайплайн',
    slug: 'payplayn',
    def: 'Цепочка шагов, через которую проходит запрос: распознали, нашли, ответили, проверили. Почти все рабочие внедрения устроены именно так, а не одной моделью на всё. Практический смысл в том, что каждое звено можно измерить и заменить отдельно, а когда качество падает, видно, какой именно шаг сломался.',
    _en: {
      term: 'Pipeline',
      def: 'The chain of steps a request passes through: recognise, retrieve, answer, verify. Almost every working deployment is built this way rather than as one model doing everything. The practical value is that each link can be measured and replaced on its own, and when quality drops you can see which step broke.',
    },
  },
];
