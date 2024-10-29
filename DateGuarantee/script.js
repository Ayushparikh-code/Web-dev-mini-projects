function redirectToCongrats() {
    window.location.href = 'congrats.html';
}

function moveNoButton() {
    const button = document.getElementById('noBtn');
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute'; 
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}
