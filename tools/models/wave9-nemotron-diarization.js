// Nemotron 3 Diarization: кто и когда говорит, до восьми участников.
// Факты сверены по карточке nvidia/Nemotron-3-Diarization на 24.09.2026.
module.exports = [
  {
    id: 'nemotron-diarization',
    name: 'Nemotron 3 Diarization',
    developer: 'NVIDIA', country: 'США',
    modality: ['voice'],
    first: '2026-08', latest: '2026-09',
    sizes: '100M',
    license: 'OpenMDW 1.1',
    commercial: 'yes',
    hardware: ['min'],
    ru: 'na',
    industries: ['support', 'docs', 'media'],
    ollama: false,
    cpu: true,
    quant: ['gguf'],
    summary: 'Размечает запись по говорящим: кто и когда говорил, до восьми участников, в записи и в прямом эфире. Модель маленькая, есть сборка GGUF и запуск без видеокарты. Записи разговоров это персональные данные, порядок хранения согласуется с юристом.',
    tasks: [
      'Разбор записи звонка или совещания по участникам',
      'Подстановка имён говорящих в расшифровку',
      'Потоковая разметка во время разговора',
      'Подготовка протокола встречи с несколькими участниками',
    ],
    where: ['Колл-центры и поддержка', 'Медиа и подкасты', 'Документооборот и протоколы'],
    versions: [
      ['Nemotron 3 Diarization preview', '2026-08'],
      ['Nemotron 3 Diarization', '2026-09'],
    ],
    hf: 'https://huggingface.co/nvidia/Nemotron-3-Diarization',
    github: 'https://github.com/NVIDIA-NeMo/Speech',
    alternatives: ['nvidia-sortformer', 'pyannote', 'wespeaker'],
    source: 'https://huggingface.co/nvidia/Nemotron-3-Diarization',
    verified: true,
    en: {
      summary: 'Marks up a recording by speaker: who spoke when, for up to eight participants, both in files and live. The model is small, ships a GGUF build and runs without a GPU. Call recordings are personal data, so retention rules are agreed with a lawyer.',
      tasks: [
        'Splitting a call or meeting recording by participant',
        'Adding speaker names to a transcript',
        'Live speaker labelling during a conversation',
        'Preparing minutes for a multi-person meeting',
      ],
      where: ['Call centres and support', 'Media and podcasts', 'Document workflows and minutes'],
      license: 'OpenMDW 1.1',
      country: 'USA',
    },
  },
];
