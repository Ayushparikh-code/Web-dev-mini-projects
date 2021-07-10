var randomNo = Math.floor(Math.random()*6)+1;
var randomDiceImage = "images/dice"+randomNo+".png";

var img1 = document.querySelector(".img1").setAttribute("src",randomDiceImage);
// or// var img1 = document.querySelector(".img1").src=`${randomDiceImage}`;

var randomNo2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "images/dice"+randomNo2+".png";
var img2 = document.querySelector(".img2").setAttribute("src",randomDiceImage2);

var winnerDeclaration = document.querySelector("h1");
if(randomNo>randomNo2){
winnerDeclaration.innerHTML="🚩Player 1 is the winner!"
}
else if(randomNo<randomNo2){
    winnerDeclaration.innerText="Player 2 is the winner🚩!"
}
else{
winnerDeclaration.innerText="Try again!"
}
