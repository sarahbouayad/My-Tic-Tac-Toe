// // Discussed with Void, Shawna, Leny, Jasmine, Will, and Ty

// Player 1 = X Player 2 = O
// Turn Counter: Odd turn = player 1 even turn = player 2
// On click, change section css to match turn counter

// How to win:
// ON a three by three grid
// if a player collects the follow grids, you win
// 0,1,2  0,4,8  0,3,6  1,4,7  2,5,8  2,4,6  2,3,4  6,7,8  



// // Goal: Create a two player Tic-Tac-Toe game. The users should be able to click to place their X or O and if they win the program should mention their win in the DOM. Please make the game as OOP as possible.
// How to submit your code for review:
// Fork and clone this repo
// Create a new branch called answer
// Checkout answer branch
// Push to your fork
// Issue a pull request
// Your pull request description should contain the following:
// (1 to 5 no 3) I completed the challenge
// (1 to 5 no 3) I feel good about my code
// Anything specific on which you want feedback!

// Example:



// BEGIN CODE: 

// start with declarations. let player = document.getelement (player, restartbtn, boxes (the nine blocks) 
let player = document.getElementById('player')
let restart = document.getElementById('restart')
// convert html box collection into array using array.from()
let boxes = Array.from(document.getElementsByClassName('box'))
// next, declare X and O variables equal to a string of O and X

const exes = 'X'
const oh = 'O'

// declare currentplayer variable 

let currentPlay = exes 

// set the array.from to nine spaces and fill it with null so it can be filled later

let theSpace = Array(9).fill(null)

// function to start the game, create loop to add event listener to the dom element

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', clickOnBox))
}

// function for action when box is clicked 
// function should either display x or o, determine when someone has won by having the same indexes 
// parameter is an event as it is referring to the previous event
// 

function clickOnBox(e){
    const HtmlId = e.target.id
    if (!theSpace[HtmlId]) {
        theSpace[HtmlId] = currentPlay
        e.target.innerText = currentPlay
        currentPlay = currentPlay == exes ? oh : exes
        // ? is if, : is else
    } 
  player.innerText = theWinner()

}


const winningCombinations = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[2,5,8],
[0,4,8],
[2,4,6],
]


// function for when what is a winning combo 

function theWinner() {
 for (const condition of winningCombinations) {
    let [a,b,c] = condition 

    if (theSpace[a] && (theSpace[a] == theSpace[b] && theSpace[a] == theSpace[c])) {
        return `${theSpace[a]} has won!` 
       
    } 
 }
 return ' '
}



// function to restart game 

document.getElementById('restart').addEventListener('click', restartButton)

function restartButton(){
    theSpace.fill(null)
    boxes.forEach(boxes => {
        boxes.innerText = ''
    })
    // restart current player
    currentPlay = exes 
}


startGame()