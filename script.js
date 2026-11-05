(function(){
var lenis=null;
try{lenis=new Lenis({duration:1.2,smoothWheel:true});(function raf(t){lenis.raf(t);requestAnimationFrame(raf)})(0)}catch(e){}
function goTo(el){if(!el)return;if(lenis)lenis.scrollTo(el,{offset:-84});else el.scrollIntoView({behavior:'smooth'})}
var F=[['Wi-Fi','High-speed internet in every room','M5 12a10 10 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0M12 19h.01'],
['Power backup','Lights and fans through power cuts','M13 2 4 14h7l-1 8 9-12h-7z'],
['Home-style meals','Fresh veg meals and tea','M5 3v8a3 3 0 0 0 3 3v7M8 3v6M11 3v8a3 3 0 0 1-3 3M17 3c-2 2-3 5-3 8h3v10'],
['24×7 security','CCTV and secure entry','M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z'],
['Housekeeping','Daily cleaning of rooms and common areas','M4 20h16M6 20V10l6-6 6 6v10'],
['RO drinking water','Filtered water all day','M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z'],
['Laundry','Washing machine access','M5 3h14v18H5zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8'],
['Hot water','Geyser for all seasons','M12 3v10M8 7l4-4 4 4M6 17h12'],
['Parking','Space for bikes and scooters','M6 17a3 3 0 1 0 0 .01M18 17a3 3 0 1 0 0 .01M6 17h5l3-7h3'],
['Study friendly','Quiet hours and good lighting','M4 5h7a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4zM20 5h-7']];
var fl=document.getElementById('fl');
F.forEach(function(f){var d=document.createElement('div');d.className='fi';d.setAttribute('data-s',f[0]+'|'+f[1]);d.innerHTML='<svg viewBox="0 0 24 24"><path d="'+f[2]+'"/></svg><h3>'+f[0]+'</h3><p>'+f[1]+'</p>';fl.appendChild(d)});
document.querySelectorAll('[data-list]').forEach(function(el){var a=el.dataset.list.split('|');
 a[2].split(',').forEach(function(n){var d=document.createElement('div');d.className='it';d.setAttribute('data-s',n+'|'+a[1]+' in '+a[0]);d.innerHTML=n+'<span>'+a[0]+'</span>';el.appendChild(d)})});
document.querySelectorAll('.tabs button').forEach(function(b){b.addEventListener('click',function(){
 document.querySelectorAll('.tabs button').forEach(function(x){x.setAttribute('aria-selected',x===b)});
 document.querySelectorAll('.pane').forEach(function(p){p.hidden=p.id!==b.dataset.t})})});
document.querySelectorAll('.gal').forEach(function(g){var m=g.querySelector('.pic img'),bs=g.querySelectorAll('.th button');
 bs.forEach(function(b){b.addEventListener('click',function(){m.src=b.querySelector('img').src;bs.forEach(function(x){x.className=''});b.className='on'})})});
var burger=document.getElementById('burger'),dr=document.getElementById('drawer'),sc=document.getElementById('scrim');
function drawer(o){dr.classList.toggle('open',o);sc.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Close menu':'Open menu');if(lenis){o?lenis.stop():lenis.start()}}
burger.addEventListener('click',function(){drawer(!dr.classList.contains('open'))});
sc.addEventListener('click',function(){drawer(false)});
document.querySelectorAll('[data-go]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();var id=a.getAttribute('href').slice(1);drawer(false);
 if(id==='markets'||id==='gyms')document.querySelector('.tabs button[data-t="gn"]').click();
 setTimeout(function(){goTo(id==='top'?document.body:document.getElementById(id))},60)})});
var q=document.getElementById('q'),res=document.getElementById('res');
document.addEventListener('keydown',function(e){if(e.key==='Escape'){drawer(false);res.classList.remove('open')}});
q.addEventListener('input',function(){var v=q.value.trim().toLowerCase();res.innerHTML='';if(!v){res.classList.remove('open');return}
 var hits=[].filter.call(document.querySelectorAll('[data-s]'),function(el){return el.dataset.s.toLowerCase().indexOf(v)>-1}).slice(0,8);
 if(!hits.length)res.innerHTML='<p>No match. Try “AC”, “gym” or “Wi-Fi”.</p>';
 hits.forEach(function(el){var s=el.dataset.s.split('|'),b=document.createElement('button');b.innerHTML=s[0]+'<small>'+s[1]+'</small>';
  b.addEventListener('click',function(){res.classList.remove('open');q.value='';var p=el.closest('.pane');if(p&&p.hidden)document.querySelector('.tabs button[data-t="'+p.id+'"]').click();
   setTimeout(function(){goTo(el);el.classList.add('hl');setTimeout(function(){el.classList.remove('hl')},2200)},80)});res.appendChild(b)});
 res.classList.add('open')});
q.addEventListener('keydown',function(e){if(e.key==='Enter'){var b=res.querySelector('button');if(b)b.click()}});
document.addEventListener('click',function(e){if(!e.target.closest('.search'))res.classList.remove('open')});
/* Scroll animations: text and images reveal as they enter the screen */
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduce&&'IntersectionObserver' in window){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -5% 0px'});
 document.querySelectorAll('.hero h1,.hero p,.hero .btns,.head,.tabs,.sub,.rc h3,.rc p,.rc ul,.gal .th,.furn,.fi,.it,.cta .btns,footer .cols>div,.copy').forEach(function(el){
  el.classList.add('rv');var i=[].indexOf.call(el.parentNode.children,el);el.style.setProperty('--d',(i%6)*.08+'s');io.observe(el)});
 document.querySelectorAll('.pic,.inside figure').forEach(function(el){el.classList.add('rvi');io.observe(el)});
 document.documentElement.classList.add('js');
 setTimeout(function(){document.querySelectorAll('.rv:not(.in),.rvi:not(.in)').forEach(function(el){var r=el.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)el.classList.add('in')})},2500);
}
})();
