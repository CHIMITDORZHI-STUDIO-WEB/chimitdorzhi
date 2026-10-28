module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-hard-drives',
    title: 'MinIO, SSL и сайт для внешних участников у сервера взаимодействия 1С',
    metaTitle: 'Кейс: MinIO и защищённое соединение для сервера 1С',
    metaDescription: 'MinIO на Windows-ВМ заказчика рядом с сервером взаимодействия 1С: сборка из исходников, сертификат, WSS, сайт для внешних участников и push. Сдано 21.10.',
    excerpt: 'У заказчика на Windows Server уже работал сервер взаимодействия 1С, не хватало файлового хранилища: готовые сборки MinIO под Windows больше не раздают. Я собрал MinIO из исходников, подключил его, затем выпустил сертификат, включил защищённое соединение, поднял сайт для внешних участников и push. Сдано 21 октября, заказчик подтвердил работу.',
    tags: ['кейс', '1С', 'MinIO', 'SSL', 'Windows Server'],
    cta: 'auto',
    relatedSlugs: ['minio-svoyo-s3-hranilishche-2026', 'ssl-https-prostymi-slovami-2026', '1c-v-oblake-ili-na-svoem-servere-2026', 'oblachnoe-hranilishche-dlya-biznesa-2026'],
  },
  flagship: {
    name: 'MinIO и WSS для сервера взаимодействия 1С',
    slug: 'minio-dlya-servera-vzaimodeystviya-1c-keys-2026',
    type: 'platform', done: true, delivered: true,
    task: 'На Windows-ВМ заказчика работают сервер взаимодействия 1С и Postgres, но для файлов в обсуждениях нужно S3-хранилище, и готовых сборок MinIO под Windows больше не раздают. Потом добавились защищённое соединение, сайт для внешних участников без мобильного приложения и push-уведомления.',
    solution: 'Собрал minio.exe из исходников стабильного релиза, поставил службой, создал бакет и подключил хранилище через API администрирования сервера взаимодействия. Выпустил сертификат Let\'s Encrypt через win-acme на 443 порту с автопродлением, перевёл MinIO на HTTPS, поднял в IIS сайт для внешних участников на отдельном порту и включил WSS. Работал по RDP поэтапными скриптами с резервной копией настроек.',
    result: 'Сдано 21.10.2026. Заказчик подтвердил: файлы уходят и приходят, звонки проходят, сайт по приглашению открывается, сообщения и вложения работают, push заработал в тот же день. Сертификат продлевается сам.',
    stack: ['MinIO', 'Go', 'Windows Server', 'WinSW', 'win-acme', 'IIS', 'PowerShell', '1С'],
    en: {
      task: 'The client\'s Windows VM runs the 1C collaboration server and Postgres, but files in discussions need S3 storage, and ready-made MinIO builds for Windows are no longer distributed. Later, a secure connection, a website for external participants without the mobile app and push notifications were added.',
      solution: 'I built minio.exe from the source of a stable release, installed it as a service, created a bucket and connected the storage through the collaboration server\'s admin API. I issued a Let\'s Encrypt certificate with win-acme on port 443 with auto-renewal, switched MinIO to HTTPS, set up a website for external participants in IIS on a separate port and enabled WSS. I worked over RDP with step-by-step scripts and a backup of the settings.',
      result: 'Delivered on 21 October 2026. The client confirmed: files are sent and received, calls go through, the website opens by invitation, messages and attachments work, and push started working the same day. The certificate renews automatically.',
    },
    es: {
      task: 'En la máquina virtual Windows del cliente funcionan el servidor de interacción de 1C y Postgres, pero los archivos de las conversaciones necesitan un almacenamiento S3, y ya no se distribuyen compilaciones listas de MinIO para Windows. Después se sumaron una conexión segura, un sitio para participantes externos sin la aplicación móvil y las notificaciones push.',
      solution: 'Compilé minio.exe desde el código fuente de una versión estable, lo instalé como servicio, creé un bucket y conecté el almacenamiento mediante la API de administración del servidor de interacción. Emití un certificado de Let\'s Encrypt con win-acme en el puerto 443 con renovación automática, pasé MinIO a HTTPS, monté en IIS un sitio para participantes externos en un puerto aparte y activé WSS. Trabajé por RDP con scripts por etapas y una copia de seguridad de la configuración.',
      result: 'Entregado el 21 de octubre de 2026. El cliente confirmó: los archivos se envían y se reciben, las llamadas funcionan, el sitio se abre por invitación, los mensajes y los adjuntos funcionan, y las notificaciones push empezaron a funcionar ese mismo día. El certificado se renueva solo.',
    },
  },
};
