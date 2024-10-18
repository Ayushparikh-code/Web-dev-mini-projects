// Create an audio element
var audio = document.createElement("audio");
audio.src = "caraudio.mp3";
audio.loop = true; // Set audio to loop

// Append the audio element to the body
document.body.appendChild(audio);

// Add an event listener for mouse movement
document.body.addEventListener("mousemove", function() {
    // Check if audio is not already playing
    if (audio.paused) {
        audio.play(); // Play the audio
    }
});

// Optional: Stop audio on mouse leave
document.body.addEventListener("mouseleave", function() {
    audio.pause(); // Pause the audio
});
