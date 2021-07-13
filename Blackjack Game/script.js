let blackjackGame = {
  you: {
    scoreSpan: "#your-blackjack-result",
    div: "#your-box",
    boxSize: ".flex-blackjack-row-2 div",
    score: 0,
  },

  dealer: {
    scoreSpan: "#dealer-blackjack-result",
    div: "#dealer-box",
    boxSize: ".flex-blackjack-row-2 div",
    score: 0,
  },

  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "J", "Q", "A"],

  cardsMap: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    K: 10,
    J: 10,
    Q: 10,
    A: [1, 11],
  },

  wins: 0,
  losses: 0,
  draws: 0,
  isStand: false,
  isTurnsOver: false,
  pressOnce: false,
};

const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];

const hitSound = new Audio("sounds/swish.m4a");
const winSound = new Audio("sounds/cash.mp3");
const loseSound = new Audio("sounds/aww.mp3");

let windowWidth = window.screen.width;
let windowHeight = window.screen.height;
let winner;

//Button Event Listeners
document
  .querySelector("#blackjack-hit-button")
  .addEventListener("click", blackjackHit);
document
  .querySelector("#blackjack-stand-button")
  .addEventListener("click", blackjackStand);
document
  .querySelector("#blackjack-deal-button")
  .addEventListener("click", blackjackDeal);
document
  .querySelector("#blackjack-reset-button")
  .addEventListener("click", blackjackRestart);

function blackjackHit() {
  if (blackjackGame["isStand"] === false) {
    let card = randomCard();
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
  }
}

function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13);
  return blackjackGame["cards"][randomIndex];
}

function showCard(card, activePlayer) {
  if (activePlayer["score"] <= 21) {
    let cardImage = document.createElement("img");
    cardImage.src = `images/${card}.png`;
    cardImage.style = `width:${widthSize()}; height:${heightSize()};`;
    document.querySelector(activePlayer["div"]).appendChild(cardImage);
    hitSound.play();
  }
}

function widthSize() {
  if (windowWidth > 1000) {
    let newWidthSize = window.screen.width * 0.1;
    return newWidthSize;
  } else {
    return window.screen.width * 0.18;
  }
}

function heightSize() {
  if (windowHeight > 700) {
    let newHeightSize = window.screen.height * 0.18;
    return newHeightSize;
  } else {
    return window.screen.height * 0.15;
  }
}

function updateScore(card, activePlayer) {
  if (card === "A") {
    if (activePlayer["score"] + blackjackGame["cardsMap"][card][1] <= 21) {
      activePlayer["score"] += blackjackGame["cardsMap"][card][1];
    } else {
      activePlayer["score"] += blackjackGame["cardsMap"][card][0];
    }
  } else {
    activePlayer["score"] += blackjackGame["cardsMap"][card];
  }

  console.log(activePlayer["score"]);
}

function showScore(activePlayer) {
  //Bust logic if score is over 21
  if (activePlayer["score"] > 21) {
    document.querySelector(activePlayer["scoreSpan"]).textContent = "BUST!";
    document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
  } else {
    document.querySelector(activePlayer["scoreSpan"]).textContent =
      activePlayer["score"];
  }
}

function blackjackStand() {
  if (blackjackGame.pressOnce === false) {
    blackjackGame["isStand"] = true;
    let yourImages = document
      .querySelector("#your-box")
      .querySelectorAll("img");

    for (let i = 0; i < yourImages.length; i++) {
      let card = randomCard();
      showCard(card, DEALER);
      updateScore(card, DEALER);
      showScore(DEALER);
    }

    blackjackGame["isTurnsOver"] = true;

    computeWinner();
    showWinner(winner);
  }

  blackjackGame.pressOnce = true;
}

function computeWinner() {
  if (YOU["score"] <= 21) {
    if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
      winner = YOU;
    } else if (YOU["score"] < DEALER["score"]) {
      winner = DEALER;
    } else if (YOU["score"] === DEALER["score"]) {
      winner = "Draw";
    }
  } else if (YOU["score"] > 21 && DEALER["score"] <= 21) {
    winner = DEALER;
  } else if (YOU["score"] > 21 && DEALER["score"] > 21) {
    winner = "None";
  }

  return winner;
}

function showWinner(winner) {
  let message, messageColor;

  if (winner === YOU) {
    message = "You Won";
    messageColor = "#00e676";
    document.querySelector("#wins").textContent = blackjackGame["wins"] += 1;
    winSound.play();
  } else if (winner === DEALER) {
    message = "You Lost";
    messageColor = "red";
    document.querySelector("#losses").textContent = blackjackGame[
      "losses"
    ] += 1;
    loseSound.play();
  } else if (winner === "Draw") {
    message = "You Drew";
    messageColor = "yellow";
    document.querySelector("#draws").textContent = blackjackGame["draws"] += 1;
    loseSound.play();
  } else if (winner === "None") {
    message = "You Both Busted!";
    messageColor = "orange";
    loseSound.play();
  }

  document.querySelector("#blackjack-result").textContent = message;
  document.querySelector("#blackjack-result").style.color = messageColor;
}

function blackjackDeal() {
  if (blackjackGame["isTurnsOver"] === true) {
    // Select all the images in both the user and dealer box
    let yourImages = document
      .querySelector("#your-box")
      .querySelectorAll("img");
    let dealerImages = document
      .querySelector("#dealer-box")
      .querySelectorAll("img");

    document.querySelector("#blackjack-result").style.color = "white";

    //Sets the user and dealers scors to zero
    YOU["score"] = DEALER["score"] = 0;
    document.querySelector("#your-blackjack-result").textContent = 0;
    document.querySelector("#dealer-blackjack-result").textContent = 0;

    //Reset color back to white
    document.querySelector("#your-blackjack-result").style.color = "white";
    document.querySelector("#dealer-blackjack-result").style.color = "white";

    //Reset to Let's Play
    document.querySelector("#blackjack-result").textContent = "Lets Play";

    //Removes the cards in the user's box
    for (let i = 0; i < yourImages.length; i++) {
      yourImages[i].remove();
      dealerImages[i].remove();
    }

    blackjackGame["isStand"] = false;
    blackjackGame.pressOnce = false;
    blackjackGame["isTurnsOver"] = false;
  }
}

function blackjackRestart() {
  blackjackDeal();
  document.querySelector("#wins").textContent = 0;
  document.querySelector("#losses").textContent = 0;
  document.querySelector("#draws").textContent = 0;

  blackjackGame.wins = 0;
  blackjackGame.losses = 0;
  blackjackGame.draws = 0;
}
