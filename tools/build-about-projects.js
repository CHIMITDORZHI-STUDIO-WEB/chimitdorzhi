// Блок «Проекты» на /about/: свои продукты, избранные работы для клиентов и ссылка на все кейсы.
// Статус берётся из карточки кейса (cases-flagship.js, поле done), число кейсов из блога,
// поэтому блок обновляется при каждой сборке build-blog.js. Плюс JSON-LD ItemList с creator = автор.
const fs = require('fs');
const path = require('path');

const ABOUT = path.join(__dirname, '..', 'about', 'index.html');
const SITE = 'https://chimitdorzhi.tech';
const R = require('./about-i18n-reg.js');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Свои продукты: ссылка на продукт и на разбор. Статус берётся из флагманской карточки по slug.
const PRODUCTS = [
  { name: 'НЮТАГ', icon: 'ph-map-trifold', text: 'Онлайн-симулятор жизни села на настоящей 3D-карте, вход через MAX и Telegram', url: 'https://nutag.chimitdorzhi.space/', slug: 'nyutag-simulyator-zhizni-sela-keys-2026', kind: 'VideoGame' },
  { name: 'Kinly', icon: 'ph-house-line', text: 'Семейный ИИ-ассистент: дела, покупки и напоминания из голоса и фото в Telegram и MAX', url: 'https://kinly.chimitdorzhi.space/', slug: 'kinly-semeynyy-assistent-telegram-max-keys-2026', kind: 'SoftwareApplication' },
  { name: 'Ферзь', icon: 'ph-crown', text: 'Рабочее место руководителя без штатных юриста и кадровика: документы, поручения, контроль', url: 'https://ferz.chimitdorzhi.space/', slug: 'ferz-rabochee-mesto-rukovoditelya-saas-keys-2026', kind: 'SoftwareApplication' },
  { name: 'SPACE', icon: 'ph-squares-four', text: 'Платформа готовых решений для микробизнеса с входом через Telegram', url: 'https://chimitdorzhi.space/', slug: 'space-platforma-gotovyh-resheniy-keys-2026', kind: 'SoftwareApplication' },
  { name: 'Аудит 152-ФЗ', icon: 'ph-seal-check', text: 'Проверка сайта на соответствие закону о персональных данных, с доказательствами', url: 'https://audit.chimitdorzhi.tech/', slug: 'audit-sayta-po-152-fz-dokazatelstva-keys-2026', kind: 'WebApplication' },
  { name: 'Вселенная Бурят', icon: 'ph-globe-hemisphere-east', text: 'Культурный портал о бурятском народе: история, язык, расселение', url: `${SITE}/universe_buryat/`, slug: null, done: true, kind: 'WebSite' },
];

// Избранные работы для клиентов: только ссылка на разбор, без имён клиентов.
const CLIENT_WORKS = [
  { name: 'Своя система такси для таксопарка', icon: 'ph-taxi', text: 'Заказ в Telegram и MAX, диспетчерская и приложение водителя, на линии живые водители', slug: 'taksi-rayona-bot-pwa-predlozhenie-keys-2026' },
  { name: 'Сайт, боты и админка для национального театра', icon: 'ph-microphone-stage', text: 'Афиша, билеты, каналы в MAX и Telegram, публикация из админки', slug: 'amarsain-sayt-teatra-keys-2026' },
  { name: 'Учёт для бухгалтерской фирмы в Дубае', icon: 'ph-receipt', text: 'Бот, мини-приложение и PWA: инвойсы, распознавание чеков, НДС, три языка', slug: 'uchet-dlya-buhfirmy-v-dubae-bot-pwa-keys-2026' },
];


// Переводы карточек: [имя EN, текст EN, имя CN, текст CN, имя MN, текст MN].
const I18N = {
  "НЮТАГ": [
    "NUTAG",
    "Online life simulator of a real village on a 3D map, login via MAX and Telegram",
    "NUTAG",
    "在真实村庄3D地图上的在线生活模拟游戏，可通过 MAX 和 Telegram 登录",
    "НЮТАГ",
    "Жинхэнэ тосгоны 3D газрын зураг дээрх онлайн амьдралын симулятор, MAX болон Telegram-аар нэвтэрнэ"
  ],
  "Kinly": [
    "Kinly",
    "Family AI assistant: tasks, shopping and reminders from voice and photos in Telegram and MAX",
    "Kinly",
    "家庭AI助手：通过语音和照片在 Telegram 和 MAX 中管理事务、购物和提醒",
    "Kinly",
    "Гэр бүлийн хиймэл оюун туслах: дуу хоолой, зурагнаас ажил, худалдан авалт, сануулга Telegram ба MAX-д"
  ],
  "Ферзь": [
    "Ferz",
    "A manager's workspace without an in-house lawyer or HR: documents, assignments, control",
    "Ferz",
    "无需专职律师和人事的管理者工作台：文件、任务、监督",
    "Ферзь",
    "Хуульч, хүний нөөцийн ажилтангүй удирдагчийн ажлын орчин: баримт бичиг, үүрэг даалгавар, хяналт"
  ],
  "SPACE": [
    "SPACE",
    "Platform of ready-made solutions for micro-businesses with Telegram login",
    "SPACE",
    "面向微型企业的现成解决方案平台，支持 Telegram 登录",
    "SPACE",
    "Бичил бизнест зориулсан бэлэн шийдлийн платформ, Telegram-аар нэвтэрнэ"
  ],
  "Аудит 152-ФЗ": [
    "Data compliance audit",
    "Website personal data compliance check",
    "数据合规审计",
    "网站个人数据合规检查",
    "Өгөгдлийн аудит",
    "Вэб сайтын хувийн мэдээллийн нийцлийн шалгалт"
  ],
  "Вселенная Бурят": [
    "Buryat Universe",
    "Cultural portal about the Buryat people: history, language, settlement",
    "布里亚特宇宙",
    "关于布里亚特民族的文化门户：历史、语言、分布",
    "Буриадын ертөнц",
    "Буриад үндэстний соёлын портал: түүх, хэл, суурьшил"
  ],
  "Своя система такси для таксопарка": [
    "Own taxi dispatch system for a taxi fleet",
    "Ordering in Telegram and MAX, dispatcher console and driver app, live drivers on the line",
    "为出租车车队打造的自有调度系统",
    "Telegram 和 MAX 下单、调度台和司机应用，已有真实司机在线接单",
    "Таксины паркт зориулсан өөрийн захиалгын систем",
    "Telegram ба MAX-аар захиалга, диспетчерийн самбар, жолоочийн апп, бодит жолооч нар ажиллаж байна"
  ],
  "Сайт, боты и админка для национального театра": [
    "Website, bots and admin panel for a national theater",
    "Event listings, tickets, MAX and Telegram channels, publishing from the admin panel",
    "为国家剧院打造的网站、机器人和后台",
    "演出信息、票务、MAX 和 Telegram 频道，后台一键发布",
    "Үндэсний театрт зориулсан вэб сайт, бот, админ самбар",
    "Тоглолтын хуваарь, тасалбар, MAX ба Telegram суваг, админаас нийтлэх"
  ],
  "Учёт для бухгалтерской фирмы в Дубае": [
    "Accounting for a bookkeeping firm in Dubai",
    "Bot, mini app and PWA: invoices, receipt recognition, VAT, three languages",
    "为迪拜会计事务所打造的记账系统",
    "机器人、小程序和 PWA：发票、票据识别、增值税、三种语言",
    "Дубай дахь нягтлан бодох бүртгэлийн компанид зориулсан бүртгэл",
    "Бот, мини апп, PWA: нэхэмжлэх, баримт таних, НӨАТ, гурван хэл"
  ]
};
// Карточки, которые на иностранных языках не показываем (российское право).
const RU_ONLY = new Set(['Аудит 152-ФЗ']);
const kid = (name) => Buffer.from(name).toString('hex').slice(0, 24);

function status(item, flagship) {
  const c = item.slug && flagship.find(x => x.slug === item.slug);
  const done = c ? !!c.done : !!item.done;
  return done ? { cls: 'is-live', k: 'live', ru: 'в проде', en: 'live', cn: '已上线', mn: 'ажиллаж байна' } : { cls: 'is-built', k: 'built', ru: 'разработано', en: 'built', cn: '已开发', mn: 'хөгжүүлсэн' };
}

function card(item, flagship, withProduct) {
  const st = status(item, flagship);
  const caseLink = item.slug ? `<a href="/blog/${item.slug}/" ${R.t('ap.case', 'Разбор', 'Case study', '案例', 'Тайлбар')}>Разбор</a>` : '';
  const prodLink = withProduct && item.url ? `<a href="${item.url}" target="_blank" rel="noopener"><span ${R.t('ap.open', 'Открыть', 'Open', '打开', 'Нээх')}>Открыть</span><span class="ap-sr" ${R.t('ap.newtab', ' (откроется в новой вкладке)', ' (opens in a new tab)', '（在新标签页中打开）', ' (шинэ цонхонд нээгдэнэ)')}> (откроется в новой вкладке)</span></a>` : '';
  const tr = I18N[item.name] || [item.name, item.text, item.name, item.text, item.name, item.text];
  const k = kid(item.name);
  return `<article class="about-card ap-card${RU_ONLY.has(item.name) ? ' ru-only' : ''}">
                            <div class="ap-top"><i class="ph-fill ${item.icon}" aria-hidden="true"></i><span class="ap-status ${st.cls}" ${R.t('ap.st.' + st.k, st.ru, st.en, st.cn, st.mn)}>${st.ru}</span></div>
                            <h3 class="ap-name" ${R.t('ap.n.' + k, esc(item.name), esc(tr[0]), esc(tr[2]), esc(tr[4]))}>${esc(item.name)}</h3>
                            <p class="ap-text" ${R.t('ap.t.' + k, esc(item.text), esc(tr[1]), esc(tr[3]), esc(tr[5]))}>${esc(item.text)}</p>
                            <p class="ap-links">${[prodLink, caseLink].filter(Boolean).join('')}</p>
                        </article>`;
}

function blockHtml(flagship, casesCount) {
  const rest = Math.max(0, casesCount - CLIENT_WORKS.length);
  const restRound = rest >= 100 ? `${Math.floor(rest / 10) * 10}+` : String(rest);
  return `<!-- projects:start (генерирует tools/build-about-projects.js, руками не править) -->
                <section class="about-section ap" id="proekty" aria-labelledby="ap-title">
                    <h2 id="ap-title" ${R.t('ap.title', 'Проекты', 'Projects', '项目', 'Төслүүд')}>Проекты</h2>
                    <h3 class="ap-sub" ${R.t('ap.own', 'Мои продукты', 'My products', '我的产品', 'Миний бүтээгдэхүүн')}>Мои продукты</h3>
                    <div class="about-grid ap-grid">
                        ${PRODUCTS.map(p => card(p, flagship, true)).join('\n                        ')}
                    </div>
                    <h3 class="ap-sub" ${R.t('ap.clients', 'Работы для клиентов', 'Client work', '客户项目', 'Харилцагчдад хийсэн ажил')}>Работы для клиентов</h3>
                    <div class="about-grid ap-grid">
                        ${CLIENT_WORKS.map(p => card(p, flagship, false)).join('\n                        ')}
                    </div>
                    <p class="ap-more"><a href="/cases/" ${R.t('ap.more', `Ещё ${restRound} проектов: сайты, боты, CRM, ИИ-решения. Смотреть все кейсы`, `${restRound} more projects: websites, bots, CRM, AI solutions. See all case studies`, `还有 ${restRound} 个项目：网站、机器人、CRM、AI 解决方案。查看全部案例`, `Өөр ${restRound} төсөл: вэб сайт, бот, CRM, хиймэл оюуны шийдэл. Бүх кейсийг харах`)}>Ещё ${restRound} проектов: сайты, боты, CRM, ИИ-решения. Смотреть все кейсы</a></p>
                </section>
                <!-- projects:end -->`;
}

function ldHtml(flagship) {
  const items = PRODUCTS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': p.kind,
      name: p.name,
      description: p.text,
      url: p.url,
      ...(p.kind === 'SoftwareApplication' || p.kind === 'WebApplication' ? { applicationCategory: 'BusinessApplication', operatingSystem: 'Web' } : {}),
      creator: { '@id': `${SITE}/#person` },
      ...(p.slug ? { subjectOf: { '@type': 'Article', url: `${SITE}/blog/${p.slug}/` } } : {}),
    },
  }));
  const ld = { '@context': 'https://schema.org', '@type': 'ItemList', name: 'Продукты Чимитдоржи Дарижапова', itemListElement: items };
  return `<!-- projects-ld:start --><script type="application/ld+json">\n${JSON.stringify(ld, null, 2)}\n    </script><!-- projects-ld:end -->`;
}

function applyAbout(published) {
  if (!fs.existsSync(ABOUT)) return;
  const flagship = require('./cases-flagship.js');
  const casesCount = (published || []).filter(a => a.category === 'cases' && a.published !== false).length;
  let html = fs.readFileSync(ABOUT, 'utf8');
  const block = blockHtml(flagship, casesCount);
  if (html.includes('<!-- projects:start')) {
    html = html.replace(/<!-- projects:start[\s\S]*?<!-- projects:end -->/, () => block);
  } else {
    const re = /<div class="about-section">\s*<h2>Проекты<\/h2>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
    if (!re.test(html)) throw new Error('about: старый блок «Проекты» не найден');
    html = html.replace(re, () => block);
  }
  const ld = ldHtml(flagship);
  if (html.includes('<!-- projects-ld:start')) html = html.replace(/<!-- projects-ld:start[\s\S]*?<!-- projects-ld:end -->/, () => ld);
  else html = html.replace('</head>', () => `    ${ld}\n</head>`);
  fs.writeFileSync(ABOUT, html);
}

// Строка для раздела «Об авторе» в llms.txt: продукты автора со ссылками.
function llmsProducts() {
  return `- Продукты автора: ${PRODUCTS.map(p => `${p.name} (${p.url}): ${p.text.charAt(0).toLowerCase()}${p.text.slice(1)}`).join('; ')}.`;
}

module.exports = { applyAbout, llmsProducts };

if (require.main === module) {
  const published = require('./blog-data.js').filter(a => a.published !== false);
  applyAbout(published);
  console.log('about: блок «Проекты» обновлён');
}
