'use strict';
// Explicit Workbook filenames; Student's Book recordings are not used.
(()=>{
 const path=name=>`audio/workbook/${encodeURIComponent(name)}.mp3`;
 function connect(player,track,container,caption){
   player.hidden=false;player.preload='metadata';
   if(track!=='12'){player.src=path(track[0]+'.'+track[1]);caption.textContent=`Workbook · ${track[0]}.${track[1]}`;}
   else {
     const label=document.createElement('label');label.textContent='Conversation: ';label.style.cssText='display:block;font-size:12px;margin:10px 0';
     const select=document.createElement('select');select.setAttribute('aria-label','Choose a conversation from track 1.2');select.style.cssText='font:inherit;padding:7px;border:1px solid #bdcfb5;border-radius:6px;background:transparent';
     [1,2,3].forEach(n=>select.add(new Option(`Conversation ${n}`,String(n))));label.append(select);container.insertBefore(label,player);
     function load(play){player.src=path(`1.2 (${select.value})`);caption.textContent=`Workbook · 1.2 · Conversation ${select.value}`;if(play)player.play().catch(()=>{});}
     select.onchange=()=>load(!player.paused);player.addEventListener('ended',()=>{if(Number(select.value)<3){select.value=String(Number(select.value)+1);load(true);}});load(false);
   }
   player.addEventListener('error',()=>{caption.textContent='Audio could not be loaded. Refresh the page and try again.';});
 }
 document.querySelectorAll('.audio-slot[data-track]').forEach(slot=>{const track=slot.dataset.track.replace('.','');if(!['11','12','13','14','21','22','23','24'].includes(track))return;const label=slot.querySelector('label');if(label)label.style.display='none';connect(slot.querySelector('audio'),track,slot,slot.querySelector('p'));});
 ['11','12'].forEach(track=>{const player=document.getElementById('player-'+track);if(!player)return;document.getElementById('audio-'+track).closest('label').style.display='none';connect(player,track,player.parentElement,document.getElementById('name-'+track));});
 const card=document.querySelector('.audio-card');if(card){const p=card.querySelector('p');if(p)p.textContent='Audio Workbook is ready. In exercise 1.2 the three conversations play in sequence.';}
})();