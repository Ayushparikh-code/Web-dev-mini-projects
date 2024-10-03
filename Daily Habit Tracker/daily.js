const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const date = new Date();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

document.getElementById("month-name").textContent = `${monthNames[currentMonth]} ${currentYear}`;

let habitData = JSON.parse(localStorage.getItem('habitData')) || [];

const habitListContainer = document.getElementById("habit-list-container");
const addHabitButton = document.getElementById("add-habit-btn");

function saveHabitData() {
    localStorage.setItem('habitData', JSON.stringify(habitData));
}

function createHabitElement(habit, index) {
    const habitDiv = document.createElement("div");
    habitDiv.classList.add("habit");

    const habitTitleDiv = document.createElement("div");
    habitTitleDiv.classList.add("habit-title");

    const habitTitle = document.createElement("h2");
    habitTitle.textContent = habit.name;
    habitTitleDiv.appendChild(habitTitle);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => {
        deleteHabit(index);
    });
    habitTitleDiv.appendChild(deleteButton);

    habitDiv.appendChild(habitTitleDiv);

    const trackerDiv = document.createElement("div");
    trackerDiv.classList.add("tracker");

    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day");

        const dayNumber = document.createElement("span");
        dayNumber.textContent = i;
        dayDiv.appendChild(dayNumber);

        const timeInput = document.createElement("input");
        timeInput.type = "time";
        timeInput.value = habit.times[i - 1] || ""; // Set time if it exists, otherwise default to empty
        timeInput.addEventListener("change", (event) => {
            habit.times[i - 1] = event.target.value;
            saveHabitData();
        });
        dayDiv.appendChild(timeInput);

        if (habit.progress[i - 1]) {
            dayDiv.classList.add("completed");
        }

        dayDiv.addEventListener("click", () => {
            habit.progress[i - 1] = !habit.progress[i - 1];
            dayDiv.classList.toggle("completed");
            saveHabitData(); // Save data whenever a day is toggled
        });

        trackerDiv.appendChild(dayDiv);
    }

    habitDiv.appendChild(trackerDiv);
    habitListContainer.appendChild(habitDiv);
}

function deleteHabit(index) {
    habitData.splice(index, 1);
    saveHabitData();
    loadHabits();
}

function addNewHabit(name) {
    const newHabit = {
        name: name,
        progress: Array(daysInMonth).fill(false), // Initialize all days as incomplete
        times: Array(daysInMonth).fill("") // Initialize all times as empty
    };

    habitData.push(newHabit);
    createHabitElement(newHabit, habitData.length - 1);
    saveHabitData();
}

addHabitButton.addEventListener("click", () => {
    const habitName = prompt("Enter the name of your new habit:");
    if (habitName) {
        addNewHabit(habitName);
    }
});

function loadHabits() {
    habitListContainer.innerHTML = ""; // Clear the existing habit list
    habitData.forEach((habit, index) => {
        createHabitElement(habit, index); // Load and create each habit element
    });
}

// Initial load of habits from localStorage
loadHabits();
