console.log("hi");

const p1Button = document.querySelector('.p1button');
const p2Button = document.querySelector('.p2button');
const rstButton = document.querySelector('.reset');

const p1Display = document.querySelector('.p1scrdisp');
const p2Display = document.querySelector('.p2scrdisp');

const winningScore = document.querySelector('.limit');
const body = document.querySelector('body');

let p1Score = 0;
let p2Score = 0;
let limit = 0;
let isGameOver = false;

// player 1 Score update

p1Button.addEventListener('click', function(evt) {
	console.log("You pressed player 1");

	if (isGameOver !== true && limit !== 0) {
		p1Score += 1;

		if (p1Score == limit) {
			isGameOver = true;
			p1Display.classList.add('winner');
			p2Display.classList.add('loser');
			p1Button.style.background = '#20c997';
			p2Button.style.background = '#f03e3e';
			alert("PLAYER 1 WON!!");
		}

		p1Display.textContent = p1Score;
	}
});


// Player 2 Score update

p2Button.addEventListener('click', function(evt) {
	console.log("You pressed player 2");

	if (isGameOver !== true && limit !== 0) {
		p2Score += 1;

		if (p2Score == limit) {
			isGameOver = true;
			p2Display.classList.add('winner');
			p1Display.classList.add('loser');
			p2Button.style.background = '#20c997';
			p1Button.style.background = '#f03e3e';
			alert("PLAYER 2 WON!!");
		}
		p2Display.textContent = p2Score;
	}
});

//Reseting all scores

rstButton.addEventListener('click', reset);

function reset() {
	isGameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove('winner', 'loser');
	p2Display.classList.remove('loser', 'winner');

	p1Button.style.background = '#adb5bd';
	p2Button.style.background = '#adb5bd';
}

//  Limit set by user
winningScore.addEventListener('change', () => {
	limit = parseInt(winningScore.value)
	reset();

});


