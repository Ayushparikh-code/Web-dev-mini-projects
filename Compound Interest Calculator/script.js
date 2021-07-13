var btn = document.getElementById("btn");
var body = document.querySelector("body");

function calculate() {

    var CI = 0;
    var principal = document.getElementById("principal").value;
    var interest = document.getElementById("annual-interest-rate").value;
    var nyear = document.getElementById("number-of-year").value;
    var ntime = document.getElementById("number-of-times-in-year").value;

    if(principal > 0 && interest > 0 && nyear > 0 && ntime > 0) {
        CI = (principal* Math.pow((1 + (interest/(ntime*100))), (ntime*nyear)));
        CI = CI.toFixed(2);
        document.getElementById("res").innerHTML = CI; 
    } 
    else{
        alert("Please Enter Valid Values!!")
    }
    
}

btn.addEventListener("click", calculate);
body.addEventListener("keypress", function check(event) {
    if(event.keyCode === 13){
        calculate();
    }
});