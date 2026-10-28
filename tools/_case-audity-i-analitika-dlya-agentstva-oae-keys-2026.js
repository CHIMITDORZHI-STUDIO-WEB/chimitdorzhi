module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-files',
    title: 'Аудиты, исследования и ролик для маркетингового агентства в ОАЭ',
    metaTitle: 'Кейс: 16 PDF-аудитов для маркетингового агентства в ОАЭ',
    metaDescription: 'Работа под брендом агентства в ОАЭ: 16 аудитов клиник, брендов и HoReCa из генератора PDF по JSON, исследование рынка кофейни и рекламный ролик.',
    excerpt: 'Маркетинговое агентство в Дубае приносит лиды списком и отдаёт им материалы под своим брендом. За неделю я сделал 16 PDF-аудитов (клиники с учётом правил медицинской рекламы, премиальные товары, HoReCa, детейлинг), исследование рынка и бизнес-план кофейни в Латинской Америке и рекламный ролик для доставки еды. Всё сдано агентству.',
    tags: ['кейс', 'аудит маркетинга', 'ОАЭ', 'PDF', 'ИИ-видео'],
    cta: 'auto',
    relatedSlugs: ['ai-v-marketinge-2026', 'it-dlya-stomatologiy-medcentrov-2026', 'it-dlya-kofeyni-obshchepita-2026', 'neyroset-dlya-video-2026'],
  },
  flagship: {
    name: 'Аудиты и аналитика для агентства в ОАЭ',
    slug: 'audity-i-analitika-dlya-agentstva-oae-keys-2026',
    type: 'doc', done: true, delivered: true, intl: true,
    task: 'Маркетинговому агентству в Дубае нужны материалы под его брендом для переговоров с клиентами: аудиты маркетинга с планом и ИТ-решениями, исследование рынка с бизнес-планом и рекламные ролики. Лиды приходят пачками, отвечать надо на следующий день.',
    solution: 'Генератор на Python: данные аудита лежат в JSON, страницы собираются из шаблона, PDF рендерится через Playwright. 17 готовых ИТ-блоков подставляются по ключам. Для клиник план построен с учётом правил медицинской рекламы DHA, без оплаты процентом за пациента. Отдельно сделаны исследование рынка кофеен и ролик: озвучка отдельно, видео по референсам, сведение звука и апскейл.',
    result: 'С 25 по 27 октября 2026 года агентству ушли 16 аудитов по 5-6 страниц, после смены стиля все 16 пересобраны в новом оформлении. Исследование рынка и бизнес-план кофейни выросли с 7 до 10 страниц. Первый ролик из пяти сдан 21.10.2026. Чем закончились переговоры агентства с его клиентами, я не знаю.',
    stack: ['Python', 'JSON', 'HTML/CSS', 'Playwright', 'Seedance 2.5', 'ElevenLabs', 'ffmpeg'],
    en: {
      task: 'A marketing agency in Dubai needs materials under its own brand for talks with its clients: marketing audits with a plan and IT solutions, market research with a business plan, and promo videos. Leads arrive in batches and need an answer the next day.',
      solution: 'A Python generator: audit data lives in JSON, pages are assembled from a template and the PDF is rendered through Playwright. 17 ready-made IT blocks are inserted by key. For clinics, the plan follows DHA medical advertising rules, with no payment as a percentage per patient. Separately, I did coffee shop market research and a video: voice-over recorded separately, video generated from references, then sound mixing and upscaling.',
      result: 'From 25 to 27 October 2026 the agency received 16 audits of 5-6 pages each; after a style change all 16 were rebuilt in the new design. The coffee shop market research and business plan grew from 7 to 10 pages. The first of five videos was delivered on 21 October 2026. I do not know how the agency\'s talks with its clients ended.',
    },
    es: {
      task: 'Una agencia de marketing en Dubái necesita materiales con su propia marca para negociar con sus clientes: auditorías de marketing con un plan y soluciones de TI, un estudio de mercado con plan de negocio y vídeos publicitarios. Los contactos llegan en lotes y hay que responder al día siguiente.',
      solution: 'Un generador en Python: los datos de cada auditoría están en JSON, las páginas se montan a partir de una plantilla y el PDF se genera con Playwright. 17 bloques de TI ya preparados se insertan por clave. Para las clínicas, el plan sigue las normas de publicidad médica de la DHA, sin pago por porcentaje por paciente. Aparte hice un estudio de mercado de cafeterías y un vídeo: locución grabada por separado, vídeo generado a partir de referencias, mezcla de sonido y escalado.',
      result: 'Del 25 al 27 de octubre de 2026 la agencia recibió 16 auditorías de 5-6 páginas cada una; tras un cambio de estilo, las 16 se regeneraron con el nuevo diseño. El estudio de mercado y el plan de negocio de la cafetería pasaron de 7 a 10 páginas. El primero de cinco vídeos se entregó el 21 de octubre de 2026. No sé cómo terminaron las negociaciones de la agencia con sus clientes.',
    },
  },
};
