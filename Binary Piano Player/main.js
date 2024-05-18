/**
made with Tone.js framework (by krish lalwani )
visit github for source
DONT EDIT
 */

(function() {
  var count = 0;
  var played = false;
  var playing = false;
  var pad = "0000000000";
  var numberArea = document.querySelector(".binary");
  var previousBinarySet = pad.split("");
  var currentFocusedInput = 0;

  var notes = ["D4", "E4", "F4", "G4", "A5", "C5", "D5", "E5", "F5", "G5"];

  var times = [1.7, 1.5, 1.3, 1.2, 0.9, 0.7, 0.6, 0.5, 0.5, 0.4];

  var customizeButton, customizeArea, inputAreas, keys, play;

  function toBinary(number) {
    return (number >>> 0).toString(2);
  }

  function padNumber(numberString) {
    return pad.substring(0, pad.length - numberString.length) + numberString;
  }

  function playOrPause() {
    if (playing) {
      Tone.Transport.stop();
      count = 0;
      playing = false;
      pad = "0000000000";
      previousBinarySet = pad.split("");
      play.classList.toggle('pause');
      return;
    }

    if (!played) {
      var synth = new Tone.PolySynth(8, Tone.Synth, {
        oscillator: {
          partials: [0, 2, 3, 4]
        }
      }).toMaster();

      Tone.Transport.bpm.value = 50;

      Tone.Transport.scheduleRepeat(function(time) {
        var number = Math.floor(count);
        count = count + 1;
        var numberString = padNumber(toBinary(number));
        numberArea.innerHTML = numberString;

        var binaryArray = numberString.split("");

        for (var i = 0; i < binaryArray.length; i++) {
          if (
            binaryArray[i] === "1" &&
            previousBinarySet[i] !== binaryArray[i]
          ) {
            synth.triggerAttackRelease(notes[i], times[i], time);
          }
        }

        previousBinarySet = binaryArray;

        if (count > 1023) {
          count = 0;
        }
      }, "32i");

      played = true;
    }

    playing = true;
    play.classList.toggle('pause');
    Tone.Transport.start();
  }

  function cacheDOM() {
    customizeButton = document.querySelector(".info");
    customizeArea = document.querySelector(".editor-container");
    inputAreas = document.querySelectorAll(".notes input");
    keys = document.querySelectorAll(".piano-key");
    play = document.querySelector(".play");
  }

  function bindUI() {
    readNotesFromUrl();

    customizeButton.addEventListener("click", onCustomizeButtonClicked, false);
    for (var i = 0; i < keys.length; i++) {
      keys[i].addEventListener("click", e => onKeyClicked(e), false);
    }

    for (var i = 0; i < inputAreas.length; i++) {
      inputAreas[i].value = notes[i];
      inputAreas[i].addEventListener("click", e => {
        currentFocusedInput = parseInt(e.target.dataset.index);
      });
    }

    play.addEventListener("click", playOrPause, false);
  }

  function onCustomizeButtonClicked() {
    if (!customizeArea.classList.contains("open")) {
      inputAreas[0].focus();
      currentFocusedInput = 0;
    }
    customizeArea.classList.toggle("open");
  }

  function setNotesInUrl() {
    history.replaceState &&
      history.replaceState(
        {},
        "",
        `?keys=${notes.join(",")}`.replace(/\#/g, "^")
      );
  }

  function readNotesFromUrl() {
    const url = document.location.href;
    const urlData = new URL(url);
    const keys = urlData.searchParams.get("keys");

    if (!keys) {
      return;
    }

    const keyData = keys.replace(/\^/g, "#").split(",");

    if (keyData.length === 10) {
      for (var i = 0; i < keyData.length; i++) {
        const el = document.querySelector(`[data-piano-key="${keyData[i]}"]`);
        if (!el) {
          return;
        }
      }

      notes = keyData;
    }
  }

  function onKeyClicked(e) {
    const valueSelected = e.target.dataset.pianoKey;
    inputAreas[currentFocusedInput].value = valueSelected;
    notes[currentFocusedInput] = valueSelected;

    currentFocusedInput = currentFocusedInput + 1;
    if (currentFocusedInput >= inputAreas.length) {
      currentFocusedInput = 0;
    }
    inputAreas[currentFocusedInput].focus();

    setNotesInUrl();
  }

  cacheDOM();
  bindUI();
})();