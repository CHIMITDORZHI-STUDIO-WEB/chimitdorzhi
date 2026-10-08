// Яндекс.Метрика (счётчик 109281884) и цели по кликам на контакты для страниц
// услуг, разработки и предложений. Тот же код и те же цели, что в блоге (build-blog.js),
// чтобы отчёт «какие страницы приводят заявки» считался по всему сайту одинаково.

const MAX_URL = 'https://max.ru/u/f9LHodD0cOLXD_tKv7-yIJbrYDdCF0EqSZdx-aDG8oYlDHviSiPvwfhTdvs';

const GOALS = `<!-- Цели Метрики: клики по контактам и услугам -->
<script type="text/javascript">
(function(){
  var GOALS = [
    { re: /t\\.me\\//i,                     goal: 'tg_click' },
    { re: /max\\.ru\\//i,                    goal: 'max_click' },
    { re: /^tel:/i,                         goal: 'phone_click' },
    { re: /^mailto:/i,                      goal: 'email_click' },
    { re: /audit\\.chimitdorzhi\\.tech/i,    goal: 'audit_click' },
    { re: /chimitdorzhi\\.tech\\/services\\//i, goal: 'service_click' },
    { re: /chimitdorzhi\\.tech\\/predlozheniya\\//i, goal: 'offer_click' }
  ];
  document.addEventListener('click', function(e){
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    for (var i = 0; i < GOALS.length; i++) {
      if (GOALS[i].re.test(href)) {
        try { if (window.ym) ym(109281884, 'reachGoal', GOALS[i].goal, { page: location.pathname }); } catch (err) {}
        break;
      }
    }
  }, true);
})();
</script>
`;

const COUNTER = `<!-- Yandex.Metrika counter -->
<script type="text/javascript">
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
var inject=function(){for (var j=0;j<e.scripts.length;j++){if(e.scripts[j].src===r){return;}}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)};
var run=function(){('requestIdleCallback' in window)?requestIdleCallback(inject,{timeout:5000}):setTimeout(inject,3000)};
(e.readyState==='complete')?run():m.addEventListener('load',run);})
(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=109281884','ym');
ym(109281884,'init',{ssr:true,webvisor:true,clickmap:true,accurateTrackBounce:true,trackLinks:true});
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/109281884" style="position:absolute;left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
`;

const METRIKA = COUNTER + GOALS;

// Кнопка «MAX» рядом с Telegram: часть клиентов пишет только в MAX
const maxBtn = (cls = 'btn btn-ghost') =>
  `<a href="${MAX_URL}" target="_blank" rel="noopener" class="${cls}"><i class="ph ph-chat-circle-dots" aria-hidden="true"></i> Написать в MAX</a>`;

module.exports = { METRIKA, GOALS, MAX_URL, maxBtn };
