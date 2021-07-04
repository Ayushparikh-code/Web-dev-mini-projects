
let buttons = document.querySelectorAll("button");
let text = document.querySelector("#text");
let joke = document.querySelector("#joke");
let url = "https://api.chucknorris.io/jokes/categories";

fetch(url)
    .then(response => {
        return response.json()
        })
    .then(newdata =>{
buttons[0].innerText = newdata[0];
buttons[1].innerText = newdata[1];
buttons[2].innerText = newdata[2];
buttons[3].innerText = newdata[3];
buttons[4].innerText = newdata[4];
buttons[5].innerText = newdata[5];
buttons[6].innerText = newdata[6];
buttons[7].innerText = newdata[7],
buttons[8].innerText = newdata[8];
buttons[9].innerText = newdata[9];
buttons[10].innerText = newdata[10];
buttons[11].innerText = newdata[11];
buttons[12].innerText = newdata[12];
buttons[13].innerText = newdata[13];
buttons[14].innerText = newdata[14];
buttons[15].innerText = newdata[15];
buttons[16].innerText = newdata[16]
 });

 

for (item of buttons) {
    item.addEventListener('click', (e) => {
      let category = e.target.innerText;

      let url1 = `https://api.chucknorris.io/jokes/random?category=${category}`;
      fetch(url1)
    .then(response => {
        return response.json()
        })
    .then(data =>{
    text.innerText = category;
    joke.innerText = data.value;
 });
    })};

