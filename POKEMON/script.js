const pokemonImage = document.getElementById('pokemonImage');
const pokemonGuess = document.getElementById('pokemonGuess');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');

let currentPokemonName = '';

// Fetch a random Pokémon from the PokéAPI
async function fetchRandomPokemon() {
    const randomId = Math.floor(Math.random() * 151) + 1; // Fetch Pokémon from the first generation (ID 1-151)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data = await response.json();
    
    currentPokemonName = data.name;
    pokemonImage.src = data.sprites.front_default;
    pokemonImage.style.filter = 'blur(10px)';
    message.textContent = '';
    pokemonGuess.value = '';
}

// Check the user's guess
function checkGuess() {
    const userGuess = pokemonGuess.value.trim().toLowerCase();

    if (userGuess === currentPokemonName.toLowerCase()) {
        message.textContent = `Correct! It's ${currentPokemonName}!`;
        message.style.color = 'green';
        pokemonImage.style.filter = 'blur(0)';
        
        setTimeout(fetchRandomPokemon, 3000); // Load a new Pokémon after 3 seconds
    } else {
        message.textContent = 'Wrong guess, try again!';
        message.style.color = 'red';
    }
}

// Event listener for the guess button
guessButton.addEventListener('click', checkGuess);

// Load a Pokémon when the page loads
fetchRandomPokemon();
