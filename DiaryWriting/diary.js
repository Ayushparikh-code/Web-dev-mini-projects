let array=[];
const create = document.getElementById("btn");
function storeDiary(e){
    e.preventDefault();
    console.log("hai");
const diaryInfo=document.getElementById("diaryinfo").value;
  array.push(diaryInfo);
  console.log(array);
 //localStorage.clear();
 let date = new Date(); // Get current date in ISO format
 let time = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
 // Step 3 & 4: Add date to each element
 let elementsWithDate = array.map(element => `${time} - ${element}`);
 
 localStorage.setItem(Date.now(), elementsWithDate);
 
}
create.addEventListener('click', storeDiary);
