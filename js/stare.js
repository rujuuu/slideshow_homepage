const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");

const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame() {
    cells.forEach((cell, index) => {
        // Setting the cell index dynamically (if not set in HTML)
        cell.setAttribute("cellIndex", index);
        cell.addEventListener("click", cellClicked);
    });
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`; // Use backticks here
    running = true;
}

function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");

    // Prevent update if the cell is already filled or the game isn't running
    if (options[cellIndex] !== "" || !running) {
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index) {
    options[index] = currentPlayer;   // Update the options array with the current player's move
    cell.textContent = currentPlayer;  // Display the current player's symbol in the cell
}

function changePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";  // Toggle the player
    statusText.textContent = `${currentPlayer}'s turn`;  // Use backticks here
}

function checkWinner() {
    for (let condition of winCondition) {
        const [a, b, c] = condition;
        if (options[a] && options[a] === options[b] && options[a] === options[c]) {
            statusText.textContent = `${currentPlayer} wins!`; // Use backticks here
            running = false;
            disableCells();  // Disable the cells after the game ends
            return;
        }
    }

    // Check for a draw if all cells are filled and no winner
    if (!options.includes("")) {
        statusText.textContent = "It's a draw!";
        running = false;
        disableCells();  // Disable the cells after the game ends
    } else {
        changePlayer();  // Switch players if no winner and game is still ongoing
    }
}

function disableCells() {
    cells.forEach(cell => cell.classList.add("disabled"));  // Disable pointer events for all cells
}

function restartGame() {
    options = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    running = true;
    statusText.textContent = `${currentPlayer}'s turn`; // Use backticks here
    cells.forEach(cell => {
        cell.textContent = "";  // Clear all cells
        cell.classList.remove("disabled");  // Enable all cells for the next game
    });
}
