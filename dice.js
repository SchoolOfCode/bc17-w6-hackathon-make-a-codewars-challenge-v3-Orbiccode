// player rolls dice
// computer rolls dice
// this is repeated until array is filled with 5 rolls of the dice
// the numbers are totaled 
// a winner or a tie is declared

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

     if (playerSum >= computerSum) {
        return 'Player Win'
     } else if (computerSum >= playerSum) {
        return 'Computer Win'
     } else if (playerSum === computerSum){
        return `It's a Tie`
     }
}