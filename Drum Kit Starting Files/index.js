for(var n=0; n<document.querySelectorAll(".drum").length; n++){
    document.querySelectorAll("button")[n].addEventListener("click", function(){
        var btninnerHtml = this.innerHTML;
        audioadd(btninnerHtml);
        addanimation(btninnerHtml);
    });
    document.addEventListener("keydown", function(event){
        audioadd(event.key);
        addanimation(event.key);
    });
}

function audioadd(key){
    switch(key){
        case "w":
        var audio1=new Audio('./sounds/tom-1.mp3');
    audio1.play();
    break;
    case "a":
        var audio2=new Audio('./sounds/tom-2.mp3');
    audio2.play();
    break;
    case "s":
        var audio3=new Audio('./sounds/tom-3.mp3');
    audio3.play();
    break;
    case "d":
        var audio4=new Audio('./sounds/tom-4.mp3');
    audio4.play();
    break;
    case "j":
        var audio5=new Audio('./sounds/crash.mp3');
    audio5.play();
    break;
    case "k":
        var audio6=new Audio('./sounds/kick-bass.mp3');
    audio6.play();
    break;
    case "l":
        var audio7=new Audio('./sounds/snare.mp3');
    audio7.play();
    default: console.log(key);
    }
}
function addanimation(currentkey){
    var activebtn= document.querySelector("."+currentkey);
    activebtn.classList.add("pressed");
    setTimeout (function(){
        activebtn.classList.remove("pressed");
    }, 100);
}