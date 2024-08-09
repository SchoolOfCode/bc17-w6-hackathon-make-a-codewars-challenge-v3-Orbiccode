Put your plan, story, and any supporting material here, you could use the help of a readme markdown generator such as [readme.so](https://readme.so/)

Basic Dice Battle with rounds
- create a dice battle game between player and computer
- Each round consists of 5 rolls
- The total of the 5 rolls is calculated
- A winner of the round is declared.
>
Plan
- create a dice roll function
- create an array for player and computer
- create function that pushes roll values into array
- create function that sums the values in the array and compares them against each other
- declare a winner after totals have been compared

Test Plan
- Check if dice roll os between 1 - 6
- check if roll value is pushed into the array
- check if 5 values are pushed into the array
- check if 'Player Win' is returned when winning conditions are met


DISNEY DREAM IDEA
> 
D-battle game

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


Test Plan

- creat test that roll is between 1-6
- test that roll decreases health by right amount
- test if health reaches 0 the right winner is declared