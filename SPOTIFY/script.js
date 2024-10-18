const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPause');
const progressBar = document.getElementById('progressBar');
const songTitle = document.getElementById('songTitle');
const songList = document.querySelectorAll('.song');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentSongIndex = 0;
let isPlaying = false;
let songs = Array.from(songList);

// Play or pause the audio
playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.textContent = '▶️';
    } else {
        audioPlayer.play();
        playPauseBtn.textContent = '⏸️';
    }
    isPlaying = !isPlaying;
});

// Update the progress bar as the song plays
audioPlayer.addEventListener('timeupdate', () => {
    progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
});

// Seek when the progress bar is clicked
progressBar.addEventListener('input', () => {
    audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
});

// Load a selected song
songList.forEach((song, index) => {
    song.addEventListener('click', () => {
        loadSong(index);
        audioPlayer.play();
        playPauseBtn.textContent = '⏸️';
        isPlaying = true;
    });
});

// Load a song based on index
function loadSong(index) {
    currentSongIndex = index;
    const song = songs[currentSongIndex];
    audioPlayer.src = song.getAttribute('data-src');
    songTitle.textContent = song.textContent;
    progressBar.value = 0;
}

// Play the next song
nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
    playPauseBtn.textContent = '⏸️';
    isPlaying = true;
});

// Play the previous song
prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
    playPauseBtn.textContent = '⏸️';
    isPlaying = true;
});

// Load the first song when the page loads
loadSong(0);
