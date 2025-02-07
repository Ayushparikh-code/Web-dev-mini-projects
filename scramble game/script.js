const words = ["javascript", "programming", "developer", "interface", "variable", "function"];
let currentWord = "";
let scrambledWord = "";

function shuffleWord(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}

function resetGame() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    scrambledWord = shuffleWord(currentWord);
    document.getElementById('scrambledWord').innerText = scrambledWord;
    document.getElementById('userInput').value = "";
    document.getElementById('message').innerText = "";
}

function checkAnswer() {
    const userAnswer = document.getElementById('userInput').value.toLowerCase();
    if (userAnswer === currentWord) {
        document.getElementById('message').innerText = "Correct! 🎉";
    } else {
        document.getElementById('message').innerText = "Try again! ❌";
    }
}

window.onload = resetGame;


