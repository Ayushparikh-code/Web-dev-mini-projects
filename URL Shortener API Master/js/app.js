//Running the generate element function to generate all the shortened links stored in local storage
generateElement();

document.querySelector('.hamburgerIcon').addEventListener('click',()=>{
   element.classList.toggle('change');
   let navbar = document.querySelector('.navbar');
   navbar.classList.toggle('show');
});

//Function to handle form submission
let shortenBtn = document.getElementById('shorten');
shortenBtn.addEventListener('click',()=>{
   //This function to handle the link incoming from the user
   console.log('Click event has been triggered');
   let enteredLink = document.getElementById('link').value;
   console.log('The link entered by user is -  ',enteredLink);
   let wrongLinkText = document.querySelector('.wrongLinkText');
   if(enteredLink==='' || enteredLink=== undefined){
      wrongLinkText.classList.add('activate'); 
      document.getElementById('link').style.border = '2px solid red';
   }
   else{
      postRequest(enteredLink);
      wrongLinkText.classList.remove('activate');
   }
   
});

//Function for handling requests
function postRequest(enteredLink){
   //Creating an XHR Object to make an HTTP request
   const  xhr = new XMLHttpRequest();
   xhr.getResponseHeader('Content-type','application/json');

   //Making the request
   xhr.open('GET',`https://api.shrtco.de/v2/shorten?url=${enteredLink}`,true);

   xhr.onload = function(){
      let responseJson = JSON.parse(this.responseText);
      console.log(responseJson);
      if(responseJson.ok){
         createElement(responseJson.result.original_link,responseJson.result.full_short_link2);
      }
      else{
         console.log('Something went wrong - ',responseJson.error_code);
      }
   }
   xhr.send();
}

// Function to create Element
function createElement(originalLink,shortLink){
   let shortenedLinks = localStorage.getItem('shortenedLinks');
   if(shortenedLinks===null){
      shortenedLinksArray=[];
   }   
   else{
      shortenedLinksArray = JSON.parse(shortenedLinks);
   }
   //Link Obj created to store the shortened link and also the shortened link
   let linkObj = {
      opLink : originalLink,
      shortLink: shortLink
   }
   console.log(linkObj);
   console.log(shortenedLinksArray);
   shortenedLinksArray.push(linkObj);
   localStorage.setItem('shortenedLinks',JSON.stringify(shortenedLinksArray));
   document.getElementById('link').value = '';
   generateElement();
}

//Function to generate shortened links
function generateElement(){
   console.log('Generate Element is running');
   let shortenedLinks = localStorage.getItem('shortenedLinks');
   if(shortenedLinks===null){
      shortenedLinksArray=[];
   }   
   else{
      shortenedLinksArray = JSON.parse(shortenedLinks);
   }
   let html = '';
   for(let i = 0;i<shortenedLinksArray.length;i++){
      html+=`<div class="shortenedLink">
      <a href="${shortenedLinksArray[i].opLink}" class="originalLink linkItems" target="__blank">${shortenedLinksArray[i].opLink}</a>
      <a href="${shortenedLinksArray[i].shortLink}" class="shortened linkItems" target="__blank">${shortenedLinksArray[i].shortLink}</a>
      <button class="copyLink linkItems">Copy</button>
    </div>`
   }
   document.querySelector('.linksContainer').innerHTML = html;
}

//Function for copying text to clipboard
function clipboard(linkToBeCopied){
   let textArea  = document.createElement('textarea');
   textArea.width  = "1px"; 
   textArea.height = "1px";
   textArea.background =  "transparent" ;
   textArea.value = linkToBeCopied;
   document.body.append(textArea);
   textArea.select();
   document.execCommand('copy');
   document.body.removeChild(textArea);
}

//Function to add event listener to copy links button
document.body.addEventListener('click',function(event){
   let target = event.target;
   if(target.nodeName === "BUTTON" && /copyLink/.test(target.className)){
      copyShortenedLink(target.parentElement,target);      
   }
})

//Function to handle copy and paste operations
function copyShortenedLink(parentElement,element){
   let shortenedLink = parentElement.childNodes[3].innerText;
   let text = shortenedLink;
   clipboard(text);
   //Changing the button color to show copied 
   element.innerHTML = "Copied!"
   element.style.backgroundColor = 'hsl(257, 27%, 26%)';
   setTimeout(() => {
      element.innerHTML = 'Copy';
      element.style.backgroundColor = 'hsl(180, 66%, 49%)';   
   }, 3000);  
}


