let Caps = false;
let shift = false;
let string = "";
let i = 0;
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
  "43": ["Caps_Lock", "Caps_Lock", "Caps", "20"],
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
  "56": ["Shift_Left", "Shift_Left", "Shift", "16"],
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
  "67": ["Shift_Right", "Shift_Right", "Shift", "16"],
  "68": ["Ctrl_l", "Ctrl_l", "Ctrl", "17"],
  "69": ["Win ", "Win ", "Win", "91"],
  "70": ["Alt", "Alt", "Alt", "18"],
  "71": ["Space", "Space", "Space", "32"],
  "72": ["Alt", "Alt", "Alt", "18"],
  "73": ["Win", "Win", "Win", "92"],
  "74": ["Ctrl_r", "Ctrl_r", "Ctrl", "17"]
};

init();

addEventListener("click", e => {
  keys = e.srcElement.keyCode;
  text = keyboard[e.srcElement.keyCode][i];
  if (
    keyboard[keys][i] === "Enter" ||
    keyboard[keys][i] === "Tab" ||
    keyboard[keys][i] === "Caps_Lock" ||
    keyboard[keys][i] === "Shift_Left" ||
    keyboard[keys][i] === "Ctrl_r" ||
    keyboard[keys][i] === "Ctrl_l" ||
    keyboard[keys][i] === "Win" ||
    keyboard[keys][i] === "Alt" ||
    keyboard[keys][i] === "Back" ||
    keyboard[keys][i] === "Shift_Right" ||
    keyboard[keys][i] === "Space" ||
    keyboard[keys][i] === "Esc" ||
    keyboard[keys][i] === "F1" ||
    keyboard[keys][i] === "F2" ||
    keyboard[keys][i] === "F3" ||
    keyboard[keys][i] === "F4" ||
    keyboard[keys][i] === "F5" ||
    keyboard[keys][i] === "F6" ||
    keyboard[keys][i] === "F7" ||
    keyboard[keys][i] === "F8" ||
    keyboard[keys][i] === "F9" ||
    keyboard[keys][i] === "F10" ||
    keyboard[keys][i] === "F11" ||
    keyboard[keys][i] === "F12"
  ) {
    switch (text) {
      case "Tab":
        textArea.append("");
        break;

      case "Space":
        textArea.append(" ");
        break;
      case "Ctrl_l":
        break;

      case "Ctrl_r":
        break;

      case "Enter":
        textArea.append("\n");
        break;

      case "Caps_Lock":
        document.body.innerHTML = "";
        Caps = !Caps;
        re_inits();
        break;

      case "Shift_Left":
        document.body.innerHTML = "";
        shift = !shift;
        re_inits();
        break;

      case "Shift_Right":
        document.body.innerHTML = "";
        re_inits();
        break;

      case "Alt":
        if (shift == true) {
          shift = !shift;
          document.body.innerHTML = "";
          if (i == 0) {
            i = 1;
          } else {
            i = 0;
          }
          re_inits();
        }
        break;
      case "Win":
        break;
      case "Esc":
        break;
      case "Back":
        textArea.textContent = textArea.textContent.substring(
          0,
          textArea.textContent.length - 1
        );
        break;
      default:
    }
  } else {
    if (Caps == true || shift == true) {
      if ((shift == true) & (Caps == true)) {
        textArea.append(keyboard[keys][i]);
      } else {
        textArea.append(keyboard[keys][i].toUpperCase());
      }
    } else {
      textArea.append(text);
    }
  }
});

addEventListener("keydown", e => {
  for (keys in keyboard) {
    if (keyboard[keys][3] == "" + e.keyCode) {
      if ((shift == true) & (e.keyCode == "18")) {
        document.getElementById(keyboard[keys][i]).click();
        document.getElementById(keyboard[keys][i]).style.background =
          "rgb(217, 238, 34)";
      } else {
        document.getElementById(keyboard[keys][i]).click();
        document.getElementById(keyboard[keys][i]).style.background =
          "rgb(217, 238, 34)";
      }
      addEventListener("keyup", e => {
        for (keys in keyboard) {
          if (keyboard[keys][3] == e.keyCode) {
            document.getElementById(keyboard[keys][i]).style.background = "";
          }
        }
      });
    }
  }
});

function init() {
  div = document.createElement("div");
  div.id = "left";
  document.body.append(div);
  textArea = document.createElement("textArea");
  textArea.className = "textArea";
  left.append(textArea);
  textArea.append("");
  text = document.createElement("p");
  text.className = "text";

  for (keys in keyboard) {
    button = document.createElement("button");
    button.keyCode = keys;
    button.type = "button";
    button.className = "letters" + " " + keyboard[keys][2];
    button.id = keyboard[keys][i];
    if (Caps == true) {
      button.classList.add("active__Caps");
    }
    if (shift == true) {
      button.classList.add("active__shift");
    }
    if (Caps == true || shift == true) {
      button.innerHTML = keyboard[keys][i].toUpperCase();
      if ((shift == true) & (Caps == true)) {
        button.innerHTML = keyboard[keys][i];
      }
    } else {
      button.innerHTML = keyboard[keys][i];
    }
    if (
      keyboard[keys][i] === "`" ||
      keyboard[keys][i] === "Tab" ||
      keyboard[keys][i] === "Caps_Lock" ||
      keyboard[keys][i] === "Shift_left" ||
      keyboard[keys][i] === "Ctrl_l" ||
      keyboard[keys][i] === "Win_r" ||
      keyboard[keys][i] === "Insert" ||
      keyboard[keys][i] === "Delete" ||
      keyboard[keys][i] === "Left" ||
      keyboard[keys][i] === "Up"
    ) {
      br = document.createElement("br");
      left.appendChild(br);
    }
    div.appendChild(button);
  }
  keys = "";
}
function re_inits() {
  if (i == 1) {
    init();
  } else {
    init();
  }
}
