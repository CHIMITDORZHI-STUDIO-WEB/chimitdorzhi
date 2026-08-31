// Флагманские кейсы — курируемый список (задача → решение → результат).
// Обобщённо: без имён клиентов, сумм и приватных ссылок. Названия собственных продуктов — можно.
// intl: международный проект. metric: есть твёрдые цифры.
// en / es — переводы полей task/solution/result (RU — база/фолбэк).
module.exports = [
  {
    name: 'МАНГО', type: 'bot', metric: true, done: true,
    task: 'Быстро набрать подписчиков в каналы сразу в 7 городах за счёт приглашений — под физический приз.',
    solution: 'Реферальный бот в MAX под ключ: персональная ссылка-приглашение, счётчик прогресса, антифрод (один человек = один засчёт), админка с разбивкой по городам.',
    result: '819 участников и 1818 переходов за первые 24 часа, одновременный запуск в 7 городах.',
    stack: ['MAX Bot API', 'бэкенд + веб-админка'],
    en: {
      task: 'Rapidly grow channel subscribers across 7 cities at once through invites — driven by a physical prize.',
      solution: 'Turnkey referral bot in MAX: personal invite link, progress counter, anti-fraud (one person = one credit), admin panel with a per-city breakdown.',
      result: '819 participants and 1,818 clicks in the first 24 hours, launched simultaneously in 7 cities.',
    },
    es: {
      task: 'Sumar suscriptores en canales de 7 ciudades a la vez mediante invitaciones — con un premio físico.',
      solution: 'Bot de referidos llave en mano en MAX: enlace personal de invitación, contador de progreso, antifraude (una persona = un registro), panel de administración por ciudad.',
      result: '819 participantes y 1818 clics en las primeras 24 horas, lanzamiento simultáneo en 7 ciudades.',
    },
  },
  {
    name: 'SpyGambl', type: 'platform', metric: true, done: true,
    task: 'Бесплатная библиотека рекламных креативов с фильтрами по гео и формату — узкая вертикаль, ручное пополнение.',
    solution: 'Каталог креативов + браузерное расширение для импорта объявления «в один клик» с нужным гео; медиа через CDN, тяжёлые гифки автоматически в видео.',
    result: 'В проде: 140+ гео, вес страницы с баннерами снижен в 8 раз (6,3 → 0,8 МБ), отклик ~60 мс.',
    stack: ['Next.js', 'React', 'PostgreSQL', 'браузерное расширение', 'CDN'],
    en: {
      task: 'A free ad-creatives library with filters by geo and format — a narrow vertical, manually curated.',
      solution: 'Creatives catalog + a browser extension to import an ad "in one click" with the right geo; media via CDN, heavy GIFs auto-converted to video.',
      result: 'Live: 140+ geos, banner-page weight cut 8× (6.3 → 0.8 MB), response ~60 ms.',
    },
    es: {
      task: 'Una biblioteca gratuita de creatividades publicitarias con filtros por geo y formato — un vertical concreto, con curación manual.',
      solution: 'Catálogo de creatividades + una extensión de navegador para importar un anuncio "en un clic" con el geo correcto; medios por CDN, GIFs pesados convertidos a vídeo automáticamente.',
      result: 'En producción: 140+ geos, peso de la página con banners reducido 8× (6,3 → 0,8 MB), respuesta ~60 ms.',
    },
  },
  {
    name: 'AlexMap', type: 'platform', intl: true, done: true,
    task: 'У турбизнеса города за рубежом нет своего цифрового справочника организаций с картой и рубрикатором.',
    solution: 'С нуля собран боевой городской справочник (аналог 2ГИС): интерактивная карта, публичный сайт + админка наполнения, мультигород и мультиязык из коробки.',
    result: 'Развёрнут в бою: 24 топ-рубрики + 18 подрубрик, фильтры «открыто сейчас»/удобства/цена, геолокация, светлая/тёмная тема. Служит ядром для смежных продуктов.',
    stack: ['FastAPI', 'React', 'Leaflet', 'PostgreSQL', 'Redis/Celery', 'Docker'],
    en: {
      task: 'A city’s tourism sector abroad had no digital directory of businesses with a map and rubricator.',
      solution: 'Built a production city directory from scratch (a 2GIS analog): interactive map, public site + content admin, multi-city and multi-language out of the box.',
      result: 'Deployed in production: 24 top rubrics + 18 sub-rubrics, "open now" / amenities / price filters, geolocation, light/dark theme. Serves as the core for adjacent products.',
    },
    es: {
      task: 'El sector turístico de una ciudad en el extranjero no tenía un directorio digital de organizaciones con mapa y rubricador.',
      solution: 'Directorio urbano de producción creado desde cero (un análogo de 2GIS): mapa interactivo, sitio público + panel de contenido, multiciudad y multilingüe de serie.',
      result: 'Desplegado en producción: 24 rúbricas principales + 18 subrúbricas, filtros "abierto ahora" / servicios / precio, geolocalización, tema claro/oscuro. Sirve de núcleo para productos afines.',
    },
  },
  {
    name: 'WeToCar', type: 'platform', done: true,
    task: 'Витрина под подбор и доставку б/у авто из Китая под заказ — с честным расчётом стоимости «под ключ».',
    solution: 'Каталог на тысячи авто, который фоном синхронизируется с китайскими источниками в свою базу; калькулятор растаможки; заявки с антиспамом; админка; боты уведомлений в Telegram и MAX.',
    result: 'В проде: каталог реально наполнен (тысячи авто), автосинхронизация каждые 3 часа, ежедневная докачка фото, все ключевые страницы отвечают.',
    stack: ['Next.js 15', 'PostgreSQL', 'Prisma', 'Telegram + MAX Bot API'],
    en: {
      task: 'A storefront for sourcing and delivering used cars from China to order — with an honest turnkey price estimate.',
      solution: 'A catalog of thousands of cars that syncs in the background from Chinese sources into our own database; a customs calculator; leads with anti-spam; an admin panel; notification bots in Telegram and MAX.',
      result: 'Live: the catalog is genuinely populated (thousands of cars), auto-sync every 3 hours, daily photo top-up, all key pages responding.',
    },
    es: {
      task: 'Un escaparate para seleccionar y entregar coches usados desde China por encargo — con un cálculo honesto del precio llave en mano.',
      solution: 'Un catálogo de miles de coches que se sincroniza en segundo plano desde fuentes chinas a nuestra propia base de datos; una calculadora de aduanas; solicitudes con antispam; un panel de administración; bots de notificaciones en Telegram y MAX.',
      result: 'En producción: el catálogo está realmente poblado (miles de coches), autosincronización cada 3 horas, recarga diaria de fotos, todas las páginas clave respondiendo.',
    },
  },
  {
    name: 'X&X', type: 'platform', intl: true, done: true,
    task: 'У диаспоры нет единого цифрового пространства — новости, кино, знакомства, услуги и игры разбросаны по чужим платформам без учёта языка и культуры.',
    solution: 'Супер-апп из пяти сервисов под единым брендом: знакомства с национальной спецификой, новостной агрегатор на реальных лентах, онлайн-кинотеатр с режимом изучения языка, маркетплейс услуг и игра-квиз по истории.',
    result: 'Все 5 сервисов в проде, бот с верификацией по номеру запущен; кинотеатр — 42 фильма, новости на 3 языках, прогресс игры сохраняется.',
    stack: ['React', 'TypeScript', 'Tailwind', 'FastAPI', 'aiogram'],
    en: {
      task: 'A diaspora had no single digital space — news, cinema, dating, services and games scattered across foreign platforms with no regard for language or culture.',
      solution: 'A super-app of five services under one brand: dating with national specifics, a news aggregator on real feeds, an online cinema with a language-learning mode, a services marketplace and a history quiz game.',
      result: 'All 5 services live, a bot with phone verification launched; the cinema — 42 films, news in 3 languages, game progress is saved.',
    },
    es: {
      task: 'Una diáspora sin un espacio digital único — noticias, cine, citas, servicios y juegos dispersos en plataformas ajenas, sin tener en cuenta el idioma ni la cultura.',
      solution: 'Una súper-app de cinco servicios bajo una sola marca: citas con especificidad nacional, un agregador de noticias sobre fuentes reales, un cine en línea con modo de aprendizaje de idioma, un marketplace de servicios y un juego de preguntas de historia.',
      result: 'Los 5 servicios en producción, un bot con verificación por teléfono lanzado; el cine — 42 películas, noticias en 3 idiomas, el progreso del juego se guarda.',
    },
  },
  {
    name: 'OneClick / Quipu', type: 'ai', intl: true, done: false,
    task: 'В регионе низкая цифровая грамотность, но все шлют голосовые в WhatsApp — нужен сервис расшифровки без установки приложения.',
    solution: 'Официальный WhatsApp-бот: принимает голосовое → отдаёт структурированное саммари (тезисы, решения, задачи) на испанском; фото документов и рукопись — следующими релизами. Один бэкенд, два интерфейса (бот + веб-кабинет).',
    result: 'Пройдена бизнес-верификация Meta, поднят номер и вебхук — инфраструктура готова, бэкенд в разработке.',
    stack: ['WhatsApp Cloud API', 'ASR (транскрибация)', 'LLM-саммаризация'],
    en: {
      task: 'Low digital literacy in the region, but everyone sends voice notes on WhatsApp — a transcription service was needed with no app to install.',
      solution: 'An official WhatsApp bot: takes a voice note → returns a structured summary (points, decisions, tasks) in Spanish; document photos and handwriting in later releases. One backend, two interfaces (bot + web dashboard).',
      result: 'Passed Meta business verification, number and webhook up — infrastructure ready, backend in progress.',
    },
    es: {
      task: 'Baja alfabetización digital en la región, pero todos envían notas de voz por WhatsApp — hacía falta un servicio de transcripción sin instalar ninguna app.',
      solution: 'Un bot oficial de WhatsApp: recibe una nota de voz → devuelve un resumen estructurado (puntos, decisiones, tareas) en español; fotos de documentos y manuscritos en próximas versiones. Un backend, dos interfaces (bot + panel web).',
      result: 'Superada la verificación de negocio de Meta, número y webhook activos — infraestructura lista, backend en desarrollo.',
    },
  },
  {
    name: 'Протокол', type: 'site', done: true,
    task: 'Кофейне нужно вовлекающее приложение: меню, заказ, программа лояльности и игровая система развития пользователя.',
    solution: 'Установимое PWA с двумя входами (SMS/почта и Telegram, один аккаунт), игровой движок (XP, уровни, достижения, инвентарь, задания, лидерборд), меню с корзиной, push и полноценная админка.',
    result: 'Все 24 критерия готовности первого релиза пройдены (24/24, автопроверка на боевом сервере), фронт 64 КБ gzip; прогон живым браузером выявил и починил реальные баги.',
    stack: ['Node', 'Express', 'React', 'Vite', 'SQLite', 'VAPID push'],
    en: {
      task: 'A coffee shop needed an engaging app: menu, ordering, a loyalty program and a gamified user-progression system.',
      solution: 'An installable PWA with two logins (SMS/email and Telegram, one account), a game engine (XP, levels, achievements, inventory, quests, leaderboard), a menu with cart, push and a full admin panel.',
      result: 'All 24 first-release readiness criteria passed (24/24, automated check on the production server), frontend 64 KB gzip; a live-browser run found and fixed real bugs.',
    },
    es: {
      task: 'Una cafetería necesitaba una app atractiva: menú, pedidos, un programa de fidelidad y un sistema de progresión de usuario gamificado.',
      solution: 'Una PWA instalable con dos accesos (SMS/correo y Telegram, una sola cuenta), un motor de juego (XP, niveles, logros, inventario, misiones, clasificación), menú con carrito, push y un panel de administración completo.',
      result: 'Superados los 24 criterios de preparación del primer lanzamiento (24/24, verificación automática en el servidor de producción), frontend 64 KB gzip; una prueba con navegador real encontró y corrigió errores reales.',
    },
  },
  {
    name: 'Сансара', type: 'site', intl: true, done: true,
    task: 'Запустить полноценное онлайн-издание с редакцией, мультиязычием и приоритетом на SEO/GEO.',
    solution: 'Монорепо: публичный сайт на Next.js + отдельная React-админка на общей базе; статьи, рубрики, поиск, роли (автор/редактор/админ), workflow статусов, медиа-менеджер, тёмная/светлая тема.',
    result: 'Запущен в продакшн по HTTPS; пройден сквозной QA (логин → создание → публикация → сайт → удаление — все зелёные), интегрирован фирменный логотип.',
    stack: ['Next.js 14', 'Prisma', 'PostgreSQL', 'next-intl', 'Docker'],
    en: {
      task: 'Launch a full-fledged online publication with an editorial team, multilingual support and a focus on SEO/GEO.',
      solution: 'A monorepo: public site on Next.js + a separate React admin on a shared database; articles, rubrics, search, roles (author/editor/admin), a status workflow, media manager, dark/light theme.',
      result: 'Launched in production over HTTPS; passed end-to-end QA (login → create → publish → site → delete — all green), brand logo integrated.',
    },
    es: {
      task: 'Lanzar una publicación en línea completa con equipo editorial, soporte multilingüe y enfoque en SEO/GEO.',
      solution: 'Un monorepo: sitio público en Next.js + un panel React independiente sobre una base de datos común; artículos, rúbricas, búsqueda, roles (autor/editor/admin), un flujo de estados, gestor de medios, tema claro/oscuro.',
      result: 'Lanzado en producción por HTTPS; superado el QA de extremo a extremo (login → crear → publicar → sitio → eliminar — todo en verde), logotipo de marca integrado.',
    },
  },
  {
    name: 'РЭНТЭБАС', type: 'platform', done: true,
    task: 'Автоматизировать управление общежитием на ~200 мест: места, проживающие, договоры, деньги, аналитика, личный кабинет жильца.',
    solution: 'Веб-приложение: реестр мест со статусами и историей, карточки и договоры с файлами, финучёт (начисления/оплаты/долг, выгрузка), дашборды, ЛК жильца, ролевая модель, аудит действий.',
    result: 'Развёрнут на сервере под HTTPS, прошёл ревизию кода двумя независимыми аудиторами, пакет готов к подписанию акта приёмки. Работа по договору с ТЗ.',
    stack: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'React', 'Vite', 'Docker'],
    en: {
      task: 'Automate managing a ~200-bed dormitory: beds, residents, contracts, money, analytics, a resident’s personal account.',
      solution: 'A web app: bed registry with statuses and history, cards and contracts with files, finance tracking (charges/payments/debt, export), dashboards, a resident portal, a role model, an action audit.',
      result: 'Deployed on a server over HTTPS, passed a code review by two independent auditors, package ready for the acceptance sign-off. Contract work with a spec.',
    },
    es: {
      task: 'Automatizar la gestión de una residencia de ~200 plazas: plazas, residentes, contratos, dinero, analítica, un área personal para el residente.',
      solution: 'Una aplicación web: registro de plazas con estados e historial, fichas y contratos con archivos, contabilidad (cargos/pagos/deuda, exportación), cuadros de mando, portal del residente, modelo de roles, auditoría de acciones.',
      result: 'Desplegada en un servidor por HTTPS, superada una revisión de código por dos auditores independientes, paquete listo para la firma de aceptación. Trabajo por contrato con especificación.',
    },
  },
  {
    name: 'Сайт РСО с кабинетом заявок', type: 'site', done: true,
    task: 'По предписанию прокуратуры ресурсоснабжающей организации нужен сайт с онлайн-подачей заявлений на техприсоединение к сетям.',
    solution: 'Корпоративный сайт в строгом стиле + сквозной сценарий: регистрация → заявление с загрузкой файлов → админка → смена статуса → заявитель видит статус и получает email. Раскрытие информации по стандартам, хранение заявок ≥ 5 лет.',
    result: 'Развёрнут и стабильно работает (валидный TLS, контейнеры в аптайме), закрыл предписание прокуратуры.',
    stack: ['FastAPI', 'SQLAlchemy', 'React', 'PostgreSQL', 'Caddy', 'Docker'],
    en: {
      task: 'By a prosecutor’s order, a utility company needed a website with online submission of applications for grid connection.',
      solution: 'A corporate site in a strict style + an end-to-end flow: registration → application with file uploads → admin → status change → the applicant sees the status and gets an email. Information disclosure to standards, applications stored ≥ 5 years.',
      result: 'Deployed and running stably (valid TLS, containers in uptime), closed out the prosecutor’s order.',
    },
    es: {
      task: 'Por orden de la fiscalía, una empresa de suministros necesitaba un sitio con envío en línea de solicitudes de conexión a las redes.',
      solution: 'Un sitio corporativo de estilo sobrio + un flujo completo: registro → solicitud con carga de archivos → panel → cambio de estado → el solicitante ve el estado y recibe un correo. Divulgación de información conforme a normas, solicitudes almacenadas ≥ 5 años.',
      result: 'Desplegado y funcionando de forma estable (TLS válido, contenedores en uptime), cumplió con la orden de la fiscalía.',
    },
  },
  {
    name: 'Горячий момент', type: 'site', done: true,
    task: 'Продавать сети кофейных точек B2B-размещение их автоматических кофе-точек на чужих площадях.',
    solution: 'Одностраничник под референсы клиента + no-code админка (не-айтишник сам включает/переставляет секции, ведёт блог, точки на карте с автогеокодингом, оборудование, заявки) + дашборд QR-аналитики: какая наклейка принесла заявку, с конверсией по точкам.',
    result: 'Развёрнут и работает по HTTPS; заявки уходят в Telegram без персданных (сознательно, под 152-ФЗ). Дашборд связывает метку с конверсией по каждой точке.',
    stack: ['Wagtail', 'Django', 'Telegram Bot API', 'автогеокодинг'],
    en: {
      task: 'Sell a coffee-point chain B2B placement of their automated coffee points on third-party premises.',
      solution: 'A one-pager built on the client’s references + a no-code admin (a non-techie toggles/reorders sections, runs a blog, points on a map with auto-geocoding, equipment, leads) + a QR-analytics dashboard: which sticker brought a lead, with conversion per point.',
      result: 'Deployed and running over HTTPS; leads go to Telegram with no personal data (deliberately, under privacy law). The dashboard links a tag to conversion for each point.',
    },
    es: {
      task: 'Vender a una cadena de puntos de café la colocación B2B de sus puntos de café automáticos en locales de terceros.',
      solution: 'Una landing sobre las referencias del cliente + un panel no-code (una persona no técnica activa/reordena secciones, lleva un blog, puntos en un mapa con geocodificación automática, equipos, solicitudes) + un panel de analítica QR: qué pegatina trajo una solicitud, con conversión por punto.',
      result: 'Desplegado y funcionando por HTTPS; las solicitudes van a Telegram sin datos personales (deliberadamente, conforme a la ley de privacidad). El panel vincula la etiqueta con la conversión de cada punto.',
    },
  },
  {
    name: 'WELLEX CLUB', type: 'platform', intl: true, done: false,
    task: 'Построить с нуля цифровую экосистему велнес-клуба: витрина, вход через бота, личный кабинет-приложение и CRM.',
    solution: 'По трём ТЗ собрана единая система: тёмный лендинг с UTM-атрибуцией, Telegram-бот как источник лидов, Mini App с хабом Score и клубной картой QR, CRM со скорингом лидов, рейтингом партнёров и рассылками.',
    result: 'В проде: сайт, приложение, CRM, бот, PWA с установкой и подписанный Android-APK; 5 языков; контраст проверен автозамером 645 надписей на 12 экранах в 5 схемах (WCAG в норме везде).',
    stack: ['Node.js', 'SQLite', 'PWA', 'Android APK', 'nginx'],
    en: {
      task: 'Build a wellness club’s digital ecosystem from scratch: storefront, bot-based entry, a personal-account app and a CRM.',
      solution: 'Across three specs, a single system: a dark landing with UTM attribution, a Telegram bot as a lead source, a Mini App with a Score hub and a QR club card, a CRM with lead scoring, partner ranking and mailings.',
      result: 'Live: site, app, CRM, bot, an installable PWA and a signed Android APK; 5 languages; contrast verified by auto-measuring 645 labels across 12 screens in 5 themes (WCAG passing everywhere).',
    },
    es: {
      task: 'Construir desde cero el ecosistema digital de un club de bienestar: escaparate, acceso mediante bot, una app de área personal y un CRM.',
      solution: 'A partir de tres especificaciones, un sistema único: una landing oscura con atribución UTM, un bot de Telegram como fuente de leads, una Mini App con un hub Score y una tarjeta de club QR, un CRM con scoring de leads, ranking de socios y envíos.',
      result: 'En producción: sitio, app, CRM, bot, una PWA instalable y un APK de Android firmado; 5 idiomas; contraste verificado midiendo automáticamente 645 textos en 12 pantallas y 5 temas (WCAG correcto en todas partes).',
    },
  },
];
