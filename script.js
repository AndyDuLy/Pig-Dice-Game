// Player variables
var player1Hold, player2Hold, player1Turn, player2Turn, currentPlayer;

player1Hold = 0; 
player2Hold = 0; 
player1Turn = 0;  
player2Turn = 0; 
currentPlayer = 0;

// Dice rolling logic 
function changeDiceDisplay(rolled) {
    switch (rolled) {
        case (rolled === 1):
            document.getElementById('diceOne').style.display = 'block';
            document.getElementById('diceTwo').style.display = 'none';
            document.getElementById('diceThree').style.display = 'none';
            document.getElementById('diceFour').style.display = 'none';
            document.getElementById('diceFive').style.display = 'none';
            document.getElementById('diceSix').style.display = 'none';
        case (rolled === 2):
            document.getElementById('diceOne').style.display = 'none';
            document.getElementById('diceTwo').style.display = 'block';
            document.getElementById('diceThree').style.display = 'none';
            document.getElementById('diceFour').style.display = 'none';
            document.getElementById('diceFive').style.display = 'none';
            document.getElementById('diceSix').style.display = 'none';
        case (rolled === 3):
            document.getElementById('diceOne').style.display = 'none';
            document.getElementById('diceTwo').style.display = 'none';
            document.getElementById('diceThree').style.display = 'block';
            document.getElementById('diceFour').style.display = 'none';
            document.getElementById('diceFive').style.display = 'none';
            document.getElementById('diceSix').style.display = 'none';
        case (rolled === 4): 
            document.getElementById('diceOne').style.display = 'none';
            document.getElementById('diceTwo').style.display = 'none';
            document.getElementById('diceThree').style.display = 'none';
            document.getElementById('diceFour').style.display = 'block';
            document.getElementById('diceFive').style.display = 'none';
            document.getElementById('diceSix').style.display = 'none';
        case (rolled === 5): 
            document.getElementById('diceOne').style.display = 'none';
            document.getElementById('diceTwo').style.display = 'none';
            document.getElementById('diceThree').style.display = 'none';
            document.getElementById('diceFour').style.display = 'none';
            document.getElementById('diceFive').style.display = 'block';
            document.getElementById('diceSix').style.display = 'none';
        case (rolled === 6):
            document.getElementById('diceOne').style.display = 'none';
            document.getElementById('diceTwo').style.display = 'none';
            document.getElementById('diceThree').style.display = 'none';
            document.getElementById('diceFour').style.display = 'none';
            document.getElementById('diceFive').style.display = 'none';
            document.getElementById('diceSix').style.display = 'block';
    }
}

function determineIfWinner(currentplayer) {
    if (currentPlayer === 0) {
        if (player1Hold >= 100) {
            document.getElementById('hiddenWinner1').style.display = 'block';
        }
    } else if (currentPlayer === 1) {
        if (player2Hold >= 100) {
            document.getElementById('hiddenWinner2').style.display = 'block';
        }
    }
}

function addTurnScore(currentPlayer, valueToAdd) {
    if (currentPlayer === 0) {
        player1Turn = player1Turn + valueToAdd;
        document.getElementById('player1Turn').textContent = player1Turn;
    } else if (currentPlayer === 1) {
        player2Turn = player2Turn + valueToAdd;
        document.getElementById('player2Turn').textContent = player2Turn;
    }
}

function rollDice() {
    var diceRollValue = Math.floor(Math.random() * 6) + 1;
    changeDiceDisplay(diceRollValue);

    if (diceRollValue === 1) {
        if (currentPlayer === 0) {
            currentPlayer = currentPlayer + 1;
            player1Turn = 0;
            document.getElementById('player1Turn').textContent = 0;
        } else if (currentPlayer === 1) {
            currentPlayer = currentPlayer - 1;
            player2Turn = 0;
            document.getElementById('player2Turn').textContent = 0;
        }
    } else if (diceRollValue === 2) {
        addTurnScore(currentPlayer, diceRollValue);
    } else if (diceRollValue === 3) {
        addTurnScore(currentPlayer, diceRollValue);
    } else if (diceRollValue === 4) {
        addTurnScore(currentPlayer, diceRollValue);
    } else if (diceRollValue === 5) {
        addTurnScore(currentPlayer, diceRollValue);
    } else if (diceRollValue === 6) {
        addTurnScore(currentPlayer, diceRollValue);
    }
}

function holdScore() {
    if (currentPlayer === 0 && player1Turn != 0) {
        player1Hold = player1Hold + player1Turn;
        determineIfWinner(currentPlayer);
        document.getElementById('player1Hold').textContent = player1Hold;
        currentPlayer = 1;
        player1Turn = 0;
        document.getElementById('player1Turn').textContent = 0;
    } else if (currentPlayer === 1 && player2Turn != 0) {
        player2Hold = player2Hold + player2Turn;
        determineIfWinner(currentPlayer);
        document.getElementById('player2Hold').textContent = player2Hold;
        currentPlayer = 0;
        player2Turn = 0;
        document.getElementById('player2Turn').textContent = 0;
    }
}