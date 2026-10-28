module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-receipt',
    title: 'Учёт для бухфирмы в Дубае: бот, мини-приложение, НДС и баланс',
    metaTitle: 'Кейс: учёт для бухфирмы в Дубае, бот и PWA с НДС',
    metaDescription: 'Учёт мелких компаний ОАЭ для бухфирмы в Дубае: бот, мини-приложение и PWA, инвойсы, ИИ-чеки, VAT201, выписки, баланс, три языка. Стенд с 21.10.',
    excerpt: 'Бухгалтерская фирма в Дубае ведёт несколько мелких компаний и проверяла каждый документ руками. Я собрал для неё учёт на двойной записи: бот и мини-приложение в Telegram плюс PWA, инвойсы, распознавание чеков двумя моделями, суммы для VAT201, разбор выписок и баланс на трёх языках. Стенд работает с 21 октября, 28 октября выложены правки после встречи с бухгалтерами.',
    tags: ['кейс', 'учёт', 'ОАЭ', 'Telegram-бот', 'распознавание чеков', 'PWA'],
    cta: 'auto',
    relatedSlugs: ['ai-buhgalter-avtomatizaciya-rutiny-2026', 'ii-razbiraet-cheki-v-tablicu-2026', 'bankovskaya-vypiska-v-tablicu-po-statyam-2026', 'telegram-mini-app-chto-eto-2026'],
  },
  flagship: {
    name: 'Учёт для бухфирмы в Дубае',
    slug: 'uchet-dlya-buhfirmy-v-dubae-bot-pwa-keys-2026',
    type: 'crm', done: false, delivered: true, intl: true, metric: true,
    task: 'Бухгалтерская фирма в Дубае ведёт несколько мелких компаний ОАЭ и вручную проверяет каждый входящий и исходящий счёт. Нужна одна программа: инвойсы по шаблону компании, расходы по фото чеков, суммы для декларации VAT201, банковские выписки, зарплата, займы учредителей и баланс.',
    solution: 'Учёт на FastAPI и SQLite с двойной записью и деньгами в филсах. Бот в Telegram, мини-приложение и PWA работают из одного веб-приложения. Чеки читают две модели OpenAI параллельно, расхождение по сумме, НДС, TRN, номеру или дате отправляет документ бухгалтеру. Текстовые выписки банка разбираются без ИИ с проверкой цепочки остатков и сверяются с учётом. VAT201 считается по эмиратам, инвойсы хранятся в структуре PINT AE под будущий e-invoicing. Интерфейс на русском, английском и арабском.',
    result: 'Стенд работает с 21.10.2026, бухгалтеры проверяют его на документах своего первого клиента, 28.10 выложены правки после встречи. Сквозная проверка: 7 документов через API и инвойс через бота разложены верно, оплаты найдены в выписке, баланс сходится. Распознавание с проверкой стоит около 0,055 $ за документ. В прод на сервер фирмы ещё не переносили.',
    stack: ['Python', 'FastAPI', 'SQLite', 'Preact', 'Telegram Bot API', 'OpenAI API', 'PWA'],
    en: {
      task: 'An accounting firm in Dubai keeps the books of several small UAE companies and checks every incoming and outgoing invoice by hand. They needed one program: invoices on each company\'s template, expenses from receipt photos, totals for the VAT201 return, bank statements, payroll, founder loans and a balance sheet.',
      solution: 'Bookkeeping on FastAPI and SQLite with double entry and money stored in fils. A Telegram bot, a mini app and a PWA all run from one web application. Receipts are read by two OpenAI models in parallel, and any mismatch in amount, VAT, TRN, number or date sends the document to an accountant. Text bank statements are parsed without AI, with a check of the running balance chain, and reconciled against the books. VAT201 is calculated by emirate, and invoices are stored in the PINT AE structure for future e-invoicing. The interface is in Russian, English and Arabic.',
      result: 'The staging server has been running since 21 October 2026; the accountants are checking it on the documents of their first client, and on 28 October the changes from the meeting were deployed. End-to-end check: 7 documents through the API and an invoice through the bot were posted correctly, payments were found in the statement and the balance sheet balances. Recognition with the cross-check costs about $0.055 per document. It has not yet been moved to production on the firm\'s server.',
    },
    es: {
      task: 'Una firma contable de Dubái lleva la contabilidad de varias empresas pequeñas de los EAU y revisa a mano cada factura recibida y emitida. Necesitaba un solo programa: facturas con la plantilla de cada empresa, gastos a partir de fotos de tickets, importes para la declaración VAT201, extractos bancarios, nóminas, préstamos de los socios y balance.',
      solution: 'Contabilidad en FastAPI y SQLite con partida doble y el dinero en fils. Un bot de Telegram, una mini-app y una PWA funcionan desde una misma aplicación web. Los tickets los leen dos modelos de OpenAI en paralelo, y cualquier diferencia en importe, IVA, TRN, número o fecha envía el documento al contable. Los extractos bancarios en texto se procesan sin IA, comprobando la cadena de saldos, y se concilian con la contabilidad. El VAT201 se calcula por emirato y las facturas se guardan en la estructura PINT AE para la futura facturación electrónica. La interfaz está en ruso, inglés y árabe.',
      result: 'El entorno de pruebas funciona desde el 21 de octubre de 2026; los contables lo revisan con los documentos de su primer cliente, y el 28 de octubre se publicaron los cambios acordados en la reunión. Prueba de extremo a extremo: 7 documentos por la API y una factura por el bot se contabilizaron bien, los pagos se encontraron en el extracto y el balance cuadra. El reconocimiento con verificación cuesta unos 0,055 $ por documento. Aún no se ha pasado a producción en el servidor de la firma.',
    },
  },
};
