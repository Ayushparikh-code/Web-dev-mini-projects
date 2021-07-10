let display = document.getElementById('display')
let buttons = Array.from(document.getElementsByClassName('btn'))

buttons.map((button)=>{
    button.addEventListener('click', (e)=>{
        switch(e.target.innerText){
            case 'Clear':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case 'Del':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});