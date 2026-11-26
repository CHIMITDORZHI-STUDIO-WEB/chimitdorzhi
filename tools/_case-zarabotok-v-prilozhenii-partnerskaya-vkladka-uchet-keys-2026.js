module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-coins',
    title: 'Вкладка «Заработок» в приложении команды: учёт партнёрских заявок',
    metaTitle: 'Кейс: партнёрская вкладка «Заработок» в приложении',
    metaDescription: 'Партнёрская программа внутри приложения для лидеров: ссылки, заявки из пересылок, начисления по оплатам, возвраты, защита от самозаказа. В работе с 06.11.',
    excerpt: 'Лидерам команды нужно было рекомендовать услуги студии и получать процент с оплаченного заказа. Я встроил в приложение вкладку «Заработок»: личные ссылки, заявки, в том числе из пересланных переписок, книгу начислений, выплаты и защиту от самозаказа. Вкладка в работе с 06.11.2026, первых оплаченных заказов по ней ещё не было.',
    tags: ['кейс', 'партнёрская программа', 'мини-приложение', 'учёт начислений', 'Telegram', 'MAX'],
    cta: 'bots',
    relatedSlugs: ['lichnyy-kabinet-partnera-2026', 'referalnaya-programma-novye-klienty-2026', 'partnyorskaya-sistema-qr-keys-2026', '152-fz-dlya-chat-botov-i-messendzherov-2026'],
  },
  flagship: {
    name: 'Вкладка «Заработок» в приложении для лидеров команд',
    slug: 'zarabotok-v-prilozhenii-partnerskaya-vkladka-uchet-keys-2026',
    type: 'platform', done: true, delivered: true,
    task: 'Лидеры команд хотят приводить клиентов на услуги студии и получать процент с оплаченного заказа. Нужны личные ссылки, честный учёт заявок и денег, понятная выплата и защита от самозаказа и дублей.',
    solution: 'Вкладка внутри уже работающего приложения: условия принимаются в самой вкладке, у каждого партнёра две ссылки и счётчик переходов, заявка создаётся формой или пересылкой переписки боту, начисления считает книга проводок по чистым поступлениям, возвраты уменьшают начисление, а заявка с номером самого партнёра или дубль ждёт решения менеджера.',
    result: 'В работе с 06.11.2026 на сервере заказчика, 30 автотестов вкладки. Живая пересылка настоящим партнёром и первая оплаченная заявка по вкладке на момент последней проверки не были подтверждены.',
    stack: ['Python', 'FastAPI', 'SQLite', 'JS мини-приложение', 'Telegram Bot API', 'MAX Bot API'],
    en: {
      task: 'Team leaders want to bring clients to the studio\'s services and receive a percentage of a paid order. They need personal links, honest tracking of leads and money, a clear payout, and protection against self-orders and duplicates.',
      solution: 'A tab inside an app that already runs: the terms are accepted in the tab itself, each partner gets two links and a click counter, a lead is created by a form or by forwarding a conversation to the bot, accruals are calculated by a ledger on net receipts, refunds reduce the accrual, and a lead with the partner\'s own phone number or a duplicate waits for a manager\'s decision.',
      result: 'In operation since 6 November 2026 on the client\'s server, with 30 automated tests for the tab. A live forward by a real partner and a first paid lead through the tab were not confirmed at the time of the last check.',
    },
    es: {
      task: 'Los líderes de equipos quieren traer clientes a los servicios del estudio y recibir un porcentaje de cada pedido pagado. Necesitan enlaces personales, un registro honesto de solicitudes y dinero, un pago claro y protección contra autopedidos y duplicados.',
      solution: 'Una pestaña dentro de una aplicación que ya funciona: las condiciones se aceptan en la propia pestaña, cada socio tiene dos enlaces y un contador de clics, la solicitud se crea con un formulario o reenviando una conversación al bot, las comisiones las calcula un libro mayor sobre los ingresos netos, las devoluciones reducen la comisión y una solicitud con el número del propio socio o un duplicado espera la decisión de un gestor.',
      result: 'En funcionamiento desde el 6 de noviembre de 2026 en el servidor del cliente, con 30 pruebas automáticas de la pestaña. Un reenvío real de un socio y un primer pedido pagado a través de la pestaña no estaban confirmados en la última comprobación.',
    },
  },
};
