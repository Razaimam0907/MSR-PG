(function(){

var IM={ac1:'images/ac1.jpg',ac2:'images/ac2.jpg',ac3:'images/ac3.jpg',na1:'images/na1.jpg',na2:'images/na2.jpg',na3:'images/na3.jpg',study:'images/study.jpg',kit:'images/kit.jpg',wifi:'images/wifi.jpg',bal:'images/bal.jpg',bal3:'images/bal3.jpg'};var LOGO={sm:'images/logo-sm.jpg',full:'images/logo-full.jpg'};
document.querySelectorAll('img[data-logo]').forEach(function(i){i.src=LOGO[i.dataset.logo]});
document.querySelectorAll('.gal').forEach(function(g){var ks=g.dataset.g.split(','),alt=g.dataset.alt;
 g.innerHTML='<div class="pic"><img alt="'+alt+'" src="'+IM[ks[0]]+'"></div><div class="th"></div>';
 var m=g.querySelector('.pic img'),th=g.querySelector('.th');
 ks.forEach(function(k,i){var b=document.createElement('button');b.type='button';b.setAttribute('aria-label',alt+' photo '+(i+1));b.innerHTML='<img alt="" src="'+IM[k]+'">';if(!i)b.className='on';
  b.addEventListener('click',function(){m.src=IM[k];th.querySelectorAll('button').forEach(function(x){x.className=''});b.className='on'});th.appendChild(b)})});
[['study','Study desk','Desk, chair, lamp and charging points'],['kit','Fridge and kitchenette','Refrigerator and a compact kitchen'],['wifi','Wi-Fi','High-speed internet in every room'],['bal','Balcony','Open views and a place to unwind']].forEach(function(a){
 var f=document.createElement('figure');f.setAttribute('data-s',a[1]+'|'+a[2]);f.innerHTML='<img alt="'+a[1]+'" loading="lazy" src="'+IM[a[0]]+'"><figcaption>'+a[1]+'<small>'+a[2]+'</small></figcaption>';document.getElementById('inside').appendChild(f)});
var PHOTOS={hero:IM.ac2,exterior:IM.bal3};
document.querySelectorAll('[data-photo]').forEach(function(el){var u=PHOTOS[el.dataset.photo];if(u)el.innerHTML='<img src="'+u+'" alt="MSR PG rooms">'});
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
var burger=document.getElementById('burger'),dr=document.getElementById('drawer'),sc=document.getElementById('scrim');
function drawer(o){dr.classList.toggle('open',o);sc.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Close menu':'Open menu');if(lenis){o?lenis.stop():lenis.start()}}
burger.addEventListener('click',function(){drawer(!dr.classList.contains('open'))});
sc.addEventListener('click',function(){drawer(false)});
document.querySelectorAll('[data-go]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();var id=a.getAttribute('href').slice(1);drawer(false);
 var gym=(id==='markets'||id==='gyms');if(gym)document.querySelector('.tabs button[data-t="gn"]').click();
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
})();