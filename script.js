// const status = document.querySelector('.game-status');
// let gameActive = true;
// let player = "x";
// let gameState = {" ", " ", " ", " ", " ", " ", " ", " ", " " };
// const winnerMessage= () => ' Player ${player} has won !!';
// const drawMessage= () =>  'Game ended in a DRAW !!';
// const playerTurn=() => 'It\'s ${player}\'s turn.'
// status.innerHTML = playerTurn();


// function cellPlayed(clickedCell, index) {
// 	gameState[index]= player;
// 	clickedCell.innerHTML=player;
// }


// function handlePlayerChsnge() {
// 	player= player==="x"?"0":"x";
// 	status.innerHTML= playerTurn();
// }


// // 
// const winningConditions=[
	
// 	[0,1,2],
// 	[3,4,5],
// 	[6,7,8],
// 	[0,3,6],
// 	[1,4,7],
// 	[2,5,8],
// 	[0,4,8],
// 	[2,4,6]

// 	]

// function result(){
// 	let roundWon=false;
// 	for(let i=0;i<=7;i++){
// 		const winCondition= winningCondition[i];
// 		let a=gameState[winCondition[0]];
// 		let b=gameState[winCondition[1]];
// 		let c=gameState[winCondition[2]];
// 		if(a==='' || b==='' || c===''){
// 			continue;
// 	    }
// 	    if(a===b && b===c){
// 		roundWon=true;
// 		break;
// 	    }
// 	}
// 	if(roundWon){
// 		status.innerHTML= winnerMessage();
// 		gameActive=false;
// 		return;
// 	}
// 	let roundDraw= !gameState.includes('');
// 	if(roundDraw){
// 		status.innerHTML= drawMessage();
// 		gameActive=false;
// 		return;
// 	}
// 	handlePlayerChsnge();
// }


// function cellClick(cellClickEve) {
// 	const clickedCell=cellClickEve.target;
// 	const index=parseInt(clickedCell.getAttribute('data-cell-index'));
// 	if(gameState[index]!=="" || !gameActive){
// 		return;
// 	}
// 	cellPlayed(clickedCell, index);
// 	result();
// }


// function restart() {
// 	gameActive=true;
// 	player="X";
// 	gameState= ["", "", "", "", "", "", "", "", ""];
// 	status.innerHTML=playerTurn();
// 	document.querySelectorAll('.cell').forEach9(ell=>cell.innerHTML="");
// }

// document.querySelectorAll('.cell').forEach(cell=> cell.addEventListener('click',cellClick));
// document.querySelector('.game-restart').addEventListener('.click',restart);



//----------------------------------------------------------------
//defining the winning conditions
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





//----------------------------------------------------------------

// /*
// We store our game status element here to allow us tso more easily 
// use it later on 
// */
// const status = document.querySelector('.game--status');
// /*
// Here we declare some variables that we will use to track the 
// game state throught the game. 
// */
// /*
// We will use gameActive to pause the game in case of an end scenario
// */
// let gameActive = true;
// /*
// We will store our current player here, so we know whos turn 
// */
// let player = "X";
// /*
// We will store our current game state here, the form of empty strings in an array
//  will allow us to easily track played cells and validate the game state later on
// */
// let gameState = ["", "", "", "", "", "", "", "", ""];
// /*
// Here we have declared some messages we will display to the user during the game.
// Since we have some dynamic factors in those messages, namely the current player,
// we have declared them as functions, so that the actual message gets created with 
// current data every time we need it.
// */
// const winningMessage = () => `Player ${player} has won!`;
// const drawMessage = () => `Game ended in a draw!`;
// const playerTurn = () => `It's ${player}'s turn`;
// /*
// We set the inital message to let the players know whose turn it is
// */
// status.innerHTML = playerTurn();
// function cellPlayed(clickedCell, index) {
// /*
// We update our internal game state to reflect the played move, 
// as well as update the user interface to reflect the played move
// */
//     gameState[index] = player;
//     clickedCell.innerHTML = player;
// }

// function playerSwap() {
//     player = player === "X" ? "O" : "X";
//     status.innerHTML = playerTurn();
// }


// const winningConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];
// function result() {
//     let roundWon = false;
//     for (let i = 0; i <= 7; i++) {
//         const winCondition = winningConditions[i];
//         let a = gameState[winCondition[0]];
//         let b = gameState[winCondition[1]];
//         let c = gameState[winCondition[2]];
//         if (a === '' || b === '' || c === '') {
//             continue;
//         }
//         if (a === b && b === c) {
//             roundWon = true;
//             break
//         }
//     }
// if (roundWon) {
//         status.innerHTML = winningMessage();
//         gameActive = false;
//         return;
//     }
// /* 
// We will check weather there are any values in our game state array 
// that are still not populated with a player sign
// */
//     let roundDraw = !gameState.includes("");
//     if (roundDraw) {
//         status.innerHTML = drawMessage();
//         gameActive = false;
//         return;
//     }
// /*
// If we get to here we know that the no one won the game yet, 
// and that there are still moves to be played, so we continue by changing the current player.
// */
//     playerSwap();
// }


// function cellClick(cellClickEve) {
// /*
// We will save the clicked html element in a variable for easier further use
// */    
//     const clickedCell = cellClickEve.target;
// /*
// Here we will grab the 'data-cell-index' attribute from the clicked cell to identify where that cell is in our grid. 
// Please note that the getAttribute will return a string value. Since we need an actual number we will parse it to an 
// integer(number)
// */
//     const index = parseInt(
//       clickedCell.getAttribute('data-cell-index')
//     );
// /* 
// Next up we need to check whether the call has already been played, 
// or if the game is paused. If either of those is true we will simply ignore the click.
// */
//     if (gameState[index] !== "" || !gameActive) {
//         return;
//     }
// /* 
// If everything if in order we will proceed with the game flow
// */    
//     cellPlayed(clickedCell, index);
//     result();
// }

// function restart() {
//     gameActive = true;
//     player = "X";
//     gameState = ["", "", "", "", "", "", "", "", ""];
//     status.innerHTML = playerTurn();
//     document.querySelectorAll('.cell')
//                .forEach(cell => cell.innerHTML = "");
// }

// /*
// And finally we add our event listeners to the actual game cells, as well as our 
// restart button
// */
// document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));
// document.querySelector('.game--restart').addEventListener('click', restart);
