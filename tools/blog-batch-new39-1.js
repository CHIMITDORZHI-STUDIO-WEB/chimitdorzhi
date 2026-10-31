// Одиночная статья (new39-1): SSL-сертификат на Windows Server, когда порт 80 занят: win-acme и TLS-ALPN.
// Опора: RFC 8555 (разд. 8.3), RFC 8737, документация win-acme (win-acme.com), Let's Encrypt challenge types. Кейс: minio-dlya-servera-vzaimodeystviya-1c-keys-2026.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-10-31';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC = {
  title: 'Сертификат и автопродление на вашем Windows Server',
  services: [
    { icon: 'ph-fill ph-lock-key', label: 'Выпуск сертификата с проверкой на 443, когда порт 80 занят' },
    { icon: 'ph-fill ph-arrows-left-right', label: 'Скрипт, который раскладывает сертификат по службам' },
    { icon: 'ph-fill ph-shield-check', label: 'Резервная копия настроек и откат на каждом этапе' },
    { icon: 'ph-fill ph-database', label: 'Проверка продления до срока, журнал и мониторинг' },
  ],
  ctaLabel: 'Обсудить сертификат для сервера', ctaUrl: 'https://t.me/chimitdorzhi',
};

module.exports = [
  {
    slug: 'ssl-sertifikat-windows-server-port-80-zanyat-win-acme-2026',
    category: 'development',
    published: true,
    title: 'SSL-сертификат на Windows Server, когда порт 80 занят: win-acme',
    metaTitle: 'SSL на Windows Server при занятом порте 80: win-acme',
    metaDescription: 'Как выпустить сертификат Let\'s Encrypt на Windows Server, если порт 80 занят: проверка TLS-ALPN на 443, win-acme, автопродление и скрипт раскладки.',
    metaKeywords: 'ssl сертификат windows server, порт 80 занят, win-acme, wacs.exe, tls-alpn-01, let\'s encrypt windows, автопродление сертификата, rfc 8737, acme windows',
    excerpt: 'Порт 80 на Windows Server занят чужим приложением, а сертификат нужен. Разбираю проверку TLS-ALPN на порту 443 по RFC 8737, клиент win-acme, автопродление и скрипт, который раскладывает сертификат по службам, а также три ошибки: две A-записи у домена, чужой сервис на соседнем порту и проверку здоровья с ответом 400.',
    datePublished: D,
    dateModified: D,
    readingMinutes: 7,
    heroIcon: 'ph-fill ph-lock-key',
    tags: ['SSL', 'Windows Server', 'win-acme', 'Let\'s Encrypt', 'автопродление', 'TLS-ALPN'],
    toc: toc(
      ['pochemu-port-80', 'Почему HTTP-проверка не подходит, когда порт 80 занят'],
      ['tls-alpn', 'Как работает проверка TLS-ALPN на порту 443'],
      ['klient', 'Как называется клиент для Windows и где его брать'],
      ['vypusk', 'Выпуск сертификата с проверкой на 443'],
      ['prodlenie', 'Автопродление и скрипт, который раскладывает сертификат по службам'],
      ['oshibki', 'Типичные ошибки: две A-записи, чужой сервис, проверка здоровья'],
      ['kak-ya-delayu', 'Как я это делаю'],
      ['ceny', 'Сколько стоит настройка сертификата и автопродления'],
      ['faq', 'Частые вопросы'],
      ['vyvody', 'Коротко о главном'],
    ),
    relatedSlugs: ['minio-dlya-servera-vzaimodeystviya-1c-keys-2026', 'certimate-avtomaticheskie-ssl-sertifikaty-dlya-domenov-2026', 'minio-svoyo-s3-hranilishche-2026', 'sayt-upal-monitoring-sayta-i-domena-2026'],
    ctaInternal: { url: 'https://chimitdorzhi.tech/services/business-automation/', label: 'Автоматизация процессов' },
    servicesOffer: SVC,
    contentHtml: C('ssl-sertifikat-windows-server-port-80-zanyat-win-acme-2026'),
  },
];
