'use strict';
// Keep existing select values and change handlers as the single source of answers.
document.querySelectorAll('.input-wrap select').forEach(select=>{
 const options=[...select.options].filter(o=>o.value);if(options.length>4||options.some(o=>o.text.length>30))return;
 select.hidden=true;const group=document.createElement('span');group.className='answer-buttons';group.setAttribute('role','group');group.setAttribute('aria-label',select.getAttribute('aria-label')||'Choose an answer');
 const sync=()=>{for(const b of group.querySelectorAll('button')){b.setAttribute('aria-pressed',String(b.dataset.value===select.value));const invalid=select.getAttribute('aria-invalid');if(invalid!==null)b.setAttribute('aria-invalid',invalid);else b.removeAttribute('aria-invalid');}};
 for(const o of options){const b=document.createElement('button');b.type='button';b.textContent=o.text;b.dataset.value=o.value;b.setAttribute('aria-describedby',select.getAttribute('aria-describedby')||'');b.onclick=()=>{select.value=o.value;select.dispatchEvent(new Event('change',{bubbles:true}));sync();};group.append(b);}select.after(group);sync();new MutationObserver(sync).observe(select,{attributes:true,attributeFilter:['aria-invalid']});document.querySelector('#reset-page').addEventListener('click',()=>queueMicrotask(sync));
});

