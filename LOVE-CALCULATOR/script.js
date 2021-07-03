
function calculateLove(){
    var random = Math.random();
    random = (random * 100) + 1;
    random = Math.floor(random);
    var p = document.createElement("p");
    var text = document.createTextNode(random + "%");
    p.appendChild(text);
    document.getElementById("lovePercentage").appendChild(p);
}
