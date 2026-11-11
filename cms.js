/* Contenus modifiables depuis /admin (Decap CMS). Lit content/*.json et met à jour la page. */
(function(){
var page=(document.currentScript&&document.currentScript.dataset.page)||'';
function get(u){return fetch(u,{cache:'no-cache'}).then(function(r){return r.ok?r.json():null}).catch(function(){return null})}
var isVid=function(s){return /\.(mp4|mov|webm|m4v)(\?|$)/i.test(s)};
function media(src,o){o=o||{};var el;
if(isVid(src)){el=document.createElement('video');el.src=src;el.muted=true;el.playsInline=true;el.setAttribute('playsinline','');
if(o.controls){el.controls=true;el.preload='metadata'}else{el.autoplay=true;el.loop=true;el.setAttribute('autoplay','')}}
else{el=document.createElement('img');el.src=src;el.alt='';el.loading='lazy'}
el.style.cssText='width:100%;height:100%;object-fit:cover;display:block';return el}
function cover(c,src,o){if(!c)return;if(getComputedStyle(c).position==='static')c.style.position='relative';
var m=media(src,o);m.style.position='absolute';m.style.inset='0';m.style.zIndex=o&&o.controls?'6':'3';c.appendChild(m);
c.querySelectorAll('.placeholder-label,.hero-video-empty,.offer-video-empty').forEach(function(p){p.style.display='none'});
if(o&&o.controls)c.querySelectorAll('.showreel-play,.showreel-tag,.showreel-counter').forEach(function(p){p.style.display='none'})}
var MAP={
accueil:{'logo-tattoo':['.logo-mask-drop','mask'],'logo-visuals':['.logo-mask-cam','mask']},
visuals:{'hero-video':['.hero-video','showreel'],'showreel':['.showreel-player','showreel']}
};
function apply(d){
var t=d.textes;if(t)Object.keys(t).forEach(function(g){var grp=t[g]||{};Object.keys(grp).forEach(function(k){var v=grp[k];if(typeof v!=='string'||!v.trim())return;var el=document.querySelector('[data-cms="'+k+'"]');if(el&&el.innerHTML.replace(/\s+/g,' ').trim()!==v.trim())el.innerHTML=v})});
var b=d.bijoux;if(b)Object.keys(b).forEach(function(c){var ul=document.querySelector('[data-cms-list="'+c+'"]');var l=(b[c]||[]).filter(function(i){return i&&i.nom});if(!ul||!l.length)return;ul.innerHTML='';l.forEach(function(i){var li=document.createElement('li');li.textContent=i.nom+' ';if(i.prix){var s=document.createElement('span');s.className='price';s.textContent=i.prix;li.appendChild(s)}ul.appendChild(li)});ul.hidden=false});
var m=d.medias;if(m)Object.keys(m).forEach(function(k){var v=m[k];if(!v)return;var spec=(MAP[page]||{})[k];
if(spec){var el=document.querySelector(spec[0]);if(!el)return;
if(spec[1]==='mask')el.style.setProperty('--logo','url("'+v+'")');
else cover(el,v,{controls:spec[1]==='showreel'});return}
if(k.indexOf('pack-')===0){cover(document.querySelector('.offer-video[data-video="'+k.slice(5)+'"]'),v,{controls:true});return}
var slot=document.getElementById(k);if(slot&&slot.tagName==='IMAGE-SLOT')slot.replaceWith(media(v))});
}
var ready=new Promise(function(r){document.readyState==='loading'?document.addEventListener('DOMContentLoaded',r):r()});
var data=Promise.all([get('content/'+page+'-textes.json'),get('content/'+page+'-medias.json'),page==='tattoo'?get('content/tattoo-galerie.json'):null,page==='tattoo'?get('content/tattoo-bijoux.json'):null]).then(function(a){return{textes:a[0],medias:a[1],galerie:a[2],bijoux:a[3]}});
window.cmsReady=Promise.all([data,ready]).then(function(a){try{apply(a[0])}catch(e){console.warn('cms',e)}return a[0]});
})();
