// SEO-кластер 13: NVIDIA PAIR — ИИ-кластер из уже имеющихся офисных машин (противоположный угол к «что купить»).
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-04';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const AI_OBLAKO = { url: `${S}/predlozheniya/privatnoe-ai-oblako/`, label: 'Собрать приватный ИИ-контур' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 5, servicesOffer: SVC_BIZ }, o, { contentHtml: C(o.slug) });

module.exports = [
  E({ slug: 'ii-klaster-iz-ofisnyh-kompyuterov-2026', category: 'ai-dev', heroIcon: 'ph-fill ph-share-network', ctaInternal: AI_OBLAKO,
    title: 'ИИ-кластер из офисных компьютеров: NVIDIA PAIR объединяет то, что у вас уже есть',
    metaTitle: 'ИИ-кластер из офисных компьютеров: NVIDIA PAIR',
    metaDescription: 'NVIDIA PAIR объединяет офисные компьютеры с RTX, DGX Spark и Mac в локальный ИИ-кластер. Разбираю, что реально ускоряется, а что нет, и кому это выгодно.',
    excerpt: 'NVIDIA выпустила PAIR — утилиту, которая собирает ИИ-кластер из уже стоящих в офисе машин и сама раздаёт им запросы. Разбираю, что за этим стоит, почему обещанные 2,5 раза относятся не к вашему чату, и как я подхожу к такому внедрению.',
    tags: ['NVIDIA PAIR', 'локальный ИИ', 'кластер', 'Ollama', 'ИТ-инфраструктура'],
    toc: [{ id: 'chto-takoe-pair', text: 'Что такое PAIR и что он делает' }, { id: 'chto-uskoryaetsya', text: 'Что реально ускоряется, а что нет' }, { id: 'komu-vygodno', text: 'Кому это выгодно в малом бизнесе' }, { id: 'tri-puti', text: 'Три пути к локальному ИИ' }, { id: 'metodika', text: 'Методика: как я бы это внедрял' }, ...FAQ_VYV],
    relatedSlugs: ['mac-studio-dlya-lokalnogo-ii-2026', 'svoy-ai-server-dlya-biznesa-2027', 'ollama-vs-lm-studio-2026', 'lokalnyy-ii-ne-paranoyya-a-raschet-2026'] }),
];
