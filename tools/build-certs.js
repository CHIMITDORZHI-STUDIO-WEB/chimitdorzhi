// Блоки квалификации НСОК: /about/ (#kvalifikaciya + JSON-LD + FAQ), строка доверия /cases/,
// значки по стеку в кейсах, абзац фактов для llms.txt. Данные: tools/certs-nsok.js.
// Вызывается из build-blog.js; можно запустить отдельно: node tools/build-certs.js
const fs = require('fs');
const path = require('path');
const N = require('./certs-nsok.js');
const R = require('./about-i18n-reg.js');

const ROOT = path.join(__dirname, '..');
const ABOUT = path.join(ROOT, 'about', 'index.html');
const SITE = 'https://chimitdorzhi.tech';
const ANCHOR = '/about/#kvalifikaciya';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function counts(list) {
  const adv = list.filter(c => c.level === 'adv').length;
  return { total: list.length, adv, mid: list.length - adv };
}

// «14 ИТ-компетенций: 13 на продвинутом уровне и 1 на среднем»
function summaryRu(list) {
  const { total, adv, mid } = counts(list);
  const tail = mid ? `, ${mid} на среднем` : '';
  return `${total} ИТ-компетенций (${adv} на продвинутом уровне${tail})`;
}

function levelBars(level) {
  const on = level === 'adv' ? 3 : 2;
  return `<span class="nsok-bars" aria-hidden="true">${[1, 2, 3].map(i => `<i class="${i <= on ? 'on' : ''}"></i>`).join('')}</span>`;
}

// Переводы названий сертификатов и групп (EN, CN, MN). Технические названия не переводятся.
const NAME_I18N = {
  'ООП': ['OOP', '面向对象编程', 'ООП'],
  'Алгоритмы и структуры данных': ['Algorithms and data structures', '算法与数据结构', 'Алгоритм ба өгөгдлийн бүтэц'],
  'Функциональное тестирование': ['Functional testing', '功能测试', 'Функциональ тест'],
  'Регрессионное тестирование': ['Regression testing', '回归测试', 'Регрессийн тест'],
  'Машинное обучение': ['Machine learning', '机器学习', 'Машин сургалт'],
  'Математическая статистика': ['Mathematical statistics', '数理统计', 'Математик статистик'],
};
const GROUP_I18N = {
  dev: ['Development', '开发', 'Хөгжүүлэлт'],
  infra: ['Infrastructure and data', '基础设施与数据', 'Дэд бүтэц ба өгөгдөл'],
  qa: ['Quality and testing', '质量与测试', 'Чанар ба тест'],
  ai: ['Data and AI', '数据与人工智能', 'Өгөгдөл ба хиймэл оюун'],
};
const LVL_I18N = { adv: ['продвинутый', 'advanced', '高级', 'ахисан'], mid: ['средний', 'intermediate', '中级', 'дунд'] };
const nameI18n = (n) => NAME_I18N[n] || [n, n, n];

function aboutBlockHtml() {
  const list = N.active();
  if (!list.length) return '';
  const { total, adv, mid } = counts(list);
  const until = N.fmtDate(N.latestUntil(list));
  const groups = N.GROUPS.map(g => {
    const items = list.filter(c => c.group === g.k);
    if (!items.length) return '';
    const chips = items.map(c => {
      const [en, cn, mn] = nameI18n(c.name);
      const L = LVL_I18N[c.level];
      return `<li><button type="button" class="nsok-chip" data-nsok="${c.id}" aria-haspopup="dialog" aria-label="${esc(c.name)}, ${N.LEVEL[c.level]}: открыть сертификат">${levelBars(c.level)}<span class="nsok-chip-name" ${R.t('cert.' + c.id, esc(c.name), esc(en), esc(cn), esc(mn))}>${esc(c.name)}</span><span class="nsok-chip-lvl" ${R.t('lvl.' + c.id, L[0], L[1], L[2], L[3])}>${L[0]}</span></button></li>`;
    }).join('');
    const [gen, gcn, gmn] = GROUP_I18N[g.k] || [g.en, g.en, g.en];
    return `<div class="nsok-group"><h3 class="nsok-group-title"><i class="ph-fill ${g.icon}" aria-hidden="true"></i><span ${R.t('grp.' + g.k, esc(g.ru), gen, gcn, gmn)}>${esc(g.ru)}</span></h3><ul class="nsok-chips">${chips}</ul></div>`;
  }).join('');
  const midEn = mid ? `, ${mid} intermediate` : '';
  const midCn = mid ? `，${mid}项为中级` : '';
  const midMn = mid ? `, ${mid} нь дунд түвшинд` : '';
  const defRu = `Чимитдоржи Дарижапов подтвердил ${summaryRu(list)} в ${esc(N.ISSUER_IN)} (оператор: ${esc(N.OPERATOR)}). Это JavaScript, HTML, CSS, API, ООП, алгоритмы, Docker, Linux, Git, PostgreSQL, тестирование, машинное обучение и математическая статистика. Сертификаты по теории действуют до ${until}, каждый можно открыть и скачать в оригинале.`;
  const defEn = `Chimitdorzhi Darizhapov has confirmed ${total} IT competencies (${adv} at advanced level${midEn}) in Russia's National IT Competency Assessment System. They cover JavaScript, HTML, CSS, APIs, OOP, algorithms, Docker, Linux, Git, PostgreSQL, software testing, machine learning and mathematical statistics. The theory certificates are valid until ${until}; each one can be opened and downloaded in the original.`;
  const defCn = `Chimitdorzhi Darizhapov 在俄罗斯国家IT能力评估体系中获得 ${total} 项IT能力认证（其中 ${adv} 项为高级${midCn}），涵盖 JavaScript、HTML、CSS、API、面向对象编程、算法、Docker、Linux、Git、PostgreSQL、软件测试、机器学习和数理统计。理论证书有效期至 ${until}，每份均可查看并下载原件。`;
  const defMn = `Чимитдоржи Дарижапов ОХУ-ын Мэдээллийн технологийн ур чадварын үндэсний үнэлгээний системд ${total} ур чадвараа баталгаажуулсан (${adv} нь ахисан түвшинд${midMn}). Үүнд JavaScript, HTML, CSS, API, ООП, алгоритм, Docker, Linux, Git, PostgreSQL, програм хангамжийн тест, машин сургалт, математик статистик багтана. Онолын гэрчилгээнүүд ${until} хүртэл хүчинтэй, тус бүрийг нээж эх хувийг татаж авах боломжтой.`;
  const data = JSON.stringify(Object.fromEntries(list.map(c => { const [en, cn, mn] = nameI18n(c.name); return [c.id, { n: { ru: c.name, en, cn, mn }, lv: c.level, u: N.fmtDate(c.until) }]; })));
  return `<!-- certs:start (генерирует tools/build-certs.js, руками не править) -->
                <section class="about-section nsok" id="kvalifikaciya" aria-labelledby="nsok-title">
                    <h2 id="nsok-title" ${R.t('nsok.title', 'Квалификация', 'Qualifications', '资质认证', 'Мэргэшил')}>Квалификация</h2>
                    <div class="nsok-lead">
                        <p class="nsok-num"><strong>${list.length}</strong><span ${R.t('nsok.num', 'сертификатов', 'certificates', '项证书', 'гэрчилгээ')}>сертификатов</span></p>
                        <p class="nsok-def" ${R.t('nsok.def', defRu, defEn, defCn, defMn)}>${defRu}</p>
                    </div>
                    ${groups}
                    <dialog class="nsok-dialog" id="nsok-dialog" aria-labelledby="nsok-dialog-title">
                        <div class="nsok-dialog-head"><h3 id="nsok-dialog-title"></h3><button type="button" class="nsok-close" aria-label="Закрыть"><i class="ph ph-x" aria-hidden="true"></i></button></div>
                        <p class="nsok-dialog-meta"></p>
                        <img class="nsok-dialog-img" alt="" width="900" height="1305" loading="lazy" decoding="async">
                        <a class="nsok-dialog-pdf" href="#" download><i class="ph ph-file-pdf" aria-hidden="true"></i><span ${R.t('nsok.pdf', 'Скачать PDF', 'Download PDF', '下载 PDF', 'PDF татах')}>Скачать PDF</span></a>
                    </dialog>
                    <script>
                    (function () {
                      var D = ${data}, dlg = document.getElementById('nsok-dialog');
                      var W = { ru: { adv: 'продвинутый уровень', mid: 'средний уровень', till: 'действует до', alt: 'Сертификат' }, en: { adv: 'advanced level', mid: 'intermediate level', till: 'valid until', alt: 'Certificate' }, cn: { adv: '高级', mid: '中级', till: '有效期至', alt: '证书' }, mn: { adv: 'ахисан түвшин', mid: 'дунд түвшин', till: 'хүчинтэй хугацаа', alt: 'Гэрчилгээ' } };
                      if (!dlg || typeof dlg.showModal !== 'function') return;
                      var t = dlg.querySelector('h3'), m = dlg.querySelector('.nsok-dialog-meta'), img = dlg.querySelector('img'), a = dlg.querySelector('.nsok-dialog-pdf'), last = null;
                      document.querySelectorAll('.nsok-chip[data-nsok]').forEach(function (b) {
                        b.addEventListener('click', function () {
                          var id = b.getAttribute('data-nsok'), c = D[id]; if (!c) return; last = b;
                          var lang = document.documentElement.getAttribute('data-lang') || 'ru', w = W[lang] || W.en, name = c.n[lang] || c.n.en;
                          t.textContent = name; m.textContent = w[c.lv] + ', ' + w.till + ' ' + c.u;
                          img.src = '/assets/certs/nsok/' + id + '.webp'; img.alt = w.alt + ': ' + name + ', ' + w[c.lv];
                          a.href = '/assets/certs/nsok/' + id + '.pdf'; dlg.showModal();
                        });
                      });
                      dlg.querySelector('.nsok-close').addEventListener('click', function () { dlg.close(); });
                      dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
                      dlg.addEventListener('close', function () { if (last) last.focus(); });
                    })();
                    </script>
                </section>
                <!-- certs:end -->`;
}

// Строка доверия под заголовком /cases/ (L — трёхъязычный помощник страницы кейсов).
function casesStripHtml(L) {
  const list = N.active();
  if (!list.length) return '';
  const { total, adv } = counts(list);
  return `<p class="nsok-strip"><i class="ph-fill ph-seal-check" aria-hidden="true"></i><span>${L(
    `Навыки подтверждены: ${total} сертификатов Национальной системы оценки ИТ-компетенций, ${adv} на продвинутом уровне.`,
    `Skills verified: ${total} certificates of Russia's National IT Competency Assessment System, ${adv} at advanced level.`,
    `Habilidades verificadas: ${total} certificados del Sistema Nacional de Evaluación de Competencias TI de Rusia, ${adv} de nivel avanzado.`
  )}</span> <a href="${ANCHOR}">${L('Смотреть', 'View', 'Ver')}</a></p>`;
}

// Значки под текстом кейса: только сертификаты, которые совпали со стеком проекта.
function caseChipsHtml(stack) {
  const list = N.forStack(stack, 4);
  if (list.length < 2) return '';
  const chips = list.map(c => `<li><a class="nsok-chip" href="${ANCHOR}">${levelBars(c.level)}<span class="nsok-chip-name">${esc(c.name)}</span></a></li>`).join('');
  return `<aside class="nsok-case" aria-label="Подтверждённые компетенции">
                        <p class="nsok-case-title"><i class="ph-fill ph-seal-check" aria-hidden="true"></i>Технологии проекта: компетенции подтверждены в ${esc(N.ISSUER_IN)}</p>
                        <ul class="nsok-chips">${chips}</ul>
                    </aside>`;
}

// Абзац для llms.txt / llms-full.txt.
function llmsFact() {
  const list = N.active();
  if (!list.length) return '';
  const names = list.map(c => `${c.name} (${c.level === 'adv' ? 'продвинутый' : 'средний'})`).join(', ');
  return `- Подтверждённая квалификация в России: ${summaryRu(list)} в ${N.ISSUER_IN} (оператор: ${N.OPERATOR}), сертификаты по теории действуют до ${N.fmtDate(N.latestUntil(list))}: ${names}. Оригиналы сертификатов: ${SITE}${ANCHOR}`;
}

function credentialsLd() {
  return N.active().map(c => ({
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'certificate',
    name: `${c.name}: ${N.LEVEL[c.level]}`,
    educationalLevel: c.level === 'adv' ? 'Продвинутый' : 'Средний',
    about: c.name,
    url: `${SITE}/assets/certs/nsok/${c.id}.pdf`,
    recognizedBy: { '@type': 'Organization', name: N.OPERATOR_FULL, alternateName: N.OPERATOR },
    'x-nsok': true,
  }));
}

const FAQ_Q = 'Какие ИТ-компетенции подтверждены официально?';
function faqAnswer() {
  const list = N.active();
  return `${summaryRu(list)} подтверждены в ${N.ISSUER_IN} (оператор: ${N.OPERATOR}): ${list.map(c => c.name).join(', ')}. Сертификаты по теории действуют до ${N.fmtDate(N.latestUntil(list))}, оригиналы выложены в разделе «Квалификация».`;
}

// Профиль автора (@id …/#person) где угодно в JSON-LD: те же сертификаты НСОК и навыки,
// чтобы главные и /about/ описывали человека одинаково.
function patchPerson(node) {
  let hit = false;
  (function walk(o) {
    if (!o || typeof o !== 'object') return;
    if (o['@type'] === 'Person' && String(o['@id'] || '').endsWith('/#person')) {
      o.hasCredential = (o.hasCredential || []).filter(c => !c['x-nsok'] && !(c.recognizedBy && c.recognizedBy.alternateName === N.OPERATOR)).concat(credentialsLd());
      const knows = new Set(o.knowsAbout || []);
      N.active().forEach(c => knows.add(c.name));
      o.knowsAbout = [...knows];
      hit = true;
    }
    for (const k of Object.keys(o)) walk(o[k]);
  })(node);
  return hit;
}

// Правит профиль и (на /about/) FAQPage в JSON-LD страницы.
function patchLd(html, withFaq) {
  return html.replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/g, (all, a, body, b) => {
    let j; try { j = JSON.parse(body); } catch (e) { return all; }
    if (withFaq && j['@type'] === 'FAQPage' && Array.isArray(j.mainEntity)) {
      j.mainEntity = j.mainEntity.filter(q => q.name !== FAQ_Q);
      if (N.active().length) j.mainEntity.unshift({ '@type': 'Question', name: FAQ_Q, acceptedAnswer: { '@type': 'Answer', text: faqAnswer() } });
    } else if (!patchPerson(j)) return all;
    // x-nsok нужен только для поиска своих записей; в выдачу не отдаём
    // на главных пишем компактно, чтобы не утяжелять страницу
    const out = JSON.stringify(j, null, withFaq ? 2 : 0).replace(/,\s*"x-nsok":\s*true/g, '');
    return `${a}\n${out}\n    ${b}`;
  });
}

function patchFaqVisible(html) {
  const list = N.active();
  let block = '<!-- certs-faq:start --><!-- certs-faq:end -->';
  if (list.length) {
    const { total, adv, mid } = counts(list);
    const until = N.fmtDate(N.latestUntil(list));
    const names = (i) => list.map(c => i < 0 ? c.name : nameI18n(c.name)[i]).join(i === 1 ? '、' : ', ');
    const link = (txt) => ` <a href="#kvalifikaciya">${txt}</a>`;
    const aRu = `${esc(faqAnswer())}${link('Смотреть сертификаты')}`;
    const aEn = `${total} IT competencies (${adv} at advanced level${mid ? `, ${mid} intermediate` : ''}) are certified in Russia's National IT Competency Assessment System: ${esc(names(0))}. The theory certificates are valid until ${until}; the originals are in the Qualifications section.${link('View certificates')}`;
    const aCn = `在俄罗斯国家IT能力评估体系中获得 ${total} 项IT能力认证（${adv} 项高级${mid ? `，${mid} 项中级` : ''}）：${esc(names(1))}。理论证书有效期至 ${until}，原件见“资质认证”部分。${link('查看证书')}`;
    const aMn = `ОХУ-ын Мэдээллийн технологийн ур чадварын үндэсний үнэлгээний системд ${total} ур чадвар баталгаажсан (${adv} нь ахисан${mid ? `, ${mid} нь дунд` : ''} түвшинд): ${esc(names(2))}. Онолын гэрчилгээнүүд ${until} хүртэл хүчинтэй, эх хувь нь «Мэргэшил» хэсэгт байна.${link('Гэрчилгээг харах')}`;
    block = `<!-- certs-faq:start --><details><summary ${R.t('faq.certs.q', esc(FAQ_Q), 'Which IT competencies are officially certified?', '哪些IT能力获得了官方认证？', 'Ямар МТ-ийн ур чадвар албан ёсоор баталгаажсан бэ?')}>${esc(FAQ_Q)}</summary><p ${R.t('faq.certs.a', aRu, aEn, aCn, aMn)}>${aRu}</p></details><!-- certs-faq:end -->`;
  }
  if (html.includes('<!-- certs-faq:start -->')) return html.replace(/<!-- certs-faq:start -->[\s\S]*?<!-- certs-faq:end -->/, block);
  return html.replace(/(<h2>Частые вопросы<\/h2>)/, `$1\n                    ${block}`);
}

function applyAbout() {
  if (!fs.existsSync(ABOUT)) return;
  let html = fs.readFileSync(ABOUT, 'utf8');
  const block = aboutBlockHtml() || '<!-- certs:start --><!-- certs:end -->';
  if (html.includes('<!-- certs:start')) html = html.replace(/<!-- certs:start[\s\S]*?<!-- certs:end -->/, block);
  else html = html.replace(/(\s*<div class="about-section">\s*<h2>Регалии и сертификаты<\/h2>)/, `\n                ${block}$1`);
  // старый ld хранит x-nsok только внутри скрипта; после stringify он вырезан, поэтому ищем по alternateName
  html = patchLd(html, true);
  html = patchFaqVisible(html);
  html = patchTitle(html);
  fs.writeFileSync(ABOUT, html);
  applyHomes();
}

// Заголовок /about/ для выдачи: число сертификатов считается, после истечения уходит само.
function patchTitle(html) {
  const n = N.active().length;
  const t = n ? `Чимитдоржи Дарижапов: разработка, ИИ, 152-ФЗ. ${n} ИТ-сертификатов` : 'Чимитдоржи Дарижапов: разработка, ИИ и 152-ФЗ для бизнеса';
  return html
    .replace(/<title>[^<]*<\/title>/, () => `<title>${t}</title>`)
    .replace(/(<meta name="title" content=")[^"]*(")/, (m, a, b) => a + t + b)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, (m, a, b) => a + t + b);
}

// Главные на всех языках: профиль автора в JSON-LD.
const HOMES = ['index.html', 'en/index.html', 'cn/index.html', 'mn/index.html'].map(f => path.join(ROOT, f));
function applyHomes() {
  for (const f of HOMES) {
    if (!fs.existsSync(f)) continue;
    const html = fs.readFileSync(f, 'utf8');
    const out = patchLd(html, false);
    if (out !== html) fs.writeFileSync(f, out);
  }
}

module.exports = { aboutBlockHtml, casesStripHtml, caseChipsHtml, llmsFact, applyAbout };

if (require.main === module) { applyAbout(); console.log('certs: /about/ и главные обновлены'); }
