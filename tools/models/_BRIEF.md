# Как заполнять каталог открытых ИИ-моделей (/ii-modeli/)

Сайт chimitdorzhi.tech, раздел-энциклопедия открытых моделей (открытые веса) с 2022 года по 22.09.2026.
Каждая запись = одно СЕМЕЙСТВО моделей (все версии внутри поля versions).
Аудитория — владельцы бизнеса и руководители в России, не ML-инженеры. Пиши по-русски, просто, без жаргона.
Автор сайта ставит модели заказчику на сервер, дообучает и встраивает — это говорится в шаблоне страницы, в записях про это писать не надо.

## Формат файла
`tools/models/<группа>.js`:
```js
// <что за группа>. Факты сверены по Hugging Face / GitHub на 22.09.2026.
module.exports = [
  {
    id: 'kebab-case-latin',            // уникальный, без года
    name: 'Название семейства',
    developer: 'Компания', country: 'Страна по-русски',
    modality: ['text'],                // ключи ниже, первый — главный
    first: '2023-02', latest: '2026-04', // YYYY-MM первого и последнего открытого выпуска
    sizes: '1B – 405B',                // как на карточках; для малых — '82M', для MoE — '30B-A3B'
    license: 'Apache 2.0',             // коротко, по-русски поясни смешанные случаи
    commercial: 'yes',                 // yes | conditional | no
    hardware: ['min', 'gpu'],          // какие классы железа есть у версий семейства
    summary: 'Одна-две фразы до ~200 знаков: что это и чем выделяется.',
    tasks: ['3–4 задачи бизнеса', '...'],
    where: ['2–4 отрасли/подразделения', '...'],
    versions: [['Название версии', '2024-04'], ...], // по возрастанию даты, ключевые версии (до ~8)
    hf: 'https://huggingface.co/...' | null,
    github: 'https://github.com/...' | null,
    alternatives: ['id-из-каталога', ...], // 1–3 id похожих семейств (любые из общего списка ниже)
    source: 'URL, где проверен последний выпуск',
    verified: true,                    // false — если не смог подтвердить; такие не публикуются
  },
];
```
В строках не используй обратные кавычки. Файл должен грузиться через `node -e "require('./tools/models/<группа>.js')"`.

## Ключи modality
text (языковые модели), code, vlm (картинка+текст), ocr, image (генерация картинок), video, avatar (говорящие головы),
asr (речь в текст), tts (синтез речи), omni (голосовые ассистенты, речь-в-речь, перевод речи), audio (музыка и звуки),
3d, vision (детекция/сегментация/глубина/эмбеддинги картинок), embed (эмбеддинги и реранкеры для поиска/RAG),
timeseries (прогнозы), robotics.

## Железо (hardware)
- min — ноутбук/обычный ПК, до 8 ГБ видеопамяти (примерно до 7–8B в 4 битах, большинство ASR/TTS/эмбеддингов).
- gpu — одна видеокарта 16–80 ГБ (примерно 7B–70B, большинство моделей картинок и видео).
- multi — несколько видеокарт (флагманы 100B+, большие MoE).

## Лицензия (commercial)
- yes — у основных версий Apache 2.0 / MIT / BSD / OpenMDW / CC-BY и т.п.
- conditional — собственные лицензии с ограничениями (Llama, Gemma Terms, NVIDIA Open Model License, Tencent с региональными
  исключениями, лимиты по выручке, AGPL) или смешанное семейство (часть версий некоммерческая).
- no — все основные версии некоммерческие (CC-BY-NC, research-only).
Лицензию бери с карточки модели на HF. Сомневаешься — conditional и поясни в license.

## Правила фактов
- Ничего не выдумывать. Даты, размеры, лицензии — только с карточки HF/GitHub или официального блога.
  Удобно: https://huggingface.co/api/models?author=<org>&sort=createdAt&direction=-1 и https://huggingface.co/api/models/<repo>.
- Не уверен в поле — пиши осторожнее (например sizes: 'около 7B') или ставь verified:false.
- Семейства, у которых НЕТ открытых весов (только API), в каталог не включать.
- Задачи и отрасли — реалистичные для бизнеса, без обещаний («поможет увеличить продажи» — нельзя).

## Уже есть в каталоге (не дублировать эти id, но можно ссылаться в alternatives)
qwen, llama, deepseek-r1, gpt-oss, gemma, mistral, whisper, flux, qwen-image, wan, bge-m3, sam

## Общий список id по группам (для alternatives; пиши id именно так)
- text-west: bloom, opt, pythia, flan-t5, falcon, mpt, phi, olmo, dbrx, grok, jamba, command, nemotron, granite, smollm, lfm, apertus, muse-glimmer, inkling, laguna, trinity, sarvam, aya
- text-east: deepseek, kimi, glm, minimax, hunyuan, yi, baichuan, internlm, step, ling, longcat, mimo, ernie, seed-oss, exaone, solar, kanana, hyperclova, gigachat, yandexgpt, t-pro, vikhr
- code: starcoder, code-llama, deepseek-coder, qwen-coder, codestral, devstral, mellum, kat-coder, iquest-coder, sera, seed-coder
- vlm-ocr: llava, qwen-vl, internvl, minicpm-v, cogvlm, idefics, molmo, paligemma, florence-2, moondream, smolvlm, kimi-vl, janus, keye-vl, ovis, granite-vision, nougat, got-ocr, olmocr, docling, dots-ocr, deepseek-ocr, paddleocr-vl, glm-ocr, mineru, chandra-ocr, hunyuan-ocr, lighton-ocr, nanonets-ocr, teleocr, qianfan-ocr
- image-video: stable-diffusion, kandinsky, deepfloyd-if, pixart, playground, sana, hunyuan-image, hidream, omnigen, z-image, glm-image, longcat-image, krea, ideogram, chroma, bagel, controlnet, animatediff, stable-video-diffusion, open-sora, cogvideox, mochi, ltx-video, hunyuan-video, skyreels, step-video, magi, sana-video, longcat-video, minimax-h3, sadtalker, liveportrait, musetalk, hallo, echomimic, infinitetalk, hunyuan-video-avatar, liveavatar
- speech-audio: parakeet, gigaam, t-one, moonshine, voxtral, qwen-asr, cohere-transcribe, omnilingual-asr, granite-speech, sensevoice, vibevoice, bark, xtts, styletts, piper, silero, f5-tts, fish-speech, cosyvoice, kokoro, parler-tts, dia, orpheus, csm, chatterbox, indextts, moss-tts, higgs-audio, qwen-tts, voxcpm, zonos, moshi, qwen-omni, seamless, minicpm-o, musicgen, stable-audio, yue, ace-step, diffrhythm, songgeneration, heartmula
- other: point-e, triposr, stable-fast-3d, instantmesh, trellis, hunyuan3d, hy-world, sam-3d, yolo, rf-detr, grounding-dino, dino, depth-anything, moge, clip-siglip, e5, gte, nomic-embed, jina-embeddings, qwen-embedding, nemotron-embed, giga-embeddings, embeddinggemma, timesfm, chronos, moirai, toto, tirex, lag-llama, openvla, openpi, gr00t, cosmos, smolvla, molmoact, lingbot-vla
Если по твоей группе семейство не подтверждается или весов нет — просто пропусти его. Можно добавить значимое пропущенное семейство своей группы с новым id.

## В конце
1. `node -e "const a=require('./tools/models/<группа>.js');console.log(a.length)"` — файл грузится.
2. Отчёт: сколько записей, какие пропущены и почему, что помечено verified:false.

## Дополнение (волна 2, 22.09.2026)
Новые ключи modality (можно совмещать со старыми):
tryon (виртуальная примерка одежды), photo (обработка фото: удаление фона, апскейл, реставрация, ретушь лиц),
translate (машинный перевод), safety (модерация, guard-модели, фильтры токсичности и утечек),
voice (диаризация/кто говорит, разделение звука, шумоподавление, клонирование и конверсия голоса),
agent (агенты для управления компьютером/браузером, разбор интерфейса), tabular (модели для табличных данных),
nlp (разбор текста: NER, классификация, энкодеры типа BERT), medical (медицинские модели), reasoning (математика и рассуждения).

ВАЖНО: список уже существующих id смотри так:
node -e "console.log(require('./tools/models-data.js').map(m=>m.id).join(' '))"
Не дублируй существующие id. Если модель — дообучение уже существующего семейства (например, QwQ — это Qwen), всё равно
можно сделать отдельную запись, если это самостоятельный известный продукт с собственным названием.
Для медицинских моделей в summary обязательно: «не заменяет врача, решения принимает специалист».

## Дополнение (волна 4, 22.09.2026)
Новые ключи modality: rerank (реранкеры — переупорядочивают результаты поиска), docsearch (поиск по сканам/PDF как по картинкам:
ColPali и т. п.), sql (перевод вопроса в SQL), judge (проверка фактов, судьи качества, reward-модели), face (распознавание лиц,
сохранение лица при генерации), finance, cyber (кибербезопасность), weather (погода и климат), geo (спутниковые снимки,
геоданные), bio (биология, белки, химия), driving (автономное вождение).
Определение речи (VAD, конец реплики) — ключ voice. Понимание звука (аудио-LLM) — omni. Понимание видео — vlm.
Lip-sync — avatar. 3D-реконструкция — 3d. Поза и движения — vision. Макет документов, таблицы, рукописный OCR — ocr.
Звук к видео (фоли) — audio (+ video). Модели мира и игр — video. NSFW-классификаторы — safety. Извлечение данных — nlp.
ОБЯЗАТЕЛЬНО для новых записей сразу заполняй и поля волны 3 (ru, industries, ollama, cpu) — правила в _BRIEF_FIELDS.md.
Перед записью сверь существующие id: node -e "console.log(require('./tools/models-data.js').map(m=>m.id).join(' '))"
