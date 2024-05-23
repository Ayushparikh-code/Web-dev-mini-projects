
// window.Speak("I AM SHADOW, READY TO SERVE AT YOUR COMMAND, How may I serve you today?")


// function Speak(text){
//     const text_speak = new SpeechSynthesisUtterance(text)
//     text_speak.rate = 1.5; 
//     text_speak.volume  = 1;
//     text_speak.pitch = 6; 

//     window.speechSynthesis.speak(text_speak);
// }






// btn.addEventListener('click',()=>{
//     // Speak("I AM SHADOW, READY TO SERVE AT YOUR COMMAND, How may I serve you today?")
//     btn.textContent = "Listening...";
//     Speak("iam listening...")
//     recognition.start();
    
// });


// function takeCommand(textContent){
//     btn.textContent = textContent;
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const btn = document.getElementById('talk');
const content = document.getElementById('talk');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1.6;
    text_speak.volume = 1;
    text_speak.pitch = 6;

    window.speechSynthesis.speak(text_speak);
}

window.addEventListener('load', () => {
    speak("I AM SHADOW, READY TO SERVE AT YOUR COMMAND, How may I serve you today?");
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello') || message.includes('hi')){
        speak("Hello Sir, How May I Help You?");
        content.textContent = "Hello Sir, How May I Help You?";
    } else if (message.includes("open google")) {
        content.textContent = "Opening Google...";
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        content.textContent = "Opening Youtube...";
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        content.textContent = "Opening Facebook...";
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time') || message.includes('what is the time') || message.includes('current time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
        content.textContent = finalText;
    } else if (message.includes('date') || message.includes('today date ') || message.includes('current date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
        content.textContent = finalText;
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
        content.textContent = "Opening Calculator";

    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}