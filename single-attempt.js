'use strict';
(()=>{
 const first=(!/\/unit2?\.html$/.test(location.pathname));
 const page=first?4:currentPage;
 
 let submitted={};let readable=true;
 try{submitted=SubmissionStore.load(page);}catch{readable=false;}
 const entries=first?items.map(f=>({id:f.id,ex:String(f.ex),label:f.label||f.id,expected:(f.answers||[f.answer])[0],read:()=>String(state[f.id]||''),correct:()=>hasValue(f)&&right(f),restore:v=>{state[f.id]=v;const input=document.getElementById('input-'+f.id);if(input)input.value=v;},wrapper:document.querySelector(`[data-field="${f.id}"], [data-choice="${f.id}"]`),feedback:document.getElementById('feedback-'+f.id)})):controls.map(c=>({id:c.id,ex:c.ex,label:c.input.getAttribute('aria-label'),expected:c.def.a[0],read:()=>String(answers[c.id]||''),correct:()=>!!String(answers[c.id]||'').trim()&&answerMatches(c.def,answers[c.id]),restore:v=>{answers[c.id]=v;c.input.value=v;},wrapper:c.wrapper,feedback:c.feedback}));
 const ids=[...new Set(entries.map(e=>e.ex))];
 const info=document.createElement('p');info.className='single-attempt-note';info.textContent='One attempt per exercise. Complete every answer before checking. Your answers will be locked and corrections shown. Results are saved in this browser only.';document.querySelector('.hero').after(info);
 document.querySelector('#reset-page').hidden=true;
 const oldHistory=document.querySelector('#quiz-history');if(oldHistory)oldHistory.hidden=true;
 function paint(id){const result=submitted[id];if(!result)return;const section=document.getElementById('task-'+id);for(const e of entries.filter(e=>e.ex===id)){const a=result.answers.find(a=>a.id===e.id);if(!a)continue;e.restore(a.value);e.wrapper.classList.remove('bad','good','blank');e.wrapper.classList.add(a.correct?'good':'bad');e.feedback.textContent=a.correct?'✓ Correct':`Correct answer: ${a.expected}`;for(const input of e.wrapper.querySelectorAll('input,select,button')){input.disabled=true;if(input.matches('input,select'))input.setAttribute('aria-invalid',String(!a.correct));if(input.matches('button[data-value]'))input.setAttribute('aria-pressed',String(input.dataset.value===a.value));}}
 section.querySelector('.result').textContent=`Submitted · ${result.correct} / ${result.answers.length} correct · Answers locked`;
 const check=section.querySelector('.task-actions button');check.disabled=true;check.textContent='Submitted';section.querySelector('.reveal').hidden=true;
 }
 function refresh(){if(first)progress();else updateProgress();window.dispatchEvent(new Event('unit-progress'));const done=ids.filter(id=>submitted[id]);document.querySelector('#total-result').textContent=`Submitted: ${done.length} / ${ids.length} exercises. Correct: ${done.reduce((n,id)=>n+submitted[id].correct,0)} / ${done.reduce((n,id)=>n+submitted[id].answers.length,0)} checked answers.`;const check=document.querySelector('#check-page');check.disabled=done.length===ids.length||!readable;check.textContent=done.length===ids.length?'Page submitted':'Check remaining exercises';}
 function submit(targets){if(!readable)return;targets=targets.filter(id=>!submitted[id]);const missing=entries.filter(e=>targets.includes(e.ex)&&!e.read().trim());if(missing.length){const section=document.getElementById('task-'+missing[0].ex);section.querySelector('.result').textContent='Complete every answer before checking. No attempt has been submitted.';const focus=missing[0].wrapper.querySelector('button:not([disabled]),input:not([hidden]),select:not([hidden])');focus?.focus();section.scrollIntoView({block:'center',behavior:'smooth'});return;}
 const next={...submitted};for(const id of targets){const rows=entries.filter(e=>e.ex===id).map(e=>({id:e.id,label:e.label,value:e.read(),correct:!!e.correct(),expected:e.expected}));next[id]={date:new Date().toISOString(),answers:rows,correct:rows.filter(a=>a.correct).length};}
 try{SubmissionStore.save(page,next);}catch{info.textContent='Your result could not be saved. Nothing was submitted. Please check browser storage and try again.';return;}submitted=next;targets.forEach(paint);refresh();
 }
 for(const id of ids){const section=document.getElementById('task-'+id);const old=section.querySelector('.task-actions button');const check=old.cloneNode(true);old.replaceWith(check);check.onclick=()=>submit([id]);section.querySelector('.reveal').hidden=true;if(submitted[id])paint(id);if(!readable)check.disabled=true;}
 document.querySelector('#check-page').onclick=()=>submit(ids);
 if(!readable)info.textContent='Saved results could not be read. Checking is disabled to avoid overwriting your previous submission.';
 const exportButton=document.createElement('button');exportButton.textContent='Download submitted answers';exportButton.onclick=()=>{const url=URL.createObjectURL(new Blob([JSON.stringify({page,submissions:submitted},null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download=`workbook-page-${page}-results.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};document.querySelector('.summary-actions').append(exportButton);refresh();
})();
