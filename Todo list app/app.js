// prendre tout les elements necessaires 
const inputBox=document.querySelector('.inputField input');
const addBtn=document.querySelector('.inputField button');
const deleteAll=document.querySelector('.footer button');
const todoList=document.querySelector('.todoList');

inputBox.onkeyup=()=>{
    let userData=inputBox.value; //getting user value
    if(userData.trim() !=0 ){ //if user values aren't only spaces
        addBtn.classList.add('active');
    }else{
        addBtn.classList.remove('active');
    }
}
showTasks();
// if user click on the add btn
addBtn.onclick = ()=>{
    let userData=inputBox.value; //getting user value
    let getLocalStorage = localStorage.getItem('New todo'); //get the local storage 
    if (getLocalStorage == null){
        listArr=[]; //creating blanck array
    }else{
        listArr=JSON.parse(getLocalStorage); //transform json string into js object
    }
    listArr.push(userData);// push or add user data 
    localStorage.setItem("New todo", JSON.stringify(listArr)) //transform js object into a json string   
    showTasks();
}
// this function add list inside ul
function showTasks(){
    let getLocalStorage = localStorage.getItem('New todo');
    if (getLocalStorage == null){
        listArr=[]; //creating blanck array
    }else{
        listArr=JSON.parse(getLocalStorage); //transform json string into js object
    }
    const pendingNumb=document.querySelector('.pendingNumber');
    pendingNumb.textContent=listArr.length;
    let newLiTag='';
    listArr.forEach((element, index) => {
        newLiTag +=`<li>${element} <button onclick="deleteTask(${index})";>Delete</button></li>`;
    });
    todoList.innerHTML=newLiTag; //adding new element li
    inputBox.value="";
}
// delete task
function deleteTask(index){
    let getLocalStorage = localStorage.getItem('New todo');
    listArr=JSON.parse(getLocalStorage);
    listArr.splice(index, 1)// remove de partiicular index
    localStorage.setItem("New todo", JSON.stringify(listArr)) //transform js object into a json string   
    showTasks();
}

deleteAll.onclick = ()=>{
    listArr= []; //empty list array
    //update the local storage
    localStorage.setItem("New todo", JSON.stringify(listArr)) //transform js object into a json string   
    showTasks();
}