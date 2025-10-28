// Google Sheets Web App URL - Replace with your actual URL
const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbyYRlXFhiGdO2UkO9XiM9GryHvCKzyso09qBAdgH6dz5gb3E2sVNCdUNr22prJVfsh5/exec';

const landing = document.getElementById("landing");
const game = document.getElementById("game");
const leaderboard = document.getElementById("leaderboard");
const gameBoard = document.getElementById("gameBoard");
const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");
const levelSelect = document.getElementById("levelSelect");
const scoreDisplay = document.getElementById("score");
const playerNameInput = document.getElementById("playerName");
const leaderboardList = document.getElementById("leaderboardList");
const showLeaderboardBtn = document.getElementById("showLeaderboardBtn");

let score = 0, cards = [], flipped = [], playerName = "", seconds = 0;
let timerInterval;
let wrongMatches = 0; // Track wrong matches for penalty
const ADMIN_SECRET = "RUSH2025"; // 🔐 Secret code

function showSection(section) {
  [landing, game, leaderboard].forEach(s => s.style.display = "none");
  section.style.display = "flex";
}

function showLanding() { showSection(landing); }

function startTimer() {
  seconds = 0;
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    seconds++;
    document.getElementById("time").textContent = formatTime(seconds);
  }, 1000);
}

function stopTimer() { clearInterval(timerInterval); }

function formatTime(sec) {
  const m = Math.floor(sec / 60), s = sec % 60;
  return `${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`;
}

// Game Board
function createBoard(level) {
  gameBoard.innerHTML = "";
  let pairs;
  switch(level) {
    case "easy": pairs = 4; break;
    case "medium": pairs = 6; break;
    case "hard": pairs = 8; break;
    case "expert": pairs = 10; break;
    case "legend": pairs = 12; break;
    default: pairs = 4;
  }
  let symbols = ["🍎","🍌","🍇","🍒","🍉","🥝","🍋","🍑","🍓","🍍","🍈","🍏","🍐","🍊","🍔","🍕","🍦","🍩","🍪","🍫","🍿","🍭","🍬","🍯"].slice(0,pairs);
  cards = [...symbols, ...symbols].sort(() => 0.5 - Math.random());
  // Add medium/expert/legend class for those levels
  gameBoard.classList.remove("easy", "medium", "expert", "legend");
  if(level === "easy") gameBoard.classList.add("easy");
  if(level === "medium") gameBoard.classList.add("medium");
  if(level === "expert") gameBoard.classList.add("expert");
  if(level === "legend") gameBoard.classList.add("legend");
  // Force 4 columns for expert/legend on mobile
  if ((level === "expert" || level === "legend") && window.innerWidth <= 600) {
    gameBoard.style.gridTemplateColumns = `repeat(4, 1fr)`;
  } else {
    gameBoard.style.gridTemplateColumns = `repeat(${Math.ceil(Math.sqrt(pairs*2))}, 80px)`;
  }
  cards.forEach(sym => {
    let cardClass = "card";
    if(level === "easy") cardClass += " easy";
    if(level === "medium") cardClass += " medium";
    if(level === "expert") cardClass += " expert";
    if(level === "legend") cardClass += " legend";
    const card = document.createElement("div");
    card.className = cardClass;
    card.textContent = "?";
    card.dataset.symbol = sym;
    card.addEventListener("click", ()=>flipCard(card));
    gameBoard.appendChild(card);
  });
}

function flipCard(card) {
  if(flipped.length===2 || card.classList.contains("flipped")) return;
  card.classList.add("flipped");
  card.textContent = card.dataset.symbol;
  flipped.push(card);
  if(flipped.length===2) setTimeout(checkMatch, 800);
}

function checkMatch() {
  const currentLevel = levelSelect.value;
  let basePoints;
  
  // Different base points per level (harder = more points)
  switch(currentLevel) {
    case "easy": basePoints = 5; break;
    case "medium": basePoints = 8; break;
    case "hard": basePoints = 12; break;
    case "expert": basePoints = 15; break;
    case "legend": basePoints = 20; break;
    default: basePoints = 5;
  }
  
  if(flipped[0].dataset.symbol===flipped[1].dataset.symbol){
    // Correct match - add base points
    score += basePoints;
    scoreDisplay.textContent = score;
    flipped=[];
    
    if(document.querySelectorAll(".card:not(.flipped)").length===0){
      stopTimer();
      
      // Calculate final score with time bonus and penalties
      const timeBonus = Math.max(0, 300 - seconds); // Bonus for finishing under 5 minutes
      const penalty = wrongMatches * 2; // 2 points penalty per wrong match
      const finalScore = score + timeBonus - penalty;
      
      // Calculate maximum possible score for this level
      let maxPairs;
      switch(currentLevel) {
        case "easy": maxPairs = 4; break;
        case "medium": maxPairs = 6; break;
        case "hard": maxPairs = 8; break;
        case "expert": maxPairs = 10; break;
        case "legend": maxPairs = 12; break;
        default: maxPairs = 4;
      }
      const maxScore = (maxPairs * basePoints) + 300; // Max match points + max time bonus
      
      // Show detailed score breakdown
      Swal.fire({
        title:"🎉 You Won!",
        html:`
          <div style="text-align: left; line-height: 1.6;">
            <strong>Match Points:</strong> ${score}<br>
            <strong>Time Bonus:</strong> ${timeBonus} pts<br>
            <strong>Wrong Matches:</strong> ${wrongMatches} (-${penalty} pts)<br>
            <strong>Time Taken:</strong> ${formatTime(seconds)}<br>
            <hr style="border: 1px solid #00e0ff; margin: 10px 0;">
            <strong>Final Score: ${finalScore} / ${maxScore}</strong>
          </div>
        `,
        icon:"success",
        confirmButtonColor:"#00e0ff",
        width: 400
      }).then(()=>showLeaderboard());
      
      // Save the final score
      saveScore(finalScore);
    }
  } else {
    // Wrong match - add penalty
    wrongMatches++;
    flipped.forEach(c=>{
      c.classList.remove("flipped");
      c.textContent="?";
    });
    flipped=[];
  }
}

// Leaderboard
function getLeaderboardKey(level) {
  return `memoryLeaderboard_${level}`;
}

function saveScore(finalScore){
  const level = levelSelect.value;
  console.log('[SAVE] Level:', level, 'Name:', playerName, 'Final Score:', finalScore, 'Time:', seconds);
  saveScoreOnline(level, playerName, finalScore, seconds).then(() => {
    showLeaderboard(level);
  }).catch(error => {
    console.error('[SAVE] Error saving score:', error);
    // Fallback to showing leaderboard anyway
    showLeaderboard(level);
  });
}

// Google Sheets integration
// Save score to Google Sheets
function saveScoreOnline(level, name, score, time) {
  console.log('[SHEETS SAVE] Attempting to save:', { level, name, score, time });
  const url = `${SHEETS_URL}?action=save&level=${encodeURIComponent(level)}&name=${encodeURIComponent(name)}&score=${score}&time=${time}`;
  return fetch(url, { method: 'GET' })
  .then(response => response.text())
  .then(data => {
    console.log('[SHEETS SAVE] Success:', data);
    return data;
  })
  .catch(error => {
    console.error('[SHEETS SAVE] Error:', error);
    throw error;
  });
}

// Fetch leaderboard from Google Sheets
async function fetchLeaderboard(level) {
  console.log('[FETCH] Level:', level);
  try {
    const url = `${SHEETS_URL}?action=fetch&level=${encodeURIComponent(level)}`;
    console.log('[FETCH] URL:', url);
    const response = await fetch(url, { method: 'GET' });
    
    console.log('[FETCH] Response status:', response.status);
    const text = await response.text();
    console.log('[FETCH] Raw response:', text);
    
    let scores;
    try {
      scores = JSON.parse(text);
      console.log('[FETCH] Parsed scores:', scores);
    } catch (parseError) {
      console.error('[FETCH] JSON parse error:', parseError);
      return [];
    }
    
    // Ensure scores is an array
    if (!Array.isArray(scores)) {
      console.error('[FETCH] Scores is not an array:', scores);
      return [];
    }
    
    console.log('[FETCH] Returning scores:', scores);
    return scores;
  } catch (error) {
    console.error('[FETCH] Error:', error);
    return [];
  }
}

// Reset leaderboard in Google Sheets
function resetLeaderboardOnline(level) {
  console.log('[RESET] Level:', level);
  const url = `${SHEETS_URL}?action=reset&level=${encodeURIComponent(level)}`;
  return fetch(url, { method: 'GET' })
  .then(response => response.text())
  .then(data => {
    console.log('[RESET] Success:', data);
    return data;
  })
  .catch(error => {
    console.error('[RESET] Error:', error);
    throw error;
  });
}

function updateLeaderboard(){
  const level = levelSelect.value;
  const key = getLeaderboardKey(level);
  const data = JSON.parse(localStorage.getItem(key))||[];
  leaderboardList.innerHTML="";
  if(data.length===0) leaderboardList.innerHTML="<li>No scores yet 😔</li>";
  else data.forEach((p,i)=>{
    const li = document.createElement("li");
    li.textContent = `${i+1}. ${p.name} — ${p.score} pts`;
    leaderboardList.appendChild(li);
  });
}

function showLeaderboard(){ 
  // Fetch from Google Sheets and update UI
  let level = levelSelect.value;
  if (arguments.length > 0 && typeof arguments[0] === 'string') {
    level = arguments[0];
    levelSelect.value = level;
  }
  console.log('[SHOW LEADERBOARD] Level:', level);
  
  // Show loading state
  leaderboardList.innerHTML = "<li>Loading scores...</li>";
  
  fetchLeaderboard(level).then(scores => {
    console.log('[SHOW LEADERBOARD] Scores received:', scores);
    leaderboardList.innerHTML = "";
    if(scores.length === 0) {
      leaderboardList.innerHTML = "<li>No scores yet 😔</li>";
    } else {
      scores.forEach((p, i) => {
        const li = document.createElement("li");
        li.textContent = `${i+1}. ${p.name} — ${p.score} pts`;
        leaderboardList.appendChild(li);
      });
    }
  }).catch(error => {
    console.error('Error fetching leaderboard:', error);
    leaderboardList.innerHTML = "<li>Error loading scores 😔</li>";
  });
  
  showSection(leaderboard);
  // Ensure tab button is active for correct level
  tabButtons.forEach(b => {
    if (b.dataset.level === level) b.classList.add('active');
    else b.classList.remove('active');
  });
}

// Reset Leaderboard with SweetAlert
function resetLeaderboard(){
  Swal.fire({
    title:"Admin Verification 🔒",
    input:"password",
    inputPlaceholder:"Enter secret code",
    showCancelButton:true,
    confirmButtonColor:"#3085d6",
    cancelButtonColor:"#d33",
    preConfirm:code=>{
      if(code!==ADMIN_SECRET) Swal.showValidationMessage("❌ Wrong code!"); else return true;
    }
  }).then(async result => {
    if(result.isConfirmed){
      // Always get level from active tab
      let activeTab = document.querySelector('.tab-btn.active');
      let level = activeTab ? activeTab.dataset.level : 'easy';
      levelSelect.value = level;
      console.log('[RESET] Level:', level);
      await resetLeaderboardOnline(level); // Reset in Firebase
      await showLeaderboard(level);
      Swal.fire({title:"✅ Leaderboard Reset!", icon:"success", timer:2000, showConfirmButton:false});
    }
  });
}

// Leaderboard tab logic
const tabButtons = document.querySelectorAll('.tab-btn');
tabButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    const level = btn.dataset.level;
    levelSelect.value = level;
    showLeaderboard(level); // Always fetch correct leaderboard
  });
});

// Event Listeners
startBtn.onclick = ()=>{
  const nameInput = playerNameInput.value.trim();
  if (!nameInput) {
    Swal.fire({
      title: "Name Required! 🎮",
      text: "Please enter your name before starting the game",
      icon: "warning",
      confirmButtonColor: "#00e0ff",
      confirmButtonText: "Got it!",
      timer: 1000,
      timerProgressBar: true
    }).then(() => {
      playerNameInput.focus();
    });
    return;
  }
  playerName = nameInput;
  
  // Show game start message for 2 seconds
  Swal.fire({
    title: "Get Ready! 🎯",
    text: `Good luck, ${playerName}! Match all the cards as fast as you can!`,
    icon: "info",
    confirmButtonColor: "#00e0ff",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false
  }).then(() => {
    // Start the game after the alert
    score = 0;
    wrongMatches = 0; // Reset wrong matches counter
    scoreDisplay.textContent = score;
    showSection(game);
    createBoard(levelSelect.value);
    
    // Show all cards for 2 seconds before starting
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
      card.classList.add('flipped');
      card.textContent = card.dataset.symbol;
    });
    
    setTimeout(() => {
      // Hide all cards after 1 second
      allCards.forEach(card => {
        card.classList.remove('flipped');
        card.textContent = '?';
      });
      // Start the timer after cards are hidden
      startTimer();
    }, 1000);
  });
};

backBtn.onclick = ()=>{ stopTimer(); showLanding(); };
levelSelect.onchange = ()=>createBoard(levelSelect.value);
if (showLeaderboardBtn) {
  showLeaderboardBtn.onclick = () => {
    // Set first tab as active and show its leaderboard
    if(tabButtons.length) {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabButtons[0].classList.add('active');
      levelSelect.value = tabButtons[0].dataset.level;
      showLeaderboard(tabButtons[0].dataset.level);
    } else {
      showLeaderboard();
    }
  };
}

// Add event listeners for leaderboard buttons
const resetBtn = document.getElementById("resetBtn");
if (resetBtn) {
  resetBtn.onclick = resetLeaderboard;
}

const leaderboardBackBtn = document.getElementById("leaderboardBackBtn");
if (leaderboardBackBtn) {
  leaderboardBackBtn.onclick = showLanding;
}

// Initialize - show landing page and set first tab as active
if(tabButtons.length) {
  tabButtons[0].classList.add('active');
  levelSelect.value = tabButtons[0].dataset.level;
}
showSection(landing);
