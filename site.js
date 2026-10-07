const whatsapp = 'https://wa.me/19392441650?text=' + encodeURIComponent('¡Hola! Me gustaría cotizar un bizcocho. Mi fecha es: ___, para ___ personas.');
document.querySelectorAll('[data-whatsapp]').forEach(link => { link.href = whatsapp; });
// Add the business's verified social profile URLs here when available.
const socialLinks = { instagram: 'https://www.instagram.com/bizcochos_para_tu_ocasion/', facebook: 'https://www.facebook.com/people/Bizcochos-para-t%C3%BA-Ocasi%C3%B3n/100064667080641/' };
document.querySelectorAll('[data-social]').forEach(link => { const url = socialLinks[link.dataset.social]; if (url) { link.href = url; link.hidden = false; } });
const stage = document.querySelector('.gallery-stage');
if (stage) {
  // The bakery's own photos: [category, file name in fotos/<category>/, caption].
  const photos = [
    ["infantiles", "spa-13-anos", "Spa para sus 13"],
    ["infantiles", "fresita-1-ano", "Fresita"],
    ["infantiles", "dulces-y-helados", "Dulces y helados"],
    ["bodas-y-quinces", "mascarada-rojo-y-dorado", "Mascarada en rojo y dorado"],
    ["adultos", "barril-de-whiskey", "Barril de whiskey"],
    ["festividades", "cruz-dorada", "Cruz dorada"],
    ["infantiles", "casita-de-hadas", "Casita de hadas"],
    ["infantiles", "sirena-pastel", "Sirena en tonos pastel"],
    ["infantiles", "astronauta", "Astronauta"],
    ["bodas-y-quinces", "torre-de-rapunzel", "Torre de Rapunzel"],
    ["infantiles", "mickey-de-carreras", "Mickey de carreras"],
    ["infantiles", "minnie-rosada", "Minnie en rosado"],
    ["infantiles", "barbie", "Barbie"],
    ["bodas-y-quinces", "flores-rosadas-tres-pisos", "Flores rosadas"],
    ["adultos", "cubeta-de-cerveza", "Cubeta de cerveza"],
    ["infantiles", "cars", "Cars"],
    ["infantiles", "monster-trucks", "Monster Trucks"],
    ["infantiles", "frozen", "Frozen"],
    ["bodas-y-quinces", "turquesa-y-dorado-con-flores", "Turquesa y dorado"],
    ["festividades", "navidad", "Feliz Navidad"],
    ["infantiles", "huevo-de-dinosaurio", "Huevo de dinosaurio"],
    ["infantiles", "super-mario", "Super Mario"],
    ["infantiles", "minions", "Minions"],
    ["bodas-y-quinces", "dorado-con-volantes", "Dorado con volantes"],
    ["adultos", "80-anos-azul-y-dorado", "80 años en azul y dorado"],
    ["infantiles", "merlina", "Merlina"],
    ["infantiles", "cocomelon", "Cocomelon"],
    ["infantiles", "neon-13-anos", "Neón para sus 13"],
    ["bodas-y-quinces", "encaje-blanco-y-perlas", "Encaje y perlas"],
    ["infantiles", "la-granja", "La granja"],
    ["infantiles", "conejita-y-mariposas", "Conejita y mariposas"],
    ["infantiles", "sonic", "Sonic"],
    ["bodas-y-quinces", "oceano-turquesa", "Océano turquesa"],
    ["adultos", "esmoquin-art-deco", "Esmoquin art déco"],
    ["festividades", "halloween-caldero", "Caldero de Halloween"],
    ["infantiles", "one-piece", "One Piece"],
    ["infantiles", "granja-rosada", "Granja en rosado"],
    ["infantiles", "two-sweet", "Two Sweet"],
    ["bodas-y-quinces", "olas-azules", "Olas azules"],
    ["infantiles", "tortugas-ninja", "Tortugas Ninja"],
    ["infantiles", "mario-y-peach", "Mario y Peach"],
    ["infantiles", "viaje-espacial", "Viaje espacial"],
    ["bodas-y-quinces", "quince-anos-fantasia", "Quince años de fantasía"],
    ["adultos", "abuelito-up-y-domino", "Abuelito de Up y dominó"],
    ["infantiles", "safari", "Safari"],
    ["infantiles", "arca-de-noe", "Arca de Noé"],
    ["infantiles", "la-sirenita", "La Sirenita"],
    ["bodas-y-quinces", "azul-marino-y-dorado", "Azul marino y dorado"],
    ["infantiles", "marinero", "Marinero"],
    ["infantiles", "selva", "Selva"],
    ["infantiles", "dragon-ball-z", "Dragon Ball Z"],
    ["bodas-y-quinces", "blanco-con-perlas", "Blanco con perlas"],
    ["adultos", "rostro-con-alas-de-colores", "Arte con alas de colores"],
    ["infantiles", "sirena-turquesa", "Sirena en turquesa"],
    ["infantiles", "moana-bebe", "Moana bebé"],
    ["infantiles", "libro-de-harry-potter", "Libro de Harry Potter"],
    ["bodas-y-quinces", "blanco-y-dorado-con-flores", "Blanco y dorado"],
    ["infantiles", "game-on", "Game On"],
    ["infantiles", "patineta-y-grafiti", "Patineta y grafiti"],
    ["infantiles", "donas", "Donas"],
    ["bodas-y-quinces", "rosas-y-volantes-rosados", "Rosas y volantes"],
    ["infantiles", "establo-rosado", "Establo"],
    ["infantiles", "dinosaurios-y-arcoiris", "Dinosaurios y arcoíris"],
    ["infantiles", "safari-con-jirafa", "Safari con jirafa"],
    ["bodas-y-quinces", "boda-con-monograma", "Boda con monograma"],
    ["infantiles", "globo-aerostatico", "Globo aerostático"],
    ["infantiles", "paw-patrol", "Paw Patrol"],
    ["infantiles", "boss-baby", "Boss Baby"],
    ["infantiles", "harry-potter", "Harry Potter"],
    ["infantiles", "dia-de-playa", "Día de playa"],
    ["infantiles", "transformers", "Transformers"],
    ["infantiles", "rey-leon", "El Rey León"],
    ["infantiles", "lenador", "Leñador"],
    ["infantiles", "monstruo-come-galletas", "Monstruo Come Galletas"],
    ["infantiles", "flores-primer-ano", "Flores para el primer año"],
    ["infantiles", "espada-y-cerezos", "Espada y cerezos"],
    ["infantiles", "minnie-dorada", "Minnie dorada"],
    ["infantiles", "olaf", "Olaf"],
    ["infantiles", "solecito", "Solecito"],
    ["infantiles", "star-wars", "Star Wars"]
  ].map(([category,file,title],i)=>({id:i+1,category,file,title}));
  const url = (item,full=false) => `fotos/${item.category}/${full?'':'mini/'}${item.file}.jpg`;
  let category = 'todos'; let paused = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pause = document.querySelector('.pause');
  function syncPause(){stage.classList.toggle('paused',paused);pause.textContent=paused?'▶ Reanudar movimiento':'Ⅱ Pausar movimiento';pause.setAttribute('aria-pressed',String(paused));}
  pause.addEventListener('click',()=>{paused=!paused;syncPause();});syncPause();
  const dialog = document.querySelector('dialog');
  let lastTrigger;
  function showPhoto(item,trigger){lastTrigger=trigger;dialog.querySelector('img').src=url(item,true);dialog.querySelector('img').alt=`Bizcocho: ${item.title}`;dialog.querySelector('h2').textContent=item.title;dialog.showModal();}
  dialog.querySelector('button').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>lastTrigger?.focus());
  function render(){
    stage.replaceChildren();const selected=photos.filter(p=>category==='todos'||p.category===category);
    const preferredRows=innerWidth<600?4:innerWidth<1000?3:2;
    const rowCount=Math.max(1,Math.min(preferredRows,Math.floor(selected.length/Math.ceil(innerWidth/(innerWidth<600?209:263)))));
    document.querySelector('#gallery-count').textContent=`${selected.length} bizcochos`;
    for(let row=0;row<Math.min(rowCount,selected.length);row++){
      const items=selected.filter((_,i)=>i%rowCount===row);const viewport=document.createElement('div');viewport.className='gallery-row';const track=document.createElement('div');track.className='gallery-track';
      for(let copy=0;copy<2;copy++) for(const item of items){const button=document.createElement('button');button.type='button';button.className='gallery-item';button.setAttribute('aria-label',`Ampliar foto ${item.id}: ${item.title}`);if(copy){button.tabIndex=-1;button.setAttribute('aria-hidden','true');}const img=document.createElement('img');img.src=url(item);img.alt=`Bizcocho: ${item.title}`;img.loading='lazy';img.width=229;img.height=229;const caption=document.createElement('span');caption.textContent=item.title;const number=document.createElement('b');number.textContent=String(item.id).padStart(2,'0');caption.append(number);button.append(img,caption);button.addEventListener('click',()=>showPhoto(item,button));track.append(button);}
      viewport.append(track);stage.append(viewport);
    }
  }
  document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{category=button.dataset.category;document.querySelectorAll('.filter').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});render();}));
  let size=innerWidth<600?0:innerWidth<1000?1:2;addEventListener('resize',()=>{const next=innerWidth<600?0:innerWidth<1000?1:2;if(next!==size){size=next;render();}});render();
}
