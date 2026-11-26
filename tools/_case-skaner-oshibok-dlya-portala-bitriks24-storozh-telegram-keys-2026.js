module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-stethoscope',
    title: 'Сканер ошибок для портала на Битрикс24 и сторож в Telegram',
    metaTitle: 'Кейс: сканер ошибок для портала на Битрикс24 и сторож',
    metaDescription: 'Сканер проверяет портал на Битрикс24 каждые 10 минут: журналы, расписания, сертификат, диск, копии. Проблемы по номерам, внешний сторож пишет в Telegram.',
    excerpt: 'Портал на Битрикс24 с самописными модулями ломается тихо, и о поломке узнают по жалобе пользователя. Я собрал сканер, который каждые 10 минут ищет такие вещи, нумерует проблемы и чинит только безопасное, и внешнего сторожа, который пишет в Telegram. Работает с 18 ноября.',
    tags: ['кейс', 'Битрикс24', 'мониторинг', 'Telegram', 'PHP', 'автоматизация'],
    cta: 'auto',
    relatedSlugs: ['sayt-upal-monitoring-sayta-i-domena-2026', 'otkazoustoychivost-monitoring-bekapy-2026', 'uptime-kuma-monitoring-dostupnosti-2026', 'crm-bitrix24-chita-2026'],
  },
  flagship: {
    name: 'Сканер ошибок для портала на Битрикс24',
    slug: 'skaner-oshibok-dlya-portala-bitriks24-storozh-telegram-keys-2026',
    type: 'crm', done: true, delivered: false,
    task: 'У портала на Битрикс24 с самописными модулями поломки идут тихо: зависает агент, перестаёт отрабатывать расписание, пропадает задание у отключённого сотрудника. Нужна проверка без участия человека, с номерами проблем и оповещением в Telegram.',
    solution: 'Сканер на PHP запускается из cron каждые 10 минут и проверяет 15 групп: журналы, живость расписаний, страницы, сертификат, диск, свежесть резервных копий, бизнес-процессы и другое. Чинит только безопасное и пишет всё в журнал, остальное записывает проблемами с номерами. Внешний сторож на другой машине читает сводку и пишет в Telegram.',
    result: 'Сканер и сторож работают с 18 ноября. Сторож отдельно сообщает, если молчит сам сканер, и раз в сутки присылает подтверждение, что жив. Сколько проблем найдено за это время, не считал.',
    stack: ['PHP', 'Битрикс24', 'cron', 'MySQL', 'Python', 'systemd', 'Telegram Bot API'],
    en: {
      task: 'On a Bitrix24 portal with custom modules, failures happen quietly: an agent hangs, a schedule stops running, a task is left with a deactivated employee. I needed a check that runs without a person, numbers the problems and sends alerts to Telegram.',
      solution: 'A PHP scanner runs from cron every 10 minutes and checks 15 groups: logs, schedule liveness, pages, the certificate, disk, freshness of backups, business processes and more. It fixes only what is safe and logs it, and records the rest as numbered problems. An outside watcher on another machine reads the summary and writes to Telegram.',
      result: 'The scanner and the watcher have been running since November 18. The watcher also reports when the scanner itself goes silent and sends a daily confirmation that it is alive. I have not counted how many problems were found in that time.',
    },
    es: {
      task: 'En un portal de Bitrix24 con módulos propios los fallos ocurren en silencio: se cuelga un agente, deja de ejecutarse un horario, una tarea queda con un empleado dado de baja. Hacía falta una comprobación sin intervención humana, con problemas numerados y avisos en Telegram.',
      solution: 'Un escáner en PHP se ejecuta desde cron cada 10 minutos y revisa 15 grupos: registros, actividad de los horarios, páginas, certificado, disco, frescura de las copias de seguridad, procesos de negocio y más. Solo corrige lo seguro y lo anota en el registro, y el resto lo guarda como problemas numerados. Un vigilante externo en otra máquina lee el resumen y escribe en Telegram.',
      result: 'El escáner y el vigilante funcionan desde el 18 de noviembre. El vigilante avisa también si el propio escáner calla y envía a diario una confirmación de que sigue vivo. No he contado cuántos problemas se encontraron en ese tiempo.',
    },
  },
};
