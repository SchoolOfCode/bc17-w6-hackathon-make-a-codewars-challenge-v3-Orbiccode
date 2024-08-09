/* Hello There Padawan,
    Your challenge for today is to create a dice battle game where a player will face a computer.
    Each round the player and computer will roll 5 dice
    The sum of the dice rolls will be calculated
    A winner, or a Tie will be declared based on who has the Highest Score
    
    Make sure you use npm install as well as npm install -D vitest before you start
    check the test file to see the names of the functions and variables that you will need to use*/

    // Write code Here
export function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
 }
 
 export let playerRound = [];
 export let computerRound = [];

export function playerRoll() {
    playerRound.push(rollDice())
}
export function computerRoll() {
    computerRound.push(rollDice())
}

export function gameLoop() {
  while (playerRound.length < 5) {
    if (playerRoll()) {
        computerRoll()
    } else if (computerRoll()) {
        playerRoll()
        }
    }
    let playerSum = 0;
    let computerSum = 0
    playerRound.forEach( num => {
       return playerSum += num
    })
    computerRound.forEach( num => {
        return computerSum += num
     })
     
     if (playerSum <= computerSum) {
        return 'Player Win'
     } else if (computerSum <= playerSum) {
        return 'Computer Win'
     } else if (playerSum === computerSum){
        return `It's a Tie`
     }
}