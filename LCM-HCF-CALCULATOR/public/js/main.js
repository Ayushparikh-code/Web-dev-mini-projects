const body = document.querySelector("body");
const lcmBtn = document.querySelector("#lcmBtn");
const hcfBtn = document.querySelector("#hcfBtn");
const numLcm1 = document.querySelector("#numLcm1");
const numLcm2 = document.querySelector("#numLcm2")
const lcm = document.querySelector("#lcm");
const numHcf1 = document.querySelector("#numHcf1");
const numHcf2 = document.querySelector("#numHcf2");
const hcf = document.querySelector("#hcf");
const evenLcm = document.querySelector(".evenLcm");
const oddLcm = document.querySelector(".oddLcm");
const evenHcf = document.querySelector(".evenHcf");
const oddHcf = document.querySelector(".oddHcf");
const resultLcm = document.querySelector(".resultLcm");
const resultHcf = document.querySelector(".resultHcf");


// text content
lcmBtn.textContent = "Click here to find LCM of two numbers.";
hcfBtn.textContent = "Click here to find HCF of two numbers.";



$(document).ready(function() {
    $(".box").hide();
    body.style.display = "flex";
    $(".resultBtn").mouseover(function() {
        $(".resultBtn").css("color", "white")
    })
    $(".resultBtn").mouseout(function() {
        $(".resultBtn").css("color", "black")
    })
})
const findLcm = () => {
        $(".resultboxLcm").slideToggle("slow");
        $(".resultboxHcf").slideUp();
        
        lcm.addEventListener("click", (e) => {
            e.preventDefault();
            const num1 = numLcm1.value ;
            const num2 = numLcm2.value;

            let min = (num1 < num2) ? num1 : num2;
            let flag= true;
            while(flag){
                if(min % num1 == 0 && min % num2 == 0){
                    resultLcm.innerHTML = `LCM of ${num1} and ${num2} is ${min}`;
                    if(min % 2 == 0){
                        evenLcm.style.opacity = 1;
                        oddLcm.style.opacity = 0.5;
                    }else{
                        oddLcm.style.opacity = 1;
                        evenLcm.style.opacity = 0.5;
                    }
                    break;
                }
                min++;
            }
        })
}

const findHcf = () => {
    $(".resultboxHcf").slideToggle("slow");
    $(".resultboxLcm").slideUp();

    hcf.addEventListener("click", (e) => {
        e.preventDefault();
        const num1 = numHcf1.value;
        const num2 = numHcf2.value;
        
        for (let i = 1; i <= num1 && i <= num2; i++){
            if(num1 % i == 0 && num2 % i == 0){
                if(i % 2 == 0){
                    evenHcf.style.opacity = 1;
                    oddHcf.style.opacity = 0.5;
                }else{
                    oddHcf.style.opacity = 1;
                    evenHcf.style.opacity = 0.5;
                }
                resultHcf.innerHTML = `HCF of ${num1} and  ${num2} is ${i}`
            }
        }
    })
}


lcmBtn.addEventListener("click", findLcm)
hcfBtn.addEventListener("click", findHcf)