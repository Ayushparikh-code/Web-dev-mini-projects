window.addEventListener('load' ,init);

let time=10;
let score=0;
let isplaying;



const WordInput=document.querySelector('#label');
const Currentword=document.querySelector('#currentword');
const seconds=document.querySelector('#number');
const message=document.querySelector('#message');
const TimeDisplay=document.querySelector('#time');
const ScoreDispaly =document.querySelector('#score');



const words=[
    'jacob stood on his tiptoes',
    'the car turned the corner',
    'kelly twirled in circles',
    'aaron made a picture',
    'the staff performed well',
    'white shirt always looks sharp',
    'the cat and the dog yowled',
    'open the jar carefully',
    'make the best of things',
    'the cat and dog ate',
    'i opened all the gift',
    'when i go to the beach',
    'i went to the beach',
    'i will shop at the store',
    'wolf ate steak at the zoo',
    'they have to be short',
    'they have to be long'
    
];
function init(){
    showWords(words);
    WordInput.addEventListener('input',Startmatch)
    setInterval(countdown, 1000);
    setInterval(checkstatus, 50)

}

function Startmatch(){
    if(match()){
        isplaying= true;
        time=11;
        showWords(words);
        WordInput.value='';
        score++;
    }
    if(score==-1){
        ScoreDispaly.innerHTML=0

    }else{
        ScoreDispaly.innerHTML=score
    }

    }
    

function match(){
    if (WordInput.value==Currentword.innerHTML){
        message.innerHTML='Correct!!'
        return true;
    }else {
        message.innerHTML='';
        return false;
    }

}
function showWords(words){
    const randIndex=Math.floor(Math.random()*words.length);
    Currentword.innerHTML=words[randIndex];
}

function countdown(){
    if(time>0){
        time--;

    } else if(time==0){
        isplaying= false;
    }
    TimeDisplay.innerHTML=time;
}
function checkstatus(){
    if (!isplaying && time==0){
        message.innerHTML="Game over!!! Better Luck Next Time";
        score=-1;
    }
}