function buttonChangeColor(buttonThingy) {
    console.log(buttonThingy.value);

if(buttonThingy.value === "red") {
    buttonRed();
} else if(buttonThingy.value === "green") {
    buttonGreen();
} else if(buttonThingy.value === "reset") {
    buttonReset();
} else {
    buttonRandom();
}
}

let all_buttons = document.getElementsByTagName("button");

var copy_all_buttons = [];
for (let i = 0; i< all_buttons.length; i++) {
copy_all_buttons.push(all_buttons[i].classList[1]);
console.log(copy_all_buttons);
}

function buttonRed() {
for (let i = 0; i< all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-red");
}
}

function buttonGreen() {
for (let i = 0; i< all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-green");
}
}

function buttonReset() {
for (let i = 0; i< all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copy_all_buttons[i]);
}
}

function buttonRandom() {
let choices = ["btn-red", "btn-green", "btn-yellow", "btn-blue"];
for (let i = 0; i< all_buttons.length; i++) {
let random = Math.floor(Math.random() * 4);
all_buttons[i].classList.remove(all_buttons[i].classList[1]);
all_buttons[i].classList.add(choices[random]);
}
}
