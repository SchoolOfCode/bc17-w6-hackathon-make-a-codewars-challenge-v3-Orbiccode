// imports
// import vitest
// import functins to test from main.js

import { test, expect } from "vitest"
import { rollDice,
         updateHealth,
         checkWin,
         gameTurn,
 } from "./main.js"

// roll test

test('can you roll?', () => {
    expect(rollDice()).toBeGreaterThanOrEqual(1);
    expect(rollDice()).toBeLessThanOrEqual(6);
})

// damage test

test('can you damage?', ()  => {
    expect(updateHealth(50, 6)).toBe(44);
    expect(updateHealth(25, 3)).toBe(22);
    expect(updateHealth(10, 1)).toBe(9);
})

//checkWin function test

test('can you win?', () => {
    expect(checkWin(0, 30)).toBe('computer');
    expect(checkWin(30, 0)).toBe('player');
    expect(checkWin(30, 30)).toBe(null);
})

// gameTurn

test('can you game?', () => {
    expect(gameTurn(6, 0, 40, 5)).toEqual({
        'computerHealth': -1,
        'playerHealth': 40,
        'winner': "player"
      })
      expect(gameTurn(0, 0, 0, 10)).toEqual({
        'computerHealth': 10,
        'playerHealth': 0,
        'winner': "computer"
      })
})