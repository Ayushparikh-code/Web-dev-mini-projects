const colour = document.querySelector('button');
const  h1=document.querySelector('h1');
const rndmcolor = () =>
{
   const r = Math.floor(Math.random()*255);
   const g = Math.floor(Math.random()*255);
   const b = Math.floor(Math.random()*255);
//   let r=10, b =40 ,g=31;
   return `rgb(${r},${g},${b})`;
}

colour.addEventListener('click', function () {
    const newcolor= rndmcolor();
    document.body.style.backgroundColor = newcolor;
    console.log("hey")
    h1.innerText= `The Color is : ${newcolor}`;
    // if(`newcolor<rgb(50,50,50)`)
    // {
    //   h1.innerText.style.colour = white;  
    // }
});