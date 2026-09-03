// SEO-кластер 12: passkeys и WebAuthn — вход без пароля (ниша не занята, смежный пиллар — гид по 2FA).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-03';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const CYBERSEC = { url: `${S}/services/cybersecurity/`, label: 'Укрепить вход в личный кабинет' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 5, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'passkeys-vhod-bez-parolya-2026', category: 'security', heroIcon: 'ph-fill ph-lock-key', ctaInternal: CYBERSEC,
    title: 'Passkeys и WebAuthn: вход на сайт без пароля — как работает и стоит ли внедрять',
    metaTitle: 'Passkeys и WebAuthn: вход на сайт без пароля',
    metaDescription: 'Passkeys и стандарт WebAuthn: как работает вход по отпечатку, Face ID или PIN без пароля, чем отличается от 2FA, кому из бизнеса нужен и как его внедрять.',
    excerpt: 'Passkey убирает не второй шаг входа, а сам пароль: закрытый ключ остаётся на устройстве, а на сервере больше нет базы паролей, которую можно украсть. Разбираю механику стандарта WebAuthn, честные ограничения и порядок, в котором я внедряю такой вход.',
    tags: ['passkeys', 'WebAuthn', 'аутентификация', 'кибербезопасность', 'личный кабинет'],
    toc: [{ id: 'chto-takoe', text: 'Что такое passkey и WebAuthn' }, { id: 'otlichie', text: 'Чем отличается от пароля и 2FA' }, { id: 'komu-nuzhno', text: 'Кому из бизнеса это нужно' }, { id: 'ogranicheniya', text: 'Честные ограничения' }, { id: 'metodika', text: 'Как я внедряю passkeys' }, ...FAQ_VYV],
    relatedSlugs: ['dvuhfaktornaya-autentifikaciya-gid-2026', 'menedzher-paroley-vazhnee-antivirusa-2026', 'kak-obnaruzhit-fishing-2026', 'chek-list-bezopasnosti-sayta-47-punktov'] }),
];
