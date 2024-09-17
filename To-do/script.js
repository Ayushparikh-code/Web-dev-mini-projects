const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(event){
    event.preventDefault();

    if(inputBox.value === ''){
        alert("You must write something!");
    }else{ 
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    

}
    // Hello it's me Vaibhav suryavanshi please dont copy my code!!

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
},false)

inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask(e);
        saveData();
    }
});

document.querySelector(".add").addEventListener("click", function(e){
    addTask(e);
    saveData();
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();