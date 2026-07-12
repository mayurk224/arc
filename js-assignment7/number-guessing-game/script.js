// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Get DOM elements
const guessForm = document.getElementById('guess-form');
const guessInput = document.getElementById('guess');
const hint = document.getElementById('hint');
const result = document.getElementById('result');

// Add event listener to form
guessForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        hint.textContent = 'Please enter a valid number between 1 and 100';
        return;
    }

    if (userGuess > randomNumber) {
        hint.textContent = 'Too High!';
        result.textContent = '';
    } else if (userGuess < randomNumber) {
        hint.textContent = 'Too Low!';
        result.textContent = '';
    } else {
        hint.textContent = '';
        result.textContent = 'Congratulations! You guessed the number!';
    }

    guessInput.value = '';
});
