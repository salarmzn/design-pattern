import Originator from "./originator";
import Caretaker from "./caretaker";


let editor = new Originator();
let history = new Caretaker();

editor.content = "a";
history.push(editor.createState());

editor.content = "b";
history.push(editor.createState());

editor.content = "c";
editor.restoreState(history.pop());
