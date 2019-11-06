let Caps = false;
let shift = false;
const keyboard = {
  "1": ["Esc", "Esc", "Esc", "27"],
  "2": ["F1", "F1", "F1", "112"],
  "3": ["F2", "F2", "F2", "113"],
  "4": ["F3", "F3", "F3", "114"],
  "5": ["F4", "F4", "F4", "115"],
  "6": ["F5", "F5", "F5", "116"],
  "7": ["F6", "F6", "F6", "117"],
  "8": ["F7", "F7", "F7", "118"],
  "9": ["F8", "F8", "F8", "119"],
  "10": ["F9", "F9", "F9", "120"],
  "11": ["F10", "F10", "F10", "121"],
  "12": ["F11", "F11", "F11", "122"],
  "13": ["F12", "F12", "F12", "123"],

  "14": ["`", "ё", "num", "192"],
  "15": ["1", "1", "num", "49"],
  "16": ["2", "2", "num", "50"],
  "17": ["3", "3", "num", "51"],
  "18": ["4", "4", "num", "52"],
  "19": ["5", "5", "num", "53"],
  "20": ["6", "6", "num", "54"],
  "21": ["7", "7", "num", "55"],
  "22": ["8", "8", "num", "56"],
  "23": ["9", "9", "num", "57"],
  "24": ["0", "0", "num", "48"],
  "25": ["-", "-", "num", "189"],
  "26": ["=", "=", "num", "187"],
  "27": ["|", "|", "num", "220"],
  "28": ["Back", "Back", "Back", "8"],

  "29": ["Tab", "Tab", "Tab", "9"],
  "30": ["q", "й", "letter", "81"],
  "31": ["w", "ц", "letter", "87"],
  "32": ["e", "у", "letter", "69"],
  "33": ["r", "к", "letter", "82"],
  "34": ["t", "е", "letter", "84"],
  "35": ["y", "н", "letter", "89"],
  "36": ["u", "г", "letter", "85"],
  "37": ["i", "ш", "letter", "73"],
  "38": ["o", "щ", "letter", "79"],
  "39": ["p", "з", "letter", "80"],
  "40": ["[", "х", "letter", "219"],
  "41": ["]", "ъ", "letter", "221"],
  "42": ["open", "open", "Open", ""],

  "43": ["Caps Lock", "Caps Lock", "Caps", "20"],
  "44": ["a", "ф", "letter", "65"],
  "45": ["s", "ы", "letter", "83"],
  "46": ["d", "в", "letter", "68"],
  "47": ["f", "а", "letter", "70"],
  "48": ["g", "п", "letter", "71"],
  "49": ["h", "р", "letter", "72"],
  "50": ["j", "о", "letter", "74"],
  "51": ["k", "л", "letter", "75"],
  "52": ["l", "д", "letter", "76"],
  "53": [";", "ж", "letter", "186"],
  "54": ["'", "э", "letter", "222"],
  "55": ["Enter", "Enter", "Enter", "13"],

  "56": ["Shift Left", "Shift Left", "Shift", "16"],
  "57": ["z", "я", "letter", "90"],
  "58": ["x", "ч", "letter", "88"],
  "59": ["c", "с", "letter", "67"],
  "60": ["v", "м", "letter", "86"],
  "61": ["b", "и", "letter", "66"],
  "62": ["n", "т", "letter", "78"],
  "63": ["m", "ь", "letter", "77"],
  "64": [",", "б", "letter", "188"],
  "65": [".", "ю", "letter", "190"],
  "66": ["/", ".", "letter", "191"],
  "67": ["Shift Right", "Shift Right", "Shift", "16"],

  "68": ["Ctrl l", "Ctrl l", "Ctrl", "17"],
  "69": ["Win ", "Win ", "Win", "91"],
  "70": ["Alt", "Alt", "Alt", "18"],
  "71": ["Space", "Space", "Space", "32"],
  "72": ["Alt", "Alt", "Alt", "18"],
  "73": ["Win", "Win", "Win", "92"],
  "75": ["Ctrl r", "Ctrl r", "Ctrl", "17"]

  // '76' : ['Prt Scr','Prt Scr','Scr','+44' ],
  // '77' : ['Scr lk','Scr lk','Scroll','+145'],
  // '78' : ['Pause','Pause','Pause','+19' ],

  // '79' : ['Insert','Insert','Insert','+45' ],
  // '80' : ['Home','Home','Home','+36' ],
  // '81' : ['Pg. Up','Pg. Up','Page','+33' ],
  // '82' : ['Delete','Delete','Delete','+46' ],
  // '83' : ['End','End','End','+35' ],
  // '84' : ['Pg.Dwn','Pg.Dwn','Page','+34' ],

  // '85' : ['Up','Up','Up','+38' ],
  // '86' : ['Left','Left','Left','+37'] ,
  // '87' : ['Right','Right','Right','+39' ],
  // '88' : ['Down', 'Down','Down','+40' ],
};

init();

addEventListener("click", e => {
  keys = e.srcElement.keyCode;
  text = keyboard[keys][0];
  console.log(document.getElementById(keyboard[keys][0]));
  if (
    keyboard[keys][0] === "Enter" ||
    keyboard[keys][0] === "Tab" ||
    keyboard[keys][0] === "Caps Lock" ||
    keyboard[keys][0] === "Shift Left" ||
    keyboard[keys][0] === "Ctrl r" ||
    keyboard[keys][0] === "Ctrl l" ||
    keyboard[keys][0] === "Win" ||
    keyboard[keys][0] === "Alt" ||
    keyboard[keys][0] === "Back" ||
    keyboard[keys][0] === "Shift Right" ||
    keyboard[keys][0] === "Space" ||
    keyboard[keys][0] === "Esc"
  ) {
    switch (text) {
      case "Tab":
        textArea.append("");
        break;
      case "Space":
        textArea.append(" ");
        break;

      case "Enter":
        textArea.append("\n");
        break;
      case "Caps Lock":
        document.body.innerHTML = "";

        Caps = !Caps;
        init(Caps);

        break;
      case "Ctrl l":
        textArea.append("");
        break;
        case "Ctrl r":
                textArea.append("");
                break;
      case "Shift Left":
        document.body.innerHTML = "";
        shift = !shift;
        init();
        break;
      case "Shift Right":
        document.body.innerHTML = "";
        shift = !shift;
        init();
        break;

      case "Alt":
        textArea.append("");
        break;
      case "Win":
        textArea.append("");
        break;
      case "Esc":
        textArea.append("");
        break;
      case "Back":
            //button.classList.add("active","button","element");
        textArea.textContent = textArea.textContent.substring(0,textArea.textContent.length - 1);
        break;
      default:
           
    }
  } else {
    if (Caps == true || shift == true) {
      if ((shift == true) & (Caps == true)) {
        textArea.append(keyboard[keys][0]);
      } else {
        textArea.append(keyboard[keys][0].toUpperCase());
      }
    } else {
      textArea.append(text);
    }
  }
});

function init() {
  div = document.createElement("div");
  div.id = "left";
  document.body.append(div);

  div = document.createElement("div");
  div.id = "right";
  document.body.append(div);

  textArea = document.createElement("textArea");
  textArea.className = "textArea";
  document.body.append(textArea);

  textArea.append("");

  let position;
  position = left;

  text = document.createElement("p");
  text.className = "text";

  for (keys in keyboard) {
    button = document.createElement("button");

    button.className = "letters" + " " + keyboard[keys][2];
    button.id = keyboard[keys][0];
    if (Caps == true) {
      button.classList.add("active__Caps");
    }
    if (shift == true) {
      button.classList.add("active__shift");
    }
    if (Caps == true || shift == true) {
      button.innerHTML = keyboard[keys][0].toUpperCase();
      if ((shift == true) & (Caps == true)) {
        button.innerHTML = keyboard[keys][0];
      }
    } else {
      button.innerHTML = keyboard[keys][0];
    }

    button.keyCode = keys;
    button.type = "button";
    if (
      keyboard[keys][0] === "`" ||
      keyboard[keys][0] === "Tab" ||
      keyboard[keys][0] === "Caps Lock" ||
      keyboard[keys][0] === "Shift left" ||
      keyboard[keys][0] === "Ctrl l" ||
      keyboard[keys][0] === "Win r" ||
      keyboard[keys][0] === "Insert" ||
      keyboard[keys][0] === "Delete" ||
      keyboard[keys][0] === "Left" ||
      keyboard[keys][0] === "Up"
    ) {
      br = document.createElement("br");
      position.appendChild(br);
    }
    if (keyboard[keys][0] === "Prt Scr") {
      position = right;
    }
    position.appendChild(button);
  }
}
addEventListener("keydown", e => {
  
  for (keys in keyboard) {
    if (keyboard[keys][3] == e.keyCode) {
      
      document.getElementById(keyboard[keys][0]).click(button);

     document.getElementById(keyboard[keys][0]).style.background='rgb(217, 238, 34)';
    }
  }
});
addEventListener("keyup", e => {
  
  for (keys in keyboard) {
    if (keyboard[keys][3] == e.keyCode) {
      
      document.getElementById(keyboard[keys][0]).click(button);

     document.getElementById(keyboard[keys][0]).style.background='';
    }
  }
});