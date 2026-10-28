module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-calculator',
    title: 'ИИ-бухгалтер над 1С для стенда на ДВЭФ: беспорядок в базе и откат',
    metaTitle: 'Кейс: ИИ-бухгалтер над 1С для стенда на форуме',
    metaDescription: 'Демо для выставочного стенда: ИИ-бухгалтер подключён к 1С по OData, кнопкой наводит беспорядок, находит ошибки, исправляет и откатывает. Показан 22.10.',
    excerpt: 'Заказчику нужен был живой номер для стенда на ДВЭФ: ИИ-бухгалтер, который на глазах у гостей находит ошибки в 1С. Я подключил его к демо-базе по стандартному OData, сделал кнопки «навести беспорядок» и «откатить», чат на DeepSeek и обезличивание данных перед отправкой в нейросеть. Демо показано на форуме 22 октября.',
    tags: ['кейс', '1С', 'ИИ-бухгалтер', 'OData', 'DeepSeek'],
    cta: 'auto',
    relatedSlugs: ['ai-pomoshchnik-buhgaltera-2026', 'dorabotka-integraciya-1c-2026', 'ai-buhgalter-avtomatizaciya-rutiny-2026', 'luchshie-lokalnye-neyroseti-2026'],
  },
  flagship: {
    name: 'ИИ-бухгалтер над 1С для стенда',
    slug: 'ii-buhgalter-1s-stend-foruma-keys-2026',
    type: 'ai', done: true, delivered: true,
    task: 'Заказчику к стенду на ДВЭФ нужен был ИИ-бухгалтер, который на глазах у гостей находит ошибки в базе 1С, исправляет их и возвращает базу в исходное состояние без загрузки резервной копии.',
    solution: 'Страница и API на Node.js без зависимостей, к 1С через стандартный OData без расширения конфигурации. Кнопка «навести беспорядок» создаёт 8 документов с типовыми ошибками, 7 проверок их находят, исправления идут кнопкой, откат по журналу. Чат на DeepSeek с вызовом проверок, акты сверки, авансы и НДС, приём сотрудника и начисление зарплаты, внешняя обработка для окна 1С. После форума добавлено обезличивание данных перед отправкой в нейросеть.',
    result: 'Пакет передан заказчику и запущен у него, демо показано на стенде 22.10.2026. Сквозной тест полного цикла проходит примерно за 12 секунд. Начисление зарплаты на демо-базе заказчика и обработка в клиенте 1С 8.5 не проверены, режим с локальной моделью тоже.',
    stack: ['Node.js', '1С OData', 'DeepSeek API', '1С внешняя обработка', 'Web Speech API'],
    en: {
      task: 'For their stand at the Far Eastern forum (DVEF), the client needed an AI accountant that finds errors in a 1C database in front of visitors, fixes them and returns the database to its original state without loading a backup.',
      solution: 'A page and API on Node.js with no dependencies, connected to 1C through the standard OData interface without a configuration extension. A "make a mess" button creates 8 documents with typical errors, 7 checks find them, fixes are applied with a button, and a rollback runs from a journal. A DeepSeek chat that calls the checks, reconciliation statements, advances and VAT, hiring an employee and accruing salary, and an external data processor for the 1C window. After the forum I added anonymisation of data before it is sent to the neural network.',
      result: 'The package was handed to the client and launched on their side, and the demo was shown at the stand on 22 October 2026. The end-to-end test of the full cycle takes about 12 seconds. Salary accrual on the client\'s demo database, the processor in the 1C 8.5 client and the local model mode have not been verified.',
    },
    es: {
      task: 'Para su stand en el foro DVEF, el cliente necesitaba un contable con IA que encontrara errores en una base de 1C delante de los visitantes, los corrigiera y devolviera la base a su estado original sin cargar una copia de seguridad.',
      solution: 'Una página y una API en Node.js sin dependencias, conectadas a 1C mediante la interfaz estándar OData sin extensión de la configuración. Un botón de «desordenar» crea 8 documentos con errores típicos, 7 comprobaciones los encuentran, las correcciones se aplican con un botón y la reversión se hace desde un registro. Un chat con DeepSeek que llama a las comprobaciones, actas de conciliación, anticipos e IVA, alta de un empleado y cálculo de la nómina, y un procesamiento externo para la ventana de 1C. Después del foro añadí la anonimización de los datos antes de enviarlos a la red neuronal.',
      result: 'El paquete se entregó al cliente y se puso en marcha en su servidor, y la demo se mostró en el stand el 22 de octubre de 2026. La prueba de extremo a extremo del ciclo completo tarda unos 12 segundos. No se ha verificado el cálculo de la nómina en la base de demostración del cliente, el procesamiento en el cliente de 1C 8.5 ni el modo con un modelo local.',
    },
  },
};
