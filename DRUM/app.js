window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const kit = document.querySelector('.kit');

  pads.forEach((pad, index) => {
    pad.addEventListener('click', function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
    });
  });

  //the drum can be played with the keys A.S,D,J,K,L
  document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  });

  function makeSound(key) {
    switch (key) {
      case 'a':
        var closed_hithat = new Audio('sounds/sound1.mp3');
        closed_hithat.play();
        break;
      case 's':
        var kick = new Audio('sounds/sound3.mp3');
        kick.play();
        break;
      case 'd':
        var clap = new Audio('sounds/sound4.mp3');
        clap.play();
        break;
      case 'j':
        var open_hithat = new Audio('sounds/sound5.mp3');
        open_hithat.play();
        break;
      case 'k':
        var snare = new Audio('sounds/sound6.mp3');
        snare.play();
        break;
      case 'l':
        var crash = new Audio('sounds/sound2.mp3');
        crash.play();
        break;
    }
  }


  function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  };
});
