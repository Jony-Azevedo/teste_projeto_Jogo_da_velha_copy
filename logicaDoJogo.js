const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]");
const winningMessageTextElement = document.querySelector("[data-winning-message-text]");
const winningMessage = document.querySelector("[data-winning-message]");
const restartButton = document.querySelector("[data-restart-button]");

let isCirculeTurn;

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const startGame = ()  => {
    for (const cell of cellElements){
        cell.addEventListener("click", handleClick, {once: true});
    }
    isCirculeTurn = false;
    board.classList.add("x");

};
const endGame = (isDrow) => {
    if (isDrow) {
        winningMessageTextElement.innerText = "Empate";
    }else{
        winningMessageTextElement.innerText = isCirculeTurn
        ? "O Venceu"
        : "X Venceu";
    }
    winningMessage.classList.add("show-winning-message");
};

const handleRestartClick = () => {}

const checkForWin = (currentPlayer) => {
    return winningCombinations.some((combination)=>{
        return combination.every((index) => {
            return cellElements[index].classList.containers(currentPlayer);
        });
    });
};

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd);
};

const swapTurns  = () => {
    isCirculeTurn = !isCirculeTurn;

    board.classList.remove("circle");
    board.classList.remove("x");

    if (isCirculeTurn) {
        board.classList.add("circle");
    }else{
        board.classList.add("x");
        }
};

const handleClick = (e) => {
    // colocar a marca (x ou circulo)
     const cell  = e.target;
     const classToAdd = isCirculeTurn ? "circle" : "x";

     placeMark(cell, classToAdd);

     // verificar  por vitoria
     const isWin = checkForWin(classToAdd);

     if (isWin) {
        endGame(false);
     }

     //verificar por Empate

     //Mudar símbolo
     swapTurns();
};
startGame();
restartButton.addEventListener('click');