// Страницы сравнения «X или Y» для энциклопедии открытых моделей.
// Все факты взяты из tools/models-data.js (summary, tasks, where, sizes, license,
// commercial, hardware, ru, ollama, cpu, versions, first, latest). Бенчмарков,
// скорости и качества сверх того, что есть в данных, здесь нет.
module.exports = [
  {
    a: "xtts", b: "f5-tts", slug: "xtts-vs-f5-tts",
    title: "XTTS или F5-TTS: клонирование голоса",
    h1: "XTTS или F5-TTS: что выбрать для клонирования голоса",
    description: "XTTS и F5-TTS: 470M против 340M, 17 языков с русским против английского и китайского, обе лицензии некоммерческие. Кому что подойдёт.",
    verdict: "Обе модели клонируют голос по короткому образцу и обе запускаются на обычном компьютере без видеокарты. Клонировать чужой голос можно только с письменного согласия владельца голоса, иначе это не проект, а проблема. У XTTS в каталоге 17 языков, включая русский, но компания Coqui закрылась и развитие остановилось на версии v2 от 2023-10. F5-TTS свежее (последнее обновление 2025-03), официально английский и китайский, зато сообщество выпустило дообученные версии под другие языки, в том числе русский. Коммерция закрыта у обеих: XTTS под Coqui Public Model License, официальные веса F5-TTS под CC BY-NC 4.0, так что для продукта нужен другой вариант.",
    choose_a: [
      "Русский нужен сразу из коробки, без поиска дообученных весов",
      "Проект исследовательский или учебный, где лицензия без коммерции не мешает",
      "Важна многоязычность: у XTTS заявлено 17 языков"
    ],
    choose_b: [
      "Нужна живая модель: F5-TTS обновлялась в 2025 году, XTTS остановилась в 2023",
      "Вы готовы взять дообученные сообществом веса под нужный язык",
      "Модель поменьше: около 340M против 470M у XTTS"
    ],
    title_en: "XTTS vs F5-TTS: voice cloning compared",
    h1_en: "XTTS or F5-TTS: which voice cloning model to pick",
    description_en: "XTTS vs F5-TTS: 470M against 340M, 17 languages including Russian against English and Chinese, both non-commercial licenses. Who should pick which.",
    verdict_en: "Both models clone a voice from a short sample and both run on a regular computer without a GPU. You may only clone a voice with the written consent of the person who owns it. XTTS covers 17 languages including Russian, but Coqui has shut down and development stopped at v2 in 2023-10. F5-TTS is newer (last update 2025-03), officially English and Chinese, but the community has released fine-tunes for other languages, Russian among them. Commercial use is closed for both: XTTS under the Coqui Public Model License, the official F5-TTS weights under CC BY-NC 4.0, so a product needs a different option.",
    choose_a_en: [
      "You need Russian out of the box, without hunting for community fine-tunes",
      "The project is research or education, where a non-commercial license is fine",
      "Language coverage matters: XTTS lists 17 languages"
    ],
    choose_b_en: [
      "You want a living project: F5-TTS was updated in 2025, XTTS stopped in 2023",
      "You are ready to use community fine-tunes for your language",
      "You want a smaller model: about 340M against 470M for XTTS"
    ]
  },
  {
    a: "piper", b: "kokoro", slug: "piper-vs-kokoro",
    title: "Piper или Kokoro: лёгкий синтез речи",
    h1: "Piper или Kokoro: что выбрать для синтеза речи",
    description: "Piper и Kokoro: 5–30M против 82M, русский есть только у Piper, лицензии GPL-3.0 с условиями по голосам против чистой Apache 2.0.",
    verdict: "Обе модели крошечные и работают на обычном процессоре, видеокарта не нужна. Piper рассчитан на железо уровня Raspberry Pi, у него готовые голоса на 35+ языках и несколько русских, он закрывает уведомления, голосовые меню и киоски без интернета. Kokoro весит 82M, целиком под Apache 2.0 и не требует разбирательств с лицензией, но русского в нём нет. С лицензией Piper сложнее: старый движок под MIT, новый piper1-gpl под GPL-3.0, а у каждого голоса свои условия, среди них встречаются некоммерческие, поэтому голос надо проверять отдельно. Если вы добавляете к любой из них клонирование голоса, помните: клонировать голос можно только с согласия его владельца.",
    choose_a: [
      "Нужен русский язык: у Piper есть готовые русские голоса, у Kokoro русского нет",
      "Синтез крутится на слабом железе вроде Raspberry Pi или киоска",
      "Задачи умного дома, встраиваемых устройств и голосовых меню без интернета"
    ],
    choose_b: [
      "Нужна простая лицензия: Kokoro целиком под Apache 2.0",
      "Озвучка на английском для веб- или мобильного приложения без видеокарты",
      "Не хочется проверять условия по каждому отдельному голосу"
    ],
    title_en: "Piper vs Kokoro: lightweight speech synthesis",
    h1_en: "Piper or Kokoro: which text-to-speech model to pick",
    description_en: "Piper vs Kokoro: 5-30M against 82M, Russian voices only in Piper, GPL-3.0 with per-voice terms against plain Apache 2.0 licensing.",
    verdict_en: "Both models are tiny and run on a regular CPU, no GPU needed. Piper targets hardware down to a Raspberry Pi, ships ready-made voices in 35+ languages including several Russian ones, and covers notifications, voice menus and offline kiosks. Kokoro is 82M, fully Apache 2.0 with no licensing homework, but it has no Russian. Piper's licensing is messier: the old engine is MIT, the new piper1-gpl is GPL-3.0, and every voice carries its own terms, some of them non-commercial, so each voice has to be checked. If you add voice cloning on top of either one, remember that a voice may only be cloned with the consent of the person it belongs to.",
    choose_a_en: [
      "You need Russian: Piper has ready-made Russian voices, Kokoro has none",
      "Speech runs on weak hardware such as a Raspberry Pi or a kiosk",
      "Smart home, embedded devices and offline voice menus"
    ],
    choose_b_en: [
      "You want simple licensing: Kokoro is entirely Apache 2.0",
      "English voiceover for a web or mobile app without a GPU",
      "You do not want to check terms for every individual voice"
    ]
  },
  {
    a: "f5-tts", b: "fish-speech", slug: "f5-tts-vs-fish-speech",
    title: "F5-TTS или Fish Speech: клонирование голоса",
    h1: "F5-TTS или Fish Speech: что выбрать для озвучки",
    description: "F5-TTS и Fish Speech: 340M против 0.5B–4.5B, два языка против 80+ с русским, работа на процессоре против видеокарты. Обе некоммерческие.",
    verdict: "Обе модели клонируют голос по короткому образцу, и у обеих коммерческое использование закрыто, так что для продукта понадобится отдельная договорённость или другая модель. Клонировать голос допустимо только с согласия владельца голоса. F5-TTS весит около 340M, запускается на процессоре, официально знает английский и китайский, а русский появляется через дообученные сообществом версии. Fish Speech крупнее (0.5B – 4.5B), требует видеокарты, но в каталоге заявлено 80+ языков с русским и управление эмоциями. Fish Speech развивается активнее: последняя версия S2-Pro вышла в 2026-03, у F5-TTS обновление от 2025-03; при этом веса S2-Pro идут под Fish Audio Research License, а коммерция только по отдельному договору.",
    choose_a: [
      "Нет видеокарты: F5-TTS работает на обычном процессоре",
      "Нужна модель поменьше, около 340M против нескольких миллиардов",
      "Хватает английского и китайского или устраивают дообученные версии сообщества"
    ],
    choose_b: [
      "Нужен русский и много языков сразу: в каталоге заявлено 80+",
      "Важна эмоциональная окраска озвучки",
      "Нужен свежий релиз: S2-Pro вышел в 2026-03"
    ],
    title_en: "F5-TTS vs Fish Speech: voice cloning compared",
    h1_en: "F5-TTS or Fish Speech: which voiceover model to pick",
    description_en: "F5-TTS vs Fish Speech: 340M against 0.5B-4.5B, two languages against 80+ including Russian, CPU against GPU. Both are non-commercial.",
    verdict_en: "Both models clone a voice from a short sample, and both close off commercial use, so a product needs a separate agreement or a different model. A voice may only be cloned with the consent of the person it belongs to. F5-TTS is about 340M, runs on a CPU, officially covers English and Chinese, and gets Russian through community fine-tunes. Fish Speech is larger (0.5B to 4.5B) and needs a GPU, but the catalog lists 80+ languages including Russian plus emotion control. Fish Speech moves faster: the latest S2-Pro shipped in 2026-03 against an F5-TTS update in 2025-03, though the S2-Pro weights use the Fish Audio Research License and commercial use requires a separate agreement.",
    choose_a_en: [
      "No GPU available: F5-TTS runs on a regular CPU",
      "You want a smaller model, about 340M instead of several billion",
      "English and Chinese are enough, or community fine-tunes work for you"
    ],
    choose_b_en: [
      "You need Russian and broad language coverage: the catalog lists 80+",
      "Emotional delivery matters for your voiceover",
      "You want the newest release: S2-Pro shipped in 2026-03"
    ]
  },
  {
    a: "gigaam", b: "vosk", slug: "gigaam-vs-vosk",
    title: "GigaAM или Vosk: распознавание русской речи",
    h1: "GigaAM или Vosk: что выбрать для распознавания речи",
    description: "GigaAM и Vosk: 220–600M против 45 МБ–1,8 ГБ, MIT против Apache 2.0, эмоции и пунктуация против потокового офлайн-режима и своего TTS.",
    verdict: "Обе модели российские, работают с русским языком, запускаются без видеокарты и разрешают коммерческое использование: GigaAM под MIT, Vosk под Apache 2.0. GigaAM от Сбера шире по функциям разговорной аналитики: есть распознавание эмоций, версия v3 с пунктуацией и многоязычная версия с казахским, киргизским и узбекским; последнее обновление 2026-07. Vosk сильнее там, где нужен офлайн на слабом железе: модели от 45 МБ идут на Raspberry Pi и телефоне, есть потоковые версии для живого звука и простой синтез речи Vosk TTS. Если вы используете Vosk TTS для озвучки, помните, что клонировать чужой голос можно только с согласия его владельца. Выбор сводится к тому, что важнее: аналитика разговора или автономность на месте.",
    choose_a: [
      "Нужна пунктуация в расшифровке и разметка эмоций в разговоре",
      "Задачи банка, госсектора или колл-центра с разбором звонков на русском",
      "Нужны соседние языки: казахский, киргизский, узбекский в Multilingual"
    ],
    choose_b: [
      "Распознавание должно идти офлайн на слабом устройстве или телефоне",
      "Нужен потоковый режим с малой задержкой для живого звука",
      "В одном проекте нужны и распознавание, и простой синтез речи на русском"
    ],
    title_en: "GigaAM vs Vosk: Russian speech recognition",
    h1_en: "GigaAM or Vosk: which speech recognition to pick",
    description_en: "GigaAM vs Vosk: 220-600M against 45 MB-1.8 GB, MIT against Apache 2.0, emotion and punctuation against offline streaming and built-in TTS.",
    verdict_en: "Both models come from Russia, handle Russian, run without a GPU and allow commercial use: GigaAM under MIT, Vosk under Apache 2.0. Sber's GigaAM covers more conversation analytics: emotion recognition, a v3 version with punctuation, and a multilingual version adding Kazakh, Kyrgyz and Uzbek, last updated 2026-07. Vosk is stronger where offline work on weak hardware matters: models from 45 MB run on a Raspberry Pi or a phone, there are streaming models for live audio, and Vosk TTS provides simple Russian speech synthesis. If you use Vosk TTS for voiceover, remember that a voice may only be cloned with the consent of the person it belongs to. The choice comes down to conversation analytics versus on-device autonomy.",
    choose_a_en: [
      "You need punctuation in transcripts and emotion labels in conversations",
      "Banking, public sector or call center work with Russian call analysis",
      "You need neighboring languages: Kazakh, Kyrgyz, Uzbek in the multilingual version"
    ],
    choose_b_en: [
      "Recognition has to run offline on a weak device or a phone",
      "You need low-latency streaming for live audio",
      "One project needs both recognition and simple Russian speech synthesis"
    ]
  },
  {
    a: "parakeet", b: "qwen-asr", slug: "parakeet-vs-qwen-asr",
    title: "Parakeet или Qwen3-ASR: распознавание речи",
    h1: "Parakeet или Qwen3-ASR: что выбрать для расшифровки",
    description: "Parakeet и Qwen3-ASR: 110M–2.5B против 0.6B–1.7B, смешанные лицензии NVIDIA против Apache 2.0, потоковый режим против 50+ языков.",
    verdict: "Обе линейки распознают речь на русском и запускаются без видеокарты, хотя старшие модели NVIDIA рассчитаны на GPU. У Parakeet шире линейка (110M – 2.5B) и есть потоковые версии Nemotron Speech Streaming и Nemotron 3.5 ASR Streaming для работы в реальном времени, последний релиз 2026-05. Главная сложность с NVIDIA — лицензии: они смешанные, Parakeet и Canary в основном CC-BY-4.0, первая Canary-1B некоммерческая, Parakeet Unified и Nemotron Speech Streaming под NVIDIA Open Model License, Nemotron 3.5 ASR под OpenMDW, так что каждую модель надо проверять отдельно. Qwen3-ASR проще: весь набор под Apache 2.0, 50+ языков, в каталоге отмечена устойчивость к шуму, пению и акцентам.",
    choose_a: [
      "Нужен потоковый режим: голосовой ввод и субтитры в реальном времени",
      "Нужен выбор размеров от 110M до 2.5B под разное железо",
      "Вы готовы проверять лицензию по каждой конкретной модели линейки"
    ],
    choose_b: [
      "Нужна одна понятная лицензия: весь Qwen3-ASR под Apache 2.0",
      "Расшифровка идёт на многих языках: в каталоге заявлено 50+",
      "Запись шумная, с акцентами или пением"
    ],
    title_en: "Parakeet vs Qwen3-ASR: speech recognition",
    h1_en: "Parakeet or Qwen3-ASR: which transcription model to pick",
    description_en: "Parakeet vs Qwen3-ASR: 110M-2.5B against 0.6B-1.7B, mixed NVIDIA licenses against Apache 2.0, streaming models against 50+ languages.",
    verdict_en: "Both families recognize Russian speech and run without a GPU, though the larger NVIDIA models expect one. Parakeet offers a wider range (110M to 2.5B) and has streaming versions, Nemotron Speech Streaming and Nemotron 3.5 ASR Streaming, for real-time work, with the latest release in 2026-05. The catch with NVIDIA is licensing: it is mixed, with Parakeet and Canary mostly CC-BY-4.0, the first Canary-1B non-commercial, Parakeet Unified and Nemotron Speech Streaming under the NVIDIA Open Model License and Nemotron 3.5 ASR under OpenMDW, so each model has to be checked on its own. Qwen3-ASR is simpler: the whole set is Apache 2.0, covers 50+ languages, and the catalog notes it copes with noise, singing and accents.",
    choose_a_en: [
      "You need streaming: real-time voice input and live subtitles",
      "You want a size range from 110M to 2.5B for different hardware",
      "You are willing to check the license for each specific model"
    ],
    choose_b_en: [
      "You want one clear license: all of Qwen3-ASR is Apache 2.0",
      "Transcription spans many languages: the catalog lists 50+",
      "Your audio is noisy, accented or includes singing"
    ]
  },
  {
    a: "demucs", b: "uvr-mdx", slug: "demucs-vs-uvr-mdx",
    title: "Demucs или UVR: разделение голоса и музыки",
    h1: "Demucs или UVR: чем отделять голос от музыки",
    description: "Demucs и UVR/MDX-Net: одна модель под MIT против коллекции весов с разными условиями, четыре дорожки против набора RoFormer и SCNet.",
    verdict: "Обе истории про одно: разделить запись на голос и остальное. Demucs — это одна понятная модель: MIT, десятки миллионов параметров, делит трек на голос, барабаны, бас и остальное, идёт на процессоре, последняя версия 4.1.0 вышла в 2026-07. UVR — не модель, а большая коллекция сообщества: MDX-Net, BS-RoFormer, Mel-RoFormer, SCNet, DTTNet, в каталоге отмечена как лидер по качеству вокала среди открытых решений, обновления идут постоянно, последнее 2026-08. Цена за это — лицензии: код MIT, а у каждых весов свои условия, проверять придётся по каждой модели отдельно. Для продукта на поток Demucs предсказуемее, для максимума качества на конкретной записи стоит перебирать веса из UVR.",
    choose_a: [
      "Нужна одна модель с чистой лицензией MIT без разбора условий",
      "Разделение встроено в сервис и должно работать одинаково на любом файле",
      "Нужны все четыре дорожки: голос, барабаны, бас и остальное"
    ],
    choose_b: [
      "Нужен максимум качества вокала и вы готовы подбирать веса под запись",
      "Хочется выбрать из набора: MDX-Net, BS-RoFormer, Mel-RoFormer, SCNet, DTTNet",
      "Важна свежесть: последние веса в коллекции датированы 2026-08"
    ],
    title_en: "Demucs vs UVR: separating vocals from music",
    h1_en: "Demucs or UVR: which tool splits vocals from music",
    description_en: "Demucs vs UVR/MDX-Net: one MIT-licensed model against a community collection with mixed weight terms, four stems against RoFormer and SCNet.",
    verdict_en: "Both do the same job: split a recording into vocals and everything else. Demucs is one clear model: MIT, tens of millions of parameters, splits a track into vocals, drums, bass and the rest, runs on a CPU, with version 4.1.0 released in 2026-07. UVR is not a model but a large community collection: MDX-Net, BS-RoFormer, Mel-RoFormer, SCNet, DTTNet, listed in the catalog as the quality leader for vocals among open solutions, with updates arriving constantly, the latest in 2026-08. The price is licensing: the code is MIT, but each set of weights carries its own terms and has to be checked individually. For a production pipeline Demucs is more predictable; for the best result on a specific recording it pays to try weights from UVR.",
    choose_a_en: [
      "You want one model under a clean MIT license, with no terms to untangle",
      "Separation is built into a service and must behave the same on every file",
      "You need all four stems: vocals, drums, bass and the rest"
    ],
    choose_b_en: [
      "You want the best vocal quality and will tune weights per recording",
      "You want a choice: MDX-Net, BS-RoFormer, Mel-RoFormer, SCNet, DTTNet",
      "Recency matters: the newest weights in the collection are dated 2026-08"
    ]
  },
  {
    a: "pyannote", b: "wespeaker", slug: "pyannote-vs-wespeaker",
    title: "pyannote или WeSpeaker: разметка по спикерам",
    h1: "pyannote или WeSpeaker: что выбрать для работы с голосами",
    description: "pyannote и WeSpeaker: диаризация записи против голосового отпечатка, MIT и CC-BY 4.0 против Apache 2.0, анкета на HF против прямой загрузки.",
    verdict: "Это не конкуренты, а соседние слои одной задачи, и их часто ставят вместе: одна из моделей WeSpeaker встроена в pyannote 3.x. pyannote отвечает на вопрос «кто и когда говорил» и размечает запись по спикерам, обычно в связке с распознаванием речи; веса выдают после короткой анкеты на HF, лицензии MIT для 2.x, 3.0 и 3.1 и CC-BY 4.0 для community-1. WeSpeaker — это голосовой отпечаток: сравнить две записи и понять, один ли это человек, плюс помощь в разделении по спикерам; код под Apache 2.0, веса под CC-BY 4.0 и Apache 2.0. Обе работают на процессоре. В каталоге WeSpeaker отмечен для банков, страхования и служб безопасности, pyannote — для колл-центров, юристов, HR и подкастов.",
    choose_a: [
      "Нужны протоколы совещаний и звонков с подписью, кто где говорит",
      "Диаризация идёт в связке с расшифровкой речи",
      "Задачи колл-центра, юристов, HR или подкастов"
    ],
    choose_b: [
      "Нужно сравнить голос из двух записей: один это человек или разные",
      "Голосовая проверка клиента при звонке, поиск повторных обращений",
      "Не хочется проходить анкету на HF: веса доступны напрямую"
    ],
    title_en: "pyannote vs WeSpeaker: speaker diarization and voiceprints",
    h1_en: "pyannote or WeSpeaker: which speaker tool to pick",
    description_en: "pyannote vs WeSpeaker: diarizing a recording against voiceprint matching, MIT and CC-BY 4.0 against Apache 2.0, HF form against direct download.",
    verdict_en: "These are not really competitors but neighboring layers of the same job, and they are often used together: one of the WeSpeaker models is built into pyannote 3.x. pyannote answers who spoke and when, splitting a recording by speaker, usually paired with speech recognition; the weights are issued after a short form on HF, under MIT for 2.x, 3.0 and 3.1 and CC-BY 4.0 for community-1. WeSpeaker is the voiceprint side: compare two recordings to tell whether it is the same person, plus help with speaker splitting; the code is Apache 2.0, the weights CC-BY 4.0 and Apache 2.0. Both run on a CPU. The catalog lists WeSpeaker for banking, insurance and security teams, and pyannote for call centers, legal, HR and podcasts.",
    choose_a_en: [
      "You need meeting and call transcripts labeled with who said what",
      "Diarization runs alongside speech recognition",
      "Call center, legal, HR or podcast work"
    ],
    choose_b_en: [
      "You need to compare voices across two recordings: same person or not",
      "Voice verification during a call, finding repeat callers",
      "You would rather skip the HF form: the weights download directly"
    ]
  },
  {
    a: "bge-m3", b: "jina-embeddings", slug: "bge-m3-vs-jina-embeddings",
    title: "BGE-M3 или Jina Embeddings: поиск для RAG",
    h1: "BGE-M3 или Jina Embeddings: что выбрать для поиска по документам",
    description: "BGE-M3 и Jina Embeddings: 568M и MIT с запуском в Ollama против 33M–3.8B, где свежие версии v3 и v5 только для некоммерческого использования.",
    verdict: "Обе модели ищут по смыслу на многих языках, включая русский, и работают на процессоре. BGE-M3 — одна версия 2024-01 на 568M под MIT, есть в Ollama, поэтому её ставят одной командой и спокойно используют в коммерческом продукте. Jina обновляется чаще: линейка от 33M до 3.8B, длинный контекст, свежая v5-omni от 2026-05 понимает текст, картинки и аудио. Но лицензии придётся читать: v2 под Apache 2.0, v4 под Qwen Research License, а v3 и v5 под CC-BY-NC, то есть бизнесу нужна платная лицензия. Для продакшена без юридических вопросов проще BGE-M3, для поиска по картинкам и сканам сильнее Jina.",
    choose_a: [
      "Нужна лицензия MIT без оговорок для коммерческого продукта",
      "Хотите поставить модель одной командой через Ollama",
      "Классический RAG по текстовой базе знаний на русском и других языках"
    ],
    choose_b: [
      "Нужен поиск не только по тексту, но и по картинкам, сканам и аудио",
      "Нужна очень маленькая модель от 33M или наоборот крупная до 3.8B",
      "Проект некоммерческий либо вы готовы купить платную лицензию"
    ],
    title_en: "BGE-M3 vs Jina Embeddings: search models for RAG",
    h1_en: "BGE-M3 or Jina Embeddings: which embedding model to pick",
    description_en: "BGE-M3 vs Jina Embeddings: 568M under MIT with Ollama support against 33M-3.8B where the newer v3 and v5 are non-commercial only.",
    verdict_en: "Both models search by meaning across many languages, including Russian, and run on a CPU. BGE-M3 is a single 568M release from 2024-01 under MIT, available in Ollama, so it installs in one command and sits comfortably in a commercial product. Jina moves faster: a range from 33M to 3.8B, long context, and a recent v5-omni from 2026-05 that handles text, images and audio. The licenses need reading though: v2 is Apache 2.0, v4 uses the Qwen Research License, and v3 and v5 are CC-BY-NC, so a business needs a paid license. For production without legal questions BGE-M3 is simpler; for search across images and scans Jina is stronger.",
    choose_a_en: [
      "You need an unconditional MIT license for a commercial product",
      "You want a one-command install through Ollama",
      "Classic RAG over a text knowledge base in Russian and other languages"
    ],
    choose_b_en: [
      "You need search across images, scans and audio, not just text",
      "You need a very small model from 33M, or a large one up to 3.8B",
      "The project is non-commercial, or you are ready to buy a paid license"
    ]
  },
  {
    a: "qwen-embedding", b: "e5", slug: "qwen-embedding-vs-e5",
    title: "Qwen3 Embedding или E5: поиск для RAG",
    h1: "Qwen3 Embedding или E5: что выбрать для поиска по базе знаний",
    description: "Qwen3 Embedding и E5: 0.6B–8B с реранкером и поиском по картинкам против 33M–7B от Microsoft. Apache 2.0 против MIT, обе понимают русский.",
    verdict: "Обе линейки многоязычные, работают с русским, запускаются на процессоре и разрешают коммерцию: Qwen3 Embedding под Apache 2.0, E5 под MIT. Qwen свежее и шире: релизы 2025-06 и 2026-01, в комплекте реранкер для переранжирования найденного перед ответом, а VL-версии ищут по картинкам, слайдам и скриншотам; модель есть в Ollama. E5 от Microsoft остановился на multilingual-e5-large-instruct от 2024-02, зато линейка начинается с 33M, что важно, когда надо уложиться в слабое железо или большой объём индексации. Если строите RAG с нуля, разумнее брать Qwen; если у вас уже работает связка на E5, менять её без причины смысла нет.",
    choose_a: [
      "Нужен реранкер в комплекте, а не только эмбеддинги",
      "Поиск идёт по сканам, слайдам и скриншотам, а не только по тексту",
      "Хотите поставить модель одной командой через Ollama"
    ],
    choose_b: [
      "Нужна совсем маленькая модель: у E5 линейка начинается с 33M",
      "Важна лицензия MIT на всю линейку",
      "У вас уже собран поиск на E5 и он закрывает задачу"
    ],
    title_en: "Qwen3 Embedding vs E5: search models for RAG",
    h1_en: "Qwen3 Embedding or E5: which embedding model to pick",
    description_en: "Qwen3 Embedding vs E5: 0.6B-8B with a reranker and image search against Microsoft's 33M-7B line. Apache 2.0 against MIT, both handle Russian.",
    verdict_en: "Both families are multilingual, handle Russian, run on a CPU and allow commercial use: Qwen3 Embedding under Apache 2.0, E5 under MIT. Qwen is newer and broader: releases in 2025-06 and 2026-01, a reranker included for reordering results before answering, and VL versions that search images, slides and screenshots; it is also in Ollama. Microsoft's E5 stopped at multilingual-e5-large-instruct in 2024-02, but its range starts at 33M, which matters when you are squeezing into weak hardware or indexing a large corpus. Building RAG from scratch, Qwen is the sensible pick; if an E5 setup already works for you, there is no reason to replace it.",
    choose_a_en: [
      "You want a reranker in the same family, not just embeddings",
      "Search covers scans, slides and screenshots, not only text",
      "You want a one-command install through Ollama"
    ],
    choose_b_en: [
      "You need a very small model: the E5 line starts at 33M",
      "An MIT license across the whole family matters to you",
      "You already run search on E5 and it does the job"
    ]
  },
  {
    a: "timesfm", b: "chronos", slug: "timesfm-vs-chronos",
    title: "TimesFM или Chronos: прогноз временных рядов",
    h1: "TimesFM или Chronos: что выбрать для прогноза спроса",
    description: "TimesFM и Chronos: 200–500M против 8M–710M, Apache 2.0 до версии 2.5 и некоммерческая 3.0 против Apache 2.0 на всю линейку Amazon.",
    verdict: "Обе модели дают прогноз по временному ряду без обучения на ваших данных и запускаются на процессоре. TimesFM от Google свежее: версия 3.0 вышла в 2026-08, но именно она под некоммерческой лицензией, а для бизнеса открыты версии 1.0–2.5 под Apache 2.0. У Chronos от Amazon вся линейка под Apache 2.0, последняя Chronos-2 от 2025-10 умеет учитывать внешние факторы: цены, акции, погоду. Размеры у Chronos начинаются с 8M, то есть модель можно вписать в скромный сервер, у TimesFM минимум 200M. Обе в каталоге отмечены для ритейла, производства и финансов; выбор зависит от того, нужны ли вам внешние факторы и насколько критична свежая версия.",
    choose_a: [
      "Нужна самая свежая линейка: TimesFM 3.0 датирован 2026-08",
      "Задача исследовательская, где некоммерческая лицензия 3.0 не мешает",
      "Вас устраивает коммерческое использование версий 1.0–2.5 под Apache 2.0"
    ],
    choose_b: [
      "Прогноз должен учитывать акции, цены и погоду: это умеет Chronos-2",
      "Нужна вся линейка под Apache 2.0 без оговорок по версиям",
      "Ресурсов мало: у Chronos есть модели от 8M"
    ],
    title_en: "TimesFM vs Chronos: time series forecasting",
    h1_en: "TimesFM or Chronos: which forecasting model to pick",
    description_en: "TimesFM vs Chronos: 200-500M against 8M-710M, Apache 2.0 through 2.5 with a non-commercial 3.0 against Apache 2.0 across the Amazon line.",
    verdict_en: "Both models forecast a time series without training on your data and run on a CPU. Google's TimesFM is newer: version 3.0 shipped in 2026-08, but that is the one under a non-commercial license, while versions 1.0 to 2.5 stay open for business under Apache 2.0. Amazon's Chronos is Apache 2.0 across the whole line, and the latest Chronos-2 from 2025-10 accounts for external factors: prices, promotions, weather. Chronos sizes start at 8M, so it fits a modest server, while TimesFM starts at 200M. The catalog lists both for retail, manufacturing and finance; the choice depends on whether you need external factors and how much the newest version matters.",
    choose_a_en: [
      "You want the newest line: TimesFM 3.0 is dated 2026-08",
      "The work is research, where the non-commercial 3.0 license is fine",
      "Commercial use of versions 1.0 to 2.5 under Apache 2.0 is enough for you"
    ],
    choose_b_en: [
      "Forecasts must account for promotions, prices and weather: Chronos-2 does",
      "You want the whole line under Apache 2.0 with no per-version caveats",
      "Resources are tight: Chronos has models from 8M"
    ]
  },
  {
    a: "llama-guard", b: "shieldgemma", slug: "llama-guard-vs-shieldgemma",
    title: "Llama Guard или ShieldGemma: фильтры для бота",
    h1: "Llama Guard или ShieldGemma: чем фильтровать ответы бота",
    description: "Llama Guard и ShieldGemma: 1B–12B против 2B–27B, лицензии Llama и Gemma Terms of Use с ограничениями, проверка картинок есть у обеих.",
    verdict: "Обе модели делают одно: проверяют вопросы пользователей и ответы бота на опасный контент по списку категорий, обе есть в Ollama и запускаются на процессоре. Ни у одной русский официально не заявлен, поэтому на русскоязычном проекте фильтр надо проверять на своих примерах, а не принимать на веру. Llama Guard покрывает размеры 1B – 12B, версия 4 от 2025-04 проверяет и картинки, лицензии семейства Llama разрешают коммерцию с ограничениями. ShieldGemma идёт от 2B до 27B, ShieldGemma 2 от 2025-03 проверяет сгенерированные картинки перед публикацией, лицензия Gemma Terms of Use тоже разрешает коммерцию с ограничениями по видам использования. Если вы уже работаете на моделях одного из семейств, проще взять фильтр оттуда же.",
    choose_a: [
      "Нужна совсем маленькая версия фильтра: Llama Guard есть в 1B",
      "Вы уже используете модели Llama и хотите единое семейство",
      "Нужен отчёт, какая именно категория правил нарушена"
    ],
    choose_b: [
      "Нужна крупная версия для сложной модерации: ShieldGemma есть в 27B",
      "Основная задача — проверка сгенерированных картинок перед публикацией",
      "Вы уже строите проект на моделях Gemma"
    ],
    title_en: "Llama Guard vs ShieldGemma: safety filters for bots",
    h1_en: "Llama Guard or ShieldGemma: which safety filter to pick",
    description_en: "Llama Guard vs ShieldGemma: 1B-12B against 2B-27B, Llama licenses and Gemma Terms of Use with restrictions, image checking in both.",
    verdict_en: "Both models do the same thing: check user questions and bot replies for dangerous content against a list of categories, both are in Ollama and both run on a CPU. Neither officially supports Russian, so on a Russian-language project the filter has to be tested on your own examples rather than trusted blindly. Llama Guard spans 1B to 12B, version 4 from 2025-04 also checks images, and the Llama family licenses allow commercial use with restrictions. ShieldGemma runs from 2B to 27B, ShieldGemma 2 from 2025-03 checks generated images before publishing, and the Gemma Terms of Use likewise allow commercial use with restrictions on types of use. If you already build on one of these families, take the filter from the same one.",
    choose_a_en: [
      "You need a very small filter: Llama Guard comes in 1B",
      "You already run Llama models and want one family",
      "You need a report naming the exact rule category that was violated"
    ],
    choose_b_en: [
      "You need a large version for demanding moderation: ShieldGemma goes to 27B",
      "Your main job is checking generated images before publishing",
      "You are already building on Gemma models"
    ]
  }
];
