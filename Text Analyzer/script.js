let charCount = document.getElementById("char");
let wordCount = document.getElementById("word");
let sentences = document.getElementById("sentences");
let spaces = document.getElementById("spaces");
let punctuations = document.getElementById("punctuations");

const textArea = document.querySelector(".text-entry textarea");
const btn = document.getElementById("process-btn");


btn.addEventListener('click', () => {
	let text = textArea.value;
	charCount.innerHTML = text.length;
	wordCount.innerHTML = countWords(text);
	sentences.innerHTML = countSentences(text);
	punctuations.innerHTML = puncCount(text);
	spaces.innerHTML = text.split(" ").length - 1;
})

function countWords(text) {

	let tempText = text.replace(/[.,!%&*;:'"-()]/g, "");
	tempText = tempText.split(/\n/);

	let tempList = [];
	tempText.forEach(word => tempList.push(word.split(" ")));

	function extract(arr) {
		return arr.reduce((wordList, word) => {
			return wordList.concat(Array.isArray(word) ? extract(word) : word)
		}, []);
	}

	let wordList = extract(tempList);
	return wordList.filter(char => char != '').length;
}

function countSentences(text) {

	const regex = /[\w|\)][.?!](\s|$)/g;
	let senCount = text.match(regex);
	return senCount ? senCount.length : 0;

}

function puncCount(text) {
	const regex = /[.,?;:'"!-(){}]/g;
	let puntuationCount = text.match(regex);
	return puntuationCount ? puntuationCount.length : 0;
}

