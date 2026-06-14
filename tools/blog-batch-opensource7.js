// Кластер «Open-source и свой сервер», часть 7: импортозамещение (3 обзора).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-06-15';
const TOC = [
  { id: 'chto-eto', text: 'Что это и что заменяет' },
  { id: 'vozmozhnosti', text: 'Что умеет' },
  { id: 'komu-podhodit', text: 'Кому подходит' },
  { id: 'chto-nuzhno', text: 'Что нужно для запуска' },
  { id: 'kak-vnedrit', text: 'Как внедрить под ключ' },
  { id: 'faq', text: 'FAQ' },
  { id: 'vyvody', text: 'Коротко о главном' },
];
const SVC = {
  title: 'Что я делаю с open-source',
  services: [
    { icon: 'ph-fill ph-hard-drives', label: 'Развёртывание на вашем сервере' },
    { icon: 'ph-fill ph-arrows-left-right', label: 'Перенос данных из старого сервиса' },
    { icon: 'ph-fill ph-shield-check', label: 'Безопасность и 152-ФЗ' },
    { icon: 'ph-fill ph-wrench', label: 'Настройка под ваши процессы' },
    { icon: 'ph-fill ph-lifebuoy', label: 'Поддержка и обновления' },
  ],
};
const CTA = { url: 'https://chimitdorzhi.tech/predlozheniya/open-source-pod-klyuch/', label: 'Развернуть open-source под ключ' };
const E = (o) => Object.assign({
  category: 'opensource', published: true, datePublished: D, dateModified: D, readingMinutes: 9,
  servicesOffer: SVC, toc: TOC, ctaInternal: CTA,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'rustdesk-udalennyy-dostup-2026', heroIcon: 'ph-fill ph-desktop',
    title: 'RustDesk: удалённый доступ на своём сервере вместо TeamViewer',
    metaTitle: 'RustDesk: удалённый доступ вместо TeamViewer',
    metaDescription: 'RustDesk — open-source аналог TeamViewer/AnyDesk: удалённый доступ к компьютерам со своим сервером. Импортозамещение (TeamViewer/AnyDesk в РФ ограничены), трафик и данные у себя по 152-ФЗ — разверну под ключ.',
    excerpt: 'RustDesk даёт удалённый доступ к компьютерам, как TeamViewer, но с собственным сервером — без зависимости от чужой инфраструктуры. Актуально для импортозамещения. Разбираю, кому подходит и что нужно.',
    tags: ['RustDesk', 'удалённый доступ', 'TeamViewer', 'импортозамещение'],
    relatedSlugs: ['send-bezopasnaya-peredacha-faylov-2026', 'nextcloud-svoy-oblachnyy-disk-2026', 'matrix-element-korporativnyy-messenger-2026'] }),
  E({ slug: 'paperless-ngx-arhiv-dokumentov-2026', heroIcon: 'ph-fill ph-files',
    title: 'Paperless-ngx: электронный архив документов с OCR на своём сервере',
    metaTitle: 'Paperless-ngx: электронный архив документов с OCR',
    metaDescription: 'Paperless-ngx — open-source электронный архив документов: сканируете и загружаете, система распознаёт текст (OCR) и ищет по содержимому. Документооборот на своём сервере, данные у себя по 152-ФЗ — разверну под ключ.',
    excerpt: 'Paperless-ngx превращает бумажные и PDF-документы в искомый электронный архив: OCR, теги, поиск по содержимому. Для бухгалтерии, юристов и офисов. Разбираю возможности и запуск.',
    tags: ['Paperless-ngx', 'документооборот', 'OCR', 'open-source'],
    relatedSlugs: ['nextcloud-svoy-oblachnyy-disk-2026', 'cryptpad-privatnyy-ofis-2026', 'wiki-js-korporativnaya-wiki-2026'] }),
  E({ slug: 'send-bezopasnaya-peredacha-faylov-2026', heroIcon: 'ph-fill ph-paper-plane-tilt',
    title: 'Send: безопасная передача файлов на своём сервере вместо WeTransfer',
    metaTitle: 'Send: безопасная передача файлов на сервере',
    metaDescription: 'Send (форк Firefox Send) — open-source сервер безопасной передачи файлов: end-to-end шифрование, авто-удаление после скачивания или по сроку. Импортозамещение WeTransfer, данные у себя по 152-ФЗ — разверну под ключ.',
    excerpt: 'Send позволяет безопасно отправлять файлы клиентам по ссылке: всё шифруется, а файл удаляется после скачивания или по таймеру. Своя замена WeTransfer на вашем сервере. Разбираю, кому нужно и что требуется.',
    tags: ['Send', 'передача файлов', 'шифрование', 'open-source'],
    relatedSlugs: ['rustdesk-udalennyy-dostup-2026', 'nextcloud-svoy-oblachnyy-disk-2026', 'cryptpad-privatnyy-ofis-2026'] }),
];
