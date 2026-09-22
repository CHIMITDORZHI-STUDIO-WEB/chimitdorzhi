// Страницы сравнения «X или Y» для энциклопедии открытых моделей, вторая партия.
// Все факты взяты из tools/models-data.js (summary, tasks, where, sizes, license,
// commercial, hardware, ru, ollama, cpu, versions, first, latest). Бенчмарков,
// скорости и качества сверх того, что есть в данных, здесь нет.
module.exports = [
  {
    a: "gpt-oss", b: "qwen", slug: "gpt-oss-vs-qwen",
    title: "gpt-oss или Qwen: что выбрать для своего сервера",
    h1: "gpt-oss или Qwen: что выбрать для своего сервера",
    description: "gpt-oss и Qwen: Apache 2.0 против своей лицензии у старших Qwen3.8, размеры 20B и 120B против 0,6B – 2,4T, обе ставятся через Ollama.",
    verdict: "Обе линейки ставятся через Ollama и живут в закрытом контуре без облака. gpt-oss существует в двух размерах, 20B и 120B, целиком под Apache 2.0 с разрешённой коммерцией без оговорок, но для запуска нужна видеокарта. Qwen тянется от 0,6B, работает и на процессоре, и в каталоге отмечен как модель с русским языком, зато у старших Qwen3.8 своя лицензия и коммерция с условиями. По датам gpt-oss в каталоге один релиз, август 2025, а версии Qwen выходят вплоть до августа 2026.",
    choose_a: [
      "Нужна простая Apache 2.0 без оговорок по коммерческому использованию",
      "Строите корпоративного агента, который вызывает внутренние системы",
      "Есть видеокарта: младшая gpt-oss-20b помещается на одну"
    ],
    choose_b: [
      "Ассистент должен отвечать на русском: у Qwen язык отмечен, у gpt-oss не заявлен",
      "Железо без видеокарты: Qwen начинается с 0,6B и идёт на процессоре",
      "Нужны свежие версии и выбор размеров вплоть до 2,4T-A95B"
    ],
    title_en: "gpt-oss vs Qwen: which open model for your server",
    h1_en: "gpt-oss or Qwen: which one to run on your own server",
    description_en: "gpt-oss vs Qwen: Apache 2.0 against a custom license on larger Qwen3.8, sizes 20B and 120B against 0.6B to 2.4T, both available in Ollama.",
    verdict_en: "Both families install through Ollama and run in a closed environment with no cloud. gpt-oss comes in two sizes, 20B and 120B, entirely under Apache 2.0 with unconditional commercial use, but it needs a GPU. Qwen starts at 0.6B, runs on a CPU and is listed in the catalog as supporting Russian, though the larger Qwen3.8 models carry their own license and conditional commercial terms. On dates, the catalog has a single gpt-oss release from August 2025, while Qwen versions continue through August 2026.",
    choose_a_en: [
      "You want plain Apache 2.0 with no strings attached to commercial use",
      "You are building a corporate agent that calls internal systems",
      "You have a GPU: the smaller gpt-oss-20b fits on one card"
    ],
    choose_b_en: [
      "Your assistant must answer in Russian, which Qwen lists and gpt-oss does not",
      "No GPU available: Qwen starts at 0.6B and runs on a CPU",
      "You want current releases and sizes all the way up to 2.4T-A95B"
    ]
  },
  {
    a: "llama", b: "deepseek", slug: "llama-vs-deepseek",
    title: "Llama или DeepSeek: что выбрать для своего контура",
    h1: "Llama или DeepSeek: что выбрать для своего контура",
    description: "Llama и DeepSeek: Llama Community License против MIT, размеры 1B – 405B против 7B – 1.6T-A49B, обе есть в Ollama. Llama идёт без видеокарты.",
    verdict: "Обе семьи есть в Ollama и разворачиваются на своём сервере. У Llama размеры от 1B, запуск без видеокарты, Vision-версии для картинок и самая большая экосистема дообученных моделей и инструментов, но лицензия своя, Llama Community License, с условиями по коммерции. DeepSeek начинается с 7B и требует видеокарту, зато свежие версии под MIT, контекст до 1 млн токенов, а в каталоге линия отмечена для юристов, финансов и ИТ. Последний релиз Llama в каталоге — Llama 4, апрель 2025; у DeepSeek линия доходит до V4.1-Flash, сентябрь 2026.",
    choose_a: [
      "Нужна основа для дообучения под отрасль и готовые дообученные версии",
      "Железо слабое: младшие Llama работают без видеокарты, от 1B",
      "Нужны Vision-версии для разбора картинок"
    ],
    choose_b: [
      "Важна лицензия MIT без оговорок по коммерческому использованию",
      "Работаете с длинными договорами и отчётами: контекст до 1 млн токенов",
      "Строите агентов, которые ходят в инструменты и API"
    ],
    title_en: "Llama vs DeepSeek: open models for a private setup",
    h1_en: "Llama or DeepSeek: which to run inside your own perimeter",
    description_en: "Llama vs DeepSeek: Llama Community License against MIT, sizes 1B to 405B against 7B to 1.6T-A49B, both in Ollama, and Llama runs without a GPU.",
    verdict_en: "Both families ship in Ollama and deploy on your own server. Llama starts at 1B, runs without a GPU, has Vision versions for images and the largest ecosystem of fine-tunes and tooling, but it uses its own Llama Community License with conditions on commercial use. DeepSeek starts at 7B and needs a GPU, yet its recent versions are MIT, context reaches 1M tokens and the catalog lists it for legal, finance and IT teams. The newest Llama in the catalog is Llama 4 from April 2025, while DeepSeek runs through V4.1-Flash in September 2026.",
    choose_a_en: [
      "You need a base for industry fine-tuning plus ready-made fine-tunes",
      "Hardware is modest: smaller Llama models run on a CPU from 1B up",
      "You need Vision versions to work with images"
    ],
    choose_b_en: [
      "You want MIT with no conditions attached to commercial use",
      "You handle long contracts and reports: context runs up to 1M tokens",
      "You are building agents that call tools and APIs"
    ]
  },
  {
    a: "mistral", b: "qwen", slug: "mistral-vs-qwen",
    title: "Mistral или Qwen: сравнение открытых моделей",
    h1: "Mistral или Qwen: что выбрать для бизнеса",
    description: "Mistral и Qwen: у обеих отмечен русский язык, обе в Ollama, размеры от 3B и от 0,6B, Apache 2.0 с оговорками у Medium 3.5 и старших Qwen3.8.",
    verdict: "У обеих в каталоге отмечен русский язык, обе есть в Ollama и запускаются на процессоре в младших размерах. Mistral — европейская линейка с боковыми ветками: Pixtral для картинок, Leanstral для доказательств в Lean, Shieldstral для модерации; большинство версий под Apache 2.0, но у Mistral Medium 3.5 модифицированная MIT, и компаниям с крупной выручкой нужен платный доступ. Qwen шире по размерам, от 0,6B до 2,4T-A95B, и обновлялся в августе 2026, у Mistral последний релиз в каталоге — июль 2026. У старших Qwen3.8 тоже своя лицензия, так что в обоих случаях условия коммерции читаются по конкретной версии.",
    choose_a: [
      "Нужны узкие ветки: картинки Pixtral, доказательства Leanstral, модерация Shieldstral",
      "Проект европейский, и прописка разработчика имеет значение",
      "Задачи на извлечение данных из текста и перевод между языками"
    ],
    choose_b: [
      "Нужен размер меньше 3B: Qwen начинается с 0,6B",
      "Задачи e-commerce: описания товаров, разбор обращений, база знаний",
      "Нужен флагман под кластер: у Qwen это 2,4T-A95B"
    ],
    title_en: "Mistral vs Qwen: open models compared",
    h1_en: "Mistral or Qwen: which to choose for business",
    description_en: "Mistral vs Qwen: both list Russian support and both ship in Ollama, sizes from 3B and from 0.6B, Apache 2.0 with caveats on Medium 3.5 and Qwen3.8.",
    verdict_en: "The catalog marks both as supporting Russian, both are in Ollama and both run on a CPU in their smaller sizes. Mistral is the European line with side branches: Pixtral for images, Leanstral for Lean proofs, Shieldstral for moderation; most versions are Apache 2.0, but Mistral Medium 3.5 uses a modified MIT under which high-revenue companies need paid access. Qwen covers a wider range, 0.6B to 2.4T-A95B, and was updated in August 2026, while the latest Mistral in the catalog is July 2026. The larger Qwen3.8 models also carry their own license, so in both families the commercial terms depend on the exact version.",
    choose_a_en: [
      "You need the side branches: Pixtral images, Leanstral proofs, Shieldstral moderation",
      "The project is European and the vendor jurisdiction matters",
      "Your work is data extraction from text and multilingual translation"
    ],
    choose_b_en: [
      "You need something under 3B: Qwen starts at 0.6B",
      "Your tasks are e-commerce: product copy, ticket triage, knowledge base answers",
      "You need a cluster-scale flagship: Qwen tops out at 2.4T-A95B"
    ]
  },
  {
    a: "gemma", b: "phi", slug: "gemma-vs-phi",
    title: "Gemma или Phi: малые модели для слабого железа",
    h1: "Gemma или Phi: малые модели для слабого железа",
    description: "Gemma и Phi: 270M – 31B против 1.3B – 42B-A6.6B, Gemma Terms на части версий против MIT, обе в Ollama и работают на процессоре.",
    verdict: "Обе линейки рассчитаны на один компьютер, есть в Ollama и запускаются без видеокарты. Gemma опускается до 270M и закрывает мобильные устройства, у неё есть CodeGemma для кода и FunctionGemma 270M для вызова функций, но лицензия разная по версиям: Gemma 4 и DiffusionGemma под Apache 2.0, ранние версии, CodeGemma и FunctionGemma под Gemma Terms of Use. Phi целиком под MIT и в каталоге отмечена с русским языком, а у Gemma он не заявлен. У Phi есть версии с картинками и речью и потолок 42B-A6.6B, Gemma при этом обновлялась позже: июнь 2026 против января 2026.",
    choose_a: [
      "Нужен совсем крошечный размер: Gemma начинается с 270M",
      "Модель пойдёт на телефон, мини-ПК или другое слабое устройство",
      "Нужен разбор фото документов и чеков"
    ],
    choose_b: [
      "Важна MIT на всех версиях без разбора условий",
      "Ассистент должен работать на русском: у Phi он отмечен в каталоге",
      "Задачи с рассуждением и расчётами, образование и аналитика"
    ],
    title_en: "Gemma vs Phi: small models for modest hardware",
    h1_en: "Gemma or Phi: small models for modest hardware",
    description_en: "Gemma vs Phi: 270M to 31B against 1.3B to 42B-A6.6B, Gemma Terms on some versions against MIT, both in Ollama and both run on a CPU.",
    verdict_en: "Both lines are built for a single machine, both are in Ollama and neither needs a GPU. Gemma goes down to 270M and covers mobile devices, with CodeGemma for code and FunctionGemma 270M for function calling, but its licensing splits by version: Gemma 4 and DiffusionGemma are Apache 2.0, while earlier releases, CodeGemma and FunctionGemma fall under the Gemma Terms of Use. Phi is MIT throughout and the catalog lists it as supporting Russian, which Gemma does not claim. Phi also has vision and speech versions and reaches 42B-A6.6B, while Gemma was updated more recently, June 2026 against January 2026.",
    choose_a_en: [
      "You need something truly tiny: Gemma starts at 270M",
      "The model goes on a phone, a mini PC or other low-end hardware",
      "You need to read photos of documents and receipts"
    ],
    choose_b_en: [
      "You want MIT across every version with no terms to parse",
      "Your assistant must work in Russian, which the catalog lists for Phi",
      "Your tasks involve reasoning and calculation, education or analytics"
    ]
  },
  {
    a: "yandexgpt", b: "qwen", slug: "yandexgpt-vs-qwen",
    title: "YandexGPT или Qwen: русский язык и лицензии",
    h1: "YandexGPT или Qwen: что выбрать под русский язык",
    description: "YandexGPT и Qwen: 8B – 100B против 0,6B – 2,4T, у обеих отмечен русский, Qwen ставится через Ollama, у Яндекса лицензия зависит от версии.",
    verdict: "Обе отмечены в каталоге как модели с русским языком, но собраны по-разному. YandexGPT и AliceAI обучены с нуля под русский и российские реалии и подходят компаниям с требованием хранить данные в РФ; при этом AliceAI-Foundation 80B-A3B — базовая модель без инструкт-версии, её надо дообучать под себя, а лицензия у линейки разная: Apache 2.0 у YaLM-100B и AliceAI-Foundation, собственное соглашение у YandexGPT-5-Lite. Qwen ставится одной командой через Ollama, работает на процессоре и даёт размеры от 0,6B, но у старших Qwen3.8 своя лицензия. Свежее обновлялся Яндекс: сентябрь 2026 против августа 2026 у Qwen.",
    choose_a: [
      "Данные должны оставаться в РФ, а модель — знать местные реалии",
      "Готовы дообучать базовую модель под свою отрасль",
      "Задачи медиа и ритейла: тексты, письма, ответы клиентам на русском"
    ],
    choose_b: [
      "Нужен быстрый запуск через Ollama: у YandexGPT его нет",
      "Железо без видеокарты: Qwen работает на процессоре, YandexGPT нет",
      "Нужна готовая инструкт-модель без этапа дообучения"
    ],
    title_en: "YandexGPT vs Qwen: Russian language and licensing",
    h1_en: "YandexGPT or Qwen: which to choose for Russian",
    description_en: "YandexGPT vs Qwen: 8B to 100B against 0.6B to 2.4T, both list Russian, Qwen installs through Ollama, and Yandex licensing varies by version.",
    verdict_en: "The catalog lists both as supporting Russian, but they are built very differently. YandexGPT and AliceAI were trained from scratch around the Russian language and local context and suit companies that must keep data inside Russia; however, AliceAI-Foundation 80B-A3B is a base model with no instruct version, so you fine-tune it yourself, and licensing varies: Apache 2.0 for YaLM-100B and AliceAI-Foundation, a Yandex agreement for YandexGPT-5-Lite. Qwen installs with one Ollama command, runs on a CPU and offers sizes from 0.6B, though the larger Qwen3.8 models have their own license. Yandex shipped more recently: September 2026 against August 2026 for Qwen.",
    choose_a_en: [
      "Data has to stay in Russia and the model should know the local context",
      "You are ready to fine-tune a base model for your own industry",
      "Media and retail work: Russian copy, emails and customer replies"
    ],
    choose_b_en: [
      "You want a one-command Ollama install, which YandexGPT does not offer",
      "No GPU on hand: Qwen runs on a CPU, YandexGPT does not",
      "You need a ready instruct model without a fine-tuning stage"
    ]
  },
  {
    a: "t-pro", b: "gigachat", slug: "t-pro-vs-gigachat",
    title: "T-Pro или GigaChat: русские модели для бизнеса",
    h1: "T-Pro или GigaChat: что выбрать российской компании",
    description: "T-Pro и GigaChat: Apache 2.0 против MIT, 7B – 36B-A3B против 10B-A1.8B – 702B, обе заточены под русский, но в Ollama нет ни одной.",
    verdict: "Обе линейки российские, у обеих отмечен русский язык, и обе открыты для коммерции: T-Pro под Apache 2.0, GigaChat под MIT. T-Pro и T-Lite от Т-Банка дообучены на основе Qwen, держатся в диапазоне 7B – 36B-A3B и рассчитаны на видеокарту, а T-Search 36B-A3B работает как агент многошагового поиска. GigaChat от Сбера шире по размерам, от 10B-A1.8B до 702B-A36B, запускается и на процессоре, а GigaChat3.1-Audio понимает записи до двух часов. В Ollama нет ни той, ни другой, ставить придётся руками; GigaChat обновлялся в сентябре 2026, T-Pro — в июле 2026.",
    choose_a: [
      "Нужна модель на одну видеокарту: T-Pro это 32B",
      "Задачи банков, финтеха, юристов и HR на русском языке",
      "Нужен агент многошагового поиска: T-Search 36B-A3B"
    ],
    choose_b: [
      "Вы госсектор или обязаны хранить данные в РФ",
      "Нужен звук: GigaChat3.1-Audio берёт записи до двух часов",
      "Железо разное: от 10B-A1.8B на процессоре до 702B на кластере"
    ],
    title_en: "T-Pro vs GigaChat: Russian open models for business",
    h1_en: "T-Pro or GigaChat: which one for a Russian company",
    description_en: "T-Pro vs GigaChat: Apache 2.0 against MIT, 7B to 36B-A3B against 10B-A1.8B to 702B, both built for Russian, and neither ships in Ollama.",
    verdict_en: "Both lines are Russian, both list Russian language support and both are open for commercial use: T-Pro under Apache 2.0, GigaChat under MIT. T-Pro and T-Lite from T-Bank are fine-tuned on top of Qwen, stay in the 7B to 36B-A3B range and expect a GPU, while T-Search 36B-A3B acts as a multi-step search agent. GigaChat from Sber covers a wider range, 10B-A1.8B to 702B-A36B, runs on a CPU as well, and GigaChat3.1-Audio handles recordings up to two hours. Neither is in Ollama, so installation is manual; GigaChat was updated in September 2026, T-Pro in July 2026.",
    choose_a_en: [
      "You need a single-GPU model: T-Pro is 32B",
      "Your work is banking, fintech, legal or HR in Russian",
      "You need a multi-step search agent: T-Search 36B-A3B"
    ],
    choose_b_en: [
      "You are a public body or must keep data inside Russia",
      "You need audio: GigaChat3.1-Audio takes recordings up to two hours",
      "Hardware varies: from 10B-A1.8B on a CPU to 702B on a cluster"
    ]
  },
  {
    a: "deepseek-r1", b: "qwq", slug: "deepseek-r1-vs-qwq",
    title: "DeepSeek-R1 или QwQ: рассуждающие модели",
    h1: "DeepSeek-R1 или QwQ: какую рассуждающую модель взять",
    description: "DeepSeek-R1 и QwQ: MIT против Apache 2.0, размеры 1,5B – 671B против единственных 32B, обе в Ollama и думают по шагам перед ответом.",
    verdict: "Обе думают по шагам перед ответом, обе есть в Ollama, лицензии свободные: MIT у R1 и Apache 2.0 у QwQ. R1 даёт выбор от 1,5B до 671B, включая дистиллированные версии, и запускается на процессоре, так что можно начать с маленькой модели и вырасти по мере нагрузки. QwQ существует в одном размере, 32B, и требует видеокарту, зато это готовая рассуждающая модель под расчёты, проверку формул и разбор задач. Русский у QwQ в каталоге отмечен как отсутствующий, а у R1 не заявлен, так что на русских текстах обе стоит проверить на своих данных.",
    choose_a: [
      "Нужен выбор размера: от 1,5B на процессоре до 671B на кластере",
      "Важна лицензия MIT",
      "Задачи юристов и финансов: разбор договоров и спорных случаев по шагам"
    ],
    choose_b: [
      "Устраивает один размер 32B на видеокарте",
      "Нужна именно Apache 2.0",
      "Задачи по математике, инженерии и обучению с пошаговым разбором"
    ],
    title_en: "DeepSeek-R1 vs QwQ: open reasoning models compared",
    h1_en: "DeepSeek-R1 or QwQ: which reasoning model to pick",
    description_en: "DeepSeek-R1 vs QwQ: MIT against Apache 2.0, sizes 1.5B to 671B against a single 32B, both in Ollama and both reason step by step.",
    verdict_en: "Both reason step by step before answering, both are in Ollama, and both licenses are permissive: MIT for R1 and Apache 2.0 for QwQ. R1 offers sizes from 1.5B to 671B, distilled versions included, and runs on a CPU, so you can start small and scale as load grows. QwQ exists in a single 32B size and needs a GPU, but it is a ready reasoning model for calculations, formula checks and working through problems. The catalog marks QwQ as not supporting Russian and makes no claim for R1, so for Russian text you should test both on your own data.",
    choose_a_en: [
      "You want a size range: from 1.5B on a CPU up to 671B on a cluster",
      "The MIT license matters to you",
      "Legal and finance work: contracts and disputed cases broken down step by step"
    ],
    choose_b_en: [
      "A single 32B size on a GPU is fine for you",
      "You specifically need Apache 2.0",
      "Maths, engineering and training tasks with step-by-step breakdowns"
    ]
  },
  {
    a: "glm", b: "qwen", slug: "glm-vs-qwen",
    title: "GLM или Qwen: агенты, код и длинные документы",
    h1: "GLM или Qwen: что выбрать под агентов и документы",
    description: "GLM и Qwen: 1.5B – 744B-A40B против 0,6B – 2,4T, MIT у GLM-4.5 – 5.2 против Apache 2.0 у Qwen, обе в Ollama и идут на процессоре.",
    verdict: "Обе китайские, обе есть в Ollama, обе запускаются на процессоре в младших размерах и поднимаются до кластера. Qwen в каталоге отмечен с русским языком, у GLM он отмечен как отсутствующий, и для русскоязычного продукта это главный водораздел. У GLM лицензия зависит от версии: GLM-4.5 – GLM-5.2 и GLM-5.3-Flash под MIT, у GLM-5.3 своя лицензия с проверкой Z.ai для крупных API-провайдеров, ранние ChatGLM и GLM-4-9B требуют регистрации. Qwen большей частью под Apache 2.0, но у старших Qwen3.8 тоже своя лицензия; обе линейки обновлялись в августе 2026.",
    choose_a: [
      "Нужна MIT: её дают GLM-4.5 – GLM-5.2 и GLM-5.3-Flash",
      "Агентные задачи, помощь программистам и работа с длинными документами",
      "Нужно понимание картинок: это умеет GLM-5.3-Flash"
    ],
    choose_b: [
      "Продукт русскоязычный: у Qwen русский отмечен, у GLM нет",
      "Нужен размер меньше 1.5B: Qwen начинается с 0,6B",
      "Задачи поддержки и e-commerce: обращения, описания товаров, база знаний"
    ],
    title_en: "GLM vs Qwen: agents, code and long documents",
    h1_en: "GLM or Qwen: which to choose for agents and documents",
    description_en: "GLM vs Qwen: 1.5B to 744B-A40B against 0.6B to 2.4T, MIT on GLM-4.5 to 5.2 against Apache 2.0 on Qwen, both in Ollama and both CPU-capable.",
    verdict_en: "Both are Chinese, both ship in Ollama, both run on a CPU in their smaller sizes and scale to a cluster. The catalog marks Qwen as supporting Russian and GLM as not, which is the deciding factor for a Russian-language product. GLM licensing depends on the version: GLM-4.5 through GLM-5.2 and GLM-5.3-Flash are MIT, GLM-5.3 has its own license requiring a Z.ai review for very large API providers, and early ChatGLM and GLM-4-9B require registration. Qwen is mostly Apache 2.0, though the larger Qwen3.8 models also carry their own license; both lines were updated in August 2026.",
    choose_a_en: [
      "You want MIT, which covers GLM-4.5 through GLM-5.2 and GLM-5.3-Flash",
      "Agentic work, developer assistance and long-document processing",
      "You need image understanding, which GLM-5.3-Flash provides"
    ],
    choose_b_en: [
      "The product is Russian-language: Qwen lists Russian, GLM does not",
      "You need something under 1.5B: Qwen starts at 0.6B",
      "Support and e-commerce work: tickets, product copy, knowledge base answers"
    ]
  },
  {
    a: "kimi", b: "deepseek", slug: "kimi-vs-deepseek",
    title: "Kimi или DeepSeek: крупные модели для агентов",
    h1: "Kimi или DeepSeek: крупные модели для агентной работы",
    description: "Kimi и DeepSeek: 16B-A3B – 2.8T против 7B – 1.6T, своя лицензия K3 против MIT, DeepSeek ставится через Ollama, Kimi только руками.",
    verdict: "Обе рассчитаны на видеокарты и кластер, обе дают контекст до 1 млн токенов и понимают картинки в отдельных версиях. DeepSeek проще и по лицензии, и по установке: свежие версии под MIT, линейка есть в Ollama, младший размер 7B. Kimi начинается с 16B-A3B, в Ollama её нет, а условия зависят от версии: K2 – K2.7-Code под модифицированной MIT с требованием упомянуть Kimi в интерфейсе при 100 млн пользователей или 20 млн долларов выручки в месяц, а у K3 своя лицензия, и API-бизнесу с выручкой от 20 млн долларов в год нужен отдельный договор. Зато K3 на 2,8 трлн параметров была самой большой открытой моделью на момент выхода, а K2.7-Code 1T-A32B сделана под программирование.",
    choose_a: [
      "Нужны многошаговые агенты: поиск, сбор данных, отчёты",
      "Есть кластер под модель на 2,8 трлн параметров",
      "Нужна отдельная модель под код: K2.7-Code 1T-A32B"
    ],
    choose_b: [
      "Нужна MIT без условий по выручке и упоминанию в интерфейсе",
      "Ставите модель одной командой через Ollama",
      "Стартуете с малого: DeepSeek начинается с 7B"
    ],
    title_en: "Kimi vs DeepSeek: very large models for agent work",
    h1_en: "Kimi or DeepSeek: large open models for agentic work",
    description_en: "Kimi vs DeepSeek: 16B-A3B to 2.8T against 7B to 1.6T, a custom K3 license against MIT, DeepSeek installs via Ollama while Kimi does not.",
    verdict_en: "Both target GPUs and clusters, both offer context up to 1M tokens and both understand images in certain versions. DeepSeek is simpler on licensing and setup: recent versions are MIT, the family is in Ollama and the smallest size is 7B. Kimi starts at 16B-A3B, is absent from Ollama, and its terms vary by version: K2 through K2.7-Code use a modified MIT that requires crediting Kimi in the interface at 100 million users or 20 million dollars of monthly revenue, while K3 has its own license under which API businesses above 20 million dollars a year need a separate agreement. In return, K3 at 2.8 trillion parameters was the largest open model at release, and K2.7-Code 1T-A32B is built for programming.",
    choose_a_en: [
      "You need multi-step agents: search, data collection, reporting",
      "You have a cluster that can host a 2.8 trillion parameter model",
      "You want a dedicated coding model: K2.7-Code 1T-A32B"
    ],
    choose_b_en: [
      "You want MIT without revenue thresholds or attribution requirements",
      "You install with a single Ollama command",
      "You are starting small: DeepSeek begins at 7B"
    ]
  },
  {
    a: "saiga", b: "vikhr", slug: "saiga-vs-vikhr",
    title: "Saiga или Vikhr: русские дообучения моделей",
    h1: "Saiga или Vikhr: какое русское дообучение выбрать",
    description: "Saiga и Vikhr: 7B – 70B против 0.5B – 24B, наследуемая лицензия базы против Apache 2.0, обе про русский язык, в Ollama нет ни одной.",
    verdict: "Обе линейки — русскоязычные дообучения чужих открытых моделей, и обе ставятся руками: в Ollama их нет. У Saiga лицензия наследуется от базы: LoRA-адаптеры под CC-BY 4.0, а готовая модель живёт по правилам Llama, Gemma, Mistral Nemo или YandexGPT, поэтому перед коммерцией нужно смотреть конкретную сборку. У Vikhr основные версии под Apache 2.0, размеры начинаются с 0.5B и идут на процессоре, а Borealis распознаёт и понимает русскую речь. Vikhr обновлялся позже, декабрь 2025 против апреля 2025 у Saiga, зато Saiga поднимается до 70B.",
    choose_a: [
      "Нужен размер до 70B для ассистента на своём сервере",
      "Вы уже работаете на базе Llama, Gemma или Mistral Nemo",
      "Задачи поддержки, маркетинга и контента на русском языке"
    ],
    choose_b: [
      "Нужна понятная Apache 2.0 на основных версиях",
      "Железо без видеокарты: Vikhr идёт от 0.5B на процессоре",
      "Нужна работа с речью: Borealis переводит русскую речь в текст"
    ],
    title_en: "Saiga vs Vikhr: Russian fine-tunes of open models",
    h1_en: "Saiga or Vikhr: which Russian fine-tune to choose",
    description_en: "Saiga vs Vikhr: 7B to 70B against 0.5B to 24B, inherited base licenses against Apache 2.0, both focused on Russian, and neither is in Ollama.",
    verdict_en: "Both are Russian-language fine-tunes of other people's open models, and both are installed by hand since neither is in Ollama. Saiga inherits its license from the base model: the LoRA adapters are CC-BY 4.0, but the assembled model follows the rules of Llama, Gemma, Mistral Nemo or YandexGPT, so commercial use has to be checked per build. Vikhr keeps its main versions under Apache 2.0, starts at 0.5B and runs on a CPU, and Borealis recognizes and understands Russian speech. Vikhr was updated later, December 2025 against April 2025 for Saiga, while Saiga reaches up to 70B.",
    choose_a_en: [
      "You need up to 70B for an assistant on your own server",
      "You already build on Llama, Gemma or Mistral Nemo",
      "Support, marketing and content work in Russian"
    ],
    choose_b_en: [
      "You want straightforward Apache 2.0 on the main versions",
      "No GPU available: Vikhr starts at 0.5B and runs on a CPU",
      "You need speech: Borealis turns Russian speech into text"
    ]
  },
  {
    a: "smollm", b: "tinyllama", slug: "smollm-vs-tinyllama",
    title: "SmolLM или TinyLlama: крошечные модели",
    h1: "SmolLM или TinyLlama: какую крошечную модель взять",
    description: "SmolLM и TinyLlama: 135M – 3B против единственных 1.1B, обе под Apache 2.0, обе есть в Ollama и работают на обычном процессоре.",
    verdict: "Обе крошечные, обе под Apache 2.0 без оговорок по коммерции, обе есть в Ollama и не требуют видеокарты. SmolLM даёт выбор от 135M до 3B, в каталоге отмечена с русским языком, у SmolLM3 заявлены рассуждение и длинный контекст, а весь рецепт обучения открыт. TinyLlama — одна модель на 1.1B с архитектурой Llama 2, обученная на 3 трлн токенов; русский у неё в каталоге отмечен как отсутствующий. SmolLM свежее: июль 2025 против марта 2024, так что для новой задачи разумнее стартовать с неё.",
    choose_a: [
      "Нужен русский язык прямо на устройстве: у SmolLM он отмечен",
      "Нужен выбор размера от 135M до 3B под телефон или встройку",
      "Важен открытый рецепт обучения для собственного дообучения"
    ],
    choose_b: [
      "Нужна именно архитектура Llama 2 в размере 1.1B",
      "Модель берётся как учебный пример или быстрый прототип",
      "Вокруг TinyLlama уже собран стек, и менять его дороже"
    ],
    title_en: "SmolLM vs TinyLlama: tiny open models compared",
    h1_en: "SmolLM or TinyLlama: which tiny model to choose",
    description_en: "SmolLM vs TinyLlama: 135M to 3B against a single 1.1B, both under Apache 2.0, both in Ollama and both running on an ordinary CPU.",
    verdict_en: "Both are tiny, both are Apache 2.0 with no commercial caveats, both are in Ollama and neither needs a GPU. SmolLM offers sizes from 135M to 3B, is listed as supporting Russian, and SmolLM3 adds reasoning and long context with the full training recipe published. TinyLlama is a single 1.1B model on the Llama 2 architecture trained on 3 trillion tokens, and the catalog marks it as not supporting Russian. SmolLM is newer, July 2025 against March 2024, so for a fresh project it is the more sensible starting point.",
    choose_a_en: [
      "You need Russian directly on the device, which SmolLM lists",
      "You want a size range from 135M to 3B for phones or embedded use",
      "The open training recipe matters for your own fine-tuning"
    ],
    choose_b_en: [
      "You specifically need the Llama 2 architecture at 1.1B",
      "The model is for teaching or a quick prototype",
      "You already have a stack built around TinyLlama and switching costs more"
    ]
  },
  {
    a: "command", b: "llama", slug: "command-vs-llama",
    title: "Cohere Command или Llama: база знаний и отрасли",
    h1: "Cohere Command или Llama: что выбрать под базу знаний",
    description: "Command и Llama: Apache 2.0 у Command A+ и CC-BY-NC у ранних версий против Llama Community License, 2.5B – 218B против 1B – 405B.",
    verdict: "Обе есть в Ollama и запускаются без видеокарты в младших размерах. Command сделана под работу с документами: ответы со ссылками на источники, вызов инструментов, много языков, и в каталоге у неё отмечен русский, а у Llama он отмечен как отсутствующий. Но лицензия Command разная по версиям: Command R, R+, R7B, Command A и North Small Translate идут под CC-BY-NC, то есть только некоммерчески, а коммерцию открывают Command A+ 2026 года, North Mini Code и North Micro Vision под Apache 2.0. Llama целиком под Llama Community License с условиями, зато вокруг неё самая большая экосистема дообученных версий и инструментов, и есть Vision-версии.",
    choose_a: [
      "Нужны ответы по базе знаний со ссылками на источники",
      "Продукт русскоязычный: у Command русский отмечен, у Llama нет",
      "Коммерция обязательна: берите Command A+ или North под Apache 2.0"
    ],
    choose_b: [
      "Нужна основа для дообучения под отрасль и готовые дообученные версии",
      "Нужен размер до 405B внутри одной семьи",
      "Нужны Vision-версии для разбора картинок"
    ],
    title_en: "Cohere Command vs Llama: knowledge bases and licensing",
    h1_en: "Cohere Command or Llama: which to choose for a knowledge base",
    description_en: "Command vs Llama: Apache 2.0 on Command A+ and CC-BY-NC on earlier versions against the Llama Community License, 2.5B to 218B against 1B to 405B.",
    verdict_en: "Both are in Ollama and both run without a GPU in their smaller sizes. Command is built around documents: answers with source citations, tool calling and many languages, and the catalog lists it as supporting Russian while marking Llama as not. But Command licensing splits by version: Command R, R+, R7B, Command A and North Small Translate are CC-BY-NC, meaning non-commercial only, while commercial use opens up with Command A+ from 2026, North Mini Code and North Micro Vision under Apache 2.0. Llama uses one Llama Community License with conditions across the family, but carries the largest ecosystem of fine-tunes and tooling, plus Vision versions.",
    choose_a_en: [
      "You need knowledge-base answers with citations back to the source",
      "The product is Russian-language: Command lists Russian, Llama does not",
      "Commercial use is required: take Command A+ or North under Apache 2.0"
    ],
    choose_b_en: [
      "You need a base for industry fine-tuning plus ready-made fine-tunes",
      "You want sizes up to 405B inside a single family",
      "You need Vision versions for image understanding"
    ]
  },
  {
    a: "nemotron", b: "llama", slug: "nemotron-vs-llama",
    title: "Nemotron или Llama: агенты и рассуждения",
    h1: "Nemotron или Llama: что выбрать под агентов",
    description: "NVIDIA Nemotron и Llama: 4B – 550B-A55B против 1B – 405B, лицензии NVIDIA Open Model и OpenMDW против Llama Community License.",
    verdict: "Обе есть в Ollama и запускаются на процессоре в младших размерах, русский язык в каталоге не отмечен ни у одной. Nemotron собран под агентов и рассуждения и заточен на быстрый запуск на видеокартах NVIDIA: Nemotron 3 это гибрид Mamba и MoE от 4B до 550B-A55B, а Nano Omni разбирает видео, аудио и картинки, но только на английском. Лицензии у Nemotron разные по версиям: NVIDIA Open Model License и Open Model Agreement с условиями, у Llama-версий добавляются условия Llama, а Ultra и 3.5 Lightning выходят под OpenMDW-1.1. Llama в этом смысле проще: одна Llama Community License на всю семью, размеры от 1B и огромный набор готовых дообучений, но последний релиз в каталоге — апрель 2025 против августа 2026 у Nemotron.",
    choose_a: [
      "У вас свой кластер на видеокартах NVIDIA",
      "Нужны агенты с вызовом инструментов и задачи с расчётами",
      "Нужно видео и аудио в одной модели: Nemotron 3 Nano Omni"
    ],
    choose_b: [
      "Нужна одна понятная лицензия на всю линейку",
      "Опираетесь на экосистему дообученных версий и инструментов Llama",
      "Модель берётся как основа для дообучения под отрасль"
    ],
    title_en: "Nemotron vs Llama: agents and reasoning compared",
    h1_en: "Nemotron or Llama: which to choose for agents",
    description_en: "NVIDIA Nemotron vs Llama: 4B to 550B-A55B against 1B to 405B, NVIDIA Open Model and OpenMDW licenses against the Llama Community License.",
    verdict_en: "Both are in Ollama and both run on a CPU in their smaller sizes, and the catalog claims Russian support for neither. Nemotron is built for agents and reasoning and tuned to run fast on NVIDIA GPUs: Nemotron 3 is a Mamba and MoE hybrid from 4B to 550B-A55B, and Nano Omni handles video, audio and images, though in English only. Nemotron licensing varies by version: the NVIDIA Open Model License and Open Model Agreement come with conditions, Llama-based versions add the Llama terms, and Ultra and 3.5 Lightning ship under OpenMDW-1.1. Llama is simpler here: one Llama Community License across the family, sizes from 1B and a huge pool of existing fine-tunes, but its newest catalog release is April 2025 against August 2026 for Nemotron.",
    choose_a_en: [
      "You run your own cluster on NVIDIA GPUs",
      "You need tool-calling agents and reasoning or calculation tasks",
      "You need video and audio in one model: Nemotron 3 Nano Omni"
    ],
    choose_b_en: [
      "You want one clear license across the whole line-up",
      "You rely on the Llama ecosystem of fine-tunes and tooling",
      "The model is a base for industry-specific fine-tuning"
    ]
  },
  {
    a: "qwen-coder", b: "deepseek-coder", slug: "qwen-coder-vs-deepseek-coder",
    title: "Qwen Coder или DeepSeek-Coder: модели для кода",
    h1: "Qwen Coder или DeepSeek-Coder: что выбрать для кода",
    description: "Qwen Coder и DeepSeek-Coder: Apache 2.0 против DeepSeek License, 0.5B – 480B-A35B против 1.3B – 236B-A21B, обе в Ollama и идут на процессоре.",
    verdict: "Обе линейки заточены под код, обе есть в Ollama и запускаются на процессоре в младших размерах. Qwen Coder шире и свежее: от 0.5B для автодополнения до 480B-A35B для агентов, а Qwen3-Coder-Next 80B-A3B вышла в феврале 2026 и работает как агент-разработчик на одной видеокарте; лицензия Apache 2.0, кроме CodeQwen1.5 и Qwen2.5-Coder-3B со своей лицензией Qwen. DeepSeek-Coder остановился на версии Instruct от сентября 2024 и идёт под DeepSeek License: коммерция разрешена, но есть список запрещённых применений, сам код репозитория под MIT. Дальше кодовые задачи у DeepSeek переехали в общие модели линейки.",
    choose_a: [
      "Нужен агент, который сам правит код в репозитории",
      "Важна Apache 2.0 и версии, выходившие в 2026 году",
      "Нужно автодополнение на слабой машине: есть размер 0.5B"
    ],
    choose_b: [
      "Вы уже держите стек на DeepSeek-Coder и менять его не планируете",
      "Задачи узкие: автодополнение, перевод кода между языками, разбор чужого кода",
      "Условия DeepSeek License с её списком ограничений вас устраивают"
    ],
    title_en: "Qwen Coder vs DeepSeek-Coder: open coding models",
    h1_en: "Qwen Coder or DeepSeek-Coder: which coding model to pick",
    description_en: "Qwen Coder vs DeepSeek-Coder: Apache 2.0 against the DeepSeek License, 0.5B to 480B-A35B against 1.3B to 236B-A21B, both in Ollama and CPU-capable.",
    verdict_en: "Both families are built for code, both are in Ollama and both run on a CPU in their smaller sizes. Qwen Coder is broader and newer: from 0.5B for autocompletion to 480B-A35B for agents, with Qwen3-Coder-Next 80B-A3B released in February 2026 and working as a developer agent on a single GPU; licensing is Apache 2.0 apart from CodeQwen1.5 and Qwen2.5-Coder-3B, which use Qwen's own license. DeepSeek-Coder stopped at the Instruct release of September 2024 and ships under the DeepSeek License: commercial use is allowed, but with a list of prohibited applications, while the repository code itself is MIT. After that, coding work moved into DeepSeek's general-purpose models.",
    choose_a_en: [
      "You need an agent that edits code in the repository on its own",
      "Apache 2.0 matters, and so do releases from 2026",
      "You want autocompletion on a weak machine: there is a 0.5B size"
    ],
    choose_b_en: [
      "You already run a DeepSeek-Coder stack and have no plans to change it",
      "Your scope is narrow: autocompletion, code translation, explaining other people's code",
      "The DeepSeek License and its list of restrictions work for you"
    ]
  },
  {
    a: "codestral", b: "qwen-coder", slug: "codestral-vs-qwen-coder",
    title: "Codestral или Qwen Coder: что можно взять в работу",
    h1: "Codestral или Qwen Coder: какую модель можно взять в продукт",
    description: "Codestral и Qwen Coder: Non-Production License у Codestral 22B против Apache 2.0, 7B – 22B против 0.5B – 480B-A35B, обе есть в Ollama.",
    verdict: "Главная разница здесь не в задачах, а в правах. Открытые веса Codestral 22B идут под Mistral Non-Production License: это только исследования и тесты, в рабочем продукте их без платной лицензии использовать нельзя, а новые версии Codestral доступны только по API; свободна лишь побочная Mamba-Codestral 7B под Apache 2.0. Qwen Coder почти целиком под Apache 2.0 с разрешённой коммерцией, размеры от 0.5B до 480B-A35B, есть версии для процессора и агентные. Если модель нужна в продукте, а не на стенде, вопрос обычно закрывается в пользу Qwen Coder.",
    choose_a: [
      "Нужно оценить модель на стенде перед покупкой коммерческой лицензии",
      "Готовы взять побочную Mamba-Codestral 7B под Apache 2.0",
      "Работа идёт в исследовательской команде без вывода в продукт"
    ],
    choose_b: [
      "Модель пойдёт в рабочий продукт: у Qwen Coder коммерция разрешена",
      "Нужен выбор размеров от 0.5B до 480B-A35B",
      "Нужен агент-разработчик, а не только автодополнение в редакторе"
    ],
    title_en: "Codestral vs Qwen Coder: which one you may actually ship",
    h1_en: "Codestral or Qwen Coder: which coding model you may ship",
    description_en: "Codestral vs Qwen Coder: a Non-Production License on Codestral 22B against Apache 2.0, 7B to 22B against 0.5B to 480B-A35B, both in Ollama.",
    verdict_en: "The real difference here is rights, not capability. The open weights of Codestral 22B fall under the Mistral Non-Production License: research and testing only, no production use without a paid license, and newer Codestral versions are API-only; the one free option is the spin-off Mamba-Codestral 7B under Apache 2.0. Qwen Coder is almost entirely Apache 2.0 with commercial use permitted, spans 0.5B to 480B-A35B and includes CPU-capable and agentic versions. If the model is going into a product rather than a test bench, the question usually settles in favour of Qwen Coder.",
    choose_a_en: [
      "You are evaluating on a test bench before buying a commercial license",
      "You are happy with the spin-off Mamba-Codestral 7B under Apache 2.0",
      "The work sits in a research team with nothing going to production"
    ],
    choose_b_en: [
      "The model goes into a shipping product: Qwen Coder permits commercial use",
      "You want a size range from 0.5B to 480B-A35B",
      "You need a developer agent, not just editor autocompletion"
    ]
  },
  {
    a: "devstral", b: "codestral", slug: "devstral-vs-codestral",
    title: "Devstral или Codestral: две модели Mistral для кода",
    h1: "Devstral или Codestral: какую модель Mistral взять для кода",
    description: "Devstral и Codestral: Apache 2.0 у Devstral Small 24B против Non-Production License у Codestral 22B, агентная правка кода против автодополнения.",
    verdict: "Обе от Mistral, обе требуют видеокарту и обе есть в Ollama, но живут в разных режимах. Devstral сделан под агентную разработку: модель сама читает репозиторий, правит файлы и запускает команды; Devstral Small 24B под Apache 2.0 помещается на одну видеокарту, а Devstral 2 123B идёт под модифицированной MIT, и компаниям с выручкой выше 20 млн долларов в месяц она недоступна. Codestral покрывает больше 80 языков программирования, но открытые веса версии 22B под Mistral Non-Production License, то есть только исследования и тесты; свободна только Mamba-Codestral 7B под Apache 2.0. Devstral заметно свежее: декабрь 2025 против июля 2024.",
    choose_a: [
      "Нужен агент, который чинит задачи из трекера и правит код сам",
      "Коммерция обязательна: Devstral Small 24B идёт под Apache 2.0",
      "Есть одна видеокарта под модель на 24B"
    ],
    choose_b: [
      "Задача ограничена оценкой и тестами без вывода в продукт",
      "Важен охват по языкам программирования: у Codestral их больше 80",
      "Достаточно 7B: Mamba-Codestral идёт под Apache 2.0"
    ],
    title_en: "Devstral vs Codestral: two Mistral models for code",
    h1_en: "Devstral or Codestral: which Mistral coding model to take",
    description_en: "Devstral vs Codestral: Apache 2.0 on Devstral Small 24B against a Non-Production License on Codestral 22B, agentic code editing against autocompletion.",
    verdict_en: "Both come from Mistral, both need a GPU and both are in Ollama, but they operate in different modes. Devstral is built for agentic development: the model reads the repository, edits files and runs commands on its own; Devstral Small 24B under Apache 2.0 fits on a single GPU, while Devstral 2 123B uses a modified MIT that excludes companies with revenue above 20 million dollars a month. Codestral covers more than 80 programming languages, but the open weights of the 22B version fall under the Mistral Non-Production License, meaning research and testing only; the one free option is Mamba-Codestral 7B under Apache 2.0. Devstral is considerably newer: December 2025 against July 2024.",
    choose_a_en: [
      "You want an agent that fixes tracker tickets and edits code itself",
      "Commercial use is required: Devstral Small 24B is Apache 2.0",
      "You have a single GPU to host a 24B model"
    ],
    choose_b_en: [
      "The scope is evaluation and testing with nothing going to production",
      "Programming language coverage matters: Codestral spans over 80",
      "7B is enough for you: Mamba-Codestral ships under Apache 2.0"
    ]
  },
  {
    a: "starcoder", b: "code-llama", slug: "starcoder-vs-code-llama",
    title: "StarCoder или Code Llama: базы для дообучения",
    h1: "StarCoder или Code Llama: какую базу брать для дообучения",
    description: "StarCoder и Code Llama: OpenRAIL-M против Llama 2 Community License, 1B – 15B против 7B – 70B, обе в Ollama, StarCoder идёт без видеокарты.",
    verdict: "Обе линейки давно не обновляются: последние релизы апрель 2024 и январь 2024, поэтому сегодня их чаще берут как базу для дообучения, чем как рабочую модель. StarCoder начинается с 1B, запускается на процессоре и обучена на открытом наборе исходников с возможностью исключить свой репозиторий; лицензия BigCode OpenRAIL-M разрешает коммерцию, но со списком запрещённых применений. Code Llama — это Llama 2, доученная на коде: размеры от 7B до 70B, нужна видеокарта, лицензия Llama 2 Community License с ограничениями, зато вокруг много готовых дообученных версий и инструментов. Русский язык в каталоге не отмечен ни у одной из них.",
    choose_a: [
      "Нужно дообучение на внутреннем коде с прозрачным набором данных",
      "Железо слабое: StarCoder идёт от 1B и работает без видеокарты",
      "Нужен генератор шаблонного кода и тестов в редакторе"
    ],
    choose_b: [
      "Нужен размер до 70B и отдельные варианты под Python и диалог",
      "Опираетесь на готовые дообучения и инструменты вокруг Llama",
      "Условия Llama 2 Community License вас устраивают"
    ],
    title_en: "StarCoder vs Code Llama: bases for fine-tuning",
    h1_en: "StarCoder or Code Llama: which base to fine-tune on",
    description_en: "StarCoder vs Code Llama: OpenRAIL-M against the Llama 2 Community License, 1B to 15B against 7B to 70B, both in Ollama, StarCoder needs no GPU.",
    verdict_en: "Neither line has been updated in a while, with last releases in April 2024 and January 2024, so today both are taken as a base for fine-tuning more often than as a working model. StarCoder starts at 1B, runs on a CPU and was trained on an open source-code set with an option to exclude your own repository; the BigCode OpenRAIL-M license permits commercial use but comes with a list of prohibited applications. Code Llama is Llama 2 further trained on code: sizes from 7B to 70B, a GPU required, the Llama 2 Community License with restrictions, and plenty of existing fine-tunes and tooling around it. The catalog claims Russian support for neither.",
    choose_a_en: [
      "You are fine-tuning on internal code and want a transparent training set",
      "Hardware is modest: StarCoder starts at 1B and runs without a GPU",
      "You need boilerplate and test generation inside the editor"
    ],
    choose_b_en: [
      "You need up to 70B plus dedicated Python and chat variants",
      "You rely on existing fine-tunes and tooling around Llama",
      "The Llama 2 Community License terms work for you"
    ]
  },
  {
    a: "minicpm", b: "gemma", slug: "minicpm-vs-gemma",
    title: "MiniCPM или Gemma: модели для работы на устройстве",
    h1: "MiniCPM или Gemma: что поставить прямо на устройство",
    description: "MiniCPM и Gemma: 0.5B – 8B против 270M – 31B, Apache 2.0 против Gemma Terms у части версий, Gemma есть в Ollama, MiniCPM ставится руками.",
    verdict: "Обе рассчитаны на устройство — ноутбук, телефон, мини-ПК — и обе работают без видеокарты. Gemma ставится одной командой через Ollama, опускается до 270M и поднимается до 31B, старшие версии понимают картинки, есть CodeGemma для кода и FunctionGemma 270M для вызова функций, но лицензия зависит от версии: Apache 2.0 у Gemma 4 и DiffusionGemma, Gemma Terms of Use у ранних версий, CodeGemma и FunctionGemma. MiniCPM целиком под Apache 2.0, кроме первых MiniCPM-2B и MiniCPM 2.0 с регистрацией, а MiniCPM5 на 1B и 2B сделаны под вызов инструментов и длинный контекст; в Ollama её нет. MiniCPM обновлялась в сентябре 2026, Gemma — в июне 2026, русский язык в каталоге не отмечен ни у одной.",
    choose_a: [
      "Нужны простые агенты и вызов инструментов на слабом железе",
      "Важна Apache 2.0 на актуальных версиях линейки",
      "Задачи извлечения данных и классификации текстов без облака"
    ],
    choose_b: [
      "Нужен запуск одной командой через Ollama",
      "Нужен разбор фото документов и чеков: старшие Gemma понимают картинки",
      "Нужен размер вне диапазона MiniCPM: от 270M или до 31B"
    ],
    title_en: "MiniCPM vs Gemma: models that run on the device",
    h1_en: "MiniCPM or Gemma: which model to put on the device",
    description_en: "MiniCPM vs Gemma: 0.5B to 8B against 270M to 31B, Apache 2.0 against Gemma Terms on some versions, Gemma ships in Ollama and MiniCPM does not.",
    verdict_en: "Both are meant for the device itself, a laptop, a phone or a mini PC, and both work without a GPU. Gemma installs with one Ollama command, goes down to 270M and up to 31B, understands images in its larger versions, and adds CodeGemma for code and FunctionGemma 270M for function calling, but its licensing depends on the version: Apache 2.0 for Gemma 4 and DiffusionGemma, the Gemma Terms of Use for earlier releases, CodeGemma and FunctionGemma. MiniCPM is Apache 2.0 throughout apart from the first MiniCPM-2B and MiniCPM 2.0, which required registration, and MiniCPM5 at 1B and 2B is built for tool calling and long context; it is not in Ollama. MiniCPM was updated in September 2026 and Gemma in June 2026, and the catalog claims Russian support for neither.",
    choose_a_en: [
      "You need simple agents and tool calling on low-end hardware",
      "Apache 2.0 across the current versions matters to you",
      "Data extraction and text classification with no cloud involved"
    ],
    choose_b_en: [
      "You want a one-command install through Ollama",
      "You need to read photos of documents and receipts: larger Gemma handles images",
      "You need a size outside the MiniCPM range: from 270M, or up to 31B"
    ]
  }
];
