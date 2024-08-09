Put your plan, story, and any supporting material here, you could use the help of a readme markdown generator such as [readme.so](https://readme.so/)

Basic Dice Battle with rounds
- create a dice battle code kata between player and computer with 5 rolls of a dice in a row with sides between 1-6
- total the results at the end of the round
- keep track of who won the rounds 


> Dice battle game

design a game where the player and computer take turns rolling dice 
the result of that dice roll decreases the opponents health by said amount
HP starts at 50
declare a winner when opponents HP reaches 0

Strecth Goals

1. Add critical strike based on MP
    MP increases by 1 each turn. When MP reaches 5 player and computer can use critical strike which is double the dice roll.
2. if you roll a 6 MP does not increase    

- alt 1. Create functional game in html

Game Plan

- create dice roll
- initialise player and computer HP
- create function that decreases HP based on the roll and updates current health
- detect when health = 0 to declare winner 


test plan

- creat test that roll is between 1-6
- test that roll decreases health by right amount
- test if health reaches 0 the right winner is declared