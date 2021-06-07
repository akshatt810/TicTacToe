// win conditions
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let flag = 1;                                           // ver to check if game is still active
let player = "X";                                       //defining dfault player as X
let gameState = ["", "", "", "", "", "", "", "", ""];
const winningMessage = () => `Player ${player} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const playerTurn = () => `It's ${player}'s turn`;
const status = document.querySelector('.game--status');  
status.innerHTML = playerTurn();                          //display which player's turn is it

function cellClick(cellClickEve)                           //func to store the index of a cell which is clickled
{
    const clickedCell = cellClickEve.target;
    const index = parseInt(
      clickedCell.getAttribute('data-cell-index')
    );
    if (gameState[index] !== "" || flag === 0) {
        return;
    }
    cellPlayed(clickedCell, index);
    result();
}
function cellPlayed(clickedCell, index)                   //func for assingning corr char(X or o) to the cell played
{
    gameState[index] = player;
    clickedCell.innerHTML = player;
}
function playerSwap()                                     //func to swap players after one hastaken his turn
{
    player = player === "X" ? "O" : "X";
    status.innerHTML = playerTurn();
}
function result()                                         //func to print which if the players won or was the match draw otherwise
{
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '')             
        {
            continue;
        }
        if (a === b && b === c)                             //iff either of them match with predefined winning conditions declare the match 
        {
            roundWon = true;
            break
        }
    }
    if (roundWon) {
        status.innerHTML = winningMessage();
        flag = 0;
        return;
    }
    let roundDraw = !gameState.includes("");                //if the match isn't yet won and none of the cells if free tthen declare a draw
    if (roundDraw) {
        status.innerHTML = drawMessage();
        flag=0;
        return;
    }
        playerSwap();                                      //callimng func playerSwap after each chance to exchange players
}
function restart()                                         //restarting the match if the restart button is pressed
{                                                          //thus resingning initial values to the variable
    flag=1;
    player = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    status.innerHTML = playerTurn();
    document.querySelectorAll('.cell')
               .forEach(cell => cell.innerHTML = "");
}
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));
document.querySelector('.game--restart').addEventListener('click', restart);

