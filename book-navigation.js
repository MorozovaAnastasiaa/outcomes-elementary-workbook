'use strict';
(()=>{
 const unit=location.pathname.endsWith('unit2.html')?2:1;
 const requested=Number(new URLSearchParams(location.search).get('page'));
 const page=(!/\/unit2?\.html$/.test(location.pathname))?4:(unit===2?(requested>=10&&requested<=15?requested:10):(requested>=5&&requested<=9?requested:5));
 const names={4:'Introductions',5:'Countries and conversations',6:'Jobs',7:'Reading and forms',8:'Describing places',9:'Grammar and quiz',10:'Free time',11:'Arrangements and listening',12:'Daily routines',13:'Notices and classroom objects',14:'Pronunciation and grammar',15:'Writing and quiz'};
 const totals={4:27,5:36,6:43,7:35,8:16,9:38,10:21,11:34,12:47,13:25,14:40,15:29};
 const url=n=>n===4?'index.html':`${n<10?'unit':'unit2'}.html?page=${n}`;
 const el=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text)e.textContent=text;return e;};
 const aside=document.querySelector('aside'),main=document.querySelector('main'),tasks=aside.querySelector('nav');
 document.body.classList.add('tree-layout');
 const crumbs=el('div','breadcrumbs',`Workbook / Unit ${unit} / ${names[page]}`);main.prepend(crumbs);
 if(tasks){tasks.classList.add('exercise-shortcuts');tasks.setAttribute('aria-label','Exercises in this section');const wrap=el('div','exercise-shortcut-wrap');wrap.append(el('span','eyebrow','EXERCISES'),tasks);const hero=main.querySelector('.hero');if(hero)hero.after(wrap);else crumbs.after(wrap);}
 const panel=el('div','book-tree');panel.id='book-tree';
 panel.append(el('div','eyebrow','WORKBOOK CONTENTS'),el('h2','book-title','Outcomes'),el('p','book-subtitle','Elementary · Workbook'));
 const tree=el('nav','chapter-tree');tree.setAttribute('aria-label','Units and sections');panel.append(tree);
 const badges={};
 for(const u of [1,2]){const details=el('details','chapter');details.open=u===unit;const summary=el('summary',null,`Unit ${u} · ${u===1?'People and places':'Free time'}`);details.append(summary);const list=el('div','chapter-pages');for(let n=u===1?4:10;n<=(u===1?9:15);n++){const a=el('a','chapter-page');a.href=url(n);if(n===page)a.setAttribute('aria-current','page');a.append(el('span','chapter-name',names[n]));const meta=el('span','chapter-meta');meta.append(el('span',null,`P. ${n}`));const count=el('span','chapter-count');badges[n]=count;meta.append(count);a.append(meta);list.append(a);}details.append(list);tree.append(details);}
 panel.append(el('p','tree-legend','Progress shows answers filled in. Check each exercise to see which answers are correct.'));
 aside.prepend(panel);
 const toggle=el('button','contents-toggle','☰ Contents');toggle.type='button';toggle.setAttribute('aria-controls','book-tree');toggle.setAttribute('aria-expanded','false');aside.prepend(toggle);toggle.onclick=()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));aside.classList.toggle('contents-open',open);};
 const bottom=el('nav','page-bottom');bottom.setAttribute('aria-label','Previous and next sections');if(page>4){const a=el('a',null,'← '+names[page-1]);a.href=url(page-1);bottom.append(a);}if(page<15){const a=el('a',null,names[page+1]+' →');a.href=url(page+1);bottom.append(a);}main.append(bottom);
 function update(){for(let n=4;n<=15;n++){let state={};try{state=JSON.parse(localStorage.getItem(`outcomes-workbook-unit${n<10?1:2}-p${n}-interactive-v1`)||'{}')||{};}catch{}const count=Object.values(state).filter(v=>typeof v==='string'&&v.trim()).length;badges[n].textContent=`${count} / ${totals[n]}`;badges[n].title='Answers filled in';}}
 update();window.addEventListener('unit-progress',update);window.addEventListener('storage',update);document.addEventListener('input',update);document.addEventListener('change',update);document.addEventListener('click',()=>queueMicrotask(update));
})();
