import { test, expect, it, vi, describe } from 'vitest'
import { 
    rollDice,
    playerRoll,
    computerRoll,
    gameLoop,
    playerRoundArray,
    computerRoundArray,

} from './dice.js'

























































// test to see if the roll is between 1 - 6
test('can you roll?', () => {
    expect(rollDice()).toBeGreaterThanOrEqual(1);
    expect(rollDice()).toBeLessThanOrEqual(6);
})

// test to see if the roll value is pushed into the array
test('can you push?', () => {
    playerRoll();
    computerRoll();
    expect(playerRoundArray.length).toBe(1);
    expect(computerRoundArray.length).toBe(1);
})

// test to see if the array is filled with 5 values
describe('can you win?', () => {
    it('should fill an Array', () => {
        gameLoop() 
        expect(playerRoundArray.length).toBe(5);
        expect(computerRoundArray.length).toBe(5);
    })
})
 
// test to see if the gameLoop returns 'Player Win' under winning conditions