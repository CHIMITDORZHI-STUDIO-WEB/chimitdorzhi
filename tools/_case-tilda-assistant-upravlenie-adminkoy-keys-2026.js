module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-cursor-click',
    title: 'Tilda Assistant: локальный помощник для админки Tilda через диалог с ИИ',
    metaTitle: 'Кейс: Tilda Assistant, ИИ-помощник для админки Tilda',
    metaDescription: 'Личный инструмент на Python и Playwright: видимый Chromium с моей сессией читает проекты Tilda, снимает скриншоты. Публикацию нажимает человек.',
    excerpt: 'Локальный инструмент для рутины в админке Tilda: открывает видимый Chromium с моей сессией, читает проекты и страницы, снимает скриншоты и ведёт журнал. Публикацию Tilda принимает только от живого клика, и её нажимаю я. Личная сборка без автотестов, не продукт.',
    tags: ['кейс', 'Tilda', 'ИИ-агент', 'автоматизация', 'Playwright'],
    cta: 'site',
    relatedSlugs: ['tilda-vs-kastomnaya-razrabotka-2026', 'audit-152-fz-2026', 'soglasie-na-obrabotku-pd-2026', 'kak-sozdat-ai-agenta-2026'],
  },
  flagship: {
    name: 'Tilda Assistant: помощник для админки',
    slug: 'tilda-assistant-upravlenie-adminkoy-keys-2026',
    type: 'ai', done: false,
    task: 'Рутина в админке Tilda: открыть проект, найти страницу, проверить настройки, снять скриншот. Нужен помощник, который работает под моей сессией и на моих глазах, без передачи пароля облачному сервису.',
    solution: 'Локальный инструмент на Python и Playwright: видимое окно Chromium с сохранённым профилем, вход руками, три режима чтения проектов и страниц, три вспомогательных скрипта (аудит публичного сайта, чтение настроек, создание страницы), журнал и скриншоты. Правки ставятся в диалоге с ИИ. Публикацию Tilda принимает только от живого клика, поэтому её нажимает владелец аккаунта.',
    result: 'Собран личный инструмент: основной скрипт на 275 строк и 3 вспомогательных, пробный аудит публичного сайта клиента прошёл по 14 страницам без ошибок. Автотестов нет, правки контента через скрипты не проверены, перед статьёй инструмент заново не запускался.',
    stack: ['Python', 'Playwright', 'Chromium', 'python-dotenv', 'Claude'],
    en: {
      task: 'Routine work in the Tilda admin: open a project, find a page, check settings, take a screenshot. I needed a helper that runs under my own session and in plain view, without handing my password to a cloud service.',
      solution: 'A local tool in Python and Playwright: a visible Chromium window with a saved profile, manual login, three modes for reading projects and pages, and three helper scripts (public-site audit, settings reader, page creation), plus a log and screenshots. Edits are requested in a chat with the AI. Tilda accepts publishing only from a real human click, so the account owner presses it.',
      result: 'A personal tool is built: a 275-line main script and 3 helpers, and a trial audit of a client public site ran across 14 pages with no errors. There are no automated tests, content edits through the scripts are not verified, and the tool was not re-run before this write-up.',
    },
    es: {
      task: 'Trabajo rutinario en el panel de Tilda: abrir un proyecto, encontrar una página, revisar ajustes, hacer una captura. Necesitaba un asistente que funcione con mi propia sesión y a la vista, sin entregar mi contraseña a un servicio en la nube.',
      solution: 'Una herramienta local en Python y Playwright: una ventana visible de Chromium con perfil guardado, inicio de sesión manual, tres modos para leer proyectos y páginas y tres scripts auxiliares (auditoría de un sitio público, lectura de ajustes, creación de página), además de registro y capturas. Los cambios se piden en un diálogo con la IA. Tilda solo acepta la publicación con un clic humano real, así que la pulsa el propietario de la cuenta.',
      result: 'Hay una herramienta personal terminada: un script principal de 275 líneas y 3 auxiliares, y una auditoría de prueba del sitio público de un cliente recorrió 14 páginas sin errores. No hay pruebas automáticas, los cambios de contenido mediante los scripts no están verificados y la herramienta no se volvió a ejecutar antes de este texto.',
    },
  },
};
