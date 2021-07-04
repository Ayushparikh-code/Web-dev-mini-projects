
const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
let jsonData = " ";
let quoteData = " ";

const randomNo = () => {
	let randNum = Math.floor(Math.random() * 1680);
	// console.log(randNum);
	quoteData = jsonData[randNum];
	quotes.innerText = `${quoteData.text}`;
	//   author.innerText = `${quoteData.author}`;

	quoteData.author == null ?
		(author.innerText = "By unKnown") :
		(author.innerText = `By ${quoteData.author}`);

}
const getQuotes = async () => {
	const api = "https://type.fit/api/quotes";
	try {
		let data = await fetch(api);
		jsonData = await data.json();
		// console.log(jsonData[0]);
		randomNo();
	} catch (error) {
		console.log(error.message);
	}

}


