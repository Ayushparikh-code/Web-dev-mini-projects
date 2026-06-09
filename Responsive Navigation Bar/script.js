let nav_btn = document.getElementById("nav-btn");
let nav = document.querySelector("nav");
let navlist = document.querySelector('.navbar-list');


// console.log(nav_btn) 







// console.log(navlist) 





var navopen = 0;

// console.log(navopen); 


nav_btn.addEventListener('click', () => {
    // open.style.display = none;
    // open.style.display = "none";
    // nav.style.display = "none";


    // nav.style.height = '100%';
    // navlist.style.display = "none";
    // nav_btn.style.display = "none";



    if (navopen == 0) {
        nav.style.height = '100vh';
        // nav_btn.style.display = "none"; 
        console.log(navopen);
        nav_btn.classList.remove("fa-bars");
        nav_btn.classList.add("fa-xmark");


        navlist.style.display = "flex";
        // close_nav.style.display = "none"; 

        // console.log(navlist) 

        navopen = 1;




    }
    else {
        // nav.classList 
        nav_btn.classList.add("fa-bars");
        nav_btn.classList.remove("fa-xmark");
        nav.style.height = 'auto';
        navlist.style.display = "none";

        // nav_btn.style.display = "block"; 
        // close_nav.style.display = "block"; 
        navopen = 0;




    }






})


// music.addEventListener('timeupdate', () => {
//     progress = parseInt((music.currentTime / music.duration) * 100);
//     myProgressbar.value = progress;
// })