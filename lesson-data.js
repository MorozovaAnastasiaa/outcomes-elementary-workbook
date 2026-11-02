'use strict';
// Coordinates measured against the displayed scan at 1360 x 1824.
// Store content and geometry separately so future lessons can use another layout.
const W=1360,H=1824,KEY='outcomes-workbook-unit1-p4-v1';
const fields=[];
function field(id,ex,label,answer,x,y,w,h=25,options){fields.push({id,ex,label,answers:Array.isArray(answer)?answer:[answer],x,y,w,h,options});}
field('e1-2',1,'Conversation, gap 2',"'m",270,810,95,25);
field('e1-3',1,'Conversation, gap 3',"'s",504,818,86,25);
field('e1-4',1,'Conversation, gap 4','meet',338,842,98,25);
['are','is','are','are','is'].forEach((v,i)=>field(`e2-${i+2}`,2,`Full form be, item ${i+2}`,v,244,947+i*27,100,25));
[[2,"'re",210,1161],[3,"'s",210,1187],[4,"'re",482,1138],[5,"'re",482,1165],[6,"'s",482,1191]].forEach(([n,a,x,y])=>field(`e3-${n}`,3,`Contracted form, item ${n}`,a,x,y,108,25));
field('e4-2',4,'Question 2',"What's your surname?",209,1351,505,28);
field('e4-3',4,'Question 3','Where are you from?',209,1404,505,28);
field('e4-4',4,'Question 4','Which part?',209,1457,505,28);
[['b','3',1637],['c','1',1664],['d','4',1691]].forEach(([n,a,y])=>field(`e6-${n}`,6,`Matching, answer ${n}`,a,462,y,45,27,['1','2','3','4']));
[['a','3',475],['b','2',727],['c','1',976]].forEach(([n,a,y])=>field(`e7-${n}`,7,`Photo ${n}: conversation number`,a,942,y,44,29,['1','2','3']));
const choices=[
 {id:'e8-2',ex:8,label:'Conversation 2: first name',answer:'Julio',y:1341,items:[['Julio',1080,47],['da Silva',1144,93]]},
 {id:'e8-3',ex:8,label:'Conversation 2: surname',answer:'da Silva',y:1371,items:[['Julio',1081,47],['da Silva',1144,93]]},
 {id:'e8-4',ex:8,label:'Conversation 3: job',answer:'teacher',y:1435,items:[['student',1048,81],['teacher',1140,86]]},
 {id:'e8-5',ex:8,label:'Conversation 3: country',answer:'Argentina',y:1466,items:[['Argentina',1103,107],['Spain',1226,66]]},
 {id:'e8-6',ex:8,label:'Conversation 3: location',answer:'the north',y:1494,items:[['the south',1087,103],['the north',1203,104]]}
];
const exercises=[{n:1,title:'Conversation',y:400},{n:2,title:'Full forms be',y:900},{n:3,title:'Contracted forms',y:1110},{n:4,title:'Form questions',y:1240},{n:6,title:'Question → answer',y:1580},{n:7,title:'Audio → photo',y:410},{n:8,title:'Choose an answer',y:1230}];
