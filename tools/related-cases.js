// Кейсы под страницами услуг и разработки: блок «Похожие проекты».
// Подобраны 2026-10-08 по сути работы: в кейсе сделано то, что продаёт страница.
// Название кейса берётся из blog-data при сборке; кейс без публикации не выводится.
module.exports = {
  'services/web-development': [
    { slug: 'sayt-kosmetologa-etap-1-keys-2026', why: 'Статический сайт на сервере заказчика: прайс, программы, галереи, разметка для поиска; первый этап сдан' },
    { slug: 'korporativnyy-sayt-kompanii-oae-keys-2026', why: 'Корпоративный сайт на двух языках с SEO/GEO, замеренными контрастом и скоростью' },
    { slug: 'sayt-logistiki-kalkulyator-rastamozhki-keys-2026', why: 'Сайт в проде с калькулятором растаможки, движок покрыт тестами 10/10' },
  ],
  'services/mobile-apps': [
    { slug: 'palletnyy-uchet-tsd-1c-keys-2026', why: 'Приложение на Flutter для 7 Android-терминалов сбора данных, обмен с 1С УТ' },
    { slug: 'sovmestnye-zakupki-pwa-pvz-keys-2026', why: 'PWA для заказа и выдачи с ролями закупщика, сборщика и франчайзи, система работает' },
    { slug: 'pwa-kofeyni-geymifikaciya-keys-2026', why: 'PWA кофейни с двумя способами входа и геймификацией, релиз по списку критериев' },
  ],
  'services/white-label': [
    { slug: 'konverter-legacy-low-code-keys-2026', why: 'Конвертер, линтер и эталон для чужого проекта миграции на low-code: работа внутри процесса другой команды' },
    { slug: 'redizayn-frontenda-cherez-tokeny-keys-2026', why: 'Тематический слой на чужой кодовой базе маркетплейса и список правок для их разработчиков' },
  ],
  'services/ai-agents': [
    { slug: 'kinly-semeynyy-assistent-telegram-max-keys-2026', why: 'ИИ разбирает голос, фото и пересылки на задачи, покупки и расходы, работает в Telegram и MAX' },
    { slug: 'ferz-rabochee-mesto-rukovoditelya-saas-keys-2026', why: '30 ролей-специалистов на модели, обезличивание данных до отправки, ответ файлом Word' },
    { slug: 'obvyazka-ii-cena-v-rublyah-keys-2026', why: 'Слой между агентом и моделью: цена ответа в рублях, суточный потолок, смена модели без потери памяти' },
  ],
  'services/voice-ai': [
    { slug: 'whatsapp-bot-rasshifrovka-golosovyh-keys-2026', why: 'Бот в мессенджере: голосовое на входе, структура (тезисы, решения, задачи) на выходе, плюс веб-кабинет' },
    { slug: 'kinly-semeynyy-assistent-telegram-max-keys-2026', why: 'Голосовой ввод дел, ИИ раскладывает их по задачам и покупкам' },
  ],
  'services/ai-analytics': [
    { slug: 'bot-sportivnoy-analitiki-backtest-keys-2026', why: 'Прогнозная модель с бэктестом по времени на 4150 и 9911 матчах, честное сравнение с рынком' },
    { slug: 'seo-audit-bloga-1500-statey-keys-2026', why: 'Анализ выгрузки Вебмастера: 2995 запросов, 762 страницы без входящих ссылок, что починено' },
  ],
  'services/business-automation': [
    { slug: 'crm-logistiki-istochniki-zayavok-keys-2026', why: 'CRM с источником каждой заявки, правами менеджеров и уведомлениями без персданных' },
    { slug: 'konveyer-rolikov-foto-infografika-keys-2026', why: 'Конвейер роликов с автоответами по кодовому слову в комментариях и директе' },
    { slug: 'vitrina-avto-iz-pereslannyh-postov-keys-2026', why: 'Пересланный пост сам превращается в объявление, без ручного заполнения форм' },
  ],
  'services/accounting-automation': [
    { slug: 'palletnyy-uchet-tsd-1c-keys-2026', why: 'Учёт паллет рядом с 1С УТ: приёмка, отгрузка, протокол обмена с защитой от дублей' },
    { slug: 'katalog-kosmetiki-sinhronizaciya-kassy-keys-2026', why: 'Связь кассы с сайтом без платного посредника, разметка 591 товара' },
    { slug: 'soft-zapolnenie-ved-deklaraciy-keys-2026', why: 'Черновик декларации из инвойсов и спецификаций (обезличенный разбор по типу задачи)' },
  ],
  'services/computer-vision': [
    { slug: 'raspoznavanie-staromongolskogo-teksta-keys-2026', why: 'Распознавание старописьменной монгольской вязи по фото открытой моделью, сверка с эталоном' },
    { slug: 'konveyer-rolikov-foto-infografika-keys-2026', why: 'Автопроверка кадра: текст не должен заходить на лицо, ролик без неё не считается готовым' },
  ],
  'services/big-data': [
    { slug: 'razvedka-dannyh-avtoploshchadok-keys-2026', why: 'Разведка данных на четверть миллиона объявлений: архитектура и стоимость инфраструктуры до старта' },
    { slug: 'wetocar-katalog-avto-kitay-keys-2026', why: 'Каталог на 2000 авто с живой подгрузкой из Китая, обработка неполных данных' },
    { slug: 'analizator-memkoinov-keys-2026', why: 'Сбор публичных рыночных данных и фильтрация шума формальными признаками' },
  ],
  'services/devops': [
    { slug: 'otkazoustoychivaya-infrastruktura-keys-2026', why: 'Мониторинг, автоперезапуск, проверяемые бэкапы в 14 поколениях, тёплый резерв у второго провайдера' },
    { slug: 'pereezd-s-konstruktora-za-den-po-chasam-keys-2026', why: 'Переезд на свой сервер за день: доступы, перенос, защита, разбор проблем с сервером' },
    { slug: 'pereezd-s-konstruktora-na-svoy-server-keys-2026', why: 'Что работает на своём сервере после переезда: приём заявок, бот, админка' },
  ],
  'services/rkn-audit': [
    { slug: 'audit-sayta-po-152-fz-dokazatelstva-keys-2026', why: 'Аудит поведения сайта: 12 cookie до согласия, ещё шесть нарушений, отчёт на 13 страниц с доказательствами' },
    { slug: 'sayt-bez-formy-zayavki-keys-2026', why: 'Убрана форма со сторонним сервисом, правовые страницы переписаны под реальность, ноль cookie' },
    { slug: 'amarsain-sayt-teatra-keys-2026', why: 'Сайт и боты учреждения культуры с учётом 152-ФЗ и 41-ФЗ' },
  ],
  'services/cybersecurity': [
    { slug: 'otkazoustoychivaya-infrastruktura-keys-2026', why: 'Харденинг хостов, ежедневное сканирование на вредоносы, проверяемые копии' },
    { slug: 'audit-sayta-po-152-fz-dokazatelstva-keys-2026', why: 'Найдена передача данных счётчикам до согласия и игнор отказа' },
    { slug: 'crm-logistiki-istochniki-zayavok-keys-2026', why: 'Разграничение прав менеджеров, в уведомлениях нет персональных данных' },
  ],
  'services/it-audit': [
    { slug: 'audit-sayta-po-152-fz-dokazatelstva-keys-2026', why: 'Технический аудит по поведению сайта, отчёт с доказательствами' },
    { slug: 'audit-sayta-avtoservisa-dubai-keys-2026', why: 'Замер сайта за день вместо спора, отчёт без ценника' },
    { slug: 'seo-audit-bloga-1500-statey-keys-2026', why: 'Аудит блога на 1500 статей по выгрузке Вебмастера' },
  ],
  'services/it-infrastructure': [
    { slug: 'otkazoustoychivaya-infrastruktura-keys-2026', why: 'Парк серверов у разных провайдеров без дежурства: мониторинг, копии, резерв' },
    { slug: 'pereezd-s-konstruktora-na-svoy-server-keys-2026', why: 'Свой сервер вместо конструктора: заявки, бот, админка, редактор' },
    { slug: 'amarsain-sayt-teatra-keys-2026', why: 'Перенос сайта с многолетним архивом на свой сервер без потери новостей и ссылок' },
  ],
  'services/clinics-digitalization': [
    { slug: 'sayt-kosmetologa-etap-1-keys-2026', why: 'Сайт врача-косметолога: прайс, программы, кабинеты, разметка для поиска' },
    { slug: 'lending-massazhista-zapis-predoplata-keys-2026', why: 'Онлайн-запись по свободным окнам с предоплатой, правилом отмены за 24 часа и панелью мастера' },
  ],
  'services/logistics-automation': [
    { slug: 'crm-logistiki-istochniki-zayavok-keys-2026', why: 'CRM логистической компании с атрибуцией заявок и правами менеджеров' },
    { slug: 'sayt-logistiki-kalkulyator-rastamozhki-keys-2026', why: 'Калькулятор таможенных платежей вместо ручного расчёта менеджером' },
    { slug: 'palletnyy-uchet-tsd-1c-keys-2026', why: 'Складской процесс на ТСД: приёмка фуры, разделение, отгрузка, этикетки с QR' },
  ],
  'services/china-it': [
    { slug: 'ved-checker-proverka-tnved-keys-2026', why: 'Проверка кодов ТН ВЭД по фуре на 50 000 посылок: база подтверждённых кодов плюс ИИ-подсказка' },
    { slug: 'wetocar-katalog-avto-kitay-keys-2026', why: 'Каталог авто с подгрузкой с китайских площадок, логистика и таможня' },
    { slug: 'rusifikaciya-golovnogo-ustroystva-avto-keys-2026', why: 'Русификация интерфейса китайского головного устройства (обезличенный разбор по типу задачи)' },
  ],
  'services/culture-digitalization': [
    { slug: 'amarsain-sayt-teatra-keys-2026', why: 'Сайт, боты MAX и Telegram и админка национального театра' },
  ],
  'services/digital-marketing': [
    { slug: 'konveyer-rolikov-foto-infografika-keys-2026', why: '91 ролик, автоответы по кодовому слову, разбор пустой воронки и первого лида' },
    { slug: 'lending-pod-direkt-kalkulyator-keys-2026', why: 'Подготовка лендинга к Директу: калькулятор, семь целей Метрики, мобильные дефекты' },
    { slug: 'seo-audit-bloga-1500-statey-keys-2026', why: 'SEO-аудит блога по данным Вебмастера и починка перелинковки' },
  ],
  'services/personal-brand': [
    { slug: 'konveyer-rolikov-foto-infografika-keys-2026', why: 'Конвейер роликов для своего маркетинга' },
    { slug: 'avtoposting-v-threads-keys-2026', why: 'Свой инструмент постинга через официальный API: посты, ветки, отложка' },
    { slug: 'svoi-mcp-servery-socseti-iz-dialoga-keys-2026', why: 'Свои MCP-серверы для ведения ОК, ТенЧата, ВК и Postmypost из диалога с ИИ' },
  ],
  'services/content-repurposing': [
    { slug: 'konveyer-rolikov-foto-infografika-keys-2026', why: 'Сценарии превращаются в вертикальные ролики через HTML-шаблон и покадровый рендер' },
  ],
  'services/blockchain-consulting': [
    { slug: 'kp-token-s-vyplatami-derzhatelyam-keys-2026', why: 'Предложение по архитектуре токена с выплатами: что не писать самому и что вынести за рамки' },
    { slug: 'tulkit-zapuska-spl-tokena-keys-2026', why: 'Тулкит прозрачного запуска токена: свойства, проверяемые в сети' },
  ],
  'services/web3-development': [
    { slug: 'tulkit-zapuska-spl-tokena-keys-2026', why: 'Свой тулкит запуска SPL-токена с проверяемыми в сети свойствами' },
    { slug: 'kp-token-s-vyplatami-derzhatelyam-keys-2026', why: 'Архитектура выплат держателям токена, разбор рисков перехватчика переводов' },
  ],
  'services/ethno-tech': [
    { slug: 'raspoznavanie-staromongolskogo-teksta-keys-2026', why: 'Распознавание и перевод старомонгольского текста, отчёт на 5 страниц' },
    { slug: 'shagay-naadan-telegram-mini-app-keys-2026', why: 'Бурят-монгольская игра в шагай: три режима, 44 теста, Telegram Mini App' },
  ],
  'services/cto-as-a-service': [
    { slug: 'razvedka-dannyh-avtoploshchadok-keys-2026', why: 'Техническая разведка за день до сметы: объём данных, архитектура, открытые вопросы' },
    { slug: 'kp-token-s-vyplatami-derzhatelyam-keys-2026', why: 'Пересмотр чужой архитектуры и границ работ до старта' },
    { slug: 'bot-sportivnoy-analitiki-backtest-keys-2026', why: 'Проверка гипотезы данными и разворот продукта, когда модель проиграла рынку' },
  ],
  'services/design-branding': [
    { slug: 'korporativnyy-sayt-kompanii-oae-keys-2026', why: 'Антиква, палитра из логотипа, анимация силуэта без шаблонности' },
    { slug: 'redizayn-frontenda-cherez-tokeny-keys-2026', why: 'Редизайн через токены: замер 4% покрытия, 280 прибитых цветов, замена эмодзи иконками' },
    { slug: 'prezentaciya-katalog-uslug-keys-2026', why: 'Презентация на 31 слайд: польза до продажи, заметки докладчику' },
  ],
  'services/business-legal-compliance': [
    { slug: 'vozvrat-domena-u-byvshego-razrabotchika-keys-2026', why: 'Пакет из шести документов и папка доказательств для возврата домена организации' },
    { slug: 'audit-sayta-po-152-fz-dokazatelstva-keys-2026', why: 'Нарушения 152-ФЗ, зафиксированные доказательствами, отчёт на 13 страниц' },
    { slug: 'sayt-avtora-metodiki-keys-2026', why: 'Переписаны формулировки, из-за которых площадки отклоняют рекламу и эквайринг' },
  ],
  'services/business-analytics-unit-economics': [
    { slug: 'finansovyy-razbor-kompanii-po-otchetnosti-keys-2026', why: 'Разбор отчётности за пять лет по строкам: откуда прибыль и кто финансирует' },
    { slug: 'gorodskaya-programma-loyalnosti-model-keys-2026', why: 'Экономика общей программы баллов: считать собственные транзакции, а не выручку партнёров' },
    { slug: 'crm-logistiki-istochniki-zayavok-keys-2026', why: 'Атрибуция каждой заявки по источнику и каналу обращения' },
  ],
  'services/operations-efficiency': [
    { slug: 'sovmestnye-zakupki-pwa-pvz-keys-2026', why: 'Заявки из трёх мессенджеров сведены в одно PWA с ролями и общим лимитом позиции' },
    { slug: 'palletnyy-uchet-tsd-1c-keys-2026', why: 'Процесс склада на терминалах: приёмка, разделение, отгрузка без дублей' },
  ],
  'services/revenue-monetization': [
    { slug: 'audit-brenda-partnerskaya-set-keys-2026', why: 'Партнёрская сеть как ступень между розницей и оптом, и где она навредит' },
    { slug: 'partnyorskaya-sistema-qr-keys-2026', why: 'Партнёрская программа на персональных QR вместо промокода, конструктор под другой бизнес' },
    { slug: 'gorodskaya-programma-loyalnosti-model-keys-2026', why: 'Модель общего кошелька баллов для города и расчёт пилота' },
  ],
  'services/cifrovoy-sotrudnik': [
    { slug: 'ferz-rabochee-mesto-rukovoditelya-saas-keys-2026', why: 'Роли юриста, кадровика, экономиста и закупщика в одном кабинете с ИИ' },
    { slug: 'svoi-mcp-servery-socseti-iz-dialoga-keys-2026', why: 'ИИ читает ленты и переписку, готовит черновики, отправляет по команде' },
    { slug: 'obvyazka-ii-cena-v-rublyah-keys-2026', why: 'Первая линия ответов с ценой ответа в рублях и суточным потолком' },
  ],
  'development/sites': [
    { slug: 'sayt-kosmetologa-etap-1-keys-2026', why: 'Статический сайт: прайс, программы, галереи, разметка для поиска' },
    { slug: 'korporativnyy-sayt-kompanii-oae-keys-2026', why: 'Двуязычный корпоративный сайт, SEO/GEO, замеренные контраст и скорость' },
    { slug: 'amarsain-sayt-teatra-keys-2026', why: 'Перенос сайта театра с конструктора на свой сервер с архивом, ботами и админкой' },
  ],
  'development/web-apps': [
    { slug: 'ferz-rabochee-mesto-rukovoditelya-saas-keys-2026', why: 'Свой SaaS: FastAPI, 14 таблиц, 55 маршрутов API, сайт работает' },
    { slug: 'space-platforma-gotovyh-resheniy-keys-2026', why: 'Своя платформа с входом через Telegram и подключением готовых решений' },
    { slug: 'vitrina-nedvizhimosti-crm-keys-2026', why: 'Витрина с тремя уровнями доступа и своей CRM, вход по коду' },
  ],
  'development/pwa': [
    { slug: 'sovmestnye-zakupki-pwa-pvz-keys-2026', why: 'Одно PWA: город, пункт выдачи, заказ, роли закупщика, сборщика и франчайзи' },
    { slug: 'pwa-kofeyni-geymifikaciya-keys-2026', why: 'PWA лояльности кофейни: два входа, задания, розыгрыши, релиз по критериям' },
  ],
  'development/marketplaces': [
    { slug: 'partnerskie-vitriny-multitenant-keys-2026', why: 'Мультиарендная платформа: партнёр за полминуты получает магазин под своим именем' },
    { slug: 'vitrina-avto-iz-pereslannyh-postov-keys-2026', why: 'Витрина объявлений, которая собирается из пересланных постов продавца' },
    { slug: 'sovmestnye-zakupki-pwa-pvz-keys-2026', why: 'Совместные закупки: общий лимит позиции, пункты выдачи и франчайзи' },
  ],
  'development/landing-24h': [
    { slug: 'lending-massazhista-zapis-predoplata-keys-2026', why: 'Лендинг со свободными окнами, предоплатой и панелью мастера' },
    { slug: 'lending-pod-direkt-kalkulyator-keys-2026', why: 'Лендинг под Директ: калькулятор окупаемости, семь целей Метрики' },
    { slug: 'lending-digital-agentstva-geo-keys-2026', why: 'Статический лендинг под регион с машиночитаемой разметкой и доступом для ИИ-краулеров' },
  ],
  'development/telegram-bots': [
    { slug: 'kinly-semeynyy-assistent-telegram-max-keys-2026', why: 'Бот с ИИ: голос, фото и пересылки превращаются в задачи, один код на Telegram и MAX' },
    { slug: 'bot-sportivnoy-analitiki-backtest-keys-2026', why: 'Бот спортивной аналитики с моделью, проверенной бэктестом' },
    { slug: 'bot-mini-app-rieltoram-keys-2026', why: 'Бот с мини-приложением: база объектов, подбор, показы и заявки' },
  ],
  'development/telegram-mini-apps': [
    { slug: 'shagay-naadan-telegram-mini-app-keys-2026', why: 'Telegram Mini App с тремя режимами игры, серверным сохранением и 44 тестами' },
    { slug: 'bot-mini-app-rieltoram-keys-2026', why: 'Мини-приложение риелтора: объекты, подбор под запрос, история показов' },
    { slug: 'kinly-semeynyy-assistent-telegram-max-keys-2026', why: 'Мини-приложение на чистом JS к семейному боту' },
  ],
  'development/max-bots': [
    { slug: 'kinly-semeynyy-assistent-telegram-max-keys-2026', why: 'Один код бота обслуживает Telegram и MAX' },
    { slug: 'kafe-nacionalnoy-kuhni-bot-max-rozygryshi-keys-2026', why: 'Бот в MAX: номерок покупается в переписке, админка с бронью и рассылкой' },
    { slug: 'amarsain-sayt-teatra-keys-2026', why: 'Боты театра в MAX и Telegram на одном коде с админкой' },
  ],
  'development/whatsapp-bots': [
    { slug: 'whatsapp-bot-rasshifrovka-golosovyh-keys-2026', why: 'Официальный бизнес-бот: верификация платформы, номер, вебхук, расшифровка голосовых' },
  ],
  'development/cross-platform': [
    { slug: 'palletnyy-uchet-tsd-1c-keys-2026', why: 'Приложение на Flutter для Android-терминалов сбора данных' },
  ],
  'development/games': [
    { slug: 'shagay-naadan-telegram-mini-app-keys-2026', why: 'Три игры на одном броске костей, правила в чистых функциях, 44 теста' },
    { slug: 'kak-igry-stali-napravleniem-keys-2026', why: 'Игровые механики для клиентов и что из них работает' },
  ],
};
