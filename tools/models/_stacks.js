// Готовые стеки моделей под конкретную рабочую задачу.
// Каждый стек: 3-4 звена, в каждом звене 2-3 id из tools/models-data.js.

module.exports = [
  {
    slug: 'dokumentooborot',
    title: 'Разбор документов: какие открытые модели нужны',
    description: 'Связка моделей, которая превращает скан или фотографию счёта в готовые поля учётной системы и делает архив документов ищущимся по смыслу.',
    h1: 'Стек под документооборот: от скана до строки в базе',
    intro: 'Счета, накладные, акты и договоры приходят в компанию пачками: часть в PDF, часть фотографией с телефона, часть сканом с перекосом. Одна модель тут не справляется, потому что задач на самом деле три: увидеть текст на картинке, понять смысл написанного и потом быстро найти нужный документ среди тысяч. Каждую из них лучше решает свой тип модели, поэтому связка из нескольких звеньев обходится дешевле и ошибается реже, чем попытка повесить всё на одну большую модель.',
    steps: [
      {
        h3: 'Шаг 1. Превратить картинку в текст',
        text: 'Скан или фотография для компьютера это просто набор точек. Модель распознавания документов переводит их в текст и, что важнее, сохраняет структуру: где шапка, где таблица, где подпись. Если выкинуть это звено, следующей модели придётся угадывать по обрывкам, и суммы из таблицы разъедутся по строкам. На бледных печатях и мятых листах именно качество распознавания определяет качество всего остального.',
        picks: ['docling', 'dots-ocr', 'paddleocr-vl'],
      },
      {
        h3: 'Шаг 2. Вытащить нужные поля',
        text: 'Текст сам по себе ещё не данные. На этом шаге языковая модель читает распознанный документ и раскладывает его по полям: контрагент, номер, дата, сумма, ставка налога, позиции. Она же понимает, что перед ней накладная, по смыслу документа, а не по слову в заголовке. Без этого звена сотрудник продолжает вбивать реквизиты руками, и весь выигрыш от распознавания теряется на перепечатке.',
        picks: ['qwen', 'mistral', 'gemma'],
      },
      {
        h3: 'Шаг 3. Собрать таблицы и проверить схему',
        text: 'Отдельная модель под таблицы и извлечение полей страхует предыдущий шаг: она собирает многострочные таблицы обратно в строки и достаёт значения по заданному списку полей. Это дешёвый способ поймать расхождение до того, как документ уйдёт в учётную систему. Если звена нет, ошибка всплывает позже, на сверке, когда исправлять её дороже и уже с участием бухгалтера.',
        picks: ['table-transformer', 'nuextract'],
      },
      {
        h3: 'Шаг 4. Сделать архив ищущимся',
        text: 'Модель эмбеддингов превращает каждый документ в числовой отпечаток смысла, и поиск начинает находить по сути запроса, а не по точному совпадению слов. Сотрудник спрашивает про поставку щебня за прошлую весну и получает нужные акты, даже если внутри они названы иначе. Без этого шага архив остаётся папкой, в которой ищут глазами и по названию файла.',
        picks: ['bge-m3', 'e5', 'jina-embeddings'],
      },
    ],
    note: 'Чаще всего ломаются не модели, а вход: фото под углом, копия с копии, печать поверх цифр. До внедрения соберите сотню реальных документов худшего качества и прогоните связку на них, а не на образцовых PDF. Отдельно продумайте спорные случаи: нужен режим, в котором документ уходит человеку, а не молча записывается в базу. Персональные данные в документах, сроки хранения и допустимость обработки описаны здесь в общих чертах, конкретный случай смотрит юрист.',
    _en: {
      title: 'Incoming document processing',
      description: 'A stack that turns a scanned invoice or a phone photo into structured fields for your accounting system, and makes the whole archive searchable by meaning.',
      h1: 'Document processing stack: from scan to database row',
      intro: 'Invoices, delivery notes and contracts arrive in batches: some as PDFs, some as phone photos, some as crooked scans. A single model cannot cover this well, because there are really three jobs: read the text off an image, understand what the document says, and later find the right document among thousands. A different class of model is best at each job, so a chain of parts costs less and makes fewer mistakes than one large model doing everything.',
      steps: [
        {
          h3: 'Step 1. Turn the image into text',
          text: 'To a computer a scan is just a grid of dots. A document recognition model turns it into text and, more importantly, keeps the layout: what is a header, what is a table, what is a signature. Drop this part and the next model has to guess from fragments, so numbers drift between table rows. On faded stamps and creased paper, recognition quality sets the ceiling for everything downstream.',
          picks: ['docling', 'dots-ocr', 'paddleocr-vl'],
        },
        {
          h3: 'Step 2. Pull out the fields you need',
          text: 'Text on its own is still not data. Here a language model reads the recognised document and sorts it into fields: counterparty, number, date, total, tax rate, line items. It also recognises the type of document from its content rather than from a word in the title. Without this part, staff keep typing details by hand and the gain from recognition is lost on re-keying.',
          picks: ['qwen', 'mistral', 'gemma'],
        },
        {
          h3: 'Step 3. Rebuild tables and check the schema',
          text: 'A dedicated table and field extraction model backs up the previous step: it stitches multi-line tables back together and pulls values against a fixed list of fields. That is a cheap way to catch a mismatch before the document reaches your accounting system. Without it, the error shows up later during reconciliation, when fixing it costs more and takes an accountant.',
          picks: ['table-transformer', 'nuextract'],
        },
        {
          h3: 'Step 4. Make the archive searchable',
          text: 'An embedding model turns every document into a numeric fingerprint of its meaning, so search starts matching the intent of a question instead of exact words. Someone asks about a gravel delivery last spring and gets the right paperwork even if it is worded differently inside. Without this step the archive stays a folder people scroll through by file name.',
          picks: ['bge-m3', 'e5', 'jina-embeddings'],
        },
      ],
      note: 'What usually breaks is the input, not the models: angled photos, copies of copies, stamps over digits. Before rolling out, collect a hundred of your worst real documents and run the chain on those rather than on clean sample PDFs. Plan for disputed cases separately: you need a mode where a document goes to a human instead of quietly landing in the database. Personal data, retention periods and what processing is allowed are described here in general terms only; a lawyer should review your specific case.',
    },
  },

  {
    slug: 'koll-centr',
    title: 'Колл-центр на открытых моделях: что поставить',
    description: 'Связка моделей для звонков: расшифровка разговора, разбор смысла, разделение голосов и синтез ответа голосом на вашей стороне.',
    h1: 'Стек под колл-центр: слышать, понимать, отвечать',
    intro: 'В телефонии всё упирается в то, что звук это не текст. Пока разговор не расшифрован, ни одна языковая модель его не разберёт, а пока в расшифровке не отмечено, кто говорит, невозможно оценить работу оператора. Поэтому рабочий контур собирают из звеньев: распознавание речи, разделение говорящих, смысловой разбор и голосовой ответ. Так каждое звено можно менять и мерить отдельно, а сбой на одном участке не превращает весь контур в чёрный ящик.',
    steps: [
      {
        h3: 'Шаг 1. Расшифровать разговор',
        text: 'Распознавание речи переводит запись или живой поток в текст. От качества этого шага зависит буквально всё дальнейшее: если модель путает названия товаров и имена, разбор будет строиться на выдумке. Отдельно смотрите на телефонное качество звука, фоновый шум и то, как модель держит русский язык вперемешку с названиями на латинице. Без этого звена остаётся только ручное прослушивание выборки звонков.',
        picks: ['whisper', 'gigaam', 'parakeet'],
      },
      {
        h3: 'Шаг 2. Понять, кто говорит и где границы реплик',
        text: 'Диаризация размечает, какая фраза принадлежит оператору, а какая клиенту, и отделяет речь от пауз и шума. Без неё расшифровка превращается в сплошное полотно, по которому нельзя ни посчитать, кто больше говорил, ни проверить, прозвучал ли обязательный скрипт. Для живого разговора это же звено отвечает за момент, когда человек договорил и можно отвечать.',
        picks: ['pyannote', 'nvidia-sortformer', 'silero-vad'],
      },
      {
        h3: 'Шаг 3. Разобрать смысл и подготовить ответ',
        text: 'Языковая модель работает уже с текстом: вытаскивает причину обращения, тему, договорённости и следующий шаг, а в живом сценарии формулирует реплику. Тут же ставится проверка на соблюдение скрипта и пометка тяжёлых звонков для руководителя. Если выкинуть это звено, останутся расшифровки, которые никто не читает, потому что читать сотни страниц в день некому.',
        picks: ['qwen', 'saiga', 'llama'],
      },
      {
        h3: 'Шаг 4. Ответить голосом',
        text: 'Синтез речи озвучивает готовый текст. Здесь важны не только чистота голоса, но и скорость: в телефонном разговоре пауза дольше пары секунд читается как обрыв связи. Отдельно решите вопрос с интонацией и с тем, предупреждаете ли вы собеседника, что говорит робот. Без этого звена сценарий ограничен перепиской и уведомлениями, голосовой канал не закрывается.',
        picks: ['xtts', 'piper', 'silero'],
      },
    ],
    note: 'Главная ловушка это ожидание, что модель будет разбирать звонки так же хорошо, как человек с опытом. Начинайте с разбора уже состоявшихся записей, а не с живого ответа клиенту: ошибка в аналитике стоит дёшево, ошибка в разговоре стоит клиента. Проверьте связку на своей реальной телефонии, а не на студийных записях. Запись разговоров, уведомление собеседника и хранение голоса регулируются, здесь это в общих чертах, конкретный случай смотрит юрист.',
    _en: {
      title: 'Call centre and telephony',
      description: 'A model chain for phone calls: speech recognition, speaker separation, meaning extraction and a synthesised voice reply running on your own side.',
      h1: 'Call centre stack: hear, understand, answer',
      intro: 'In telephony everything hinges on the fact that audio is not text. Until a call is transcribed no language model can work with it, and until the transcript says who is speaking you cannot assess an agent at all. So a working setup is built from parts: speech recognition, speaker separation, meaning extraction and a voice reply. Each part can then be swapped and measured on its own, and a failure in one place does not turn the whole thing into a black box.',
      steps: [
        {
          h3: 'Step 1. Transcribe the call',
          text: 'Speech recognition turns a recording or a live stream into text. Everything downstream depends on this step: if the model garbles product names and surnames, the analysis is built on fiction. Pay attention to phone-grade audio, background noise and how the model handles your language mixed with Latin-script brand names. Without this part you are back to listening to a sample of calls by hand.',
          picks: ['whisper', 'gigaam', 'parakeet'],
        },
        {
          h3: 'Step 2. Work out who is speaking',
          text: 'Speaker separation labels which line belongs to the agent and which to the customer, and tells speech apart from pauses and noise. Without it a transcript is one undivided block: you cannot measure who talked more, or check whether the required script was read out. In a live conversation the same part decides when the person has finished and it is safe to reply.',
          picks: ['pyannote', 'nvidia-sortformer', 'silero-vad'],
        },
        {
          h3: 'Step 3. Extract meaning and draft the answer',
          text: 'The language model works with text by now: it pulls out the reason for the call, the topic, what was agreed and the next step, and in a live scenario writes the reply itself. Script compliance checks and flagging difficult calls for a supervisor also sit here. Drop this part and you are left with transcripts nobody reads, because nobody has time for hundreds of pages a day.',
          picks: ['qwen', 'saiga', 'llama'],
        },
        {
          h3: 'Step 4. Speak the answer',
          text: 'Speech synthesis voices the finished text. What matters here is not only how clean the voice sounds but how fast it starts: on a phone line a pause longer than a couple of seconds reads as a dropped call. Decide separately on intonation and on whether you tell the caller they are talking to a machine. Without this part you are limited to chat and notifications.',
          picks: ['xtts', 'piper', 'silero'],
        },
      ],
      note: 'The main trap is expecting the models to read calls as well as an experienced human does. Start with analysing calls that already happened rather than answering customers live: a mistake in analytics is cheap, a mistake in conversation costs you the customer. Test the chain on your own phone lines, not on studio recordings. Call recording, notifying the other party and storing voice data are regulated; this is a general description only, a lawyer should review your case.',
    },
  },

  {
    slug: 'podderzhka-klientov',
    title: 'Поддержка клиентов: стек из открытых моделей',
    description: 'Поиск по своей базе знаний, уточнение выдачи, ответ языковой модели и фильтр, который не пускает наружу лишнее.',
    h1: 'Стек под поддержку: ответ из вашей базы, а не из головы модели',
    intro: 'Поддержка ломается на одном и том же: языковая модель отвечает уверенно, но не вашими правилами. Она не знает ваших тарифов, сроков и исключений, а придумывать умеет отлично. Лечится это не выбором модели побольше, а связкой, где сначала находят нужный кусок вашей базы знаний, потом отдают его модели как источник, и только потом ответ проходит проверку. Каждое звено закрывает свой риск, и заменить их друг другом нельзя.',
    steps: [
      {
        h3: 'Шаг 1. Найти подходящие куски базы знаний',
        text: 'Модель эмбеддингов переводит вопрос клиента и все ваши инструкции в числовые отпечатки смысла, и система достаёт те фрагменты, которые ближе всего по сути. Клиент пишет своими словами, а в регламенте написано канцелярским, и поиск по ключевым словам тут промахивается. Без этого звена модель отвечает по памяти, то есть по интернету годичной давности, а не по вашему прайсу.',
        picks: ['bge-m3', 'qwen-embedding', 'e5'],
      },
      {
        h3: 'Шаг 2. Отсортировать найденное по пользе',
        text: 'Реранкер берёт десяток найденных фрагментов и пересортировывает их, уже вчитываясь в вопрос целиком. Это дешёвая страховка: поиск по смыслу быстрый, но грубоватый, и нужный абзац часто оказывается не первым. Если звена нет, в ответ уходит первый попавшийся похожий текст, и клиент получает правило из соседнего тарифа, которое к нему не относится.',
        picks: ['bge-reranker', 'jina-reranker'],
      },
      {
        h3: 'Шаг 3. Сформулировать ответ',
        text: 'Языковая модель получает вопрос вместе с найденными фрагментами и пишет ответ человеческим языком, ссылаясь на источник. Ей же поручают распознать, что вопрос выходит за рамки базы, и честно передать диалог оператору. Чем лучше подобраны фрагменты на предыдущих шагах, тем проще модели и тем меньше нужна самая дорогая из доступных. Без этого звена клиент читает выдержку из регламента.',
        picks: ['llama', 'gpt-oss', 'glm'],
      },
      {
        h3: 'Шаг 4. Проверить ответ перед отправкой',
        text: 'Отдельная модель-фильтр смотрит и на входящее сообщение, и на готовый ответ: нет ли попытки вытянуть лишнее, не утекают ли данные другого клиента, не обещает ли бот того, чего компания не делает. Такой фильтр специально маленький и быстрый, он не пишет тексты, а ставит отметку. Без него один неудачный ответ в публичном канале обходится дороже всей экономии на поддержке.',
        picks: ['llama-guard', 'shieldgemma', 'qwen3guard'],
      },
    ],
    note: 'Узкое место почти всегда база знаний, а не модель. Если инструкции противоречат друг другу и последний раз обновлялись давно, связка честно воспроизведёт этот бардак, только быстрее. До запуска соберите полсотни реальных вопросов из переписки, прогоните их и прочитайте ответы глазами. И заранее решите, на каких темах бот обязан молча передавать диалог человеку: деньги, возвраты, претензии, всё, что касается персональных данных, здесь в общих чертах, конкретный случай смотрит юрист.',
    _en: {
      title: 'Customer support in chat',
      description: 'Search across your own knowledge base, reranking of the results, an answer written by a language model and a filter that keeps the wrong things in.',
      h1: 'Support stack: answers from your knowledge base, not from the model',
      intro: 'Support fails the same way every time: the language model answers confidently but not by your rules. It does not know your prices, deadlines or exceptions, and it invents them fluently. The fix is not a bigger model but a chain: first find the right piece of your knowledge base, then hand it to the model as the source, then check the answer before it goes out. Each part covers a different risk and they are not interchangeable.',
      steps: [
        {
          h3: 'Step 1. Find the right pieces of the knowledge base',
          text: 'An embedding model turns the customer question and all of your internal documents into numeric fingerprints of meaning, and the system pulls the fragments that are closest in substance. Customers write in plain words while policies are written in formal ones, which is exactly where keyword search misses. Without this part the model answers from memory, meaning from an old snapshot of the internet rather than from your price list.',
          picks: ['bge-m3', 'qwen-embedding', 'e5'],
        },
        {
          h3: 'Step 2. Reorder the results by usefulness',
          text: 'A reranker takes the dozen fragments that were found and reorders them while reading the full question properly. It is cheap insurance: meaning-based search is fast but coarse, and the paragraph you need is often not the first one. Without it the first vaguely similar text goes into the answer, and the customer gets a rule from a different plan that does not apply to them.',
          picks: ['bge-reranker', 'jina-reranker'],
        },
        {
          h3: 'Step 3. Write the answer',
          text: 'The language model receives the question together with the retrieved fragments and writes a human answer that points at its source. It is also asked to notice when a question falls outside the knowledge base and hand the chat to a person. The better the previous steps pick fragments, the easier this job is and the less you need the most expensive model available. Without this part customers read raw policy extracts.',
          picks: ['llama', 'gpt-oss', 'glm'],
        },
        {
          h3: 'Step 4. Check the answer before sending',
          text: 'A separate filter model looks at both the incoming message and the finished reply: is someone fishing for internal data, is another customer mentioned, is the bot promising something the company does not do. This filter is deliberately small and fast, it writes nothing and only raises a flag. Without it, one bad answer in a public channel costs more than the whole support saving.',
          picks: ['llama-guard', 'shieldgemma', 'qwen3guard'],
        },
      ],
      note: 'The bottleneck is almost always the knowledge base, not the model. If your instructions contradict each other and were last updated long ago, the chain will reproduce that mess faithfully and faster. Before launch, collect fifty real questions from your inbox, run them through and read the answers yourself. Decide in advance which topics the bot must hand to a human without arguing: money, refunds, complaints and anything touching personal data, described here in general terms only, with a lawyer reviewing your case.',
    },
  },

  {
    slug: 'internet-magazin',
    title: 'Карточки товара: открытые модели для магазина',
    description: 'Описание товара по фотографии, чистая предметная съёмка, генерация недостающих картинок и перевод карточек на другие языки.',
    h1: 'Стек под интернет-магазин: карточка из одной фотографии',
    intro: 'Карточка товара это четыре разные работы: посмотреть на вещь и описать её, привести фотографию в товарный вид, дорисовать то, чего не сняли, и перевести всё на языки, на которых вы продаёте. Ни одна модель не делает все четыре хорошо, потому что это разные типы моделей: одна смотрит, вторая чистит, третья рисует, четвёртая переводит. В связке они дают конвейер, который переваривает тысячу позиций без найма отдельной редакции.',
    steps: [
      {
        h3: 'Шаг 1. Описать товар по фотографии',
        text: 'Модель, которая понимает картинки и текст одновременно, смотрит на снимок и выдаёт черновик: тип вещи, материал, цвет, фурнитура, назначение. Это не замена карточке от поставщика, а способ заполнить пустые поля там, где от поставщика пришли только фото и артикул. Без этого звена описания пишут вручную, и на большом каталоге узкое место именно здесь, а не в фотостудии.',
        picks: ['qwen-vl', 'internvl', 'minicpm-v'],
      },
      {
        h3: 'Шаг 2. Привести фотографии в товарный вид',
        text: 'Модели для обработки фото убирают фон, поднимают резкость и вытягивают мелкие снимки до нужного разрешения. Это скучное, но самое заметное покупателю звено: на витрине сначала видят картинку, а потом читают текст. Если его выкинуть, карточки выглядят разнородно, часть фото не проходит требования маркетплейсов, и позиции возвращаются на переделку.',
        picks: ['rmbg', 'birefnet', 'real-esrgan'],
      },
      {
        h3: 'Шаг 3. Дорисовать то, чего нет на съёмке',
        text: 'Генерация изображений закрывает дыры каталога: фон под сезон, вариант цвета, простая сцена для баннера или обложки категории. Работать это должно поверх реальной фотографии товара, а не вместо неё, иначе покупатель получит вещь, не похожую на картинку. Без звена приходится либо снимать заново, либо оставлять пустые места в карточке и терять показы.',
        picks: ['flux', 'qwen-image', 'stable-diffusion'],
      },
      {
        h3: 'Шаг 4. Перевести карточки',
        text: 'Специализированная модель перевода разворачивает каталог на другие языки дешевле и ровнее, чем универсальная языковая модель, и не пересказывает текст по-своему. Важно вести словарь своих терминов и названий, иначе один и тот же материал в разных карточках назовётся по-разному. Без этого шага выход на соседний рынок упирается в ручной перевод тысяч описаний.',
        picks: ['nllb', 'madlad', 'opus-mt'],
      },
    ],
    note: 'Главный риск в том, что модель уверенно допишет характеристики, которых у товара нет: состав, страну, гарантию. Правило простое: всё, за что отвечает продавец перед покупателем, берётся из карточки поставщика, а модель пишет только то, что видно на фотографии. Заложите выборочную проверку человеком и ведите один словарь терминов на весь каталог. Требования маркетплейсов к изображениям и к описаниям меняются, сверяйтесь с их правилами до массовой заливки.',
    _en: {
      title: 'Product cards for online retail',
      description: 'Descriptions written from a photo, clean product imagery, generated shots you never took, and catalogue translation into the languages you sell in.',
      h1: 'E-commerce stack: a product card from a single photo',
      intro: 'A product card is four separate jobs: look at the item and describe it, make the photo presentable, create the shots nobody took, and translate everything into the languages you sell in. No single model does all four well, because these are different kinds of model: one looks, one cleans up, one draws, one translates. Chained together they form a pipeline that digests a thousand items without hiring an editorial team.',
      steps: [
        {
          h3: 'Step 1. Describe the item from its photo',
          text: 'A model that understands images and text at once looks at a shot and produces a draft: what the item is, material, colour, fittings, intended use. This does not replace the supplier data sheet, it fills the empty fields where the supplier sent only photos and an article number. Without this part descriptions are written by hand, and on a large catalogue that is the real bottleneck.',
          picks: ['qwen-vl', 'internvl', 'minicpm-v'],
        },
        {
          h3: 'Step 2. Make the photos presentable',
          text: 'Photo models remove backgrounds, sharpen images and scale small shots up to the required resolution. It is dull work but the most visible to buyers: they see the picture first and read the text second. Skip it and cards look inconsistent, some images fail marketplace requirements, and items come back for rework.',
          picks: ['rmbg', 'birefnet', 'real-esrgan'],
        },
        {
          h3: 'Step 3. Create the shots you never took',
          text: 'Image generation fills catalogue gaps: a seasonal background, a colour variant, a simple scene for a banner or a category cover. It should work on top of the real product photo rather than instead of it, otherwise buyers receive something that does not match the picture. Without this part you either reshoot or leave gaps in the card and lose impressions.',
          picks: ['flux', 'qwen-image', 'stable-diffusion'],
        },
        {
          h3: 'Step 4. Translate the catalogue',
          text: 'A dedicated translation model rolls the catalogue out into other languages more cheaply and more consistently than a general language model, and it does not paraphrase your text. Keep a glossary of your own terms and product names, or the same material ends up named three different ways across cards. Without this step entering a neighbouring market means translating thousands of descriptions by hand.',
          picks: ['nllb', 'madlad', 'opus-mt'],
        },
      ],
      note: 'The main risk is a model confidently inventing attributes the product does not have: composition, country of origin, warranty. The rule is simple: anything the seller is answerable for comes from supplier data, and the model only writes what is visible in the photo. Build in spot checks by a human and keep one glossary for the whole catalogue. Marketplace rules for images and descriptions change, so check them before a bulk upload.',
    },
  },

  {
    slug: 'videoproizvodstvo',
    title: 'Короткие ролики: стек из открытых ИИ-моделей',
    description: 'Генерация видеоряда, озвучка голосом, автоматические субтитры из этой же озвучки и перевод ролика под другие рынки.',
    h1: 'Стек под видео: ролик, голос, субтитры, перевод',
    intro: 'Ролик собирается из слоёв, и модели работают по слоям так же. Картинка, голос, текст на экране и перевод это четыре независимых задачи, и попытка получить всё одним запросом даёт результат, который нельзя переделать по частям. Когда слои разделены, можно поменять только озвучку или только перевод, не пересобирая видеоряд заново. Для бизнеса это важнее качества отдельного кадра: правки приходят всегда.',
    steps: [
      {
        h3: 'Шаг 1. Собрать видеоряд',
        text: 'Модель генерации видео делает короткие сцены по текстовому описанию или оживляет готовую картинку. Реалистично держится обычно несколько секунд, поэтому ролик собирают из коротких кусков, а не просят минуту целиком. Это звено определяет и стоимость, и время: видео считается заметно дольше картинок и требует серьёзной видеокарты. Без него остаётся монтаж из стоков и съёмки.',
        picks: ['wan', 'hunyuan-video', 'ltx-video'],
      },
      {
        h3: 'Шаг 2. Озвучить',
        text: 'Синтез речи читает сценарий выбранным голосом, с нужной скоростью и паузами. Здесь решается вопрос узнаваемости: один и тот же голос во всех роликах работает как часть бренда. Клонирование чужого голоса без разрешения человека недопустимо, и это не технический вопрос, а правовой, здесь в общих чертах, конкретный случай смотрит юрист. Без звена нужен диктор на каждую правку текста.',
        picks: ['f5-tts', 'cosyvoice', 'xtts'],
      },
      {
        h3: 'Шаг 3. Сделать субтитры',
        text: 'Распознавание речи снимает готовую озвучку обратно в текст с отметками времени, и из этого получаются субтитры, которые совпадают со звуком по кадрам. Кажется избыточным, ведь сценарий уже есть, но диктор и синтез читают с паузами, а зритель в ленте смотрит без звука. Без субтитров половина аудитории соцсетей не досматривает ролик до сути.',
        picks: ['whisper', 'qwen-asr'],
      },
      {
        h3: 'Шаг 4. Перевести на другие рынки',
        text: 'Модель перевода переносит сценарий и субтитры на другие языки, после чего тот же ролик переозвучивается с шага два. Получается не новая съёмка, а вариант, и стоимость выхода на соседний рынок падает до стоимости озвучки. Без этого звена каждый язык это отдельный производственный цикл со своим подрядчиком и своими сроками.',
        picks: ['seed-x', 'nllb', 'tower'],
      },
    ],
    note: 'Ожидания обычно завышены по двум пунктам: длине сцены и управляемости. Модель не выдаёт по описанию нужный кадр с первого раза, и в смету закладывают перебор вариантов, а не один запрос. Заранее договоритесь, где проходит граница: лицо реального человека, чужой бренд в кадре, голос сотрудника. Права на сгенерированное, маркировка синтетического контента и использование чужой внешности здесь описаны в общих чертах, конкретный случай смотрит юрист.',
    _en: {
      title: 'Short-form video production',
      description: 'Generated footage, synthesised voice-over, subtitles taken back out of that voice-over, and translation of the whole clip for other markets.',
      h1: 'Video stack: footage, voice, subtitles, translation',
      intro: 'A clip is assembled in layers, and models work the same way. Picture, voice, on-screen text and translation are four independent jobs, and asking for all of them in one shot gives you something you cannot revise in parts. With the layers separated you can redo only the voice-over or only the translation without rebuilding the footage. For a business that matters more than the quality of any single frame, because revisions always come.',
      steps: [
        {
          h3: 'Step 1. Build the footage',
          text: 'A video model creates short scenes from a text description or animates a still image. It usually holds up for a few seconds, so clips are assembled from short pieces rather than requested as a whole minute. This part drives both cost and time: video takes far longer to compute than images and needs a serious graphics card. Without it you are back to stock footage and filming.',
          picks: ['wan', 'hunyuan-video', 'ltx-video'],
        },
        {
          h3: 'Step 2. Add the voice-over',
          text: 'Speech synthesis reads the script in a chosen voice at the pace and pauses you set. This is where recognisability is decided: the same voice across all your clips works as part of the brand. Cloning someone else without their permission is not on, and that is a legal question rather than a technical one, described here in general terms with a lawyer reviewing your case. Without this part every text edit needs a voice actor.',
          picks: ['f5-tts', 'cosyvoice', 'xtts'],
        },
        {
          h3: 'Step 3. Generate subtitles',
          text: 'Speech recognition turns the finished voice-over back into text with timestamps, which gives subtitles that match the audio frame for frame. It looks redundant since you already have the script, but narration has pauses and feed viewers watch with the sound off. Without subtitles half of a social audience never reaches the point of the clip.',
          picks: ['whisper', 'qwen-asr'],
        },
        {
          h3: 'Step 4. Localise for other markets',
          text: 'A translation model carries the script and subtitles into other languages, and the same clip is then re-voiced from step two. The result is a variant rather than a new shoot, and the cost of entering a neighbouring market drops to the cost of voice-over. Without this part every language becomes its own production cycle with its own contractor and schedule.',
          picks: ['seed-x', 'nllb', 'tower'],
        },
      ],
      note: 'Expectations are usually too high on two points: scene length and control. A model does not hand you the exact shot on the first try, so budget for iterations rather than a single request. Agree in advance where your line is: a real person in frame, someone else brand, an employee voice. Rights to generated material, labelling of synthetic content and use of someone likeness are covered here in general terms only, with a lawyer reviewing the specific case.',
    },
  },

  {
    slug: 'analitika-po-bazam',
    title: 'Вопросы к базе словами: открытые модели и SQL',
    description: 'Руководитель спрашивает словами, система переводит вопрос в запрос к базе, объясняет цифру и проверяет ответ перед показом.',
    h1: 'Стек под аналитику: спросить у базы словами',
    intro: 'Отчёты всегда отстают от вопросов. Пока аналитик делает выгрузку, вопрос уже поменялся, а простые вещи вроде среза по неделям упираются в очередь задач. Связка моделей закрывает именно этот разрыв: вопрос на человеческом языке превращается в запрос к базе, результат объясняется словами, а отдельное звено проверяет, что ответ вообще следует из данных. Последнее звено и отличает рабочий инструмент от красивой демонстрации.',
    steps: [
      {
        h3: 'Шаг 1. Объяснить модели, что лежит в базе',
        text: 'Перед переводом вопроса в запрос система должна найти нужные таблицы и поля среди сотен. Этим занимается поиск по смыслу: описания таблиц и бизнес-словарь превращаются в отпечатки, и под каждый вопрос подбирается подходящий кусок схемы. Без этого шага модель получает либо всю схему целиком, что дорого и путает её, либо случайный кусок и отвечает по не тем таблицам.',
        picks: ['bge-m3', 'gte'],
      },
      {
        h3: 'Шаг 2. Перевести вопрос в запрос к базе',
        text: 'Специализированная модель составляет корректный запрос к базе данных по формулировке вопроса и описанию схемы. Узкие модели под эту задачу обычно точнее и дешевле универсальных, потому что их учили именно на запросах. Важно, чтобы доступ был только на чтение и по ролям: связка должна физически не мочь ничего изменить в базе. Без звена всё упирается в очередь к аналитику.',
        picks: ['sqlcoder', 'xiyan-sql', 'omnisql'],
      },
      {
        h3: 'Шаг 3. Объяснить результат словами',
        text: 'Языковая модель берёт полученную таблицу и превращает её в понятный ответ: что выросло, где сравнение с прошлым периодом, чего в данных нет. Она же переспрашивает, если вопрос допускает несколько прочтений, например когда неясно, считать выручку с налогом или без. Без этого звена руководитель получает таблицу и всё равно идёт с ней к аналитику за пересказом.',
        picks: ['qwen', 'deepseek', 'gpt-oss'],
      },
      {
        h3: 'Шаг 4. Проверить ответ до показа',
        text: 'Отдельная проверяющая модель сверяет текст ответа с тем, что реально вернула база, и отмечает утверждения, которые из данных не следуют. Это дешевле, чем разбираться потом, почему на совещании прозвучала неверная цифра. Если звена нет, ошибки видны только тому, кто знает данные наизусть, а именно такой человек обычно и не сидит на этом отчёте.',
        picks: ['prometheus', 'minicheck', 'hhem'],
      },
    ],
    note: 'Связка работает ровно настолько, насколько понятна ваша база. Если поля называются сокращениями, а одно и то же считается в трёх местах по-разному, модель унаследует эту путаницу. Начинайте с одной витрины данных и десятка согласованных метрик с письменными определениями, а не со всей базы сразу. Доступ только на чтение, разграничение по ролям и журнал запросов обязательны, иначе удобный инструмент станет каналом утечки.',
    _en: {
      title: 'Plain-language questions to your database',
      description: 'A manager asks in words, the system turns the question into a database query, explains the number and checks the answer before it is shown.',
      h1: 'Analytics stack: asking your database in plain words',
      intro: 'Reports always lag behind questions. While an analyst builds an extract the question has already moved on, and simple things like a weekly breakdown sit in a queue. This chain closes exactly that gap: a question in plain language becomes a database query, the result is explained in words, and a separate part checks that the answer actually follows from the data. That last part is what separates a working tool from a nice demo.',
      steps: [
        {
          h3: 'Step 1. Tell the model what is in the database',
          text: 'Before a question becomes a query, the system has to find the right tables and fields among hundreds. Meaning-based search does that: table descriptions and a business glossary become fingerprints, and each question gets the matching slice of the schema. Without this step the model either receives the whole schema, which is expensive and confusing, or a random slice and answers from the wrong tables.',
          picks: ['bge-m3', 'gte'],
        },
        {
          h3: 'Step 2. Turn the question into a query',
          text: 'A specialised model writes a valid database query from the wording of the question and the schema description. Narrow models built for this are usually more accurate and cheaper than general ones, because queries are exactly what they were trained on. Access must be read-only and role-based: the chain should be physically unable to change anything. Without this part everything queues behind an analyst.',
          picks: ['sqlcoder', 'xiyan-sql', 'omnisql'],
        },
        {
          h3: 'Step 3. Explain the result in words',
          text: 'A language model takes the returned table and turns it into a readable answer: what grew, how it compares with the previous period, what the data does not cover. It also asks back when a question has more than one reading, for example whether revenue should include tax. Without this part a manager gets a table and still walks over to an analyst for a summary.',
          picks: ['qwen', 'deepseek', 'gpt-oss'],
        },
        {
          h3: 'Step 4. Check the answer before showing it',
          text: 'A separate checking model compares the written answer against what the database actually returned and flags claims the data does not support. That is cheaper than working out afterwards why a wrong number was quoted in a meeting. Without it, mistakes are visible only to someone who knows the data by heart, and that person is usually not the one reading this report.',
          picks: ['prometheus', 'minicheck', 'hhem'],
        },
      ],
      note: 'The chain works only as well as your database is understandable. If fields are named in abbreviations and the same metric is computed three different ways, the model inherits that confusion. Start with one data mart and a dozen agreed metrics with written definitions rather than the whole warehouse. Read-only access, role separation and a query log are mandatory, otherwise a convenient tool becomes a leak.',
    },
  },

  {
    slug: 'kontrol-kachestva',
    title: 'Контроль качества: открытые модели зрения',
    description: 'Камера на линии или на складе: детекция объектов, выделение области дефекта и текстовый отчёт по смене для руководителя.',
    h1: 'Стек под производство: камера, которая замечает и объясняет',
    intro: 'Камеры на производстве обычно уже стоят, но записи никто не смотрит: человек внимателен первые полчаса смены. Модели зрения закрывают именно монотонную часть, и делают это в несколько шагов. Сначала находят объекты в кадре, потом аккуратно выделяют границы дефекта, потом описывают, что видно, и только потом это превращается в отчёт. Разделение на звенья позволяет ставить пороги отдельно на каждом и не будить мастера по каждой тени.',
    steps: [
      {
        h3: 'Шаг 1. Найти объекты в кадре',
        text: 'Модель детекции обводит на кадре то, что вас интересует: деталь, коробку, паллету, человека в зоне, каску. Работает быстро и прямо на площадке, без отправки видео наружу. Часть моделей ищет по текстовому описанию, что удобно, когда классов много и они меняются. Без этого звена нет ни счётчиков, ни срабатываний, и вся дальнейшая логика просто не на чем держится.',
        picks: ['yolo', 'rf-detr', 'grounding-dino'],
      },
      {
        h3: 'Шаг 2. Выделить область и оценить геометрию',
        text: 'Сегментация обводит объект по контуру, а не прямоугольником, и это принципиально для дефектов: скол, потёк, зазор нужно померить, а не просто заметить. Оценка глубины добавляет понимание расстояний, если камера одна. Без этого звена система умеет сказать только, что деталь в кадре, но не то, что с ней не так, и на брак она не реагирует.',
        picks: ['sam', 'depth-anything'],
      },
      {
        h3: 'Шаг 3. Описать, что видно на снимке',
        text: 'Модель, понимающая картинки и текст, превращает срабатывание в человеческую фразу: что за объект, что с ним не так, насколько уверенно. Это звено соединяет зрение с отчётностью, потому что мастеру нужны слова, а не координаты рамки. Без него в журнале остаются номера классов и кадры, и разбираться в них будет только тот, кто настраивал систему.',
        picks: ['qwen-vl', 'florence-2', 'moondream'],
      },
      {
        h3: 'Шаг 4. Собрать отчёт за смену',
        text: 'Языковая модель сводит срабатывания за смену в короткий текст: сколько, где, что повторяется, на что смотреть в первую очередь. Вместо тысячи уведомлений руководитель получает одну сводку, а тревожные события уходят сразу. Без этого звена система заваливает чат уведомлениями, их перестают читать через неделю, и внедрение тихо умирает.',
        picks: ['qwen', 'gemma'],
      },
    ],
    note: 'Всё решают камеры и свет, а не выбор модели. Блик, контровой свет, грязный объектив и пар обесценивают любую точность на бумаге. Перед внедрением снимите свои реальные условия, включая ночную смену, и соберите набор кадров с браком, которого обычно мало и он редкий. И сразу договоритесь, что делает система при срабатывании: останавливает линию, ставит метку или зовёт мастера. Видеонаблюдение за сотрудниками регулируется, здесь в общих чертах, конкретный случай смотрит юрист.',
    _en: {
      title: 'Quality control and warehousing',
      description: 'A camera on the line or in the warehouse: object detection, outlining the defect area, and a plain-text shift report for the supervisor.',
      h1: 'Manufacturing stack: a camera that notices and explains',
      intro: 'Cameras are usually already installed on site, but nobody watches the footage: human attention lasts half an hour into a shift. Vision models cover exactly the monotonous part, and they do it in several steps. First find objects in the frame, then outline the defect area properly, then describe what is visible, and only then turn it into a report. Splitting the work lets you set thresholds separately at each stage instead of waking the supervisor over every shadow.',
      steps: [
        {
          h3: 'Step 1. Find objects in the frame',
          text: 'A detection model draws boxes around what you care about: a part, a box, a pallet, a person in a restricted zone, a helmet. It runs fast and on site, without sending video anywhere. Some of these models search by text description, which helps when there are many classes and they keep changing. Without this part there are no counters and no triggers, and the rest of the logic has nothing to stand on.',
          picks: ['yolo', 'rf-detr', 'grounding-dino'],
        },
        {
          h3: 'Step 2. Outline the area and judge geometry',
          text: 'Segmentation traces an object by its contour rather than a rectangle, which matters for defects: a chip, a run or a gap needs measuring, not just noticing. Depth estimation adds a sense of distance when there is only one camera. Without this part the system can only say a part is in frame, not what is wrong with it, so it never reacts to a defect.',
          picks: ['sam', 'depth-anything'],
        },
        {
          h3: 'Step 3. Describe what is in the picture',
          text: 'A model that understands images and text turns a trigger into a human sentence: what the object is, what is wrong, how confident the call is. This part connects vision to reporting, because a supervisor needs words rather than box coordinates. Without it the log holds class numbers and frames that only the person who set the system up can interpret.',
          picks: ['qwen-vl', 'florence-2', 'moondream'],
        },
        {
          h3: 'Step 4. Compile the shift report',
          text: 'A language model condenses a shift worth of triggers into short text: how many, where, what repeats, what to look at first. Instead of a thousand notifications the manager gets one summary, while genuinely urgent events still go out immediately. Without this part the system floods a chat, people stop reading it within a week, and the rollout quietly dies.',
          picks: ['qwen', 'gemma'],
        },
      ],
      note: 'Cameras and lighting decide the outcome, not the choice of model. Glare, backlight, a dirty lens or steam wipe out any accuracy claimed on paper. Before rolling out, record your own conditions including the night shift, and gather a set of defect frames, which are always scarce. Agree up front what happens on a trigger: stop the line, tag the item, or call a supervisor. Video monitoring of employees is regulated, described here in general terms, with a lawyer reviewing your case.',
    },
  },

  {
    slug: 'yuridicheskiy-otdel',
    title: 'Договоры и юротдел: стек из открытых моделей',
    description: 'Распознавание договоров, поиск по своду документов и практике, разбор условий языковой моделью и обезличивание перед отправкой.',
    h1: 'Стек под юридический отдел: договор, свод, обезличивание',
    intro: 'Договоры это тот случай, когда цена ошибки известна заранее, поэтому связку собирают так, чтобы каждый шаг можно было проверить. Сначала документ надо надёжно прочитать вместе со сложной вёрсткой, потом найти в своде похожие пункты и вашу утверждённую редакцию, потом сравнить и объяснить расхождения, и отдельно закрыть вопрос персональных данных до того, как что-то уйдёт наружу. Модель здесь помощник юриста, а не его замена.',
    steps: [
      {
        h3: 'Шаг 1. Прочитать документ вместе с вёрсткой',
        text: 'Договоры приходят сканами и PDF, где половина смысла в нумерации пунктов, сносках, приложениях и таблицах. Модели распознавания документов вытаскивают не просто текст, а структуру: пункт, подпункт, ссылку на приложение. Если выкинуть этот шаг, разбор поедет на уровне нумерации, и ссылка на пункт о неустойке уедет к другому разделу, чего в правовой работе быть не должно.',
        picks: ['nougat', 'olmocr', 'mineru'],
      },
      {
        h3: 'Шаг 2. Найти похожее в своём своде',
        text: 'Поиск по смыслу поднимает из вашего архива утверждённые формулировки, прошлые редакции и договоры с тем же контрагентом. Часть моделей ищет прямо по странице документа, вместе с её вёрсткой, что удобно для сканов. Без этого шага юрист вычитывает каждый договор с нуля, а компания снова и снова обсуждает то, о чём уже договаривалась два года назад.',
        picks: ['colpali', 'bge-m3', 'jina-reranker'],
      },
      {
        h3: 'Шаг 3. Сравнить и объяснить расхождения',
        text: 'Языковая модель сопоставляет присланный текст с вашей редакцией и выписывает отличия обычным языком: срок оплаты, ответственность, порядок расторжения, подсудность. Она отмечает подозрительное, а решение принимает юрист, поэтому каждое замечание должно указывать на пункт. Без этого звена черновая вычитка занимает часы, а мелкие правки контрагента замечают уже после подписания.',
        picks: ['saullm', 'qwen', 'deepseek'],
      },
      {
        h3: 'Шаг 4. Обезличить перед отправкой',
        text: 'Отдельная модель находит в тексте персональные данные и реквизиты и заменяет их метками, прежде чем документ уйдёт во внешний сервис или в общую базу. Работает она узко и быстро, ничего не переписывая по смыслу. Без этого звена любая обработка договоров снаружи превращается в передачу данных людей, которую придётся объяснять, и это уже не техническая задача.',
        picks: ['gliner-pii', 'piiranha', 'privacy-filter'],
      },
    ],
    note: 'Здесь важнее обычного помнить, что модель ошибается уверенно: пропущенный пункт выглядит так же спокойно, как и найденный. Поэтому связку ставят как черновую вычитку и подсветку рисков, а не как согласование, и каждое замечание проверяется юристом по тексту договора. Полезно вести журнал, кто и что принял, иначе не разобрать, откуда в подписанной редакции взялась формулировка. Правовые вопросы, персональные данные и допустимость обработки описаны здесь в общих чертах, конкретный случай смотрит юрист.',
    _en: {
      title: 'Contract work',
      description: 'Contract recognition, search across your own body of documents, clause-by-clause review by a language model, and redaction before anything leaves.',
      h1: 'Legal stack: contracts, precedent, redaction',
      intro: 'Contracts are the case where the cost of a mistake is known in advance, so the chain is built so that every step can be checked. First the document has to be read reliably along with its layout, then similar clauses and your approved wording have to be found, then differences compared and explained, and personal data has to be dealt with before anything leaves the building. The model here assists a lawyer rather than replacing one.',
      steps: [
        {
          h3: 'Step 1. Read the document with its layout',
          text: 'Contracts arrive as scans and PDFs where half the meaning sits in clause numbering, footnotes, annexes and tables. Document recognition models extract structure as well as text: clause, sub-clause, reference to an annex. Skip this step and the analysis drifts at the numbering level, so a reference to the penalty clause lands in the wrong section, which is unacceptable in legal work.',
          picks: ['nougat', 'olmocr', 'mineru'],
        },
        {
          h3: 'Step 2. Find precedent in your own archive',
          text: 'Meaning-based search surfaces approved wording, earlier versions and previous contracts with the same counterparty. Some models search the document page directly, layout included, which suits scans. Without this step a lawyer reads every contract from scratch, and the company renegotiates points it already settled two years ago.',
          picks: ['colpali', 'bge-m3', 'jina-reranker'],
        },
        {
          h3: 'Step 3. Compare and explain the differences',
          text: 'A language model matches the incoming text against your approved version and lists the differences in plain words: payment terms, liability, termination, jurisdiction. It flags what looks off while the lawyer decides, so every remark must point at a specific clause. Without this part a first pass takes hours, and small edits by a counterparty get noticed after signing.',
          picks: ['saullm', 'qwen', 'deepseek'],
        },
        {
          h3: 'Step 4. Redact before sending',
          text: 'A dedicated model finds personal data and identifiers in the text and replaces them with placeholders before the document goes to an outside service or a shared archive. It works narrowly and fast and rewrites nothing else. Without this part, any external processing of contracts becomes a transfer of people data that you will have to account for, and that is no longer a technical question.',
          picks: ['gliner-pii', 'piiranha', 'privacy-filter'],
        },
      ],
      note: 'Here more than anywhere, remember that a model is wrong confidently: a missed clause looks exactly as calm as a caught one. So the chain is deployed as a first pass and a risk highlighter rather than as approval, and every remark is verified by a lawyer against the text. Keep a log of who accepted what, or nobody will be able to trace how a wording ended up in the signed version. Legal questions, personal data and permitted processing are described here in general terms only, with a lawyer reviewing the specific case.',
    },
  },
];
