// Тексты страниц-подборок энциклопедии открытых ИИ-моделей (/ii-modeli/).
// modality — ключи MOD из build-models.js, industry — ключи INDUSTRY, special — сквозные подборки.
// Число моделей в тексты не пишем: его подставляет генератор.
module.exports = {
  modality: {
    text: {
      slug: "yazykovye-modeli",
      h1: "Открытые языковые модели для бизнеса",
      title: "Открытые языковые модели (LLM) 2026: каталог для бизнеса",
      description: "Открытые LLM, которые можно запустить на своём сервере: чат-боты, ответы клиентам, работа с текстами. Лицензии, русский язык и требования к железу.",
      intro: "Языковые модели пишут и правят тексты, отвечают клиентам, делают выжимки из документов и становятся основой для чат-ботов и ассистентов. Открытую модель можно развернуть у себя, и данные не уйдут к стороннему сервису. При выборе смотрите, насколько хорошо модель понимает русский, разрешает ли лицензия коммерческое использование и какой размер потянет ваше железо.",
      h1_en: "Open-source language models for business",
      title_en: "Open-source LLMs 2026: a catalog for business",
      description_en: "Open LLMs you can run on your own server: chatbots, customer replies, document work. Compare licenses, language support and hardware requirements.",
      intro_en: "Language models write and edit text, answer customers, summarize documents and power chatbots and assistants. An open model can run on your own infrastructure, so data never leaves your company. When choosing, check support for the languages you need, whether the license allows commercial use, and which model size your hardware can handle."
    },
    code: {
      slug: "dlya-koda",
      h1: "Открытые нейросети для программирования",
      title: "Открытые модели для кода 2026: ассистенты программиста",
      description: "Открытые нейросети для написания и проверки кода: автодополнение, рефакторинг, агенты в IDE. Сравните лицензии, размеры и требования к видеокарте.",
      intro: "Модели для кода дописывают функции, объясняют чужой код, пишут тесты и помогают с рефакторингом. Локальный запуск важен, когда исходники нельзя отправлять во внешние сервисы. Смотрите на поддержку нужных языков программирования, длину контекста, лицензию и на то, хватит ли видеопамяти для комфортной скорости.",
      h1_en: "Open-source AI models for coding",
      title_en: "Open-source coding models 2026: AI assistants for developers",
      description_en: "Open AI models for writing and reviewing code: autocomplete, refactoring, IDE agents. Compare licenses, sizes and GPU requirements before you deploy.",
      intro_en: "Coding models complete functions, explain unfamiliar code, write tests and help with refactoring. Running them locally matters when source code must not leave your company. Look at the programming languages covered, context length, license terms and whether your GPU memory is enough for comfortable speed."
    },
    vlm: {
      slug: "kartinka-i-tekst",
      h1: "Мультимодальные модели: картинка и текст",
      title: "Открытые мультимодальные модели 2026: понимание картинок",
      description: "Открытые модели, которые понимают изображения и отвечают текстом: описание фото, разбор скриншотов, графиков и схем. Лицензии и требования к железу.",
      intro: "Такие модели смотрят на изображение и отвечают на вопросы о нём: описывают товар на фото, разбирают скриншот, график или схему, находят детали на снимке. Это основа для проверки фотоотчётов, карточек товаров и визуальной поддержки. При выборе проверьте качество ответов на русском, лицензию и объём видеопамяти.",
      h1_en: "Vision-language models: image and text",
      title_en: "Open-source vision-language models 2026: image understanding",
      description_en: "Open models that read images and answer in text: photo descriptions, screenshots, charts and diagrams. Compare licenses and hardware requirements.",
      intro_en: "These models look at an image and answer questions about it: describe a product photo, read a screenshot, chart or diagram, spot details in a picture. They power photo report checks, product listings and visual support. When choosing, check answer quality in your languages, the license and the GPU memory required."
    },
    ocr: {
      slug: "raspoznavanie-dokumentov",
      h1: "Открытые модели для распознавания документов",
      title: "Распознавание документов и OCR 2026: открытые модели",
      description: "Открытые нейросети для OCR: сканы, счета, накладные, таблицы и рукописный текст. Как выбрать модель под русские документы, лицензию и железо.",
      intro: "Модели OCR превращают сканы и фото документов в текст и структурированные данные: счета, накладные, договоры, таблицы. Это снимает ручной ввод в бухгалтерии и учётных системах. Проверьте поддержку кириллицы и рукописного текста, умение сохранять таблицы и разметку, а также условия лицензии.",
      h1_en: "Open-source models for document recognition",
      title_en: "Document recognition and OCR 2026: open-source models",
      description_en: "Open AI models for OCR: scans, invoices, delivery notes, tables and handwriting. How to pick a model for your documents, license and hardware.",
      intro_en: "OCR models turn scans and document photos into text and structured data: invoices, delivery notes, contracts, tables. This removes manual data entry in accounting and ERP systems. Check support for your scripts and handwriting, how well tables and layout are preserved, and the license terms."
    },
    image: {
      slug: "generatsiya-izobrazheniy",
      h1: "Открытые нейросети для генерации изображений",
      title: "Генерация изображений 2026: открытые нейросети",
      description: "Открытые модели для генерации и редактирования картинок: баннеры, иллюстрации, визуал для соцсетей. Лицензии на коммерцию и требования к видеокарте.",
      intro: "Генеративные модели рисуют изображения по текстовому описанию: баннеры, иллюстрации, визуал для соцсетей и карточек товаров. Своя модель на сервере даёт предсказуемые расходы и контроль над стилем. Внимательно читайте лицензию, ведь у части моделей коммерческое использование ограничено, и учитывайте требования к видеопамяти.",
      h1_en: "Open-source AI models for image generation",
      title_en: "Image generation 2026: open-source AI models",
      description_en: "Open models for generating and editing images: banners, illustrations, social media visuals. Check commercial license terms and GPU requirements.",
      intro_en: "Generative models create images from text prompts: banners, illustrations, social media and product visuals. Hosting your own model gives predictable costs and control over style. Read the license carefully, since some models restrict commercial use, and account for GPU memory requirements."
    },
    video: {
      slug: "generatsiya-video",
      h1: "Открытые нейросети для генерации видео",
      title: "Генерация видео 2026: открытые нейросети",
      description: "Открытые модели для создания видео по тексту и картинке: ролики для рекламы и соцсетей. Сравнение лицензий и требований к видеокартам.",
      intro: "Видеомодели создают короткие ролики по текстовому описанию или оживляют готовую картинку. Их используют для рекламных роликов, контента в соцсети и прототипов сцен. Такие модели требовательны к железу, поэтому заранее смотрите на объём видеопамяти, длину и разрешение ролика, а также на условия лицензии.",
      h1_en: "Open-source AI models for video generation",
      title_en: "Video generation 2026: open-source AI models",
      description_en: "Open models that create video from text or images: ads and social media clips. Compare license terms and GPU requirements before you start.",
      intro_en: "Video models create short clips from a text prompt or animate a still image. Teams use them for ad creatives, social media content and scene prototypes. These models are hardware-hungry, so check GPU memory, clip length and resolution, and the license terms up front."
    },
    avatar: {
      slug: "avatary",
      h1: "Открытые нейросети для говорящих аватаров",
      title: "ИИ-аватары 2026: открытые модели говорящих голов",
      description: "Открытые модели для говорящих аватаров: оживление фото, синхронизация губ с речью, видео с виртуальным ведущим. Лицензии и требования к железу.",
      intro: "Модели аватаров оживляют портрет и синхронизируют движения губ с аудио, чтобы получить видео с говорящим ведущим. Это ускоряет выпуск обучающих роликов, презентаций и рекламы. Учитывайте лицензию, требования к видеокарте и права на использование лица и голоса конкретного человека.",
      h1_en: "Open-source AI models for talking avatars",
      title_en: "AI avatars 2026: open-source talking head models",
      description_en: "Open models for talking avatars: photo animation, lip sync to speech, videos with a virtual presenter. Compare licenses and hardware requirements.",
      intro_en: "Avatar models animate a portrait and sync lip movement to audio, producing a video with a talking presenter. This speeds up training videos, presentations and ads. Consider the license, GPU requirements and the rights to use a specific person's face and voice."
    },
    asr: {
      slug: "raspoznavanie-rechi",
      h1: "Открытые модели для распознавания речи",
      title: "Распознавание речи 2026: открытые модели speech-to-text",
      description: "Открытые модели для перевода речи в текст: звонки, встречи, голосовые сообщения. Как выбрать под русский язык, лицензию и своё железо.",
      intro: "Модели распознавания речи превращают звонки, совещания и голосовые сообщения в текст, который дальше можно искать и анализировать. Локальный запуск важен, если записи разговоров нельзя передавать наружу. Проверьте качество на русском и с фоновым шумом, поддержку разделения по спикерам, лицензию и скорость на вашем железе.",
      h1_en: "Open-source speech recognition models",
      title_en: "Speech recognition 2026: open-source speech-to-text models",
      description_en: "Open models that turn speech into text: calls, meetings, voice messages. How to choose by language support, license and your own hardware.",
      intro_en: "Speech recognition models turn calls, meetings and voice messages into searchable, analyzable text. Local deployment matters when call recordings must stay in-house. Check accuracy in your languages and with background noise, speaker separation, the license and speed on your hardware."
    },
    tts: {
      slug: "sintez-rechi",
      h1: "Открытые модели для синтеза речи",
      title: "Синтез речи 2026: открытые модели text-to-speech",
      description: "Открытые нейросети для озвучки текста: голосовые боты, автоответчики, озвучка роликов и курсов. Русский язык, клонирование голоса и лицензии.",
      intro: "Модели синтеза речи озвучивают текст живым голосом: для голосовых ботов, автоответчиков, роликов и обучающих курсов. Часть моделей умеет клонировать голос по короткому образцу. Обратите внимание на качество русской речи и ударений, скорость генерации, лицензию и права на использование чужого голоса.",
      h1_en: "Open-source text-to-speech models",
      title_en: "Text-to-speech 2026: open-source TTS models",
      description_en: "Open AI models that voice text: voice bots, phone menus, video and course narration. Compare language support, voice cloning and license terms.",
      intro_en: "Text-to-speech models read text aloud in a natural voice for voice bots, phone menus, videos and training courses. Some can clone a voice from a short sample. Look at quality in your target languages, generation speed, the license and the rights to use someone else's voice."
    },
    omni: {
      slug: "golosovye-assistenty",
      h1: "Открытые модели для голосовых ассистентов",
      title: "Голосовые ассистенты 2026: открытые speech-to-speech модели",
      description: "Открытые модели, которые слушают и отвечают голосом в реальном времени: голосовые боты, колл-центры, ассистенты. Лицензии, языки и железо.",
      intro: "Эти модели ведут разговор голосом: слушают собеседника и отвечают речью без отдельной цепочки из распознавания, текста и озвучки. На них строят голосовых ботов для звонков и ассистентов в приложениях. Смотрите на задержку ответа, поддержку русского, лицензию и требования к видеокарте.",
      h1_en: "Open-source models for voice assistants",
      title_en: "Voice assistants 2026: open-source speech-to-speech models",
      description_en: "Open models that listen and reply by voice in real time: voice bots, call centers, in-app assistants. Compare licenses, languages and hardware.",
      intro_en: "These models hold a spoken conversation: they listen and reply with speech without a separate recognition, text and synthesis pipeline. They power phone voice bots and in-app assistants. Check response latency, support for your languages, the license and GPU requirements."
    },
    audio: {
      slug: "muzyka-i-zvuk",
      h1: "Открытые нейросети для музыки и звука",
      title: "Генерация музыки и звука 2026: открытые нейросети",
      description: "Открытые модели для создания музыки, джинглов и звуковых эффектов: фон для роликов, подкастов и рекламы. Лицензии на коммерцию и требования.",
      intro: "Аудиомодели создают музыку, джинглы и звуковые эффекты по текстовому описанию, а некоторые умеют разделять трек на дорожки. Это фон для роликов, подкастов и рекламы без покупки стоков. Главное здесь лицензия: проверьте, разрешено ли коммерческое использование результата.",
      h1_en: "Open-source AI models for music and sound",
      title_en: "Music and sound generation 2026: open-source AI models",
      description_en: "Open models that create music, jingles and sound effects: background for videos, podcasts and ads. Check commercial license terms and requirements.",
      intro_en: "Audio models create music, jingles and sound effects from a text prompt, and some can split a track into stems. That gives you background audio for videos, podcasts and ads without stock libraries. The license matters most here: check whether commercial use of the output is allowed."
    },
    "3d": {
      slug: "3d-modeli",
      h1: "Открытые нейросети для создания 3D-моделей",
      title: "Генерация 3D 2026: открытые нейросети",
      description: "Открытые модели, которые делают 3D-объекты из текста или фото: товары для витрин, игры, AR и прототипы. Лицензии, форматы и требования к железу.",
      intro: "3D-модели создают объёмные объекты по фото или описанию: для интерактивных витрин, игр, дополненной реальности и прототипов. Это сокращает работу 3D-дизайнера на черновом этапе. Проверьте, в каких форматах модель отдаёт результат, насколько качественны текстуры и что разрешает лицензия.",
      h1_en: "Open-source AI models for 3D generation",
      title_en: "3D generation 2026: open-source AI models",
      description_en: "Open models that create 3D objects from text or photos: product showcases, games, AR and prototypes. Compare licenses, formats and hardware needs.",
      intro_en: "3D models build objects from a photo or a description for interactive showcases, games, augmented reality and prototypes. They cut the 3D designer's workload at the draft stage. Check the output formats, texture quality and what the license permits."
    },
    vision: {
      slug: "kompyuternoe-zrenie",
      h1: "Открытые модели компьютерного зрения",
      title: "Компьютерное зрение 2026: открытые модели детекции",
      description: "Открытые модели для поиска и подсчёта объектов на фото и видео: камеры, склад, контроль качества, ритейл. Лицензии и требования к железу.",
      intro: "Модели компьютерного зрения находят, выделяют и считают объекты на фото и видео: людей в зале, товары на полке, дефекты на конвейере. Многие из них лёгкие и работают прямо на камере или небольшом сервере. Смотрите на скорость, возможность дообучить модель на своих данных и условия лицензии.",
      h1_en: "Open-source computer vision models",
      title_en: "Computer vision 2026: open-source detection models",
      description_en: "Open models that find and count objects in photos and video: cameras, warehouses, quality control, retail. Compare licenses and hardware needs.",
      intro_en: "Computer vision models detect, segment and count objects in photos and video: people in a store, products on a shelf, defects on a line. Many are lightweight and run on a camera or a small server. Look at speed, whether you can fine-tune on your own data, and the license terms."
    },
    embed: {
      slug: "poisk-i-rag",
      h1: "Открытые модели эмбеддингов для поиска и RAG",
      title: "Эмбеддинги для поиска и RAG 2026: открытые модели",
      description: "Открытые модели эмбеддингов для умного поиска и RAG: база знаний, поиск по документам, ИИ-ассистент по вашим данным. Русский язык и лицензии.",
      intro: "Модели эмбеддингов превращают тексты в векторы, чтобы искать по смыслу, а не по точным словам. На них строят поиск по базе знаний и RAG, когда ассистент отвечает по вашим документам. Проверьте качество на русском, длину обрабатываемого текста, размер вектора и лицензию.",
      h1_en: "Open-source embedding models for search and RAG",
      title_en: "Embeddings for search and RAG 2026: open-source models",
      description_en: "Open embedding models for semantic search and RAG: knowledge bases, document search, AI assistants over your data. Compare languages and licenses.",
      intro_en: "Embedding models turn text into vectors so you can search by meaning rather than exact words. They power knowledge base search and RAG, where an assistant answers from your own documents. Check quality in your languages, maximum input length, vector size and the license."
    },
    timeseries: {
      slug: "prognozirovanie",
      h1: "Открытые модели для прогнозирования временных рядов",
      title: "Прогнозирование спроса и продаж 2026: открытые модели",
      description: "Открытые модели для прогнозов по временным рядам: спрос, продажи, нагрузка, запасы. Как выбрать модель, лицензию и железо для своих данных.",
      intro: "Модели временных рядов прогнозируют спрос, продажи, нагрузку на сервис и остатки на складе по истории показателей. Часть из них работает без долгого обучения на ваших данных. При выборе оцените горизонт прогноза, работу с сезонностью и дополнительными факторами, лицензию и требования к железу.",
      h1_en: "Open-source time series forecasting models",
      title_en: "Demand and sales forecasting 2026: open-source models",
      description_en: "Open models for time series forecasting: demand, sales, load and inventory. How to choose a model, license and hardware for your own data.",
      intro_en: "Time series models forecast demand, sales, service load and inventory from historical data. Some work without lengthy training on your data. When choosing, consider the forecast horizon, handling of seasonality and external factors, the license and hardware needs."
    },
    robotics: {
      slug: "robototekhnika",
      h1: "Открытые модели для роботов",
      title: "ИИ для роботов 2026: открытые модели управления",
      description: "Открытые модели для управления роботами: манипуляторы, мобильные платформы, складская автоматизация. Лицензии, требования и применение.",
      intro: "Модели для робототехники связывают зрение, понимание команд и действия: учат манипулятор брать предметы, а мобильную платформу ориентироваться в пространстве. Это направление для складов, производства и исследовательских проектов. Смотрите, с каким оборудованием совместима модель, нужно ли дообучение и что разрешает лицензия.",
      h1_en: "Open-source models for robotics",
      title_en: "AI for robotics 2026: open-source control models",
      description_en: "Open models for controlling robots: manipulators, mobile platforms, warehouse automation. Compare licenses, requirements and use cases.",
      intro_en: "Robotics models connect vision, instruction understanding and action: they teach an arm to grasp objects and a mobile platform to navigate. This is a field for warehouses, manufacturing and research projects. Check which hardware the model supports, whether fine-tuning is needed and what the license allows."
    },
    tryon: {
      slug: "primerka-odezhdy",
      h1: "Открытые нейросети для виртуальной примерки одежды",
      title: "Виртуальная примерка одежды 2026: открытые нейросети",
      description: "Открытые модели виртуальной примерки: одежда на модели или фото покупателя для маркетплейсов и интернет-магазинов. Лицензии и требования к железу.",
      intro: "Модели виртуальной примерки переносят вещь с фото товара на модель или снимок покупателя. Это экономит на фотосъёмке для маркетплейсов и помогает покупателю представить вещь на себе. Проверьте качество на разных типах одежды, условия лицензии для коммерции и требования к видеокарте.",
      h1_en: "Open-source AI models for virtual try-on",
      title_en: "Virtual clothing try-on 2026: open-source AI models",
      description_en: "Open virtual try-on models: garments on a model or a shopper's photo for marketplaces and online stores. Compare licenses and hardware requirements.",
      intro_en: "Virtual try-on models transfer a garment from a product photo onto a model or a shopper's picture. This saves on photo shoots for marketplaces and helps buyers picture the item on themselves. Check quality across garment types, commercial license terms and GPU requirements."
    },
    photo: {
      slug: "obrabotka-foto",
      h1: "Открытые нейросети для обработки фото",
      title: "Обработка фото нейросетью 2026: открытые модели",
      description: "Открытые модели для работы с фото: удаление фона, увеличение разрешения, ретушь, восстановление снимков. Лицензии и требования к железу.",
      intro: "Эти модели удаляют фон, повышают разрешение, убирают лишние объекты и восстанавливают старые снимки. Для интернет-магазинов и маркетинга это быстрый способ привести фото товаров к единому виду. Смотрите на качество на ваших снимках, скорость пакетной обработки и лицензию.",
      h1_en: "Open-source AI models for photo editing",
      title_en: "AI photo editing 2026: open-source models",
      description_en: "Open models for photo work: background removal, upscaling, retouching and restoration. Compare licenses and hardware requirements for your use case.",
      intro_en: "These models remove backgrounds, upscale images, erase unwanted objects and restore old photos. For online stores and marketing they are a fast way to bring product photos to a consistent look. Check quality on your own images, batch processing speed and the license."
    },
    translate: {
      slug: "perevod",
      h1: "Открытые модели для машинного перевода",
      title: "Машинный перевод 2026: открытые нейросети",
      description: "Открытые модели для перевода текстов и документов: сайты, карточки товаров, переписка с зарубежными клиентами. Языковые пары, лицензии и железо.",
      intro: "Модели перевода переводят тексты, документы и переписку без отправки данных во внешний сервис. Их используют для локализации сайтов и карточек товаров и работы с зарубежными клиентами. Проверьте, есть ли нужные языковые пары и как модель справляется с терминами вашей отрасли, а также условия лицензии.",
      h1_en: "Open-source machine translation models",
      title_en: "Machine translation 2026: open-source AI models",
      description_en: "Open models for translating text and documents: websites, product listings, correspondence with foreign clients. Language pairs, licenses, hardware.",
      intro_en: "Translation models handle text, documents and correspondence without sending data to an external service. Businesses use them to localize websites and product listings and to work with international clients. Check that your language pairs are covered, how the model handles industry terms, and the license terms."
    },
    safety: {
      slug: "moderatsiya",
      h1: "Открытые модели для модерации контента",
      title: "Модерация контента и безопасность ИИ 2026: открытые модели",
      description: "Открытые модели для модерации: фильтрация токсичных сообщений, защита чат-ботов от вредных запросов и утечек. Языки, лицензии и требования.",
      intro: "Модели модерации проверяют сообщения, отзывы и ответы чат-ботов на токсичность, запрещённые темы и попытки обойти ограничения. Их ставят фильтром перед публикацией контента или перед ответом ассистента. Смотрите, какие категории нарушений модель различает, насколько хорошо работает на русском и можно ли настроить правила под себя.",
      h1_en: "Open-source content moderation models",
      title_en: "Content moderation and AI safety 2026: open-source models",
      description_en: "Open models for moderation: filtering toxic messages and protecting chatbots from harmful prompts and data leaks. Compare languages and licenses.",
      intro_en: "Moderation models screen messages, reviews and chatbot replies for toxicity, prohibited topics and jailbreak attempts. They sit as a filter before content is published or before an assistant answers. Check which violation categories the model distinguishes, how it performs in your languages, and whether you can customize the policy."
    },
    voice: {
      slug: "golos-i-spikery",
      h1: "Открытые модели для работы с голосом и звуком",
      title: "Голос и звук 2026: разделение спикеров и очистка аудио",
      description: "Открытые модели для работы с голосом: разделение спикеров, очистка от шума, определение голоса и эмоций. Для колл-центров, встреч и медиа.",
      intro: "Эти модели определяют, кто и когда говорил на записи, очищают звук от шума, отделяют голос от музыки и распознают говорящего. Это важная часть аналитики звонков и расшифровки встреч. Проверьте качество на ваших записях, скорость обработки и лицензию.",
      h1_en: "Open-source models for voice and audio analysis",
      title_en: "Voice and audio 2026: speaker diarization and cleanup",
      description_en: "Open models for voice work: speaker diarization, noise removal, speaker and emotion recognition. For call centers, meetings and media production.",
      intro_en: "These models identify who spoke when in a recording, clean up noise, separate voice from music and recognize speakers. They are a key part of call analytics and meeting transcription. Check quality on your own recordings, processing speed and the license."
    },
    agent: {
      slug: "agenty-dlya-kompyutera",
      h1: "Открытые ИИ-агенты для управления компьютером",
      title: "ИИ-агенты для компьютера и браузера 2026: открытые модели",
      description: "Открытые модели, которые управляют интерфейсом: кликают, заполняют формы, работают в браузере и программах. Для автоматизации рутины в офисе.",
      intro: "Агентные модели смотрят на экран и выполняют действия: кликают, заполняют формы, переходят по страницам и работают в программах. Так автоматизируют рутину там, где у системы нет удобного API. Оцените надёжность на ваших сценариях, требования к железу, лицензию и то, как ограничить доступ агента к важным данным.",
      h1_en: "Open-source AI agents for computer use",
      title_en: "Computer and browser AI agents 2026: open-source models",
      description_en: "Open models that operate interfaces: click, fill in forms, work in browsers and desktop apps. Automate routine office tasks where there is no API.",
      intro_en: "Agent models read the screen and take actions: click, fill in forms, navigate pages and operate applications. They automate routine work where a system has no convenient API. Evaluate reliability on your own scenarios, hardware needs, the license and how to limit the agent's access to sensitive data."
    },
    tabular: {
      slug: "tablichnye-dannye",
      h1: "Открытые модели для табличных данных",
      title: "ИИ для табличных данных 2026: открытые модели",
      description: "Открытые модели для работы с таблицами: классификация, прогнозы и поиск аномалий по данным из CRM, учёта и Excel. Лицензии и требования.",
      intro: "Модели для табличных данных предсказывают значения и классы по строкам из CRM, учётных систем и таблиц: отток клиентов, вероятность оплаты, аномальные операции. Часть из них даёт результат без долгой настройки под каждую задачу. Смотрите на допустимый размер таблицы, требования к железу и лицензию.",
      h1_en: "Open-source models for tabular data",
      title_en: "AI for tabular data 2026: open-source models",
      description_en: "Open models for tables: classification, predictions and anomaly detection on data from CRM, ERP and spreadsheets. Compare licenses and requirements.",
      intro_en: "Tabular models predict values and classes from rows in CRM, ERP and spreadsheets: customer churn, payment likelihood, unusual transactions. Some deliver results without lengthy tuning for each task. Look at the supported table size, hardware requirements and the license."
    },
    nlp: {
      slug: "razbor-teksta",
      h1: "Открытые модели для анализа и разбора текста",
      title: "Анализ текста 2026: классификация и извлечение сущностей",
      description: "Открытые модели для разбора текста: классификация обращений, анализ тональности, извлечение имён, дат и сумм. Лёгкие, быстрые и недорогие.",
      intro: "Эти модели классифицируют обращения, определяют тональность отзывов и извлекают из текста имена, адреса, даты и суммы. Они легче больших языковых моделей и быстро работают на обычном сервере. Проверьте поддержку русского, возможность дообучить модель на своих примерах и лицензию.",
      h1_en: "Open-source models for text analysis",
      title_en: "Text analysis 2026: classification and entity extraction",
      description_en: "Open models for text analysis: ticket classification, sentiment analysis, extracting names, dates and amounts. Lightweight, fast and affordable.",
      intro_en: "These models classify requests, detect sentiment in reviews and extract names, addresses, dates and amounts from text. They are lighter than large language models and run fast on an ordinary server. Check support for your languages, whether you can fine-tune on your own examples, and the license."
    },
    medical: {
      slug: "meditsina",
      h1: "Открытые медицинские ИИ-модели",
      title: "Медицинские нейросети 2026: открытые модели",
      description: "Открытые модели для медицины: разбор снимков, медицинские тексты, помощь врачу и клинике. Лицензии, ограничения и требования к железу.",
      intro: "Медицинские модели помогают разбирать снимки, медицинские тексты и выписки, отвечать на вопросы по клиническим материалам. Это инструмент поддержки врача и администраторов клиники, а не замена диагноза. Обязательно проверьте лицензию, условия применения в медицине, требования к хранению персональных данных и возможность развернуть модель у себя.",
      h1_en: "Open-source medical AI models",
      title_en: "Medical AI 2026: open-source models",
      description_en: "Open models for healthcare: medical imaging, clinical text, support for doctors and clinics. Compare licenses, limitations and hardware needs.",
      intro_en: "Medical models help analyze images, clinical notes and discharge summaries and answer questions over clinical materials. They support doctors and clinic staff and do not replace a diagnosis. Always check the license, terms for medical use, data protection requirements and whether the model can be deployed on-premises."
    },
    reasoning: {
      slug: "matematika-i-rassuzhdeniya",
      h1: "Открытые модели для математики и рассуждений",
      title: "Рассуждающие модели 2026: математика и логика",
      description: "Открытые модели, которые рассуждают по шагам: математика, расчёты, логические задачи и сложный анализ. Лицензии, размеры и требования к железу.",
      intro: "Рассуждающие модели решают задачу по шагам: считают, проверяют промежуточные выводы и справляются со сложной логикой лучше обычных чат-моделей. Их используют для расчётов, аналитики и задач, где важна точность. Учитывайте, что такие ответы дольше и дороже по ресурсам, и проверьте лицензию.",
      h1_en: "Open-source models for math and reasoning",
      title_en: "Reasoning models 2026: math and logic",
      description_en: "Open models that reason step by step: math, calculations, logic problems and complex analysis. Compare licenses, sizes and hardware requirements.",
      intro_en: "Reasoning models solve problems step by step: they calculate, check intermediate conclusions and handle complex logic better than ordinary chat models. They suit calculations, analytics and tasks where accuracy matters. Keep in mind these answers take longer and use more compute, and check the license."
    },
    rerank: {
      slug: "rerankery",
      h1: "Открытые реранкеры для поиска и RAG",
      title: "Реранкеры для поиска и RAG 2026: открытые модели",
      description: "Открытые модели-реранкеры, которые сортируют результаты поиска по смыслу и повышают точность RAG-ассистентов. Языки, скорость и лицензии.",
      intro: "Реранкер берёт найденные поиском документы и заново сортирует их по тому, насколько они отвечают на вопрос. Это заметно повышает точность ассистента, который отвечает по базе знаний. Смотрите на качество на русском, скорость на вашем объёме документов и условия лицензии.",
      h1_en: "Open-source rerankers for search and RAG",
      title_en: "Rerankers for search and RAG 2026: open-source models",
      description_en: "Open reranker models that sort search results by relevance and make RAG assistants more accurate. Compare language support, speed and licenses.",
      intro_en: "A reranker takes documents found by search and reorders them by how well they answer the question. This noticeably improves the accuracy of an assistant that answers from a knowledge base. Check quality in your languages, speed at your document volume and the license terms."
    },
    docsearch: {
      slug: "poisk-po-skanam",
      h1: "Открытые модели для поиска по сканам документов",
      title: "Поиск по сканам и PDF 2026: открытые модели",
      description: "Открытые модели для поиска по страницам документов как по картинкам: сканы, PDF с таблицами и схемами без предварительного OCR. Лицензии и железо.",
      intro: "Такие модели ищут по страницам документов как по изображениям, учитывая таблицы, схемы и разметку, и не требуют сначала распознавать текст. Это удобно для архивов сканов, технической документации и презентаций. Проверьте качество на русских документах, объём индекса и требования к видеокарте.",
      h1_en: "Open-source models for searching scanned documents",
      title_en: "Search over scans and PDFs 2026: open-source models",
      description_en: "Open models that search document pages as images: scans and PDFs with tables and diagrams, no OCR step required. Compare licenses and hardware.",
      intro_en: "These models search document pages as images, taking tables, diagrams and layout into account without an OCR step first. They suit archives of scans, technical documentation and slide decks. Check quality on documents in your languages, index size and GPU requirements."
    },
    sql: {
      slug: "tekst-v-sql",
      h1: "Открытые модели для перевода запросов в SQL",
      title: "Текст в SQL 2026: открытые модели для аналитики",
      description: "Открытые модели, которые превращают вопрос обычными словами в SQL-запрос к базе данных. Аналитика без программиста: как выбрать и внедрить.",
      intro: "Эти модели превращают вопрос обычными словами в SQL-запрос, чтобы руководитель мог получить цифры из базы без помощи аналитика. Качество сильно зависит от того, насколько понятно описана структура ваших таблиц. Смотрите на поддержку вашей СУБД, лицензию и продумайте доступ только на чтение.",
      h1_en: "Open-source text-to-SQL models",
      title_en: "Text-to-SQL 2026: open-source models for analytics",
      description_en: "Open models that turn a plain-language question into a SQL query against your database. Self-service analytics: how to choose and deploy one.",
      intro_en: "These models turn a plain-language question into a SQL query so managers can pull numbers from a database without an analyst. Quality depends heavily on how clearly your table structure is described. Check support for your database engine, the license, and plan for read-only access."
    },
    judge: {
      slug: "proverka-otvetov",
      h1: "Открытые модели для проверки фактов и оценки ответов ИИ",
      title: "Проверка ответов ИИ 2026: открытые модели-оценщики",
      description: "Открытые модели, которые проверяют ответы ИИ: поиск выдумок, сверка с источниками, оценка качества чат-бота. Для контроля ассистентов в бизнесе.",
      intro: "Модели-оценщики проверяют ответы других нейросетей: ищут выдуманные факты, сверяют ответ с источником и ставят оценку качества. Их используют для контроля чат-ботов и ассистентов перед запуском и в работе. Смотрите, по каким критериям модель оценивает, как работает на русском и что разрешает лицензия.",
      h1_en: "Open-source models for fact-checking and evaluating AI answers",
      title_en: "AI answer evaluation 2026: open-source judge models",
      description_en: "Open models that check AI output: spotting hallucinations, verifying against sources, scoring chatbot quality. For keeping business assistants in check.",
      intro_en: "Judge models check the output of other AI models: they spot fabricated facts, verify answers against sources and score quality. Teams use them to monitor chatbots and assistants before launch and in production. Check which criteria the model evaluates, how it performs in your languages and what the license permits."
    },
    face: {
      slug: "raspoznavanie-lits",
      h1: "Открытые модели для распознавания лиц",
      title: "Распознавание лиц 2026: открытые модели",
      description: "Открытые модели для работы с лицами: детекция, сравнение, проверка на живость, контроль доступа. Лицензии и требования закона к биометрии.",
      intro: "Модели для работы с лицами находят лица на фото и видео, сравнивают их между собой и проверяют, что перед камерой живой человек. Их применяют в контроле доступа и учёте посещений. Помимо лицензии и точности, учитывайте требования закона к обработке биометрических данных в вашей стране.",
      h1_en: "Open-source face recognition models",
      title_en: "Face recognition 2026: open-source models",
      description_en: "Open models for face tasks: detection, matching, liveness checks, access control. Compare licenses and consider legal requirements for biometrics.",
      intro_en: "Face models detect faces in photos and video, compare them and check that a live person is in front of the camera. They are used for access control and attendance tracking. Beyond license and accuracy, consider the legal requirements for processing biometric data in your jurisdiction."
    },
    finance: {
      slug: "finansy",
      h1: "Открытые ИИ-модели для финансов",
      title: "Финансовые нейросети 2026: открытые модели",
      description: "Открытые модели для финансовых задач: разбор отчётов и новостей, анализ операций, помощь аналитику. Лицензии, языки и требования к железу.",
      intro: "Финансовые модели разбирают отчётность, новости и документы, помогают аналитику находить нужные показатели и объяснять их. Запуск у себя важен, когда данные клиентов и операций нельзя передавать наружу. Проверьте, на каких данных обучена модель, как она работает с русской терминологией и что разрешает лицензия.",
      h1_en: "Open-source AI models for finance",
      title_en: "Finance AI 2026: open-source models",
      description_en: "Open models for financial tasks: parsing reports and news, transaction analysis, analyst support. Compare licenses, languages and hardware needs.",
      intro_en: "Finance models parse reports, news and documents and help analysts find and explain key figures. On-premises deployment matters when client and transaction data must stay in-house. Check what data the model was trained on, how it handles financial terminology in your languages, and what the license allows."
    },
    cyber: {
      slug: "kiberbezopasnost",
      h1: "Открытые ИИ-модели для кибербезопасности",
      title: "Нейросети для кибербезопасности 2026: открытые модели",
      description: "Открытые модели для задач ИБ: анализ логов и уязвимостей, разбор инцидентов, проверка кода. Локальный запуск без передачи данных наружу.",
      intro: "Модели для кибербезопасности помогают разбирать логи и инциденты, искать уязвимости в коде и объяснять найденные угрозы. Для этой сферы особенно важно, что модель работает внутри периметра и данные не уходят наружу. Смотрите на специализацию модели, требования к железу и условия лицензии.",
      h1_en: "Open-source AI models for cybersecurity",
      title_en: "Cybersecurity AI 2026: open-source models",
      description_en: "Open models for security teams: log and vulnerability analysis, incident triage, code review. Run locally without sending data outside your network.",
      intro_en: "Security models help analyze logs and incidents, find vulnerabilities in code and explain detected threats. In this field it is especially important that the model runs inside your perimeter and data stays in-house. Look at the model's specialization, hardware requirements and license terms."
    },
    weather: {
      slug: "pogoda-i-klimat",
      h1: "Открытые модели для прогноза погоды и климата",
      title: "Прогноз погоды нейросетью 2026: открытые модели",
      description: "Открытые модели для прогноза погоды и климата: для агро, логистики, энергетики и планирования. Данные на входе, лицензии и требования к железу.",
      intro: "Погодные модели строят прогнозы по метеоданным и помогают планировать работу в агробизнесе, логистике, энергетике и строительстве. Как правило, им нужны специальные входные данные и заметные вычислительные ресурсы. Проверьте, какие данные требуются, для какого региона и горизонта модель даёт прогноз и что разрешает лицензия.",
      h1_en: "Open-source weather and climate models",
      title_en: "AI weather forecasting 2026: open-source models",
      description_en: "Open models for weather and climate forecasting: for agriculture, logistics, energy and planning. Input data, license terms and hardware needs.",
      intro_en: "Weather models produce forecasts from meteorological data and help plan work in agriculture, logistics, energy and construction. They usually need specialized input data and significant compute. Check which data is required, which region and horizon the model covers, and what the license allows."
    },
    geo: {
      slug: "sputnikovye-snimki",
      h1: "Открытые модели для спутниковых снимков и геоданных",
      title: "Анализ спутниковых снимков 2026: открытые модели",
      description: "Открытые модели для спутниковых и аэроснимков: поля, застройка, изменения местности, мониторинг объектов. Лицензии и требования к данным.",
      intro: "Геомодели разбирают спутниковые снимки и аэрофотосъёмку: размечают поля и застройку, отслеживают изменения местности и состояние объектов. Их используют в агро, недвижимости, строительстве и мониторинге территорий. Смотрите, с какими снимками и разрешением работает модель, можно ли её дообучить и что разрешает лицензия.",
      h1_en: "Open-source models for satellite imagery and geodata",
      title_en: "Satellite imagery analysis 2026: open-source models",
      description_en: "Open models for satellite and aerial imagery: fields, buildings, land change and asset monitoring. Compare licenses and input data requirements.",
      intro_en: "Geospatial models analyze satellite and aerial imagery: they map fields and buildings, track land changes and monitor assets. They are used in agriculture, real estate, construction and territory monitoring. Check which imagery and resolution the model supports, whether it can be fine-tuned and what the license allows."
    },
    bio: {
      slug: "biologiya-i-khimiya",
      h1: "Открытые модели для биологии и химии",
      title: "ИИ для биологии и химии 2026: открытые модели",
      description: "Открытые модели для науки о жизни: белки, молекулы, геномика, поиск лекарств. Для лабораторий, биотеха и исследовательских команд.",
      intro: "Эти модели работают с белками, молекулами и геномными данными: предсказывают структуры, свойства веществ и помогают в поиске лекарств. Это инструмент для лабораторий, биотех-компаний и исследовательских команд. Проверьте лицензию, ведь у части моделей коммерческое использование ограничено, а также требования к железу и формат входных данных.",
      h1_en: "Open-source models for biology and chemistry",
      title_en: "AI for biology and chemistry 2026: open-source models",
      description_en: "Open models for life sciences: proteins, molecules, genomics and drug discovery. For labs, biotech companies and research teams of any size.",
      intro_en: "These models work with proteins, molecules and genomic data: they predict structures and properties of compounds and support drug discovery. They are tools for labs, biotech companies and research teams. Check the license, since some models restrict commercial use, as well as hardware needs and input data formats."
    },
    driving: {
      slug: "avtonomnoe-vozhdenie",
      h1: "Открытые модели для автономного вождения",
      title: "ИИ для автономного вождения 2026: открытые модели",
      description: "Открытые модели для беспилотного транспорта: восприятие дороги, планирование движения, симуляция сцен. Лицензии, данные и требования к железу.",
      intro: "Модели для автономного вождения распознают дорожную обстановку, планируют движение и генерируют сцены для симуляции. Это направление для разработчиков беспилотного транспорта, складской техники и исследовательских команд. Смотрите на совместимость с вашими датчиками, требования к вычислениям и условия лицензии.",
      h1_en: "Open-source models for autonomous driving",
      title_en: "AI for autonomous driving 2026: open-source models",
      description_en: "Open models for self-driving vehicles: road perception, motion planning and scene simulation. Compare licenses, data needs and hardware requirements.",
      intro_en: "Autonomous driving models perceive the road, plan motion and generate scenes for simulation. This field serves developers of self-driving vehicles, warehouse machinery and research teams. Check compatibility with your sensors, compute requirements and the license terms."
    }
  },

  industry: {
    retail: {
      slug: "torgovlya-i-marketpleysy",
      h1: "Нейросети для торговли и маркетплейсов",
      title: "Нейросети для торговли и маркетплейсов 2026: открытые модели",
      description: "Открытые ИИ-модели для ритейла и селлеров: карточки товаров, фото, ответы покупателям, прогноз спроса. Лицензии, русский язык и железо.",
      intro: "Для торговли открытые модели пишут описания и карточки товаров, обрабатывают фото, отвечают покупателям и помогают прогнозировать спрос. Запуск на своём сервере даёт предсказуемые расходы при большом каталоге. При выборе смотрите на качество текстов на русском, разрешение на коммерческое использование и требования к железу.",
      h1_en: "AI models for retail and marketplaces",
      title_en: "AI for retail and marketplaces 2026: open-source models",
      description_en: "Open AI models for retailers and sellers: product listings, photos, customer replies, demand forecasting. Compare licenses, languages and hardware.",
      intro_en: "In retail, open models write product descriptions and listings, process photos, answer shoppers and help forecast demand. Self-hosting keeps costs predictable with a large catalog. When choosing, check text quality in your languages, permission for commercial use and hardware requirements."
    },
    support: {
      slug: "podderzhka-klientov",
      h1: "Нейросети для поддержки клиентов",
      title: "ИИ для поддержки клиентов 2026: открытые модели",
      description: "Открытые модели для службы поддержки: чат-боты, голосовые боты, поиск по базе знаний, разбор обращений. Как выбрать под русский язык и лицензию.",
      intro: "В поддержке открытые модели отвечают на типовые вопросы, ищут ответ в базе знаний, распределяют обращения и расшифровывают звонки. Своя модель позволяет держать переписку с клиентами внутри компании. Проверьте качество диалога на русском, умение опираться на ваши документы и условия лицензии.",
      h1_en: "AI models for customer support",
      title_en: "AI for customer support 2026: open-source models",
      description_en: "Open models for support teams: chatbots, voice bots, knowledge base search and ticket triage. How to choose by language support and license terms.",
      intro_en: "In customer support, open models answer common questions, search the knowledge base, route tickets and transcribe calls. A self-hosted model keeps customer conversations inside the company. Check dialogue quality in your languages, the ability to ground answers in your documents, and the license terms."
    },
    docs: {
      slug: "dokumenty-i-bukhgalteriya",
      h1: "Нейросети для документов и бухгалтерии",
      title: "ИИ для документов и бухгалтерии 2026: открытые модели",
      description: "Открытые модели для документооборота: распознавание сканов, извлечение реквизитов и сумм, поиск по архиву. Локально, без передачи данных наружу.",
      intro: "В документообороте и бухгалтерии открытые модели распознают сканы, извлекают реквизиты, даты и суммы, сверяют документы и ищут по архиву. Работа на своём сервере важна, когда финансовые данные нельзя отправлять во внешние сервисы. Смотрите на поддержку кириллицы и таблиц, точность на ваших документах и лицензию.",
      h1_en: "AI models for documents and accounting",
      title_en: "AI for documents and accounting 2026: open-source models",
      description_en: "Open models for document workflows: scan recognition, extracting details and amounts, archive search. Run locally without sending data outside.",
      intro_en: "In document workflows and accounting, open models read scans, extract company details, dates and amounts, reconcile documents and search archives. Running on your own server matters when financial data cannot go to external services. Check support for your scripts and tables, accuracy on your documents and the license."
    },
    legal: {
      slug: "dlya-yuristov",
      h1: "Нейросети для юристов",
      title: "ИИ для юристов 2026: открытые модели",
      description: "Открытые модели для юридической работы: анализ договоров, поиск по практике, выжимки из документов. Конфиденциальность, русский язык, лицензии.",
      intro: "Юристам открытые модели помогают разбирать договоры, находить рискованные условия, делать выжимки и искать по внутренней базе документов. Локальный запуск снимает вопрос о передаче конфиденциальных материалов третьим лицам. Проверьте качество работы с юридическим языком на русском, длину контекста и условия лицензии.",
      h1_en: "AI models for legal professionals",
      title_en: "AI for lawyers 2026: open-source models",
      description_en: "Open models for legal work: contract review, case research and document summaries. Keep materials confidential; compare languages and licenses.",
      intro_en: "For lawyers, open models help review contracts, flag risky clauses, summarize documents and search internal document bases. Local deployment removes the question of sharing confidential materials with third parties. Check how well the model handles legal language in your jurisdiction, context length and the license terms."
    },
    medical: {
      slug: "meditsina",
      h1: "Нейросети для медицины и клиник",
      title: "ИИ для медицины и клиник 2026: открытые модели",
      description: "Открытые модели для клиник: медицинские тексты, снимки, расшифровка приёмов, запись пациентов. Персональные данные, лицензии и ограничения.",
      intro: "Клиникам открытые модели помогают с медицинскими текстами и снимками, расшифровкой приёма, записью пациентов и ответами на типовые вопросы. Модели служат поддержкой врача и администраторов, а не заменой диагноза. Обязательно учитывайте требования к хранению медицинских данных, лицензию и возможность развернуть модель у себя.",
      h1_en: "AI models for healthcare and clinics",
      title_en: "AI for healthcare and clinics 2026: open-source models",
      description_en: "Open models for clinics: clinical text, medical imaging, visit transcription and patient scheduling. Compare data protection needs and licenses.",
      intro_en: "For clinics, open models help with clinical text and imaging, visit transcription, patient scheduling and common patient questions. They support doctors and staff and do not replace a diagnosis. Always account for health data protection requirements, the license and whether the model can be deployed on-premises."
    },
    education: {
      slug: "obrazovanie",
      h1: "Нейросети для образования",
      title: "ИИ для образования и онлайн-школ 2026: открытые модели",
      description: "Открытые модели для онлайн-школ и обучения: проверка заданий, ассистент ученика, озвучка и перевод курсов. Русский язык, лицензии и железо.",
      intro: "В образовании открытые модели проверяют задания, отвечают ученикам по материалам курса, озвучивают и переводят уроки, помогают готовить контент. Своя модель позволяет контролировать, чему и как отвечает ассистент. Смотрите на качество на русском, возможность опираться на ваши материалы и условия лицензии.",
      h1_en: "AI models for education",
      title_en: "AI for education and online schools 2026: open-source models",
      description_en: "Open models for online schools and training: assignment grading, student assistants, course voiceover and translation. Languages, licenses, hardware.",
      intro_en: "In education, open models grade assignments, answer students from course materials, voice and translate lessons and help produce content. A self-hosted model lets you control what the assistant says and how. Check quality in your languages, the ability to ground answers in your materials and the license terms."
    },
    marketing: {
      slug: "marketing-i-kontent",
      h1: "Нейросети для маркетинга и контента",
      title: "ИИ для маркетинга и контента 2026: открытые модели",
      description: "Открытые модели для маркетинга: тексты, картинки, видео и озвучка для рекламы и соцсетей. Какие лицензии разрешают коммерцию и что нужно по железу.",
      intro: "Маркетологам открытые модели пишут тексты, создают картинки, видео и озвучку для рекламы и соцсетей, помогают анализировать отзывы. Своя модель даёт единый стиль и предсказуемые расходы при большом объёме контента. Главное при выборе: лицензия на коммерческое использование результатов и качество на русском.",
      h1_en: "AI models for marketing and content",
      title_en: "AI for marketing and content 2026: open-source models",
      description_en: "Open models for marketing: copy, images, video and voiceover for ads and social media. Which licenses allow commercial use and what hardware you need.",
      intro_en: "For marketers, open models write copy, create images, video and voiceovers for ads and social media, and help analyze reviews. A self-hosted model gives a consistent style and predictable costs at high content volume. The key checks are a license that allows commercial use of outputs and quality in your target languages."
    },
    media: {
      slug: "media-i-prodakshn",
      h1: "Нейросети для медиа и продакшна",
      title: "ИИ для медиа и видеопродакшна 2026: открытые модели",
      description: "Открытые модели для медиа: генерация видео и звука, субтитры, озвучка, перевод и обработка кадров. Лицензии на коммерцию и требования к железу.",
      intro: "Для медиа и продакшна открытые модели генерируют видео, музыку и звук, делают субтитры, озвучку и перевод, обрабатывают кадры. Своя инфраструктура снимает ограничения облачных сервисов по объёму и срокам. Внимательно проверьте лицензию на коммерческое использование и требования к видеокартам.",
      h1_en: "AI models for media and production",
      title_en: "AI for media and video production 2026: open-source models",
      description_en: "Open models for media: video and sound generation, subtitles, voiceover, translation and frame processing. Commercial licenses and hardware needs.",
      intro_en: "For media and production, open models generate video, music and sound, produce subtitles, voiceovers and translations, and process footage. Your own infrastructure removes cloud service limits on volume and turnaround. Check the commercial license terms and GPU requirements carefully."
    },
    hr: {
      slug: "hr",
      h1: "Нейросети для HR и подбора персонала",
      title: "ИИ для HR и подбора персонала 2026: открытые модели",
      description: "Открытые модели для HR: разбор резюме, поиск кандидатов, ответы сотрудникам, обучение и адаптация. Персональные данные, русский язык и лицензии.",
      intro: "В HR открытые модели разбирают резюме, подбирают кандидатов под вакансию, отвечают сотрудникам на вопросы по внутренним правилам и помогают с обучением. Работа на своём сервере важна, потому что резюме и данные сотрудников относятся к персональным данным. Проверьте качество на русском, лицензию и следите, чтобы решения о людях оставались за человеком.",
      h1_en: "AI models for HR and recruiting",
      title_en: "AI for HR and recruiting 2026: open-source models",
      description_en: "Open models for HR: resume screening, candidate search, employee Q&A, training and onboarding. Compare data protection needs, languages and licenses.",
      intro_en: "In HR, open models parse resumes, match candidates to roles, answer employee questions about internal policies and support training. Self-hosting matters because resumes and employee records are personal data. Check quality in your languages and the license, and keep decisions about people with a human."
    },
    manufacturing: {
      slug: "proizvodstvo-i-sklad",
      h1: "Нейросети для производства и склада",
      title: "ИИ для производства и склада 2026: открытые модели",
      description: "Открытые модели для производства и логистики: контроль качества по камерам, подсчёт товаров, прогноз запасов, роботы. Лицензии и требования.",
      intro: "На производстве и складе открытые модели проверяют качество продукции по камерам, считают товары, прогнозируют запасы и управляют роботами. Многие из них работают на недорогом железе прямо у линии. Смотрите на скорость, возможность дообучить модель на своих данных и условия лицензии.",
      h1_en: "AI models for manufacturing and warehousing",
      title_en: "AI for manufacturing and warehouses 2026: open-source models",
      description_en: "Open models for manufacturing and logistics: camera-based quality control, item counting, inventory forecasting, robotics. Licenses and requirements.",
      intro_en: "In manufacturing and warehousing, open models inspect product quality via cameras, count items, forecast inventory and control robots. Many run on inexpensive hardware right next to the line. Look at speed, whether you can fine-tune on your own data, and the license terms."
    },
    finance: {
      slug: "finansy",
      h1: "Нейросети для финансов и банков",
      title: "ИИ для финансов и банков 2026: открытые модели",
      description: "Открытые модели для финансовых компаний: анализ отчётов, операций и рисков, поддержка клиентов, работа с документами. Локально и безопасно.",
      intro: "Финансовым компаниям открытые модели помогают разбирать отчётность и документы, анализировать операции и риски, отвечать клиентам. Запуск внутри контура важен, когда данные клиентов нельзя передавать сторонним сервисам. Проверьте работу с финансовой терминологией на русском, требования регулятора и лицензию.",
      h1_en: "AI models for finance and banking",
      title_en: "AI for finance and banking 2026: open-source models",
      description_en: "Open models for financial firms: report, transaction and risk analysis, customer support and document processing. Deploy locally and securely.",
      intro_en: "For financial firms, open models help parse reports and documents, analyze transactions and risk, and answer customers. Deployment inside your perimeter matters when client data cannot go to third-party services. Check how the model handles financial terminology in your languages, regulatory requirements and the license."
    },
    dev: {
      slug: "razrabotka-po",
      h1: "Нейросети для разработки ПО",
      title: "ИИ для разработки ПО 2026: открытые модели",
      description: "Открытые модели для команд разработки: генерация и ревью кода, тесты, документация, агенты. Код остаётся внутри компании. Лицензии и железо.",
      intro: "Командам разработки открытые модели помогают писать и проверять код, генерировать тесты и документацию, искать по кодовой базе и автоматизировать рутину агентами. Локальный запуск позволяет не отправлять исходники во внешние сервисы. Смотрите на поддержку ваших языков и фреймворков, длину контекста, лицензию и требования к видеокарте.",
      h1_en: "AI models for software development",
      title_en: "AI for software development 2026: open-source models",
      description_en: "Open models for dev teams: code generation and review, tests, documentation and agents. Your code stays in-house. Compare licenses and hardware.",
      intro_en: "For development teams, open models help write and review code, generate tests and documentation, search the codebase and automate routine work with agents. Local deployment keeps source code away from external services. Check support for your languages and frameworks, context length, the license and GPU requirements."
    },
    security: {
      slug: "bezopasnost",
      h1: "Нейросети для безопасности",
      title: "ИИ для безопасности 2026: открытые модели",
      description: "Открытые модели для безопасности: видеонаблюдение, контроль доступа, анализ логов и угроз, модерация контента. Лицензии и требования к железу.",
      intro: "В безопасности открытые модели анализируют видео с камер, помогают с контролем доступа, разбирают логи и инциденты, фильтруют опасный контент. Работа внутри своего контура здесь особенно важна. Проверьте точность на ваших данных, скорость, требования закона к обработке биометрии и условия лицензии.",
      h1_en: "AI models for security",
      title_en: "AI for security 2026: open-source models",
      description_en: "Open models for security: video surveillance, access control, log and threat analysis, content moderation. Compare licenses and hardware needs.",
      intro_en: "In security, open models analyze camera footage, support access control, triage logs and incidents and filter harmful content. Running inside your own perimeter is especially important here. Check accuracy on your data, speed, legal requirements for biometric processing and the license terms."
    },
    science: {
      slug: "nauka",
      h1: "Нейросети для науки и исследований",
      title: "ИИ для науки и исследований 2026: открытые модели",
      description: "Открытые модели для исследовательских задач: биология, химия, климат, математика, анализ данных и статей. Лицензии и требования к вычислениям.",
      intro: "Исследователям открытые модели помогают работать с белками и молекулами, климатическими и геоданными, математикой и научными статьями. Открытые веса позволяют воспроизводить результаты и дообучать модели под свою задачу. Смотрите на лицензию, ведь у части моделей есть ограничения для коммерции, и на требования к вычислениям.",
      h1_en: "AI models for science and research",
      title_en: "AI for science and research 2026: open-source models",
      description_en: "Open models for research: biology, chemistry, climate, mathematics, data and literature analysis. Compare licenses and compute requirements.",
      intro_en: "For researchers, open models help with proteins and molecules, climate and geospatial data, mathematics and scientific literature. Open weights make results reproducible and allow fine-tuning for your task. Check the license, since some models restrict commercial use, and the compute requirements."
    },
    gov: {
      slug: "gossektor",
      h1: "Нейросети для госсектора",
      title: "ИИ для госсектора 2026: открытые модели",
      description: "Открытые модели для госорганов и учреждений: обращения граждан, документы, поиск по архивам, распознавание речи. Локальный запуск в своём контуре.",
      intro: "Госучреждениям открытые модели помогают разбирать обращения граждан, работать с документами и архивами, распознавать речь и отвечать на типовые вопросы. Возможность развернуть модель в своём контуре без передачи данных за рубеж здесь часто обязательна. Проверьте качество на русском, лицензию и страну разработчика.",
      h1_en: "AI models for the public sector",
      title_en: "AI for the public sector 2026: open-source models",
      description_en: "Open models for government bodies and agencies: citizen requests, documents, archive search, speech recognition. Deploy within your own perimeter.",
      intro_en: "For public sector bodies, open models help process citizen requests, work with documents and archives, recognize speech and answer common questions. Deploying within your own perimeter without sending data abroad is often mandatory. Check quality in your official languages, the license and the developer's country."
    }
  },

  special: {
    russian: {
      slug: "russkie",
      h1: "Открытые ИИ-модели с русским языком",
      title: "Открытые нейросети с русским языком 2026: каталог",
      description: "Открытые ИИ-модели, у которых заявлена поддержка русского: тексты, речь, документы, поиск. Российские и зарубежные, с лицензиями и требованиями.",
      intro: "Здесь собраны открытые модели, у которых разработчик заявил поддержку русского языка: для текстов, речи, документов и поиска. Это отправная точка для проектов, где клиенты и документы на русском. Заявленная поддержка не гарантирует качество, поэтому перед внедрением проверьте модель на своих примерах, а также лицензию и требования к железу.",
      h1_en: "Open-source AI models with Russian language support",
      title_en: "Open-source AI models with Russian language support 2026",
      description_en: "Open AI models with declared Russian language support: text, speech, documents, search. Russian and international models with licenses and requirements.",
      intro_en: "This collection lists open models whose developers declare Russian language support for text, speech, documents and search. It is a starting point for projects serving Russian-speaking customers or handling Russian documents. Declared support does not guarantee quality, so test the model on your own examples and check the license and hardware requirements."
    },
    commercial: {
      slug: "dlya-kommercii",
      h1: "Открытые ИИ-модели для коммерческого использования",
      title: "Открытые нейросети для коммерции 2026: лицензии без ограничений",
      description: "Открытые ИИ-модели, лицензия которых разрешает коммерческое использование: можно встроить в продукт и услуги. Как читать лицензии перед запуском.",
      intro: "В подборке модели, лицензия которых разрешает коммерческое использование: их можно встроить в свой продукт, сервис или внутренние процессы компании. Даже у таких лицензий бывают условия, например указание авторства или правила допустимого использования. Перед запуском прочитайте полный текст лицензии конкретной версии.",
      h1_en: "Open-source AI models for commercial use",
      title_en: "Open-source AI models for commercial use 2026",
      description_en: "Open AI models whose licenses allow commercial use: embed them in products and services. How to read the license terms before you launch.",
      intro_en: "This collection lists models whose licenses allow commercial use: you can build them into your product, service or internal processes. Even permissive licenses can carry conditions, such as attribution or acceptable use rules. Before launch, read the full license text for the specific version you deploy."
    },
    laptop: {
      slug: "dlya-noutbuka",
      h1: "ИИ-модели, которые работают на ноутбуке",
      title: "Нейросети для ноутбука 2026: открытые модели локально",
      description: "Открытые ИИ-модели, младшие версии которых запускаются на ноутбуке или обычном ПК с видеокартой до 8 ГБ. Локально, бесплатно, без облака.",
      intro: "Здесь модели, младшие версии которых запускаются на ноутбуке или обычном ПК с видеокартой до 8 ГБ памяти. Это удобный способ попробовать ИИ на своих данных без сервера и облака. Учитывайте, что компактные версии уступают флагманским по качеству, поэтому проверьте их на своих задачах и посмотрите лицензию.",
      h1_en: "AI models that run on a laptop",
      title_en: "AI models for laptops 2026: run open-source models locally",
      description_en: "Open AI models whose smaller versions run on a laptop or regular PC with up to 8 GB of GPU memory. Local, free to run, no cloud required.",
      intro_en: "These models have smaller versions that run on a laptop or regular PC with up to 8 GB of GPU memory. It is an easy way to try AI on your own data without a server or the cloud. Compact versions trail flagship ones in quality, so test them on your tasks and check the license."
    },
    ollama: {
      slug: "ollama",
      h1: "Модели, доступные в Ollama",
      title: "Модели Ollama 2026: открытые нейросети в один клик",
      description: "Открытые ИИ-модели из библиотеки Ollama: запуск одной командой на своём компьютере или сервере. Лицензии, русский язык и требования к железу.",
      intro: "В подборке модели, которые есть в библиотеке Ollama и запускаются одной командой на компьютере или сервере. Это самый простой путь попробовать локальный ИИ и подключить его к своим сервисам через API. Выбирайте размер версии под объём памяти и проверяйте лицензию модели, ведь Ollama её не меняет.",
      h1_en: "Models available in Ollama",
      title_en: "Ollama models 2026: open-source AI in one command",
      description_en: "Open AI models from the Ollama library: run with a single command on your computer or server. Compare licenses, languages and hardware needs.",
      intro_en: "This collection lists models available in the Ollama library that run with a single command on a computer or server. It is the simplest way to try local AI and connect it to your services through an API. Pick the version size to match your memory, and check the model's own license, since Ollama does not change it."
    },
    cpu: {
      slug: "bez-videokarty",
      h1: "ИИ-модели, которые работают без видеокарты",
      title: "Нейросети без видеокарты 2026: открытые модели на CPU",
      description: "Открытые ИИ-модели, которые запускаются на обычном процессоре без видеокарты: на офисном ПК или недорогом сервере. Лицензии и сценарии.",
      intro: "Здесь модели, которые работают на обычном процессоре без видеокарты: на офисном компьютере или недорогом сервере. Это снижает порог входа и расходы на инфраструктуру. Учитывайте, что на процессоре модели работают медленнее, поэтому оцените скорость на своих задачах и проверьте лицензию.",
      h1_en: "AI models that run without a GPU",
      title_en: "AI without a GPU 2026: open-source models on CPU",
      description_en: "Open AI models that run on a regular CPU without a graphics card: on an office PC or an inexpensive server. Compare licenses and use cases.",
      intro_en: "These models run on an ordinary CPU without a graphics card: on an office computer or an inexpensive server. That lowers the entry barrier and infrastructure costs. Models run slower on a CPU, so measure speed on your own tasks and check the license."
    }
  }
};
