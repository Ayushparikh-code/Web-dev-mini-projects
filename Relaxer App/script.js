const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totaltime = 7500
const breathetime = (totaltime / 5) * 2
const holdtime = totaltime / 5

breatheanimation()

function breatheanimation(){
    text.innerHTML= 'Breathe-In !'
    container.className='container grow'

    setTimeout(() => {
        text.innerText= 'Hold' 
        setTimeout(()=>{
            text.innerText= 'Breathe-Out !'
            container.className='container shrink'
        },holdtime)
    },breathetime)
}

setInterval(breatheanimation,totaltime)

