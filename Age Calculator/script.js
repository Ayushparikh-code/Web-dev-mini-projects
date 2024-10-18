// Get the required DOM elements
let currDate = document.getElementById("currDate");
let dateOfBirth = document.querySelector("#DOB");
const CalcAge = document.getElementById("CalcAge");
const displayAge = document.getElementById("displayAge");
const Age = document.getElementById("age");
let today = new Date();

// Display the current date in the specified format
currDate.innerText = `Today's Date is: ${today.toLocaleDateString('en-US')}`;

// Event listener for the button click
CalcAge.addEventListener("click", () => {
    // Parse the date from the input field
    let birthDate = new Date(dateOfBirth.value);

    // Validate if the input date is a valid date
    if (isNaN(birthDate.getTime())) {
        Age.innerText = "Please enter a valid date in the format MM/DD/YYYY.";
        displayAge.style.visibility = "visible";
        return;
    }

    // Calculate age based on the birth date
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if the birth date hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Display the calculated age
    Age.innerText = `You are ${age} years old.`;
    displayAge.style.visibility = "visible";
});
