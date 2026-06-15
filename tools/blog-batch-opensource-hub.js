// Хаб-страница рубрики «Open-source и свой сервер»: собирает все статьи рубрики,
// группирует по задачам и ссылается на каждую. Контент генерируется при сборке —
// новые статьи рубрики попадают в каталог автоматически.
const BATCHES = ['opensource', 'opensource2', 'opensource3', 'opensource4', 'opensource5',
  'opensource6', 'opensource7', 'opensource8', 'opensource9', 'opensource10', 'opensource11', 'opensource12', 'opensource13', 'opensource14', 'opensource15', 'opensource16', 'opensource17', 'opensource18', 'opensource19', 'opensource20', 'opensource21'];

let items = [];
for (const b of BATCHES) {
  try { items = items.concat(require('./blog-batch-' + b + '.js')); } catch (e) { /* пропуск */ }
}
items = items.filter((a) => a && a.slug && a.category === 'opensource' && a.published !== false);

// Группы каталога (первое совпадение по slug определяет группу)
const GROUPS = [
  { id: 'ai', name: 'AI и нейросети', re: /ollama|flowise|librechat|dify|botpress|moss-tts|moneyprinter|catvton|comfyui|fooocus|hermes-agent|agentic-inbox|chandra|libretranslate/ },
  { id: 'shop', name: 'Магазины и e-commerce', re: /opencart|bagisto|medusa|magazin|invoice|meilisearch/ },
  { id: 'data', name: 'Аналитика и данные', re: /metabase|superset|posthog|umami|nocodb|baserow|supabase|analitik/ },
  { id: 'docs', name: 'Документы и файлы', re: /pdf|paperless|mayan|dokument|cryptpad|immich|oblach|nextcloud|\bsend\b|send-/ },
  { id: 'crm', name: 'CRM, продажи, поддержка', re: /espocrm|twenty|crm|chatwoot|cal-com/ },
  { id: 'team', name: 'Команда и коммуникации', re: /mattermost|matrix|outline|wiki|bookstack|taiga|openproject|jitsi|owncast|messenger/ },
  { id: 'sec', name: 'Безопасность и доступ', re: /pritunl|guacamole|rustdesk|bitwarden|vaultwarden|adguard|vpn|videonablyud|viseron/ },
  { id: 'mkt', name: 'Маркетинг и контент', re: /ghost|listmonk|mautic|postiz|formbricks|typebot/ },
  { id: 'infra', name: 'Инфраструктура и автоматизация', re: /n8n|activepieces|coolify|portainer|home-assistant|xibo|mailserver|tts/ },
  { id: 'other', name: 'Другие решения', re: /.*/ },
];

const firstSentence = (s) => {
  s = String(s || '').trim();
  const m = s.match(/^[^.!?]*[.!?]/);
  let t = (m ? m[0] : s).trim();
  if (t.length > 130) t = t.slice(0, 127).replace(/\s+\S*$/, '') + '…';
  return t;
};
const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const grouped = GROUPS.map((g) => ({ ...g, list: [] }));
for (const a of items) {
  const g = grouped.find((x) => x.re.test(a.slug)) || grouped[grouped.length - 1];
  g.list.push(a);
}
const active = grouped.filter((g) => g.list.length);

const total = items.length;
const tldr = [
  `<div class="blog-tldr"><h3>Коротко (TL;DR)</h3><ul>`,
  `<li>Каталог из ${total}+ бесплатных open-source решений, которые можно развернуть на своём сервере вместо платных облачных сервисов.</li>`,
  `<li>Сгруппированы по задачам: AI, CRM, аналитика, документы, безопасность, магазины, команда, инфраструктура.</li>`,
  `<li>Каждое — это импортозамещение и контроль данных (152-ФЗ), но требует сервера, настройки и поддержки.</li>`,
  `<li>Разворачиваю любое из них под ключ: установка, перенос данных, безопасность, сопровождение.</li>`,
  `</ul></div>`,
].join('\n');

const intro = `<p>Бесплатный open-source софт способен заменить дорогие зарубежные подписки и вернуть данные компании под ваш контроль. Но «скачать с GitHub» — это ещё не рабочая система: нужен сервер, настройка, безопасность, перенос данных и поддержка. Ниже — каталог решений по задачам бизнеса; каждое я разворачиваю под ключ на российском стеке с соблюдением 152-ФЗ.</p>`;

const sections = active.map((g) => {
  const lis = g.list.map((a) => `<li><a href="/blog/${a.slug}/"><strong>${esc(a.title)}</strong></a> — ${esc(firstSentence(a.excerpt || a.metaDescription))}</li>`).join('\n');
  return `<h2 id="${g.id}">${esc(g.name)}</h2>\n<ul>\n${lis}\n</ul>`;
}).join('\n\n');

const faq = `<h2 id="faq">Частые вопросы</h2>
<p><strong>Open-source — это правда бесплатно?</strong> Сам софт да, лицензия бесплатная. Платите вы за то, чтобы он работал: сервер, установка, настройка под ваши процессы, перенос данных, безопасность и поддержка.</p>
<p><strong>Почему не поставить самому по инструкции?</strong> Можно, если есть свой админ. На практике развёртывание «как надо» включает домен и SSL, резервные копии, разграничение доступа и обновления — без этого решение быстро превращается в риск.</p>
<p><strong>Данные точно останутся у нас?</strong> Да, всё разворачивается на вашем сервере (можно на российском хостинге), доступы оформляются на вас. Это и есть главный смысл self-hosted — контроль данных и соответствие 152-ФЗ.</p>`;

const vyvody = `<h2 id="vyvody">Коротко о главном</h2>
<p>Open-source закрывает почти любую бизнес-задачу — от CRM и аналитики до почты, документов и AI — без подписок и с данными у себя. Выберите подходящее решение из каталога выше, а развёртывание, безопасность и поддержку возьму на себя.</p>`;

const contentHtml = [tldr, intro, sections, faq, vyvody].join('\n\n');

const toc = active.map((g) => ({ id: g.id, text: g.name }))
  .concat([{ id: 'faq', text: 'FAQ' }, { id: 'vyvody', text: 'Коротко о главном' }]);

module.exports = [{
  slug: 'katalog-open-source-resheniy-dlya-biznesa-2026',
  category: 'opensource', published: true,
  datePublished: '2026-06-15', dateModified: '2026-06-15', readingMinutes: 8,
  heroIcon: 'ph-fill ph-squares-four',
  title: 'Каталог open-source решений для бизнеса: что развернуть на своём сервере',
  metaTitle: 'Каталог open-source решений для бизнеса 2026',
  metaDescription: 'Каталог бесплатных open-source решений для бизнеса по задачам: CRM, аналитика, документы, почта, безопасность, магазины, AI. Импортозамещение и контроль данных (152-ФЗ). Разворачиваю на вашем сервере под ключ.',
  excerpt: 'Полный каталог open-source решений, которые заменяют дорогие облачные сервисы и возвращают данные под ваш контроль: CRM, аналитика, документы, почта, безопасность, магазины, AI. Сгруппировано по задачам, каждое разворачиваю под ключ.',
  tags: ['open-source', 'каталог', 'self-hosted', 'импортозамещение', '2026'],
  toc,
  servicesOffer: {
    title: 'Что я делаю с open-source',
    services: [
      { icon: 'ph-fill ph-hard-drives', label: 'Развёртывание на вашем сервере' },
      { icon: 'ph-fill ph-arrows-left-right', label: 'Перенос данных из старого сервиса' },
      { icon: 'ph-fill ph-shield-check', label: 'Безопасность и 152-ФЗ' },
      { icon: 'ph-fill ph-wrench', label: 'Настройка под ваши процессы' },
      { icon: 'ph-fill ph-lifebuoy', label: 'Поддержка и обновления' },
    ],
  },
  ctaInternal: { url: 'https://chimitdorzhi.tech/predlozheniya/open-source-pod-klyuch/', label: 'Развернуть open-source под ключ' },
  relatedSlugs: ['n8n-avtomatizaciya-bez-zapier-2026', 'nextcloud-svoy-oblachnyy-disk-2026', 'espocrm-besplatnaya-crm-2026'],
  contentHtml,
}];
