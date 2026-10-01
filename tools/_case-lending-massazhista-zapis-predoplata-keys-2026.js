module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-calendar-check',
    title: 'Лендинг массажиста с онлайн-записью и предоплатой: разбор проекта',
    metaTitle: 'Кейс: лендинг массажиста с записью и предоплатой',
    metaDescription: 'Лендинг частного массажиста на FastAPI: свободные окна на 21 день, удержание времени, предоплата по СБП, отмена за 24 часа и панель мастера.',
    excerpt: 'Частный мастер ручного массажа из села в Забайкальском крае. Лендинг со свободными окнами, предоплатой и правилом отмены за 24 часа, плюс панель мастера. Сайт живой, оплата идёт переводом по СБП с ручным подтверждением, напоминания в Telegram ещё не включены.',
    tags: ['кейс', 'лендинг', 'онлайн-запись', 'предоплата', 'FastAPI'],
    cta: 'site',
    relatedSlugs: ['ekvayring-ili-sbp-2026', 'abonementy-i-pakety-uslug-2026', 'llms-txt-dlya-sayta-2027', 'geo-dlya-nishevogo-biznesa-2026'],
  },
  flagship: {
    name: 'Лендинг массажиста с записью и предоплатой',
    slug: 'lending-massazhista-zapis-predoplata-keys-2026',
    type: 'site', done: true,
    task: 'Частный мастер ручного массажа из села в Забайкальском крае. Нужны лендинг для поиска и запись, где клиент сам видит свободное время и вносит предоплату. Не предупредил за сутки или не пришёл: предоплата остаётся у мастера.',
    solution: 'FastAPI и SQLite, страницы на чистом HTML, CSS и JS. Календарь окон на 21 день с перерывами между клиентами, удержание времени до предоплаты, отмена по правилу «за 24 часа», панель мастера, абонемент, скидка за приглашённую подругу, лист ожидания и отзывы после проверки. Главная собирается из настроек, есть robots.txt, sitemap.xml и llms.txt.',
    result: 'Сайт отвечает 200 на всех 11 проверенных адресах. Предоплату принимает мастер: перевод по СБП и подтверждение в панели, эквайринга нет. Запись и отмену проверил на локальной копии, на боевом сайте тестовых броней не делал. Напоминания в Telegram написаны, но бот не создан, не проверено.',
    stack: ['FastAPI', 'SQLite', 'nginx', 'HTML/CSS/JS', 'СБП'],
    en: {
      task: 'A private massage therapist in a village in the Zabaykalsky region. She needed a landing page that people can find in search and a booking flow where the client sees free time and pays a deposit. If the client does not cancel a day ahead or does not show up, the deposit stays with her.',
      solution: 'FastAPI and SQLite, pages in plain HTML, CSS and JS. A 21-day calendar of free slots with breaks between clients, a time hold until the deposit is paid, a 24-hour cancellation rule, a therapist panel, a session pass, a discount for a referred friend, a waitlist and reviews published after moderation. The home page is built from settings, with robots.txt, sitemap.xml and llms.txt.',
      result: 'The site returns 200 on all 11 addresses checked. The therapist takes deposits herself: an SBP bank transfer confirmed in her panel, no card acquiring. I tested booking and cancellation on a local copy and made no test bookings on the live site. Telegram reminders are written but the bot has not been created, not verified.',
    },
    es: {
      task: 'Una masajista privada de un pueblo del krai de Zabaikalie. Necesitaba una landing que se encuentre en buscadores y una reserva donde el cliente ve el horario libre y paga un anticipo. Si no avisa con un día de antelación o no se presenta, el anticipo se queda con ella.',
      solution: 'FastAPI y SQLite, páginas en HTML, CSS y JS puros. Un calendario de huecos libres a 21 días con pausas entre clientes, retención del horario hasta pagar el anticipo, regla de cancelación de 24 horas, panel de la masajista, bono de sesiones, descuento por amiga invitada, lista de espera y reseñas publicadas tras revisión. La página principal se genera desde los ajustes, con robots.txt, sitemap.xml y llms.txt.',
      result: 'El sitio responde 200 en las 11 direcciones comprobadas. La masajista cobra el anticipo ella misma: transferencia por SBP confirmada en su panel, sin cobro con tarjeta. Probé la reserva y la cancelación en una copia local y no hice reservas de prueba en el sitio real. Los recordatorios de Telegram están escritos, pero el bot no se ha creado, no verificado.',
    },
  },
};
