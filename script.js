document.addEventListener('DOMContentLoaded', function() {
    
    const betweenText = document.querySelector('.between');
    const numberDisplay = document.querySelector('.number');
    const guessInput = document.querySelector('.guess');
    const checkButton = document.querySelector('.check');
    const againButton = document.querySelector('.again');
    const messageText = document.querySelector('.message');
    const scoreDisplay = document.querySelector('.score');
    const highscoreDisplay = document.querySelector('.highscore');

    let secretNumber = generateSecretNumber();
    let score = 20;
    let highscore = 0;

    
    function generateSecretNumber() {
        return Math.floor(Math.random() * 20) + 1;
    }

   
    function updateMessage(message) {
        messageText.textContent = message;
    }

  
    function updateScore() {
        scoreDisplay.textContent = score;
    }

    
    function updateHighscore() {
        if (score > highscore) {
            highscore = score;
            highscoreDisplay.textContent = highscore;
        }
    }

    
    checkButton.addEventListener('click', function() {
        const guess = parseInt(guessInput.value);
        
        
        if (!guess || guess < 1 || guess > 20) {
            updateMessage('⛔ Please enter a number between 1 and 20!');
        } else if (guess === secretNumber) {
            updateMessage('🎉 Correct Number! You win!');
            numberDisplay.textContent = secretNumber;
            document.body.style.backgroundColor = '#60b347';
            updateHighscore();
        } else {
            updateMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            updateScore();
        }
    });

    
    againButton.addEventListener('click', function() {
        secretNumber = generateSecretNumber();
        score = 20;
        updateMessage('Start guessing...');
        numberDisplay.textContent = '?';
        guessInput.value = '';
        updateScore();
        document.body.style.backgroundColor = '#222';
    });
});
