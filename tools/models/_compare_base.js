// Страницы сравнения «X или Y» для энциклопедии открытых моделей.
// Все факты взяты из tools/models-data.js (summary, tasks, where, sizes, license,
// commercial, hardware, ru, ollama, cpu, versions, first, latest). Бенчмарков,
// скорости и качества сверх того, что есть в данных, здесь нет.
module.exports = [
  {
    a: "qwen", b: "gigachat", slug: "qwen-vs-gigachat",
    title: "Qwen или GigaChat: сравнение открытых LLM для бизнеса",
    h1: "Qwen или GigaChat: что выбрать для бизнеса",
    description: "Qwen и GigaChat: лицензии Apache 2.0 и MIT, размеры от 0,6B и от 10B, запуск в Ollama, отрасли и свежесть версий. Кому подойдёт какая модель.",
    verdict: "Обе модели понимают русский и запускаются от обычного компьютера до кластера. Qwen шире по размерам (от 0,6B до 2,4T-A95B) и есть в Ollama, но у старших Qwen3.8 своя лицензия, поэтому коммерция с условиями. GigaChat от Сбера целиком под MIT, заточен под русский язык и российские реалии, в каталоге отмечен для банков, госсектора и компаний с хранением данных в РФ; в Ollama его нет. GigaChat обновлялся позже (2026-09 против 2026-08) и имеет аудиоверсию для записей до двух часов.",
    choose_a: [
      "Нужна совсем маленькая модель: у Qwen есть версии от 0,6B, у GigaChat младшая 10B-A1.8B",
      "Хотите поставить модель одной командой через Ollama",
      "Задачи из e-commerce: описания товаров, разбор обращений, база знаний"
    ],
    choose_b: [
      "Важна простая лицензия: все версии GigaChat под MIT без оговорок",
      "Вы банк, госструктура или компания с требованием хранить данные в РФ",
      "Нужно работать со звуком: GigaChat3.1-Audio понимает записи до двух часов"
    ],
    title_en: "Qwen vs GigaChat: open LLMs compared for business",
    h1_en: "Qwen or GigaChat: which to choose for business",
    description_en: "Qwen vs GigaChat: Apache 2.0 vs MIT licensing, sizes from 0.6B and from 10B, Ollama support, target industries and release dates. Who should pick which.",
    verdict_en: "Both models handle Russian and scale from a regular computer to a multi-GPU cluster. Qwen covers a wider size range (0.6B to 2.4T-A95B) and ships in Ollama, but the larger Qwen3.8 models use their own license, so commercial use comes with conditions. GigaChat from Sber is fully MIT, built around the Russian language and local context, and the catalog lists it for banks, the public sector and companies that must keep data in Russia; it is not in Ollama. GigaChat was updated more recently (2026-09 vs 2026-08) and has an audio version that handles recordings up to two hours.",
    choose_a_en: [
      "You need a very small model: Qwen starts at 0.6B, GigaChat starts at 10B-A1.8B",
      "You want a one-command install through Ollama",
      "Your tasks are e-commerce: product descriptions, ticket triage, knowledge base answers"
    ],
    choose_b_en: [
      "You want a simple license: every GigaChat version is MIT",
      "You are a bank, a public body or a company required to keep data in Russia",
      "You need audio: GigaChat3.1-Audio understands recordings up to two hours long"
    ]
  },
  {
    a: "qwen", b: "llama", slug: "qwen-vs-llama",
    title: "Qwen или Llama: сравнение открытых языковых моделей",
    h1: "Qwen или Llama: что выбрать для бизнеса",
    description: "Qwen и Llama: русский язык, лицензии Apache 2.0 и Llama Community License, размеры до 2,4T и до 405B, даты выхода. Какую модель брать под задачу.",
    verdict: "Обе семьи есть в Ollama, запускаются без видеокарты в младших версиях и масштабируются до кластера. Qwen в каталоге отмечен с русским языком, Llama — нет. Qwen большей частью под Apache 2.0, Llama под Llama Community License; в обоих случаях коммерция с условиями. Последний релиз Llama в каталоге — Llama 4 (2025-04), у Qwen свежее — Qwen3.8 (2026-08); зато у Llama огромная экосистема дообученных версий и инструментов.",
    choose_a: [
      "Ассистент должен работать на русском языке",
      "Нужна свежая линейка: последние версии Qwen вышли в 2026 году",
      "Нужен выбор размеров от 0,6B до флагмана 2,4T-A95B"
    ],
    choose_b: [
      "Вы опираетесь на готовые дообученные версии и инструменты из экосистемы Llama",
      "Модель нужна как основа для дообучения под отрасль",
      "Работа идёт на английском, а нужны версии Vision для картинок"
    ],
    title_en: "Qwen vs Llama: open language models compared",
    h1_en: "Qwen or Llama: which to choose for business",
    description_en: "Qwen vs Llama: Russian support, Apache 2.0 vs Llama Community License, sizes up to 2.4T and 405B, release dates. Which open model fits which job.",
    verdict_en: "Both families are in Ollama, run on a CPU in their smaller sizes and scale to a cluster. The catalog marks Qwen as supporting Russian and Llama as not. Qwen is mostly Apache 2.0, Llama uses the Llama Community License; in both cases commercial use has conditions. The latest Llama in the catalog is Llama 4 (2025-04), Qwen is newer with Qwen3.8 (2026-08), while Llama has a very large ecosystem of fine-tunes and tools.",
    choose_a_en: [
      "Your assistant has to work in Russian",
      "You want a current line-up: the newest Qwen versions shipped in 2026",
      "You need a size range from 0.6B up to the 2.4T-A95B flagship"
    ],
    choose_b_en: [
      "You rely on ready fine-tunes and tooling from the Llama ecosystem",
      "You need a base model to fine-tune for your industry",
      "You work in English and need the Vision versions for images"
    ]
  },
  {
    a: "gigachat", b: "yandexgpt", slug: "gigachat-vs-yandexgpt",
    title: "GigaChat или YandexGPT: российские открытые LLM",
    h1: "GigaChat или YandexGPT: что выбрать для бизнеса",
    description: "GigaChat и YandexGPT / AliceAI: лицензии MIT и Apache 2.0, размеры до 702B и до 100B, запуск на процессоре, задачи и отрасли. Сравнение по каталогу.",
    verdict: "Обе линейки российские, обучены с упором на русский язык и подходят компаниям с требованием хранить данные в РФ. GigaChat целиком под MIT, размеры от 10B-A1.8B до 702B-A36B, младшую версию можно запускать на процессоре. У Яндекса лицензии разные: YaLM-100B и AliceAI под Apache 2.0, а YandexGPT-5-Lite — по собственному соглашению Яндекса; размеры от 8B до 100B, запуск на процессоре в каталоге не отмечен. Новые AliceAI-модели базовые, их дообучают под свои задачи; у GigaChat есть готовые чат-версии, рассуждающая и аудиоверсия.",
    choose_a: [
      "Нужна одна лицензия MIT на всю линейку",
      "Нет видеокарты: GigaChat отмечен как работающий на процессоре",
      "Нужны готовый ассистент, рассуждающая версия или разбор аудиозаписей"
    ],
    choose_b: [
      "Вы хотите дообучить базовую модель под свою отрасль (AliceAI-Foundation, AliceAI-T5)",
      "Подходит лицензия Apache 2.0 у моделей AliceAI",
      "Задачи из ритейла, сервисов и медиа, где каталог отмечает YandexGPT"
    ],
    title_en: "GigaChat vs YandexGPT: Russian open LLMs compared",
    h1_en: "GigaChat or YandexGPT: which to choose for business",
    description_en: "GigaChat vs YandexGPT / AliceAI: MIT vs Apache 2.0 licensing, sizes up to 702B and 100B, CPU support, tasks and industries, compared from catalog data.",
    verdict_en: "Both lines come from Russian companies, are trained with a focus on Russian and suit businesses that must keep data in Russia. GigaChat is fully MIT, ranges from 10B-A1.8B to 702B-A36B, and its small version runs on a CPU. Yandex licenses vary: YaLM-100B and AliceAI are Apache 2.0, while YandexGPT-5-Lite uses Yandex's own agreement; sizes run from 8B to 100B and CPU use is not marked in the catalog. The new AliceAI models are base models meant for fine-tuning, while GigaChat offers ready chat, reasoning and audio versions.",
    choose_a_en: [
      "You want a single MIT license across the whole line",
      "You have no GPU: GigaChat is marked as able to run on a CPU",
      "You need a ready assistant, a reasoning version or audio understanding"
    ],
    choose_b_en: [
      "You plan to fine-tune a base model for your industry (AliceAI-Foundation, AliceAI-T5)",
      "Apache 2.0 on the AliceAI models suits you",
      "Your work is in retail, services or media, where the catalog lists YandexGPT"
    ]
  },
  {
    a: "deepseek", b: "qwen", slug: "deepseek-vs-qwen",
    title: "DeepSeek или Qwen: сравнение открытых LLM для компании",
    h1: "DeepSeek или Qwen: что выбрать для бизнеса",
    description: "DeepSeek и Qwen: лицензия MIT против Apache 2.0, русский язык, контекст до 1 млн токенов, Ollama и запуск на процессоре. Какую модель ставить на свой сервер.",
    verdict: "Обе линейки есть в Ollama и доходят до размеров, которым нужен кластер. DeepSeek идёт под MIT (кроме V2 и ранних версий), коммерция разрешена, контекст до 1 млн токенов, в каталоге отмечен для агентов с инструментами, длинных договоров и помощи программистам; запуск на процессоре не отмечен, а поддержка русского в карточке не подтверждена. Qwen отмечен с русским языком, есть совсем маленькие версии от 0,6B, работающие на процессоре, но у старших Qwen3.8 своя лицензия. Самый свежий релиз у DeepSeek — V4.1-Flash (2026-09), у Qwen — Qwen3.8 (2026-08).",
    choose_a: [
      "Нужно разбирать очень длинные документы: контекст до 1 млн токенов",
      "Строите агентов, которые работают с инструментами и API",
      "Нужна лицензия MIT на актуальные версии и разрешённая коммерция"
    ],
    choose_b: [
      "Русский язык подтверждён и критичен для задачи",
      "Модель должна работать на слабом железе или без видеокарты",
      "Задачи из e-commerce и поддержки: описания товаров, ответы на обращения"
    ],
    title_en: "DeepSeek vs Qwen: open LLMs compared for companies",
    h1_en: "DeepSeek or Qwen: which to choose for business",
    description_en: "DeepSeek vs Qwen: MIT vs Apache 2.0, Russian support, context up to 1M tokens, Ollama and CPU support. Which model to run on your own server.",
    verdict_en: "Both lines are in Ollama and reach sizes that need a cluster. DeepSeek is MIT (except V2 and earlier), allows commercial use, offers context up to 1M tokens and is listed for tool-using agents, long contracts and coding help; CPU use is not marked and Russian support is not confirmed in its card. Qwen is marked as supporting Russian and has very small versions from 0.6B that run on a CPU, but the larger Qwen3.8 models carry their own license. The newest DeepSeek release is V4.1-Flash (2026-09), the newest Qwen is Qwen3.8 (2026-08).",
    choose_a_en: [
      "You process very long documents: context goes up to 1M tokens",
      "You build agents that work with tools and APIs",
      "You want MIT on current versions with commercial use allowed"
    ],
    choose_b_en: [
      "Confirmed Russian support is critical for the task",
      "The model must run on modest hardware or without a GPU",
      "Your tasks are e-commerce and support: product copy, replies to requests"
    ]
  },
  {
    a: "gemma", b: "llama", slug: "gemma-vs-llama",
    title: "Gemma или Llama: компактные открытые модели для бизнеса",
    h1: "Gemma или Llama: что выбрать для бизнеса",
    description: "Gemma и Llama: размеры от 270M и от 1B, лицензии Apache 2.0 и Llama Community License, работа на ноутбуке, Ollama и даты выхода. Сравнение по каталогу.",
    verdict: "Обе семьи есть в Ollama и запускаются на процессоре. Gemma от Google компактнее (от 270M до 31B) и рассчитана на один компьютер или одну видеокарту; Gemma 4 под Apache 2.0, коммерция разрешена. Llama шире по размерам (от 1B до 405B, флагману нужен кластер), идёт под Llama Community License с условиями и славится огромной экосистемой дообученных версий. У Gemma последний релиз 2026-06, у Llama — 2025-04; русский язык в каталоге не подтверждён ни у одной из них.",
    choose_a: [
      "Модель должна работать на ноутбуке, слабом железе или мобильном устройстве",
      "Нужна лицензия Apache 2.0 (Gemma 4) для коммерции без условий",
      "Нужны узкие версии: FunctionGemma 270M для вызова функций, CodeGemma для кода"
    ],
    choose_b: [
      "Нужен флагман до 405B на серверах с несколькими видеокартами",
      "Вы используете готовые дообученные версии и инструменты экосистемы Llama",
      "Модель нужна как основа для дообучения под отрасль"
    ],
    title_en: "Gemma vs Llama: compact open models for business",
    h1_en: "Gemma or Llama: which to choose for business",
    description_en: "Gemma vs Llama: sizes from 270M and from 1B, Apache 2.0 vs Llama Community License, laptop use, Ollama and release dates, compared from catalog data.",
    verdict_en: "Both families are in Ollama and run on a CPU. Google's Gemma is more compact (270M to 31B) and targets a single computer or a single GPU; Gemma 4 is Apache 2.0 with commercial use allowed. Llama covers a wider range (1B to 405B, the flagship needs a cluster), uses the Llama Community License with conditions and is known for a very large ecosystem of fine-tunes. Gemma's latest release is 2026-06, Llama's is 2025-04; the catalog does not confirm Russian for either.",
    choose_a_en: [
      "The model has to run on a laptop, modest hardware or a mobile device",
      "You want Apache 2.0 (Gemma 4) for unconditional commercial use",
      "You need niche variants: FunctionGemma 270M for function calling, CodeGemma for code"
    ],
    choose_b_en: [
      "You need a flagship up to 405B on multi-GPU servers",
      "You use ready fine-tunes and tooling from the Llama ecosystem",
      "You need a base model to fine-tune for your industry"
    ]
  },
  {
    a: "mistral", b: "llama", slug: "mistral-vs-llama",
    title: "Mistral или Llama: сравнение открытых LLM",
    h1: "Mistral или Llama: что выбрать для бизнеса",
    description: "Mistral и Llama: русский язык, лицензии Apache 2.0 и Llama Community License, размеры до 675B и 405B, версии с картинками. Какая модель под какую задачу.",
    verdict: "Обе семьи есть в Ollama, младшие версии идут на процессоре, старшим нужен кластер. Mistral в каталоге отмечен с русским языком, большинство версий под Apache 2.0, но Mistral Medium 3.5 требует платного доступа для компаний с крупной выручкой. Llama русский в каталоге не отмечен, лицензия Llama Community License с условиями, зато самая большая экосистема дообученных версий. Mistral обновлялся позже (2026-07 против 2025-04) и имеет отдельные версии для картинок, доказательств в Lean и модерации.",
    choose_a: [
      "Нужна работа на русском и других языках, включая перевод",
      "Нужна модерация контента (Shieldstral) или понимание картинок (Pixtral)",
      "Европейский проект, где каталог отмечает Mistral"
    ],
    choose_b: [
      "Опора на экосистему дообученных версий и инструментов Llama",
      "Суммаризация встреч и документов на английском",
      "Модель нужна как основа для дообучения под отрасль"
    ],
    title_en: "Mistral vs Llama: open LLMs compared",
    h1_en: "Mistral or Llama: which to choose for business",
    description_en: "Mistral vs Llama: Russian support, Apache 2.0 vs Llama Community License, sizes up to 675B and 405B, image-capable versions. Which model fits which task.",
    verdict_en: "Both families are in Ollama; small versions run on a CPU and the largest need a cluster. The catalog marks Mistral as supporting Russian, and most versions are Apache 2.0, though Mistral Medium 3.5 requires paid access for high-revenue companies. Llama is not marked for Russian and uses the Llama Community License with conditions, but has the largest ecosystem of fine-tunes. Mistral was updated more recently (2026-07 vs 2025-04) and has dedicated versions for images, Lean proofs and moderation.",
    choose_a_en: [
      "You need Russian and other languages, including translation",
      "You need content moderation (Shieldstral) or image understanding (Pixtral)",
      "It is a European project, where the catalog lists Mistral"
    ],
    choose_b_en: [
      "You rely on the Llama ecosystem of fine-tunes and tools",
      "You summarize meetings and documents in English",
      "You need a base model to fine-tune for your industry"
    ]
  },
  {
    a: "whisper", b: "gigaam", slug: "whisper-vs-gigaam",
    title: "Whisper или GigaAM: распознавание русской речи",
    h1: "Whisper или GigaAM: что выбрать для бизнеса",
    description: "Whisper и GigaAM: 99 языков против русского и языков СНГ, лицензия MIT, размеры, работа на процессоре, эмоции и пунктуация. Что ставить для звонков.",
    verdict: "Обе модели под MIT, коммерция разрешена, обе работают на процессоре. Whisper распознаёт 99 языков, включая русский, в каталоге назван стандартом де-факто для расшифровки звонков и встреч, размеры от 39M до 1,5B. GigaAM от Сбера сделан под русскую речь, по описанию каталога одна из самых точных моделей для русского; размеры 220M–600M, хватает обычного компьютера, есть распознавание эмоций и многоязычная версия (русский, казахский, киргизский, узбекский). GigaAM обновлялся позже (2026-07 против 2025-03).",
    choose_a: [
      "Нужно расшифровывать записи на разных языках, не только на русском",
      "Нужны субтитры к видео для медиа и блогов",
      "Нужна самая маленькая модель: у Whisper есть версии от 39M"
    ],
    choose_b: [
      "Основной язык звонков русский, плюс казахский, киргизский или узбекский",
      "Нужно анализировать эмоции в разговоре",
      "Колл-центр, банк или госсектор, где каталог отмечает GigaAM"
    ],
    title_en: "Whisper vs GigaAM: speech recognition for Russian",
    h1_en: "Whisper or GigaAM: which to choose for business",
    description_en: "Whisper vs GigaAM: 99 languages vs Russian and CIS languages, MIT license, sizes, CPU support, emotion detection and punctuation. What to use for calls.",
    verdict_en: "Both models are MIT, allow commercial use and run on a CPU. Whisper recognizes 99 languages including Russian, is described in the catalog as the de facto standard for transcribing calls and meetings, and ranges from 39M to 1.5B. Sber's GigaAM is built for Russian speech, described in the catalog as one of the most accurate for Russian; it ranges from 220M to 600M, runs on a regular computer, detects emotions and has a multilingual version (Russian, Kazakh, Kyrgyz, Uzbek). GigaAM was updated more recently (2026-07 vs 2025-03).",
    choose_a_en: [
      "You transcribe recordings in many languages, not only Russian",
      "You need video subtitles for media and creators",
      "You need the smallest model: Whisper starts at 39M"
    ],
    choose_b_en: [
      "Your calls are mainly in Russian, or in Kazakh, Kyrgyz or Uzbek",
      "You need emotion analysis in conversations",
      "You are a call center, bank or public body, where the catalog lists GigaAM"
    ]
  },
  {
    a: "whisper", b: "parakeet", slug: "whisper-vs-parakeet",
    title: "Whisper или Parakeet: открытое распознавание речи",
    h1: "Whisper или Parakeet: что выбрать для бизнеса",
    description: "Whisper и NVIDIA Parakeet / Canary: языки, потоковое распознавание, лицензии MIT и CC-BY-4.0, размеры и даты выхода. Какую модель брать для звонков.",
    verdict: "Обе модели понимают русский, работают на процессоре и масштабируются до одной видеокарты. Whisper под MIT, коммерция разрешена, распознаёт 99 языков, размеры 39M–1,5B. Линейка NVIDIA включает потоковые модели для работы в реальном времени, размеры 110M–2,5B, русский есть в Parakeet TDT v3 и Nemotron 3.5 ASR; лицензии разные (CC-BY-4.0, NVIDIA Open Model License, OpenMDW), а Canary-1B первой версии некоммерческая. У NVIDIA последний релиз 2026-05, у Whisper — 2025-03.",
    choose_a: [
      "Нужна одна простая лицензия MIT на все версии",
      "Записи на многих языках: Whisper распознаёт 99",
      "Нужна минимальная модель от 39M"
    ],
    choose_b: [
      "Нужен голосовой ввод в реальном времени: есть потоковые версии",
      "Строите голосового бота, где важна потоковая расшифровка",
      "Нужна свежая линейка с релизами 2026 года"
    ],
    title_en: "Whisper vs Parakeet: open speech recognition compared",
    h1_en: "Whisper or Parakeet: which to choose for business",
    description_en: "Whisper vs NVIDIA Parakeet / Canary: languages, streaming recognition, MIT vs CC-BY-4.0 licensing, sizes and release dates. Which to use for calls.",
    verdict_en: "Both handle Russian, run on a CPU and scale to a single GPU. Whisper is MIT with commercial use allowed, recognizes 99 languages and ranges from 39M to 1.5B. The NVIDIA line includes streaming models for real-time use, ranges from 110M to 2.5B, and supports Russian in Parakeet TDT v3 and Nemotron 3.5 ASR; licenses vary (CC-BY-4.0, NVIDIA Open Model License, OpenMDW), and the first Canary-1B is non-commercial. NVIDIA's latest release is 2026-05, Whisper's is 2025-03.",
    choose_a_en: [
      "You want one simple MIT license across all versions",
      "Your recordings are in many languages: Whisper covers 99",
      "You need the smallest model, from 39M"
    ],
    choose_b_en: [
      "You need real-time voice input: streaming versions are available",
      "You are building a voice bot where streaming transcription matters",
      "You want a current line-up with 2026 releases"
    ]
  },
  {
    a: "silero", b: "piper", slug: "silero-vs-piper",
    title: "Silero или Piper: синтез русской речи на процессоре",
    h1: "Silero или Piper: что выбрать для бизнеса",
    description: "Silero TTS и Piper: русские голоса, языки народов России, лицензии CC BY-NC, MIT и GPL-3.0, работа на процессоре и Raspberry Pi. Что выбрать для бота.",
    verdict: "Обе модели лёгкие, работают на процессоре и говорят по-русски; у обеих коммерция с условиями. Silero сделан под русскую речь, в версии v5 добавлены языки СНГ и народов России (татарский, башкирский, якутский, казахский); основные модели под некоммерческой CC BY-NC, а базовые модели для языков СНГ — под MIT. Piper работает даже на Raspberry Pi, имеет готовые голоса на 35+ языках, среди них несколько русских; движок под MIT или GPL-3.0, а у каждого голоса своя лицензия. Silero обновлялся позже (2025-11 против 2025-03).",
    choose_a: [
      "Нужны голоса на языках народов России: татарском, башкирском, якутском",
      "Проект для госсектора, регионов или образования",
      "Основной язык озвучки русский"
    ],
    choose_b: [
      "Синтез должен работать на Raspberry Pi или в устройстве без интернета",
      "Нужны голоса на многих языках: у Piper их больше 35",
      "Умный дом, киоски, терминалы и голосовые меню"
    ],
    title_en: "Silero vs Piper: Russian text-to-speech on a CPU",
    h1_en: "Silero or Piper: which to choose for business",
    description_en: "Silero TTS vs Piper: Russian voices, languages of Russia, CC BY-NC, MIT and GPL-3.0 licensing, CPU and Raspberry Pi support. Which to pick for a voice bot.",
    verdict_en: "Both are lightweight, run on a CPU and speak Russian; both allow commercial use only with conditions. Silero is built for Russian and v5 added CIS languages and languages of Russia (Tatar, Bashkir, Yakut, Kazakh); the main models are non-commercial CC BY-NC, while the CIS base models are MIT. Piper runs even on a Raspberry Pi and ships ready voices in 35+ languages, including several Russian ones; the engine is MIT or GPL-3.0 and each voice has its own license. Silero was updated more recently (2025-11 vs 2025-03).",
    choose_a_en: [
      "You need voices in languages of Russia: Tatar, Bashkir, Yakut",
      "The project is for the public sector, regions or education",
      "Russian is your main voice-over language"
    ],
    choose_b_en: [
      "Speech synthesis must run on a Raspberry Pi or an offline device",
      "You need many languages: Piper has more than 35",
      "Smart home, kiosks, terminals and voice menus"
    ]
  },
  {
    a: "flux", b: "stable-diffusion", slug: "flux-vs-stable-diffusion",
    title: "FLUX или Stable Diffusion: генерация картинок",
    h1: "FLUX или Stable Diffusion: что выбрать для бизнеса",
    description: "FLUX и Stable Diffusion: текст на картинке, редактирование, лицензии Apache 2.0 и Community License, требования к видеокарте. Что выбрать для маркетинга.",
    verdict: "Обе модели подходят для баннеров, обложек и карточек товаров, у обеих коммерция с условиями. FLUX от авторов Stable Diffusion хорошо рисует текст на изображении и держит композицию, умеет редактировать фото по описанию (Kontext); нужна видеокарта, размеры 4B–32B; [schnell] и [klein] 4B под Apache 2.0, версии [dev] некоммерческие. Stable Diffusion работает даже на домашнем ПК (0,9B–8B), имеет огромную экосистему дообучений, стилей и плагинов; SD3 и SD3.5 бесплатны при выручке до $1 млн в год. FLUX свежее (2026-01 против 2024-10).",
    choose_a: [
      "На картинке нужен читаемый текст: заголовки, надписи на баннерах",
      "Нужно править фото по текстовому описанию (FLUX.1 Kontext)",
      "Нужна коммерция под Apache 2.0: FLUX.1 [schnell] или FLUX.2 [klein] 4B"
    ],
    choose_b: [
      "Нет мощной видеокарты: Stable Diffusion работает на домашнем ПК",
      "Нужно дообучить модель под фирменный стиль",
      "Важны готовые стили, плагины и дообучения из экосистемы"
    ],
    title_en: "FLUX vs Stable Diffusion: image generation compared",
    h1_en: "FLUX or Stable Diffusion: which to choose for business",
    description_en: "FLUX vs Stable Diffusion: text in images, editing, Apache 2.0 vs Community License, GPU requirements. Which image model to pick for marketing work.",
    verdict_en: "Both suit banners, covers and product card visuals, and both allow commercial use only with conditions. FLUX, from the authors of Stable Diffusion, renders text in images well, keeps composition and edits photos from a description (Kontext); it needs a GPU and ranges from 4B to 32B; [schnell] and [klein] 4B are Apache 2.0, the [dev] versions are non-commercial. Stable Diffusion runs even on a home PC (0.9B to 8B) and has a huge ecosystem of fine-tunes, styles and plugins; SD3 and SD3.5 are free under $1M annual revenue. FLUX is newer (2026-01 vs 2024-10).",
    choose_a_en: [
      "You need readable text in the image: headlines, banner captions",
      "You want to edit photos from a text description (FLUX.1 Kontext)",
      "You need Apache 2.0 for commercial use: FLUX.1 [schnell] or FLUX.2 [klein] 4B"
    ],
    choose_b_en: [
      "You have no powerful GPU: Stable Diffusion runs on a home PC",
      "You want to fine-tune the model on your brand style",
      "You rely on ready styles, plugins and fine-tunes from the ecosystem"
    ]
  },
  {
    a: "flux", b: "qwen-image", slug: "flux-vs-qwen-image",
    title: "FLUX или Qwen-Image: картинки для маркетплейсов",
    h1: "FLUX или Qwen-Image: что выбрать для бизнеса",
    description: "FLUX и Qwen-Image: текст на изображении, редактирование по команде, лицензии Apache 2.0 и некоммерческие версии, размеры и свежесть. Сравнение по каталогу.",
    verdict: "Обе модели требуют видеокарту, рисуют текст на изображении и умеют редактировать фото по описанию; у обеих коммерция с условиями. FLUX (4B–32B) в каталоге отмечен для карточек товаров, баннеров и обложек; под Apache 2.0 идут FLUX.1 [schnell] и FLUX.2 [klein] 4B, версии [dev] некоммерческие. Qwen-Image (7B–20B) отмечен для инфографики карточек товаров и рекламных креативов; версии до Qwen-Image-2512 под Apache 2.0, а свежая 2.1 только некоммерческая. Qwen-Image обновлялся позже (2026-09 против 2026-01).",
    choose_a: [
      "Нужна самая лёгкая коммерческая версия: FLUX.2 [klein] 4B под Apache 2.0",
      "Задачи дизайн-студии: баннеры, обложки, композиция",
      "Нужна модель, у которой есть набор инструментов FLUX.1 Tools"
    ],
    choose_b: [
      "Нужна инфографика для карточек товаров на маркетплейсах",
      "Нужно править фото по текстовой команде (Qwen-Image-Edit)",
      "Подходит Qwen-Image-2512 под Apache 2.0 для коммерческого использования"
    ],
    title_en: "FLUX vs Qwen-Image: images for marketplaces and ads",
    h1_en: "FLUX or Qwen-Image: which to choose for business",
    description_en: "FLUX vs Qwen-Image: text in images, instruction-based editing, Apache 2.0 vs non-commercial versions, sizes and release dates, compared from catalog data.",
    verdict_en: "Both need a GPU, render text in images and edit photos from a description; both allow commercial use only with conditions. FLUX (4B to 32B) is listed for product cards, banners and covers; FLUX.1 [schnell] and FLUX.2 [klein] 4B are Apache 2.0, the [dev] versions are non-commercial. Qwen-Image (7B to 20B) is listed for product-card infographics and ad creatives; versions up to Qwen-Image-2512 are Apache 2.0, while the new 2.1 is non-commercial only. Qwen-Image was updated more recently (2026-09 vs 2026-01).",
    choose_a_en: [
      "You want the lightest commercial option: FLUX.2 [klein] 4B under Apache 2.0",
      "Your work is studio design: banners, covers, composition",
      "You want the FLUX.1 Tools set"
    ],
    choose_b_en: [
      "You need infographics for marketplace product cards",
      "You edit photos by text command (Qwen-Image-Edit)",
      "Qwen-Image-2512 under Apache 2.0 fits your commercial use"
    ]
  },
  {
    a: "paddleocr-vl", b: "deepseek-ocr", slug: "paddleocr-vl-vs-deepseek-ocr",
    title: "PaddleOCR-VL или DeepSeek-OCR: распознавание документов",
    h1: "PaddleOCR-VL или DeepSeek-OCR: что выбрать для бизнеса",
    description: "PaddleOCR-VL и DeepSeek-OCR: русский язык, таблицы и печати, размер 0,9B против 3B, Apache 2.0 и MIT, работа без видеокарты. Что ставить для документооборота.",
    verdict: "Обе модели разрешены для коммерции и переводят сканы в Markdown. PaddleOCR-VL компактнее (0,9B), под Apache 2.0, по карточке поддерживает 109 языков, включая русский, распознаёт таблицы, формулы и печати и работает на обычном ПК без мощной видеокарты; в каталоге указано, что версия 1.6 лидирует на тесте OmniDocBench. DeepSeek-OCR (около 3B, MIT и Apache 2.0) сильно сжимает страницу в небольшое число визуальных токенов и рассчитан на массовую обработку, есть в Ollama; поддержка русского в карточке не подтверждена, запуск на процессоре не отмечен. PaddleOCR-VL обновлялся позже (2026-05 против 2026-01).",
    choose_a: [
      "Документы на русском: счета, договоры, накладные",
      "Нужно распознавать печати, формулы и таблицы",
      "Нет видеокарты: модель работает на обычном ПК"
    ],
    choose_b: [
      "Нужна массовая обработка большого архива сканов",
      "Готовите PDF в Markdown для поиска и RAG",
      "Хотите запускать через Ollama"
    ],
    title_en: "PaddleOCR-VL vs DeepSeek-OCR: document recognition",
    h1_en: "PaddleOCR-VL or DeepSeek-OCR: which to choose for business",
    description_en: "PaddleOCR-VL vs DeepSeek-OCR: Russian support, tables and stamps, 0.9B vs 3B, Apache 2.0 vs MIT, running without a GPU. Which OCR model to use for documents.",
    verdict_en: "Both allow commercial use and convert scans to Markdown. PaddleOCR-VL is smaller (0.9B), Apache 2.0, supports 109 languages including Russian per its card, recognizes tables, formulas and stamps, and runs on a regular PC without a powerful GPU; the catalog notes that version 1.6 leads the OmniDocBench test. DeepSeek-OCR (about 3B, MIT and Apache 2.0) compresses a page into a small number of visual tokens and targets bulk processing, and it is in Ollama; Russian support is not confirmed in its card and CPU use is not marked. PaddleOCR-VL was updated more recently (2026-05 vs 2026-01).",
    choose_a_en: [
      "Your documents are in Russian: invoices, contracts, waybills",
      "You need to recognize stamps, formulas and tables",
      "You have no GPU: the model runs on a regular PC"
    ],
    choose_b_en: [
      "You process a large archive of scans in bulk",
      "You convert PDFs to Markdown for search and RAG",
      "You want to run it through Ollama"
    ]
  },
  {
    a: "bge-m3", b: "e5", slug: "bge-m3-vs-e5",
    title: "BGE-M3 или E5: эмбеддинги для поиска и RAG",
    h1: "BGE-M3 или E5: что выбрать для бизнеса",
    description: "BGE-M3 и multilingual-e5: эмбеддинги для RAG, русский язык, лицензия MIT, размеры от 33M до 7B, Ollama и запуск на процессоре. Что выбрать для поиска.",
    verdict: "Обе модели под MIT, понимают русский, работают на процессоре и служат основой RAG: поиск по базе документов и подбор фрагментов для ответа бота. BGE-M3 — одна модель на 568M для поиска по смыслу на сотне языков, есть в Ollama, вышла в 2024-01. E5 — семейство от 33M до 7B, включая крупную e5-mistral-7b-instruct, которой может понадобиться видеокарта; в Ollama в каталоге не отмечено, последняя версия 2024-02. По свежести они почти равны, разница в выборе размеров и способе запуска.",
    choose_a: [
      "Нужна одна модель без выбора размеров",
      "Хотите запускать эмбеддинги через Ollama",
      "Документы на многих языках: модель рассчитана на сотню языков"
    ],
    choose_b: [
      "Нужна совсем маленькая модель от 33M для слабого сервера",
      "Нужна крупная модель до 7B и есть видеокарта",
      "Нужна instruct-версия: multilingual-e5-large-instruct"
    ],
    title_en: "BGE-M3 vs E5: embeddings for search and RAG",
    h1_en: "BGE-M3 or E5: which to choose for business",
    description_en: "BGE-M3 vs multilingual-e5: embeddings for RAG, Russian support, MIT license, sizes from 33M to 7B, Ollama and CPU support. Which to pick for semantic search.",
    verdict_en: "Both are MIT, handle Russian, run on a CPU and serve as a RAG backbone: searching a document base and picking passages for a bot's answer. BGE-M3 is a single 568M model for semantic search across about a hundred languages, available in Ollama, released 2024-01. E5 is a family from 33M to 7B, including the large e5-mistral-7b-instruct that may need a GPU; Ollama is not marked in the catalog, and the latest version is 2024-02. Their release dates are close, so the difference is size choice and how you run them.",
    choose_a_en: [
      "You want a single model without choosing sizes",
      "You want to run embeddings through Ollama",
      "Your documents span many languages: the model covers about a hundred"
    ],
    choose_b_en: [
      "You need a very small model from 33M for a weak server",
      "You need a large model up to 7B and have a GPU",
      "You want an instruct version: multilingual-e5-large-instruct"
    ]
  },
  {
    a: "wan", b: "ltx-video", slug: "wan-vs-ltx-video",
    title: "Wan или LTX-Video: открытая генерация видео",
    h1: "Wan или LTX-Video: что выбрать для бизнеса",
    description: "Wan и LTX-Video / LTX-2: видео по тексту и фото, звук и речь, лицензии Apache 2.0 и LTX-2 Community License, требования к железу. Сравнение по каталогу.",
    verdict: "Обе модели генерируют видео по тексту и по фото, требуют видеокарту и обновлялись в 2026-07. Wan (1,3B–14B) целиком под Apache 2.0, коммерция разрешена, младшая версия идёт на игровой видеокарте, старшим может понадобиться кластер; после 2.2 открыто выходят только прикладные модели: монтаж (VACE), говорящие персонажи по звуку (S2V), танцы под музыку. LTX-Video (2B–22B) с LTX-2 генерирует видео сразу со звуком и речью, позволяет управлять камерой и позой; LTX-2 и новее бесплатны при выручке до $10 млн в год.",
    choose_a: [
      "Нужна коммерция без условий по выручке: Wan под Apache 2.0",
      "Нужен монтаж по описанию или персонаж, говорящий по звуку",
      "Хотите начать с игровой видеокарты на младшей версии 1,3B"
    ],
    choose_b: [
      "Ролик нужен сразу со звуком и речью",
      "Нужно управлять камерой и позой в кадре",
      "Выручка компании меньше $10 млн в год и условия LTX-2 подходят"
    ],
    title_en: "Wan vs LTX-Video: open video generation compared",
    h1_en: "Wan or LTX-Video: which to choose for business",
    description_en: "Wan vs LTX-Video / LTX-2: text and image to video, audio and speech, Apache 2.0 vs LTX-2 Community License, hardware needs, compared from catalog data.",
    verdict_en: "Both generate video from text and from images, need a GPU and were updated in 2026-07. Wan (1.3B to 14B) is fully Apache 2.0 with commercial use allowed; the small version runs on a gaming GPU and the larger ones may need a cluster; after 2.2 only applied models are released openly: editing (VACE), sound-driven talking characters (S2V) and dancing to music. LTX-Video (2B to 22B) with LTX-2 generates video together with audio and speech and supports camera and pose control; LTX-2 and later are free under $10M annual revenue.",
    choose_a_en: [
      "You want commercial use with no revenue conditions: Wan is Apache 2.0",
      "You need description-based editing or a character that talks from audio",
      "You want to start on a gaming GPU with the 1.3B version"
    ],
    choose_b_en: [
      "The clip has to come with audio and speech",
      "You need camera and pose control in the shot",
      "Your revenue is under $10M a year and the LTX-2 terms fit"
    ]
  },
  {
    a: "yolo", b: "rf-detr", slug: "yolo-vs-rf-detr",
    title: "YOLO или RF-DETR: детекция объектов на видео",
    h1: "YOLO или RF-DETR: что выбрать для бизнеса",
    description: "YOLO и RF-DETR: детекция объектов в реальном времени, лицензия AGPL-3.0 против Apache 2.0, сегментация, ключевые точки и требования к железу. Сравнение.",
    verdict: "Обе модели находят объекты на видео в реальном времени и работают на процессоре. YOLO от Ultralytics — самый распространённый детектор, очень маленькие размеры (2,4M–68M) и хватает слабого железа, но лицензия AGPL-3.0 требует открыть код продукта либо купить корпоративную лицензию. RF-DETR в каталоге описан как открытая замена YOLO без AGPL: размеры Nano–Large под Apache 2.0, XL и 2XL под лицензией Roboflow; умеет сегментацию, а ключевые точки есть в превью с 2026-06. Последний релиз YOLO — YOLO26 (2026-01).",
    choose_a: [
      "Нужны готовые сценарии: подсчёт людей и машин, каски, брак, выкладка на полках",
      "Модель должна работать на самом слабом железе: от 2,4M параметров",
      "Код продукта можно открыть или есть бюджет на лицензию Ultralytics"
    ],
    choose_b: [
      "Нельзя открывать код продукта и не хочется покупать лицензию: Apache 2.0",
      "Нужны точные контуры деталей и дефектов (сегментация)",
      "Нужно дообучить детектор под свои классы объектов"
    ],
    title_en: "YOLO vs RF-DETR: real-time object detection compared",
    h1_en: "YOLO or RF-DETR: which to choose for business",
    description_en: "YOLO vs RF-DETR: real-time object detection, AGPL-3.0 vs Apache 2.0 licensing, segmentation, keypoints and hardware needs, compared from catalog data.",
    verdict_en: "Both detect objects in video in real time and run on a CPU. Ultralytics YOLO is the most widespread detector, very small (2.4M to 68M) and fine on weak hardware, but its AGPL-3.0 license means opening your product code or buying an enterprise license. The catalog describes RF-DETR as an open YOLO alternative without AGPL: sizes Nano to Large are Apache 2.0, XL and 2XL use a Roboflow license; it supports segmentation, and keypoints are in preview since 2026-06. The latest YOLO release is YOLO26 (2026-01).",
    choose_a_en: [
      "You need proven scenarios: counting people and cars, helmets, defects, shelf layout",
      "The model must run on the weakest hardware: from 2.4M parameters",
      "You can open your product code or have budget for an Ultralytics license"
    ],
    choose_b_en: [
      "You cannot open your code and do not want to buy a license: Apache 2.0",
      "You need precise outlines of parts and defects (segmentation)",
      "You want to fine-tune the detector on your own object classes"
    ]
  }
];
