'use strict';
(()=>{
 document.querySelectorAll('.exercise').forEach(section=>{
  if(!section.querySelector('.input-wrap')){const actions=section.querySelector('.task-actions');if(actions)actions.hidden=true;}
 });
 if(currentPage!==15)return;
 const key='outcomes-workbook-unit2-writing-v1';let drafts={};
 try{drafts=JSON.parse(localStorage.getItem(key)||'{}');if(!drafts||typeof drafts!=='object'||Array.isArray(drafts))drafts={};}catch{}
 const status=document.createElement('p');status.className='helper';status.setAttribute('role','status');status.textContent='Writing is reviewed by your teacher and is not automatically scored. Online submission is not available yet.';
 const questions=['What’s your name?','Where do you live?','Who do you live with?','What do you do?','What do you like doing in your free time?','What do you usually do at the weekend?'];
 function field(id,label,section,rows){const box=document.createElement('label');box.className='writing-field';box.textContent=label;const input=document.createElement('textarea');input.rows=rows;input.value=typeof drafts[id]==='string'?drafts[id]:'';input.lang='en';input.id='writing-'+id;input.oninput=()=>{drafts[id]=input.value;try{localStorage.setItem(key,JSON.stringify(drafts));status.textContent='Draft saved in this browser. Your teacher will review your writing.';}catch{status.textContent='Your draft could not be saved. Download your writing to keep a copy.';}};box.append(input);section.append(box);}
 const notes=document.querySelector('#task-10');questions.forEach((q,i)=>field('note'+i,q,notes,2));
 const profile=document.querySelector('#task-11');field('profile','My web profile',profile,12);profile.append(status);
 const download=document.createElement('button');download.textContent='Download writing for your teacher';download.onclick=()=>{const text='Unit 2 — My web profile\n\n'+questions.map((q,i)=>q+'\n'+(drafts['note'+i]||'')).join('\n\n')+'\n\nMy web profile\n'+(drafts.profile||'');const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='unit-2-writing.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};profile.append(download);
})();
