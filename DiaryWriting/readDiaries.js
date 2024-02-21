var temp='';
const read= document.getElementById("box");
 for (let i = 0; i < localStorage.length; i++) {
  // Step 2: Get the key at index i
  let key = localStorage.key(i);
  
  // Step 3: Access the value using the key
  let value = localStorage.getItem(key);
  let div =document.createElement("div");
  div.style.widht="100px";
  div.style.border = "2px solid black";
  div.style.height = "150px";
  div.style.margin="12px 0px";
  div.style.borderRadius="13px 3px";
  div.style.textAlign='center';
  div.style.backgroundColor="#d9ccb5";
  div.style.padding="4px 4px";
  div.style.overflow='scroll';
  div.innerHTML+=value+ "<br><br>";
 read.appendChild(div);
  
 }

 
       
  

    
    
    