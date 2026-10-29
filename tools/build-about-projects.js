// Блок «Проекты» на /about/: свои продукты, избранные работы для клиентов и ссылка на все кейсы.
// Статус берётся из карточки кейса (cases-flagship.js, поле done), число кейсов из блога,
// поэтому блок обновляется при каждой сборке build-blog.js. Плюс JSON-LD ItemList с creator = автор.
const fs = require('fs');
const path = require('path');

const ABOUT = path.join(__dirname, '..', 'about', 'index.html');
const SITE = 'https://chimitdorzhi.tech';
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

function status(item, flagship) {
  const c = item.slug && flagship.find(x => x.slug === item.slug);
  const done = c ? !!c.done : !!item.done;
  return done ? { cls: 'is-live', ru: 'в проде' } : { cls: 'is-built', ru: 'разработано' };
}

function card(item, flagship, withProduct) {
  const st = status(item, flagship);
  const caseLink = item.slug ? `<a href="/blog/${item.slug}/">Разбор</a>` : '';
  const prodLink = withProduct && item.url ? `<a href="${item.url}" target="_blank" rel="noopener">Открыть<span class="ap-sr"> (откроется в новой вкладке)</span></a>` : '';
  return `<article class="about-card ap-card">
                            <div class="ap-top"><i class="ph-fill ${item.icon}" aria-hidden="true"></i><span class="ap-status ${st.cls}">${st.ru}</span></div>
                            <h3 class="ap-name">${esc(item.name)}</h3>
                            <p class="ap-text">${esc(item.text)}</p>
                            <p class="ap-links">${[prodLink, caseLink].filter(Boolean).join('')}</p>
                        </article>`;
}

function blockHtml(flagship, casesCount) {
  const rest = Math.max(0, casesCount - CLIENT_WORKS.length);
  const restRound = rest >= 100 ? `${Math.floor(rest / 10) * 10}+` : String(rest);
  return `<!-- projects:start (генерирует tools/build-about-projects.js, руками не править) -->
                <section class="about-section ap" id="proekty" aria-labelledby="ap-title">
                    <h2 id="ap-title">Проекты</h2>
                    <h3 class="ap-sub">Мои продукты</h3>
                    <div class="about-grid ap-grid">
                        ${PRODUCTS.map(p => card(p, flagship, true)).join('\n                        ')}
                    </div>
                    <h3 class="ap-sub">Работы для клиентов</h3>
                    <div class="about-grid ap-grid">
                        ${CLIENT_WORKS.map(p => card(p, flagship, false)).join('\n                        ')}
                    </div>
                    <p class="ap-more"><a href="/cases/">Ещё ${restRound} проектов: сайты, боты, CRM, ИИ-решения. Смотреть все кейсы</a></p>
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

module.exports = { applyAbout };

if (require.main === module) {
  const published = require('./blog-data.js').filter(a => a.published !== false);
  applyAbout(published);
  console.log('about: блок «Проекты» обновлён');
}
