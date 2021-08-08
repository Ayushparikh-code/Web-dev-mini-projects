var red = document.querySelector(".red");
var violet = document.querySelector(".violet");
var cyan = document.querySelector(".cyan");
var green = document.querySelector(".green");
var yellow = document.querySelector(".yellow");
var circle = document.querySelector(".circle");


//red.addEventListener("mouseenter",()=>{
//    circle.style.background="red";
//})
//violet.addEventListener("mouseenter",()=>{
//    circle.style.background="violet";
//})
//cyan.addEventListener("mouseenter",()=>{
//    circle.style.background="cyan";
//})
//green.addEventListener("mouseenter",()=>{
//    circle.style.background="green";
//})
//yellow.addEventListener("mouseenter",()=>{
//    circle.style.background="yellow";
//})
//var color = getBgColor(element);

var getBgColor = (selectedElement) => {
return window.getComputedStyle(selectedElement).backgroundColor;
}



const magicColorChanger = (element, color) => {
return element.addEventListener("mouseenter", () => {
    circle.style.background = color;
});
};
magicColorChanger(red, getBgColor(red));
magicColorChanger(violet, getBgColor(violet));
magicColorChanger(cyan, getBgColor(cyan));
magicColorChanger(green, getBgColor(green));
magicColorChanger(yellow, getBgColor(yellow));

