// Энциклопедия открытых ИИ-моделей: данные для /ii-modeli/.
// Одна запись = одно семейство моделей. Факты — только по карточке модели
// на Hugging Face / GitHub; непроверенное не публикуем.
// hardware: min — ноутбук или до 8 ГБ видеопамяти; gpu — одна видеокарта 16–80 ГБ;
// multi — несколько видеокарт. commercial: yes / conditional / no.
const BASE = [
  {
    id: 'qwen', name: 'Qwen', developer: 'Alibaba', country: 'Китай',
    modality: ['text', 'vlm'], first: '2023-08', latest: '2026-08', sizes: '0,6B – 2,4T',
    license: 'Apache 2.0 (большинство версий); у старших Qwen3.8 — своя лицензия', commercial: 'conditional', hardware: ['min', 'gpu', 'multi'], ru: 'yes', industries: ['support', 'retail', 'docs', 'dev'], ollama: true, cpu: true,
    summary: 'Семейство языковых моделей с сильным русским языком: от маленьких версий для ноутбука до флагмана уровня коммерческих API.',
    tasks: ['Чат-бот и ассистент по базе знаний', 'Ответы на письма и обращения', 'Разбор и классификация документов', 'Генерация описаний товаров'],
    where: ['Поддержка клиентов', 'E-commerce', 'Юристы и бухгалтерия', 'Внутренние базы знаний'],
    versions: [['Qwen', '2023-08'], ['Qwen1.5', '2024-02'], ['Qwen2', '2024-06'], ['Qwen2.5', '2024-09'], ['Qwen3', '2025-04'], ['Qwen3.5', '2026-02'], ['Qwen3.6', '2026-04'], ['Qwen3.8', '2026-08']],
    hf: 'https://huggingface.co/Qwen', github: 'https://github.com/QwenLM',
    alternatives: ['llama', 'gemma', 'mistral'],
  },
  {
    id: 'llama', name: 'Llama', developer: 'Meta', country: 'США',
    modality: ['text', 'vlm'], first: '2023-02', latest: '2025-04', sizes: '1B – 405B',
    license: 'Llama Community License', commercial: 'conditional', hardware: ['min', 'gpu', 'multi'], ru: 'no', industries: ['support', 'education', 'dev'], ollama: true, cpu: true,
    summary: 'Модели, с которых начался массовый open source в ИИ. Огромная экосистема дообученных версий и инструментов.',
    tasks: ['Ассистент для сотрудников', 'Суммаризация встреч и документов', 'Основа для дообучения под отрасль', 'Распознавание картинок (версии Vision)'],
    where: ['Корпоративные ассистенты', 'Образование', 'Разработка продуктов на ИИ'],
    versions: [['LLaMA', '2023-02'], ['Llama 2', '2023-07'], ['Llama 3', '2024-04'], ['Llama 3.1', '2024-07'], ['Llama 3.2', '2024-09'], ['Llama 3.3', '2024-12'], ['Llama 4', '2025-04']],
    hf: 'https://huggingface.co/meta-llama', github: 'https://github.com/meta-llama',
    alternatives: ['qwen', 'gemma', 'mistral'],
  },
  {
    id: 'deepseek-r1', name: 'DeepSeek-R1', developer: 'DeepSeek', country: 'Китай',
    modality: ['text'], first: '2025-01', latest: '2025-05', sizes: '1,5B – 671B',
    license: 'MIT', commercial: 'yes', hardware: ['min', 'gpu', 'multi'], ru: 'unknown', industries: ['finance', 'legal', 'dev', 'science'], ollama: true, cpu: true,
    summary: 'Рассуждающая модель: думает по шагам перед ответом. Сильна в расчётах, логике и коде; есть компактные дистиллированные версии.',
    tasks: ['Сложные расчёты и проверка логики', 'Анализ договоров и регламентов', 'Помощь программистам', 'Разбор спорных случаев по шагам'],
    where: ['Финансы и аналитика', 'Юридические отделы', 'Разработка'],
    versions: [['DeepSeek-R1', '2025-01'], ['R1-Distill', '2025-01'], ['R1-0528', '2025-05']],
    hf: 'https://huggingface.co/deepseek-ai', github: 'https://github.com/deepseek-ai',
    alternatives: ['qwen', 'gpt-oss'],
  },
  {
    id: 'gpt-oss', name: 'gpt-oss', developer: 'OpenAI', country: 'США',
    modality: ['text'], first: '2025-08', latest: '2025-08', sizes: '20B, 120B',
    license: 'Apache 2.0', commercial: 'yes', hardware: ['gpu'], ru: 'unknown', industries: ['dev', 'support', 'docs'], ollama: true, cpu: false,
    summary: 'Первые открытые модели OpenAI со времён GPT-2. Рассуждения, вызов инструментов, младшая версия помещается на одну видеокарту.',
    tasks: ['ИИ-агент с вызовом внутренних систем', 'Ответы по регламентам', 'Черновики писем и отчётов'],
    where: ['Корпоративные агенты', 'Закрытый контур без облака'],
    versions: [['gpt-oss-20b', '2025-08'], ['gpt-oss-120b', '2025-08']],
    hf: 'https://huggingface.co/openai', github: 'https://github.com/openai/gpt-oss',
    alternatives: ['qwen', 'deepseek-r1'],
  },
  {
    id: 'gemma', name: 'Gemma', developer: 'Google', country: 'США',
    modality: ['text', 'vlm'], first: '2024-02', latest: '2026-04', sizes: '270M – 31B',
    license: 'Gemma 4 — Apache 2.0; ранние версии — Gemma Terms of Use', commercial: 'yes', hardware: ['min', 'gpu'], ru: 'unknown', industries: ['support', 'docs', 'retail'], ollama: true, cpu: true,
    summary: 'Компактные модели Google: хорошо работают на одном компьютере, старшие версии понимают картинки.',
    tasks: ['Ассистент на ноутбуке без интернета', 'Разбор фото документов и чеков', 'Классификация обращений'],
    where: ['Малый бизнес', 'Работа на слабом железе', 'Мобильные устройства'],
    versions: [['Gemma', '2024-02'], ['Gemma 2', '2024-06'], ['Gemma 3', '2025-03'], ['Gemma 3n', '2025-06'], ['Gemma 4', '2026-04']],
    hf: 'https://huggingface.co/google', github: 'https://github.com/google-deepmind/gemma',
    alternatives: ['qwen', 'llama'],
  },
  {
    id: 'mistral', name: 'Mistral', developer: 'Mistral AI', country: 'Франция',
    modality: ['text'], first: '2023-09', latest: '2026-03', sizes: '3B – 675B',
    license: 'Apache 2.0 (большинство версий)', commercial: 'yes', hardware: ['min', 'gpu', 'multi'], ru: 'yes', industries: ['support', 'docs', 'dev'], ollama: true, cpu: true,
    summary: 'Европейские модели с упором на скорость. Mixtral — одна из первых открытых моделей на архитектуре «смесь экспертов».',
    tasks: ['Быстрые ответы в чате', 'Извлечение данных из текста', 'Перевод и работа с несколькими языками'],
    where: ['Поддержка клиентов', 'Обработка заявок', 'Европейские проекты'],
    versions: [['Mistral 7B', '2023-09'], ['Mixtral 8x7B', '2023-12'], ['Mistral NeMo', '2024-07'], ['Mistral Small 3', '2025-01'], ['Magistral Small', '2025-06'], ['Mistral Large 3', '2025-12'], ['Mistral Small 4', '2026-03']],
    hf: 'https://huggingface.co/mistralai', github: 'https://github.com/mistralai',
    alternatives: ['qwen', 'llama'],
  },
  {
    id: 'whisper', name: 'Whisper', developer: 'OpenAI', country: 'США',
    modality: ['asr'], first: '2022-09', latest: '2024-10', sizes: '39M – 1,5B',
    license: 'MIT', commercial: 'yes', hardware: ['min', 'gpu'], ru: 'yes', industries: ['support', 'media', 'legal'], ollama: false, cpu: true,
    summary: 'Распознавание речи на 99 языках, включая русский. Стандарт де-факто для расшифровки звонков и встреч.',
    tasks: ['Расшифровка звонков и созвонов', 'Субтитры к видео', 'Голосовые сообщения в текст', 'Протоколы совещаний'],
    where: ['Отделы продаж', 'Колл-центры', 'Медиа и блогеры', 'Юристы'],
    versions: [['Whisper', '2022-09'], ['large-v2', '2022-12'], ['large-v3', '2023-11'], ['large-v3-turbo', '2024-10']],
    hf: 'https://huggingface.co/openai/whisper-large-v3', github: 'https://github.com/openai/whisper',
    alternatives: [],
  },
  {
    id: 'flux', name: 'FLUX', developer: 'Black Forest Labs', country: 'Германия',
    modality: ['image'], first: '2024-08', latest: '2026-01', sizes: '4B – 32B',
    license: 'FLUX.1 [schnell] и FLUX.2 [klein] 4B — Apache 2.0; версии [dev] — некоммерческие', commercial: 'conditional', hardware: ['gpu'], ru: 'na', industries: ['marketing', 'media', 'retail'], ollama: false, cpu: false,
    summary: 'Генерация картинок от авторов Stable Diffusion. Хорошо рисует текст на изображении и держит композицию.',
    tasks: ['Картинки для карточек товаров', 'Баннеры и обложки', 'Редактирование фото по описанию (Kontext)'],
    where: ['Маркетплейсы', 'Маркетинг и SMM', 'Дизайн-студии'],
    versions: [['FLUX.1 [schnell] / [dev]', '2024-08'], ['FLUX.1 Tools', '2024-11'], ['FLUX.1 Kontext [dev]', '2025-06'], ['FLUX.2 [dev]', '2025-11'], ['FLUX.2 [klein]', '2026-01']],
    hf: 'https://huggingface.co/black-forest-labs', github: 'https://github.com/black-forest-labs/flux',
    alternatives: ['qwen-image'],
  },
  {
    id: 'qwen-image', name: 'Qwen-Image', developer: 'Alibaba', country: 'Китай',
    modality: ['image'], first: '2025-08', latest: '2026-09', sizes: '7B – 20B',
    license: 'До Qwen-Image-2512 — Apache 2.0; Qwen-Image-2.1 — исследовательская, некоммерческая', commercial: 'conditional', hardware: ['gpu'], ru: 'na', industries: ['retail', 'marketing', 'media'], ollama: false, cpu: false,
    summary: 'Генерация и редактирование картинок, в том числе с текстом на изображении. Ранние версии можно в коммерцию, свежая 2.1 — только некоммерческая.',
    tasks: ['Инфографика для карточек товаров', 'Правка фото по текстовой команде', 'Рекламные креативы'],
    where: ['Маркетплейсы', 'Интернет-магазины', 'Реклама'],
    versions: [['Qwen-Image', '2025-08'], ['Qwen-Image-Edit', '2025-08'], ['Qwen-Image-2512', '2025-12'], ['Qwen-Image-2.1', '2026-09']],
    hf: 'https://huggingface.co/Qwen/Qwen-Image', github: 'https://github.com/QwenLM/Qwen-Image',
    alternatives: ['flux'],
  },
  {
    id: 'wan', name: 'Wan', developer: 'Alibaba', country: 'Китай',
    modality: ['video', 'avatar'], first: '2025-02', latest: '2026-07', sizes: '1,3B – 14B',
    license: 'Apache 2.0', commercial: 'yes', hardware: ['gpu', 'multi'], ru: 'na', industries: ['marketing', 'media', 'retail'], ollama: false, cpu: false,
    summary: 'Генерация видео по тексту и по картинке. Младшая версия запускается на игровой видеокарте. После 2.2 базовые модели открыто не выходят, только прикладные.',
    tasks: ['Короткие рекламные ролики', 'Оживление фото товара', 'Видео для соцсетей'],
    where: ['SMM и реклама', 'E-commerce', 'Продакшн'],
    versions: [['Wan 2.1', '2025-02'], ['Wan 2.2', '2025-07'], ['Wan2.2-Animate-2', '2026-07']],
    hf: 'https://huggingface.co/Wan-AI', github: 'https://github.com/Wan-Video',
    alternatives: [],
  },
  {
    id: 'bge-m3', name: 'BGE-M3', developer: 'BAAI', country: 'Китай',
    modality: ['embed'], first: '2024-01', latest: '2024-01', sizes: '568M',
    license: 'MIT', commercial: 'yes', hardware: ['min'], ru: 'yes', industries: ['support', 'docs', 'legal'], ollama: true, cpu: true,
    summary: 'Модель для поиска по смыслу на сотне языков. Основа RAG: бот находит нужный кусок документа перед ответом.',
    tasks: ['Поиск по базе документов', 'RAG для чат-бота', 'Поиск похожих обращений и дублей'],
    where: ['Базы знаний', 'Юридические архивы', 'Поддержка клиентов'],
    versions: [['BGE-M3', '2024-01']],
    hf: 'https://huggingface.co/BAAI/bge-m3', github: 'https://github.com/FlagOpen/FlagEmbedding',
    alternatives: [],
  },
  {
    id: 'sam', name: 'Segment Anything (SAM)', developer: 'Meta', country: 'США',
    modality: ['vision'], first: '2023-04', latest: '2026-03', sizes: '91M – ~0,85B',
    license: 'SAM и SAM 2 — Apache 2.0; SAM 3 — SAM License (коммерция разрешена)', commercial: 'conditional', hardware: ['min', 'gpu'], ru: 'na', industries: ['retail', 'manufacturing', 'media'], ollama: false, cpu: true,
    summary: 'Выделяет любой объект на фото и видео по клику или рамке. Основа для удаления фона и подсчёта объектов.',
    tasks: ['Удаление фона с фото товара', 'Подсчёт объектов на фото', 'Разметка данных для обучения'],
    where: ['E-commerce', 'Производство и контроль качества', 'Агро'],
    versions: [['SAM', '2023-04'], ['SAM 2', '2024-07'], ['SAM 3', '2025-11'], ['SAM 3.1', '2026-03']],
    hf: 'https://huggingface.co/facebook', github: 'https://github.com/facebookresearch/sam2',
    alternatives: [],
  },
];

// Остальные семейства лежат по направлениям в tools/models/*.js (каждый файл — массив).
// При совпадении id запись из файла направления заменяет базовую.
const fs = require('fs');
const path = require('path');
const byId = new Map(BASE.map((m) => [m.id, m]));
const dir = path.join(__dirname, 'models');
for (const f of fs.existsSync(dir) ? fs.readdirSync(dir).filter((x) => x.endsWith('.js')).sort() : []) {
  for (const m of require(path.join(dir, f))) {
    if (m.verified === false) continue; // непроверенное не публикуем
    byId.set(m.id, m);
  }
}
module.exports = [...byId.values()];
