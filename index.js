const keyboard ={
    '+27' : ['Esc','Esc','Esc'],
    '+112' : ['F1','F1','F1'],
    '+113' : ['F2','F2','F2'],
    '+114' : ['F3','F3','F3'],
    '+115' : ['F4','F4','F4'],
    '+116' : ['F5','F5','F5'],
    '+117' : ['F6','F6','F6'],
    '+118' : ['F7','F7','F7'],
    '+119' : ['F8','F8','F8'],
    '+120' : ['F9','F9','F9'],
    '+121' : ['F10','F10','F10'],
    '+122' : ['F11','F11','F11'],
    '+123' : ['F12','F12','F12'],

    '+192' : ['`','ё','num'],
    '+49' : ['1','1','num'],
    '+50' : ['2','2','num'],
    '+51' : ['3','3','num'],
    '+52' : ['4','4','num'],
    '+53' : ['5','5','num'],
    '+54' : ['6','6','num'],
    '+55' : ['7','7','num'],
    '+56' : ['8','8','num'],
    '+57' : ['9','9','num'],
    '+48' : ['0','0','num'],
    '+189' : ['-','-','num'],
    '+187' : ['=','=','num'],
    '+220' : ['|','|','num'],
    '+8' : ['Back','Back','Back'],

    '+9'  : ['Tab','Tab','Tab'],
    '+81' : ['q','й','letter'],
    '+87' : ['w','ц','letter'],
    '+69' : ['e','у','letter'],
    '+82' : ['r','к','letter'],
    '+84' : ['t','е','letter'],
    '+89' : ['y','н','letter'],
    '+85' : ['u','г','letter'],
    '+73' : ['i','ш','letter'],
    '+79' : ['o','щ','letter'],
    '+80' : ['p','з','letter'],
    '+219' : ['[','х','letter'],
    '+221' : [']','ъ','letter'],
    '+1223' : ['open','open','Open'],

    '+14' : ['Caps Lock','Caps Lock','Caps'],
    '+65' : ['a','ф','letter'],
    '+83' : ['s','ы','letter'],
    '+68' : ['d','в','letter'],
    '+70' : ['f','а','letter'],
    '+71' : ['g','п','letter'],
    '+72' : ['h','р','letter'],
    '+74' : ['j','о','letter'],
    '+75' : ['k','л','letter'],
    '+76' : ['l','д','letter'],
    '+186' : [';','ж','letter'],
    '+222' : ['\'','э','letter'],
    '+13' :['Enter','Enter','Enter'],

    '+16' : ['Shift ','Shift ','Shift'],
    '+90' : ['z','я','letter'],
    '+88' : ['x','ч','letter'],
    '+67' : ['c','с','letter'],
    '+86' : ['v','м','letter'],
    '+66' : ['b','и','letter'],
    '+78' : ['n','т','letter'],
    '+77' : ['m','ь','letter'],
    '+188' : [',','б','letter'],
    '+190' : ['.','ю','letter'],
    '+191' : ['/','.','letter'],
    '+162' : ['Shift','Shift','Shift'],

    '+17' : ['Ctrl','Ctrl','Ctrl'],
    '+91' : ['Win ','Win ','Win'],   
    '+18' : ['Alt','Alt','Alt'],
    '+32' : [ 'Space ','Space','Space'],
    '+18' : ['Alt','Alt','Alt'],
    '+92' : ['Win','Win','Win'],  
    '+18232' : ['Alt','Alt','Alt'],
    '+17233' : ['ctrl','ctrl','Ctrl'],

    '+44' : ['Prt Scr','Prt Scr','Scr'],
    '+145' : ['Scr lk','Scr lk','Scroll'],
    '+20' : ['Pause','Pause','Pause'],
    
    '+45' : ['Insert','Insert','Insert'],
    '+36' : ['Home','Home','Home'],
    '+33' : ['Pg. Up','Pg. Up','Page'],
    '+46' : ['Delete','Delete','Delete'],
    '+35' : ['End','End','End'],
    '+34' : ['Pg.Dwn','Pg.Dwn','Page'],
    
    '+38' : ['Up','Up','Up'],
    '+37' : ['Left','Left','Left'], 
    '+39' : ['Right','Right','Right'],
    '+40' : ['Down', 'Down','Down'],
}

div =document.createElement('div');
div.id ='left';
document.body.append(div);

div=document.createElement('div');
div.id ='right';
document.body.append(div);

textArea=document.createElement('textArea');
textArea.className='textArea';
document.body.append(textArea);

textArea.append('');

let position;
position=left;

text=document.createElement ('p');
      text.className='text';

for(keys in keyboard){
    button =document.createElement("button");
    button.className = 'letters'+' '+ keyboard[keys][2];
    button.id=keyboard[keys][0];
    button.value='button';
    button.innerHTML = keyboard[keys][0];
    button.keyCode = keys;
    button.type='submit';
    if(keyboard[keys][0] === '`'|| keyboard[keys][0]==='Tab' || keyboard[keys][0]==='Caps Lock'|| keyboard[keys][0]==='Shift left'|| keyboard[keys][0]==='Ctrl'
    ||keyboard[keys][0]==='Win r' || keyboard[keys][0]==='Insert' ||keyboard[keys][0]==='Delete' ||keyboard[keys][0]==='Left' || keyboard[keys][0]==='Up') {
        br = document.createElement('br');
        position.appendChild(br);
    }
    if (keyboard[keys][0]==='Prt Scr'){
        position=right;      
    }
    position.appendChild(button);
}
  addEventListener('click', e=> {
    keys = (e.srcElement.keyCode);
    text = keyboard[keys][0];
    textArea.append(text);
  });
  addEventListener('keydown', e =>{  
      
      console.log(e.keyCode); 
      keys='+'+(e.keyCode);
      text =''+(keyboard[keys][1]);
      console.log (text);
      if (keyboard[keys][0] === '`'|| keyboard[keys][0]==='Tab' || keyboard[keys][0]==='Caps Lock'|| keyboard[keys][0]==='Shift left'|| keyboard[keys][0]==='Ctrl'
      ||keyboard[keys][0]==='Win r' || keyboard[keys][0]==='Insert' ||keyboard[keys][0]==='Delete' ||keyboard[keys][0]==='Left' || keyboard[keys][0]==='Up'){
        textArea.append("нажата клавиша !"+text);
        console.log ('syka');
       }
       else{ 
       //console.log(num);
       let activ=keyboard[keys][0];
       //button=document.getElementById('activ');
       //button.style.background='red';
       //document.getElementById (activ);
       //console.log(activ);
    textArea.append(text);
       }
  });