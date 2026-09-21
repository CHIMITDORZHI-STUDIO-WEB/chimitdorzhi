// Content HTML for "Открытые ИИ-модели 2022–2026: полный путеводитель для бизнеса".
module.exports = `
<div class="blog-tldr"><h3>Коротко (TL;DR)</h3><ul>
<li>Открытая модель — это нейросеть, веса которой можно скачать и запустить у себя. Это не то же самое, что открытый код: код может быть открыт, а веса закрыты, и наоборот.</li>
<li>За 2022–2026 годы рынок прошёл путь от единичных выпусков (Whisper, Stable Diffusion, BLOOM) до сотен версий в год: в каталоге 290 выпусков за 2025 год и 192 за январь–сентябрь 2026-го.</li>
<li>Открытые модели закрывают 16 направлений: текст, код, документы, речь, синтез голоса, картинки, видео, аватары, 3D, поиск, прогнозы, роботы и другие.</li>
<li>Из 220 семейств в каталоге 137 можно использовать в коммерции без оговорок, у 73 есть условия, 10 — только некоммерческие. Лицензию проверяют до внедрения, а не после.</li>
<li>У 150 семейств есть версии, которые работают на ноутбуке. Выбор идёт по связке: задача, язык, лицензия, железо и проверка на своих примерах.</li>
</ul></div>

<p><strong>Открытая модель</strong> (open-weights) — это нейросеть, чьи обученные веса разработчик выложил в открытый доступ: их можно скачать, запустить на своём сервере и дообучить под свою задачу по условиям лицензии. От открытого кода это отличается принципиально: открытый код — это программа, которая запускает или обучает модель, а веса — результат обучения, сама «память» нейросети. Бывает, что код открыт под MIT, а веса закрыты или выложены только для исследований. Для бизнеса важно именно второе: без весов ничего не запустить у себя. Все семейства, о которых я пишу ниже, собраны в <a href="/ii-modeli/">каталоге открытых ИИ-моделей</a> — в каталоге 220 семейств с датами выпусков, размерами, лицензиями и требованиями к железу.</p>

<h2 id="po-godam">Как менялся рынок: 2022 → 2026</h2>
<p>Удобнее всего смотреть на рынок через выпуски версий. В каталоге за 2022 год отмечено 16 выпусков, за 2023-й — 73, за 2024-й — 166, за 2025-й — 290, а за девять месяцев 2026-го уже 192. Разберу, что было главным в каждом году.</p>

<h3>2022: первые модели, которые можно взять себе</h3>
<p>Год, когда открытые модели вышли за пределы лабораторий. В августе вышла <a href="/ii-modeli/stable-diffusion/">Stable Diffusion</a> 1.4, в октябре — 1.5: генерация картинок впервые стала доступна на обычной видеокарте. В сентябре OpenAI выложила <a href="/ii-modeli/whisper/">Whisper</a> — распознавание речи, которое до сих пор остаётся стандартом для расшифровки звонков. Среди языковых моделей — <a href="/ii-modeli/opt/">OPT</a> от Meta в мае и <a href="/ii-modeli/bloom/">BLOOM</a> в июле. Россия тоже отметилась: Яндекс выложил YaLM-100B (семейство <a href="/ii-modeli/yandexgpt/">YandexGPT</a>), Сбер — <a href="/ii-modeli/kandinsky/">Kandinsky</a> 2.0, а <a href="/ii-modeli/silero/">Silero</a> выпустил синтез речи v3 в pip-пакете.</p>

<h3>2023: год LLaMA и открытых чат-моделей</h3>
<p>В феврале вышла LLaMA, в июле — Llama 2 (семейство <a href="/ii-modeli/llama/">Llama</a>), и вокруг неё выросла огромная экосистема дообучений. В сентябре появилась Mistral 7B, в декабре — Mixtral 8x7B (<a href="/ii-modeli/mistral/">Mistral</a>). В августе стартовал <a href="/ii-modeli/qwen/">Qwen</a> от Alibaba, в ноябре — первая DeepSeek LLM 7B / 67B (<a href="/ii-modeli/deepseek/">DeepSeek</a>). Рядом с текстом росли и другие направления: SDXL 1.0 для картинок, <a href="/ii-modeli/sam/">SAM</a> для выделения объектов на фото, <a href="/ii-modeli/llava/">LLaVA</a> — модель, которая понимает картинку и текст, <a href="/ii-modeli/musicgen/">MusicGen</a> для музыки и XTTS v2 для клонирования голоса.</p>

<h3>2024: открытые модели догоняют коммерческие</h3>
<p>Llama выпустила сразу четыре поколения: Llama 3, 3.1, 3.2 и 3.3. Qwen прошёл путь от Qwen1.5 до Qwen2.5, Google открыл <a href="/ii-modeli/gemma/">Gemma</a> и Gemma 2, Microsoft — Phi-3 и Phi-4 (<a href="/ii-modeli/phi/">Phi</a>). В августе вышел <a href="/ii-modeli/flux/">FLUX</a>.1, в декабре — DeepSeek-V3 и <a href="/ii-modeli/hunyuan-video/">HunyuanVideo</a>. Для русского языка год оказался поворотным: Сбер выложил <a href="/ii-modeli/gigaam/">GigaAM</a> для распознавания речи, в декабре — GigaChat 20B-A3B (<a href="/ii-modeli/gigachat/">GigaChat</a>) и эмбеддинги FRIDA и Giga-Embeddings-instruct (<a href="/ii-modeli/giga-embeddings/">Giga-Embeddings</a>), Т-Банк — T-Lite / T-Pro 1.0 (<a href="/ii-modeli/t-pro/">T-Pro</a>), а команда <a href="/ii-modeli/vikhr/">Vikhr</a> начала выпускать русскоязычные дообучения.</p>

<h3>2025: рассуждающие модели и взрыв направлений</h3>
<p>Год открыл <a href="/ii-modeli/deepseek-r1/">DeepSeek-R1</a> в январе — рассуждающая модель в открытом доступе. Дальше вышли Gemma 3, Qwen3 и Llama 4, летом — <a href="/ii-modeli/kimi/">Kimi</a> K2 и GLM-4.5 (<a href="/ii-modeli/glm/">GLM</a>), в августе OpenAI выложила <a href="/ii-modeli/gpt-oss/">gpt-oss</a> 20b и 120b. Видео стало реальностью благодаря <a href="/ii-modeli/wan/">Wan</a> 2.1 и 2.2, документы — благодаря DeepSeek-OCR и <a href="/ii-modeli/paddleocr-vl/">PaddleOCR-VL</a>. Российские разработчики выпустили YandexGPT-5-Lite-8B, T-Pro 2.0, потоковую модель <a href="/ii-modeli/t-one/">T-one</a> для телефонии, GigaAM-v3, GigaChat3 10B-A1.8B, Silero TTS v5 и Kandinsky 5.0.</p>

<h3>2026: январь–сентябрь</h3>
<p>Темп не снижается: 192 выпуска за девять месяцев. В январе вышли Kimi K2.5, FLUX.2 [klein], LTX-2 (<a href="/ii-modeli/ltx-video/">LTX-Video</a>), речевые <a href="/ii-modeli/qwen-asr/">Qwen3-ASR</a> и <a href="/ii-modeli/qwen-tts/">Qwen3-TTS</a>, DeepSeek-OCR 2 и <a href="/ii-modeli/glm-ocr/">GLM-OCR</a>. В феврале — Qwen3.5, GLM-5 и MiniMax-M2.5 (<a href="/ii-modeli/minimax/">MiniMax</a>). В марте Сбер выпустил GigaChat3.1 в двух размерах — 10B и 702B, вышли Mistral Small 4 и Nemotron 3 Super 120B-A12B (<a href="/ii-modeli/nemotron/">Nemotron</a>).</p>
<p>Апрель стал самым плотным месяцем для языковых моделей: DeepSeek-V4-Pro / V4-Flash, Gemma 4, Qwen3.6, Kimi K2.6 и Granite 4.1 (<a href="/ii-modeli/granite/">Granite</a>). В мае вышли Command A+ (<a href="/ii-modeli/command/">Command</a>), MiniCPM-V 4.6 и Stable Audio 3, в июне — Nemotron 3 Ultra 550B-A55B, MiniMax-M3 и Cosmos 3 (<a href="/ii-modeli/cosmos/">Cosmos</a>). В июле — GigaChat3.5 432B-A28B, Kimi K3, Hy3 (<a href="/ii-modeli/hunyuan/">Hunyuan</a>), <a href="/ii-modeli/inkling/">Inkling</a>, GigaAM Multilingual и Kandinsky WM 1.0. В августе — Qwen3.8, GLM-5.3, <a href="/ii-modeli/muse-glimmer/">Muse Glimmer</a> 30B и новые Giga-Embeddings-instruct 0826. В сентябре Яндекс выложил базовую AliceAI-Foundation-80B-A3B-Base, Сбер — GigaChat3.5 Reasoning, вышли DeepSeek-V4.1-Flash и Qwen-Image-2.1.</p>

<h2 id="napravleniya">16 направлений: что умеют открытые модели</h2>
<p>Одно семейство может попадать в несколько направлений, поэтому сумма в последнем столбце больше 220.</p>
<table class="blog-table">
<thead><tr><th>Направление</th><th>Что делает для бизнеса</th><th>Примеры семейств</th><th>В каталоге</th></tr></thead>
<tbody>
<tr><td>Текст</td><td>Чат-боты, ответы клиентам, работа с базой знаний</td><td><a href="/ii-modeli/qwen/">Qwen</a>, <a href="/ii-modeli/gigachat/">GigaChat</a>, <a href="/ii-modeli/llama/">Llama</a></td><td>51</td></tr>
<tr><td>Картинка + текст</td><td>Понимание фото, скриншотов, схем</td><td><a href="/ii-modeli/qwen-vl/">Qwen-VL</a>, <a href="/ii-modeli/internvl/">InternVL</a>, <a href="/ii-modeli/minicpm-v/">MiniCPM-V</a></td><td>38</td></tr>
<tr><td>Синтез речи</td><td>Озвучка, голосовые ответы, клонирование голоса</td><td><a href="/ii-modeli/silero/">Silero</a>, <a href="/ii-modeli/cosyvoice/">CosyVoice</a>, <a href="/ii-modeli/qwen-tts/">Qwen3-TTS</a></td><td>22</td></tr>
<tr><td>Картинки</td><td>Генерация изображений для карточек и рекламы</td><td><a href="/ii-modeli/flux/">FLUX</a>, <a href="/ii-modeli/kandinsky/">Kandinsky</a>, <a href="/ii-modeli/qwen-image/">Qwen-Image</a></td><td>20</td></tr>
<tr><td>Документы и OCR</td><td>Распознавание сканов, счетов, таблиц</td><td><a href="/ii-modeli/paddleocr-vl/">PaddleOCR-VL</a>, <a href="/ii-modeli/deepseek-ocr/">DeepSeek-OCR</a>, <a href="/ii-modeli/mineru/">MinerU</a></td><td>19</td></tr>
<tr><td>Видео</td><td>Ролики из текста и картинки</td><td><a href="/ii-modeli/wan/">Wan</a>, <a href="/ii-modeli/ltx-video/">LTX-Video</a>, <a href="/ii-modeli/hunyuan-video/">HunyuanVideo</a></td><td>17</td></tr>
<tr><td>Речь в текст</td><td>Расшифровка звонков и встреч</td><td><a href="/ii-modeli/whisper/">Whisper</a>, <a href="/ii-modeli/gigaam/">GigaAM</a>, <a href="/ii-modeli/t-one/">T-one</a></td><td>14</td></tr>
<tr><td>Поиск и RAG</td><td>Смысловой поиск по документам компании</td><td><a href="/ii-modeli/giga-embeddings/">Giga-Embeddings</a>, <a href="/ii-modeli/bge-m3/">BGE-M3</a>, <a href="/ii-modeli/qwen-embedding/">Qwen3 Embedding</a></td><td>13</td></tr>
<tr><td>Код</td><td>Помощь разработчикам, автоматизация</td><td><a href="/ii-modeli/qwen-coder/">Qwen-Coder</a>, <a href="/ii-modeli/devstral/">Devstral</a></td><td>12</td></tr>
<tr><td>Аватары</td><td>Говорящие головы, оживление фото</td><td><a href="/ii-modeli/liveportrait/">LivePortrait</a>, <a href="/ii-modeli/musetalk/">MuseTalk</a>, <a href="/ii-modeli/infinitetalk/">InfiniteTalk</a></td><td>11</td></tr>
<tr><td>Компьютерное зрение</td><td>Подсчёт, поиск и выделение объектов на камерах</td><td><a href="/ii-modeli/yolo/">YOLO</a>, <a href="/ii-modeli/sam/">SAM</a>, <a href="/ii-modeli/rf-detr/">RF-DETR</a></td><td>10</td></tr>
<tr><td>3D</td><td>3D-модели товаров по фото</td><td><a href="/ii-modeli/trellis/">TRELLIS</a>, <a href="/ii-modeli/hunyuan3d/">Hunyuan3D</a></td><td>9</td></tr>
<tr><td>Роботы</td><td>Управление манипуляторами и роботами</td><td><a href="/ii-modeli/gr00t/">GR00T</a>, <a href="/ii-modeli/openpi/">openpi</a>, <a href="/ii-modeli/smolvla/">SmolVLA</a></td><td>9</td></tr>
<tr><td>Музыка и звук</td><td>Фоновая музыка, джинглы, звуки</td><td><a href="/ii-modeli/ace-step/">ACE-Step</a>, <a href="/ii-modeli/stable-audio/">Stable Audio</a></td><td>8</td></tr>
<tr><td>Прогнозы</td><td>Спрос, продажи, нагрузка по временным рядам</td><td><a href="/ii-modeli/chronos/">Chronos</a>, <a href="/ii-modeli/timesfm/">TimesFM</a>, <a href="/ii-modeli/toto/">Toto</a></td><td>6</td></tr>
<tr><td>Голосовые ассистенты</td><td>Живой голосовой диалог в реальном времени</td><td><a href="/ii-modeli/qwen-omni/">Qwen Omni</a>, <a href="/ii-modeli/minicpm-o/">MiniCPM-o</a>, <a href="/ii-modeli/moshi/">Moshi</a></td><td>4</td></tr>
</tbody>
</table>

<h2 id="russkiy">Модели с сильным русским языком</h2>
<p>В каталоге 9 российских семейств, и почти все они сделаны с прицелом на русский язык. Для текста это <a href="/ii-modeli/gigachat/">GigaChat</a> от Сбера — от лёгкой 10B-A1.8B до флагманов до 702B, всё под MIT. <a href="/ii-modeli/yandexgpt/">YandexGPT / AliceAI</a> — модели Яндекса, обученные с нуля с упором на русский и российские реалии; новая AliceAI-Foundation 80B-A3B выложена под Apache 2.0 как база для дообучения. <a href="/ii-modeli/t-pro/">T-Pro / T-Lite</a> от Т-Банка — дообучения Qwen под русский язык, T-Pro на 32B помещается на одну видеокарту. <a href="/ii-modeli/vikhr/">Vikhr</a> — независимая команда, которая дообучает Mistral, Qwen и Llama под русский, есть компактные версии для обычного ПК.</p>
<p>Для речи — <a href="/ii-modeli/gigaam/">GigaAM</a> (одна из самых точных моделей для русской речи, есть многоязычная версия с казахским, киргизским и узбекским), <a href="/ii-modeli/t-one/">T-one</a> (72M, потоковое распознавание телефонных разговоров без видеокарты) и <a href="/ii-modeli/silero/">Silero</a> — лёгкий синтез русской речи, в версии v5 добавлены языки СНГ и народов России. Для картинок и видео — <a href="/ii-modeli/kandinsky/">Kandinsky</a>, который понимает запросы на русском и российский культурный контекст. Для поиска по документам — <a href="/ii-modeli/giga-embeddings/">FRIDA и Giga-Embeddings</a>, одни из лучших на русскоязычных тестах поиска.</p>
<p>Из зарубежных семейств русский явно указан у <a href="/ii-modeli/qwen/">Qwen</a>, <a href="/ii-modeli/whisper/">Whisper</a>, многоязычных <a href="/ii-modeli/e5/">E5</a>, <a href="/ii-modeli/qwen-embedding/">Qwen3 Embedding</a>, <a href="/ii-modeli/omnilingual-asr/">Omnilingual ASR</a>, <a href="/ii-modeli/cosyvoice/">CosyVoice</a>, <a href="/ii-modeli/voxcpm/">VoxCPM</a> и <a href="/ii-modeli/paddleocr-vl/">PaddleOCR-VL</a>. Обратное тоже бывает: у Kokoro и Parler-TTS русского нет, это стоит проверить до выбора.</p>

<h2 id="licenzii">Лицензии: что можно в коммерцию</h2>
<p>В каталоге семейства разделены на три группы. <strong>Можно в коммерцию</strong> — 137 семейств: Apache 2.0, MIT и похожие свободные лицензии, например <a href="/ii-modeli/gigachat/">GigaChat</a>, <a href="/ii-modeli/gpt-oss/">gpt-oss</a>, <a href="/ii-modeli/wan/">Wan</a>. <strong>Коммерция с условиями</strong> — 73 семейства. <strong>Только некоммерческое</strong> — 10 семейств, среди них <a href="/ii-modeli/xtts/">Coqui XTTS</a>, <a href="/ii-modeli/seamless/">Seamless</a> и <a href="/ii-modeli/ideogram/">Ideogram 4</a>.</p>
<p>Условия во второй группе бывают очень разными. Вот типичные примеры из каталога:</p>
<ul>
<li><strong>Порог по выручке.</strong> У <a href="/ii-modeli/stable-audio/">Stable Audio</a> бесплатно для компаний с выручкой до 1 млн долларов в год, у <a href="/ii-modeli/lfm/">LFM</a> — до 10 млн долларов, выше нужна отдельная лицензия.</li>
<li><strong>Ограничение по территории.</strong> Лицензия Tencent Hunyuan Community License у <a href="/ii-modeli/hunyuan-video/">HunyuanVideo</a> не действует в ЕС, Великобритании и Южной Корее.</li>
<li><strong>Обязанность открыть свой код.</strong> <a href="/ii-modeli/yolo/">YOLO</a> распространяется под AGPL-3.0: код продукта придётся открыть или купить корпоративную лицензию.</li>
</ul>
<p>Отдельная ловушка — разные лицензии внутри одного семейства. У <a href="/ii-modeli/flux/">FLUX</a> версии [schnell] и [klein] 4B под Apache 2.0, а версии [dev] некоммерческие. У <a href="/ii-modeli/timesfm/">TimesFM</a> версии до 2.5 под Apache 2.0, а TimesFM 3.0 — уже некоммерческая. Поэтому смотреть надо на лицензию конкретной версии, а не семейства. Подробно о том, как читать лицензии по слоям, я писал в разборе <a href="/blog/licenzii-otkrytyh-modeley-2026/">лицензий открытых моделей</a>. И оговорка: я даю инженерную проверку, а финальное решение по лицензии для бизнеса принимает юрист.</p>

<h2 id="zhelezo">Какое железо нужно</h2>
<p>В каталоге у каждой модели отмечено, на каком классе железа запускаются её версии. Один и тот же Qwen есть и в версии для ноутбука, и во флагмане для кластера, поэтому классы пересекаются.</p>
<p><strong>Ноутбук или обычный ПК</strong> (до 8 ГБ видеопамяти) — версии есть у 150 семейств. Сюда попадают распознавание речи <a href="/ii-modeli/whisper/">Whisper</a>, <a href="/ii-modeli/gigaam/">GigaAM</a> и <a href="/ii-modeli/t-one/">T-one</a>, синтез <a href="/ii-modeli/silero/">Silero</a>, маленькие языковые <a href="/ii-modeli/smollm/">SmolLM</a>, эмбеддинги <a href="/ii-modeli/bge-m3/">BGE-M3</a> и OCR вроде <a href="/ii-modeli/paddleocr-vl/">PaddleOCR-VL</a> на 0.9B.</p>
<p><strong>Одна видеокарта на 16–80 ГБ</strong> — версии есть у 167 семейств. Это <a href="/ii-modeli/gpt-oss/">gpt-oss</a> 20B и 120B, <a href="/ii-modeli/t-pro/">T-Pro</a> на 32B, <a href="/ii-modeli/muse-glimmer/">Muse Glimmer</a> 30B, генерация картинок <a href="/ii-modeli/flux/">FLUX</a> и видео <a href="/ii-modeli/wan/">Wan</a>.</p>
<p><strong>Кластер из нескольких видеокарт</strong> — нужен для флагманов 53 семейств: <a href="/ii-modeli/deepseek/">DeepSeek</a> до 1.6T-A49B, <a href="/ii-modeli/kimi/">Kimi</a> до 2.8T-A104B, <a href="/ii-modeli/gigachat/">GigaChat</a> 702B, <a href="/ii-modeli/inkling/">Inkling</a> 975B-A41B. Для большинства бизнес-задач такие размеры не нужны. Как посчитать память под конкретную модель, я разбирал в статье <a href="/blog/skolko-zheleza-nuzhno-lokalnomu-ii-2026/">сколько железа нужно локальному ИИ</a>, а про выбор видеокарты — в материале о <a href="/blog/gpu-dlya-lokalnogo-ii-2026/">GPU для локального ИИ</a>.</p>

<h2 id="kak-vybrat">Как выбрать модель под задачу</h2>
<p>Я иду по пяти шагам и не начинаю с рейтингов.</p>
<p><strong>1. Задача.</strong> Сначала понять, что именно нужно: отвечать клиентам, расшифровывать звонки, разбирать сканы, искать по базе знаний. От этого зависит направление из таблицы выше, и выбор сразу сужается с 220 семейств до одного-двух десятков.</p>
<p><strong>2. Язык.</strong> Если работа идёт на русском, в приоритете семейства, где русский явно заявлен или ради него модель и делалась. Для речи и поиска это особенно заметно.</p>
<p><strong>3. Лицензия.</strong> Проверяю лицензию конкретной версии под коммерческий сценарий заказчика, до установки. Модель, которую нельзя использовать в продукте, не нужна, какой бы сильной она ни была.</p>
<p><strong>4. Железо.</strong> Смотрю, что есть у заказчика или что он готов поставить, и выбираю размер под это. Часто версия поменьше на одной видеокарте полезнее флагмана, для которого нужен кластер.</p>
<p><strong>5. Проверка на своих примерах.</strong> Беру двух-трёх кандидатов и прогоняю на реальных данных: письмах, звонках, документах. Бенчмарки дают ориентир, но на конкретной задаче расклад может оказаться иным. Подробнее о шорт-листе под русский — в статье <a href="/blog/kakoy-lokalnyy-llm-vybrat-2026/">какой локальный LLM выбрать</a>, а о том, нужна ли модели база знаний или дообучение, — в разборе <a href="/blog/rag-ili-doobuchenie-modeli-2026/">RAG или дообучение</a>.</p>

<h2 id="kak-vnedryayu">Как я ставлю модель заказчику</h2>
<p>Начинаю с разговора о задаче и данных: что должна делать модель, на каком языке, какие данные нельзя выпускать из компании. По этим ответам подбираю два-три семейства из каталога и сверяю их лицензии с тем, как заказчик будет их использовать.</p>
<p>Дальше установка. Модель можно поставить на арендованный сервер, на собственное железо заказчика или в закрытый контур без выхода в интернет, если данные чувствительные. Я разворачиваю модель, настраиваю сервер для запросов и проверяю, что она выдерживает нужный поток.</p>
<p>Затем решаем, как модель узнает специфику бизнеса. Если нужно отвечать по документам, регламентам и прайсам, собираю базу знаний с поиском по смыслу. Если нужен особый стиль или формат ответов, делаю дообучение LoRA — лёгкую надстройку, которая меняет поведение модели без полного переобучения.</p>
<p>Последний шаг — встраивание туда, где работают люди: в CRM, 1С, Telegram- или MAX-бота, во внутренний портал. Модель сама по себе ничего не меняет, пользу она даёт, когда отвечает там, где сотрудники и клиенты уже работают. После запуска смотрю на реальные ответы и дорабатываю.</p>

<h2 id="faq">Частые вопросы</h2>
<h3>Чем открытая модель отличается от ChatGPT или облачного GigaChat?</h3>
<p>Облачную модель вы используете через чужой сервер и платите за запросы. Открытую модель можно скачать и запустить у себя: данные не уходят наружу, условия не меняются без вашего ведома. Минус — нужны железо и настройка.</p>
<h3>Открытая модель — значит бесплатная для бизнеса?</h3>
<p>Не всегда. В каталоге 137 семейств без оговорок для коммерции, 73 с условиями (порог выручки, территория, открытие кода) и 10 только некоммерческих. Скачать можно почти всё, а использовать в продукте — не всё.</p>
<h3>Какие открытые модели лучше всего работают с русским?</h3>
<p>Для текста — GigaChat, YandexGPT / AliceAI, T-Pro, Vikhr и Qwen. Для речи — GigaAM, T-one, Silero. Для поиска по документам — Giga-Embeddings. Окончательный выбор делается тестом на ваших данных.</p>
<h3>Можно ли запустить модель без видеокарты?</h3>
<p>Да, у 150 семейств из каталога есть версии для ноутбука или обычного ПК. Распознавание речи, синтез, эмбеддинги и небольшие языковые модели работают даже на процессоре, просто медленнее.</p>
<h3>Как часто выходят новые версии?</h3>
<p>Очень часто: в каталоге 290 выпусков за 2025 год и 192 за январь–сентябрь 2026-го. Гнаться за каждой новинкой не нужно, важнее, чтобы выбранная версия решала задачу и подходила по лицензии.</p>
<h3>Где посмотреть подробности по конкретной модели?</h3>
<p>В <a href="/ii-modeli/">каталоге</a> у каждого семейства есть карточка: разработчик, страна, размеры, история версий, лицензия, требования к железу и похожие модели.</p>

<h2 id="vyvody">Коротко о главном</h2>
<p>За четыре года открытые модели прошли путь от единичных выпусков вроде Whisper, Stable Diffusion и BLOOM до сотен версий в год. Сегодня они закрывают 16 направлений — от чат-ботов и расшифровки звонков до видео, 3D и прогнозов спроса, а у российских разработчиков есть сильные открытые модели для текста, речи, картинок и поиска.</p>
<p>Главное при выборе — не громкое имя, а связка из пяти вещей: задача, язык, лицензия конкретной версии, железо и проверка на своих примерах. Лицензия заслуживает отдельного внимания: у трети семейств есть условия для коммерции, и внутри одного семейства они могут различаться от версии к версии.</p>
<p>Если хотите, чтобы модель подобрали, поставили на ваш сервер или в закрытый контур, дообучили под ваши данные и встроили в CRM, 1С или бота, — я помогу пройти этот путь целиком. Напишите в Telegram, MAX или VK.</p>
`;
