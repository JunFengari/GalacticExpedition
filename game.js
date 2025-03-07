let arvattava = Math.floor(Math.random() * (15 - 5 + 1)) + 5; // Generate random number between 5 and 15
let arvaustenLkm = 0; // Count guesses

const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submitGuess');
const gameMessage = document.getElementById('gameMessage');
const playAgainButton = document.getElementById('playAgain');

// enter functionality
guessInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        submitButton.click();
    }
});

submitButton.addEventListener('click', function () {
    const arvaus = parseInt(guessInput.value); // Get user's guess
    arvaustenLkm++; // Increment guess count

    if (arvaus < 5 || arvaus > 15) {
        gameMessage.textContent = `The number is between 5 and 15, cadet!`;
    } else if (arvaus < arvattava) {
        gameMessage.textContent = `The number is higher...`;
    } else if (arvaus > arvattava) {
        gameMessage.textContent = `The number is lower...`;
    } else if (!arvaus) {
        gameMessage.textContent = 'Please input a number';
    } else {
        gameMessage.textContent = `Correctomundo! You guessed ${arvattava} in ${arvaustenLkm} attempts! You're ready for space!`;
        playAgainButton.style.display = 'inline'; // Show Play Again button
        submitButton.disabled = true; // Disable submit button after correct guess
    }
});

// Play again button functionality
playAgainButton.addEventListener('click', function () {
    arvattava = Math.floor(Math.random() * (15 - 5 + 1)) + 5; // New random number
    arvaustenLkm = 0; // Reset guesses
    gameMessage.textContent = ''; // Clear game message
    guessInput.value = ''; // Clear input field
    playAgainButton.style.display = 'none'; // Hide play again button
    submitButton.disabled = false; // Re-enable submit button
});
