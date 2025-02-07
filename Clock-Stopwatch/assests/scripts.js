var sw = {
  etime: null, // element for displaying time
  erst: null, // reset button
  ego: null, // start/stop button
  
  init: function () {
    // Initialize stopwatch elements
    sw.etime = document.getElementById("sw-time");
    sw.erst = document.getElementById("sw-rst");
    sw.ego = document.getElementById("sw-go");

    // Add event listeners for buttons
    sw.erst.addEventListener("click", sw.reset);
    sw.erst.disabled = false;
    sw.ego.addEventListener("click", sw.start);
    sw.ego.disabled = false;
  },
  
  timer: null, // timer object
  now: 0, // current elapsed time in seconds
  
  tick: function () {
    // Update the time display
    sw.now++;
    var remain = sw.now;
    var hours = Math.floor(remain / 3600);
    remain -= hours * 3600;
    var mins = Math.floor(remain / 60);
    remain -= mins * 60;
    var secs = remain;

    // Format hours, minutes, and seconds
    if (hours < 10) { hours = "0" + hours; }
    if (mins < 10) { mins = "0" + mins; }
    if (secs < 10) { secs = "0" + secs; }

    // Update the displayed time
    sw.etime.innerHTML = hours + ":" + mins + ":" + secs;
  },
  
  start: function () {
    // Start the stopwatch
    sw.timer = setInterval(sw.tick, 1000);
    sw.ego.value = "Stop";
    sw.ego.removeEventListener("click", sw.start);
    sw.ego.addEventListener("click", sw.stop);
  },
  
  stop: function () {
    // Stop the stopwatch
    clearInterval(sw.timer);
    sw.timer = null;
    sw.ego.value = "Start";
    sw.ego.removeEventListener("click", sw.stop);
    sw.ego.addEventListener("click", sw.start);
  },
  
  reset: function () {
    // Reset the stopwatch
    if (sw.timer != null) { sw.stop(); }
    sw.now = 0; // Reset the time to 0
    sw.tick(); // Update the display immediately
  }
};

// Initialize the stopwatch when the page loads
window.addEventListener("load", sw.init);
