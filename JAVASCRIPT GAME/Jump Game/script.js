const character=document.getElementById("character");
const block=document.getElementById("block");
const block2=document.getElementById("block2");
const co=document.getElementById("co");
var counter=0;

var je=setInterval(() => {
    co.classList.add("animate2");
    setTimeout(() => {
        co.classList.add("show");
    }, 2000);
}, 1000);
function jump(){
    if(character.classList === "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
function myFunction(event){
    var x = event.keyCode;
    if(x==32){
        jump();
    }
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130 ){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }
    else if(ka()){
    }
    else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }

}, 10);
var add = setInterval(() => {
    block2.classList.add("animate1");
    setTimeout(() => {
        block2.classList.remove("animate1");
    }, 9000);
},7000);

function ka(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockTop = parseInt(window.getComputedStyle(block2).getPropertyValue("left"));
    if( blockTop <20&&characterTop==100){
        block2.classList.remove("animate1");
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
    }
};
