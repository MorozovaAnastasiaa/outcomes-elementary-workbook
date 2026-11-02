'use strict';
// Transcribed from Workbook pp. 5–9; keys checked against pp. 114–115.
// Content is independent of rendering. __ marks one answer slot.
const A=(a,options,extra={})=>({a:Array.isArray(a)?a:[a],options,...extra});
const R=(text,...answers)=>({text,answers:answers.map(a=>typeof a==='object'&&!Array.isArray(a)?a:A(a))});
const C=(text,answer,options)=>R(text,A(answer,options));
const P=(src,x,y,w,h,alt)=>({src,x,y,w,h,alt});
const E=(id,title,rows=[],extra={})=>({id,title,rows,...extra});
const regions=['Africa','Asia','Europe','the Middle East','North America','Central America','South America'];
const UNIT_PAGES={
5:{title:'Countries & conversations',subtitle:'Countries, word stress and talking about your hometown',exercises:[
 E('9','Look at the pictures. Unscramble the letters and write the names of the countries. Start each country with a capital letter.',[
 R('1. zbaril → Brazil · example'),R('2. apnaj → __',A('Japan',null,{caseSensitive:true})),R('3. tlyia → __',A('Italy',null,{caseSensitive:true})),R('4. nicha → __',A('China',null,{caseSensitive:true})),R('5. yakne → __',A('Kenya',null,{caseSensitive:true}))
 ],{category:'VOCABULARY · COUNTRIES',photos:[P(5,.035,.25,.405,.29,'Country outlines: 1 Brazil, 2 unlabelled country, 3 unlabelled country, 4 unlabelled country, 5 unlabelled country')]}),
 E('10','Complete the names of the countries with the vowels (a, e, i, o, u).',[
 R('1. P o l a n d → Poland · example'),R('2. M _ x _ c _ → __','Mexico'),R('3. C _ n _ d _ → __','Canada'),R('4. S _ _ d _ _ r _ b _ _ → __','Saudi Arabia'),R('5. S p _ _ n → __','Spain')
 ],{helper:'Type the full country name.'}),
 E('11','Select the correct region for each country from exercises 9 and 10.',[
 R('Brazil → South America · example'),C('Kenya → __','Africa',regions),C('Japan → __','Asia',regions),C('Italy → __','Europe',regions),C('China → __','Asia',regions),C('Poland → __','Europe',regions),C('Mexico → __','Central America',regions),C('Canada → __','North America',regions),C('Saudi Arabia → __','the Middle East',regions),C('Spain → __','Europe',regions)
 ],{helper:'Choose a region for each country. The grouping follows the workbook answer key, including Mexico → Central America.'}),
 E('12','Listen and select the number of syllables in each word.',[
 C('Japan → __','2 syllables',['1 syllable','2 syllables']),C('Kenya → __','2 syllables',['1 syllable','2 syllables']),C('Italy → __','3 syllables',['2 syllables','3 syllables'])
 ],{category:'PRONUNCIATION · SYLLABLE STRESS',track:'1.3',note:'Language note\nA syllable is a part of a word that has a vowel sound.\nThe word name has one syllable.\nThe word surname has two syllables.\nThe word Italy has three syllables.'}),
 E('13','Listen again and select the stressed syllable.',[
 C('Japan: Ja · pan → __','pan',['Ja','pan']),C('Kenya: Ken · ya → __','Ken',['Ken','ya']),C('Italy: It · a · ly → __','It',['It','a','ly'])
 ],{helper:'Select the stressed syllable. Use track 1.3 from exercise 12.'}),
 E('14','Listen and select the stress pattern for each word.',[
 C('China → __','Oo',['oO','Oo','Ooo']),C('Mexico → __','Ooo',['oO','Oo','Ooo']),C('Brazil → __','oO',['oO','Oo','Ooo'])
 ],{track:'1.4',bank:['China','Mexico','Brazil'],note:'Groups from exercise 13: oO — Japan; Oo — Kenya; Ooo — Italy. Capital O marks the stressed syllable.'}),
 E('15','Complete the conversations with the phrases below.',[
 R('1. A: I’m from Brazil. · example\nB: Oh, which part?\nA: Recife. Do you know it?\nB: No.\nA: __ the north.',"It's in"),
 R('2. A: Where __ from?\nB: Italy.\nA: Which part?\nB: Rome. It’s __.', 'are you','the capital'),
 R('3. A: Is __ English?\nB: No. She’s from Poland.\nA: Oh! I’m from Poland. __ is your mum from?\nB: Gdansk.\nA: Oh, me too!','your mum','Which part')
 ],{category:'DEVELOPING CONVERSATIONS · WHICH PART?',bank:['are you','the capital','I’m from','It’s in','your mum','Which part']}),
 E('16','Look at the map of Poland. Read the text and choose the correct words.',[
 R('Hi, I’m Dagmara. I’m from Poland. Warsaw is the capital. · example'),
 C('It’s in the __. It’s a great place.','east',['west','east']),C('But I’m not from Warsaw. I’m from Gdansk. Do you know it? It’s in the __.','north',['north','south']),C('My mum’s from Krakow in the __,','south',['north','south']),C('and my dad’s from Lodz in the __.','middle',['middle','east']),C('My grandparents are from Poznan in the __.','west',['east','west'])
 ],{photos:[P(5,.747,.782,.202,.151,'Map of Poland showing Gdansk, Warsaw, Poznan, Lodz and Krakow')]})
]},
6:{title:'Jobs & present simple',subtitle:'Jobs, questions and short answers',exercises:[
 E('1','Complete the descriptions with the words in the box.',[
 R('1. I’m a __. I work in a large hospital here in Warsaw.','nurse'),R('2. Elena is a __ in a secondary school in Valencia.','teacher'),R('3. I answer the phone in a language school in Rome. I’m a __.','receptionist'),R('4. Suki works as a __ in a department store in Osaka.','shop assistant'),R('5. I work in a government office in Stockholm. I’m a __.','civil servant'),R('6. Ana works in a small studio in New York as a __.','designer'),R('7. Michel is a __. He works in a famous restaurant in Paris.','waiter'),R('8. I’m a __. I work on the street and protect people.','police officer')
 ],{category:'VOCABULARY · JOBS AND WORKPLACES',bank:['civil servant','designer','nurse','police officer','receptionist','shop assistant','teacher','waiter']}),
 E('2','Match the sentences (1–8) in exercise 1 to photos (a–h).',[
 ...[['a','4'],['b','5'],['c','8'],['d','1'],['e','2'],['f','7'],['g','6'],['h','3']].map(([l,a])=>C('Photo '+l+' → sentence __',a,['1','2','3','4','5','6','7','8']))
 ],{photos:[P(6,.141,.407,.459,.338,'Pictures of jobs a–h: shop assistant, civil servant, police officer, healthcare worker, teacher, waiter, designer and secretary')],helper:'The numbers refer to the sentences in exercise 1.'}),
 E('3','Select the correct words to complete the dialogues.',[
 C('1. A: What __ you do?','do',['are','do']),C('B: I __ a teacher.',"'m",['do',"'m"]),C('A: Where __ you teach?','do',['are','do']),C('B: I __ English.','teach', ["'m",'teach']),
 C('2. C: What __ your job?','is',['is','do']),C('D: I __ a designer.',"'m",["'m",'work']),C('C: Where __ you work?','do',['are','do']),C('D: I work in a studio in Tokyo.\nC: __ you enjoy your work?','Do',['Are','Do']),C('D: __ love it.','I',['I',"I'd"])
 ],{helper:'Select one answer for each gap.'}),
 E('4','Correct the sentences.',[
 R('1. Where he live? → Where does he live? · example'),R('2. Who does you live with?\n__','Who do you live with?'),R('3. What time are they get up?\n__','What time do they get up?'),R('4. What do you in your free time?\n__','What do you do in your free time?'),R('5. How does they travel here?\n__','How do they travel here?'),R('6. How many languages are you speak?\n__','How many languages do you speak?')
 ],{category:'GRAMMAR · PRESENT SIMPLE',long:true}),
 E('5','Match the answers below with the questions in exercise 4.',[
 R('a. Around six. → 3 · example'),C('b. Near the city centre. → __','1',['1','2','3','4','5','6']),C('c. They walk. → __','5',['1','2','3','4','5','6']),C('d. One. English! → __','6',['1','2','3','4','5','6']),C('e. My parents. → __','2',['1','2','3','4','5','6']),C('f. I go running. → __','4',['1','2','3','4','5','6'])
 ]),
 E('6','Write questions from the prompts.',[
 R('1. you work / in an office → Do you work in an office? · example'),R('2. they work / in a secondary school\n__','Do they work in a secondary school?'),R('3. she speak / Italian\n__','Does she speak Italian?'),R('4. he / play football\n__','Does he play football?'),R('5. you and your family live / in Scotland\n__','Do you and your family live in Scotland?')
 ],{long:true}),
 E('7','Write negative answers to the questions in exercise 6.',[
 R('1. No, I don’t. · example'),R('2. __',["No, they don't.",'No, they do not.']),R('3. __',["No, she doesn't.",'No, she does not.']),R('4. __',["No, he doesn't.",'No, he does not.']),R('5. __',["No, we don't.",'No, we do not.'])
 ],{long:true})
]},
7:{title:'Applications & reading',subtitle:'Forms, personal information and reading comprehension',exercises:[
 E('8','Is this an application form for …',[
 C('Choose one answer: __','a job',['a job','a place at a university','a college course'])
 ],{category:'DEVELOPING WRITING · AN APPLICATION FORM',reading:[{title:'JOB APPLICATION',text:'First name: Carlo\nSurname: Mancini\nAddress: 24101 Via Berbera, Verona, 37191, Italy\nTelephone: 041 450216\nCurrent occupation: Waiter\nEmail address: cmancini@ciaomail.com\nCountry of origin: Italy\nPosition applied for: Waiter\n\nDescribe yourself in 20–30 words.\nI’m a waiter. I work in a small restaurant in Verona, a beautiful city in the north of Italy. I want to work in London and study English.'}]}),
 E('9','Complete the description. Use the information in the application form.',[
 R('Carlo __ is a __. He works in a __ in __, in the north of __. He wants to work in __. He wants to study __.','Mancini','waiter','restaurant','Verona','Italy','London','English')
 ],{helper:'Use the form Carlo from exercise 8.'}),
 E('10','Look at the documents and complete the job application form. Use capital letters where necessary.',[
 R('First name: __',A('Ben',null,{caseSensitive:true})),R('Surname: __',A('Herman',null,{caseSensitive:true})),R('Address: __',A(['24 Lime Street, Oxford, OX12 1L5','24 Lime Street, Oxford OX12 1L5'],null,{caseSensitive:true})),R('Telephone: __',['01842 712704','01842712704']),R('Current occupation: __',['Art teacher','art teacher']),R('Email address: __','hermanb@art.com'),R('Country of origin: __',A('England',null,{caseSensitive:true})),R('Position applied for: __','designer'),
 R('Describe yourself in 20–30 words.\nI’m an art teacher. I work in a __ in __, a beautiful city in the centre of __. I want to work as a __ in __.',A(['college','college of art'],null),A('Oxford',null,{caseSensitive:true}),A('England',null,{caseSensitive:true}),'designer',A('Cape Town',null,{caseSensitive:true}))
 ],{long:true,reading:[{title:'HAWTHORN ART COLLEGE, OXFORD',text:'Ben Herman\nArt teacher\n24 Lime Street, Oxford, OX12 1L5\nTel: 01842 712704\nemail: hermanb@art.com'},{title:'University of South Blackpool Students’ Union',text:'Designer\nSalary £25,000\nWe are looking for a designer to join our small, friendly team in a sunny studio in Cape Town.\nwww.ubsu.co.uk'}]}),
 E('11','Read the three texts. Do they come from …',[
 C('Choose one answer: __','a website',['a newspaper','a website','a school notice board'])
 ],{category:'READING',reading:[
 {title:'Name: Angelika · Occupation: Teacher · Country: Germany',text:'Hi. I’m Angelika. I’m from Hamburg, in Germany. Hamburg’s in the north.\nI’m a teacher. I work in a big secondary school in the centre of the city.\nI really enjoy my job. It’s great!'},
 {title:'Name: Jianyu · Occupation: Civil Servant · Country: China',text:'I’m Jianyu. I’m from Guangzhou, in China. It’s a big city in the south of the country. It has a population of 14 million people. There are a lot of people! I’m a civil servant. I work in a government office. It’s boring. I want a different job. I want to become a police officer.'},
 {title:'Name: Salima · Occupation: Nurse · Country: Morocco',text:'Hello. I’m Salima from Morocco. I live in a small town called Rommani. 15,000 people live here. I’m a nurse. I work in a hospital. It’s difficult because I work very long hours, but I like my job.'}
 ],note:'Glossary\ncity: a very big, important town\npopulation: the number of people who live in a place\ntown: a small city'}),
 E('12','For each person, answer the following questions.',[
 R('1a. What’s her name? __',['Angelika','Her name is Angelika']),R('1b. What’s his name? __',['Jianyu','His name is Jianyu']),R('1c. What’s her name? __',['Salima','Her name is Salima']),
 R('2a. Where’s she from? __',['Germany',"She's from Germany",'She is from Germany']),R('2b. Where’s he from? __',['China',"He's from China",'He is from China']),R('2c. Where’s she from? __',['Morocco',"She's from Morocco",'She is from Morocco']),
 R('3a. Where does she work? __',['in a school','in a secondary school','in a big secondary school','She works in a school','She works in a secondary school','She works in a big secondary school']),R('3b. Where does he work? __',['in a government office','He works in a government office']),R('3c. Where does she work? __',['in a hospital','She works in a hospital'])
 ],{long:true,helper:'a — Angelika; b — Jianyu; c — Salima. You can give a short answer.'}),
 E('13','Who is each sentence about? Write A for Angelika, J for Jianyu and S for Salima.',[
 C('1. He / She works long hours. __','S',['A','J','S']),C('2. He / She wants to be a police officer. __','J',['A','J','S']),C('3. He / She works in a secondary school. __','A',['A','J','S']),C('4. He / She works for the government. __','J',['A','J','S'])
 ])
]},
8:{title:'Describing places',subtitle:'Places, buildings and plurals',exercises:[
 E('1','Find ten words for things in a city in the wordsnake. Now write the words next to the correct number in the list below.',[
 R('1. river · example'),R('2. __','traffic'),R('3. __','palace'),R('4. __','church'),R('5. __','factory'),R('6. __','university'),R('7. __','cathedral'),R('8. __','restaurant'),R('9. __','park'),R('10. __','beach')
 ],{category:'VOCABULARY · DESCRIBING PLACES',snake:'rivertrafficpalacechurchfactoryuniversitycathedralrestaurantparkbeach',photos:[P(8,.112,.514,.877,.449,'Labelled town map 1–10: find the names of the places')],helper:'Find the words in the word snake, then label the picture. Click the picture to enlarge it.'}),
 E('2','Write the plurals of the words. Which word has no plural?',[
 R('1. river → __','rivers'),R('2. beach → __','beaches'),R('3. park → __','parks'),R('4. factory → __','factories'),R('5. traffic → __',['traffic','no plural','traffic has no plural']),R('6. palace → __','palaces'),C('Which word has no plural? __','traffic',['river','beach','park','factory','traffic','palace'])
 ],{note:'Language note\nLook at the spelling of plurals.\nriver – rivers\nchurch – churches\nuniversity – universities',helper:'If the word has no plural, use its original form.'})
]},
9:{title:'There is / there are & quiz',subtitle:'Describing a town and testing your vocabulary',exercises:[
 E('3','Select the correct phrases to complete the sentences.',[
 C('1. __ a few cafés in the High Street.','There are',["There's",'There are']),C('2. __ a lot of traffic in the city.',"There's",["There's",'There are']),C('3. __ any good restaurants.',"There aren't",["There isn't","There aren't"]),C('4. __ much crime near the station.',"There isn't",["There isn't","There aren't"]),C('5. __ too many people at the beach.','There are',["There's",'There are'])
 ],{category:'GRAMMAR · THERE IS / THERE ARE',helper:'Select one answer for each gap.'}),
 E('4','Look at the picture. Complete the sentences with There’s, There isn’t, There are or There aren’t.',[
 R('1. __ a river in the city.',["There isn't",'There is not']),R('2. __ some restaurants.','There are'),R('3. __ any people on the beach.',["There aren't",'There are not']),R('4. __ a beach near the city.',["There's",'There is']),R('5. __ much traffic.',["There isn't",'There is not']),R('6. __ two churches.','There are'),R('7. __ many trees in the park.',["There aren't",'There are not']),R('8. __ two cinemas in town.','There are')
 ],{photos:[P(9,.03,.454,.38,.438,'Town illustration: beach, park, traffic, churches, restaurants and two cinemas')]}),
 E('q1','Complete the sentences with nouns formed from the verbs in brackets.',[
 R('1. She’s a __ in that new restaurant. (wait)','waiter'),R('2. Do you know that Kevin’s a civil __ now? (serve)','servant'),R('3. She wants to be a fashion __. (design)','designer'),R('4. I’m a __ at Sheffield University. (study)','student'),R('5. Caleb works as a shop __ here. (assist)','assistant')
 ],{category:'VOCABULARY BUILDER QUIZ 1 · 1',quiz:true,note:'The workbook suggests downloading Vocabulary Builder for Unit 1, complete the quiz and record your score. The quiz is available here; a separate copy of Vocabulary Builder is not available here.'}),
 E('q2','Complete the collocations with the correct preposition.',[
 R('1. The other people __ my class are really nice.','in'),R('2. The building is in the middle __ the city.','of'),R('3. She works __ the north of the city.','in'),R('4. My brother works __ the government.','for'),R('5. I often go swimming __ my free time.','in')
 ],{category:'VOCABULARY BUILDER QUIZ 1 · 2',quiz:true}),
 E('q3','Select the word or phrase that does not collocate.',[
 C('1. I work … Select the phrase that does not fit: __','a job',['a job','in a city','at home','every day']),C('2. She likes … Select the phrase that does not fit: __','there',['her job','the area','there','this city']),C('3. Do you live … ? Select the phrase that does not fit: __','long hours',['on your own','in a house','long hours','in an old building']),C('4. Do you want … ? Select the phrase that does not fit: __','at night',['to become a teacher','to sleep','a different job','at night']),C('5. You can walk … Select the phrase that does not fit: __','at the police station',['everywhere','at the police station','to work','to the river'])
 ],{category:'VOCABULARY BUILDER QUIZ 1 · 3',quiz:true,helper:'Choose the phrase that does NOT fit.'}),
 E('q4','Match the words (1–5) to their opposites (a–e).',[
 C('1. cheap → __','b · expensive',['a · late','b · expensive','c · interesting','d · big','e · short']),C('2. boring → __','c · interesting',['a · late','b · expensive','c · interesting','d · big','e · short']),C('3. long → __','e · short',['a · late','b · expensive','c · interesting','d · big','e · short']),C('4. early → __','a · late',['a · late','b · expensive','c · interesting','d · big','e · short']),C('5. small → __','d · big',['a · late','b · expensive','c · interesting','d · big','e · short'])
 ],{category:'VOCABULARY BUILDER QUIZ 1 · 4',quiz:true}),
 E('q5','Complete the sentences with the words in the box.',[
 R('1. There’s a service in the __ every Sunday.','cathedral'),R('2. My brother is a student at the __.','university'),R('3. Do you want to spend a day at the __ next weekend?','beach'),R('4. They’re opening a new car __ in my town.','factory'),R('5. You can see some amazing old things in the __.','museum')
 ],{category:'VOCABULARY BUILDER QUIZ 1 · 5',quiz:true,bank:['beach','cathedral','factory','museum','university'],after:'Wait a couple of weeks and try the quiz again. Compare your scores.'})
]}
};
if(typeof module!=='undefined')module.exports={UNIT_PAGES};
