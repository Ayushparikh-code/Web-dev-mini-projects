const board = document.getElementById('chessboard');
const initialSetup = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
];

const pieces = {
    'R': '♜', 'N': '♞', 'B': '♝', 'Q': '♛', 'K': '♚', 'P': '♟︎',
    'r': '♖', 'n': '♘', 'b': '♗', 'q': '♕', 'k': '♔', 'p': '♙'
};

let selectedPiece = null;
let currentTurn = 'white'; // White goes first
let selectedSquare = null;

function createBoard() {
    board.innerHTML = ''; // Clear the board
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.dataset.row = row;
            square.dataset.col = col;

            if ((row + col) % 2 === 0) {
                square.classList.add('white');
            } else {
                square.classList.add('black');
            }

            const piece = initialSetup[row][col];
            if (piece) {
                const pieceElem = document.createElement('span');
                pieceElem.classList.add('piece');
                pieceElem.textContent = pieces[piece];
                pieceElem.dataset.piece = piece; // Save the piece in dataset
                square.appendChild(pieceElem);
            }
            board.appendChild(square);
        }
    }
}

createBoard();

board.addEventListener('click', (e) => {
    const square = e.target.closest('.square');
    if (!square) return;

    // If no piece is selected yet
    if (!selectedPiece && square.querySelector('.piece')) {
        selectedPiece = square.querySelector('.piece');
        selectedSquare = square;
        square.classList.add('selected');
    } 
    // If piece is already selected, move it to the new square
    else if (selectedPiece) {
        // Make sure we don't move to the same square
        if (square !== selectedSquare) {
            // Move the piece to the new square
            square.appendChild(selectedPiece);
            selectedSquare.classList.remove('selected');
            selectedPiece = null;
            selectedSquare = null;

            // After move, toggle turns
            toggleTurn();
        }
    }
});

function toggleTurn() {
    currentTurn = currentTurn === 'white' ? 'black' : 'white';
    console.log('Turn:', currentTurn);
}
