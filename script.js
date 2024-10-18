function playTrack(track) {
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');

    switch(track) {
        case 'track1':
            audioSource.src = 'https://masstamilan.download/t/2024/Amaran/320/Vennilavu-Saaral-MassTamilan.dev.mp3?h=1729241346-G0OPTI3lXVANhXNTNoqYRI3oxuh5TyHuAZDpexFsMUg%3D'; // Replace with your audio file path
            break;
        case 'track2':
            audioSource.src = 'https://masstamilan.download/t/2024/Amaran/320/Sai-Pallavi%27s-Intro-MassTamilan.dev.mp3?h=1729241328-FCq39MiTjkpSW8o8mfoOeGgko7F5wSYOFN%2FevxEVePU%3D'; // Replace with your audio file path
            break;
        case 'track3':
            audioSource.src = 'https://masstamilan.download/t/2024/Amaran/128/Hey-Minnale-MassTamilan.dev.mp3?h=1729241281-X98n3LYQ5BE6VUg5FSAjeSBPstCbxcHjbBj8w46vy7I%3D'; // Replace with your audio file path
            break;
    }
    audioPlayer.load();
    audioPlayer.play();
}