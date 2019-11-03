let input;
// = document.createElement("div");
// div.className = "letters";
// div.innerHTML = "q";
// document.body.append(div);





const keyboard ={
    '+27' : ['Esc','Esc'],
    '+112' : ['F1','F1'],
    '+113' : ['F2','F2'],
    '+114' : ['F3','F3'],
    '+115' : ['F4','F4'],
    '+116' : ['F5','F5'],
    '+117' : ['F6','F6'],
    '+118' : ['F7','F7'],
    '+119' : ['F8','F8'],
    '+120' : ['F9','F9'],
    '+121' : ['F10','F10'],
    '+122' : ['F11','F11'],
    '+123' : ['F12','F12'],

    '+49' : ['1','1'],
    '+50' : ['2','2'],
    '+51' : ['3','3'],
    '+52' : ['4','4'],
    '+53' : ['5','5'],
    '+54' : ['6','6'],
    '+55' : ['7','7'],
    '+56' : ['8','8'],
    '+57' : ['9','9'],
    '+48' : ['0','0'],
    '+8' : ['Back','Back'],

    "+9" : ['Tab','Tab'],
    '+81' : ['q','й'],
    '+87' : ['w','ц'],
    '+69' : ['e','у'],
    '+82' : ['r','к'],
    '+84' : ['t','е'],
    '+89' : ['y','н'],
    '+85' : ['u','г'],
    '+73' : ['i','ш'],
    '+79' : ['o','щ'],
    '+80' : ['p','з'],
    '+' : ['q','х'],
    '+' : ['q','ъ'],

    '+14' : ['Caps Lock','Caps Lock'],
    '+65' : ['a','ф'],
    '+83' : ['s','ы'],
    '+68' : ['d','в'],
    '+70' : ['f','а'],
    '+71' : ['g','п'],
    '+72' : ['h','р'],
    '+74' : ['j','о'],
    '+75' : ['k','л'],
    '+76' : ['l','д'],
    '+' : ['','ж'],
    '+' : ['','э'],
    '+13' :['Enter','Enter'],

    '+16' : ['Shift','Shift'],
    '+90' : ['z','я'],
    '+88' : ['x','ч'],
    '+67' : ['c','с'],
    '+86' : ['v','м'],
    '+66' : ['b','и'],
    '+78' : ['n','т'],
    '+77' : ['m','ь'],
    '+' : ['q','б'],
    '+' : ['q','ю'],
    '+16' : ['Shift','Shift'],

    '+17' : ['Ctrl','Ctrl'],
    '+91' : ['Win','Win'],   
    '+18' : ['Alt','Alt'],
    '+32' : [ 'Space ','Пробел'],
    '+18' : ['Alt','Alt'],
    '+92' : ['Win','Win'],  
    '+17' : ['Ctrl','Ctrl'],













    
    
    
    
    '+20' : ['Pause','Pause'],
    
    
    '+33' : ['Page Up','Page Up'],
    '+34' : ['Page Down','Page Dawn'],
    '+35' : ['End','End'],
    '+36' : ['Home','Home'],
    '+45' : ['Insert','Insert'],
    '+46' : ['Delete','Delete'],

    '+44' : ['Prt Scr','Prt Scr'],
    '+145' : ['Scroll lock','Scroll lock'],
    '+37' : ['Left arrow','Left arrow'],
    '+38' : ['Up arrow','Up arrow'],
    '+39' : ['Right arrow','Right arrow'],
    '+40' : ['Down arrow', 'Down arrow'],
}

for(key in keyboard){
    button =document.createElement("button");
    button.className ='letters'+' '+ keyboard[key][0];
    button.innerHTML = keyboard[key][0];
    document.body.append(button);
}