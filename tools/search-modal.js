// Модальное окно поиска в шапке (на всех страницах). Self-contained: разметка + стиль + скрипт.
// Кнопка-триггер: любой элемент с классом js-search-open. Источник: /search-index.json.
module.exports = `
<div class="search-modal" id="searchModal" hidden>
  <div class="search-modal-backdrop js-search-close"></div>
  <div class="search-modal-box">
    <div class="search-modal-bar">
      <i class="ph ph-magnifying-glass" aria-hidden="true"></i>
      <input id="navSearchInput" type="search" placeholder="Поиск по статьям и предложениям…" autocomplete="off" aria-label="Поиск по сайту">
      <button class="search-modal-close js-search-close" type="button" aria-label="Закрыть поиск"><i class="ph ph-x" aria-hidden="true"></i></button>
    </div>
    <div class="search-modal-results" id="navSearchResults"></div>
  </div>
</div>
<style>
.nav-search-btn{background:none;border:none;cursor:pointer;color:var(--text);font-size:1.2rem;padding:8px;display:inline-flex;align-items:center;justify-content:center;border-radius:8px;transition:color .2s;}
.nav-search-btn:hover{color:var(--accent);}
.search-modal{position:fixed;inset:0;z-index:10010;}
.search-modal[hidden]{display:none;}
.search-modal-backdrop{position:absolute;inset:0;background:rgba(10,12,16,.55);}
.search-modal-box{position:relative;max-width:680px;margin:8vh auto 0;background:var(--bg-card);border:1.5px solid var(--border);border-radius:16px;box-shadow:0 30px 80px rgba(0,0,0,.3);overflow:hidden;}
.search-modal-bar{display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid var(--border);}
.search-modal-bar i{color:var(--text-secondary);font-size:1.3rem;}
.search-modal-bar input{flex:1;border:none;background:none;color:var(--text);font-family:inherit;font-size:1.05rem;outline:none;}
.search-modal-close{background:none;border:none;color:var(--text-secondary);font-size:1.1rem;cursor:pointer;padding:4px 8px;line-height:1;}
.search-modal-results{max-height:60vh;overflow:auto;}
.search-modal-results .search-item{display:block;padding:12px 16px;border-bottom:1px solid var(--border);text-decoration:none;color:var(--text);}
.search-modal-results .search-item:last-child{border-bottom:none;}
.search-modal-results .search-item:hover{background:var(--bg-card-hover);}
.search-modal-results .search-kind{display:block;font-size:.7rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;color:var(--accent);}
.search-modal-results .search-t{display:block;font-weight:700;font-size:.98rem;line-height:1.3;margin-top:1px;}
.search-modal-results .search-d{display:block;color:var(--text-secondary);font-size:.85rem;line-height:1.4;margin-top:2px;}
.search-modal-results .search-empty{padding:16px;color:var(--text-secondary);}
@media(max-width:600px){.search-modal-box{margin:0;border-radius:0;height:100%;max-width:none;}.search-modal-results{max-height:calc(100vh - 62px);}}
</style>
<script>
(function(){
  var modal=document.getElementById('searchModal');if(!modal)return;
  var inp=document.getElementById('navSearchInput'),box=document.getElementById('navSearchResults');
  var idx=null,loading=false,pending=null;
  function esc(s){return String(s).replace(/[&<>]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c];});}
  function load(cb){if(idx)return cb();if(loading){pending=cb;return;}loading=true;fetch('/search-index.json').then(function(r){return r.json();}).then(function(d){idx=d;cb();if(pending){var p=pending;pending=null;p();}}).catch(function(){});}
  function render(q){var t=q.trim().toLowerCase();if(t.length<2){box.innerHTML='<div class="search-empty">Введите минимум 2 символа</div>';return;}var w=t.split(/\\s+/);var res=idx.filter(function(it){var hay=(it.t+' '+it.d+' '+(it.g||'')+' '+(it.c||'')).toLowerCase();return w.every(function(x){return hay.indexOf(x)>=0;});});var n=res.length;res=res.slice(0,20);if(!n){box.innerHTML='<div class="search-empty">Ничего не найдено</div>';return;}box.innerHTML=res.map(function(it){return '<a class="search-item" href="'+it.u+'"><span class="search-kind">'+esc(it.k)+(it.c?' · '+esc(it.c):'')+'</span><span class="search-t">'+esc(it.t)+'</span><span class="search-d">'+esc(it.d).slice(0,110)+'</span></a>';}).join('')+(n>20?'<div class="search-empty">+ ещё '+(n-20)+' — уточните запрос</div>':'');}
  function open(){modal.hidden=false;document.body.style.overflow='hidden';setTimeout(function(){inp.focus();},30);load(function(){render(inp.value);});}
  function close(){modal.hidden=true;document.body.style.overflow='';}
  document.addEventListener('click',function(e){if(e.target.closest('.js-search-open')){e.preventDefault();open();}else if(e.target.closest('.js-search-close')){close();}});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!modal.hidden)close();});
  var deb;inp.addEventListener('input',function(){clearTimeout(deb);var q=inp.value;deb=setTimeout(function(){load(function(){render(q);});},110);});
})();
</script>`;
