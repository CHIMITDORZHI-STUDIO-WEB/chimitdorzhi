module.exports = `
<div class="blog-tldr"><h3>Коротко (TL;DR)</h3><ul>
<li>Это карта подробных разборов open source за октябрь 2026: девять групп по задачам бизнеса и одна фраза про главное ограничение каждого проекта.</li>
<li>Ставить всё подряд не нужно: берите одну задачу, читайте разбор и смотрите три вещи, лицензию, что уходит наружу и что я не проверял.</li>
<li>Если хотите, чтобы выбор и установку сделал я, выберите группу и напишите кодовое слово из конца страницы.</li>
</ul></div>

<h2 id="kak-chitat">Как пользоваться картой</h2>
<p>За октябрь я разобрал больше сотни открытых проектов, которые могут пригодиться малому и среднему бизнесу. Каждый разбор построен одинаково: что за проект, какая лицензия, что работает на вашем сервере, что уходит наружу, что я не запускал сам и где нужен человек. Эта страница нужна, чтобы не листать список подряд, а идти от своей задачи.</p>
<p>Ниже девять групп и таблица про лицензии: именно они чаще всего меняют решение. Если вы выбираете между двумя проектами, начните с таблицы.</p>

<h2 id="ii-agenty">ИИ-агенты: что им разрешать</h2>
<p>Здесь собраны разборы про то, как пускать агентов к коду, почте и деньгам и не потерять данные.</p>
<ul>
<li><a href="/blog/shellfirm-zashchita-ot-opasnyh-komand-ii-agenta-v-terminale-2026/">Shellfirm</a>: стоп-кран перед удалением базы и другими опасными командами.</li>
<li><a href="/blog/omnara-zapusk-ii-agentov-u-sebya-prava-dostupa-i-sekrety-2026/">Omnara</a>: запуск агентов у себя, права доступа и секреты.</li>
<li><a href="/blog/devprojex-chto-nelzya-otdavat-ii-agentu-i-podryadchiku-iz-koda-klyuchi-i-personalnye-dannye-2026/">DevProjex</a>: что нельзя отдавать агенту и подрядчику: ключи и персональные данные.</li>
<li><a href="/blog/aimori-rasshirenie-proveryaet-zapros-k-ii-na-konfidencialnye-dannye-do-otpravki-2026/">AImori</a>: проверка запроса к ИИ на конфиденциальные данные до отправки.</li>
<li><a href="/blog/aipex-rasshirenie-brauzera-delaet-rutinu-po-komandam-chto-porucit-i-gde-opasno-2026/">AIPex</a>: агент в браузере берёт рутину, но видит все ваши входы.</li>
<li><a href="/blog/mensarium-svoy-ii-agent-s-podtverzhdeniem-izmeneniy-self-hosted-2026/">Mensarium</a>: агент ждёт вашего «да», но лицензии в репозитории нет.</li>
<li><a href="/blog/perplexity-space-platforma-izolyacii-ii-agentov-chto-vzyat-i-chto-sprosit-u-podryadchika-2026/">Perplexity SPACE</a>: что спросить у подрядчика про изоляцию агентов.</li>
<li><a href="/blog/no-mistakes-avtoproverka-koda-pered-otpravkoy-chto-trebovat-ot-studii-2026/">no-mistakes</a>: чек-лист заказчика: как понять, что студия проверяет код до сдачи.</li>
<li><a href="/blog/paperclip-kompaniya-iz-ii-agentov-2026/">Paperclip</a>: компания из агентов и место человека в ней.</li>
<li><a href="/blog/hapi-upravlenie-ii-agentom-kodirovaniya-s-telefona-i-cherez-telegram-2026/">HAPI</a>: агент пишет код, а вы подтверждаете с телефона.</li>
</ul>

<h2 id="dokumenty">Документы, сканы и файлы</h2>
<p>Про всё, где бумага и вложения превращаются в данные и не должны уходить на чужие серверы.</p>
<ul>
<li><a href="/blog/docspell-arhiv-dokumentov-iz-skanov-i-pochty-na-svoem-servere-2026/">Docspell</a>: архив сканов и писем на своём сервере.</li>
<li><a href="/blog/docjev-sortirovka-i-razrezanie-dokumentov-2026/">DocJev</a>: пачка сканов одним файлом и как её разобрать без рук.</li>
<li><a href="/blog/pdf2md-skany-i-arhivy-dokumentov-v-tekst-s-otchetom-gde-ocr-oshibsya-2026/">PDF2MD</a>: сканы и архивы в текст с отчётом, где OCR мог ошибиться.</li>
<li><a href="/blog/pdfme-avtomaticheskaya-generaciya-pdf-kp-scheta-akty-po-shablonam-2026/">pdfme</a>: КП, счета и акты из данных CRM по шаблону.</li>
<li><a href="/blog/taxhacker-uchet-chekov-i-schetov-s-ii-na-svoem-servere-2026/">TaxHacker</a>: чеки и счета в таблицу на своём сервере.</li>
<li><a href="/blog/hoodik-svoe-zashifrovannoe-oblako-dlya-dokumentov-klientov-2026/">Hoodik</a>: своё зашифрованное облако для документов клиентов.</li>
<li><a href="/blog/clamav-proverka-faylov-ot-klientov-na-sayte-i-v-pochte-chego-antivirus-ne-zamenit-2026/">ClamAV</a>: проверка файлов с сайта и почты, но не замена антивирусу.</li>
<li><a href="/blog/ripgrep-all-poisk-po-soderzhimomu-pdf-word-arhivov-i-baz-v-papke-kompanii-2026/">ripgrep-all</a>: поиск внутри PDF, Word и архивов в папке без сервера.</li>
</ul>

<h2 id="znaniya">Знания, офис и таблицы</h2>
<p>Замены облачным офисам и заметкам, где важны шифрование и право на выход.</p>
<ul>
<li><a href="/blog/svoy-ofis-univer-onlyoffice-2026/">ONLYOFFICE и Univer</a>: свой офис с ИИ-агентами на сервере.</li>
<li><a href="/blog/alexandrie-baza-znaniy-dlya-maloy-komandy-s-oidc-i-offlayn-rezhimom-2026/">Alexandrie</a>: база знаний с офлайном и SSO для выездной команды.</li>
<li><a href="/blog/anytype-lokalnaya-shifrovannaya-baza-znaniy-i-licenziya-ne-svobodnogo-open-source-2026/">Anytype</a>: шифрованная база знаний, лицензия не как у open source.</li>
<li><a href="/blog/grist-tablicy-s-tipami-i-formulami-na-python-vmesto-excel-haosa-2026/">Grist</a>: таблицы с типами и формулами на Python вместо Excel-хаоса.</li>
<li><a href="/blog/fileverse-dsheets-zashifrovannye-sovmestnye-tablicy-vmesto-google-sheets-2026/">Fileverse dSheets</a>: зашифрованные совместные таблицы вместо Google Sheets.</li>
<li><a href="/blog/silverbullet-vika-iz-markdown-faylov-s-zaprosami-i-lua-na-svoem-servere-2026/">SilverBullet</a>: вики из файлов, которая отвечает на запросы.</li>
</ul>

<h2 id="klienty">Клиенты, продажи и магазин</h2>
<p>То, на чём держится выручка: CRM, магазин, биллинг и письма клиентам.</p>
<ul>
<li><a href="/blog/relaticle-crm-s-ii-agentom-na-svoem-servere-2026/">Relaticle</a>: CRM с ИИ-агентом для малого бизнеса.</li>
<li><a href="/blog/huly-edinaya-platforma-zadachi-crm-hr-na-svoem-servere-2026/">Huly</a>: задачи, CRM и HR вместо пяти сервисов.</li>
<li><a href="/blog/luna-edinyy-kalendar-dlya-vseh-masterov-i-zalov-2026/">Luna</a>: один экран для календарей мастеров и залов.</li>
<li><a href="/blog/mercur-svoy-marketplace-na-open-source-2026/">Mercur</a>: свой маркетплейс без комиссий.</li>
<li><a href="/blog/prestashop-svoy-internet-magazin-na-svoem-servere-2026/">PrestaShop</a>: магазин без подписки и процента с продаж.</li>
<li><a href="/blog/lago-billing-podpisok-i-oplaty-po-potrebleniyu-na-svoem-servere-2026/">Lago</a>: биллинг по подписке и по расходу.</li>
<li><a href="/blog/usesend-svoy-servis-pisem-o-zakazakh-i-rassylok-2026/">useSend</a>: письма о заказах и рассылки поверх AWS SES.</li>
<li><a href="/blog/check-if-email-exists-chistka-bazy-rassylki-2026/">check-if-email-exists</a>: чистка базы рассылки от мёртвых адресов.</li>
</ul>

<h2 id="sayt">Сайт и бэкенд</h2>
<p>Основа для сайта, формы и мини-приложения, а также проверка перед рекламой.</p>
<ul>
<li><a href="/blog/payload-cms-svoy-sayt-s-adminkoy-2026/">Payload CMS</a>: сайт с админкой без платы за место.</li>
<li><a href="/blog/wagtail-cms-dlya-saytov-kompanii-na-django-2026/">Wagtail</a>: CMS на Django для сайта компании без плагинов.</li>
<li><a href="/blog/cap-kapcha-bez-google-dlya-formy-na-sayte-2026/">Cap</a>: своя капча вместо reCAPTCHA.</li>
<li><a href="/blog/caddy-vebserver-s-avtomaticheskim-https-dlya-saytov-i-sistem-2026/">Caddy</a>: HTTPS сам, без ручных сертификатов.</li>
<li><a href="/blog/jmeter-nagruzochnoe-testirovanie-sayta-pered-reklamoy-2026/">JMeter</a>: выдержит ли сайт день рекламы.</li>
<li><a href="/blog/pocketbase-bekend-v-odnom-fayle-dlya-mvp-i-pwa-2026/">PocketBase</a>: бэкенд в одном файле для MVP и PWA и его подвохи.</li>
</ul>

<h2 id="seti">Сеть, доступы и защита</h2>
<p>Пароли, входы и сетевые риски офиса, где цена ошибки выше экономии.</p>
<ul>
<li><a href="/blog/passbolt-obshchie-paroli-komandy-na-svoem-servere-dostupy-podryadchikam-2026/">Passbolt</a>: общие пароли команды и доступы подрядчикам.</li>
<li><a href="/blog/voidauth-legkiy-edinyy-vhod-dlya-malogo-ofisa-2026/">VoidAuth</a>: один вход вместо пяти паролей в офисе.</li>
<li><a href="/blog/maltrail-obnaruzhenie-vredonosnogo-trafika-v-seti-ofisa-svoy-datchik-2026/">Maltrail</a>: как заметить, что сеть говорит с вредоносным IP.</li>
<li><a href="/blog/infection-monkey-imitatsiya-ataki-na-svoyu-set-do-zloumyshlennika-2026/">Infection Monkey</a>: имитация атаки на свою сеть до злоумышленника.</li>
<li><a href="/blog/nps-dostup-k-ustroystvam-ofisa-bez-belogo-ip-riski-i-alternativy-2026/">nps</a>: доступ к офису без белого IP, риски и замены.</li>
<li><a href="/blog/howdy-vhod-v-linux-po-licu-biometriya-i-152-fz-na-rabochem-noutbuke-2026/">Howdy</a>: вход в Linux по лицу и 152-ФЗ.</li>
<li><a href="/blog/easytier-mesh-set-mezhdu-filialami-bez-centralnogo-servera-1s-kamery-printery-2026/">EasyTier</a>: сеть между филиалами без сервера для 1С и камер.</li>
<li><a href="/blog/just-the-browser-otklyuchit-ii-telemetriyu-i-reklamu-v-chrome-edge-firefox-brave-cherez-politiki-2026/">just-the-browser</a>: убрать ИИ и телеметрию из браузеров офиса через политики.</li>
</ul>

<h2 id="monitoring">Мониторинг и сервер</h2>
<p>Когда нужно узнать о проблеме раньше клиента.</p>
<ul>
<li><a href="/blog/signoz-oshibki-i-logi-prilozheniya-2026/">SigNoz</a>: ошибки и логи приложения, когда сайт иногда падает.</li>
<li><a href="/blog/beszel-legkiy-monitoring-serverov-i-diskov-2026/">Beszel</a>: лёгкий мониторинг серверов и дисков.</li>
<li><a href="/blog/pulse-monitoring-proxmox-docker-truenas-bez-korporativnogo-steka-2026/">Pulse</a>: мониторинг Proxmox и TrueNAS без Zabbix.</li>
<li><a href="/blog/portracker-karta-otkrytyh-portov-i-servisov-na-serverah-docker-i-truenas-2026/">portracker</a>: карта открытых портов на серверах и в Docker.</li>
<li><a href="/blog/apprise-uvedomleniya-iz-lyuboy-sistemy-v-telegram-i-drugie-kanaly-2026/">Apprise</a>: уведомления из любой системы в Telegram и другие каналы.</li>
<li><a href="/blog/wallos-uchet-podpisok-i-raskhodov-na-servisy-na-svoem-servere-2026/">Wallos</a>: учёт подписок и забытых автопродлений.</li>
<li><a href="/blog/rustfs-s3-hranilishche-na-svoem-servere-vzamen-minio-2026/">RustFS</a>: своё S3-хранилище вместо MinIO.</li>
</ul>

<h2 id="media">Звук, видео и изображения</h2>
<p>Озвучка, ролики и обработка файлов без загрузки на чужие серверы.</p>
<ul>
<li><a href="/blog/cosyvoice-ozvuchka-i-klonirovanie-golosa-lokalno-2026/">CosyVoice</a>: озвучка и клонирование голоса без платы за символ.</li>
<li><a href="/blog/krillinai-perevod-i-ozvuchka-video-na-100-yazykov-2026/">KrillinAI</a>: перевод и озвучка ролика на 100 языков.</li>
<li><a href="/blog/hyperframes-roliki-iz-html-i-css-prays-akcii-karty-tovara-v-mp4-2026/">HyperFrames</a>: прайс и акции в MP4 из HTML и CSS.</li>
<li><a href="/blog/openreel-videoredaktor-v-brauzere-bez-vodyanyh-znakov-chto-montirovat-samim-2026/">OpenReel</a>: видеоредактор в браузере без водяных знаков.</li>
<li><a href="/blog/openscreen-zapis-ekrana-video-instrukciya-dlya-sotrudnikov-i-klientov-2026/">OpenScreen</a>: видеоинструкции с экрана для команды и клиентов.</li>
<li><a href="/blog/vert-konverter-faylov-bez-zagruzki-na-chuzhie-servery-250-formatov-2026/">VERT</a>: конвертер файлов без загрузки на чужие серверы.</li>
<li><a href="/blog/fish-audio-drama-3-otkrytaya-model-ozvuchki-licenziya-po-vyruchke-2026/">Drama 3</a>: открытая модель озвучки, бесплатно до 500 тысяч долларов выручки.</li>
</ul>

<h2 id="modeli">Модели, железо и проверка проектов</h2>
<p>Свой ИИ в офисе упирается в железо и лицензию, а выбор проекта в честную проверку популярности.</p>
<ul>
<li><a href="/blog/nvidia-pair-svoy-ii-klaster-v-ofise-2026/">NVIDIA PAIR</a>: три игровых ПК в офисе как один свой ИИ.</li>
<li><a href="/blog/parallax-ii-klaster-iz-neskolkih-svoih-kompyuterov-chto-realno-2026/">Parallax</a>: ИИ-сервер из офисных ноутбуков и ПК, что выйдет.</li>
<li><a href="/blog/mellum-2-1-otkrytaya-model-jetbrains-dlya-kodinga-na-svoem-servere-2026/">Mellum 2.1</a>: своя модель для кода или облачный API.</li>
<li><a href="/blog/muse-spark-open-otkrytaya-model-816-mlrd-parametrov-licenziya-i-zhelezo-2026/">Muse Spark Open</a>: 816 млрд параметров, лицензия и железо.</li>
<li><a href="/blog/surrealdb-odna-baza-vmesto-neskolkih-dokumenty-grafy-vektory-licenziya-2026/">SurrealDB</a>: одна база вместо трёх, но с лицензией BSL.</li>
<li><a href="/blog/yolov5-raspoznavanie-obektov-v-magazine-i-na-sklade-licenziya-agpl-i-kogda-nuzhna-platnaya-2026/">YOLOv5</a>: лицензия AGPL и когда нужна платная.</li>
<li><a href="/blog/kak-proverit-populyarnost-open-source-pered-vnedreniem-nakrutka-zvezd-github-i-starsift-2026/">Накрутка звёзд на GitHub</a>: как проверить проект до внедрения.</li>
</ul>

<h2 id="licenzii">Где лицензия меняет решение</h2>
<p>В этих проектах лицензия или её отсутствие важнее функций. Подробности и источники лежат в разборах.</p>
<div class="blog-table"><table>
<tr><th>Проект</th><th>Что с лицензией</th></tr>
<tr><td><a href="/blog/mensarium-svoy-ii-agent-s-podtverzhdeniem-izmeneniy-self-hosted-2026/">Mensarium</a></td><td>Файла лицензии в репозитории нет</td></tr>
<tr><td><a href="/blog/surrealdb-odna-baza-vmesto-neskolkih-dokumenty-grafy-vektory-licenziya-2026/">SurrealDB</a></td><td>Лицензия BSL, а не свободная</td></tr>
<tr><td><a href="/blog/anytype-lokalnaya-shifrovannaya-baza-znaniy-i-licenziya-ne-svobodnogo-open-source-2026/">Anytype</a></td><td>Лицензия не как у свободного open source</td></tr>
<tr><td><a href="/blog/yolov5-raspoznavanie-obektov-v-magazine-i-na-sklade-licenziya-agpl-i-kogda-nuzhna-platnaya-2026/">YOLOv5</a></td><td>AGPL и платная версия для закрытого коммерческого использования</td></tr>
<tr><td><a href="/blog/fish-audio-drama-3-otkrytaya-model-ozvuchki-licenziya-po-vyruchke-2026/">Drama 3</a></td><td>Бесплатно до порога выручки</td></tr>
<tr><td><a href="/blog/maltrail-obnaruzhenie-vredonosnogo-trafika-v-seti-ofisa-svoy-datchik-2026/">Maltrail</a></td><td>Списки вредоносных адресов под отдельной лицензией с ограничениями</td></tr>
<tr><td><a href="/blog/npxskillui-sistema-dizayna-svoego-sayta-v-fayl-tokeny-komponenty-i-skrinshoty-pered-redizaynom-2026/">npxskillui</a></td><td>MIT заявлена, файла LICENSE в репозитории нет</td></tr>
</table></div>
<p>Правило простое: перед установкой найдите файл лицензии и прочитайте, можно ли использовать код в коммерческой работе и оказывать на нём услуги клиентам. Как проверить сам проект на живость, я описал в разборах про <a href="/blog/starsift-kak-proverit-chto-u-open-source-proekta-nastoyaschie-zvezdy-pered-vnedreniem-2026/">накрутку звёзд</a> и <a href="/blog/kak-proverit-populyarnost-open-source-pered-vnedreniem-nakrutka-zvezd-github-i-starsift-2026/">проверку популярности до внедрения</a>.</p>

<h2 id="faq">Частые вопросы</h2>
<h3>С чего начать, если непонятно?</h3>
<p>С группы, где болит сильнее всего: потерянные файлы, забытые пароли, падающий сайт или ручная рутина. Откройте один разбор, прочитайте TL;DR и раздел «что я не проверял». Если после этого задача осталась, напишите мне.</p>
<h3>Нужно ли ставить всё это на свой сервер?</h3>
<p>Нет. Для многих задач хватает одной программы на офисном компьютере, а для других нужен именно сервер. В каждом разборе указано, где работает проект и что уходит наружу.</p>
<h3>Вы всё это запускали?</h3>
<p>Нет, не всё. В каждой статье я пишу, что проверял по репозиторию и документации, а что не запускал. Это видно по формулировкам внутри разбора.</p>
<h3>Что делать, если проект окажется заброшенным?</h3>
<p>Смотрите дату последнего релиза, число авторов и открытые проблемы до установки. Если проект один раз «вспыхнул» и затих, берите соседний из группы.</p>

<h2 id="vyvody">Коротко о главном</h2>
<p>Open source экономит деньги там, где есть человек, который его ставит, обновляет и отвечает за данные. Карта помогает выбрать проект по задаче, а таблица лицензий отсекает неприятные сюрпризы. Если нужен готовый результат, я подберу и разверну решение под ваш процесс на вашей инфраструктуре: <a href="/services/devops/">DevOps и развёртывание</a> и <a href="/services/ai-agents/">ИИ-агенты под ключ</a>.</p>
<p>Выберите группу из карты и напишите мне в Telegram, MAX или VK кодовое слово «ПЕРЕЧЕНЬ». В ответ вы получите короткий список из двух-трёх проектов под вашу задачу.</p>
`;
