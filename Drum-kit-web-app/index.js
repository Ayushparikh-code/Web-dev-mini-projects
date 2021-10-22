

var numberOfDrumsButton = document.querySelectorAll(".drum").length;

//code for pressed button by keyboard

document.addEventListener("keypress", function (event) {
    makeSound(event.key);

    knowClicked(event.key);

});
//code for pressed button by mouse

for (let i = 0; i <= numberOfDrumsButton; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {


        //    var innerText = document.querySelectorAll("button")[i].innerHTML;

        var innerText = this.innerHTML;// we can do also by this code

        // document.querySelector("."+innerText).classList.add("pressed");


        // setTimeout(function(){
        //     document.querySelector("."+innerText).classList.remove("pressed");
        // }),6000;

        makeSound(innerText);
        knowClicked(innerText);

    });
}

function makeSound(key) {
    console.log(key);
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();


            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            break;
    }
}

function knowClicked(key) {
    console.log(key);

    document.querySelector("." + key).classList.add("pressed");


    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed");
    }), 100;

}