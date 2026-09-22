// Страницы сравнения «X или Y» для энциклопедии открытых моделей, часть 2:
// зрение, OCR, детекция, обработка фото, генерация картинок и видео.
// Все факты взяты из tools/models-data.js (summary, tasks, where, sizes, license,
// commercial, hardware, ru, ollama, cpu, versions, first, latest). Бенчмарков,
// скорости и качества сверх того, что есть в данных, здесь нет.
module.exports = [
  {
    a: "qwen-vl", b: "internvl", slug: "qwen-vl-vs-internvl",
    title: "Qwen-VL или InternVL: сравнение моделей зрения",
    h1: "Qwen-VL или InternVL: что выбрать для работы с изображениями",
    description: "Qwen-VL и InternVL: размеры 2B–235B и 1B–241B, лицензии Apache 2.0 и MIT, запуск от процессора до кластера, документы, фото и видео.",
    verdict: "Обе линейки читают документы, отвечают по фото и разбирают видео, обе масштабируются от процессора до кластера. Qwen-VL от Alibaba есть в Ollama, поэтому поставить её на сервер проще всего; свежая Qwen3-VL идёт под Apache 2.0, а у старых Qwen-VL и части Qwen2/2.5-VL (3B, 72B) собственные лицензии Qwen, это стоит проверить до внедрения. InternVL от Shanghai AI Laboratory обновлялась позже (2026-03 против 2025-10) и начинается с 1B, а версия InternVL-U на 4B под MIT ещё и генерирует и правит картинки. В каталоге Qwen-VL отмечен для бухгалтерии, розницы, e-commerce и поддержки, InternVL — для документооборота, промышленности с контролем качества и e-commerce.",
    choose_a: [
      "Нужен простой запуск: Qwen-VL есть в Ollama, InternVL — нет",
      "Задача — агент, который работает с интерфейсом по скриншотам",
      "Разбираете сканы счетов и накладных, фото витрин и записи с камер"
    ],
    choose_b: [
      "Нужна одна модель и на понимание, и на генерацию картинок: InternVL-U (4B) под MIT",
      "Важна самая свежая версия: последний релиз InternVL — 2026-03",
      "Контроль качества на производстве, схемы и графики в документах"
    ],
    title_en: "Qwen-VL vs InternVL: open vision models compared",
    h1_en: "Qwen-VL or InternVL: which vision model to choose",
    description_en: "Qwen-VL vs InternVL: 2B–235B and 1B–241B sizes, Apache 2.0 and MIT licensing, CPU to cluster deployment, documents, photos and video.",
    verdict_en: "Both families read documents, answer questions about photos and analyse video, and both scale from a CPU to a cluster. Qwen-VL from Alibaba is available in Ollama, which makes deployment the simplest; the current Qwen3-VL is Apache 2.0, while older Qwen-VL and some Qwen2/2.5-VL models (3B, 72B) carry their own Qwen licenses, so check that before rollout. InternVL from Shanghai AI Laboratory was updated more recently (2026-03 vs 2025-10) and starts at 1B, and the 4B InternVL-U under MIT also generates and edits images. The catalog lists Qwen-VL for accounting, retail, e-commerce and support, and InternVL for document workflow, manufacturing quality control and e-commerce.",
    choose_a_en: [
      "You want a simple install: Qwen-VL is in Ollama, InternVL is not",
      "You need an agent that operates an interface from screenshots",
      "You process scanned invoices and delivery notes, shelf photos and camera footage"
    ],
    choose_b_en: [
      "You want one model for both understanding and image generation: InternVL-U (4B) under MIT",
      "You want the most recent release: InternVL was last updated 2026-03",
      "Your work is manufacturing quality control, diagrams and charts in documents"
    ]
  },
  {
    a: "minicpm-v", b: "qwen-vl", slug: "minicpm-v-vs-qwen-vl",
    title: "MiniCPM-V или Qwen-VL: модель зрения под задачу",
    h1: "MiniCPM-V или Qwen-VL: что выбрать для распознавания фото",
    description: "MiniCPM-V и Qwen-VL: 1.3B–8B против 2B–235B, Apache 2.0, работа на телефоне или на кластере, чеки, документы, видео и интерфейсы.",
    verdict: "MiniCPM-V от OpenBMB — компактная линейка от 1.3B до 8B, которая запускается на телефоне и ноутбуке, поэтому чеки и документы можно разбирать прямо на устройстве, без отправки в облако. Qwen-VL от Alibaba тянется до 235B-A22B и закрывает более тяжёлые сценарии: анализ видео с камер и агента, который работает с интерфейсом по скриншотам. Обе есть в Ollama и обе запускаются без видеокарты в младших размерах. MiniCPM-V сейчас под Apache 2.0, но у ранних версий была своя лицензия с регистрацией для коммерции; у Qwen-VL Apache 2.0 только у Qwen3-VL, у старых версий собственные лицензии Qwen. MiniCPM-V обновлялась позже: версия 4.6 вышла в 2026-05.",
    choose_a: [
      "Модель должна работать в мобильном приложении или на ноутбуке сотрудника",
      "Данные нельзя отправлять в облако: чеки и документы разбираются на устройстве",
      "Нужен минимальный размер: версия 4.6 весит всего 1.3B"
    ],
    choose_b: [
      "Нужен верхний предел по размеру: Qwen-VL доходит до 235B-A22B и идёт на кластере",
      "Задача — анализ видео и записей с камер",
      "Нужен агент, который действует по скриншотам интерфейса"
    ],
    title_en: "MiniCPM-V vs Qwen-VL: picking a vision model",
    h1_en: "MiniCPM-V or Qwen-VL: which to choose for image recognition",
    description_en: "MiniCPM-V vs Qwen-VL: 1.3B–8B against 2B–235B, Apache 2.0, phone or cluster deployment, receipts, documents, video and interfaces.",
    verdict_en: "MiniCPM-V from OpenBMB is a compact line from 1.3B to 8B that runs on a phone or laptop, so receipts and documents can be processed on the device without sending anything to the cloud. Qwen-VL from Alibaba reaches 235B-A22B and covers heavier scenarios: camera footage analysis and an agent that operates an interface from screenshots. Both are in Ollama and both run without a GPU in their smaller sizes. MiniCPM-V is now Apache 2.0, though early versions had their own license requiring registration for commercial use; with Qwen-VL, Apache 2.0 applies only to Qwen3-VL, while older versions carry their own Qwen licenses. MiniCPM-V was updated later: version 4.6 shipped in 2026-05.",
    choose_a_en: [
      "The model has to run inside a mobile app or on an employee laptop",
      "Data cannot leave the device: receipts and documents are processed locally",
      "You need the smallest possible model: version 4.6 is just 1.3B"
    ],
    choose_b_en: [
      "You need headroom: Qwen-VL goes up to 235B-A22B and runs on a cluster",
      "Your task is analysing video and camera footage",
      "You need an agent that acts on interface screenshots"
    ]
  },
  {
    a: "got-ocr", b: "paddleocr-vl", slug: "got-ocr-vs-paddleocr-vl",
    title: "GOT-OCR 2.0 или PaddleOCR-VL: что брать под сканы",
    h1: "GOT-OCR 2.0 или PaddleOCR-VL: какая OCR-модель нужна",
    description: "GOT-OCR 2.0 и PaddleOCR-VL: 580M против 0.9B, обе под Apache 2.0 и без видеокарты. Русский язык, таблицы, формулы, печати, вывод в Markdown.",
    verdict: "Обе модели маленькие, обе под Apache 2.0 без оговорок по коммерции и обе работают на обычном компьютере без мощной видеокарты. GOT-OCR 2.0 от StepFun весит 580M, читает текст, формулы, таблицы, ноты и схемы, но последний релиз у неё 2024-11, и в каталоге прямо сказано, что она уступает новинкам. PaddleOCR-VL от Baidu на 0.9B обновлялась до 2026-05 и по карточке поддерживает 109 языков, включая русский, распознаёт таблицы, формулы и печати и отдаёт результат в Markdown и JSON. Для русских счетов и договоров выбор практически однозначный.",
    choose_a: [
      "Нужна самая маленькая модель: 580M против 0.9B",
      "В документах встречаются ноты и нестандартные схемы",
      "Задача разовая, требований к русскому языку нет"
    ],
    choose_b: [
      "Документы на русском: в каталоге PaddleOCR-VL отмечена поддержка русского",
      "Нужны таблицы, формулы и печати, а на выходе Markdown или JSON",
      "Важна свежесть: версия 1.6 вышла в 2026-05"
    ],
    title_en: "GOT-OCR 2.0 vs PaddleOCR-VL: which OCR to use",
    h1_en: "GOT-OCR 2.0 or PaddleOCR-VL: choosing an OCR model",
    description_en: "GOT-OCR 2.0 vs PaddleOCR-VL: 580M against 0.9B, both Apache 2.0 and CPU-friendly. Russian support, tables, formulas, stamps, Markdown output.",
    verdict_en: "Both models are small, both are Apache 2.0 with no commercial strings attached, and both run on an ordinary computer without a powerful GPU. GOT-OCR 2.0 from StepFun is 580M and reads text, formulas, tables, sheet music and diagrams, but its last release was 2024-11 and the catalog states plainly that it now lags behind newer models. PaddleOCR-VL from Baidu is 0.9B, was updated through 2026-05, and per its model card supports 109 languages including Russian, recognises tables, formulas and stamps, and outputs Markdown and JSON. For Russian invoices and contracts the choice is close to obvious.",
    choose_a_en: [
      "You need the smallest model: 580M against 0.9B",
      "Your documents contain sheet music or unusual diagrams",
      "It is a one-off job with no Russian-language requirement"
    ],
    choose_b_en: [
      "Your documents are in Russian: the catalog marks PaddleOCR-VL as supporting it",
      "You need tables, formulas and stamps with Markdown or JSON output",
      "You want something current: version 1.6 shipped in 2026-05"
    ]
  },
  {
    a: "dots-ocr", b: "deepseek-ocr", slug: "dots-ocr-vs-deepseek-ocr",
    title: "dots.ocr или DeepSeek-OCR: разбор документов",
    h1: "dots.ocr или DeepSeek-OCR: какая модель разберёт документы",
    description: "dots.ocr и DeepSeek-OCR: обе около 3B, MIT и Apache 2.0, видеокарта нужна обеим. Русский язык, таблицы, SVG-схемы, поток сканов и RAG.",
    verdict: "Модели одного класса: обе около 3B, обе требуют видеокарту и обе доводят сканы до Markdown для поиска и RAG. dots.ocr от rednote hilab под MIT, в каталоге отмечена поддержка русского, разбирает текст, таблицы, формулы и порядок чтения за один проход, а версия dots.mocr-svg переводит графики и схемы в векторный SVG. DeepSeek-OCR сжимает страницу в небольшое число визуальных токенов, поэтому её берут под массовую обработку; DeepSeek-OCR под MIT, вторая версия под Apache 2.0, и она есть в Ollama, чего у dots.ocr нет. По русскому языку у DeepSeek-OCR в каталоге данных нет.",
    choose_a: [
      "Документы на русском: у dots.ocr поддержка русского отмечена в каталоге",
      "Нужны графики и схемы в векторе: dots.mocr-svg отдаёт SVG",
      "Важен порядок чтения сложной вёрстки за один проход"
    ],
    choose_b: [
      "Поток сканов большой: страница сжимается в небольшое число визуальных токенов",
      "Хотите поставить модель через Ollama",
      "Нужна версия под Apache 2.0: это DeepSeek-OCR 2 (2026-01)"
    ],
    title_en: "dots.ocr vs DeepSeek-OCR: document parsing compared",
    h1_en: "dots.ocr or DeepSeek-OCR: which parses documents better for you",
    description_en: "dots.ocr vs DeepSeek-OCR: both about 3B, MIT and Apache 2.0, both need a GPU. Russian support, tables, SVG diagrams, bulk scans and RAG.",
    verdict_en: "These are models of the same class: both about 3B, both need a GPU, and both turn scans into Markdown for search and RAG. dots.ocr from rednote hilab is MIT-licensed, is marked in the catalog as supporting Russian, and handles text, tables, formulas and reading order in one pass, while dots.mocr-svg converts charts and diagrams into vector SVG. DeepSeek-OCR compresses a page into a small number of visual tokens, which is why it is chosen for bulk processing; DeepSeek-OCR is MIT, version 2 is Apache 2.0, and it is available in Ollama, which dots.ocr is not. The catalog has no Russian-language data for DeepSeek-OCR.",
    choose_a_en: [
      "Your documents are in Russian: the catalog marks dots.ocr as supporting it",
      "You need charts and diagrams as vectors: dots.mocr-svg outputs SVG",
      "Reading order across complex layouts matters, in a single pass"
    ],
    choose_b_en: [
      "You have a large volume of scans: pages compress into few visual tokens",
      "You want to install the model through Ollama",
      "You need an Apache 2.0 version: that is DeepSeek-OCR 2 (2026-01)"
    ]
  },
  {
    a: "florence-2", b: "grounding-dino", slug: "florence-2-vs-grounding-dino",
    title: "Florence-2 или Grounding DINO: поиск объектов на фото",
    h1: "Florence-2 или Grounding DINO: что выбрать для поиска объектов",
    description: "Florence-2 и Grounding DINO: 0.23B–0.77B против 172M–3B, MIT против Apache 2.0 и своей лицензии IDEA. Подписи, сегментация, поиск по описанию.",
    verdict: "Florence-2 от Microsoft — очень маленькая модель под MIT, которая одной командой делает подписи, поиск объектов, сегментацию и чтение текста на фото; работает на процессоре и хороша как универсальный инструмент разметки. Grounding DINO от IDEA Research заточен под одно: найти на картинке объект по текстовому описанию вроде «человек без каски», без обучения на своих данных. С лицензиями разница принципиальная: у Florence-2 чистый MIT, а у Grounding DINO коммерция с условиями — сам Grounding DINO под Apache 2.0, но новое поколение Rex-Omni идёт под собственной IDEA License на базе Qwen Research License, её нужно читать до запуска в продакшн.",
    choose_a: [
      "Нужен один инструмент сразу на подписи, сегментацию и чтение текста",
      "Важна простая лицензия MIT без условий по коммерции",
      "Работать надо на процессоре, модель от 0.23B"
    ],
    choose_b: [
      "Нужно искать объекты по произвольному текстовому описанию без разметки",
      "Задача — автоматическая разметка данных под обучение своей модели",
      "Проверка фото на соответствие требованиям: видеоаналитика, ритейл, безопасность"
    ],
    title_en: "Florence-2 vs Grounding DINO: finding objects in images",
    h1_en: "Florence-2 or Grounding DINO: which to choose for object detection",
    description_en: "Florence-2 vs Grounding DINO: 0.23B–0.77B against 172M–3B, MIT against Apache 2.0 plus IDEA's own license. Captions, segmentation, text-prompted search.",
    verdict_en: "Florence-2 from Microsoft is a very small MIT-licensed model that produces captions, object detection, segmentation and text reading from a single prompt; it runs on a CPU and works well as a general labelling tool. Grounding DINO from IDEA Research is built for one thing: finding an object in an image from a text description such as a person without a hard hat, with no training on your own data. The licensing difference matters: Florence-2 is plain MIT, while Grounding DINO's commercial use comes with conditions — Grounding DINO itself is Apache 2.0, but the newer Rex-Omni generation uses IDEA's own license based on the Qwen Research License, which you need to read before production.",
    choose_a_en: [
      "You want one tool covering captions, segmentation and text reading at once",
      "You want plain MIT licensing with no commercial conditions",
      "You have to run on a CPU, starting from 0.23B"
    ],
    choose_b_en: [
      "You need to find objects from an arbitrary text description with no labeling",
      "Your task is automatic data labeling to train your own model",
      "You check photos against requirements: video analytics, retail, security"
    ]
  },
  {
    a: "yolo", b: "grounding-dino", slug: "yolo-vs-grounding-dino",
    title: "YOLO или Grounding DINO: детекция для видеоаналитики",
    h1: "YOLO или Grounding DINO: что ставить на видеоаналитику",
    description: "YOLO и Grounding DINO: 2.4M–68M против 172M–3B, AGPL-3.0 или платная лицензия против Apache 2.0 и IDEA License. Обе с условиями по коммерции.",
    verdict: "YOLO от Ultralytics — самый распространённый детектор реального времени: от 2.4M до 68M параметров, работает на слабом железе и считает людей, машины и товары прямо на видеопотоке. Grounding DINO ищет объекты по текстовому описанию и не требует размечать и дообучать модель под каждый новый класс. Лицензии с условиями у обеих, и условия разные: YOLO под AGPL-3.0, то есть код продукта придётся открыть, либо нужна платная корпоративная лицензия Ultralytics; у Grounding DINO базовая версия под Apache 2.0, а Rex-Omni — под собственной IDEA License на базе Qwen Research License. YOLO обновлялся до 2026-01 (YOLO26), Grounding DINO — до 2025-10.",
    choose_a: [
      "Нужен постоянный поток с камер: подсчёт людей, машин, товаров в реальном времени",
      "Железо слабое: модели от 2.4M параметров",
      "Готовы либо открыть код продукта по AGPL-3.0, либо купить лицензию Ultralytics"
    ],
    choose_b: [
      "Классы объектов меняются часто, размечать датасет под каждый нет смысла",
      "Нужен поиск по описанию вида «человек без каски» без обучения",
      "Задача — подготовить размеченные данные для обучения другой модели"
    ],
    title_en: "YOLO vs Grounding DINO: detection for video analytics",
    h1_en: "YOLO or Grounding DINO: which detector for video analytics",
    description_en: "YOLO vs Grounding DINO: 2.4M–68M against 172M–3B, AGPL-3.0 or a paid license against Apache 2.0 and the IDEA License. Both have commercial conditions.",
    verdict_en: "YOLO from Ultralytics is the most widely used real-time detector: 2.4M to 68M parameters, running on modest hardware and counting people, vehicles and goods straight from a video feed. Grounding DINO finds objects from a text description and needs no labeling or fine-tuning for each new class. Both have conditional commercial licensing, and the conditions differ: YOLO is AGPL-3.0, meaning you would have to open your product's code, or you buy an Ultralytics enterprise license; Grounding DINO's base version is Apache 2.0, while Rex-Omni uses IDEA's own license based on the Qwen Research License. YOLO was updated through 2026-01 (YOLO26), Grounding DINO through 2025-10.",
    choose_a_en: [
      "You have a constant camera feed: counting people, vehicles and goods in real time",
      "Your hardware is modest: models start at 2.4M parameters",
      "You can either open your product's code under AGPL-3.0 or buy the Ultralytics license"
    ],
    choose_b_en: [
      "Your object classes change often and labeling a dataset for each makes no sense",
      "You need description-based search such as a person without a hard hat, with no training",
      "Your task is preparing labeled data to train another model"
    ]
  },
  {
    a: "rmbg", b: "birefnet", slug: "rmbg-vs-birefnet",
    title: "BRIA RMBG или BiRefNet: удаление фона на фото",
    h1: "BRIA RMBG или BiRefNet: чем удалять фон на фото товаров",
    description: "BRIA RMBG и BiRefNet: 44M–220M против примерно 220M, обе идут на процессоре. Ключевая разница в лицензии: RMBG для бизнеса только платно.",
    verdict: "Модели близкие: RMBG-2.0 построен на BiRefNet, обе весят около 220M, обе работают на процессоре и обе дают мягкие края, волосы и прозрачность. Разница в праве использования. BRIA RMBG идёт под некоммерческой лицензией BRIA (RMBG-2.0 — CC BY-NC 4.0), и для бизнеса нужен платный договор с BRIA; зато в линейке есть видеоверсии VRMBG-2.0 и VRMBG-3.0 (2026-05). BiRefNet от Нанькайского университета под MIT, без оговорок, с версиями для 2K и для волос и полупрозрачных краёв. Если нужен поток товарных фото в коммерческом проекте без переговоров о лицензии, берите BiRefNet.",
    choose_a: [
      "Нужно удалять фон на видео: в линейке есть VRMBG-2.0 и VRMBG-3.0",
      "Важно, что модель обучена на лицензированных фото",
      "Вы готовы заключить платный договор с BRIA или используете модель некоммерчески"
    ],
    choose_b: [
      "Коммерческий проект без переговоров о лицензии: BiRefNet под MIT",
      "Поток товарных фото на маркетплейс, маски для дизайна и печати",
      "Нужны 2K и аккуратные волосы и полупрозрачные края"
    ],
    title_en: "BRIA RMBG vs BiRefNet: background removal compared",
    h1_en: "BRIA RMBG or BiRefNet: which to use for background removal",
    description_en: "BRIA RMBG vs BiRefNet: 44M–220M against about 220M, both CPU-friendly. The real difference is licensing: RMBG needs a paid deal for business use.",
    verdict_en: "The two are closely related: RMBG-2.0 is built on BiRefNet, both are around 220M, both run on a CPU, and both handle soft edges, hair and transparency. The difference is in usage rights. BRIA RMBG ships under BRIA's non-commercial license (RMBG-2.0 is CC BY-NC 4.0) and business use requires a paid agreement with BRIA; in exchange the line includes the VRMBG-2.0 and VRMBG-3.0 video versions (2026-05). BiRefNet from Nankai University is MIT with no conditions, with versions for 2K and for hair and semi-transparent edges. If you need a stream of product photos in a commercial project without license negotiations, take BiRefNet.",
    choose_a_en: [
      "You need background removal in video: the line includes VRMBG-2.0 and VRMBG-3.0",
      "It matters to you that the model was trained on licensed photos",
      "You are ready to sign a paid BRIA agreement, or your use is non-commercial"
    ],
    choose_b_en: [
      "A commercial project with no license negotiation: BiRefNet is MIT",
      "Bulk product photos for marketplaces, masks for design and print",
      "You need 2K output and clean hair and semi-transparent edges"
    ]
  },
  {
    a: "real-esrgan", b: "supir", slug: "real-esrgan-vs-supir",
    title: "Real-ESRGAN или SUPIR: увеличение и восстановление фото",
    h1: "Real-ESRGAN или SUPIR: чем увеличивать и чинить фотографии",
    description: "Real-ESRGAN и SUPIR: около 17M на процессоре под BSD-3-Clause против модели на базе SDXL с видеокартой и только некоммерческой лицензией.",
    verdict: "Разные весовые категории и, главное, разные права. Real-ESRGAN от Tencent ARC Lab весит около 17M, работает даже на процессоре, увеличивает фото в 2–4 раза и чистит шум и артефакты сжатия; лицензия BSD-3-Clause, коммерческое использование без оговорок. SUPIR построен на SDXL и дополнительно использует LLaVA 13B для описаний, требует видеокарту и не просто увеличивает, а дорисовывает детали на сильно испорченных снимках. Но лицензия SUPIR разрешает только некоммерческое использование, коммерция — по письменному разрешению авторов, поэтому в продукт её без договорённости не поставить. Real-ESRGAN последний раз обновлялся в 2022-04, SUPIR вышел в 2024-02.",
    choose_a: [
      "Проект коммерческий: BSD-3-Clause не накладывает условий",
      "Нужен поток: мелкие фото товаров, чистка артефактов, подготовка к печати",
      "Видеокарты нет, модель должна идти на процессоре"
    ],
    choose_b: [
      "Снимок испорчен настолько, что детали надо дорисовывать, а не масштабировать",
      "Это исследование, пилот или реставрация архива без коммерции",
      "Есть видеокарта и вы готовы запрашивать у авторов письменное разрешение"
    ],
    title_en: "Real-ESRGAN vs SUPIR: upscaling and photo restoration",
    h1_en: "Real-ESRGAN or SUPIR: which to use for upscaling photos",
    description_en: "Real-ESRGAN vs SUPIR: about 17M on a CPU under BSD-3-Clause against an SDXL-based model that needs a GPU and is non-commercial only.",
    verdict_en: "Different weight classes and, more importantly, different rights. Real-ESRGAN from Tencent ARC Lab is about 17M, runs even on a CPU, upscales photos 2–4x and cleans noise and compression artifacts; it is BSD-3-Clause, so commercial use has no strings. SUPIR is built on SDXL and additionally uses LLaVA 13B for captions, requires a GPU, and does not merely upscale but recreates detail in badly damaged images. However, SUPIR's license permits non-commercial use only, with commercial use requiring the authors' written permission, so it cannot go into a product without that agreement. Real-ESRGAN was last updated in 2022-04; SUPIR shipped in 2024-02.",
    choose_a_en: [
      "Your project is commercial: BSD-3-Clause imposes no conditions",
      "You need throughput: small product photos, artifact cleanup, print preparation",
      "You have no GPU and the model has to run on a CPU"
    ],
    choose_b_en: [
      "The image is damaged enough that detail must be recreated, not just scaled",
      "This is research, a pilot or an archive restoration with no commercial use",
      "You have a GPU and are ready to request written permission from the authors"
    ]
  },
  {
    a: "stable-diffusion", b: "kandinsky", slug: "stable-diffusion-vs-kandinsky",
    title: "Stable Diffusion или Kandinsky: генерация картинок",
    h1: "Stable Diffusion или Kandinsky: что выбрать для генерации картинок",
    description: "Stable Diffusion и Kandinsky: 0.9B–8B против 2B–19B, лицензии Stability Community против Apache 2.0 и MIT, русские запросы и видео у Kandinsky.",
    verdict: "Stable Diffusion от Stability AI — модель, с которой началась открытая генерация картинок, и главный её аргумент до сих пор экосистема: дообучения, стили, плагины, готовые ускорители. Но лицензии у семейства разные: SD 1.x под CreativeML OpenRAIL-M, SDXL под OpenRAIL++, SD3 и SD3.5 под Stability AI Community License с бесплатным порогом до 1 млн долларов выручки в год, а Stable Cascade вообще под некоммерческой исследовательской лицензией, так что коммерция с условиями. Kandinsky от Сбера открыт под Apache 2.0 для версий 2.x–4 и под MIT для Kandinsky 5 и WM 1.0, понимает запросы на русском и российский культурный контекст, умеет ещё и видео, и обновлялся до 2026-07. В каталоге Kandinsky отмечен для госсектора и компаний с требованиями к российскому ПО.",
    choose_a: [
      "Вы опираетесь на дообучения, стили и плагины вокруг SD и SDXL",
      "Нужно дообучить модель под фирменный стиль на готовой базе",
      "Черновые визуалы и баннеры, а лицензию конкретной версии вы проверите отдельно"
    ],
    choose_b: [
      "Запросы на русском и российский культурный контекст",
      "Нужны и картинки, и короткие ролики из одной линейки",
      "Госсектор или требование использовать российское ПО; лицензии Apache 2.0 и MIT"
    ],
    title_en: "Stable Diffusion vs Kandinsky: open image generation",
    h1_en: "Stable Diffusion or Kandinsky: which image model to choose",
    description_en: "Stable Diffusion vs Kandinsky: 0.9B–8B against 2B–19B, Stability Community licensing against Apache 2.0 and MIT, Russian prompts and video.",
    verdict_en: "Stable Diffusion from Stability AI is the model that started open image generation, and its strongest argument is still the ecosystem: fine-tunes, styles, plugins and ready-made accelerators. But the family's licensing varies: SD 1.x is CreativeML OpenRAIL-M, SDXL is OpenRAIL++, SD3 and SD3.5 use the Stability AI Community License that is free under 1 million dollars of annual revenue, and Stable Cascade is a non-commercial research license, so commercial use comes with conditions. Kandinsky from Sber is Apache 2.0 for versions 2.x–4 and MIT for Kandinsky 5 and WM 1.0, understands Russian-language prompts and Russian cultural context, also does video, and was updated through 2026-07. The catalog lists Kandinsky for the public sector and companies required to use Russian software.",
    choose_a_en: [
      "You rely on the fine-tunes, styles and plugins built around SD and SDXL",
      "You need to fine-tune to a brand style on an established base",
      "You need draft visuals and banners, and will check the specific version's license"
    ],
    choose_b_en: [
      "Your prompts are in Russian and the context is Russian",
      "You need both images and short videos from one family",
      "Public sector or a mandate for Russian software; licensing is Apache 2.0 and MIT"
    ]
  },
  {
    a: "flux", b: "hidream", slug: "flux-vs-hidream",
    title: "FLUX или HiDream: генерация и правка изображений",
    h1: "FLUX или HiDream: что выбрать для картинок и их редактирования",
    description: "FLUX и HiDream: 4B–32B против примерно 9B–17B, обе на видеокарте. У FLUX версии [dev] некоммерческие, HiDream целиком под MIT.",
    verdict: "Обе линейки требуют видеокарту и обе закрывают генерацию и редактирование изображений для маркетплейсов, маркетинга и дизайн-студий. FLUX от Black Forest Labs хорошо рисует текст на изображении и держит композицию, а Kontext правит фото по описанию; но коммерция с условиями: под Apache 2.0 идут только FLUX.1 [schnell] и FLUX.2 [klein] 4B, а все версии [dev] некоммерческие, то есть в продукт их без пересмотра лицензии не поставить. HiDream от HiDream.ai целиком под MIT: I1 генерирует, E1 правит по инструкции, а O1-Image (2026-05) делает и то и другое одной моделью. Если важна чистая лицензия на всю линейку, это HiDream; если нужен конкретный сценарий FLUX, берите открытые schnell или klein.",
    choose_a: [
      "Нужен текст прямо на изображении и устойчивая композиция",
      "Правка фото по описанию через Kontext",
      "Вас устраивают открытые версии: FLUX.1 [schnell] и FLUX.2 [klein] 4B под Apache 2.0"
    ],
    choose_b: [
      "Нужна простая лицензия на всю линейку: HiDream под MIT",
      "Генерация и редактирование в одной модели: O1-Image (2026-05)",
      "Вариации продуктовых фото для e-commerce и маркетинга"
    ],
    title_en: "FLUX vs HiDream: image generation and editing",
    h1_en: "FLUX or HiDream: which to choose for images and editing",
    description_en: "FLUX vs HiDream: 4B–32B against about 9B–17B, both GPU-only. FLUX's [dev] versions are non-commercial, while HiDream is fully MIT.",
    verdict_en: "Both families need a GPU and both cover image generation and editing for marketplaces, marketing and design studios. FLUX from Black Forest Labs renders text inside images well and holds composition, and Kontext edits photos from a description; but commercial use has conditions: only FLUX.1 [schnell] and FLUX.2 [klein] 4B are Apache 2.0, while every [dev] version is non-commercial and cannot go into a product without revisiting the license. HiDream from HiDream.ai is fully MIT: I1 generates, E1 edits from instructions, and O1-Image (2026-05) does both in one model. If clean licensing across the whole line matters, pick HiDream; if you need a specific FLUX capability, use the open schnell or klein.",
    choose_a_en: [
      "You need text rendered inside the image and reliable composition",
      "You want photo editing from a description through Kontext",
      "The open versions suit you: FLUX.1 [schnell] and FLUX.2 [klein] 4B under Apache 2.0"
    ],
    choose_b_en: [
      "You want simple licensing across the whole line: HiDream is MIT",
      "You want generation and editing in one model: O1-Image (2026-05)",
      "You need product photo variations for e-commerce and marketing"
    ]
  },
  {
    a: "hunyuan-video", b: "wan", slug: "hunyuan-video-vs-wan",
    title: "HunyuanVideo или Wan: открытая генерация видео",
    h1: "HunyuanVideo или Wan: какую видеомодель брать",
    description: "HunyuanVideo и Wan: 8.3B–13B против 1,3B–14B. Лицензия Tencent не действует в ЕС, Великобритании и Корее, Wan идёт под Apache 2.0.",
    verdict: "Обе модели делают видео по тексту и по картинке и обеим нужна видеокарта. Решающим чаще оказывается вопрос лицензии: HunyuanVideo от Tencent идёт под Tencent Hunyuan Community License, которая не действует в ЕС, Великобритании и Южной Корее, поэтому для проектов с этими юрисдикциями она отпадает. Wan от Alibaba под Apache 2.0 без таких ограничений, младшая версия на 1,3B запускается на игровой видеокарте, и линейка обновлялась до 2026-07. При этом у Wan после версии 2.2 базовые модели открыто не выходят, только прикладные: монтаж VACE, говорящие персонажи по звуку S2V и танцы под музыку Dancer. HunyuanVideo 1.5 стала легче (8.3B) и остаётся хорошей базой для дообучения своих видеомоделей.",
    choose_a: [
      "Нужна база для дообучения собственной видеомодели",
      "Версия 1.5 на 8.3B идёт на потребительской видеокарте",
      "Юрисдикция проекта вне ЕС, Великобритании и Южной Кореи"
    ],
    choose_b: [
      "Нужна лицензия Apache 2.0 без географических ограничений",
      "Прикладные сценарии: монтаж (VACE), говорящие персонажи по звуку (S2V), танцы (Dancer)",
      "Железо скромное: младшая версия на 1,3B идёт на игровой видеокарте"
    ],
    title_en: "HunyuanVideo vs Wan: open video generation compared",
    h1_en: "HunyuanVideo or Wan: which open video model to choose",
    description_en: "HunyuanVideo vs Wan: 8.3B–13B against 1.3B–14B. Tencent's license does not apply in the EU, UK and South Korea; Wan is Apache 2.0.",
    verdict_en: "Both models generate video from text and from an image, and both need a GPU. The deciding factor is usually licensing: HunyuanVideo from Tencent uses the Tencent Hunyuan Community License, which is not valid in the EU, the UK and South Korea, so it is out for projects tied to those jurisdictions. Wan from Alibaba is Apache 2.0 with no such limits, its smallest 1.3B version runs on a gaming GPU, and the line was updated through 2026-07. Note that after version 2.2 Wan no longer releases open base models, only applied ones: VACE editing, audio-driven talking characters (S2V) and dancing to music (Dancer). HunyuanVideo 1.5 became lighter (8.3B) and remains a solid base for fine-tuning your own video models.",
    choose_a_en: [
      "You need a base for fine-tuning your own video model",
      "Version 1.5 at 8.3B runs on a consumer GPU",
      "Your project sits outside the EU, the UK and South Korea"
    ],
    choose_b_en: [
      "You need Apache 2.0 licensing with no geographic restrictions",
      "Applied scenarios: editing (VACE), audio-driven talking characters (S2V), dancing (Dancer)",
      "Modest hardware: the smallest 1.3B version runs on a gaming GPU"
    ]
  }
];
