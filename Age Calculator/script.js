let currDate = document.getElementById("currDate");
let dateOfBirth = document.querySelector("#DOB");
const CalcAge = document.getElementById("CalcAge");
const displayAge = document.getElementById("displayAge");
const Age = document.getElementById("age");
const voteStatus = document.getElementById("voteStatus");

var today = new Date();
currDate.innerText = `Today's Date is : ${today.toLocaleDateString('en-US')}`;

CalcAge.addEventListener("click", () => {
    var birthDate = new Date(dateOfBirth.value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    displayAge.style.visibility = "visible";
    displayAge.classList.add("visible");
    Age.innerText = `You are ${age} years old.`;

    if (age >= 18) {
        voteStatus.innerText = "You are eligible to vote! 🗳️";
        voteStatus.classList.add("green");
        voteStatus.classList.remove("red");
    } else {
        voteStatus.innerText = "You are not eligible to vote yet. 😔";
        voteStatus.classList.add("red");
        voteStatus.classList.remove("green");
    }
});
