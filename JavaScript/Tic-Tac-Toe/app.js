const boxs = document.querySelectorAll('.box');
const statusText = document.querySelector('#statusText');
const restart = document.querySelector('#restart');

let x = '<ion-icon name="close-outline"></ion-icon>';
let o = '<ion-icon name="radio-button-off-outline"></ion-icon>';

const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 9],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = x;
let player = 'X';
let running = false;
init();

function init() {
    boxs.forEach((box => box.addEventListener('click', boxClick)));
    restart.addEventListener('click', restartGame);
    statusText.innerHTML = `${player} Your Turn`;
    running = true;
}

function boxClick() {

    const index = this.dataset.index;
    if (options[index] != "" || !running) {
        return;
    }
    updateBox(this, index);
}

function updateBox(box, index) {
    options[index] = player;
    box.innerHTML = currentPlayer;
}

function changePlayer() {

}

function restartGame() {

}