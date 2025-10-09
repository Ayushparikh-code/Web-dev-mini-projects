// Tic-Tac-Toe game logic (clean names, replay + main menu to change player)

const selectBox = document.querySelector(".select-box");
const chooseXButton = selectBox.querySelector(".options .playerX");
const chooseOButton = selectBox.querySelector(".options .playerO");

const playBoard = document.querySelector(".play-board");
const playersBar = document.querySelector(".players");
const cellElements = Array.from(document.querySelectorAll(".play-area section span"));

const resultBox = document.querySelector(".result-box");
const resultText = resultBox.querySelector(".won-text");
const replayButton = resultBox.querySelector(".replay-btn");
const mainMenuButton = resultBox.querySelector(".mainmenu-btn");

// Game state
let humanSymbol = "X";
let botSymbol = "O";
let currentTurn = "X";
let botEnabled = true;
let gameActive = false;

const winningLines = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

// Start game when player chooses X or O
chooseXButton.addEventListener("click", () => startNewGame("X"));
chooseOButton.addEventListener("click", () => startNewGame("O"));

function startNewGame(chosenSymbol) {
  humanSymbol = chosenSymbol;
  botSymbol = (chosenSymbol === "X") ? "O" : "X";
  currentTurn = "X";
  gameActive = true;

  // Update slider UI to reflect selection (keeps existing CSS behavior)
  if (humanSymbol === "O") {
    playersBar.classList.add("active", "player");
  } else {
    playersBar.classList.remove("player");
    playersBar.classList.remove("active");
  }

  clearBoardVisuals();
  attachCellListeners();

  selectBox.classList.add("hide");
  playBoard.classList.add("show");
  resultBox.classList.remove("show");

  // If bot starts as X, let it move first
  if (botEnabled && botSymbol === "X") {
    boardDisablePointer(true);
    setTimeout(botMakeMove, randomDelayMs());
  } else {
    boardDisablePointer(false);
  }
}

function attachCellListeners() {
  cellElements.forEach(cell => {
    cell.removeEventListener("click", onCellClicked);
    cell.addEventListener("click", onCellClicked);
  });
}

function removeCellListeners() {
  cellElements.forEach(cell => {
    cell.removeEventListener("click", onCellClicked);
  });
}

function onCellClicked(e) {
  const cell = e.currentTarget;
  if (!gameActive) return;
  if (cell.dataset.mark) return; // already marked
  if (currentTurn !== humanSymbol) return; // not human's turn

  markCell(cell, humanSymbol);
  evaluateGameState(humanSymbol);

  if (gameActive && botEnabled) {
    boardDisablePointer(true);
    setTimeout(botMakeMove, randomDelayMs());
  }
}

function markCell(cell, symbol) {
  cell.textContent = symbol;
  cell.dataset.mark = symbol;
  cell.classList.add("marked");
  cell.style.pointerEvents = "none";

  // Toggle slider to reflect turn visually
  playersBar.classList.toggle("active");

  currentTurn = (symbol === "X") ? "O" : "X";
}

function botMakeMove() {
  if (!gameActive) return;

  const emptyCells = cellElements.filter(c => !c.dataset.mark);
  if (emptyCells.length === 0) {
    boardDisablePointer(false);
    return;
  }

  // simple random bot (replace with smarter bot later if desired)
  const chosen = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  markCell(chosen, botSymbol);
  evaluateGameState(botSymbol);

  boardDisablePointer(false);
}

function evaluateGameState(lastMoverSymbol) {
  const isWinner = winningLines.some(line =>
    line.every(idx => cellElements[idx].dataset.mark === lastMoverSymbol)
  );

  if (isWinner) {
    gameActive = false;
    showResult(`${lastMoverSymbol} wins!`);
    return;
  }

  const isDraw = cellElements.every(c => c.dataset.mark);
  if (isDraw) {
    gameActive = false;
    showResult("Match has been drawn!");
  }
}

function showResult(message) {
  boardDisablePointer(true);

  if (message === "Match has been drawn!") {
    resultText.textContent = message;
  } else {
    const winner = message[0]; // X or O
    resultText.innerHTML = `Player <p>${winner}</p> won the game!`;
  }

  setTimeout(() => {
    resultBox.classList.add("show");
    playBoard.classList.remove("show");
  }, 700);
}

function clearBoardVisuals() {
  cellElements.forEach(cell => {
    cell.textContent = "";
    delete cell.dataset.mark;
    cell.style.pointerEvents = "auto";
    cell.classList.remove("marked");
  });
}

function boardDisablePointer(disable) {
  playBoard.style.pointerEvents = disable ? "none" : "auto";
}

function randomDelayMs() {
  return Math.floor(Math.random() * 1000) + 200;
}

/* Replay: rematch keeping the chosen player */
replayButton.addEventListener("click", () => {
  // Reset visuals and state for rematch
  resultBox.classList.remove("show");
  clearBoardVisuals();
  attachCellListeners();

  gameActive = true;
  currentTurn = "X";

  // Restore slider UI consistent with the chosen symbol
  if (humanSymbol === "O") {
    playersBar.classList.add("player", "active");
  } else {
    playersBar.classList.remove("player");
    playersBar.classList.remove("active");
  }

  playBoard.classList.add("show");
  selectBox.classList.add("hide");

  if (botEnabled && botSymbol === "X") {
    boardDisablePointer(true);
    setTimeout(botMakeMove, randomDelayMs());
  } else {
    boardDisablePointer(false);
  }
});

/* Main Menu: go back to player selection screen so user can change X/O */
mainMenuButton.addEventListener("click", () => {
  mainMenu();
});

function mainMenu() {
  // Hide playboard/result and show selection UI
  resultBox.classList.remove("show");
  playBoard.classList.remove("show");
  selectBox.classList.remove("hide");

  // Fully reset board and internal listeners
  clearBoardVisuals();
  removeCellListeners();

  // Reset slider UI to neutral state
  playersBar.classList.remove("player");
  playersBar.classList.remove("active");

  // Reset game state - user will choose again
  gameActive = false;
  currentTurn = "X";
  humanSymbol = "X";
  botSymbol = "O";
}