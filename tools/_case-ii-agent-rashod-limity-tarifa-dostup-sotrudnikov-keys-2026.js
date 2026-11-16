module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-gauge',
    title: 'ИИ-агент в работе: сколько стоит, лимиты тарифа и доступ сотрудников',
    metaTitle: 'Кейс: расход ИИ-агента, лимиты тарифа, сотрудники',
    metaDescription: 'Замер расхода трёх работающих ИИ-агентов на 7 ноября, лимиты тарифа в пульте студии и доступ сотрудников. Что настроено, что не проверено.',
    excerpt: 'Это углубление кейса про собственного ИИ-агента студии. Я замерил, сколько на самом деле тратят три работающих агента, нашёл три утечки расхода, добавил в пульт лимиты тарифа и сделал доступ для сотрудников владельца. Настройки выложены 7 ноября, экономию после них я ещё не замерял.',
    tags: ['кейс', 'ИИ-агент', 'расход токенов', 'тарифы', 'доступ сотрудников'],
    cta: 'auto',
    relatedSlugs: ['skolko-stoyat-tokeny-ii-agenta-2026', 'kak-udeshevit-ii-agenta-marshrutizaciya-modeley-2026', 'agent-kotoryy-tratit-dengi-2026', 'granica-avtonomnosti-ii-agenta-2026'],
  },
  flagship: {
    name: 'ИИ-агент: расход, лимиты тарифа, сотрудники',
    slug: 'ii-agent-rashod-limity-tarifa-dostup-sotrudnikov-keys-2026',
    type: 'ai', done: true,
    task: 'У собственного ИИ-агента студии появились первые рабочие экземпляры. Нужно было понять, сколько он реально тратит в месяц, удержать заказчиков в рамках тарифа и дать владельцу агента возможность впустить сотрудников.',
    solution: 'Замер расхода по журналам трёх агентов с удельной стоимостью сообщения, голоса, картинки и запуска по расписанию, настройка сжатия контекста и ночного разбора памяти, кнопка «Тариф и лимиты» в пульте студии (аккаунты, интеграции, сотрудники) и вкладка «Сотрудники» в кабинете с отдельным профилем и одноразовыми приглашениями.',
    result: 'Настройки выложены 7 ноября 2026 на трёх агентах. Порядок расхода: около 2, 11 и 140 долларов в месяц для лёгкого, среднего и тяжёлого сценария (замер на 7 ноября, расчёт по журналам разошёлся со счётом поставщика примерно на 8 процентов). Экономию после настроек не замеряли, лимиты тарифа пока никому не назначены, доступ сотрудников в живом Telegram со вторым аккаунтом не проверен.',
    stack: ['Python', 'SQLite', 'Telegram Bot API', 'MCP', 'HTML/JS'],
    en: {
      task: 'The studio\'s own AI agent now had its first working instances. I needed to know what it really spends per month, keep customers within their plan, and let the owner of an agent bring in staff.',
      solution: 'A cost measurement from the logs of three agents with unit costs for a message, a voice note, an image and a scheduled run, tuning of context compression and the nightly memory review, a "Plan and limits" button in the studio console (accounts, integrations, staff) and a "Staff" tab in the cabinet with a separate profile and one-time invitations.',
      result: 'The settings went live on 7 November 2026 on three agents. Orders of magnitude: roughly 2, 11 and 140 dollars a month for a light, medium and heavy scenario (measured on 7 November; the log-based estimate differed from the provider invoice by about 8 percent). I have not measured the savings after the changes, plan limits are not assigned to anyone yet, and staff access has not been tested in live Telegram with a second account.',
    },
    es: {
      task: 'El agente de IA propio del estudio ya tenía sus primeras instancias en funcionamiento. Había que saber cuánto gasta de verdad al mes, mantener a los clientes dentro de su plan y permitir que el dueño de un agente deje entrar a su personal.',
      solution: 'Una medición del gasto a partir de los registros de tres agentes con el coste unitario de un mensaje, una nota de voz, una imagen y una ejecución programada, ajuste de la compresión de contexto y de la revisión nocturna de la memoria, un botón «Plan y límites» en la consola del estudio (cuentas, integraciones, personal) y una pestaña «Personal» en el panel con un perfil aparte e invitaciones de un solo uso.',
      result: 'Los ajustes se publicaron el 7 de noviembre de 2026 en tres agentes. Órdenes de magnitud: unos 2, 11 y 140 dólares al mes para un uso ligero, medio y pesado (medición del 7 de noviembre; la estimación por registros difirió de la factura del proveedor en un 8 por ciento). No he medido el ahorro tras los cambios, los límites de plan aún no están asignados a nadie y el acceso del personal no se ha probado en Telegram en vivo con una segunda cuenta.',
    },
  },
};
