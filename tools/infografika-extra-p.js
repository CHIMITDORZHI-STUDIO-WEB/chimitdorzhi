const A = (slug, pill, hero, tagline, points, description, relatedArticles, relatedOffers) => ({
  slug, kind: 'article', label: 'МЕССЕНДЖЕРЫ И БОТЫ', pill, hero, tagline, points, description, relatedArticles, relatedOffers,
});

module.exports = [
  A('reklama-v-max-2027', 'ТРАФИК', 'Реклама в MAX', 'Платный трафик без слива бюджета',
    ['Форматы рекламы', 'Запуск пошагово', 'Бюджет и цена лида', 'Настройка аудитории'],
    'Как запустить рекламу в MAX и не слить бюджет: форматы и посевы, пошаговый запуск, расчёт цены подписчика и настройка аудитории. Разбор типичных ошибок рекламодателей.',
    ['max-kanaly-rassylki-marketing-2026', 'pervaya-1000-podpischikov-max-2027', 'posevy-v-max-kanalah-2027'],
    ['analitika-soobshchestva', 'max-deeplink-referral', 'max-rassylki-voronki']),

  A('pervye-podpischiki-max-bez-byudzheta-2027', 'БЕЗ БЮДЖЕТА', 'Первые подписчики', 'Тысяча подписчиков без вложений',
    ['Личная сеть', 'Взаимопиар', 'Реферальные ссылки', 'Контент, что репостят'],
    'Бесплатные способы набрать первых подписчиков канала в MAX: личная сеть, взаимный пиар, реферальные ссылки и контент, которым делятся. Без рекламного бюджета.',
    ['pervaya-1000-podpischikov-max-2027', 'konkurs-priglasheniy-max-virusnyy-rost-2027', 'reklama-v-max-2027'],
    ['max-deeplink-referral', 'geymifikaciya-kanala-max', 'konstruktor-konkursov']),

  A('posevy-v-max-kanalah-2027', 'ПОСЕВЫ', 'Посевы в каналах', 'Целевой трафик из чужих каналов',
    ['Выбор канала', 'Цена подписчика', 'Договор с владельцем', 'Защита от накруток'],
    'Посев в чужом канале приводит аудиторию быстро, но легко слить бюджет. Как выбрать площадку, посчитать цену подписчика, договориться с владельцем и не нарваться на накрутку.',
    ['reklama-v-max-2027', 'max-kanaly-rassylki-marketing-2026', 'pervaya-1000-podpischikov-max-2027'],
    ['analitika-soobshchestva', 'max-rassylki-voronki', 'bot-dlya-biznesa']),

  A('perevod-auditorii-v-max-2027', 'МИГРАЦИЯ', 'Перевод аудитории', 'Из Telegram и ВКонтакте в MAX',
    ['Подготовка канала', 'Ссылки и анонсы', 'Мотивация перейти', 'Удержание'],
    'Аудиторию из Telegram и ВКонтакте можно перевести в MAX. Пошагово: подготовка канала, механика перехода через ссылки и анонсы, мотивация подписчиков и удержание перешедших.',
    ['chatbot-telegram-max-vk-2026', 'max-kanaly-rassylki-marketing-2026', 'max-ili-telegram-dlya-biznesa-2027'],
    ['max-deeplink-referral', 'max-rassylki-voronki', 'bot-dlya-biznesa']),

  A('kontent-plan-max-kanala-2027', '30 ИДЕЙ', 'Контент-план', '30 идей постов для канала',
    ['Рубрики', '30 идей постов', 'Ритм публикаций', 'Оформление'],
    'Канал без плана умирает на третьей неделе. Каркас рубрик, 30 готовых идей постов для MAX-канала, оптимальный ритм публикаций и оформление, которое удерживает новичков.',
    ['max-kanaly-rassylki-marketing-2026', 'vovlechennost-v-max-2027', 'pervaya-1000-podpischikov-max-2027'],
    ['max-dajdzhest-krosspost', 'analitika-soobshchestva', 'geymifikaciya-kanala-max']),

  A('vovlechennost-v-max-2027', 'ВОВЛЕЧЕНИЕ', 'Вовлечённость', 'Опросы, эфиры, геймификация',
    ['Опросы и реакции', 'Прямые эфиры', 'Геймификация', 'Метрики вовлечения'],
    'Охват без вовлечённости — пустая цифра. Рабочие инструменты MAX: опросы и реакции, прямые эфиры, геймификация (баллы, челленджи, конкурсы) и метрики вовлечённости.',
    ['geymifikaciya-saas-2026', 'kontent-plan-max-kanala-2027', 'max-kanaly-rassylki-marketing-2026'],
    ['geymifikaciya-kanala-max', 'max-rozygrysh-podpiska', 'analitika-soobshchestva']),

  A('progrev-i-zapusk-cherez-max-2027', 'ЗАПУСК', 'Прогрев и запуск', 'Схема воронки запуска продукта',
    ['Что такое прогрев', 'Схема воронки', 'Контент по этапам', 'День запуска'],
    'Запуск проваливается, когда аудиторию не прогрели. Схема воронки запуска через MAX: этапы прогрева, контент по шагам, день запуска и ошибки, которые убивают продажи.',
    ['avtovoronka-v-max-2027', 'avtovoronki-v-messendzherah-2027', 'max-kanaly-rassylki-marketing-2026'],
    ['max-rassylki-voronki', 'welcome-voronka-novichki', 'analitika-soobshchestva']),

  A('avtovoronka-v-max-2027', 'ВОРОНКА', 'Автоворонка', 'Цепочка касаний на автомате',
    ['Цепочка касаний', 'Триггеры по действиям', 'Настройка', 'Аналитика'],
    'Автоворонка ведёт подписчика к покупке без вашего участия. Из чего состоит цепочка касаний, как её настроить, какие триггеры использовать и как оптимизировать по аналитике.',
    ['avtovoronki-v-messendzherah-2027', 'progrev-i-zapusk-cherez-max-2027', 'bot-plus-rassylka-max-povtornye-prodazhi-2027'],
    ['max-rassylki-voronki', 'welcome-voronka-novichki', 'bot-dlya-biznesa']),

  A('bot-plus-rassylka-max-povtornye-prodazhi-2027', 'ПРОДАЖИ', 'Бот и рассылка', 'Повторные продажи на автомате',
    ['Сценарии рассылок', 'Реактивация', 'Сегменты', 'Согласие и 152-ФЗ'],
    'Вернуть клиента дешевле, чем привлечь. Связка бот плюс рассылка в MAX: сценарии повторных продаж, реактивация уснувших, сегменты и персональные предложения, требования 152-ФЗ.',
    ['sistemy-loyalnosti-2027', 'segmentaciya-podpischikov-max-2027', 'max-kanaly-rassylki-marketing-2026'],
    ['max-rassylki-voronki', 'programma-loyalnosti', 'reaktivaciya-spyashchih']),

  A('segmentaciya-podpischikov-max-2027', 'РАССЫЛКИ', 'Сегментация', 'Персональные рассылки по сегментам',
    ['Сбор данных', 'Базовые сегменты', 'Персонализация', 'Данные и 152-ФЗ'],
    'Одна рассылка на всех работает плохо. Как сегментировать подписчиков MAX: собрать данные, выделить сегменты, делать персональные рассылки под каждый и не нарушить 152-ФЗ.',
    ['crm-dlya-malogo-biznesa-2026', 'bot-plus-rassylka-max-povtornye-prodazhi-2027', 'max-kanaly-rassylki-marketing-2026'],
    ['max-rassylki-voronki', 'analitika-soobshchestva', 'klub-po-podpiske']),

  A('monetizaciya-kanala-max-2027', '8 МОДЕЛЕЙ', 'Монетизация', '8 моделей дохода с канала',
    ['Подписка и клуб', 'Реклама и посевы', 'Свои продукты', 'Партнёрки'],
    'Канал может приносить деньги по-разному. Когда он готов к монетизации и 8 рабочих моделей: подписка и клуб, реклама и посевы, свои продукты, партнёрские программы и другие.',
    ['sistemy-loyalnosti-2027', 'pervaya-1000-podpischikov-max-2027', 'max-kanaly-rassylki-marketing-2026'],
    ['klub-po-podpiske', 'max-rassylki-voronki', 'analitika-soobshchestva']),

  A('analitika-max-kanala-2027', 'МЕТРИКИ', 'Аналитика канала', 'Какие метрики считать и как',
    ['Охват и вовлечение', 'Прирост и отток', 'Конверсия', 'Стоимость подписчика'],
    'Без цифр маркетинг — гадание. Аналитика MAX-канала: какие метрики считать (охват, вовлечённость, отток, конверсия, стоимость подписчика), как их получить и какие решения принимать.',
    ['max-kanaly-rassylki-marketing-2026', 'marketing-i-trafik-2027', 'reklama-v-max-2027'],
    ['analitika-soobshchestva', 'max-rassylki-voronki', 'bot-dlya-biznesa']),

  A('max-ili-telegram-dlya-biznesa-2027', 'СРАВНЕНИЕ', 'MAX или Telegram', 'Где дешевле трафик в 2027',
    ['Аудитория', 'Стоимость трафика', 'Инструменты', 'Как выбрать'],
    'MAX или Telegram — вопрос не «или-или». Сравнение по аудитории, стоимости трафика и инструментам для бизнеса: почему раннее присутствие в MAX даёт дешёвый трафик уже сейчас.',
    ['chatbot-telegram-max-vk-2026', 'max-kanaly-rassylki-marketing-2026', 'perevod-auditorii-v-max-2027'],
    ['bot-dlya-biznesa', 'max-mini-app-pod-klyuch', 'max-rassylki-voronki']),

  A('lokalnyy-marketing-v-max-2027', 'ЛОКАЛЬНО', 'Локальный маркетинг', 'Клиенты из своего города',
    ['Канал под город', 'Привлечение', 'Удержание', 'Примеры по нишам'],
    'Кафе, салону, автосервису нужны клиенты из своего города, а не вся страна. Локальный маркетинг в MAX: канал под город, привлечение и удержание местных клиентов, примеры по нишам.',
    ['lokalnoe-prodvizhenie-chita-ulan-ude-2026', 'max-kanaly-rassylki-marketing-2026', 'max-bot-restoran-kafe-2026'],
    ['analitika-soobshchestva', 'bot-dlya-biznesa', 'max-bot-zapis-uslugi']),
];
