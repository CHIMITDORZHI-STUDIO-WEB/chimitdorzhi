// Кластер «Open-source и свой сервер», часть 4: ещё 2 обзора.
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
  E({ slug: 'matrix-element-korporativnyy-messenger-2026', heroIcon: 'ph-fill ph-lock-key-open',
    title: 'Matrix и Element: защищённый корпоративный мессенджер на своём сервере',
    metaTitle: 'Matrix и Element: защищённый мессенджер на сервере',
    metaDescription: 'Matrix (Synapse) и Element — open-source защищённый корпоративный мессенджер с end-to-end шифрованием и федерацией: каналы, чаты, звонки на своём сервере. Данные у себя, по 152-ФЗ — разверну под ключ.',
    excerpt: 'Matrix с клиентом Element — это корпоративный мессенджер с шифрованием на вашем сервере: общение команды без зависимости от чужих сервисов и с данными у себя. Разбираю, кому это нужно и что требуется для запуска.',
    tags: ['Matrix', 'Element', 'мессенджер', 'open-source'],
    relatedSlugs: ['mattermost-korporativnyy-messenger-2026', 'nextcloud-svoy-oblachnyy-disk-2026', 'jitsi-videokonferencii-bez-zoom-2026'] }),
  E({ slug: 'mealie-recepty-menyu-2026', heroIcon: 'ph-fill ph-cooking-pot',
    title: 'Mealie: управление рецептами и меню на своём сервере',
    metaTitle: 'Mealie: управление рецептами и меню',
    metaDescription: 'Mealie — open-source система управления рецептами и планирования меню: база рецептов, меню на неделю, списки покупок. Для кафе, кейтеринга и кулинарных школ: стандартизация блюд и закупок. Разверну под ключ.',
    excerpt: 'Mealie держит базу рецептов, планы меню и списки закупок на вашем сервере — удобно и дома, и для общепита, где важна стандартизация блюд и расчёт продуктов. Разбираю возможности и запуск.',
    tags: ['Mealie', 'рецепты', 'меню', 'open-source'],
    relatedSlugs: ['inventree-skladskoy-uchet-2026', 'nextcloud-svoy-oblachnyy-disk-2026', 'wiki-js-korporativnaya-wiki-2026'] }),
];
