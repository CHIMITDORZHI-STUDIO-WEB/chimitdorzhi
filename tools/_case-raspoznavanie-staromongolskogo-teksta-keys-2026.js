module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-translate',
    title: 'Распознавание и перевод старомонгольского текста по фото',
    metaTitle: 'Кейс: распознавание старомонгольской вязи по фото',
    metaDescription: 'Распознал текст на старописьменной монгольской вязи открытой моделью image2bichig, сверил с публикацией и честно отделил надёжное от чернового.',
    excerpt: 'Китайские сервисы оказались недоступны, поэтому текст на старописьменной монгольской вязи распознал открытой моделью image2bichig и сверил с опубликованной версией легенды. Три слоя результата, отчёт на 5 страниц и чёткая граница между надёжным и черновым.',
    tags: ['кейс', 'OCR', 'перевод', 'нейросети'],
    cta: 'auto',
    relatedSlugs: ['ocr-raspoznat-tekst-s-foto-2026', 'novye-ocr-modeli-2026-dokumenty-bez-oblaka', 'ocr-transkribaciya-servis-keys-2026'],
  },
  flagship: {
    name: 'Перевод старомонгольского текста по фото',
    slug: 'raspoznavanie-staromongolskogo-teksta-keys-2026',
    type: 'ai', done: true, delivered: true,
    task: 'По фотографии нужно было распознать и перевести текст на старописьменной монгольской вязи. Обычные сервисы распознавания такое письмо не читают, а мини-программы WeChat и китайские сервисы оказались недоступны.',
    solution: 'Использовал открытую модель image2bichig из проекта tugstugi/mongolian-nlp и сверил сырой распознанный текст с опубликованной версией той же легенды. Результат разложен на три слоя: транслитерация, современный монгольский на кириллице и русский перевод — плюс список мест, требующих сверки.',
    result: 'Сдан отчёт в PDF на 5 страниц. Верхний ярус текста надёжен по смыслу, нижний ярус начиная с 16-й колонки — черновик, и это написано прямо. Для публикации нужна сверка носителем языка.',
    stack: ['image2bichig', 'tugstugi/mongolian-nlp', 'сверка с публикацией', 'отчёт PDF'],
    en: {
      task: 'A photo of text in the traditional Mongolian vertical script had to be recognised and translated. Ordinary OCR services cannot read this script, and WeChat mini programs and Chinese recognition services turned out to be unavailable.',
      solution: 'I used the open image2bichig model from the tugstugi/mongolian-nlp project and checked the raw output against a published version of the same legend. The result has three layers: transliteration, modern Mongolian in Cyrillic and a Russian translation — plus a list of passages that need verification.',
      result: 'Delivered as a 5-page PDF report. The upper tier of the text is reliable in meaning; the lower tier from column 16 onwards is a draft, and the report says so plainly. Publication requires review by a native speaker.',
    },
    es: {
      task: 'Había que reconocer y traducir, a partir de una foto, un texto en la escritura mongola tradicional vertical. Los servicios OCR habituales no leen esta escritura, y los miniprogramas de WeChat y los servicios chinos de reconocimiento no estaban disponibles.',
      solution: 'Usé el modelo abierto image2bichig del proyecto tugstugi/mongolian-nlp y cotejé el texto reconocido en bruto con una versión publicada de la misma leyenda. El resultado tiene tres capas: transliteración, mongol moderno en cirílico y traducción al ruso, además de una lista de pasajes que requieren revisión.',
      result: 'Entregado como informe PDF de 5 páginas. El nivel superior del texto es fiable en cuanto al sentido; el nivel inferior a partir de la columna 16 es un borrador, y el informe lo dice claramente. Para publicarlo hace falta la revisión de un hablante nativo.',
    },
  },
};
