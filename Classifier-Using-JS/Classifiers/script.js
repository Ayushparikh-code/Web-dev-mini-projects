// text analysis-------------------------------------
const inputBox = document.querySelector(".input");
const btn1 = document.querySelector(".btn");
const textcontainer = document.querySelector(".textcontainer");
const URL1 = "https://api.monkeylearn.com/v3/classifiers/cl_pi3C7JiL/classify/";

btn1.addEventListener("click", async () => {

	textcontainer.innerHTML = "";
	const value = inputBox.value;
	const data = {
		"data": [value]
	}

	try {
		const res = await fetch(URL1, {
			method: "POST",
			mode: "cors",
			headers: {
				"Authorization": "Token 33c90d17d7c0daf299e0bdec6b5fa02db4443da4",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data)
		});

		const resJson = await res.json();
		// console.log(resJson[0]);
		const finalResult = resJson[0];
		textcontainer.innerHTML = `<h3> ${value} is :<span> ${finalResult.classifications[0].tag_name} </span> </h3>`;

		inputBox.value = "";

	} catch (err) {
		console.log(err);
	}

})

// news analysis-------------------------------

const textBox = document.querySelector(".textarea");
const btn2 = document.querySelector(".btn");
const newscontainer = document.querySelector(".newscontainer");
const URL2 = "https://api.monkeylearn.com/v3/classifiers/cl_WDyr2Q4F/classify/";

btn2.addEventListener("click", async () => {

	newscontainer.innerHTML = "";
	const value = textBox.value;
	const data = {
		"data": [value]
	}

	try {
		const res = await fetch(URL2, {
			method: "POST",
			mode: "cors",
			headers: {
				"Authorization": "Token 33c90d17d7c0daf299e0bdec6b5fa02db4443da4",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data)
		});

		const resJson = await res.json();
		console.log(resJson[0]);
		const finalResult = resJson[0];
		newscontainer.innerHTML = `<h3> ${value} belongs to :<span> ${finalResult.classifications[0].tag_name} </span>category </h3>`;

		textBox.value = "";

	} catch (err) {
		console.log(err);
	}

})

// language classifier--------------------------------------------

const inputBox1 = document.querySelector(".input2");
const btn3 = document.querySelector(".btn");
const langcontainer = document.querySelector(".langcontainer");
const URL3 = "https://api.monkeylearn.com/v3/classifiers/cl_Vay9jh28/classify/";

btn3.addEventListener("click", async () => {

	langcontainer.innerHTML = "";
	const value = inputBox1.value;
	const data = {
		"data": [value]
	}

	try {
		const res = await fetch(URL3, {
			method: "POST",
			mode: "cors",
			headers: {
				"Authorization": "Token 33c90d17d7c0daf299e0bdec6b5fa02db4443da4",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data)
		});

		const resJson = await res.json();
		console.log(resJson[0]);
		const finalResult = resJson[0];
		langcontainer.innerHTML = `<h3> ${value} belongs to :<span> ${finalResult.classifications[0].tag_name} </span>language </h3>`;

		inputBox1.value = "";

	} catch (err) {
		console.log(err);
	}

})
