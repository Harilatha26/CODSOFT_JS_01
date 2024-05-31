let randomNumber;
let attempts;
let maxAttempts = 10;
let score = 0;
let rounds = 0;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('feedback').textContent = '';
    document.getElementById('attempts').textContent = `Attempts remaining: ${maxAttempts}`;
    document.getElementById('newGame').style.display = 'none';
    document.getElementById('guess').value = '';
}

function submitGuess() {
    const userGuess = Number(document.getElementById('guess').value);
    attempts++;

    if (userGuess === randomNumber) {
        document.getElementById('feedback').textContent = 'Congratulations! You guessed the correct number!';
        score++;
        rounds++;
        endGame();
    } else if (userGuess > randomNumber) {
        document.getElementById('feedback').textContent = 'Too high!';
    } else if (userGuess < randomNumber) {
        document.getElementById('feedback').textContent = 'Too low!';
    }

    if (attempts >= maxAttempts) {
        document.getElementById('feedback').textContent = `Game over! The number was ${randomNumber}.`;
        rounds++;
        endGame();
    }

    document.getElementById('attempts').textContent = `Attempts remaining: ${maxAttempts - attempts}`;
}

function endGame() {
    document.getElementById('newGame').style.display = 'block';
    document.getElementById('score').textContent = `Score: ${score}, Rounds: ${rounds}`;
}

document.getElementById('submitGuess').addEventListener('click', submitGuess);
document.getElementById('newGame').addEventListener('click', startGame);


startGame();
