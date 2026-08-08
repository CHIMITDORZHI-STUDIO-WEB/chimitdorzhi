// Батч opensource #27: 2 короткие статьи (4 мин) без конкурента в блоге.
// HumHub (корп. портал/интранет), FreePBX/Asterisk (виртуальная АТС).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-07-31';
const toc = (...p) => p.map(([id, text]) => ({ id, text }));

const SVC_OS = {
  title: 'Что я делаю с open-source',
  services: [
    { icon: 'ph-fill ph-package', label: 'Разворачиваю на вашем сервере' },
    { icon: 'ph-fill ph-gear', label: 'Настройка под ваши процессы' },
    { icon: 'ph-fill ph-plugs-connected', label: 'Интеграция с вашими системами' },
    { icon: 'ph-fill ph-headset', label: 'Поддержка и обновления' },
  ],
  ctaLabel: 'Обсудить внедрение', ctaUrl: 'https://t.me/chimitdorzhi',
};

const OS_TOC = toc(
  ['chto-eto', 'Что это и что заменяет'],
  ['vozmozhnosti', 'Что умеет'],
  ['komu-podhodit', 'Кому подходит'],
  ['chto-nuzhno', 'Что нужно и сколько стоит'],
  ['faq', 'Частые вопросы'],
  ['vyvody', 'Коротко о главном'],
);

const CTA = { url: 'https://chimitdorzhi.tech/predlozheniya/open-source-pod-klyuch/', label: 'Развернуть под ключ' };

const mk = (o) => Object.assign({
  category: 'opensource', published: true, datePublished: D, dateModified: D,
  readingMinutes: 4, shortForm: true, toc: OS_TOC, servicesOffer: SVC_OS, ctaInternal: CTA,
}, o, { contentHtml: C(o.slug) });

module.exports = [
  mk({
    slug: 'humhub-korporativnyy-portal-2026',
    heroIcon: 'ph-fill ph-users-three',
    title: 'HumHub: корпоративный портал и интранет на своём сервере',
    metaTitle: 'HumHub: корпоративный портал и интранет',
    metaDescription: 'HumHub — открытый корпоративный портал: лента, группы, база знаний, задачи, профили сотрудников — на своём сервере и без лицензий.',
    metaKeywords: 'humhub, корпоративный портал, интранет, портал для сотрудников, соцсеть компании, база знаний компании, внутренний портал',
    excerpt: 'Когда компания растёт, общение расползается по чатам, файлы теряются, новичок неделю ищет, у кого что спросить. Корпоративный портал собирает это в одном месте. Разбираю, что даёт HumHub, кому он нужен и во сколько обходится.',
    tags: ['HumHub', 'портал', 'интранет', 'open-source', '2026'],
    relatedSlugs: ['wiki-js-korporativnaya-wiki-2026', 'kiberbezopasnost-udalennoy-komandy-2026', 'importozameshchenie-po-2026'],
  }),
  mk({
    slug: 'freepbx-asterisk-virtualnaya-ats-2026',
    heroIcon: 'ph-fill ph-phone-call',
    title: 'FreePBX и Asterisk: своя виртуальная АТС для бизнеса',
    metaTitle: 'FreePBX и Asterisk: своя виртуальная АТС',
    metaDescription: 'FreePBX на базе Asterisk — своя виртуальная АТС: многоканальный номер, голосовое меню, запись звонков, распределение и статистика.',
    metaKeywords: 'freepbx, asterisk, виртуальная атс, ip-телефония для бизнеса, своя атс, голосовое меню ivr, запись звонков, облачная атс',
    excerpt: 'Звонки клиентов теряются, кто сколько говорил — непонятно, а за каждый номер и сотрудника оператор берёт абонплату. Своя виртуальная АТС на FreePBX решает это. Разбираю, что она умеет, кому нужна и что нужно для запуска.',
    tags: ['FreePBX', 'Asterisk', 'АТС', 'телефония', '2026'],
    relatedSlugs: ['udalenniy-ofis-vpn-telefoniya', 'golosovoy-robot-obzvon-2026', 'crm-dlya-malogo-biznesa-2026'],
  }),
];
