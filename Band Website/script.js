
var buyTicket = document.getElementsByClassName("tour-button");
var modal = document.getElementById("modal");
var modalClose = document.getElementsByClassName("modal-close-button");
for(i=0;i<=2;i++){
    buyTicket[i].addEventListener("click",()=>{
        modal.style.display="block";
    })
}

for(i=0;i<=0;i++){
    modalClose[i].addEventListener("click",()=>{
        modal.style.display="none";
    })
}