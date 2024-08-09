
// dice roll function
// initialise player and computer health
// create function that decreases HP based on the roll and updates current health
// detect when health = 0 to declare winner 

// roll dice function
export function rollDice() {
   return Math.floor(Math.random() * 6) + 1;
}

// function to decrease health

export function updateHealth(currentHealth, damage) {
    return currentHealth - damage; 
}

// checkWin function

export function checkWin(playerHealth, computerHealth) {
    if (playerHealth <= 0) {
        return 'computer'
    } else if (computerHealth <= 0) {
        return 'player'
    }
return null
}

// gameplay function

export function gameTurn(playerRoll, computerRoll, playerHealth, computerHealth) {
    computerHealth = updateHealth(computerHealth, playerRoll);
    let winner = checkWin(playerHealth, computerHealth);
    playerHealth = updateHealth(playerHealth, computerRoll)
    if (winner) {
        return { playerHealth, computerHealth, winner}
    }
}

function battle() {
    // initialise HP bars
    let playerHealth = 50;
    let computerHealth = 50;
    while (playerHealth > 0 && computerHealth > 0) {

    let playerRoll = rollDice();
    let computerRoll = rollDice();

    const result = gameTurn(playerRoll, computerRoll, playerHealth, computerHealth)
    playerHealth = result.playerHealth
    computerHealth = result.computerHealth

    if (result.winner) {
        console.log(boo)
    }


}


}


