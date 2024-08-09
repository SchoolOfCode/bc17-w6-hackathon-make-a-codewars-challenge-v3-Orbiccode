import { test, expect, it, vi, describe } from 'vitest'
import { 
    rollDice,
    playerRoll,
    computerRoll,
    gameLoop,
    playerRound,
    computerRound,

} from './dice.js'

test('can you roll?', () => {
    expect(rollDice()).toBeGreaterThanOrEqual(1);
    expect(rollDice()).toBeLessThanOrEqual(6);
})

test('can you push?', () => {
    playerRoll();
    computerRoll();
    expect(playerRound.length).toBe(1);
    expect(computerRound.length).toBe(1);
})

describe('can you win?', () => {
    it('should fill an Array', () => {
        gameLoop()
        expect(playerRound.length).toBe(5);
        expect(computerRound.length).toBe(5);
    })
})