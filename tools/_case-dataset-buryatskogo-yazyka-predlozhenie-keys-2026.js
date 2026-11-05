module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-translate',
    title: 'Датасет бурятского языка: партнёрское предложение на 12 страниц',
    metaTitle: 'Кейс: датасет бурятского языка для нейросетей, PDF',
    metaDescription: 'Партнёрский PDF на 12 страниц: что есть в сети для бурятского, проверка переводчиков, база и три датасета: текст, речь, пение. Партнёрам пока не отправлялся.',
    excerpt: 'Для нейросетей, которые должны говорить и петь по-бурятски, нет открытых данных. Я собрал для потенциальных партнёров PDF на 12 страниц: обзор того, что есть в сети, живая проверка двух переводчиков, языковая база и три датасета. Документ готов, партнёрам пока не отправлялся.',
    tags: ['кейс', 'датасет', 'бурятский язык', 'нейросети', 'речь и пение'],
    cta: 'auto',
    relatedSlugs: ['ii-dlya-sohraneniya-buryatskogo-yazyka-2027', 'raspoznavanie-staromongolskogo-teksta-keys-2026', 'kak-rabotaet-raspoznavanie-rechi-2027', 'neyroset-dlya-perevoda-2026'],
  },
  flagship: {
    name: 'Датасет бурятского языка: предложение партнёрам',
    slug: 'dataset-buryatskogo-yazyka-predlozhenie-keys-2026',
    type: 'ai', done: false, delivered: false,
    task: 'Бурятский уходит от детей, а нейросети его почти не знают: нет открытых данных, на которых модель могла бы читать стихи, говорить и петь по-бурятски. Нужен документ, с которым можно идти к потенциальным партнёрам.',
    solution: 'PDF на 12 страниц: обзор имеющихся ресурсов, живая проверка двух переводчиков, языковая база, три датасета (текст, речь, пение), говоры, права и этика, команда партнёров, план пилота.',
    result: 'Документ готов, партнёрам пока не отправлялся. Разбор фраз на третьей странице должен сверить носитель языка. Проект не запущен, данные не собирались.',
    stack: ['HTML и CSS', 'Playwright', 'PDF', 'Hugging Face', 'Whisper', 'Montreal Forced Aligner'],
    en: {
      task: 'Buryat is fading among children and neural networks barely know it: there is no open data on which a model could read poems, speak and sing in Buryat. A document was needed to take to potential partners.',
      solution: 'A 12-page PDF: an overview of existing resources, a live test of two translators, the language base, three datasets (text, speech, singing), dialects, rights and ethics, the partner team and the pilot plan.',
      result: 'The document is ready and has not yet been sent to partners. A native speaker still has to check the phrase comparison on page three. The project has not started and no data has been collected.',
    },
    es: {
      task: 'El buriato se pierde entre los niños y las redes neuronales apenas lo conocen: no hay datos abiertos con los que un modelo pueda leer poemas, hablar y cantar en buriato. Hacía falta un documento para presentar a posibles socios.',
      solution: 'Un PDF de 12 páginas: un panorama de los recursos existentes, una prueba en vivo de dos traductores, la base lingüística, tres conjuntos de datos (texto, habla, canto), dialectos, derechos y ética, el equipo de socios y el plan piloto.',
      result: 'El documento está listo y aún no se ha enviado a los socios. Un hablante nativo todavía debe revisar la comparación de frases de la página tres. El proyecto no ha arrancado y no se han recopilado datos.',
    },
  },
};
