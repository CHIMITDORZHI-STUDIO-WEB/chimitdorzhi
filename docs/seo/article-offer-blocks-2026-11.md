# Этап C: блок «Похожая задача?» в статьях

26.11.2026. Правила: `tools/article-offer-map.js`, вывод: `tools/build-blog.js` (функция `injectSimilarTask`). Тексты статей не менялись.

## Решение, чтобы блоки не дублировались

Если правило сработало, блок «Похожая задача?» стоит после «Коротко» и перед FAQ и заменяет прежние два блока (верхний «Нужен ...?» и средний призыв в Telegram). Нижняя карточка в конце статьи остаётся. Если правило не сработало, всё как было. Если в тексте статьи уже есть свой верхний блок, добавляется только блок перед FAQ.

Цели Метрики: `article_offer_tg`, `article_offer_max`, `article_offer_page`, `article_offer_case` (атрибут data-goal). Их нужно завести в интерфейсе Метрики как цели типа «JavaScript-событие».

## Где блока нет

Рубрики: opensource, biznes-krugozor, mwrlife, mlm, esports, media, ai-life, finance, igry-dlya-biznesa (в обзорах открытого ПО блок только у статьи про мониторинг транспорта). Кроме того, обзоры компаний сетевого маркетинга, новости о моделях, OSINT. В прочих рубриках без совпадения по правилу блок тоже не ставится.

## Правило -> предложение

| Правило | Статей | Куда ведёт | Цена |
|---|---|---|---|
| default-dev | 178 | /services/business-automation/ | от 60 000 ₽ |
| sayt | 130 | /development/sites/ | от 40 000 ₽ |
| agent | 99 | /predlozheniya/ii-agent-dlya-biznesa-kabinet/ | от 150 000 ₽ |
| bot | 94 | /development/telegram-bots/ | от 30 000 ₽ |
| 1c | 75 | /services/business-automation/ | от 40 000 ₽ |
| default-sec | 65 | /services/it-audit/ | от 50 000 ₽ |
| default-ai | 58 | /predlozheniya/ii-agent-dlya-biznesa-kabinet/ | от 50 000 ₽ |
| zapis | 49 | /predlozheniya/zapis-salon-krasoty/ | от 150 000 ₽ |
| kafe | 41 | /predlozheniya/bot-max-dlya-kafe/ | от 30 000 ₽ |
| crm | 39 | /services/business-automation/ | от 50 000 ₽ |
| miniapp | 32 | /development/telegram-mini-apps/ | от 150 000 ₽ |
| loyalnost | 31 | /predlozheniya/programma-loyalnosti/ | от 150 000 ₽ |
| 152 | 29 | /predlozheniya/152-fz-pod-klyuch/ | от 30 000 ₽ |
| bot-max | 28 | /development/max-bots/ | от 30 000 ₽ |
| banya | 24 | /predlozheniya/banya-sauna-kompleks/ | от 150 000 ₽ |
| bitriks | 15 | /predlozheniya/remont-bitriks24-posle-integratora/ | от 50 000 ₽ |
| ocr | 13 | /ceny/ | от 100 000 ₽ |
| parser | 12 | /ceny/ | от 40 000 ₽ |
| gps | 10 | /predlozheniya/svoy-gps-server-vmesto-abonentki/ | от 80 000 ₽ |
| pallet | 9 | /predlozheniya/palletnyy-uchet-na-tsd-1c/ | от 150 000 ₽ |
| kultura | 9 | /predlozheniya/muzey-teatr-bilety/ | от 100 000 ₽ |
| avtopost | 8 | /predlozheniya/avto-posting-kontent-plan/ | от 40 000 ₽ |
| zashchita | 6 | /services/cybersecurity/ | от 40 000 ₽ |
| transport | 6 | /predlozheniya/crm-dlya-transportnoy-kompanii/ | от 300 000 ₽ |
| chaevye | 6 | /services/qr-tips/ | от 15 000 ₽ |
| stroyka | 5 | /predlozheniya/crm-stroitelnaya-kompaniya/ | от 300 000 ₽ |
| rozygrysh | 5 | /predlozheniya/max-rozygrysh-podpiska/ | от 30 000 ₽ |
| putevye | 5 | /predlozheniya/putevye-listy-iz-trekera/ | от 60 000 ₽ |
| monitoring | 5 | /predlozheniya/monitoring-bitriks24-i-serverov/ | от 3 000 ₽/час |
| zakupki | 4 | /predlozheniya/sistema-sovmestnyh-zakupok-i-pvz/ | от 150 000 ₽ |
| robot | 4 | /services/voice-ai/ | от 100 000 ₽ |
| dostupy | 4 | /predlozheniya/zabrat-sayt-i-domen-u-podryadchika/ | от 30 000 ₽ |
| taksi | 4 | /predlozheniya/sistema-dlya-taksi-rayona/ | от 80 000 ₽ |
| klub | 3 | /predlozheniya/klub-po-podpiske/ | от 80 000 ₽ |
| master | 3 | /predlozheniya/servis-srochnyh-masterov/ | от 80 000 ₽ |
| keytering | 3 | /predlozheniya/sayt-i-crm-dlya-keyteringa/ | от 100 000 ₽ |
| servicedesk | 3 | /predlozheniya/servis-desk-1c-telegram-max/ | от 40 000 ₽ |
| uchebnye | 2 | /predlozheniya/ai-generator-uchebnyh/ | от 100 000 ₽ |
| storage | 2 | /predlozheniya/bronirovanie-boksov-sklada-hraneniya/ | от 150 000 ₽ |
| voditel | 1 | /predlozheniya/prilozhenie-voditelya-k-bitriks24/ | от 150 000 ₽ |

## По рубрикам

| Рубрика | Статей | С блоком |
|---|---|---|
| development | 505 | 453 |
| industries | 410 | 119 |
| opensource | 323 | 1 |
| biznes-krugozor | 294 | 0 |
| expert | 217 | 92 |
| cases | 199 | 131 |
| marketing | 155 | 51 |
| sales | 151 | 58 |
| legal | 131 | 36 |
| ai-dev | 117 | 109 |
| security | 81 | 69 |
| igry-dlya-biznesa | 66 | 0 |
| finance | 62 | 0 |
| ai-life | 28 | 0 |
| mlm | 18 | 0 |
| esports | 14 | 0 |
| media | 9 | 0 |
| geo | 9 | 0 |

Всего статей 2789, с блоком 1119.

Проверка вёрстки: 10 статей разных рубрик на ширине 375 и 1536 px, горизонтальной прокрутки нет.
