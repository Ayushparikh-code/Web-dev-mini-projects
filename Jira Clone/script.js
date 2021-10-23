let colors = document.querySelectorAll(".color-box");
let notesList = document.querySelectorAll(".note-node");

let selectedArr = [false, false, false, false];
let colorsArr = ["#d795ac", "#60cbdf", "#92e6c8", "#312f31"];

let deleteStatus = false;

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', function () {
        if (selectedArr[i]) {
            resetTaskbarColors();
            setBackgroundColor(document.body, "#f3f2f3");
            selectedArr[i] = false;
            filterTasksByColor(true);
        } else {
            setBackgroundColor(document.body, colorsArr[i]);
            resetTaskbarColors();
            setBackgroundColor(colors[i], "#3a383a");
            selectTask(i);
            filterTasksByColor(false, i);
        }
    });
}

function filterTasksByColor(all, colorIdx) {
    if (all) {
        for (let i = 0; i < notesList.length; i++) {
            notesList[i].style.display = 'flex';
        }
    } else {
        for (let i = 0; i < notesList.length; i++) {
            let noteColor = notesList[i].querySelector(".note-color");
            let color = noteColor.getAttribute("color");
            if (color == getColorName(colorIdx))
                notesList[i].style.display = 'flex';
            else
                notesList[i].style.display = 'none';
        }
    }
}

function selectTask(task) {
    for (let i = 0; i < selectedArr.length; i++) {
        if (task == i)
            selectedArr[i] = true;
        else
            selectedArr[i] = false;
    }
}

function resetTaskbarColors() {
    for (let i = 0; i < colors.length; i++) {
        setBackgroundColor(colors[i], "#464446");
    }
}

function setBackgroundColor(element, color) {
    element.style.backgroundColor = color;
}

let add = document.querySelector(".b1");
let del = document.querySelector(".b2");

let modal = document.querySelector(".modal-container");

let priorities = document.querySelectorAll(".priority");
let priorityColorsNotSelected = ["#a57888", "#579da9", "#79ac9a", "#383638"];
let chosenPriority = priorities.length - 1;

add.addEventListener('click', function () {
    modal.style.display = "block";
    resetPriorityColors();
    chosenPriority = priorities.length - 1;
    priorities[chosenPriority].style.border = "3px solid #000000";
});

document.querySelector(".main-content").addEventListener('click', function () {
    
});

del.addEventListener('mouseenter', function () {
    setBackgroundColor(del, "#3a383a");
});
del.addEventListener('mouseleave', function () {
    if (!deleteStatus)
        setBackgroundColor(del, "#464446");
});
del.addEventListener('click', function () {
    if (deleteStatus) {
        setBackgroundColor(del, "#464446");
    } else {
        setBackgroundColor(del, "#3a383a");
    }
    deleteStatus = !deleteStatus;
});

for (let i = 0; i < priorities.length; i++) {
    priorities[i].addEventListener('mouseenter', function () {
        setBackgroundColor(priorities[i], colorsArr[i]);
    });
    priorities[i].addEventListener('mouseleave', function () {
        if (chosenPriority != i)
            setBackgroundColor(priorities[i], priorityColorsNotSelected[i]);
    });
    priorities[i].addEventListener('click', function () {
        resetPriorityColors();
        setBackgroundColor(priorities[i], colorsArr[i]);
        priorities[i].style.border = "3px solid #000000";
        chosenPriority = i;
    });
}

function resetPriorityColors() {
    for (let i = 0; i < priorities.length; i++) {
        setBackgroundColor(priorities[i], priorityColorsNotSelected[i]);
        priorities[i].style.border = "none";
    }
}

let input = document.querySelector(".modal-input");
input.addEventListener('keypress', function (e) {
    if (e.key == 'Enter' && input.value.trim() != '') {
        modal.style.display = "none";
        let data = input.value;
        input.value = '';
        createNotes(data);
    }
});

let notes = document.querySelector(".notes-container");

function createNotes(data) {
    let node = document.createElement("div");
    node.setAttribute("class", "note-node");
    node.innerHTML = `
                        <div class="note-color" color="` + getColorName(chosenPriority) + `"></div>
                        <p class="note-uid">#` + randomId(6) + `</p>
                        <p class="note-content">` + data + `</p>
                    `;
    notes.appendChild(node);

    let color = node.querySelector(".note-color");
    color.style.backgroundColor = colorsArr[chosenPriority];
    color.addEventListener('click', function () {
        let colorName = color.getAttribute('color');
        let colorIdx = getColorIdx(colorName);
        color.style.backgroundColor = colorsArr[(colorIdx + 1) % 4];
        color.setAttribute('color', getColorName((colorIdx + 1) % 4));
    });
    notesList = document.querySelectorAll(".note-node");
    // filterTasksByColor(false, color.getAttribute('color'));

    let colorHead = node.querySelector(".note-uid");
    colorHead.addEventListener('click', function () {
        if (deleteStatus) {
            node.remove();
        }
    });
}

function getColorName(idx) {
    switch (idx) {
        case 0: return 'pink';
        case 1: return 'blue';
        case 2: return 'green';
        case 3: return 'black';
    }
}

function getColorIdx(name) {
    switch (name) {
        case 'pink': return 0;
        case 'blue': return 1;
        case 'green': return 2;
        case 'black': return 3;
    }
}

function randomId(length) {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}