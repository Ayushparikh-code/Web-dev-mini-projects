document.addEventListener("DOMContentLoaded", function() {
    // Generate random numbers for each dice
    var randomNo1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage1 = "images/dice" + randomNo1 + ".png";
    document.querySelector(".img1").setAttribute("src", randomDiceImage1);
  
    var randomNo2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage2 = "images/dice" + randomNo2 + ".png";
    document.querySelector(".img2").setAttribute("src", randomDiceImage2);
  
    // Determine the winner
    var winnerDeclaration = document.querySelector("h1");
    if (randomNo1 > randomNo2) {
      winnerDeclaration.innerHTML = "🚩 Player 1 is the winner!";
    } else if (randomNo1 < randomNo2) {
      winnerDeclaration.innerHTML = "Player 2 is the winner! 🚩";
    } else {
      winnerDeclaration.innerHTML = "It's a draw! Try again!";
    }
  });
  let randomNo1 = 0;
let randomNo2 = 0;
let player1Rolled = false;
let player2Rolled = false;

document.addEventListener("DOMContentLoaded", function() {
  // Roll Player 1 dice when button is clicked
  document.getElementById("rollPlayer1").addEventListener("click", function() {
    randomNo1 = Math.floor(Math.random() * 6) + 1;
    const randomDiceImage1 = "images/dice" + randomNo1 + ".png";
    document.querySelector(".img1").setAttribute("src", randomDiceImage1);
    player1Rolled = true;
    checkWinner();
  });

  // Roll Player 2 dice when button is clicked
  document.getElementById("rollPlayer2").addEventListener("click", function() {
    randomNo2 = Math.floor(Math.random() * 6) + 1;
    const randomDiceImage2 = "images/dice" + randomNo2 + ".png";
    document.querySelector(".img2").setAttribute("src", randomDiceImage2);
    player2Rolled = true;
    checkWinner();
  });
});

function checkWinner() {
  // Only check the winner when both players have rolled
  if (player1Rolled && player2Rolled) {
    const winnerDeclaration = document.getElementById("winnerDeclaration");
    
    if (randomNo1 > randomNo2) {
      winnerDeclaration.innerHTML = "🚩 Player 1 is the winner!";
    } else if (randomNo1 < randomNo2) {
      winnerDeclaration.innerHTML = "Player 2 is the winner! 🚩";
    } else {
      winnerDeclaration.innerHTML = "It's a draw! Try again!";
    }
    
    // Reset the game state for the next round
    player1Rolled = false;
    player2Rolled = false;
  }
}
