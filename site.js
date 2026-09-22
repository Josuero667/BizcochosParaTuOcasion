const whatsapp = 'https://wa.me/19392441650?text=' + encodeURIComponent('¡Hola! Me gustaría cotizar un bizcocho. Mi fecha es: ___, para ___ personas.');
document.querySelectorAll('[data-whatsapp]').forEach(link => { link.href = whatsapp; });
// Add the business's verified social profile URLs here when available.
const socialLinks = { instagram: 'https://www.instagram.com/bizcochos_para_tu_ocasion/', facebook: 'https://www.facebook.com/people/Bizcochos-para-t%C3%BA-Ocasi%C3%B3n/100064667080641/' };
document.querySelectorAll('[data-social]').forEach(link => { const url = socialLinks[link.dataset.social]; if (url) { link.href = url; link.hidden = false; } });
const stage = document.querySelector('.gallery-stage');
if (stage) {
  // Sample photographs only. Replace these with the bakery's own images and descriptions.
  const samples = [
    ['photo-1578985545062-69928b1d9587','Chocolate y cariño','celebraciones'],
    ['photo-1464305795204-6f5bbfc7fb81','Un toque de dulzura','celebraciones'],
    ['photo-1535141192574-5d4897c12636','Detalles para celebrar','bodas'],
    ['photo-1563729784474-d77dbb933a9e','Pequeños momentos','cupcakes'],
    ['photo-1621303837174-89787a7d4729','Una ocasión especial','cumpleanos'],
    ['photo-1621303837174-89787a7d4729','Dulces recuerdos','cumpleanos'],
    ['photo-1519869325930-281384150729','Hecho para compartir','cupcakes'],
    ['photo-1488477181946-6428a0291777','Un detalle dulce','celebraciones']
  ];
  const photos = Array.from({length:50},(_,i)=>({id:i+1,photo:samples[i%samples.length][0],title:samples[i%samples.length][1],category:samples[i%samples.length][2]}));
  const url = (photo,width=600) => `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=80`;
  let category = 'todos'; let paused = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pause = document.querySelector('.pause');
  function syncPause(){stage.classList.toggle('paused',paused);pause.textContent=paused?'▶ Reanudar movimiento':'Ⅱ Pausar movimiento';pause.setAttribute('aria-pressed',String(paused));}
  pause.addEventListener('click',()=>{paused=!paused;syncPause();});syncPause();
  const dialog = document.querySelector('dialog');
  let lastTrigger;
  function showPhoto(item,trigger){lastTrigger=trigger;dialog.querySelector('img').src=url(item.photo,1100);dialog.querySelector('img').alt=`Foto de referencia: ${item.title}`;dialog.querySelector('h2').textContent=item.title;dialog.showModal();}
  dialog.querySelector('button').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>lastTrigger?.focus());
  function render(){
    stage.replaceChildren();const selected=photos.filter(p=>category==='todos'||p.category===category);
    const preferredRows=innerWidth<600?4:innerWidth<1000?3:2;
    const rowCount=Math.max(1,Math.min(preferredRows,Math.floor(selected.length/Math.ceil(innerWidth/(innerWidth<600?209:263)))));
    document.querySelector('#gallery-count').textContent=`${selected.length} imágenes de referencia · Fotos provisionales`;
    for(let row=0;row<Math.min(rowCount,selected.length);row++){
      const items=selected.filter((_,i)=>i%rowCount===row);const viewport=document.createElement('div');viewport.className='gallery-row';const track=document.createElement('div');track.className='gallery-track';
      for(let copy=0;copy<2;copy++) for(const item of items){const button=document.createElement('button');button.type='button';button.className='gallery-item';button.setAttribute('aria-label',`Ampliar referencia ${item.id}: ${item.title}`);if(copy){button.tabIndex=-1;button.setAttribute('aria-hidden','true');}const img=document.createElement('img');img.src=url(item.photo);img.alt=`Foto de referencia: ${item.title}`;img.loading='lazy';img.width=245;img.height=215;const caption=document.createElement('span');caption.textContent=item.title;const number=document.createElement('b');number.textContent=String(item.id).padStart(2,'0');caption.append(number);button.append(img,caption);button.addEventListener('click',()=>showPhoto(item,button));track.append(button);}
      viewport.append(track);stage.append(viewport);
    }
  }
  document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{category=button.dataset.category;document.querySelectorAll('.filter').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});render();}));
  let size=innerWidth<600?0:innerWidth<1000?1:2;addEventListener('resize',()=>{const next=innerWidth<600?0:innerWidth<1000?1:2;if(next!==size){size=next;render();}});render();
}
