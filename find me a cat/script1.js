const gameBoard = document.getElementById('gameBoard');
const result = document.getElementById('result');
const resetButton = document.getElementById('resetButton');
const images = [
    'https://static.vecteezy.com/system/resources/previews/002/098/203/non_2x/silver-tabby-cat-sitting-on-green-background-free-photo.jpg', // Cat image
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsxdCBr761DTokgLqDR38IEBCYeR4A-G_dzw&s', // Dog image
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxR9J16AjJIkIOTcKtgnALtwZsIyjiLxIKUg&s', // Bird image
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT67paQOxt1L0QiSW3osPcBoz7NDV9dHG9GnA&s', // Fish image
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRll4vjGGP6BYtK7cZa39H8Kesjgy4N24PlEA&s', // Rabbit image
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxwhldanJW7OBf1I9VNMkSAn16eVA2WhrJw&s', // Hamster image
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2_EdxlC4sMz2U7Fwa_ziK51u_eCKgyYHSw&s', // Turtle image
    'https://www.shutterstock.com/image-illustration/3d-illustration-colorful-ape-face-600nw-2201923537.jpg', // Monkey image
    'https://www.shutterstock.com/image-photo/cute-baby-elephant-playing-water-600nw-2432135173.jpg'  // Elephant image
];

function createBoard() {
    gameBoard.innerHTML = '';
    result.textContent = '';

    // Shuffle images
    const shuffledImages = images.sort(() => 0.5 - Math.random());

    // Create squares
    shuffledImages.forEach((imgSrc, index) => {
        const square = document.createElement('div');
        square.classList.add('square');

        const img = document.createElement('img');
        img.src = imgSrc;
        square.appendChild(img);

        // Check for the cat image
        if (imgSrc === images[0]) { // The cat image is the first one in the original array
            square.addEventListener('click', () => {
                result.textContent = 'You found the cat! 🎉';
            });
        } else {
            square.addEventListener('click', () => {
                result.textContent = 'No cat here! Try again. 🐾';
            });
        }

        gameBoard.appendChild(square);
    });
}

resetButton.addEventListener('click', createBoard);

// Initialize the game
createBoard();
