const C=(s)=>require('./blog-content-'+s+'.js'); const S='https://chimitdorzhi.tech';
const tocFrom=(html)=>[...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(m=>({id:m[1],text:m[2]}));
module.exports=[ (()=>{const slug='otkrytye-ii-modeli-2022-2026-putevoditel';const html=C(slug);return {slug,published:true,datePublished:'2026-09-22',dateModified:'2026-09-22',readingMinutes:11,category:'opensource',heroIcon:'ph-fill ph-cpu',ctaInternal:{url:S+'/ii-modeli/',label:'Открыть каталог моделей'},
title:'Открытые ИИ-модели 2022–2026: полный путеводитель для бизнеса',
metaTitle:'Открытые ИИ-модели 2022–2026: путеводитель для бизнеса',
metaDescription:'220 семейств открытых моделей за 2022–2026: что вышло по годам, 16 направлений, русский язык, лицензии для коммерции и требования к железу.',
excerpt:'Что вышло в открытом доступе с 2022 по сентябрь 2026 года, какие задачи закрывают открытые модели, какие из них сильны в русском, что можно в коммерцию и какое железо нужно. По данным каталога из 220 семейств.',
tags:['открытые модели','локальный ИИ','нейросети','каталог'],relatedSlugs:['kakoy-lokalnyy-llm-vybrat-2026','licenzii-otkrytyh-modeley-2026','skolko-zheleza-nuzhno-lokalnomu-ii-2026'],servicesOffer:{title:'Что я делаю с открытыми моделями',services:[{icon:'ph-fill ph-hard-drives',label:'Установка модели на ваш сервер'},{icon:'ph-fill ph-sliders',label:'Дообучение под ваши данные'},{icon:'ph-fill ph-plugs-connected',label:'Встраивание в CRM, 1С и ботов'},{icon:'ph-fill ph-shield-check',label:'Закрытый контур без облака'}]},toc:tocFrom(html),contentHtml:html};})() ];
