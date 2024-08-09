import { test, expect, it, vi, describe } from 'vitest'
import { 
    rollDice,
    playerRoll,
    computerRoll,
    gameLoop,
    playerRound,
    computerRound,

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
    expect(playerRound.length).toBe(1);
    expect(computerRound.length).toBe(1);
})

// test to see if the array is filled with 5 values
describe('can you win?', () => {
    it('should fill an Array', () => {
        gameLoop() 
        expect(playerRound.length).toBe(5);
        expect(computerRound.length).toBe(5);
    })
})
 
// test to see if the gameLoop returns 'Player Win' under winning conditions