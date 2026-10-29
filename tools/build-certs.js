// Блоки квалификации НСОК: /about/ (#kvalifikaciya + JSON-LD + FAQ), строка доверия /cases/,
// значки по стеку в кейсах, абзац фактов для llms.txt. Данные: tools/certs-nsok.js.
// Вызывается из build-blog.js; можно запустить отдельно: node tools/build-certs.js
const fs = require('fs');
const path = require('path');
const N = require('./certs-nsok.js');

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

function aboutBlockHtml() {
  const list = N.active();
  if (!list.length) return '';
  const until = N.fmtDate(N.latestUntil(list));
  const groups = N.GROUPS.map(g => {
    const items = list.filter(c => c.group === g.k);
    if (!items.length) return '';
    const chips = items.map(c => `<li><button type="button" class="nsok-chip" data-nsok="${c.id}" aria-haspopup="dialog" aria-label="${esc(c.name)}, ${N.LEVEL[c.level]}: открыть сертификат">${levelBars(c.level)}<span class="nsok-chip-name">${esc(c.name)}</span><span class="nsok-chip-lvl">${c.level === 'adv' ? 'продвинутый' : 'средний'}</span></button></li>`).join('');
    return `<div class="nsok-group"><h3 class="nsok-group-title"><i class="ph-fill ${g.icon}" aria-hidden="true"></i>${esc(g.ru)}</h3><ul class="nsok-chips">${chips}</ul></div>`;
  }).join('');
  const data = JSON.stringify(Object.fromEntries(list.map(c => [c.id, { n: c.name, l: N.LEVEL[c.level], u: N.fmtDate(c.until) }])));
  return `<!-- certs:start (генерирует tools/build-certs.js, руками не править) -->
                <section class="about-section nsok" id="kvalifikaciya" aria-labelledby="nsok-title">
                    <h2 id="nsok-title">Квалификация</h2>
                    <div class="nsok-lead">
                        <p class="nsok-num"><strong>${list.length}</strong><span>сертификатов</span></p>
                        <p class="nsok-def">Чимитдоржи Дарижапов подтвердил ${summaryRu(list)} в ${esc(N.ISSUER_IN)} (оператор: ${esc(N.OPERATOR)}). Это JavaScript, HTML, CSS, API, ООП, алгоритмы, Docker, Linux, Git, PostgreSQL, тестирование, машинное обучение и математическая статистика. Сертификаты по теории действуют до ${until}, каждый можно открыть и скачать в оригинале.</p>
                    </div>
                    ${groups}
                    <dialog class="nsok-dialog" id="nsok-dialog" aria-labelledby="nsok-dialog-title">
                        <div class="nsok-dialog-head"><h3 id="nsok-dialog-title"></h3><button type="button" class="nsok-close" aria-label="Закрыть"><i class="ph ph-x" aria-hidden="true"></i></button></div>
                        <p class="nsok-dialog-meta"></p>
                        <img class="nsok-dialog-img" alt="" width="900" height="1305" loading="lazy" decoding="async">
                        <a class="nsok-dialog-pdf" href="#" download><i class="ph ph-file-pdf" aria-hidden="true"></i>Скачать PDF</a>
                    </dialog>
                    <script>
                    (function () {
                      var D = ${data}, dlg = document.getElementById('nsok-dialog');
                      if (!dlg || typeof dlg.showModal !== 'function') return;
                      var t = dlg.querySelector('h3'), m = dlg.querySelector('.nsok-dialog-meta'), img = dlg.querySelector('img'), a = dlg.querySelector('.nsok-dialog-pdf'), last = null;
                      document.querySelectorAll('.nsok-chip[data-nsok]').forEach(function (b) {
                        b.addEventListener('click', function () {
                          var id = b.getAttribute('data-nsok'), c = D[id]; if (!c) return; last = b;
                          t.textContent = c.n; m.textContent = c.l + ', действует до ' + c.u;
                          img.src = '/assets/certs/nsok/' + id + '.webp'; img.alt = 'Сертификат НСОК: ' + c.n + ', ' + c.l;
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

// Правит ProfilePage и FAQPage в JSON-LD страницы /about/.
function patchLd(html) {
  return html.replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/g, (all, a, body, b) => {
    let j; try { j = JSON.parse(body); } catch (e) { return all; }
    if (j['@type'] === 'ProfilePage' && j.mainEntity) {
      const p = j.mainEntity;
      p.hasCredential = (p.hasCredential || []).filter(c => !c['x-nsok'] && !(c.recognizedBy && c.recognizedBy.alternateName === N.OPERATOR)).concat(credentialsLd());
      const knows = new Set(p.knowsAbout || []);
      N.active().forEach(c => knows.add(c.name));
      p.knowsAbout = [...knows];
    } else if (j['@type'] === 'FAQPage' && Array.isArray(j.mainEntity)) {
      j.mainEntity = j.mainEntity.filter(q => q.name !== FAQ_Q);
      if (N.active().length) j.mainEntity.unshift({ '@type': 'Question', name: FAQ_Q, acceptedAnswer: { '@type': 'Answer', text: faqAnswer() } });
    } else return all;
    // x-nsok нужен только для поиска своих записей; в выдачу не отдаём
    const out = JSON.stringify(j, null, 2).replace(/,\s*"x-nsok": true/g, '');
    return `${a}\n${out}\n    ${b}`;
  });
}

function patchFaqVisible(html) {
  const block = N.active().length ? `<!-- certs-faq:start --><details><summary>${esc(FAQ_Q)}</summary><p>${esc(faqAnswer())} <a href="#kvalifikaciya">Смотреть сертификаты</a></p></details><!-- certs-faq:end -->` : '<!-- certs-faq:start --><!-- certs-faq:end -->';
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
  html = patchLd(html);
  html = patchFaqVisible(html);
  fs.writeFileSync(ABOUT, html);
}

module.exports = { aboutBlockHtml, casesStripHtml, caseChipsHtml, llmsFact, applyAbout };

if (require.main === module) { applyAbout(); console.log('certs: /about/ обновлена'); }
