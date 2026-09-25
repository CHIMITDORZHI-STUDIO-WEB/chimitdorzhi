// Новости сентября 2026 (26.09): open source под задачи бизнеса, три разбора «новость → что делать бизнесу».
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-26';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: "speakr-sprosite-u-planerki-2026", category: "opensource", heroIcon: "ph-fill ph-waveform", ctaInternal: { url: "https://chimitdorzhi.tech/services/rag-systems/", label: "Обсудить поиск по записям встреч" },
    title: "Спросите у планёрки, что вы обещали клиенту: Speakr на своём сервере",
    metaTitle: "Speakr (Спикер): вопросы ко всем записям встреч на своём сервере",
    metaDescription: "Speakr ставится на сервер компании, расшифровывает планёрки и встречи и отвечает на вопросы по всем записям. Лицензия, железо, русский язык и ограничения.",
    excerpt: "Speakr это открытое приложение, которое записывает и расшифровывает планёрки и встречи с клиентами на сервере компании. Руководитель задаёт вопрос сразу ко всем записям и получает ответ со ссылкой на секунду, где это прозвучало. Разбираю лицензию, движки распознавания, требования к железу и честные ограничения.",
    tags: ["транскрибация","open source","ИИ для руководителя","свой сервер"],
    toc: [
      { id: "sprosite-planerku", text: "Спросите у планёрки, что вы обещали клиенту в марте" },
      { id: "chto-umeet", text: "Что умеет Speakr" },
      { id: "voprosy-ko-vsem-zapisyam", text: "Вопросы ко всем записям сразу" },
      { id: "licenziya-i-zhelezo", text: "Лицензия, движки и железо" },
      { id: "ogranicheniya", text: "Чего Speakr не сделает" },
      { id: "chto-sdelat-seychas", text: "Что можно сделать уже сейчас" },
      { id: "kak-vnedryaem", text: "Как мы это внедряем" },
      { id: "faq", text: "Частые вопросы" },
      { id: "vyvody", text: "Коротко о главном" },
    ],
    relatedSlugs: ["ii-transkribaciya-sozvonov-lokalno-2026","rasshifrovka-zvonkov-i-soveshchaniy-pachkoy-2026","whisperx-transkribaciya-rechi-2026","gpu-dlya-lokalnogo-ii-2026"] }),
  E({ slug: "zapisi-priemov-152-fz-bez-oblaka-2026", category: "legal", heroIcon: "ph-fill ph-lock-key", ctaInternal: { url: "https://chimitdorzhi.tech/services/rkn-audit/", label: "Аудит по 152-ФЗ" },
    title: "Клиент рассказал вам всё. А запись ушла на сервер в США",
    metaTitle: "Speakr (Спикер): расшифровка приёмов по 152-ФЗ без облака",
    metaDescription: "Юрист, психолог, врач и риелтор записывают приёмы. Разбираем, чем опасна зарубежная расшифровка по 152-ФЗ и как поставить Speakr на свой сервер.",
    excerpt: "Запись консультации в зарубежном сервисе расшифровки означает трансграничную передачу персональных данных, а у психолога и врача это ещё и сведения о здоровье. Разбираем нормы 152-ФЗ и штрафы по КоАП. Показываем, как открытый Speakr расшифровывает, делит по голосам и делает резюме на вашем сервере.",
    tags: ["152-ФЗ","транскрибация","частная практика","локальный ИИ"],
    toc: [
      { id: "zapis-ushla-v-ssha", text: "Клиент рассказал вам всё. Запись ушла в США" },
      { id: "chto-govorit-zakon", text: "Что говорит 152-ФЗ" },
      { id: "chto-takoe-speakr", text: "Что умеет Speakr" },
      { id: "ogranicheniya", text: "Чего Speakr пока не умеет" },
      { id: "scenarii", text: "Что можно сделать уже сейчас" },
      { id: "poryadok", text: "Порядок работы с записями" },
      { id: "faq", text: "Частые вопросы" },
      { id: "vyvody", text: "Коротко о главном" },
    ],
    relatedSlugs: ["152-fz-dlya-psihologa-2026","ii-transkribaciya-sozvonov-lokalno-2026","whisperx-transkribaciya-rechi-2026","shtrafy-za-pd-2026-tablica"] }),
  E({ slug: "bot-kurs-yuanya-dlya-importera-2026", category: "expert", heroIcon: "ph-fill ph-bell-ringing", ctaInternal: { url: "https://chimitdorzhi.tech/services/business-analytics-unit-economics/", label: "Обсудить бота курса и дашборд" },
    title: "Юань упал на 2%, и бот уже пишет: пора оплачивать поставку",
    metaTitle: "Бот курса юаня для импортёра: OpenStock (ОпенСток) для закупок",
    metaDescription: "Бот пишет в Telegram и MAX, когда юань пересёк ваш порог, и пересчитывает партию в 1С. Разбираю OpenStock, курс ЦБ, ISS Мосбиржи и их лицензии.",
    excerpt: "OpenStock, открытый аналог платных биржевых терминалов, набрал больше 19 тысяч звёзд на GitHub, но сделан под акции и связан лицензиями AGPL и Finnhub. Разбираю, как собрать такой же терминал для закупщика: бот следит за курсом юаня по ЦБ, ценами поставщиков и конкурентов на WB и Ozon и пишет в Telegram или MAX, когда пора оплачивать поставку.",
    tags: ["импорт из Китая","курс юаня","боты","1С"],
    toc: [
      { id: "yuan-upal", text: "Юань упал на 2%, и бот уже пишет" },
      { id: "chto-takoe-openstock", text: "Что такое OpenStock" },
      { id: "podvodnye-kamni", text: "Лицензии, из-за которых его нельзя просто взять" },
      { id: "terminal-zakupshchika", text: "Терминал закупщика: откуда брать цифры" },
      { id: "ogranicheniya", text: "Чего такой бот не делает" },
      { id: "chto-sdelat", text: "Что можно собрать уже сейчас" },
      { id: "faq", text: "Частые вопросы" },
      { id: "vyvody", text: "Коротко о главном" },
    ],
    relatedSlugs: ["sebestoimost-importa-v-1c-dostavka-poshliny-2026","pereschet-prajsa-pri-smene-kursa-2026","parser-cen-wb-ozon-v-tablicu-2026","oplata-postavshchiku-v-kitay-ved-2026"] }),
];
